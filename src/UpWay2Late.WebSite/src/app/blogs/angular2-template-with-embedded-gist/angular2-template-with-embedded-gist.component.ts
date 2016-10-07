import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-angular2-template-with-embedded-gist',
  templateUrl: './angular2-template-with-embedded-gist.component.html',
  styleUrls: ['./angular2-template-with-embedded-gist.component.css']
})
export class Angular2TemplateWithEmbeddedGistComponent implements OnInit {

    title: string = "Angular 2 Templates with Embedded Gists";
    codeSample1 = "{{ '{' }}";

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            this.title,
            "A how-to on Angular 2 templates with embedded script tags, HTML injection, and GitHub Gists."
        );
    }
}
