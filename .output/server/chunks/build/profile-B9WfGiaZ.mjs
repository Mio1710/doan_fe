import { defineComponent, reactive, ref, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BQWYxybX.mjs';
import { _ as _sfc_main$1 } from './AppTextField-DdQ0O2ei.mjs';
import { a_ as useAuth, b as useNuxtApp, V as VBtn } from './server.mjs';
import { V as VCard, d as VAvatar, e as VImg } from './VCard-DOF4acQr.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, getSession } = useAuth();
    const { $toast, $api } = useNuxtApp();
    const form = reactive({
      std: null
    });
    const onUpdatePhone = () => {
      isUpdatePhone.value = true;
      form.std = data.value.phone;
    };
    const isUpdatePhone = ref(false);
    const onSubmit = async () => {
      const regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
      const isValid = regex.test(form.std);
      if (!isValid) {
        $toast.error("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7");
      } else {
        $api.auth.updateProfile({ phone: form.std });
        await getSession();
        (void 0).location.reload();
        $toast.success("C\u1EADp nh\u1EADt s\u1ED1 \u0111i\u1EC7n tho\u1EA1i th\xE0nh c\xF4ng");
        isUpdatePhone.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "w-100 px-6 py-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="text-lg font-bold text-uppercase"${_scopeId}>Th\xF4ng tin c\xE1 nh\xE2n</div><div class="w-1/2 min-w-[500px] m-auto d-flex flex-column gap-4 justify-center h-full"${_scopeId}><div class="text-center w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(VAvatar, { size: "100" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    alt: "John",
                    src: _imports_0
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      alt: "John",
                      src: _imports_0
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="d-flex"${_scopeId}><div class="w-[200px]"${_scopeId}>H\u1ECD v\xE0 t\xEAn:</div><div${_scopeId}>${ssrInterpolate(unref(data).hodem)} ${ssrInterpolate(unref(data).ten)}</div></div>`);
            if ((_a = unref(data)) == null ? void 0 : _a.roles.includes("student")) {
              _push2(`<div class="d-flex"${_scopeId}><div class="w-[200px]"${_scopeId}>L\u1EDBp:</div><div${_scopeId}>${ssrInterpolate(unref(data).lop)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="d-flex"${_scopeId}><div class="w-[200px]"${_scopeId}>Email:</div><div${_scopeId}>${ssrInterpolate(unref(data).email)}</div></div><div class="d-flex align-center"${_scopeId}><div class="w-[200px]"${_scopeId}>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i li\xEAn h\u1EC7:</div><div class="d-flex items-center"${_scopeId}>`);
            if (!unref(isUpdatePhone)) {
              _push2(`<div class="mr-2"${_scopeId}>${ssrInterpolate(unref(data).phone)}</div>`);
            } else {
              _push2(ssrRenderComponent(_sfc_main$1, {
                modelValue: unref(form).std,
                "onUpdate:modelValue": ($event) => unref(form).std = $event,
                class: "w-[200px] mr-2",
                label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                type: "number"
              }, null, _parent2, _scopeId));
            }
            if (!unref(isUpdatePhone)) {
              _push2(ssrRenderComponent(VBtn, {
                color: "success",
                density: "compact",
                icon: "mdi-pencil",
                variant: "outlined",
                onClick: onUpdatePhone
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="d-flex mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(VBtn, {
                class: "mr-2",
                color: "error",
                density: "compact",
                icon: "mdi-close",
                variant: "outlined",
                onClick: ($event) => isUpdatePhone.value = false
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                color: "success",
                density: "compact",
                icon: "mdi-content-save-check",
                variant: "outlined",
                onClick: onSubmit
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-lg font-bold text-uppercase" }, "Th\xF4ng tin c\xE1 nh\xE2n"),
              createVNode("div", { class: "w-1/2 min-w-[500px] m-auto d-flex flex-column gap-4 justify-center h-full" }, [
                createVNode("div", { class: "text-center w-full" }, [
                  createVNode(VAvatar, { size: "100" }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        alt: "John",
                        src: _imports_0
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "d-flex" }, [
                  createVNode("div", { class: "w-[200px]" }, "H\u1ECD v\xE0 t\xEAn:"),
                  createVNode("div", null, toDisplayString(unref(data).hodem) + " " + toDisplayString(unref(data).ten), 1)
                ]),
                ((_b = unref(data)) == null ? void 0 : _b.roles.includes("student")) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex"
                }, [
                  createVNode("div", { class: "w-[200px]" }, "L\u1EDBp:"),
                  createVNode("div", null, toDisplayString(unref(data).lop), 1)
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "d-flex" }, [
                  createVNode("div", { class: "w-[200px]" }, "Email:"),
                  createVNode("div", null, toDisplayString(unref(data).email), 1)
                ]),
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode("div", { class: "w-[200px]" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i li\xEAn h\u1EC7:"),
                  createVNode("div", { class: "d-flex items-center" }, [
                    !unref(isUpdatePhone) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mr-2"
                    }, toDisplayString(unref(data).phone), 1)) : (openBlock(), createBlock(_sfc_main$1, {
                      key: 1,
                      modelValue: unref(form).std,
                      "onUpdate:modelValue": ($event) => unref(form).std = $event,
                      class: "w-[200px] mr-2",
                      label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                      name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                    !unref(isUpdatePhone) ? (openBlock(), createBlock(VBtn, {
                      key: 2,
                      color: "success",
                      density: "compact",
                      icon: "mdi-pencil",
                      variant: "outlined",
                      onClick: onUpdatePhone
                    })) : (openBlock(), createBlock("div", {
                      key: 3,
                      class: "d-flex mb-4"
                    }, [
                      createVNode(VBtn, {
                        class: "mr-2",
                        color: "error",
                        density: "compact",
                        icon: "mdi-close",
                        variant: "outlined",
                        onClick: ($event) => isUpdatePhone.value = false
                      }, null, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "success",
                        density: "compact",
                        icon: "mdi-content-save-check",
                        variant: "outlined",
                        onClick: onSubmit
                      })
                    ]))
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-B9WfGiaZ.mjs.map
