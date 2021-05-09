import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'services',component:ServicesComponent},
  { path:'client',component:ClientComponent},
  { path:'blog',component:BlogComponent},
  { path:'contact',component:ContactComponent},
  { path:'main-container',component:MainContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
