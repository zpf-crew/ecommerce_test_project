  Scenario: Add product to cart from product listing page
    Given I am on the products listing page
    When I click the "Add to Cart" button on a product card
    Then the product should be added to the cart
    And the cart should contain 1 item

  Scenario: Add product to cart from product detail page
    Given I am on a product detail page
    When I click the "Add to Cart" button
    Then the product should be added to the cart
    And the cart should contain 1 item
