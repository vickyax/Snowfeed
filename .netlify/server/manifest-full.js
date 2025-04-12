export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cartoonpic1.png","cartoonpic2.jpg","earn.jpg","farmer.png","favicon.png","hero2.jpg","html/hero2.jpg","html/index.html","pic1.jpg","pic2.jpg","repair_works.jpg","snowfeed.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".html":"text/html"},
	_: {
		client: {"start":"_app/immutable/entry/start.DnTJg7xX.js","app":"_app/immutable/entry/app.CMqVnDp8.js","imports":["_app/immutable/entry/start.DnTJg7xX.js","_app/immutable/chunks/entry.DO5NEvma.js","_app/immutable/chunks/scheduler.S6DL91gn.js","_app/immutable/chunks/index.DdtjHf-s.js","_app/immutable/entry/app.CMqVnDp8.js","_app/immutable/chunks/scheduler.S6DL91gn.js","_app/immutable/chunks/index.LwDIcy15.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/add",
				pattern: /^\/api\/add\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/add/_server.js'))
			},
			{
				id: "/pages/Buy",
				pattern: /^\/pages\/Buy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/pages/Sell",
				pattern: /^\/pages\/Sell\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/pages/Stock",
				pattern: /^\/pages\/Stock\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/pages/Transport",
				pattern: /^\/pages\/Transport\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/pages/chatbot",
				pattern: /^\/pages\/chatbot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/pages/technicians",
				pattern: /^\/pages\/technicians\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
