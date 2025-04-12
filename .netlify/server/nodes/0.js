

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Du6VII0E.js","_app/immutable/chunks/scheduler.S6DL91gn.js","_app/immutable/chunks/index.LwDIcy15.js"];
export const stylesheets = ["_app/immutable/assets/0.CRXN-8am.css"];
export const fonts = [];
