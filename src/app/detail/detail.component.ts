import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../holiday.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  holidayDetails: Array<any> = [];

  constructor(private holidayService: HolidayService, private route: ActivatedRoute) {
    let selectedDate;
    this.route.queryParams.subscribe((param) => {
      selectedDate = param.date;
      console.log(param, '14');
    });
    this.holidayService.getHolidayList().subscribe((resp) => {
      this.holidayDetails = resp.holidays[selectedDate];
      console.log('rsp---', resp.holidays[selectedDate]);
    });
  }

  ngOnInit() { }

  formatDate (currentDate) {
    return this.holidayService.formatDate(currentDate);
  }

  // getFormattedDate(date) {
  //   const
  // }
}
