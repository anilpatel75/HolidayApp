import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../holiday.service';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  holidaysData: Array <any> = [];

  constructor(private holidayService: HolidayService, private router: Router) { }

  ngOnInit() {
    this.holidayService.getHolidayList().subscribe((resp) => {
      console.log('rsp---', resp.holidays);
      this.holidaysData = resp.holidays;
    });
  }

  getKeysData(data) {
    return Object.keys(data);
  }

  formatDate (currentDate) {
   return this.holidayService.formatDate(currentDate);
  }

  handleHolidayClick(holiday) {
    console.log('holiday====', new Date(holiday).getTime());
    const holidayData: NavigationExtras = {
      queryParams: {
        date : holiday
      }
    };
    //this.holidayService.setMessage(holiday);
    this.router.navigate(['/detail'], holidayData);
    //setTimeout(() => {

    //}, 0);
  }
}
