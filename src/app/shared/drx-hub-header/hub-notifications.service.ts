import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface HubNotification {
  id: number; kind: string; title: string; message: string;
  route: string; created_at: string; read: boolean;
}
export interface HubNotificationList { unread: number; results: HubNotification[]; }

@Injectable({ providedIn: 'root' })
export class HubNotificationsService {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/notifications/`;
  list() { return this.http.get<HubNotificationList>(this.base); }
  markRead(id: number) { return this.http.post<{ok: boolean}>(`${this.base}${id}/read/`, {}); }
}
