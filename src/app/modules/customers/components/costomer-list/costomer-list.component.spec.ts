import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CostomerListComponent } from './costomer-list.component';

describe('CostomerListComponent', () => {
  let component: CostomerListComponent;
  let fixture: ComponentFixture<CostomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostomerListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
