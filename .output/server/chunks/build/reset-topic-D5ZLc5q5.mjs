import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient } from 'vue-query';
import { f as filters } from './topic-status-Bpwoy23i.mjs';
import { _ as _sfc_main$2 } from './FormCard-BTPzcLlL.mjs';
import { b as useNuxtApp, V as VBtn, e as VIcon, f as VSpacer } from './server.mjs';
import { u as useGetTopics } from './use-get-topic-V4a7sHwV.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
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
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResetTopicAlert",
  __ssrInlineRender: true,
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const loading = ref(false);
    const resetTopic = () => {
      loading.value = true;
      $api.topic.resetTopic().then(() => {
        $toast.success("Reset \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("topic");
        emit("cancel");
      }).finally(() => {
        loading.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        loading: unref(loading),
        title: "Reset \u0111\u1EC1 t\xE0i",
        onCancel: ($event) => emit("cancel"),
        onSubmit: resetTopic
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-warning text-center text-xl font-weight-bold"${_scopeId}><div${_scopeId}>To\xE0n b\u1ED9 \u0111\u1EC1 t\xE0i c\u1EA7n duy\u1EC7t l\u1EA1i!</div><div${_scopeId}>B\u1EA1n ch\u1EAFc ch\u1EAFn? H\xE0nh \u0111\u1ED9ng kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-warning text-center text-xl font-weight-bold" }, [
                createVNode("div", null, "To\xE0n b\u1ED9 \u0111\u1EC1 t\xE0i c\u1EA7n duy\u1EC7t l\u1EA1i!"),
                createVNode("div", null, "B\u1EA1n ch\u1EAFc ch\u1EAFn? H\xE0nh \u0111\u1ED9ng kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/ResetTopicAlert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset-topic",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref("");
    const headers = [
      {
        title: "STT",
        align: "center",
        sortable: false,
        key: "index",
        width: 50
      },
      { title: "Gi\u1EA3ng vi\xEAn", key: "gv", width: "10%", minWidth: 100 },
      { title: "T\xEAn \u0111\u1EC1 t\xE0i", key: "ten", width: "20%", minWidth: 250 },
      { title: "M\xF4 t\u1EA3", key: "description", width: "35%", minWidth: 350 },
      { title: "Y\xEAu c\u1EA7u", key: "requirement", width: "20%", minWidth: 200 },
      { title: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng", key: "knowledge", width: "15%", minWidth: 150 },
      { title: "Tr\u1EA1ng th\xE1i", key: "status", width: "10%", minWidth: 100 }
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 100,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value,
      filters: { viewAll: true }
    }));
    useNuxtApp();
    useQueryClient();
    const { items, totalItems, isLoading, refetch, isFetching } = useGetTopics(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">T\u1EA5t c\u1EA3 \u0111\u1EC1 t\xE0i</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex"${_scopeId}>`);
            _push2(ssrRenderComponent(VDialog, {
              "max-width": "500",
              width: "50%"
            }, {
              activator: withCtx(({ props: activatorProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps({
                    color: "warning",
                    size: "small"
                  }, activatorProps), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-alert`);
                            } else {
                              return [
                                createTextVNode("mdi-alert")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Reset \u0111\u1EC1 t\xE0i </span>`);
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-alert")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Reset \u0111\u1EC1 t\xE0i ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps({
                      color: "warning",
                      size: "small"
                    }, activatorProps), {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-alert")
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Reset \u0111\u1EC1 t\xE0i ")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    onCancel: ($event) => isActive.value = false,
                    onSuccess: unref(refetch)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      onCancel: ($event) => isActive.value = false,
                      onSuccess: unref(refetch)
                    }, null, 8, ["onCancel", "onSuccess"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              color: "success",
              loading: unref(isFetching),
              size: "small",
              onClick: unref(refetch)
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
            _push2(`</div><div class="mt-2 h-[calc(100%_-_30px)] overflow-y-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(VDataTable, {
              class: "h-full",
              "fixed-header": "",
              headers,
              "hide-default-footer": "",
              items: unref(items),
              loading: unref(isFetching)
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
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (item.status != "pending") {
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
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    item.status != "pending" ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      color: unref(filters).statusColor(item.status),
                      size: "small",
                      variant: "flat"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(unref(filters).statusType(item.status)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex" }, [
                createVNode(VDialog, {
                  "max-width": "500",
                  width: "50%"
                }, {
                  activator: withCtx(({ props: activatorProps }) => [
                    createVNode(VBtn, mergeProps({
                      color: "warning",
                      size: "small"
                    }, activatorProps), {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-alert")
                          ]),
                          _: 1
                        }),
                        createVNode("span", null, "Reset \u0111\u1EC1 t\xE0i ")
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  default: withCtx(({ isActive }) => [
                    createVNode(_sfc_main$1, {
                      onCancel: ($event) => isActive.value = false,
                      onSuccess: unref(refetch)
                    }, null, 8, ["onCancel", "onSuccess"])
                  ]),
                  _: 1
                }),
                createVNode(VSpacer),
                createVNode(VBtn, {
                  color: "success",
                  loading: unref(isFetching),
                  size: "small",
                  onClick: unref(refetch)
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
                }, 8, ["loading", "onClick"])
              ]),
              createVNode("div", { class: "mt-2 h-[calc(100%_-_30px)] overflow-y-hidden" }, [
                createVNode(VDataTable, {
                  class: "h-full",
                  "fixed-header": "",
                  headers,
                  "hide-default-footer": "",
                  items: unref(items),
                  loading: unref(isFetching)
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
                  "item.status": withCtx(({ item }) => [
                    item.status != "pending" ? (openBlock(), createBlock(VChip, {
                      key: 0,
                      color: unref(filters).statusColor(item.status),
                      size: "small",
                      variant: "flat"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(unref(filters).statusType(item.status)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["items", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/faculty/reset-topic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-topic-D5ZLc5q5.mjs.map
