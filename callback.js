const showDownload = (result) => {
    return new Promise((resolve)=> {
        setTimeout(() =>{
            console.log("Download selesai")
            console.log("Hasil download "+ result)
        }, 10000);
    })
}

const download = async () => {
    const result = "Windows.exe"
    return await showDownload(result)
}
console.log("Please Waiting.......")
download();