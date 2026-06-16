  Scenario: Success toast appears after adding item to cart
    Given I am on the products listing page
    When I click the "Add to Cart" button on a product
    Then a success toast should appear with message "Item added to cart"
    And the toast should be visible

  Scenario: Toast auto-dismisses after showing confirmation
    Given I am on the products listing page
    When I click the "Add to Cart" button on a product
    Then a success toast should appear with message "Item added to cart"
    And after 3 seconds the toast should no longer be visible
