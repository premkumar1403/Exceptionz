const mongoose = require("mongoose");

const exceptionzSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String }
});

const exceptionz = mongoose.model("exceptionz", exceptionzSchema);

const exceptionzModel = {
    contactUs: async (name, email, subject, message) => {
        return await exceptionz.insertOne({ name, email, subject, message });
    }
}
module.exports = exceptionzModel;