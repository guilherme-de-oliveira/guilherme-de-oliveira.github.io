import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// import {TabMenuModule} from 'primeng/tabmenu';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { DescriptionComponent } from './components/description/description.component';
import { FooterComponent } from './components/footer/footer.component';
import {DividerModule} from 'primeng/divider';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ExperienceComponent } from './components/experience/experience.component';
import { AppRoutingModule } from './app-routing.module';
import {CardModule} from 'primeng/card';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    DescriptionComponent,
    FooterComponent,
    ExperienceComponent,
    ExperimentComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    MenubarModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    DividerModule,
    SelectButtonModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }