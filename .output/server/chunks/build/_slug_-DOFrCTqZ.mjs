import { _ as __nuxt_component_0 } from './HeroArt-Chj0iCKI.mjs';
import { _ as _sfc_main$1 } from './EnquiryForm-BOF0_FHH.mjs';
import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { s as services } from './site-u9VOlmVf.mjs';
import { u as useRoute, c as createError } from './server.mjs';
import { u as useHead } from './v3-w9sd3xiW.mjs';
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
    const s = services.find((x) => x.slug === useRoute().params.slug);
    if (!s) throw createError({ statusCode: 404, statusMessage: "Not found", fatal: true });
    useHead({ title: `${s.name} | T Triangle Limited`, meta: [{ name: "robots", content: "noindex" }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroArt = __nuxt_component_0;
      const _component_EnquiryForm = _sfc_main$1;
      if (unref(s)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-brand-dark py-14 text-white sm:py-20" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_HeroArt, null, null, _parent));
        _push(`<div class="container-x relative grid items-start gap-10 lg:grid-cols-2"><div><p class="eyebrow !text-white">${ssrInterpolate(unref(s).name)}</p><h1 class="text-4xl !text-white sm:text-6xl">${ssrInterpolate(unref(s).headline)}</h1><p class="mt-5 text-white/75">${ssrInterpolate(unref(s).intro)}</p><ul class="mt-6 space-y-2 text-white/85"><!--[-->`);
        ssrRenderList(unref(s).scope.slice(0, 4), (x) => {
          _push(`<li>\u25B2 ${ssrInterpolate(x)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="bg-white p-6 text-slate-700 shadow-2xl sm:p-8">`);
        _push(ssrRenderComponent(_component_EnquiryForm, {
          preset: unref(s).slug
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lp/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DOFrCTqZ.mjs.map
