// EmailTemplate.js
export const EmailTemplate = ({ name, email, message }) => `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333333;
          font-size: 24px;
          margin-bottom: 20px;
          text-align: center;
        }
        p {
          line-height: 1.6;
          margin: 10px 0;
          color: #555555;
        }
        .footer {
          margin-top: 30px;
          font-size: 0.9em;
          color: #777777;
          text-align: center;
        }
        .message {
          background-color: #e9f7ef;
          border-left: 5px solid #38a169;
          padding: 15px;
          margin: 20px 0;
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>New Message from Your Portfolio</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div class="message">${message}</div>
        <p class="footer">Thank you for reaching out!</p>
      </div>
    </body>
  </html>
`;
