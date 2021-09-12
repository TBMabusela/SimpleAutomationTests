@run
Feature: AddToWishList
  #wishlist addition

  Scenario: add to wishlist
    Given that i am on the site homepage
    When i select one item
    Then i can add the item to wishlist