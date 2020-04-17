document.addEventListener("DOMContentLoaded", () => {
  let switchWrap1 = document.getElementById("switch-wrap1");

  let switchWrap2 = document.getElementById("switch-wrap2");

  let switchWrap3 = document.getElementById("switch-wrap3");

  let switchWrap4 = document.getElementById("switch-wrap4");

  let switchWrap5 = document.getElementById("switch-wrap5");

  document.getElementById("checkbox1").addEventListener(
    "change",
    function () {
      switchWrap1.style.background = this.checked ? "#707070" : "#87bcbf";
    },
    false
  );

  document.getElementById("checkbox2").addEventListener(
    "change",
    function () {
      switchWrap2.style.background = this.checked ? "#707070" : "#87bcbf";
    },
    false
  );

  document.getElementById("checkbox3").addEventListener(
    "change",
    function () {
      switchWrap3.style.background = this.checked ? "#707070" : "#87bcbf";
    },
    false
  );

  document.getElementById("checkbox4").addEventListener(
    "change",
    function () {
      switchWrap4.style.background = this.checked ? "#707070" : "#87bcbf";
    },
    false
  );

  document.getElementById("checkbox5").addEventListener(
    "change",
    function () {
      switchWrap5.style.background = this.checked ? "#707070" : "#87bcbf";
    },
    false
  );
});
