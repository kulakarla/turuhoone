import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentselectorComponent } from './componentselector.component';

describe('ComponentselectorComponent', () => {
  let component: ComponentselectorComponent;
  let fixture: ComponentFixture<ComponentselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentselectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
