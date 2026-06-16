Feature: End-to-End Purchase Flow

  Scenario: User completes a full purchase from product listing to order confirmation
    Given I am on the products page
    When I click on a product card
    And I click the "Add to Cart" button
    And I navigate to the cart page
    Then I should see the product in the cart
    And I click the "Checkout" button
    And I fill in the email field with "test@example.com"
    And I fill in the phone field with "555-0100"
    And I fill in the address field with "123 Main St"
    And I click the "Place Order" button
    Then I should see the order confirmation page
