<script>
import { api } from "./api/api.js";
import * as moment from "moment";

export default {
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      matchList: {},
    };
  },
  methods: {
    async fetchData() {
      const data = await api.getLatestProMatches();
      this.matchList = data;
    },
  },
};
</script>

<template>
  <main>
    <h1 @click="fetchData" class="title">Dota 2 Latest Pro Matches</h1>
    <div v-for="match in this.matchList" class="match-wrap">
      <div class="turnament-name">{{ match.league_name }}</div>
      <div class="teams">
        <div class="team-radiant" :class="{ win: match.radiant_win }">
          {{ match.radiant_name }}
          <span class="score">{{ match.radiant_score }}</span>
        </div>
        <div class="vs">vs</div>
        <div class="team-dire" :class="{ win: !match.radiant_win }">
          <span class="score">{{ match.dire_score }}</span>
          {{ match.dire_name }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  font-family: "Open-Sans", sans-serif;
}
.title {
  color: #f5b801;
  text-align: center;
}
.match-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
}

.turnament-name {
  margin-bottom: 10px;

  color: #f5b801;

  font-weight: 600;
}

.teams {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.team-radiant,
.team-dire {
  position: relative;

  display: flex;
  align-items: center;

  gap: 10px;

  font-weight: 600;
  font-size: 20px;
}

.team-dire.win::after {
  content: "WIN";
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(100%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 15px;

  border: 2px solid #f5b801;
  border-radius: 15px;

  color: #f5b801;

  font-size: 10px;
}

.team-radiant.win::after {
  content: "WIN";
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 15px;

  border: 2px solid #f5b801;
  border-radius: 15px;

  color: #f5b801;

  font-size: 10px;
}

.team-radiant {
  color: #7cbf4e;
}

.team-dire {
  color: #e0515a;
}
.score {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  color: white;
  background-color: #4711a8;

  line-height: 1;
}
</style>
