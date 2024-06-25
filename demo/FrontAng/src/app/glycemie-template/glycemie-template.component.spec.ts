import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieTemplateComponent } from './glycemie-template.component';

describe('GlycemieTemplateComponent', () => {
  let component: GlycemieTemplateComponent;
  let fixture: ComponentFixture<GlycemieTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlycemieTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemieTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
