import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { HubModule } from '../../core/auth/models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class HubDashboardService {
  private readonly httpClient = inject(HttpClient);

  updateFavorite(
    moduleSlug: string,
    favorito: boolean
  ): Observable<HubModule> {
    return this.httpClient.patch<HubModule>(
      `${environment.apiUrl}/hub/modulos/${moduleSlug}/favorito/`,
      {
        favorito
      }
    );
  }
}
