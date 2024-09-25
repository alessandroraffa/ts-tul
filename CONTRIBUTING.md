# CONTRIBUTING.md Outline

1. **Introduction**
    - Purpose of the Document
    - Overview of the Project

2. **Getting Started**
    - Setting Up the Development Environment
    - Running Tests Locally
    - Understanding the Project Structure

3. **How to Contribute**
    - Types of Contributions Accepted
    - Steps to Submit a Contribution
    - Community Guidelines and Code of Conduct

4. **Conventional Commits**
    - Overview of Conventional Commits
    - Types of Commit Messages
        - Feature Commits
        - Bug Fix Commits
        - Documentation Updates
        - Performance Improvements
        - Refactoring
        - Style Changes
        - Testing and Maintenance Tasks
    - Writing Commit Messages
        - Example: Feature Commit
        - Example: Refactoring Commit
        - Example: Bug Fix
    - Linking Commits to Issues and Pull Requests

5. **Branching Strategy and Pull Requests**
    - Recommended Branching Model
    - Creating and Naming Branches
    - Pull Request Process
    - Review and Merge Criteria

6. **Code Review Process**
    - Code Review Guidelines
    - Acceptance Criteria for Merging

7. **Testing Guidelines**
    - Writing Tests
    - Test Coverage Expectations
    - Running and Updating Tests

8. **Documentation Standards**
    - Documenting Code Changes
    - Updating READMEs and Wikis

9. **Versioning and Release Management**
    - Semantic Versioning
    - Preparing for a Release
    - Release Notes and Announcements

10. **Community and Support**
    - Joining the Community
    - Getting Support and Assistance

11. **Frequently Asked Questions**

12. **Acknowledgments and Credits**

## Conventional Commits

Conventional Commits is a specification for adding human and machine-readable meaning to commit messages. This guide provides a comprehensive overview of how to use Conventional Commits effectively for change logs, semantic versioning, and semantic release.

## Introduction to Conventional Commits

Conventional Commits standardize the way developers write commit messages, making it easier to manage versions and release notes. The structure of a conventional commit message helps in automatically generating change logs and managing semantic versioning.

### Basic Structure

A conventional commit message generally follows this structure:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Components

1. **Type**: Indicates the purpose of the commit. Common types include:
   - `feat` (new feature)
   - `fix` (bug fix)
   - `docs` (documentation changes)
   - `style` (code style changes, no production code change)
   - `refactor` (refactoring code)
   - `perf` (performance improvements)
   - `test` (adding missing tests)
   - `chore` (maintenance tasks)

2. **Scope** (Optional): Specifies the part of the codebase affected by the changes (e.g., `login`, `user dashboard`).

3. **Description**: A concise explanation of the changes. It should:
   - Use the imperative, present tense (e.g., "change" not "changed" or "changes").
   - Not capitalize the first letter.
   - Not end with a period.

4. **Body** (Optional): Provides a more detailed description of the changes.

5. **Footer** (Optional): Used for referencing issue tracker IDs.

### Example

```
feat(authentication): add captcha to login form

- include Google reCAPTCHA in login page
- update login form submission logic

Closes #123, #456
```

## Integrating Conventional Commits with Semantic Versioning

Semantic Versioning (SemVer) is a versioning system that uses a three-part version number: Major.Minor.Patch (e.g., 1.0.0). The changes in commit messages can dictate version increments:

- `feat`: Increases the minor version.
- `fix`: Increases the patch version.
- BREAKING CHANGE: Increases the major version.

## Automating Change Log Generation

Tools like `standard-version` or `semantic-release` can automate change logs and versioning:

1. **standard-version**:
   - Automatically generates a CHANGELOG.md from commit messages.
   - Bumps version numbers based on commit types.

2. **semantic-release**:
   - Fully automates the versioning/release process.
   - Integrates with continuous integration (CI) tools.

## Implementing Conventional Commits

1. **Educate Your Team**: Ensure all team members understand and follow the Conventional Commits specification.

2. **Enforce Standards**: Use tools like commitlint to enforce commit message standards.

3. **Automate Processes**: Implement tools like `standard-version` or `semantic-release` for automated versioning and change log generation.

4. **Continuous Integration (CI)**: Integrate these tools with your CI pipeline to streamline the release process.

## Conclusion

Adopting Conventional Commits streamlines the development workflow, making it easier to manage releases, generate change logs, and maintain a clear project history. By following these guidelines, you ensure a more organized, readable, and automated process that benefits the entire development lifecycle.

## Conventional Commits

Conventional Commits is a specification for adding human and machine-readable meaning to commit messages. This guide provides a comprehensive overview of how to use Conventional Commits effectively for change logs, semantic versioning, and semantic release.

