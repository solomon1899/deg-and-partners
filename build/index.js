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
var global_default = "/build/_assets/global-MS3I6GDE.css";

// app/root.jsx
var import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: global_default }], meta = () => ({
  charset: "utf-8",
  title: "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilit\xE9, gestion & fiscalit\xE9",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let titlePage = "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilit\xE9, gestion & fiscalit\xE9";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "navbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: "logo", children: "logo" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "Accueil" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Votre m\xE9tier" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes artiste et creatif ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes association culturelle ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes medecin ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes dentiste ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes veterinaire ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 70,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes consultant ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Vous etes avocat ?" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Qui sommes nous ?" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 1" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 2" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 80,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 3" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 81,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "dropbtn", children: "Nos Services" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-content", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 1" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 2" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 89,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: "Link 3" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 90,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Nos formules" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Notre Blog " }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { children: "Contact" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "contact", children: "contactez nous" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mainPage", children }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faMapMarkerAlt }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      " Rue Waelhem,68 - 1030 Bruxelles"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:info@degandpartners.com", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faEnvelope }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 109,
        columnNumber: 49
      }, this),
      " info@degandpartners.com"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, { icon: import_free_solid_svg_icons.faPhone }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      " + 32 2 247 39 39"
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "newsLetter", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Inscrivez-vous a la newsletter" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "letterform", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 118,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: " homePage " }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f48b8b63", entry: { module: "/build/entry.client-XD33HTI7.js", imports: ["/build/_shared/chunk-4MH4CXYC.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RLL2KATS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6B6T3W2J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-F48B8B63.js" };

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
