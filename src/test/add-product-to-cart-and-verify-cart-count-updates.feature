  Scenario: Add a product to cart and verify cart count
    Given I am on the products page
    When I click on a product card to view details
    Then I should be on the product detail page
    When I click the "Add to Cart" button
    Then the cart should contain the added product
    And the cart count in the header should increase by 1
