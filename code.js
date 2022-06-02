
// data being used for senetece analysis
var prepositions = [
    'about',           'above',       'across',
    'after',           'against',     'along',
    'among',           'around',      'at',
    'because of',      'before',      'behind',
    'besides',         'between',     'beyond',
    'but',             'by',          'concerning',
    'despite',         'down',        'during',
    'except',          'excepting',   'for',
    'from',            'in',          'in front of',
    'inside',          'in spite of', 'instead of',
    'into',            'like',        'near',
    'of',              'off',         'on',
    'onto',            'out',         'outside',
    'over',            'past',        'regarding',
    'since',           'through',     'throughout',
    'to',              'toward',      'under',
    'underneath',      'until',       'up',
    'upon',            'up to',       'with',
    'within',          'without',     'with regard to',
    'with respect to'
]

console.log("Script start");


chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
    
    // checking the title
    titleCheck()

    // checking the subtitles
    sectionTitle()
    subSectionTitle()

    // checking for captions
    captions()

    // checking backlinks
    backlinks()   

}

// Sending message to the popup.html to retrieve logs


// chrome.storage.local.set({key: value})


function titleCheck()
{
    let title = document.getElementsByTagName("H1")

    // Iterating through properties of title
    for (elt of title) 
    {
        let flagTitle = false;
        // checking for font size
        if (elt.style["font-size"] != "40px")
        {
            console.log("Tile font size is wrong");
            flagTitle = true;
        }

        titleText = elt.innerHTML;

        // Checking the text if title case
        for (let i in titleText){
            if (prepositions.includes(i)){
                if (i[0] != i[0].toLowerCase()){
                    flagTitle = true;
                    console.log("The word in header doesn't seem right " + i);
                }
            }

            if (i[0] != i[0].toUpperCase()){
                flagTitle = true;
                console.log("The word in header doesn't seem right " + i);
            }
        }

        if (flagTitle){
            elt.style['background-color'] = '#fa5246';
        }
        else{
            elt.style['background-color'] = '#00ff00';
        }
    }
}

function sectionTitle()
{
    let subTitle = document.getElementsByTagName("H2");

    for (elt of subTitle) 
    {
        titleText = elt.innerHTML;

        // Checking the text if sentence case
    
        if (titleText[0][0] != titleText[0][0].toUpperCase())
        {
            console.log("The word in section title doesn't seem right " + i);
            elt.style['background-color'] = '#fa5246';
        }
        else
        {
            elt.style['background-color'] = '#00ff00';
        }

        
    }
}

function subSectionTitle()
{
    let subTitle = document.getElementsByTagName("H3");

    for (elt of subTitle) 
    {
        titleText = elt.innerHTML;

        // Checking the text if sentence case
    
        if (titleText[0][0] != titleText[0][0].toUpperCase())
        {
            flagParagraph = true;
            console.log("The word in sub section title doesn't seem right " + i);
            elt.style['background-color'] = '#fa5246';
        }
        else
        {
            elt.style['background-color'] = '#00ff00';
        }
        
    }
}

function captions()
{
    let captions = document.getElementsByClassName("font-normal");

    for (elt of captions){
        captionText = elt.innerHTML;
        
        if (captionText[captionText.length - 1] == ".")
        {
            elt.style['background-color'] = '#fa5246';
            console.log("Something is wrong with caption " + captionText);
        }
        else
        {
            elt.style['background-color'] = '#00ff00';
        }
    }
}

function backlinks(){
    let links = document.getElementsByTagName("a")
    
    for (elt of links)
    {
        if (elt.href.includes("educative.io"))
        {
            elt.style['background-color'] = "#a6a6f7"
        }
        else
        {
            elt.style['background-color'] = '#fa5246';
            console.log("Wrong link " + elt.href)
        }
    }
}































// var port = chrome.runtime.connect({name: "titleCheck"});
        // port.postMessage({title: titleText});
        // console.log("title msg sent")
        
        // chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        //     console.log(response.farewell);
        //   });

        // window.postMessage(titleText);
        
        // const doc = s(titleText)

        // let m = doc.match("#Preposition").text()
        // console.log(m)
        // console.log("heljioej")