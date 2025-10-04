const exceptionzModel = require("../model/exceptionz");
const sendMail = require("../service/mail.config");


const exceptionz = {
    contactUs : async(req, res) => {
        const { name, email, subject, message } = req.body;
        const response = await exceptionzModel.contactUs(name, email, subject, message);
        console.log(response);
        
        await sendMail(response.name,response.email,response.subject, response.message );
        res.status(200).json({ data: response, message: "It works successfully!" });
    }
}
module.exports = exceptionz;