import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VCard, b as VCardTitle, a as VCardText } from './VCard-DOF4acQr.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="text-lg py-2 bottom-border">Th\xF4ng b\xE1o th\u1EF1c t\u1EADp</div><div class="border border-solid border-gray-400 p-3">`);
  _push(ssrRenderComponent(VCard, {
    class: "mx-auto",
    color: "warning",
    variant: "outlined"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "text-decoration-underline" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Th\xF4ng b\xE1o`);
            } else {
              return [
                createTextVNode("Th\xF4ng b\xE1o")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardText, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Sinh vi\xEAn kh\xF4ng c\xF3 \u0111\u0103ng k\xFD h\u1ECDc ph\u1EA7n th\u1EF1c t\u1EADp trong h\u1ECDc k\u1EF3 hi\u1EC7n t\u1EA1i. Sinh vi\xEAn c\xF3 th\u1EC3 email v\u1EC1 phuoccse@gmail.com \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3. `);
            } else {
              return [
                createTextVNode(" Sinh vi\xEAn kh\xF4ng c\xF3 \u0111\u0103ng k\xFD h\u1ECDc ph\u1EA7n th\u1EF1c t\u1EADp trong h\u1ECDc k\u1EF3 hi\u1EC7n t\u1EA1i. Sinh vi\xEAn c\xF3 th\u1EC3 email v\u1EC1 phuoccse@gmail.com \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { class: "text-decoration-underline" }, {
            default: withCtx(() => [
              createTextVNode("Th\xF4ng b\xE1o")
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createTextVNode(" Sinh vi\xEAn kh\xF4ng c\xF3 \u0111\u0103ng k\xFD h\u1ECDc ph\u1EA7n th\u1EF1c t\u1EADp trong h\u1ECDc k\u1EF3 hi\u1EC7n t\u1EA1i. Sinh vi\xEAn c\xF3 th\u1EC3 email v\u1EC1 phuoccse@gmail.com \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3. ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/project/molecules/Notice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Notice = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">\u0110\u0103ng k\xFD th\u1EF1c t\u1EADp doanh nghi\u1EC7p</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Notice, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Notice)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=company-CecM9PDN.mjs.map
