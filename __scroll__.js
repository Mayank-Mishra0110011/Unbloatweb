// https://extensionworkshop.com/documentation/publish/package-your-extension/

window.onpageshow = () => {
  const __root__ = document.querySelector(".ySN3v");

  if (__root__) {
    const __imgNodesContainer__ = __root__.children[0].children[0];

    const __bodyObserver__ = new MutationObserver(function () {
      document.querySelector(".RnEpo").remove();
      document.querySelector("body").style.overflow = "scroll";
    });

    const __rootObserver__ = new MutationObserver(function (mutationList) {
      for (let mutation of mutationList) {
        mutation.addedNodes[0].querySelectorAll("a").forEach((a) => {
          a.addEventListener("click", () => {
            __bodyObserver__.disconnect();
            __rootObserver__.disconnect();
            document.location.href = a.href;
          });
        });
      }
    });

    __bodyObserver__.observe(document.querySelector("body"), {
      attributes: true,
    });
    __rootObserver__.observe(__imgNodesContainer__, { childList: true });

    __imgNodesContainer__.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        __bodyObserver__.disconnect();
        __rootObserver__.disconnect();
        document.location.href = a.href;
      });
    });
  }
};
