$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search functionality",
  "description": "As a user, I would like to check job search functionality in cv library website",
  "id": "job-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjob_title\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter min salary \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter max salary \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"\u003cjob_type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see message \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "job_title",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "job_type",
        "result"
      ],
      "line": 19,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Oxford",
        "5",
        "300",
        "5000",
        "annum",
        "Permanent",
        "Permanent Tester jobs in Oxford"
      ],
      "line": 20,
      "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22723840600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify Job Search Result Using Different DataSet",
  "description": "",
  "id": "job-search-functionality;verify-job-search-result-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Oxford\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter min salary \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter max salary \"5000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find job button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see message \"Permanent Tester jobs in Oxford\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 320067400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 20415417900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 3348112300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 282377500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 252439200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOption()"
});
formatter.result({
  "duration": 683933000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 20
    }
  ],
  "location": "JobSearchTest.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 1150098200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 20
    }
  ],
  "location": "JobSearchTest.iEnterMaxSalary(String)"
});
formatter.result({
  "duration": 145298900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 147321600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 172660000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 245786000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Oxford",
      "offset": 33
    }
  ],
  "location": "JobSearchTest.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 11244959500,
  "status": "passed"
});
formatter.after({
  "duration": 2615845900,
  "status": "passed"
});
});