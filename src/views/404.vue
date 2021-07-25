<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-alert type="error">
        <v-row align="center">
          <v-col class="grow">404 : Page Not Found.</v-col>
          <v-col class="shrink">
            <v-btn @click="$router.push('/')">Go to Top</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-row>
  </v-container>
</template>