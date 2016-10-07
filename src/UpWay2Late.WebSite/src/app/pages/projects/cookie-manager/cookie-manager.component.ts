import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-cookie-manager',
  templateUrl: './cookie-manager.component.html',
  styleUrls: ['./cookie-manager.component.css']
})
export class CookieManagerComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "Awesome Cookie Manager",
            "The Awesome Cookie Manager lets the user manage cookies in Google Chrome."
        );
    }
}