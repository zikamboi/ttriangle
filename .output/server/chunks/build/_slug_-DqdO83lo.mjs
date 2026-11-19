import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-GS68twfD.mjs';
import { _ as _sfc_main$2 } from './AppImage-C2ZouWCe.mjs';
import { _ as _sfc_main$3 } from './SectionHead-BNbasbdL.mjs';
import { _ as _sfc_main$4 } from './ServiceCard-C3U-RyeH.mjs';
import { _ as __nuxt_component_5 } from './CtaBand-6_4sxov_.mjs';
import { s as services } from './site-QdmtXxx9.mjs';
import { defineComponent, resolveDirective, unref, withCtx, createTextVNode, createVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useRoute, c as createError } from './server.mjs';
import { u as useHead } from './v3-w9sd3xiW.mjs';
import './HeroArt-Chj0iCKI.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const s = services.find((x) => x.slug === route.params.slug);
    if (!s) throw createError({ statusCode: 404, statusMessage: "Service not found", fatal: true });
    useHead({ title: `${s.name} | T Triangle Limited` });
    const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppImage = _sfc_main$2;
      const _component_SectionHead = _sfc_main$3;
      const _component_ServiceCard = _sfc_main$4;
      const _component_CtaBand = __nuxt_component_5;
      const _directive_reveal = resolveDirective("reveal");
      if (unref(s)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_PageHero, {
          eyebrow: "Our Services",
          title: unref(s).headline
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/contact?service=${unref(s).slug}`,
                class: "btn btn-red mt-8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Discuss This Solution`);
                  } else {
                    return [
                      createTextVNode("Discuss This Solution")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: `/contact?service=${unref(s).slug}`,
                  class: "btn btn-red mt-8"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Discuss This Solution")
                  ]),
                  _: 1
                }, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<section class="section"><div class="container-x grid gap-12 lg:grid-cols-[1.2fr_.8fr]"><div><h2${ssrRenderAttrs(mergeProps({ class: "text-4xl" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>${ssrInterpolate(unref(s).name)}</h2><p${ssrRenderAttrs(mergeProps({ class: "mt-4 text-slate-600" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>${ssrInterpolate(unref(s).intro)}</p><h3${ssrRenderAttrs(mergeProps({ class: "mt-10 text-2xl" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Scope of support</h3><ul class="mt-4 space-y-3"><!--[-->`);
        ssrRenderList(unref(s).scope, (x, i) => {
          _push(`<li${ssrRenderAttrs(mergeProps({
            key: x,
            class: "flex gap-3"
          }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 60)))}><span class="mt-1 text-brand-red">\u25B2</span><span>${ssrInterpolate(x)}</span></li>`);
        });
        _push(`<!--]--></ul><div${ssrRenderAttrs(mergeProps({ class: "mt-10 bg-brand-mist p-6" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="font-bold">What to include in your enquiry</h3><p class="mt-2 text-sm text-slate-600">${ssrInterpolate(unref(s).enquiry)}</p></div></div><div class="space-y-5">`);
        _push(ssrRenderComponent(_component_AppImage, mergeProps({
          src: unref(s).detailImages[0],
          alt: unref(s).name,
          class: "aspect-[4/3]",
          hint: "Add first service image in utils/site.ts"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal)), null, _parent));
        _push(ssrRenderComponent(_component_AppImage, mergeProps({
          src: unref(s).detailImages[1],
          alt: `${unref(s).name} supporting image`,
          class: "aspect-[4/3]",
          hint: "Add second service image in utils/site.ts"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)), null, _parent));
        _push(`</div></div></section><section class="section bg-brand-mist"><div class="container-x">`);
        _push(ssrRenderComponent(_component_SectionHead, {
          eyebrow: "Related services",
          title: "You may also need"
        }, null, _parent));
        _push(`<div class="grid gap-6 md:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(related), (r, i) => {
          _push(ssrRenderComponent(_component_ServiceCard, {
            key: r.slug,
            s: r,
            i: ("services" in _ctx ? _ctx.services : unref(services)).indexOf(r)
          }, null, _parent));
        });
        _push(`<!--]--></div></div></section>`);
        _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DqdO83lo.mjs.map
