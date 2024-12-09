import { defineComponent, mergeModels, useModel, ref, computed, resolveComponent, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useGetTeachers } from './use-get-teachers-B3LLnpVr.mjs';
import { V as VAutocomplete } from './VAutocomplete-BklwJd8l.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeacherAutocomplete",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    multiple: {
      type: Boolean,
      default: false
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
    const { items, isLoading } = useGetTeachers(queryBuilder);
    const isRequired = computed(() => props.rules.includes("required"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VeeField = resolveComponent("VeeField");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_VeeField, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        name: "Gi\u1EA3ng vi\xEAn",
        rules: props.rules
      }, {
        default: withCtx(({ errorMessage }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAutocomplete, {
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              chips: "",
              "closable-chips": "",
              "error-messages": errorMessage,
              "item-title": getFullName,
              "item-value": "id",
              items: unref(items),
              label: `Gi\u1EA3ng vi\xEAn${unref(isRequired) ? "*" : ""}`,
              loading: unref(isLoading),
              multiple: __props.multiple
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAutocomplete, {
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                chips: "",
                "closable-chips": "",
                "error-messages": errorMessage,
                "item-title": getFullName,
                "item-value": "id",
                items: unref(items),
                label: `Gi\u1EA3ng vi\xEAn${unref(isRequired) ? "*" : ""}`,
                loading: unref(isLoading),
                multiple: __props.multiple
              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "items", "label", "loading", "multiple"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/atoms/TeacherAutocomplete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TeacherAutocomplete-C7_6KVVK.mjs.map
