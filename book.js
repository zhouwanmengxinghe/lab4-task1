fetch('book.xml')
  .then(response => response.text())
  .then(xmlText => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    const books = xmlDoc.getElementsByTagName('book');
    for (let i = 0; i < books.length; i++) {
      const title = books[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
      const author = books[i].getElementsByTagName('author')[0].childNodes[0].nodeValue;
      const price = books[i].getElementsByTagName('price')[0].childNodes[0].nodeValue;
      console.log(`Title: ${title}, Author: ${author}, Price: ${price}`);
     
    }
  });