import { DepartmentsDataService } from './services/departments-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HistoryComponent } from './components/history/history.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavigationComponent,
    HistoryComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [DepartmentsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
