import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';


@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.scss']
})
export class AddempComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  salary =0;
  constructor(private formBuilder:FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
      startDate: ['', Validators.required],
      profile: ['', Validators.required],
      
  });
}
  get f() {return this.registerForm.controls;}
  onSubmit() {
    this.submitted = true;
    

    if (this.registerForm.valid){
      console.log("emp added successfullt");
      let employee={
      name: this.registerForm.value.name,
      gender:this.registerForm.value.gender,
      department: this.registerForm.value.department,
      salary: this.registerForm.value.salary,
      startDate: this.registerForm.value.startDate,
      profile:this.registerForm.value.profile
      }
      this.user.employee(employee).subscribe((result:any)=>{
        console.log(result)
      })
    }
      // this.user.login(data).subscribe((response:any)=>{
    }
  
  

 
 
   
 
  
}





