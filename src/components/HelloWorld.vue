<template>

  <section class="nav-8 mb-5 sticky">
    <nav class="nav-container">
      <a class="item" href="#home-section">
        <div data-text="Home" class="linktext"><v-icon>mdi-home</v-icon></div>
      </a>
      <a class="item" href="#experience-section">
        <div data-text="Experience" class="linktext"><v-icon>mdi-book-open-page-variant</v-icon></div>
      </a>
      <a class="item" href="#project-section">
        <div data-text="Projects" class="linktext"><v-icon>mdi-bookshelf</v-icon></div>
      </a>
      <a class="item" href="#tools-section">
        <div data-text="Tools I Use" class="linktext"><v-icon>mdi-toolbox</v-icon></div>
      </a>
      <a class="item" href="#contact-section">
        <div data-text="Get in touch" class="linktext"><v-icon>mdi-message-question</v-icon></div>
      </a>
    </nav>
  </section>


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap">
  <div class="area" id="home-section">

    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <v-row style="height: 100%">
      <v-col cols="12" md="6" class="text-center">
        
        <div class="d-flex flex-column justify-center align-left fill-height">
          <v-card
            class="mx-auto"
            elevation="0"
            outlined color="transparent"
          >

            <v-card-text class="text-left">

              <div class="waviy my-5 mb-5 mt-15 large">
                <span style="--i:1">H</span>
                <span style="--i:2">E</span>
                <span style="--i:3">L</span>
                <span style="--i:4">L</span>
                <span style="--i:5">O</span>
                <span style="--i:6">! &nbsp;</span>
                <span style="--i:7">I</span>
                <span style="--i:8">'</span>
                <span style="--i:9" class="mb-5">M</span>
              </div>

              <div class="waviy mt-16 small">
                <span style="--i:1">H</span>
                <span style="--i:2">I</span>
                <span style="--i:3">! &nbsp;</span>
                <span style="--i:4">I</span>
                <span style="--i:5">'</span>
                <span style="--i:6" class="mb-5">M</span>
              </div>
              
              <div class="mt-10">
                <h1 style="font-family: 'Kanit', sans-serif;">John Vincent Besa</h1>
              </div>

              <div class="mt-4">
                <h3 style="font-family: 'Kanit', sans-serif;">Web Developer</h3>
              </div>
              
              <div class="mb-5 mt-1">
                <v-btn density="compact" class="mr-2" icon="mdi-linkedin" href="https://www.linkedin.com/in/vincent-besa-a3b083235/" target="_blank"></v-btn>
                <v-btn density="compact" class="mr-2" icon="mdi-gitlab" href="https://gitlab.com/VincentBesa" target="_blank"></v-btn>
                <v-btn density="compact" class="mr-2" icon="mdi-facebook" href="https://www.facebook.com/vincent.beessaaa1" target="_blank"></v-btn>
                <v-btn density="compact" class="mr-2" icon="mdi-instagram" href="https://www.instagram.com/vincentbesssa/" target="_blank"></v-btn>
              </div>

              <div class="mb-5">
                <h3 style="font-family: 'Kanit', sans-serif;">Feel free to get in touch. <v-icon>mdi-robot-happy-outline</v-icon></h3>
              </div>
              
              <div class="mb-5">
                <v-btn
                  color="#00827f"
                  :loading="loading"
                  @click="loading = !loading"
                  class="px-3"
                  href="https://vincentbesa.github.io/portfolio-besa/src/assets/BesaResume.pdf"
                  target="_blank"
                >
                  Download Resume
                  <template v-slot:loader>
                    <v-progress-linear indeterminate></v-progress-linear>
                  </template>
                </v-btn>
              </div>
              
            </v-card-text>
          </v-card>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-responsive class="align-center text-center fill-height">
          <v-img
            class="center_image circular-image large"
            :width="400"
            :height="500"
            aspect-ratio="16/9"
            cover
            src="../assets/mee.jpg"
          ></v-img>
          <v-img
            class="center_image circular-image small"
            :width="300"
            :height="400"
            aspect-ratio="16/9"
            cover
            src="../assets/mee.jpg"
          ></v-img>
        </v-responsive>
      </v-col>

    </v-row>
  </div>

  <div id="experience-section">
    <ExperienceComponent/>
  </div>
  <div id="project-section">
    <ProjectComponent/>
  </div>
  <div id="tools-section">
    <ToolsComponent/>
  </div>
  <div id="contact-section">
    <ContactMe/>
  </div>
  <div>
    <FooterComponent/>
  </div>

