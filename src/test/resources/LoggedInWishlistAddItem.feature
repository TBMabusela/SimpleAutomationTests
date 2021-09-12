@run
Feature: Add to Wishlist Logged in
  #adding item to the wish list while logged in

  Scenario: Adding Item to wishlist
    Given i am on the site
    When i will login into the site
    And i will return home on the site
    And i will select an item
    Then i can successfully add the item to my wishlist
