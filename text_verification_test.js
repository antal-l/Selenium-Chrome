const { Builder, By, Key, until} = require('selenium-webdriver')
const fs = require('fs')

async function text_verification(){

    let driver = await new Builder().forBrowser('chrome').build()

    try{
        await driver.get('https://www.marczi.hu/')

        let button1 = await driver.findElement(By.xpath('//*[@id="header2"]/div[1]/ul/li[1]/a'))
        let button_text1 = await button1.getText();
        
        let button2 = await driver.findElement(By.xpath('//*[@id="header2"]/div[1]/ul/li[2]/a'))
        let button_text2 = await button2.getText();

        let button3 = await driver.findElement(By.xpath('//*[@id="header2"]/div[1]/ul/li[3]/a'))
        let button_text3 = await button3.getText();

        let button4 = await driver.findElement(By.xpath('//*[@id="header2"]/div[1]/ul/li[4]/a'))
        let button_text4 = await button4.getText();

        let button5 = await driver.findElement(By.xpath('//*[@id="footer_"]/div[2]/ul/li[1]/a'))
        let button_text5 = await button5.getText();

        

        fs.writeFileSync('result.txt', button_text1 + '\n' + button_text2 + '\n' + button_text3 + '\n' 
        + button_text4 + '\n' + button_text5 + '\n')    



       

} finally {
        await driver.quit();
    }
}

text_verification()