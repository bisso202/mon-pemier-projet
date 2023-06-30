import { Component, OnInit } from '@angular/core';
import { Router, RouterConfigurationFeature } from '@angular/router';

@Component({
  selector: 'app-page-articles',
  templateUrl: './page-articles.component.html',
  styleUrls: ['./page-articles.component.scss']
})
export class PageArticlesComponent implements OnInit {
constructor(
  private router:Router
){ }
ngOnInit(): void {

}
nouvelArticle(): void{
  this.router.navigate(['nouvelarticle']);
}
}
