import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() id: Person

  pers: Person

  cover: string

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.pers = this.id
  }

}
