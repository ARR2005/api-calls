<template>
  <div class="w-screen h-screen">
      <div class=" h-12 bg-black">
      <h1 class="text-white font-extrabold p-2">{{ title }}</h1>
    </div>
    <div id="app">
      <AgentsList v-if="agents.length" :agents="agents" />
      <ValorantApi @agents-fetched="handleAgentsFetched" />
    </div>
  </div>

</template>

<script>
import ValorantApi from './assets/Valorant_Api.vue';
import AgentsList from './components/icons/AgentsList.vue';

export default {
  components: {
    ValorantApi,
    AgentsList,
  },
  data() {
    return {
      agents: [],
      title: "Api-Calls",
    };
  },
  methods: {
    handleAgentsFetched(agents) {
      this.agents = agents; // Store the fetched agents data
    },
  },
};
</script>
