import { useSSRContext, defineComponent, ref, reactive, mergeProps, withCtx, unref, createTextVNode, createVNode, isRef, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { serialize } from 'object-to-formdata';
import { useQueryClient, useQuery } from 'vue-query';
import { format } from 'date-fns';
import { A as AppForm } from './AppForm-OpzBJjUC.mjs';
import { _ as _sfc_main$2 } from './AppTextField-DdQ0O2ei.mjs';
import { b as useNuxtApp, V as VBtn, f as VSpacer, e as VIcon } from './server.mjs';
import { V as VFileInput } from './VFileInput-D2-gG533.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from './VExpansionPanels-BRDGOfOC.mjs';
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
import 'vue3-toastify';
import './VChip-LjVjlGI_.mjs';

function useGetMyReportTopics(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["my-report-topic", params],
    () => {
      return $api.reportTopic.getReportTopics();
    },
    {
      refetchOnWindowFocus: false,
      ...options
    }
  );
  const items = computed(() => {
    var _a;
    return ((_a = query.data.value) == null ? void 0 : _a.data) || {};
  });
  return {
    ...query,
    items
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UpdateReportTopic",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const loading = ref(false);
    const form = computed(() => ({ ...props.item }));
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const emit = __emit;
    const file = ref(null);
    const onSubmit = () => {
      form.value.file = file.value;
      $api.reportTopic.updateReportTopic(form.value.id, serialize(form.value)).then(() => {
        queryClient.invalidateQueries("my-report-topic");
        $toast.success("C\u1EADp nh\u1EADt b\xE1o c\xE1o th\xE0nh c\xF4ng");
        emit("success");
      }).finally(() => {
        loading.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppForm, _attrs, {
        default: withCtx(({ handleSubmit }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).week,
              "onUpdate:modelValue": ($event) => unref(form).week = $event,
              class: "mb-5",
              label: "Tu\u1EA7n s\u1ED1",
              name: "Tu\u1EA7n s\u1ED1",
              rules: "required",
              type: "number"
            }, null, _parent2, _scopeId));
            if (unref(form).file_name) {
              _push2(`<div class="d-flex items-center gap-1 mb-1"${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi-file-chart-outline`);
                  } else {
                    return [
                      createTextVNode("mdi-file-chart-outline")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(form).file_name)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VFileInput, {
              modelValue: unref(file),
              "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
              accept: ".doc,.docx,.pdf",
              clearable: "",
              label: "File b\xE1o c\xE1o",
              name: "File b\xE1o c\xE1o",
              "prepend-icon": false,
              "prepend-inner-icon": "mdi-paperclip",
              "show-size": "",
              variant: "outlined",
              onChange: ($event) => unref(form).file_name = ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              class: "mb-4",
              label: "M\xF4 t\u1EA3",
              name: "M\xF4 t\u1EA3",
              rules: "required",
              type: "textarea"
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-full text-center mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              color: "success",
              loading: unref(loading),
              size: "small",
              onClick: ($event) => handleSubmit(onSubmit)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`N\u1ED9p b\xE1o c\xE1o`);
                } else {
                  return [
                    createTextVNode("N\u1ED9p b\xE1o c\xE1o")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                modelValue: unref(form).week,
                "onUpdate:modelValue": ($event) => unref(form).week = $event,
                class: "mb-5",
                label: "Tu\u1EA7n s\u1ED1",
                name: "Tu\u1EA7n s\u1ED1",
                rules: "required",
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              unref(form).file_name ? (openBlock(), createBlock("div", {
                key: 0,
                class: "d-flex items-center gap-1 mb-1"
              }, [
                createVNode(VIcon, null, {
                  default: withCtx(() => [
                    createTextVNode("mdi-file-chart-outline")
                  ]),
                  _: 1
                }),
                createTextVNode(" " + toDisplayString(unref(form).file_name), 1)
              ])) : createCommentVNode("", true),
              createVNode(VFileInput, {
                modelValue: unref(file),
                "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
                accept: ".doc,.docx,.pdf",
                clearable: "",
                label: "File b\xE1o c\xE1o",
                name: "File b\xE1o c\xE1o",
                "prepend-icon": false,
                "prepend-inner-icon": "mdi-paperclip",
                "show-size": "",
                variant: "outlined",
                onChange: ($event) => unref(form).file_name = ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
              createVNode(_sfc_main$2, {
                modelValue: unref(form).description,
                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                class: "mb-4",
                label: "M\xF4 t\u1EA3",
                name: "M\xF4 t\u1EA3",
                rules: "required",
                type: "textarea"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "w-full text-center mb-4" }, [
                createVNode(VBtn, {
                  color: "success",
                  loading: unref(loading),
                  size: "small",
                  onClick: ($event) => handleSubmit(onSubmit)
                }, {
                  default: withCtx(() => [
                    createTextVNode("N\u1ED9p b\xE1o c\xE1o")
                  ]),
                  _: 2
                }, 1032, ["loading", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/topic/molecules/UpdateReportTopic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "report-topic",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const isUpdate = ref(false);
    const itemUpdate = ref(null);
    const initForm = () => ({
      id: null,
      week: "",
      description: "",
      file: null
    });
    const form = reactive(initForm());
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const onSubmit = () => {
      loading.value = true;
      $api.reportTopic.createReportTopic(serialize(form)).then(() => {
        queryClient.invalidateQueries("my-report-topic");
        Object.assign(form, initForm());
        $toast.success("N\u1ED9p b\xE1o c\xE1o th\xE0nh c\xF4ng");
      }).finally(() => {
        loading.value = false;
      });
    };
    const downloadFile = (item) => {
      $api.reportTopic.downloadReportTopic(item.file_key).then((res) => {
        const url = URL.createObjectURL(new Blob([res]));
        const link = (void 0).createElement("a");
        link.href = url;
        link.setAttribute("download", item.file_name);
        (void 0).body.appendChild(link);
        link.click();
      });
    };
    const panel = ref([]);
    const { items, totalItems, isLoading, refetch } = useGetMyReportTopics();
    const onUpdate = (item) => {
      itemUpdate.value = item;
      console.log("itemUpdate", itemUpdate.value, item);
      isUpdate.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">B\xE1o c\xE1o ti\u1EBFn \u0111\u1ED9 \u0111\u1EC1 t\xE0i \u0111\u1ED3 \xE1n</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full overflow-y-scroll",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isUpdate)) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                item: unref(itemUpdate),
                onSuccess: ($event) => isUpdate.value = false
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(AppForm, null, {
                default: withCtx(({ handleSubmit }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      modelValue: unref(form).week,
                      "onUpdate:modelValue": ($event) => unref(form).week = $event,
                      class: "mb-5",
                      label: "Tu\u1EA7n s\u1ED1",
                      name: "Tu\u1EA7n s\u1ED1",
                      rules: "required",
                      type: "number"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VFileInput, {
                      modelValue: unref(form).file,
                      "onUpdate:modelValue": ($event) => unref(form).file = $event,
                      accept: ".doc,.docx,.pdf",
                      clearable: "",
                      label: "File b\xE1o c\xE1o",
                      name: "File b\xE1o c\xE1o",
                      "prepend-icon": false,
                      "prepend-inner-icon": "mdi-paperclip",
                      "show-size": "",
                      variant: "outlined"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      modelValue: unref(form).description,
                      "onUpdate:modelValue": ($event) => unref(form).description = $event,
                      class: "mb-4",
                      label: "M\xF4 t\u1EA3",
                      name: "M\xF4 t\u1EA3",
                      rules: "required",
                      type: "textarea"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="w-full text-center mb-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VBtn, {
                      color: "success",
                      loading: unref(loading),
                      size: "small",
                      onClick: ($event) => handleSubmit(onSubmit)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`N\u1ED9p b\xE1o c\xE1o`);
                        } else {
                          return [
                            createTextVNode("N\u1ED9p b\xE1o c\xE1o")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$2, {
                        modelValue: unref(form).week,
                        "onUpdate:modelValue": ($event) => unref(form).week = $event,
                        class: "mb-5",
                        label: "Tu\u1EA7n s\u1ED1",
                        name: "Tu\u1EA7n s\u1ED1",
                        rules: "required",
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VFileInput, {
                        modelValue: unref(form).file,
                        "onUpdate:modelValue": ($event) => unref(form).file = $event,
                        accept: ".doc,.docx,.pdf",
                        clearable: "",
                        label: "File b\xE1o c\xE1o",
                        name: "File b\xE1o c\xE1o",
                        "prepend-icon": false,
                        "prepend-inner-icon": "mdi-paperclip",
                        "show-size": "",
                        variant: "outlined"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$2, {
                        modelValue: unref(form).description,
                        "onUpdate:modelValue": ($event) => unref(form).description = $event,
                        class: "mb-4",
                        label: "M\xF4 t\u1EA3",
                        name: "M\xF4 t\u1EA3",
                        rules: "required",
                        type: "textarea"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "w-full text-center mb-4" }, [
                        createVNode(VBtn, {
                          color: "success",
                          loading: unref(loading),
                          size: "small",
                          onClick: ($event) => handleSubmit(onSubmit)
                        }, {
                          default: withCtx(() => [
                            createTextVNode("N\u1ED9p b\xE1o c\xE1o")
                          ]),
                          _: 2
                        }, 1032, ["loading", "onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            if (unref(items)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(VExpansionPanels, {
                modelValue: unref(panel),
                "onUpdate:modelValue": ($event) => isRef(panel) ? panel.value = $event : null,
                multiple: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(items), (item, index) => {
                      _push3(ssrRenderComponent(VExpansionPanel, { key: index }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VExpansionPanelTitle, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex w-full"${_scopeId4}><span${_scopeId4}>Tu\u1EA7n ${ssrInterpolate(item.week)}</span>`);
                                  _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                  _push5(`<div${_scopeId4}>N\u1ED9p l\xFAc: ${ssrInterpolate(unref(format)(new Date(item == null ? void 0 : item.created_at), "dd/MM/yyyy HH:mm"))}</div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex w-full" }, [
                                      createVNode("span", null, "Tu\u1EA7n " + toDisplayString(item.week), 1),
                                      createVNode(VSpacer),
                                      createVNode("div", null, "N\u1ED9p l\xFAc: " + toDisplayString(unref(format)(new Date(item == null ? void 0 : item.created_at), "dd/MM/yyyy HH:mm")), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VExpansionPanelText, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex items-center"${_scopeId4}><div${_scopeId4}><span class="font-weight-bold"${_scopeId4}>File b\xE1o c\xE1o:</span><span class="cursor-pointer underline text-blue-400 ml-2"${_scopeId4}>${ssrInterpolate(item.file_name)}</span></div>`);
                                  _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VBtn, {
                                    color: "success",
                                    height: "20",
                                    icon: "mdi-pencil",
                                    size: "small",
                                    variant: "plain",
                                    onClick: ($event) => onUpdate(item)
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div${_scopeId4}><div${_scopeId4}><span class="font-weight-bold"${_scopeId4}>M\xF4 t\u1EA3:</span> ${ssrInterpolate(item.description)}</div><div class="font-weight-bold"${_scopeId4}>Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:</div><div${_scopeId4}>${ssrInterpolate(item.comment)}</div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex items-center" }, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-weight-bold" }, "File b\xE1o c\xE1o:"),
                                        createVNode("span", {
                                          class: "cursor-pointer underline text-blue-400 ml-2",
                                          onClick: ($event) => downloadFile(item)
                                        }, toDisplayString(item.file_name), 9, ["onClick"])
                                      ]),
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "success",
                                        height: "20",
                                        icon: "mdi-pencil",
                                        size: "small",
                                        variant: "plain",
                                        onClick: ($event) => onUpdate(item)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "font-weight-bold" }, "M\xF4 t\u1EA3:"),
                                        createTextVNode(" " + toDisplayString(item.description), 1)
                                      ]),
                                      createVNode("div", { class: "font-weight-bold" }, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
                                      createVNode("div", null, toDisplayString(item.comment), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VExpansionPanelTitle, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex w-full" }, [
                                    createVNode("span", null, "Tu\u1EA7n " + toDisplayString(item.week), 1),
                                    createVNode(VSpacer),
                                    createVNode("div", null, "N\u1ED9p l\xFAc: " + toDisplayString(unref(format)(new Date(item == null ? void 0 : item.created_at), "dd/MM/yyyy HH:mm")), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VExpansionPanelText, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex items-center" }, [
                                    createVNode("div", null, [
                                      createVNode("span", { class: "font-weight-bold" }, "File b\xE1o c\xE1o:"),
                                      createVNode("span", {
                                        class: "cursor-pointer underline text-blue-400 ml-2",
                                        onClick: ($event) => downloadFile(item)
                                      }, toDisplayString(item.file_name), 9, ["onClick"])
                                    ]),
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      color: "success",
                                      height: "20",
                                      icon: "mdi-pencil",
                                      size: "small",
                                      variant: "plain",
                                      onClick: ($event) => onUpdate(item)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", null, [
                                      createVNode("span", { class: "font-weight-bold" }, "M\xF4 t\u1EA3:"),
                                      createTextVNode(" " + toDisplayString(item.description), 1)
                                    ]),
                                    createVNode("div", { class: "font-weight-bold" }, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
                                    createVNode("div", null, toDisplayString(item.comment), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index) => {
                        return openBlock(), createBlock(VExpansionPanel, { key: index }, {
                          default: withCtx(() => [
                            createVNode(VExpansionPanelTitle, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex w-full" }, [
                                  createVNode("span", null, "Tu\u1EA7n " + toDisplayString(item.week), 1),
                                  createVNode(VSpacer),
                                  createVNode("div", null, "N\u1ED9p l\xFAc: " + toDisplayString(unref(format)(new Date(item == null ? void 0 : item.created_at), "dd/MM/yyyy HH:mm")), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VExpansionPanelText, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex items-center" }, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "font-weight-bold" }, "File b\xE1o c\xE1o:"),
                                    createVNode("span", {
                                      class: "cursor-pointer underline text-blue-400 ml-2",
                                      onClick: ($event) => downloadFile(item)
                                    }, toDisplayString(item.file_name), 9, ["onClick"])
                                  ]),
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
                                    color: "success",
                                    height: "20",
                                    icon: "mdi-pencil",
                                    size: "small",
                                    variant: "plain",
                                    onClick: ($event) => onUpdate(item)
                                  }, null, 8, ["onClick"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "font-weight-bold" }, "M\xF4 t\u1EA3:"),
                                    createTextVNode(" " + toDisplayString(item.description), 1)
                                  ]),
                                  createVNode("div", { class: "font-weight-bold" }, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
                                  createVNode("div", null, toDisplayString(item.comment), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(isUpdate) ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                item: unref(itemUpdate),
                onSuccess: ($event) => isUpdate.value = false
              }, null, 8, ["item", "onSuccess"])) : (openBlock(), createBlock(AppForm, { key: 1 }, {
                default: withCtx(({ handleSubmit }) => [
                  createVNode(_sfc_main$2, {
                    modelValue: unref(form).week,
                    "onUpdate:modelValue": ($event) => unref(form).week = $event,
                    class: "mb-5",
                    label: "Tu\u1EA7n s\u1ED1",
                    name: "Tu\u1EA7n s\u1ED1",
                    rules: "required",
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VFileInput, {
                    modelValue: unref(form).file,
                    "onUpdate:modelValue": ($event) => unref(form).file = $event,
                    accept: ".doc,.docx,.pdf",
                    clearable: "",
                    label: "File b\xE1o c\xE1o",
                    name: "File b\xE1o c\xE1o",
                    "prepend-icon": false,
                    "prepend-inner-icon": "mdi-paperclip",
                    "show-size": "",
                    variant: "outlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    class: "mb-4",
                    label: "M\xF4 t\u1EA3",
                    name: "M\xF4 t\u1EA3",
                    rules: "required",
                    type: "textarea"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "w-full text-center mb-4" }, [
                    createVNode(VBtn, {
                      color: "success",
                      loading: unref(loading),
                      size: "small",
                      onClick: ($event) => handleSubmit(onSubmit)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("N\u1ED9p b\xE1o c\xE1o")
                      ]),
                      _: 2
                    }, 1032, ["loading", "onClick"])
                  ])
                ]),
                _: 1
              })),
              unref(items) ? (openBlock(), createBlock("div", { key: 2 }, [
                createVNode(VExpansionPanels, {
                  modelValue: unref(panel),
                  "onUpdate:modelValue": ($event) => isRef(panel) ? panel.value = $event : null,
                  multiple: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index) => {
                      return openBlock(), createBlock(VExpansionPanel, { key: index }, {
                        default: withCtx(() => [
                          createVNode(VExpansionPanelTitle, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex w-full" }, [
                                createVNode("span", null, "Tu\u1EA7n " + toDisplayString(item.week), 1),
                                createVNode(VSpacer),
                                createVNode("div", null, "N\u1ED9p l\xFAc: " + toDisplayString(unref(format)(new Date(item == null ? void 0 : item.created_at), "dd/MM/yyyy HH:mm")), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VExpansionPanelText, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex items-center" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "font-weight-bold" }, "File b\xE1o c\xE1o:"),
                                  createVNode("span", {
                                    class: "cursor-pointer underline text-blue-400 ml-2",
                                    onClick: ($event) => downloadFile(item)
                                  }, toDisplayString(item.file_name), 9, ["onClick"])
                                ]),
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  color: "success",
                                  height: "20",
                                  icon: "mdi-pencil",
                                  size: "small",
                                  variant: "plain",
                                  onClick: ($event) => onUpdate(item)
                                }, null, 8, ["onClick"])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "font-weight-bold" }, "M\xF4 t\u1EA3:"),
                                  createTextVNode(" " + toDisplayString(item.description), 1)
                                ]),
                                createVNode("div", { class: "font-weight-bold" }, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
                                createVNode("div", null, toDisplayString(item.comment), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/report-topic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=report-topic-B69p78dH.mjs.map
