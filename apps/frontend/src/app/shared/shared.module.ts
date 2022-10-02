import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FieldsetModule } from 'primeng/fieldset';
import { PasswordModule } from 'primeng/password';

const MODULES = [
  FormsModule,
  TieredMenuModule,
  ButtonModule,
  ToggleButtonModule,
  MenubarModule,
  DropdownModule,
  CardModule,
  AvatarModule,
  PasswordModule,
  SelectButtonModule,
  FieldsetModule,
];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule {}
