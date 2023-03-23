var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/contact/index.jsx
var require_contact = __commonJS({
  "app/routes/contact/index.jsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// styles/global.css
var global_default = "/build/_assets/global-RSUKZVPN.css";

// node_modules/slick-carousel/slick/slick.css
var slick_default = "/build/_assets/slick-VUI5DTIW.css";

// node_modules/slick-carousel/slick/slick-theme.css
var slick_theme_default = "/build/_assets/slick-theme-W7BBBCVK.css";

// app/root.jsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react_social_icons = require("react-social-icons"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Oxygen" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Poppins"
  },
  { rel: "stylesheet", href: slick_default },
  { rel: "stylesheet", href: slick_theme_default }
], meta = () => ({
  charset: "utf-8",
  title: "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilit\xE9, gestion & fiscalit\xE9",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "navbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          className: "logo",
          src: "https://www.degandpartners.com/wp-content/uploads/2018/09/logo-1-1.png",
          alt: "logo"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 75,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Accueil" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Votre m\xE9tier" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes artiste et creatif ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes association culturelle ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 86,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes medecin ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes dentiste ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes veterinaire ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 89,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes consultant ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 90,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes avocat ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 91,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Qui sommes nous ?" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 1" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 98,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 2" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 99,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 3" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Nos Services" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 1" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 107,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 2" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 108,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 3" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 109,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Nos formules" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Notre Blog " }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Contact" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "contact", children: "contactez nous" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mainPage", children }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMapMarkerAlt }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      " Rue Waelhem,68 - 1030 Bruxelles"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:info@degandpartners.com", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      " info@degandpartners.com"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      " + 32 2 247 39 39"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "allfooter", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "newsLetter", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "inscrivezvous", children: "Inscrivez-vous a la newsletter" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "letterform", method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "input",
          {
            type: "text",
            placeholder: "votre adresse email",
            className: "footerinput"
          },
          void 0,
          !1,
          {
            fileName: "app/root.jsx",
            lineNumber: 151,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "sabonner", children: "S'ABONNER" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "footer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "first", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "img",
          {
            className: "footerLogo",
            src: "https://www.degandpartners.com/wp-content/uploads/2018/09/logo-1-1.png",
            alt: "footerLogo"
          },
          void 0,
          !1,
          {
            fileName: "app/root.jsx",
            lineNumber: 165,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footerSocialIcons", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react_social_icons.SocialIcon,
            {
              url: "https://twitter.com/DegandPartners",
              bgColor: "#30231E",
              fgColor: "#ffffff",
              style: { height: 30, width: 30 }
            },
            void 0,
            !1,
            {
              fileName: "app/root.jsx",
              lineNumber: 171,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react_social_icons.SocialIcon,
            {
              url: "https://www.facebook.com/Degandpartners",
              bgColor: "#30231E",
              fgColor: "#ffffff",
              style: { height: 30, width: 30 }
            },
            void 0,
            !1,
            {
              fileName: "app/root.jsx",
              lineNumber: 177,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react_social_icons.SocialIcon,
            {
              url: "https://www.linkedin.com/company/deg-and-partners/",
              bgColor: "#30231E",
              fgColor: "#ffffff",
              style: { height: 30, width: 30 }
            },
            void 0,
            !1,
            {
              fileName: "app/root.jsx",
              lineNumber: 183,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 170,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 164,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "second", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: { color: "white" }, children: "Bureau de Bruxelles" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMapMarkerAlt }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 194,
            columnNumber: 15
          }, this),
          " Rue Waelhem,68 - 1030 Bruxelles"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 193,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 198,
            columnNumber: 15
          }, this),
          " info@degandpartners.com"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 201,
            columnNumber: 15
          }, this),
          " + 32 2 247 39 39"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 200,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faFax }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          " + 32 2 247 39 39"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 203,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 191,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "third", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: { color: "white", fontWeight: 600 }, children: "Bureau de Li\xE8ge" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 208,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMapMarkerAlt }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 210,
            columnNumber: 15
          }, this),
          " Quai Orban, 41 \u2013 4020 Li\xE8ge"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 209,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          " info@degandpartners.com"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          " + 32 4 343 17 31"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 216,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faFax }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          " + 32 2 247 39 39"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 219,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 207,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fourth", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "http://art-consult.be/", className: "footerlien", children: "Vous \xEAtes artiste et cr\xE9atif" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 224,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "http://art-consult.be/", className: "footerlien", children: "Vous \xEAtes Association Culturelle" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://comptabilitemedecin.be/", className: "footerlien", children: "Vous \xEAtes m\xE9decin" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 230,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: "https://www.comptabilitedentiste.be/",
            className: "footerlien",
            children: "Vous \xEAtes dentiste"
          },
          void 0,
          !1,
          {
            fileName: "app/root.jsx",
            lineNumber: 233,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: "http://www.comptabiliteveterinaire.be/",
            className: "footerlien",
            children: "Vous \xEAtes v\xE9t\xE9rinaire"
          },
          void 0,
          !1,
          {
            fileName: "app/root.jsx",
            lineNumber: 239,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: "https://www.comptabiliteconsultant.be/",
            className: "footerlien",
            children: "Vous \xEAtes consultant"
          },
          void 0,
          !1,
          {
            fileName: "app/root.jsx",
            lineNumber: 245,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "http://comptabiliteavocat.be/", className: "footerlien", children: "Vous \xEAtes avocat" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 251,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 223,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 163,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "copyright", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { color: "#7d7d7d", children: [
      "Copyright \xA9 2021 - All Rights Reserved -",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          href: "http://www.degandpartners.com/wp-content/uploads/2021/04/CONDITIONS-GENERALES-DE-PRESTATIONS.pdf",
          style: { color: "white" },
          children: "Conditions g\xE9n\xE9rales de prestations"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 260,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 258,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 257,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 146,
    columnNumber: 5
  }, this);
}

