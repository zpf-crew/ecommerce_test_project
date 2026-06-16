Feature: Open product detail page, add product to cart, verify cart count updates
  As a shopper
  I want to add products to my cart from the product detail page
  So that I can verify the cart count updates correctly in the header

  Background:
    Given the e-commerce application is running

  @high-priority
  Scenario: Add product to cart from product detail page and verify cart count
    When I open the home page
    And I click on any product card to view its details
    Then I should be on the product detail page
    When I click the "Add to Cart" button on the product detail page
    Then I should see a success toast notification "Added to cart!"
    And the cart count in the header should increase by 1
