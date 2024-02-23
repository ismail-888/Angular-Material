import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  constructor(private http: HttpClient) { }

  GetColorList(): colorentity[] {
    return [
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'White' },
      { code: 'c5', name: 'Blue' },
    ]
  }

  GetCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:3000/customer")
  }

  SaveCustomer(data: any) {
    return this.http.post("http://localhost:3000/customer", data)
  }


  GetCustomerbyCode(code: any) {
    return this.http.get("http://localhost:3000/customer/" + code)
  }

  GetAssociate(){
    return this.http.get('http://localhost:3000/associate')
  }

  GetAssociatebycode(code:any){
    return this.http.get('http://localhost:3000/associate/'+code)
  }

  GetCountry():Observable<Country[]>{
    return this.http.get<Country[]>('http://localhost:3000/country')
  }

  SaveAssociate(data:any,code:any){
    return this.http.put('http://localhost:3000/associate/'+code,data)
  }

}
