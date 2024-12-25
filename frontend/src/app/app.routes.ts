import { Routes } from '@angular/router';

//User components
import { LoginComponent } from './user-management/login/login.component';
import { RegisterComponent } from './user-management/register/register.component';
import { UserListComponent } from './user-management/user-list/user-list.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UserListComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
