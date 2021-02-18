# LEGIT Marquees.
## These things are legit. Text around loops and stuff.

In your HTML, define one or more SVG elements with the class <code>legit-marquee</code>:

<code>

<svg class="legit-marquee" viewBox="-50 -50 1070 750"

		content="Hello there!"
		contentrepeat="20"
		speed="4"
		textsize="36"

		pathd="M0,308.472C0,42.37449-21.97408,2.88935,297.72748,2.88935,756.65714,2.88935,1000-47.62774,1000,273.8001c0,281.209,14.092,325.62847-315,325.62847C12.2623,599.42857,0,652.97177,0,308.472Z"
		
		>
</svg>

</code>

## Required Attributes

### <code>viewBox</code>

As normal. Depending on your path and textsize, may need negative starting coordinates (as in above example).

### <code>content</code>

Any string. Can be multiplied with <code>contentrepeat="[integer]"</code>.

### <code>speed</code>

Any number. Negative numbers indicate counter clockwise direction.

### <code>pathd</code>

Your path commands. I always make mine in Illustrator but you can write it yourself if you're a genius!


## Optional Attributes

### <code>contentrepeat</code>

Any integer. How many times to repeat the content. Defaults to 1.

### <code>textsize</code>

Any number. Resizes the text with respect to the viewbox. Defaults to 24 cause that's a nice number!
