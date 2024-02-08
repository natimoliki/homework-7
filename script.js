"use strict";
const div = document.getElementById('happy-api');

function getInfo() {
  const reqsuist = new XMLHttpRequest();

  reqsuist.open("GET", "https://reqres.in/api/unknown");
  reqsuist.addEventListener("load", function () {
        //   console.log(this.responseText);
    const receivedInfo = this.responseText;
    const receivedInfoasJS = JSON.parse(receivedInfo);
    console.log(receivedInfoasJS);
    const ulelement = document.createElement ('ul');
    receivedInfoasJS.data.forEach(element => {
        // console.log(element);
        const li =document.createElement('li');
        li.textContent = element.name + element.color;
        // li.textContent = `${element.name} ${element.color}`;
        ulelement.appendChild(li);
    });
    div.appendChild(ulelement);
  });
  reqsuist.send();
}

getInfo();
