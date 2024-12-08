import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { f as filters } from './topic-status-Bpwoy23i.mjs';
import { b as useNuxtApp, f as VSpacer, V as VBtn, e as VIcon } from './server.mjs';
import { _ as _sfc_main$2 } from './CreateTopic-B_BIDxbv.mjs';
import { _ as _sfc_main$3 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$4 } from './AppTextField-DdQ0O2ei.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VDataTableVirtual } from './VDataTableVirtual-DdrSO8OG.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { V as VChip } from './VChip-LjVjlGI_.mjs';
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
import './AppForm-OpzBJjUC.mjs';
import './VDivider-DqGd8YoX.mjs';
import './VDataTable-XVgdzRb7.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';

function useGetStudentRecommendTopics(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["student-recommend-topic", params],
    () => {
      return $api.teacher.getStudentRecommendTopic();
    },
    {
      refetchOnWindowFocus: false,
      ...options
    }
  );
  const items = computed(() => {
    var _a;
    return ((_a = query.data.value) == null ? void 0 : _a.data) || [];
  });
  return {
    ...query,
    items
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RejectRecommendTopic",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["cancel", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = reactive({
      status: "rejected",
      reject_reason: ""
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const rejectRecommendTopic = () => {
      $api.teacher.updateRecommendTopic(props.item.id, form).then(() => {
        $toast.success("\u0110\xE3 t\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i");
        queryClient.invalidateQueries("student-recommend-topic");
        emit("success");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i",
        onCancel: ($event) => emit("cancel"),
        onSubmit: rejectRecommendTopic
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).reject_reason,
              "onUpdate:modelValue": ($event) => unref(form).reject_reason = $event,
              label: "L\xFD do t\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i",
              name: "L\xFD do t\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i",
              rules: "required",
              type: "textarea"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                modelValue: unref(form).reject_reason,
                "onUpdate:modelValue": ($event) => unref(form).reject_reason = $event,
                label: "L\xFD do t\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i",
                name: "L\xFD do t\u1EEB ch\u1ED1i \u0111\u1EC1 t\xE0i",
                rules: "required",
                type: "textarea"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/topic/molecules/RejectRecommendTopic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recommend-topic",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "STT",
        align: "center",
        sortable: false,
        key: "index",
        width: 50
      },
      { title: "T\xEAn \u0111\u1EC1 t\xE0i", key: "ten", minWidth: 250 },
      { title: "M\xF4 t\u1EA3", key: "description", width: "30%", minWidth: 350 },
      { title: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng", key: "knowledge", width: "15%", minWidth: 150 },
      { title: "Sinh vi\xEAn", key: "sv", width: "10%", minWidth: 100 },
      { title: "Tr\u1EA1ng th\xE1i", key: "status", width: "10%", minWidth: 180, align: "center" }
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 25,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value
    }));
    const queryClient = useQueryClient();
    const { $api, $toast } = useNuxtApp();
    const { items, isLoading, refetch } = useGetStudentRecommendTopics(queryBuilder);
    const onSuccess = (item) => {
      $api.teacher.updateRecommendTopic(item.id, { status: "approved" }).then(() => {
        $toast.success("\u0110\xE3 ch\u1EA5p nh\u1EADn \u0111\u1EC1 t\xE0i");
        queryClient.invalidateQueries("student-recommend-topic");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">\u0110\u1EC1 t\xE0i sinh vi\xEAn \u0111\u0103ng k\xFD</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "",
              size: "x-small",
              variant: "text",
              onClick: ($event) => unref(refetch)()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-refresh`);
                      } else {
                        return [
                          createTextVNode("mdi-refresh")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-refresh")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 h-[calc(100%_-_45px)] overflow-y-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(VDataTableVirtual, {
              class: "h-full",
              "fixed-header": "",
              headers,
              items: unref(items)
            }, {
              "item.index": withCtx(({ index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(index + 1)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ];
                }
              }),
              "item.gv": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_a = item.teacher) == null ? void 0 : _a.hodem)} ${ssrInterpolate((_b = item.teacher) == null ? void 0 : _b.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_c = item.teacher) == null ? void 0 : _c.hodem) + " " + toDisplayString((_d = item.teacher) == null ? void 0 : _d.ten), 1)
                  ];
                }
              }),
              "item.sv": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_a = item.student) == null ? void 0 : _a.hodem)} ${ssrInterpolate((_b = item.student) == null ? void 0 : _b.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_c = item.student) == null ? void 0 : _c.hodem) + " " + toDisplayString((_d = item.student) == null ? void 0 : _d.ten), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.status == "pending") {
                    _push3(`<div class="d-flex"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VDialog, {
                      "min-width": "500",
                      width: "50%"
                    }, {
                      activator: withCtx(({ props: activatorProps }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VChip, mergeProps({
                            color: "info",
                            size: "small",
                            variant: "flat"
                          }, activatorProps), {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Ch\u1EDD duy\u1EC7t`);
                              } else {
                                return [
                                  createTextVNode("Ch\u1EDD duy\u1EC7t")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VChip, mergeProps({
                              color: "info",
                              size: "small",
                              variant: "flat"
                            }, activatorProps), {
                              default: withCtx(() => [
                                createTextVNode("Ch\u1EDD duy\u1EC7t")
                              ]),
                              _: 2
                            }, 1040)
                          ];
                        }
                      }),
                      default: withCtx(({ isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            item,
                            onCancel: ($event) => isActive.value = false,
                            onSuccess: ($event) => onSuccess(item)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$2, {
                              item,
                              onCancel: ($event) => isActive.value = false,
                              onSuccess: ($event) => onSuccess(item)
                            }, null, 8, ["item", "onCancel", "onSuccess"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDialog, {
                      "min-width": "500",
                      width: "50%"
                    }, {
                      activator: withCtx(({ props: activatorProps }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VChip, mergeProps({
                            color: "error",
                            size: "small",
                            variant: "flat"
                          }, activatorProps), {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`T\u1EEB ch\u1ED1i`);
                              } else {
                                return [
                                  createTextVNode("T\u1EEB ch\u1ED1i")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VChip, mergeProps({
                              color: "error",
                              size: "small",
                              variant: "flat"
                            }, activatorProps), {
                              default: withCtx(() => [
                                createTextVNode("T\u1EEB ch\u1ED1i")
                              ]),
                              _: 2
                            }, 1040)
                          ];
                        }
                      }),
                      default: withCtx(({ isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            item,
                            onCancel: ($event) => isActive.value = false,
                            onSuccess: unref(refetch)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$1, {
                              item,
                              onCancel: ($event) => isActive.value = false,
                              onSuccess: unref(refetch)
                            }, null, 8, ["item", "onCancel", "onSuccess"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(VChip, {
                      color: unref(filters).statusColor(item.status),
                      size: "small",
                      variant: "flat"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(filters).statusType(item.status))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(filters).statusType(item.status)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    item.status == "pending" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex"
                    }, [
                      createVNode(VDialog, {
                        "min-width": "500",
                        width: "50%"
                      }, {
                        activator: withCtx(({ props: activatorProps }) => [
                          createVNode(VChip, mergeProps({
                            color: "info",
                            size: "small",
                            variant: "flat"
                          }, activatorProps), {
                            default: withCtx(() => [
                              createTextVNode("Ch\u1EDD duy\u1EC7t")
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(({ isActive }) => [
                          createVNode(_sfc_main$2, {
                            item,
                            onCancel: ($event) => isActive.value = false,
                            onSuccess: ($event) => onSuccess(item)
                          }, null, 8, ["item", "onCancel", "onSuccess"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VSpacer),
                      createVNode(VDialog, {
                        "min-width": "500",
                        width: "50%"
                      }, {
                        activator: withCtx(({ props: activatorProps }) => [
                          createVNode(VChip, mergeProps({
                            color: "error",
                            size: "small",
                            variant: "flat"
                          }, activatorProps), {
                            default: withCtx(() => [
                              createTextVNode("T\u1EEB ch\u1ED1i")
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(({ isActive }) => [
                          createVNode(_sfc_main$1, {
                            item,
                            onCancel: ($event) => isActive.value = false,
                            onSuccess: unref(refetch)
                          }, null, 8, ["item", "onCancel", "onSuccess"])
                        ]),
                        _: 2
                      }, 1024)
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(VChip, {
                        color: unref(filters).statusColor(item.status),
                        size: "small",
                        variant: "flat"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(filters).statusType(item.status)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex items-center" }, [
                createVNode(VSpacer),
                createVNode(VBtn, {
                  icon: "",
                  size: "x-small",
                  variant: "text",
                  onClick: ($event) => unref(refetch)()
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-refresh")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode("div", { class: "mt-2 h-[calc(100%_-_45px)] overflow-y-hidden" }, [
                createVNode(VDataTableVirtual, {
                  class: "h-full",
                  "fixed-header": "",
                  headers,
                  items: unref(items)
                }, {
                  "item.index": withCtx(({ index }) => [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ]),
                  "item.gv": withCtx(({ item }) => {
                    var _a, _b;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.teacher) == null ? void 0 : _a.hodem) + " " + toDisplayString((_b = item.teacher) == null ? void 0 : _b.ten), 1)
                    ];
                  }),
                  "item.sv": withCtx(({ item }) => {
                    var _a, _b;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.student) == null ? void 0 : _a.hodem) + " " + toDisplayString((_b = item.student) == null ? void 0 : _b.ten), 1)
                    ];
                  }),
                  "item.status": withCtx(({ item }) => [
                    item.status == "pending" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex"
                    }, [
                      createVNode(VDialog, {
                        "min-width": "500",
                        width: "50%"
                      }, {
                        activator: withCtx(({ props: activatorProps }) => [
                          createVNode(VChip, mergeProps({
                            color: "info",
                            size: "small",
                            variant: "flat"
                          }, activatorProps), {
                            default: withCtx(() => [
                              createTextVNode("Ch\u1EDD duy\u1EC7t")
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(({ isActive }) => [
                          createVNode(_sfc_main$2, {
                            item,
                            onCancel: ($event) => isActive.value = false,
                            onSuccess: ($event) => onSuccess(item)
                          }, null, 8, ["item", "onCancel", "onSuccess"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(VSpacer),
                      createVNode(VDialog, {
                        "min-width": "500",
                        width: "50%"
                      }, {
                        activator: withCtx(({ props: activatorProps }) => [
                          createVNode(VChip, mergeProps({
                            color: "error",
                            size: "small",
                            variant: "flat"
                          }, activatorProps), {
                            default: withCtx(() => [
                              createTextVNode("T\u1EEB ch\u1ED1i")
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(({ isActive }) => [
                          createVNode(_sfc_main$1, {
                            item,
                            onCancel: ($event) => isActive.value = false,
                            onSuccess: unref(refetch)
                          }, null, 8, ["item", "onCancel", "onSuccess"])
                        ]),
                        _: 2
                      }, 1024)
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(VChip, {
                        color: unref(filters).statusColor(item.status),
                        size: "small",
                        variant: "flat"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(filters).statusType(item.status)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ]))
                  ]),
                  _: 1
                }, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/teacher/recommend-topic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recommend-topic-DIo0T_nT.mjs.map
