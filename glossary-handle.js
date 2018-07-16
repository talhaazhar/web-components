(function(){
    var thisHTML = document.currentScript.ownerDocument;                    //loading this file HTML
    var template = thisHTML.querySelector("#glossary-container");        //grabbing template above
    var Element = Object.create(HTMLElement.prototype);                     //creating a prototype/Shell
    var shadowRoot;
    var alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");



    function compare(a, b){
        return(a.getAttribute("word").localeCompare(b.getAttribute("word")));
    }


    Element.createdCallback = function(){
        //contents for Element
        shadowRoot = this.createShadowRoot();
        var clone = document.importNode(template.content, true);
        shadowRoot.appendChild(clone);      //template above to shadowRoot
        var defs = shadowRoot.getElementById("collection").querySelectorAll("rit-glossary1");
        defs = Array.from(defs);
        var collection = shadowRoot.getElementById("dictionary");
        defs.sort(compare);

        var x = 0;
        var i;
        var printHeading = true;
        
        
        for(i = 0; i < defs.length; i++ ){

            var wrd = defs[i].getAttribute("word");
            var def = defs[i].getAttribute("definition");
            var chp = defs[i].getAttribute("chapter");
            console.log(wrd.charAt(0));


            console.log(wrd.charAt(0).toUpperCase() === alphabet[x]);

            while(wrd.charAt(0).toUpperCase() !== alphabet[x]){
                console.log("here");
                x++;
                printHeading = true;
            }
            
            if(printHeading === true){
                collection.innerHTML += "<h3 id = \"" + alphabet[x].toLowerCase + "\">" + alphabet[x] + "</h3>";
                printHeading = false;
            }


            var ele = "<rit-glossary word = \"" + wrd + "\" definition = \""
             + def + "\" chapter = \"" + chp + "\" ></rit-glossary>";
            collection.innerHTML += ele;
        }
    };    

    document.registerElement('glossary-container', {prototype: Element});
})()