<template>
  <div class="div2">
    <header class="example-header">
      <div class="waviy mb-5 large">
        <span style="--i:1">E</span>
        <span style="--i:2">X</span>
        <span style="--i:3">P</span>
        <span style="--i:4">E</span>
        <span style="--i:5">R</span>
        <span style="--i:6">I</span>
        <span style="--i:7">E</span>
        <span style="--i:8">N</span>
        <span style="--i:9">c</span>
        <span style="--i:10">E</span>
      </div>
    </header>
    <div class="container-fluid">

      <div class="row example-centered mt-15">
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul class="timeline timeline-centered">
            <li class="timeline-item" v-for="(event, index) in centeredTimelineEvents" :key="index">
              <div class="timeline-info">
                <span class="mx-5">{{ event.date }}</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">{{ event.title }}</h3>
                <h4 class="timeline-title">{{ event.subtitle }}</h4>
                <p class="mt-3 mx-5">{{ event.description }}</p>
                <h5 class="mt-3 mx-5" v-if="event.subdescription">{{ event.subdescription }}</h5>
                <div v-if="event.links" class="mt-2">
                  <ul style="list-style-type: none;">
                    <li class="mx-5" v-for="(link, linkIndex) in event.links" :key="linkIndex">
                      <a :href="link.url" target="_blank">{{ link.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centeredTimelineEvents: [
        {
          date: "2015-2019 (4 Years)",
          title: "Bachelor of Science in Information and Technology",
          subtitle: "Jose Rizal University",
          description: "In the year 2019, a Bachelor of Science in Information Technology (BSIT) was received from Jose Rizal University, claimed to be one of the country's leading IT education institutions.",
        },
        {
          date: "2019-2021 (2 Years and 3 Months)",
          title: "Web Content Editor",
          subtitle: "Reymund Sanchez LLC",
          description: "Worked as a web content editor for Interworld Highway, building and maintaining product pages in Tequipment and Touchboards using HTML and CSS.",
          links: [
            {
              text: "Interworld Highway",
              url: "https://www.interworldhighway.com/"
            },
            {
              text: "Tequipment",
              url: "https://www.tequipment.net/"
            },
            {
            text: "Touchboards",
            url: "https://www.touchboards.com/"
            }
          ]
        },
        {
          date: "2022 March - April (2 Months)",
          title: "Zuitt Coding Bootcamp",
          subtitle: "Graduation: April 2022",
          description: "In 2022, completion of a Zuitt course covered fundamental topics in full-stack web development, including Responsive Web Design, Rapid Prototyping, and Product Deployments, enabling the continuation of development in in-demand skills.",
          subdescription: "Certificates",
          links: [
            {
              text: "Frontend Course (Git, HTML, CSS, Bootstrap 4)",
              url: "https://share.zertify.zuitt.co/certificate/898f2be9-41ee-40bc-ac27-11435bab037e/"
            },
            {
              text: "Backend Course (JavaScript, MongoDB, Node.js, Postman, Express.js, Heroku)",
              url: "https://share.zertify.zuitt.co/certificate/50ebd968-036b-4362-81f5-70c32f644b71/"
            },
            {
            text: "MERN Tech Stack (MongoDB, Express.js, React.js, Node.js)",
            url: "https://share.zertify.zuitt.co/certificate/55b91338-377f-4d69-bfd8-f5b3129519b3/"
            },
            {
            text: "Zuitt Certificate of Completion",
            url: "https://share.zertify.zuitt.co/certificate/e02727c2-ffa8-4dae-9749-cb24094412ba/"
            }
          ]
        },
        {
          date: "2022 May - Present",
          title: "Web Developer",
          subtitle: "PETNET, INC",
          description: "Tasked to develop user interface features, determine the structure and design of web pages, build reusable codes and optimize web pages for maximum efficiency. Creates new web applications or modifies existing applications using the agreed technology stack.",
          subdescription: "Tools",
          links: [
            {
              text: "Vue JS",
              url: "https://vuejs.org/"
            },
            {
              text: "Vuetify Framework",
              url: "https://vuetifyjs.com/en/"
            },
            {
              text: "Quasar Framework",
              url: "https://quasar.dev/"
            },
          ]
        },
        {
          date: "",
          title: "",
          subtitle: "",
          description: "",
          subdescription: "",
        },
      ],
    };
  },
};
</script>


<style scoped lang='scss'>

