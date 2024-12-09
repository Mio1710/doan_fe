import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useModel } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { f as filters } from './topic-status-Bpwoy23i.mjs';
import { _ as _sfc_main$3 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$4 } from './AppTextField-DdQ0O2ei.mjs';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { b as useNuxtApp, a_ as useAuth, f as VSpacer, V as VBtn, e as VIcon } from './server.mjs';
import { V as VAutocomplete } from './VAutocomplete-BklwJd8l.mjs';
import { u as useGetInterns } from './use-get-intern-CtNQtRjH.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VCheckbox } from './VCheckbox-BTMe7TyB.mjs';
import { V as VDataTableVirtual } from './VDataTableVirtual-DdrSO8OG.mjs';
import { V as VChip } from './VChip-LjVjlGI_.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
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
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';
import './VDataTable-XVgdzRb7.mjs';

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
function useGetTeacherss(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["teacher", params],
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
      return $api.admin.getTeacherss(query2);
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TeacherInternAutocomplete",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    ref("");
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 100,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value
    }));
    const getFullName = (item) => `${item.maso} - ${item.hodem} ${item.ten}`;
    const { items, isLoading } = useGetTeacherss(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VAutocomplete, {
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        chips: "",
        "closable-chips": "",
        "item-title": getFullName,
        "item-value": "id",
        items: unref(items),
        label: "Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn",
        loading: unref(isLoading)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/atoms/TeacherInternAutocomplete.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CreateAssignTeacher",
  __ssrInlineRender: true,
  props: {
    intern: {
      type: Object,
      required: true,
      teacher_id: [],
      company_name: "",
      address: "",
      company_phone: "",
      company_email: "",
      supervisor_name: "",
      supervisor_phone: "",
      supervisor_email: ""
    }
  },
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = ref({ ...props.intern });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const importStudentIntern = () => {
      $api.intern.updateIntern(form.value.id, form.value).then(() => {
        $toast.success("Ph\xE2n c\xF4ng th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("intern");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "L\u01B0u",
        onCancel: ($event) => emit("cancel"),
        onSubmit: importStudentIntern
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).company_name,
              "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
              name: "T\xEAn c\xF4ng ty",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).company_email,
              "onUpdate:modelValue": ($event) => unref(form).company_email = $event,
              name: "Emai c\xF4ng ty",
              type: "textarea"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).company_phone,
              "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
              name: "S\u0110T c\xF4ng ty"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).address,
              "onUpdate:modelValue": ($event) => unref(form).address = $event,
              name: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).supervisor_name,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_name = $event,
              name: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).supervisor_phone,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_phone = $event,
              name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).supervisor_email,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_email = $event,
              name: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).teacher_id,
              "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
              name: "Gi\u1EA3ng vi\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                modelValue: unref(form).company_name,
                "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                name: "T\xEAn c\xF4ng ty",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$4, {
                modelValue: unref(form).company_email,
                "onUpdate:modelValue": ($event) => unref(form).company_email = $event,
                name: "Emai c\xF4ng ty",
                type: "textarea"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$4, {
                modelValue: unref(form).company_phone,
                "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
                name: "S\u0110T c\xF4ng ty"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$4, {
                modelValue: unref(form).address,
                "onUpdate:modelValue": ($event) => unref(form).address = $event,
                name: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$4, {
                modelValue: unref(form).supervisor_name,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_name = $event,
                name: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$4, {
                modelValue: unref(form).supervisor_phone,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_phone = $event,
                name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$4, {
                modelValue: unref(form).supervisor_email,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_email = $event,
                name: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: unref(form).teacher_id,
                "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
                name: "Gi\u1EA3ng vi\xEAn",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/CreateAssignTeacher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company",
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
        width: 20
      },
      { title: "T\xEAn sinh vi\xEAn", key: "student", width: "20%", minWidth: 150 },
      { title: "MSSV", key: "maso", width: "10%", minWidth: 100 },
      { title: "T\xEAn c\xF4ng ty", key: "company_name", width: "20%", minWidth: 150 },
      { title: "\u0110\u1ECBa ch\u1EC9", key: "address", width: "20%", minWidth: 150 },
      // { title: 'Email công ty', key: 'company_email', width: '10%', minWidth: 150 },
      // { title: 'SĐT công ty', key: 'company_phone', width: '10%', minWidth: 100 },
      // { title: 'Tên người hướng dẫn', key: 'supervisor_name', width: '10%', minWidth: 100 },
      // { title: 'SĐT người hướng dẫn', key: 'supervisor_phone', width: '10%', minWidth: 100 },
      // { title: 'Email người hướng dẫn', key: 'supervisor_email', width: '10%', minWidth: 100 },
      { title: "GVHD", key: "teacher", width: "12%", minWidth: 100 },
      { title: "Tr\u1EA1ng th\xE1i", key: "status", width: "10%", minWidth: 100, align: "center" },
      { title: "Ph\xE2n c\xF4ng GVHD", key: "action", width: 30 }
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 25,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const filters$1 = ref({
      status: []
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value,
      filters: { viewAll: true, ...filters$1.value }
      // filters: filters.value,
    }));
    const { $api, $toast } = useNuxtApp();
    useAuth();
    const queryClient = useQueryClient();
    const handleCheck = (item, status) => {
      try {
        $api.intern.checkIntern(item.id, status).then(() => {
          queryClient.invalidateQueries("intern");
          $toast.success("\u0110\xE3 c\u1EADp nh\u1EADt th\xE0nh c\xF4ng");
        });
      } catch (error) {
        console.log(error);
      }
    };
    const { items, totalItems, isLoading, refetch, isFetching } = useGetInterns(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Duy\u1EC7t \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp</div>`);
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
              loading: unref(isFetching),
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
            _push2(ssrRenderComponent(VDataTableVirtual, {
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
              "item.teacher": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
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
                      default: withCtx((_22, _push4, _parent4, _scopeId3) => {
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
                      default: withCtx((_22, _push4, _parent4, _scopeId3) => {
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
                  _push3(ssrRenderComponent(VDialog, {
                    "min-width": "400",
                    width: "40%"
                  }, {
                    activator: withCtx(({ props: activatorProps }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!item.teacher) {
                          _push4(ssrRenderComponent(VBtn, mergeProps({
                            color: "success",
                            size: "small"
                          }, activatorProps), {
                            default: withCtx((_22, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>Ph\xE2n c\xF4ng</span>`);
                              } else {
                                return [
                                  createVNode("span", null, "Ph\xE2n c\xF4ng")
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
                          !item.teacher ? (openBlock(), createBlock(VBtn, mergeProps({
                            key: 0,
                            color: "success",
                            size: "small"
                          }, activatorProps), {
                            default: withCtx(() => [
                              createVNode("span", null, "Ph\xE2n c\xF4ng")
                            ]),
                            _: 2
                          }, 1040)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    default: withCtx(({ isActive }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          intern: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            intern: item,
                            onCancel: ($event) => isActive.value = false
                          }, null, 8, ["intern", "onCancel"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDialog, {
                      "min-width": "400",
                      width: "40%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        !item.teacher ? (openBlock(), createBlock(VBtn, mergeProps({
                          key: 0,
                          color: "success",
                          size: "small"
                        }, activatorProps), {
                          default: withCtx(() => [
                            createVNode("span", null, "Ph\xE2n c\xF4ng")
                          ]),
                          _: 2
                        }, 1040)) : createCommentVNode("", true)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$1, {
                          intern: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["intern", "onCancel"])
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
                createVNode(VDataTableVirtual, {
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
                  "item.teacher": withCtx(({ item }) => {
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
                    createVNode(VDialog, {
                      "min-width": "400",
                      width: "40%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        !item.teacher ? (openBlock(), createBlock(VBtn, mergeProps({
                          key: 0,
                          color: "success",
                          size: "small"
                        }, activatorProps), {
                          default: withCtx(() => [
                            createVNode("span", null, "Ph\xE2n c\xF4ng")
                          ]),
                          _: 2
                        }, 1040)) : createCommentVNode("", true)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$1, {
                          intern: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["intern", "onCancel"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/subject/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=company-Cz44tHvr.mjs.map
