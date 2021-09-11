@run
Feature: Search
  #adding to cart and checkout feature

  Scenario: Search
    Given i will be on the shopping site
    When i login into the shopping website
    And i will search for a specific item
    Then i can view the that specific item searched

