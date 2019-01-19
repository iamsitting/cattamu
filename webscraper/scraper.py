import csv
import time

from secrets import (ADMIN_PASSWORD, ADMIN_USER, TARGET_LOGIN, TARGET_NEW_ANN,
                     TARGET_NEW_TNM, TARGET_NEW_WBS)
from selenium import webdriver


class Scraper(object):

  def __init__(self, mode, filename):
    self.filename = filename
    self.mode = filename.split('.csv')[0]  # does not handle file path
    if self.mode == 'announcement':
      self.target = TARGET_NEW_ANN
    elif self.mode == 'wednesday':
      self.target = TARGET_NEW_WBS
    elif self.mode = 'thursday':
      self.target = TARGET_NEW_TNM
    else:
      raise ValueError('bad file name')


    if self.mode in ['announcement', 'wednesday', 'thursday']:

  def setUp(self):
    options = webdriver.ChromeOptions()
    options.add_argument('window-size=1200x600')
    self.browser = webdriver.Chrome(chrome_options=options)

  def find_tag_child_by_text(self, parent, tag, text):
    try:
      children = parent.find_elements_by_tag_name(tag)
      return next(c for c in children if 'text' in c.text.lower())
    except Exception:  # too general
      raise ValueError('Something went wrong!')

  def add_new_item(self, row):
    form = self.browser.find_element_by_tag_name('form')
    inputs = form.find_elements_by_tag_name('input')
    submit = self.find_tag_child_by_text(form, 'button', 'submit')
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
        header = self.find_tag_child_by_text(self.browser, 'h1', search_for)
        table = header.find_element_by_xpath('//following-sibling::table')
        delete_buttons = table.find_elements_by_tag_name('button')
        delete_buttons[0].click()
      except Exception:
        print('No buttons available.')
        break
    time.sleep(0.5)

  def run(self):
    self.setUp()
    self.login_to_site()
    self.delete_entires(self.mode)
    with open(self.filename, 'rU') as f:
      reader = csv.DictReader(f)
      for row in reader:  # row is an OrderedDict in python 3.6
        self.browser.get(TARGET)
        self.add_new_item(row)
