import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  state: any;
  constructor(
    private router : Router
  ) {
    this.state = this.router.getCurrentNavigation()!.extras.state;
    console.log(this.state)
    if(this.state && this.state.reload && this.state === undefined) window.location.reload();
   }

  ngOnInit(): void {
  }

}
