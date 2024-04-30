function checkInFrame() {
			if (window.self !== window.top) {
				return true;
			} else {
				return false;
			}
		}

		window.onload = function() {
			if (!checkInFrame()) {
				window.location.href = "denied.html";
			}
		};

      function downloadFile(event) {
	$('#exampleModalCenter').modal('show');
        event.preventDefault();
        var downloadLink = document.createElement("a");
        downloadLink.href = "https://github.com/Artazzzz/downloadezwin/raw/main/EZWIN.zip";
        downloadLink.download = "EZWIN.zip";
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
