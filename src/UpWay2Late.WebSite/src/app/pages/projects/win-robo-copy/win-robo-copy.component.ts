import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../../../services/utils.service';

import { IVersion } from '../../../models/version';

@Component({
  selector: 'app-win-robo-copy',
  templateUrl: './win-robo-copy.component.html',
  styleUrls: ['./win-robo-copy.component.css']
})
export class WinRoboCopyComponent implements OnInit {

    public versions: Array<IVersion> = [
        { "version": "1.3.5953.40896", "filename": "WinRoboCopy-Setup-1.3.5953.40896.zip", "revision": "412 ", "date": new Date("4/19/2016"), "text": [".NET 4.5", "InstallShield installer (Windows 10 compatible).", "Minor form fixes.", "Minor license updates."] },
        { "version": "1.2.5898.42989", "filename": "WinRoboCopy-Setup-20160225.zip", "revision": "393 ", "date": new Date("2/25/2016"), "text": ["Signed installer and executable."] },
        { "version": "1.2.5887.39320", "filename": "WinRoboCopy-Setup-20160213.zip", "revision": "393", "date": new Date("2/13/2016"), "text": ["Bug Fix: Exception when stored job XML file has been tampered with.", "Bug Fix: Exception when access to stored job XML file is denied."] },
        { "version": "1.2.5148.1756", "filename": "WinRoboCopy-Setup-20140204.zip", "revision": "384 ", "date": new Date("2/4/2014 "), "text": ["Bug Fix: Exception on load.", "Bug Fix: Null reference exception when saving job.", "Bug Fix: Null reference exception when selecting job."] },
        { "version": "1.2.4587.2115 ", "filename": "WinRoboCopy-Setup-20120723.zip", "revision": "296", "date": new Date("7/23/2012 "), "text": ["Bug Fix: Certain localized date formats resulted in failed attempts to schedule a copy.", "Bug Fix: Rare format exception when building certain commands."] },
        { "version": "1.2.4482.39775 ", "filename": "WinRoboCopy-Setup-20120409.zip   ", "revision": "286", "date": new Date("4/9/2012"), "text": ["Added support for pre-RoboCopy and post-RoboCopy scripts.", "Added highlighted output in the log window.", "Added exception reporting.", "Made version check multi-threaded.", "Added RoboCopy location config override.", "Fixed a network file parsing bug."] },
        { "version": "1.1.4462.41009", "filename": "WinRoboCopy-Setup-20120320.zip", "revision": "237", "date": new Date("3/20/2012"), "text": ["Added more RoboCopy options to the check box interface.", "Added optional expanded display with full option descriptions.", "Added 'Save as Command File' option.", "Added 'Schedule RoboCopy Job For Later' option.", "Added 'About' window.", "Added 'Check For New Version' feature.", "Added help link to web site help page.", "Added PayPal donation link to main form.", "Fixed bug detecting correct version of Portuguese."] },
        { "version": "1.0.4402.369", "filename": "WinRoboCopy-Setup-20120120.zip  ", "revision": "163", "date": new Date("1/20/2012"), "text": ["Bug fix: Clear form button was not clearing the form.", "Extra file and extra directory robocopy output lines were not being parsed."] },
        { "version": "1.0.4387.26559 ", "filename": "WinRoboCopy-Setup-20120105.zip", "revision": "152", "date": new Date("1/5/2012"), "text": ["Added ability to specify the WinRoboCopyJobs.xml location.", "Improved handling of the WinRoboCopyJobs.xml by multiple instance."] },
        { "version": "1.0.4330.22565", "filename": "WinRoboCopy-Setup-20111109.zip", "revision": "148", "date": new Date("11/9/2011"), "text": ["Added a custom icon.", "Fixed a divide by zero exception.", "Improved exception handling."] },
        { "version": "1.0.4239.2553", "filename": "WinRoboCopy-Setup-20110810.zip ", "revision": "108", "date": new Date("8/10/2011"), "text": ["Added limited support for French, German, Spanish, Italian, and Portuguese.", "Fixed a bug that could affect the parsing of the file progress percentages."] },
        { "version": "1.0.4209.1288", "filename": "WinRoboCopy-Setup-20110711.zip", "revision": "87", "date": new Date("7/11/2011"), "text": ["Fixed registry access error crash for non-administrators.", "Added graceful error message box for unhandled exceptions.", "Forces /TEE when manual RoboCopy log output is used (otherwise there is no output to parse)."] },
        { "version": "1.0.4149.399", "filename": "WinRoboCopy-Setup-20110512.zip", "revision": "32", "date": new Date("5/12/2011"), "text": ["Drag-dropped files sorted by file name.", "Remove trailing slash when a path is quoted (caused a robocopy error).", "Added clear form button.", "Clear file and directory progress prior to starting a new robocopy.", "Dropping files in the file box sets the from path."] },
        { "version": "1.0.4139.5437", "filename": "WinRoboCopy-Setup-20110502.zip", "revision": "9", "date": new Date("5/2/2011"), "text": ["Original Release."] }
    ];

    constructor(private utilsService: UtilsService) { }

    ngOnInit() {
    }

}
