function checkInFrame() {
			if (window.self !== window.top) {
				return true;
			} else {
				return false;
			}
		}

		window.onload = function() {
			if (!checkInFrame()) {
				document.body.innerHTML = "<div style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;'>DENIED</div>";
			}
		};

      function downloadFile(event) {
        event.preventDefault();
        var downloadLink = document.createElement("a");
        downloadLink.href = "https://github.com/Artazzzz/downloadezwin/raw/main/EZWIN.zip";
        downloadLink.download = "EZWIN.zip";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