// Waviy
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.div2 {
  background: #f3f3f3;
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


$primary-color: #00827f;
$primary-color-hover: scale-color($primary-color, $lightness: 32%);

body {
    color: #768390;
    background: #FFF;
    font-family: "Effra", Helvetica, sans-serif;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}
h1,h2,h3,h4,h5,h6 {
    color: #24343c;
    margin-top: 0;
}
a {
    color: $primary-color;
    &:hover {
        color: $primary-color-hover;
        text-decoration: none;
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
.container-fluid {
    .row {
        padding: 0 0 4em 0;
        &:nth-child(even) {
            background: #F1F4F5;
        }
    }
}

.example-title {
    text-align: center;
    margin-bottom: 60px;
    padding: 3em 0;
    border-bottom: 1px solid #E4EAEC;
    p {
        margin: 0 auto;
        font-size: 16px;
        max-width: 400px;
    }
}

/*==================================
    TIMELINE
==================================*/

    /*-- GENERAL STYLES
    ------------------------------*/
    .timeline {
        line-height: 1.4em;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        h1, h2, h3, h4, h5, h6 {
            line-height: inherit;
        }
    }

    /*----- TIMELINE ITEM -----*/

    .timeline-item {
        padding-left: 40px;
        position: relative;
        &:last-child {
            padding-bottom: 0;
        }
    }

    /*----- TIMELINE INFO -----*/

    .timeline-info {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 3px;
        margin: 0 0 .5em 0;
        text-transform: uppercase;
        white-space: nowrap;
    }
    /*----- TIMELINE MARKER -----*/

    .timeline-marker {
        position: absolute;
        top: 0; bottom: 0; left: 0;
        width: 15px;
        &:before {
            background: $primary-color;
            border: 3px solid transparent;
            border-radius: 100%;
            content: "";
            display: block;
            height: 15px;
            position: absolute;
            top: 4px; left: 0;
            width: 15px;
            transition: background 0.3s ease-in-out,
                    border 0.3s ease-in-out;
        }
        &:after {
            content: "";
            width: 3px;
            background: #CCD5DB;
            display: block;
            position: absolute;
            top: 24px; bottom: 0; left: 6px;
        }
        .timeline-item:last-child &:after {
            content: none;
        }
    }
    .timeline-item:not(.period):hover .timeline-marker:before {
        background: transparent;
        border: 3px solid $primary-color;
    }

    /*----- TIMELINE CONTENT -----*/

    .timeline-content {
        padding-bottom: 40px;
        p:last-child {
            margin-bottom: 0;
        }
    }

    /*----- TIMELINE PERIOD -----*/
    
    .period {
        padding: 0;
        .timeline-info {
            display: none;
        }
        .timeline-marker {
            &:before {
                background: transparent;
                content: "";
                width: 15px;
                height: auto;
                border: none;
                border-radius: 0;
                top: 0;
                bottom: 30px;
                position: absolute;
                border-top: 3px solid #CCD5DB;
                border-bottom: 3px solid #CCD5DB;
            }
            &:after {
                content: "";
                height: 32px;
                top: auto;
            }
        }
        .timeline-content {
            padding: 40px 0 70px;
        }
        .timeline-title {
            margin: 0;
        }
    }

    /*----------------------------------------------
        MOD: TIMELINE SPLIT
    ----------------------------------------------*/

        .timeline-split {
            @media (min-width: 768px) {
                .timeline {
                    display: table;
                }
                .timeline-item {
                    display: table-row;
                    padding: 0;
                }
                .timeline-info,
                .timeline-marker,
                .timeline-content,
                .period .timeline-info {
                    display: table-cell;
                    vertical-align: top;
                }
                .timeline-marker {
                    position: relative;
                }
                .timeline-content {
                    padding-left: 30px;
                }
                .timeline-info {
                    padding-right: 30px;
                }
                .period .timeline-title {
                    position: relative;
                    left: -45px;
                }
            }
        }

    /*----------------------------------------------
        MOD: TIMELINE CENTERED
    ----------------------------------------------*/

        .timeline-centered {
            @extend .timeline-split;
            @media (min-width: 992px) {
                &,
                .timeline-item,
                .timeline-info,
                .timeline-marker,
                .timeline-content {
                    display: block;
                    margin: 0;
                    padding: 0;
                }
                .timeline-item {
                    padding-bottom: 40px;
                    overflow: hidden;
                }
                .timeline-marker {
                    position: absolute;
                    left: 50%;
                    margin-left: -7.5px;
                }
                .timeline-info,
                .timeline-content {
                    width: 50%;
                }
                > .timeline-item:nth-child(odd) .timeline-info {
                    float: left;
                    text-align: right;
                    padding-right: 30px;
                }
                > .timeline-item:nth-child(odd) .timeline-content {
                    float: right;
                    text-align: left;
                    padding-left: 30px;
                }    
                > .timeline-item:nth-child(even) .timeline-info {
                    float: right;
                    text-align: left;
                    padding-left: 30px;
                }
                > .timeline-item:nth-child(even) .timeline-content {
                    float: left;
                    text-align: right;
                    padding-right: 30px;
                }
                > .timeline-item.period .timeline-content {
                    float: none;
                    padding: 0;
                    width: 100%;
                    text-align: center;
                }
                .timeline-item.period {
                    padding: 50px 0 90px;
                }
                .period .timeline-marker:after {
                    height: 30px;
                    bottom: 0;
                    top: auto;
                }
                .period .timeline-title {
                    left: auto;
                }
            }
        }

    /*----------------------------------------------
        MOD: MARKER OUTLINE
    ----------------------------------------------*/
        
        .marker-outline {
            .timeline-marker {
                &:before {
                    background: transparent;
                    border-color: $primary-color;
                }
            }
            .timeline-item:hover .timeline-marker:before {
                background: $primary-color;
            }
        }
</style>