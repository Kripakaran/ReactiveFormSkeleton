import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockBranchComponent } from './stock-branch/stock-branch.component';
import { StockArrayComponent } from './stock-array/stock-array.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';



@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockArrayComponent,
    StockSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [StockInventoryComponent]
})
export class StockInventoryModule { }
