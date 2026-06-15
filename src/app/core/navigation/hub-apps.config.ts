import { HubApp } from './hub-app.model';

export const HUB_APPS: HubApp[] = [
  {
    id: 'remessas',
    label: 'Memorando de Remessas',
    description: 'Consulta e compilação dos memorandos vindos do legado Access.',
    route: '/remessas',
    icon: 'truck',
    requiredPermission: 'remessas.access',
    enabled: true
  },
  {
    id: 'admin',
    label: 'Administração',
    description: 'Usuários, permissões e configurações do HUB.',
    route: '/admin',
    icon: 'settings',
    requiredPermission: 'admin.access',
    enabled: true
  },
  {
    id: 'obras',
    label: 'Obras',
    description: 'Gestão operacional de obras e equipes externas.',
    route: '/obras',
    icon: 'hard-hat',
    requiredPermission: 'obras.access',
    enabled: false
  }
];
