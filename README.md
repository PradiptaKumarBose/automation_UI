# UI Automation for Coinmarketcap Application #

This Automation built using the WebDriverIO framework technique

### Official Website of Webdriver IO ###
https://webdriver.io/docs/gettingstarted

### Technique used ###
BDD Page Object Model framework Java script

### Package structure ###
1.	Feature Files – This is holding the user understandable BDD scenarios, which is written in gherkin language
2.	Steps – This package is holding the actual glue of the feature files, written in java script 
3.	Page objects – This Java script file has two sections; first part will hold all the selectors for the web elements followed by functions 
4.	Utilities – This package holds the common reusable functions written in java script

### Application used for automation ###
URL - https://coinmarketcap.com/

### Tools used ###
1. Editor – Visual Studio code
2. Software installed – node js

### Steps to run the framework ###
1.	Clone the project 
2.	Run the below two commands in the terminal

	#Configuration used in the framework:#
	1.	'npm init wdio .'
	2.  Need to install the following package 'Create-wdio' ok to proceed? (y) - Give y
	3.  where is automation backend located - On my local machine
	4. 	which framework do you want to use - Cucumber
	5. 	Do you want to use compiler? - No
	6.  where are your test specs located? - hit enter with default
	7.  Do you want to use page object html? - Yes
	8.  Which reporter do you want to use - Spec
	9.  Do you want to add service to your test setup? - ChromeDriver
	10.  Do you want to install npm - yes
	
    #Command used to run the package:#
	1.	npm run wdio - to run the framework
### Available features of automation  in the release v1.0 ###
1.	visit https://coinmarketcap.com 
2.	Show rows by 20 
3.	Capture all page contents - we will let you decide what is the correct information to capture, suggestions e.g. price, name, position 
4.	Filter by Algorith - "PoW" 
5.	followed by "+ Add Filter" 
6.	Toggle "Mineable" 
7.	Then select "All Cryptocurrencies" 
8.	Select "Coins" 
9.	Then select price and set minimum value to 100 and maximum to 10,000 
10.	Compare page content to the content in step 3 


