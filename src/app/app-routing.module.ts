import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page-statistiques/page-statistiques.component';
import { PageArticlesComponent } from './page-articles/page-articles.component';
import { NouvelArticleComponent } from './nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './mvtstk/mvtstk.component';

const routes: Routes = [
  {
    path:'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path:'',
    component: PageDashboardComponent,
    children:[
      {
        path:'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'nouvelarticle',
        component:NouvelArticleComponent
      },
      {
        path: 'mvtstk',
        component: MvtstkComponent
      },
      {
        path: 'articles',
        component:PageArticlesComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
