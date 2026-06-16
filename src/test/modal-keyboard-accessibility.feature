Feature: Modal Accessibility

  Scenario: Close modal using Escape key
    Given I am on a page with a modal trigger
    When I click the button to open the modal
    And I press the "Escape" key
    Then the modal should be closed
    And the background content should be visible

