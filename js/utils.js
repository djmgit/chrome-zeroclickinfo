require.scopes.utils = ( () => {
    
    function getHost(url) {
        var firstIndex = url.indexOf("/") + 1;
        var host = url.substring(firstIndex, url.indexOf("/", firstIndex)); 
    }
    
    var exports = {};
    exports.getHost = getHost;
    return exports;
})();