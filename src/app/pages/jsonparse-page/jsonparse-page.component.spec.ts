import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonparsePageComponent } from './jsonparse-page.component';

describe('JSONParsePageComponent', () => {
  let component: JsonparsePageComponent;
  let fixture: ComponentFixture<JsonparsePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonparsePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonparsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
