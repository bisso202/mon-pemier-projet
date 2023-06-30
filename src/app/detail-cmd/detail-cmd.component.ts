import { Component } from '@angular/core';
import { Helper } from '../mes-services/helper.service';

@Component({
  selector: 'app-detail-cmd',
  templateUrl: './detail-cmd.component.html',
  styleUrls: ['./detail-cmd.component.scss']
})
export class DetailCmdComponent {
  constructor(private helper:Helper){}

  onHide(){
    this.helper.hideDetailMvtStk();
    console.log(this.helper.isHideDetailMvtStk);

  }
}
