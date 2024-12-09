import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, isRef, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { serialize } from 'object-to-formdata';
import { b as useNuxtApp, V as VBtn } from './server.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VDivider } from './VDivider-DqGd8YoX.mjs';
import { V as VFileInput } from './VFileInput-D2-gG533.mjs';
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
import './VChip-LjVjlGI_.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "student",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api, $toast } = useNuxtApp();
    const importTeacher = () => {
      $api.teacher.importUser(serialize({ file: file.value })).then(() => {
        $toast.success("Import gi\xE1o vi\xEAn th\xE0nh c\xF4ng");
      });
    };
    const importStudentTopic = () => {
      console.log("Import student topic");
    };
    const importStudentCompany = () => {
      console.log("Import student company");
    };
    const type = ref({});
    const listType = ref([
      {
        key: "teacher",
        color: "success",
        label: "Gi\xE1o vi\xEAn",
        action: importTeacher,
        template: "teacher_template.xlsx"
      },
      {
        key: "student_topic",
        color: "blue-lighten-1",
        label: "Sinh vi\xEAn \u0111\u1EC1 t\xE0i",
        action: importStudentTopic,
        template: "student_topic_template.xlsx"
      },
      {
        key: "student_company",
        color: "warning",
        label: "Sinh vi\xEAn doanh nghi\u1EC7p",
        action: importStudentCompany,
        template: "student_company_template.xlsx"
      }
    ]);
    const file = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Import d\u1EEF li\u1EC7u</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><div class="text-h5 mb-4"${_scopeId}>Vui l\xF2ng ch\u1ECDn lo\u1EA1i d\u1EEF li\u1EC7u</div><div class="d-flex justify-center flex-wrap gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(listType), (item, index) => {
              _push2(ssrRenderComponent(VBtn, {
                key: index,
                color: item.color,
                variant: unref(type).key == item.key ? "elevated" : "outlined",
                onClick: ($event) => type.value = item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (unref(type).key) {
              _push2(`<div class="text-center mt-5"${_scopeId}>`);
              _push2(ssrRenderComponent(VDivider, { class: "mb-5" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>B\u1EA1n \u0111ang import d\u1EEF li\u1EC7u cho:</div><span class="${ssrRenderClass("text-h6 text-uppercase font-weight-bold text-" + unref(type).color)}"${_scopeId}>${ssrInterpolate(unref(type).label)}</span><div class="mt-5"${_scopeId}> T\u1EA3i xu\u1ED1ng m\u1EABu import d\u1EEF li\u1EC7u: <a download${ssrRenderAttr("href", "/files/" + unref(type).template)} target="_blank"${_scopeId}>download</a></div><div class="mt-4"${_scopeId}><div class="max-w-[520px] ma-auto d-flex"${_scopeId}>`);
              _push2(ssrRenderComponent(VFileInput, {
                modelValue: unref(file),
                "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
                accept: ".xlsx",
                class: "w-full mr-4",
                label: "File d\u1EEF li\u1EC7u",
                variant: "outlined"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                color: "success",
                disabled: !unref(file),
                onClick: unref(type).action
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Import`);
                  } else {
                    return [
                      createTextVNode("Import")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("div", { class: "text-h5 mb-4" }, "Vui l\xF2ng ch\u1ECDn lo\u1EA1i d\u1EEF li\u1EC7u"),
                createVNode("div", { class: "d-flex justify-center flex-wrap gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(listType), (item, index) => {
                    return openBlock(), createBlock(VBtn, {
                      key: index,
                      color: item.color,
                      variant: unref(type).key == item.key ? "elevated" : "outlined",
                      onClick: ($event) => type.value = item
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "variant", "onClick"]);
                  }), 128))
                ]),
                unref(type).key ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-center mt-5"
                }, [
                  createVNode(VDivider, { class: "mb-5" }),
                  createVNode("div", null, "B\u1EA1n \u0111ang import d\u1EEF li\u1EC7u cho:"),
                  createVNode("span", {
                    class: "text-h6 text-uppercase font-weight-bold text-" + unref(type).color
                  }, toDisplayString(unref(type).label), 3),
                  createVNode("div", { class: "mt-5" }, [
                    createTextVNode(" T\u1EA3i xu\u1ED1ng m\u1EABu import d\u1EEF li\u1EC7u: "),
                    createVNode("a", {
                      download: "",
                      href: "/files/" + unref(type).template,
                      target: "_blank"
                    }, "download", 8, ["href"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode("div", { class: "max-w-[520px] ma-auto d-flex" }, [
                      createVNode(VFileInput, {
                        modelValue: unref(file),
                        "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
                        accept: ".xlsx",
                        class: "w-full mr-4",
                        label: "File d\u1EEF li\u1EC7u",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VBtn, {
                        color: "success",
                        disabled: !unref(file),
                        onClick: unref(type).action
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Import")
                        ]),
                        _: 1
                      }, 8, ["disabled", "onClick"])
                    ])
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/faculty/student.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=student-l0lv8yWx.mjs.map
