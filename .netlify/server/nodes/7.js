

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/Stock/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.BMh8QrrG.js","_app/immutable/chunks/scheduler.S6DL91gn.js","_app/immutable/chunks/index.LwDIcy15.js"];
export const stylesheets = [];
export const fonts = [];
