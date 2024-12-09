import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, reactive, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { _ as _sfc_main$5 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$6 } from './AppTextField-DdQ0O2ei.mjs';
import { b as useNuxtApp, V as VBtn, e as VIcon, f as VSpacer } from './server.mjs';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
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
import './VChip-LjVjlGI_.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CreateFaculty",
  __ssrInlineRender: true,
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const form = reactive({
      ten: "",
      ma_khoa: ""
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const createFaculty = () => {
      $api.faculty.createFaculty(form).then(() => {
        $toast.success("T\u1EA1o khoa th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("faculty");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EA1o khoa",
        onCancel: ($event) => emit("cancel"),
        onSubmit: createFaculty
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).ten,
              "onUpdate:modelValue": ($event) => unref(form).ten = $event,
              label: "T\xEAn khoa",
              name: "T\xEAn khoa",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).ma_khoa,
              "onUpdate:modelValue": ($event) => unref(form).ma_khoa = $event,
              label: "M\xE3 khoa",
              name: "M\xE3 khoa"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                modelValue: unref(form).ten,
                "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                label: "T\xEAn khoa",
                name: "T\xEAn khoa",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).ma_khoa,
                "onUpdate:modelValue": ($event) => unref(form).ma_khoa = $event,
                label: "M\xE3 khoa",
                name: "M\xE3 khoa"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/CreateFaculty.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UpdateFaculty",
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
    const updateFaculty = () => {
      $api.faculty.updateFaculty(form.value.id, form.value).then(() => {
        $toast.success("C\u1EADp nh\u1EADt khoa th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("faculty");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EA1o \u0111\u1EC1 t\xE0i",
        onCancel: ($event) => emit("cancel"),
        onSubmit: updateFaculty
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).ten,
              "onUpdate:modelValue": ($event) => unref(form).ten = $event,
              label: "T\xEAn khoa",
              name: "T\xEAn khoa",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).ma_khoa,
              "onUpdate:modelValue": ($event) => unref(form).ma_khoa = $event,
              label: "M\xE3 khoa",
              name: "M\xE3 khoa"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                modelValue: unref(form).ten,
                "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                label: "T\xEAn khoa",
                name: "T\xEAn khoa",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).ma_khoa,
                "onUpdate:modelValue": ($event) => unref(form).ma_khoa = $event,
                label: "M\xE3 khoa",
                name: "M\xE3 khoa"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/UpdateFaculty.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
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
function useGetFacultyWithAdmin(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["faculty-admins", params],
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
      return $api.superAdmin.getFacultyWithAdmin(query2);
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
  __name: "CreateSuperTeacher",
  __ssrInlineRender: true,
  props: {
    faculty: {
      type: Object,
      required: true
    }
  },
  emits: ["cancel", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = reactive({
      hodem: "",
      ten: "",
      maso: "",
      email: "",
      khoa_id: props.faculty.id,
      type: "teacher"
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const createFaculty = () => {
      $api.admin.createSuperTeacher(form).then(() => {
        $toast.success("T\u1EA1o c\xE1n b\u1ED9 khoa th\xE0nh c\xF4ng");
        emit("success");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: `T\u1EA1o c\xE1n b\u1ED9 ${__props.faculty.ten}`,
        onCancel: ($event) => emit("cancel"),
        onSubmit: createFaculty
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).hodem,
              "onUpdate:modelValue": ($event) => unref(form).hodem = $event,
              label: "H\u1ECD \u0111\u1EC7m",
              name: "H\u1ECD \u0111\u1EC7m",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).ten,
              "onUpdate:modelValue": ($event) => unref(form).ten = $event,
              label: "T\xEAn",
              name: "T\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              label: "Email",
              name: "Email",
              rules: "required|email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).maso,
              "onUpdate:modelValue": ($event) => unref(form).maso = $event,
              label: "M\xE3 s\u1ED1",
              name: "M\xE3 s\u1ED1",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                modelValue: unref(form).hodem,
                "onUpdate:modelValue": ($event) => unref(form).hodem = $event,
                label: "H\u1ECD \u0111\u1EC7m",
                name: "H\u1ECD \u0111\u1EC7m",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).ten,
                "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                label: "T\xEAn",
                name: "T\xEAn",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                label: "Email",
                name: "Email",
                rules: "required|email"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).maso,
                "onUpdate:modelValue": ($event) => unref(form).maso = $event,
                label: "M\xE3 s\u1ED1",
                name: "M\xE3 s\u1ED1",
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/CreateSuperTeacher.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListSuperTeacher",
  __ssrInlineRender: true,
  props: {
    faculty: {
      type: Object,
      required: true
    }
  },
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    reactive({
      hodem: "",
      ten: "",
      maso: "",
      email: "",
      khoa_id: props.faculty.id,
      type: "teacher"
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const headers = [
      {
        title: "STT",
        align: "center",
        sortable: false,
        key: "index",
        width: 30
      },
      { title: "T\xEAn gi\u1EA3ng vi\xEAn", key: "ten", minWidth: 150 },
      { title: "M\xE3 s\u1ED1", key: "maso", width: "10%", minWidth: 100 },
      { title: "H\xE0nh \u0111\u1ED9ng", key: "action", width: "30%", minWidth: 350, align: "center" }
    ];
    const deleteFacultyAdmin = (item) => {
      $api.superAdmin.deleteSuperTeacher(item.id).then(() => {
        $toast.success("X\xF3a c\xE1n b\u1ED9 khoa th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("faculty-admins");
        emit("cancel");
      });
    };
    const onCreateNewSuperTeacher = () => {
      queryClient.invalidateQueries("faculty-admins");
      emit("cancel");
    };
    const resetPassword = (item) => {
      $api.admin.resetPassword(item.id).then(() => {
        $toast.success("Reset m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        "can-cancel": "",
        "cancel-text": "\u0110\xF3ng",
        "hide-submit": "",
        title: `Danh s\xE1ch c\xE1n b\u1ED9 ${__props.faculty.ten}`,
        onCancel: ($event) => emit("cancel")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDialog, {
              "min-width": "400",
              width: "40%"
            }, {
              activator: withCtx(({ props: activatorProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, mergeProps(activatorProps, {
                    class: "mb-4",
                    color: "success",
                    size: "small"
                  }), {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`T\u1EA1o c\xE1n b\u1ED9 khoa`);
                      } else {
                        return [
                          createTextVNode("T\u1EA1o c\xE1n b\u1ED9 khoa")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, mergeProps(activatorProps, {
                      class: "mb-4",
                      color: "success",
                      size: "small"
                    }), {
                      default: withCtx(() => [
                        createTextVNode("T\u1EA1o c\xE1n b\u1ED9 khoa")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    faculty: __props.faculty,
                    onCancel: ($event) => isActive.value = false,
                    onSuccess: onCreateNewSuperTeacher
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      faculty: __props.faculty,
                      onCancel: ($event) => isActive.value = false,
                      onSuccess: onCreateNewSuperTeacher
                    }, null, 8, ["faculty", "onCancel"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.faculty) {
              _push2(ssrRenderComponent(VDataTable, {
                headers,
                "hide-default-footer": "",
                items: __props.faculty.teachers
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
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item.hodem)} ${ssrInterpolate(item.ten)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(item.hodem) + " " + toDisplayString(item.ten), 1)
                    ];
                  }
                }),
                "item.action": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      size: "small",
                      class: "mr-2",
                      onClick: ($event) => resetPassword(item)
                    }, {
                      default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-refresh`);
                              } else {
                                return [
                                  createTextVNode("mdi-refresh")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>Reset m\u1EADt kh\u1EA9u</span>`);
                        } else {
                          return [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-refresh")
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "Reset m\u1EADt kh\u1EA9u")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VBtn, {
                      color: "error",
                      size: "small",
                      onClick: ($event) => deleteFacultyAdmin(item)
                    }, {
                      default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`X\xF3a`);
                        } else {
                          return [
                            createTextVNode("X\xF3a")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VBtn, {
                        color: "primary",
                        size: "small",
                        class: "mr-2",
                        onClick: ($event) => resetPassword(item)
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-refresh")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Reset m\u1EADt kh\u1EA9u")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(VBtn, {
                        color: "error",
                        size: "small",
                        onClick: ($event) => deleteFacultyAdmin(item)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("X\xF3a")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(VDialog, {
                "min-width": "400",
                width: "40%"
              }, {
                activator: withCtx(({ props: activatorProps }) => [
                  createVNode(VBtn, mergeProps(activatorProps, {
                    class: "mb-4",
                    color: "success",
                    size: "small"
                  }), {
                    default: withCtx(() => [
                      createTextVNode("T\u1EA1o c\xE1n b\u1ED9 khoa")
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(({ isActive }) => [
                  createVNode(_sfc_main$2, {
                    faculty: __props.faculty,
                    onCancel: ($event) => isActive.value = false,
                    onSuccess: onCreateNewSuperTeacher
                  }, null, 8, ["faculty", "onCancel"])
                ]),
                _: 1
              }),
              __props.faculty ? (openBlock(), createBlock(VDataTable, {
                key: 0,
                headers,
                "hide-default-footer": "",
                items: __props.faculty.teachers
              }, {
                "item.index": withCtx(({ index }) => [
                  createVNode("span", null, toDisplayString(index + 1), 1)
                ]),
                "item.ten": withCtx(({ item }) => [
                  createVNode("span", null, toDisplayString(item.hodem) + " " + toDisplayString(item.ten), 1)
                ]),
                "item.action": withCtx(({ item }) => [
                  createVNode(VBtn, {
                    color: "primary",
                    size: "small",
                    class: "mr-2",
                    onClick: ($event) => resetPassword(item)
                  }, {
                    default: withCtx(() => [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-refresh")
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, "Reset m\u1EADt kh\u1EA9u")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(VBtn, {
                    color: "error",
                    size: "small",
                    onClick: ($event) => deleteFacultyAdmin(item)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("X\xF3a")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              }, 8, ["items"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/ListSuperTeacher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faculty",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = [
      {
        title: "STT",
        align: "start",
        sortable: false,
        key: "index",
        width: 30
      },
      { title: "T\xEAn khoa", key: "ten", minWidth: 250 },
      { title: "M\xE3 khoa", key: "ma_khoa", width: "30%", minWidth: 350 },
      { title: "C\xE1n b\u1ED9 khoa", key: "super_teachers", width: "30%", minWidth: 300, align: "center" },
      { title: "", key: "action", width: "10%", minWidth: 100, sortable: false, align: "center" }
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
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const deleteFaculty = (item) => {
      $api.faculty.deleteFaculty(item.id).then(() => {
        $toast.success("X\xF3a khoa th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("faculty-admins");
      });
    };
    const { items, refetch } = useGetFacultyWithAdmin(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Qu\u1EA3n l\xFD khoa</div>`);
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
                        _push4(`<span${_scopeId3}>Th\xEAm m\u1EDBi Khoa</span>`);
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-plus")
                            ]),
                            _: 1
                          }),
                          createVNode("span", null, "Th\xEAm m\u1EDBi Khoa")
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
                        createVNode("span", null, "Th\xEAm m\u1EDBi Khoa")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    onCancel: ($event) => isActive.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
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
              "item.super_teachers": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDialog, {
                    "min-width": "600",
                    width: "60%"
                  }, {
                    activator: withCtx(({ props: activatorProps }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, mergeProps(activatorProps, {
                          color: "success",
                          size: "small"
                        }), {
                          default: withCtx((_22, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`C\xE1n b\u1ED9 khoa`);
                            } else {
                              return [
                                createTextVNode("C\xE1n b\u1ED9 khoa")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, mergeProps(activatorProps, {
                            color: "success",
                            size: "small"
                          }), {
                            default: withCtx(() => [
                              createTextVNode("C\xE1n b\u1ED9 khoa")
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx(({ isActive }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          faculty: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            faculty: item,
                            onCancel: ($event) => isActive.value = false
                          }, null, 8, ["faculty", "onCancel"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDialog, {
                      "min-width": "600",
                      width: "60%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        createVNode(VBtn, mergeProps(activatorProps, {
                          color: "success",
                          size: "small"
                        }), {
                          default: withCtx(() => [
                            createTextVNode("C\xE1n b\u1ED9 khoa")
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$1, {
                          faculty: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["faculty", "onCancel"])
                      ]),
                      _: 2
                    }, 1024)
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
                        _push4(ssrRenderComponent(VBtn, mergeProps(activatorProps, {
                          color: "success",
                          icon: "",
                          size: "small",
                          variant: "text"
                        }), {
                          default: withCtx((_22, _push5, _parent5, _scopeId4) => {
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
                        return [
                          createVNode(VBtn, mergeProps(activatorProps, {
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
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx(({ isActive }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, {
                          topic: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$3, {
                            topic: item,
                            onCancel: ($event) => isActive.value = false
                          }, null, 8, ["topic", "onCancel"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    color: "error",
                    icon: "",
                    size: "small",
                    variant: "text",
                    onClick: ($event) => deleteFaculty(item)
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-trash-can`);
                            } else {
                              return [
                                createTextVNode("mdi-trash-can")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-trash-can")
                            ]),
                            _: 1
                          })
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
                        createVNode(VBtn, mergeProps(activatorProps, {
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
                        }, 1040)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$3, {
                          topic: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["topic", "onCancel"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VBtn, {
                      color: "error",
                      icon: "",
                      size: "small",
                      variant: "text",
                      onClick: ($event) => deleteFaculty(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-trash-can")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
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
                        createVNode("span", null, "Th\xEAm m\u1EDBi Khoa")
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  default: withCtx(({ isActive }) => [
                    createVNode(_sfc_main$4, {
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
                  items: unref(items)
                }, {
                  "item.index": withCtx(({ index }) => [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ]),
                  "item.super_teachers": withCtx(({ item }) => [
                    createVNode(VDialog, {
                      "min-width": "600",
                      width: "60%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        createVNode(VBtn, mergeProps(activatorProps, {
                          color: "success",
                          size: "small"
                        }), {
                          default: withCtx(() => [
                            createTextVNode("C\xE1n b\u1ED9 khoa")
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$1, {
                          faculty: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["faculty", "onCancel"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  "item.action": withCtx(({ item }) => [
                    createVNode(VDialog, {
                      "min-width": "400",
                      width: "40%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => [
                        createVNode(VBtn, mergeProps(activatorProps, {
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
                        }, 1040)
                      ]),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$3, {
                          topic: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["topic", "onCancel"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VBtn, {
                      color: "error",
                      icon: "",
                      size: "small",
                      variant: "text",
                      onClick: ($event) => deleteFaculty(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-trash-can")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/super/faculty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faculty-DnQPrEr3.mjs.map
