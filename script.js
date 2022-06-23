




  const fillers = {
    character_1: ["I", "You", "My dog", "My cat", "Your dog", "Your cat", "Slug", ],
    character_2: ["me", "you", "my dog", "my cat", "your dog", "your cat", "slug", "$character_2 and $character_2"],
    outsider: ["your teacher", "your wallet", "your 1000 years old grandma", ],
    weapon: ["the banana", "the slug", "the shield",  "the sword", "$weapon and $outsider" ],

    object: ["my girl", "my heart", "my pen","my honey", "my RXT 3090 Ti",],

    event_reason: ["$outsider",  "$weapon",],
    event:["\xa0\xa0\xa0\xa0 Thanks to $event_reason !! \n \xa0\xa0\xa0\xa0 $character_1 defeat $character_2 !",  "\xa0\xa0\xa0\xa0 No!! \n\xa0\xa0\xa0\xa0 $character_1 stole $object!!",]
  };


  const template = `$event`;
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
