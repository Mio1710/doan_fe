import { useSSRContext, defineComponent, reactive, ref, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './AppTextField-DdQ0O2ei.mjs';
import { A as AppForm } from './AppForm-OpzBJjUC.mjs';
import { _ as _sfc_main$2 } from './AppPassword-Ci7nib3I.mjs';
import { _ as _export_sfc, a_ as useAuth, b as useNuxtApp, V as VBtn } from './server.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VCheckbox } from './VCheckbox-BTMe7TyB.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
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
import './VCheckboxBtn-DaFH5r1c.mjs';

const _imports_0 = publicAssetsURL("/images/logo_iuh.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      maso: "",
      matkhau: "",
      type: null
    });
    const loading = ref(false);
    const { signIn } = useAuth();
    const { $toast } = useNuxtApp();
    const onSubmit = () => {
      loading.value = true;
      signIn(form, {
        callbackUrl: "/",
        redirect: true
      }).catch(() => {
        $toast.error("\u0110\u0103ng nh\u1EADp kh\xF4ng th\xE0nh c\xF4ng. Vui l\xF2ng th\u1EED l\u1EA1i!");
      }).finally(() => {
        loading.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-6a0566f5><header class="header" data-v-6a0566f5><img${ssrRenderAttr("src", _imports_0)} alt="Logo IUH" class="logo" data-v-6a0566f5><div class="header-text" data-v-6a0566f5><h1 class="title" data-v-6a0566f5>TR\u01AF\u1EDCNG \u0110\u1EA0I H\u1ECCC C\xD4NG NGHI\u1EC6P TP.H\u1ED2 CH\xCD MINH</h1><h2 class="subtitle" data-v-6a0566f5>H\u1EC6 TH\u1ED0NG QU\u1EA2N L\xDD KHO\xC1 LU\u1EACN - TH\u1EF0C T\u1EACP</h2></div></header><div class="background-image" data-v-6a0566f5>`);
      _push(ssrRenderComponent(VCard, {
        class: "login-form m-auto px-6 py-8",
        "max-width": "600",
        "min-width": "450"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="form-title" data-v-6a0566f5${_scopeId}>\u0110\u0102NG NH\u1EACP H\u1EC6 TH\u1ED0NG</h3>`);
            _push2(ssrRenderComponent(AppForm, null, {
              default: withCtx(({ handleSubmit }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    modelValue: form.maso,
                    "onUpdate:modelValue": ($event) => form.maso = $event,
                    class: "mb-5",
                    label: "M\xE3 s\u1ED1",
                    name: "M\xE3 s\u1ED1",
                    rules: "required"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    modelValue: form.matkhau,
                    "onUpdate:modelValue": ($event) => form.matkhau = $event,
                    label: "M\u1EADt kh\u1EA9u",
                    name: "M\u1EADt kh\u1EA9u",
                    rules: "required",
                    type: "password"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: form.type,
                    "onUpdate:modelValue": ($event) => form.type = $event,
                    label: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    name: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    value: "teacher"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    block: "",
                    color: "success",
                    loading: loading.value,
                    size: "large",
                    variant: "elevated",
                    onClick: ($event) => handleSubmit(onSubmit)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sign In `);
                      } else {
                        return [
                          createTextVNode(" Sign In ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      modelValue: form.maso,
                      "onUpdate:modelValue": ($event) => form.maso = $event,
                      class: "mb-5",
                      label: "M\xE3 s\u1ED1",
                      name: "M\xE3 s\u1ED1",
                      rules: "required"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$2, {
                      modelValue: form.matkhau,
                      "onUpdate:modelValue": ($event) => form.matkhau = $event,
                      label: "M\u1EADt kh\u1EA9u",
                      name: "M\u1EADt kh\u1EA9u",
                      rules: "required",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCheckbox, {
                      modelValue: form.type,
                      "onUpdate:modelValue": ($event) => form.type = $event,
                      label: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                      name: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                      value: "teacher"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      block: "",
                      color: "success",
                      loading: loading.value,
                      size: "large",
                      variant: "elevated",
                      onClick: ($event) => handleSubmit(onSubmit)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign In ")
                      ]),
                      _: 2
                    }, 1032, ["loading", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h3", { class: "form-title" }, "\u0110\u0102NG NH\u1EACP H\u1EC6 TH\u1ED0NG"),
              createVNode(AppForm, null, {
                default: withCtx(({ handleSubmit }) => [
                  createVNode(_sfc_main$1, {
                    modelValue: form.maso,
                    "onUpdate:modelValue": ($event) => form.maso = $event,
                    class: "mb-5",
                    label: "M\xE3 s\u1ED1",
                    name: "M\xE3 s\u1ED1",
                    rules: "required"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    modelValue: form.matkhau,
                    "onUpdate:modelValue": ($event) => form.matkhau = $event,
                    label: "M\u1EADt kh\u1EA9u",
                    name: "M\u1EADt kh\u1EA9u",
                    rules: "required",
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: form.type,
                    "onUpdate:modelValue": ($event) => form.type = $event,
                    label: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    name: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    value: "teacher"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VBtn, {
                    block: "",
                    color: "success",
                    loading: loading.value,
                    size: "large",
                    variant: "elevated",
                    onClick: ($event) => handleSubmit(onSubmit)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign In ")
                    ]),
                    _: 2
                  }, 1032, ["loading", "onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a0566f5"]]);

export { login as default };
//# sourceMappingURL=login-BRmjXk18.mjs.map
