import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "UpWay2Late.com Privacy Policy",
            "UpWay2Late.com privacy policy."
        );
    }
}