import { defineComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext, computed } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQuery } from 'vue-query';
import { b as useNuxtApp } from './server.mjs';
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

function useGetCurrentSemesters(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["semester", params],
    () => {
      return $api.semester.getActiveSemester();
    },
    {
      refetchOnWindowFocus: false,
      ...options
    }
  );
  const items = computed(() => {
    var _a, _b;
    return ((_b = (_a = query.data) == null ? void 0 : _a.value) == null ? void 0 : _b.data) || {};
  });
  return {
    ...query,
    items
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "semester",
  __ssrInlineRender: true,
  setup(__props) {
    const { items } = useGetCurrentSemesters();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({ class: "w-100 px-6 py-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-lg font-bold text-uppercase"${_scopeId}>Th\xF4ng tin h\u1ECDc k\u1EF3 hi\u1EC7n t\u1EA1i</div><div class="h-full d-flex"${_scopeId}>`);
            if (unref(items)) {
              _push2(`<div class="d-flex flex-wrap h-1/2 ma-auto"${_scopeId}><div class="w-1/2 md:w-full min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>T\xEAn h\u1ECDc k\u1EF3:</span><span${_scopeId}>${ssrInterpolate(unref(items).ten)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>Ng\xE0y b\u1EAFt \u0111\u1EA7u:</span><span${_scopeId}>${ssrInterpolate(unref(items).start_date)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>Ng\xE0y k\u1EBFt th\xFAc:</span><span${_scopeId}>${ssrInterpolate(unref(items).end_date)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>Ng\xE0y m\u1EDF \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:</span><span${_scopeId}>${ssrInterpolate(unref(items).start_register_topic)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>Ng\xE0y \u0111\xF3ng \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:</span><span${_scopeId}>${ssrInterpolate(unref(items).end_register_topic)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>SV b\u1EAFt \u0111\u1EA7u \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:</span><span${_scopeId}>${ssrInterpolate(unref(items).start_publish_topic)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>SV k\u1EBFt th\xFAc \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:</span><span${_scopeId}>${ssrInterpolate(unref(items).end_publish_topic)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>SV b\u1EAFt \u0111\u1EA7u \u0111\u0103ng k\xFD nh\xF3m:</span><span${_scopeId}>${ssrInterpolate(unref(items).start_register_group)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>SV k\u1EBFt th\xFAc \u0111\u0103ng k\xFD nh\xF3m:</span><span${_scopeId}>${ssrInterpolate(unref(items).end_publish_topic)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>B\u1EAFt \u0111\u1EA7u ph\u1EA3n bi\u1EC7n:</span><span${_scopeId}>${ssrInterpolate(unref(items).start_defense)}</span></div><div class="w-1/2 min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>K\u1EBFt th\xFAc ph\u1EA3n bi\u1EC7n:</span><span${_scopeId}>${ssrInterpolate(unref(items).end_defense)}</span></div><div class="w-1/2 md:w-full min-w-[500px]"${_scopeId}><span class="font-weight-bold mr-2"${_scopeId}>Th\xF4ng b\xE1o k\u1EBFt qu\u1EA3:</span><span${_scopeId}>${ssrInterpolate(unref(items).public_result)}</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-lg font-bold text-uppercase" }, "Th\xF4ng tin h\u1ECDc k\u1EF3 hi\u1EC7n t\u1EA1i"),
              createVNode("div", { class: "h-full d-flex" }, [
                unref(items) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "d-flex flex-wrap h-1/2 ma-auto"
                }, [
                  createVNode("div", { class: "w-1/2 md:w-full min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "T\xEAn h\u1ECDc k\u1EF3:"),
                    createVNode("span", null, toDisplayString(unref(items).ten), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "Ng\xE0y b\u1EAFt \u0111\u1EA7u:"),
                    createVNode("span", null, toDisplayString(unref(items).start_date), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "Ng\xE0y k\u1EBFt th\xFAc:"),
                    createVNode("span", null, toDisplayString(unref(items).end_date), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "Ng\xE0y m\u1EDF \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:"),
                    createVNode("span", null, toDisplayString(unref(items).start_register_topic), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "Ng\xE0y \u0111\xF3ng \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:"),
                    createVNode("span", null, toDisplayString(unref(items).end_register_topic), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "SV b\u1EAFt \u0111\u1EA7u \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:"),
                    createVNode("span", null, toDisplayString(unref(items).start_publish_topic), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "SV k\u1EBFt th\xFAc \u0111\u0103ng k\xFD \u0111\u1EC1 t\xE0i:"),
                    createVNode("span", null, toDisplayString(unref(items).end_publish_topic), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "SV b\u1EAFt \u0111\u1EA7u \u0111\u0103ng k\xFD nh\xF3m:"),
                    createVNode("span", null, toDisplayString(unref(items).start_register_group), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "SV k\u1EBFt th\xFAc \u0111\u0103ng k\xFD nh\xF3m:"),
                    createVNode("span", null, toDisplayString(unref(items).end_publish_topic), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "B\u1EAFt \u0111\u1EA7u ph\u1EA3n bi\u1EC7n:"),
                    createVNode("span", null, toDisplayString(unref(items).start_defense), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "K\u1EBFt th\xFAc ph\u1EA3n bi\u1EC7n:"),
                    createVNode("span", null, toDisplayString(unref(items).end_defense), 1)
                  ]),
                  createVNode("div", { class: "w-1/2 md:w-full min-w-[500px]" }, [
                    createVNode("span", { class: "font-weight-bold mr-2" }, "Th\xF4ng b\xE1o k\u1EBFt qu\u1EA3:"),
                    createVNode("span", null, toDisplayString(unref(items).public_result), 1)
                  ])
                ])) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/semester.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=semester-EVQybgMt.mjs.map
