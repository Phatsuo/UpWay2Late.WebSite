import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-react-and-ui-blocking',
  templateUrl: './react-and-ui-blocking.component.html',
  styleUrls: ['./react-and-ui-blocking.component.css']
})
export class ReactAndUiBlockingComponent implements OnInit {

    title: string = "React Applications with UI Blocking";

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            this.title,
            "How to add UI blocking to a React application."
        );
    }
}