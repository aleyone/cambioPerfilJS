const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
 
;(async function example() {
  let driver = await new Builder().forBrowser(Browser.EDGE).build()
  try {
    await driver.get('https://itsiscvtest.san.gva.es/crcnou/views/pers/busquedaPers.xhtml?from=crc')
    await driver.findElement(By.name('username')).sendKeys('19850783N')
    await driver.findElement(By.name('password')).sendKeys('19850783N', Key.ENTER)  
    await driver.findElement(By.id("formFiltro:j_idt108")).click();
    await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/form[1]/div/div/div[1]/div/div/div[2]/input"))
            .sendKeys('22575420');
    await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/form[1]/div/div/div[2]/div/button/span[2]"))
            .click();
    await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form[1]/div/div/div[2]/div/button/span[2]')).click();
    await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form[2]/div/div/div[2]/div[1]/table/tbody/tr/td[1]')).click();
    //Nos quedamos aquí
    await driver.findElement(By.xpath(
            "/html/body/div[1]/div/div/div/form[2]/div[2]/div/fieldset[1]/div/div/div/div/div[1]/div[6]/div[1]/div[3]/span"))
            .click();
    await driver.findElement(By.xpath("/html/body/div[8]/div[1]/input")).sendKeys('facultativo');
    await driver.findElement(By.xpath("/html/body/div[8]/div[2]/ul/li[32]")).click();
    await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/form[2]/div[3]/div/button[4]/span[2]")).click();

} finally {
    await driver.quit()
  }
})()