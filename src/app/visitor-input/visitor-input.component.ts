import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Visitor } from '../shared/model/visitor.model';
import { VisitorService } from '../shared/service/visitor.service';


@Component({
  selector: 'app-visitor-input',
  templateUrl: './visitor-input.component.html',
  styleUrls: ['./visitor-input.component.css']
})
export class VisitorInputComponent implements OnInit {

  model = new Visitor();
  constructor(private visitorService: VisitorService,) { }

  ngOnInit(): void {
    
  }


  onSubmit(visitorForm:NgForm):void{

    this.visitorService.saveVisitors(this.model, 0).subscribe((data)=>{
      visitorForm.resetForm();

    }, error=>{console.log(error)});;
  }

}
