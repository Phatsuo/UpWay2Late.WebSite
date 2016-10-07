import { Injectable, Inject, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

declare var _: any;

@Injectable()
export class MetaService {

    public MetaChangeEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor( @Inject(DOCUMENT) private document) { }

    setMeta(title: string, description: string, url?: string) {

        if (_.isUndefined(url)) {
            url = `http://www.upway2late.com/${window.location.hash}`;
        }
        
        this.document.title = title;

        // We can set all these cool things.
        // But it won't really matter for any scrapers, at least right now. They are not going to run any javascript.
        this.setContent('property', 'og:title', title);
        this.setContent('property', 'og:description', description);
        this.setContent('property', 'og:url', url);

        this.setContent('name', 'twitter:title', title);
        this.setContent('name', 'twitter:description', description);
        this.setContent('name', 'twitter:url', url);

        this.MetaChangeEvent.emit(url);
    }

    setContent(attrib: string, name: string, content: string) {
        let node: any = this.document.querySelectorAll(`meta[${attrib}="${name}"]`);
        if (node.length > 0) {
            node[0].content = content;
        } else {
            let head: any = this.document.getElementsByTagName('head')[0];
            let meta = this.document.createElement("meta");
            meta.setAttribute(attrib, name);
            meta.content = content;
            head.appendChild(meta);
        }
    }
}