// app/routes/nos-formules/index.jsx
var nos_formules_exports = {};
__export(nos_formules_exports, {
  SliderComp: () => SliderComp,
  default: () => nos_formules_default
});
var import_react3 = require("react"), import_node2 = require("@remix-run/node"), import_react_slick = __toESM(require("react-slick")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), index = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "movingItemsCarousel", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Vous etes" }, void 0, !1, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SliderComp, {}, void 0, !1, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/nos-formules/index.jsx",
  lineNumber: 6,
  columnNumber: 11
}, this), nos_formules_default = index, SliderComp = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_slick.default, { ...{
  dots: !0,
  infinite: !0,
  arrows: !1,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: !0,
  autoplaySpeed: 2e3,
  cssEase: "linear"
}, children: [
  { id: 1, title: "Slide 1", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 2, title: "Slide 2", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 3, title: "Slide 3", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 4, title: "Slide 4", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 5, title: "Slide 5", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 6, title: "Slide 6", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 7, title: "Slide 7", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 8, title: "Slide 8", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" },
  { id: 9, title: "Slide 9", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png", link: "en savoir plus" }
].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "movingItem", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: item.image, alt: item.title }, void 0, !1, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 44,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: item.title }, void 0, !1, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 45,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { cursor: "pointer" }, href: "https://www.comptabiliteconsultant.be/", children: item.link }, void 0, !1, {
    fileName: "app/routes/nos-formules/index.jsx",
    lineNumber: 46,
    columnNumber: 11
  }, this)
] }, item.id, !0, {
  fileName: "app/routes/nos-formules/index.jsx",
  lineNumber: 43,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "app/routes/nos-formules/index.jsx",
  lineNumber: 41,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/nos-formules/index.jsx",
  lineNumber: 40,
  columnNumber: 1
}, this);

// app/routes/philosophie/index.jsx
var philosophie_exports = {};
__export(philosophie_exports, {
  default: () => philosophie_default
});
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Philosophie() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Philosophie" }, void 0, !1, {
    fileName: "app/routes/philosophie/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var philosophie_default = Philosophie;

