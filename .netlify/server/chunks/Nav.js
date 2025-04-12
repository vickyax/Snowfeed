import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each } from "./ssr.js";
import "./client.js";
import { t, l as locale, a as locales } from "./i18n.js";
const snowfeed = "/_app/immutable/assets/snowfeed.bLvMZ7r-.png";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  let y;
  let navFloat = false;
  let hambugerEl;
  navFloat = y > 10;
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `  <nav id="header"${add_attribute(
    "class",
    `
  fixed w-full z-30 top-0 text-white
  ${navFloat ? "bg-blue-300 bg-opacity-20 shadow-md " : "bg-transparent"}
  ${!navFloat ? "bg-blue-800 bg-opacity-60 shadow-md" : "bg-transparent"}
  transition duration-300 ease-in-out
  `,
    0
  )}><div${add_attribute(
    "class",
    `w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2
  ${navFloat ? "my-5" : "my-10"} transition duration-300 ease-in-out`,
    0
  )}><div class="pl-4 flex items-center text-blue-400"><button class="${[
    "no-underline hover:no-underline font-bold text-2xl lg:text-4xl cursor-pointer",
    (navFloat ? "text-blue-800" : "") + " " + (!navFloat ? "text-blue-400" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1k5hses"><img${add_attribute("src", snowfeed, 0)} alt="snowfeed Icon" class="h-8 inline">  Snowfeed</button></div> <div class="block lg:hidden pr-4"${add_attribute("this", hambugerEl, 0)}><button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"><svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>${escape($t("menu"))}</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div> <div class="${[
    "hidden w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 text-center",
    "hidden"
  ].join(" ").trim()}" id="nav-content"><ul class="list-reset lg:flex justify-end flex-1 items-center"><li class="mr-3"><button class="mx-2 px-5 py-3 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" data-svelte-h="svelte-zxogjb"><span class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm-2 4c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm6-4c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm2 4c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z"></path></svg> <span>Freelance Technicians</span></span></button></li> <li class="mr-3"><button class="inline-block py-2 px-4 text-black font-bold no-underline">${escape($t("login"))}</button></li> <li class="mr-3"><button class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">${escape($t("services"))}</button></li> <li class="mr-3"><button class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">${escape($t("faq"))}</button></li> <li class="mr-3"><p><select>${each(locales, (l) => {
    return `<option${add_attribute("value", l, 0)}>${escape(l)}</option>`;
  })}</select></p></li></ul> <button class="mx-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" data-svelte-h="svelte-6b3sxo"><span class="flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m2-4h6m-6 0a2 2 0 00-2 2v2m8-4a2 2 0 012 2v2m-6 4h.01M12 16h.01M8 16h.01M16 16h.01"></path></svg> <span>Chat Bot</span></span></button></div></div> <hr class="border-b border-gray-100 opacity-25 my-0 py-0"></nav>`;
});
export {
  Nav as N
};
