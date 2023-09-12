const {Builder, By, key, until} = require ('selenium-webdriver');
const fs = require('fs');


async function test(){

let driver = await new Builder().forBrowser('chrome').build();

try{

    await driver.get('https://www.decathlon.hu/');
    await new Promise(resolve => setTimeout(resolve, 1000));
    const agreeButton = await driver.findElement(By.id("didomi-notice-agree-button")).click();
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const searchBox = await driver.findElement(By.xpath('//*[@id="search-bar"]/div/form/input'));
    await searchBox.sendKeys('gördeszka');
    await new Promise(resolve => setTimeout(resolve, 300));
    await searchBox.submit();
    await new Promise(resolve => setTimeout(resolve, 1000));

    const forthResult = await driver.findElement(By.xpath('//*[@id="app"]/main/div[2]/section[2]/div/div[4]'));
    await forthResult.click();
    await new Promise(resolve => setTimeout(resolve, 2000));

    await driver.navigate().back();
    await new Promise(resolve => setTimeout(resolve, 1000));

    const fifthResult = await driver.findElement(By.xpath('//*[@id="app"]/main/div[2]/section[2]/div/div[5]'));
    await fifthResult.click();
    await new Promise(resolve => setTimeout(resolve, 1000));

    await driver.takeScreenshot().then((data) => {
      fs.writeFileSync('kép2.jpg', data, 'base64')
    })

    await new Promise(resolve => setTimeout(resolve, 3000));
    
  } finally {
    await driver.quit()
  }
  
}



test()
    

    
    





    
    




