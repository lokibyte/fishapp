import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryoptsPage } from './deliveryopts.page';

describe('DeliveryoptsPage', () => {
  let component: DeliveryoptsPage;
  let fixture: ComponentFixture<DeliveryoptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryoptsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryoptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
