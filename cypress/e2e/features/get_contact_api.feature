Feature: Get user contact via API

  Scenario: Valid - Get contact by ID
    When I send a GET request to "/api/user/1"
    Then the API response status should be 200
    And the API response should contain "John"

  Scenario: Valid - Retrieve a list of all users.
    When I send a GET request to "/api/users"
    Then the API response status should be 200
    And the API response should contain "John"
