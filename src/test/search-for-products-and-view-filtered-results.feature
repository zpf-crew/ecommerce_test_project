  Scenario: Search for headphone products
    Given I am on the home page
    When I fill in the search input with "headphone"
    And I press Enter or click the search button
    Then I should be navigated to the products page with search query
    And I should see only headphone products in the product grid
    And the product count should reflect filtered results
