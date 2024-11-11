<template>
    <div class=" relative flex flex-col bg-slate-600 w-screen h-screen">
        <div v-for="agent in paginatedAgents" 
            :key="agent.uuid + (agent.isPlayableCharacter === true)"
            class='m-5 flex flex-row'>
            <div> 
                <h1 class="text-6xl bg-gradient-to-t from-red-600 via-transparent to-transparent bg-[length:20%_100%]"> 
                    {{ agent.displayName }} 
                </h1>
                <p class="text-2xl max-w-[px]"> 
                    {{ agent.description }} 
                </p>
                <div>
                    <ul class="list-image-none">
                        <li v-for="skill in agent.abilities" :key="skill.slot" class="skill-item flex items-center">
                            <img :src="skill.displayIcon" alt="Ability Icon" class="w-20" />
                            <div class="flex fle-col text-1xl">
                                <span class="ml-2">
                                    {{ skill.displayName }}
                                </span>
                                <span class="w-[800px]">
                                    {{ skill.description }}
                                </span> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="absolute bottom-0 right-0 w-[40%] ">
                <img :src="agent.fullPortrait" alt="Agent Portrait" class="agent-portrait-img" />
            </div>
        </div>
            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">Previous</button>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">Next</button>
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
            agentsPerPage: 1,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.agents.filter(agent => agent.isPlayableCharacter).length / this.agentsPerPage);
        },
        paginatedAgents() {
        const playableAgents = this.agents.filter(agent => agent.isPlayableCharacter);
        const start = (this.currentPage - 1) * this.agentsPerPage;
        return playableAgents.slice(start, start + this.agentsPerPage);
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
    .bg-image {
        background-image: url('./assets/valorantBackground.png'); 
        background-size: cover; 
        background-position: center;
    }
</style>