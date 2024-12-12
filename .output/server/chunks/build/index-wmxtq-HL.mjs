import { useSSRContext, createVNode, mergeProps, defineComponent, ref, withCtx, unref, openBlock, createBlock, createCommentVNode, computed, toDisplayString, createTextVNode, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { j as propsFactory, g as genericComponent, h as useRender, b as useNuxtApp, V as VBtn, f as VSpacer, a_ as useAuth } from './server.mjs';
import { u as useGetTopics } from './use-get-topic-B5C1cEVc.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
import { useQueryClient, useQuery } from 'vue-query';
import { _ as _sfc_main$7 } from './FormCard-BTPzcLlL.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { m as makeVSelectionControlProps, V as VSelectionControl } from './VCheckboxBtn-DaFH5r1c.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
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
import './VDivider-DqGd8YoX.mjs';
import './VChip-LjVjlGI_.mjs';
import './AppForm-OpzBJjUC.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TopicRegister",
  __ssrInlineRender: true,
  props: {
    topicId: {
      type: Number,
      default: null
    }
  },
  emits: ["success", "viewAll"],
  setup(__props, { emit: __emit }) {
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
    const { $api, $toast } = useNuxtApp();
    const { items, totalItems, isLoading, refetch } = useGetTopics(queryBuilder);
    const headers = [
      {
        title: "STT",
        align: "start",
        sortable: false,
        key: "index",
        width: 50
      },
      { title: "T\xEAn \u0111\u1EC1 t\xE0i", key: "ten", width: "20%", minWidth: 200 },
      { title: "M\xF4 t\u1EA3", key: "description", width: "30%", minWidth: 250 },
      { title: "Y\xEAu c\u1EA7u", key: "requirement", width: "15%", minWidth: 200 },
      { title: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng", key: "knowledge", width: "15%", minWidth: 200 },
      { title: "GVHD", key: "gv", width: "10%", minWidth: 100 },
      { title: "S\u1ED1 l\u01B0\u1EE3ng", key: "numberStudent", minWidth: 10 },
      { title: "", key: "action", width: 30, align: "center" }
    ];
    const emit = __emit;
    const registerTopic = (item) => {
      $api.studentTopic.registerTopic(item.id).then(() => {
        emit("success");
        $toast.success("\u0110\u0103ng k\xFD \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        class: "h-full",
        "fixed-header": "",
        headers,
        "hide-default-footer": "",
        items: unref(items),
        "items-per-page": unref(serverOptions).rowsPerPage
      }, _attrs), {
        "item.index": withCtx(({ index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(index + 1), 1)
            ];
          }
        }),
        "item.name": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span${_scopeId}>${(_a = item.name) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: item.name
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        "item.numberStudent": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(item.currentNumberStudent)}/${ssrInterpolate(item.numberStudent)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(item.currentNumberStudent) + "/" + toDisplayString(item.numberStudent), 1)
            ];
          }
        }),
        "item.gv": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate((_a = item == null ? void 0 : item.teacher) == null ? void 0 : _a.hodem)} ${ssrInterpolate((_b = item == null ? void 0 : item.teacher) == null ? void 0 : _b.ten)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString((_c = item == null ? void 0 : item.teacher) == null ? void 0 : _c.hodem) + " " + toDisplayString((_d = item == null ? void 0 : item.teacher) == null ? void 0 : _d.ten), 1)
            ];
          }
        }),
        "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.id == __props.topicId) {
              _push2(ssrRenderComponent(VBtn, {
                color: "primary",
                size: "x-small",
                onClick: ($event) => emit("viewAll")
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Xem`);
                  } else {
                    return [
                      createTextVNode("Xem")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VBtn, {
                color: "success",
                disabled: __props.topicId || item.currentNumberStudent >= item.numberStudent,
                size: "x-small",
                onClick: ($event) => registerTopic(item)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0110\u0103ng k\xFD `);
                  } else {
                    return [
                      createTextVNode(" \u0110\u0103ng k\xFD ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            }
          } else {
            return [
              item.id == __props.topicId ? (openBlock(), createBlock(VBtn, {
                key: 0,
                color: "primary",
                size: "x-small",
                onClick: ($event) => emit("viewAll")
              }, {
                default: withCtx(() => [
                  createTextVNode("Xem")
                ]),
                _: 1
              }, 8, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                key: 1,
                color: "success",
                disabled: __props.topicId || item.currentNumberStudent >= item.numberStudent,
                size: "x-small",
                onClick: ($event) => registerTopic(item)
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0110\u0103ng k\xFD ")
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/project/organisms/TopicRegister.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CancelTopic",
  __ssrInlineRender: true,
  props: {
    partner: {
      type: Array,
      default: () => []
    }
  },
  emits: ["cancel", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const cancelTopic = () => {
      const user_ids = props.partner.map((item) => item.student_id);
      $api.studentTopic.updateTopic({ topic_id: null, partner_id: null, user_ids }).then(() => {
        $toast.success("H\u1EE7y \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("topic");
        emit("success");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, mergeProps({
        "can-cancel": "",
        "submit-text": "X\xE1c nh\u1EADn",
        title: "X\xE1c nh\u1EADn h\u1EE7y \u0111\u1EC1 t\xE0i",
        onCancel: ($event) => emit("cancel"),
        onSubmit: cancelTopic
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="font-bold text-center text-warning"${_scopeId}>N\u1EBFu h\u1EE7y \u0111\u1EC1 t\xE0i b\u1EA1n s\u1EBD \u0111\u1ED3ng th\u1EDDi h\u1EE7y nh\xF3m?</div><div class="text-center font-italic"${_scopeId}>H\xE0nh \u0111\u1ED9ng kh\xF4ng th\u1EC3 ho\xE0n t\xE1c!</div>`);
          } else {
            return [
              createVNode("div", { class: "font-bold text-center text-warning" }, "N\u1EBFu h\u1EE7y \u0111\u1EC1 t\xE0i b\u1EA1n s\u1EBD \u0111\u1ED3ng th\u1EDDi h\u1EE7y nh\xF3m?"),
              createVNode("div", { class: "text-center font-italic" }, "H\xE0nh \u0111\u1ED9ng kh\xF4ng th\u1EC3 ho\xE0n t\xE1c!")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/project/molecules/CancelTopic.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TopicRegisted",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    partner: {
      type: Array,
      default: () => []
    },
    numberStudent: {
      type: Number,
      default: 0
    }
  },
  emits: ["refetch", "viewAll"],
  setup(__props, { emit: __emit }) {
    useNuxtApp();
    const emit = __emit;
    const headers = [
      {
        title: "STT",
        align: "start",
        sortable: false,
        key: "index",
        width: 50
      },
      { title: "T\xEAn \u0111\u1EC1 t\xE0i", key: "ten", width: "20%", minWidth: 150 },
      { title: "M\xF4 t\u1EA3", key: "description", width: "35%", minWidth: 300 },
      { title: "Y\xEAu c\u1EA7u", key: "requirement", width: "20%", minWidth: 200 },
      { title: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng", key: "knowledge", width: "15%", minWidth: 100 },
      { title: "Gi\u1EA3ng vi\xEAn HD", key: "gvhd", width: "10%", minWidth: 100 },
      { title: "S\u1ED1 l\u01B0\u1EE3ng", key: "numberStudent", align: "center" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="d-flex py-2 bottom-border"><div class="text-lg">\u0110\u1EC1 t\xE0i \u0111\xE3 \u0111\u0103ng k\xFD th\xE0nh c\xF4ng</div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VDialog, {
        "min-width": "400",
        width: "40%"
      }, {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, mergeProps({
              color: "error",
              size: "small"
            }, activatorProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`H\u1EE7y \u0111\u1EC1 t\xE0i`);
                } else {
                  return [
                    createTextVNode("H\u1EE7y \u0111\u1EC1 t\xE0i")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, mergeProps({
                color: "error",
                size: "small"
              }, activatorProps), {
                default: withCtx(() => [
                  createTextVNode("H\u1EE7y \u0111\u1EC1 t\xE0i")
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              partner: __props.partner,
              onCancel: ($event) => isActive.value = false,
              onSuccess: ($event) => emit("refetch")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
                partner: __props.partner,
                onCancel: ($event) => isActive.value = false,
                onSuccess: ($event) => emit("refetch")
              }, null, 8, ["partner", "onCancel", "onSuccess"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VBtn, {
        class: "ml-2",
        color: "primary",
        size: "small",
        onClick: ($event) => emit("viewAll")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xem t\u1EA5t c\u1EA3 \u0111\u1EC1 t\xE0i`);
          } else {
            return [
              createTextVNode("Xem t\u1EA5t c\u1EA3 \u0111\u1EC1 t\xE0i")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VDataTable, {
        class: "mt-2",
        headers,
        "hide-default-footer": "",
        items: __props.items
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
        "item.name": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<span${_scopeId}>${(_a = item.name) != null ? _a : ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: item.name
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        "item.gvhd": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = item == null ? void 0 : item.teacher) == null ? void 0 : _a.hodem)} ${ssrInterpolate((_b = item == null ? void 0 : item.teacher) == null ? void 0 : _b.ten)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_c = item == null ? void 0 : item.teacher) == null ? void 0 : _c.hodem) + " " + toDisplayString((_d = item == null ? void 0 : item.teacher) == null ? void 0 : _d.ten), 1)
            ];
          }
        }),
        "item.numberStudent": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.numberStudent)}/${ssrInterpolate(item.numberStudent)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.numberStudent) + "/" + toDisplayString(item.numberStudent), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/project/molecules/TopicRegisted.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio");
const VRadio = genericComponent()({
  name: "VRadio",
  props: makeVRadioProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "class": ["v-radio", props.class],
        "style": props.style,
        "type": "radio"
      }), slots);
    });
    return {};
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StudentRegisted",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    topicId: {
      type: Number,
      required: true
    }
  },
  emits: ["refetch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const headers = [
      {
        title: "STT",
        align: "start",
        sortable: false,
        key: "index",
        width: 50
      },
      { title: "MASV", key: "maso", width: "20%", minWidth: 150 },
      { title: "H\u1ECC \u0110\u1EC6M", key: "hodem", width: "25%", minWidth: 200 },
      { title: "T\xCAN", key: "ten", width: "15%", minWidth: 100 },
      { title: "L\u1EDAP", key: "lop", width: "20%", minWidth: 150 },
      { title: "NH\xD3M", key: "nhom", width: "10%", minWidth: 100 },
      { title: "T\u1EA0O NH\xD3M", key: "action", minWidth: 50, align: "center" }
    ];
    const parten = ref(null);
    const auth = useAuth();
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const chooseGroup = (item) => {
      parten.value = item.id;
    };
    const createGroup = () => {
      $api.studentTopic.createGroup({ partner_id: parten.value, topic_id: props.topicId }).then(() => {
        emit("refetch");
        $toast.success("T\u1EA1o nh\xF3m th\xE0nh c\xF4ng");
      }).finally(() => emit("refetch"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex py-2 bottom-border"><div class="text-lg">Danh s\xE1ch sinh vi\xEAn \u0111\u0103ng k\xFD c\xF9ng \u0111\u1EC1 t\xE0i ${ssrInterpolate(unref(parten))}</div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "success",
        disabled: !unref(parten),
        size: "small",
        onClick: createGroup
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`T\u1EA1o`);
          } else {
            return [
              createTextVNode("T\u1EA1o")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VDataTable, {
        class: "mt-2",
        headers,
        "hide-default-footer": "",
        items: __props.items
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
        "item.nhom": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate((_a = item.studentTopic[0]) == null ? void 0 : _a.group_id)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString((_b = item.studentTopic[0]) == null ? void 0 : _b.group_id), 1)
            ];
          }
        }),
        "item.action": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if (!item.nhom && ((_a = unref(auth).data) == null ? void 0 : _a.value.id) != item.id && !((_b = item.studentTopic[0]) == null ? void 0 : _b.group_id)) {
              _push2(ssrRenderComponent(VRadio, {
                modelValue: unref(parten),
                "onUpdate:modelValue": ($event) => isRef(parten) ? parten.value = $event : null,
                "false-value": !unref(parten),
                value: item.id,
                onClick: ($event) => chooseGroup(item)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div${_scopeId}></div>`);
            }
          } else {
            return [
              !item.nhom && ((_c = unref(auth).data) == null ? void 0 : _c.value.id) != item.id && !((_d = item.studentTopic[0]) == null ? void 0 : _d.group_id) ? (openBlock(), createBlock(VRadio, {
                key: 0,
                modelValue: unref(parten),
                "onUpdate:modelValue": ($event) => isRef(parten) ? parten.value = $event : null,
                "false-value": !unref(parten),
                value: item.id,
                onClick: ($event) => chooseGroup(item)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "false-value", "value", "onClick"])) : (openBlock(), createBlock("div", { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/project/molecules/StudentRegisted.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PartnerRegisted",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    topicId: {
      type: Number,
      required: true
    }
  },
  emits: ["refetch"],
  setup(__props, { emit: __emit }) {
    const headers = [
      {
        title: "STT",
        align: "start",
        sortable: false,
        key: "index",
        width: 50
      },
      { title: "MASV", key: "maso", width: "20%", minWidth: 150 },
      { title: "H\u1ECC \u0110\u1EC6M", key: "hodem", width: "25%", minWidth: 200 },
      { title: "T\xCAN", key: "ten" },
      { title: "L\u1EDAP", key: "lop", width: "20%", minWidth: 150 }
    ];
    const parten = ref(null);
    useAuth();
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const cancelGroup = () => {
      $api.studentTopic.cancelGroup().then(() => {
        emit("refetch");
        $toast.success("T\u1EA1o nh\xF3m th\xE0nh c\xF4ng");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex py-2 bottom-border"><div class="text-lg">Danh s\xE1ch sinh vi\xEAn nh\xF3m ${ssrInterpolate(unref(parten))}</div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "error",
        size: "small",
        onClick: cancelGroup
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`H\u1EE7y nh\xF3m`);
          } else {
            return [
              createTextVNode("H\u1EE7y nh\xF3m")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VDataTable, {
        class: "mt-2",
        headers,
        "hide-default-footer": "",
        items: __props.items
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
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/project/molecules/PartnerRegisted.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TopicRegistedSuccess",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  emits: ["refetch", "viewAll"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        items: [__props.items.topic.topic],
        "number-student": (_a = __props.items) == null ? void 0 : _a.students.length,
        partner: __props.items.partner,
        onRefetch: ($event) => emit("refetch"),
        onViewAll: ($event) => emit("viewAll")
      }, null, _parent));
      if (((_b = __props.items.partner) == null ? void 0 : _b.length) > 1) {
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "mt-6",
          items: __props.items.partner,
          "topic-id": __props.items.topic.topic_id,
          onRefetch: ($event) => emit("refetch")
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "mt-6",
          items: __props.items.students,
          "topic-id": __props.items.topic.topic_id,
          onRefetch: ($event) => emit("refetch")
        }, null, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/project/organisms/TopicRegistedSuccess.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useGetRegistedTopics(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["registed-topic", params],
    () => {
      return $api.studentTopic.getRegistedTopic();
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { items, isLoading, refetch } = useGetRegistedTopics();
    const viewAll = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">\u0110\u0103ng k\xFD \u0111\u1EC1 t\xE0i \u0111\u1ED3 \xE1n</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(items).topic) {
              _push2(`<div class="h-full"${_scopeId}>`);
              if (!unref(items).topic.topic_id || unref(viewAll)) {
                _push2(ssrRenderComponent(_sfc_main$6, {
                  "topic-id": unref(items).topic.topic_id,
                  onSuccess: ($event) => unref(refetch)(),
                  onViewAll: ($event) => viewAll.value = false
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$1, {
                  items: unref(items),
                  onRefetch: ($event) => unref(refetch)(),
                  onViewAll: ($event) => viewAll.value = true
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(items).topic ? (openBlock(), createBlock("div", {
                key: 0,
                class: "h-full"
              }, [
                !unref(items).topic.topic_id || unref(viewAll) ? (openBlock(), createBlock(_sfc_main$6, {
                  key: 0,
                  "topic-id": unref(items).topic.topic_id,
                  onSuccess: ($event) => unref(refetch)(),
                  onViewAll: ($event) => viewAll.value = false
                }, null, 8, ["topic-id", "onSuccess", "onViewAll"])) : (openBlock(), createBlock(_sfc_main$1, {
                  key: 1,
                  items: unref(items),
                  onRefetch: ($event) => unref(refetch)(),
                  onViewAll: ($event) => viewAll.value = true
                }, null, 8, ["items", "onRefetch", "onViewAll"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/student/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-wmxtq-HL.mjs.map
