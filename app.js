// ****animation qui suis je?*******
const txtAnim = document.querySelector("h5")

new Typewriter(txtAnim,{
    // deletespeed: 10
    loop: true,
    
} )
.typeString("Bonjour, je suis Cayrol Sébastien")
.pauseFor(300)
.typeString(", futur")
.pauseFor(300)
.typeString("<STRONG>, DEV WEB</STRONG>")
.pauseFor(5000)
.typeString("..... enfin")
.pauseFor(1000)
.typeString(", si je suis sélectionné!!")
.pauseFor(5000)
.start()


