import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './CreateTopic-B_BIDxbv.mjs';
import { f as filters } from './topic-status-Bpwoy23i.mjs';
import { useQueryClient } from 'vue-query';
import { _ as _sfc_main$4 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$5 } from './AppTextField-DdQ0O2ei.mjs';
import { b as useNuxtApp, a_ as useAuth, V as VBtn, e as VIcon, f as VSpacer } from './server.mjs';
import { _ as _sfc_main$3 } from './DeleteTopicConfirmDialog-Ajn81Fi8.mjs';
import { u as useGetTopics } from './use-get-topic-B5C1cEVc.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { V as VCheckbox } from './VCheckbox-BTMe7TyB.mjs';
import { V as VDataTableVirtual } from './VDataTableVirtual-DdrSO8OG.mjs';
import { V as VChip } from './VChip-LjVjlGI_.mjs';
import './AppForm-OpzBJjUC.mjs';
import './VDivider-DqGd8YoX.mjs';
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
import 'lodash';
import './parser-bDJLlw8s.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';
import './VDataTable-XVgdzRb7.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UpdateTopic",
  __ssrInlineRender: true,
  props: {
    topic: {
      type: Object,
      required: true
    }
  },
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = ref({ ...props.topic });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const importStudentTopic = () => {
      if (form.value.status !== "approved") {
        form.value.status = "pending";
      }
      $api.topic.updateTopic(form.value.id, form.value).then(() => {
        $toast.success("T\u1EA1o \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("topic");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "C\u1EADp nh\u1EADt \u0111\u1EC1 t\xE0i",
        onCancel: ($event) => emit("cancel"),
        onSubmit: importStudentTopic
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).ten,
              "onUpdate:modelValue": ($event) => unref(form).ten = $event,
              label: "T\xEAn \u0111\u1EC1 t\xE0i",
              name: "T\xEAn \u0111\u1EC1 t\xE0i",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              label: "M\xF4 t\u1EA3",
              name: "M\xF4 t\u1EA3",
              type: "textarea"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).requirement,
              "onUpdate:modelValue": ($event) => unref(form).requirement = $event,
              label: "Y\xEAu c\u1EA7u",
              name: "Y\xEAu c\u1EA7u"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).knowledge,
              "onUpdate:modelValue": ($event) => unref(form).knowledge = $event,
              label: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng",
              name: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
                modelValue: unref(form).ten,
                "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                label: "T\xEAn \u0111\u1EC1 t\xE0i",
                name: "T\xEAn \u0111\u1EC1 t\xE0i",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$5, {
                modelValue: unref(form).description,
                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                label: "M\xF4 t\u1EA3",
                name: "M\xF4 t\u1EA3",
                type: "textarea"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$5, {
                modelValue: unref(form).requirement,
                "onUpdate:modelValue": ($event) => unref(form).requirement = $event,
                label: "Y\xEAu c\u1EA7u",
                name: "Y\xEAu c\u1EA7u"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$5, {
                modelValue: unref(form).knowledge,
                "onUpdate:modelValue": ($event) => unref(form).knowledge = $event,
                label: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng",
                name: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/topic/molecules/UpdateTopic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
      { title: "T\xEAn \u0111\u1EC1 t\xE0i", key: "ten", width: "20%", minWidth: 250 },
      { title: "M\xF4 t\u1EA3", key: "description", width: "30%", minWidth: 350 },
      { title: "Y\xEAu c\u1EA7u", key: "requirement", width: "15%", minWidth: 150 },
      { title: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng", key: "knowledge", width: "15%", minWidth: 150 },
      { title: "GVHD", key: "gv", width: "10%", minWidth: 100 },
      { title: "S\u1ED1 l\u01B0\u1EE3ng", key: "numberStudent", align: "center" },
      { title: "Tr\u1EA1ng th\xE1i", key: "status", width: "10%", minWidth: 100, align: "center" },
      { title: "", key: "action", width: 30 }
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 25,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const filters$1 = ref({
      viewAll: false
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value,
      filters: filters$1.value
    }));
    useNuxtApp();
    const { data } = useAuth();
    const { items, totalItems, isLoading, refetch } = useGetTopics(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Qu\u1EA3n l\xFD \u0111\u1EC1 t\xE0i</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VDialog, {
              "min-width": "400",
              width: "40%"
            }, {
              activator: withCtx(({ props: activatorProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps({
                    color: "success",
                    size: "small"
                  }, activatorProps), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-plus`);
                            } else {
                              return [
                                createTextVNode("mdi-plus")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Th\xEAm m\u1EDBi \u0111\u1EC1 t\xE0i</span>`);
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-plus")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Th\xEAm m\u1EDBi \u0111\u1EC1 t\xE0i")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps({
                      color: "success",
                      size: "small"
                    }, activatorProps), {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-plus")
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Th\xEAm m\u1EDBi \u0111\u1EC1 t\xE0i")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    onCancel: ($event) => isActive.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      onCancel: ($event) => isActive.value = false
                    }, null, 8, ["onCancel"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCheckbox, {
              modelValue: unref(filters$1).viewAll,
              "onUpdate:modelValue": ($event) => unref(filters$1).viewAll = $event,
              density: "compact",
              "hide-details": "",
              label: "Xem t\u1EA5t c\u1EA3"
            }, null, _parent2, _scopeId));
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
              "item.numberStudent": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(item.currentNumberStudent)}/${ssrInterpolate(item.numberStudent)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(item.currentNumberStudent) + "/" + toDisplayString(item.numberStudent), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VChip, {
                    color: unref(filters).statusColor(item.status),
                    size: "small",
                    variant: "flat"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>${ssrInterpolate(unref(filters).statusType(item.status))}</span>`);
                      } else {
                        return [
                          createVNode("span", null, toDisplayString(unref(filters).statusType(item.status)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VChip, {
                      color: unref(filters).statusColor(item.status),
                      size: "small",
                      variant: "flat"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(unref(filters).statusType(item.status)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ];
                }
              }),
              "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDialog, {
                    "min-width": "400",
                    width: "40%"
                  }, {
                    activator: withCtx(({ props: activatorProps }, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        if (((_a = unref(data)) == null ? void 0 : _a.id) == ((_b = item == null ? void 0 : item.teacher) == null ? void 0 : _b.id)) {
                          _push4(ssrRenderComponent(VBtn, mergeProps(activatorProps, {
                            color: "success",
                            icon: "",
                            size: "small",
                            variant: "text"
                          }), {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, null, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`mdi-pencil`);
                                    } else {
                                      return [
                                        createTextVNode("mdi-pencil")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
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
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          ((_c = unref(data)) == null ? void 0 : _c.id) == ((_d = item == null ? void 0 : item.teacher) == null ? void 0 : _d.id) ? (openBlock(), createBlock(VBtn, mergeProps({ key: 0 }, activatorProps, {
                            color: "success",
                            icon: "",
                            size: "small",
                            variant: "text"
                          }), {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-pencil")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1040)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    default: withCtx(({ isActive }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          topic: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            topic: item,
                            onCancel: ($event) => isActive.value = false
                          }, null, 8, ["topic", "onCancel"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, { topic: item }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDialog, {
                      "min-width": "400",
                      width: "40%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => {
                        var _a, _b;
                        return [
                          ((_a = unref(data)) == null ? void 0 : _a.id) == ((_b = item == null ? void 0 : item.teacher) == null ? void 0 : _b.id) ? (openBlock(), createBlock(VBtn, mergeProps({ key: 0 }, activatorProps, {
                            color: "success",
                            icon: "",
                            size: "small",
                            variant: "text"
                          }), {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-pencil")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1040)) : createCommentVNode("", true)
                        ];
                      }),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$1, {
                          topic: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["topic", "onCancel"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_sfc_main$3, { topic: item }, null, 8, ["topic"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex items-center" }, [
                createVNode(VDialog, {
                  "min-width": "400",
                  width: "40%"
                }, {
                  activator: withCtx(({ props: activatorProps }) => [
                    createVNode(VBtn, mergeProps({
                      color: "success",
                      size: "small"
                    }, activatorProps), {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-plus")
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Th\xEAm m\u1EDBi \u0111\u1EC1 t\xE0i")
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  default: withCtx(({ isActive }) => [
                    createVNode(_sfc_main$2, {
                      onCancel: ($event) => isActive.value = false
                    }, null, 8, ["onCancel"])
                  ]),
                  _: 1
                }),
                createVNode(VSpacer),
                createVNode(VCheckbox, {
                  modelValue: unref(filters$1).viewAll,
                  "onUpdate:modelValue": ($event) => unref(filters$1).viewAll = $event,
                  density: "compact",
                  "hide-details": "",
                  label: "Xem t\u1EA5t c\u1EA3"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  "item.numberStudent": withCtx(({ item }) => [
                    createVNode("span", null, toDisplayString(item.currentNumberStudent) + "/" + toDisplayString(item.numberStudent), 1)
                  ]),
                  "item.status": withCtx(({ item }) => [
                    createVNode(VChip, {
                      color: unref(filters).statusColor(item.status),
                      size: "small",
                      variant: "flat"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(unref(filters).statusType(item.status)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  "item.action": withCtx(({ item }) => [
                    createVNode(VDialog, {
                      "min-width": "400",
                      width: "40%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => {
                        var _a, _b;
                        return [
                          ((_a = unref(data)) == null ? void 0 : _a.id) == ((_b = item == null ? void 0 : item.teacher) == null ? void 0 : _b.id) ? (openBlock(), createBlock(VBtn, mergeProps({ key: 0 }, activatorProps, {
                            color: "success",
                            icon: "",
                            size: "small",
                            variant: "text"
                          }), {
                            default: withCtx(() => [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-pencil")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1040)) : createCommentVNode("", true)
                        ];
                      }),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$1, {
                          topic: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["topic", "onCancel"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_sfc_main$3, { topic: item }, null, 8, ["topic"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/teacher/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BLGbao4M.mjs.map
