<template>
    <div class="background">
        <h1 class="title">Valorant Agents</h1>
        <div class="agent-grid">
            <router-link v-for="agent in paginatedAgents" :key="agent.uuid"
                :to="{ name: 'AgentDetails', params: { id: agent.uuid } }" class="agent-card">
                <div class="agent-portrait">
                    <img :src="agent.displayIcon" alt="Agent Icon" class="agent-icon" />
                    <img :src="agent.fullPortrait" alt="Agent Portrait" class="agent-portrait-img" />
                    <h3 class="agent-name">{{ agent.displayName }}</h3>
                </div>
            </router-link>
        </div>

        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">Previous</button>
            <span class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        agents: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1,
            agentsPerPage: 6,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.agents.length / this.agentsPerPage);
        },
        paginatedAgents() {
            const start = (this.currentPage - 1) * this.agentsPerPage;
            return this.agents.slice(start, start + this.agentsPerPage);
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
};
</script>

<style>
/* Your existing styles */
</style>