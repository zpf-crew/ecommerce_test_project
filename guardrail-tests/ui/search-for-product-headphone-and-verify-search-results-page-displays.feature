Feature: Search for product 'headphone' and verify search results page displays
  As a shopper
  I want to search for products by keyword
  So that I can find specific products quickly

  Background:
    Given I open the products page at /products
    And I wait for the page to load

  Scenario: Search for 'headphone' and verify filtered results
    When I fill in the search input with "headphone"
    And I press Enter key in the search input
    Then I should see search results displayed on the page
    And the search results should contain products matching "headphone"

  Scenario: Search updates URL parameters
    When I fill in the search input with "headphone"
    And I press Enter key in the search input
    Then the URL should contain "search=headphone"

  Scenario: Clear search and view all products
    When I fill in the search input with "headphone"
    And I press Enter key in the search input
    And I clear the search input
    And I press Enter key in the search input
    Then I should see all products displayed
