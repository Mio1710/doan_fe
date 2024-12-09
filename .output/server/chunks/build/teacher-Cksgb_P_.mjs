import { useSSRContext, ref, computed, createVNode, mergeProps, Fragment, shallowRef, watch, provide, withDirectives, resolveDirective, inject, vShow, toRef, defineComponent, withCtx, unref, isRef, createTextVNode, reactive, toDisplayString, openBlock, createBlock, renderList, mergeModels, useModel, resolveComponent, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { _ as _sfc_main$9 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$a } from './AppTextField-DdQ0O2ei.mjs';
import { _ as _sfc_main$b } from './TeacherAutocomplete-C7_6KVVK.mjs';
import { j as propsFactory, ap as omit, b0 as makeVBtnProps, g as genericComponent, ax as useTextColor, h as useRender, V as VBtn, a4 as forwardRefs, m as makeComponentProps, k as makeTagProps, D as makeThemeProps, F as provideTheme, a8 as useRtl, a7 as useLocale, aC as useGroup, a2 as useProxiedModel, aG as makeGroupItemProps, b4 as makeLazyProps, aH as useGroupItem, b5 as useLazy, M as MaybeTransition, B as makeDensityProps, J as useDensity, v as useBackgroundColor, a3 as useScopeId, p as provideDefaults, y as convertToUnit, b as useNuxtApp, e as VIcon, f as VSpacer, b1 as animate, b2 as standardEasing, b6 as isObject, b3 as keys } from './server.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { V as VAutocomplete } from './VAutocomplete-BklwJd8l.mjs';
import { m as makeVSlideGroupProps, a as VSlideGroup, V as VChip } from './VChip-LjVjlGI_.mjs';
import { u as useGetTeachers } from './use-get-teachers-B3LLnpVr.mjs';
import { V as VDataTableVirtual } from './VDataTableVirtual-DdrSO8OG.mjs';
import { V as VSwitch } from './VSwitch-BpQKtyIR.mjs';
import { V as VCard, a as VCardText } from './VCard-DOF4acQr.mjs';
import { u as useSsrBoot } from './VList-Ch2cSLwT.mjs';
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
import './VCheckboxBtn-DaFH5r1c.mjs';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CreateTeacherGroup",
  __ssrInlineRender: true,
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const form = reactive({
      name: "",
      teacher_ids: []
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const createFaculty = () => {
      $api.teacherGroup.createTeacherGroup(form).then(() => {
        $toast.success("T\u1EA1o Nh\xF3m gi\u1EA3ng vi\xEAn th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("teacher-group");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$9, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EA1o nh\xF3m",
        onCancel: ($event) => emit("cancel"),
        onSubmit: createFaculty
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, {
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              label: "T\xEAn nh\xF3m",
              name: "T\xEAn nh\xF3m",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              modelValue: unref(form).teacher_ids,
              "onUpdate:modelValue": ($event) => unref(form).teacher_ids = $event,
              label: "Gi\u1EA3ng vi\xEAn",
              multiple: true,
              name: "Gi\u1EA3ng vi\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$a, {
                modelValue: unref(form).name,
                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                label: "T\xEAn nh\xF3m",
                name: "T\xEAn nh\xF3m",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$b, {
                modelValue: unref(form).teacher_ids,
                "onUpdate:modelValue": ($event) => unref(form).teacher_ids = $event,
                label: "Gi\u1EA3ng vi\xEAn",
                multiple: true,
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/CreateTeacherGroup.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
function useGetListTeacherGroups(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["teacher-group", params],
    () => {
      return $api.teacherGroup.getTeacherGroups();
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
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "UpdateTeacherGroup",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = reactive({
      name: props.item.name,
      teacher_ids: props.item.teachers.map((teacher) => teacher == null ? void 0 : teacher.teacher_id)
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const updateTeacherGroup = () => {
      $api.teacherGroup.updateTeacherGroup(props.item.id, form).then(() => {
        $toast.success("T\u1EA1o Nh\xF3m gi\u1EA3ng vi\xEAn th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("teacher-group");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$9, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EA1o nh\xF3m",
        onCancel: ($event) => emit("cancel"),
        onSubmit: updateTeacherGroup
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, {
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              label: "T\xEAn nh\xF3m",
              name: "T\xEAn nh\xF3m",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              modelValue: unref(form).teacher_ids,
              "onUpdate:modelValue": ($event) => unref(form).teacher_ids = $event,
              multiple: true,
              name: "Gi\u1EA3ng vi\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$a, {
                modelValue: unref(form).name,
                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                label: "T\xEAn nh\xF3m",
                name: "T\xEAn nh\xF3m",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$b, {
                modelValue: unref(form).teacher_ids,
                "onUpdate:modelValue": ($event) => unref(form).teacher_ids = $event,
                multiple: true,
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/UpdateTeacherGroup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TeacherGroup",
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
      { title: "Nh\xF3m ph\u1EA3n bi\u1EC7n", key: "name", width: "20%", minWidth: 200 },
      { title: "Gi\u1EA3ng vi\xEAn", key: "gv", minWidth: 350 },
      { title: "", key: "action", width: "20%", minWidth: 200 }
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
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const deleteGroup = (id) => {
      $api.teacherGroup.deleteTeacherGroup(id).then(() => {
        queryClient.invalidateQueries("teacher-group");
        $toast.success("X\xF3a nh\xF3m th\xE0nh c\xF4ng");
      });
    };
    const { items, totalItems, isLoading, refetch, isFetching } = useGetListTeacherGroups(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="d-flex">`);
      _push(ssrRenderComponent(VDialog, {
        "min-width": "400",
        width: "40%"
      }, {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({
              color: "success",
              size: "small"
            }, activatorProps, { class: "mt-2" }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-plus`);
                      } else {
                        return [
                          createTextVNode("mdi-plus")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Th\xEAm m\u1EDBi nh\xF3m</span>`);
                } else {
                  return [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-plus")
                      ]),
                      _: 1
                    }),
                    createVNode("span", null, "Th\xEAm m\u1EDBi nh\xF3m")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({
                color: "success",
                size: "small"
              }, activatorProps, { class: "mt-2" }), {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-plus")
                    ]),
                    _: 1
                  }),
                  createVNode("span", null, "Th\xEAm m\u1EDBi nh\xF3m")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              onCancel: ($event) => isActive.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, {
                onCancel: ($event) => isActive.value = false
              }, null, 8, ["onCancel"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "success",
        loading: unref(isFetching),
        size: "small",
        onClick: unref(refetch)
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, null, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-refresh`);
                } else {
                  return [
                    createTextVNode("mdi-refresh")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
      }, _parent));
      _push(`</div><div class="mt-2 h-[calc(100%_-_30px)] overflow-y-hidden">`);
      _push(ssrRenderComponent(VDataTable, {
        class: "h-full",
        "fixed-header": "",
        headers,
        "hide-default-footer": "",
        items: unref(items),
        loading: unref(isLoading)
      }, {
        "item.index": withCtx(({ index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(index + 1), 1)
            ];
          }
        }),
        "item.gv": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(item.teachers, (teacher, index) => {
              var _a, _b, _c;
              _push2(`<div${_scopeId}>${ssrInterpolate((_a = teacher.teacher) == null ? void 0 : _a.maso)} - ${ssrInterpolate((_b = teacher.teacher) == null ? void 0 : _b.hodem)} ${ssrInterpolate((_c = teacher.teacher) == null ? void 0 : _c.ten)}</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(item.teachers, (teacher, index) => {
                var _a, _b, _c;
                return openBlock(), createBlock("div", { key: index }, toDisplayString((_a = teacher.teacher) == null ? void 0 : _a.maso) + " - " + toDisplayString((_b = teacher.teacher) == null ? void 0 : _b.hodem) + " " + toDisplayString((_c = teacher.teacher) == null ? void 0 : _c.ten), 1);
              }), 128))
            ];
          }
        }),
        "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
                        _push4(`<span${_scopeId3}>Ch\u1EC9nh s\u1EEDa</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Ch\u1EC9nh s\u1EEDa")
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
                        createVNode("span", null, "Ch\u1EC9nh s\u1EEDa")
                      ]),
                      _: 2
                    }, 1040)
                  ];
                }
              }),
              default: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    item,
                    onCancel: ($event) => isActive.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      item,
                      onCancel: ($event) => isActive.value = false
                    }, null, 8, ["item", "onCancel"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              class: "ml-2",
              color: "error",
              size: "small",
              onClick: ($event) => deleteGroup(item.id)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`X\xF3a`);
                } else {
                  return [
                    createTextVNode("X\xF3a")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
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
                      createVNode("span", null, "Ch\u1EC9nh s\u1EEDa")
                    ]),
                    _: 2
                  }, 1040)
                ]),
                default: withCtx(({ isActive }) => [
                  createVNode(_sfc_main$7, {
                    item,
                    onCancel: ($event) => isActive.value = false
                  }, null, 8, ["item", "onCancel"])
                ]),
                _: 2
              }, 1024),
              createVNode(VBtn, {
                class: "ml-2",
                color: "error",
                size: "small",
                onClick: ($event) => deleteGroup(item.id)
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
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/organism/TeacherGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
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
function useGetAllStudentGroups(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["student-group", params],
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
      return $api.superTeacher.getAllStudentGroups(query2);
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StudentGroupAutocomplete",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    multiple: {
      type: Boolean,
      default: false
    },
    isNullGroupTeacher: {
      type: Boolean,
      required: false
    },
    name: {
      type: String,
      default: "Nh\xF3m sinh vi\xEAn"
    },
    rules: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 100,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value,
      filters: {
        is_null_group_teacher: props.isNullGroupTeacher
      }
    }));
    const getFullName = (item) => `Nh\xF3m ${item.id}`;
    const { items, isLoading } = useGetAllStudentGroups(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeField = resolveComponent("VeeField");
      _push(ssrRenderComponent(_component_VeeField, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        name: props.name,
        rules: props.rules
      }, _attrs), {
        default: withCtx(({ errorMessage }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAutocomplete, {
              modelValue: model.value,
              "onUpdate:modelValue": ($event) => model.value = $event,
              chips: "",
              "closable-chips": "",
              "error-messages": errorMessage,
              "item-title": getFullName,
              "item-value": "id",
              items: unref(items),
              label: props.name,
              loading: unref(isLoading),
              multiple: __props.multiple
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAutocomplete, {
                modelValue: model.value,
                "onUpdate:modelValue": ($event) => model.value = $event,
                chips: "",
                "closable-chips": "",
                "error-messages": errorMessage,
                "item-title": getFullName,
                "item-value": "id",
                items: unref(items),
                label: props.name,
                loading: unref(isLoading),
                multiple: __props.multiple
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "items", "label", "loading", "multiple"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/atoms/StudentGroupAutocomplete.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TeacherGroupAutocomplete",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "Nh\xF3m gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n"
    },
    rules: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 100,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value
    }));
    const { items, isLoading } = useGetListTeacherGroups(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeField = resolveComponent("VeeField");
      _push(ssrRenderComponent(_component_VeeField, mergeProps({
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        name: props.name,
        rules: props.rules
      }, _attrs), {
        default: withCtx(({ errorMessage }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAutocomplete, {
              modelValue: model.value,
              "onUpdate:modelValue": ($event) => model.value = $event,
              chips: "",
              class: "mb-4",
              "closable-chips": "",
              "error-messages": errorMessage,
              "item-title": "name",
              "item-value": "id",
              items: unref(items),
              label: props.name,
              loading: unref(isLoading),
              multiple: __props.multiple
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAutocomplete, {
                modelValue: model.value,
                "onUpdate:modelValue": ($event) => model.value = $event,
                chips: "",
                class: "mb-4",
                "closable-chips": "",
                "error-messages": errorMessage,
                "item-title": "name",
                "item-value": "id",
                items: unref(items),
                label: props.name,
                loading: unref(isLoading),
                multiple: __props.multiple
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "items", "label", "loading", "multiple"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/atoms/TeacherGroupAutocomplete.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StudentTeacherGroup",
  __ssrInlineRender: true,
  props: {
    teacherGroupId: {
      type: Number,
      default: null
    },
    studentGroupIds: {
      type: Array,
      default: () => []
    }
  },
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = reactive({
      teacher_group_id: props.teacherGroupId,
      student_group_ids: props.studentGroupIds
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const createFaculty = () => {
      $api.superTeacher.updateStudentGroupTeacher(form).then(() => {
        $toast.success("Ph\xE2n gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("student-group");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$9, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EA1o nh\xF3m",
        onCancel: ($event) => emit("cancel"),
        onSubmit: createFaculty
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).teacher_group_id,
              "onUpdate:modelValue": ($event) => unref(form).teacher_group_id = $event,
              name: "Nh\xF3m gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              modelValue: unref(form).student_group_ids,
              "onUpdate:modelValue": ($event) => unref(form).student_group_ids = $event,
              "is-null-group-teacher": true,
              multiple: true,
              name: "Nh\xF3m sinh vi\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                modelValue: unref(form).teacher_group_id,
                "onUpdate:modelValue": ($event) => unref(form).teacher_group_id = $event,
                name: "Nh\xF3m gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$5, {
                modelValue: unref(form).student_group_ids,
                "onUpdate:modelValue": ($event) => unref(form).student_group_ids = $event,
                "is-null-group-teacher": true,
                multiple: true,
                name: "Nh\xF3m sinh vi\xEAn",
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/molecules/StudentTeacherGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StudentGroup",
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
      { title: "Nh\xF3m SV", key: "groupStudent", width: "10%", minWidth: 50, align: "center" },
      { title: "Sinh vi\xEAn", key: "sv", width: "25%", minWidth: 200 },
      { title: "Nh\xF3m GV", key: "groupTeacher", width: "10%", minWidth: 50, align: "center" },
      { title: "Gi\u1EA3ng vi\xEAn", key: "gv", minWidth: 200 },
      { title: "Ng\xE0y ph\u1EA3n bi\u1EC7n", key: "date", width: "15%", minWidth: 150 },
      { title: "", key: "action", width: "10%", minWidth: 100 }
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
    const { items, totalItems, isLoading, refetch, isFetching } = useGetAllStudentGroups(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="d-flex">`);
      _push(ssrRenderComponent(VDialog, {
        "min-width": "400",
        width: "40%"
      }, {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({
              color: "success",
              size: "small"
            }, activatorProps, { class: "mt-2" }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-plus`);
                      } else {
                        return [
                          createTextVNode("mdi-plus")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Ph\xE2n gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n</span>`);
                } else {
                  return [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-plus")
                      ]),
                      _: 1
                    }),
                    createVNode("span", null, "Ph\xE2n gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({
                color: "success",
                size: "small"
              }, activatorProps, { class: "mt-2" }), {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-plus")
                    ]),
                    _: 1
                  }),
                  createVNode("span", null, "Ph\xE2n gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              onCancel: ($event) => isActive.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                onCancel: ($event) => isActive.value = false
              }, null, 8, ["onCancel"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "success",
        loading: unref(isFetching),
        size: "small",
        onClick: unref(refetch)
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, null, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-refresh`);
                } else {
                  return [
                    createTextVNode("mdi-refresh")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
      }, _parent));
      _push(`</div><div class="mt-2 h-[calc(100%_-_30px)] overflow-y-hidden">`);
      _push(ssrRenderComponent(VDataTable, {
        class: "h-full",
        "fixed-header": "",
        headers,
        "hide-default-footer": "",
        items: unref(items),
        loading: unref(isFetching)
      }, {
        "item.index": withCtx(({ index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(index + 1), 1)
            ];
          }
        }),
        "item.gv": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a = item.teacherGroup) == null ? void 0 : _a.teachers, (teacher, index) => {
              var _a2, _b2, _c;
              _push2(`<div${_scopeId}>${ssrInterpolate((_a2 = teacher.teacher) == null ? void 0 : _a2.maso)} - ${ssrInterpolate((_b2 = teacher.teacher) == null ? void 0 : _b2.hodem)} ${ssrInterpolate((_c = teacher.teacher) == null ? void 0 : _c.ten)}</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b = item.teacherGroup) == null ? void 0 : _b.teachers, (teacher, index) => {
                var _a2, _b2, _c;
                return openBlock(), createBlock("div", { key: index }, toDisplayString((_a2 = teacher.teacher) == null ? void 0 : _a2.maso) + " - " + toDisplayString((_b2 = teacher.teacher) == null ? void 0 : _b2.hodem) + " " + toDisplayString((_c = teacher.teacher) == null ? void 0 : _c.ten), 1);
              }), 128))
            ];
          }
        }),
        "item.groupStudent": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VChip, {
              size: "small",
              variant: "outlined",
              color: "success"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.id)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.id), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VChip, {
                size: "small",
                variant: "outlined",
                color: "success"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.id), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        "item.sv": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(item.studentTopics, (student, index) => {
              var _a, _b, _c;
              _push2(`<div${_scopeId}>${ssrInterpolate((_a = student.student) == null ? void 0 : _a.maso)} - ${ssrInterpolate((_b = student.student) == null ? void 0 : _b.hodem)} ${ssrInterpolate((_c = student.student) == null ? void 0 : _c.ten)}</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(item.studentTopics, (student, index) => {
                var _a, _b, _c;
                return openBlock(), createBlock("div", { key: index }, toDisplayString((_a = student.student) == null ? void 0 : _a.maso) + " - " + toDisplayString((_b = student.student) == null ? void 0 : _b.hodem) + " " + toDisplayString((_c = student.student) == null ? void 0 : _c.ten), 1);
              }), 128))
            ];
          }
        }),
        "item.groupTeacher": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate((_a = item.teacherGroup) == null ? void 0 : _a.name)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString((_b = item.teacherGroup) == null ? void 0 : _b.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/organism/StudentGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListTeacher",
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
      { title: "Gi\u1EA3ng vi\xEAn", key: "ten", width: "20%", minWidth: 200 },
      { title: "M\xE3 s\u1ED1", key: "maso", minWidth: 200 },
      { title: "C\xE1n b\u1ED9 m\xF4n", key: "is_super_teacher", width: "15%", minWidth: 100, align: "center" },
      { title: "C\xE1n b\u1ED9 khoa", key: "is_admin", width: "15%", minWidth: 100, align: "center" }
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
    const { items, totalItems, isLoading, refetch } = useGetTeachers(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-2 h-[calc(100vh_-_160px)] overflow-y-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(VDataTableVirtual, {
        class: "h-full",
        "fixed-header": "",
        headers,
        "hide-default-footer": "",
        items: unref(items),
        loading: unref(isLoading)
      }, {
        "item.index": withCtx(({ index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(index + 1), 1)
            ];
          }
        }),
        "item.is_super_teacher": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSwitch, {
              color: "success",
              "hide-details": "",
              "model-value": item.roles,
              readonly: "",
              value: "super_teacher"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSwitch, {
                color: "success",
                "hide-details": "",
                "model-value": item.roles,
                readonly: "",
                value: "super_teacher"
              }, null, 8, ["model-value"])
            ];
          }
        }),
        "item.is_admin": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VSwitch, {
              color: "success",
              "hide-details": "",
              readonly: "",
              "model-value": item.roles,
              value: "admin"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VSwitch, {
                color: "success",
                "hide-details": "",
                readonly: "",
                "model-value": item.roles,
                value: "admin"
              }, null, 8, ["model-value"])
            ];
          }
        }),
        "item.ten": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(item.hodem + " " + item.ten)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(item.hodem + " " + item.ten), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/super/organism/ListTeacher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a2;
      var _a, _b;
      return (_a2 = (_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) != null ? _a2 : false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a2;
          var _a;
          return createVNode(Fragment, null, [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a2, _b;
  var _a;
  const value = binding.value;
  const target = (value == null ? void 0 : value.parent) ? el.parentElement : el;
  const options = (_a2 = value == null ? void 0 : value.options) != null ? _a2 : {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? void 0 : _a.$.uid;
  if (!target || !uid) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = (_b = target._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? void 0 : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? void 0 : _b.$.uid;
  if (!(target == null ? void 0 : target._touchHandlers) || !uid) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? void 0 : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group) return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? void 0 : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit((_a = window.rootRef.value) == null ? void 0 : _a.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? void 0 : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
function parseItems(items) {
  if (!items) return [];
  return items.map((item) => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => {
          var _a2;
          var _a;
          return [(_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _a2 : items.value.map((item) => {
            var _a3;
            var _a22;
            return (_a3 = (_a22 = slots.tab) == null ? void 0 : _a22.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTab, mergeProps(item, {
              "key": item.text,
              "value": item.value
            }), {
              default: slots[`tab.${item.value}`] ? () => {
                var _a32;
                return (_a32 = slots[`tab.${item.value}`]) == null ? void 0 : _a32.call(slots, {
                  item
                });
              } : void 0
            });
          })];
        }
      }), hasWindow && createVNode(VTabsWindow, mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => {
          var _a;
          return [items.value.map((item) => {
            var _a3;
            var _a2;
            return (_a3 = (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTabsWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a32;
                return (_a32 = slots[`item.${item.value}`]) == null ? void 0 : _a32.call(slots, {
                  item
                });
              }
            });
          }), (_a = slots.window) == null ? void 0 : _a.call(slots)];
        }
      })]);
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "teacher",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Ph\xE2n nh\xF3m gi\u1EA3ng vi\xEAn ph\u1EA3n bi\u1EC7n</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pb-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
              density: "compact"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, { value: 0 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ph\xE2n c\xF4ng`);
                      } else {
                        return [
                          createTextVNode("Ph\xE2n c\xF4ng")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: 1 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nh\xF3m gi\u1EA3ng vi\xEAn`);
                      } else {
                        return [
                          createTextVNode("Nh\xF3m gi\u1EA3ng vi\xEAn")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: 2 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Danh s\xE1ch gi\u1EA3ng vi\xEAn`);
                      } else {
                        return [
                          createTextVNode("Danh s\xE1ch gi\u1EA3ng vi\xEAn")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: 0 }, {
                      default: withCtx(() => [
                        createTextVNode("Ph\xE2n c\xF4ng")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: 1 }, {
                      default: withCtx(() => [
                        createTextVNode("Nh\xF3m gi\u1EA3ng vi\xEAn")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: 2 }, {
                      default: withCtx(() => [
                        createTextVNode("Danh s\xE1ch gi\u1EA3ng vi\xEAn")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "pt-0" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTabsWindow, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTabsWindowItem, { value: 0 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTabsWindowItem, { value: 1 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTabsWindowItem, { value: 2 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$1, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTabsWindowItem, { value: 0 }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          }),
                          createVNode(VTabsWindowItem, { value: 1 }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6)
                            ]),
                            _: 1
                          }),
                          createVNode(VTabsWindowItem, { value: 2 }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTabsWindow, {
                      modelValue: unref(tab),
                      "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                    }, {
                      default: withCtx(() => [
                        createVNode(VTabsWindowItem, { value: 0 }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        }),
                        createVNode(VTabsWindowItem, { value: 1 }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6)
                          ]),
                          _: 1
                        }),
                        createVNode(VTabsWindowItem, { value: 2 }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTabs, {
                modelValue: unref(tab),
                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                density: "compact"
              }, {
                default: withCtx(() => [
                  createVNode(VTab, { value: 0 }, {
                    default: withCtx(() => [
                      createTextVNode("Ph\xE2n c\xF4ng")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: 1 }, {
                    default: withCtx(() => [
                      createTextVNode("Nh\xF3m gi\u1EA3ng vi\xEAn")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: 2 }, {
                    default: withCtx(() => [
                      createTextVNode("Danh s\xE1ch gi\u1EA3ng vi\xEAn")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VCardText, { class: "pt-0" }, {
                default: withCtx(() => [
                  createVNode(VTabsWindow, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                  }, {
                    default: withCtx(() => [
                      createVNode(VTabsWindowItem, { value: 0 }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      }),
                      createVNode(VTabsWindowItem, { value: 1 }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6)
                        ]),
                        _: 1
                      }),
                      createVNode(VTabsWindowItem, { value: 2 }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/subject/teacher.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=teacher-Cksgb_P_.mjs.map
