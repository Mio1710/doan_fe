import { defineComponent, ref, reactive, mergeProps, withCtx, unref, isRef, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient } from 'vue-query';
import { format } from 'date-fns';
import { u as useGetStudentReportTopics } from './use-get-student-report-topic-DiYGkkb5.mjs';
import { b as useNuxtApp, b7 as useRoute$1, f as VSpacer, V as VBtn } from './server.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VExpansionPanels, a as VExpansionPanel, b as VExpansionPanelTitle, c as VExpansionPanelText } from './VExpansionPanels-BRDGOfOC.mjs';
import './parser-bDJLlw8s.mjs';
import './sortParser-D3-t-zlx.mjs';
import 'lodash';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const isUpdate = ref(false);
    const itemUpdate = ref(null);
    const initForm = () => ({
      id: null,
      week: "",
      description: "",
      file: null
    });
    reactive(initForm());
    const { $api, $toast } = useNuxtApp();
    useQueryClient();
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
    const route = useRoute$1();
    const studentId = route.params.id;
    console.log("studentId", studentId);
    const { items, totalItems, isLoading, refetch } = useGetStudentReportTopics(studentId);
    const onUpdate = (item) => {
      itemUpdate.value = item;
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
                                  _push5(`<div class="d-flex items-center"${_scopeId4}><div${_scopeId4}> File b\xE1o c\xE1o: <span class="cursor-pointer underline text-blue-400"${_scopeId4}>${ssrInterpolate(item.file_name)}</span></div>`);
                                  _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VBtn, {
                                    color: "success",
                                    height: "20",
                                    icon: "mdi-pencil",
                                    size: "small",
                                    variant: "plain",
                                    onClick: ($event) => onUpdate(item)
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div><div${_scopeId4}><div${_scopeId4}>M\xF4 t\u1EA3: ${ssrInterpolate(item.description)}</div><div${_scopeId4}>Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:</div><div${_scopeId4}>${ssrInterpolate(item.comment)}</div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex items-center" }, [
                                      createVNode("div", null, [
                                        createTextVNode(" File b\xE1o c\xE1o: "),
                                        createVNode("span", {
                                          class: "cursor-pointer underline text-blue-400",
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
                                      createVNode("div", null, "M\xF4 t\u1EA3: " + toDisplayString(item.description), 1),
                                      createVNode("div", null, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
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
                                      createTextVNode(" File b\xE1o c\xE1o: "),
                                      createVNode("span", {
                                        class: "cursor-pointer underline text-blue-400",
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
                                    createVNode("div", null, "M\xF4 t\u1EA3: " + toDisplayString(item.description), 1),
                                    createVNode("div", null, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
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
                                    createTextVNode(" File b\xE1o c\xE1o: "),
                                    createVNode("span", {
                                      class: "cursor-pointer underline text-blue-400",
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
                                  createVNode("div", null, "M\xF4 t\u1EA3: " + toDisplayString(item.description), 1),
                                  createVNode("div", null, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
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
                                  createTextVNode(" File b\xE1o c\xE1o: "),
                                  createVNode("span", {
                                    class: "cursor-pointer underline text-blue-400",
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
                                createVNode("div", null, "M\xF4 t\u1EA3: " + toDisplayString(item.description), 1),
                                createVNode("div", null, "Nh\u1EADn x\xE9t c\u1EE7a gi\u1EA3ng vi\xEAn:"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/teacher/review-point/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-3D5G3co-.mjs.map
