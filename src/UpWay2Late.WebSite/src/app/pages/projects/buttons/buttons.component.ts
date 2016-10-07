import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';
import { IExtension } from '../../../models/extension';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

    public extensions: Array<IExtension> = [
        { "name": "Awesome Bookmarks Button", "image": "/assets/img/buttons/bookmarks_128.png", "url": "https://chrome.google.com/webstore/detail/dgkaehmmlnblfmmpdebmhjieffcjjjph?hl=en-US", "text": ["This button opens the Chrome Bookmark Manager.", "The button can be configured to open the Bookmark Manager in a new window or a new tab.", "If the Bookmark Manager is already open, that tab is selected."] },
        { "name": "Awesome Downloads Button", "image": "/assets/img/buttons/downloads_128.png", "url": "https://chrome.google.com/webstore/detail/hiceefjejhfncfdbkmbhkmibjoegonnk?hl=en-US", "text": ["This button opens the Chrome Downloads window.", "The button can be configured to open the Downloads window in a new window or a new tab.", "If the Downloads window is already open, that tab is selected."] },
        { "name": "Awesome Duplicate Tab Button", "image": "/assets/img/buttons/duplicateTab_128.png", "url": "https://chrome.google.com/webstore/detail/haaoemffnfnpnedlepmpblbnpokomdon?hl=en-US", "text": ["This button duplicates the currently focused Chrome tab.", "The button can be configured to duplicate the tab in a new window or a new tab."] },
        { "name": "Awesome Extensions Button", "image": "/assets/img/buttons/extensions_128.png", "url": "https://chrome.google.com/webstore/detail/ohloacnodbapgjahifmnhghbapihoaah?hl=en-US", "text": ["This button opens the Chrome Extensions window.", "The button can be configured to open the Extensions window in a new window or a new tab.", "If the Extensions window is already open, that tab is selected."] },
        { "name": "Awesome History Button", "image": "/assets/img/buttons/history_128.png", "url": "https://chrome.google.com/webstore/detail/cjifeclbknmlhapifaiaocfcbahinlji?hl=en-US", "text": ["This button opens the Chrome History window.", "The button can be configured to open the History window in a new window or a new tab.", "If the History window is already open, that tab is selected."] },
        { "name": "Awesome New Window Button", "image": "/assets/img/buttons/newWindow_128.png", "url": "https://chrome.google.com/webstore/detail/egelidhcdjnplcpmolhliigamakcohia?hl=en-US", "text": ["This button opens up a new window. Or a new tab. "] },
        { "name": "Awesome Options Button ", "image": "/assets/img/buttons/options_128.png", "url": "https://chrome.google.com/webstore/detail/plbcofniomdgojippejpigepjbclnadg?hl=en-US", "text": ["This button opens the Chrome Options window.", "The button can be configured to open the Options window in a new window or a new tab.", "If the Options window is already open, that tab is selected."] },
        { "name": "Awesome Print Button ", "image": "/assets/img/buttons/print_128.png", "url": "https://chrome.google.com/webstore/detail/bddbafgkmneiebpibclbakmdnijhgeim?hl=en-US", "text": ["This button opens the Chrome Print window.", "The button can be configured to open the Print window in a new window or a new tab."] },
        { "name": "Awesome Refresh All Tabs Button ", "image": "/assets/img/buttons/refreshAllTabs_128.png", "url": "https://chrome.google.com/webstore/detail/kamfkajbgmjkfmfgcikbmbmpjfokfijk?hl=en-US", "text": ["This button refreshes all tabs.", "The button can be configured to refresh all tabs in the current Chrome window, or to refresh tabs in all Chrome windows."] },
        { "name": "Awesome Second Home Button ", "image": "/assets/img/buttons/secondHome_128.png", "url": "https://chrome.google.com/webstore/detail/cdllflfblfieigfimemklbodfpfopfef?hl=en-US&gl=US", "text": ["This button is a second home button.", "The button can be configured to open any URL in either a new window or a new tab."] },
        { "name": "Awesome View Source Button", "image": "/assets/img/buttons/viewSource_128.png", "url": "https://chrome.google.com/webstore/detail/hofjicknmidhbhmflllmmdaihmmggphg?hl=en-US", "text": ["This button opens the Chrome View Source window.", "The button can be configured to open the View Source window in a new window or a new tab.", "If the source is already open, that tab is selected."] },
        { "name": "Awesome Button Bar", "image": "/assets/img/buttons/barButton_128.png", "url": "https://chrome.google.com/webstore/detail/bcmfandagknmpnambbppcpgclkccgigb?hl=en-US", "text": ["The Awesome Button Bar contains all buttons and all options, and adds the option of showing or hiding each button."] }
    ];

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "Buttons Project",
            "The buttons project is a collection of 12 Google Chrome Extensions."
        );
    }

}