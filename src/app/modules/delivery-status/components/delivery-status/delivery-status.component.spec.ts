import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DeliveryStatusComponent } from './delivery-status.component';

describe('DeliveryStatusComponent', () => {
  let component: DeliveryStatusComponent;
  let fixture: ComponentFixture<DeliveryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryStatusComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
