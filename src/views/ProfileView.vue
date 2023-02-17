<script setup lang="ts">
  import { useSettings } from '@/store/settings';
  import { storeToRefs } from 'pinia';

  import WidgetCard from '@/components/WidgetCard.vue'

  const bd = new Date("1998-06-16");
  const now = new Date();

  function getDayDifference(startDate: Date, endDate: Date) {
    console.log(endDate.getDate(), startDate.getDate());
    return (
      Math.abs(endDate.getDate() -
      startDate.getDate())
    );
  }

function getMonthDifference(startDate: Date, endDate: Date) {
  console.log(endDate.getMonth(), startDate.getMonth());
  return (
    Math.abs(endDate.getMonth() -
    startDate.getMonth())
  );
}

  function getYearDifference(startDate: Date, endDate: Date) {
    return (
      endDate.getFullYear() -
      startDate.getFullYear()
    );
  }

  const { likes } = storeToRefs(useSettings());
</script>

<template>
  <v-card class="mt-3 mx-3 bg-transparent" elevation="0">
    <v-card-title class="text-h1 text-center my-3">
      <div class="text-h2">
        <span>Hello, my name is catrsys</span>
      </div>
    </v-card-title>
    <v-card-text>
      <v-row class="mx-2">
        <div class="text-h6">Lorem ipsum</div>
      </v-row>
      <v-row>
        <v-col >
          <WidgetCard
            icon="mdi-cake"
            :number="getYearDifference(bd, now)"
            title="Years of uptime"
            color="warning"
          />
        </v-col>
        <v-col >
          <WidgetCard
            icon="mdi-calendar-month-outline"
            :number="getMonthDifference(bd, now)"
            title="Months of uptime"
            color="success"
          />
        </v-col>
        <v-col >
          <WidgetCard
            icon="mdi-sun-clock-outline"
            :number="getDayDifference(bd, now)"
            title="Days of uptime"
            color="info"
          />
        </v-col>
      </v-row>
      <v-divider class="ma-5"></v-divider>
    </v-card-text>
    <v-card-actions class="align-items-end">
      <v-spacer></v-spacer>
      {{ likes }}
      <v-btn variant="text" icon="mdi-heart-outline" color="error" @click="likes++"></v-btn>

    </v-card-actions>
  </v-card>
</template>
