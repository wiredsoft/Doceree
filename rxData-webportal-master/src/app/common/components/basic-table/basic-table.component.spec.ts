import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTableComponent } from './basic-table.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('BasicTableComponent', () => {
  let component: BasicTableComponent;
  let fixture: ComponentFixture<BasicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicTableComponent],
      imports: [NgxPaginationModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTableComponent);
    component = fixture.componentInstance;
    component.tableObj = [];
    component.tableObj.tableData = [{
      date: '12/13/2020',
      dateConsumption: 63733,
      amount: 10000,
      paymentStatus: 'In process',
      paymentStatusTitle: 'Pending',
      bank: 'SBI',
      invoice: 'Create',
      bills: 'Download'
    }]
    component.tableObj.tableCol = [{
      name: 'Date',
      key: 'date',
      type: 'date'
    }];
    component.tableObj.tableHeader = 'Payments';
    component.tableObj.isPagination = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should onClickColoumn method called ', () => {
      const Index = 1;
      const Object = ['demo'];
      component.onClickColoumn(Index, Object);
    });
    it('should pageChange method called ', () => {
      const Index = 1;
      component.pageChange(Index);
      expect(component.config.currentPage)
        .toEqual(Index);
    });
  });
});
