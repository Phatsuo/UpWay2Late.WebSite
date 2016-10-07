import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../../services/meta.service';

@Component({
  selector: 'app-win-robo-copy-schedule',
  templateUrl: './win-robo-copy-schedule.component.html',
  styleUrls: ['./win-robo-copy-schedule.component.css']
})
export class WinRoboCopyScheduleComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "WinRoboCopy - Schedule Robocopy Job",
            "WinRoboCopy is a GUI front end for RoboCopy. It can also schedule a RoboCopy job to run in Windows Task Scheduler."
        );
    }
}