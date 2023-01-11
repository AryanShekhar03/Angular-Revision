import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, FormBuilder ,ReactiveFormsModule, FormArray} from '@angular/forms';
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
  selectedDepartment:any=[]
 
  departmentList:any=[
    {name:"HR", value:'HR', checked:false},
    {name:"Finance", value:'Finance', checked:false},
    {name:"Sales", value:'Sales', checked:false},
    {name:"Engineer", value:'Engineer', checked:false},
    {name:"Others", value:'Others', checked:false},
  ]
  constructor(private formBuilder:FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      department:this.formBuilder.array([],[ Validators.required]),
      profile: ['', Validators.required],
      startDate:['', Validators.required],
      salary:['', Validators.required],
        notes:['', Validators.required],
      
  });
}

onCheckboxChange(event:any) {
  const depart: FormArray = this.registerForm.get('department')as FormArray;

  /* Selected */
  if(event.target.checked){
    // Add a new control in the arrayForm
    depart.push(new FormControl(event.target.value));
  }else{
    const index= depart.controls.findIndex(x => x.value === event.target.value);
    depart.removeAt(index);
  }
}

  get f() {return this.registerForm.controls;}
  onSubmit() {
    this.submitted = true;
    

    if (this.registerForm.valid){
      console.log("emp added successfull");
      let employees={
      name: this.registerForm.value.name,
      gender:this.registerForm.value.gender,
      department:this.registerForm.value.department,
      profile:this.registerForm.value.profile,
      startDate:this.registerForm.value.startDate,
      salary:this.registerForm.value.salary,
       notes:this.registerForm.value.notes
      }
      this.user.addemployee(employees).subscribe((result:any)=>{
        console.log(result)
      })
    }
    
    }
  
  

 
 
   
 
  
}





