import { defineComponent, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './FormCard-BTPzcLlL.mjs';
import { useQuery } from 'vue-query';
import { b as useNuxtApp } from './server.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';

function useGetMyResultTopicLOs(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["student-result-topic-los", params],
    () => {
      return $api.results.getMyResultTopic();
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
  __name: "MyResultDetail",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { items, isLoading, error, refetch } = useGetMyResultTopicLOs();
    const headers = [
      {
        title: "STT",
        align: "center",
        sortable: false,
        value: "index",
        width: 20
      },
      { title: "Ti\xEAu ch\xED \u0111\xE1nh gi\xE1", value: "main_criteria", width: "50%", minWidth: 500 },
      { title: "Ti\xEAu ch\xED ph\u1EE5", value: "sub_criteria", width: "30%", minWidth: 100 },
      { title: "H\u1EC7 s\u1ED1", value: "cof", width: "7%", minWidth: 50 },
      { title: "\u0110i\u1EC3m", value: "score", width: "7%", minWidth: 50 }
    ];
    const totalScore = computed(() => {
      return items.value.reduce((acc, item) => acc + item.score * item.cof, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        "can-cancel": "",
        "cancel-text": "\u0110\xF3ng",
        "hide-submit": "",
        title: `\u0110i\u1EC3m qu\xE1 tr\xECnh c\u1EE7a sinh vi\xEAn: ${(_a = __props.item) == null ? void 0 : _a.hodem} ${(_b = __props.item) == null ? void 0 : _b.ten}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              class: "elevation-1",
              headers,
              "hide-default-footer": "",
              hover: "",
              items: unref(items),
              "items-per-page": 100
            }, {
              "item.index": withCtx(({ index }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(index + 1)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(index + 1), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-center font-weight-bold text-error py-2"${_scopeId}><span${_scopeId}>\u0110i\u1EC3m t\u1ED5ng: ${ssrInterpolate(unref(totalScore) / 10)}</span></div>`);
          } else {
            return [
              createVNode(VDataTable, {
                class: "elevation-1",
                headers,
                "hide-default-footer": "",
                hover: "",
                items: unref(items),
                "items-per-page": 100
              }, {
                "item.index": withCtx(({ index }) => [
                  createTextVNode(toDisplayString(index + 1), 1)
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode("div", { class: "text-center font-weight-bold text-error py-2" }, [
                createVNode("span", null, "\u0110i\u1EC3m t\u1ED5ng: " + toDisplayString(unref(totalScore) / 10), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/student/result/molecules/MyResultDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=MyResultDetail-CtkjenBm.mjs.map
