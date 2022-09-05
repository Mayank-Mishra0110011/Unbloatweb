let __href__ = document.location.href,
  __interval__;

function __addMutationObserver__() {
  new MutationObserver(function (mutations) {
    mutations.forEach(function () {
      if (__href__ != document.location.href) {
        __href__ = document.location.href;
        __interval__ = setInterval(__scroll__, 1000);
      }
    });
  }).observe(
    document.querySelector("ytd-watch-next-secondary-results-renderer"),
    {
      attributes: true,
    }
  );
  clearInterval(__interval__);
}

function __scroll__() {
  const __playlist__ = [...document.querySelectorAll("#wc-endpoint")];
  if (__playlist__.length != 0) {
    const __vID__ = __href__.split("&")[0].split("/").pop();
    __playlist__[
      __playlist__.findIndex((i) => i.href.includes(__vID__))
    ].scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
  clearInterval(__interval__);
}

window.onpageshow = function () {
  __interval__ = setInterval(__addMutationObserver__, 1000);
};
