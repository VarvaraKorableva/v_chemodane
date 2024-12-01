const lots = [
    
    { id: 1, img: "/images/lottery/bag.jpg", name: "Шоппер", whoIsPlaying: "Фестиваль в Чемодане", description:[], },
    { id: 12, img: "/images/lottery/hopescrolling.jpg", name: "Тостовка «hope runs»", whoIsPlaying: "Hopescrolling", description:["Новые толстовки от проекта Hopescrolling hope runs in our veins согреют и всегда напомнят о главном: народ Израиля жив, и надежда жива вместе с ним."] },
    
    { id: 15, 
      img: "/images/lottery/ticket.jpg", 
      name: "2 билета на спектакль Орфей и Эвридика", 
      whoIsPlaying: "Анатолия Белого", 
      description: [
        "«Орфей и Эвридика» – музыкально-драматический спектакль при участии ведущих русскоязычных актеров Израиля Анатолия Белого и Елены Яраловой и музыкантов Израильского Филармонического Оркестра (камерный состав). Режиссер-постановщик и драматург – Эстер Дамскер. Совместный проект продюсерской компании Art Up и Израильского Филармонического Оркестра на русском языке.",
        "Премьера – 10 февраля 2025 года.",
        "https://artup.co.il/event/143",
      ], 
    },
    { id: 2, img: "/images/lottery/tshirt.jpg", name: "Футболка", whoIsPlaying: "Фестиваль в Чемодане", description:[], },
    { id: 4, img: "/images/lottery/neckerchief.jpg", name: "Платок", whoIsPlaying: "Елены Уздельниковой", description:[], },
    { id: 8, img: "/images/lottery/bookbabel.jpg", name: "Языки мира", whoIsPlaying: "Магазин 'Бабель'", description:[],},
    { id: 3, img: "/images/lottery/sheeps.jpg", name: "Игрушка-овечка", whoIsPlaying: "Елены Павловой", description:[], },
    
    { id: 5, img: "/images/lottery/rubinart1.jpg", name: "Четверо в квартире", whoIsPlaying: "Рубин Арт", description:[], },
    { id: 6, img: "/images/lottery/rubinart2.jpg", name: "Верблюдуин", whoIsPlaying: "Рубин Арт", description:[], },
    { id: 7, img: "/images/lottery/doll.jpg", name: "Куколка", whoIsPlaying: "AstaDolls", description:[],}, 

    //{ id: 9, img: "/images/lottery/bookmiribraginsky.jpg", name: "Книги", whoIsPlaying: "Мири Брагински", description:[],},

    { id: 10, img: "/images/lottery/photogift.jpg", name: "Прогулка фото-сессия В Тель-авиве", whoIsPlaying: "Леры Яковлевой", description: ["Сертификат на фотосъемку - прогулку в Тель-Авиве. 1 час , 60 фотографий."]},
    { id: 11, img: "/images/lottery/rings.jpg", name: "Два кольца", whoIsPlaying: "Brokain things", description:["Два кольца - оба из фарфора, с золотыми надписями."]},
    

    { id: 13, 
      img: "/images/lottery/Fulcro.jpeg", 
      name: "2 билета на кабаре Die Blumen", 
      whoIsPlaying: "театра Fulcro", 
      description: [
        "Однин самых громких израильских театров Fulcro разыгрывает лот - 2 билета на кабаре Die Blumen. В 2020 году театр Fulcro переехал из Петербурга в Тель-Авив. кабаре Die Blumen один из первых спектаклей, сыгранных в Израиле.", 
        "Дата и место спектакля: 26.01.25 Тель-Авив",
        "В спектакле используются тексты немецких авторов первой половины ХХ века, современных российских авторов, а также цитаты из кинофильмов.",
        "«Цветы» (Die Blumen) — антивоенная фантазия о лучшем мире, когда внешний мир уже потерян, вечеринка в аду. Это история о крахе человечества, шумная и трагическая одновременно."
      ],
    },
    { id: 14, 
      img: "/images/lottery/cinemateka.jpg", 
      name: "2 билета в Синематеку Тель-Авив", 
      whoIsPlaying: "Проект “Как в кино”", 
      description: [/*
        "Пригласительный билет на 2 лица в Синематеку Тель-Авив 28.01.2025. Мероприятие - “Разноцветные харедим”.",
        "Лекция раввина Мотла Гордона, просмотр фильма “Ушпизин” (с субтитрами на русском языке).",
        "О дарителе: Проект “Как в кино”  - Знакомство с израильским обществом через культовые фильмы израильского кинематографа.",
        "Годовой культурно-просветительский образовательный проект на русском языке для тех, кто хочет лучше узнать Израиль.",
        "Цель этого проекта - знакомство с израильским обществом и его «культурным кодом» посредством экспертных лекций и легендарных фильмов израильского кинематографа.", 
        "Создатели и руководители проекта: Лена Руссовская - израильский журналист и радиоведущая, социальный предприниматель, создатель известного комьюнити полуторного поколения “Русские женщины без чувства юмора и их друзья” (50 тыс человек).",
        "Татьяна Глезер - социолог, директор по развитию школы Boyar International, создатель самого большого русскоязычного комьюнити репатриантов “Тыквенный латте”", 
        "ссылка: https://www.cinema.co.il/en/series/%d0%ba%d0%b0%d0%ba-%d0%b2-%d0%ba%d0%b8%d0%bd%d0%be/",*/
      ], 
    },


    { id: 16, 
      img: "", 
      name: "Билеты на фестиваль «В чемодане»", 
      whoIsPlaying: "музей АНУ", 
      description: [
        "Семейное участие (до 5 человек) в фестивале «В чемодане» на Пурим 2025 в музее АНУ",
      ], 
    },

    { id: 17, 
      img: "", 
      name: "Фотосессия в стенах музея АНУ", 
      whoIsPlaying: "музей АНУ", 
      description: [
        "Фотосессия в стенах музея АНУ с фотографом",
      ], 
    },

    { id: 18, 
      img: "", 
      name: "Билеты", 
      whoIsPlaying: "музей АНУ", 
      description: [
        "Любые три русскоязычных мероприятия в музее АНУ на 2 персоны до конца 2025 года",
      ], 
    },

    { id: 19, 
      img: "", 
      name: "Частная экскурсия по музею АНУ для семьи", 
      whoIsPlaying: "музей АНУ", 
      description: [
        "Частная экскурсия по музею АНУ для семьи",
      ], 
    },

    { id: 20, 
      img: "", 
      name: "Книга", 
      whoIsPlaying: "НАДАВ", 
      description: [
        "Книга Ирины Невзлиной «Узнай кто ты - измени жизнь»",
      ], 
    },
]

export default lots