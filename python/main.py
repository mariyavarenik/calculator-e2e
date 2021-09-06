from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(executable_path=r'./chromedriver')
driver.get("https://zxcodes.github.io/Calculator/")
driver.find_element(By.ID, 'one').click()
driver.find_element(By.ID, 'zero').click()
driver.find_element(By.ID, 'one').click()
driver.find_element(By.XPATH, "//input[@value='+']").click()
driver.find_element(By.ID, 'two').click()
driver.find_element(By.ID, 'nine').click()
driver.find_element(By.XPATH, "//input[@value='=']").click()
assert driver.find_element(By.ID, 'result').get_attribute('value') == '130'
driver.close()