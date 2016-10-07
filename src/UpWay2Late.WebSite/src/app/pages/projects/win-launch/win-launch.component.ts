import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-win-launch',
  templateUrl: './win-launch.component.html',
  styleUrls: ['./win-launch.component.css']
})
export class WinLaunchComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "WinLaunch",
            "WinLaunch is a Windows 7, 8, or 10 power user's application and task launch bar."
        );
    }
}