<template>
  <div class="div">
    <footer class="example-header pb-3">
      <div>
        
        <div class="mt-3">
            <h4 class="pt-3 mb-3">Socials</h4>
            <v-btn density="compact" class="mr-2" icon="mdi-linkedin" href="https://www.linkedin.com/in/vincent-besa-a3b083235/" target="_blank"></v-btn>
            <v-btn density="compact" class="mr-2" icon="mdi-gitlab" href="https://gitlab.com/VincentBesa" target="_blank"></v-btn>
            <v-btn density="compact" class="mr-2" icon="mdi-facebook" href="https://www.facebook.com/vincent.beessaaa1" target="_blank"></v-btn>
            <v-btn density="compact" class="mr-2" icon="mdi-instagram" href="https://www.instagram.com/vincentbesssa/" target="_blank"></v-btn>
            <h4 class="pt-3 mb-1">Contact</h4>
            <h5 style="font-family: 'Kanit', sans-serif;">Johnvincent.besa@gmail.com</h5>
            <h5 style="font-family: 'Kanit', sans-serif;">(+63)9201226730 (Smart)</h5>
            <h5 class="mt-3">© All Rights Reserved 2022</h5>
        </div>
      </div>
    </footer>    
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      snackbar: false,
      snackbarMessage: '',
      snackbarTimeout: 6000, // Adjust timeout as needed
      snackbarColor: '', // 'success' or 'error'
    };
  },
   methods: {
    sendEmail() {
      if (this.$refs.form.checkValidity()) {
        emailjs.sendForm('service_gsha5rc', 'template_pi824o4', this.$refs.form, 'mLsvvcRHThd70dIJl')
          .then((result) => {
            console.log('SUCCESS!', result);
            if (result.status === 200) {
              this.showSnackbar('Email sent successfully!', 'success');
              this.$refs.form.reset(); // Clear the form after successful submission
            }
          })
          .catch((error) => {
            console.log('FAILED...', error);
            this.showSnackbar('Failed to send email.', 'error');
          });
      } else {
        this.showSnackbar('Please fill in all the required fields.', 'error');
      }
    },
    showSnackbar(message, color) {
      this.snackbarMessage = message;
      this.snackbarColor = color;
      this.snackbar = true;
    },
   }
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
  background: #fff;
}

/* Existing styles remain unchanged */

.custom-form {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-field {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #00827f;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #BC544B;
}

.v-snack__content {
  text-align: center;
}

.custom-snackbar {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.v-snack__content {
  text-align: center;
}


</style>
