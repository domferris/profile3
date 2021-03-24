import "./main.pcss";
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  // smooth: true,
});

scroll.on("scroll", (args) => {
  const body = document.querySelector("body");
  const softBrown = "#C9C0B5";
  const softOlive = "#C1C2B1";
  const softMaroon = "#B8AFAF";
  const yellowGray = "#C0C0BC";

  // change bg color on scroll
  if (typeof args.currentElements["home"] === "object") {
    const progress = args.currentElements["home"].progress;

    if (progress > 0.925) {
      // why section downward scroll bg color change
      body.style.backgroundColor = softOlive;
    } else {
      // home section upward scroll bg color change
      body.style.backgroundColor = softBrown;
    }
  } else if (typeof args.currentElements["why"] === "object") {
    const progress = args.currentElements["why"].progress;

    if (progress > 0.94) {
      // projects section downward scroll bg color change
      body.style.backgroundColor = softMaroon;
    } else {
      // why section upward scroll bg color change
      body.style.backgroundColor = softOlive;
    }
  } else if (typeof args.currentElements["projects"] === "object") {
    const progress = args.currentElements["projects"].progress;

    if (progress > 0.935) {
      // connect section downward scroll bg color change
      body.style.backgroundColor = yellowGray;
    } else {
      // projects section upward scroll bg color change
      body.style.backgroundColor = softMaroon;
    }
  }
});
