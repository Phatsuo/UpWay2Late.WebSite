import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular2-template-with-embedded-gist',
  templateUrl: './angular2-template-with-embedded-gist.component.html',
  styleUrls: ['./angular2-template-with-embedded-gist.component.css']
})
export class Angular2TemplateWithEmbeddedGistComponent implements OnInit {

    codeSample1 = "{{ '{' }}";

    constructor() { }

    ngOnInit() {
    }
}
