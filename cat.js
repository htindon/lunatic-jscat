var catLib = {
	react: function(action) {
		var x = Math.round(Math.random() * 10);
		if (x < 3) {
			reaction = "purring";
		}
		else if (x < 6) {
			reaction = "hissing";
		}
		else {
			reaction = "ignoring you";
		}
		document.getElementById("reaction").innerHTML = reaction;
	},
}
