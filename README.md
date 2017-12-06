# Spotaroom

A room search platform implemented using ReactJS. It allows you to filter properties by its type and sort them by ascending or descending price value.

You can also modify the URL path to get properties from different cities in this way: http://BROWSER_URL/${city}. If no city is provided in the browser address, “madrid” is used by default. (Valid cities: madrid, barcelona, london…)

Data is retreived from **Spotahome** REST public API. If you try this project in localhost you may find CORS issues interacting with these APIs from the browser. A possible solution is using a proxy as intermediary to perform the requests.

## Installation

Install package dependencies

```shell
npm install
```
Create a production build

```shell
npm run build
```

Finally, serve Web site

```shell
npm install -g serve
serve -s build
```

## License

The MIT License (MIT)

Copyright (c) 2017 Iván Aguilar Martín

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
