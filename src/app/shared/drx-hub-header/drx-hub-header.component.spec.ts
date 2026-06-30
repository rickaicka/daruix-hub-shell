import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrxHubHeaderComponent } from './drx-hub-header.component';

describe('DrxHubHeaderComponent', () => {
  let component: DrxHubHeaderComponent;
  let fixture: ComponentFixture<DrxHubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrxHubHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrxHubHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
