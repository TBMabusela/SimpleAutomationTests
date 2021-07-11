package bindings;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class SignIn {
    WebDriver driver;

    @Given("^that i am on the website$")
    public void that_i_am_on_the_website() throws Throwable {
        String thisProject = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver",thisProject + "\\src\\test\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();
        Thread.sleep(2000);

    }

    @When("^i click on the sign in button$")
    public void i_click_on_the_sign_in_button() throws Throwable {
        driver.findElement(By.className("login")).click();
        Thread.sleep(2000);

    }

    @And("^i fill in the required fields$")
    public void i_fill_in_the_required_fields() throws Throwable {
        driver.findElement(By.id("email")).sendKeys("mabuselatsotlhe@gmail.com");
        driver.findElement(By.id("passwd")).sendKeys("Testing@21");
        Thread.sleep(4000);
    }

    @Then("^i can sign into the website$")
    public void i_can_sign_into_the_website() throws Throwable {
        driver.findElement(By.cssSelector("#SubmitLogin")).sendKeys(Keys.ENTER);
        Thread.sleep(6000);
        driver.quit();
    }
}
