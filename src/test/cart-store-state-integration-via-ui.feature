Feature: Cart State

  Scenario: Add product updates cart count
    Given I am on the products page
    When I click the "Add to Cart" button on a product card
    Then the cart count indicator should increase by 1
    And the cart page should show the added product

