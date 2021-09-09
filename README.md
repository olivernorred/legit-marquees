# LEGIT Marquees.
## These things are legit. Text around loops and stuff.

In your HTML, define one or more SVG elements with the class `legit-marquee`:

```html
<svg class="legit-marquee" viewBox="-50 -50 1070 750"

	content="Hello there!"
	contentrepeat="20"
	speed="4"
	textsize="36"

	pathd="M0,308.472C0,42.37449-21.97408,2.88935,297.72748,2.88935,756.65714,2.88935,1000-47.62774,1000,273.8001c0,281.209,14.092,325.62847-315,325.62847C12.2623,599.42857,0,652.97177,0,308.472Z"
	
	>
</svg>
```

and at the end: 
```html
<script src="/path/to/legit-marquees.js"></script>
```

or, if you prefer to serve externally:

```html
<script src="https://cdn.jsdelivr.net/gh/olivernorred/legit-marquees/legit-marquees.js"></script>
```

## Required Attributes

### `viewBox`

As normal. Depending on your path and textsize, may need negative starting coordinates (as in above example).

### `content`

Any string. Can be multiplied with `contentrepeat="[integer]"`.

### `speed`

Any number. Negative numbers indicate counter clockwise direction.

### `pathd`

Your path commands. I always make mine in Illustrator but you can write it yourself if you're a genius!


## Optional Attributes

### `contentrepeat`

Any integer. How many times to repeat the content. Defaults to 1.

### `textsize`

Any number. Resizes the text with respect to the viewbox. Defaults to 24 cause that's a nice number!


## You can put CSS on it.

The text is inline SVG so you can style it with yummy goodness like fonts and text shadows and colors and stuff. Have a good time.