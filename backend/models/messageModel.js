const mongoose = require("mongoose");
const messageModel = mongoose.Schema(
  {
    Sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timestamp: true,
  }
);
const Message = mongoose.model("Message", messageModel);
modeule.exports = Messsage;
