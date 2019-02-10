import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoomsService } from '../../services/rooms.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: any;
  showSpinner = true;  // shows the loader

  // form variable
  name: string;
  nm: string;

  constructor(
    private roomService: RoomsService,
    private modalService: NgbModal,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRooms();
  }

  /**
   * Gets all rooms from the DB
   */
  getRooms() {
    this.roomService.getAllRooms().subscribe(data => {
      this.showSpinner = false;  // stops showing the spinner

      this.rooms = data['rooms'];
    },
    err => { console.log(err); }); // logs error
  }

  /**
   * Opens and displays the room-form modal
   * @param content this is the template reference variable of the delete modal
   */
  openForm(content) {
    this.modalService.open(content).result.then((result) => { // result can contain form obj or string depending on the button clicked
      // check if form have been sent or not
      if (result.name !== undefined) {
        this.onSubmit(result); // submit to database
      }
    });
  }

   /**
   * Opens and displays the room-form modal
   * @param content this is the template reference variable of the delete modal
   */
  openEdit(content, room) {
    this.modalService.open(content).result.then((result) => {
      if (result !== undefined) {
        // console.log(result);
        this.updateRoom(room.id, result);
      } else {
        console.log('Cancelled!!!!');
      }
    });

    this.name = room.name; // initializes the room name for edit
  }

  /**
   * Opens and displays the delete modal
   * @param content this is the template reference variable of the delete modal
   */
  openDelete(content) {
    this.modalService.open(content).result.then((result) => {
      // TODO: Find better implementation, if any
      if (result !== undefined) {
        this.deleteRoom(result); // calls actually delete function
      }
    });
  }

  /**
   * Submits a user-input data into the database
   * @param data user input on the room details
   */
  onSubmit(data) {
    this.roomService.storeRoom(data).subscribe(
      result => {
        this.getRooms();

        this.nm = '';

        this.flashMessages.show('Room has been successfully created', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });
      },
      err => { console.log(err); }
    );
  }

  /**
   * Updates the room details
   * @param id ID of the room being edited
   * @param room Data from the edit form
   */
  updateRoom(id, room) {
    this.roomService.updateRoom(id, room).subscribe(
      data => {
        this.flashMessages.show('Details have been successfully updated.', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });

        // TODO: find better implementation for updating UI on update
        this.getRooms(); // poorman's refresh
      },
      err => { console.log(err); }
    );
  }

  /**
   * Deletes a booking room from the DB
   * @param id of the room being deleted
   */
  deleteRoom(id) {
    console.log(id);
    this.roomService.deleteRoom(id).subscribe(
      data => {
        this.flashMessages.show('Room has been successfully deleted', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });

        // TODO: find better implementation for updating UI on update
        this.getRooms();
      },
      err => {
        this.flashMessages.show('Oops! An error occurred, please try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
        console.log(err);
      }
    );
  }

}
