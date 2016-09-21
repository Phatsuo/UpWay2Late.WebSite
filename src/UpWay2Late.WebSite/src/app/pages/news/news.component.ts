import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { UtilsService } from '../../services/utils.service';

import { INews } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    public newsItems: Array<INews>;

    constructor(
        private dataService: DataService,
        private utilsService: UtilsService
    ) { }

    ngOnInit() {
        this.dataService.getNews()
            .subscribe(data => {
                this.newsItems = data;
            });
    }
}
