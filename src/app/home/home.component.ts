import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild(BarecodeScannerLivestreamComponent)
    BarecodeScanner: BarecodeScannerLivestreamComponent;
    
    barcodeValue;
    
    ngAfterViewInit() {
        this.BarecodeScanner.start();
    }
 
    onValueChanges(value){
        this.barcodeValue = value.code;
    }

  chips : string[];
  selectedItem: string[] = [];

  status: boolean[];
  constructor() { }

  ngOnInit() {
    this.chips = ['fruits','vegetables','juice', 'soup'];
  }

  changeTheName(chip){
    this.selectedItem.push(chip);
    console.log(this.selectedItem);
  }

  logThis(){
    console.log("......logging selection");
    
  }

}
