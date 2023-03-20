var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
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
var global_default = "/build/_assets/global-VO7CLYKG.css";

// app/root.jsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react_social_icons = require("react-social-icons"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: global_default }], meta = () => ({
  charset: "utf-8",
  title: "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilit\xE9, gestion & fiscalit\xE9",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let titlePage = "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilit\xE9, gestion & fiscalit\xE9";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 62,
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
          lineNumber: 64,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Accueil" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Votre m\xE9tier" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes artiste et creatif ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 74,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes association culturelle ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes medecin ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 76,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes dentiste ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes veterinaire ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 78,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes consultant ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes avocat ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Qui sommes nous ?" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 1" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 2" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 3" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 89,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 86,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Nos Services" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 1" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 96,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 2" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 97,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 3" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 98,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 95,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Nos formules" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Notre Blog " }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Contact" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "contact", children: "contactez nous" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mainPage", children }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMapMarkerAlt }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      " Rue Waelhem,68 - 1030 Bruxelles"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:info@degandpartners.com", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      " info@degandpartners.com"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      " + 32 2 247 39 39"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "allfooter", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "newsLetter", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "inscrivezvous", children: "Inscrivez-vous a la newsletter" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 137,
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
            lineNumber: 140,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "sabonner", children: "S'ABONNER" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 146,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 136,
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
            lineNumber: 154,
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
              lineNumber: 160,
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
              lineNumber: 166,
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
              lineNumber: 172,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 159,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 153,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "second", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: { color: "white" }, children: "Bureau de Bruxelles" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 181,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMapMarkerAlt }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 183,
            columnNumber: 15
          }, this),
          " Rue Waelhem,68 - 1030 Bruxelles"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 182,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          " info@degandpartners.com"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 186,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 190,
            columnNumber: 15
          }, this),
          " + 32 2 247 39 39"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 189,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faFax }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          " + 32 2 247 39 39"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 192,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 180,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "third", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: { color: "white", fontWeight: 600 }, children: "Bureau de Li\xE8ge" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMapMarkerAlt }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 199,
            columnNumber: 15
          }, this),
          " Quai Orban, 41 \u2013 4020 Li\xE8ge"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 198,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 202,
            columnNumber: 15
          }, this),
          " info@degandpartners.com"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 205,
            columnNumber: 15
          }, this),
          "  + 32 4 343 17 31"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faFax }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          " + 32 2 247 39 39"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 207,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 196,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fourth", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "http://art-consult.be/", className: "footerlien", children: "Vous \xEAtes artiste et cr\xE9atif" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 212,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "http://art-consult.be/", className: "footerlien", children: "Vous \xEAtes Association Culturelle" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 215,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://comptabilitemedecin.be/", className: "footerlien", children: "Vous \xEAtes m\xE9decin" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 218,
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
            lineNumber: 221,
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
            lineNumber: 227,
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
            lineNumber: 233,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "http://comptabiliteavocat.be/", className: "footerlien", children: "Vous \xEAtes avocat" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 239,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 211,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 152,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "copyright", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { color: "#7d7d7d", children: [
      "Copyright \xA9 2021 - All Rights Reserved -  ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "http://www.degandpartners.com/wp-content/uploads/2021/04/CONDITIONS-GENERALES-DE-PRESTATIONS.pdf", style: { color: "white" }, children: "Conditions g\xE9n\xE9rales de prestations" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 246,
        columnNumber: 70
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 246,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 245,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 135,
    columnNumber: 5
  }, this);
}

// app/routes/philosophie/index.jsx
var philosophie_exports = {};
__export(philosophie_exports, {
  default: () => philosophie_default
});
var import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Philosophie() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "Philosophie" }, void 0, !1, {
    fileName: "app/routes/philosophie/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var philosophie_default = Philosophie;

// app/routes/Slider.jsx
var Slider_exports = {};
__export(Slider_exports, {
  default: () => Slider_default
});
var import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Slider = ({ images }) => {
  let [currentIndex, setCurrentIndex] = (0, import_react4.useState)(0), nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "slider", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        className: "slider__wrapper",
        style: { transform: `translateX(-${currentIndex * 100}%)` },
        children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "slider__item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: image, alt: `Slide ${index}` }, void 0, !1, {
          fileName: "app/routes/Slider.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, index, !1, {
          fileName: "app/routes/Slider.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/routes/Slider.jsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "slider__button slider__button--prev", onClick: prevSlide, children: "Prev" }, void 0, !1, {
      fileName: "app/routes/Slider.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "slider__button slider__button--next", onClick: nextSlide, children: "Next" }, void 0, !1, {
      fileName: "app/routes/Slider.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Slider.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, Slider_default = Slider;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Slider_default, { images: [
      "https://www.degandpartners.com/wp-content/uploads/2018/09/slide2.jpg",
      "https://www.degandpartners.com/wp-content/uploads/2018/09/slide0.jpg",
      "https://www.degandpartners.com/wp-content/uploads/2018/09/slide.png"
    ] }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "homepageTitle", children: " homePage " }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "21bcdff7", entry: { module: "/build/entry.client-TNPL4Y4H.js", imports: ["/build/_shared/chunk-N77MWZDK.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PDB7KAHY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Slider": { id: "routes/Slider", parentId: "root", path: "Slider", index: void 0, caseSensitive: void 0, module: "/build/routes/Slider-DQQBESQM.js", imports: ["/build/_shared/chunk-EKCQ7VE5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-AG4FV3PM.js", imports: ["/build/_shared/chunk-EKCQ7VE5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/philosophie/index": { id: "routes/philosophie/index", parentId: "root", path: "philosophie", index: !0, caseSensitive: void 0, module: "/build/routes/philosophie/index-P2ICQIKU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-21BCDFF7.js" };

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
  "routes/philosophie/index": {
    id: "routes/philosophie/index",
    parentId: "root",
    path: "philosophie",
    index: !0,
    caseSensitive: void 0,
    module: philosophie_exports
  },
  "routes/Slider": {
    id: "routes/Slider",
    parentId: "root",
    path: "Slider",
    index: void 0,
    caseSensitive: void 0,
    module: Slider_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
