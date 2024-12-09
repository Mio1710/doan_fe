import { computed } from 'vue';
import { useQuery } from 'vue-query';
import _ from 'lodash';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { b as useNuxtApp } from './server.mjs';

function sortsParser(sortBy, sortType) {
  if (!sortBy) {
    return [];
  }
  if (Array.isArray(sortBy)) {
    return _.map(_.zip(sortBy, sortType), ([sortBy2, sortType2]) => {
      return sortType2 === "desc" ? `-${sortBy2}` : sortBy2;
    });
  }
  return [sortType === "desc" ? `-${sortBy}` : sortBy];
}
function useGetTopics(params, options) {
  const { $api } = useNuxtApp();
  const query = useQuery(
    ["topic", params],
    () => {
      const { sortBy, sortType } = params.value;
      const sorts = sortsParser(sortBy, sortType);
      console.log("params", params.value);
      const query2 = new Parser({
        includes: [],
        appends: [],
        fields: {},
        filters: {},
        sorts,
        page: params.value.page,
        limit: params.value.rowsPerPage,
        payload: null,
        ...params.value
      }).query();
      console.log("query", query2);
      return $api.topic.getTopics(query2);
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
  const totalItems = computed(() => {
    var _a, _b;
    return ((_b = (_a = query.data.value) == null ? void 0 : _a.pagination) == null ? void 0 : _b.total) || 0;
  });
  return {
    ...query,
    items,
    totalItems
  };
}

export { useGetTopics as u };
//# sourceMappingURL=use-get-topic-V4a7sHwV.mjs.map
