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
  "duration": 22728702500,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.login()"
});
formatter.result({
  "duration": 10160869600,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_add_an_item_to_the_basket()"
});
formatter.result({
  "duration": 8124733100,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_can_view_the_item()"
});
formatter.result({
  "duration": 7284013000,
  "status": "passed"
});
formatter.match({
  "location": "AddToCart.i_can_add_the_item_to_cart()"
});
formatter.result({
  "duration": 9994180400,
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
  "duration": 31281977300,
  "status": "passed"
});
formatter.match({
  "location": "AddToWishList.i_select_one_item()"
});
formatter.result({
  "duration": 5833616800,
  "status": "passed"
});
formatter.match({
  "location": "AddToWishList.i_can_add_the_item_to_wishlist()"
});
formatter.result({
  "duration": 6737895000,
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
  "duration": 23084960500,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.login()"
});
formatter.result({
  "duration": 17639371000,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_add_an_item_to_the_basket()"
});
formatter.result({
  "duration": 10692937700,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_can_view_the_item()"
});
formatter.result({
  "duration": 11591362300,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_can_add_the_item_to_cart()"
});
formatter.result({
  "duration": 10057523500,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.checkout()"
});
formatter.result({
  "duration": 90392909200,
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
  "duration": 7090891900,
  "status": "passed"
});
formatter.match({
  "location": "FailedLoginAttempt.click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 15089021200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".login\"}\n  (Session info: chrome\u003d93.0.4577.63)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027TMABUSELA\u0027, ip: \u0027192.168.55.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\TMABUS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61189}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ea0cc268d050856616dd4393420209ca\n*** Element info: {Using\u003dclass name, value\u003dlogin}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:405)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat bindings.FailedLoginAttempt.click_on_the_sign_in_button(FailedLoginAttempt.java:31)\r\n\tat ✽.When i will click on the sign in button(FailedLoginAttempt.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FailedLoginAttempt.fill_in_the_required_fields_with_the_wrong_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FailedLoginAttempt.i_will_not_be_able_sign_into_the_website()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 29223854500,
  "status": "passed"
});
formatter.match({
  "location": "ItemNotFound.signingIntoTheSite()"
});
formatter.result({
  "duration": 38866880900,
  "status": "passed"
});
formatter.match({
  "location": "ItemNotFound.failedSearchAttempt()"
});
formatter.result({
  "duration": 14705860100,
  "status": "passed"
});
formatter.match({
  "location": "ItemNotFound.returnHome()"
});
formatter.result({
  "duration": 9766149400,
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
  "duration": 19866484000,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.loggingIn()"
});
formatter.result({
  "duration": 11357039800,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.gotoHome()"
});
formatter.result({
  "duration": 14045851900,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.itemSelect()"
});
formatter.result({
  "duration": 5201812900,
  "status": "passed"
});
formatter.match({
  "location": "LoggedInWishListAddItem.itemToWishList()"
});
formatter.result({
  "duration": 6720528400,
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
  "duration": 21365775200,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_login_into_the_shopping_website()"
});
formatter.result({
  "duration": 19792424500,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_will_search_for_a_specific_item()"
});
formatter.result({
  "duration": 8976207100,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_can_view_the_that_specific_item_searched()"
});
formatter.result({
  "duration": 16076541900,
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
  "duration": 21121424800,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_click_on_the_sign_in_button()"
});
formatter.result({
  "duration": 6112849400,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_fill_in_the_required_fields()"
});
formatter.result({
  "duration": 4131902400,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_can_sign_into_the_website()"
});
formatter.result({
  "duration": 15889018600,
  "status": "passed"
});
});