// load script function
// used for appending scripts in the head of the html file
function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'js/' + url;
    head.appendChild(script);
}


window.onload = function(){
    loadScript('constants.js')
    loadScript('let.js')
    loadScript('defaultParameters.js')
    loadScript('spreadOperator.js')
    loadScript('templateStrings.js')
    loadScript('objectLiteralEnhancements.js')
    loadScript('newStringMethods.js')
    loadScript('arrowFunctions.js')
    loadScript('sets.js')
    loadScript('generators.js')
}
