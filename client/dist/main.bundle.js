webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.css":
/***/ (function(module, exports) {

module.exports = "/* footer CSS */\r\n.footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 60px; /* Set the fixed height of the footer here */\r\n    line-height: 60px; /* Vertically center the text there */\r\n    background-color: #f5f5f5;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main app page layout -->\r\n\r\n<!-- loader -->\r\n<div class=\"wrapper\">\r\n  <div class=\"loader-bg\">\r\n    <div class=\"loader-bar\">\r\n  </div>\r\n</div>\r\n\r\n<!-- navbar -->\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <!-- side menu -->\r\n    <app-sidemenu></app-sidemenu>\r\n\r\n    <!-- content area -->\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n\r\n  <!-- footer -->\r\n  <!-- <footer class=\"footer\">\r\n    <div class=\"container text-center\">\r\n      <span class=\"text-muted\">Place sticky footer content here.</span>\r\n    </div>\r\n  </footer> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent() {
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
    };
    AppLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-layout',
            template: __webpack_require__("./src/app/_layout/app-layout/app-layout.component.html"),
            styles: [__webpack_require__("./src/app/_layout/app-layout/app-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "./src/app/_layout/login-layout/login-layout.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.bg {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#614385), to(#516395));\r\n    background: linear-gradient(#614385, #516395);\r\n}"

/***/ }),

/***/ "./src/app/_layout/login-layout/login-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is the layout of the login and registration page -->\r\n<div class=\"container-fluid bg\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/_layout/login-layout/login-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-layout',
            template: __webpack_require__("./src/app/_layout/login-layout/login-layout.component.html"),
            styles: [__webpack_require__("./src/app/_layout/login-layout/login-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- app's starting point -->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_login_layout_login_layout_component__ = __webpack_require__("./src/app/_layout/login-layout/login-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sidemenu_sidemenu_component__ = __webpack_require__("./src/app/components/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_view_all_view_all_component__ = __webpack_require__("./src/app/components/view-all/view-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_app_layout_app_layout_component__ = __webpack_require__("./src/app/_layout/app-layout/app-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_book_form_book_form_component__ = __webpack_require__("./src/app/components/book-form/book-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_event_service_service__ = __webpack_require__("./src/app/services/event-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_booking_service_service__ = __webpack_require__("./src/app/services/booking-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_edit_booking_edit_booking_component__ = __webpack_require__("./src/app/components/edit-booking/edit-booking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// routing links
var appRoutes = [
    // todo: move routing links to a separate file for cleaner look
    // Login routes goes here here
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__layout_login_layout_login_layout_component__["a" /* LoginLayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_13__layout_app_layout_app_layout_component__["a" /* AppLayoutComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'view-booking', component: __WEBPACK_IMPORTED_MODULE_12__components_view_all_view_all_component__["a" /* ViewAllComponent */] },
            { path: 'add-booking', component: __WEBPACK_IMPORTED_MODULE_14__components_book_form_book_form_component__["a" /* BookFormComponent */] },
            { path: 'edit-event/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_edit_booking_edit_booking_component__["a" /* EditBookingComponent */] },
        ]
    }
]; // ends routes
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layout_login_layout_login_layout_component__["a" /* LoginLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_view_all_view_all_component__["a" /* ViewAllComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layout_app_layout_app_layout_component__["a" /* AppLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_book_form_book_form_component__["a" /* BookFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_edit_booking_edit_booking_component__["a" /* EditBookingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__services_event_service_service__["a" /* EventServiceService */],
                __WEBPACK_IMPORTED_MODULE_16__services_booking_service_service__["a" /* BookingServiceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/book-form/book-form.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nlabel {\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/book-form/book-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Form to book a room or space -->\r\n<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h1 class=\"h2\">Add a Booking</h1>\r\n</div>\r\n\r\n<!-- Tabbed form -->\r\n<ngb-tabset #t=\"ngbTabset\" justify=\"justified\">\r\n  <!-- event tab -->\r\n    <ngb-tab title=\"Event details\">\r\n      <ng-template ngbTabContent>\r\n        <div class=\"border border-top-0 py-3 px-3\">\r\n\r\n            <form (ngSubmit)=\"onEvntSubmit(fm.value)\" #fm=\"ngForm\">\r\n              <div class=\"col-md-8 mb-3\">\r\n                <label for=\"evnt\">Event Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"evnt\" placeholder=\"\" ngModel name=\"name\" required>\r\n              </div>\r\n              <!-- <div class=\"col-md-8 mb-3\">\r\n                <label for=\"descp\">Event description</label>\r\n                <textarea class=\"form-control\" rows=\"3\" id=\"descp\" ngModel name=\"description\" required></textarea>\r\n              </div> -->\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Save and Continue</button>\r\n              </div>\r\n            </form>\r\n\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <!-- details tab -->\r\n    <ngb-tab title=\"Booking details\" id=\"details\">\r\n      <ng-template ngbTabContent>\r\n        <div class=\"border border-top-0 py-3 px-3\">\r\n\r\n          <form (ngSubmit)=\"onBookingSubmit(bookForm.value)\" #bookForm=\"ngForm\">\r\n            <h6 *ngIf=\"!event\">Please create an event before filling in this form</h6>\r\n            <div *ngIf=\"event\" class=\"col-md-8 mb-3\">\r\n              <label for=\"evnt\">Event ID:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"evnt\" name=\"event_id\" [(ngModel)]=\"event.id\" required readonly>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 mb-3\">\r\n                <label for=\"strt-date\">Date of event (start):</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                          name=\"start_date\" ngModel ngbDatepicker #d=\"ngbDatepicker\" required>\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                      <img src=\"../../../assets/icons/calendar.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-5 mb-3\">\r\n                <label for=\"end-date\">End date:</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                          name=\"end_date\" ngModel ngbDatepicker #e=\"ngbDatepicker\" required>\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"e.toggle()\" type=\"button\">\r\n                      <img src=\"../../../assets/icons/calendar.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 mb-3\">\r\n                <label for=\"strt\">Start Time:</label>\r\n                <ngb-timepicker ngModel name=\"start_time\"></ngb-timepicker>\r\n                <!-- <input type=\"email\" class=\"form-control\" id=\"strt\" ngModel name=\"strt_time\" placeholder=\"10:00\"> -->\r\n              </div>\r\n        \r\n              <div class=\"col-md-5 mb-3\">\r\n                <label for=\"end\">End Time:</label>\r\n                <ngb-timepicker ngModel name=\"end_time\"></ngb-timepicker>\r\n                <!-- <input type=\"text\" class=\"form-control\" id=\"end\" placeholder=\"12:00\" ngModel name=\"emd_time\" required> -->\r\n              </div>\r\n            </div>\r\n            \r\n            <!-- <div class=\"col-md-5 mb-3\">\r\n              <label for=\"space\">Room/Space booked: <small>Hold down <kbd>Ctrl</kbd> to select multiple</small></label>\r\n              <select multiple class=\"custom-select d-block w-100\" ngModel name=\"room\" id=\"space\" required>\r\n                <option *ngFor=\"let room of rooms\">{{room.name}}</option>\r\n                <option>-- Choose --</option>\r\n              </select>\r\n            </div> -->\r\n\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">Add Booking</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/book-form/book-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_booking_service_service__ = __webpack_require__("./src/app/services/booking-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service_service__ = __webpack_require__("./src/app/services/event-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(bservice, evntService, router) {
        this.bservice = bservice;
        this.evntService = evntService;
        this.router = router;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        this.initRooms();
    };
    // initialises the rooms
    BookFormComponent.prototype.initRooms = function () {
        var _this = this;
        this.bservice.getRooms().subscribe(function (data) {
            _this.rooms = data['rooms'];
        });
    };
    // Event form submitted
    BookFormComponent.prototype.onEvntSubmit = function (evnt) {
        var _this = this;
        // console.log(evnt);
        this.evntService.storeEvent(evnt).subscribe(function (data) {
            _this.event = data['event'];
        });
        this.t.select('details'); // selects the details tab after the posting
    };
    // booking details form submitted
    BookFormComponent.prototype.onBookingSubmit = function (data) {
        var _this = this;
        // format dates for object to string
        data.start_date = this.formatDate(data.start_date);
        data.end_date = this.formatDate(data.end_date);
        // formatted times
        data.start_time = this.formatTime(data.start_time);
        data.end_time = this.formatTime(data.end_time);
        // sends to the api
        this.bservice.storeBooking(data).subscribe(function (booking) {
            // on success
            if (booking) {
                console.log("Added successfully");
                _this.router.navigateByUrl('/view-booking');
            }
            else {
                console.log('Error occurred');
            }
        });
        console.log(data);
    };
    BookFormComponent.prototype.formatDate = function (date) {
        var year = date.year;
        var month = date.month;
        var day = date.day;
        return this.formattedDate = year + '-' + month + '-' + day; // date yyyy-mm-dd
    };
    BookFormComponent.prototype.formatTime = function (time) {
        return this.formattedTime = time.hour + ':' + time.minute + ':' + time.second;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('t'),
        __metadata("design:type", Object)
    ], BookFormComponent.prototype, "t", void 0);
    BookFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-form',
            template: __webpack_require__("./src/app/components/book-form/book-form.component.html"),
            styles: [__webpack_require__("./src/app/components/book-form/book-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_booking_service_service__["a" /* BookingServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__services_event_service_service__["a" /* EventServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- dashboard page -->\r\n\r\n<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h1 class=\"h2\">Dashboard</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <!-- Today's bookings card -->\r\n    <div class=\"card mb-4 box-shadow\">\r\n      <div class=\"card-body\">\r\n        <div class=\"d-flex justify-content-between align-items-center\">\r\n            <h5 class=\"card-title\">Today's bookings</h5>\r\n            <h3><span class=\"badge badge-pill badge-primary\">9</span></h3>\r\n        </div>\r\n        <p class=\"card-text\">\r\n          These are the events that have been booked for today - 30 March, 2018. (still static)\r\n        </p>\r\n        <!-- buttom -->\r\n        <div class=\"d-flex justify-content-end\">\r\n          <div class=\"btn-group\">\r\n            <button type=\"button\" class=\"btn btn-md btn-outline-secondary\">View</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- View booking card -->\r\n  <div class=\"col\">\r\n    <div class=\"card mb-4 box-shadow\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">View All booking</h5>\r\n        <p class=\"card-text\">\r\n          View all the bookings that have been created till date.\r\n        </p>\r\n        <!-- buttom -->\r\n        <div class=\"d-flex justify-content-end\">\r\n          <div class=\"btn-group\">\r\n            <a routerLink=\"/view-booking\" class=\"btn btn-md btn-outline-secondary\">View All</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- create booking card -->\r\n  <div class=\"col\">\r\n    <div class=\"card mb-4 box-shadow\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Create a new booking</h5>\r\n        <p class=\"card-text\">\r\n          Add new booking requests here by simply filling in the form.\r\n        </p>\r\n        <!-- buttom -->\r\n        <div class=\"d-flex justify-content-end\">\r\n            <div class=\"btn-group\">\r\n              <a routerLink=\"/add-booking\" class=\"btn btn-md btn-outline-secondary\">Add booking</a>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-booking/edit-booking.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-booking/edit-booking.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Form to book a room or space -->\r\n<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h1 class=\"h2\">Edit Event Booking</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4>Editing <small>Event name</small></h4>\r\n        <hr>\r\n        <!-- if $evnt is retrieved from db, show form -->\r\n        <div *ngIf=\"evnt\">\r\n          <form (ngSubmit)=\"onSubmit(fm.value)\" #fm=\"ngForm\">\r\n            <div class=\"col-md-8 mb-3\">\r\n              <label for=\"event\">Event Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"event\" name=\"name\" [(ngModel)]=\"evnt.name\" required>\r\n            </div>\r\n            <!-- <div class=\"col-md-8 mb-3\">\r\n              <label for=\"descp\">Event description</label>\r\n              <textarea class=\"form-control\" rows=\"3\" id=\"descp\" ngModel name=\"description\" required></textarea>\r\n            </div> -->\r\n            <div class=\"d-flex justify-content-center\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-booking/edit-booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service_service__ = __webpack_require__("./src/app/services/event-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBookingComponent = /** @class */ (function () {
    function EditBookingComponent(evntService, route, router) {
        this.evntService = evntService;
        this.route = route;
        this.router = router;
    }
    EditBookingComponent.prototype.ngOnInit = function () {
        // get id parameter from URL
        this.id = this.route.snapshot.params['id'];
        // call getEvent()
        this.getEvent(this.id);
    };
    /**
     * Gets specific event from db
     * @param id the event ID to be retrieved
     */
    EditBookingComponent.prototype.getEvent = function (id) {
        var _this = this;
        this.evntService.getAnEvent(id).subscribe(function (data) { return _this.evnt = data['event']; });
    };
    EditBookingComponent.prototype.onSubmit = function (data) {
        var _this = this;
        // send to API
        this.evntService.updateEvent(this.id, data).subscribe(function (data) {
            if (data) {
                console.log('UPDATED SUCCESSFULLY'); // TODO: change to alert message
                _this.router.navigateByUrl('/view-booking');
            }
            else {
                console.log('ERROR');
            }
        });
    };
    EditBookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-booking',
            template: __webpack_require__("./src/app/components/edit-booking/edit-booking.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-booking/edit-booking.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service_service__["a" /* EventServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditBookingComponent);
    return EditBookingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "/* CSS specific to login page */\r\n\r\n/* todo: add background image or color and gpz logo */\r\n\r\n.login-card {\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n\r\n.card:hover {\r\n    -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n    font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n    position: relative;\r\n    /* box-sizing: border-box; */\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    font-size: 0.7rem;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Login page -->\r\n<div class=\"pt-5\">\r\n  <div class=\"mx-auto card login-card\" style=\"width: 350px\">\r\n    <div class=\"card-body\">\r\n  \r\n      <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"logForm\">\r\n        <img class=\"mb-4 mx-auto d-block\" src=\"../../../assets/logo.png\" alt=\"Logo\" width=\"72\" height=\"72\">\r\n  \r\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n  \r\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" formControlName=\"email\" \r\n          placeholder=\"Email address\" required autofocus>\r\n        \r\n          <!-- error message -->\r\n        <small class=\"error\" *ngIf=\"!logForm.controls.email.valid && (logForm.controls.email.dirty)\" >\r\n          Invalid email, please enter valid email.\r\n        </small>\r\n          \r\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\r\n        \r\n        <!-- error message -->\r\n        <small class=\"error\" *ngIf=\"!logForm.controls.password.valid && (logForm.controls.password.dirty)\" >\r\n          Password must be 6 or more characters.\r\n        </small>\r\n\r\n        <div class=\"checkbox mb-3\">\r\n          <label>\r\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n          </label>\r\n        </div>\r\n  \r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n        <a routerLink=\"/dashboard\">Skip</a>\r\n  \r\n        <p class=\"mt-5 mb-3 justify-content-center text-muted\">Agora Code Community &copy;2018</p>\r\n      </form>\r\n    </div>\r\n      \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // initiating form group
        this.logForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]*')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])] // change minlenght to 6
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // submission of the login form
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.logForm.value);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "/* CSS specific to navbar */\r\n\r\n.navbar-brand {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n            box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n\r\n#collapsibleNavbar {\r\n    padding-left: .75rem;\r\n    padding-right: .75rem;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- App navbar -->\r\n<nav class=\"navbar navbar-dark sticky-top bg-dark navbar-expand-lg flex-md-nowrap p-0\">\r\n  <a class=\"navbar-brand col-sm-4 col-md-2 mr-0\" href=\"#\">Global Platform Zambia</a>\r\n\r\n  <!-- search bar -->\r\n  <!-- <input class=\"form-control form-control-dark w-100\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\"> -->\r\n\r\n  <!-- Toggler/collapsibe Button -->\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" \r\n    [attr.aria-expanded]=\"isCollapsed\" aria-controls=\"collapsibleNavbar\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!-- Navbar links -->\r\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapsibleNavbar\" [ngbCollapse]=\"!isCollapsed\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\">Hi User</a>\r\n      </li>\r\n    </ul>\r\n  </div> \r\n  <!-- links\r\n  <ul class=\"navbar-nav px-3\">\r\n    <li class=\"nav-item text-nowrap\">\r\n      <a class=\"nav-link\" href=\"#\">Sign out</a>\r\n    </li>\r\n  </ul> -->\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.css":
/***/ (function(module, exports) {

module.exports = "/* CSS specific to sidemenu */\r\n\r\n.sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100; /* Behind the navbar */\r\n    padding: 0;\r\n    -webkit-box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n            box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n\r\n.sidebar-sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 48px; /* Height of navbar */\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  }\r\n\r\n.sidebar .nav-link {\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n\r\n.sidebar .nav-link .feather {\r\n    margin-right: 4px;\r\n    color: #999;\r\n  }\r\n\r\n.sidebar .nav-link.active {\r\n    color: #007bff;\r\n  }\r\n\r\n.sidebar .nav-link:hover {\r\n    color: #999999;\r\n  }\r\n\r\n.sidebar .nav-link:hover .feather,\r\n  .sidebar .nav-link.active .feather {\r\n    color: inherit;\r\n  }\r\n\r\n.sidebar-heading {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n  }"

/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Side menu -->\r\n\r\n<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n  <div class=\"sidebar-sticky\">\r\n    <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n          <span data-feather=\"home\"></span>\r\n          Dashboard <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/view-booking\" routerLinkActive=\"active\">\r\n          <span data-feather=\"file\"></span>\r\n          View Bookings\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/add-booking\" routerLinkActive=\"active\">\r\n          <span data-feather=\"shopping-cart\"></span>\r\n          New Booking\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\">\r\n          <span data-feather=\"users\"></span>\r\n          Calendar View <small>(coming soon)</small>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n\r\n    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\r\n      <span>Saved reports</span>\r\n      <a class=\"d-flex align-items-center text-muted\" href=\"#\">\r\n        <span data-feather=\"plus-circle\"></span>\r\n      </a>\r\n    </h6>\r\n    <ul class=\"nav flex-column mb-2\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\">\r\n          <span data-feather=\"file-text\"></span>\r\n          Profile <small>(coming soon)</small>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidemenu',
            template: __webpack_require__("./src/app/components/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__("./src/app/components/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/view-all/view-all.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/view-all/view-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\r\n  <h1 class=\"h2\">All Bookings</h1>\r\n  <div class=\"btn-toolbar mb-2 mb-md-0\">\r\n    <div class=\"btn-group mr-2\">\r\n      <button class=\"btn btn-sm btn-outline-secondary\">Table</button>\r\n      <button class=\"btn btn-sm btn-outline-secondary\">Calendar</button>\r\n    </div>\r\n    <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\r\n      <span data-feather=\"calendar\"></span>\r\n      This Month\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<h5>All bookings</h5>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-sm\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Event name</th>\r\n        <th>Room/ Space</th>\r\n        <th>Dates</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let evnt of events\">\r\n        <td>{{ evnt.id }}</td>\r\n        <td>\r\n          <!-- show details button -->\r\n          <button type=\"button\" (click)=\"open(dits)\" class=\"btn btn-link\">{{ evnt.name }}</button>\r\n\r\n          <!-- details modal -->\r\n          <ng-template #dits let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Event details</h5>\r\n              <button type=\"button\" class=\"close\" aria-label=\"close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <h5>{{ evnt.name }} <small>booked by: Organisation</small></h5>\r\n              <ul>\r\n                <li>Start date - end date</li>\r\n                <li>Start time - end time</li>\r\n                <li>Rooms booked</li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-md btn-primary\" (click)=\"c('Close click')\">Cancel</button>\r\n            </div>\r\n          </ng-template>\r\n\r\n        </td>\r\n        <td> Room comes here </td>\r\n        <td>Dates</td>\r\n        <td>\r\n          <a routerLink=\"/edit-event/{{ evnt.id }}\" class=\"btn btn-sm btn-primary\"> Edit</a> |\r\n          <button type=\"button\" (click)=\"open(content)\" class=\"btn btn-sm btn-danger\">Delete</button>\r\n\r\n          <!-- delete modal -->\r\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Confirm Deletion</h5>\r\n              <button type=\"button\" class=\"close\" aria-label=\"close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this event({{ evnt.id }}) permanently?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-md btn-secondary\" (click)=\"c('Close click')\">Cancel</button>\r\n              <button type=\"button\"  class=\"btn btn-md btn-danger\" (click)=\"deleteEvnt(evnt.id)\">OK</button>\r\n            </div>\r\n          </ng-template>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/view-all/view-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service_service__ = __webpack_require__("./src/app/services/event-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAllComponent = /** @class */ (function () {
    function ViewAllComponent(eventServ, modalService) {
        this.eventServ = eventServ;
        this.modalService = modalService;
    }
    ViewAllComponent.prototype.ngOnInit = function () {
        this.getEvents(); // gets events
    };
    ViewAllComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    /**
     * Gets the stored events from the db
     */
    ViewAllComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventServ.getAllEvents().subscribe(function (data) { return _this.events = data['events']; });
    };
    // not yet implemented in API
    ViewAllComponent.prototype.deleteEvnt = function (id) {
        this.eventServ.deleteEvent(id).subscribe(function (data) {
            if (data)
                console.log(data); // prints to the console
            // todo: update view on delete
        });
    };
    ViewAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-all',
            template: __webpack_require__("./src/app/components/view-all/view-all.component.html"),
            styles: [__webpack_require__("./src/app/components/view-all/view-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service_service__["a" /* EventServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], ViewAllComponent);
    return ViewAllComponent;
}());



/***/ }),

/***/ "./src/app/services/booking-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingServiceService = /** @class */ (function () {
    function BookingServiceService(http) {
        this.http = http;
        // variables
        this.baseURL = 'https://agora-booking-system.herokuapp.com/api/bookings/';
        this.contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    // gets the rooms from the db
    BookingServiceService.prototype.getRooms = function () {
        return this.http.get('https://agora-booking-system.herokuapp.com/api/rooms/all');
    };
    /**
     * Stores a booking
     * @param data the booking input data
     */
    BookingServiceService.prototype.storeBooking = function (data) {
        return this.http.post(this.baseURL, data, { headers: this.contentHeaders });
    };
    BookingServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookingServiceService);
    return BookingServiceService;
}());



/***/ }),

/***/ "./src/app/services/event-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventServiceService = /** @class */ (function () {
    function EventServiceService(http) {
        this.http = http;
        this.baseURL = 'https://agora-booking-system.herokuapp.com/api/events/';
        this.contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
    }
    /**
     * Get all the events
     */
    EventServiceService.prototype.getAllEvents = function () {
        return this.http.get(this.baseURL + 'all');
    };
    /**
     * Get particalur event
     */
    EventServiceService.prototype.getAnEvent = function (id) {
        return this.http.get(this.baseURL + id);
    };
    /**
     * Saves an event into the db
     * @param data the event input data
     */
    EventServiceService.prototype.storeEvent = function (data) {
        return this.http.post(this.baseURL, data, { headers: this.contentHeaders });
    };
    /**
     * Updates an event
     * @param event_id event id to be updated
     * @param data the updated input data
     */
    EventServiceService.prototype.updateEvent = function (event_id, data) {
        return this.http.put(this.baseURL + event_id, data, { headers: this.contentHeaders });
    };
    /**
     * Deletes an event
     * @param event_id the event's id
     */
    EventServiceService.prototype.deleteEvent = function (event_id) {
        return this.http.delete(this.baseURL + event_id);
    };
    EventServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EventServiceService);
    return EventServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map