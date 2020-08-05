const http = require('http')
//http is default was come with node
const server = http.createServer((req, res) => {
    /*
     Example- One
     const{header, url, method} = req;
      console.log(header,url,method)// see to what is header request url and method
      // res.end() is important because data send to the font end*/

    /*
      Example two -> send HTML content to front end
      // send html data front end
        //import header of response
        res.setHeader('Content-Type','text/html');
        res.write('<h1>Hello</h1>');
        res.write('<h2>Hello Again</h2>');
        res.end()*/
    /*
      Example three -> send HTML content with multiple header to front end
      // send html data front end
        //import header of response
        res.setHeader('Content-Type','text/html');
        res.setHeader('Powered-By','node.js');
        res.write('<h1>Hello</h1>');
        res.write('<h2>Hello Again</h2>');
        res.end()*/
    /*
        Example three -> send JSON content with multiple header to front end
        // send html data front end
          //import header of response
    const values = [
        {id: 1, text: 'sample one'},
        {id: 2, text: 'sample two'},
        {id: 3, text: 'sample three'},
    ]

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Powered-By', 'node.js');
    res.end(JSON.stringify({
        success: true,
        data: values
    }));
        */

    //HTTP Status code documentation -> https://developer.mozilla.org/en-US/docs/web/http/status
    //    Informational responses (100–199),
    //     Successful responses (200–299),
    //     Redirects (300–399),
    //     Client errors (400–499),
    //     and Server errors (500–599).

    /*
            Example three -> send JSON content with multiple header to front end
            // send html data front end with status code
              //import header of response
        const values = [
            {id: 1, text: 'sample one'},
            {id: 2, text: 'sample two'},
            {id: 3, text: 'sample three'},
        ]
//add status code
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Powered-By', 'node.js');
        res.end(JSON.stringify({
            success: false,
            error: 'Not found,
            data: null
        }));
            */
    /*                                                ---
    res.statusCode = 404                                |
    res.setHeader('Content-Type', 'application/json');    => res.writeHead(404,{
    res.setHeader('Powered-By', 'node.js');             |       'Content-Type' : 'application/json',
                                                      ---        'Powered-By':'node.js'});
     */
//header data access  => req.headers.authorization
//body data access => req.body.email
    //req = request is fully string
    /*
    data access from frontend

    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
      //  body = Buffer.concat(body); => output is buffer
        body = Buffer.concat(body).toString();
        console.log(body);
    })
     */
//method identification 
//Get / Post / Delete / Put
    const values = [
        {id: 1, text: 'sample one'},
        {id: 2, text: 'sample two'},
        {id: 3, text: 'sample three'},
    ]

    const {method, url} = req;

    let body = [];

    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        //  body = Buffer.concat(body); => output is buffer
        body = Buffer.concat(body).toString();
        let status = 404;
        //response
        const response = {
            success: false,
            data: null,
            error:null
        }
        //check method and url
        if (method === 'GET' && url === '/todos') {
            status = 200;
            response.success = true;
            response.data = values;
        } else if (method === 'POST' && url === '/todos') {
//let id = req.body.id;
//let text = req.body.text;
            const {id, text} = JSON.parse(body);
            //data validation
            if (!id || !text) {
                status = 400;
                response.error = 'please add id and text';
            } else {
                values.push({id, text});
                status = 201;
                response.success = true;
                response.data = values;
            }
        }


        res.writeHead(status, {
            'Content-Type': 'application/json',
            'Powered-By': 'node.js'
        });

        res.end(
            JSON.stringify(response)
        );

    });

});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))