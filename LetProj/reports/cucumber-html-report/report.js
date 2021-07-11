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
  "name": "i search for an item",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i can view the item",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i can add the item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.that_i_am_on_the_shopping_website()"
});
formatter.result({
  "duration": 18426366500,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_add_an_item_to_the_basket()"
});
formatter.result({
  "duration": 4970533600,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_can_view_the_item()"
});
formatter.result({
  "duration": 5762137600,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_can_add_the_item_to_cart()"
});
formatter.result({
  "duration": 8896954700,
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
  "duration": 16544890000,
  "status": "passed"
});
formatter.match({
  "location": "AddToWishList.i_select_one_item()"
});
formatter.result({
  "duration": 4455739000,
  "status": "passed"
});
formatter.match({
  "location": "AddToWishList.i_can_add_the_item_to_wishlist()"
});
formatter.result({
  "duration": 6720113100,
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
  "duration": 30768097900,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 6173504300,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_fill_in_the_required_fields()"
});
formatter.result({
  "duration": 4161912600,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_can_sign_into_the_website()"
});
formatter.result({
  "duration": 9391123000,
  "status": "passed"
});
});