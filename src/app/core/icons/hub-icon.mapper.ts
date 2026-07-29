import { Type } from '@angular/core';

import {
  LucideLayoutGrid,
  LucideFileText,
  LucideBuilding2,
  LucideWallet,
  LucideChartBar,
  LucideSettings,
  LucideShieldCheck,
  LucideCircleHelp, LucideLogOut, LucideHome, LucideHouse, LucideUser, LucideStar, LucideChevronDown, LucideChevronUp
} from '@lucide/angular';

export const HUB_ICON_MAP: Record<string, Type<unknown>> = {
  dashboard: LucideLayoutGrid,
  lucideLayout: LucideLayoutGrid,

  proposta: LucideFileText,
  description: LucideFileText,

  po: LucideFileText,
  request_quote: LucideFileText,

  obra: LucideBuilding2,
  engineering: LucideBuilding2,

  financeiro: LucideWallet,
  payments: LucideWallet,

  relatorio: LucideChartBar,
  bar_chart: LucideChartBar,
  home: LucideHouse,
  user_profile: LucideUser,

  admin: LucideSettings,
  admin_panel_settings: LucideShieldCheck,
  'log-out': LucideLogOut,
  favorito: LucideStar,
  'chevron-down': LucideChevronDown,
  'chevron-up': LucideChevronUp,
};

export function getHubIcon(iconName?: string | null): Type<unknown> {
  if (!iconName) {
    return LucideCircleHelp;
  }

  return HUB_ICON_MAP[iconName] ?? LucideCircleHelp;
}
