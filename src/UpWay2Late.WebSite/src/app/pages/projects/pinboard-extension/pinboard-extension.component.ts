import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-pinboard-extension',
  templateUrl: './pinboard-extension.component.html',
  styleUrls: ['./pinboard-extension.component.css']
})
export class PinboardExtensionComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "Chrome Pinboard Extension - Bookmark Sync",
            "Chrome extension for syncing Pinboard bookmarks to the Google Chrome Bookmark Bar."
        );
    }
}