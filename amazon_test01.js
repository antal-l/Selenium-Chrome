const {Builder, By, key, until} = require ('selenium-webdriver');
const fs = require('fs')


async function example(){

let driver = await new Builder().forBrowser('chrome').build()

try{

    await driver.get('https://www.amazon.com/')

    
    let searchBox = await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('Iphone');
    await driver.findElement(By.id('nav-search-submit-button')).click();
    
    
    
    await driver.findElement(By.id('high-price')).sendKeys('400');
    await driver.findElement(By.css('.a-button-input[type="submit"]')).click();

   
    let productLinks = await driver.findElements(By.css('.s-result-list [data-component-type="s-search-result"] h2 a'));
    await productLinks[2].click();
 
    await driver.navigate().back()
    
    
    productLinks = await driver.findElements(By.css('.s-result-list [data-component-type="s-search-result"] h2 a'));
    await productLinks[1].click();
    
    
    let addToCartButton = await driver.findElement(By.id('add-to-cart-button'));
    await addToCartButton.click();
    
    
    
    let viewCartButton = await driver.findElement(By.id('nav-cart-count'));
    await viewCartButton.click();
    
    
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    
        
    
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('kép.jpg', data, 'base64')


          })
    

          
            
        } finally {
            await driver.quit();
          }
               
        }
        
        
        
        example()

    
    











    

    
    

    
    
    