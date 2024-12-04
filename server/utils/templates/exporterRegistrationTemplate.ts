const exporterTemplate = (name: string) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #0073E6;
                color: #ffffff;
                padding: 20px;
                text-align: center;
            }
            .header img {
                max-width: 150px;
                height: auto;
            }
            .content {
                padding: 20px;
            }
            .content h1 {
                color: #0073E6;
                font-size: 24px;
                margin-top: 0;
            }
            .content p {
                font-size: 16px;
                line-height: 1.5;
                margin-bottom: 20px;
            }
            .cta-button {
                display: inline-block;
                padding: 10px 20px;
                font-size: 16px;
                color: #ffffff;
                background-color: #0073E6;
                border-radius: 5px;
                text-decoration: none;
                text-align: center;
            }
            .cta-button:hover {
                background-color: #005bb5;
            }
            .footer {
                background-color: #f4f4f4;
                padding: 20px;
                text-align: center;
                font-size: 14px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="https://terrasourcing.com/white-logo.png" alt="Terra Sourcing">
            </div>
            <div class="content">
                <h1>Welcome to Terra Sourcing!</h1>
                <p>Dear ${name},</p>
                <p>Thank you for registering with Terra Sourcing! We’re excited to have you join our growing network of verified exporters and importers. At Terra Sourcing, we are dedicated to helping you connect with genuine, verified importers from around the world, ensuring that your export business thrives.</p>

                <h1>What You Can Expect from Terra Sourcing:</h1>
                <ul>
                    <li><strong>Genuine Leads:</strong> Access leads that have been thoroughly verified using our four-level verification process, ensuring that the buyers you connect with are authentic and ready to engage.</li>
                    <li><strong>Logistics Support:</strong> We provide end-to-end support, including logistics assistance, to help you streamline your trade operations.</li>
                    <li><strong>Negotiation Assistance:</strong> Our team is available to support you in negotiating the best deals with importers, helping you secure profitable contracts.</li>
                </ul>

                <h1>Next Steps:</h1>
                <p><strong>Explore Verified Importer Profiles:</strong> Log in to your account and start browsing through our network of verified importers. These are leads tailored to your export needs, saving you time and effort.</p>
                <p><strong>Reach Out to Importers:</strong> Send inquiries directly to importers who match your product categories and regions of interest.</p>
                <p><strong>Tailored Support:</strong> If you have any questions or need assistance, our support team is here to guide you through the platform and help you connect with the right buyers.</p>

                <p><a href="https://terrasourcing.com/#/exporter/login" class="cta-button">Log in to your account</a></p>

                <h1>Download a Sample Verification Report!</h1>
                <p>Curious to see how we verify leads? <a href="[Download Link]">Download</a> a sample verification report to learn more about our four-level verification process and how it ensures that every lead you receive is genuine and relevant.</p>

                <h1>Need Help?</h1>
                <p>Our dedicated support team is always available to assist you. Feel free to reach out to us at <a href="mailto:contact@terrasourcing.com">contact@terrasourcing.com</a> or call us at +91 9704226664 for any questions or assistance.</p>

                <p>Best regards,<br>Terra Sourcing</p>
            </div>
            <div class="footer">
                <p><a href="https://terrasourcing.com">Terra Sourcing</a> | <a href="mailto:contact@terrasourcing.com">contact@terrasourcing.com</a> | +91 9704226664</p>
                <p>Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</p>
            </div>
        </div>
    </body>
    </html>

`;

export default exporterTemplate;
