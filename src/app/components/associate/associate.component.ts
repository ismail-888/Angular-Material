import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Country } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit{

  associatelist:any;
  addressArray!:FormArray<any>
  countryList!:Country[]
  filterOptions!:Observable <Country[]>
  editdata:any;

  constructor(private builder: FormBuilder, private service:MasterService) {

  }

  ngOnInit(): void {
    this.LoadAssociate();
    this.LoadCountry();
  }

  myform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    address: this.builder.array([]),
  })

  SaveAssociate() {
    // console.log(this.myform.value)
    this.service.SaveAssociate(this.myform.value,this.myform.value.id).subscribe(r=>{
      alert('Saved')
    })
  }

  LoadAssociate(){
    this.service.GetAssociate().subscribe(item=>{
      this.associatelist=item
    })
  }

  LoadCountry(){
    this.service.GetCountry().subscribe(item=>{
      this.countryList=item
    })
  }

  autochange(index:any){
 this.addressArray=this.myform.get("address") as FormArray;
 const addobj=this.addressArray.at(index) as FormGroup;
 const _control=addobj.get('country') as FormControl;
 this.filterOptions=_control.valueChanges.pipe(
  startWith(''),map(value=>this._Listfilter(_control.value || ''))
 )
  }

  private _Listfilter(value:string):Country[]{
    const searchvalue=value.toLocaleLowerCase();
    return this.countryList.filter(option=>option.name.toLocaleLowerCase().includes(searchvalue) ||
    option.code.toLocaleLowerCase().includes(searchvalue))

  }

  addAddress(){
    const associate=this.myform.value.id;
    if(associate!=''){
      this.addressArray=this.myform.get("address") as FormArray;
      this.addressArray.push(this.createddrow())
    }else{
      alert('Please choose associate ')
    }
  }

  createddrow(){
    return this.builder.group({
      title:this.builder.control(''),
      country:this.builder.control(''),
      fulladdress:this.builder.control(''),
    })
  }

  get getaddress(){
    return this.myform.get("address") as FormArray
  }

  cuschange(code:any){
    this.service.GetAssociatebycode(code).subscribe(res=>{
      this.editdata=res;

      this.addressArray=this.myform.get('address') as FormArray;
      while (this.addressArray.length!==0){
        this.addressArray.removeAt(0)
      }

      for(let i=0;i<this.editdata.address.length;i++){
        this.addAddress();
      }
      this.myform.setValue({id:this.editdata.id,name:this.editdata.name,address:this.editdata.address})
    })
  }

}
