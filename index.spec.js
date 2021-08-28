const {Builder, By, Browser} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const chrome = require('selenium-webdriver/chrome');

describe('Calculator', () => {
  let driver;

  beforeAll(async () => {
    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://zxcodes.github.io/Calculator/');
  });

  afterAll(async () => {
    await driver.quit();
  })

  beforeEach(async () => {
    await driver.findElement(By.id('clear')).click();
  });

  test('switch theme', async () => {
    await driver.findElement(By.id('dark-mode')).click();
    await driver.sleep(1000);
    expect(await driver.findElement(By.className('wrapper')).getCssValue("Background-Color")).toBe('rgb(20, 19, 19)');
    await driver.findElement(By.id('dark-mode')).click();
    await driver.sleep(1000);
    expect(await driver.findElement(By.className('wrapper')).getCssValue("Background-Color")).toBe('rgb(28, 231, 221)');
  });

  test('sum', async () => {
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.id('zero')).click();
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.xpath("//input[@value='+']")).click();
    await driver.findElement(By.id('two')).click();
    await driver.findElement(By.id('nine')).click();
    await driver.findElement(By.xpath("//input[@value='=']")).click();
    expect(await driver.findElement(By.id('result')).getAttribute('value')).toBe('130');
  });

  test('minus', async () => {
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.id('zero')).click();
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.xpath("//input[@value='-']")).click();
    await driver.findElement(By.id('two')).click();
    await driver.findElement(By.id('nine')).click();
    await driver.findElement(By.xpath("//input[@value='=']")).click();
    expect(await driver.findElement(By.id('result')).getAttribute('value')).toBe('72');
  });

  test('divide', async () => {
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.id('zero')).click();
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.xpath("//input[@value='/']")).click();
    await driver.findElement(By.id('two')).click();
    await driver.findElement(By.id('nine')).click();
    await driver.findElement(By.xpath("//input[@value='=']")).click();
    expect(await driver.findElement(By.id('result')).getAttribute('value')).toBe('3.4827586206896552');
  });

});