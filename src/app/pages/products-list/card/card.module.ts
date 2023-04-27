import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CardComponent],
})
export class CardModule {}