</template>

<script>
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
import ToolsComponent from '@/components/ToolsComponent.vue'
import ContactMe from '@/components/ContactMe.vue'
import FooterComponent from '@/components/FooterComponent.vue'
  export default {
    components:{
      ExperienceComponent:ExperienceComponent,
      ProjectComponent:ProjectComponent,
      ToolsComponent:ToolsComponent,
      ContactMe: ContactMe,
      FooterComponent: FooterComponent
    },
    data: () => ({
      loading: false,
    }),
    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 3000)
      },
    },
  }
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.large {
  display: none;
}
.small {
  display: none;
}
/* show when screen is at least 425px wide */
@media (min-width: 768px) {
  .large {
    display: block;
  }
}
/* show when screen is at least 425px wide */
@media (max-width: 425px) {
  .small {
    display: block;
  }
}
.center_image {
    width: 100px;
    height: 100px;
    margin: 0 auto;
}
.circular-image {
  border-radius: 50%; /* Makes the image circular */
  overflow: hidden; /* Clips the image to the circular shape */
}

/* Background */

@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(236, 13, 13, 0.2));
  font-size: 60px;
}
.waviy span {
  font-family: 'Alfa Slab One', cursive;
  position: relative;
  display: inline-block;
  color: #0a0a0a;
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

@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

*{
    margin: 0px;
    padding: 0px;
}

body{
    font-family: 'Exo', sans-serif;
}

.area{
    background: #ffffff; 
    height: 100vh; 
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}


/* Nav */
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Titillium+Web:wght@300&display=swap');
@import url(https://fonts.googleapis.com/css?family=Black+Ops+One);
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; /* Adjust the z-index as needed */
}
.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
body, html {
  margin:0px;
  background:#2ECC71;
  color:#fff;
  text-align:center;
  height:325px;
  max-height:325px;
}
section{
  height:5%;
  width:100%;
}
.anchor{
  position:absolute;
}
.item{
  margin-bottom:20px;
}

.nav-8{
  background:#ffffff;
}
.nav-8 nav{
  background:#ffffff;
}
.nav-8 .linktext{
  font-size:1em;
  text-align:center;
  position:relative;
  z-index:2;
  color:#0a0a0a;
  text-decoration:none;
  font-family: 'Titillium Web', sans-serif;
  text-transform:uppercase;
  transition:0.3s ease-in-out;
  -webkit-transition:0.3s ease-in-out;
  transition-delay:0s;
  -webkit-transition-delay:0s;
}
.nav-8 .linktext:before, .nav-8 .linktext:after{
  opacity:0;
  position:absolute;
  top:7px;
  transform:translateY(36px);
  -webkit-transform:translateY(36px);
  left:0px;
  width:100%;
  transition:0.3s ease-in-out;
  -webkit-transition:0.3s ease-in-out;
  font-size:0.5em;
}
.nav-8 .linktext:before{
  content:'';
  height:2px;
  background:#0a0a0a;
  transition-delay:0s;
  -webkit-transition-delay:0s;
}
.nav-8 .linktext:after{
  content:attr(data-text);
  color:#050505;
  transition-delay:0s;
  -webkit-transition-delay:0s;
}
.nav-8 .item{
  position:relative;
  display:inline-block;
  height:15px;
  padding-top:5px;
  margin-left:20px;
  margin-right:20px;
  margin-bottom:25px;
  background:transparent;
  transition:0.3s ease-in-out;
  -webkit-transition:0.3s ease-in-out;
  z-index:2;
  color:#0c0c0c;
  text-decoration:none;
  font-family:Arial, sans-serif;
  text-transform:uppercase;
  transition:0.3s ease-in-out;
  -webkit-transition:0.3s ease-in-out;
}
.nav-8 .item:hover .linktext{
  transform:scale(1.3);
  -webkit-transform:scale(1.3);
}
.nav-8 .item:hover .linktext:before{
  transition-delay:0s;
  -webkit-transition-delay:0s;
}
.nav-8 .item:hover .linktext:after{
  transition-delay:0.15s;
  -webkit-transition-delay:0.15s;
}
.nav-8 .item:hover .linktext:before, .nav-8 .item:hover .linktext:after{
  transform:translateY(16px);
  -webkit-transform:translateY(16px);
  opacity:1;
}
</style>