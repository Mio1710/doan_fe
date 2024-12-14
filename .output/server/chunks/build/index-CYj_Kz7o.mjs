import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, watch, openBlock, createBlock, Fragment, renderList, isRef, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { b as useNuxtApp, f as VSpacer, V as VBtn, e as VIcon, as as VTextField } from './server.mjs';
import { _ as _sfc_main$3 } from './FormCard-BTPzcLlL.mjs';
import { V as VDataTable, a as VTable } from './VDataTable-XVgdzRb7.mjs';
import { format } from 'date-fns';
import { u as useGetStudentReportTopics } from './use-get-student-report-topic-DiYGkkb5.mjs';
import { _ as _sfc_main$4 } from './AppTextField-DdQ0O2ei.mjs';
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from './VExpansionPanels-BRDGOfOC.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
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
import './AppForm-OpzBJjUC.mjs';
import './VDivider-DqGd8YoX.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';
import './VChip-LjVjlGI_.mjs';
import './sortParser-D3-t-zlx.mjs';

function sortsParser(sortBy, sortType) {
  if (!sortBy) {
    return [];
  }
  if (Array.isArray(sortBy)) {
    return _.map(_.zip(sortBy, sortType), ([sortBy2, sortType2]) => {
      return sortType2 === "desc" ? `-${sortBy2}` : sortBy2;
    });
  }
  return [sortType === "desc" ? `-${sortBy}` : sortBy];
}
function useTeacherGetStudentTopics(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["student-topic", params],
    () => {
      const { sortBy, sortType } = params.value;
      const sorts = sortsParser(sortBy, sortType);
      const query2 = new Parser({
        includes: [],
        appends: [],
        fields: {},
        filters: {},
        sorts,
        page: params.value.page,
        limit: params.value.rowsPerPage,
        payload: null,
        ...params.value
      }).query();
      return $api.teacher.getStudentTopics(query2);
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
  const totalItems = computed(() => {
    var _a, _b;
    return ((_b = (_a = query.data.value) == null ? void 0 : _a.pagination) == null ? void 0 : _b.total) || 0;
  });
  return {
    ...query,
    items,
    totalItems
  };
}
function useGetStudentResultTopicLOs(params, options) {
  const { $api } = useNuxtApp();
  console.log("params in useQuery", params);
  const query = useQuery(
    ["student-result-topic-los", params],
    () => {
      return $api.teacher.getStudentResultLOs(params);
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ResultDetail",
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
    const { $api, $toast } = useNuxtApp();
    const studentId = ref(props.item.id);
    const { items, isLoading, error, refetch } = useGetStudentResultTopicLOs({ studentId: studentId.value });
    const headers = [
      {
        title: "STT",
        align: "center",
        sortable: false,
        value: "index",
        width: 20
      },
      { title: "Ti\xEAu ch\xED \u0111\xE1nh gi\xE1", value: "main_criteria", width: "50%", minWidth: 500 },
      { title: "Ti\xEAu ch\xED ph\u1EE5", value: "sub_criteria", width: "30%", minWidth: 100 },
      { title: "H\u1EC7 s\u1ED1", value: "cof", width: "7%", minWidth: 50 },
      { title: "\u0110i\u1EC3m", value: "score", width: "7%", minWidth: 50 }
    ];
    const itemsClone = ref(items.value.map((item) => ({ ...item })));
    const emit = __emit;
    watch(
      () => items.value,
      (newItems) => {
        itemsClone.value = newItems.map((item) => ({ ...item }));
      }
    );
    const handleInvalidScore = (item, index) => {
      if (item.score < 0 || item.score > 10) {
        itemsClone.value[index].score = "";
        $toast.error("Vui l\xF2ng \u0111i\u1EC1n \u0111i\u1EC3m h\u1EE3p l\u1EC7 (0 - 10)");
      }
    };
    const submit = () => {
      $api.teacher.updateStudentResultLOs(itemsClone.value).then(() => {
        $toast.success("C\u1EADp nh\u1EADt \u0111i\u1EC3m th\xE0nh c\xF4ng");
        emit("success");
      }).finally(() => {
        emit("cancel");
      });
    };
    const totalScore = computed(() => {
      return itemsClone.value.reduce((acc, item) => acc + item.score * item.cof, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "can-cancel": "",
        "cancel-text": "\u0110\xF3ng",
        title: `\u0110i\u1EC3m qu\xE1 tr\xECnh c\u1EE7a sinh vi\xEAn: ${(_a = __props.item) == null ? void 0 : _a.hodem} ${(_b = __props.item) == null ? void 0 : _b.ten}`,
        onCancel: ($event) => emit("cancel"),
        onSubmit: submit
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTable, { class: "elevation-1" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<thead${_scopeId2}><tr${_scopeId2}><!--[-->`);
                  ssrRenderList(headers, (header) => {
                    _push3(`<th class="${ssrRenderClass(`text-${header.align}`)}" style="${ssrRenderStyle({ width: header.width })}"${_scopeId2}>${ssrInterpolate(header.title)}</th>`);
                  });
                  _push3(`<!--]--></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(itemsClone), (lo, index) => {
                    _push3(`<tr class="v-data-table__tr"${_scopeId2}><td class="text-center"${_scopeId2}>${ssrInterpolate(index + 1)}</td><td${_scopeId2}>${ssrInterpolate(lo.main_criteria)}</td><td${_scopeId2}>${ssrInterpolate(lo.sub_criteria)}</td><td class="text-center"${_scopeId2}>${ssrInterpolate(lo.cof)}</td><td class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(VTextField, {
                      modelValue: lo.score,
                      "onUpdate:modelValue": ($event) => lo.score = $event,
                      type: "number",
                      variant: "plain",
                      onChange: ($event) => handleInvalidScore(lo, index)
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]--></tbody>`);
                } else {
                  return [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        (openBlock(), createBlock(Fragment, null, renderList(headers, (header) => {
                          return createVNode("th", {
                            key: header.value,
                            class: `text-${header.align}`,
                            style: { width: header.width }
                          }, toDisplayString(header.title), 7);
                        }), 64))
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(itemsClone), (lo, index) => {
                        return openBlock(), createBlock("tr", {
                          key: index,
                          class: "v-data-table__tr"
                        }, [
                          createVNode("td", { class: "text-center" }, toDisplayString(index + 1), 1),
                          createVNode("td", null, toDisplayString(lo.main_criteria), 1),
                          createVNode("td", null, toDisplayString(lo.sub_criteria), 1),
                          createVNode("td", { class: "text-center" }, toDisplayString(lo.cof), 1),
                          createVNode("td", { class: "text-center" }, [
                            createVNode(VTextField, {
                              modelValue: lo.score,
                              "onUpdate:modelValue": ($event) => lo.score = $event,
                              type: "number",
                              variant: "plain",
                              onChange: ($event) => handleInvalidScore(lo, index)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-center font-weight-bold text-error py-2"${_scopeId}><span${_scopeId}>\u0110i\u1EC3m t\u1ED5ng: ${ssrInterpolate((unref(totalScore) / 10).toFixed(2))}</span></div>`);
          } else {
            return [
              createVNode(VTable, { class: "elevation-1" }, {
                default: withCtx(() => [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      (openBlock(), createBlock(Fragment, null, renderList(headers, (header) => {
                        return createVNode("th", {
                          key: header.value,
                          class: `text-${header.align}`,
                          style: { width: header.width }
                        }, toDisplayString(header.title), 7);
                      }), 64))
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(itemsClone), (lo, index) => {
                      return openBlock(), createBlock("tr", {
                        key: index,
                        class: "v-data-table__tr"
                      }, [
                        createVNode("td", { class: "text-center" }, toDisplayString(index + 1), 1),
                        createVNode("td", null, toDisplayString(lo.main_criteria), 1),
                        createVNode("td", null, toDisplayString(lo.sub_criteria), 1),
                        createVNode("td", { class: "text-center" }, toDisplayString(lo.cof), 1),
                        createVNode("td", { class: "text-center" }, [
                          createVNode(VTextField, {
                            modelValue: lo.score,
                            "onUpdate:modelValue": ($event) => lo.score = $event,
                            type: "number",
                            variant: "plain",
                            onChange: ($event) => handleInvalidScore(lo, index)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "text-center font-weight-bold text-error py-2" }, [
                createVNode("span", null, "\u0110i\u1EC3m t\u1ED5ng: " + toDisplayString((unref(totalScore) / 10).toFixed(2)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/student/organism/ResultDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReportDetail",
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
    ref(false);
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const emit = __emit;
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
    const studentTopicId = props.item.id;
    const queryBuilder = computed(() => ({
      filters: { studentId: studentTopicId }
    }));
    const { items, totalItems, isLoading, refetch } = useGetStudentReportTopics(queryBuilder, {
      enabled: !!studentTopicId
    });
    const comment = ref("");
    const onUpdate = (item) => {
      $api.teacher.commentStudentReportTopic(item.id, { comment: comment.value }).then(() => {
        $toast.success("C\u1EADp nh\u1EADt nh\u1EADn x\xE9t th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("student-report-topic");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "can-cancel": "",
        "cancel-text": "\u0110\xF3ng",
        "hide-submit": "",
        title: `\u0110i\u1EC3m qu\xE1 tr\xECnh c\u1EE7a sinh vi\xEAn: ${(_a = __props.item) == null ? void 0 : _a.hodem} ${(_b = __props.item) == null ? void 0 : _b.ten}`,
        onCancel: ($event) => emit("cancel")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(items)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(VExpansionPanels, {
                modelValue: unref(panel),
                "onUpdate:modelValue": ($event) => isRef(panel) ? panel.value = $event : null,
                multiple: ""
              }, {
                default: withCtx((_22, _push3, _parent3, _scopeId2) => {
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
                                    icon: "mdi-content-save-check",
                                    size: "small",
                                    variant: "plain",
                                    onClick: ($event) => onUpdate(item)
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div${_scopeId4}><div${_scopeId4}><span class="font-weight-bold"${_scopeId4}>M\xF4 t\u1EA3:</span> ${ssrInterpolate(item.description)}</div><div class="font-weight-bold"${_scopeId4}>Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:</div><div${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_sfc_main$4, {
                                    modelValue: unref(comment),
                                    "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                    class: "mb-4",
                                    label: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                    "model-value": item.comment,
                                    name: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                    rules: "required",
                                    type: "textarea"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div></div>`);
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
                                        icon: "mdi-content-save-check",
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
                                      createVNode("div", null, [
                                        createVNode(_sfc_main$4, {
                                          modelValue: unref(comment),
                                          "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                          class: "mb-4",
                                          label: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                          "model-value": item.comment,
                                          name: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                          rules: "required",
                                          type: "textarea"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "model-value"])
                                      ])
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
                                      icon: "mdi-content-save-check",
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
                                    createVNode("div", null, [
                                      createVNode(_sfc_main$4, {
                                        modelValue: unref(comment),
                                        "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                        class: "mb-4",
                                        label: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                        "model-value": item.comment,
                                        name: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                        rules: "required",
                                        type: "textarea"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "model-value"])
                                    ])
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
                                    icon: "mdi-content-save-check",
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
                                  createVNode("div", null, [
                                    createVNode(_sfc_main$4, {
                                      modelValue: unref(comment),
                                      "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                      class: "mb-4",
                                      label: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                      "model-value": item.comment,
                                      name: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                      rules: "required",
                                      type: "textarea"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "model-value"])
                                  ])
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
              unref(items) ? (openBlock(), createBlock("div", { key: 0 }, [
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
                                  icon: "mdi-content-save-check",
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
                                createVNode("div", null, [
                                  createVNode(_sfc_main$4, {
                                    modelValue: unref(comment),
                                    "onUpdate:modelValue": ($event) => isRef(comment) ? comment.value = $event : null,
                                    class: "mb-4",
                                    label: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                    "model-value": item.comment,
                                    name: "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn",
                                    rules: "required",
                                    type: "textarea"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "model-value"])
                                ])
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/student/organism/ReportDetail.vue");
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
      { title: "T\xEAn sinh vi\xEAn", key: "ten", width: "15%", minWidth: 150 },
      { title: "MSSV", key: "maso", width: "10%", minWidth: 100 },
      { title: "L\u1EDBp", key: "lop", width: "15%", minWidth: 150 },
      { title: "Nh\xF3m", key: "nhom", width: "5%", minWidth: 50 },
      { title: "\u0110\u1EC1 t\xE0i", key: "topic" },
      { title: "Nh\u1EADp \u0111i\u1EC3m", key: "action", width: 150, sortable: false, align: "center" }
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
    useNuxtApp();
    useQueryClient();
    const { items, totalItems, isLoading, refetch } = useTeacherGetStudentTopics(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Sinh vi\xEAn kh\xF3a lu\u1EADn</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 pt-0 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-2"${_scopeId}><div class="d-flex"${_scopeId}>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "",
              size: "x-small",
              variant: "text",
              onClick: ($event) => unref(refetch)()
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              "hide-default-footer": "",
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
              "item.ten": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(item.hodem + " " + item.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(item.hodem + " " + item.ten), 1)
                  ];
                }
              }),
              "item.nhom": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_a = item.studentTopic[0]) == null ? void 0 : _a.group_id)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_b = item.studentTopic[0]) == null ? void 0 : _b.group_id), 1)
                  ];
                }
              }),
              "item.topic": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_a = item.studentTopic[0]) == null ? void 0 : _a.topic.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_b = item.studentTopic[0]) == null ? void 0 : _b.topic.ten), 1)
                  ];
                }
              }),
              "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDialog, {
                    "min-width": "800",
                    width: "80%"
                  }, {
                    activator: withCtx(({ props: activatorProps }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps({
                          rounded: "",
                          variant: "text"
                        }, activatorProps), {
                          default: withCtx((_22, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { color: "success" }, {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-eye`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-eye")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { color: "success" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-eye")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, mergeProps({
                            rounded: "",
                            variant: "text"
                          }, activatorProps), {
                            default: withCtx(() => [
                              createVNode(VIcon, { color: "success" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-eye")
                                ]),
                                _: 1
                              })
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
                  _push3(ssrRenderComponent(VDialog, {
                    "min-width": "800",
                    width: "80%"
                  }, {
                    activator: withCtx(({ props: activatorProps }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps({
                          rounded: "",
                          variant: "text"
                        }, activatorProps), {
                          default: withCtx((_22, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { color: "success" }, {
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
                                createVNode(VIcon, { color: "success" }, {
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
                        return [
                          createVNode(VBtn, mergeProps({
                            rounded: "",
                            variant: "text"
                          }, activatorProps), {
                            default: withCtx(() => [
                              createVNode(VIcon, { color: "success" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-pencil")
                                ]),
                                _: 1
                              })
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
                          onSuccess: unref(refetch)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$2, {
                            item,
                            onCancel: ($event) => isActive.value = false,
                            onSuccess: unref(refetch)
                          }, null, 8, ["item", "onCancel", "onSuccess"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDialog, {
                      "min-width": "800",
                      width: "80%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        createVNode(VBtn, mergeProps({
                          rounded: "",
                          variant: "text"
                        }, activatorProps), {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "success" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-eye")
                              ]),
                              _: 1
                            })
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
                    }, 1024),
                    createVNode(VDialog, {
                      "min-width": "800",
                      width: "80%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        createVNode(VBtn, mergeProps({
                          rounded: "",
                          variant: "text"
                        }, activatorProps), {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "success" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-pencil")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$2, {
                          item,
                          onCancel: ($event) => isActive.value = false,
                          onSuccess: unref(refetch)
                        }, null, 8, ["item", "onCancel", "onSuccess"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-2" }, [
                createVNode("div", { class: "d-flex" }, [
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
                createVNode(VDataTable, {
                  headers,
                  "hide-default-footer": "",
                  items: unref(items)
                }, {
                  "item.index": withCtx(({ index }) => [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ]),
                  "item.ten": withCtx(({ item }) => [
                    createVNode("span", null, toDisplayString(item.hodem + " " + item.ten), 1)
                  ]),
                  "item.nhom": withCtx(({ item }) => {
                    var _a;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.studentTopic[0]) == null ? void 0 : _a.group_id), 1)
                    ];
                  }),
                  "item.topic": withCtx(({ item }) => {
                    var _a;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.studentTopic[0]) == null ? void 0 : _a.topic.ten), 1)
                    ];
                  }),
                  "item.action": withCtx(({ item }) => [
                    createVNode(VDialog, {
                      "min-width": "800",
                      width: "80%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        createVNode(VBtn, mergeProps({
                          rounded: "",
                          variant: "text"
                        }, activatorProps), {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "success" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-eye")
                              ]),
                              _: 1
                            })
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
                    }, 1024),
                    createVNode(VDialog, {
                      "min-width": "800",
                      width: "80%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        createVNode(VBtn, mergeProps({
                          rounded: "",
                          variant: "text"
                        }, activatorProps), {
                          default: withCtx(() => [
                            createVNode(VIcon, { color: "success" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-pencil")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$2, {
                          item,
                          onCancel: ($event) => isActive.value = false,
                          onSuccess: unref(refetch)
                        }, null, 8, ["item", "onCancel", "onSuccess"])
                      ]),
                      _: 2
                    }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/teacher/review-point/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CYj_Kz7o.mjs.map
