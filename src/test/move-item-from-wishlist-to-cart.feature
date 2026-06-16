Feature: Wishlist to Cart Interaction

  Scenario: User moves an item from wishlist to cart
    Given I am on the wishlist page
    And I see an item in my wishlist
    When I click the "Add to Cart" button on the wishlist item
    Then the item should be removed from the wishlist
    And the cart count indicator should increase
