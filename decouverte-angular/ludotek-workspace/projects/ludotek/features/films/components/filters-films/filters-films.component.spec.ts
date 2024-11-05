import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersFilmsComponent } from './filters-films.component';

describe('FiltersFilmsComponent', () => {
  let component: FiltersFilmsComponent;
  let fixture: ComponentFixture<FiltersFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersFilmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
