Feature: Search for products using search query and view filtered results
  As a shopper
  I want to search for products using a search query
  So that I can view filtered results showing only matching products

  Background:
    Given the e-commerce application is running

  @high-priority
  Scenario: Search for headphone and view filtered results
    When I open the home page
    And I fill the search input with "headphone"
    And I submit the search form
    Then I should be navigated to the products page with search query "headphone"
    And I should see only headphone products in the product listing
    And I should not see products that do not match "headphone"
