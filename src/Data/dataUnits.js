import { localKoldun } from "./localKoldun";
import { localNekromant } from "./localNekromant";
import { localCharodey } from "./localCharodey";
import { localGVS } from "./localGVS";
import { localNeutralsquad } from "./localNeutralsquad";
import { localXBunker } from "./localXbunker";
import { localLegionBlackPlanet } from "./localLegionBlackPlanet";
import { localArmyFallenMage } from "./localArmyFallenMage";
import { localBAZA } from "./localBAZA";
import { localAllianceFree } from "./localAllianceFree";

import { localHeroes } from "./localHeroes";
import { localWeapons, localWeaponsWheels, localMortar } from "./localWeapons";
import { localFightMachine } from "./localFightMachine";

const rawUnits = {
  koldun: localKoldun,
  nekromant: localNekromant,
  charodey: localCharodey,
  gvs: localGVS,
  neutralSquad: localNeutralsquad,
  xBunker: localXBunker,
  legionBlackPlanet: localLegionBlackPlanet,
  ArmyFallenMage: localArmyFallenMage,
  BAZA: localBAZA,
  AllianceFree: localAllianceFree,

  heroes: localHeroes,
  fightMachine: localFightMachine.map((item) => ({
    ...item,
    weapons: item.weapons.map((w) => ({ ...w })),
  })),
  weapons: [
    ...localWeapons,
    ...localWeaponsWheels.map((item) => ({
      ...item,
      wheelsPrise: 10,
      isWheels: false,
    })),
    ...localMortar.map((item) => ({
      ...item,
      shells: item.shells.map((shell) => ({ ...shell })),
    })),
  ],
};

export const dataUnits = Object.fromEntries(
  Object.entries(rawUnits).map(([key, units]) => [
    key,
    units.map((unit) => ({ ...unit, faction: key })),
  ]),
);

export const massUnits = Object.values(dataUnits).flat();

export const factions = [
  {
    title: "Войска Колдуна",
    to: "/koldun",
    slug: "koldun",
    number: dataUnits.koldun.length,
  },
  {
    title: "Легионеры Некроманта",
    to: "/nekromant",
    slug: "nekromant",
    number: dataUnits.nekromant.length,
  },
  {
    title: "Гвардия Чародея",
    to: "/charodey",
    slug: "charodey",
    number: dataUnits.charodey.length,
  },
  {
    title: "Гильдия Вольных Стрелков",
    to: "/gvs",
    slug: "gvs",
    number: dataUnits.gvs.length,
  },
  {
    title: "Нейтральные отряды",
    to: "/neutralSquad",
    slug: "neutralSquad",
    number: dataUnits.neutralSquad.length,
  },
  {
    title: "Хобби Бункер",
    to: "/xBunker",
    slug: "xBunker",
    number: dataUnits.xBunker.length,
  },
  {
    title: "Легионы Черной Планеты",
    to: "/legionBlackPlanet",
    slug: "legionBlackPlanet",
    number: dataUnits.legionBlackPlanet.length,
  },
  {
    title: "Войско Павшего Мага",
    to: "/ArmyFallenMage",
    slug: "ArmyFallenMage",
    number: dataUnits.ArmyFallenMage.length,
  },
  {
    title: "Б.А.З.А",
    to: "/BAZA",
    slug: "BAZA",
    number: dataUnits.BAZA.length,
  },
  {
    title: "Альянс Свободных",
    to: "/AllianceFree",
    slug: "AllianceFree",
    number: dataUnits.AllianceFree.length,
  },
];
