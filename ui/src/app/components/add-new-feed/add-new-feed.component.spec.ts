import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFeedComponent } from './add-new-feed.component';

describe('AddNewFeedComponent', () => {
  let component: AddNewFeedComponent;
  let fixture: ComponentFixture<AddNewFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
