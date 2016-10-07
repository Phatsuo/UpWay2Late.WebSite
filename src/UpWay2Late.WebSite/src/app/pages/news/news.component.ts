import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { MetaService } from '../../services/meta.service';
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
        private metaService: MetaService,
        private utilsService: UtilsService
    ) { }

    ngOnInit() {
        this.metaService.setMeta(
            "UpWay2Late.com News",
            "UpWay2Late.com latest news."
        );

        this.dataService.getNews()
            .subscribe(data => {
                this.newsItems = data;
            });
    }
}
