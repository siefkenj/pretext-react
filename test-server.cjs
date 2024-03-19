/**
 * A simple server to be used for testing (Puppeteer requires that a server be running). This
 * server looks for files in `SEARCH_DIRS`, returning the first match it finds.
 */

const http = require("http"),
    path = require("path"),
    fs = require("fs"),
    mime = require("mime-types"),
    port = process.argv[2] || 30001;

const CWD = process.cwd();
const SEARCH_DIRS = [
    path.join(CWD, `/pretext-react-compiled-article/html-testing/`),
    path.join(CWD, "/build"),
];

http.createServer(function (request, response) {
    const filePath = request.url;
    for (const dir of SEARCH_DIRS) {
        let fileName = path.join(dir, filePath);
        if (fs.existsSync(fileName) && fs.statSync(fileName).isDirectory()) {
            fileName += "index.html";
        }

        if (fs.existsSync(fileName)) {
            fs.readFile(fileName, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, { "Content-Type": "text/plain" });
                    response.write(err + "\n");
                    response.end();
                    return;
                }

                response.writeHead(200, {
                    "Content-Type": mime.lookup(fileName) || "text/plain",
                });
                response.write(file, "binary");
                response.end();
                console.log("   Serving ", path.relative(CWD, fileName));
            });
            return;
        }
    }

    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write(`404 Not Found\n${filePath}`);
    response.end();
    console.log("     404 URL not found: ", filePath);
}).listen(parseInt(port, 10));

console.log(
    `Static file server running at
  => http://localhost:${port}

WARNING: This is a DEBUG server and is unsafe for production use.
    
The following directories are searched (in order) for files:
    ${SEARCH_DIRS.join(", ")}

CTRL + C to shutdown
`
);
