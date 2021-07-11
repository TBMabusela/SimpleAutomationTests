package bindings;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class AddToWishList {
    WebDriver driver;

    @Given("^that i am on the site homepage$")
    public void that_i_am_on_the_site_homepage() throws Throwable {
        String thisProject = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver",thisProject + "\\src\\test\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();
    }

    @When("^i select one item$")
    public void i_select_one_item() throws Throwable {
        ((JavascriptExecutor) driver).executeScript("javascript:window.scrollBy(0,250)");
        driver.findElement(By.linkText("Printed Chiffon Dress")).click();
    }

    @Then("^i can add the item to wishlist$")
    public void i_can_add_the_item_to_wishlist() throws Throwable {
        driver.findElement(By.cssSelector("#wishlist_button")).click();
        Thread.sleep(6000);
        driver.quit();
    }
}
