package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitleField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement locationField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDownMenu;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDownMenu;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDownMenu;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "//*[contains(text(),'Accept')]")
    WebElement acceptCookies;

    public void enterJobTitle(String jobTitle){
        sendTextToElement(jobTitleField, jobTitle);
        log.info("Enter job "+jobTitle+ " to jobTitle field "+jobTitleField.toString() );
    }
    public void enterLocation(String location){
        sendTextToElement(locationField, location);
        log.info("Enter location "+location+ " to location field "+locationField.toString() );
    }
    public void selectDistance(String distance){
        selectByValueFromDropDown(distanceDropDownMenu, distance);
        log.info("Selecting distance "+distance+" from dropdown "+distanceDropDownMenu.toString() );
    }
    public void clickOnMoreSearchOption(){
        clickOnElement(moreSearchOptionsLink);
        log.info("Clicking on moreSearchOptionsLink "+ moreSearchOptionsLink.toString());
    }
    public void enterMinSalary(String minSalary){
        sendTextToElement(salaryMin, minSalary);
        log.info("Enter minSalary "+minSalary+ " to email field "+salaryMin.toString() );
    }
    public void enterMaxSalary(String maxSalary){
        sendTextToElement(salaryMax, maxSalary);
        log.info("Enter maxSalary "+maxSalary+ " to email field "+salaryMax.toString() );
    }
    public void selectSalaryType(String sType){
        selectByValueFromDropDown(salaryTypeDropDownMenu, sType);
        log.info("Selecting salary Type "+sType+" from dropdown "+salaryTypeDropDownMenu.toString() );
    }
    public void selectJobType(String jobType){
        selectByValueFromDropDown(jobTypeDropDownMenu, jobType);
        log.info("Selecting job Type "+jobType+" from dropdown "+jobTypeDropDownMenu.toString() );
    }
    public void clickOnFindJobsBtn(){
        clickOnElement(findJobsBtn);
        log.info("Clicking on findJobsBtn "+ findJobsBtn.toString());
    }

    public void clickOnAcceptCookie(){
        switchToiFrame("gdpr-consent-notice");
        log.info("Clicking on acceptCookies "+ acceptCookies.toString());
        clickOnElement(acceptCookies);
    }







}
