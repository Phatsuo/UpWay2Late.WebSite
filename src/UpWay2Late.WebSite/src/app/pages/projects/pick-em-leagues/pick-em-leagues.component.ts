import { Component, OnInit } from '@angular/core';

import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-pick-em-leagues',
  templateUrl: './pick-em-leagues.component.html',
  styleUrls: ['./pick-em-leagues.component.css']
})
export class PickEmLeaguesComponent implements OnInit {

    constructor(private metaService: MetaService) { }

    ngOnInit() {
        this.metaService.setMeta(
            "Pick Em Leagues",
            "Pick Em Leagues (www.pickemleagues.com) is a sports based competition web site where you pick the winners of professional sports games, collect points when you are correct, and lord your superior knowledge over your friends."
        );
    }
}