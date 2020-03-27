import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  connectionType:string;
  customerType:string;
  newMobileNumber:number;
  lastFiveDigits:number;
  constructor() { }

  ngOnInit() {
    this.connectionType = 'Prepaid',
    this.customerType = 'Individual',
    this.newMobileNumber = 9748473839,
    this.lastFiveDigits = 84748
  }

}
