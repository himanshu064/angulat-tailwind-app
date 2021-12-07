import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  stepper: any;
  constructor(
    public authService: AuthService,
    public router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    let user: any = localStorage.getItem('user');
    console.log(JSON.parse(user));
  }
}