Conventional Commits provide a set of rules for creating an explicit commit history, which makes it easier to track changes and automate versioning and release processes. This structured format includes a predefined set of commit types, optional scopes, and a short description.

In a mono-repository, where multiple projects or packages coexist, Conventional Commits offer significant advantages:
- **Improved Clarity**: Clearer insight into the nature of changes across different parts of the repository.
- **Automated Changelog Generation**: Simplifies the process of generating changelogs for each project within the mono-repo.
- **Enhanced Version Control**: Facilitates semantic versioning for multiple packages, aiding in the release process.

Conventional Commits standardize the way developers write commit messages, making it easier to manage versions and release notes. The structure of a conventional commit message helps in automatically generating change logs and managing semantic versioning.

### Types of Commit Messages

#### Feature Commits

Used for new features or enhancements. Prefix with `feat`.

#### Bug Fix Commits

Used for fixing bugs. Prefix with `fix`.

#### Documentation Updates

For changes or improvements in documentation. Prefix with `docs`.

#### Performance Improvements

Improvements to the system's performance. Prefix with `perf`.

#### Refactoring

Code changes that neither fix bugs nor add features. Prefix with `refactor`.

#### Style Changes

Changes that do not affect the meaning of the code (white-space, formatting, etc.). Prefix with `style`.

#### Testing and Maintenance Tasks

Adding missing tests or correcting existing ones, and maintenance tasks without impacting the user. Prefix with `test` or `chore`.

### Writing Commit Messages for a Mono-Repo

#### Example: Feature Commit for a Specific Package

- `feat(database): add new indexing capabilities`
  Description: Implement new indexing features in the 'database' package to improve query performance.

#### Example: Global Refactoring Commit

- `refactor(core): streamline exception handling`
  Description: Overhaul the exception handling mechanism across the entire 'core' module for consistency and maintainability.

#### Example: Bug Fix in a Specific Service

- `fix(api-service): resolve memory leak in data processing`
  Description: Address a critical memory leak issue identified in the 'api-service' component during data-intensive operations.

### Linking Commits to Issues and Pull Requests

To link commits to specific issues or pull requests, include the issue or pull request number in the commit footer. This practice enhances traceability and provides context for the change.

- **Example**: 
```
fix: correct minor typos in code

see the issue for details on the typos fixed

fixes #19
```

This example shows a bug fix commit that corrects minor typos and references issue number 19.

---

When making a commit specifically for documentation changes in the TUL mono-repo, you should structure your Conventional Commit message to clearly reflect that the change is related to documentation and specify the part of the mono-repo affected. Here's a general structure you can follow:

```
docs(<scope>): <short, descriptive message>

<optional body>

<optional footer>
```

### Components of the Commit Message

1. **Type**: Always use `docs` for documentation-related changes.

2. **Scope** (Optional but recommended): This specifies the part of the mono-repo affected by the change. The scope could be the name of a specific package, module, or a general area of the project. For instance, `frontend`, `backend`, `api`, etc.

3. **Short, Descriptive Message**: A concise description of what the change is. Start with a lower case letter and don't end with a period.

4. **Optional Body** (Optional): If needed, provide a more detailed explanation of the change. This is useful for complex changes where the short message isn't sufficient.

5. **Optional Footer** (Optional): This is typically used for referencing related issues or pull requests, like `Closes #123` or `Related to #456`.

### Example

If you're updating the README file in the `frontend` part of the TUL mono-repo, your commit message might look like this:

```
docs(frontend): update README with new section on state management

Add detailed explanations and examples for managing state in React components, including context and hooks.

Related to #789
```

In this example, `docs(frontend)` makes it clear that the documentation change is related to the frontend. The message succinctly describes the change, and the body provides additional context. The footer links the commit to a related issue.

For a commit that affects the overall documentation of the TUL mono-repo, rather than a specific part or package, you can omit the specific scope or use a general term like `global` or `project-wide` to indicate the broad impact of the change. Here's how you can structure such a Conventional Commit message:

```
docs: <short, descriptive message>

<optional body>

<optional footer>
```

### Example

Suppose you are updating the general contribution guidelines and adding a new section about code style in the project-wide documentation. Your commit message could be structured like this:

```
docs: update contribution guidelines with code style section

Include a new section in the contribution guidelines outlining the project's code style preferences and examples for adhering to these styles in submissions.

Related to #456
```

In this example, using just `docs` without a specific scope signifies that the change affects the project's documentation as a whole. The message provides a clear description of the change, and the optional body offers more detail. The footer can be used to link the commit to related issues or broader project initiatives.
