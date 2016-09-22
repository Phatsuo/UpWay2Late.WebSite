import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-git-hub-commit-link',
  templateUrl: './git-hub-commit-link.component.html',
  styleUrls: ['./git-hub-commit-link.component.css']
})
export class GitHubCommitLinkComponent implements OnInit {

    @Input() repo: string;
    @Input() commit: string;
    @Input() text: string;

    constructor() { }

    ngOnInit() {
    }

}
