import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FN3KWL4V.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/MyCarousel.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MyCarousel = () => {
  const images = [
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide0.jpg",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide.png",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide2.jpg"
  ];
  const titles = ["Comptabilit\xE9", "Fiscalit\xE9", "Optimisation"];
  const texts = [
    `Pour nos clients, l\u2019information chiffr\xE9e est indispensable \xE0 la plupart de leurs prises de d\xE9cisions.
  Elle doit \xEAtre disponible rapidement, pertinente et fiable. `,
    `Une pr\xE9occupation majeure de notre cellule Gestion et Comptabilit\xE9 concerne la fiscalit\xE9 de ses clients. Notre cellule met alors un point d\u2019honneur \xE0 s\u2019acquitter syst\xE9matiquement de cette t\xE2che. `,
    `Notre cabinet se positionne comme un sp\xE9cialiste en optimisation fiscale et s'interrogera sur les m\xE9canismes \xE0 mettre en place afin d\u2019optimiser la situation fiscale de ses clients autour de trois axes majeurs : le pilier professionnel, le pilier patrimonial, le pilier social. `
  ];
  const [index, setIndex] = (0, import_react.useState)(0);
  const [title, setTitle] = (0, import_react.useState)(titles[index]);
  const [text, setText] = (0, import_react.useState)(texts[index]);
  const handleButtonClick = (index2, titleIndex, textIndex) => {
    setIndex(index2);
    setTitle(titles[titleIndex]);
    setText(texts[textIndex]);
  };
  const style = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover"
  };
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
      setTitle(titles[(index + 1) % titles.length]);
      setText(texts[(index + 1) % texts.length]);
    }, 5e3);
    return () => clearInterval(interval);
  }, [index, titles]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carouselImage", style, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: `carouselTitle visible`, children: titles[index] }, index, false, {
      fileName: "app/routes/MyCarousel.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "carouselText", children: texts[index] }, void 0, false, {
      fileName: "app/routes/MyCarousel.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carouselButtons", children: images.map((image, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        className: "carousel-button",
        onClick: () => handleButtonClick(i, i, i)
      },
      i,
      false,
      {
        fileName: "app/routes/MyCarousel.jsx",
        lineNumber: 56,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/MyCarousel.jsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/MyCarousel.jsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/MyCarousel.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};
var MyCarousel_default = MyCarousel;

export {
  MyCarousel_default
};
//# sourceMappingURL=/build/_shared/chunk-RGIRP3PJ.js.map
