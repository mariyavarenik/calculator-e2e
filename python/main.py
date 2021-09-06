from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome(executable_path=r'./chromedriver')

driver.get("https://zxcodes.github.io/Calculator/")
driver.find_element_by_id('one').click()
driver.find_element_by_id('zero').click()
driver.find_element_by_id('one').click()
driver.find_element_by_xpath("//input[@value='+']").click()
driver.find_element_by_id('two').click()
driver.find_element_by_id('nine').click()
driver.find_element_by_xpath("//input[@value='=']").click()
assert driver.find_element_by_id('result').get_attribute('value') == '130'

driver.close()