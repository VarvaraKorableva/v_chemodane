const lots = [
    { id: 30, 
      img: "/images/lottery/4k.jpg", 
      name: "4K приставка", 
      whoIsPlaying: "Видеосервис Redmax TV", 
      description: [
        "Видеосервис Redmax TV будет разыгрывать тв-подписки среди гостей фестиваля “Вчемодане”. Более того, наши друзья представят обновленные тарифы с детскими телеканалами на иврите. Все это можно будет посмотреть на топовой 4K приставке - она же и станет главным призом от компании Redmax TV    Redmax.TV - это израильский оператор телевидения и интернета. Сейчас в тарифных планах представлено более 200 телеканалов всех категорий. В подписке доступен онлайн-кинотеатр START, двухнедельный архив программ, а также тематические подборки тв-контента на русском, иврите и других языках. С Redmax.TV можно подключить и телевидение и интернет. Благодаря сотрудничеству с израильскими операторома Bezek и Partner - Redmax TV может предложить максимальную скорость интернета по всей стране!", 
        "Оформить тестовую подписку можно на сайте www.redmax.tv или по телефону *2186"
      ], 
    },    

    { id: 8, img: "/images/lottery/bookbabel.jpg", name: "Языки мира", whoIsPlaying: "Магазин 'Бабель'", description:[],},

    { id: 48, 
      img: "/images/lottery/tea.jpg", 
      name: "Красный и белый чай", 
      whoIsPlaying: "AMETEA", 
      description: [
        "Красный чай с насыщенными карамельными нотами, ягодной кислинкой и долгим сладким послевкусием.",
        "Грузинский белый чай со свежими травянистыми нотами, сладостью персика и легкой цитрусовой кислинкой.",
        "AMITEA — это семейный бренд, интернет-магазин чая и чайный клуб.",
        "Качественный чай из Китая, Индии, Грузии, Японии, Тайваня, Лаоса. В общем, со всех чайных уголков мира!",
        "В Ametea изучают и продают чай с 2003 года, разбираются во всем, от выращивания и производства до чайной церемонии.", 
        "https://www.amitea.co.il/",
      ], 
    },

    { id: 28, 
      img: "/images/lottery/borisvaizehovski.jpg", 
      name: "Авторский принт на арт-бумаге с автографом автора", 
      whoIsPlaying: "Борис Войцеховский", 
      description: [
        "Борис Войцеховский, художник. Участник многочисленных групповых и персональных выставок, привезет на фестиваль авторские принты, а так же футболки, шопер и открытки со своими рисунками",
      ], 
    },

    { id: 68, 
      img: "/images/lottery/YOFFI.jpg", 
      name: "Подарочный набор Тель-Авив", 
      whoIsPlaying: "YOFFI - уникальные подарки из Израиля", 
      description: [
        "В наборе: жестяная коробка 'Тель Авив' с козинаками, травяной чай 'Иерусалим',  набор открыток, оливковое масло, финиковая паста.",
        "Уникальные подарки из Израиля в изысканной упаковке. Натуральные, кошерные, веганские и супервкусные! Семейная компания Yoffi предлагает широкий выбор кулинарных подарков с эксклюзивным вкусом природы Израиля ",
        "https://yoffi.com/"
      ], 
    },
    
    
    { id: 12, img: "/images/lottery/hopescrolling.jpg", name: "Тостовка «hope runs»", whoIsPlaying: "Hopescrolling", description:["Новые толстовки от проекта Hopescrolling hope runs in our veins согреют и всегда напомнят о главном: народ Израиля жив, и надежда жива вместе с ним."] },
    { id: 21, 
      img: "/images/lottery/gesher.jpeg", 
      name: "2 билета на спектакль 'Самсон'", 
      whoIsPlaying: "театр ГЕШЕР", 
      description: [
        "2 билета на спектакль 'Самсон' в январе 2025 г.",
        "Спектакль поставлен по роману Зеева Жаботинского. В нем Жаботинский сравнил период судей со днями британского мандата. В наши дни эта история оказалась не менее актуальной."
      ], 
    },
    { id: 58, 
      img: "/images/lottery/bookandtshirt.jpg", 
      name: "Футболка и две книги", 
      whoIsPlaying: "Сергей Ауслендер", 
      description: [
        "Футболка и книги “Собственный корреспондент” и “Интересный пациент” от одного из самого популярных израильских русскоязычных блогеров Сергея Ауслендера.", 
        "Сергей Ауслендер — известный израильский военный журналист, которого многие из вас знают по каналу в YouTube и телеграм-каналу 'Война с Ордой'",
      ], 
    },
    { id: 22, 
      img: "/images/lottery/HanukkahParty.png", 
      name: "Свеча с ароматом фисташковых пончиков", 
      whoIsPlaying: "NO DARK", 
      description: [
        "Суфганийот (пончики) на Хануку — какая замечательная традиция! No Dark создали специальную свечу с ароматом фисташковых пончиков.", 
        "Дарители лота:",
        "Рома и Алина, приехали в Израиль в конце марта 2023 года из Москвы. Сначала искали себя, работали тут и там без планов и ожиданий.", 
        "В конце октября 23 года решили запустить свое производство свечей. Бренд назвали NO DARK, как символ борьбы с тьмой. Во всех смыслах", 
        "В прошлой жизни  занимались маркетингом для крупных клиентов, а также продвигали кино и сериалы. И история со свечами показалась нам безумно творческой и увлекательной."
      ], 
    },

    { id: 25, 
      img: "/images/lottery/FinkelandShtein.jpeg", 
      name: "Серьги-гвоздики из битой посуды", 
      whoIsPlaying: "Finkel and Shtein", 
      description: [
        "Финкель и Штейн - это украшения из битой посуды (да-да из осколков), созданные Асей Финкельштейн. Ася ходит по блошиным рынкам и антикварным лавкам в поисках разбитого фарфора, чтобы дать ему вторую жизнь Если вы любите необычные серьги и нестандартные концепции, вам понравится",
      ], 
    },

    { id: 15, 
      img: "/images/lottery/ticket.jpg", 
      name: "2 билета на спектакль Орфей и Эвридика", 
      whoIsPlaying: "Анатолий Белый", 
      description: [
        "«Орфей и Эвридика» – музыкально-драматический спектакль при участии ведущих русскоязычных актеров Израиля Анатолия Белого и Елены Яраловой и музыкантов Израильского Филармонического Оркестра (камерный состав). Режиссер-постановщик и драматург – Эстер Дамскер. Совместный проект продюсерской компании Art Up и Израильского Филармонического Оркестра на русском языке.",
        "Премьера – 10 февраля 2025 года.",
        "https://artup.co.il/event/143",
      ], 
    },
    { 
      id: 2, 
      img: "/images/lottery/tshirt.jpg", 
      name: "Футболка", 
      whoIsPlaying: "Фестиваль в Чемодане", 
      description:[], 
    },

    { id: 4, img: "/images/lottery/neckerchief.jpg", name: "Платок", whoIsPlaying: "Елена Уздельникова", description:[], },
    
   
    
    { id: 5, img: "/images/lottery/rubinart1.jpg", name: "Четверо в квартире", whoIsPlaying: "Рубин Арт", description:[], },
    { id: 6, img: "/images/lottery/rubinart2.jpg", name: "Верблюдуин", whoIsPlaying: "Рубин Арт", description:[], },
    

    //{ id: 9, img: "/images/lottery/bookmiribraginsky.jpg", name: "Книги", whoIsPlaying: "Мири Брагински", description:[],},

    { id: 10, img: "/images/lottery/photogift.jpg", name: "Прогулка фото-сессия В Тель-авиве", whoIsPlaying: "Лера Яковлева", description: ["Сертификат на фотосъемку - прогулку в Тель-Авиве. 1 час , 60 фотографий."]},
    { id: 11, img: "/images/lottery/rings.jpg", name: "Два кольца", whoIsPlaying: "Brokain things", description:["Два кольца - оба из фарфора, с золотыми надписями."]},
    { id: 20, 
      img: "/images/lottery/nevzlinabook.jpg", 
      name: "Книга", 
      whoIsPlaying: "НАДАВ", 
      description: [
        "Книга Ирины Невзлиной «Узнай кто ты - измени жизнь»",
      ], 
    },

    { id: 1, img: "/images/lottery/bag.jpg", name: "Шоппер", whoIsPlaying: "Фестиваль в Чемодане", description:[], },

    { id: 17, 
      img: "/images/lottery/Anu.png", 
      name: "Фотосессия в стенах музея АНУ", 
      whoIsPlaying: "Музей АНУ", 
      description: [
        "Фотосессия в стенах музея АНУ",
      ], 
    },

    { id: 98, 
      img: "/images/lottery/pic.jpeg", 
      name: "Авторский рисунок с автографом", 
      whoIsPlaying: "Евгений Антоненков", 
      description: [
        "Евгений Антоненков, художник - иллюстратор детской книги. Участник многочисленных международных выставок. eantonenkov.com",
      ], 
    },

    { id: 13, 
      img: "/images/lottery/fulcro.jpeg", 
      name: "2 билета на кабаре Die Blumen", 
      whoIsPlaying: "Театр Fulcro", 
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
      whoIsPlaying: "Проект 'Как в кино'", 
      description: [
        "Пригласительный билет на 2 лица в Синематеку Тель-Авив 28.01.2025. Мероприятие - “Разноцветные харедим”.",
        "Лекция раввина Мотла Гордона, просмотр фильма “Ушпизин” (с субтитрами на русском языке).",
        "О дарителе: Проект “Как в кино”  - Знакомство с израильским обществом через культовые фильмы израильского кинематографа.",
        "Годовой культурно-просветительский образовательный проект на русском языке для тех, кто хочет лучше узнать Израиль.",
        "Цель этого проекта - знакомство с израильским обществом и его «культурным кодом» посредством экспертных лекций и легендарных фильмов израильского кинематографа.", 
        "Создатели и руководители проекта: Лена Руссовская - израильский журналист и радиоведущая, социальный предприниматель, создатель известного комьюнити полуторного поколения “Русские женщины без чувства юмора и их друзья” (50 тыс человек).",
        "Татьяна Глезер - социолог, директор по развитию школы Boyar International, создатель самого большого русскоязычного комьюнити репатриантов “Тыквенный латте”", 
        "ссылка: https://www.cinema.co.il/en/series/%d0%ba%d0%b0%d0%ba-%d0%b2-%d0%ba%d0%b8%d0%bd%d0%be/"
      ], 
    },

    { id: 16, 
      img: "/images/lottery/Anu.png", 
      name: "Билеты на фестиваль «В чемодане»", 
      whoIsPlaying: "Музей АНУ", 
      description: [
        "Семейное участие (до 5 человек) в фестивале «В чемодане» на Пурим 2025 в музее АНУ",
      ], 
    },

    { id: 23, 
      img: "/images/lottery/brosh.jpg", 
      name: "Керамическая брошь 'Мишка'", 
      whoIsPlaying: "Екатерина Остерман", 
      description: [
        "Керамическая брошь 'Мишка' будет создавать атмосферу долгой зимой, согреет сердце и поднимет настроение.",
        "Екатерина Остерман - автор бренда 'Masterskaya Ton'",
        "Керамика для дома и души"
      ], 
    },

    { id: 18, 
      img: "/images/lottery/Anu.png", 
      name: "Билеты", 
      whoIsPlaying: "Музей АНУ", 
      description: [
        "Любые три русскоязычных мероприятия в музее АНУ на 2 персоны до конца 2025 года",
      ], 
    },



    { id: 7, img: "/images/lottery/doll.jpg", name: "Куколка", whoIsPlaying: "AstaDolls", description:[],}, 

    { id: 26, 
      img: "/images/lottery/booktapuzim.jpg", 
      name: "Зимняя сказка от автора «Часодеев» Натальи Щербы", 
      whoIsPlaying: "Книжный онлайн-магазин Tapuzim.store", 
      description: [
        "Книжный онлайн-магазин Tapuzim.store из Тель-Авива предлагает книги, игры и развивающие пособия для детей всех возрастов. Доставка по всему Израилю 1-3 дня",
      ], 
    },

    { id: 29, 
      img: "/images/lottery/alexandrkotler.jpg", 
      name: "Неизвестный С. Книга Александра Котлера", 
      whoIsPlaying: "Александр Котлер", 
      description: [
        "Александр Котлер, автор серии сказочных повестей о Дракоше Коше.",
        "В свободное от основной работы время является автором-исполнителем собственных песен, а также бессменным лидером музыкального коллектива Gefilte Drive",
      ], 
    },

    { id: 78, 
      img: "/images/lottery/hodorkorskiy.jpg", 
      name: "Книга Михаила Ходорковского Тюрьма и воля с автографом", 
      whoIsPlaying: "Фестиваль Пражская книжная башня", 
      description: [
        "Эта книга уникальна, потому что ее автор — сам Михаил Ходорковский. Впервые за многие годы он решил откровенно рассказать о том, как все происходило на самом деле. Почему он не уехал, хотя мог, почему не держит зла на тех, кто прервал его полет. Что представляет из себя жизнь в тюрьме и на зоне. И каким он видит будущее России. Соавтор Михаила, известный  российский журналист, Наталия Геворкян, дополняет его рассказ своей точкой зрения на произошедшие события.",
        "Лот предоставлен нашими специальными гостями - 'Пражская книжная башня'",
        "Это первая международная ярмарка неподцензурной русскоязычной литературы, которая прошла в столице Чехии в середине сентября",
        "(https://praguebooktower.cz)" 
      ]
    },


    { id: 3, img: "/images/lottery/sheeps.jpg", name: "Игрушка-овечка", whoIsPlaying: "Елены Павловой", description:[], },

    { id: 31, 
      img: "/images/lottery/bookmiribraginsky.jpg", 
      name: "Три книги Мири Брагински", 
      whoIsPlaying: "Мири Брагински", 
      description: [
        "Мири Брагински - художник, мама неговорящего аутиста Даниэля. Мири приехала из Москвы в 1988-ом году, живет в поселке Бейт-Арье в Самарии, рисует и преподает рисование, в том числе детям с РАС. Среди ее книг  детские (и не только) сказки, альбом графики и книга рассказов-постов с цветными картинами.",
        "https://gala-studio.com/braginsky/index.php",
      ], 
    },

    { id: 27, 
      img: "/images/lottery/PrimaNaturalis.jpeg", 
      name: "Подарочный набор Prima Naturalis", 
      whoIsPlaying: "Prima Naturalis", 
      description: [
        "В набор входят: мыло для лица и для тела с лавандовым эфирным маслом и маслом ши, мыло для рук и для тела с кофейным пилингом; мешочек для мыла из натуральной пеньки, являющийся массажной мочалкой.",
        "Татьяна Кузьменко, создатель бренда Prima Naturalis. ЭКО-продукция ручной работы: потрясающее натуральное мыло, твердые шампуни, эфирные масла, ароматические свечи, бамбуковые зубные щётки и др. Все изделия изготовлены из натуральных растительных материалов с любовью и заботой о вас и о нашей Планете"
      ], 
    },


    { id: 19, 
      img: "/images/lottery/Anu.png", 
      name: "Частная экскурсия по музею АНУ для семьи", 
      whoIsPlaying: "Музей АНУ", 
      description: [
        "Частная экскурсия по музею АНУ для семьи",
      ], 
    },
]

export default lots