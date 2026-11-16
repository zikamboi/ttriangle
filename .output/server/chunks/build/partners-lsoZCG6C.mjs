import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as __nuxt_component_5 } from './CtaBand-D-F5GDeV.mjs';
import { p as partners } from './site-DeS5fg6X.mjs';
import { defineComponent, resolveDirective, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead } from './v3-w9sd3xiW.mjs';
import './HeroArt-Chj0iCKI.mjs';
import './server.mjs';
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
import './nuxt-link-GS68twfD.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "partners",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Our OEM & Technology Partners | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_CtaBand = __nuxt_component_5;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our OEM & Technology Partners",
        title: "Technology partners for specialised solutions.",
        text: "Explore the OEMs and technology partners we work with to connect clients with equipment and specialised solutions suited to their applications."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x"><div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"><!--[-->`);
      ssrRenderList("partners" in _ctx ? _ctx.partners : unref(partners), (p, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: p.name,
          class: "grid h-36 place-items-center border border-slate-200 p-4"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 70)))}><img${ssrRenderAttr("src", p.image)}${ssrRenderAttr("alt", p.name)} loading="lazy" class="max-h-full max-w-full object-contain"></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=partners-lsoZCG6C.mjs.map
