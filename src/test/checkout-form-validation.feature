Feature: Checkout Validation

  Scenario: Reject invalid email format
    Given I am on the checkout page
    When I fill in the email field with "invalid-email"
    And I click the "Submit Order" button
    Then I should see an error message containing "invalid email"

  Scenario: Reject missing required fields
    Given I am on the checkout page
    When I click the "Submit Order" button
    Then I should see an error message for the email field

