@run
Feature: AddtoCart
  #shopping cart features

  Scenario: add to cart
    Given that i am on the shopping website
    When i search for an item
    And i can view the item
    Then i can add the item to cart