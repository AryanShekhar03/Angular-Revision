import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private get: UserService,private deleteemp: UserService) { }
  users: any;
  deletearray:any;

  ngOnInit(): void {
    this.getdetails();
  
  }
  getdetails() {
    this.get.employeeget().subscribe((result: any) => {
      console.log(result);
      this.users = result
    })
  }
    // onDelete(id:string){
    //   this.deleteemp.deleteemployee().subscribe((result:any)=>{
    //     console.log(result);
    //     this.deletearray=result;
    //   }) 
    onDelete(user:any){
      this.deleteemp.deleteemployee(user).subscribe((result:any)=>{
          console.log(result);
          console.log("Emp deleted")
          // this.deletearray=result;

    })
  

}
}
  


  
