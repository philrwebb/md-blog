var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  load: () => load
});
var import_index_7340f048 = require("../../chunks/index-7340f048.js");
const allPosts = { "./blog/first-post.md": () => Promise.resolve().then(() => __toESM(require("./blog/first-post.md.js"))), "./blog/newpost.md": () => Promise.resolve().then(() => __toESM(require("./blog/newpost.md.js"))), "./blog/second-post.svx": () => Promise.resolve().then(() => __toESM(require("./blog/second-post.svx.js"))), "./blog/third-post.md": () => Promise.resolve().then(() => __toESM(require("./blog/third-post.md.js"))) };
let body = [];
for (let path in allPosts) {
  body.push(allPosts[path]().then(({ metadata }) => {
    return { path, metadata };
  }));
}
const load = async () => {
  const posts = await Promise.all(body);
  return { props: { posts } };
};
const Routes = (0, import_index_7340f048.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<ul>${(0, import_index_7340f048.a)(posts, ({ path, metadata }) => {
    return `<li><a${(0, import_index_7340f048.b)("href", `${path.replace(".md", "").replace(".svx", "")}`, 0)}>${(0, import_index_7340f048.e)(metadata.title)}</a>
      </li>`;
  })}</ul>`;
});
module.exports = __toCommonJS(stdin_exports);
