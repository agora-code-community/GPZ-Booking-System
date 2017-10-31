var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({

    booking_name: {
        type: String,
        required: true
    },

    organization: [{
      name: {
          type: String,
          required: true
      },
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
      },
      description: {
          type: String,
      }
    }],

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

    number_of_participants: {
      type: Number
    },

    dietary_requirements: {
      type: [String]
    },

    approved: {
      type: Boolean
    }

}, {
    timestamps: true
});

var SpaceSchema = new Schema({

    space_name: {
        type: String,
        required: true
    },

    times: {
      from: String,
      to: String
    },

    duration:{
      from: String,
      to: String
    },

    req_materials: {
      type: [String]
    },

    //TODO: Reference booking model
    booking: [{
      type: Schema.Types.ObjectId,
      ref: 'Booking'
    }]

}, {
    timestamps: true
});

var Booking = mongoose.model('Booking', BookingSchema);
var Space = mongoose.model('Space', SpaceSchema);

module.exports = Booking;
module.exports = Space;
