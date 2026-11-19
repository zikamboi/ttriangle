import { _ as _sfc_main$1 } from "./PageHero-CkQcfTbS.js";
import { _ as _sfc_main$2 } from "./AppImage-C2ZouWCe.js";
import { _ as _sfc_main$3 } from "./SectionHead-BNbasbdL.js";
import { _ as __nuxt_component_5 } from "./CtaBand-6_4sxov_.js";
import { m as markets } from "./site-QdmtXxx9.js";
import { defineComponent, resolveDirective, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
import "./nuxt-link-GS68twfD.js";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "About Us | T Triangle Limited" });
    const values = ["Safety", "Integrity", "Reliability", "Customer focus", "Continuous improvement"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppImage = _sfc_main$2;
      const _component_SectionHead = _sfc_main$3;
      const _component_CtaBand = __nuxt_component_5;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "About Us",
        title: "Engineering and technical solutions that start with understanding the requirement"
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-12 lg:grid-cols-2"><div${ssrRenderAttrs(mergeProps({ class: "space-y-5 text-slate-600" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><p>T Triangle Limited is an engineering and technical solutions company supporting industrial operations through equipment sourcing, procurement support and specialised technical services. We work with clients to understand operational requirements and coordinate solutions that fit the application, site conditions and project objectives.</p><p>Our work addresses practical challenges involving equipment performance, maintenance, process safety, operational continuity and project execution.</p><p>Dependable service begins with understanding the requirement: clarifying the scope, communicating openly, respecting site and safety requirements, and following through on agreed commitments.</p></div>`);
      _push(ssrRenderComponent(_component_AppImage, mergeProps({
        class: "aspect-[4/3]",
        hint: "Team / workshop image"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 150)), null, _parent));
      _push(`</div></section><section class="section bg-brand-mist"><div class="container-x grid gap-6 md:grid-cols-3"><div${ssrRenderAttrs(mergeProps({ class: "bg-white p-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="font-bold text-brand-red">Mission</h3><p class="mt-3 text-slate-600">To provide responsive engineering, equipment and specialist technical solutions that help clients meet their operational requirements.</p></div><div${ssrRenderAttrs(mergeProps({ class: "bg-white p-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}><h3 class="font-bold text-brand-red">Vision</h3><p class="mt-3 text-slate-600">To be a trusted technical solutions partner for industrial organisations across Africa.</p></div><div${ssrRenderAttrs(mergeProps({ class: "bg-white p-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 200)))}><h3 class="font-bold text-brand-red">Values</h3><ul class="mt-3 space-y-1 text-slate-600"><!--[-->`);
      ssrRenderList(values, (v) => {
        _push(`<li>• ${ssrInterpolate(v)}</li>`);
      });
      _push(`<!--]--></ul></div></div></section><section id="market-focus" class="section"><div class="container-x">`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: "Our Market Focus",
        title: "Industrial environments where reliability matters",
        text: "For each confirmed industry, explain typical requirements, relevant services and project proof. List only industries management confirms."
      }, null, _parent));
      _push(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList("markets" in _ctx ? _ctx.markets : unref(markets), (m, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: m,
          class: "border border-slate-200 p-7 transition hover:border-brand hover:shadow-lg"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 80)))}><h3 class="text-lg font-bold">${ssrInterpolate(m)}</h3><p class="mt-2 text-sm text-slate-600">Sector description, relevant services and project proof go here.</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-CEUbd1Ew.js.map
