Feature: Header Search Navigation

  Scenario: User searches for products via header input
    Given I am on the home page
    When I fill in the search input with "widget"
    And I click the search button
    Then the URL should contain "/products?search=widget"
    And I should see product results for "widget"
