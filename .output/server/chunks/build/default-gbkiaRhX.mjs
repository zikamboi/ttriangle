import { _ as __nuxt_component_0 } from './nuxt-link-GS68twfD.mjs';
import { _ as __nuxt_component_0$1 } from './Logo-IEGt2MI1.mjs';
import { c as contact, n as nav, s as services } from './site-DeS5fg6X.mjs';
import { mergeProps, defineComponent, ref, watch, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const scrolled = ref(false), open = ref(false), progress = ref(0);
    const route = useRoute();
    watch(() => route.fullPath, () => open.value = false);
    watch(open, (v) => false);
    const solid = computed(() => scrolled.value || open.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Logo = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed inset-x-0 top-0 z-50 transition duration-300", unref(solid) ? "bg-white text-brand-dark shadow-lg" : "text-white"]
      }, _attrs))}><div class="${ssrRenderClass(["hidden overflow-hidden bg-brand-dark text-xs text-white/80 transition-all duration-300 lg:block", unref(scrolled) ? "max-h-0" : "max-h-10"])}"><div class="container-x flex h-10 items-center justify-between"><span>Lagos, Nigeria \xB7 Walvis Bay, Namibia</span><span class="flex gap-6"><a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="hover:text-white">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a><a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="hover:text-white">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a></span></div></div><div class="container-x flex h-20 items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        "aria-label": "T Triangle Limited home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Logo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-wider xl:flex"><!--[-->`);
      ssrRenderList("nav" in _ctx ? _ctx.nav : unref(nav), (n) => {
        _push(`<!--[-->`);
        if (n.children) {
          _push(`<div class="group relative">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: n.to,
            class: "block py-7 transition hover:text-brand-red"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(n.label)} <span class="text-[9px]"${_scopeId}>\u25BC</span>`);
              } else {
                return [
                  createTextVNode(toDisplayString(n.label) + " ", 1),
                  createVNode("span", { class: "text-[9px]" }, "\u25BC")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="invisible absolute -left-20 top-full w-[40rem] translate-y-2 border-t-4 border-brand-red bg-white p-4 normal-case tracking-normal text-brand-dark opacity-0 shadow-2xl transition duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"><div class="grid grid-cols-2 gap-1"><!--[-->`);
          ssrRenderList("services" in _ctx ? _ctx.services : unref(services), (s, i) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: s.slug,
              to: `/services/${s.slug}`,
              class: "flex gap-3 p-3 text-[13px] font-medium transition hover:bg-brand-mist hover:text-brand-red"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="font-display text-lg font-bold text-brand-red"${_scopeId}>0${ssrInterpolate(i + 1)}</span>${ssrInterpolate(s.name.split(" (")[0])}`);
                } else {
                  return [
                    createVNode("span", { class: "font-display text-lg font-bold text-brand-red" }, "0" + toDisplayString(i + 1), 1),
                    createTextVNode(toDisplayString(s.name.split(" (")[0]), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div></div>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: n.to,
            class: "relative py-2 transition hover:text-brand-red",
            "active-class": "!text-brand-red"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(n.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(n.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-red !py-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request a Quote`);
          } else {
            return [
              createTextVNode("Request a Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button class="xl:hidden" aria-label="Menu"><svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">`);
      if (!unref(open)) {
        _push(`<path d="M4 7h16M4 12h16M4 17h16"></path>`);
      } else {
        _push(`<path d="M6 6l12 12M18 6L6 18"></path>`);
      }
      _push(`</svg></button></div><div class="absolute inset-x-0 bottom-0 h-[3px] bg-brand-red" style="${ssrRenderStyle({ width: unref(progress) + "%" })}"></div>`);
      if (unref(open)) {
        _push(`<div class="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-brand-dark px-6 pb-10 pt-4 text-white xl:hidden"><!--[-->`);
        ssrRenderList("nav" in _ctx ? _ctx.nav : unref(nav), (n) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: n.to,
            to: n.to,
            class: "block border-b border-white/10 py-4 font-display text-2xl uppercase"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(n.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(n.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="mt-4 grid grid-cols-1 gap-1 text-sm text-white/70"><!--[-->`);
        ssrRenderList("services" in _ctx ? _ctx.services : unref(services), (s) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: s.slug,
            to: `/services/${s.slug}`,
            class: "py-1.5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u25B2 ${ssrInterpolate(s.name.split(" (")[0])}`);
              } else {
                return [
                  createTextVNode("\u25B2 " + toDisplayString(s.name.split(" (")[0]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "btn btn-red mt-8 w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Request a Quote`);
            } else {
              return [
                createTextVNode("Request a Quote")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-brand-dark pt-20 text-sm text-white/70" }, _attrs))}><div class="blueprint absolute inset-0 opacity-40"></div><div class="container-x relative grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1.1fr_1.3fr]"><div>`);
  _push(ssrRenderComponent(_component_Logo, { class: "text-white" }, null, _parent));
  _push(`<p class="mt-6 max-w-xs leading-relaxed">Engineering and technical solutions for critical industrial operations across Africa.</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "btn btn-red mt-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Request a Quote`);
      } else {
        return [
          createTextVNode("Request a Quote")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><h4 class="mb-5 font-display text-lg font-bold uppercase tracking-wider text-white">Company</h4><ul class="space-y-2.5"><!--[-->`);
  ssrRenderList("nav" in _ctx ? _ctx.nav : unref(nav), (n) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: n.to,
      class: "transition hover:text-white"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(n.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(n.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div><h4 class="mb-5 font-display text-lg font-bold uppercase tracking-wider text-white">Services</h4><ul class="space-y-2.5"><!--[-->`);
  ssrRenderList("services" in _ctx ? _ctx.services : unref(services), (s) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/services/${s.slug}`,
      class: "transition hover:text-white"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(s.name.split(" (")[0])}`);
        } else {
          return [
            createTextVNode(toDisplayString(s.name.split(" (")[0]), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div><h4 class="mb-5 font-display text-lg font-bold uppercase tracking-wider text-white">Offices</h4><p><strong class="text-white">Nigeria</strong><br>${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.address)}<br><a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="hover:text-white">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)}</a></p><p class="mt-4"><strong class="text-white">Namibia</strong><br>${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).na.address)}<br><a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).na.phone.replace(/\s/g, "")}`)} class="hover:text-white">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).na.phone)}</a></p><a${ssrRenderAttr("href", `mailto:${("contact" in _ctx ? _ctx.contact : unref(contact)).email}`)} class="mt-4 inline-block font-semibold text-white">${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}</a></div></div><div class="relative border-t border-white/10 py-5 text-center text-xs">\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} T Triangle Limited. All rights reserved. \xB7 `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy",
    class: "underline hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$2;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-gbkiaRhX.mjs.map
