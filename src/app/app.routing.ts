import { Route } from '@angular/compiler/src/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AnyARecord } from 'dns';
//import { Route} from '@angular/router';
//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes= [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);