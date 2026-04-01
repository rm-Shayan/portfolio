import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL (requires port 465)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const getEmailTemplate = (name: string, email: string, projectType: string, details: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #020508;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #f1f5f9;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #0a0e14;
            border: 1px solid #1e293b;
            padding: 0;
            overflow: hidden;
        }
        .header {
            background-color: #0f172a;
            padding: 40px;
            text-align: center;
            border-bottom: 2px solid #00f5ff;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #00f5ff;
            font-weight: 900;
        }
        .content {
            padding: 40px;
        }
        .section-title {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #64748b;
            margin-bottom: 24px;
            font-weight: 700;
        }
        .grid {
            margin-bottom: 32px;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-size: 11px;
            color: #00f5ff;
            text-transform: uppercase;
            font-weight: 800;
            margin-bottom: 4px;
        }
        .value {
            font-size: 16px;
            font-weight: 500;
            color: #f8fafc;
        }
        .message-box {
            background-color: #020508;
            border: 1px solid #1e293b;
            padding: 24px;
            font-size: 15px;
            line-height: 1.6;
            color: #cbd5e1;
            white-space: pre-wrap;
        }
        .footer {
            padding: 30px;
            text-align: center;
            background-color: #020508;
            border-top: 1px solid #1e293b;
        }
        .footer p {
            margin: 0;
            font-size: 12px;
            color: #475569;
        }
        .brand {
            font-weight: 900;
            color: #00f5ff;
            font-size: 14px;
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Project Inquiry</h1>
        </div>
        <div class="content">
            <div class="section-title">Inquiry Details</div>
            
            <div class="grid">
                <div class="field">
                    <div class="label">Client Name</div>
                    <div class="value">${name}</div>
                </div>
                <div class="field">
                    <div class="label">Contact Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #00f5ff; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                    <div class="label">Project Interest</div>
                    <div class="value">${projectType || 'General Inquiry'}</div>
                </div>
            </div>

            <div class="label">Inquiry Details</div>
            <div class="message-box">
                ${details}
            </div>
        </div>
        <div class="footer">
            <div class="brand">RMS.DEV</div>
            <p>&copy; ${new Date().getFullYear()} Rao Muhammad Shayan Portfolio System</p>
        </div>
    </div>
</body>
</html>
`;
