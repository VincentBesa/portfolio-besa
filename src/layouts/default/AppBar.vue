<template>
  <section class="nav-8 mb-5 sticky">
   
  </section>
</template>

<style scoped>
/* @import url(https://fonts.googleapis.com/css?family=Righteous); */
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

