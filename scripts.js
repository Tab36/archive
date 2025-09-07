function pack(fileName, filePicName) {
                const container = document.getElementById("flexer");
                container.innerHTML += `
                <a href="${fileName}" download="${fileName}">
                    <div>
                        <img class="pack" src="${filePicName}">
                    </div>
                </a>`;
}
