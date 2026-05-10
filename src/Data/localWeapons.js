import { projectile, rocketProjectile } from "./weapons";

export const localWeapons = [
  {
    id: "arbaletpauk",
    title: "Паук",
    category: "1А",
    image: require("../images/TehList/Pauk.png"), // Прямой URL для удаленного изображения
    price: 70,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
  },

  {
    id: "pushkabuldog",
    title: "Бульдог",
    category: "1П",
    image: require("../images/TehList/Buldog.png"), // Прямой URL для удаленного изображения
    price: 80,
    inBasket: true,
    button: "",
    directory: "",
    /*	marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
  },

  {
    id: "pushkaedinorog",
    title: "Единорог",
    category: "1П",
    image: require("../images/TehList/Edinorog.png"), // Прямой URL для удаленного изображения
    price: 110,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
  },

  {
    id: "pushkascilla",
    title: "Сцилла",
    category: "1П",
    image: require("../images/TehList/Scilla.png"), // Прямой URL для удаленного изображения
    price: 75,
    inBasket: true,
    button: "",
    directory: "",
  },

  {
    id: "pushkagrad",
    title: "Град",
    category: "1МП",
    image: require("../images/TehList/Grad.png"), // Прямой URL для удаленного изображения
    price: 70,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
  },
  {
    id: "pushkasparka",
    title: "Спарка",
    category: "1МП",
    image: require("../images/TehList/Sparka.png"), // Прямой URL для удаленного изображения
    price: 50,
    inBasket: true,
    button: "",
    directory: "",
  },
  {
    id: "pushkastilet",
    title: "Стилет",
    category: "1МП",
    image: require("../images/TehList/Stilet.png"), // Прямой URL для удаленного изображения
    price: 60,
    inBasket: true,
    button: "",
    directory: "",
  },
  {
    id: "pushkaexecutor",
    title: "Экзекутор",
    category: "1МП",
    image: require("../images/TehList/Akzikutor.png"), // Прямой URL для удаленного изображения
    price: 60,
    inBasket: true,
    button: "",
    directory: "",
  },
  {
    id: "catapultklop",
    title: "Клоп",
    category: "1К",
    image: require("../images/TehList/Klop.png"), // Прямой URL для удаленного изображения
    price: 90,
    inBasket: true,
    button: "",
    directory: "",
    marker: require("../images/Exclamation_marker.png"),
    markerTitle: "Снижена цена на 5.",
  },

  {
    id: "arbalettitan",
    title: "Титан",
    category: "2А",
    image: require("../images/TehList/Titan.png"), // Прямой URL для удаленного изображения
    price: 115,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 5.',*/
  },

  {
    id: "catapultdikobraz",
    title: "Дикобраз",
    category: "2К",
    image: require("../images/TehList/Dikoobraz.png"), // Прямой URL для удаленного изображения
    price: 100,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 20.',*/
  },

  {
    id: "catapultciklop",
    title: "Циклоп",
    category: "2К",
    image: require("../images/TehList/Ciklop.png"),
    price: 90,
    inBasket: true,
    button: "",
    directory: "",
  },

  {
    id: "MDB-15",
    title: "MDB-15",
    category: "2П",
    categoryGun: "(2П)",
    image: require("../images/TehList/MDB-15.png"),
    price: 150,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 30.',*/
  },
];
//Орудия с шинами
export const localWeaponsWheels = [
  {
    id: "pushkaShkval",
    title: "Шквал",
    category: "1МП",
    image: require("../images/TehList/Shkval.png"), // Прямой URL для удаленного изображения
    price: 95,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 5.',*/
  },
  {
    id: "arbaletskorpion",
    title: "Скорпион",
    category: "1А",
    image: require("../images/TehList/Skorpion.png"), // Прямой URL для удаленного изображения
    price: 105,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 15.',*/
  },
  {
    id: "pushkagrom",
    title: "Гром",
    category: "1П",
    image: require("../images/TehList/Grom.png"), // Прямой URL для удаленного изображения
    price: 105,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 15.',*/
  },
  {
    id: "arbaletgoliaf",
    title: "Голиаф",
    category: "2А",
    image: require("../images/TehList/Goliaf.png"), // Прямой URL для удаленного изображения
    price: 100,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 20.',*/
  },

  {
    id: "arbaletharibda",
    title: "Харибда",
    category: "2А",
    image: require("../images/TehList/Haribda.png"), // Прямой URL для удаленного изображения
    price: 85,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 15.',*/
  },
  {
    id: "catapultbogomol",
    title: "Богомол",
    category: "2К",
    image: require("../images/TehList/Bogomol.png"), // Прямой URL для удаленного изображения
    price: 70,
    inBasket: true,
    button: "",
    directory: "",
  },
  {
    id: "catapultsarancha",
    title: "Саранча",
    category: "1К",
    image: require("../images/TehList/Sarancha.png"),
    price: 85,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 5.',*/
  },
  {
    id: "pushkablast",
    title: "Бласт",
    category: "1П",
    image: require("../images/TehList/Blast.png"),
    price: 110,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Понижена цена на 10.',*/
  },
  {
    id: "pushkabuivol",
    title: "Буйвол",
    category: "2П",
    image: require("../images/TehList/Buivol.png"),
    price: 90,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 10.',*/
  },

  {
    id: "pushkatelec",
    title: "Телец",
    category: "2П",
    image: require("../images/TehList/Telec.png"), // Прямой URL для удаленного изображения
    price: 85,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 15.',*/
  },

  {
    id: "pushkashtorm",
    title: "Шторм",
    category: "2МП",
    image: require("../images/TehList/Shtorm.png"), // Прямой URL для удаленного изображения
    price: 85,
    inBasket: true,
    button: "",
    directory: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 15.',*/
  },
];

export const localMortar = [
  {
    id: "minometKrab",
    title: "Краб",
    category: "1П",
    image: require("../images/TehList/Krab.png"),
    price: 35,
    inBasket: true,
    shells: [projectile, rocketProjectile],
    button: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 5.',*/
  },
  {
    id: "minometMolot",
    title: "Молот",
    category: "2П",
    image: require("../images/TehList/Molot.png"),
    price: 70,
    inBasket: true,
    shells: [projectile, rocketProjectile],
    button: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Повышена цена на 10.',*/
  },
  {
    id: "minometedelveys",
    title: "Эдельвейс",
    category: "1П",
    image: require("../images/TehList/Adalveis.png"),
    price: 50,
    inBasket: true,
    shells: [projectile, rocketProjectile],
    button: "",
    /*marker: require('../images/Exclamation_marker.png'),
		markerTitle: 'Снижена цена на 10.',*/
  },
];
