import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VBtn } from './server.mjs';
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
  __name: "invalid-page",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center justify-center d-flex flex-column flex-grow-1 h-full"${_scopeId}><h1 class="text-h3 mb-4"${_scopeId}>Truy c\u1EADp kh\xF4ng h\u1EE3p l\u1EC7</h1><div${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              color: "success",
              onClick: ($event) => _ctx.$router.go(-1)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Quay l\u1EA1i trang ch\u1EE7`);
                } else {
                  return [
                    createTextVNode("Quay l\u1EA1i trang ch\u1EE7")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center justify-center d-flex flex-column flex-grow-1 h-full" }, [
                createVNode("h1", { class: "text-h3 mb-4" }, "Truy c\u1EADp kh\xF4ng h\u1EE3p l\u1EC7"),
                createVNode("div", null, [
                  createVNode(VBtn, {
                    color: "success",
                    onClick: ($event) => _ctx.$router.go(-1)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Quay l\u1EA1i trang ch\u1EE7")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/invalid-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=invalid-page-sVlkOfw3.mjs.map
