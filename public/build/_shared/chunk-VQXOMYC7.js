import {
  require_lib
} from "/build/_shared/chunk-IO6PW3G7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-FN3KWL4V.js";
import {
  __toESM
} from "/build/_shared/chunk-4IYZMDEG.js";

// app/routes/nos-formules/index.jsx
var import_react_slick = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var index = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "movingItemsCarousel", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderComp, {}, void 0, false, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
var nos_formules_default = index;
var SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5e3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          arrows: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5e3,
          cssEase: "linear"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const data = [
    {
      id: 1,
      title: "Artiste et creatif",
      image: "https://www.degandpartners.com/wp-content/uploads/2021/04/artist-80x82.png",
      link: "http://www.art-consult.be/"
    },
    {
      id: 2,
      title: "Association Culturelle",
      image: "https://www.degandpartners.com/wp-content/uploads/2021/04/asso-cul-80x84.png",
      link: "http://www.art-consult.be/"
    },
    {
      id: 3,
      title: "Medecin",
      image: "https://www.degandpartners.com/wp-content/uploads/2021/03/ste\u0301thoscope@4x-80x97.png",
      link: "http://comptabilitemedecin.be/"
    },
    {
      id: 4,
      title: "Dentiste",
      image: "https://www.degandpartners.com/wp-content/uploads/2021/03/dent@4x-80x86.png",
      link: "http://www.comptabilitedentiste.be/"
    },
    {
      id: 5,
      title: "Veterinaire",
      image: "https://www.degandpartners.com/wp-content/uploads/2021/03/pets_2@4x-80x76.png",
      link: "http://www.comptabiliteveterinaire.be/"
    },
    {
      id: 6,
      title: "Consultant",
      image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png",
      link: "https://www.comptabiliteconsultant.be/"
    },
    {
      id: 7,
      title: "Avocat",
      image: "https://www.degandpartners.com/wp-content/uploads/2022/01/avocats-icon-80x89.png",
      link: "http://comptabiliteavocat.be/"
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_slick.default, { ...settings, children: data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "movingItem", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: item.image,
        alt: item.title,
        style: { width: 40, height: 40 }
      },
      void 0,
      false,
      {
        fileName: "app/routes/nos-formules/index.jsx",
        lineNumber: 113,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "h3",
      {
        style: {
          fontSize: 18,
          fontFamily: "Poppins",
          textAlign: "center"
        },
        children: item.title
      },
      void 0,
      false,
      {
        fileName: "app/routes/nos-formules/index.jsx",
        lineNumber: 118,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "item-link-redirect", href: item.link, children: "en savoir plus" }, void 0, false, {
      fileName: "app/routes/nos-formules/index.jsx",
      lineNumber: 127,
      columnNumber: 13
    }, this)
  ] }, item.id, true, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 112,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
};

export {
  nos_formules_default,
  SliderComp
};
//# sourceMappingURL=/build/_shared/chunk-VQXOMYC7.js.map
