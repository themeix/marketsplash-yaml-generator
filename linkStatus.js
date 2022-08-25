
links = document.links;

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status === 200)
        return 'is working';
    else
        return 'is not working';
}

for (var i = 0; i < links.length; i++) {
    var url_get = links[i].href;

    if (!url_get.includes('google-ads')) {
        console.log(`${url_get} ` + UrlExists(url_get));
    }

}
