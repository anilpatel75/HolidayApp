import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class HolidayService {

  constructor(public http: Http) { }

  getHolidayList() {
    return this.http.get("https://holidayapi.com/v1/holidays?key=aca95689-dd91-428a-9177-89fbe9fa3dc2&country=US&year=2015")
      .map((res:Response) => res.json());
  }

  formatDate(currentDate) {
    const days = ['sunday', 'monday', 'tuesDay',
                'wednesday', 'thursday', 'friday',
      'saturday', 'sunday'],
      monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'],
      date = new Date(currentDate);

    return days[date.getDay()] + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
  }

}
