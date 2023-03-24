import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
  declarations: [LoginComponent, RegistroComponent],
})
export class AuthModule {}
