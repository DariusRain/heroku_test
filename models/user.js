const mongoose = require('mongoose'),
UserSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required:true,
            unique: true
        },
        online: {
            type: Boolean,
            default: false
        },
        gitid: {
            type: Number,
            unique: true
        },
        registerDate: {
            type: Date,
            date: Date.now
        }

    }
)

module.exports = mongoose.model('User', UserSchema);