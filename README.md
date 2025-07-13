
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

QA-Panel/
├── cypress/
│   ├── e2e/
│   │   ├── api/               # API tests in Gherkin
│   │   ├── ui/                # UI feature specs
│   ├── fixtures/              # Test data
│   ├── support/               # Custom commands and hooks
│   └── reports/               # (optional) for future report generation
├── .github/workflows/         # GitHub Actions workflows
├── package.json               # Dependencies and scripts
└── README.md

⸻

📸 Artifacts on Failure

Cypress will capture and upload:
- cypress/screenshots – If a test fails
- cypress/videos – Full video of test run

These are visible in the GitHub Actions artifacts section.

