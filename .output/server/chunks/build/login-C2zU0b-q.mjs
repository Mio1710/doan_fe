import { defineComponent, reactive, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './AppTextField-DdQ0O2ei.mjs';
import { A as AppForm } from './AppForm-OpzBJjUC.mjs';
import { _ as _sfc_main$2 } from './AppPassword-Ci7nib3I.mjs';
import { b6 as useAuth, b as useNuxtApp, V as VBtn } from './server.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VCheckbox } from './VCheckbox-BTMe7TyB.mjs';
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
import './VCheckboxBtn-DaFH5r1c.mjs';

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
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "m-auto w-100 px-6 py-8",
        "max-width": "500",
        "min-width": "344"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AppForm, null, {
              default: withCtx(({ handleSubmit }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    modelValue: unref(form).maso,
                    "onUpdate:modelValue": ($event) => unref(form).maso = $event,
                    class: "mb-5",
                    label: "M\xE3 s\u1ED1",
                    name: "M\xE3 s\u1ED1",
                    rules: "required"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    modelValue: unref(form).matkhau,
                    "onUpdate:modelValue": ($event) => unref(form).matkhau = $event,
                    label: "M\u1EADt kh\u1EA9u",
                    name: "M\u1EADt kh\u1EA9u",
                    rules: "required",
                    type: "password"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(form).type,
                    "onUpdate:modelValue": ($event) => unref(form).type = $event,
                    label: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    name: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    value: "teacher"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    block: "",
                    color: "success",
                    loading: unref(loading),
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
                      modelValue: unref(form).maso,
                      "onUpdate:modelValue": ($event) => unref(form).maso = $event,
                      class: "mb-5",
                      label: "M\xE3 s\u1ED1",
                      name: "M\xE3 s\u1ED1",
                      rules: "required"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$2, {
                      modelValue: unref(form).matkhau,
                      "onUpdate:modelValue": ($event) => unref(form).matkhau = $event,
                      label: "M\u1EADt kh\u1EA9u",
                      name: "M\u1EADt kh\u1EA9u",
                      rules: "required",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCheckbox, {
                      modelValue: unref(form).type,
                      "onUpdate:modelValue": ($event) => unref(form).type = $event,
                      label: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                      name: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                      value: "teacher"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      block: "",
                      color: "success",
                      loading: unref(loading),
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
              createVNode(AppForm, null, {
                default: withCtx(({ handleSubmit }) => [
                  createVNode(_sfc_main$1, {
                    modelValue: unref(form).maso,
                    "onUpdate:modelValue": ($event) => unref(form).maso = $event,
                    class: "mb-5",
                    label: "M\xE3 s\u1ED1",
                    name: "M\xE3 s\u1ED1",
                    rules: "required"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    modelValue: unref(form).matkhau,
                    "onUpdate:modelValue": ($event) => unref(form).matkhau = $event,
                    label: "M\u1EADt kh\u1EA9u",
                    name: "M\u1EADt kh\u1EA9u",
                    rules: "required",
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(form).type,
                    "onUpdate:modelValue": ($event) => unref(form).type = $event,
                    label: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    name: "B\u1EA1n l\xE0 gi\xE1o vi\xEAn",
                    value: "teacher"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VBtn, {
                    block: "",
                    color: "success",
                    loading: unref(loading),
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-C2zU0b-q.mjs.map
