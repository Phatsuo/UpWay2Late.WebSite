import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extension-header',
  templateUrl: './extension-header.component.html',
  styleUrls: ['./extension-header.component.css']
})
export class ExtensionHeaderComponent implements OnInit {

    @Input() extensionId;
    @Input() image;

    constructor() { }

    ngOnInit() {
    }

}
