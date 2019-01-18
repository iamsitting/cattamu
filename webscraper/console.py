from scraper import AnnouncementScraper

if __name__ == "__main__":
  import sys
  if len(sys.argv) < 2:
    print('usage: python console.py [mode] [filename]')
    sys.exit(1)
  else:
    ascraper = AnnouncementScraper(sys.argv[1], sys.argv[2])
    ascraper.run()
