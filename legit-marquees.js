document.querySelectorAll("svg.legit-marquee").forEach(el => {
	const amount = (el.getAttribute("contentrepeat")) ? el.getAttribute("contentrepeat") : 1
	console.log(amount)
	const content = el.getAttribute("content").concat(" ").repeat(amount)
	const size = (el.getAttribute("textsize")) ? el.getAttribute("textsize") : 24
	
	const pathElement =
	`<path id="loop" fill="transparent" d="${el.getAttribute("pathd")}"></path>`

	const textElement =
	`<text width="100%">
	 	<textPath alignment-baseline="top" xlink:href="#loop" startOffset="0" font-size="${size}" class="movingtextpath">${content}</textPath>
	</text>`
	el.innerHTML = `${pathElement}${textElement.repeat(2)}`


	const path = el.querySelector("#loop")
	const firsttext = el.querySelectorAll(".movingtextpath")[0]
	const secondtext = el.querySelectorAll(".movingtextpath")[1]
	
	let offset = 0
	const s = parseFloat(el.getAttribute("speed"));
	const direction = s/Math.abs(s)
	function updateTextOffset() {
		offset += parseFloat(el.getAttribute("speed"))
		if(offset > path.getTotalLength() || offset < -path.getTotalLength()) {offset = 0}
		firsttext.setAttribute("startOffset", offset)
		secondtext.setAttribute("startOffset", offset-direction*path.getTotalLength()+.5*direction)
		requestAnimationFrame(updateTextOffset)
	}
	updateTextOffset()
});