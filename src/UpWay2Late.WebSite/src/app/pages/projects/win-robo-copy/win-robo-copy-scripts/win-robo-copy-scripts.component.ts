import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../../services/meta.service';

@Component({
  selector: 'app-win-robo-copy-scripts',
  templateUrl: './win-robo-copy-scripts.component.html',
  styleUrls: ['./win-robo-copy-scripts.component.css']
})
export class WinRoboCopyScriptsComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "WinRoboCopy - Scripts",
            "WinRoboCopy is a GUI front end for RoboCopy. It can also supports executing pre-RoboCopy scripts and/or a post-RoboCopy scripts."
        );
    }
}