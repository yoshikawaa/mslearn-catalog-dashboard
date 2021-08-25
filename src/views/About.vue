<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-alert type="info" prominent>
        <v-row align="center">
          <v-col class="grow">
            This is an Unoffical Dashboard of Microsoft Learn Catalog.
            <br />
            All rights of MIcrosoft Learn reserved Microsoft Corporation.
          </v-col>
          <v-col class="shrink">
            <v-btn
              :href="$store.getters.supportUrl()"
              target="_blank"
              >Link</v-btn
            >
          </v-col>
        </v-row>
      </v-alert>
    </v-row>
  </v-container>
</template>
