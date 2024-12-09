import { defineComponent, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './MyResultDetail-DfxKvWFs.mjs';
import { a_ as useAuth } from './server.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import './FormCard-BTPzcLlL.mjs';
import './AppForm-OpzBJjUC.mjs';
import './VDivider-DqGd8YoX.mjs';
import 'vue-query';
import './VDataTable-XVgdzRb7.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';
import './VChip-LjVjlGI_.mjs';
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
import 'vue3-toastify';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "result",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1" }, _attrs))}><div class="text-lg font-bold">Xem \u0111i\u1EC3m kh\xF3a lu\u1EADn</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-2",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { item: unref(data) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { item: unref(data) }, null, 8, ["item"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=result-BVX6acb0.mjs.map
