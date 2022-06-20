if (document.URL.search("https://www.youtube.com/watch") > -1) {
	let id_int = setInterval(() => {
		if (document.querySelector("#owner-sub-count") != null){
			clearInterval(id_int);
			document.getElementById("owner-sub-count").innerText += " / " + document.querySelector("div#info-strings>yt-formatted-string").innerText;
		}
	}, 300);
	console.log("投稿日時をチャンネル登録者数の部分に追記したよ")
} else {
	console.log("対象のページじゃないので何もしないよ")
}