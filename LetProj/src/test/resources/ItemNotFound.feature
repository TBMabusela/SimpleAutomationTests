@run
Feature: Searching Items Not On The Site
  #searching items not on the website feature

  Scenario: item not found on the site
    Given i am on the landing page of the site
    When i click sign in to login
    And i will search for an item not available on the site
    Then i can return home
