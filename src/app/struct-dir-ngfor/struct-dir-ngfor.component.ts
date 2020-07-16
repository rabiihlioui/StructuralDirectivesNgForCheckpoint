import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-struct-dir-ngfor',
  templateUrl: './struct-dir-ngfor.component.html',
  styleUrls: ['./struct-dir-ngfor.component.css']
})
export class StructDirNgforComponent implements OnInit {

  pers1 = new Person(1,'Rabii', 'Hlioui', 100, 0,'Software Engineer','','')
  pers2 = new Person(2,'Messi', 'Lionel', 60, 0,'Lawyer','','')
  pers3 = new Person(3,'Slimen', 'Labyedh', 30, 0,'Psychotherapist','','')

  persons = [
    this.pers1,
    this.pers2,
    this.pers3
  ]

  constructor() { }

  ngOnInit() {
  }

}
