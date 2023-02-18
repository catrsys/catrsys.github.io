<script setup lang="ts">
  import { useSettings } from '@/store/settings';
  import { storeToRefs } from 'pinia';

  import WidgetCard from '@/components/WidgetCard.vue'

  import avatar from '@/assets/avatar.jpg'
  import github from '@/assets/github-logo.png'
  import telegram from '@/assets/telegram-logo.png'

  const { likes } = storeToRefs(useSettings());

  const education = [
    {
      title: 'Secondary',
      children: [
        {
          title: '09.02.03 Programming in computer systems',
          icon: 'mdi-school-outline',
        },
        {
          title: 'ITMO University College',
          icon: 'mdi-map-marker-outline',
        },
        {
          title: '2014-2018',
          icon: 'mdi-calendar-blank-outline',
        },
      ],
    },
    {
      title: 'Bachelor’s degree',
      children: [
        {
          title: '10.03.01 Information security',
          icon: 'mdi-school-outline',
        },
        {
          title: 'ITMO University',
          icon: 'mdi-map-marker-outline',
        },
        {
          title: '2018-2022',
          icon: 'mdi-calendar-blank-outline',
        },
      ],
    },
    {
      title: 'Master’s degree',
      children: [
        {
          title: '10.04.01 Information security',
          icon: 'mdi-school-outline',
        },
        {
          title: 'ITMO University',
          icon: 'mdi-map-marker-outline',
        },
        {
          title: '2022-present',
          icon: 'mdi-calendar-blank-outline',
        },
      ],
    },
  ];

  const additional = [
    {
      title: 'Web Security Learning',
      children: [
        {
          title: 'Hacktory Platform',
          icon: 'mdi-map-marker-outline',
        },
        {
          title: '2020',
          icon: 'mdi-calendar-blank-outline',
        },
      ],
    },
    {
      title: 'Reverse engineering course',
      children: [
        {
          title: 'SPbCTF',
          icon: 'mdi-map-marker-outline',
        },
        {
          title: '2021',
          icon: 'mdi-calendar-blank-outline',
        },
      ],
    },
    {
      title: 'Java Secure Programming',
      children: [
        {
          title: 'Hacktory Platform',
          icon: 'mdi-map-marker-outline',
        },
        {
          title: '2022',
          icon: 'mdi-calendar-blank-outline',
        },
      ],
    },
    {
      title: 'PortSwigger Academy',
      children: [
        {
          title: 'PortSwigger',
          icon: 'mdi-map-marker-outline',
        },
        {
          title: 'present',
          icon: 'mdi-calendar-blank-outline',
        },
      ],
    },
  ];

  const interests = ['pentest', 'Burp Suite', 'reverse engineering', 'Python', 'web-development', 'frontend', 'VueJS', 'Linux'];
  const avatars = {
    tg: {
      logo: telegram,
      link: 'https://t.me/catrsys',
    },
    github: {
      logo: github,
      link: 'https://github.com/catrsys',
    },
  };
</script>

<template>
  <v-card class="mt-3 mx-3 bg-transparent" elevation="0">
    <v-card-title class="text-h2 text-center styled mb-5 pb-5">
      Hello, my name is <span class="gradient">catrsys</span>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col sm="12" md="4">
          <WidgetCard
            icon="mdi-star-outline"
            :number="6"
            title="Ongoing and Finished Projects"
            color="warning"
          />
        </v-col>
        <v-col sm="12" md="4">
          <WidgetCard
            icon="mdi-sprout-outline"
            :number="6"
            title="Years of self-development"
            color="success"
          />
        </v-col>
        <v-col sm="12" md="4">
          <WidgetCard
            icon="mdi-note-multiple-outline"
            :number="3"
            title="Academic Publications"
            color="info"
          />
        </v-col>
      </v-row>
      <v-divider class="ma-5"></v-divider>
      <v-row>
        <v-col>
          <v-card class="bg-transparent" elevation="0">
            <v-card-title class="text-h4 text-center styled mb-3">
              <span class="gradient">
                Skills & Interests
              </span>
            </v-card-title>
            <v-card-text class="text-center">
              <v-badge
                v-for="(interest, index) in interests"
                :key="index"
                color="info"
                :content="interest"
                inline
              ></v-badge>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="ma-5"></v-divider>
      <v-row>
        <v-col sm="12" md="6">
          <v-card class="bg-transparent" elevation="0">
            <v-card-title class="text-h4 text-center styled">
              <span class="gradient">
                Formal Education
              </span>
            </v-card-title>
            <v-card-text>
              <v-list class="bg-transparent" v-for="(level, index) in education" :key="index">
                <v-list-subheader class="text-h6">
                  {{ level.title }}
                </v-list-subheader>
                <v-list-item v-for="(info, index) in level.children" :key="index">
                  {{ info.title }}
                  <template v-slot:prepend>
                    <v-icon :icon="info.icon" color="info"></v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="6">
          <v-card class="bg-transparent" elevation="0">
            <v-card-title class="text-h4 text-center styled">
              <span class="gradient">
                Additional Courses
              </span>
            </v-card-title>
            <v-card-text>
              <v-list class="bg-transparent" v-for="(level, index) in additional" :key="index">
                <v-list-subheader class="text-h6">
                  {{ level.title }}
                </v-list-subheader>
                <v-list-item v-for="(info, index) in level.children" :key="index">
                  {{ info.title }}
                  <template v-slot:prepend>
                    <v-icon :icon="info.icon" color="info"></v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="ma-5"></v-divider>
      <v-row>
        <v-col>
          <v-card class="bg-gradient">
            <v-card-title class="text-h4 text-center styled my-5">
              Informal Bio
            </v-card-title>
            <v-card-text>
              <v-row class="flex-nowrap mx-6 mb-6">
                <v-col md="2" lg="1" class="align-self-center">
                  <a
                    href="#"
                    class="mr-5"
                  >
                    <v-avatar size="90">
                      <v-img
                        :src="avatar"
                      ></v-img>
                    </v-avatar>
                  </a>
                </v-col>
                <v-col md="10" lg="11" class="text-subtitle-1 styled align-self-center flex-grow-1">
                  Infosec soon-to-be master, junior pentester, amateur artist, crocheting fan, occasional badminton ambidexter. Equally enjoying disco dancing and krav-maga sparring. Both dog & cat person, natural born peacemaker with capibara as a totem animal.
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-divider class="ma-5"></v-divider>
    </v-card-text>
    <v-card-actions class="px-10">
      <v-row>
        <v-col sm="4" xs="12" class="align-self-center">
          <a
          v-for="(avatar, index) in avatars"
          :key="index"
          :href="avatar.link"
          class="mr-5"
        >
          <v-avatar size="30">
            <v-img
              :src="avatar.logo"
            ></v-img>
          </v-avatar>
        </a>
        </v-col>
        <v-col sm="4" xs="12" class="align-self-center text-center">
          © 2023
        </v-col>
        <v-col sm="4" xs="12" class="align-self-center text-right">
          <v-spacer></v-spacer>
          {{ likes }}
          <v-btn size="x-large" variant="text" icon="mdi-heart-outline" color="pink-lighten-2" @click="likes++"></v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<style text="css">
.gradient {
  background: -webkit-linear-gradient(45deg, #2196F3, #4CAF50);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient {
  background: linear-gradient(90deg, #2196F3, #4CAF50);
}
</style>