import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private get: UserService) { }
  users: any;

  ngOnInit(): void {
    this.getdetails();
  }
  getdetails() {
    this.get.employeeget().subscribe((result: any) => {
      console.log(result);
      this.users = result
    })
  }

}
