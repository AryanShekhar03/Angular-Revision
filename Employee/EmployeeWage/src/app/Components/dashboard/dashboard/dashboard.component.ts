import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import { DataService } from 'src/app/Service/data.service';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../../update/update.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private get: UserService,private deleteemp: UserService,private snackBar:MatSnackBar,private route: ActivatedRoute,public dialog: MatDialog) { }
  users: any;
  deletearray:any;
   message:any;
  id:any
   
   


  ngOnInit(): void {
    this.getdetails();
    // this.data.currentMessage.subscribe((result) => {
    //   console.log(result)
     
      
      
      
    // })

  }
  getdetails() {
    this.get.employeeget().subscribe((result: any) => {
      console.log(result);
      this.users = result
      // this.data.outgoingData(this.users)
    })
  }
    
    onDelete(user:any){
      this.deleteemp.deleteemployee(user).subscribe((result:any)=>{
          console.log(result);
          console.log("Emp deleted")
          this.snackBar.open("User Deleted in", "OK", {
            duration:4000,
          })
          // this.deletearray=result;

    })

    
}

openDialog(user:any): void {
  const dialogRef = this.dialog.open(UpdateComponent, {
    width: '1800px',
    height:'1200px',
    data:user
  });
  dialogRef.afterClosed().subscribe((result:any) => {
    console.log('The dialog was closed');
    // this.updateemployee.emit(result);
  });
}
  

}

  


  
