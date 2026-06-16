Feature: Root Route Rendering

  Scenario: User navigates to the root path
    Given I navigate to the root URL "/"
    Then I should see the Home Page component
    And the URL should be "/"
