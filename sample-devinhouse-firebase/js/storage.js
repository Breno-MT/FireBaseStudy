const uploader = document.getElementById("uploader");
const fileButton = document.getElementById("fileButton");

fileButton.addEventListener("change", (e) => {

    const file = e.target.files[0];

    const storageRef = firebase.storage().ref("arquivos/" + file.name);

    const task = storageRef.put(file)

    task.on("state_changed", 

        function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            uploader.value = percentage
        },

        function error(err) {
            console.log(err)
        },

        function complete() {
            alert("Envio completo!")
        }
    )
});


