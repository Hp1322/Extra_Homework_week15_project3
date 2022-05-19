package uk.co.library.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on accept cookies$")
    public void iClickOnAcceptCookies() {
       new HomePage().clickOnAcceptCookie();

    }

    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle){
      new HomePage().enterJobTitle(jobTitle);

    }

    @And("^I enter location \"([^\"]*)\"$")
    public void iEnterLocation(String location){
      new HomePage().enterLocation(location);

    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance){
      new HomePage().selectDistance(distance);

    }

    @And("^I click on more search option$")
    public void iClickOnMoreSearchOption() {
    new HomePage().clickOnMoreSearchOption();
    }

    @And("^I enter min salary \"([^\"]*)\"$")
    public void iEnterMinSalary(String minSalary){
      new HomePage().enterMinSalary(minSalary);

    }

    @And("^I enter max salary \"([^\"]*)\"$")
    public void iEnterMaxSalary(String maxSalary){
      new HomePage().enterMaxSalary(maxSalary);

    }

    @And("^I select salary type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType){
      new HomePage().selectSalaryType(salaryType);

    }

    @And("^I select job type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType){
      new HomePage().selectJobType(jobType);

    }

    @And("^I click on find job button$")
    public void iClickOnFindJobButton() {
    new HomePage().clickOnFindJobsBtn();
    }

    @Then("^I should be able to see message \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeMessage(String result){
        Assert.assertEquals("",result, new ResultPage().getResultText());

    }
}
