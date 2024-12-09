import { createVNode, useSSRContext, toRef, mergeProps, withDirectives, vShow, shallowRef, computed, ref, watch, Fragment, Transition, defineComponent, resolveComponent, withCtx, unref, toDisplayString, isRef, withModifiers, createTextVNode, openBlock, createBlock, renderList, watchEffect, onScopeDispose, nextTick } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { j as propsFactory, m as makeComponentProps, o as makeDimensionProps, k as makeTagProps, g as genericComponent, a8 as useRtl, q as useDimension, h as useRender, z as IconValue, Q as makeLocationProps, s as makeRoundedProps, D as makeThemeProps, t as makeTransitionProps$1, v as useBackgroundColor, w as useRounded, a7 as useLocale, ax as useTextColor, ba as useTheme, X as useLocation, bb as pickWithRest, M as MaybeTransition, e as VIcon, A as makeBorderProps, O as makeElevationProps, G as useBorder, U as useElevation, F as provideTheme, p as provideDefaults, L as VDefaultsProvider, y as convertToUnit, aT as VExpandTransition, a2 as useProxiedModel, ao as useToggleScope, bc as makeDelayProps, ak as makeDisplayProps, a9 as useDisplay, bd as useRouter, a3 as useScopeId, be as toPhysical, a_ as useAuth, f as VSpacer, V as VBtn, b as useNuxtApp, at as VMenu, ad as clamp, bf as useDelay, a as navigateTo } from './server.mjs';
import { u as useSsrBoot, b as VListItem, V as VList, c as VListGroup, d as VListItemTitle } from './VList-Ch2cSLwT.mjs';
import { _ as _imports_0$1 } from './virtual_public-BQWYxybX.mjs';
import { _ as _sfc_main$5 } from './FormCard-BTPzcLlL.mjs';
import { _ as _sfc_main$6 } from './AppPassword-Ci7nib3I.mjs';
import { V as VDialog } from './VDialog-C1MHUHba.mjs';
import { e as VImg, V as VCard, d as VAvatar } from './VCard-DOF4acQr.mjs';
import { V as VDivider } from './VDivider-DqGd8YoX.mjs';
import { useQuery } from 'vue-query';
import { m as makeLayoutItemProps, u as useLayoutItem, a as makeLayoutProps, c as createLayout, b as useLayout } from './layout-DmMzCsmb.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
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
import './AppForm-OpzBJjUC.mjs';

