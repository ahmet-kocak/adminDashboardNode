const mongoose = require("mongoose");

const Notification = mongoose.model(
  "Notification",
  new mongoose.Schema({
    email: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    status: { type: String, trim: true, default:"" },
    user_id: { type: mongoose.Schema.Types.ObjectId },
    notification_name: { type: String, required: true, trim: true },
    notification_code: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  }, 
  {
    timestamps: true
  }
  )
)

module.exports = Notification

