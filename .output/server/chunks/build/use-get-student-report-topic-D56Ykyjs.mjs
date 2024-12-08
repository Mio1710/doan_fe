import { computed } from 'vue';
import { useQuery } from 'vue-query';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import _ from 'lodash';
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
function useGetStudentReportTopics(params, options) {
  const { $api } = useNuxtApp();
  console.log("params in useQuery", params);
  const query = useQuery(
    ["student-report-topic", params],
    () => {
      const { sortBy, sortType } = params.value;
      const sorts = sortsParser(sortBy, sortType);
      console.log("params in useQuery", params, params.value);
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
      return $api.teacher.getStudentReportTopics(query2);
    },
    {
      refetchOnWindowFocus: false,
      ...options
    }
  );
  const items = computed(() => {
    var _a;
    return ((_a = query.data.value) == null ? void 0 : _a.data) || {};
  });
  return {
    ...query,
    items
  };
}

export { useGetStudentReportTopics as u };
//# sourceMappingURL=use-get-student-report-topic-D56Ykyjs.mjs.map
