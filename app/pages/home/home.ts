import {ContactsService} from "../../providers/contacts-service/contacts.service";
import {DetailsPage} from "../details-page/details-page";
import {Page, NavController} from 'ionic-angular';
import { OnInit } from '@angular/core';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [ContactsService]
})
export class HomePage implements OnInit {
  public contacts;

  constructor(private _contactsService: ContactsService,
              private _navController: NavController) {
  }

  ngOnInit():any {
    this.contacts = this._contactsService.getData();
  }

  // goToDetails(repo:any){
  //   this._navController.push(DetailsPage, { repo: repo });
  // }

  // getRepos() {
  //
  // }

}
