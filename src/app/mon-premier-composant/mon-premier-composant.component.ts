import { Component, OnInit } from '@angular/core';
import { MonPremierServiceService } from '../mes-services/mon-premier-service.service';

@Component({
  selector: 'app-mon-premier-composant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.scss']
})
export class MonPremierComposantComponent implements OnInit {

monINT = 0;

constructor(
  private monService: MonPremierServiceService
  ){}

ngOnInit(): void {
  this.monINT = this.monService.someDeuxPlusTrois();
}
}
