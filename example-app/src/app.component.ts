import { Component, OnInit, inject } from '@angular/core';
import { CopilotEmbedService } from '@auto-no-mous/copilot-angular';

@Component({
  selector: 'example-root',
  standalone: true,
  template: `<h1>Angular Copilot Example</h1><p>The copilot widget is initialized on load.</p>`
})
export class AppComponent implements OnInit {
  private readonly copilot = inject(CopilotEmbedService);

  async ngOnInit(): Promise<void> {
    await this.copilot.init({
      appId: 'app_demo_angular',
      environment: 'dev',
      apiBaseUrl: 'http://127.0.0.1:3000/api',
      getToken: async () => 'demo-install-token',
      theme: {
        primary: '#1f2a7a',
        drawerWidth: 420,
        placement: 'right'
      }
    });
  }
}
