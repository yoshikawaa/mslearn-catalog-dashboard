<template>
  <v-app>
    <v-app-bar app color="primary" clippedLeft :collapse-on-scroll="$vuetify.breakpoint.xsOnly">
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xsOnly" @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-avatar class="shrink mr-4">
          <v-img
            alt="Logo"
            src="https://github.com/yoshikawaa.png"
            contain
            transition="scale-transition"
          />
        </v-avatar>

        <h2>Microsoft Learn Catalog Dashboard</h2>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
      :expand-on-hover="!$vuetify.breakpoint.xsOnly"
      :permanent="!$vuetify.breakpoint.xsOnly"
      bottom
    >
      <v-list nav dense>
        <v-list-item link @click="$router.push('/catalog')">
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Catalog</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push('/starred')">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push('/')">
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Configuration</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push('/about')">
          <v-list-item-icon>
            <v-icon>mdi-information-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app inset>
      <v-row justify="center">
        <v-col class="text-center"
          ><v-btn block href="https://yoshikawaa.github.io/" target="_blank"
            >@yoshikawaa</v-btn
          ></v-col
        >
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({ drawer: false }),
};
</script>
