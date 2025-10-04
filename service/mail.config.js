const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_NAME,
    pass: process.env.MAIL_AUTH,
  },
}); 

const sendMail = async (name, email, subject, message) => {
   const info = await transporter.sendMail({
     from: '"Exceptionz"<kumarprem75715@gmail.com>',
     to: "premkumar21cse@gmail.com",
     cc: "exceptionzofficial@gmail.com",
     subject: subject,
     html: `
       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
         <div style="max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
           <div style="background-color: #4CAF50; color: white; padding: 16px; text-align: center;">
             <h2 style="margin: 0;">New Client Message - Exceptionz</h2>
           </div>
           <div style="padding: 20px;">
             <p style="font-size: 16px; margin: 0 0 10px 0;">
               <strong>Name:</strong> ${name}
             </p>
             <p style="font-size: 16px; margin: 0 0 10px 0;">
               <strong>Email:</strong> ${email}
             </p>
             <p style="font-size: 16px; margin: 0 0 10px 0;">
               <strong>Message:</strong>
             </p>
             <div style="background: #f9f9f9; border-left: 4px solid #4CAF50; padding: 12px; margin-top: 8px;">
               <p style="margin: 0;">${message}</p>
             </div>
           </div>
           <div style="background-color: #f1f1f1; padding: 12px; text-align: center; font-size: 14px; color: #777;">
             <p style="margin: 0;">
               This email was sent from the Exceptionz contact form.
             </p>
           </div>
         </div>
       </div>
     `,
   });
    console.log(info.messageId);
    
}

module.exports = sendMail;