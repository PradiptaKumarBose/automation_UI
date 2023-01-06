Feature: Apply filter to compare data comparison in Coinmarketcap

  Scenario Outline: As a user, I would like to filter only 20 rows and capture content

    Given I would like to Launch the coinmarket cap URL
    When I would like to Show rows of  the table to 20
    Then I would like to Capture page content after apply the filter


   Scenario Outline: As a user, I would like to apply filters to compare the price range and data between two web tables
    Given I would like to apply the filter  with <algorithm> and price range <priceRangeFrom> to <priceRangeTo>
    And I would like to Capture page content for all the filter
    Then I would like to Compare page content to the content in step 3

Examples:
|algorithm     |priceRangeFrom |priceRangeTo  |
|Pow           |100             |10000          |