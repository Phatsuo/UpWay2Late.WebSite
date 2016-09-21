import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { IContact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public contacts: Array<IContact>;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getContacts()
            .subscribe(data => {
                this.contacts = data;
            });
    }
}
