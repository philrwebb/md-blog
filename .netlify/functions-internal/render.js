const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-e863cce5.js","js":["start-e863cce5.js","chunks/vendor-97eed9b7.js","chunks/preload-helper-e4860ae8.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js'))
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "blog",
				pattern: /^\/blog\/?$/,
				params: null,
				path: "/blog",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "blog/second-post",
				pattern: /^\/blog\/second-post\/?$/,
				params: null,
				path: "/blog/second-post",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "blog/first-post",
				pattern: /^\/blog\/first-post\/?$/,
				params: null,
				path: "/blog/first-post",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				key: "blog/third-post",
				pattern: /^\/blog\/third-post\/?$/,
				params: null,
				path: "/blog/third-post",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				key: "blog/newpost",
				pattern: /^\/blog\/newpost\/?$/,
				params: null,
				path: "/blog/newpost",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				key: "Box",
				pattern: /^\/Box\/?$/,
				params: null,
				path: "/Box",
				shadow: null,
				a: [0,9],
				b: [1]
			}
		]
	}
});
