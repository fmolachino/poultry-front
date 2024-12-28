import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ],
  providers: [UsersService],
})
export class LoginComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}