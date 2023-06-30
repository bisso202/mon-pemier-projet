import { Component } from '@angular/core';
import { Helper } from '../mes-services/helper.service';

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent {
  constructor(private helper:Helper){}

  onHide(){
    this.helper.hideDetailMvtStk();
    console.log(this.helper.isHideDetailMvtStk);

  }
}
