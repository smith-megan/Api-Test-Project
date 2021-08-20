module.exports={
  complimentCtrl: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
             "Cool shirt!",
             "Your Javascript skills are stellar.",
             "Good job!",
             "Your smile is contagious.",
             "You bring out the best in other people.",
             "You're someone's reason to smile.",
             "You could survive a zombie apocalypse.",
             "You're great at figuring stuff out.",
             "You're a gift to those around you."
    ];
  
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
    
  },
  fortuneCtrl: (req, res) => {
    const fortunes = ["An agreeable romance might begin to take on the appearance of an important person who will offer you support.",
      "An inch of time is an inch of gold.",
      "Any decision you have to make tomorrow is a good decision.",
      "At the touch of love, everyone becomes a poet.",
      "Be careful or you could fall for some tricks today.",
      "Beauty in its various forms appeals to you.",
      "Because you demand more from yourself, others respect you deeply.",
      "Believe in yourself and others will too.",
      "Believe it can be done.",
     "Better ask twice than lose yourself once.",
      "Bide your time, for success is near.",
      "Carve your name on your heart and not on marble.",
      "Change is happening in your life, so go with the flow!",
      "Competence like yours is underrated.",
      "Congratulations! You are on your way.",
      "Courtesy begins in the home.",
     "Courtesy is contagious.",
     "Curiosity kills boredom. Nothing can kill curiosity.",
      "Dedicate yourself with a calm mind to the task at hand.",
      "Depart not from the path which fate has you assigned.",
      "Determination is what you need now.",
      "Diligence and modesty can raise your social status.",
      "Disbelief destroys the magic.",
     "Distance yourself from the vain.",
     "Do not be intimidated by the eloquence of others.",
     "Do not demand for someone’s soul if you already got his heart.",
     "Do not let ambitions overshadow small success.",
     "Do not make extra work for yourself.",
     "Do not underestimate yourself. Human beings have unlimited potentials.",
     "Do you know that the busiest person has the largest amount of time?",
     "Don’t be discouraged, because every wrong attempt discarded is another step forward.",
     "Don’t confuse recklessness with confidence.",
     "Don’t just spend time. Invest it."]
  
    let randomI = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomI];
  
    res.status(200).send(randomFortune);
  },
  punCtrl: (req, res) => {
    const puns = ["Time flies like an arrow. Fruit flies like a banana.",
    "To the guy who invented zero, thanks for nothing.",
    "Ladies, if he can’t appreciate your fruit jokes, you need to let that mango",
    "Geology rocks but Geography is where it’s at!",
    "Smaller babies may be delivered by stork but the heavier ones need a crane.",
    "My grandpa has the heart of the lion and a lifetime ban from the zoo.",
    "What do you use to cut a Roman Emperor’s hair? Ceasers.",
    "My friend’s bakery burned down last night. Now his business is toast.",
    `Two windmills are standing in a wind farm. One asks, “What’s your favorite kind of music?” The other says, “I’m a big metal fan.”`,
    "What does a clock do when it’s hungry? It goes back four seconds."
  ]
  
    let randomI = Math.floor(Math.random() * puns.length);
    let randomPun = puns[randomI];
  
    res.status(200).send(randomPun);
  }
}