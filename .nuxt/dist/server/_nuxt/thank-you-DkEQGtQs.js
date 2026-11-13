import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-GS68twfD.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-w9sd3xiW.js";
import "./HeroArt-Chj0iCKI.js";
import "../server.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "thank-you",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Thank you | T Triangle Limited", meta: [{ name: "robots", content: "noindex" }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Enquiry received",
        title: "Thank you for contacting T Triangle Limited",
        text: "Your enquiry has been submitted. Our team will review the details and contact you using the information provided."
      }, null, _parent));
      _push(`<section class="section"><div class="container-x text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Explore Our Services`);
          } else {
            return [
              createTextVNode("Explore Our Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thank-you.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=thank-you-DkEQGtQs.js.map
