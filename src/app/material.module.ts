import { NgModule} from '@angular/core';
import { MatMenuModule, MatFormFieldModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { CanDisable} from '@angular/material';
// import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  imports: [MatMenuModule,MatSelectModule,MatFormFieldModule],
  exports: [MatMenuModule,MatSelectModule,MatFormFieldModule]
})
export class MaterialModule {

}
