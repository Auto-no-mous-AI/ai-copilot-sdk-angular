# Getting Started

1. Install `@auto-no-mous/copilot-angular` and `@auto-no-mous/copilot-web`.
2. Register providers with `provideCopilot(...)`.
3. Inject `CopilotEmbedService` into your root component or shell service.
4. Call `init(...)` during app bootstrap, after auth, or from a route-level effect.
5. Keep the final token minting endpoint on your backend so browser code never stores a long-lived secret.
