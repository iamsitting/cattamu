import csv
import time

from secrets import (ADMIN_PASSWORD, ADMIN_USER, TARGET_LOGIN, TARGET_NEW_ANN,
                     TARGET_NEW_TNM, TARGET_NEW_WBS)
from selenium import webdriver


class Scraper(object):
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
    date = self.browser.find_element_by_xpath('/html/body/app-root/app-new-wbs/div/div/div/div[2]/form/input[1]')
    location = self.browser.find_element_by_xpath('/html/body/app-root/app-new-wbs/div/div/div/div[2]/form/input[2]')
    topic = self.browser.find_element_by_xpath('/html/body/app-root/app-new-wbs/div/div/div/div[2]/form/input[3]')
    doc_link = self.browser.find_element_by_xpath('/html/body/app-root/app-new-wbs/div/div/div/div[2]/form/input[4]')
    submit = self.browser.find_element_by_xpath('/html/body/app-root/app-new-wbs/div/div/div/div[2]/form/button[2]')
    date.send_keys(row['date'])
    location.send_keys(row['location'])
    topic.send_keys(row['topic'])
    doc_link.send_keys(row['link'])
    submit.click()


  def add_new_tnm(self, row):
    date = self.browser.find_element_by_xpath('/html/body/app-root/app-new-tnm/div/div/div/div[2]/form/input[1]')
    topic = self.browser.find_element_by_xpath('/html/body/app-root/app-new-tnm/div/div/div/div[2]/form/input[2]')
    doc_link = self.browser.find_element_by_xpath('/html/body/app-root/app-new-tnm/div/div/div/div[2]/form/input[3]')
    submit = self.browser.find_element_by_xpath('/html/body/app-root/app-new-tnm/div/div/div/div[2]/form/button[2]')
    date.send_keys(row['date'])
    topic.send_keys(row['topic'])
    doc_link.send_keys(row['link'])
    submit.click()

  def login_to_site(self):
    self.browser.get(TARGET_LOGIN)
    form = self.browser.find_element_by_tag_name('form')
    uname = form.find_element_by_id('username')
    pw = form.find_element_by_id('password')
    submit = form.find_element_by_tag_name('button')
    uname.send_keys(ADMIN_USER)
    pw.send_keys(ADMIN_PASSWORD)
    submit.click()

  def delete_entires(self, search_for)
    while True:
      try:
        time.sleep(2)
        headers = self.browser.find_elements_by_tag_name('h1')
        target_header = next((h for h in headers if search_for in h.text.lower()))
        table = target_header.find_element_by_xpath('//following-sibling::table')
        delete_buttons = table.find_elements_by_tag_name('button')
        delete_buttons[0].click()
      except Exception:
        print('No buttons available.')
        break
    time.sleep(0.5)

  def run(self):
    self.setUp()
    self.login_to_site()
    if self.mode == 'ann':
        TARGET = TARGET_NEW_ANN
        search_for = 'announcement'
        add_new_item = self.add_new_ann
    elif self.mode == 'wbs':
        TARGET = TARGET_NEW_WBS
        search_for = 'wednesday'
        add_new_item = self.add_new_wbs
    elif self.mode == 'tnm':
        TARGET = TARGET_NEW_TNM
        search_for = 'thursday'
        add_new_item = self.add_new_tnm

    self.delete_entires(XPATH, search_for)
    with open(self.csv_file, 'rU') as f:
      reader = csv.DictReader(f)
      for row in reader:
        self.browser.get(TARGET)
        add_new_item(row)
