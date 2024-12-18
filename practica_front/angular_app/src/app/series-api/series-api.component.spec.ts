import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesApiComponent } from './series-api.component';

describe('SeriesApiComponent', () => {
  let component: SeriesApiComponent;
  let fixture: ComponentFixture<SeriesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
