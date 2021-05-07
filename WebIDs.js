var WebIDType;
(function (WebIDType) {
    WebIDType["PathOnly"] = "P";
    WebIDType["IDOnly"] = "I";
    WebIDType["Full"] = "F";
    WebIDType["LocalID"] = "L";
    WebIDType["DefaultID"] = "D";
})(WebIDType || (WebIDType = {}));
function WebIDFromAttributePathClean(path) {
    var WebIDtype = WebIDType.PathOnly;
    var version = '1';
    var marker = 'AB';
    var baseElementMarker = 'E';
    var namePayload = btoa(path.toUpperCase()).slice(0, -2);
    var WebID = WebIDtype + version + marker + baseElementMarker + namePayload;
    return WebID;
}
function WebIDFromElementAttributePath(path) {
    var WebIDtype = 'P';
    var version = '1';
    var marker = 'AB';
    var baseElementMarker = 'E';
    var namePayload = btoa(path.toUpperCase()).slice(0, -2);
    var WebID = WebIDtype + version + marker + baseElementMarker + namePayload;
    return WebID;
}
function WebIDFromPIPointPath(path) {
    var WebIDtype = 'P';
    var version = '1';
    var marker = 'DP';
    var namePayload = btoa(path.slice(0, -2));
    var WebID = WebIDtype + version + marker + namePayload;
    return WebID;
}
