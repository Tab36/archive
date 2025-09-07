function pack(fileName, filePicName) {
                const container = document.getElementById("flexer");
                container.innerHTML += `
                <a href="${fileName}" download="${fileName}">
                    <div class="pack">
                        <img src="${filePicName}">
                    </div>
                </a>`;
}
