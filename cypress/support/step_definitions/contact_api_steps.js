import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let apiResponse;

When("I send a GET request to {string}", (endpoint) => {
  cy.request({
    method: "GET",
    url: endpoint,
    failOnStatusCode: false,
  }).then((response) => {
    apiResponse = response;
  });
});

Then("the API response status should be {int}", (statusCode) => {
  expect(apiResponse.status).to.eq(statusCode);
});

Then("the API response should contain {string}", (expectedText) => {
  expect(JSON.stringify(apiResponse.body)).to.include(expectedText);
});