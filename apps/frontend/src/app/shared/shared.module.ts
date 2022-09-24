import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { TieredMenuModule } from 'primeng/tieredmenu';

const MODULES = [
  BrowserModule,
  FormsModule,
  CommonModule,
  BrowserAnimationsModule,
  TieredMenuModule,
  ButtonModule,
  ToggleButtonModule,
  MenubarModule,
  DropdownModule,
  AvatarModule,
];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule {}