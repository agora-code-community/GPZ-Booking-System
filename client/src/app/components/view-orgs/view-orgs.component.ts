import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../services/organisation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-view-orgs',
  templateUrl: './view-orgs.component.html',
  styleUrls: ['./view-orgs.component.css']
})
export class ViewOrgsComponent implements OnInit {

  orgs: any;
  showSpinner = true;

  // form variables
  name: string;
  email: string;
  phone_number: number;
  description: string;

  constructor(
    private orgService: OrganisationService,
    private modalService: NgbModal,
    private flashmessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.getOrgs(); // gets the orgs on init
  }

  getOrgs() {
    this.orgService.getAllOrganizations().subscribe(
      data => {
        this.orgs = data['organization']; // store in variable
        this.showSpinner = false; // disable load spinner
      },
      error => {
        // show success alert message
        this.flashmessages.show('An error occurred, plpease refresh the page.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
        console.log(error);
      }
    );
  }

  /**
   * Opens and displays the details modal
   * @param details modal template of modal
   */
  view(details) {
    this.modalService.open(details).result.then((result) => {
      console.log(result);
    });
  }

  openEdit(content, org) {
    this.modalService.open(content).result.then((result) => {
      if (result !== undefined) {
        this.updateOrg(org.id, result);
      } else {
        console.log('canceled');
      }
    });

    // initializing update form
    this.name = org.name;
    this.email = org.email;
    this.phone_number = org.phone_number;
    this.description = org.description;
  }

   /**
   * Opens and displays the delete modal
   * @param content this is the template reference variable of the delete modal
   */
  open(content) {
    this.modalService.open(content).result.then((result) => {
      // call delete method here
      this.deleteOrg(result);
    });
  }

  /**
   * Updates the organization details in DB
   * @param id of organization being update
   * @param org data from the submitted form
   */
  updateOrg(id, org) {
    this.orgService.updateOrg(id, org).subscribe(
      data => {
        this.flashmessages.show('Organization Details have been successfully updated.', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });

        // TODO: find better implementation for updating UI on update
        this.getOrgs(); // poorman's refresh
      },
      err => {
        this.flashmessages.show('An error occurred, please try again.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
      }
    );
  }

  /**
   * Deletes an organization from the system
   * @param id of the organization to be deleted
   */
  deleteOrg(id) {
    this.orgService.deleteOrg(id).subscribe(data => {
      if (data === null) {
        // show success alert message
        this.flashmessages.show('Organization record was successfully deleted', {
          classes: ['alert', 'alert-success'],
          timeout: 3000
        });
        // updates view
        this.getOrgs();

      } else {
        // error message
        this.flashmessages.show('Oops! Something went wrong, could not delete the record. Try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        });
      }
    });
  }

}
