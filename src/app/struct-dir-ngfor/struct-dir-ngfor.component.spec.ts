import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirNgforComponent } from './struct-dir-ngfor.component';

describe('StructDirNgforComponent', () => {
  let component: StructDirNgforComponent;
  let fixture: ComponentFixture<StructDirNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDirNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
