import { Provider } from '@angular/core';
import { InitCopilotOptions } from '@auto-no-mous/copilot-web';

export declare const COPILOT_OPTIONS: import('@angular/core').InjectionToken<InitCopilotOptions>;

export declare class CopilotEmbedService {
  init(options: InitCopilotOptions): Promise<void>;
}

export declare class CopilotAutoInitService {
  mount(): Promise<void>;
}

export declare function provideCopilot(options: InitCopilotOptions): Provider[];

export type { InitCopilotOptions };
