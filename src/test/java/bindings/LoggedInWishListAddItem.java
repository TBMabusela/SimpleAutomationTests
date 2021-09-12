package bindings;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class LoggedInWishListAddItem {

    WebDriver driver;

    @Given("^i am on the site$")
    public void onSite() throws Throwable {
        String thisProject = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver",thisProject + "\\src\\test\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();
        Thread.sleep(4000);

    }

    @When("^i will login into the site$")
    public void loggingIn() throws Throwable {
        driver.findElement(By.className("login")).click();
        Thread.sleep(3000);
        WebElement username=driver.findElement(By.id("email"));
        WebElement password=driver.findElement(By.id("passwd"));
        WebElement login=driver.findElement(By.cssSelector("#SubmitLogin"));

        username.sendKeys("mabuselatsotlhe@gmail.com");
        password.sendKeys("Testing@21");
        driver.findElement(By.cssSelector("#SubmitLogin")).sendKeys(Keys.ENTER);
        Thread.sleep(2000);

    }

    @And("^i will return home on the site$")
    public void gotoHome() throws Throwable {
        driver.findElement(By.className("icon-home")).click();
        Thread.sleep(10000);

    }

    @And("^i will select an item$")
        public void itemSelect() throws Throwable {
            ((JavascriptExecutor) driver).executeScript("javascript:window.scrollBy(0,250)");
            driver.findElement(By.linkText("Printed Chiffon Dress")).click();
    }


    @Then("^i can successfully add the item to my wishlist$")
    public void itemToWishList() throws Throwable {
        driver.findElement(By.id("wishlist_button")).click();
        Thread.sleep(6000);
        driver.quit();

    }
}
