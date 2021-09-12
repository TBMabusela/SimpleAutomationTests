@run
Feature: Checkout
  #adding to cart and checkout feature

  Scenario: Checkout
    Given i am shopping on the site
    When i login into the site
    And i search for that item
    And i can view the item searched
    And i can add the searched item to cart
    Then i can proceed to check out



