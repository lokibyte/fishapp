import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageaddressPage } from './manageaddress.page';

describe('ManageaddressPage', () => {
  let component: ManageaddressPage;
  let fixture: ComponentFixture<ManageaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageaddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
