var Booking = require('../models/booking');
var Space = require('../models/booking');

// Get bookings
exports.getBookings = function(req, res, next){

    console.log("fetching bookings");

    Booking.find(function(err, bookings) {

        if (err){
            res.send(err);
        }

        res.json(bookings);

    });

}

// create a booking
exports.createBooking = function(req, res, next){

    console.log("creating booking");

    // NOTE: I believe this may all be shortened to "var booking = new Booking(req.body);" if the model structure and arrays are handeled on the front end Angular, but for now, it will be handled like this.
    Booking.create({
      booking_name : req.body.booking_name,
      organization : {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        description : req.body.description
      },
      activity : {
        activity_name : req.body.activity_name,
        activity_type : req.body.activity_type,
        activity_description : req.body.activity_description
      },
      number_of_participants : req.body.number_of_participants,
      dietary_requirements : req.body.dietary_requirements,
      approved : req.body.approved
    }, function(err, booking) {

        if (err){
            res.send(err);
        }

        Booking.find(function(err, bookings) {

            if (err){
                res.send(err);
            }

            res.json(bookings);

        });

    });

}

// update a booking
exports.updateBooking = function(req, res, next){

  console.log("updating booking");

  Booking.update({
    booking_name : req.body.booking_name,
    organization : {
      name : req.body.name,
      email : req.body.email,
      phone : req.body.phone,
      description : req.body.description
    },
    activity : {
      activity_name : req.body.activity_name,
      activity_type : req.body.activity_type,
      activity_description : req.body.activity_description
    },
    number_of_participants : req.body.number_of_participants,
    dietary_requirements : req.body.dietary_requirements,
    approved : req.body.approved
  }, function(err, booking) {
    res.json(booking);
  });
}

// delete a booking
exports.deleteBooking = function(req, res, next){

    console.log("deleting booking");

    Booking.remove({
        _id : req.params.booking_id
    }, function(err, booking) {
        res.json(booking);
    });

}

//TODO
//Check if any of the dates the room has been reserved for overlap with the requsted dates

/*
$not: {
    $elemMatch: {
      from: {
        $lt: req.body.to.substring(0,10)
      },
      to: {
        $gt: req.body.from.substring(0,10)
      }
    }
}
*/
