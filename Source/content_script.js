var walk = function(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
};

var handleText = function(textNode) {
	var v = textNode.nodeValue;

	v = v.replace(/\bRaleigh-Durham\b/g, "Raleigh");
	v = v.replace(/\braleigh-durham\b/g, "raleigh");
	
	textNode.nodeValue = v;
}

walk(document.body);