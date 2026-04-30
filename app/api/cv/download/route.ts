import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    const filePath = join(process.cwd(), 'public', 'mern.cv.pdf');
    const fileBuffer = await readFile(filePath);

    const response = new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Rao_Muhammad_Shayan_CV.pdf"',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });

    return response;
  } catch (error) {
    console.error('Error downloading CV:', error);
    return NextResponse.json(
      { error: 'Failed to download CV' },
      { status: 500 }
    );
  }
}
