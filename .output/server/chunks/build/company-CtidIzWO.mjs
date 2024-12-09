import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useModel, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { _ as _sfc_main$5 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$6 } from './AppTextField-DdQ0O2ei.mjs';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { b as useNuxtApp, a_ as useAuth, V as VBtn, e as VIcon, f as VSpacer } from './server.mjs';
import { V as VAutocomplete } from './VAutocomplete-BklwJd8l.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { u as useGetInterns } from './use-get-intern-CtNQtRjH.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
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
function useGetTeachers(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["student-teacher", params],
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
      return $api.studentTeacher.getTeachers(query2);
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StudentTeacherAutocomplete",
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
    const getFullName = (item) => `${item.hodem} ${item.ten}`;
    const { items, isLoading } = useGetTeachers(queryBuilder);
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/atoms/StudentTeacherAutocomplete.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CreateIntern",
  __ssrInlineRender: true,
  emits: ["cancel"],
  setup(__props, { emit: __emit }) {
    const form = reactive({
      company_name: "",
      address: "",
      company_phone: "",
      company_email: "",
      supervisor_name: "",
      supervisor_phone: "",
      supervisor_email: "",
      teacher_id: []
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const createStudentIntern = () => {
      $api.intern.createIntern(form).then(() => {
        $toast.success("\u0110\u0103ng k\xFD th\u1EF1c t\u1EADp th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("intern");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "\u0110\u0103ng k\xFD th\u01B0c t\u1EADp",
        onCancel: ($event) => emit("cancel"),
        onSubmit: createStudentIntern
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).company_name,
              "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
              label: "T\xEAn c\xF4ng ty",
              name: "T\xEAn c\xF4ng ty",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).company_email,
              "onUpdate:modelValue": ($event) => unref(form).company_email = $event,
              label: "Emai c\xF4ng ty",
              name: "Emai c\xF4ng ty",
              type: "textarea"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).company_phone,
              "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
              label: "S\u0110T c\xF4ng ty",
              name: "S\u0110T c\xF4ng ty"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).address,
              "onUpdate:modelValue": ($event) => unref(form).address = $event,
              label: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty",
              name: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).supervisor_name,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_name = $event,
              label: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
              name: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).supervisor_phone,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_phone = $event,
              label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
              name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).supervisor_email,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_email = $event,
              label: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
              name: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).teacher_id,
              "onUpdate:modelValue": ($event) => unref(form).teacher_id = $event,
              name: "Gi\u1EA3ng vi\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                modelValue: unref(form).company_name,
                "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                label: "T\xEAn c\xF4ng ty",
                name: "T\xEAn c\xF4ng ty",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).company_email,
                "onUpdate:modelValue": ($event) => unref(form).company_email = $event,
                label: "Emai c\xF4ng ty",
                name: "Emai c\xF4ng ty",
                type: "textarea"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).company_phone,
                "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
                label: "S\u0110T c\xF4ng ty",
                name: "S\u0110T c\xF4ng ty"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).address,
                "onUpdate:modelValue": ($event) => unref(form).address = $event,
                label: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty",
                name: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).supervisor_name,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_name = $event,
                label: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
                name: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).supervisor_phone,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_phone = $event,
                label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
                name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).supervisor_email,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_email = $event,
                label: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
                name: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$4, {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/company/molecules/CreateIntern.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const filters = {
  statusColor(type) {
    switch (type) {
      case "pending":
        return "info";
      case "approved":
        return "success";
      case "rejected":
        return "error";
      default:
        return "#ccc";
    }
  },
  statusType(type) {
    switch (type) {
      case "pending":
        return "Ch\u1EDD duy\u1EC7t";
      case "approved":
        return "\u0110\xE3 duy\u1EC7t";
      case "rejected":
        return "T\u1EEB ch\u1ED1i";
      default:
        return "Ch\u1EDD duy\u1EC7t";
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UpdateIntern",
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
      form.value.status = "pending";
      $api.intern.updateIntern(form.value.id, form.value).then(() => {
        $toast.success("C\u1EADp nh\u1EADt th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("intern");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "C\u1EADp nh\u1EADt th\xF4ng tin th\u1EF1c t\u1EADp",
        onCancel: ($event) => emit("cancel"),
        onSubmit: importStudentIntern
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).company_name,
              "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
              label: "T\xEAn c\xF4ng ty",
              name: "T\xEAn c\xF4ng ty",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).company_email,
              "onUpdate:modelValue": ($event) => unref(form).company_email = $event,
              label: "Email c\xF4ng ty",
              name: "Emai c\xF4ng ty",
              type: "textarea"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).company_phone,
              "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
              label: "S\u0110T c\xF4ng ty",
              name: "S\u0110T c\xF4ng ty"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).address,
              "onUpdate:modelValue": ($event) => unref(form).address = $event,
              label: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty",
              name: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).supervisor_name,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_name = $event,
              label: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
              name: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).supervisor_phone,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_phone = $event,
              label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
              name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: unref(form).supervisor_email,
              "onUpdate:modelValue": ($event) => unref(form).supervisor_email = $event,
              label: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
              name: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                modelValue: unref(form).company_name,
                "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                label: "T\xEAn c\xF4ng ty",
                name: "T\xEAn c\xF4ng ty",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).company_email,
                "onUpdate:modelValue": ($event) => unref(form).company_email = $event,
                label: "Email c\xF4ng ty",
                name: "Emai c\xF4ng ty",
                type: "textarea"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).company_phone,
                "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
                label: "S\u0110T c\xF4ng ty",
                name: "S\u0110T c\xF4ng ty"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).address,
                "onUpdate:modelValue": ($event) => unref(form).address = $event,
                label: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty",
                name: "\u0110\u1ECBa ch\u1EC9 c\xF4ng ty"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).supervisor_name,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_name = $event,
                label: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
                name: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).supervisor_phone,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_phone = $event,
                label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
                name: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$6, {
                modelValue: unref(form).supervisor_email,
                "onUpdate:modelValue": ($event) => unref(form).supervisor_email = $event,
                label: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn",
                name: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/company/molecules/UpdateIntern.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DeleteIntern",
  __ssrInlineRender: true,
  props: {
    intern: {
      type: Object,
      required: true
    }
  },
  emits: ["success", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { $api, $toast } = useNuxtApp();
    const deleteIntern = () => {
      console.log("Deleting intern with ID:", props.intern.id);
      $api.intern.deleteIntern(props.intern.id).then(() => {
        $toast.success("H\u1EE7y \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp th\xE0nh c\xF4ng");
        emit("success");
        emit("cancel");
      }).catch((error) => {
        $toast.error("C\xF3 l\u1ED7i x\u1EA3y ra khi h\u1EE7y \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp");
        console.error(error);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        "min-width": "400",
        width: "40%"
      }, _attrs), {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps(activatorProps, {
              color: "error",
              icon: "",
              size: "small",
              variant: "text"
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-trash-can`);
                      } else {
                        return [
                          createTextVNode("mdi-trash-can")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps(activatorProps, {
                color: "error",
                icon: "",
                size: "small",
                variant: "text"
              }), {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-trash-can")
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              "can-cancel": "",
              "cancel-text": "H\u1EE7y",
              "submit-text": "X\xF3a",
              title: "X\xE1c nh\u1EADn h\u1EE7y \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp",
              onCancel: ($event) => isActive.value = false,
              onSubmit: deleteIntern
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center text-warning"${_scopeId2}><span${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-warning`);
                      } else {
                        return [
                          createTextVNode("mdi-warning")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(` B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp kh\xF4ng? </span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center text-warning" }, [
                      createVNode("span", null, [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-warning")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp kh\xF4ng? ")
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
                "can-cancel": "",
                "cancel-text": "H\u1EE7y",
                "submit-text": "X\xF3a",
                title: "X\xE1c nh\u1EADn h\u1EE7y \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp",
                onCancel: ($event) => isActive.value = false,
                onSubmit: deleteIntern
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-center text-warning" }, [
                    createVNode("span", null, [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-warning")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y \u0111\u0103ng k\xFD th\u1EF1c t\u1EADp kh\xF4ng? ")
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["onCancel"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/company/molecules/DeleteIntern.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref("");
    const headers = [
      { title: "T\xEAn c\xF4ng ty", key: "company_name", width: "15%", minWidth: 150 },
      { title: "\u0110\u1ECBa ch\u1EC9", key: "address", width: "15%", minWidth: 150 },
      { title: "Email c\xF4ng ty", key: "company_email", width: "10%", minWidth: 100 },
      { title: "S\u0110T c\xF4ng ty", key: "company_phone", width: "10%", minWidth: 100 },
      { title: "T\xEAn ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn", key: "supervisor_name", width: "10%", minWidth: 100 },
      { title: "S\u0110T ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn", key: "supervisor_phone", width: "10%", minWidth: 100 },
      { title: "Email ng\u01B0\u1EDDi h\u01B0\u1EDBng d\u1EABn", key: "supervisor_email", width: "10%", minWidth: 100 },
      { title: "GVHD", key: "teacher", width: "10%", minWidth: 100 },
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
    useQueryClient();
    const { items, totalItems, isLoading, refetch } = useGetInterns(queryBuilder);
    const hasRegistered = computed(() => {
      return items.value.some((item) => item.student.id === data.value.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Th\u1EF1c t\u1EADp doanh nghi\u1EC7p</div>`);
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
                  if (!unref(hasRegistered)) {
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
                          _push4(`<span${_scopeId3}>\u0110\u0103ng k\xFD th\u1EF1c t\u1EADp</span>`);
                        } else {
                          return [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-plus")
                              ]),
                              _: 1
                            }),
                            createVNode("span", null, "\u0110\u0103ng k\xFD th\u1EF1c t\u1EADp")
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
                    !unref(hasRegistered) ? (openBlock(), createBlock(VBtn, mergeProps({
                      key: 0,
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
                        createVNode("span", null, "\u0110\u0103ng k\xFD th\u1EF1c t\u1EADp")
                      ]),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }
              }),
              default: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    onCancel: ($event) => isActive.value = false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      onCancel: ($event) => isActive.value = false
                    }, null, 8, ["onCancel"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 h-[calc(100%-_45px)] overflow-y-hidden"${_scopeId}>`);
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
                  _push3(ssrRenderComponent(VChip, {
                    color: unref(filters).statusColor(item.status),
                    size: "small",
                    variant: "flat"
                  }, {
                    default: withCtx((_22, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(filters).statusType(item.status))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(filters).statusType(item.status)), 1)
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
                        createTextVNode(toDisplayString(unref(filters).statusType(item.status)), 1)
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
                      var _a, _b;
                      if (_push4) {
                        if (((_a = unref(data)) == null ? void 0 : _a.id) == item.student.id) {
                          _push4(ssrRenderComponent(VBtn, mergeProps(activatorProps, {
                            color: "success",
                            disabled: item.status == "approved" || !item.status,
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
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          ((_b = unref(data)) == null ? void 0 : _b.id) == item.student.id ? (openBlock(), createBlock(VBtn, mergeProps({ key: 0 }, activatorProps, {
                            color: "success",
                            disabled: item.status == "approved" || !item.status,
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
                          }, 1040, ["disabled"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    default: withCtx(({ isActive }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          intern: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$2, {
                            intern: item,
                            onCancel: ($event) => isActive.value = false
                          }, null, 8, ["intern", "onCancel"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (item.status == "pending") {
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      intern: item,
                      onSuccess: unref(refetch)
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(VDialog, {
                      "min-width": "400",
                      width: "40%"
                    }, {
                      activator: withCtx(({ props: activatorProps }) => {
                        var _a;
                        return [
                          ((_a = unref(data)) == null ? void 0 : _a.id) == item.student.id ? (openBlock(), createBlock(VBtn, mergeProps({ key: 0 }, activatorProps, {
                            color: "success",
                            disabled: item.status == "approved" || !item.status,
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
                          }, 1040, ["disabled"])) : createCommentVNode("", true)
                        ];
                      }),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$2, {
                          intern: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["intern", "onCancel"])
                      ]),
                      _: 2
                    }, 1024),
                    item.status == "pending" ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      intern: item,
                      onSuccess: unref(refetch)
                    }, null, 8, ["intern", "onSuccess"])) : createCommentVNode("", true)
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
                    !unref(hasRegistered) ? (openBlock(), createBlock(VBtn, mergeProps({
                      key: 0,
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
                        createVNode("span", null, "\u0110\u0103ng k\xFD th\u1EF1c t\u1EADp")
                      ]),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ]),
                  default: withCtx(({ isActive }) => [
                    createVNode(_sfc_main$3, {
                      onCancel: ($event) => isActive.value = false
                    }, null, 8, ["onCancel"])
                  ]),
                  _: 1
                }),
                createVNode(VSpacer)
              ]),
              createVNode("div", { class: "mt-2 h-[calc(100%-_45px)] overflow-y-hidden" }, [
                createVNode(VDataTableVirtual, {
                  class: "h-full",
                  "fixed-header": "",
                  headers,
                  items: unref(items)
                }, {
                  "item.index": withCtx(({ index }) => [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ]),
                  "item.teacher": withCtx(({ item }) => {
                    var _a, _b;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.teacher) == null ? void 0 : _a.hodem) + " " + toDisplayString((_b = item.teacher) == null ? void 0 : _b.ten), 1)
                    ];
                  }),
                  "item.status": withCtx(({ item }) => [
                    createVNode(VChip, {
                      color: unref(filters).statusColor(item.status),
                      size: "small",
                      variant: "flat"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(filters).statusType(item.status)), 1)
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
                        var _a;
                        return [
                          ((_a = unref(data)) == null ? void 0 : _a.id) == item.student.id ? (openBlock(), createBlock(VBtn, mergeProps({ key: 0 }, activatorProps, {
                            color: "success",
                            disabled: item.status == "approved" || !item.status,
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
                          }, 1040, ["disabled"])) : createCommentVNode("", true)
                        ];
                      }),
                      default: withCtx(({ isActive }) => [
                        createVNode(_sfc_main$2, {
                          intern: item,
                          onCancel: ($event) => isActive.value = false
                        }, null, 8, ["intern", "onCancel"])
                      ]),
                      _: 2
                    }, 1024),
                    item.status == "pending" ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      intern: item,
                      onSuccess: unref(refetch)
                    }, null, 8, ["intern", "onSuccess"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=company-CtidIzWO.mjs.map