// server-entry-module:@remix-run/dev/server-build
var route3 = __toESM(require_contact());

// app/routes/Introduction.jsx
var Introduction_exports = {};
__export(Introduction_exports, {
  default: () => Introduction_default
});
var import_react5 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Introduction = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "intro-container", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "intro-profile", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "https://www.degandpartners.com/wp-content/uploads/2021/03/EM.png" }, void 0, !1, {
      fileName: "app/routes/Introduction.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { style: { fontWeight: "bold", textAlign: "center" }, children: "Emmanuel Degr\xE8ve" }, void 0, !1, {
      fileName: "app/routes/Introduction.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Introduction.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "intro-paragraphe", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { style: { fontWeight: 600, fontSize: 36 }, children: "Qui sommes nous" }, void 0, !1, {
      fileName: "app/routes/Introduction.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { textAlign: "justify", color: "#888" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { style: { color: "#4d4d4d", fontSize: 17, lineHeight: "170%" }, children: "Deg & Partners est un cabinet conseil actif dans les m\xE9tiers de la comptabilit\xE9, de la gestion et de la fiscalit\xE9, en y int\xE9grant de mani\xE8re exhaustive l\u2019ensemble des besoins de ses clients." }, void 0, !1, {
        fileName: "app/routes/Introduction.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/Introduction.jsx",
        lineNumber: 17,
        columnNumber: 19
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/Introduction.jsx",
        lineNumber: 17,
        columnNumber: 26
      }, this),
      "Fiduciaire fond\xE9e en 1992 par Emmanuel Degr\xE8ve, le cabinet n\u2019a eu de cesse de se repenser et de se renouveler afin de parvenir \xE0 une structure actuelle des plus performantes. Aussi depuis 2002, Deg & Partners est agr\xE9e par l\u2019IEC. La vocation de notre cabinet est de parfaire, sans rel\xE2che, son exp\xE9rience et son savoir faire dans le domaine des PMEs et des ind\xE9pendants afin de garantir \xE0 nos clients un service de qualit\xE9, toujours \xE0 la pointe de la l\xE9gislation fiscale. Historiquement cr\xE9\xE9 \xE0 Charleroi, Deg & Partners a aujourd\u2019hui atteint une taille significative au niveau national de part sa pr\xE9sence dans l\u2019ensemble de la Belgique francophone, notamment par le biais de ses bureaux sur Bruxelles et Li\xE8ge. En outre, le cabinet a cr\xE9\xE9 une cellule d\xE9di\xE9e exclusivement \xE0 l\u2019optimisation fiscale. Nos clients b\xE9n\xE9ficient alors de toute l\u2019expertise de nos conseillers fiscaux et peuvent alors pr\xE9tendre au r\xE9gime qui leur sera le plus favorable."
    ] }, void 0, !0, {
      fileName: "app/routes/Introduction.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Introduction.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/Introduction.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Introduction_default = Introduction;

// app/routes/MyCarousel.jsx
var MyCarousel_exports = {};
__export(MyCarousel_exports, {
  default: () => MyCarousel_default
});
var import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), MyCarousel = () => {
  let images = [
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide0.jpg",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide.png",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide2.jpg"
  ], titles = ["Comptabilit\xE9", "Fiscalit\xE9", "Optimisation"], texts = [
    `Pour nos clients, l\u2019information chiffr\xE9e est indispensable \xE0 la plupart de leurs prises de d\xE9cisions.
  Elle doit \xEAtre disponible rapidement, pertinente et fiable. `,
    "Une pr\xE9occupation majeure de notre cellule Gestion et Comptabilit\xE9 concerne la fiscalit\xE9 de ses clients. Notre cellule met alors un point d\u2019honneur \xE0 s\u2019acquitter syst\xE9matiquement de cette t\xE2che. ",
    "Notre cabinet se positionne comme un sp\xE9cialiste en optimisation fiscale et s'interrogera sur les m\xE9canismes \xE0 mettre en place afin d\u2019optimiser la situation fiscale de ses clients autour de trois axes majeurs : le pilier professionnel, le pilier patrimonial, le pilier social. "
  ], [index2, setIndex] = (0, import_react6.useState)(0), [title, setTitle] = (0, import_react6.useState)(titles[index2]), [text, setText] = (0, import_react6.useState)(texts[index2]), handleButtonClick = (index3, titleIndex, textIndex) => {
    setIndex(index3), setTitle(titles[titleIndex]), setText(texts[textIndex]);
  }, style = {
    backgroundImage: `url(${images[index2]})`,
    backgroundSize: "cover"
  };
  return (0, import_react6.useEffect)(() => {
    let interval = setInterval(() => {
      setIndex((index2 + 1) % images.length), setTitle(titles[(index2 + 1) % titles.length]), setText(texts[(index2 + 1) % texts.length]);
    }, 5e3);
    return () => clearInterval(interval);
  }, [index2, titles]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "carousel-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "carouselImage", style, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "h1",
      {
        className: `carouselTitle ${index2 !== 0 ? "visible" : ""}`,
        children: titles[index2]
      },
      index2,
      !1,
      {
        fileName: "app/routes/MyCarousel.jsx",
        lineNumber: 67,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "carouselText", children: texts[index2] }, void 0, !1, {
      fileName: "app/routes/MyCarousel.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "carouselButtons", children: images.map((image, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        className: "carousel-button",
        onClick: () => handleButtonClick(i, i, i)
      },
      i,
      !1,
      {
        fileName: "app/routes/MyCarousel.jsx",
        lineNumber: 76,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/MyCarousel.jsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/MyCarousel.jsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/MyCarousel.jsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}, MyCarousel_default = MyCarousel;

// app/routes/Formules.jsx
var Formules_exports = {};
__export(Formules_exports, {
  default: () => Formules_default
});
var import_react7 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Formules = () => {
  let [count1, setCount1] = (0, import_react7.useState)(0), [count2, setCount2] = (0, import_react7.useState)(0), [count3, setCount3] = (0, import_react7.useState)(0);
  return (0, import_react7.useEffect)(() => {
    let interval1 = setInterval(() => {
      count1 < 20 && setCount1(count1 + 1);
    }, 50), interval2 = setInterval(() => {
      count2 < 35 && setCount2(count2 + 1);
    }, 50), interval3 = setInterval(() => {
      count3 < 1200 && setCount3(count3 + 48);
    }, 50);
    return () => {
      clearInterval(interval1), clearInterval(interval2), clearInterval(interval3);
    };
  }, [count1, count2, count3, 20, 35, 1200]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "numbers", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "numbers-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: { fontFamily: "Poppins" }, children: [
          count1,
          "+"
        ] }, void 0, !0, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "number-title", children: "Ann\xE9es d'exp\xE9rience" }, void 0, !1, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 44,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 41,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "numbers-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: { fontFamily: "Poppins" }, children: [
          count2,
          "+"
        ] }, void 0, !0, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "number-title", children: "Collaborateurs investis" }, void 0, !1, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "numbers-item", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: { fontFamily: "Poppins" }, children: [
          count3,
          "+"
        ] }, void 0, !0, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "number-title", children: "Clients de confiance" }, void 0, !1, {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 54,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 51,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Formules.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "parallax-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "h1",
        {
          style: {
            fontSize: "45px",
            fontWeight: 600
          },
          children: "Nos formules"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/Formules.jsx",
          lineNumber: 59,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Nous vous proposons 3 packages, en fonction de vos besoins." }, void 0, !1, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 67,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { children: "voir les formules" }, void 0, !1, {
        fileName: "app/routes/Formules.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Formules.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Formules.jsx",
    lineNumber: 39,
    columnNumber: 11
  }, this);
}, Formules_default = Formules;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});

