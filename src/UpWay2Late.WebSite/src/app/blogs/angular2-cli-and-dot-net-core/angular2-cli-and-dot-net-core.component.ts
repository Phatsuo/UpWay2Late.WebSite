import { Component, Inject, OnInit } from '@angular/core';

import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-angular2-cli-and-dot-net-core',
  templateUrl: './angular2-cli-and-dot-net-core.component.html',
  styleUrls: ['./angular2-cli-and-dot-net-core.component.css']
})
export class Angular2CliAndDotNetCoreComponent implements OnInit {

    title: string = "Using the Angular 2 CLI with .NET Core 1.0 and Visual Studio 2015";

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            this.title,
            "A how-to on using the Angular 2 CLI in conjunction .NET Core 1.0 and Visual Studio 2015."
        );
    }
}
