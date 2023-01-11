import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() childmessage:any;
  Array:any

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

}
