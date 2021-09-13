import { Component, Inject, OnInit } from '@angular/core';
import { Visitor } from '../shared/model/visitor.model'
import { VisitorService } from '../shared/service/visitor.service';

import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})


export class VisitorComponent implements OnInit {

  stop = false;
  isGateOpen = false;
  model = new Visitor();
  dataSource:Visitor[] = [
     /* id: 1,
      name: 'Windstorm',
      address: 'Kathmandu',
      mobile: 34234234,
      checkinTime: new Date,
      checkoutTime: new Date*/

  ];


  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'checkintime', 'checkouttime'];
  constructor(private visitorService: VisitorService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVisitors();
    this.checkStatus();
    //this.getVisitors();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.model.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isGateOpen = true;
    });
  }
   
    
checkStatus():void{
  interval(10000)
    .pipe(takeWhile(() => !this.stop))
    .subscribe(() => {
      //alert('subscribe');
      if(this.isGateOpen){
        this.isGateOpen = false;
      }
      this.getVisitors();
    });
}

  getVisitors() : void{
    //this.dataSource = ELEMENT_DATA ;
    this.visitorService.getCheckedInVisitor().subscribe((visitor:Visitor) => {
      //console.log(visitors);
      //this.dataSource = ELEMENT_DATA ;

      this.model = visitor;
      console.log('Welcome ' + this.model.name);
      this.openDialog();
      this.model.checkinStatus = true; 
      this.visitorService.saveVisitors(this.model, this.model.id).subscribe((data)=>{}, error=>{console.log(error)});;
      //this.dataSource = visitors;
      //visitors.forEach( (element) => {
      //  this.model = element;
      //  console.log(this.model.name)
        //alert('Welcome ' + this.model.name)
     // });

    });
  };


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../shared/dialog/dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick():void{
    this.dialogRef.close();
  }

}
