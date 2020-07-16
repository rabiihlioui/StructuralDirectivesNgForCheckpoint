import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() itemId: number

  @Output() chosenItem = new EventEmitter()

  pic; name; firstName: string

  pers = new Person(0,'','',0,0,'','../../assets/images/developer.png','../../assets/images/coverDev.png')

  pers1 = new Person(1,'Rabii','Hlioui',60,15786937,'Software Engineer','../../assets/images/rabiiHlioui.png','../../assets/images/coverRabii.png')
  pers2 = new Person(2,'Lionel','Messi',120,94557937,'Footballer','../../assets/images/lionelMessi.png','../../assets/images/coverLionel.png')
  pers3 = new Person(3,'Emna','Mejri',30,63339411,'Secretary','../../assets/images/imenMejri.png','../../assets/images/coverImen.png')
  pers4 = new Person(4,'Slimen','Labyedh',40,76945137,'Psychotherapist','../../assets/images/slimenLabyedh.png','../../assets/images/coverSlimen.png')

  constructor() { }

  ngOnInit() {
    this.initiateDetail()
    this.initiateItem()
  }

  initiateDetail() {
    this.chosenItem.emit(
      this.pers
    )
  }

  initiateItem() {
    if (this.itemId == 1) {
      this.pic = this.pers1.picture
      this.name = this.pers1.name
      this.firstName = this.pers1.firstname
    }
    else if (this.itemId == 2) {
      this.pic = this.pers2.picture
      this.name = this.pers2.name
      this.firstName = this.pers2.firstname
    }
    else if (this.itemId == 3){
      this.pic = this.pers3.picture
      this.name = this.pers3.name
      this.firstName = this.pers3.firstname
    }
    else{
      this.pic = this.pers4.picture
      this.name = this.pers4.name
      this.firstName = this.pers4.firstname
    }
  }

  getItemId(){
    if (this.itemId == 1) {
      this.pers = this.pers1
    }
    else if (this.itemId == 2) {
      this.pers = this.pers2
    }
    else if (this.itemId == 3){
      this.pers = this.pers3
    }
    else {
      this.pers = this.pers4
    }
    this.chosenItem.emit(
      this.pers
    )
  }

}
