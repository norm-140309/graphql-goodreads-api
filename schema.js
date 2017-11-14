const fetch = require('node-fetch');

const x = fetch(
    'https://www.goodreads.com/author/show.xml?id=4432&key=pIrskGm1Ilpv0l7HHg5eQ'
).then(response => response.text());

x