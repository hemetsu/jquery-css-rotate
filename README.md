Jquery-Css-Rotate
=================

Jquery-Css-Rotate is a simple jquery plugin that simply rotates elements with a given angle using CSS. The plugin was created so it's easier to rotate a element using jQuery and it works across most major browsers.

This is tested in Chrome, Firefox, Safari, IE9, IE8.

The general rotation code is from:
[http://stackoverflow.com/questions/4617220/css-rotate-property-in-ie](http://stackoverflow.com/questions/4617220/css-rotate-property-in-ie)

The code for the position fix is from:
[http://balzerg.blogspot.co.il/2012/08/analytical-fix-for-ie-rotation-origin.html](http://balzerg.blogspot.co.il/2012/08/analytical-fix-for-ie-rotation-origin.html)

Usage
-----

```
$(selector).cssRotate(degrees);
```

Example
-------

```
$('#box1').cssRotate(45);
```