import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from 'src/Material.Module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormdesignComponent } from './components/formdesign/formdesign.component';
import { PopupComponent } from './components/popup/popup.component';
import { AssociateComponent } from './components/associate/associate.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
    FormdesignComponent,
    PopupComponent,
    AssociateComponent,
    UserdetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
