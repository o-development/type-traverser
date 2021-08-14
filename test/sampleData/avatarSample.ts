export type Person = BenderPerson | WeaponPerson;
export type MultiDisciplinaryPerson = BenderPerson & WeaponPerson;

export interface BasePerson {
  name: string;
  friends?: Person[];
  romanticPartner?: Person;
}

export interface BenderPerson extends BasePerson {
  elements: Element[];
}

export interface WeaponPerson extends BasePerson {
  weapons: string[];
}

enum Element {
  WATER,
  EARTH,
  FIRE,
  AIR,
}

export const samplePerson: MultiDisciplinaryPerson = {
  name: "Aang",
  elements: [Element.WATER, Element.EARTH, Element.WATER, Element.AIR],
  weapons: ["staff"],
  friends: [
    {
      name: "Sokka",
      weapons: ["boomerang", "space sword"],
      romanticPartner: {
        name: "Suki",
        weapons: ["fans"],
      },
    },
    {
      name: "Toph",
      elements: [Element.EARTH],
    },
    {
      name: "Zuko",
      elements: [Element.FIRE],
      romanticPartner: {
        name: "Mai",
        weapons: ["knives"],
      },
    },
  ],
  romanticPartner: {
    name: "Katara",
    elements: [Element.WATER],
  },
};
