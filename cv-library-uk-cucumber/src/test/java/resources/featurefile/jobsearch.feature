Feature: Job Search functionality
  As a user, I would like to check job search functionality in cv library website

  Scenario Outline: Verify Job Search Result Using Different DataSet
    Given I am on homepage
    When I click on accept cookies
    And I enter job title "<job_title>"
    And I enter location "<location>"
    And I select distance "<distance>"
    And I click on more search option
    And I enter min salary "<salaryMin>"
    And I enter max salary "<salaryMax>"
    And I select salary type "<salaryType>"
    And I select job type "<job_type>"
    And I click on find job button
    Then I should be able to see message "<result>"

    Examples:
      | job_title | location   | distance | salaryMin | salaryMax | salaryType | job_type       | result                                 |
      | Tester    | Oxford     | 5        | 300       | 5000      | annum      | Permanent      | Permanent Tester jobs in Oxford        |
      | Plumber   | London     | 7        | 3000      | 40000     | month      | Contract       | Contract Plumber jobs in London        |
      | Cook      | Cambridge  | 5        | 1000      | 5000      | week       | Part Time      | Part Time Cook jobs in Cambridge       |
      | Nurse     | Essex      | 2        | 80        | 7000      | day        | Contract       | Contract Nurse jobs in Essex           |
      | Teacher   | Oxford     | 5        | 800       | 40000     | annum      | Apprenticeship | Apprenticeship Teacher jobs in Oxford  |
      | Developer | Nottingham | 7        | 900       | 30000     | month      | Permanent      | Permanent Developer jobs in Nottingham |
      | Tester    | Colchester | 2        | 100       | 20000     | hour       | Permanent      | Permanent Tester jobs in Colchester    |