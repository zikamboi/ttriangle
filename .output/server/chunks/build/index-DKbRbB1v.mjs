import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as _sfc_main$2 } from './ServiceCard-C3U-RyeH.mjs';
import { _ as __nuxt_component_5 } from './CtaBand-6_4sxov_.mjs';
import { s as services } from './site-QdmtXxx9.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
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
import './nuxt-link-GS68twfD.mjs';
import './AppImage-C2ZouWCe.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Our Services | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_ServiceCard = _sfc_main$2;
      const _component_CtaBand = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Our Services",
        title: "Eight core service areas for industrial operations",
        text: "Each service has its own page explaining scope, applications and how to enquire."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList("services" in _ctx ? _ctx.services : unref(services), (s, i) => {
        _push(ssrRenderComponent(_component_ServiceCard, {
          key: s.slug,
          s,
          i
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_CtaBand, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DKbRbB1v.mjs.map
