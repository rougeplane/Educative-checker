console.log("Background running");


chrome.action.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		txt : "Run the checker"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}






// Ignore everything below line

// ----------------------------------------------------------------------------------------------------------------------------------//





// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (Number.isInteger(request.errors)) 
//         {
//             console.log(request.errors)

//             chrome.storage.local.get(['caption'], function(result) {
//                 console.log('Value currently is ' + result.request.caption);
//               });
              
//             console.log("Value currently")
//             // let para = document.createElement("p");
//             // let node = document.createTextNode();
//         }
//     }
// );

// self.chrome.runtime.onConnect.addListener(function(port) {
//     console.assert(port.name === "titleCheck");
    
//     port.onMessage.addListener(function(msg) {
//         console.log(msg)
//         // importScripts('https://unpkg.com/compromise@latest/builds/compromise.min.js');
//         // var r = self.nlp(msg.title);
//         // console.log(r.text())

//     });
// })


// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting === "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );

// self.addEventListener('message', function(e) {
//     importScripts('https://unpkg.com/compromise@latest/builds/compromise.min.js');
//     console.log("in message e")
//     var r = self.nlp(e.data);
//     var s = r.sentences().toUpperCase();
//     console.log(s)
//     self.postMessage(s.export());
//   }, false);