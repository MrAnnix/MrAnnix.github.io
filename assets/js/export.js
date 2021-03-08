// Getting the data //
var filename = "PrismESP";
var rawData = base64ToArray(findValue("B64_SRAM_" + filename)).map(function (a) { return String.fromCharCode(a); }).join("");
				
var tmpLink = document.getElementById("downloadSavegame");
tmpLink.href = "data:application/force-download," + escape(rawData);
tmpLink.textContent = "Descarga el savegame"
