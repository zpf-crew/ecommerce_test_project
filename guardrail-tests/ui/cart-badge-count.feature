  Scenario: Cart badge shows correct count after adding item
    Given the cart is empty
    And I am on the products listing page
    When I click the "Add to Cart" button on a product
    Then the cart icon badge should display "1"

  Scenario: Cart badge increments when adding multiple items
    Given the cart has 1 item
    And I am on the products listing page
    When I click the "Add to Cart" button on another product
    Then the cart icon badge should display "2"
