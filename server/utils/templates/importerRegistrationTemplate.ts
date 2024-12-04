const importerTemplate = (name: string) => `
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
              <p>Thank you for registering with Terra Sourcing! We are delighted to have you join our global network of trusted importers and exporters. At Terra Sourcing, we are committed to providing you with reliable, verified connections to Indian exporters and ensuring a seamless international trade experience.</p>

              <h1>What You Can Expect from Terra Sourcing:</h1>
              <ul>
                  <li><strong>Verified Exporter Connections:</strong> We rigorously verify all exporters using our four-level verification process to ensure you only engage with credible and reliable suppliers.</li>
                  <li><strong>Competitive International Quotations:</strong> Receive competitive quotes from trusted exporters, enabling you to find the best deals that suit your business needs.</li>
                  <li><strong>Risk-Free Trading:</strong> Our comprehensive verification system, supported by partnerships with chambers of commerce and industry bodies, ensures a transparent and risk-free trading environment.</li>
              </ul>

              <h1>Next Steps:</h1>
              <p><strong>Browse Exporter Profiles:</strong> Start exploring our network of verified exporters and send your inquiries directly through the platform.</p>
              <p><strong>Tailored Support:</strong> If you need any assistance in finding the right exporter, our support team is here to help. Reach out to us at <a href="mailto:contact@terrasourcing.com">contact@terrasourcing.com</a>.</p>
              <p><strong>Stay Informed:</strong> We will keep you updated with industry insights, special offers, and important trade information.</p>

              <p><a href="https://terrasourcing.com/#/importer/login" class="cta-button">Log in to your account</a></p>

              <h1>Download Your Free Sample Verification Report!</h1>
              <p>Curious to see how our lead verification process works? <a href="[Download Link]">Download</a> a sample verification report and learn how we ensure the reliability of every exporter connection.</p>

              <h1>Need Help?</h1>
              <p>Our dedicated support team is available to assist you with any questions. Contact us anytime at <a href="mailto:contact@terrasourcing.com">contact@terrasourcing.com</a> or call us at +91 9704226664.</p>

              <p>Best regards, <br>Terra Sourcing</p>
          </div>
          <div class="footer">
              <p><a href="https://terrasourcing.com">Terra Sourcing</a> | <a href="mailto:contact@terrasourcing.com">contact@terrasourcing.com</a> | +91 9704226664</p>
              <p>Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</p>
          </div>
      </div>
  </body>
  </html>
`;

export default importerTemplate
