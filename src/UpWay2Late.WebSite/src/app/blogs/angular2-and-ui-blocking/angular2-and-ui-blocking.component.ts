import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-angular2-and-ui-blocking',
  templateUrl: './angular2-and-ui-blocking.component.html',
  styleUrls: ['./angular2-and-ui-blocking.component.css']
})
export class Angular2AndUiBlockingComponent implements OnInit {

    title: string = "Angular 2 Applications with UI Blocking";

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            this.title,
            "How to add UI blocking to an Angular application."
        );
    }
}
