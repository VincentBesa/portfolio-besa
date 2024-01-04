<template>
  <div style="height: 100%" class="div">
    <header class="example-header mb-10">
      <div class="waviy mb-5 large">
        <span style="--i:1">T</span>
        <span style="--i:2">O</span>
        <span style="--i:3">O</span>
        <span style="--i:4">L</span>
        <span style="--i:5">S</span>
      </div>
    </header>

    <v-row>
      <v-card class="mx-auto custom-card mb-10" max-width="500"> <!-- Increase max-width to make the cards wider -->
        <v-card-text class="mt-5">
          <!-- Add an icon at the top -->
          <v-icon class="mb-3" size="50">mdi-arrange-bring-to-front</v-icon>
          <p class="text-h4 text--primary mb-10">
            Frontend
          </p>
          <div class="text--primary mb-3">
            I have experience working with some frontend tools below:
          </div>
          <b>Languages I speak:</b>
          <p class="mt-1">JavaScript</p>
          <p>HTML</p>
          <p class="mb-3">CSS</p>
          <b >Tools I use:</b>
          <p class="mt-1">Vue JS (Vuetify, Quasar)</p>
          <p>React</p>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn variant="text" color="deep-purple-accent-4">
            Learn More
          </v-btn> -->
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto custom-card mb-10" max-width="500"> <!-- Increase max-width to make the cards wider -->
        <v-card-text class="mt-5">
          <!-- Add an icon at the top -->
          <v-icon class="mb-3" size="50">mdi-arrange-send-to-back</v-icon>
          <p class="text-h4 text--primary mb-10">
            Backend
          </p>
          <div class="text--primary mb-3">
            I have experience working with some backend tools below:
          </div>
          <b>Languages I speak:</b>
          <p class="mt-1">JavaScript</p>
          <p class="mb-3">PHP</p>
          <b >Tools I use:</b>
          <p class="mt-1">Node.JS</p>
          <p>Express.JS</p>
          <p>Laravel</p>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn variant="text" color="deep-purple-accent-4">
            Learn More
          </v-btn> -->
        </v-card-actions>
      </v-card>

      <v-card class="mx-auto custom-card mb-10" max-width="500"> <!-- Increase max-width to make the cards wider -->
        <v-card-text class="mt-5">
          <!-- Add an icon at the top -->
          <v-icon class="mb-3" size="50">mdi-tools</v-icon>
          <p class="text-h4 text--primary mb-10">
            Other Tools
          </p>
          <div class="text--primary mb-3">
            Some of the tools I use or have experience working on are:
          </div>
          <p class="mt-1">Postman</p>
          <p>Laragon</p>
          <p >GitBash</p>
          <p>Git</p>
          <p>Heroku</p>
          <p>Visual Studio</p>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn variant="text" color="deep-purple-accent-4">
            Learn More
          </v-btn> -->
        </v-card-actions>
      </v-card>

    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>


<style scoped lang='scss'>

// Waviy
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(236, 13, 13, 0.2));
  font-size: 30px;
}
.waviy span {
  font-family: 'Alfa Slab One', cursive;
  position: relative;
  display: inline-block;
  color: #00827f;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));
  
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}

.example-header {
    background: #24343c;
    color: #FFF;
    font-weight: 300;
    text-align: center;
    h1 {
        color: #FFF;
        font-weight: 300;
        margin-bottom: 20px
    }
    p {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 700;
    }
}


.custom-card {
  width: 100%; /* Make the card wider */
  max-width: 700px; /* Adjust the maximum width as needed */
  margin: 0 auto;
  text-align: center; /* Center-align text within the card */
}

.custom-icon {
  font-size: 36px; /* Adjust the icon size */
  margin-bottom: 16px; /* Add some spacing below the icon */
}

/* Center-align text within v-card-text */
.v-card-text {
  text-align: center;
}

.div {
  background: #f3f3f3;
}


</style>