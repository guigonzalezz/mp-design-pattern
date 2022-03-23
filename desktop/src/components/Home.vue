<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Multiplataform random words
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-form>
          <v-text-field
            v-model="wordToShuffle"
            label="Word"
            required
          ></v-text-field>
          <v-btn width="200" height="50" class="text-h4" @click="shuffle" depressed color="success">Shuffle</v-btn>
        </v-form>
      </v-col>

      <v-col class="mt-5">
        <v-card color="blue-grey-lighten-5">
          <v-card-title>
            Shuffled Word
          </v-card-title>
          <v-card-text class="text-h4">
            {{this.shuffledWord}}
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      wordToShuffle: "",
      shuffledWord: ""
    }),
    methods: {
      setText(text){
        this.shuffledWord = text
      },
      async shuffle () {
        let url = `http://localhost:3000/embaralhar?frase=${this.wordToShuffle}`
        fetch(url).then(function(response) {
          return response.json()
        }).then(response =>{
          this.setText(response)
        }).catch(function(err) {
          console.error('Failed retrieving information', err);
        });
      }
    }
  }
</script>
