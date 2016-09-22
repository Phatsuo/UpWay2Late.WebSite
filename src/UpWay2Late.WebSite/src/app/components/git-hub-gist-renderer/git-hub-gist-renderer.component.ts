import { Component, OnInit, Input } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-git-hub-gist-renderer',
  templateUrl: './git-hub-gist-renderer.component.html',
  styleUrls: ['./git-hub-gist-renderer.component.css']
})
export class GitHubGistRendererComponent implements OnInit {

    @Input() gist: string;

    html: SafeHtml;

    constructor(private sanitizer: DomSanitizer, private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getGist('Phatsuo', this.gist)
            .subscribe(data => {          
                this.html = this.sanitizer.bypassSecurityTrustHtml(data);
            });
    }
}
