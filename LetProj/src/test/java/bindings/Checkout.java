package bindings;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
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
        Thread.sleep(10000);
    }

    @Then("i can proceed to check out")
    public void checkout () throws Throwable {
        driver.findElement(By.className("cross")).click();
        Thread.sleep(5000);

        driver.findElement(By.xpath ("//*[contains(@title,'View my shopping cart')]")).click();
        Thread.sleep(5000);

        ((JavascriptExecutor) driver).executeScript("javascript:window.scrollBy(0,750)");
        driver.findElement(By.linkText("Proceed to checkout")).click();
        Thread.sleep(6000);

        ((JavascriptExecutor) driver).executeScript("javascript:window.scrollBy(0,250)");
        driver.findElement(By.name("processAddress")).click();
        Thread.sleep(6000);

        driver.findElement(By.cssSelector("#cgv")).click();
        Thread.sleep(6000);

        driver.findElement(By.name("processCarrier")).click();
        Thread.sleep(6000);

        ((JavascriptExecutor) driver).executeScript("javascript:window.scrollBy(0,150)");
        driver.findElement(By.className("bankwire")).click();
        Thread.sleep(6000);

        driver.findElement(By.xpath("//*[contains(text(),'I confirm my order')]")).click();
        Thread.sleep(6000);

        driver.findElement(By.className("home")).click();
        Thread.sleep(2000);
        driver.quit();
    }


}
