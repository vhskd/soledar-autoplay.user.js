// ==UserScript==
// @name         Soledar autoplay
// @namespace    null
// @version      0.1
// @description  try to take over the world!
// @author       vhskd
// @match        https://web.telegram.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// @updates https://github.com/vhskd/soledar-autoplay.user.js/raw/main/soledar-autoplay.user.js
// ==/UserScript==

(() => {
	'use strict';
	let appLoop = () => {
		console.log("Bot runned")
		const bot_enabled = true;
		const white_ids = [-1518393228, -1211933154]
		const gym = -1518393228;
		let rex1 = /• \[📟is on\]/;
		if (bot_enabled) {
			// console.log(html1, html1.match(rex1))
			// window.document.querySelector('.ChatInfo .fullName').innerHTML += "\[📟•is on\]"
			// console.log(html1, html1.match(rex1))
		}

		// K_Version
		let chatTitleEl = ".topbar .chat-info-container .peer-title";
		let msgListEl = ".bubble";
		let btnEl = ".reply-markup button";
		let ClickedByBot = [];

		// Z_Version
		// let chatTitleEl = '.ChatInfo .fullName';
		// let msgListEl = '.Message';
		// let btnEl = '.InlineButtons button';



		let observeInvetrval = setInterval(() => {
			let hash = window.location.hash;
			let id = hash.slice(1);

			if (bot_enabled && white_ids.includes(parseInt(id))) {
				let allMSG = document.querySelectorAll(msgListEl);
				let al_m = Array.prototype.slice.call(allMSG, 0);
				al_m = al_m.splice(-15);

				let html1 = document.querySelector(chatTitleEl).innerHTML;

				if (html1.match(rex1) == null) {
					document.querySelector(chatTitleEl).innerHTML += " • \[📟is on\]";
				}

				$(".bubbles-group:last-child .bubble.with-reply-markup").get().forEach((e, i) => {

				})

				let el = $(".bubbles-group:last-child .bubble.with-reply-markup").last();
				let r = /(.*?) починає битву русаків!/;
				let match = el.text().match(r);
				// if ( i > 0 ) break;
				if (match && match[1] != "John") {
					let btn = el.find('button:first-child').get(0)
					let rnd = Math.floor(Math.random() * (1000 - 750) + 750);
					if ($(btn).text() == "Атакувати!") {
						// setTimeout(() => { $(btn).click() }, 750)
						// ClickedByBot.push(el.data("mid"))
						$(btn).click()
					}
					btn = null;
					rnd = null;
					match = null;
				}

				for (let i in al_m) {
					let regex = /Починається битва\.\.\./;
					let regex2 = /John/;
					let regex3 = /\[WaitForIt\]/;
					let text = al_m[i].textContent;

					if (text.match(regex)) {
						if (al_m[i].classList.contains("with-reply-markup") || al_m[i].classList.contains("has-inline-buttons")) {
							if (!text.match(regex2) && !text.match(regex3)) {
								let el = al_m[i].querySelector(btnEl);
								let tc = al_m[i].querySelector(".bubble-content" /*".text-content"*/ );
								let t1 = document.createTextNode("\[WaitForIt\]");
								let rnd = Math.floor(Math.random() * (2300 - 1750) + 1750);

								tc.appendChild(t1);
								setTimeout(() => {
									// tc.innerHTML = tc.innerHTML.replace(regex3, "");
									el.click();
								}, rnd)
								// console.log("Все добре, я можу тицяти", al_m[i])
							} else { /*console.log("Ти вже в бою, не треба.")*/ }
						} else { /*console.log("Нема куди тицяти")*/ }
					} else { /*console.log("Нема во шо грати")*/ }
				}

			}

			$(window).blur(function() {
				if ($('.bubbles-go-down').not(".scrolled-down")) $('.bubbles-go-down').click();
			});


			//clearInterval(observeInvetrval)

		}, 1500)
	}
	setTimeout(appLoop, 5000)
})()