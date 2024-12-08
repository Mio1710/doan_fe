import { ref, shallowRef, computed, watch, nextTick, createVNode, mergeProps, Fragment, createTextVNode, defineComponent, mergeModels, useModel, resolveComponent, withCtx, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useGetTeachers } from './use-get-teachers-B3LLnpVr.mjs';
import { a as makeFilterProps, d as makeSelectProps, u as useFilter, e as useScrolling, f as VVirtualScroll } from './filter-TSYBjJBT.mjs';
import { j as propsFactory, ap as omit, aq as makeVTextFieldProps, t as makeTransitionProps$1, g as genericComponent, a7 as useLocale, a2 as useProxiedModel, ax as useTextColor, ah as wrapInArray, ar as useForm, h as useRender, as as VTextField, at as VMenu, e as VIcon, au as ensureValidVNode, L as VDefaultsProvider, b5 as noop, a4 as forwardRefs, av as checkPrintable, aw as matchesSelector } from './server.mjs';
import { a as useItems, V as VList, b as VListItem } from './VList-Ch2cSLwT.mjs';
import { a as VCheckboxBtn } from './VCheckboxBtn-DaFH5r1c.mjs';
import { d as VAvatar } from './VCard-DOF4acQr.mjs';
import { V as VChip } from './VChip-LjVjlGI_.mjs';

