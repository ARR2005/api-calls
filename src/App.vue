<template>
  <div id="app">
    <ValorantApi @agents-fetched="handleAgentsFetched" />
    <AgentsList v-if="agents.length" :agents="agents" />
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
    };
  },
  methods: {
    handleAgentsFetched(agents) {
      this.agents = agents; // Store the fetched agents data
    },
  },
};
</script>

<style>
/* Add any global styles you want here */
</style>