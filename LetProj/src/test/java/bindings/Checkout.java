package bindings;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class Checkout {
    WebDriver driver;

    @Given("^i am shopping on the site$")
    public void that_i_am_on_the_shopping_website() throws Throwable {
        String thisProject = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", thisProject + "\\src\\test\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();
        Thread.sleep(6000);

    }

    @When("^i login into the site$")
    public void login() throws Throwable {

        driver.findElement(By.className("login")).click();
        Thread.sleep(6000);
        WebElement username = driver.findElement(By.id("email"));
        WebElement password = driver.findElement(By.id("passwd"));
        WebElement login = driver.findElement(By.cssSelector("#SubmitLogin"));

        username.sendKeys("mabuselatsotlhe@gmail.com");
        password.sendKeys("Testing@21");
        driver.findElement(By.cssSelector("#SubmitLogin")).sendKeys(Keys.ENTER);
        Thread.sleep(6000);

    }

    @And("^i search for that item$")
    public void i_add_an_item_to_the_basket() throws Throwable {
        driver.findElement(By.cssSelector("#search_query_top")).click();
        driver.findElement(By.cssSelector("#search_query_top")).sendKeys("Blouse");
        driver.findElement(By.cssSelector("#search_query_top")).sendKeys(Keys.ENTER);
        Thread.sleep(6000);

    }

    @And("^i can view the item searched$")
    public void i_can_view_the_item() throws Throwable {
        driver.findElement(By.className("product-container")).click();
        Thread.sleep(6000);
    }

    @And("^i can add the searched item to cart$")
    public void i_can_add_the_item_to_cart() throws Throwable {
        driver.findElement(By.cssSelector("#add_to_cart")).click();
        Thread.sleep(6000);
    }

    @Then("i can proceed to check out")
    public void checkout () throws Throwable {
        driver.findElement(By.className("icon-chevron-right right")).click();
        Thread.sleep(6000);
        driver.findElement(By.className("icon-chevron-right right")).click();
        Thread.sleep(6000);
        driver.findElement(By.cssSelector("#processAddress")).click();
        Thread.sleep(6000);
        driver.findElement(By.cssSelector("#checkbox")).click();
        Thread.sleep(6000);
        driver.findElement(By.cssSelector("#processCarrier")).click();
        Thread.sleep(6000);
        driver.findElement(By.cssSelector("bankwire"));
        Thread.sleep(6000);
        driver.findElement(By.cssSelector("submit")).click();
        Thread.sleep(6000);
        driver.quit();
    }


}
