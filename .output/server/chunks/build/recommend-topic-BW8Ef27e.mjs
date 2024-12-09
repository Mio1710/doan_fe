import { defineComponent, reactive, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { f as filters } from './topic-status-Bpwoy23i.mjs';
import { _ as _sfc_main$1 } from './AppTextField-DdQ0O2ei.mjs';
import { A as AppForm } from './AppForm-OpzBJjUC.mjs';
import { _ as _sfc_main$2 } from './TeacherAutocomplete-C7_6KVVK.mjs';
import { useQueryClient, useQuery } from 'vue-query';
import { b as useNuxtApp, V as VBtn, f as VSpacer, e as VIcon } from './server.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VChip } from './VChip-LjVjlGI_.mjs';
import './use-get-teachers-B3LLnpVr.mjs';
import 'lodash';
import './parser-bDJLlw8s.mjs';
import './VAutocomplete-BklwJd8l.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
import './VDivider-DqGd8YoX.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';
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

function useGetMyRecommendTopics(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["my-recommend-topic", params],
    () => {
      return $api.topic.getMyRecommendTopic();
    },
    {
      refetchOnWindowFocus: false,
      ...options
    }
  );
  const items = computed(() => {
    var _a;
    return ((_a = query.data.value) == null ? void 0 : _a.data) || null;
  });
  return {
    ...query,
    items
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recommend-topic",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      ten: "",
      description: "",
      requirement: "",
      knowledge: "",
      teacher_id: null
    });
    const { $api, $toast } = useNuxtApp();
    const loading = ref(false);
    const queryClient = useQueryClient();
    const onSubmit = () => {
      loading.value = true;
      if (isUpdate.value) {
        $api.topic.updateRecommendTopic(items.value.id, form).then(() => {
          $toast.success("C\u1EADp nh\u1EADt \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
          queryClient.invalidateQueries("my-recommend-topic");
          isUpdate.value = false;
        }).finally(() => {
          loading.value = false;
        });
        return;
      }
      $api.topic.createRecommendTopic(form).then(() => {
        $toast.success("\u0110\u0103ng k\xFD \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("my-recommend-topic");
      });
    };
    const isUpdate = ref(false);
    const onUpdate = () => {
      isUpdate.value = true;
      form.ten = items.value.ten;
      form.description = items.value.description;
      form.teacher_id = items.value.teacher_id;
      form.knowledge = items.value.knowledge;
    };
    const { items, isLoading, refetch } = useGetMyRecommendTopics();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">\u0110\u1EC1 xu\u1EA5t \u0111\u1EC1 t\xE0i \u0111\u1ED3 \xE1n</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(items) || unref(isUpdate)) {
              _push2(ssrRenderComponent(AppForm, null, {
                default: withCtx(({ handleSubmit }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      modelValue: unref(form).ten,
                      "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                      label: "T\xEAn \u0111\u1EC1 t\xE0i",
                      name: "T\xEAn \u0111\u1EC1 t\xE0i",
                      rules: "required"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      label: "M\xF4 t\u1EA3",
                      name: "M\xF4 t\u1EA3",
                      rules: "required",
                      type: "textarea"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      modelValue: unref(form).teacher_id,
                      "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
                      class: "mb-4",
                      label: "Gi\u1EA3ng vi\xEAn",
                      name: "Gi\u1EA3ng vi\xEAn",
                      rules: "required"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      modelValue: unref(form).knowledge,
                      "onUpdate:modelValue": ($event) => unref(form).knowledge = $event,
                      label: "C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng",
                      name: "C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng",
                      rules: "required"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      color: "success",
                      loading: unref(loading),
                      size: "small",
                      variant: "elevated",
                      onClick: ($event) => handleSubmit(onSubmit)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0110\u0103ng k\xFD `);
                        } else {
                          return [
                            createTextVNode(" \u0110\u0103ng k\xFD ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$1, {
                        modelValue: unref(form).ten,
                        "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                        label: "T\xEAn \u0111\u1EC1 t\xE0i",
                        name: "T\xEAn \u0111\u1EC1 t\xE0i",
                        rules: "required"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$1, {
                        modelValue: unref(form).description,
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        label: "M\xF4 t\u1EA3",
                        name: "M\xF4 t\u1EA3",
                        rules: "required",
                        type: "textarea"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$2, {
                        modelValue: unref(form).teacher_id,
                        "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
                        class: "mb-4",
                        label: "Gi\u1EA3ng vi\xEAn",
                        name: "Gi\u1EA3ng vi\xEAn",
                        rules: "required"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$1, {
                        modelValue: unref(form).knowledge,
                        "onUpdate:modelValue": ($event) => unref(form).knowledge = $event,
                        label: "C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng",
                        name: "C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng",
                        rules: "required"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode(VBtn, {
                          color: "success",
                          loading: unref(loading),
                          size: "small",
                          variant: "elevated",
                          onClick: ($event) => handleSubmit(onSubmit)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0110\u0103ng k\xFD ")
                          ]),
                          _: 2
                        }, 1032, ["loading", "onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div class="d-flex flex-column gap-4"${_scopeId}><div class="d-flex"${_scopeId}>`);
              _push2(ssrRenderComponent(VChip, {
                color: unref(filters).statusColor(unref(items).status),
                size: "small",
                variant: "flat"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(unref(filters).statusType(unref(items).status))}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(unref(filters).statusType(unref(items).status)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
              if (unref(items).status != "approved") {
                _push2(ssrRenderComponent(VBtn, {
                  color: "success",
                  icon: "",
                  size: "x-small",
                  variant: "text",
                  onClick: onUpdate
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VIcon, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`mdi-pencil`);
                          } else {
                            return [
                              createTextVNode("mdi-pencil")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-pencil")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>T\xEAn \u0111\u1EC1 t\xE0i \u0111\u1EC1 xu\u1EA5t:</span><span${_scopeId}>${ssrInterpolate(unref(items).ten)}</span></div><div${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>M\xF4 t\u1EA3:</span><span${_scopeId}>${ssrInterpolate(unref(items).description)}</span></div><div${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>Gi\u1EA3ng vi\xEAn:</span><span${_scopeId}>${ssrInterpolate(unref(items).teacher_id)}</span></div><div${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng:</span><span${_scopeId}>${ssrInterpolate(unref(items).knowledge)}</span></div>`);
              if (unref(items).status == "rejected") {
                _push2(`<div${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>L\xFD do t\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i:</span><span${_scopeId}>${ssrInterpolate(unref(items).reject_reason)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
          } else {
            return [
              !unref(items) || unref(isUpdate) ? (openBlock(), createBlock(AppForm, { key: 0 }, {
                default: withCtx(({ handleSubmit }) => [
                  createVNode(_sfc_main$1, {
                    modelValue: unref(form).ten,
                    "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                    label: "T\xEAn \u0111\u1EC1 t\xE0i",
                    name: "T\xEAn \u0111\u1EC1 t\xE0i",
                    rules: "required"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$1, {
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    label: "M\xF4 t\u1EA3",
                    name: "M\xF4 t\u1EA3",
                    rules: "required",
                    type: "textarea"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    modelValue: unref(form).teacher_id,
                    "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
                    class: "mb-4",
                    label: "Gi\u1EA3ng vi\xEAn",
                    name: "Gi\u1EA3ng vi\xEAn",
                    rules: "required"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$1, {
                    modelValue: unref(form).knowledge,
                    "onUpdate:modelValue": ($event) => unref(form).knowledge = $event,
                    label: "C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng",
                    name: "C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng",
                    rules: "required"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "text-center" }, [
                    createVNode(VBtn, {
                      color: "success",
                      loading: unref(loading),
                      size: "small",
                      variant: "elevated",
                      onClick: ($event) => handleSubmit(onSubmit)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0110\u0103ng k\xFD ")
                      ]),
                      _: 2
                    }, 1032, ["loading", "onClick"])
                  ])
                ]),
                _: 1
              })) : (openBlock(), createBlock("div", {
                key: 1,
                class: "d-flex flex-column gap-4"
              }, [
                createVNode("div", { class: "d-flex" }, [
                  createVNode(VChip, {
                    color: unref(filters).statusColor(unref(items).status),
                    size: "small",
                    variant: "flat"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(unref(filters).statusType(unref(items).status)), 1)
                    ]),
                    _: 1
                  }, 8, ["color"]),
                  createVNode(VSpacer),
                  unref(items).status != "approved" ? (openBlock(), createBlock(VBtn, {
                    key: 0,
                    color: "success",
                    icon: "",
                    size: "x-small",
                    variant: "text",
                    onClick: onUpdate
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-pencil")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-weight-bold mr-2" }, "T\xEAn \u0111\u1EC1 t\xE0i \u0111\u1EC1 xu\u1EA5t:"),
                  createVNode("span", null, toDisplayString(unref(items).ten), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-weight-bold mr-2" }, "M\xF4 t\u1EA3:"),
                  createVNode("span", null, toDisplayString(unref(items).description), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-weight-bold mr-2" }, "Gi\u1EA3ng vi\xEAn:"),
                  createVNode("span", null, toDisplayString(unref(items).teacher_id), 1)
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-weight-bold mr-2" }, "C\xF4ng ngh\u1EC7 s\u1EED d\u1EE5ng:"),
                  createVNode("span", null, toDisplayString(unref(items).knowledge), 1)
                ]),
                unref(items).status == "rejected" ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("span", { class: "font-weight-bold mr-2" }, "L\xFD do t\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i:"),
                  createVNode("span", null, toDisplayString(unref(items).reject_reason), 1)
                ])) : createCommentVNode("", true)
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/recommend-topic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recommend-topic-BW8Ef27e.mjs.map
