<template>
  <q-page class="row items-center justify-evenly">
    Home Page
  </q-page>
</template>

<script setup lang="ts">

import { useMsal } from '../composables/useMsal';

import { onBeforeMount } from 'vue';
import { loginRequest } from '../authConfig';

import { useIsAuthenticated } from 'src/composables/useIsAuthenticated';

const { instance } = useMsal();
const isAuthenticated = useIsAuthenticated();

/*
onBeforeMount(async() => {

  console.log('isAuthenticated: ', isAuthenticated)

  if(! isAuthenticated.value) await instance.loginRedirect(loginRequest)
})

*/

// async function getGraphData() {
//   if (result.value) {
//     // User profile
//     const graphData = await useMsGraphApiCall(
//       result.value.accessToken,
//       graphConfig.graphMeDetailsEndpoint
//     ).catch(() => acquireToken());
//     localStorage.setItem('displayNameGraph', graphData.displayName);
//     localStorage.setItem('extensionAttribute11Graph', graphData.displayName);
//     localStorage.setItem('extensionAttribute14Graph', graphData.displayName);
//     router.push({
//       path: 'form',
//     });
//     state.resolved = true;
//   }
// }
</script>
