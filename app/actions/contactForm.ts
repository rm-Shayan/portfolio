'use server';

import { transporter, getEmailTemplate } from '../../lib/mail';

export async function sendEmail(formData: {
    name: string;
    email: string;
    projectType: string;
    details: string;
}) {
    const { name, email, projectType, details } = formData;

    if (!name || !email || !details) {
        return { success: false, message: 'Please fill in all required fields.' };
    }

    // Explicit check for placeholders
    if (process.env.EMAIL_USER?.includes('your-email') || process.env.EMAIL_PASS?.includes('your-app-password')) {
        return { 
            success: false, 
            message: 'Email credentials are not configured in .env. Please replace the placeholders with your real Gmail and App Password.' 
        };
    }

    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `🚀 [RMS.DEV] New Project Inquiry: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nDetails: ${details}`,
            html: getEmailTemplate(name, email, projectType, details),
        };

        await transporter.sendMail(mailOptions);

        return { success: true, message: 'Message Sent! ✔' };
    } catch (error: any) {
        console.error('Email error:', error);
        return { success: false, message: 'Error sending message. Check your .env configuration.' };
    }
}
