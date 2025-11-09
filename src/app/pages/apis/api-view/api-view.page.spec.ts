import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiViewPage } from './api-view.page';

describe('ApiViewPage', () => {
  let component: ApiViewPage;
  let fixture: ComponentFixture<ApiViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
