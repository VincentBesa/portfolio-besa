<template>
  <div style="height: 100%">
    <header class="example-header">
      <div class="waviy mb-5 large">
        <span style="--i:1">P</span>
        <span style="--i:2">R</span>
        <span style="--i:3">O</span>
        <span style="--i:4">J</span>
        <span style="--i:5">E</span>
        <span style="--i:6">C</span>
        <span style="--i:7">T</span>
        <span style="--i:8">S</span>
      </div>
    </header>

    <v-row class="my-10" style="display: flex; flex-direction: row; align-items: center;">
        <v-col cols="12" md="4" class="text-center">
            <v-card
                class="mx-auto"
                max-width="90%"
                color="#f3f3f3"
            >
                <v-img
                src="../assets/portfolio.png"
                height="100%"
                width="100%"
                cover
                ></v-img>

                <v-card-title>
                Online Portfolio
                </v-card-title>

                <v-card-subtitle>
                Online Portfolio using Vuetify (2023)
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="#00827f"
                    variant="text"
                    href="https://vincentbesa.github.io/portfolio-besa/"
                    target="_blank"
                >
                    Visit
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    color="#00827f"
                    :icon="show ? 'mdi-arrow-up-thin' : 'mdi-arrow-down-thin'"
                    @click="show = !show"
                ></v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-if="show">
                    <v-divider></v-divider>
                    <v-card-text>
                        Developed a captivating static online portfolio that effectively demonstrates expertise in Vuetify and responsive web development.<br><br>
                        <b>Tools: <br> </b>
                        Vuetify 3
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
            <v-card
                class="mx-auto"
                max-width="90%"
                color="#f3f3f3"
            >
                <v-img
                src="../assets/ecommerce.png"
                height="100%"
                width="100%"
                cover
                ></v-img>

                <v-card-title>
                Ecommerce API
                </v-card-title>

                <v-card-subtitle>
                Ecommerce API using Node.js (2022)
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="#00827f"
                    variant="text"
                    disabled
                >
                    Visit
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    color="#00827f"
                    :icon="show2 ? 'mdi-arrow-up-thin' : 'mdi-arrow-down-thin'"
                    @click="show2 = !show2"
                ></v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-if="show2">
                    <v-divider></v-divider>
                    <v-card-text>
                        In the second major project at Zuitt, a journey was undertaken to demonstrate comprehensive knowledge and skills in cutting-edge technologies such as JavaScript, MongoDB, Node.js, Express.js, and Postman. The project was designed to showcase the ability to develop a robust and efficient web application from the ground up, incorporating a wide range of modern tools and practices.<br><br>
                        <b>Tools: <br> </b>
                        Node.js <br>
                        Express.js <br>
                        MongoDB <br>
                        Postman
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
            <v-card
                class="mx-auto"
                max-width="90%"
                color="#f3f3f3"
            >
                <v-img
                src="../assets/musicavenue.png"
                height="100%"
                width="100%"
                cover
                ></v-img>

                <v-card-title>
                Music Avenue
                </v-card-title>

                <v-card-subtitle>
                Web Application using MERN Stack (2022)
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="#00827f"
                    variant="text"
                    href="https://capstone3-besa.vercel.app/"
                    target="_blank"
                >
                    Visit
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    color="#00827f"
                    :icon="show3 ? 'mdi-arrow-up-thin' : 'mdi-arrow-down-thin'"
                    @click="show3 = !show3"
                ></v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-if="show3">
                    <v-divider></v-divider>
                    <v-card-text>
                        In the third and final major project at Zuitt, a journey was embarked upon to demonstrate mastery of one of the most sought-after technology stacks in web development: the MERN Stack. With the fusion of MongoDB, Express.js, React.js, and Node.js, the goal was to create a groundbreaking web application that would not only showcase technical prowess but also highlight adaptability and innovation.<br><br>
                        <b>Tools: <br> </b>
                        MongoDB<br>
                        Express.js<br>
                        React.js<br>
                        Node.js
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
        </v-col>
    </v-row>

  </div>
</template>

<script>
  export default {
    data: () => ({
      show: true,
      show2: true,
      show3: true,
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


</style>