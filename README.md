
# 🧪 QA-Panel – Cypress + Cucumber + API Testing

This project contains **automated end-to-end and API tests** for the QA Panel application using **Cypress** with **Cucumber (Gherkin syntax)**. It supports CI/CD with **GitHub Actions** and is ready for both local and pipeline execution.

---

## 📦 Tech Stack

- **Cypress** – Core testing framework for UI
- **Cypress-Cucumber-Preprocessor** – Gherkin syntax support
- **REST API testing** using Cypress
- **GitHub Actions** – CI pipeline with artifact uploads

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mira-remon/QA-Panel.git
cd QA-Panel

2. Install dependencies

npm install

3. Run tests locally

npx cypress open       # Interactive mode
npx cypress run        # Headless mode
```
⸻

🧪 Running in CI

Tests are triggered automatically on:
- Push to main
- Pull request to main

CI pipeline:
- Installs Node.js and dependencies
- Runs Cypress UI + API tests
- Uploads screenshots and videos (if any test fails)

You can view the test status in the Actions tab.

⸻

📁 Project Structure
```bash
QA-Panel/
├── .github/                      # GitHub config (e.g., workflows)
├── cypress/
│   ├── e2e/
│   │   ├── features/             # UI + API test scenarios in Gherkin
│   │   │   ├── contact_crud_ui.feature
│   │   │   └── get_contact_api.feature
│   ├── pages/                    # Page Object files
│   │   ├── contactPage.js
│   │   └── loginPage.js
│   ├── reports/
│   │   └── assets/               # Placeholder for HTML/JSON reports
│   ├── support/
│   │   ├── step_definitions/     # Step definitions for Gherkin tests
│   │   │   ├── contact_api_steps.js
│   │   │   └── contact_steps.js
│   │   └── e2e.js                # Cypress support index
│   └── videos/                   # Cypress videos from test runs
├── node_modules/                # Project dependencies
├── cypress.config.js            # Cypress configuration
├── package.json                 # Project metadata and scripts
└── package-lock.json            # Dependency lockfile
```
⸻

📸 Artifacts on Failure

Cypress will capture and upload:
- cypress/screenshots – If a test fails
- cypress/videos – Full video of test run

These are visible in the GitHub Actions artifacts section.

