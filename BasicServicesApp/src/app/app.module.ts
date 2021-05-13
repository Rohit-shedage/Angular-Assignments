import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientComponent } from './client/client.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SampleServiceService } from './sample-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MainContainerComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ClientComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SampleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
