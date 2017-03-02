import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-dot-net-core-console-apps',
  templateUrl: './dot-net-core-console-apps.component.html',
  styleUrls: ['./dot-net-core-console-apps.component.css']
})
export class DotNetCoreConsoleAppsComponent implements OnInit {

    title: string = "What's New With .NET Core Console Apps";

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            this.title,
            "What's new in console applications with .Net Core."
        );
    }
}
