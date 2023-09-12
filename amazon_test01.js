const {Builder, By, key, until} = require ('selenium-webdriver');
const fs = require('fs');


async function test(){

let driver = await new Builder().forBrowser('chrome').build();

try{

    await driver.get('https://www.amazon.com/');
    await new Promise(resolve => setTimeout(resolve, 1000));

    
    let searchBox = await driver.findElement(By.id('twotabsearchtextbox')).sendKeys('Iphone');
    await new Promise(resolve => setTimeout(resolve, 500));
    await driver.findElement(By.id('nav-search-submit-button')).click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    
    await driver.findElement(By.id('high-price')).sendKeys('400');
    await new Promise(resolve => setTimeout(resolve, 500));
    await driver.findElement(By.css('.a-button-input[type="submit"]')).click();
    await new Promise(resolve => setTimeout(resolve, 500));

   
    let productLinks = await driver.findElements(By.css('.s-result-list [data-component-type="s-search-result"] h2 a'));
    await productLinks[2].click();
 
    await driver.navigate().back()
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    
    productLinks = await driver.findElements(By.css('.s-result-list [data-component-type="s-search-result"] h2 a'));
    await productLinks[1].click();
    await new Promise(resolve => setTimeout(resolve, 500));
    
    
    let addToCartButton = await driver.findElement(By.id('add-to-cart-button'));
    await addToCartButton.click();
    await new Promise(resolve => setTimeout(resolve, 500));
    
    
    let viewCartButton = await driver.findElement(By.id('nav-cart-count'));
    await viewCartButton.click();
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    
        await driver.takeScreenshot().then((data) => {
            fs.writeFileSync('kép.jpg', data, 'base64')


          })
    

        } finally {
            await driver.quit();
          }
               
        }
        
        
        
        test()
          
            
    
    
    
    
    
        

    
    











    

    
    

    
    
    
    
    