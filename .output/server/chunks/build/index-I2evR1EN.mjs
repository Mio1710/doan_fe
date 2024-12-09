import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, isRef, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { f as filters } from './topic-status-Bpwoy23i.mjs';
import { format } from 'date-fns';
import { _ as _sfc_main$2 } from './FormCard-BTPzcLlL.mjs';
import { u as useGetStudentReportInterns } from './use-get-student-report-intern-DJyTB4nx.mjs';
import { _ as _sfc_main$3 } from './AppTextField-DdQ0O2ei.mjs';
import { b as useNuxtApp, a_ as useAuth, f as VSpacer, V as VBtn, e as VIcon } from './server.mjs';
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from './VExpansionPanels-BRDGOfOC.mjs';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VCheckbox } from './VCheckbox-BTMe7TyB.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
import { V as VChip } from './VChip-LjVjlGI_.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import './AppForm-OpzBJjUC.mjs';
import './VDivider-DqGd8YoX.mjs';
import './sortParser-D3-t-zlx.mjs';
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
import './VCheckboxBtn-DaFH5r1c.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReportInternDetail",
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
      $api.reportIntern.downloadReportIntern(item.file_key).then((res) => {
        const url = URL.createObjectURL(new Blob([res]));
        const link = (void 0).createElement("a");
        link.href = url;
        link.setAttribute("download", item.file_name);
        (void 0).body.appendChild(link);
        link.click();
      });
    };
    const panel = ref([]);
    const studentInternId = props.item.student.id;
    const queryBuilder = computed(() => ({
      filters: { studentId: studentInternId }
    }));
    const { items, totalItems, isLoading, refetch } = useGetStudentReportInterns(queryBuilder, {
      enabled: !!studentInternId
    });
    const comment = ref("");
    const onUpdate = (item) => {
      $api.teacher.commentStudentReportIntern(item.id, { comment: comment.value }).then(() => {
        $toast.success("C\u1EADp nh\u1EADt nh\u1EADn x\xE9t th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("student-report-topic");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        "can-cancel": "",
        "cancel-text": "\u0110\xF3ng",
        "hide-submit": "",
        title: `B\xE1o c\xE1o qu\xE1 tr\xECnh th\u1EF1c t\u1EADp c\u1EE7a sinh vi\xEAn:`,
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
                                  _push5(ssrRenderComponent(_sfc_main$3, {
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
                                        createVNode(_sfc_main$3, {
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
                                      createVNode(_sfc_main$3, {
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
                                    createVNode(_sfc_main$3, {
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
                                  createVNode(_sfc_main$3, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/student/organism/ReportInternDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
function useGetTeacherInterns(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["teacher-intern", params],
    () => {
      const { sortBy, sortType } = params.value;
      const sorts = sortsParser(sortBy, sortType);
      console.log("params", params.value);
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
      console.log("query", query2);
      return $api.teacherIntern.getTeacherInterns(query2);
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
      { title: "T\xEAn sinh vi\xEAn", key: "student", width: "10%", minWidth: 150 },
      { title: "MSSV", key: "maso", width: "5%", minWidth: 100 },
      { title: "T\xEAn c\xF4ng ty", key: "company_name", width: "15%", minWidth: 150 },
      { title: "\u0110\u1ECBa ch\u1EC9", key: "address", width: "20%", minWidth: 150 },
      // { title: 'Email công ty', key: 'company_email', width: '10%', minWidth: 150 },
      // { title: 'SĐT công ty', key: 'company_phone', width: '10%', minWidth: 100 },
      { title: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn", key: "supervisor_name", width: "10%", minWidth: 150 },
      { title: "S\u0110T ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn", key: "supervisor_phone", width: "10%", minWidth: 100 },
      { title: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn", key: "supervisor_email", width: "10%", minWidth: 150 },
      { title: "Tr\u1EA1ng th\xE1i", key: "status", width: "10%", minWidth: 100, align: "center" },
      { title: "Chi ti\u1EBFt", key: "action", width: "10%", minWidth: 100, sortable: false, align: "center" }
      // { title: '', key: 'action', width: 30 },
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 25,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const filters$1 = ref({
      status: ["pending", "approved"]
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value,
      filters: { viewAll: true, ...filters$1.value }
    }));
    useNuxtApp();
    useAuth();
    useQueryClient();
    const { items, totalItems, isLoading, refetch } = useGetTeacherInterns(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Danh s\xE1ch th\u1EF1c t\u1EADp</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
            _push2(ssrRenderComponent(VBtn, {
              color: "success",
              loading: _ctx.isFetching,
              size: "small",
              onClick: unref(refetch)
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
            _push2(`</div><div class="mt-2 h-[calc(100%_-_30px)] overflow-y-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(VDataTable, {
              class: "h-full",
              "fixed-header": "",
              headers,
              "hide-default-footer": "",
              items: unref(items),
              loading: _ctx.isFetching
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
              "item.student": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_a = item.student) == null ? void 0 : _a.hodem)} ${ssrInterpolate((_b = item.student) == null ? void 0 : _b.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_c = item.student) == null ? void 0 : _c.hodem) + " " + toDisplayString((_d = item.student) == null ? void 0 : _d.ten), 1)
                  ];
                }
              }),
              "item.maso": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_a = item.student) == null ? void 0 : _a.maso)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_b = item.student) == null ? void 0 : _b.maso), 1)
                  ];
                }
              }),
              "item.status": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="ma-2 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VChip, {
                    color: unref(filters).statusColor(item.status),
                    size: "small",
                    variant: "flat"
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "ma-2 text-center" }, [
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
                    ])
                  ];
                }
              }),
              "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDialog, {
                    "min-width": "80",
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
                } else {
                  return [
                    createVNode(VDialog, {
                      "min-width": "80",
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
                    }, 1024)
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
                createVNode(VBtn, {
                  color: "success",
                  loading: _ctx.isFetching,
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
                  loading: _ctx.isFetching
                }, {
                  "item.index": withCtx(({ index }) => [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ]),
                  "item.student": withCtx(({ item }) => {
                    var _a, _b;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.student) == null ? void 0 : _a.hodem) + " " + toDisplayString((_b = item.student) == null ? void 0 : _b.ten), 1)
                    ];
                  }),
                  "item.maso": withCtx(({ item }) => {
                    var _a;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.student) == null ? void 0 : _a.maso), 1)
                    ];
                  }),
                  "item.status": withCtx(({ item }) => [
                    createVNode("div", { class: "ma-2 text-center" }, [
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
                    ])
                  ]),
                  "item.action": withCtx(({ item }) => [
                    createVNode(VDialog, {
                      "min-width": "80",
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
                    }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/teacher/guide-point/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-I2evR1EN.mjs.map
