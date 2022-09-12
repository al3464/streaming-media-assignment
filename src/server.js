const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/party':
      mediaHandler.getParty(request, response);
      break;
    case '/bird':
      mediaHandler.getBird(request, response);
      break;
    case '/bling':
      mediaHandler.getBling(request, response);
      break;
    case '/client2':
      htmlHandler.getIndex2(request, response);
      break;
    case '/client3':
      htmlHandler.getIndex3(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1: ${port}`);
});
