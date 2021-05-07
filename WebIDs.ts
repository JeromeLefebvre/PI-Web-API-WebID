enum WebIDType {
    PathOnly = 'P',
    IDOnly = "I",
    Full = 'F',
    LocalID = 'L',
    DefaultID = 'D'
}

function WebIDFromAttributePathClean(path: string):string {
    const WebIDtype: string = WebIDType.PathOnly;
    const version: string = '1';
    const marker: string = 'AB';
    const baseElementMarker: string = 'E';
    const namePayload: string = btoa(path.toUpperCase()).slice(0,-2);
    const WebID: string = WebIDtype + version + marker + baseElementMarker + namePayload;
    return WebID;
}

function WebIDFromElementAttributePath(path: string):string {
    const WebIDtype: string = 'P';
    const version: string = '1';
    const marker: string = 'AB';
    const baseElementMarker: string = 'E';
    const namePayload: string = btoa(path.toUpperCase()).slice(0,-2);
    const WebID: string = WebIDtype + version + marker + baseElementMarker + namePayload;
    return WebID;
}

function WebIDFromPIPointPath(path: string):string {
    const WebIDtype: string = 'P';
    const version: string = '1';
    const marker: string = 'DP';
    const namePayload: string = btoa(path.slice(0,-2));
    const WebID: string = WebIDtype + version + marker + namePayload;
    return WebID;
}
