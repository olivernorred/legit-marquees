document.querySelectorAll("svg.legit-marquee").forEach((el, index) => {

	// setting up content variables
	let amount = (el.getAttribute("contentrepeat")) ? el.getAttribute("contentrepeat") : 1
	console.log(amount)
	let content = el.getAttribute("content").concat(" ").repeat(amount)
	let size = (el.getAttribute("textsize")) ? el.getAttribute("textsize") : 24
	
	// creating each path element
	let pathElement =
	`<path id="loop${index}" fill="transparent" d="${el.getAttribute("pathd")}"></path>`

	// creating each text element attached to a textPath element that references the above path element.
	let textElement =
	`<text width="100%">
		<textPath alignment-baseline="top" xlink:href="#loop${index}" startOffset="0" font-size="${size}" class="movingtextpath">${content}</textPath>
	</text>`
	el.innerHTML += `${pathElement}${textElement.repeat(2)}`

	
	let offset = 0
	let s = parseFloat(el.getAttribute("speed"))
	let direction = s/Math.abs(s)
	let path = el.querySelector(`#loop${index}`)
	let firsttext, secondtext

	firsttext = el.querySelectorAll(".movingtextpath")[0]
	secondtext = el.querySelectorAll(".movingtextpath")[1]
	

	el.funcs = {}

	el.funcs.updateTextOffset = function() {
		offset += parseFloat(el.getAttribute("speed"))
		if(offset > path.getTotalLength() || offset < -path.getTotalLength()) {offset = 0}
		firsttext.setAttribute("startOffset", offset)
		secondtext.setAttribute(
			"startOffset",
			offset - direction*path.getTotalLength() + 0.5*direction
		)
	}

})

function updatePage() {
	document.querySelectorAll("svg.legit-marquee").forEach(el => {
		el.funcs.updateTextOffset()
	})
	requestAnimationFrame(updatePage)
}
updatePage()