let temp=11;
window.addEventListener("load",()=> {
    setInterval(() => {
        temp++;
        let emojiCode=`&#1285${temp};`;
        document.querySelector("#emojiCode").innerHTML=emojiCode;
        document.querySelector("#music").play();
    }, 3000);
});