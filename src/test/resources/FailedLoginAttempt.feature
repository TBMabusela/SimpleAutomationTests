@run
Feature: Failed Login Attempt
  #login attempt with wrong login credentials

  Scenario: signing in with wrong login credentials
    Given that i am on the website to shop
    When i will click on the sign in button
    And i fill in the required fields with the wrong credentials
    Then i will not be able sign into the website