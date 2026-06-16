  Scenario: Increase item quantity using plus button
    Given I have an item in the cart with quantity 1
    And I am on the cart page
    When I click the increase button on the quantity selector
    Then the quantity should display 2

  Scenario: Decrease item quantity using minus button
    Given I have an item in the cart with quantity 2
    And I am on the cart page
    When I click the decrease button on the quantity selector
    Then the quantity should display 1

  Scenario: Quantity selector respects minimum bound
    Given I have an item in the cart with quantity 1
    And I am on the cart page
    When I click the decrease button on the quantity selector
    Then the item should be removed from the cart
