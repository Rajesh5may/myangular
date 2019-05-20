import { AboutComponent } from './about/about.component';
import { TableListViewComponent } from './table-list-view/table-list-view.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/DashboardComponent';
import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './header/header.component';
// import { MiddleComponent } from './middle/middle.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'login' , component: LoginComponent },
  { path: 'post' , component: PostComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'table' , component: TableComponent },
  { path: 'edit-view' , component: EditViewComponent },
  { path: 'list-view' , component: TableListViewComponent},
  { path: 'about' , component: AboutComponent },
  { path: 'contact' , component: ContactUsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
