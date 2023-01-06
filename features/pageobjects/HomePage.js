const AbstractPage = require('./AbstractPage')
// const WebTable = require('./WebTable')

class HomePage extends AbstractPage {
  //Locators  
  get showrowsfilter(){
    return $('div[class="sc-aef7b723-0 jPLKhd table-control-page-sizer"] div[class="sc-aef7b723-0 sc-dae82938-0 coScOT"]')
  }
  get showRows() {
    return $('//button[text()="20"]')
  }
  get alertsearchFeature(){
    return $('//div[@class="sc-9de9f75d-0 kkwCna"]')
  }
  get maybeLater(){
    return $('//*[contains(text(),"Maybe later")]')
  }
  get filters(){
    return $('(//button[text()="Filters"])[2]')
  }
   get algorithm(){
    return $('//button[normalize-space()="Algorithm"]')
  }
  get search(){
    return $('//input[@class="sc-ecd5a54c-1 hCwYVK cmc-input"]')
  }
  get visibleText(){
    return $('//li[normalize-space()="PoW"]')
  }
  get addfilter(){
    return $('//button[normalize-space()="+ Add Filter"]')
  }
  get allCryptoCurrencies(){
    return $('//button[normalize-space()="All Cryptocurrencies"]')
  }
  get coins(){
    return $('//button[normalize-space()="Coins"]')
  }
  get price(){
    return $('//button[normalize-space()="Price"]')
  }
  get priceRangeFrom(){
    return $('//input[@placeholder="$0"]')
  }
  get priceRangeTo(){
    return $('//input[@placeholder="$99,999"]')
  }
  get mineable(){
    return $('//label[@id="mineable"]')
  }
    get showResults(){
    return $('//button[text()="Show results"]')
  }
  get footerCookies(){
    return $('//div[@class="cmc-cookie-policy-banner__close"]')
  }
  get cmcWrapUp(){
    return $('//*[@class="sc-aef7b723-0 fKbUaI close-button"]')
  }
  // get tableName(){
  //   return $$('tr td:nth-child(3)')
  // }


  //Functions
  async visitHomePage() {
    await browser.url('/')
    await browser.maximizeWindow()
    await browser.pause(5000)
  }

async filter20(){
    if(await (await this.alertsearchFeature).isExisting()){
      await this.alertsearchFeature.click()
    }
    await (await this.footerCookies).click()
    //await (await this.cmcWrapUp).click()
    if (await (await this.maybeLater).isExisting()){
      await maybeLater.click()

    }
    await browser.pause(5000)
    await (await this.showrowsfilter).click()
    //await browser.pause(5000)
    await (await this.showRows).scrollIntoView()
    await (await this.showRows).click()
    await browser.pause(5000) 
}

async moreFilters(algorithm,priceRangeFrom, priceRangeTo){
    await (await this.filters).scrollIntoView()
    await (await this.filters).click()
    this.waitForSeconds(5000)
    await (await this.algorithm).click()
    browser.pause(5000)
    await (await this.search).setValue(algorithm)
    await (await this.visibleText).click()
    browser.pause(5000)
    await (await this.addfilter).click()
    await (await this.allCryptoCurrencies).click()
    await (await this.coins).click()
    await (await this.price).click()
    await (await this.priceRangeFrom).setValue(priceRangeFrom)
    await (await this.priceRangeTo).setValue(priceRangeTo)
    await (await this.mineable).click()
    browser.pause(1000)
    await (await this.showResults).click()
}

async captureTableData(){
  //Name Storage
 const tableNameLocator = $$("tr td:nth-child(3)")
 const tableNameResults = tableNameLocator.map(name=>name.getText())
 console.log(tableNameResults)
 //Price Storage
 const tablePriceLocator = $$("tr td:nth-child(4)")
 const tablePriceResults = tablePriceLocator.map(price=>price.getText())
 console.log(tablePriceResults)

 }
 async captureTableData1(){
  //Name Storage
  const tableNameLocator = $$("tr td:nth-child(3)")
  const tableNameResults1 = tableNameLocator.map(name=>name.getText())
  console.log(tableNameResults1)
  //Price Storage
  const tablePriceLocator1 = $$("tr td:nth-child(4)")
  const tablePriceResults1 = tablePriceLocator1.map(price=>price.getText())
 console.log(tablePriceResults1)
 }

   async compareTables(){
    await expect(tableNameResults).to.eql(tableNameResults1)
    await expect(tablePriceResults).to.eql(tablePriceResults1)

   }

    
}
 
module.exports = new HomePage()
