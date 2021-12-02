(function () {
    'use strict';

    const fetchText = async url => {
      const response = await fetch(url);
      return await response.text();
    }; // fetch(url).then(response => response.text().then(
    //     text => console.log(text)
    // ));


    const csvUrl = 'https://gist.githubusercontent.com/jarekjal/e0f4463e62a541389a5e573b5ce9a526/raw/kgp';
    fetchText(csvUrl).then(text => console.log(text));

})();
