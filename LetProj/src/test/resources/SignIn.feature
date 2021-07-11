@run
Feature: SignIn
  #signIn feature

  Scenario: sign in
    Given that i am on the website
    When i click on the sign in button
    And i fill in the required fields
    Then i can sign into the website