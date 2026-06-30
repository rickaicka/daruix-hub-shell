import { Type } from '@angular/core';

import {
  LucideLayoutGrid,
  LucideFileText,
  LucideBuilding2,
  LucideWallet,
  LucideChartBar,
  LucideSettings,
  LucideShieldCheck,
  LucideCircleHelp
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

  admin: LucideSettings,
  admin_panel_settings: LucideShieldCheck
};

export function getHubIcon(iconName?: string | null): Type<unknown> {
  if (!iconName) {
    return LucideCircleHelp;
  }

  return HUB_ICON_MAP[iconName] ?? LucideCircleHelp;
}
