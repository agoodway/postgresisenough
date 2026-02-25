# Project automation recipes

# Start development server
up:
    pnpm dev

# Deploy to production
deploy:
    # TODO: Configure deployment

# Run tests
test:
    pnpm check

# Run type checking and linting
check:
    pnpm check

# Build the project
build:
    pnpm build

# Preview production build
preview:
    pnpm preview

# Clean build artifacts
clean:
    rm -rf node_modules dist .astro
