**** We've been asked to remove this project (not by jQuery or github). We will be deleting it tonight at 10pm, if you want to make this your own.. archive it by then :) ****

jQuery.ish 0.2
=========

A baseline feature set and jQuery compatible syntax for modern browsers. Use it as part of your toolset for page performance where the full version of jQuery is not desired.

## This project is to:

- include the parts of jQuery that we can't live without and use native js methods for everything else
- download size of less than 500 bytes minified and gzipped
- offer 100% jQuery compatible syntax
- full support for jQuery style chaining

## This project is NOT to:

- create a full featured jQuery alternative, checkout the [zepto][2] project if that is what you need
- create a plugin that is more than 500 bytes minified and gzipped

## Code Size

- Original Size: 1.54KB (548 bytes gzipped)
- Compiled Size: 1.15KB (463 bytes gzipped)

compilation done with [Google Closure Compiler][4]

## Browser Support and Dependancy

Browser support dependencies:

- [querySelectorAll][1]
- [getComputedStyle][3]

## Supported Methods

- hasClass()
- addClass()
- toggleClass()
- removeClass()
- toggle()
- show()
- hide()
- trim()

## MIT License

Copyright (C) 2012 William Shackelford, Nat Hagey, M. Brandon Lorenz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[1]: https://developer.mozilla.org/en/DOM/Document.querySelectorAll#Browser_compatibility
[2]: http://zeptojs.com
[3]: https://developer.mozilla.org/en/DOM/window.getComputedStyle
[4]: http://closure-compiler.appspot.com/home