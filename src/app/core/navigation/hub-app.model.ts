export interface HubApp {
  id: string;
  label: string;
  description: string;
  route: string;
  icon: string;
  requiredPermission: string;
  enabled: boolean;
}
