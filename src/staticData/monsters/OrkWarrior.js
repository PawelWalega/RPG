export const orc = {
  agi: 8,
  str: 17,
  vit:16,
  int:5,
  name: "Orc Warrior",
  class: "Monster",
  race: "Orc",
  armor:15,
  talents: {
    tier1 :
      {
        name    : 'Axe Strike',
        damage : {
          minDMG: 7,
          maxDMG: 12
        },
        source: "Physical",
        cooldown: 0
      },
    tier2 :
      {
        name    : 'Power Blow',
        damage : {
          minDMG: 13,
          maxDMG: 17
        },
        source: "Physical",
        cooldown: 3
      },
  }

  }
