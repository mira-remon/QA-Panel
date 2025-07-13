class ContactPage {
  navigateToContacts() {
    cy.contains("Contacts").click();
  }
  clickCreateContact() {
    cy.get(".btn-indigo").click();
  }
  fillContactForm(firstName, lastName) {
    cy.contains("label", "First name")
      .invoke("attr", "for")
      .then((id) => {
        cy.get(`#${id}`).clear().type(firstName);
      });
    cy.contains("label", "Last name")
      .invoke("attr", "for")
      .then((id) => {
        cy.get(`#${id}`).clear().type(lastName);
      });
   
  }
  submitForm() {
   cy.get('button[type="submit"]').click();
  }

  searchContact(name) {
    cy.get('.relative').clear().type(name);
  }
  verifyContactExists(name) {
    cy.contains("a", name)
      .should("have.attr", "href")
      .and("include", "/contacts/")
      .and("be.visible");
  }
  clickOnContact(name) {
    cy.contains("a", name)
      .should("have.attr", "href")
      .and("include", "/contacts/")
      .and("be.visible")
      .click();
  }
  verifyContactDetails(firstName, lastName) {
    cy.contains("label", "First name")
      .invoke("attr", "for")
      .then((id) => {
        cy.get(`#${id}`).should("have.value", firstName);
      });

    cy.contains("label", "Last name")
      .invoke("attr", "for")
      .then((id) => {
        cy.get(`#${id}`).should("have.value", lastName);
      });
  }
  clickOnFirstContact() {
     cy.get(':nth-child(2) > .w-px').click();
  }
  fillLastName(lastName) {
    cy.contains("label", "Last name")
      .invoke("attr", "for")
      .then((id) => {
        cy.get(`#${id}`).clear().type(lastName);
      });

  }
  deleteContact() {
    cy.contains('button', 'Delete Contact').click();
     cy.on('window:confirm', (message) => {
  expect(message).to.include('Are you sure you want to delete this contact?');
  return true; // Click "OK"
});

// Step 2: Click the Delete button
cy.contains('button', 'Delete Contact').click();
  }
  verifySuccessMessage(message) {
    cy.get("div.text-sm.font-medium")
      .should("contain.text", message)
      .and("be.visible");
  }
  verifyContactDoesNotExist(name) {
    cy.contains(name).should("not.exist");
  }
}
export default ContactPage;
