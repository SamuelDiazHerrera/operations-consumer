import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { OperationService } from './operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public result: number ;
  @ViewChild('num1') num1:ElementRef;
  @ViewChild('num2') num2:ElementRef;

  constructor(private operationService: OperationService) {}
  ngOnInit(): void {
  }

  public getOperationsResult(): void { 
    this.operationService.getASum(this.num1.nativeElement.value , this.num2.nativeElement.value).subscribe((response: number) => {
      this.result = response;
      this.operationService.getAProduct(this.result).subscribe((response: number) => {
        this.result = response;
        this.operationService.getAPower(this.result).subscribe((response: number) => {
          this.result = response;
        });
      }); 
    });
  }
}
