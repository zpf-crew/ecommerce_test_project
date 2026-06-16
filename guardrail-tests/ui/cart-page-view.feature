  Scenario: View cart with single item
    Given I have added 1 product to the cart
    When I navigate to the cart page
    Then I should see the product name displayed
    And I should see the product price displayed
    And I should see the quantity selector with value 1
    And I should see the subtotal for the item

  Scenario: View cart with multiple items
    Given I have added 2 different products to the cart
    When I navigate to the cart page
    Then I should see 2 product rows
    And I should see the cart subtotal
    And I should see the cart total including shipping

  Scenario: View empty cart
    Given the cart is empty
    When I navigate to the cart page
    Then I should see an empty cart message
    And I should see a "Continue Shopping" button
