import { _ as __nuxt_component_0 } from "./HeroArt-Chj0iCKI.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-GS68twfD.js";
import { _ as _sfc_main$1 } from "./SectionHead-BNbasbdL.js";
import { _ as _sfc_main$2 } from "./AppImage-CHurOmBK.js";
import { _ as _sfc_main$3 } from "./ProjectFeature-CTihv0W8.js";
import { _ as __nuxt_component_3 } from "./CtaBand-BoCvMfmN.js";
import { c as contact, s as services, w as why, m as markets, p as partners, a as projects, i as insights } from "./site-TcafVfyZ.js";
import { defineComponent, ref, resolveDirective, withCtx, createTextVNode, createVNode, unref, mergeProps, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrRenderClass } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { u as useHead } from "./v3-w9sd3xiW.js";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ufo/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/defu/dist/defu.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/@unhead/vue/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/ofetch/dist/node.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/hookable/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/unctx/dist/index.mjs";
import "C:/Users/USER/Downloads/General Triangle/tt3/ttriangle-website/ttriangle/node_modules/h3/dist/index.mjs";
import "vue-router";
const _imports_0 = publicAssetsURL("/images/oil.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "T Triangle Limited | Engineering & Technical Solutions" });
    const active = ref(0);
    const loop = [...services, ...services];
    const marketImages = {
      "Oil & Gas": "/images/service-photos/oil.webp",
      "Energy & Power": "/images/service-photos/energy.webp",
      "Industrial & Manufacturing": "/images/service-photos/industrial.webp",
      "Marine & Offshore": "/images/service-photos/marine.webp",
      "Construction & Process Industries": "/images/service-photos/const.webp"
    };
    const clientImages = [
      { src: "/clients/ap.webp", alt: "AP" },
      { src: "/clients/cg.webp", alt: "CG" },
      { src: "/clients/chevron.webp", alt: "Chevron" },
      { src: "/clients/daewoo.webp", alt: "Daewoo" },
      { src: "/clients/dangote.webp", alt: "Dangote" },
      { src: "/clients/daystar.webp", alt: "Daystar" },
      { src: "/clients/fmn.webp", alt: "FMN" },
      { src: "/clients/heritage.webp", alt: "Heritage" },
      { src: "/clients/midwestern.webp", alt: "Midwestern" },
      { src: "/clients/namdock.webp", alt: "Namdock" },
      { src: "/clients/nlng.webp", alt: "NLNG" },
      { src: "/clients/pace.webp", alt: "Pace" },
      { src: "/clients/seplat.webp", alt: "Seplat" },
      { src: "/clients/shell.webp", alt: "Shell" },
      { src: "/clients/spie.webp", alt: "SPIE" },
      { src: "/clients/stac.webp", alt: "STAC" },
      { src: "/clients/waltersmith.webp", alt: "Waltersmith" }
    ];
    const steps = [
      ["Share your requirement", "Tell us the application, site, specifications and timeline."],
      ["We review and clarify", "Our team reviews the scope and may ask follow-up questions."],
      ["We coordinate options", "Suitable equipment and specialist support are identified."],
      ["You receive a response", "We come back to you using the details you provided."]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroArt = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_SectionHead = _sfc_main$1;
      const _component_AppImage = _sfc_main$2;
      const _component_ProjectFeature = _sfc_main$3;
      const _component_CtaBand = __nuxt_component_3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-756b89e6><section class="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-dark text-white" data-v-756b89e6>`);
      {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_HeroArt, null, null, _parent));
      _push(`<div class="container-x relative flex flex-1 items-center pb-10 pt-44" data-v-756b89e6><div class="max-w-4xl" data-v-756b89e6><p class="eyebrow animate-fade-up !text-white" data-v-756b89e6>Lagos · Walvis Bay</p><h1 class="animate-fade-up text-5xl !text-white sm:text-7xl lg:text-[6.5rem]" style="${ssrRenderStyle({ "animation-delay": ".1s" })}" data-v-756b89e6> Engineering and technical solutions for <span class="text-brand-red" data-v-756b89e6>critical operations</span></h1><p class="mt-7 max-w-xl animate-fade-up text-lg text-white/75" style="${ssrRenderStyle({ "animation-delay": ".25s" })}" data-v-756b89e6> We support industrial operators with specialised equipment, engineering services and technical solutions designed around operational requirements. </p><div class="mt-10 flex animate-fade-up flex-wrap gap-4" style="${ssrRenderStyle({ "animation-delay": ".4s" })}" data-v-756b89e6><span class="btn btn-red cursor-default" data-v-756b89e6>Discuss Your Requirements</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "btn btn-ghost"
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
      _push(`</div></div></div><div class="container-x relative mb-8 grid animate-fade-up border-t border-white/15 sm:grid-cols-2" style="${ssrRenderStyle({ "animation-delay": ".6s" })}" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/oem",
        class: "group border-white/15 py-5 sm:border-r sm:pr-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-xs uppercase tracking-widest text-white/50" data-v-756b89e6${_scopeId}>Technologies</span><span class="mt-1 flex items-center justify-between font-display text-2xl uppercase" data-v-756b89e6${_scopeId}>Specialised OEM <span class="transition group-hover:translate-x-2" data-v-756b89e6${_scopeId}>→</span></span>`);
          } else {
            return [
              createVNode("span", { class: "text-xs uppercase tracking-widest text-white/50" }, "Technologies"),
              createVNode("span", { class: "mt-1 flex items-center justify-between font-display text-2xl uppercase" }, [
                createTextVNode("Specialised OEM "),
                createVNode("span", { class: "transition group-hover:translate-x-2" }, "→")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", `tel:${("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone.replace(/\s/g, "")}`)} class="group py-5 sm:pl-6" data-v-756b89e6><span class="text-xs uppercase tracking-widest text-white/50" data-v-756b89e6>Speak to our team</span><span class="mt-1 flex items-center justify-between font-display text-2xl uppercase" data-v-756b89e6>${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).ng.phone)} <span class="transition group-hover:translate-x-2" data-v-756b89e6>→</span></span></a></div></section><div class="overflow-hidden bg-brand-red py-3.5 text-white" data-v-756b89e6><div class="flex w-max animate-marquee whitespace-nowrap font-display text-xl font-semibold uppercase tracking-wider" data-v-756b89e6><!--[-->`);
      ssrRenderList(loop, (s, i) => {
        _push(`<span class="pr-10" data-v-756b89e6>▲ ${ssrInterpolate(s.name.split(" (")[0])}</span>`);
      });
      _push(`<!--]--></div></div><section class="section" data-v-756b89e6><div class="container-x grid items-center gap-16 lg:grid-cols-2" data-v-756b89e6><div${ssrRenderAttrs(mergeProps({ class: "relative" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-756b89e6><img${ssrRenderAttr("src", _imports_0)} alt="T Triangle Limited industrial workshop and technical equipment" class="aspect-[4/5] sm:aspect-[5/4] w-full object-cover" data-v-756b89e6><div class="absolute -bottom-6 -right-6 hidden h-32 w-32 bg-brand-red sm:block" style="${ssrRenderStyle({ "clip-path": "polygon(100% 0,100% 100%,0 100%)" })}" data-v-756b89e6></div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal, 150))} data-v-756b89e6><p class="eyebrow" data-v-756b89e6>Who we are</p><h2 class="max-w-xl text-4xl !text-brand sm:text-6xl" data-v-756b89e6>The right technical support makes the difference</h2><p class="mt-6 max-w-xl text-lg leading-8 text-slate-700" data-v-756b89e6>When equipment performance, safe operations and project schedules matter, T Triangle Limited works with clients to understand their applications, clarify requirements and coordinate suitable equipment and specialist services for the operating environment.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "btn btn-outline mt-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us →`);
          } else {
            return [
              createTextVNode("About Us →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="services" class="section bg-brand-mist" data-v-756b89e6><div class="container-x" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: "Our Core Services",
        title: "Nine service areas. One dependable partner."
      }, null, _parent));
      _push(`<div class="grid gap-10 lg:grid-cols-[1fr_1.05fr]" data-v-756b89e6><ul class="border-t border-slate-300" data-v-756b89e6><!--[-->`);
      ssrRenderList("services" in _ctx ? _ctx.services : unref(services), (s, i) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: s.slug,
          class: "border-b border-slate-300"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 40)))} data-v-756b89e6><button type="button"${ssrRenderAttr("aria-pressed", unref(active) === i)} class="group flex w-full items-center gap-5 py-5 text-left" data-v-756b89e6><span class="${ssrRenderClass(["font-display text-3xl font-bold transition", unref(active) === i ? "text-brand-red" : "text-slate-300"])}" data-v-756b89e6>0${ssrInterpolate(i + 1)}</span><span class="${ssrRenderClass(["flex-1 font-display text-2xl font-semibold uppercase transition sm:text-3xl", unref(active) === i ? "translate-x-2 text-brand-dark" : "text-slate-500"])}" data-v-756b89e6>${ssrInterpolate(s.name.split(" (")[0])}</span><span class="${ssrRenderClass(["transition", unref(active) === i ? "translate-x-0 text-brand-red opacity-100" : "-translate-x-3 opacity-0"])}" data-v-756b89e6>→</span></button></li>`);
      });
      _push(`<!--]--></ul><div data-v-756b89e6><div class="sticky top-28" data-v-756b89e6><div class="overflow-hidden bg-white shadow-xl" data-v-756b89e6><img${ssrRenderAttr("src", ("services" in _ctx ? _ctx.services : unref(services))[unref(active)].image)}${ssrRenderAttr("alt", ("services" in _ctx ? _ctx.services : unref(services))[unref(active)].name)} class="aspect-[16/10] w-full object-cover" data-v-756b89e6><div class="p-8" data-v-756b89e6><p class="font-display text-lg font-bold text-brand-red" data-v-756b89e6>0${ssrInterpolate(unref(active) + 1)}</p><h3 class="mt-1 text-2xl" data-v-756b89e6>${ssrInterpolate(("services" in _ctx ? _ctx.services : unref(services))[unref(active)].name)}</h3><p class="mt-3" data-v-756b89e6>${ssrInterpolate(("services" in _ctx ? _ctx.services : unref(services))[unref(active)].short)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/services/${("services" in _ctx ? _ctx.services : unref(services))[unref(active)].slug}`,
        class: "btn btn-red mt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Explore Service →`);
          } else {
            return [
              createTextVNode("Explore Service →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></section><section class="relative overflow-hidden bg-brand-dark py-24 text-white sm:py-28" data-v-756b89e6><div class="blueprint absolute inset-0 opacity-60" data-v-756b89e6></div><div class="container-x relative" data-v-756b89e6><div${ssrRenderAttrs(mergeProps({ class: "mb-14 max-w-3xl" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))} data-v-756b89e6><p class="eyebrow !text-white" data-v-756b89e6>Why work with us</p><h2 class="text-4xl !text-white sm:text-6xl" data-v-756b89e6>Why work with T Triangle</h2></div><div class="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5" data-v-756b89e6><!--[-->`);
      ssrRenderList("why" in _ctx ? _ctx.why : unref(why), (w, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: w[0],
          class: "group bg-brand-dark p-7 transition hover:bg-brand"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 90)))} data-v-756b89e6><span class="font-display text-5xl font-bold text-brand-red" data-v-756b89e6>0${ssrInterpolate(i + 1)}</span><h3 class="mt-4 text-lg !text-white" data-v-756b89e6>${ssrInterpolate(w[0])}</h3><p class="mt-3 text-sm text-white/65" data-v-756b89e6>${ssrInterpolate(w[1])}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" data-v-756b89e6><div class="container-x" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: "Our Market Focus",
        title: "Industries we serve",
        text: "Industrial environments where equipment reliability, safe work practices and dependable technical support matter."
      }, null, _parent));
      _push(`<div class="flex flex-col gap-3 lg:h-[28rem] lg:flex-row" data-v-756b89e6><!--[-->`);
      ssrRenderList("markets" in _ctx ? _ctx.markets : unref(markets), (m, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: m,
          to: "/about#market-focus",
          class: "group relative h-52 overflow-hidden lg:h-auto lg:flex-1 lg:transition-all lg:duration-700 lg:hover:flex-[2.4]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute inset-0" data-v-756b89e6${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AppImage, {
                class: "h-full w-full",
                src: marketImages[m],
                alt: m
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" data-v-756b89e6${_scopeId}></div><div class="absolute bottom-0 p-6 text-white" data-v-756b89e6${_scopeId}><span class="font-display text-lg font-bold text-brand-red" data-v-756b89e6${_scopeId}>0${ssrInterpolate(i + 1)}</span><h3 class="font-display text-3xl font-semibold uppercase leading-none !text-white" data-v-756b89e6${_scopeId}>${ssrInterpolate(m)}</h3><span class="mt-3 block translate-y-2 text-sm opacity-100 transition duration-500 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100" data-v-756b89e6${_scopeId}>Explore →</span></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute inset-0" }, [
                  createVNode(_component_AppImage, {
                    class: "h-full w-full",
                    src: marketImages[m],
                    alt: m
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" }),
                createVNode("div", { class: "absolute bottom-0 p-6 text-white" }, [
                  createVNode("span", { class: "font-display text-lg font-bold text-brand-red" }, "0" + toDisplayString(i + 1), 1),
                  createVNode("h3", { class: "font-display text-3xl font-semibold uppercase leading-none !text-white" }, toDisplayString(m), 1),
                  createVNode("span", { class: "mt-3 block translate-y-2 text-sm opacity-100 transition duration-500 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100" }, "Explore →")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="section bg-brand-mist" data-v-756b89e6><div class="container-x" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: "How it works",
        title: "From enquiry to response"
      }, null, _parent));
      _push(`<div class="grid gap-8 md:grid-cols-4" data-v-756b89e6><!--[-->`);
      ssrRenderList(steps, (st, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: st[0],
          class: "relative border-t-4 border-brand pt-6"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 100)))} data-v-756b89e6><span class="font-display text-6xl font-bold text-brand/15" data-v-756b89e6>0${ssrInterpolate(i + 1)}</span><h3 class="mt-2 text-lg" data-v-756b89e6>${ssrInterpolate(st[0])}</h3><p class="mt-2 text-sm" data-v-756b89e6>${ssrInterpolate(st[1])}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" data-v-756b89e6><div class="container-x" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_SectionHead, {
        center: "",
        eyebrow: "Our OEM & Technology Partners",
        title: "Connecting you with the right technology",
        text: "We work with relevant OEMs and technology partners to connect clients with equipment and specialised solutions suited to their applications."
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" data-v-756b89e6><!--[-->`);
      ssrRenderList("partners" in _ctx ? _ctx.partners : unref(partners), (p, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          key: p.slug,
          to: `/oem/${p.slug}`,
          class: "group grid h-28 place-items-center border border-slate-200 p-4 transition hover:border-brand hover:shadow-lg"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 70)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", p.image)}${ssrRenderAttr("alt", p.name)} loading="lazy" class="max-h-full max-w-full object-contain" data-v-756b89e6${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: p.image,
                  alt: p.name,
                  loading: "lazy",
                  class: "max-h-full max-w-full object-contain"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="mt-8 text-center" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/partners",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See more`);
          } else {
            return [
              createTextVNode("See more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="projects" class="section bg-brand-mist" data-v-756b89e6><div class="container-x" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_SectionHead, {
        eyebrow: "Projects",
        title: "Selected project work",
        text: "Project assignments across inspection, valve supply, safe isolation, construction and offshore operations."
      }, null, _parent));
      _push(`<div class="space-y-16 sm:space-y-20" data-v-756b89e6><!--[-->`);
      ssrRenderList(("projects" in _ctx ? _ctx.projects : unref(projects)).slice(0, 3), (project, i) => {
        _push(ssrRenderComponent(_component_ProjectFeature, {
          key: project.slug,
          project,
          index: i
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-16 flex flex-col gap-6 bg-brand-dark p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10" data-v-756b89e6><div class="max-w-2xl" data-v-756b89e6><p class="eyebrow !text-white" data-v-756b89e6>More project work</p><h3 class="font-display text-3xl font-semibold uppercase !text-white sm:text-4xl" data-v-756b89e6>Explore the full project portfolio</h3><p class="mt-3 text-white/70" data-v-756b89e6>See more examples of the technical applications and project support we provide.</p></div>`);
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
      _push(`</div></div></section><section class="section overflow-hidden" data-v-756b89e6><div class="container-x" data-v-756b89e6><h2 class="text-center text-4xl sm:text-5xl" data-v-756b89e6>Our Clients</h2></div><div class="clients-viewport mt-10 overflow-hidden" data-v-756b89e6><div class="clients-track flex w-max gap-4" data-v-756b89e6><!--[-->`);
      ssrRenderList([...clientImages, ...clientImages], (image, i) => {
        _push(`<div${ssrRenderAttr("aria-hidden", i >= clientImages.length)} class="grid h-32 w-56 shrink-0 place-items-center border border-slate-200 bg-white p-5" data-v-756b89e6><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", i < clientImages.length ? image.alt : "")} loading="lazy" class="max-h-full max-w-full object-contain" data-v-756b89e6></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section" data-v-756b89e6><div class="container-x" data-v-756b89e6><div class="mb-14 flex flex-wrap items-end justify-between gap-4" data-v-756b89e6>`);
      _push(ssrRenderComponent(_component_SectionHead, {
        class: "!mb-0",
        eyebrow: "Insights",
        title: "Technical knowledge for better decisions"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/insights",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All Insights →`);
          } else {
            return [
              createTextVNode("All Insights →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-6 md:grid-cols-3" data-v-756b89e6><!--[-->`);
      ssrRenderList(("insights" in _ctx ? _ctx.insights : unref(insights)).slice(0, 3), (a, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          key: a.slug,
          to: `/insights/${a.slug}`,
          class: "group flex flex-col overflow-hidden border border-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 90)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="overflow-hidden" data-v-756b89e6${_scopeId}><img${ssrRenderAttr("src", a.image)}${ssrRenderAttr("alt", a.imageAlt)} loading="lazy" class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" data-v-756b89e6${_scopeId}></div><p class="px-6 pt-6 text-xs font-semibold uppercase tracking-widest text-brand-red" data-v-756b89e6${_scopeId}>${ssrInterpolate(a.cat)} <span class="ml-2 text-slate-500" data-v-756b89e6${_scopeId}>${ssrInterpolate(a.readingTime)}</span></p><h3 class="mt-4 px-6 font-display text-2xl font-semibold uppercase leading-tight transition group-hover:text-brand" data-v-756b89e6${_scopeId}>${ssrInterpolate(a.title)}</h3><p class="mt-3 flex-1 px-6 text-sm leading-6 text-slate-600" data-v-756b89e6${_scopeId}>${ssrInterpolate(a.excerpt)}</p><span class="mt-6 inline-block text-sm font-semibold text-brand" data-v-756b89e6${_scopeId}>Read More →</span>`);
            } else {
              return [
                createVNode("div", { class: "overflow-hidden" }, [
                  createVNode("img", {
                    src: a.image,
                    alt: a.imageAlt,
                    loading: "lazy",
                    class: "aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("p", { class: "px-6 pt-6 text-xs font-semibold uppercase tracking-widest text-brand-red" }, [
                  createTextVNode(toDisplayString(a.cat) + " ", 1),
                  createVNode("span", { class: "ml-2 text-slate-500" }, toDisplayString(a.readingTime), 1)
                ]),
                createVNode("h3", { class: "mt-4 px-6 font-display text-2xl font-semibold uppercase leading-tight transition group-hover:text-brand" }, toDisplayString(a.title), 1),
                createVNode("p", { class: "mt-3 flex-1 px-6 text-sm leading-6 text-slate-600" }, toDisplayString(a.excerpt), 1),
                createVNode("span", { class: "mt-6 inline-block text-sm font-semibold text-brand" }, "Read More →")
              ];
            }
          }),
          _: 2
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-756b89e6"]]);
export {
  index as default
};
//# sourceMappingURL=index-InO0z16G.js.map
