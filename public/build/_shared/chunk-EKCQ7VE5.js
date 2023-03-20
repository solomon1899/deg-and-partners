import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/Slider.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slider", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "slider__wrapper",
        style: { transform: `translateX(-${currentIndex * 100}%)` },
        children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slider__item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: `Slide ${index}` }, void 0, false, {
          fileName: "app/routes/Slider.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, index, false, {
          fileName: "app/routes/Slider.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/routes/Slider.jsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "slider__button slider__button--prev", onClick: prevSlide, children: "Prev" }, void 0, false, {
      fileName: "app/routes/Slider.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "slider__button slider__button--next", onClick: nextSlide, children: "Next" }, void 0, false, {
      fileName: "app/routes/Slider.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Slider.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
var Slider_default = Slider;

export {
  Slider_default
};
//# sourceMappingURL=/build/_shared/chunk-EKCQ7VE5.js.map
