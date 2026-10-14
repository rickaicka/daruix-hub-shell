import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it } from 'vitest';

import { AuthStore } from '../../auth/store/auth.store';
import { ViewportStore } from '../../device/viewport.store';
import { HubLayoutComponent } from './hub-layout.component';

describe('HubLayoutComponent', () => {
  let component: HubLayoutComponent;
  let fixture: ComponentFixture<HubLayoutComponent>;

  const usuario = signal<any>({
    nome: 'Usuário de teste',
    permissoes: [],
    modulos: [
      {
        slug: 'gestao-administrativa',
        nome: 'Gestão Administrativa',
        icone: 'settings',
        modulo_slug: 'gestao-administrativa',
        desktop_enabled: true,
        children: [
          {
            slug: 'cadastros',
            nome: 'Cadastros',
            icone: 'folder-kanban',
            children: [
              {
                slug: 'cadastro-propostas',
                nome: 'Cadastro de Propostas',
                icone: 'file-plus-2',
                modulo_slug: 'gestao-administrativa',
                rota: 'cadastro-propostas',
                desktop_enabled: true
              }
            ]
          }
        ]
      }
    ]
  });

  const authStoreMock = {
    usuario,
    syncFromSession(): void {},
    isLoggedIn(): boolean {
      return true;
    },
    logout(): void {}
  };

  const viewportStoreMock = {
    isMobile: signal(false),
    isDesktop: signal(true)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubLayoutComponent],
      providers: [
        provideRouter([]),
        {
          provide: AuthStore,
          useValue: authStoreMock
        },
        {
          provide: ViewportStore,
          useValue: viewportStoreMock
        }
      ]
    })
      .overrideComponent(HubLayoutComponent, {
        set: {
          template: '',
          imports: []
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(HubLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve adaptar módulo, categoria e feature para o sidebar', () => {
    const module = component.sidebarItems()[0]!;
    const category = module.categories[0]!;
    const feature = category.features[0]!;

    expect(module.id).toBe('gestao-administrativa');
    expect(module.label).toBe('Gestão Administrativa');
    expect(module.icon).toBe('settings');
    expect(module.route).toBe('/hub/gestao-administrativa');

    expect(category.id).toBe(
      'gestao-administrativa:cadastros'
    );
    expect(category.label).toBe('Cadastros');
    expect(category.icon).toBe('folder-kanban');

    expect(feature.id).toBe(
      'gestao-administrativa:cadastros:cadastro-propostas'
    );
    expect(feature.icon).toBe('file-plus-2');
    expect(feature.route).toBe(
      '/hub/gestao-administrativa/cadastro-propostas'
    );
  });
});
