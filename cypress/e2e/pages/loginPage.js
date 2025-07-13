class LoginPage {
  visit() {
    cy.visit("/login");
  }
  fillEmail(email) {
    cy.get('input[type="email"]').type(email);
  }
  fillPassword(password) {
    cy.get('input[type="password"]').type(password);
  }
  submit() {
    cy.get('button[type="submit"]').click();
  }
  login(email, password) {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}
export default LoginPage;