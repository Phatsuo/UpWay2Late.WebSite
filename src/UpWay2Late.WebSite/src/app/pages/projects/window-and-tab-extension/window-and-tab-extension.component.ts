import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-window-and-tab-extension',
  templateUrl: './window-and-tab-extension.component.html',
  styleUrls: ['./window-and-tab-extension.component.css']
})
export class WindowAndTabExtensionComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "Awesome Window and Tab Manager",
            "The Awesome Window and Tab Manager allows you to manage all Chrome windows and tabs."
        );
    }
}