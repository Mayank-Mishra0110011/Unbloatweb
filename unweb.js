window.onload = () => {
  const __ufw__style = document.createElement("style");
  __ufw__style.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(__ufw__style);
  function __ufw__addCSSRules(name, rules) {
    if (!(__ufw__style.sheet || {}).insertRule) {
      (__ufw__style.styleSheet || __ufw__style.sheet).addRule(name, rules);
    } else {
      __ufw__style.sheet.insertRule(name + "{" + rules + "}", 0);
    }
  }
  __ufw__addCSSRules(".__ufw__row", `display: flex`);
  __ufw__addCSSRules(".__ufw__transparent", `background-color: transparent`);
  __ufw__addCSSRules(".__ufw__justify-center", `justify-content: center`);
  __ufw__addCSSRules(".__ufw__align-center", `align-items: center`);
  __ufw__addCSSRules(".__ufw__justify-around", `justify-content: space-around`);
  __ufw__addCSSRules(
    ".__ufw__hidden",
    `visibility: hidden; width: 0; height: 0`
  );
  __ufw__addCSSRules(
    ".__ufw__wsm",
    `width: 15vw; left: 85vw; flex-direction: row`
  );
  __ufw__addCSSRules(
    ".__ufw__wlg",
    `width: 30vw; left: 70vw; flex-direction: column`
  );
  __ufw__addCSSRules(
    ".__ufw__wrapper",
    `position: fixed; height: 20vh; top: 80vh; display: flex; z-index: 1000`
  );
  __ufw__addCSSRules(
    ".__ufw__sm",
    `width: 2rem; height: 2rem; font-size: 1em;`
  );
  __ufw__addCSSRules(
    ".__ufw__lg",
    `width: 5rem; height: 5rem; font-size: 4em;`
  );
  __ufw__addCSSRules(
    ".__ufw__btn",
    `outline: none; font-weight: bolder; border-radius: 42px; cursor: pointer; border: none; color: white; text-align: center; background-color: black`
  );
  __ufw__addCSSRules(
    ".__ufw__btn-selected, .__ufw__btn:hover",
    `background-color: #202020 !important`
  );
  const __ufw__wrapper = document.createElement("div");
  const __ufw__r1 = document.createElement("div");
  const __ufw__r2 = document.createElement("div");
  const __ufw__selectBtn = document.createElement("button");
  const __ufw__trashBtn = document.createElement("button");
  const __ufw__closeBtn = document.createElement("button");
  const __ufw__scrollTopBtn = document.createElement("button");
  const __ufw__scrollBottomBtn = document.createElement("button");
  __ufw__wrapper.classList.add(
    "__ufw__wrapper",
    "__ufw__wlg",
    "__ufw__justify-around"
  );
  __ufw__r1.classList.add("__ufw__row", "__ufw__justify-around");
  __ufw__r2.classList.add("__ufw__row", "__ufw__justify-around");
  __ufw__selectBtn.tabIndex = -1;
  __ufw__trashBtn.tabIndex = -1;
  __ufw__closeBtn.tabIndex = -1;
  __ufw__scrollTopBtn.tabIndex = -1;
  __ufw__scrollBottomBtn.tabIndex = -1;
  __ufw__selectBtn.title = "Select";
  __ufw__trashBtn.title = "Trash";
  __ufw__closeBtn.title = "Close";
  __ufw__scrollTopBtn.title = "Scroll Top";
  __ufw__scrollBottomBtn.title = "Scroll Bottom";
  __ufw__selectBtn.classList.add("__ufw__btn", "__ufw__sm");
  __ufw__selectBtn.innerHTML = "&#128070;";
  __ufw__trashBtn.classList.add("__ufw__btn", "__ufw__sm");
  __ufw__trashBtn.innerHTML = "&#128465;";
  __ufw__closeBtn.classList.add("__ufw__btn", "__ufw__sm");
  __ufw__closeBtn.innerHTML = "&#10799;";
  __ufw__scrollTopBtn.classList.add("__ufw__btn", "__ufw__lg");
  __ufw__scrollTopBtn.innerHTML = "&#8593;";
  __ufw__scrollBottomBtn.classList.add("__ufw__btn", "__ufw__lg");
  __ufw__scrollBottomBtn.innerHTML = "&#8595;";
  __ufw__wrapper.appendChild(__ufw__r1);
  __ufw__wrapper.appendChild(__ufw__r2);
  __ufw__r1.appendChild(__ufw__selectBtn);
  __ufw__r1.appendChild(__ufw__trashBtn);
  __ufw__r1.appendChild(__ufw__closeBtn);
  __ufw__r2.appendChild(__ufw__scrollTopBtn);
  __ufw__r2.appendChild(__ufw__scrollBottomBtn);
  __ufw__closeBtn.addEventListener("click", __ufw__closeHandler);
  __ufw__selectBtn.addEventListener("click", __ufw__selectHandler);
  class __UFW__Scroller {
    id = null;
    static clearInterval() {
      if (__UFW__Scroller.id) window.clearInterval(__UFW__Scroller.id);
    }
    static scrollTop() {
      if (window.scrollY >= 0) window.scrollTo(0, window.scrollY--);
    }
    static scrollBottom() {
      window.scrollTo(0, window.scrollY++);
    }
    static scrollTopHandler(bottomBtn) {
      __UFW__Scroller.clearInterval();
      if (this.classList.contains("__ufw__btn-selected")) {
        this.classList.remove("__ufw__btn-selected");
      } else {
        if (bottomBtn.classList.contains("__ufw__btn-selected")) {
          bottomBtn.classList.remove("__ufw__btn-selected");
        }
        this.classList.add("__ufw__btn-selected");
        __UFW__Scroller.id = window.setInterval(__UFW__Scroller.scrollTop, 5);
      }
    }
    static scrollBottomHandler(topBtn) {
      __UFW__Scroller.clearInterval();
      if (this.classList.contains("__ufw__btn-selected")) {
        this.classList.remove("__ufw__btn-selected");
      } else {
        if (topBtn.classList.contains("__ufw__btn-selected")) {
          topBtn.classList.remove("__ufw__btn-selected");
        }
        this.classList.add("__ufw__btn-selected");
        __UFW__Scroller.id = window.setInterval(
          __UFW__Scroller.scrollBottom,
          5
        );
      }
    }
  }
  __ufw__scrollBottomBtn.addEventListener(
    "click",
    __UFW__Scroller.scrollBottomHandler.bind(
      __ufw__scrollBottomBtn,
      __ufw__scrollTopBtn
    )
  );
  __ufw__scrollTopBtn.addEventListener(
    "click",
    __UFW__Scroller.scrollTopHandler.bind(
      __ufw__scrollTopBtn,
      __ufw__scrollBottomBtn
    )
  );
  document.body.insertAdjacentElement("afterbegin", __ufw__wrapper);
  function __ufw__closeHandler() {
    __UFW__Scroller.clearInterval();
    __ufw__scrollBottomBtn.classList.remove("__ufw__btn-selected");
    __ufw__scrollTopBtn.classList.remove("__ufw__btn-selected");
    const __ufw__wrapper = document.querySelector(".__ufw__wrapper");
    const __ufw__rows = document.querySelectorAll(".__ufw__row");
    __ufw__wrapper.classList.remove("__ufw__justify-around", "__ufw__wlg");
    __ufw__wrapper.classList.add(
      "__ufw__justify-center",
      "__ufw__align-center",
      "__ufw__wsm"
    );
    __ufw__wrapper.insertAdjacentHTML(
      "beforeend",
      '<button class="__ufw__btn __ufw__lg" id="__ufw__add-btn">&#43;</button>'
    );
    const __ufw__openBtn = document.querySelector("#__ufw__add-btn");
    __ufw__openBtn.tabIndex = -1;
    __ufw__openBtn.title = "Open";
    __ufw__openBtn.addEventListener("click", __ufw__openHandler);
    __ufw__rows[0].classList.add("__ufw__hidden");
    __ufw__rows[1].classList.add("__ufw__hidden");
  }
  function __ufw__openHandler() {
    const __ufw__wrapper = document.querySelector(".__ufw__wrapper");
    const __ufw__rows = document.querySelectorAll(".__ufw__row");
    __ufw__wrapper.classList.remove(
      "__ufw__justify-center",
      "__ufw__align-center",
      "__ufw__wsm"
    );
    __ufw__wrapper.classList.add("__ufw__justify-around", "__ufw__wlg");
    __ufw__rows[0].classList.remove("__ufw__hidden");
    __ufw__rows[1].classList.remove("__ufw__hidden");
    document.querySelector("#__ufw__add-btn").remove();
  }
  function __ufw__trashHandler() {}
  function __ufw__selectHandler() {
    if (this.classList.contains("__ufw__btn-selected")) {
      this.classList.remove("__ufw__btn-selected");
    } else {
      this.classList.add("__ufw__btn-selected");
      document.documentElement.style.cursor = "pointer";
      document.documentElement.addEventListener("mouseover", function (e) {
        window.$(e.target);
      });
    }
  }
};
