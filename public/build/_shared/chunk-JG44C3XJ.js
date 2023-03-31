import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-FN3KWL4V.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/Formules.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Formules = () => {
  const number1 = 20;
  const number2 = 35;
  const number3 = 1200;
  const [count1, setCount1] = (0, import_react.useState)(0);
  const [count2, setCount2] = (0, import_react.useState)(0);
  const [count3, setCount3] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const interval1 = setInterval(() => {
      if (count1 < number1) {
        setCount1(count1 + 2);
      }
    }, 50);
    const interval2 = setInterval(() => {
      if (count2 < number2) {
        setCount2(count2 + 5);
      }
    }, 50);
    const interval3 = setInterval(() => {
      if (count3 < number3) {
        setCount3(count3 + 48);
      }
    }, 50);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3, number1, number2, number3]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "numbers", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "numbers-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { fontFamily: "Poppins" }, children: [
          count1,
          "+"
        ] }, void 0, true, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "number-title", children: "Ann\xE9es d'exp\xE9rience" }, void 0, false, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 44,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 41,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "numbers-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { fontFamily: "Poppins" }, children: [
          count2,
          "+"
        ] }, void 0, true, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "number-title", children: "Collaborateurs investis" }, void 0, false, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "numbers-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: { fontFamily: "Poppins" }, children: [
          count3,
          "+"
        ] }, void 0, true, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "number-title", children: "Clients de confiance" }, void 0, false, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 54,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 51,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Formules.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "parallax-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "h1",
        {
          style: {
            fontSize: "45px",
            fontWeight: 600
          },
          children: "Nos formules"
        },
        void 0,
        false,
        {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 59,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Nous vous proposons 3 packages, en fonction de vos besoins." }, void 0, false, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/nos-formules", children: "voir les formules" }, void 0, false, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Formules.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Formules.jsx",
    lineNumber: 39,
    columnNumber: 11
  }, this);
};
var Formules_default = Formules;

export {
  Formules_default
};
//# sourceMappingURL=/build/_shared/chunk-JG44C3XJ.js.map
