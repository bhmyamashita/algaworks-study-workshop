import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../parking.service';
import { MessageService } from 'primeng/components/common/messageservice';

import * as moment from 'moment';

@Component({
  selector: 'app-parking-table',
  templateUrl: './parking-table.component.html',
  styleUrls: ['./parking-table.component.css']
})
export class ParkingTableComponent implements OnInit {
  
  parking = {carOwner:'', payer:'', date:''};
  parkings = [];

  constructor(
    private parkingService: ParkingService,
    private messageService: MessageService) { }

  ngOnInit() {
    let today = moment().format('DD/MM/YYYY');
    this.parking.date = today;
    this.listAll();
  }

  listAll() {
    this.parkingService.listAll()
      .subscribe(response => {
        this.parkings = <any>response
      }
    );
  }

  addNewParking() {
    this.parkingService.insert(this.parking)
      .subscribe(()=>{
        this.parking = {carOwner:'', payer:'', date: moment().format('DD/MM/YYYY')};
        this.listAll();
        this.messageService.add({
          severity: 'success',
          summary: 'Parking added with success!'
        });
      },
      response => {
        let msg = 'Ouch! Something is wrong!';

        if (response.error.message) {
          msg = response.error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: msg
        });
      });
  }

}
