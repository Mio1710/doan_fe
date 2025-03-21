import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'requrl';
import 'axios';
import '@vee-validate/rules';
import '@vee-validate/i18n';
import 'date-fns';
import 'vue-query';
import 'vue3-toastify';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact-teacher",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Li\xEAn h\u1EC7 gi\u1EA3ng vi\xEAn</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><span class="font-weight-bold"${_scopeId}>Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn:</span></div><div${_scopeId}><span class="font-weight-bold"${_scopeId}>Gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n:</span></div><div${_scopeId}><span class="font-weight-bold"${_scopeId}>Gi\u1EA3ng vi\xEAn h\u1ED9i \u0111\u1ED3ng/poster:</span></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("span", { class: "font-weight-bold" }, "Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn:")
              ]),
              createVNode("div", null, [
                createVNode("span", { class: "font-weight-bold" }, "Gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n:")
              ]),
              createVNode("div", null, [
                createVNode("span", { class: "font-weight-bold" }, "Gi\u1EA3ng vi\xEAn h\u1ED9i \u0111\u1ED3ng/poster:")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/contact-teacher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-teacher-D2RHgWkT.mjs.map
