import { Component, Input, OnInit, ElementRef } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-linked-in-share',
  templateUrl: './linked-in-share.component.html',
  styleUrls: ['./linked-in-share.component.css']
})
export class LinkedInShareComponent implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private metaService: MetaService
    ) { }

    ngOnInit() {

        this.setScripts(`http://www.upway2late.com/`);

        this.metaService.MetaChangeEvent.subscribe((url: string) => {
            this.elementRef.nativeElement.innerHTML = '';
            (<any>window).IN = null; // remove previously loaded LinkedIn script.
            this.setScripts(url);
        });
    }

    setScripts(url: string) {
        let linkedInScript = document.createElement("script");
        linkedInScript.type = "text/javascript";
        linkedInScript.src = "http://platform.linkedin.com/in.js";
        linkedInScript.innerHTML = "lang: en_US";

        let urlScript = document.createElement("script");
        urlScript.type = "IN/Share";
        urlScript.setAttribute("data-url", url)
        urlScript.setAttribute("data-counter", "right")

        this.elementRef.nativeElement.appendChild(linkedInScript);
        this.elementRef.nativeElement.appendChild(urlScript);
    }
}
