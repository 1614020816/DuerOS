(()=>{
	ajax("get","../html/header.html","","text").then(html=>{
		document.getElementById("head").innerHTML = html;
	})
})();
