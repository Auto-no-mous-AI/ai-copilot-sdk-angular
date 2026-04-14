import { Injectable, InjectionToken, Provider, inject } from '@angular/core';
import { initCopilot, InitCopilotOptions } from '@auto-no-mous/copilot-web';

export const COPILOT_OPTIONS = new InjectionToken<InitCopilotOptions>('COPILOT_OPTIONS');

@Injectable({ providedIn: 'root' })
export class CopilotEmbedService {
  async init(options: InitCopilotOptions): Promise<void> {
    await initCopilot(options);
  }
}

@Injectable({ providedIn: 'root' })
export class CopilotAutoInitService {
  private readonly service = inject(CopilotEmbedService);
  private readonly options = inject(COPILOT_OPTIONS);

  async mount(): Promise<void> {
    await this.service.init(this.options);
  }
}

export function provideCopilot(options: InitCopilotOptions): Provider[] {
  return [{ provide: COPILOT_OPTIONS, useValue: options }];
}

export type { InitCopilotOptions } from '@auto-no-mous/copilot-web';
