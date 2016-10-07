import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-google-extension',
  templateUrl: './google-extension.component.html',
  styleUrls: ['./google-extension.component.css']
})
export class GoogleExtensionComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "Chrome Google Search Extension",
            "Chrome extension for Googling things with advanced options, and saving searches."
        );
    }
}