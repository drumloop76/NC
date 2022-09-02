import { Component, OnInit } from '@angular/core';
import { EmergencyService } from 'src/app/service/emergency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: EmergencyService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAllEmergencies().subscribe((data: any) => {
      console.log(data.content[0])
    })
  }

}
