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

// Get space bookings
exports.getSpaces = function(req, res, next){

    console.log("fetching space bookings");

    Space.find(function(err, spaces) {

        if (err){
            res.send(err);
        }

        res.json(spaces);

    });

}

// create a booking
exports.createBooking = function(req, res, next){

    console.log("creating booking");

    // NOTE: I believe this may all be shortened to "var booking = new Booking(req.body);" if the model structure and arrays are handeled on the front end Angular, but for now, it will be handled like this.

    var booking = new Booking({
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
    });

    booking.save(function(err, booking) {

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

// create a space booking
exports.createSpace = function(req, res, next){

    console.log("creating space booking");

    var space = new Space({
      space_name : req.body.booking_name,
      times : {
        times_from : req.body.times_from,
        times_to : req.body.times_to
      },
      duration : {
        $not: {
            $elemMatch: {
              duration_from: {
                $lt: req.body.duration_to.substring(0,10)
              },
              duration_to: {
                $gt: req.body.duration_from.substring(0,10)
              },
              times_from: {
                $lt: req.body.times_to.substring(0,10)
              },
              times_to: {
                $gt: req.body.times_from.substring(0,10)
              }
            }
        }
      },
      req_materials : req.body.req_materials,
      booking : booking._id
    });
    space.save(function(err, space) {

        if (err){
            res.send(err);
        }

        Space.find(function(err, spaces) {

            if (err){
                res.send(err);
            }

            res.json(spaces);

        });

    });

}

// update a booking
exports.updateBooking = function(req, res, next){

  console.log("updating booking");

  Booking.findById(req.params.bookingId, function(err, booking){
    if (err) {
        res.send(err);
    } else {
      booking.booking_name = req.body.booking_name || booking.booking_name;
      booking.organization = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        description : req.body.description
      } || booking.organization;
      booking.activity = {
        activity_name : req.body.activity_name,
        activity_type : req.body.activity_type,
        activity_description : req.body.activity_description
      } || booking.activity;
      booking.number_of_participants = req.body.number_of_participants || booking.number_of_participants;
      booking.dietary_requirements = req.body.dietary_requirements || booking.dietary_requirements;
      booking.approved = req.body.approved || booking.approved;

      booking.save(function(err, booking) {

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
}

// update a space booking
exports.updateSpace = function(req, res, next){

  console.log("updating space booking");

  Space.findById(req.params.spaceId, function(err, space){
    if (err) {
        res.send(err);
    } else {
      space.space_name = req.body.space_name || space.space_name;
      space.times = {
        from : req.body.times_from,
        to : req.body.times_to
      } || space.times;
      space.duration = {
        from : req.body.duration_from,
        to : req.body.duration_to
      } || space.duration;
      space.req_materials = req.body.req_materials || space.req_materials;
      space.booking = req.body.booking || space.booking;

      space.save(function(err, space) {

          if (err){
              res.send(err);
          }

          Space.find(function(err, spaces) {
              if (err){
                  res.send(err);
              }

              res.json(spaces);
          });

      });
  }
}

// delete a booking
exports.deleteBooking = function(req, res, next){

    console.log("deleting booking");

    Booking.remove({
        _id : req.params.booking_id
    }, function(err, bookings) {
        res.json(bookings);
    });

}

// delete a space booking
exports.deleteSpace = function(req, res, next){

    console.log("deleting space booking");

    Space.remove({
        _id : req.params.space_id
    }, function(err, spaces) {
        res.json(spaces);
    });

}
