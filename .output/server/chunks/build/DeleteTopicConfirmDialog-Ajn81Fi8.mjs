import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient } from 'vue-query';
import { _ as _sfc_main$1 } from './FormCard-BTPzcLlL.mjs';
import { b as useNuxtApp, V as VBtn, e as VIcon } from './server.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DeleteTopicConfirmDialog",
  __ssrInlineRender: true,
  props: {
    topic: {
      type: Object,
      required: true
    }
  },
  emits: ["success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const deleteTopic = (isActive) => {
      $api.topic.deleteTopic(props.topic.id).then(() => {
        $toast.success("X\xF3a \u0111\u1EC1 t\xE0i th\xE0nh c\xF4ng");
        queryClient.invalidateQueries("topic");
        isActive.value = false;
        emit("success");
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
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
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
            _push2(ssrRenderComponent(_sfc_main$1, {
              "can-cancel": "",
              "cancel-text": "H\u1EE7y",
              "submit-text": "X\xF3a",
              title: "X\xE1c nh\u1EADn x\xF3a \u0111\u1EC1 t\xE0i",
              onCancel: ($event) => isActive.value = false,
              onSubmit: ($event) => deleteTopic(isActive)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center text-warning"${_scopeId2}><span${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
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
                  _push3(` X\xF3a \u0111\u1EC1 t\xE0i <strong${_scopeId2}>${ssrInterpolate(__props.topic.ten)}</strong> kh\u1ECFi h\u1EC7 th\u1ED1ng? </span></div>`);
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
                        createTextVNode(" X\xF3a \u0111\u1EC1 t\xE0i "),
                        createVNode("strong", null, toDisplayString(__props.topic.ten), 1),
                        createTextVNode(" kh\u1ECFi h\u1EC7 th\u1ED1ng? ")
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                "can-cancel": "",
                "cancel-text": "H\u1EE7y",
                "submit-text": "X\xF3a",
                title: "X\xE1c nh\u1EADn x\xF3a \u0111\u1EC1 t\xE0i",
                onCancel: ($event) => isActive.value = false,
                onSubmit: ($event) => deleteTopic(isActive)
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
                      createTextVNode(" X\xF3a \u0111\u1EC1 t\xE0i "),
                      createVNode("strong", null, toDisplayString(__props.topic.ten), 1),
                      createTextVNode(" kh\u1ECFi h\u1EC7 th\u1ED1ng? ")
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["onCancel", "onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teacher/topic/molecules/DeleteTopicConfirmDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DeleteTopicConfirmDialog-Ajn81Fi8.mjs.map
