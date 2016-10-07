import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../../services/meta.service';

@Component({
  selector: 'app-win-robo-copy-compact-view',
  templateUrl: './win-robo-copy-compact-view.component.html',
  styleUrls: ['./win-robo-copy-compact-view.component.css']
})
export class WinRoboCopyCompactViewComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "WinRoboCopy - Compact View",
            "WinRoboCopy is a GUI front end for RoboCopy."
        );
    }
}