import requests
from requests.exceptions import HTTPError
from bs4 import BeautifulSoup

for url in ['https://www.croma.com/searchB?q=led%20tv',]:
    try:
        response = requests.get(url)

        # If the response was successful, no Exception will be raised
        response.raise_for_status()
    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')  # Python 3.6
    except Exception as err:
        print(f'Other error occurred: {err}')  # Python 3.6
    else:
        response.encoding = 'utf-8' # Optional: requests infers this internally
        soup = BeautifulSoup(response.text, 'html.parser')
        divs = soup.find_all('div')

        print(divs)