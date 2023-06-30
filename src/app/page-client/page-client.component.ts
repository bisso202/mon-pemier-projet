import { Component, OnInit } from '@angular/core';
import { Router, RouterConfigurationFeature  } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

 constructor(
  private router: Router
 ){ }

 clients :any[] = [];
 ngOnInit(): void{}

 nouveauClient(): void{
  this.router.navigate(['nouveauclient']);
 }
}
