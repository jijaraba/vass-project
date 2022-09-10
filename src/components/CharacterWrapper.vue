<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-row>
        <v-col class="d-flex child-flex position-relative" cols="2" v-for="character in characters">
          <v-img
            :src="character.image"
            :lazy-src="character.image"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps(
  {
    characters: {
      type: Array,
      default: () => []
    }
  }
)
</script>

<style scoped lang="scss">

</style>
