import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { colorentity } from 'src/app/Entity/colorentity';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
 
  colorarray=['Red','Green','Yellow']
  filteroption!:Observable<string[]>
  formcontrol=new FormControl('')

  colorarraylist!:colorentity[];
  filteroptionlist!:Observable<colorentity[]>

  constructor(private service:MasterService){
    this.colorarraylist=this.service.GetColorList();
  }

  ngOnInit(): void {
  //  this.filteroption=this.formcontrol.valueChanges.pipe(
  //   startWith(''),map(value=>this._Filter(value || ''))
  //  )

   this.filteroptionlist=this.formcontrol.valueChanges.pipe(
    startWith(''),map(value=>this._LISTFilter(value || ''))
   )


  }

  // private _Filter(value:string):string[]{
  //   const searchvalue=value.toLocaleLowerCase();
  //   return this.colorarray.filter(op=>op.toLocaleLowerCase().includes(searchvalue))
  // }

  private _LISTFilter(value:string):colorentity[]{
    const searchvalue=value.toLocaleLowerCase();
    return this.colorarraylist.filter(op=>op.name.toLocaleLowerCase().includes(searchvalue) || op.code.toLocaleLowerCase().includes(searchvalue))
  }

}
