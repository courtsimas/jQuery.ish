jQuery.ish 0.3 - dev
=========

A baseline feature set and jQuery compatible syntax for modern browsers. Use it as part of your toolset to increase page load performance where the full version of jQuery is not desired.

## This project is to:

- provide a developer with a baseline feature set that can be extended with native js methods for everything else
- have download size of less than 500 bytes minified and gzipped
- offer a jQuery compatible syntax
- have full support for jQuery style chaining

## This project is NOT to:

- create a full featured jQuery alternative, checkout the [zepto][2] project if that is what you need
- create a plugin that is more than 500 bytes minified and gzipped

## Code Size

- Original Size: 1.56KB (551 bytes gzipped)
- Compiled Size: 1.14KB (474 bytes gzipped)

compilation done with [Google Closure Compiler][4]

## Browser Support and Dependancy

Browser support dependencies:

- [querySelectorAll][1]
- [getComputedStyle][3]

## Supported Methods

- hasClass()
- addClass()
- removeClass()
- toggleClass()
- show()
- hide()
- toggle()
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