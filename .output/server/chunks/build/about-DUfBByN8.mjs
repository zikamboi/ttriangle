import { _ as _sfc_main$1 } from './PageHero-CkQcfTbS.mjs';
import { _ as _sfc_main$2 } from './AppImage-CHurOmBK.mjs';
import { _ as _sfc_main$3 } from './SectionHead-BNbasbdL.mjs';
import { _ as __nuxt_component_3 } from './CtaBand-CXelDDpu.mjs';
import { m as markets } from './site-DWXvFva0.mjs';
import { defineComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "About Us | T Triangle Limited" });
    const coreValues = [
      {
        number: "01",
        title: "Customization",
        text: "Bespoke solutions for every client, tailored to meet specific requirements and objectives. No two shutdowns are the same, so no two of our method statements are either."
      },
      {
        number: "02",
        title: "Responsibility",
        text: "Safety is paramount in everything we do, ensuring protection for all stakeholders. Every job is planned and executed with safety as a core value, not a checkbox."
      },
      {
        number: "03",
        title: "Excellence",
        text: "Flawless execution and seamless service delivery in every project we undertake, measured against international codes and our clients' own specifications."
      },
      {
        number: "04",
        title: "Performance",
        text: "Industry-leading results, ethical conduct and responsible operations that drive success for our clients, our people and the communities where we work."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppImage = _sfc_main$2;
      const _component_SectionHead = _sfc_main$3;
      const _component_CtaBand = __nuxt_component_3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        eyebrow: "About Us",
        title: "Engineering and technical solutions that start with understanding the requirement"
      }, null, _parent));
      _push(`<section class="section"><div class="container-x grid gap-12 lg:grid-cols-2"><div${ssrRenderAttrs(mergeProps({ class: "space-y-5 text-slate-600" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><p class="eyebrow">Our Purpose</p><h2 class="max-w-xl text-4xl !text-brand sm:text-5xl">We keep critical energy infrastructure safe, compliant and producing.</h2><div class="space-y-5 pt-2"><p>T Triangle Limited is an engineering and technical solutions company supporting industrial operations through equipment sourcing, procurement support and specialised technical services. We work with clients to understand operational requirements and coordinate solutions that fit the application, site conditions and project objectives.</p><p>Our work addresses practical challenges involving equipment performance, maintenance, process safety, operational continuity and project execution.</p><p>Dependable service begins with understanding the requirement: clarifying the scope, communicating openly, respecting site and safety requirements, and following through on agreed commitments.</p></div></div>`);
      _push(ssrRenderComponent(_component_AppImage, mergeProps({
        class: "aspect-[4/3]",
        hint: "Team / workshop image"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 150)), null, _parent));
      _push(`</div></section><section class="section bg-brand text-white"><div class="container-x"><div class="grid gap-6 md:grid-cols-2"><div${ssrRenderAttrs(mergeProps({ class: "border border-white/25 bg-white/10 p-7 shadow-sm sm:p-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><h3 class="font-display text-2xl text-brand-red">Vision</h3><p class="mt-4 max-w-xl text-base leading-7 text-white/85">To be Africa&#39;s foremost provider of sustainable, innovative engineering and energy solutions, consistently exceeding industry benchmarks.</p></div><div${ssrRenderAttrs(mergeProps({ class: "border border-white/25 bg-white/10 p-7 shadow-sm sm:p-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}><h3 class="font-display text-2xl text-brand-red">Mission</h3><p class="mt-4 max-w-xl text-base leading-7 text-white/85">To serve as your single source partner, delivering complete value chains and cost-optimized solutions with a substantial inventory, expert repair and continuous innovation.</p></div></div><div class="mt-14"><p class="eyebrow !text-brand-red">Our Core Values</p><div class="mt-6 grid gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(coreValues, (value, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: value.title,
          class: "border border-white/20 bg-white/10 p-7 transition duration-300 hover:bg-white/15 sm:p-8"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 80)))}><h3 class="text-xl !text-white"><span class="mr-3 font-display text-2xl font-bold text-brand-red">${ssrInterpolate(value.number)}</span>${ssrInterpolate(value.title)}</h3><p class="mt-4 text-sm leading-7 text-white/85">${ssrInterpolate(value.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section id="market-focus" class="section"><div class="container-x">`);
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

export { _sfc_main as default };
//# sourceMappingURL=about-DUfBByN8.mjs.map
