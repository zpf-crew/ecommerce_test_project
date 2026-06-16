Feature: Routing

  Scenario: Navigate to critical application routes
    Given I am on the home page
    When I navigate to "/products"
    Then I should see the product listing page
    When I navigate to "/cart"
    Then I should see the cart page
    When I navigate to "/checkout"
    Then I should see the checkout form

