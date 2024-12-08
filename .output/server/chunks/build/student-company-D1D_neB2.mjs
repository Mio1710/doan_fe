import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { serialize } from 'object-to-formdata';
import { _ as _sfc_main$2 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$3 } from './AppTextField-DdQ0O2ei.mjs';
import { b as useNuxtApp, V as VBtn, e as VIcon, f as VSpacer } from './server.mjs';
import { V as VFileInput } from './VFileInput-D2-gG533.mjs';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
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
import './VChip-LjVjlGI_.mjs';
import './filter-TSYBjJBT.mjs';
import './VList-Ch2cSLwT.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImportStudentIntern",
  __ssrInlineRender: true,
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const file = ref(null);
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const importStudentIntern = () => {
      $api.studentIntern.importStudentIntern(serialize({ file: file.value })).then(() => {
        $toast.success("Import sinh vi\xEAn th\u1EF1c t\u1EADp th\xE0nh c\xF4ng");
        emit("cancel");
      });
    };
    const preview = () => {
      console.log("Preview");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "Import sinh vi\xEAn th\u1EF1c t\u1EADp",
        onCancel: ($event) => emit("cancel"),
        onSubmit: importStudentIntern
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-5"${_scopeId}> T\u1EA3i xu\u1ED1ng m\u1EABu import d\u1EEF li\u1EC7u: <a download href="/files/student_intern_template.xlsx" target="_blank"${_scopeId}>download</a></div><div class="mt-4"${_scopeId}><div class="max-w-[520px] ma-auto d-flex"${_scopeId}>`);
            _push2(ssrRenderComponent(VFileInput, {
              modelValue: unref(file),
              "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
              accept: ".xlsx",
              class: "w-full mr-4",
              label: "File d\u1EEF li\u1EC7u",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-none"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(file),
              "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VBtn, {
              color: "success",
              disabled: !unref(file),
              onClick: preview
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Xem tr\u01B0\u1EDBc`);
                } else {
                  return [
                    createTextVNode("Xem tr\u01B0\u1EDBc")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-5" }, [
                createTextVNode(" T\u1EA3i xu\u1ED1ng m\u1EABu import d\u1EEF li\u1EC7u: "),
                createVNode("a", {
                  download: "",
                  href: "/files/student_intern_template.xlsx",
                  target: "_blank"
                }, "download")
              ]),
              createVNode("div", { class: "mt-4" }, [
                createVNode("div", { class: "max-w-[520px] ma-auto d-flex" }, [
                  createVNode(VFileInput, {
                    modelValue: unref(file),
                    "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
                    accept: ".xlsx",
                    class: "w-full mr-4",
                    label: "File d\u1EEF li\u1EC7u",
                    variant: "outlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "d-none" }, [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(file),
                      "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
                      rules: "required"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(VBtn, {
                    color: "success",
                    disabled: !unref(file),
                    onClick: preview
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Xem tr\u01B0\u1EDBc")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/student-intern/molecules/ImportStudentIntern.vue");
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
function useGetStudentInterns(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["student-intern", params],
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
      return $api.studentIntern.getStudentInterns(query2);
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
  __name: "student-company",
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
      { title: "T\xEAn sinh vi\xEAn", key: "ten" },
      { title: "L\u1EDBp", key: "lop", width: "15%", minWidth: 150 },
      //   { title: 'Nhóm', key: 'nhom', width: '5%', minWidth: 50 },
      // { title: 'Giảng viên hướng dẫn', key: 'gv', width: '20%', minWidth: 200 },
      { title: "", key: "action", width: 30 }
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 100,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value
    }));
    useNuxtApp();
    useQueryClient();
    const { items, totalItems, isLoading, refetch } = useGetStudentInterns(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Qu\u1EA3n l\xFD sinh vi\xEAn th\u1EF1c t\u1EADp</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
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
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
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
                        _push4(`<span${_scopeId3}>Import</span>`);
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-plus")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Import")
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
                        createVNode("span", null, "Import")
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
            _push2(`</div><div class="mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              "hide-default-footer": "",
              items: unref(items),
              loading: unref(isLoading)
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
                        createVNode("span", null, "Import")
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
              createVNode("div", { class: "mt-2" }, [
                createVNode(VDataTable, {
                  headers,
                  "hide-default-footer": "",
                  items: unref(items),
                  loading: unref(isLoading)
                }, {
                  "item.index": withCtx(({ index }) => [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ]),
                  "item.ten": withCtx(({ item }) => [
                    createVNode("span", null, toDisplayString(item.hodem + " " + item.ten), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/faculty/student-company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=student-company-D1D_neB2.mjs.map
