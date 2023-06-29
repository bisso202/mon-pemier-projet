import { Component } from '@angular/core';
import { Helper } from '../mes-services/helper.service';

@Component({
  selector: 'app-detail-mvt-stk',
  templateUrl: './detail-mvt-stk.component.html',
  styleUrls: ['./detail-mvt-stk.component.scss']
})
export class DetailMvtStkComponent {

  constructor(private helper:Helper){}
  onHide(){
    console.log(this.helper.isHideDetailMvtStk);
   return this.helper.isHideDetailMvtStk;
  }
}
