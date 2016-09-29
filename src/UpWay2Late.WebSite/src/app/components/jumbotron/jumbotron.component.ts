import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

    @Input() headline: string;
    @Input() text: string;
    @Input() image: string;

    style: SafeStyle;

    constructor(private domSanitizer: DomSanitizer) { }

    ngOnInit() {
        this.style = this.domSanitizer.bypassSecurityTrustStyle(`url("assets/img/jumbotron/${this.image}")`);
    }
}