function jsonToJSTree(data, parentText = "") {
    let result = [];
    for (let key in data) {
        if (typeof data[key] === "object") {
            // پوشه
            result.push({
                text: key,
                children: jsonToJSTree(data[key], key)
            });
        } else {
            // فایل
            result.push({
                text: `🎬 ${key} (${data[key]})`,
                icon: "jstree-file"
            });
        }
    }
    return result;
}

$(document).ready(function(){
    $.getJSON("video_list.json", function(data){
        const treeData = jsonToJSTree(data);
        $('#jstree').jstree({
            'core' : {
                'data' : treeData
            },
            "plugins" : ["wholerow"]
        });
    });
});
