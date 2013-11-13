function genericOnClick(info, tab) {
    var sentence = info.selectionText;
	

    var http = new XMLHttpRequest();
	http.open('POST', "http://localhost:8001/sentence/add", true);
	http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http.onload = function(){alert("loaded")};
	http.send("user=sori&sentence="+sentence);
	
};

chrome.contextMenus.create({"title": "Send to Memory", "contexts": ["selection"],
                                        "onclick": genericOnClick});
