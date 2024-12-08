import { b9 as defineNuxtRouteMiddleware, b6 as useAuth, a as navigateTo } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'requrl';
import 'axios';
import '@vee-validate/rules';
import '@vee-validate/i18n';
import 'date-fns';
import 'vue-query';
import 'vue3-toastify';

const isTeacher = defineNuxtRouteMiddleware((to, from) => {
  var _a;
  const { data } = useAuth();
  if (!((_a = data.value) == null ? void 0 : _a.roles.includes("teacher"))) {
    return navigateTo("/invalid-page");
  }
});

export { isTeacher as default };
//# sourceMappingURL=is-teacher-DR9Bgi0u.mjs.map
