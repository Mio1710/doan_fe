import { computed } from 'vue';
import { useQuery } from 'vue-query';
import { P as Parser } from './parser-bDJLlw8s.mjs';
import { s as sortsParser } from './sortParser-D3-t-zlx.mjs';
import { b as useNuxtApp } from './server.mjs';

function useGetStudentReportInterns(params, options) {
  const { $api } = useNuxtApp();
  console.log("params in useQuery", params);
  const query = useQuery(
    ["student-report-intern", params],
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
      return $api.teacher.getStudentReportInterns(query2);
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

export { useGetStudentReportInterns as u };
//# sourceMappingURL=use-get-student-report-intern-DJyTB4nx.mjs.map
