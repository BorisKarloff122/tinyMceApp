import { Component, OnInit } from '@angular/core';
import {addToLocalStorage} from "../../utils/utils";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public dataModel: any;
  constructor() { }

  ngOnInit(): void {
  }

  public modelChange(data: any){
    this.dataModel = data;
    addToLocalStorage(this.dataModel);
  }

  public saveModel(){
    addToLocalStorage(this.dataModel);
    return
  }
}
