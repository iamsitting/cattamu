import csv
import time

from secrets import (ADMIN_PASSWORD, ADMIN_USER, TARGET_LOGIN, TARGET_NEW_ANN,
                     TARGET_NEW_TNM, TARGET_NEW_WBS)
from selenium import webdriver


class AnnouncementScraper(object):
  def __init__(self, mode, csv_file):
    self.csv_file = csv_file
    self.mode = mode

  def setUp(self):
    options = webdriver.ChromeOptions()
    options.add_argument('window-size=1200x600')
    self.browser = webdriver.Chrome(chrome_options=options)

  def add_new_ann(self, row):
    title = self.browser.find_element_by_xpath('/html/body/app-root/app-new-announcement/div/div/div/div[2]/form/input[1]')
    subtitle = self.browser.find_element_by_xpath('/html/body/app-root/app-new-announcement/div/div/div/div[2]/form/input[2]')
    doc_link = self.browser.find_element_by_xpath('/html/body/app-root/app-new-announcement/div/div/div/div[2]/form/input[3]')
    pic_link = self.browser.find_element_by_xpath('/html/body/app-root/app-new-announcement/div/div/div/div[2]/form/input[4]')
    submit = self.browser.find_element_by_xpath('/html/body/app-root/app-new-announcement/div/div/div/div[2]/form/button[2]')
    title.send_keys(row['title'])
    subtitle.send_keys(row['subtitle'])
    doc_link.send_keys(row['link'])
    pic_link.send_keys(row['pic'])
    submit.click()

  def add_new_wbs(self, row):
    pass

  def add_new_tnm(self, row):
    pass

  def login_to_site(self):
    self.browser.get(TARGET_LOGIN)
    uname = self.browser.find_element_by_xpath('//*[@id="username"]')
    pw = self.browser.find_element_by_xpath('//*[@id="password"]')
    submit = self.browser.find_element_by_xpath('/html/body/app-root/app-admin-login/div/div/div/div/div/div/form/button')
    uname.send_keys(ADMIN_USER)
    pw.send_keys(ADMIN_PASSWORD)
    submit.click()

  def delete_entires(self, button_xpath):
    while True:
      try:
        time.sleep(2)
        delete_buttons = self.browser.find_elements_by_xpath(button_xpath)
        delete_buttons[0].click()
      except Exception:
        print('delete buttons were not found')
        break
      time.sleep(0.5)

  def run(self):
    self.setUp()
    self.login_to_site()
    if self.mode == 'ann':
        TARGET = TARGET_NEW_ANN
        XPATH = '/html/body/app-root/app-admin-homepage/div[2]/div/div/table/tbody/tr/td/button'
        add_new_item = self.add_new_ann
    elif seld.mode == 'wbs':
        TARGET = TARGET_NEW_WBS
        XPATH = '/html/body/app-root/app-admin-homepage/div[3]/div/div/table/tbody/tr/td/button'
        add_new_item =self.add_new_wbs
    elif self.mode == 'tnm':
        TARGET = TARGET_NEW_TNM
        XPATH = '/html/body/app-root/app-admin-homepage/div[4]/div/div/table/tbody/tr/td/button'
        add_new_item = self.add_new_tnm
    self.delete_entires(XPATH)
    with open(self.csv_file, 'rU') as f:
      reader = csv.DictReader(f)
      for row in reader:
        self.browser.get(TARGET)
        add_new_item(row)
