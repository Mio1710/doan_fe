import { toRefs, toRef, computed, shallowRef, createVNode, mergeProps } from 'vue';
import { m as makeDataTableProps, b as makeDataTableGroupProps, c as createGroupBy, d as createSort, e as createHeaders, u as useDataTableItems, p as provideSort, f as provideGroupBy, g as useSortedItems, h as useGroupedItems, i as provideSelection, j as provideExpanded, k as useOptions, l as VDataTableHeaders, n as VDataTableRows, a as VTable, o as VDataTableRow } from './VDataTable-XVgdzRb7.mjs';
import { a as makeVirtualProps, m as makeFilterProps, u as useFilter, b as useVirtual, c as VVirtualScrollItem } from './filter-TSYBjJBT.mjs';
import { j as propsFactory, g as genericComponent, p as provideDefaults, h as useRender, y as convertToUnit } from './server.mjs';

const makeVDataTableVirtualProps = propsFactory({
  ...makeDataTableProps(),
  ...makeDataTableGroupProps(),
  ...makeVirtualProps(),
  ...makeFilterProps()
}, "VDataTableVirtual");
const VDataTableVirtual = genericComponent()({
  name: "VDataTableVirtual",
  props: makeVDataTableVirtualProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      disableSort
    } = toRefs(props);
    const {
      columns,
      headers,
      filterFunctions,
      sortFunctions,
      sortRawFunctions
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns,
      customKeyFilter: filterFunctions
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy,
      disableSort
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups, {
      transform: (item) => ({
        ...item.raw,
        ...item.columns
      }),
      sortFunctions,
      sortRawFunctions
    });
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const allItems = computed(() => extractRows(flatItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems,
      currentPage: allItems
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const {
      containerRef,
      markerRef,
      paddingTop,
      paddingBottom,
      computedItems,
      handleItemResize,
      handleScroll,
      handleScrollend
    } = useVirtual(props, flatItems);
    const displayItems = computed(() => computedItems.value.map((item) => item.raw));
    useOptions({
      sortBy,
      page: shallowRef(1),
      itemsPerPage: shallowRef(-1),
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      sortBy: sortBy.value,
      toggleSort,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: allItems.value.map((item) => item.raw),
      internalItems: allItems.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const dataTableHeadersProps = VDataTableHeaders.filterProps(props);
      const dataTableRowsProps = VDataTableRows.filterProps(props);
      const tableProps = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        wrapper: () => {
          var _a, _b, _c;
          return createVNode("div", {
            "ref": containerRef,
            "onScrollPassive": handleScroll,
            "onScrollend": handleScrollend,
            "class": "v-table__wrapper",
            "style": {
              height: convertToUnit(props.height)
            }
          }, [createVNode("table", null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideDefaultHeader && createVNode("thead", {
            "key": "thead"
          }, [createVNode(VDataTableHeaders, mergeProps(dataTableHeadersProps, {
            "sticky": props.fixedHeader
          }), slots)]), !props.hideDefaultBody && createVNode("tbody", null, [createVNode("tr", {
            "ref": markerRef,
            "style": {
              height: convertToUnit(paddingTop.value),
              border: 0
            }
          }, [createVNode("td", {
            "colspan": columns.value.length,
            "style": {
              height: 0,
              border: 0
            }
          }, null)]), (_b = slots["body.prepend"]) == null ? void 0 : _b.call(slots, slotProps.value), createVNode(VDataTableRows, mergeProps(attrs, dataTableRowsProps, {
            "items": displayItems.value
          }), {
            ...slots,
            item: (itemSlotProps) => createVNode(VVirtualScrollItem, {
              "key": itemSlotProps.internalItem.index,
              "renderless": true,
              "onUpdate:height": (height) => handleItemResize(itemSlotProps.internalItem.index, height)
            }, {
              default: (_ref2) => {
                var _a3;
                var _a2;
                let {
                  itemRef
                } = _ref2;
                return (_a3 = (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                  ...itemSlotProps,
                  itemRef
                })) != null ? _a3 : createVNode(VDataTableRow, mergeProps(itemSlotProps.props, {
                  "ref": itemRef,
                  "key": itemSlotProps.internalItem.index,
                  "index": itemSlotProps.internalItem.index
                }), slots);
              }
            })
          }), (_c = slots["body.append"]) == null ? void 0 : _c.call(slots, slotProps.value), createVNode("tr", {
            "style": {
              height: convertToUnit(paddingBottom.value),
              border: 0
            }
          }, [createVNode("td", {
            "colspan": columns.value.length,
            "style": {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var _a;
          return (_a = slots.bottom) == null ? void 0 : _a.call(slots, slotProps.value);
        }
      });
    });
  }
});

export { VDataTableVirtual as V };
//# sourceMappingURL=VDataTableVirtual-DdrSO8OG.mjs.map
