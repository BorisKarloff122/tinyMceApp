import { Component, OnInit } from '@angular/core';
import {getFromLocalStorage} from "../../utils/utils";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list = getFromLocalStorage();
  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
  }

}
