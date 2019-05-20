import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// import {SlideshowModule} from 'ng-simple-slideshow';
import { FormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatNavList,
  MatGridList,
  MatGridTile,
  MatDivider,
  MatList,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatTableModule,
  MatDialogModule,
  MatTooltipModule,
    } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { PostComponent } from './post/post.component';
import { TabsComponent } from './tabs/tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/DashboardComponent';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { HeaderBackendComponent } from './header-backend/header-backend.component';
import { TableComponent } from './table/table.component';
import { BackendSidenavComponent } from './backend-sidenav/backend-sidenav.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { TableListViewComponent } from './table-list-view/table-list-view.component';
import { ModalComponent } from './modal/modal.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    PostComponent,
    MatNavList,
    MatGridList,
    MatGridTile,
    MatDivider,
    MatList,
    TabsComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    ExpansionPanelComponent,
    CheckboxComponent,
    HeaderBackendComponent,
    TableComponent,
    BackendSidenavComponent,
    EditViewComponent,
    TableListViewComponent,
    ModalComponent,
    AboutComponent,
    ContactUsComponent,
    CarouselSliderComponent,


    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatStepperModule,
    MatTabsModule,
    HttpClientModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatCarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],

})

export class AppModule { }
