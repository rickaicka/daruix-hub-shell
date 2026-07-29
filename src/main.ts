import { initFederation } from '@angular-architects/native-federation';

import { environment } from './environments/environment';


initFederation({ ...environment.remotes })
  .then(() => import('./bootstrap'))
  .catch((error: unknown) => {
    console.error(
      'Falha ao inicializar o Native Federation:',
      error,
    );
  });
