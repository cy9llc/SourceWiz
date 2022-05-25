
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
driver = webdriver.Chrome("C:/Users/Anish/Desktop/sourcewiz/chromedriver.exe")
driver.get("https://www.google.com")
driver.implicitly_wait(2)
sbox = driver.find_element_by_xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")
sbox.send_keys("Sr android kotlin developers looking for opportunities USA site:linkedin.com/in/ OR site:linkedin.com/pub/")
sbox.send_keys(Keys.RETURN)



def main():
    el = driver.find_elements_by_css_selector("div.yuRUbf a")

    url_buc = []
    for e in el:
        url_buc.append(e.get_attribute("href"))
    tit = driver.find_elements_by_tag_name('h3')

    tit_buc = []
    spaces = 0
    for t in tit:
        spaces = 0
        string = ""
        for s in t.text:
            if spaces == 2:
                break
            if s == " ":
                spaces += 1
            string += s
        tit_buc.append(string)
    
    arr_i = 0
    for i in url_buc:
        if "google" in i:
            url_buc.pop(arr_i)
        arr_i += 1
    s = []
    for i in range(len(url_buc)):
        s.append({tit_buc[i]:url_buc[i]})
    return s
def repeat(max):
    while True:
        try:
            lis_buc = []
            for i in range(max - 1):

                lis_buc.append(main())
                next = driver.find_element_by_id("pnnext")
       
                next.click()
                time.sleep(5)
            return lis_buc
        except:
            print("Oops error")
            input()
print(repeat(10))