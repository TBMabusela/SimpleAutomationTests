package bindings;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class AddToCart {
    WebDriver driver;

    @Given("^that i am on the shopping website$")
    public void that_i_am_on_the_shopping_website() throws Throwable {
        String thisProject = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver",thisProject + "\\src\\test\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();
        Thread.sleep(4000);

    }

    @When("^i log in$")
    public void login() throws Throwable {

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

    @And("^i search for an item$")
    public void i_add_an_item_to_the_basket() throws Throwable {
        driver.findElement(By.cssSelector("#search_query_top")).click();
        driver.findElement(By.cssSelector("#search_query_top")).sendKeys("Faded Short Sleeve T-shirts");
        driver.findElement(By.cssSelector("#search_query_top")).sendKeys(Keys.ENTER);
        Thread.sleep(5000);

    }

    @And("^i can view the item$")
    public void i_can_view_the_item() throws Throwable {
        driver.findElement(By.className("product-container")).click();
        Thread.sleep(3000);
    }

    @Then("^i can add the item to cart$")
    public void i_can_add_the_item_to_cart() throws Throwable {
        driver.findElement(By.cssSelector("#add_to_cart")).click();
        Thread.sleep(3000);
        driver.findElement(By.className("cross")).click();
        driver.findElement(By.className("home")).click();
        Thread.sleep(4000);
        driver.quit();
    }
}
