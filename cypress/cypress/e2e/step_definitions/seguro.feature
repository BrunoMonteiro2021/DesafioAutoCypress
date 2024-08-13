Feature: Insurance Quote

  Scenario: Successfully fill out and submit insurance quote form
    Given I visit the insurance page
    When I fill out the vehicle data
    And I fill out the insurant data
    And I fill out the product data
    And I select the price option
    And I submit the quote
    Then I should see the success message