// app/routes/Blog.jsx
var Blog_exports = {};
__export(Blog_exports, {
  default: () => Blog_default
});
var import_react8 = require("react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Blog = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "blogs-container", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "blog-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Notre Blog" }, void 0, !1, {
      fileName: "app/routes/Blog.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "/", children: "Voir Plus" }, void 0, !1, {
      fileName: "app/routes/Blog.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Blog.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "blogs" }, void 0, !1, {
    fileName: "app/routes/Blog.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "blog-item" }, void 0, !1, {
    fileName: "app/routes/Blog.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/Blog.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), Blog_default = Blog;

// app/routes/index.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(MyCarousel_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Introduction_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Formules_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Blog_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "57f4d5d7", entry: { module: "/build/entry.client-TLULWOLG.js", imports: ["/build/_shared/chunk-5WMVXZNB.js", "/build/_shared/chunk-FN3KWL4V.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7YQTCH7D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Blog": { id: "routes/Blog", parentId: "root", path: "Blog", index: void 0, caseSensitive: void 0, module: "/build/routes/Blog-CKYLES3T.js", imports: ["/build/_shared/chunk-UR5326US.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Formules": { id: "routes/Formules", parentId: "root", path: "Formules", index: void 0, caseSensitive: void 0, module: "/build/routes/Formules-TDDTPEHZ.js", imports: ["/build/_shared/chunk-OS66GRZY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Introduction": { id: "routes/Introduction", parentId: "root", path: "Introduction", index: void 0, caseSensitive: void 0, module: "/build/routes/Introduction-BAT5QV5Q.js", imports: ["/build/_shared/chunk-AUT7Q7IC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/MyCarousel": { id: "routes/MyCarousel", parentId: "root", path: "MyCarousel", index: void 0, caseSensitive: void 0, module: "/build/routes/MyCarousel-PETYBN2K.js", imports: ["/build/_shared/chunk-UDVK52FF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact/index": { id: "routes/contact/index", parentId: "root", path: "contact", index: !0, caseSensitive: void 0, module: "/build/routes/contact/index-44SPEOIL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-5YLPGM76.js", imports: ["/build/_shared/chunk-UR5326US.js", "/build/_shared/chunk-AUT7Q7IC.js", "/build/_shared/chunk-UDVK52FF.js", "/build/_shared/chunk-OS66GRZY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nos-formules/index": { id: "routes/nos-formules/index", parentId: "root", path: "nos-formules", index: !0, caseSensitive: void 0, module: "/build/routes/nos-formules/index-ARKVEAIN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/philosophie/index": { id: "routes/philosophie/index", parentId: "root", path: "philosophie", index: !0, caseSensitive: void 0, module: "/build/routes/philosophie/index-DA3LC7NE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-57F4D5D7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/nos-formules/index": {
    id: "routes/nos-formules/index",
    parentId: "root",
    path: "nos-formules",
    index: !0,
    caseSensitive: void 0,
    module: nos_formules_exports
  },
  "routes/philosophie/index": {
    id: "routes/philosophie/index",
    parentId: "root",
    path: "philosophie",
    index: !0,
    caseSensitive: void 0,
    module: philosophie_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: !0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/Introduction": {
    id: "routes/Introduction",
    parentId: "root",
    path: "Introduction",
    index: void 0,
    caseSensitive: void 0,
    module: Introduction_exports
  },
  "routes/MyCarousel": {
    id: "routes/MyCarousel",
    parentId: "root",
    path: "MyCarousel",
    index: void 0,
    caseSensitive: void 0,
    module: MyCarousel_exports
  },
  "routes/Formules": {
    id: "routes/Formules",
    parentId: "root",
    path: "Formules",
    index: void 0,
    caseSensitive: void 0,
    module: Formules_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Blog": {
    id: "routes/Blog",
    parentId: "root",
    path: "Blog",
    index: void 0,
    caseSensitive: void 0,
    module: Blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
