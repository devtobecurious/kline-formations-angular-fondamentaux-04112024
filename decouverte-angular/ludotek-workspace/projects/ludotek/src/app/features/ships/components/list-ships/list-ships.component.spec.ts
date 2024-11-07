import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShipsComponent } from './list-ships.component';
import { GetAllShips, GetAllShipsService } from '../../services/get-all-ships.service';
import { delay, Observable, of } from 'rxjs';
import { initialValues, Ships } from '../../models';

const fake: GetAllShips = {
  getAll(): Observable<Ships> {
    return of(initialValues)//.pipe(delay(1500))
  }
}

fdescribe('ListShipsComponent', () => {
  let component: ListShipsComponent;
  let fixture: ComponentFixture<ListShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListShipsComponent],
      providers: [
        { provide: GetAllShipsService, useValue: fake }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShipsComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges(true)
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 ships', () => {
    const table = fixture.nativeElement.querySelector('table')
    expect(table).toBeTruthy()

    const nbRows = table.rows.length
    expect(nbRows).toBe(3)
  })
});
