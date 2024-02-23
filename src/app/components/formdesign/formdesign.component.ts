import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent implements OnInit{

  coutryList = ['Lebanon', "USA", "KSA", "UK"]
  termList = ['15days', "30days", "60days", "90days"]

  constructor(private builder: FormBuilder) {

  }
  ngOnInit(): void {
   this.customerform.setValue({name:"ismail",email:"ismail@gmail.com",phone:"324234", country:"USA",term:"45days",address:"shikago",dob:new Date(2001,2,3),gender:"Male",status:true})
  }

  customerform = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    term: this.builder.control('', Validators.required),
    dob: this.builder.control(new Date(2000,4,25)),
    gender: this.builder.control('Male'),
    status: this.builder.control(true),
  })

  SaveCustomer() {
      console.log(this.customerform.value)
  }

  ClearForm(){
    this.customerform.reset();
  }

}
