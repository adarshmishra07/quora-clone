import firebase  from 'firebase'


//Custom Upload Adapter for image uploading to firebase storage using Ckeditor
class Uploader {
    constructor(loader) {
        this.loader = loader
    }
    upload() {
        return this.loader.file.then(
            (file) =>
                new Promise((resolve, reject) => {
                    let uploadTask = firebase.storage().ref()
                        .child(`images/${file.name}`)
                        .put(file)

                    uploadTask.on(
                        firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot) => {
                            /* snapshot with info about 
                            the upload progress & metadata */
                            console.log(snapshot)
                        },
                        (error) => {
                           console.log(error)
                        },
                        () => {
                            // upload successful
                            uploadTask.snapshot.ref
                                .getDownloadURL()
                                .then((downloadURL) => {
                                    resolve({
                                        default: downloadURL
                                    })
                                })
                        }
                    )
                })
        )
    }
}

export default Uploader