function highlightResult(text, matches, length) {
  if (matches == null) return text;
  if (Array.isArray(matches)) throw new Error("Multiple matches is not implemented");
  return typeof matches === "number" && ~matches ? createVNode(Fragment, null, [createVNode("span", {
    "class": "v-autocomplete__unmask"
  }, [text.substr(0, matches)]), createVNode("span", {
    "class": "v-autocomplete__mask"
  }, [text.substr(matches, length)]), createVNode("span", {
    "class": "v-autocomplete__unmask"
  }, [text.substr(matches + length)])]) : text;
}
const makeVAutocompleteProps = propsFactory({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...makeFilterProps({
    filterKeys: ["title"]
  }),
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...makeTransitionProps$1({
    transition: false
  })
}, "VAutocomplete");
const VAutocomplete = genericComponent()({
  name: "VAutocomplete",
  props: makeVAutocompleteProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:search": (value) => true,
    "update:modelValue": (value) => true,
    "update:menu": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const isFocused = shallowRef(false);
    const isPristine = shallowRef(true);
    const listHasFocus = shallowRef(false);
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        var _a;
        if (_menu.value && !v && ((_a = vMenuRef.value) == null ? void 0 : _a.\u03A8openChildren.size)) return;
        _menu.value = v;
      }
    });
    const selectionIndex = shallowRef(-1);
    const color = computed(() => {
      var _a;
      return (_a = vTextFieldRef.value) == null ? void 0 : _a.color;
    });
    const label = computed(() => menu.value ? props.closeText : props.openText);
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    const search = useProxiedModel(props, "search", "");
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
      var _a;
      const transformed = transformOut(v);
      return props.multiple ? transformed : (_a = transformed[0]) != null ? _a : null;
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
    });
    const form = useForm(props);
    const {
      filteredItems,
      getMatches
    } = useFilter(props, items, () => isPristine.value ? "" : search.value);
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return filteredItems.value.filter((filteredItem) => !model.value.some((s) => s.value === filteredItem.value));
      }
      return filteredItems.value;
    });
    const hasChips = computed(() => !!(props.chips || slots.chip));
    const hasSelectionSlot = computed(() => hasChips.value || !!slots.selection);
    const selectedValues = computed(() => model.value.map((selection) => selection.props.value));
    const highlightFirst = computed(() => {
      var _a;
      const selectFirst = props.autoSelectFirst === true || props.autoSelectFirst === "exact" && search.value === ((_a = displayItems.value[0]) == null ? void 0 : _a.title);
      return selectFirst && displayItems.value.length > 0 && !isPristine.value && !listHasFocus.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
    const listRef = ref();
    const listEvents = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
      search.value = "";
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = true;
    }
    function onMousedownMenuIcon(e) {
      if (menuDisabled.value) return;
      if (isFocused.value) {
        e.preventDefault();
        e.stopPropagation();
      }
      menu.value = !menu.value;
    }
    function onListKeydown(e) {
      var _a;
      if (checkPrintable(e)) {
        (_a = vTextFieldRef.value) == null ? void 0 : _a.focus();
      }
    }
    function onKeydown(e) {
      var _a, _b, _c;
      if (form.isReadonly.value) return;
      const selectionStart = vTextFieldRef.value.selectionStart;
      const length = model.value.length;
      if (selectionIndex.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown"].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape"].includes(e.key)) {
        menu.value = false;
      }
      if (highlightFirst.value && ["Enter", "Tab"].includes(e.key) && !model.value.some((_ref2) => {
        let {
          value
        } = _ref2;
        return value === displayItems.value[0].value;
      })) {
        select(displayItems.value[0]);
      }
      if (e.key === "ArrowDown" && highlightFirst.value) {
        (_a = listRef.value) == null ? void 0 : _a.focus("next");
      }
      if (["Backspace", "Delete"].includes(e.key)) {
        if (!props.multiple && hasSelectionSlot.value && model.value.length > 0 && !search.value) return select(model.value[0], false);
        if (~selectionIndex.value) {
          const originalSelectionIndex = selectionIndex.value;
          select(model.value[selectionIndex.value], false);
          selectionIndex.value = originalSelectionIndex >= length - 1 ? length - 2 : originalSelectionIndex;
        } else if (e.key === "Backspace" && !search.value) {
          selectionIndex.value = length - 1;
        }
      }
      if (!props.multiple) return;
      if (e.key === "ArrowLeft") {
        if (selectionIndex.value < 0 && selectionStart > 0) return;
        const prev = selectionIndex.value > -1 ? selectionIndex.value - 1 : length - 1;
        if (model.value[prev]) {
          selectionIndex.value = prev;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value.setSelectionRange((_b = search.value) == null ? void 0 : _b.length, (_c = search.value) == null ? void 0 : _c.length);
        }
      }
      if (e.key === "ArrowRight") {
        if (selectionIndex.value < 0) return;
        const next = selectionIndex.value + 1;
        if (model.value[next]) {
          selectionIndex.value = next;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value.setSelectionRange(0, 0);
        }
      }
    }
    function onChange(e) {
      if (matchesSelector(vTextFieldRef.value) || matchesSelector(vTextFieldRef.value)) ;
    }
    function onAfterEnter() {
      var _a;
      if (props.eager) {
        (_a = vVirtualScrollRef.value) == null ? void 0 : _a.calculateVisibleItems();
      }
    }
    function onAfterLeave() {
      var _a;
      if (isFocused.value) {
        isPristine.value = true;
        (_a = vTextFieldRef.value) == null ? void 0 : _a.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
      setTimeout(() => {
        listHasFocus.value = true;
      });
    }
    function onFocusout(e) {
      listHasFocus.value = false;
    }
    function onUpdateModelValue(v) {
      if (v == null || v === "" && !props.multiple && !hasSelectionSlot.value) model.value = [];
    }
    const isSelecting = shallowRef(false);
    function select(item) {
      let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (!item || item.props.disabled) return;
      if (props.multiple) {
        const index = model.value.findIndex((selection) => props.valueComparator(selection.value, item.value));
        const add = set == null ? !~index : set;
        if (~index) {
          const value = add ? [...model.value, item] : [...model.value];
          value.splice(index, 1);
          model.value = value;
        } else if (add) {
          model.value = [...model.value, item];
        }
        if (props.clearOnSelect) {
          search.value = "";
        }
      } else {
        const add = set !== false;
        model.value = add ? [item] : [];
        search.value = add && !hasSelectionSlot.value ? item.title : "";
        nextTick(() => {
          menu.value = false;
          isPristine.value = true;
        });
      }
    }
    watch(isFocused, (val, oldVal) => {
      var _a2;
      var _a;
      if (val === oldVal) return;
      if (val) {
        isSelecting.value = true;
        search.value = props.multiple || hasSelectionSlot.value ? "" : String((_a2 = (_a = model.value.at(-1)) == null ? void 0 : _a.props.title) != null ? _a2 : "");
        isPristine.value = true;
        nextTick(() => isSelecting.value = false);
      } else {
        if (!props.multiple && search.value == null) model.value = [];
        menu.value = false;
        if (!model.value.some((_ref3) => {
          let {
            title
          } = _ref3;
          return title === search.value;
        })) search.value = "";
        selectionIndex.value = -1;
      }
    });
    watch(search, (val) => {
      if (!isFocused.value || isSelecting.value) return;
      if (val) menu.value = true;
      isPristine.value = !val;
    });
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        displayItems.value.findIndex((item) => model.value.some((s) => item.value === s.value));
      }
    });
    watch(() => props.items, (newVal, oldVal) => {
      if (menu.value) return;
      if (isFocused.value && !oldVal.length && newVal.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": search.value,
        "onUpdate:modelValue": [($event) => search.value = $event, onUpdateModelValue],
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "onChange": onChange,
        "class": ["v-autocomplete", `v-autocomplete--${props.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": menu.value,
          "v-autocomplete--chips": !!props.chips,
          "v-autocomplete--selection-slot": !!hasSelectionSlot.value,
          "v-autocomplete--selecting-index": selectionIndex.value > -1
        }, props.class],
        "style": props.style,
        "readonly": form.isReadonly.value,
        "placeholder": isDirty ? void 0 : props.placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onKeydown": onKeydown
      }), {
        ...slots,
        default: () => createVNode(Fragment, null, [createVNode(VMenu, mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": ($event) => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-autocomplete__content",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterEnter": onAfterEnter,
          "onAfterLeave": onAfterLeave
        }, props.menuProps), {
          default: () => {
            var _a;
            return [hasList && createVNode(VList, mergeProps({
              "ref": listRef,
              "selected": selectedValues.value,
              "selectStrategy": props.multiple ? "independent" : "single-independent",
              "onMousedown": (e) => e.preventDefault(),
              "onKeydown": onListKeydown,
              "onFocusin": onFocusin,
              "onFocusout": onFocusout,
              "tabindex": "-1",
              "aria-live": "polite",
              "color": (_a = props.itemColor) != null ? _a : props.color
            }, listEvents, props.listProps), {
              default: () => {
                var _a3;
                var _a2, _b, _c;
                return [(_a2 = slots["prepend-item"]) == null ? void 0 : _a2.call(slots), !displayItems.value.length && !props.hideNoData && ((_a3 = (_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) != null ? _a3 : createVNode(VListItem, {
                  "title": t(props.noDataText)
                }, null)), createVNode(VVirtualScroll, {
                  "ref": vVirtualScrollRef,
                  "renderless": true,
                  "items": displayItems.value
                }, {
                  default: (_ref4) => {
                    var _a4;
                    var _a22;
                    let {
                      item,
                      index,
                      itemRef
                    } = _ref4;
                    const itemProps = mergeProps(item.props, {
                      ref: itemRef,
                      key: index,
                      active: highlightFirst.value && index === 0 ? true : void 0,
                      onClick: () => select(item, null)
                    });
                    return (_a4 = (_a22 = slots.item) == null ? void 0 : _a22.call(slots, {
                      item,
                      index,
                      props: itemProps
                    })) != null ? _a4 : createVNode(VListItem, mergeProps(itemProps, {
                      "role": "option"
                    }), {
                      prepend: (_ref5) => {
                        let {
                          isSelected
                        } = _ref5;
                        return createVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                          "key": item.value,
                          "modelValue": isSelected,
                          "ripple": false,
                          "tabindex": "-1"
                        }, null) : void 0, item.props.prependAvatar && createVNode(VAvatar, {
                          "image": item.props.prependAvatar
                        }, null), item.props.prependIcon && createVNode(VIcon, {
                          "icon": item.props.prependIcon
                        }, null)]);
                      },
                      title: () => {
                        var _a5;
                        var _a32, _b2;
                        return isPristine.value ? item.title : highlightResult(item.title, (_a32 = getMatches(item)) == null ? void 0 : _a32.title, (_a5 = (_b2 = search.value) == null ? void 0 : _b2.length) != null ? _a5 : 0);
                      }
                    });
                  }
                }), (_c = slots["append-item"]) == null ? void 0 : _c.call(slots)];
              }
            })];
          }
        }), model.value.map((item, index) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item, false);
          }
          const slotProps = {
            "onClick:close": onChipClose,
            onKeydown(e) {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              e.stopPropagation();
              onChipClose(e);
            },
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            "onUpdate:modelValue": void 0
          };
          const hasSlot = hasChips.value ? !!slots.chip : !!slots.selection;
          const slotContent = hasSlot ? ensureValidVNode(hasChips.value ? slots.chip({
            item,
            index,
            props: slotProps
          }) : slots.selection({
            item,
            index
          })) : void 0;
          if (hasSlot && !slotContent) return void 0;
          return createVNode("div", {
            "key": item.value,
            "class": ["v-autocomplete__selection", index === selectionIndex.value && ["v-autocomplete__selection--selected", textColorClasses.value]],
            "style": index === selectionIndex.value ? textColorStyles.value : {}
          }, [hasChips.value ? !slots.chip ? createVNode(VChip, mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title,
            "disabled": item.props.disabled
          }, slotProps), null) : createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: "small",
                text: item.title
              }
            }
          }, {
            default: () => [slotContent]
          }) : slotContent != null ? slotContent : createVNode("span", {
            "class": "v-autocomplete__selection-text"
          }, [item.title, props.multiple && index < model.value.length - 1 && createVNode("span", {
            "class": "v-autocomplete__selection-comma"
          }, [createTextVNode(",")])])]);
        })]),
        "append-inner": function() {
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(Fragment, null, [(_a = slots["append-inner"]) == null ? void 0 : _a.call(slots, ...args), props.menuIcon ? createVNode(VIcon, {
            "class": "v-autocomplete__menu-icon",
            "icon": props.menuIcon,
            "onMousedown": onMousedownMenuIcon,
            "onClick": noop,
            "aria-label": t(label.value),
            "title": t(label.value),
            "tabindex": "-1"
          }, null) : void 0]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      isPristine,
      menu,
      search,
      filteredItems,
      select
    }, vTextFieldRef);
  }
});
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

export { VAutocomplete as V, _sfc_main as _ };
//# sourceMappingURL=TeacherAutocomplete-BMgdb1a5.mjs.map
