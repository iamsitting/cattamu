from scraper import Scraper

if __name__ == "__main__":
  import sys
  if len(sys.argv) < 2:
    print('usage: python console.py [mode] [filename]')
    sys.exit(1)
  else:
    scr = Scraper(sys.argv[1], sys.argv[2])
    scr.run()