const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": [dimensionStyles.value, props.style]
    }, slots));
    return {};
  }
});
const _imports_0 = publicAssetsURL("/images/logo.jpg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const opened = ref([]);
    useAuth();
    const navigation = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(navigation)) {
        _push(ssrRenderComponent(VList, mergeProps({
          nav: "",
          opened: unref(opened)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(navigation), (group) => {
                _push2(ssrRenderComponent(VListGroup, {
                  key: group.id,
                  class: "navigation",
                  value: group.id
                }, {
                  activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VListItem, mergeProps({ ref_for: true }, props, {
                        "prepend-icon": group.icon,
                        title: group.title
                      }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VListItem, mergeProps({ ref_for: true }, props, {
                          "prepend-icon": group.icon,
                          title: group.title
                        }), null, 16, ["prepend-icon", "title"])
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(group.children, (item) => {
                        _push3(ssrRenderComponent(VListItem, {
                          key: item.title,
                          title: item.title,
                          to: item.to,
                          value: item.title
                        }, {
                          prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(VIcon, { size: "small" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(item.icon)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.icon), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(VIcon, { size: "small" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.icon), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(group.children, (item) => {
                          return openBlock(), createBlock(VListItem, {
                            key: item.title,
                            title: item.title,
                            to: item.to,
                            value: item.title
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, { size: "small" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.icon), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["title", "to", "value"]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (group) => {
                  return openBlock(), createBlock(VListGroup, {
                    key: group.id,
                    class: "navigation",
                    value: group.id
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(VListItem, mergeProps({ ref_for: true }, props, {
                        "prepend-icon": group.icon,
                        title: group.title
                      }), null, 16, ["prepend-icon", "title"])
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(group.children, (item) => {
                        return openBlock(), createBlock(VListItem, {
                          key: item.title,
                          title: item.title,
                          to: item.to,
                          value: item.title
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, { size: "small" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.icon), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["title", "to", "value"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/molecules/navigation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChangePasswordDialog",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const form = ref({
      old_password: null,
      new_password: null,
      confirm_password: null
    });
    const { $api, $toast } = useNuxtApp();
    const updatePassword = (isActive) => {
      $api.auth.changePassword(form.value).then(() => {
        $toast.success("\u0110\u1ED5i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng");
        isActive.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        "min-width": "400",
        width: "40%"
      }, _attrs), {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ variant: "plain" }, activatorProps))}${_scopeId}><span${_scopeId}>\u0110\u1ED5i m\u1EADt kh\u1EA9u</span></div>`);
          } else {
            return [
              createVNode("div", mergeProps({ variant: "plain" }, activatorProps), [
                createVNode("span", null, "\u0110\u1ED5i m\u1EADt kh\u1EA9u")
              ], 16)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              "can-cancel": "",
              "cancel-text": "H\u1EE7y",
              title: "\u0110\u1ED5i m\u1EADt kh\u1EA9u",
              onCancel: ($event) => isActive.value = false,
              onSubmit: ($event) => updatePassword(isActive)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).old_password,
                    "onUpdate:modelValue": ($event) => unref(form).old_password = $event,
                    label: "M\u1EADt kh\u1EA9u c\u0169",
                    name: "oldPassword",
                    rules: "required"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).new_password,
                    "onUpdate:modelValue": ($event) => unref(form).new_password = $event,
                    label: "M\u1EADt kh\u1EA9u m\u1EDBi",
                    name: "newPassword",
                    rules: "required"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).confirm_password,
                    "onUpdate:modelValue": ($event) => unref(form).confirm_password = $event,
                    label: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
                    name: "confirmPassword",
                    rules: "required|confirmed:@newPassword"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6, {
                      modelValue: unref(form).old_password,
                      "onUpdate:modelValue": ($event) => unref(form).old_password = $event,
                      label: "M\u1EADt kh\u1EA9u c\u0169",
                      name: "oldPassword",
                      rules: "required"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$6, {
                      modelValue: unref(form).new_password,
                      "onUpdate:modelValue": ($event) => unref(form).new_password = $event,
                      label: "M\u1EADt kh\u1EA9u m\u1EDBi",
                      name: "newPassword",
                      rules: "required"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$6, {
                      modelValue: unref(form).confirm_password,
                      "onUpdate:modelValue": ($event) => unref(form).confirm_password = $event,
                      label: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
                      name: "confirmPassword",
                      rules: "required|confirmed:@newPassword"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                title: "\u0110\u1ED5i m\u1EADt kh\u1EA9u",
                onCancel: ($event) => isActive.value = false,
                onSubmit: ($event) => updatePassword(isActive)
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6, {
                    modelValue: unref(form).old_password,
                    "onUpdate:modelValue": ($event) => unref(form).old_password = $event,
                    label: "M\u1EADt kh\u1EA9u c\u0169",
                    name: "oldPassword",
                    rules: "required"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$6, {
                    modelValue: unref(form).new_password,
                    "onUpdate:modelValue": ($event) => unref(form).new_password = $event,
                    label: "M\u1EADt kh\u1EA9u m\u1EDBi",
                    name: "newPassword",
                    rules: "required"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$6, {
                    modelValue: unref(form).confirm_password,
                    "onUpdate:modelValue": ($event) => unref(form).confirm_password = $event,
                    label: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
                    name: "confirmPassword",
                    rules: "required|confirmed:@newPassword"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/organisms/ChangePasswordDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LogoutConfirmDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const { signOut } = useAuth();
    const logout = () => {
      signOut();
      navigateTo("/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        "min-width": "400",
        width: "40%"
      }, _attrs), {
        activator: withCtx(({ props: activatorProps }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ variant: "plain" }, activatorProps))}${_scopeId}><span${_scopeId}>\u0110\u0103ng xu\u1EA5t</span></div>`);
          } else {
            return [
              createVNode("div", mergeProps({ variant: "plain" }, activatorProps), [
                createVNode("span", null, "\u0110\u0103ng xu\u1EA5t")
              ], 16)
            ];
          }
        }),
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              "can-cancel": "",
              "cancel-text": "H\u1EE7y",
              "submit-text": "\u0110\u0103ng xu\u1EA5t",
              title: "X\xE1c nh\u1EADn \u0111\u0103ng xu\u1EA5t",
              onCancel: ($event) => isActive.value = false,
              onSubmit: logout
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
                  _push3(` \u0110\u0103ng xu\u1EA5t kh\u1ECFi h\u1EC7 th\u1ED1ng? </span></div>`);
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
                        createTextVNode(" \u0110\u0103ng xu\u1EA5t kh\u1ECFi h\u1EC7 th\u1ED1ng? ")
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
                "submit-text": "\u0110\u0103ng xu\u1EA5t",
                title: "X\xE1c nh\u1EADn \u0111\u0103ng xu\u1EA5t",
                onCancel: ($event) => isActive.value = false,
                onSubmit: logout
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
                      createTextVNode(" \u0110\u0103ng xu\u1EA5t kh\u1ECFi h\u1EC7 th\u1ED1ng? ")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/organisms/LogoutConfirmDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const makeVBadgeProps = propsFactory({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top end"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps$1({
    transition: "scale-rotate-transition"
  })
}, "VBadge");
const VBadge = genericComponent()({
  name: "VBadge",
  inheritAttrs: false,
  props: makeVBadgeProps(),
  setup(props, ctx) {
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      roundedClasses
    } = useRounded(props);
    const {
      t
    } = useLocale();
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "textColor"));
    const {
      themeClasses
    } = useTheme();
    const {
      locationStyles
    } = useLocation(props, true, (side) => {
      var _a, _b;
      const base = props.floating ? props.dot ? 2 : 4 : props.dot ? 8 : 12;
      return base + (["top", "bottom"].includes(side) ? +((_a = props.offsetY) != null ? _a : 0) : ["left", "right"].includes(side) ? +((_b = props.offsetX) != null ? _b : 0) : 0);
    });
    useRender(() => {
      const value = Number(props.content);
      const content = !props.max || isNaN(value) ? props.content : value <= +props.max ? value : `${props.max}+`;
      const [badgeAttrs, attrs] = pickWithRest(ctx.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return createVNode(props.tag, mergeProps({
        "class": ["v-badge", {
          "v-badge--bordered": props.bordered,
          "v-badge--dot": props.dot,
          "v-badge--floating": props.floating,
          "v-badge--inline": props.inline
        }, props.class]
      }, attrs, {
        "style": props.style
      }), {
        default: () => {
          var _a, _b;
          return [createVNode("div", {
            "class": "v-badge__wrapper"
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode(MaybeTransition, {
            "transition": props.transition
          }, {
            default: () => {
              var _a2, _b2;
              return [withDirectives(createVNode("span", mergeProps({
                "class": ["v-badge__badge", themeClasses.value, backgroundColorClasses.value, roundedClasses.value, textColorClasses.value],
                "style": [backgroundColorStyles.value, textColorStyles.value, props.inline ? {} : locationStyles.value],
                "aria-atomic": "true",
                "aria-label": t(props.label, value),
                "aria-live": "polite",
                "role": "status"
              }, badgeAttrs), [props.dot ? void 0 : ctx.slots.badge ? (_b2 = (_a2 = ctx.slots).badge) == null ? void 0 : _b2.call(_a2) : props.icon ? createVNode(VIcon, {
                "icon": props.icon
              }, null) : content]), [[vShow, props.modelValue]])];
            }
          })])];
        }
      });
    });
    return {};
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "toolbar-user",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMenu, mergeProps({
        left: "",
        "offset-y": "",
        transition: "slide-y-transition"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps(props, { class: "cursor-pointer d-flex items-center" }))}${_scopeId}>`);
            _push2(ssrRenderComponent(VBadge, {
              bordered: "",
              color: "success",
              dot: ""
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAvatar, { size: "30" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          alt: "John",
                          src: _imports_0$1
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            alt: "John",
                            src: _imports_0$1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAvatar, { size: "30" }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          alt: "John",
                          src: _imports_0$1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2 font-weight-bold"${_scopeId}>${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.hodem)} ${ssrInterpolate((_b = unref(data)) == null ? void 0 : _b.ten)}</span></div>`);
          } else {
            return [
              createVNode("div", mergeProps(props, { class: "cursor-pointer d-flex items-center" }), [
                createVNode(VBadge, {
                  bordered: "",
                  color: "success",
                  dot: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VAvatar, { size: "30" }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          alt: "John",
                          src: _imports_0$1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "mx-2 font-weight-bold" }, toDisplayString((_c = unref(data)) == null ? void 0 : _c.hodem) + " " + toDisplayString((_d = unref(data)) == null ? void 0 : _d.ten), 1)
              ], 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, { to: "/profile" }, {
                    prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { small: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-account`);
                            } else {
                              return [
                                createTextVNode("mdi-account")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { small: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItemTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`T\xE0i kho\u1EA3n c\u1EE7a t\xF4i`);
                            } else {
                              return [
                                createTextVNode("T\xE0i kho\u1EA3n c\u1EE7a t\xF4i")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("T\xE0i kho\u1EA3n c\u1EE7a t\xF4i")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, { class: "my-1" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    onClick: ($event) => console.log("\u0110\u1ED5i m\u1EADt kh\u1EA9u")
                  }, {
                    prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { small: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-account-key-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-account-key-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { small: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-key-outline")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItemTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, { user: unref(data) }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3, { user: unref(data) }, null, 8, ["user"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, { user: unref(data) }, null, 8, ["user"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, { class: "my-1" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VListItem, {
                    onClick: ($event) => console.log("\u0110\u0103ng xu\u1EA5t")
                  }, {
                    prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, { small: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-logout-variant`);
                            } else {
                              return [
                                createTextVNode("mdi-logout-variant")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VIcon, { small: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-logout-variant")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItemTitle, null, {
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
                      } else {
                        return [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
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
                    createVNode(VListItem, { to: "/profile" }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, { small: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-account")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("T\xE0i kho\u1EA3n c\u1EE7a t\xF4i")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "my-1" }),
                    createVNode(VListItem, {
                      onClick: ($event) => console.log("\u0110\u1ED5i m\u1EADt kh\u1EA9u")
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, { small: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-account-key-outline")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3, { user: unref(data) }, null, 8, ["user"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(VDivider, { class: "my-1" }),
                    createVNode(VListItem, {
                      onClick: ($event) => console.log("\u0110\u0103ng xu\u1EA5t")
                    }, {
                      prepend: withCtx(() => [
                        createVNode(VIcon, { small: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-logout-variant")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(VListItemTitle, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, null, {
                default: withCtx(() => [
                  createVNode(VListItem, { to: "/profile" }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, { small: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("T\xE0i kho\u1EA3n c\u1EE7a t\xF4i")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider, { class: "my-1" }),
                  createVNode(VListItem, {
                    onClick: ($event) => console.log("\u0110\u1ED5i m\u1EADt kh\u1EA9u")
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, { small: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account-key-outline")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3, { user: unref(data) }, null, 8, ["user"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(VDivider, { class: "my-1" }),
                  createVNode(VListItem, {
                    onClick: ($event) => console.log("\u0110\u0103ng xu\u1EA5t")
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, { small: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-logout-variant")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(VListItemTitle, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/molecules/toolbar-user.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useGetActiveSemester(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["active-semester", params],
    () => {
      return $api.semester.getActiveSemester();
    },
    {
      refetchOnWindowFocus: false,
      ...options
    }
  );
  const activeSemester = computed(() => {
    var _a;
    return ((_a = query == null ? void 0 : query.data.value) == null ? void 0 : _a.data) || {};
  });
  return {
    activeSemester
  };
}
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": ["v-toolbar-title", props.class],
        "style": props.style
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(!!(props.extended || ((_a = slots.extension) == null ? void 0 : _a.call(slots))));
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = !!(props.extended || extension);
      return createVNode(props.tag, {
        "class": ["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  let previousScrollHeight = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value) return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    const currentScrollHeight = targetEl instanceof Window ? (void 0).documentElement.scrollHeight : targetEl.scrollHeight;
    if (previousScrollHeight !== currentScrollHeight) {
      previousScrollHeight = currentScrollHeight;
      return;
    }
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      var _a2;
      var _a;
      const behavior = new Set((_a2 = (_a = props.scrollBehavior) == null ? void 0 : _a.split(" ")) != null ? _a2 : []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const canHide = computed(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      var _a2, _b2;
      var _a, _b;
      if (scrollBehavior.value.hide && scrollBehavior.value.inverted) return 0;
      const height2 = (_a2 = (_a = vToolbarRef.value) == null ? void 0 : _a.contentHeight) != null ? _a2 : 0;
      const extensionHeight = (_b2 = (_b = vToolbarRef.value) == null ? void 0 : _b.extensionHeight) != null ? _b2 : 0;
      if (!canHide.value) return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(computed(() => !!props.scrollBehavior), () => {
      watchEffect(() => {
        if (canHide.value) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(props, "location"),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(props, "absolute")
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return {};
  }
});
const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLayoutProps()
}, "VLayout");
const VLayout = genericComponent()({
  name: "VLayout",
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      var _a;
      return createVNode("div", {
        "ref": layoutRef,
        "class": [layoutClasses.value, props.class],
        "style": [dimensionStyles.value, layoutStyles.value, props.style]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {
      getLayoutItem,
      items
    };
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": ["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class],
      "style": [mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style]
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return {};
  }
});
function useSticky(_ref) {
  let {
    rootEl,
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch(_ref) {
  let {
    el,
    isActive,
    isTemporary,
    width,
    touchless,
    position
  } = _ref;
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    var _a2, _b2;
    var _a, _b;
    const transform = (_a2 = (_a = el.value) == null ? void 0 : _a.style.transform) != null ? _a2 : null;
    const transition = (_b2 = (_b = el.value) == null ? void 0 : _b.style.transition) != null ? _b2 : null;
    watchEffect(() => {
      var _a22, _b22, _c, _d;
      (_b22 = el.value) == null ? void 0 : _b22.style.setProperty("transform", ((_a22 = dragStyles.value) == null ? void 0 : _a22.transform) || "none");
      (_d = el.value) == null ? void 0 : _d.style.setProperty("transition", ((_c = dragStyles.value) == null ? void 0 : _c.transition) || null);
    });
    onScopeDispose(() => {
      var _a22, _b22;
      (_a22 = el.value) == null ? void 0 : _a22.style.setProperty("transform", transform);
      (_b22 = el.value) == null ? void 0 : _b22.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({
    mobile: null
  }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = computed(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val) isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      isActive,
      isTemporary,
      width,
      touchless: toRef(props, "touchless"),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const elementSize = computed(() => ["top", "bottom"].includes(props.location) ? 0 : width.value);
    const {
      layoutItemStyles,
      layoutItemScrimStyles
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize,
      active: computed(() => isActive.value || isDragging.value),
      disableTransitions: computed(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style, ["top", "bottom"].includes(location.value) ? {
          height: "auto"
        } : {}]
      }, scopeId, attrs), {
        default: () => {
          var _a, _b, _c;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-navigation-drawer__img"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "alt": "",
            "cover": true,
            "height": "inherit",
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                alt: "",
                cover: true,
                height: "inherit",
                src: props.image
              }
            }
          }, slots.image)]), slots.prepend && createVNode("div", {
            "class": "v-navigation-drawer__prepend"
          }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots)]), createVNode("div", {
            "class": "v-navigation-drawer__content"
          }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "class": "v-navigation-drawer__append"
          }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])];
        }
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value) return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return {
      isStuck
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(true);
    const rail = ref(false);
    useAuth();
    const { activeSemester } = useGetActiveSemester();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VLayout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAppBar, {
                    color: "#08387f",
                    flat: "",
                    height: "40",
                    title: "Trung t\xE2m qu\u1EA3n tr\u1ECB"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<div class="text-uppercase font-weight-bold"${_scopeId3}>${ssrInterpolate((_a = unref(activeSemester)) == null ? void 0 : _a.ten)}</div>`);
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-uppercase font-weight-bold" }, toDisplayString((_b = unref(activeSemester)) == null ? void 0 : _b.ten), 1),
                          createVNode(VSpacer),
                          createVNode(_sfc_main$1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VNavigationDrawer, {
                    modelValue: unref(drawer),
                    "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                    permanent: "",
                    rail: unref(rail),
                    onClick: ($event) => rail.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          nav: "",
                          "prepend-avatar": _imports_0,
                          title: "Trang ch\u1EE7"
                        }, {
                          append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-chevron-left",
                                variant: "text",
                                onClick: ($event) => rail.value = !unref(rail)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  icon: "mdi-chevron-left",
                                  variant: "text",
                                  onClick: withModifiers(($event) => rail.value = !unref(rail), ["stop"])
                                }, null, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, {
                            nav: "",
                            "prepend-avatar": _imports_0,
                            title: "Trang ch\u1EE7"
                          }, {
                            append: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-chevron-left",
                                variant: "text",
                                onClick: withModifiers(($event) => rail.value = !unref(rail), ["stop"])
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider),
                          createVNode(_sfc_main$4)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMain, { class: "bg-grey-lighten-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, {
                          class: "pa-3 h-[calc(100vh_-_50px)]",
                          fluid: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex gap-1 h-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_router_view, { class: "overflow-y-auto" }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex gap-1 h-full" }, [
                                  createVNode(_component_router_view, { class: "overflow-y-auto" })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, {
                            class: "pa-3 h-[calc(100vh_-_50px)]",
                            fluid: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex gap-1 h-full" }, [
                                createVNode(_component_router_view, { class: "overflow-y-auto" })
                              ])
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
                    createVNode(VAppBar, {
                      color: "#08387f",
                      flat: "",
                      height: "40",
                      title: "Trung t\xE2m qu\u1EA3n tr\u1ECB"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "text-uppercase font-weight-bold" }, toDisplayString((_a = unref(activeSemester)) == null ? void 0 : _a.ten), 1),
                          createVNode(VSpacer),
                          createVNode(_sfc_main$1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(VNavigationDrawer, {
                      modelValue: unref(drawer),
                      "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                      permanent: "",
                      rail: unref(rail),
                      onClick: ($event) => rail.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          nav: "",
                          "prepend-avatar": _imports_0,
                          title: "Trang ch\u1EE7"
                        }, {
                          append: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "mdi-chevron-left",
                              variant: "text",
                              onClick: withModifiers(($event) => rail.value = !unref(rail), ["stop"])
                            }, null, 8, ["onClick"])
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider),
                        createVNode(_sfc_main$4)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"]),
                    createVNode(VMain, { class: "bg-grey-lighten-4" }, {
                      default: withCtx(() => [
                        createVNode(VContainer, {
                          class: "pa-3 h-[calc(100vh_-_50px)]",
                          fluid: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex gap-1 h-full" }, [
                              createVNode(_component_router_view, { class: "overflow-y-auto" })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VLayout, null, {
                default: withCtx(() => [
                  createVNode(VAppBar, {
                    color: "#08387f",
                    flat: "",
                    height: "40",
                    title: "Trung t\xE2m qu\u1EA3n tr\u1ECB"
                  }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "text-uppercase font-weight-bold" }, toDisplayString((_a = unref(activeSemester)) == null ? void 0 : _a.ten), 1),
                        createVNode(VSpacer),
                        createVNode(_sfc_main$1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(VNavigationDrawer, {
                    modelValue: unref(drawer),
                    "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                    permanent: "",
                    rail: unref(rail),
                    onClick: ($event) => rail.value = false
                  }, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        nav: "",
                        "prepend-avatar": _imports_0,
                        title: "Trang ch\u1EE7"
                      }, {
                        append: withCtx(() => [
                          createVNode(VBtn, {
                            icon: "mdi-chevron-left",
                            variant: "text",
                            onClick: withModifiers(($event) => rail.value = !unref(rail), ["stop"])
                          }, null, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider),
                      createVNode(_sfc_main$4)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "rail", "onClick"]),
                  createVNode(VMain, { class: "bg-grey-lighten-4" }, {
                    default: withCtx(() => [
                      createVNode(VContainer, {
                        class: "pa-3 h-[calc(100vh_-_50px)]",
                        fluid: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex gap-1 h-full" }, [
                            createVNode(_component_router_view, { class: "overflow-y-auto" })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-xo-7ckHS.mjs.map
