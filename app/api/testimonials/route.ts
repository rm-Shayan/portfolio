import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { put, list } from '@vercel/blob';

const DATA_PATH = path.join(process.cwd(), 'data', 'testimonials.json');

// Helper to get initials from name
const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

export async function GET() {
    try {
        // Try to fetch from Vercel Blob first
        if (process.env.BLOB_READ_WRITE_TOKEN) {
            try {
                const { blobs } = await list();
                const testimonialBlob = blobs.find(b => b.pathname === 'testimonials.json');
                
                if (testimonialBlob) {
                    const response = await fetch(testimonialBlob.url, { cache: 'no-store' });
                    if (response.ok) {
                        const testimonials = await response.json();
                        return NextResponse.json(Array.isArray(testimonials) ? testimonials : []);
                    }
                }
            } catch (blobError) {
                console.error('Blob read error, falling back to local:', blobError);
            }
        }

        // Fallback to local JSON file
        try {
            const fileData = await fs.readFile(DATA_PATH, 'utf-8');
            const testimonials = JSON.parse(fileData || '[]');
            return NextResponse.json(Array.isArray(testimonials) ? testimonials : []);
        } catch (fsError) {
            console.error('Local file read error:', fsError);
            return NextResponse.json([], { status: 200 });
        }
    } catch (error) {
        console.error('General testimonials error:', error);
        return NextResponse.json([], { status: 200 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name,  role, text, stars } = body;

        if (!name || !role || !text) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newTestimonial = {
            id: Date.now().toString(),
            name,
            role,
            text,
            stars: stars || 5,
            initials: getInitials(name),
            createdAt: new Date().toISOString(),
        };

        // Read current data
        let testimonials = [];
        try {
            if (process.env.BLOB_READ_WRITE_TOKEN) {
                const { blobs } = await list();
                const testimonialBlob = blobs.find(b => b.pathname === 'testimonials.json');
                if (testimonialBlob) {
                    const response = await fetch(testimonialBlob.url, { cache: 'no-store' });
                    if (response.ok) {
                        const data = await response.json();
                        testimonials = Array.isArray(data) ? data : [];
                    }
                }
            } else {
                try {
                    const fileData = await fs.readFile(DATA_PATH, 'utf-8');
                    const data = JSON.parse(fileData || '[]');
                    testimonials = Array.isArray(data) ? data : [];
                } catch (fsErr) {
                    testimonials = [];
                }
            }
        } catch (e) {
            console.error('Error reading current data:', e);
            testimonials = [];
        }

        testimonials.unshift(newTestimonial);

        // Write back
        if (process.env.BLOB_READ_WRITE_TOKEN) {
            await put('testimonials.json', JSON.stringify(testimonials, null, 2), {
                access: 'public',
                addRandomSuffix: false,
                contentType: 'application/json',
            });
        } else {
            // Local development fallback
            await fs.writeFile(DATA_PATH, JSON.stringify(testimonials, null, 2));
        }

        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        console.error('Error saving testimonial:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
