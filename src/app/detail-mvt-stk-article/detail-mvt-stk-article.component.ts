import { Component } from '@angular/core';
import { Helper } from '../mes-services/helper.service';

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent {

  constructor(private helper:Helper){}

  onHide(){
    this.helper.hideDetailMvtStk();
    console.log(this.helper.isHideDetailMvtStk);

  }
}
