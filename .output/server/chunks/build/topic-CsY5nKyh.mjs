import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient } from 'vue-query';
import { f as filters } from './topic-status-Bpwoy23i.mjs';
import { _ as _sfc_main$3 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$5 } from './AppTextField-DdQ0O2ei.mjs';
import { _ as _sfc_main$4 } from './TeacherAutocomplete-C7_6KVVK.mjs';
import { b as useNuxtApp, f as VSpacer, V as VBtn, e as VIcon } from './server.mjs';
import { _ as _sfc_main$2 } from './DeleteTopicConfirmDialog-Ajn81Fi8.mjs';
import { u as useGetTopics } from './use-get-topic-B5C1cEVc.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VCheckbox } from './VCheckbox-BTMe7TyB.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
import { V as VChip } from './VChip-LjVjlGI_.mjs';
import './AppForm-OpzBJjUC.mjs';
import './VDivider-DqGd8YoX.mjs';
import './use-get-teachers-B3LLnpVr.mjs';
import 'lodash';
import './parser-bDJLlw8s.mjs';
import './VAutocomplete-BklwJd8l.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CreateTopicBySuperTeacher",
  __ssrInlineRender: true,
  emits: ["cancel", "success"],
  setup(__props, { emit: __emit }) {
    const form = reactive({
      ten: "",
      description: "",
      requirement: "",
      knowledge: "",
      teacher_id: null,
      numberStudent: 4
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const createStudentTopic = () => {
      $api.superTeacher.createTopic(form).then(() => {
        $toast.success("T\u1EA1o \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("topic");
        emit("success");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EA1o \u0111\u1EC1 t\xE0i",
        onCancel: ($event) => emit("cancel"),
        onSubmit: createStudentTopic
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).teacher_id,
              "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
              class: "mb-4",
              label: "Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn",
              name: "Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn",
              rules: "required"
            }, null, _parent2, _scopeId));
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
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).numberStudent,
              "onUpdate:modelValue": ($event) => unref(form).numberStudent = $event,
              label: "S\u1ED1 l\u01B0\u1EE3ng sinh vi\xEAn",
              name: "S\u1ED1 l\u01B0\u1EE3ng sinh vi\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                modelValue: unref(form).teacher_id,
                "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
                class: "mb-4",
                label: "Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn",
                name: "Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
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
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$5, {
                modelValue: unref(form).numberStudent,
                "onUpdate:modelValue": ($event) => unref(form).numberStudent = $event,
                label: "S\u1ED1 l\u01B0\u1EE3ng sinh vi\xEAn",
                name: "S\u1ED1 l\u01B0\u1EE3ng sinh vi\xEAn",
                rules: "required"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/topic/molecules/CreateTopicBySuperTeacher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "topic",
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
      { title: "Tr\u1EA1ng th\xE1i", key: "status", width: "10%", minWidth: 100 },
      { title: "S\u1ED1 l\u01B0\u1EE3ng", key: "numberStudent", align: "center" },
      { title: "", key: "action", width: 20 }
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 100,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const filters$1 = ref({
      status: []
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value,
      filters: { viewAll: true, ...filters$1.value }
    }));
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const handleCheck = (item, status) => {
      try {
        $api.topic.checkTopic(item.id, status).then(() => {
          queryClient.invalidateQueries("topic");
          $toast.success("\u0110\xE3 c\u1EADp nh\u1EADt th\xE0nh c\xF4ng");
        });
      } catch (error) {
        console.log(error);
      }
    };
    const { items, totalItems, isLoading, refetch, isFetching } = useGetTopics(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Duy\u1EC7t \u0111\u1EC1 t\xE0i</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex"${_scopeId}><div class="d-flex"${_scopeId}>`);
            _push2(ssrRenderComponent(VCheckbox, {
              modelValue: unref(filters$1).status,
              "onUpdate:modelValue": ($event) => unref(filters$1).status = $event,
              class: "mr-4",
              color: "warning",
              density: "compact",
              "hide-details": "",
              label: " Ch\u1EDD duy\u1EC7t",
              value: "pending"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCheckbox, {
              modelValue: unref(filters$1).status,
              "onUpdate:modelValue": ($event) => unref(filters$1).status = $event,
              class: "mr-4",
              color: "success",
              density: "compact",
              "hide-details": "",
              label: " \u0110\xE3 duy\u1EC7t",
              value: "approved"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCheckbox, {
              modelValue: unref(filters$1).status,
              "onUpdate:modelValue": ($event) => unref(filters$1).status = $event,
              class: "mr-4",
              color: "error",
              density: "compact",
              "hide-details": "",
              label: " T\u1EEB ch\u1ED1i",
              value: "rejected"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
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
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    onCancel: ($event) => isActive.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      onCancel: ($event) => isActive.value = false
                    }, null, 8, ["onCancel"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              class: "ml-2",
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
              loading: unref(isFetching),
              "items-per-page": unref(serverOptions).rowsPerPage
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
                  _push3(`<div class="ma-2 text-center"${_scopeId2}>`);
                  if (item.status == "pending") {
                    _push3(ssrRenderComponent(VChip, {
                      class: "mb-2",
                      color: "success",
                      size: "small",
                      variant: "outlined",
                      onClick: ($event) => handleCheck(item, "approved")
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-check`);
                              } else {
                                return [
                                  createTextVNode("mdi-check")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>Duy\u1EC7t</span>`);
                        } else {
                          return [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-check")
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "Duy\u1EC7t")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (item.status == "pending") {
                    _push3(ssrRenderComponent(VChip, {
                      color: "error",
                      size: "small",
                      variant: "outlined",
                      onClick: ($event) => handleCheck(item, "rejected")
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-close`);
                              } else {
                                return [
                                  createTextVNode("mdi-close")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>T\u1EEB ch\u1ED1i</span>`);
                        } else {
                          return [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "T\u1EEB ch\u1ED1i")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "ma-2 text-center" }, [
                      item.status == "pending" ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        class: "mb-2",
                        color: "success",
                        size: "small",
                        variant: "outlined",
                        onClick: ($event) => handleCheck(item, "approved")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-check")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Duy\u1EC7t")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true),
                      item.status == "pending" ? (openBlock(), createBlock(VChip, {
                        key: 1,
                        color: "error",
                        size: "small",
                        variant: "outlined",
                        onClick: ($event) => handleCheck(item, "rejected")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "T\u1EEB ch\u1ED1i")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true),
                      item.status != "pending" ? (openBlock(), createBlock(VChip, {
                        key: 2,
                        color: unref(filters).statusColor(item.status),
                        size: "small",
                        variant: "flat"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(unref(filters).statusType(item.status)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { topic: item }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { topic: item }, null, 8, ["topic"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex" }, [
                createVNode("div", { class: "d-flex" }, [
                  createVNode(VCheckbox, {
                    modelValue: unref(filters$1).status,
                    "onUpdate:modelValue": ($event) => unref(filters$1).status = $event,
                    class: "mr-4",
                    color: "warning",
                    density: "compact",
                    "hide-details": "",
                    label: " Ch\u1EDD duy\u1EC7t",
                    value: "pending"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(filters$1).status,
                    "onUpdate:modelValue": ($event) => unref(filters$1).status = $event,
                    class: "mr-4",
                    color: "success",
                    density: "compact",
                    "hide-details": "",
                    label: " \u0110\xE3 duy\u1EC7t",
                    value: "approved"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(filters$1).status,
                    "onUpdate:modelValue": ($event) => unref(filters$1).status = $event,
                    class: "mr-4",
                    color: "error",
                    density: "compact",
                    "hide-details": "",
                    label: " T\u1EEB ch\u1ED1i",
                    value: "rejected"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(VSpacer),
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
                    createVNode(_sfc_main$1, {
                      onCancel: ($event) => isActive.value = false
                    }, null, 8, ["onCancel"])
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  class: "ml-2",
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
                  loading: unref(isFetching),
                  "items-per-page": unref(serverOptions).rowsPerPage
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
                    createVNode("div", { class: "ma-2 text-center" }, [
                      item.status == "pending" ? (openBlock(), createBlock(VChip, {
                        key: 0,
                        class: "mb-2",
                        color: "success",
                        size: "small",
                        variant: "outlined",
                        onClick: ($event) => handleCheck(item, "approved")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-check")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Duy\u1EC7t")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true),
                      item.status == "pending" ? (openBlock(), createBlock(VChip, {
                        key: 1,
                        color: "error",
                        size: "small",
                        variant: "outlined",
                        onClick: ($event) => handleCheck(item, "rejected")
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "T\u1EEB ch\u1ED1i")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true),
                      item.status != "pending" ? (openBlock(), createBlock(VChip, {
                        key: 2,
                        color: unref(filters).statusColor(item.status),
                        size: "small",
                        variant: "flat"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(unref(filters).statusType(item.status)), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])) : createCommentVNode("", true)
                    ])
                  ]),
                  "item.action": withCtx(({ item }) => [
                    createVNode(_sfc_main$2, { topic: item }, null, 8, ["topic"])
                  ]),
                  _: 1
                }, 8, ["items", "loading", "items-per-page"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/subject/topic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=topic-CsY5nKyh.mjs.map
