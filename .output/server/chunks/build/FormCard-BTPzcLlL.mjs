import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, renderSlot, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { A as AppForm } from './AppForm-OpzBJjUC.mjs';
import { V as VCard, b as VCardTitle, a as VCardText, c as VCardActions } from './VCard-DOF4acQr.mjs';
import { V as VDivider } from './VDivider-DqGd8YoX.mjs';
import { f as VSpacer, V as VBtn } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Dialog"
    },
    approval: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    isUpdate: {
      type: Boolean,
      default: false
    },
    canDelete: {
      type: Boolean,
      default: false
    },
    canCancel: {
      type: Boolean,
      default: false
    },
    submitText: {
      type: String,
      default: "L\u01B0u"
    },
    createText: {
      type: String,
      default: "T\u1EA1o"
    },
    updateText: {
      type: String,
      default: "Ch\u1EC9nh s\u1EEDa"
    },
    deleteText: {
      type: String,
      default: "X\xF3a"
    },
    cancelText: {
      type: String,
      default: "Hu\u1EF7"
    },
    height: {
      type: String,
      default: null
    },
    hideAction: {
      type: Boolean,
      default: false
    },
    hideSubmit: {
      type: Boolean,
      default: false
    },
    noHandleSubmit: {
      type: Boolean,
      default: false
    },
    tableCheck: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "cancel", "submit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const submit = () => {
      emit("submit");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps(_ctx.$attrs, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AppForm, { ref: "formCard" }, {
              default: withCtx(({ handleSubmit }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h6"${_scopeId3}>${ssrInterpolate(__props.title)}</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-h6" }, toDisplayString(__props.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "max-h-[calc(100vh_-_170px)] overflow-y-scroll custom-scroll" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (!__props.hideAction) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                          if (__props.canCancel) {
                            _push4(ssrRenderComponent(VBtn, {
                              class: "px-2 mr-1",
                              disabled: __props.loading,
                              small: "",
                              variant: "text",
                              onClick: ($event) => _ctx.$emit("cancel")
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(__props.cancelText)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(__props.cancelText), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!__props.hideSubmit && !__props.noHandleSubmit) {
                            _push4(ssrRenderComponent(VBtn, {
                              class: "px-2",
                              color: "primary",
                              loading: __props.loading,
                              small: "",
                              variant: "elevated",
                              onClick: ($event) => handleSubmit(submit)
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (__props.submitText) {
                                    _push5(`<span${_scopeId4}>${ssrInterpolate(__props.submitText)}</span>`);
                                  } else {
                                    _push5(`<span${_scopeId4}>${ssrInterpolate(__props.isUpdate ? __props.updateText : __props.createText)}</span>`);
                                  }
                                } else {
                                  return [
                                    __props.submitText ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(__props.submitText), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(__props.isUpdate ? __props.updateText : __props.createText), 1))
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
                            createVNode(VSpacer),
                            __props.canCancel ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              class: "px-2 mr-1",
                              disabled: __props.loading,
                              small: "",
                              variant: "text",
                              onClick: ($event) => _ctx.$emit("cancel")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.cancelText), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
                            !__props.hideSubmit && !__props.noHandleSubmit ? (openBlock(), createBlock(VBtn, {
                              key: 1,
                              class: "px-2",
                              color: "primary",
                              loading: __props.loading,
                              small: "",
                              variant: "elevated",
                              onClick: ($event) => handleSubmit(submit)
                            }, {
                              default: withCtx(() => [
                                __props.submitText ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(__props.submitText), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(__props.isUpdate ? __props.updateText : __props.createText), 1))
                              ]),
                              _: 2
                            }, 1032, ["loading", "onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h6" }, toDisplayString(__props.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardText, { class: "max-h-[calc(100vh_-_170px)] overflow-y-scroll custom-scroll" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }),
                    !__props.hideAction ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(VDivider),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          __props.canCancel ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            class: "px-2 mr-1",
                            disabled: __props.loading,
                            small: "",
                            variant: "text",
                            onClick: ($event) => _ctx.$emit("cancel")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.cancelText), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
                          !__props.hideSubmit && !__props.noHandleSubmit ? (openBlock(), createBlock(VBtn, {
                            key: 1,
                            class: "px-2",
                            color: "primary",
                            loading: __props.loading,
                            small: "",
                            variant: "elevated",
                            onClick: ($event) => handleSubmit(submit)
                          }, {
                            default: withCtx(() => [
                              __props.submitText ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(__props.submitText), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(__props.isUpdate ? __props.updateText : __props.createText), 1))
                            ]),
                            _: 2
                          }, 1032, ["loading", "onClick"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ], 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(AppForm, { ref: "formCard" }, {
                default: withCtx(({ handleSubmit }) => [
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h6" }, toDisplayString(__props.title), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardText, { class: "max-h-[calc(100vh_-_170px)] overflow-y-scroll custom-scroll" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }),
                  !__props.hideAction ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(VDivider),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        __props.canCancel ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          class: "px-2 mr-1",
                          disabled: __props.loading,
                          small: "",
                          variant: "text",
                          onClick: ($event) => _ctx.$emit("cancel")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.cancelText), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
                        !__props.hideSubmit && !__props.noHandleSubmit ? (openBlock(), createBlock(VBtn, {
                          key: 1,
                          class: "px-2",
                          color: "primary",
                          loading: __props.loading,
                          small: "",
                          variant: "elevated",
                          onClick: ($event) => handleSubmit(submit)
                        }, {
                          default: withCtx(() => [
                            __props.submitText ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(__props.submitText), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(__props.isUpdate ? __props.updateText : __props.createText), 1))
                          ]),
                          _: 2
                        }, 1032, ["loading", "onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ], 64)) : createCommentVNode("", true)
                ]),
                _: 3
              }, 512)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/molecules/FormCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FormCard-BTPzcLlL.mjs.map
