import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionsTypesComponent } from './list-transactions-types.component';

describe('ListTransactionsTypesComponent', () => {
  let component: ListTransactionsTypesComponent;
  let fixture: ComponentFixture<ListTransactionsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransactionsTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTransactionsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
