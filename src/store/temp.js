
export const gameLog      ={
  rounds   : [
    {
      player  : {
        attack  : 'Frost Bolt',
        damage  : 11,
        special : "and lowers it's defense by 10"
      },
      monster : {
        attack  : 'Axe Swing',
        damage  : 15,
        special : ''
      }
    },
    {
      player  : {
        attack  : 'Blizzard',
        damage  : 4,
        special : '. Blizzard will last 3 more rounds'
      },
      monster : {
        attack  : 'Axe Swing',
        damage  : 12,
        special : ''
      }
    }
  ],	statuses : {
    monster : [
      {
        name       : 'blizzard',
        roundsLeft : 4
      }
    ],
    player  : []
  }
}