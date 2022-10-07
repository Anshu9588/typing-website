const script = document.createElement('script');
const url = window.location.href.slice(-5)
if(url===`kr-un`) {script.src = './scripts/kruti2unicode.js';}
if(url===`un-kr`){script.src = './scripts/unicode2kruti.js';}
if(url===`ch-un`){script.src = './scripts/chanakaya2unicode.js';}
if(url===`un-ch`){script.src = './scripts/unicode2chanakaya.js';}
if(url===`sl-un`){script.src = './scripts/shriilipi2unicode.js';}
if(url===`ul-sl`){script.src = './scripts/unicode2shriilipi.js';}
// if(url===`kr-sl`){script.src = './scripts/.js';}
// if(url===`as-un`){script.src = './scripts/.js';}
// if(url===`un-as`){script.src = './scripts/.js';}
// if(url===`an-un`){script.src = './scripts/.js';}
// if(url===`un-an`){script.src = './scripts/.js';}
// if(url===`ba-un`){script.src = './scripts/.js';}
// if(url===`un-bn`){script.src = './scripts/.js';}
// if(url===`pr-un`){script.src = './scripts/.js';}
// if(url===`un-pr`){script.src = './scripts/.js';}
if(url===`4c-un`){script.src = './scripts/4cganghi2unicode.js';}
if(url===`un-4c`){script.src = './scripts/unicode24cganghi.js';}
// if(url===`Pu-fn`){script.src = './scripts/punjabifontconverter.js';}

document.head.appendChild(script);