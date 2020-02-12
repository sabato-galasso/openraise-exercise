import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RoutingModule} from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatDividerModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { FeatureComponent } from './components/feature/feature.component';
import {DataService} from './services/data.service';
import {ProcessHttpmsgService} from './services/process-httpmsg.service';
import {baseURL} from './shared/baseUrl';
import { HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadbarComponent,
    FeatureComponent,
    SpinnerComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,

  ],
  providers: [DataService, ProcessHttpmsgService,
    {provide: 'BaseURL', useValue: baseURL},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
