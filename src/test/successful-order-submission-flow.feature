Feature: Checkout Submission

  Scenario: Submit valid order and verify success page
    Given I am on the checkout page
    When I fill in the email field with "test@example.com"
    And I fill in the phone field with "555-0100"
    And I click the "Submit Order" button
    Then I should see the success page heading
    And the URL should contain "/success"

