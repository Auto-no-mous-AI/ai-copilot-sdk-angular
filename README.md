# @auto-no-mous/copilot-angular
[![CI](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-angular/actions/workflows/ci.yml/badge.svg)](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-angular/actions/workflows/ci.yml) [![Release](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-angular/actions/workflows/release.yml/badge.svg)](https://github.com/Auto-no-mous-AI/ai-copilot-sdk-angular/actions/workflows/release.yml)



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

## CI And Release

- Manual CI trigger is available through the CI workflow in GitHub Actions.
- Release instructions live in [docs/releasing.md](./docs/releasing.md).

