import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.css']
})
export class ResponsiveImageComponent implements OnInit {

    @Input() fileName: string;

    path: string

    constructor() {
    }

    ngOnInit() {
        this.path = `/assets/img/${this.fileName}`;
    }
}