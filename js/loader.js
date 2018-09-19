// load script function
// used for appending scripts in the head of the html file
function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}


window.onload = function(){
    loadScript('js/constants.js')
    loadScript('js/let.js')
    loadScript('js/defaultParameters.js')
    loadScript('js/spreadOperator.js')
    loadScript('js/templateStrings.js')
    loadScript('js/objectLiteralEnhancements.js')
    loadScript('js/newStringMethods.js')
}
