import { defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useQueryClient, useQuery } from 'vue-query';
import { b as useNuxtApp, V as VBtn, e as VIcon, f as VSpacer } from './server.mjs';
import { V as VCard } from './VCard-DOF4acQr.mjs';
import { V as VDataTable } from './VDataTable-XVgdzRb7.mjs';
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
import './VDivider-DqGd8YoX.mjs';
import './VCheckboxBtn-DaFH5r1c.mjs';
import './VChip-LjVjlGI_.mjs';

function useGetAllStudentTopics(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["all-student-topic", params],
    () => {
      return $api.superTeacher.getAllStudentTopics();
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
  __name: "student-topic",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref("");
    const headers = [
      {
        title: "STT",
        align: "center",
        sortable: false,
        key: "index",
        width: 50
      },
      { title: "T\xEAn sinh vi\xEAn", key: "ten" },
      { title: "L\u1EDBp", key: "lop", width: "15%", minWidth: 150 },
      { title: "Nh\xF3m", key: "studentTopic[0].group_id", width: "5%", minWidth: 50, align: "center" },
      { title: "Gi\u1EA3ng vi\xEAn h\u01B0\u1EDBng d\u1EABn", key: "gv", width: "20%", minWidth: 200 },
      { title: "\u0110\u1EC1 t\xE0i", key: "detai", width: "30%", minWidth: 300 },
      { title: "", key: "action", width: 30 }
    ];
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 25,
      sortBy: "-created_at",
      sortType: "asc"
    });
    const queryBuilder = computed(() => ({
      ...serverOptions.value
    }));
    const { $api, $toast } = useNuxtApp();
    const queryClient = useQueryClient();
    const loading = ref(false);
    const lockGroup = () => {
      loading.value = true;
      $api.superTeacher.lockStudentGroup().then(() => {
        queryClient.invalidateQueries("all-student-topic");
        $toast.success("\u0110\xE3 kh\xF3a nh\xF3m th\xE0nh c\xF4ng");
      }).finally(() => {
        loading.value = false;
      });
    };
    const { items, isLoading, refetch } = useGetAllStudentTopics(queryBuilder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-grow-1 h-full" }, _attrs))}><div class="text-lg font-bold text-uppercase">Qu\u1EA3n l\xFD sinh vi\xEAn kh\xF3a lu\u1EADn</div>`);
      _push(ssrRenderComponent(VCard, {
        class: "pa-3 h-full",
        color: "white",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              color: "success",
              loading: unref(loading),
              size: "small",
              onClick: lockGroup
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, { class: "mr-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-lock`);
                      } else {
                        return [
                          createTextVNode("mdi-lock")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Kh\xF3a nh\xF3m</span>`);
                } else {
                  return [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-lock")
                      ]),
                      _: 1
                    }),
                    createVNode("span", null, "Kh\xF3a nh\xF3m")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              icon: "",
              size: "x-small",
              variant: "text",
              onClick: ($event) => unref(refetch)()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-refresh`);
                      } else {
                        return [
                          createTextVNode("mdi-refresh")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-refresh")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(VDataTable, {
              headers,
              "hide-default-footer": "",
              items: unref(items),
              loading: unref(isLoading)
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
              "item.nhom": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_a = item.studentTopic[0]) == null ? void 0 : _a.group_id)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_b = item.studentTopic[0]) == null ? void 0 : _b.group_id), 1)
                  ];
                }
              }),
              "item.ten": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(item.hodem + " " + item.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(item.hodem + " " + item.ten), 1)
                  ];
                }
              }),
              "item.detai": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_b = (_a = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _a.topic) == null ? void 0 : _b.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_d = (_c = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _c.topic) == null ? void 0 : _d.ten), 1)
                  ];
                }
              }),
              "item.gv": withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate((_b = (_a = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _a.topic) == null ? void 0 : _b.teacher.hodem)} ${ssrInterpolate((_d = (_c = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _c.topic) == null ? void 0 : _d.teacher.ten)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString((_f = (_e = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _e.topic) == null ? void 0 : _f.teacher.hodem) + " " + toDisplayString((_h = (_g = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _g.topic) == null ? void 0 : _h.teacher.ten), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex" }, [
                createVNode(VBtn, {
                  color: "success",
                  loading: unref(loading),
                  size: "small",
                  onClick: lockGroup
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, { class: "mr-2" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-lock")
                      ]),
                      _: 1
                    }),
                    createVNode("span", null, "Kh\xF3a nh\xF3m")
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(VSpacer),
                createVNode(VBtn, {
                  icon: "",
                  size: "x-small",
                  variant: "text",
                  onClick: ($event) => unref(refetch)()
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-refresh")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              createVNode("div", { class: "mt-2" }, [
                createVNode(VDataTable, {
                  headers,
                  "hide-default-footer": "",
                  items: unref(items),
                  loading: unref(isLoading)
                }, {
                  "item.index": withCtx(({ index }) => [
                    createVNode("span", null, toDisplayString(index + 1), 1)
                  ]),
                  "item.nhom": withCtx(({ item }) => {
                    var _a;
                    return [
                      createVNode("span", null, toDisplayString((_a = item.studentTopic[0]) == null ? void 0 : _a.group_id), 1)
                    ];
                  }),
                  "item.ten": withCtx(({ item }) => [
                    createVNode("span", null, toDisplayString(item.hodem + " " + item.ten), 1)
                  ]),
                  "item.detai": withCtx(({ item }) => {
                    var _a, _b;
                    return [
                      createVNode("span", null, toDisplayString((_b = (_a = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _a.topic) == null ? void 0 : _b.ten), 1)
                    ];
                  }),
                  "item.gv": withCtx(({ item }) => {
                    var _a, _b, _c, _d;
                    return [
                      createVNode("span", null, toDisplayString((_b = (_a = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _a.topic) == null ? void 0 : _b.teacher.hodem) + " " + toDisplayString((_d = (_c = item == null ? void 0 : item.studentTopic[0]) == null ? void 0 : _c.topic) == null ? void 0 : _d.teacher.ten), 1)
                    ];
                  }),
                  _: 1
                }, 8, ["items", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/subject/student-topic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=student-topic-CpX8GUiS.mjs.map
