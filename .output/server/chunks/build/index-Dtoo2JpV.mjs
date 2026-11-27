import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as _sfc_main$2 } from './ProjectFeature-CTihv0W8.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-GS68twfD.mjs';
import { _ as __nuxt_component_3 } from './CtaBand-CXelDDpu.mjs';
import { a as projects } from './site-DWXvFva0.mjs';
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Projects | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_ProjectFeature = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CtaBand = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Projects",
        title: "Selected project work",
        text: "A selection of project examples from our technical support areas."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x space-y-20"><!--[-->`);
      ssrRenderList(("projects" in _ctx ? _ctx.projects : unref(projects)).slice(0, 3), (project, i) => {
        _push(ssrRenderComponent(_component_ProjectFeature, {
          key: project.slug,
          project,
          index: i
        }, null, _parent));
      });
      _push(`<!--]--><div class="mt-16 flex flex-col gap-6 bg-brand-dark p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10"><div class="max-w-2xl"><p class="eyebrow !text-white">Project portfolio</p><h2 class="font-display text-3xl font-semibold uppercase !text-white sm:text-4xl">See more of our projects</h2><p class="mt-3 text-white/70">Browse the full selection of project examples.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/all",
        class: "btn btn-red shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See More Projects`);
          } else {
            return [
              createTextVNode("See More Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dtoo2JpV.mjs.map
