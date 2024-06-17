const hasExtension = /(.+)\.[a-zA-Z0-9]{2,5}$/;
const objectIdPattern = /^[a-fA-F0-9]{24}$/; // Pattern for MongoDB ObjectId

export const handler = async (event:any) => {
    const request = event.Records[0].cf.request;
    const uri = request.uri;
    
    // Check if the request is for the root path or a MongoDB ObjectId pattern
    if (uri === "/" || objectIdPattern.test(uri.slice(1))) {
        request.uri = "/[id].html";
    }
     else if (uri.startsWith("/customize/") && !uri.match(hasExtension)) {
        request.uri = "/customize/[slug]/CustomizeMain.html";
    }
    // General case for appending .html if no extension is present
    else if (!uri.match(hasExtension)) {
        request.uri = `${uri}.html`;
    }

    return request;
};
