const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<html><body style='color: red'>Hoho</body></html>");
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
