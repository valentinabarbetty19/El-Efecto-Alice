
export const introArray = [
  // {
  //   id: 1,
  //   // imageUrl: "/assets/img/scenarios/laboratory.png",
  //   mensaje:"Alice Brown, una de las mejores científicas del país, ha destinado toda su vida al estudio de la física cuántica y los viajes en el tiempo.",
  //   message:
  //     "Alice Brown, one of the country's top scientists, has dedicated her entire life to the study of quantum physics and time travel.",
  //   aliceLab: true,
  //   lab: true,
  //   animation: 1,
  //   id_scena: 1,
  //   sonido: 0,
  //   sad: true
  // },
  // // Otros objetos de introArray...

  // {
  //   // fondo negro mostrando el brazalete en 3D
  //   id: 2,
  //   mensaje: "Ha estado trabajando en un brazalete que le permitiría escoger la fecha a dónde quiere viajar en el pasado, sin embargo, este artefacto no tiene la energía suficiente para que funcione.",
  //   message:
  //     "She has been working on a bracelet that would allow her to choose the date to which she wants to travel into the past. However, this device does not have enough energy to function.",
  //   bracelet: true,
  //   lab: true,
  //   id_scena: 1,
  //   animation: 2,
  //   sonido: 0,
  //   sad: true
  // }, //brazalete
  // {
  //   //habitación - triste - alice llorando - musica sad

  //   //Personaje: Alice Hoodie - Animación: sitting disbelief - Sonido: crying
  //   id: 3,
  //   mensaje:  
  //     "Tenía su vida feliz con su hijo y su esposo, pero desafortunadamente, tuvieron un accidente automovilístico, y todos menos ella, perdieron la vida.",
  //   message:
  //     "She had a happy life with her son and husband, but unfortunately, they had a car accident, and everyone except her, lost their lives.",
  //   aliceHoodie2: true,
  //   bedroom: true,
  //   id_scena: 1,
  //   animation: 3,
  //   sonido: 1,
  //   sad: true
  // }, 
  // {
  //   //Personaje: Alice Hoodie - Animación: sitting disbelief - Sonido: crying
  //   id: 4,
  //   mensaje: 
  //     "Alice ha quedado devastada tras este hecho, pues prácticamente toda su vida se ha derrumbado.",
  //   message:
  //     "Alice has been devastated by this event, as practically her whole life has crumbled.",
  //   aliceHoodie2: true,
  //   id_scena: 1,
  //   bedroom: true,
  //   animation: 4,
  //   sonido: 1,
  //   sad: true
  // },
  // {
  //   //alice lab decepcionada con el brazalete ********************
  //   // personaje: Alice Hoodie - animación: looking around 
  //   id: 5,
  //   mensaje: 
  //     "Tras la tragedia, experimenta visiones perturbadoras que la hacen dudar su salud.",
  //   message:
  //     "After the tragedy, she experiences disturbing visions that make her doubt her health...",
  //   aliceHoodie2: true,
  //   livingroom: true,
  //   jonas: true,
  //   id_scena: 1,
  //   animation: 5,
  //   sonido: 3,
  //   sad: true
  // },
  // {
  //   //Personaje: Alice Hoodie - animación: sitting disbelief
  //   id: 6,
  //   mensaje: "¿Jonas? No, no puede ser... ¿Qué me pasa?",
  //   message: 
  //     "Jonas? No, this can't be real... What is going on with me?",
  //   aliceHoodie2: true,
  //   livingroom: true,
  //   id_scena: 1,
  //   animation: 6,
  //   sad: true
  // },
  {
    //P: Alice Hoodie - animación: sitting disbelief
    id: 7,
    mensaje: "A pesar de su empeño en el brazalete, comienza a perder la esperanza en recuperar a su familia.",
    message:
      "Despite her efforts on the bracelet, she begins to lose hope in getting his family back.",
    aliceHoodie2: true,
    bracelet: true,
    livingroom: true,
    animation: 7,
    sad: true
  },
  { 
    //personaje: jonas (el hijo) parado al lado del arbol **** - hacer lluvia?????? - sonido de lluvia con truenos
    id: 8,
    mensaje: 
      "En una tarde lluviosa, cerca de su casa, Alice vio algo cerca a un viejo árbol, cree que es su hijo.",
    message:
      "On a rainy afternoon near her house, Alice saw something near an old tree. She thinks it's her son",
    tree: true,
    jonas: true,
    aliceHoodie2: true,
    livingroom:true,
    animation: 8,
    sonido: 4,
    sad: true
  },
  {
  //sonido: gritoTrueno
    id: 9,
    mensaje: "Al ir a investigar, fue alcanzada por un rayo.",
    message:
      "When she went to find out what it was, she was struck by a lightning.",
    animation: 9,
    sonido: 5
  },
  {
    //P: Alice Hoodie - animación: agony sonido: lluviaLlanto 
    id: 10,
    mensaje: 
      "Tras el impacto del rayo, Alice momentáneamente aturdida y desconcertada, se apresura a casa para recuperarse.",
    message:
      "After the lightning strike, Alice momentarily stunned and bewildered, rushes home to recover.",
    tree: true,
    aliceHoodie2:true,
    animation: 10,
    ambiente: true,
    sonido: 6,
    sad: true
  },
  {
    //NO SE :C *********
    id: 11,
    mensaje:  
      "Mientras se recuperaba en casa, el brazalete en su brazo se iluminó, llevándola a creer que podría viajar en el tiempo. Sin dudarlo, eligió su cumpleaños como su primera parada en su viaje temporal.",
    message:
      "While recovering at home, the bracelet on her arm lit up, leading her to believe she could time travel. Without hesitation, she chose her birthday as her first stop on her temporal journey. Suddenly, everything went dark...",
    aliceHoodie2: true,
    livingroom: true,
    bracelet: true,
    animation: 11,
    sad: true
  },
  {
    // Intermedio para video,
    video:true,
    sonido: 9,

  },
  {
    //P: Alice Jeans (crying), Jonas y esposo (excited) 
    id: 12,
    mensaje:  
      "De repente, todo se oscureció, y cuando despertó, se encontró en su cuarto. Para su asombro, su esposo e hijo la sorprendieron en la mañana de su cumpleaños, vivos y llenos de alegría.",
    message:
      "Suddenly, everything went dark, and when she woke up, she found herself in her room. To her amazement, her husband and son surprised her on her birthday morning, alive and filled with joy.",
    aliceJeans: true,
    bedroom: true,
    jonas: true,
    esposo: true,
    animation: 12,
  },
  {
    //P_ ALice jeans - jonas **** y esposo - aniamcion: dancing - sonido: don't go breaking my heart
    id: 13,
    mensaje:  
      "Alice disfrutó el día con su familia, aunque las preguntas la atormentaban. Decidió no pensar demasiado en ello y se sumergió en la felicidad de estar con ellos de nuevo.",
    message:
      "Alice enjoyed the day with her family, although questions tormented her. She chose not to dwell on them and immersed herself in the happiness of being with them again.",
    aliceJeans: true,
    esposo: true,
    jonas: true,
    livingroom: true,
    animation: 13,
    sonido: 7
  },
  {
    //P: Alice hoodie - aniamcion: focus
    id: 14,
    mensaje: 
      "Al despertar, volvió a su triste realidad original, confundida y abrumada por la tristeza. Se preguntaba si lo que vivió fue un sueño o si el brazalete tuvo un papel en ese extraño episodio.",
    message:
      "Upon waking, she returned to her original sad reality, confused and overwhelmed by sorrow. She wondered if what she had experienced was a dream or if the bracelet played a role in that strange episode.",
    aliceHoodie2: true,
    bedroom: true,
    animation: 14,
    sad: true
  },
  {
    //sonido: door knocking
    id: 15,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje:  
      "Después de despertar en su realidad original, un vecino golpeó su puerta preocupado por el grito de una mujer la noche anterior",
    message:
      "After waking up in her original reality, a neighbor knocked on her door, concerned about a women screaming last night",
    sonido: 8,
    sad: true
  },
  {
    //Liam: talking - Alice hoodie: idle
    id: 16,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Liam: ¡Hola! Escuché un fuerte estruendo de un rayo y gritos de una mujer, he preguntado con los vecinos y todos sospechan de que fuiste tu y me preocupé. ¿Estás bien?",
    message: "Liam: Hello! I heard a loud thunder and a women screaming, I've been asking the neighrbors and everyone suspects it was you and I got worried. Are you okay?" ,
    aliceHoodie2: true,
    vecino: true,
    animation: 16,
    sad: true
  },
  {
    //Alice hoodie: talking - Liam: idle
    id: 17,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: 
      "Alice: Sí, estoy bien, gracias por preocuparte. Fue un rayo cercano, pero estoy ilesa.",
    message:
      "Alice: Yes, I'm fine, thank you for caring. It was a nearby lightning strike, but I'm unharmed.",
    aliceHoodie2: true,
    vecino: true,
    animation: 17,
    sad: true
  },
  {
    //Liam: talking - Alice hoodie: idle
    id: 18,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje:"Liam: Espera, ¿qué te pasó en la mano? ¿Estás segura de que estás bien?",
    message: "Liam: Wait, what happened to your hand? Are you sure you're okay?",
    aliceHoodie2: true,
    vecino: true,
    animation: 18,
    sad: true
  },
  {
    //Alice hoodie: talking - Liam: idle
    id: 19,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: 
      "Alice: No estoy segura de cómo ocurrió. De repente, estaba en mi cuarto y...",
    message: "Alice: I'm not sure how it happened. Suddenly, I was in my room and...",
    aliceHoodie2: true,
    vecino: true,
    animation: 19,
    sad: true
  },
  {
    //Liam: talking - Alice hoodie: idle
    id: 20,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: 
      "Liam: ¿Te lastimaste? Deberías ir al hospital para que lo revisen.",
    message:
      "Liam: Did you get hurt? You should go to the hospital to get it checked.",
    aliceHoodie2: true,
    vecino: true,
    animation: 20,
    sad: true
  },
   {
  //   //Alice hoodie: talking - Liam: idle
    id: 21,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Alice: No estoy segura de cómo ocurrió esto, pero...",
    message: "Alice: I'm not sure how this happened, but...",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    vecino: true,
    animation: 21,
    rotationx: 0,
    rotationy: 0,
    rotationz: 0,
    sad: true
  },
  {
    //Alice hoodie: asking 
    id: 22,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Alice: ¿Qué hago? ¿Voy o no voy?",
    message: "Alice: What should I do? Should I go or not?",
    decision1en: "Yes",
    decision2en: "No",
    decision1es: "Si",
    decision2es: "No",
    alice: true,
    vecino: true,
    photo: "assets/img/gif/keyboard.gif",
    animation: 22,
    sonido: 0,
    sad: true
  },
];
export const bifur1Array = [
  {
    //Alice: talking - Liam: idle
    id: 23,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje:
      "Alice: ...creo que tienes razón. Es mejor asegurarse de que todo esté en orden.",
    message:
      "Alice: ...I think you're right. It's better to make sure everything is okay.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    vecino: true,
    animation: 23,
    sonido: 0,
    sad: true
  },
  {
    //Liam: talking - Alice: idle
    id: 24,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje:
      "Liam: Bueno, no te preocupes. Puedo llevarte al hospital si lo necesitas. Es importante cuidar esa quemadura.",
    message:
      "Liam: Well, don't worry. I can take you to the hospital if you need to. It's important to take care of that burn.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    vecino: true,
    animation: 24,
    sad: true
  },
  {
    //Alice: talking - Liam: idle
    id: 25,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje:
      "Alice: Eso sería amable de tu parte, gracias. No entiendo lo que está sucediendo, pero creo que es lo mejor.",
    message:
      "Alice: That would be kind of you, thank you. I don't understand what's happening, but I think it's for the best.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    vecino: true,
    sonido: 0,
    animation: 25,
    sad: true
  },
  {
    //Alice: idle
    id: 26,
    mensaje:
      "En el hospital Alice comenta toda la situación acerca de sus visiones y el impacto del rayo al médico y espera resultados después de unos análisis médicos y de comportamiento.",
    message:
      "At the hospital Alice discusses the entire situation about her visions and the impact of the lightning to the doctor and waits for results after some medical and behavioral analysis.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 26,
    sad: true
  },
  {
    //Doctor: talking - Alice: idle
    id: 27,
    mensaje:
      "Doctor Carl: Hemos revisado tus análisis al parecer la quemadura no es nada grave. Sanará en unos días, pero sí se pudieron evidencias problemas mentales y esquizofrenia.",
    message:
      "Doctor Carl: We have reviewed your tests, it seems the burn is nothing serious. It will heal in a few days, but there was evidence of mental problems and schizophrenia.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 27,
    sonido: 0,
    sad: true
  },
  {
//Alice: talking - doctor: idle
    id: 28,
    mensaje:
      "Alice: ¿Esquizofrenia? ¿Estás seguro? ¿No es posible que todo esto sea solo un sueño, una ilusión? ¿Qué es real? Esto debe ser una broma",
    message:
      "Alice: Schizophrenia? Are you sure? Could this all just be a dream, an illusion? What's real? This has to be a joke",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 26,
    sonido: 0,
    sad: true
  
  },
  {
    //Doctor: talking - Alice: idle
    id: 29,
    mensaje:
      "Doctor Carl: Entiendo que esto debe ser abrumador para ti, Alice. Pero los análisis y observaciones clínicas son concluyentes. Ahora te quiero hablar respecto a dos pastillas experimentales, que son una opción que podría ayudarte a recuperar la estabilidad mental.",
    message:
      "Doctor Carl: I understand that this must be overwhelming for you, Alice. But the clinical analyses and observations are conclusive. Now, I want to talk to you about two experimental pills, which are an option that could help you regain mental stability.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 27,
    sonido: 0,
    sad: true
  },
  {
    //Alice: talking - Doctor: idle
    id: 30,
    mensaje: "Alice: No estoy segura, Doctor Carl. ¿Qué tipo de pastillas son?",
    message:
      "Alice: I'm not sure, Doctor Carl. What kind of pills are those?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 26,
    sonido: 0,
    sad: true
  },
  {
    id: 31,
    mensaje: "Doctor Carl: Son pastillas seguras y ha ayudado a muchas personas en situaciones similares. Tienes que escoger entre la roja y la azul.",
    message:
      "Doctor Carl: They are safe pills and have helped many people in similar situations. You have to choose between the red and the blue one.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 27,
    sonido: 0,
    sad: true
  },
  {
    id: 32,
    mensaje: "Alice: ¿Qué efecto tendrá en mí?",
    message: "Alice: What will be the effect on me?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 26,
    sonido: 0,
    sad: true
  },
  {
    id: 33,
    mensaje:
      "Doctor Carl: No te preocupes, no te alejará de la realidad, pero podría ayudarte a sentirte más tranquila, al menos temporalmente.",
    message:
      "Doctor Carl: Don't worry, it won't take you away from reality, but it might help you feel calmer, at least temporarily.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 27,
    sonido: 0,
    sad: true
  },
  {
    //ANIMACIÓN 3D
    id: 34,
    imageUrl: "/assets/img/scenarios/fondo-bifur11.png",
    mensaje: "Alice: ¿Qué pasta debo tomar? ¿azul o roja? (Da click en la pastilla que quieras escoger)",
    message: "Alice: Which pill should I take? blue or red? (Click on the pill you want to choose)",
    // decision1en: "Blue",
    // decision2en: "Red",
    // decision1es: "Azul",
    // decision2es: "Roja",
    pastillas: true,
    mano: true,
    // alice: true,
    // hospital: true,
    animation: 0,
    sad: true
  },
];
export const bifur11Array = [
  {
    id: 35,
    mensaje:
      "Alice: Está bien, Doctor Carl, lo intentaré con la pasta azul. Necesito encontrar algo de paz.",
    message:
      "Alice: Alright, Doctor Carl, I'll give the blue pill a try. I need to find some peace.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 26,
    sonido: 0,
    sad: true
  },
  {
    id: 36,
    mensaje:
      "Doctor Carl: Has tomado una decisión valiente, Alice. Verás que esto te ayudará a sentirte mejor.",
    message:
      "Doctor Carl: You've made a brave choice, Alice. You'll see that this will help you feel better.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 27,
    sonido: 0,
    sad: true
  },
  {
    //imagen de premio nobel ella esta feliz saliudando al publico - la img de fondo se cambia a la de un manicomio - ella haciendo 
    //la misma accion sonidos de publico que luego se van apagando mientras se cambia el fondo al manicomio
    // Personaje: Alice Nobel - Animación: standing arguing - Sonido: audience clapping
    id: 37,
    imageUrl: "/assets/img/scenarios/award-stage.png",
    mensaje:
      'Quiero agradecer a mi familia y a mis doctores por el tratar de manera efectiva mi esquizofrenia, sin ellos, no hubiese podido ganar este premio nobel',
    message:
      'I want to thank my family and doctors for treating my schizophrenia in the most effective way. Without them, it would not have been possible to win this Nobel Prize.',
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceNobel: true,
    animation: 37,
    sonido: 10,
    
  },
  {
    //imagen de premio nobel ella esta feliz saliudando al publico - la img de fondo se cambia a la de un manicomio - ella haciendo 
    //la misma accion sonidos de publico que luego se van apagando mientras se cambia el fondo al manicomio
    //Personaje: Alice Hoodie - Animación - Greeting - Sonido: Aplausos borrosos ****???
    id: 38,
    mensaje:
      '¡Gracias!, ¡Gracias! De verdad muchas gracias',
    message:
      'Thank you! Thank you! Thank you so much',
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    manicomio: true,
    animation: 38,
    sad: true
    
  },
  {
    //P: doctor jimin y carl - A: jimin talking carl idle - S:
    id: 39,
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje:
      "Doctor Jimin: Carl, ¿cómo se encuentra nuestra paciente Alice? ¿Ha experimentado algún cambio notable?",
    message:
      "Doctor Jimin: Carl, how is our patient Alice? Has she experienced any noticeable changes?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 39,
    sad: true
  },
  {
    //P: carl y jimin - A:carl hablando jimin idle - S:
    id: 40,
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje:
      "Doctor Carl: La paciente se encuentra muy bien, Jimin. La pastilla ha tenido un efecto positivo en su estado. Está mucho más tranquila.",
    message:
      "Doctor Carl: The patient is doing very well, Jimin. The pill has had a positive effect on her condition. She's much calmer.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 40,
    sad: true
  },
  {
    //igual q anteriores
    id: 41,
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje: "Doctor Jimin: Carl, ¿tomó Alice la pastilla azul que le ofrecimos?",
    message: "Doctor Jimin: Carl, did Alice take the blue pill we offered?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 39,
    sad: true
  },
  {
    id: 42,
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje:
      "Doctor Carl: Sí, Jimin, la tomó. Parece que estamos manteniéndola en la realidad fabricada.",
    message:
      "Doctor Carl: Yes, Jimin, she took it. It seems we're keeping her in the fabricated reality.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 42,
    sad: true
  },
  //
];
export const bifur12Array = [
  {
    ////P: alice hoodie - A:talking - S:
    id: 43,
    mensaje:
      "Alice: Está bien, lo intentaré con la pasta roja. Necesito encontrar algo de paz.",
    message:
      "Alice: Alright, I'll give the red pill a try. I need to find some peace.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 26,
    sonido: 0,
    sad: true
  },
  {
    //P: doctor y alcie hoodie - A: - S:
    id: 44,
    mensaje:
      "Doctor Carl: Has tomado una decisión valiente. Verás que esto te ayudará a sentirte mejor.",
    message:
      "Doctor Carl: You've made a brave decision. You'll see that this will help you feel better.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    doctorCarl: true,
    hospital: true,
    animation: 27,
    sonido: 0,
    sad: true
  },
  {
    //P: doctores - A: - S:
    id: 45,
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje: "Doctor Jimin: Carl, ¿qué ha sucedido con la paciente?",
    message: "Doctor Jimin: Carl, what happened to the patient?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 39,
    sad: true
  },
  {
    //P:doctores - A: - S:
    id: 46,
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje:
      "Doctor Carl: Está en coma, no se recuperará pronto. Se le tiene que administrar la pastilla azul para que parezca que no hubiera pasado nada.",
    message:
      "Doctor Carl: She's in a coma, she won't recover anytime soon. We need to give her the blue pill so it's like nothing ever happened.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 40,
    sad: true
  },
  {
    //P: doctores - A: - S:
    id: 47,
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje: "Doctor Jimin: Nadie puede salir de aquí, eh?",
    message: "Doctor Jimin: Nobody can get out of here, huh?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 39,
    sad: true
  },
  {
    // //P: doctores - A: laughing - S:
    imageUrl: "/assets/img/scenarios/hospital_aisle.png",
    mensaje:
      "Doctor Jimin: Se estaba haciendo muchas preguntas, teníamos que deshacernos de ella. (Ambos ríen)",
    message:
      "Doctor Jimin: She was asking too many questions, we had to get rid of her. (They both laugh).",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    doctorCarl: true,
    doctorJimin: true,
    animation: 42,
    sad: true
  },
];
export const bifur2Array = [
  // {
  //   //P: alice hoodie y vecino - A: - S:
  //   id: 49,
  //   imageUrl: "/assets/img/scenarios/house-door-outside.png",
  //   mensaje:
  //     "Alice: Aprecio tu preocupación, pero en realidad estoy cansada y preferiría quedarme, además, la quemadura es pequeña. Gracias de todos modos.",
  //   message:
  //     "Alice: I appreciate your concern, but I am actually tired and would rather stay home, besides, the burn is small. Thank you anyway.",
  //   decision1en: null,
  //   decision2en: null,
  //   decision1es: null,
  //   decision2es: null,
  //   aliceHoodie2: true,
  //   vecino: true,
  //   animation: 21,
  //   sad: true
  // },
  // {
  //   //P: alice hoodie - A: sitting rubbing arm - S:
  //   id: 50,
  //   mensaje:
  //     "En su casa, decide regresar al pasado una vez más para salvar a su familia. Va al día del accidente.",
  //   message:
  //     "At home, she decides to return to the past once more to save her family. She goes to the day of the accident.",
  //   decision1en: null,
  //   decision2en: null,
  //   decision1es: null,
  //   decision2es: null,
  //   video: true,
  //   sonido: 9,
  //   sad: true
  // },
  // {
  //   ////P: alice jeans - A: drunk run - S:
  //   id: 51,
  //   mensaje:
  //     "Una vez se encontró en el pasado, se sentía apresurada por encontrar a su esposo y a su hijo.",
  //   message:
  //     "Once she got into the past, she felt rushed to find her husband and her son.",
  //   decision1en: null,
  //   decision2en: null,
  //   decision1es: null,
  //   decision2es: null,
  //   aliceJeans: true,
  //   livingroom: true,
  //   animation: 51
  // },
  // {
  //   //P: alcie jeans - A: corriendo running tired - S:
  //   id: 52,
  //   mensaje:
  //     "Buscó en todos los sitios de la casa y no los encontraba.",
  //   message:
  //     "She looked for them in all the places in the house and couldn't find them.",
  //   decision1en: null,
  //   decision2en: null,
  //   decision1es: null,
  //   decision2es: null,
  //   aliceJeans: true,
  //   bedroom: true, 
  //   animation: 52,
   
  // },
  // {
  // //P: alice jeans - A: running drunk  - S:
  //   id: 53,
  //   imageUrl: "/assets/img/scenarios/house-door-outside.png",
  //   mensaje:
  //     "Entonces decidió irse a buscarlos porque intuyó que ya se habían ido. Esta era su última oportunidad de cambiar el curso de los eventos y salvarlos.",
  //   message:
  //     "Then she decided to leave to look for them because she had a feeling they had already left. This was her last chance to change the way the events happened and save them.",
  //   decision1en: null,
  //   decision2en: null,
  //   decision1es: null,
  //   decision2es: null,
  //   aliceJeans: true,
  //   animation: 53
  // },
  {
    //ANIMACIÓN 3D
    id: 54,
    mensaje: "No sabe por cuál camino ellos se fueron. ¿Por cuál calle debería ir? ¿Calle 1 o Calle 2?",
    message: "I know which way they went. Which street should I go on? Street 1 or Street 2?",
    decision1en: "Street 1",
    decision2en: "Street 2",
    decision1es: "Calle 1",
    decision2es: "Calle 2",
    photo: "assets/img/gif/keyboard.gif",
    aliceJeans: true,
    street_decision: true,
    sign: true,
    animation: 54,
  },
];
export const bifur21Array = [
  {
    //P:alice jeans  - A: standing yell - S:
    id: 55,
    mensaje: "¡Esperen!",
    message: "Wait!",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceJeans: true,
    street: true,
    car: true,
    animation: 55
  },
  {
    ////P: - A: - S: car crash and scream
    id: 56,
    mensaje:
      "Alice ve frente a sus ojos cómo su familia pierde la vida en el accidente.",
    message:
      "Alice sees how her family dies in front of her eyes.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    sonido: 11
  },
  {
    //P: alice jeans - A: *** - S:
    id: 57,
    mensaje:
      "Decide hacer otro viaje al pasado, y esta vez ella ya sabe cómo han ocurrido las cosas.",
    message:
      "She decides to make another trip to the past, and this time she already knows how things happened.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    video: true,
    sonido: 9
  },
  {
    //sonidos: car crash / fondo negro
    id: 58,
    mensaje:
      "Ella es la que se accidenta con aquel camión y muere, y su familia se salva.",
    message:
      "She is the one who has the accident with that truck and dies, and her family is saved.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    sonido: 12
  }
];
export const bifur22Array = [
  {
    //P: carro alice jeans- A: running tired - S:
    id: 59,
    mensaje:
      "Cerca del automóvil, Alice finalmente encuentra un momento a solas con su esposo, decidida a explicarle la extraña situación y, con suerte, evitar la tragedia que se avecina.",
    message:
      "Near the car, Alice finally finds a moment alone with her husband, determined to explain the strange situation and, hopefully, avoid the tragedy.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceJeans: true,
    esposo: true,
    street: true,
    animation: 59,
    
  },
  {
    //alice: talking - esposo idle
    id: 60,
    mensaje:
      "Alice: Amor, por favor, necesito que me escuches. Lo que voy a decir puede sonar increíble, pero es de vital importancia.",
    message:
      "Alice: Honey, please, I need you to listen to me. What I'm about to say may sound unbelievable, but it's really important.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceJeans: true,
    esposo: true,
    street: true,
    animation: 60
  },
  {
    id: 61,
    mensaje:
      "Fabián: ¿Qué pasa, Amor? Estás muy agitada, sabes que no podemos perder el viaje.",
    message:
      "Fabián: What's going on, my love? You seem very agitated, you know we can't miss the trip.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceJeans: true,
    esposo: true,
    street: true,
    animation: 61
  },
  {
    id: 62,
    mensaje:
      "Alice: Lo que voy a decir puede sonar extraño, pero esta mañana experimenté algo que no puedo explicar. He viajado en el tiempo, he visto el futuro. Y en ese futuro, tú y nuestro hijo... están en peligro.",
    message:
      "Alice: What I'm about to say may sound strange, but this morning I experienced something I can't explain. I traveled through time, I saw the future. And in that future, you and our son... are in danger.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceJeans: true,
    esposo: true,
    street: true,
    animation: 60
  },
  {
    id: 63,
    mensaje: "Fabián: Alice, no entiendo. ¿De qué estás hablando?",
    message: "Fabián: Alice, I don't understand. What are you talking about?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    street: true, 
    aliceJeans: true,
    esposo: true,
    animation: 61
    
  },
  {
    id: 64,
    mensaje:
      "Alice: No tengo tiempo para explicarlo todo ahora, pero necesito que confíes en mí. Por favor, quédate con nuestro hijo aquí y evita que suba al automóvil. Yo lo manejaré. Es la única manera de mantenerlos a salvo.",
    message:
      "Alice: I don't have time to explain it all now, but I need you to trust me. Please, stay with our son here and prevent him from getting in the car. I'll drive it. It's the only way to keep you safe.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceJeans: true,
    esposo: true,
    animation: 60,
    street: true
  },
  {
    id: 65,
    mensaje:
      "Fabián: Alice, esto suena como una locura. Pero si esto es lo que necesitas, lo haré. Vamos a casa.",
    message:
      "Fabián: Alice, this sounds like madness. But if this is what you need, I'll do it. Let's go home.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceJeans: true,
    esposo: true,
    animation: 61,
    street: true
  },
  {
    //alice dress - esposo BAILANDO 
    id: 66,
    
    mensaje:
      "Alice logra salvar a su familia y regresa al presente original, donde su esposo e hijo están a salvo y bien. Aunque aún tiene esa sensación extraña.",
    message:
      "Alice finally saves her family and returns to the original present, where her husband and son are safe and well. Although she still has that strange feeling.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceDress: true,
    esposo: true,
    jonas: true,
    livingroom: true,
    animation: 66,
    id_scena: 1,
    sonido: 13,
  },
  //cambio
  {
    //sonido toca puerta
    id: 67,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Sin embargo, el vecino regresa para saber cómo sigue.",
    message: "However, the neighbor returns to check how she's doing.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    animation: 0,
    id_scena: 1,
    sonido: 8,
  },
   {
    //alice y liam 
    id: 68,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Liam: Hola Alice, cómo sigues?",
    message: "Liam: Hello Alice, how are you?",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceDress: true,
    vecino: true,
    animation: 68,
    sonido: 0,
  },
  {
    id: 69,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Alice: Todo muy bien, mi familia y yo estamos bien",
    message: "Alice: Everything's fine, my family and I are well.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceDress: true,
    vecino: true,
    animation: 69,
    id_scena: 1,
    sonido: 0,
  },
  {
    id: 70,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Liam: Perdón? Alice, tu familia murió hace dos años, estás sola aquí",
    message:
      "Liam: I'm sorry? Alice, your family died two years ago, you're alone here.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceDress: true,
    vecino: true,
    animation: 70,
    id_scena: 1,
    sonido: 0,
  },
  {
    id: 71,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje: "Liam: Creo que es pertinente que entre a tu casa para asegurarme de que todo esté bien",
    message: "Liam: I think it would be better if I get into your house to make sure everything is okay",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceDress: true,
    vecino: true,
    animation: 71,
    id_scena: 1,
    sonido: 0,
  },
  {
    //
    id: 72,
    imageUrl: "/assets/img/scenarios/house-door-outside.png",
    mensaje:
      "¿Qué hago? ¿Dejo entrar a Liam a mi casa?",
    message:
      "What should I do? Should I let Liam in?",
    decision1en: "Yes, let him in",
    decision2en: "No, don't let him in",
    decision1es: "Si, dejalo entrar",
    decision2es: "No, no lo dejes entrar",
    aliceDress: true,
    vecino: true,
   // livingroom: true,
    animation: 72,
    id_scena: 1,
    sonido: 0,
  },
];
export const bifur221Array = [
  {
    id: 73,
    mensaje: "Liam: Alice, tu familia no está aquí",
    message: "Liam: Alice, your family is not here",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceDress: true,
    vecino: true,
    livingroom: true,
    animation: 73,
    id_scena: 1,
  },
  {
    //alice dress: looking around
    id: 74,
    mensaje: "Alice: estaban aquí hace un segundo. Lo juro",
    message: "Alice: they were here a second ago. I swear",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    alice: true,
    manicomio: true,
    animation: 0,
    id_scena: 1,
    sad: true
  },
  {
    //liam talking on the phone
    id: 75,
    mensaje: "Liam: Yo... Creo que es mejor llamar una ambulancia",
    message: "Liam: I... think it's better to call an ambulance",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    alice: true,
    manicomio: true,
    animation: 0,
    sad: true
  },
  {
    //alice hoodie en el manicomio agony
    id: 76,
    mensaje: "Alice es llevada a un hospital psiquiátrico, donde la diagnostican con esquizofrenia",
    message: "Alice is taken to a psi hospital, where she's diagnosed with schizophrenia",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    alice: true,
    manicomio: true,
    animation: 0,
    sonido: 14,
    sad: true
  },
];
export const bifur222Array = [
  {
    id: 77,
    mensaje:
      "Alice: No es cierto, mi familia está conmigo.",
    message:
      "Alice: That's not true, my family is with me.",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    aliceHoodie2: true,
    livingroom: true,
    animation: 77,
    sad: true
  },
  {
    //alice dress agony
    id: 78,
    mensaje:
      "No los veo, no entiendo nada...",
    message:
      "I can't see them, I don't understand...",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    alice: true,
    livingroom: true,
    animation: 0,
    sad: true
  },
  {
    //hospital camilla
    id: 79,
    mensaje:
      "Alice queda en blanco y, de repente, despierta del coma. Confundida en el hospital",
    message:
      "Alice goes blank and suddenly wakes up from a coma. Confused in the hospital",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    alice: true,
    hospital: true,
    animation: 0,
    sonido: 15,
    sad: true
  },
  {
    //alice hoodie sitting disbelief
    id: 80,
    mensaje:
      "Alice descubre que hubo un accidente con su familia y que los demás murieron mientras ella se salvó. Todo el tiempo estuvo en coma y fue un sueño",
    message:
      "Alice discovers that there was an accident with her family and the others died while she was saved. She realizes that this whole time she was in a coma and it was all a dream",
    decision1en: null,
    decision2en: null,
    decision1es: null,
    decision2es: null,
    alice: true,
    hospital: true,
    animation: 0,
    sad: true
  },
];
