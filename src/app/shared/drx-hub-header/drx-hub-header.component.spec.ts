import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DrxHubHeaderComponent } from './drx-hub-header.component';

describe('DrxHubHeaderComponent', () => {
  let component: DrxHubHeaderComponent;
  let fixture: ComponentFixture<DrxHubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrxHubHeaderComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrxHubHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('abre e fecha as opções pelo botão do perfil', () => {
    const trigger = fixture.nativeElement.querySelector('.user-more') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelector('.user-dropdown')).toBeTruthy();
    trigger.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.user-dropdown')).toBeNull();
  });

  it('emite logout e fecha as opções ao clicar em Sair', () => {
    let count = 0;
    const subscription = component.logoutSelected.subscribe(() => count++);
    component.toggleUserMenu();
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.user-dropdown__item').click();
    fixture.detectChanges();
    expect(count).toBe(1);
    expect(component.userMenuOpen()).toBe(false);
    subscription.unsubscribe();
  });

  it('fecha com Escape e devolve o foco ao botão do perfil', () => {
    component.toggleUserMenu();
    fixture.detectChanges();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(component.userMenuOpen()).toBe(false);
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('.user-more'));
  });

  it('fecha ao clicar fora do perfil', () => {
    component.toggleUserMenu();
    fixture.detectChanges();
    document.body.click();
    fixture.detectChanges();
    expect(component.userMenuOpen()).toBe(false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
