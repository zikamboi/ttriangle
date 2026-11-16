import { s as services, p as partners, c as contact } from './site-DeS5fg6X.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EnquiryForm",
  __ssrInlineRender: true,
  props: {
    preset: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const f = reactive({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      location: "",
      service: props.preset || route.query.service || "",
      technology: "",
      type: "",
      details: "",
      date: "",
      consent: false,
      website: ""
    });
    ref(null);
    const fileError = ref("");
    const status = ref("idle");
    const types = ["Quotation", "Technical consultation", "Maintenance / service", "Equipment rental", "Product procurement", "Project support", "Other"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4 sm:grid-cols-2" }, _attrs))}><input${ssrRenderAttr("value", unref(f).website)} tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" name="website"><input${ssrRenderAttr("value", unref(f).name)} required class="input" placeholder="Full name *"><input${ssrRenderAttr("value", unref(f).company)} class="input" placeholder="Company / organisation"><input${ssrRenderAttr("value", unref(f).email)} required type="email" class="input" placeholder="Work email *"><input${ssrRenderAttr("value", unref(f).phone)} class="input" placeholder="Phone / WhatsApp"><input${ssrRenderAttr("value", unref(f).country)} class="input" placeholder="Country"><input${ssrRenderAttr("value", unref(f).location)} class="input" placeholder="Project / site location"><select class="input"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(f).service) ? ssrLooseContain(unref(f).service, "") : ssrLooseEqual(unref(f).service, "")) ? " selected" : ""}>Service required</option><!--[-->`);
      ssrRenderList("services" in _ctx ? _ctx.services : unref(services), (s) => {
        _push(`<option${ssrRenderAttr("value", s.slug)}${ssrIncludeBooleanAttr(Array.isArray(unref(f).service) ? ssrLooseContain(unref(f).service, s.slug) : ssrLooseEqual(unref(f).service, s.slug)) ? " selected" : ""}>${ssrInterpolate(s.name)}</option>`);
      });
      _push(`<!--]--><option value="specialised-oem"${ssrIncludeBooleanAttr(Array.isArray(unref(f).service) ? ssrLooseContain(unref(f).service, "specialised-oem") : ssrLooseEqual(unref(f).service, "specialised-oem")) ? " selected" : ""}>Specialised OEM Solution</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(unref(f).service) ? ssrLooseContain(unref(f).service, "other") : ssrLooseEqual(unref(f).service, "other")) ? " selected" : ""}>Other / Not sure</option></select><select class="input"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(f).type) ? ssrLooseContain(unref(f).type, "") : ssrLooseEqual(unref(f).type, "")) ? " selected" : ""}>Enquiry type</option><!--[-->`);
      ssrRenderList(types, (t) => {
        _push(`<option${ssrIncludeBooleanAttr(Array.isArray(unref(f).type) ? ssrLooseContain(unref(f).type, null) : ssrLooseEqual(unref(f).type, null)) ? " selected" : ""}>${ssrInterpolate(t)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(f).service === "specialised-oem") {
        _push(`<select class="input"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(f).technology) ? ssrLooseContain(unref(f).technology, "") : ssrLooseEqual(unref(f).technology, "")) ? " selected" : ""}>Technology of interest</option><!--[-->`);
        ssrRenderList("partners" in _ctx ? _ctx.partners : unref(partners), (p) => {
          _push(`<option${ssrRenderAttr("value", p.name)}${ssrIncludeBooleanAttr(Array.isArray(unref(f).technology) ? ssrLooseContain(unref(f).technology, p.name) : ssrLooseEqual(unref(f).technology, p.name)) ? " selected" : ""}>${ssrInterpolate(p.name)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("value", unref(f).date)} type="date" class="input" aria-label="Required date"><textarea rows="5" class="input sm:col-span-2" placeholder="Equipment / application / specification">${ssrInterpolate(unref(f).details)}</textarea><div class="sm:col-span-2"><input type="file" class="input" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg,.zip" aria-label="Upload RFQ, datasheet, drawing or photo"><p class="mt-1 text-xs text-slate-500">Optional: RFQ, datasheet, drawing or photo (max 5 MB).</p>`);
      if (unref(fileError)) {
        _push(`<p class="text-xs text-brand-red">${ssrInterpolate(unref(fileError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><label class="flex items-start gap-3 text-xs text-slate-600 sm:col-span-2"><input${ssrIncludeBooleanAttr(Array.isArray(unref(f).consent) ? ssrLooseContain(unref(f).consent, null) : unref(f).consent) ? " checked" : ""} type="checkbox" required class="mt-0.5"> I agree to T Triangle Limited processing my details to respond to this enquiry. </label><button class="btn btn-red sm:col-span-2"${ssrIncludeBooleanAttr(unref(status) === "sending") ? " disabled" : ""}>${ssrInterpolate(unref(status) === "sending" ? "Sending\u2026" : "Send Enquiry \u2192")}</button>`);
      if (unref(status) === "error") {
        _push(`<p class="text-sm text-brand-red sm:col-span-2">Something went wrong. Please try again or email ${ssrInterpolate(("contact" in _ctx ? _ctx.contact : unref(contact)).email)}.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EnquiryForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=EnquiryForm-CRFN7Nri.mjs.map
