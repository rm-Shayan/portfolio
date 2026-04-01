import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

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
        const fileData = await fs.readFile(DATA_PATH, 'utf-8');
        const testimonials = JSON.parse(fileData);
        return NextResponse.json(testimonials);
    } catch (error) {
        console.error('Error reading testimonials:', error);
        return NextResponse.json([], { status: 200 }); // Return empty array on error (e.g. file not found)
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, role, text, stars } = body;

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
            const fileData = await fs.readFile(DATA_PATH, 'utf-8');
            testimonials = JSON.parse(fileData);
        } catch (e) {
            // If file doesn't exist, we'll start with empty array
        }

        testimonials.unshift(newTestimonial); // Add newest at logical top

        // Write back
        await fs.writeFile(DATA_PATH, JSON.stringify(testimonials, null, 2));

        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        console.error('Error saving testimonial:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
