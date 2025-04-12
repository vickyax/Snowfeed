

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/chatbot/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DUbFdKUR.js","_app/immutable/chunks/scheduler.S6DL91gn.js","_app/immutable/chunks/index.LwDIcy15.js","_app/immutable/chunks/i18n.DnWy1hS9.js","_app/immutable/chunks/index.DdtjHf-s.js","_app/immutable/chunks/groq-client.DgbtWs4X.js","_app/immutable/chunks/Nav.DLDruXeX.js","_app/immutable/chunks/entry.DO5NEvma.js"];
export const stylesheets = ["_app/immutable/assets/5.ByZQD_MU.css","_app/immutable/assets/Nav.Bvmey5DK.css"];
export const fonts = [];
