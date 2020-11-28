import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtodoComponent } from './listtodo.component';

describe('ListtodoComponent', () => {
  let component: ListtodoComponent;
  let fixture: ComponentFixture<ListtodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
