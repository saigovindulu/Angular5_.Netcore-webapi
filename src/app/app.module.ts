import { HomeService } from './home/home.service';
import { DatasharingService } from './datasharing.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],

  providers: [DatasharingService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
