import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CretaskerComponent } from './cretasker.component';

describe('CretaskerComponent', () => {
  let component: CretaskerComponent;
  let fixture: ComponentFixture<CretaskerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CretaskerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CretaskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
