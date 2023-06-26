import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './mon-premier-composant/mon-premier-composant.component';
import { MonDeuxiemeComposantComponent } from './mon-deuxieme-composant/mon-deuxieme-composant.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PageArticlesComponent } from './page-articles/page-articles.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BouttonActionComponent } from './boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './nouvel-article/nouvel-article.component';
import { MvtstkComponent } from './mvtstk/mvtstk.component';
import { DetailMvtStkArticleComponent } from './detail-mvt-stk-article/detail-mvt-stk-article.component';


@NgModule({
  declarations: [
    AppComponent,
     MonPremierComposantComponent,
     MonDeuxiemeComposantComponent,
     PageLoginComponent,
     PageInscriptionComponent,
     PageDashboardComponent,
     PageStatistiquesComponent,
     MenuComponent,
     HeaderComponent,
     PageArticlesComponent,
     DetailArticleComponent,
     PaginationComponent,
     BouttonActionComponent,
     NouvelArticleComponent,
     MvtstkComponent,
     DetailMvtStkArticleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
