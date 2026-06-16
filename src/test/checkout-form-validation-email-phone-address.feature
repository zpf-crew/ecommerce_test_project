Feature: Checkout Form Validation

  Scenario: User receives validation errors for invalid checkout details
    Given I am on the checkout page
    When I fill in the email field with "invalid-email"
    And I click the "Place Order" button
    Then I should see an error message for the email field
    When I fill in the email field with "valid@example.com"
    And I fill in the phone field with "123"
    And I click the "Place Order" button
    Then I should see an error message for the phone field
    When I fill in the phone field with "555-0100"
    And I fill in the address field with ""
    And I click the "Place Order" button
    Then I should see an error message for the address field
