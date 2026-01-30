# 🌳 Git Workflow: Feature Branching

We use a feature-branch workflow to manage changes, which keeps our `main` branch clean and stable.

## 1. Branches

*   **`main`**: This branch always reflects the latest production-ready code. Commits are not allowed directly to `main`.
*   **`develop`**: This branch contains the latest integrated changes from all features. All feature branches should branch off `develop`.
*   **`feature/<feature-name>`**: Created for every new feature or task. Use a descriptive name (e.g., `feature/add-contact-form`).

## 2. Process

1.  **Sync your local `develop` branch**:
    ```bash
    git checkout develop
    git pull origin develop
    ```

2.  **Create a new feature branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```

3.  **Code and Commit**: Work on your task and commit your changes frequently with descriptive messages.
    *   *Bad:* `fixed things`
    *   *Good:* `feat(contact): Add contact form submission logic`

4.  **Sync frequently**: Pull the latest changes from the `develop` branch into your feature branch to prevent large merge conflicts later.
    ```bash
    git pull origin develop
    ```

5.  **Push your changes**:
    ```bash
    git push origin feature/your-feature-name
    ```

6.  **Open a Pull Request (PR)**:
    *   Once your feature is complete and tested, open a PR from your `feature` branch to the **`dev`** branch.
    *   Ensure all automated checks (linting, tests) pass before requesting a review.
    *   A mentor or peer will review and merge it.

## 3. Hotfixes

For urgent production bugs, we use a separate `hotfix` branch that branches off `main` and merges back into both `main` and `dev`. A mentor will usually manage this process.
