import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingsandComponent } from './fallingsand.component';

describe('FallingsandComponent', () => {
  let component: FallingsandComponent;
  let fixture: ComponentFixture<FallingsandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FallingsandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FallingsandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
