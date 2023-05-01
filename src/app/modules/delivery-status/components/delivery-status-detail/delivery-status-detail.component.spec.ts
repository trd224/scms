import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DeliveryStatusDetailComponent } from './delivery-status-detail.component';

describe('DeliveryStatusDetailComponent', () => {
  let component: DeliveryStatusDetailComponent;
  let fixture: ComponentFixture<DeliveryStatusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryStatusDetailComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
