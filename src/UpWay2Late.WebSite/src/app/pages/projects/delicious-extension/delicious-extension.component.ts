import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-delicious-extension',
  templateUrl: './delicious-extension.component.html',
  styleUrls: ['./delicious-extension.component.css']
})
export class DeliciousExtensionComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "Chrome Delicious Extension - Bookmark Sync",
            "Chrome extension for syncing Delicious bookmarks to the Google Chrome Bookmark Bar."
        );
    }
}