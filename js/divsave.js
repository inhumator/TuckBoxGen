function download(element_id, filename) {
    var a = document.body.appendChild(
        document.createElement("a")
    );
    if (filename)
        a.download = filename;
    a.href = "data:image/svg+xml;utf8," + document.getElementById(element_id).innerHTML;
    a.click(); //Trigger a click on the element
    a.remove();
}

function openNewFrame(element_id) {
    var data_url = "data:image/svg+xml;base64," + btoa(document.getElementById(element_id).innerHTML);
    var win = window.open();
    //win.document.write('<iframe src="<img src=\'' + data_url + '\'/>" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    //win.document.write('<iframe src="<img src=\'' + data_url + '\'/>" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    win.document.write('<img src="' + data_url + '">');
}

function changeUrl(url) {
    history.pushState(null, '', url);
}