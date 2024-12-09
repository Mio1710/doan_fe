import { defineComponent, mergeModels, useModel, ref, resolveComponent, mergeProps, withCtx, unref, createSlots, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { as as VTextField } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppPassword",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
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
    const value = useModel(__props, "modelValue");
    const show = ref(false);
    const isRequired = props.rules.includes("required");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeField = resolveComponent("VeeField");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_VeeField, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        label: __props.label || __props.name,
        name: __props.name || __props.label,
        rules: props.rules
      }, {
        default: withCtx(({ errorMessage }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
              "aria-autocomplete": "new-password",
              "error-messages": errorMessage,
              label: __props.label || __props.name,
              name: __props.name || __props.label,
              type: unref(show) ? "text" : "password",
              "onClick:appendInner": ($event) => show.value = !unref(show)
            }, createSlots({ _: 2 }, [
              __props.label ? {
                name: "label",
                fn: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.label)} `);
                    if (unref(isRequired)) {
                      _push3(`<span class="text-error"${_scopeId2}>*</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.label) + " ", 1),
                      unref(isRequired) ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-error"
                      }, "*")) : createCommentVNode("", true)
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
          } else {
            return [
              createVNode(VTextField, {
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                "aria-autocomplete": "new-password",
                "error-messages": errorMessage,
                label: __props.label || __props.name,
                name: __props.name || __props.label,
                type: unref(show) ? "text" : "password",
                "onClick:appendInner": ($event) => show.value = !unref(show)
              }, createSlots({ _: 2 }, [
                __props.label ? {
                  name: "label",
                  fn: withCtx(() => [
                    createTextVNode(toDisplayString(__props.label) + " ", 1),
                    unref(isRequired) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-error"
                    }, "*")) : createCommentVNode("", true)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "error-messages", "label", "name", "type", "onClick:appendInner"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/atoms/AppPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AppPassword-Ci7nib3I.mjs.map
