Feature: Add to cart from product grid and verify cart count updates
  As a shopper
  I want to add products to cart directly from the product grid
  So that I can quickly add items without navigating to product details

  Background:
    Given I open the products page at /products
    And I wait for the page to load

  Scenario: Add first product to cart from grid and verify cart badge updates
    When I click the first "Add to Cart" button in the product grid
    Then I should see a success notification
    And the cart count in the header should increase by 1

  Scenario: Add multiple products to cart from grid
    When I click the "Add to Cart" button on the first product in the grid
    And I click the "Add to Cart" button on the second product in the grid
    Then the cart count in the header should be 2

  Scenario: Verify cart persists after adding product
    When I click the first "Add to Cart" button in the product grid
    And I wait for 1 second
    Then the cart count in the header should be greater than 0
