# Angular SDK Compatibility Contract

## Package

`@auto-no-mous/copilot-angular`

## Stable Surface

- `provideCopilot(options)` remains the primary Angular bootstrap API.
- `CopilotEmbedService` remains the imperative mounting surface.
- Angular 17+ remains supported.

## Enterprise Guarantees

- Configuration must be explicit and environment-aware.
- Secrets must never be embedded in Angular bundles.
- The wrapper must preserve the core web SDK teardown and error behavior.
