import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { c as contact } from "./site-CDf7AZN1.js";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Privacy Policy | T Triangle Limited" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "Legal",
        title: "Privacy Policy"
      }, null, _parent));
      _push(`<section class="section"><div class="container-x max-w-3xl space-y-5 text-slate-600"><p><strong>Draft template: have it reviewed by legal counsel before launch.</strong></p><p>T Triangle Limited collects the details you submit through our forms and chat (such as name, email, phone and enquiry details) to respond to your enquiry.</p><p>With your consent, we use cookies and similar technologies for analytics and to measure advertising (for example Google, Meta and LinkedIn tags). You can decline, and the site works without them. Where an ad click brings you here, we may keep the campaign details (UTM parameters) with your enquiry.</p><p>Messages typed into the chat assistant are processed by an AI service provider to generate replies. Please do not share sensitive or confidential information in chat.</p><p>To ask about or request deletion of your data, contact ${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}.</p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=privacy-CqLRhkR0.js.map
