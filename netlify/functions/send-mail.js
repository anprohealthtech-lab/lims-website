// Netlify Serverless Function to send emails via Resend API
export async function handler(event) {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: '',
        };
    }

    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ success: false, error: 'Method not allowed' }),
        };
    }

    try {
        const data = JSON.parse(event.body);

        if (!data) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ success: false, error: 'No data received' }),
            };
        }

        const { name, email, phone, labName, type, labStatus, launchTimeline, city, sampleLoad } = data;

        // Construct email body based on status
        let detailsHtml = '';
        if (labStatus === 'New Lab') {
            detailsHtml = `
                <p><strong>Status:</strong> Planning New Lab</p>
                <p><strong>Launch Timeline:</strong> ${launchTimeline || 'Not specified'}</p>
            `;
        } else if (labStatus === 'Existing Lab') {
            detailsHtml = `
                <p><strong>Status:</strong> Existing Lab</p>
                <p><strong>Lab Name:</strong> ${labName || 'Not specified'}</p>
                <p><strong>City:</strong> ${city || 'Not specified'}</p>
                <p><strong>Sample Load:</strong> ${sampleLoad || 'Not specified'}</p>
            `;
        } else {
            detailsHtml = `<p><strong>Lab Name:</strong> ${labName || 'Not specified'}</p>`;
        }

        const emailHtml = `
            <h2>New Lead Generated</h2>
            <p><strong>Source:</strong> ${type || 'Inquiry'}</p>
            <p><strong>Name:</strong> ${name || 'Not specified'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
            <p><strong>Email:</strong> ${email || 'Not specified'}</p>
            <hr>
            <h3>Lab Details</h3>
            ${detailsHtml}
        `;

        // Send email via Resend API
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'leads@bestpathologylab.in',
                to: ['anprohealthtech@gmail.com'],
                subject: `New LIMS Lead: ${name || 'Unknown'}`,
                html: emailHtml,
            }),
        });

        if (response.ok) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({ success: true }),
            };
        } else {
            const errorData = await response.text();
            console.error('Resend API error:', errorData);
            return {
                statusCode: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({ success: false, error: 'Failed to send email', details: errorData }),
            };
        }
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ success: false, error: error.message }),
        };
    }
}
