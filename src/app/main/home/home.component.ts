import { Component, OnInit } from '@angular/core';
import { EmergencyList } from 'src/app/main/model/emergency-list.model';
import { EmergencyService } from 'src/app/service/emergency.service';
import { SortEvent } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emergenciesList!: any;

  constructor(private service: EmergencyService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllEmergencies().subscribe((data: EmergencyList) => {
      this.emergenciesList = data.content;
    })
  }

  customSort(e: SortEvent) {
    let value1:any;
    let value2:any;
    e.data!.sort((data1:any, data2:any) => {
      let x1 = data1[e.field!];
      let x2 = data2[e.field!];
      let result = null;

      if(e.field! === 'device') {
        console.log(e.field!)
        value1 = x1.serialNumber
        value2 = x2.serialNumber
      }
      if(e.field! === 'emergency') {
        value1 = x1.emergencyId
        value2 = x2.emergencyId
      }
      if(e.field! === 'time') {
        value1 = data1.emergency.requestTime
        value2 = data2.emergency.requestTime
      }
      
      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
          result = value1.localeCompare(value2);
      else
          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (e.order! * result);
    });
  }

}
