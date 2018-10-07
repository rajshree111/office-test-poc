import { NgModule} from '@angular/core';
import { MatMenuModule, MatFormFieldModule} from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { CanDisable} from '@angular/material';


@NgModule({
  imports: [MatMenuModule,MatSelectModule,MatFormFieldModule],
  exports: [MatMenuModule,MatSelectModule,MatFormFieldModule]
})
export class MaterialModule {

}
