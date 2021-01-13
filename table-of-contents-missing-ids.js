
// Get the table of contents container
var tableOfContents = document.querySelector('#table-of-contents');

// Get all of the h2 headings in the document
var headings = document.querySelectorAll('h2');


// Make sure there's at least one heading
// Only generate markup if there are heading elements
if (headings.length > 0) {

	// Set the HTML for the table of contents container
	// Add a heading and an ordered list
	// Convert the headings NodeList to an array, and use the array.map() method
	// to create an array of markup strings that we'll combine with the array.join() method
	tableOfContents.innerHTML =
		'<h2>Table of Contents</h2>' +
		'<ol>' +
			Array.prototype.slice.call(headings).map(function (heading) {

				if ( heading.id === "" ){
				console.log( heading.textContent, " - no id found" );
				heading.id = heading.textContent.replace(new RegExp(' ', 'g'), '-');
				}

				return '<li><a href="#' + heading.id + '">' + heading.textContent + '</a></li>';
			}).join('') +
		'</ol>';
}
