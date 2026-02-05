# Postgres Is Enough

A curated directory of PostgreSQL extensions and tools that can replace specialized databases. Before adding Redis, Elasticsearch, Kafka, or MongoDB to your stack, see what Postgres can do.

**Live site:** [postgresisenough.com](https://postgresisenough.com)

## Contributing

Found a tool we're missing? Want to add a hosting provider or resource? PRs are welcome!

### Add a Tool

Edit `src/content/tools.yaml` and add an entry:

```yaml
- id: your-tool-id
  name: Tool Name
  description: Brief description of what it does
  problem: What problem does it solve? (phrase as a question)
  category: queues|search|vectors|time-series|caching|documents|graphs|geo|analytics|cdc|api|ui|auth|migrations|scaling|tuning|audit|testing|tooling
  url: https://github.com/org/repo
  replaces: [Redis, MongoDB]  # optional
  toolType: extension|software
```

### Add a Provider

Edit `src/content/providers.yaml`:

```yaml
- id: provider-id
  name: Provider Name
  description: Brief description
  url: https://provider.com
  logo: /logos/provider.svg  # add logo to public/logos/
  features: [Feature 1, Feature 2, Feature 3]
  featured: false  # set to true for featured providers
```

### Add a Resource

Edit `src/content/resources.yaml`:

```yaml
- id: resource-id
  title: Article or Talk Title
  url: https://example.com/article
  author: Author Name
  description: Brief description
  type: article|talk|book|course
  year: 2024
  featured: false
```

## Development

All commands are run from the root of the project:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `pnpm install`    | Install dependencies                        |
| `pnpm dev`        | Start local dev server at `localhost:4321`  |
| `pnpm build`      | Build production site to `./dist/`          |
| `pnpm preview`    | Preview build locally before deploying      |
| `pnpm check`      | Run TypeScript diagnostics                  |

## License

MIT
