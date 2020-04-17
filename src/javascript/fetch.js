document.addEventListener("DOMContentLoaded", () => {
  let randomHex1 = (Math.random().toString(16) + "000000").slice(2, 8);
  let randomHex2 = (Math.random().toString(16) + "000000").slice(2, 8);
  let randomHex3 = (Math.random().toString(16) + "000000").slice(2, 8);
  let randomHex4 = (Math.random().toString(16) + "000000").slice(2, 8);
  let randomHex5 = (Math.random().toString(16) + "000000").slice(2, 8);

  fetch("https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const srcDom = parser.parseFromString(data, "text/xml");
      const json = xml2json(srcDom);

      const template = document.getElementById("template");
      const placer = document.getElementsByClassName("europe")[0];
      json.rss.channel.item.forEach(item => {

        const clone = template.content.cloneNode(true);
        clone.querySelector(
          ".image"
        ).src = `https://via.placeholder.com/64/${randomHex1}/fff`;
        clone.querySelector(".image").alt = item.title;
        clone.querySelector(".title").innerText = item.title;
        clone.querySelector(".title").href = item.link;
        clone.querySelector(".text").innerText = item.description;
        clone.querySelector(".text").href = item.link;
        placer.appendChild(clone);
      });
    });

  fetch("https://rss.nytimes.com/services/xml/rss/nyt/Health.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const srcDom = parser.parseFromString(data, "application/xml");
      const json = xml2json(srcDom);

      const template = document.getElementById("template");
      const placer = document.getElementsByClassName("health")[0];

      json.rss.channel.item.forEach(item => {

        const clone = template.content.cloneNode(true);
        clone.querySelector(
          ".image"
        ).src = `https://via.placeholder.com/64/${randomHex2}/fff`;
        clone.querySelector(".title").innerText = item.title;
        clone.querySelector(".title").href = item.link;
        clone.querySelector(".image").alt = item.title;
        clone.querySelector(".text").innerText = item.description;
        clone.querySelector(".text").href = item.link;
        placer.appendChild(clone);
      });
    });

  fetch("https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const srcDom = parser.parseFromString(data, "application/xml");
      const json = xml2json(srcDom);

      const template = document.getElementById("template");
      const placer = document.getElementsByClassName("sports")[0];

      json.rss.channel.item.forEach(item => {

        const clone = template.content.cloneNode(true);
        clone.querySelector(
          ".image"
        ).src = `https://via.placeholder.com/64/${randomHex3}/fff`;
        clone.querySelector(".title").innerText = item.title;
        clone.querySelector(".title").href = item.link;
        clone.querySelector(".image").alt = item.title;
        clone.querySelector(".text").innerText = item.description;
        clone.querySelector(".text").href = item.link;
        placer.appendChild(clone);
      });
    });

  fetch("https://rss.nytimes.com/services/xml/rss/nyt/Business.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const srcDom = parser.parseFromString(data, "application/xml");
      const json = xml2json(srcDom);

      const template = document.getElementById("template");
      const placer = document.getElementsByClassName("business")[0];

      json.rss.channel.item.forEach(item => {

        const clone = template.content.cloneNode(true);
        clone.querySelector(
          ".image"
        ).src = `https://via.placeholder.com/64/${randomHex4}/fff`;
        clone.querySelector(".title").innerText = item.title;
        clone.querySelector(".title").href = item.link;
        clone.querySelector(".image").alt = item.title;
        clone.querySelector(".text").innerText = item.description;
        clone.querySelector(".text").href = item.link;
        placer.appendChild(clone);
      });
    });

  fetch("https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const srcDom = parser.parseFromString(data, "application/xml");
      const json = xml2json(srcDom);

      const template = document.getElementById("template");
      const placer = document.getElementsByClassName("travel")[0];

      json.rss.channel.item.forEach(item => {

        const clone = template.content.cloneNode(true);
        clone.querySelector(
          ".image"
        ).src = `https://via.placeholder.com/64/${randomHex5}/fff`;
        clone.querySelector(".title").innerText = item.title;
        clone.querySelector(".title").href = item.link;
        clone.querySelector(".image").alt = item.title;
        clone.querySelector(".text").innerText = item.description;
        clone.querySelector(".text").href = item.link;
        placer.appendChild(clone);
      });
    });

  function xml2json(srcDOM) {
    let children = [...srcDOM.children];

    // base case for recursion.
    if (!children.length) {
      return srcDOM.innerHTML;
    }

    // initializing object to be returned.
    let jsonResult = {};

    for (let child of children) {
      // checking is child has siblings of same name.
      let childIsArray =
        children.filter(eachChild => eachChild.nodeName === child.nodeName)
          .length > 1;

      // if child is array, save the values as array, else as strings.
      if (childIsArray) {
        if (jsonResult[child.nodeName] === undefined) {
          jsonResult[child.nodeName] = [xml2json(child)];
        } else {
          jsonResult[child.nodeName].push(xml2json(child));
        }
      } else {
        jsonResult[child.nodeName] = xml2json(child);
      }
    }

    return jsonResult;
  }
});
