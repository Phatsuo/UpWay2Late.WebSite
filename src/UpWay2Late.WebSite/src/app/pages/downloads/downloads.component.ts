import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../../services/utils.service';

import { IDownload } from '../../models/download';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

    // todo: move to database
    public downloads: Array<IDownload> = [
        { "date": new Date("4/10/2016"), "fileName": "WinLaunch.Setup.1.0.5944.19441.exe", "downloadName": "WinLaunch 1.0.5944.19441 Setup", "size": "2,892k", "url": "http://upway2late.azureedge.net/WinLaunch.Setup.1.0.5944.19441.exe" },
        { "date": new Date("4/10/2016"), "fileName": "WinLaunch.Setup.1.0.5944.19441.zip", "downloadName": "WinLaunch 1.0.5944.19441 Setup", "size": "2,021k", "url": "http://upway2late.azureedge.net/WinLaunch.Setup.1.0.5944.19441.zip" },
        { "date": new Date("4/19/2016"), "fileName": "WinRoboCopy-Setup-1.3.5953.40896.zip", "downloadName": "WinRoboCopy 1.3.5953.40896 Setup", "size": "2,321k", "url": "http://upway2late.azureedge.net/WinRoboCopy-Setup-1.3.5953.40896.zip" }
    ];

    constructor(private utilsService: UtilsService) { }

    ngOnInit() {
    }

}
