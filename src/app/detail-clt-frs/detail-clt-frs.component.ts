import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.scss']
})
export class DetailCltFrsComponent {
  @Input() client: any;

  constructor() { }
}
