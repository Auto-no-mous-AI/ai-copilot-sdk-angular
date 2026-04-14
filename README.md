# @auto-no-mous/copilot-angular

Angular wrapper around the standalone AI Copilot web SDK.

## Install

```bash
npm install @auto-no-mous/copilot-angular @auto-no-mous/copilot-web
```

## Usage

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideCopilot } from '@auto-no-mous/copilot-angular';

bootstrapApplication(AppComponent, {
  providers: [
    ...provideCopilot({
      appId: 'app_123',
      environment: 'prod',
      apiBaseUrl: 'https://api.yourcopilot.ai/api',
      getToken: async () => {
        const response = await fetch('/api/copilot/install-token');
        return response.text();
      }
    })
  ]
});
```

To mount the widget, inject `CopilotEmbedService` or `CopilotAutoInitService` and call `init()` / `mount()`.
