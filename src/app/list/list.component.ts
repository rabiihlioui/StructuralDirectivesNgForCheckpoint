import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  chosenItemId: Person

  @Output() chosenId = new EventEmitter()
  
  ids = [1, 2, 3, 4]

  constructor() { }

  ngOnInit() {
  }

  chosenItem(itemId){
    this.chosenItemId = itemId
    this.chosenId.emit(
      this.chosenItemId
    )
  }

}
