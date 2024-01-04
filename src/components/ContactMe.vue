<template>
  <div class="div">
    <header class="example-header mb-10">
      <div class="waviy mb-5 large">
        <span style="--i:1">C</span>
        <span style="--i:2">O</span>
        <span style="--i:3">N</span>
        <span style="--i:4">T</span>
        <span style="--i:5">A</span>
        <span style="--i:6">C</span>
        <span style="--i:7">T&nbsp;</span>
        <span style="--i:8">M</span>
        <span style="--i:9">E</span>
      </div>
    </header>

    <form ref="form" @submit.prevent="sendEmail" class="custom-form mb-10">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="input-field" placeholder="Your Name" required>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="input-field" placeholder="Your Email" required>

        <label for="message">Message</label>
        <textarea name="message" id="message" class="input-field" rows="4" placeholder="Your Message" required></textarea>

        <button type="submit" class="submit-button">Send Email</button>
    </form>

     <v-snackbar
      v-model="snackbar"
      :timeout="snackbarTimeout"
      :color="snackbarColor"
      left
      center
      eager
      class="custom-snackbar"
    >
      {{ snackbarMessage }}
    </v-snackbar>
    
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
  background-color: #367588;
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
