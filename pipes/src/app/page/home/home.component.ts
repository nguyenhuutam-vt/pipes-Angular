import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataList: any[] = [];
  categoryList: any = [
    'all',
    'hosting',
    'ecommerce',
    'finance',
    'course',
    'product',
    'travel',
  ];
  fillter: any;
  fillterData: any = [];
  showData: any;
  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this.getData();
    this.showData = true;
  }

  getData(): void {
    this.service.homeApi().subscribe((res: any) => {
      this.dataList = res;
      console.log(res);
    });
  }
  onChange(e: any) {
    console.log(e.target.value, 'categoryvalue');
    this.showData = false;
    this.fillter = e.target.value;

    this.dataList.filter((element: any) => {
      if (this.fillter == 'All') {
        this.fillterData.push(element);
      } else {
        if (element.category == this.fillter.toLowerCase()) {
          this.fillterData.push(element);
        }
      }
    });

    this.dataList.filter((element: any) => {
      console.log(element.category, 'res');
    });
    console.log(this.fillterData, 'fill');
  }
}
