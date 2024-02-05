import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './services/dialog.service';
import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpLoaderModule } from './loader/http-loader/http-loader.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AuthModule,
    ToastModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DialogModule,
    MatDialogModule,
    HttpLoaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    NgxCountriesDropdownModule
  ],
  providers: [DialogService,DataService,MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
