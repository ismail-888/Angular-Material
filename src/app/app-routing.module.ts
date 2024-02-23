import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';
import { FormdesignComponent } from './components/formdesign/formdesign.component';
import { AssociateComponent } from './components/associate/associate.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'autocomplete', component:AutocompleteComponent},
  {path:'input', component:InputComponent},
  {path:'card', component:CardComponent},
  {path:'slider', component:SliderComponent},
  {path:'table', component:TableComponent},
  {path:'form', component:FormdesignComponent},
  {path:'associate', component:AssociateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
