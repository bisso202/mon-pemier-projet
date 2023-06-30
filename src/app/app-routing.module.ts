import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page-statistiques/page-statistiques.component';
import { PageArticlesComponent } from './page-articles/page-articles.component';
import { NouvelArticleComponent } from './nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './mvtstk/mvtstk.component';
import { PageClientComponent } from './page-client/page-client.component';
import { PageFournisseurComponent } from './page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';

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
      {
        path: 'clients',
        component:PageClientComponent
      },
      {
        path: 'commandesclient',
        component:PageCmdCltFrsComponent
      },
      {
        path: 'nouveauclient',
        component:NouveauCltFrsComponent
      },
      {
        path: 'fournisseurs',
        component:PageFournisseurComponent
      },
      {
        path: 'nouveaufournisseur',
        component:NouveauCltFrsComponent
      },
      {
        path: 'commandesfournisseur',
        component:PageCmdCltFrsComponent
      },
      {
        path: 'categories',
        component: PageCategoriesComponent
      },
      {
        path: 'nouvellecategorie',
        component: PageCategoriesComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
