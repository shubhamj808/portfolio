# Release Documentation

## Semantic Release Plugin

This project uses [`semantic-release`](https://semantic-release.gitbook.io/) to automate versioning and changelog generation based on commit messages.

### Commit Message Format

Semantic-release follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. The type of commit determines the version bump:

- **Major Release (`1.0.0 → 2.0.0`)**
  - Any commit with a `BREAKING CHANGE` in the footer or an exclamation mark after the type/scope.
  - Example:  
    ```
    feat!: change API endpoint
    ```
    or
    ```
    fix: update validation

    BREAKING CHANGE: validation logic changed
    ```

- **Minor Release (`1.0.0 → 1.1.0`)**
  - Commits with the `feat` type.
  - Example:  
    ```
    feat: add user profile page
    ```

- **Patch Release (`1.0.0 → 1.0.1`)**
  - Commits with the `fix` type or other types (e.g., `chore`, `docs`, `refactor`) that do not introduce breaking changes or features.
  - Example:  
    ```
    fix: correct typo in login form
    ```

### Example Commit Messages

- `feat: add search functionality`
- `fix: resolve crash on startup`
- `docs: update README with setup instructions`
- `refactor: simplify authentication logic`
- `chore: update dependencies`
- `feat!: remove deprecated API endpoint`

### Release Automation

When changes are merged to the main branch:
- Semantic-release analyzes commit messages.
- Determines the next version.
- Publishes a release and updates the changelog automatically.

This process is automated using the [`release.yml`](../../.github/workflows/release.yml) pipeline in the repository, which runs the necessary steps for semantic-release on each push to the main branch.

For more details, see the [semantic-release documentation](https://semantic-release.gitbook.io/).