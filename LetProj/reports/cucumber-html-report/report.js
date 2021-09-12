$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddToCart.feature");
formatter.feature({
  "line": 2,
  "name": "AddtoCart",
  "description": "",
  "id": "addtocart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#shopping cart features"
    }
  ],
  "line": 5,
  "name": "add to cart",
  "description": "",
  "id": "addtocart;add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the shopping website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i log in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i search for an item",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i can view the item",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i can add the item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.that_i_am_on_the_shopping_website()"
});
formatter.result({
  "duration": 20099879800,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.login()"
});
formatter.result({
  "duration": 10988421200,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_add_an_item_to_the_basket()"
});
formatter.result({
  "duration": 8261875500,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_can_view_the_item()"
});
formatter.result({
  "duration": 6967237300,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_can_add_the_item_to_cart()"
});
formatter.result({
  "duration": 10623308800,
  "status": "passed"
});
formatter.uri("AddToWishLIst.feature");
formatter.feature({
  "line": 2,
  "name": "AddToWishList",
  "description": "",
  "id": "addtowishlist",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#wishlist addition"
    }
  ],
  "line": 5,
  "name": "add to wishlist",
  "description": "",
  "id": "addtowishlist;add-to-wishlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the site homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i select one item",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i can add the item to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToWishList.that_i_am_on_the_site_homepage()"
});
formatter.result({
  "duration": 30155457700,
  "status": "passed"
});
formatter.match({
  "location": "AddToWishList.i_select_one_item()"
});
formatter.result({
  "duration": 6251483600,
  "status": "passed"
});
formatter.match({
  "location": "AddToWishList.i_can_add_the_item_to_wishlist()"
});
formatter.result({
  "duration": 6720839200,
  "status": "passed"
});
formatter.uri("Checkout.feature");
formatter.feature({
  "line": 2,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#adding to cart and checkout feature"
    }
  ],
  "line": 5,
  "name": "Checkout",
  "description": "",
  "id": "checkout;checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i am shopping on the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i login into the site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i search for that item",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i can view the item searched",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i can add the searched item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i can proceed to check out",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.that_i_am_on_the_shopping_website()"
});
formatter.result({
  "duration": 23056410400,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.login()"
});
formatter.result({
  "duration": 24605899600,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_add_an_item_to_the_basket()"
});
formatter.result({
  "duration": 13396334700,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_can_view_the_item()"
});
formatter.result({
  "duration": 13090035300,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_can_add_the_item_to_cart()"
});
formatter.result({
  "duration": 10063617100,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.checkout()"
});
formatter.result({
  "duration": 75720565700,
  "status": "passed"
});
formatter.uri("FailedLoginAttempt.feature");
formatter.feature({
  "line": 2,
  "name": "Failed Login Attempt",
  "description": "",
  "id": "failed-login-attempt",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#login attempt with wrong login credentials"
    }
  ],
  "line": 5,
  "name": "signing in with wrong login credentials",
  "description": "",
  "id": "failed-login-attempt;signing-in-with-wrong-login-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the website to shop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i will click on the sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i fill in the required fields with the wrong credentials",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i will not be able sign into the website",
  "keyword": "Then "
});
formatter.match({
  "location": "FailedLoginAttempt.i_am_on_the_website_to_shop()"
});
formatter.result({
  "duration": 17340752600,
  "status": "passed"
});
formatter.match({
  "location": "FailedLoginAttempt.click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 5255695900,
  "status": "passed"
});
formatter.match({
  "location": "FailedLoginAttempt.fill_in_the_required_fields_with_the_wrong_credentials()"
});
formatter.result({
  "duration": 10132803900,
  "status": "passed"
});
formatter.match({
  "location": "FailedLoginAttempt.i_will_not_be_able_sign_into_the_website()"
});
formatter.result({
  "duration": 13386019300,
  "status": "passed"
});
formatter.uri("ItemNotFound.feature");
formatter.feature({
  "line": 2,
  "name": "Searching Items Not On The Site",
  "description": "",
  "id": "searching-items-not-on-the-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#searching items not on the website feature"
    }
  ],
  "line": 5,
  "name": "item not found on the site",
  "description": "",
  "id": "searching-items-not-on-the-site;item-not-found-on-the-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i am on the landing page of the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i click sign in to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i will search for an item not available on the site",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i can return home",
  "keyword": "Then "
});
formatter.match({
  "location": "ItemNotFound.visitShoppingSite()"
});
formatter.result({
  "duration": 20823399200,
  "status": "passed"
});
formatter.match({
  "location": "ItemNotFound.signingIntoTheSite()"
});
formatter.result({
  "duration": 21419342600,
  "status": "passed"
});
formatter.match({
  "location": "ItemNotFound.failedSearchAttempt()"
});
formatter.result({
  "duration": 12684245900,
  "status": "passed"
});
formatter.match({
  "location": "ItemNotFound.returnHome()"
});
formatter.result({
  "duration": 8299195700,
  "status": "passed"
});
formatter.uri("LoggedInWishlistAddItem.feature");
formatter.feature({
  "line": 2,
  "name": "Add to Wishlist Logged in",
  "description": "",
  "id": "add-to-wishlist-logged-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#adding item to the wish list while logged in"
    }
  ],
  "line": 5,
  "name": "Adding Item to wishlist",
  "description": "",
  "id": "add-to-wishlist-logged-in;adding-item-to-wishlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i am on the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i will login into the site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i will return home on the site",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i will select an item",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i can successfully add the item to my wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "LoggedInWishListAddItem.onSite()"
});
formatter.result({
  "duration": 33628841000,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.loggingIn()"
});
formatter.result({
  "duration": 18559379400,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.gotoHome()"
});
formatter.result({
  "duration": 13025254100,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.itemSelect()"
});
formatter.result({
  "duration": 8541867600,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.itemToWishList()"
});
formatter.result({
  "duration": 6714483400,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 2,
  "name": "Search",
  "description": "",
  "id": "search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#searching feature"
    }
  ],
  "line": 5,
  "name": "Search",
  "description": "",
  "id": "search;search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i will be on the shopping site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i login into the shopping website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i will search for a specific item",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i can view the that specific item searched",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.i_will_be_on_the_shopping_site()"
});
formatter.result({
  "duration": 28740445500,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_login_into_the_shopping_website()"
});
formatter.result({
  "duration": 18792706700,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_will_search_for_a_specific_item()"
});
formatter.result({
  "duration": 10143943300,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_can_view_the_that_specific_item_searched()"
});
formatter.result({
  "duration": 17660779000,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 2,
  "name": "SignIn",
  "description": "",
  "id": "signin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#signIn feature"
    }
  ],
  "line": 5,
  "name": "sign in",
  "description": "",
  "id": "signin;sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i click on the sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i fill in the required fields",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i can sign into the website",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.that_i_am_on_the_website()"
});
formatter.result({
  "duration": 17383929700,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 5250940200,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_fill_in_the_required_fields()"
});
formatter.result({
  "duration": 4127174500,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_can_sign_into_the_website()"
});
formatter.result({
  "duration": 9080654400,
  "status": "passed"
});
});