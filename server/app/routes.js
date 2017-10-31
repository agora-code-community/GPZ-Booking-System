var AuthenticationController = require('./controllers/authentication'),
    BookingController = require('./controllers/bookings'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        bookingRoutes = express.Router();

        // Auth Routes
        apiRoutes.use('/auth', authRoutes);

        authRoutes.post('/registeruser', requireAuth, AuthenticationController.roleAuthorization(['admin']), AuthenticationController.register);
        authRoutes.post('/login', requireLogin, AuthenticationController.login);

        authRoutes.get('/protected', requireAuth, function(req, res){
            res.send({ content: 'Success'});
        });

        // Booking Routes 
        // May not be needed as the authRoutestake care of access to bookings, but have been included for future-proofing and maintainability
        apiRoutes.use('/bookings', bookingRoutes);

        bookingRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['user', 'admin']), BookingController.getBookings);
        bookingRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['user', 'admin']), BookingController.createBooking);
        bookingRoutes.put('/:booking_id', requireAuth, AuthenticationController.roleAuthorization(['user', 'admin']), BookingController.updateBooking);
        bookingRoutes.delete('/:booking_id', requireAuth, AuthenticationController.roleAuthorization(['user', 'admin']), BookingController.deleteBooking);

        // Set up routes
        app.use('/api', apiRoutes);

    }
