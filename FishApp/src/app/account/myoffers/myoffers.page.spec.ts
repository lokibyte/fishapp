import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyoffersPage } from './myoffers.page';

describe('MyoffersPage', () => {
  let component: MyoffersPage;
  let fixture: ComponentFixture<MyoffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyoffersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyoffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
