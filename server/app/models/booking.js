var mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({

    booking_name: {
        type: String,
        required: true
    },

    organization: [{
      email: {
          type: String,
          lowercase: true,
          unique: true,
          required: true
      },
      phone: {
        type: String,
        lowercase: true,
        required: true
      }
      description: {
          type: String,
      }
    }],

    times: {
      from: String,
      to: String
    },

    duration:{
      from: Date,
      to: Date
    },

    activity: [{
      activity_name: {
        type: String,
        required: true
      },
      activity_type: {
        type: String
      },
      activity_description: {
        type: String
      }
    }],

    space: {
      type: String
    },

    number_of_participants: {
      type: Number
    },

    materials: {
      [String]
    },

    dietary_requirements: {
      [String]
    },

    approved: {
      type: Boolean
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);
