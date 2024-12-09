import { defineComponent, reactive, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useQueryClient } from 'vue-query';
import { _ as _sfc_main$1 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$2 } from './AppTextField-DdQ0O2ei.mjs';
import { b as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateTopic",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => ({
        ten: "",
        description: "",
        requirement: "",
        knowledge: "",
        numberStudent: 4
      })
    }
  },
  emits: ["cancel", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const form = reactive({
      ten: props.item.ten,
      description: props.item.description,
      requirement: props.item.requirement,
      knowledge: props.item.knowledge,
      numberStudent: props.item.numberStudent
    });
    const { $api, $toast } = useNuxtApp();
    const emit = __emit;
    const queryClient = useQueryClient();
    const createStudentTopic = () => {
      $api.topic.createTopic(form).then(() => {
        $toast.success("T\u1EA1o \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("topic");
        emit("success");
        emit("cancel");
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        "can-cancel": "",
        "cancel-text": "H\u1EE7y",
        title: "T\u1EA1o \u0111\u1EC1 t\xE0i",
        onCancel: ($event) => emit("cancel"),
        onSubmit: createStudentTopic
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).ten,
              "onUpdate:modelValue": ($event) => unref(form).ten = $event,
              label: "T\xEAn \u0111\u1EC1 t\xE0i",
              name: "T\xEAn \u0111\u1EC1 t\xE0i",
              rules: "required"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              label: "M\xF4 t\u1EA3",
              name: "M\xF4 t\u1EA3",
              type: "textarea"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).requirement,
              "onUpdate:modelValue": ($event) => unref(form).requirement = $event,
              label: "Y\xEAu c\u1EA7u",
              name: "Y\xEAu c\u1EA7u"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).knowledge,
              "onUpdate:modelValue": ($event) => unref(form).knowledge = $event,
              label: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng",
              name: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).numberStudent,
              "onUpdate:modelValue": ($event) => unref(form).numberStudent = $event,
              label: "S\u1ED1 l\u01B0\u1EE3ng sinh vi\xEAn",
              name: "S\u1ED1 l\u01B0\u1EE3ng sinh vi\xEAn",
              rules: "required"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                modelValue: unref(form).ten,
                "onUpdate:modelValue": ($event) => unref(form).ten = $event,
                label: "T\xEAn \u0111\u1EC1 t\xE0i",
                name: "T\xEAn \u0111\u1EC1 t\xE0i",
                rules: "required"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: unref(form).description,
                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                label: "M\xF4 t\u1EA3",
                name: "M\xF4 t\u1EA3",
                type: "textarea"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: unref(form).requirement,
                "onUpdate:modelValue": ($event) => unref(form).requirement = $event,
                label: "Y\xEAu c\u1EA7u",
                name: "Y\xEAu c\u1EA7u"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: unref(form).knowledge,
                "onUpdate:modelValue": ($event) => unref(form).knowledge = $event,
                label: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng",
                name: "Ki\u1EBFn th\u1EE9c k\u1EF9 n\u0103ng"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$2, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/topic/molecules/CreateTopic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CreateTopic-B_BIDxbv.mjs.map
