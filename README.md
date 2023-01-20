# LEGIT Marquees.
## These things are legit. Text around loops and stuff.

[Click here to watch the video tutorial!](https://youtu.be/6sHC1FIoZMo)

In your HTML, define one or more SVG elements with the class `legit-marquee`:

```html
<svg class="legit-marquee" viewBox="0 0 634 149"

	content="Hello there!"
	contentrepeat="3"
	speed="4"
	textsize="50"

	pathd="m-20.66501,119.8335c146,-5 158,-32 231,-41c73,-9 189,44 294,45c105,1 142,-50 207.66501,-58.8335"
	
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