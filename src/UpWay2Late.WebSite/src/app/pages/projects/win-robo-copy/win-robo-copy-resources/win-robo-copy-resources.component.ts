import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../../services/meta.service';

@Component({
  selector: 'app-win-robo-copy-resources',
  templateUrl: './win-robo-copy-resources.component.html',
  styleUrls: ['./win-robo-copy-resources.component.css']
})
export class WinRoboCopyResourcesComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "WinRoboCopy - Resources",
            "WinRoboCopy is a GUI front end for RoboCopy."
        );
    }
}