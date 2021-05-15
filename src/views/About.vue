<template>
  <v-app>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <div class="about">
            <img
              class="about__img mb-4"
              src="https://sun1-83.userapi.com/s/v1/ig2/Di9pR4COZqU5Lz-up7KgBdi1qJgIyeVSDe-CyWUx2hpsc-P5rh-rbOqS7AeTfcZyC2TnI-fLv72fXqnvmtG8Rcz7.jpg?size=200x0&quality=96&crop=0,232,1617,1617&ava=1"
              alt=""
            />
            <span class="about__title mb-1 font-weight-bold d-block"
              >Привет! Меня зовут Руслан!</span
            >
            <h1 class="about__subtitle">Junior Front-end developer</h1>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="aboutme cont">
      <h2 class="text-center pb-5 font-weight-medium">Обо мне</h2>
      <p class="text-center">
        Меня зовут Руслан и да как не странно я Front-end разработчик по крайне
        мере мне хочется себя так называть. Родился я 22.05.2002г в городе
        Ташкент, Республики Узбекистан. Отучился 11 школьных классов. Окончил
        лучшие курсы в своём городе по Front-end разработке и работал на
        фрилансе. Сейчас я в Москве и мотивация развиваться и работать в данном
        направлении только увеличилась!
      </p>
    </div>
    <div class="cont text-center">
      <h2 class="text-center pb-5 font-weight-medium">Стек техолоний</h2>

      <div class="skills">
        <v-progress-circular
          :rotate="0"
          :size="100"
          :width="15"
          :value="90"
          color="teal"
        >
          HTML
        </v-progress-circular>

        <v-progress-circular
          :rotate="0"
          :size="100"
          :width="15"
          :value="80"
          color="primary"
        >
          CSS
        </v-progress-circular>

        <v-progress-circular
          :rotate="0"
          :size="100"
          :width="15"
          :value="60"
          color="secondary"
        >
          SCSS
        </v-progress-circular>

        <v-progress-circular
          :rotate="0"
          :size="100"
          :width="15"
          :value="70"
          color="red"
        >
          JS
        </v-progress-circular>

        <v-progress-circular
          :rotate="0"
          :size="100"
          :width="15"
          :value="60"
          color="blue"
        >
          JQuery
        </v-progress-circular>

        <v-progress-circular
          :rotate="0"
          :size="100"
          :width="15"
          :value="40"
          color="pink"
        >
          VUE
        </v-progress-circular>
      </div>
    </div>
    <div class="exp cont">
      <h2 class="text-center pb-5 font-weight-medium">
        Мой путь разработчика
      </h2>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              {{ year.title }}
            </h2>
            <div>
              {{ year.text }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2017",
        title: "Первое знакомство с программированием",
        text:
          "Первый раз я познакомился с программированием в школе на уроке информатики. Тогда мы проходили HTML изучали размету и теги, мне было очень интересно и я стал уделять урокам информатики как можно больше времени.",
      },
      {
        color: "green",
        year: "2018",
        title: "Курс Front-end разработчик",
        text:
          "После моего интереса к урокам информатике учитель заметил меня и порекомендовал мне пойти на курсы по web-разработке. Я стал искать курсы которые открыли мне дверь во Front-end разработку. После прохождения 9-месячных курсов я был очень рад думая что наконец-то я специалист в своем деле но это было только начало. ",
      },
      {
        color: "pink",
        year: "2019",
        title: "Самообразование",
        text:
          "По прошествии курсов мой интерес к данной профессии только увеличился. Параллельно работая я изучал JQuery но понимал что на верстке сайтов далеко не уедешь. Я начал более углубленно изучать Javascript который я сразу же полюбил изучал такие вещи как ES6, Webpack, React. Но к сожалению без практики даже базовые вещи ты начинаешь забывать.",
      },
      {
        color: "amber",
        year: "2020",
        title: "Фриланс и первые деньги",
        text:
          "Начало 2020г начало COVID-19. Первый свой заказ я взял по CMS Wordpress на 2000 рублей, имея только базовые знания по php. Заказ я сдал и получил свой первый положительный отзыв который в будущем помог мне на фрилансе. Для меня фриланс это более отрицательный опыт т.к в основном были проекты по верстке сайтов то есть никакого роста и развития. ",
      },
      {
        color: "orange",
        year: "2021",
        title: "Переезд в Москву",
        text:
          "Прошел один год я все еще сидел на фрилансе обзавелся постоянными заказчиками и не хотел никуда двигаться. Благо ковид сыграл свою роль и брать заказы на фрилансе стало намного сложнее из-за большой конкуренции. Тогда я начал думать о переезде в Москву, о том что это тот город в котором я нуждаюсь в котором у меня появиться мотивация работать и получать все больше знаний во Front-end разработке",
      },
    ],
  }),
};
</script>

<style scoped>
.about {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.about__img {
  border-radius: 50%;
}

.cont {
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
}

.skills {
  display: flex;
  justify-content: space-around;
}
</style>