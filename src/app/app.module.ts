import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DetailMvtStkComponent } from './detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './page-client/page-client.component';
import { Helper } from './mes-services/helper.service';


@NgModule({
  declarations: [
    AppComponent,


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
     DetailMvtStkComponent,
     DetailCltFrsComponent,
     PageClientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Helper,
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
