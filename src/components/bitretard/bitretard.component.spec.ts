import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitretardComponent } from './bitretard.component';

describe('BitretardComponent', () => {
  let component: BitretardComponent;
  let fixture: ComponentFixture<BitretardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitretardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitretardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
