Feature: Contact CRUD via UI

  Background:
    Given I log in with valid credentials

  Scenario: Create a new contact
    When I navigate to contacts tab
    And I click on the "Create Contact" button
    And I fill in the contact form with first name "Smoke" and last name "test"
    Then I should see "Contact created." in the success message

 
  Scenario: Edit the contact
    When I navigate to contacts tab
    And I click on the first contact
    And I fill in the contact form with last name "edit test" and save
    Then I should see "Contact updated." in the success message

  Scenario: Delete the contact
    When I navigate to contacts tab
    And I click on the first contact
    And I delete the first contact 
    Then I should see "This contact has been deleted." in the success message

    # Scenario: Search for the contact
    # When I navigate to contacts tab
    # And I search for the contact "Smoke Test"
    # Then I should see the contact "Smoke Test" in the list 
    # When I click on the contact "Smoke Test"
    # Then I should the contact form with first name "Smoke" and last name "Test"
