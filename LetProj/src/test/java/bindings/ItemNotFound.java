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

public class ItemNotFound {
    WebDriver driver;

    @Given("^i am on the landing page of the site$")
    public void visitShoppingSite() throws Throwable {
        String thisProject = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", thisProject + "\\src\\test\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();
        Thread.sleep(6000);

    }

    @When("^i click sign in to login$")
    public void signingIntoTheSite() throws Throwable {

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

    @And("^i will search for an item not available on the site$")
    public void failedSearchAttempt() throws Throwable {
        driver.findElement(By.cssSelector("#search_query_top")).click();
        driver.findElement(By.cssSelector("#search_query_top")).sendKeys("Printed Pants");
        driver.findElement(By.cssSelector("#search_query_top")).sendKeys(Keys.ENTER);
        Thread.sleep(10000);

    }

    @Then("^i can return home$")
    public void returnHome() throws Throwable {
        driver.findElement(By.className("icon-home")).click();
        Thread.sleep(4000);
        driver.quit();
    }
}
