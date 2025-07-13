import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/loginPage";
import ContactPage from "../../e2e/pages/contactPage";

const loginPage = new LoginPage();
const contactPage = new ContactPage();

Given("I log in with valid credentials", () => {
  cy.visit("/");
  loginPage.login(Cypress.env("email"), Cypress.env("password"));
});

When("I navigate to contacts tab", () => {
  contactPage.navigateToContacts();
});

When('I click on the {string} button', (buttonText) => {
  contactPage.clickCreateContact(buttonText);
});

When(
  "I fill in the contact form with first name {string} and last name {string}",
  (firstName, lastName) => {
    contactPage.fillContactForm(firstName, lastName);
    contactPage.submitForm();
  }
);

Then("I should see {string} in the success message", (message) => {
  contactPage.verifySuccessMessage(message);
});

When("I search for the contact {string}", (name) => {
  contactPage.searchContact(name);
});

Then("I should see the contact {string} in the list", (name) => {
  contactPage.verifyContactExists(name);
});

When("I click on the contact {string}", (name) => {
  contactPage.clickOnContact(name);
});

Then("I should the contact form with first name {string} and last name {string}", (firstName,lastName) => {
  contactPage.verifyContactDetails(firstName, lastName);
});


When("I click on the first contact", () => {
  contactPage.clickOnFirstContact();
});

When("I fill in the contact form with last name {string} and save", (lastName) => {
  contactPage.fillLastName(lastName);
  contactPage.submitForm();

});
Then(
  "I should see the contact form details with last name {string}",
  (lastName) => {
    contactPage.verifyLastName(lastName);
  }
);

When("I delete the first contact", (name) => {
  contactPage.deleteContact();
});

Then(
  "I should see a confirmation message {string}",
  (message) => {
    contactPage.verifyDeletionMessage(message);
  }
);

When("I confirm the deletion", () => {
  contactPage.confirmDeletion();
});

When("I navigate back to the contacts list", () => {
  contactPage.goToContactsTab();
});

Then(
  "I should not see the contact {string} in the search results",
  (name) => {
    contactPage.verifyContactNotInSearchResults(name);
  }
);
