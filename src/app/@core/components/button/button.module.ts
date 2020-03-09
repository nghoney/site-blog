import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LazyLoadModule } from '../../modules/lazy-loading.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    LazyLoadModule
  ],
  exports: [ButtonComponent],
})
export class ButtonModule { }
