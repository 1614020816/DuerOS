(()=>{
	ajax("get","../html/footer.html","","text").then(html=>{
		document.getElementById("foot").innerHTML = html;
	})
})();
