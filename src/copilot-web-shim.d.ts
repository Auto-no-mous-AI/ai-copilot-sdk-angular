declare module '@auto-no-mous/copilot-web' {
  export interface ThemeConfig {
    primary: string;
    icon: string;
    drawerWidth: number;
    placement: 'left' | 'right';
  }

  export interface FeatureConfig {
    ask: boolean;
    test: boolean;
    agent: boolean;
  }

  export interface InitCopilotOptions {
    appId: string;
    environment: string;
    apiBaseUrl?: string;
    installToken?: string;
    getToken?: () => Promise<string>;
    theme?: Partial<ThemeConfig>;
    features?: Partial<FeatureConfig>;
  }

  export function initCopilot(options: InitCopilotOptions): Promise<void>;
}
