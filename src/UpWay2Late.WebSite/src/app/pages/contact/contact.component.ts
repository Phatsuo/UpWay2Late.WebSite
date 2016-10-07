import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';
import { DataService } from '../../services/data.service';

import { IContact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public contacts: Array<IContact>;

    constructor(
        private dataService: DataService, private metaService: MetaService
    ) { }

    ngOnInit() {
        this.metaService.setMeta(
            "UpWay2Late.com Contacts",
            "UpWay2Late.com email address list."
        );
        this.dataService.getContacts()
            .subscribe(data => {
                this.contacts = data;
            });
    }
}
