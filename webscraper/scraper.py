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

  def add_new_item(self, row):
    form = self.browser.find_element_by_tag_name('form')
    inputs = form.find_elements_by_tag_name('input')
    buttons = form.find_elements_by_tag_name('button')
    submit = next((b for b in buttons if 'submit' in b.text.lower()))
    for el in inputs:
      el.send_keys(row.popitem()[1])
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
    elif self.mode == 'wbs':
        TARGET = TARGET_NEW_WBS
        search_for = 'wednesday'
    elif self.mode == 'tnm':
        TARGET = TARGET_NEW_TNM
        search_for = 'thursday'

    self.delete_entires(XPATH, search_for)
    with open(self.csv_file, 'rU') as f:
      reader = csv.DictReader(f)
      for row in reader:  # row is an OrderedDict in python 3.6
        self.browser.get(TARGET)
        self.add_new_item(row)
