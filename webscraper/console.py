from scraper import Scraper

if __name__ == "__main__":
  import sys
  if len(sys.argv) < 1:
    print('usage: python console.py [filename]')
    sys.exit(1)
  else:
    scr = Scraper(sys.argv[1])
    scr.run()
