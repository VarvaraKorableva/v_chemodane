import redmax from '../../images/logo/redmax.jpg'
import pjlabrary from '../../images/logo/pjlibrary.jpg'

const hanukkahParticipantsData = [
    {
        companyName:"Babel Haifa",
        npreviousParticipation:"да",
        socialNetwork: {
            instagram: "",
            facebook: "https://www.facebook.com/babelhaifabooks",
            personalSite: "",
        },
        description:"«Бабель. Книги. Хайфа» (Babel Haifa. Art & Books) всего за год успел собрать вокруг себя верную аудиторию, которая оценила отличный подбор книг для детей и взрослых на русском и английском языке. Как и в других магазинах франшизы «Бабель» в Хайфе проходят мастер-классы и лекции для детей и взрослых, открываются выставки современных художников. \nАдрес магазина: Хайфа, Хатиб, 10. Следить за новостями магазина можно в фб https://www.facebook.com/babelhaifabooks и инстаграме @babel_haifa\n\n",
        participationInTheLottery:"да",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710277229436_302850514.svg",
        id:3
    },
    /*{
        companyName:"Издательство «Август»",
        npreviousParticipation:"Да",
        socialNetwork: {
            instagram: "",
            facebook: "https://www.facebook.com/profile.php?id=100077282155339&mibextid=uzlsIk",
            personalSite: "",
        },
        description:"Издательство «Август» работает с 2000 года. Вышло множество очень красивых книг из русской  литературы и поэзии, среди них есть то, что раньше отдельной книгой для детей не издавалось. Сейчас издательство переехало в Израиль и выпустило первую книгу на иврите .",
        participationInTheLottery:"да",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710712074695_565886293.jpg",
        id:5
    },*/
    {
        companyName:"Bilberry Forest",
        previousParticipation:"Да, во всех, начиная с первого тель-авивского",
        socialNetwork: {
            instagram: "https://www.instagram.com/bilberry_forest/",
            facebook: "",
            personalSite: "",
        },
        description:"Светлана Соловая, автор проекта \"Bilberry Forest\" и постоянный участник наших фестивалей привезёт в Тель-Авив новые коллекции керамической посуды и украшений.",
        participationInTheLottery:"да",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710273291901_646709829.png",
        id:6
    },
    {
        companyName:"TAPUZIM.STORE",
        previousParticipation:"Иерусалим, Музей АНУ",
        socialNetwork: {
            facebook: "https://www.facebook.com/tapuzimstore", 
            instagram: "https://www.instagram.com/tapuzim.store", 
            personalSite: "https://t.me/tapuzimstore",
        },
        description:"Детский книжный интернет-магазин Tapuzim.store открыт ежедневно для мам, пап и их замечательных детей! В нашем ассортименте самые топовые книги от крупнейших издательств России - \"АСТ\", \"Азбука-Аттикус\", Voicebook, \"МИФ\", Мелик-Пашаев, Росмэн, Умка, замечательные книги издательства Англии Walker Books LTD.\nА также:\n- Развивающие пособия по ивриту, русскому языку,  математике, логике, психологии.\n- Увлекательные карточные и настольные игры;\n- Наборы для творчества и хобби\n- Канцелярская продукция и сопутствующие товары\nДоставка по всему Израилю в течение 1-3 дней! Самовывоз из офиса по адресу: Тель-Авив, Тель Гиборим, 5, офис 321. \nНе можете определиться с выбором? Растерялись от огромного количества книг и игр? Мы вам подскажем и поможем!",
        participationInTheLottery:"да",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710274838958_975317700.png",
        id:7
    },

    {
        companyName:"Brokain things",
        previousParticipation:"Пока нет",
        socialNetwork: {
            instagram: "https://www.instagram.com/brokain.things\nhttps://www.facebook.com/brokain.things",
            facebook: "",
            personalSite: "",
        },
        description:"Brokain things - стекло, металл и керамика переплетаются в этих руках. Маленькая яркая бусина на дредах, необычной формы чайник, кольцо, которого еще ни у кого не было.",
        participationInTheLottery:"да",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710416140442_219933695.webp",
        id:17
    },
    {
        companyName:"Финкель и Штейн",
        previousParticipation:"В музее Ану и в Иерусалиме",
        socialNetwork: {
            instagram: "https://www.instagram.com/finkel__shtein/",
            facebook: "",
            personalSite: "",
        },
        
        description:"Финкель и Штейн - это украшения из битой посуды (да-да из осколков), созданные Асей Финкельштейн. Ходит по блошиным рынкам и антикварным лавкам в поисках разбитого фарфора, чтобы дать ему вторую жизнь. Если вы любите необычные серьги и нестандартные концепции, вам понравится ",
        participationInTheLottery:"Нет",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710274589064_681552992.jpg",
        id:22
    },
    {
        companyName:"RABEYKA",
        previousParticipation:"нет",
        socialNetwork: {
            instagram: "@rabeyka",
            facebook: "https://www.facebook.com/rabeykajewelry",
            personalSite: "",
        },
        description:"Катя Рабей - ювелирный дизайнер и ваш друг. Создательница бренда RABEYKA делает весёлые украшения как на заказ, так и небольшими сериями. Разноцветные эмалевые серьги со смешными животными, складные кольца со сменными камнями, брошки с цитатами из современных поэтов, огромные стейтмент-ожерелья, которые можно носить поверх пальто - и всё это в сочетании драгоценных и недрагоценных материалов - от фанеры и алюминия до золота и сапфиров. И кстати именно Катя создавала украшения для фильма \"Мастер и Маргарита\" - но это уже совсем другая история.",
        participationInTheLottery:"да",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710701727250_141049949.jpg",
        id:23
    },
    {
        companyName:"Исрадон",
        previousParticipation:true,
        socialNetwork: {
            instagram: "",
            facebook: "https://www.facebook.com/isradon.net?mibextid=LQQJ4d",
            personalSite: "",
        },
        description:"“Исрадон” уже без малого 30 лет привозит в Израиль книги на русском языке для читателей всех возрастов. На сегодняшний день в семье “Исрадон” 12 филиалов, а также интернет-магазин с более чем 100 000 наименований книг. Мы делаем доставку по всему Израилю и за его пределы, привозим новинки еженедельно и принимаем индивидуальные заказы. С нами выросло уже не одно поколение детей, для чьих родителей важно сохранить в семье русский язык!",
        participationInTheLottery:"да",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710274686976_911517380.jpg",
        id:24,
    },
    {
        companyName:"Sweet baby book",
        previousParticipation:"",
        socialNetwork: {
            instagram: "https://www.instagram.com/sweet_baby_book",
            facebook: "",
            personalSite: "",
        },
        description:"Книга из фетра Sweet baby book - это безопасная и познавательная игрушка для детей от 3х месяцев и старше. Индивидуальные развивающие книжки способны развивать позновательную, речевую активность, тактильные ощущения,внимательность, мелкую моторику и координацию движений обеих рук, логическое мышление, память.",
        participationInTheLottery:"",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710707361299_421701167.jpg",
        id:26,
    },
    {
        companyName:"Polonskybooks",
        previousParticipation:"",
        socialNetwork: {
            instagram: "",
            facebook: "https://www.facebook.com/polonskybookscom",
            personalSite: "",
        },
        description:"Независимый книжный магазин Polonskybooks уже почти пять лет радует своих покупателей актуальными книжными новинками для детей и взрослых. Здесь всегда можно заказать специальную литературу по любой тематике. Polonskybooks находится в Хайфе. Есть точки самовывоза в Тель-Авиве и Нагарии. Доставка книг осуществляется по Израилю и за рубеж. С новинками можно ознакомиться на сайте polonskybooks@com. В магазине регулярно проводятся творческие вечера, лекции и мастер-классы.",
        participationInTheLottery:"",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1710703531711_228584765.jpg",
        id: 27,
    },
    {
        companyName:"АКАК",
        previousParticipation:"",
        socialNetwork: {
            instagram: "",
            facebook: "",
            personalSite: "",
        },
        description:"АКАК - это авторский книжный магазин детской современной литературы и мы скоро откроемся! Наши дети и дети наших друзей читают взахлёб, любят обсуждать книги и изучать иллюстрации. Здесь мы будем делиться с вами лучшими книгами, рассказывать о независимых издательствах, авторах и иллюстраторах. Передавая новости о книжных новинках, которые принесла нам 'Сорока на хвосте', мы решили назвать магазин по израильски: АКАК, что означает СОРОКА.",
        participationInTheLottery:"",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1711225493864_61029240.jpeg",
        id: 28,
    },

    {
        companyName:"РэдМакс",
        previousParticipation:"",
        socialNetwork: {
            instagram: "",
            facebook: "",
            personalSite: "https://www.redmax.tv/",
        },
        description:"Redmax TV - крупнейший видеосервис в Израиле на иврите и русском языке. Он предлагает огромный выбор телеканалов, а также коллекцию фильмов и сериалов на родном языке. Более того, клиентская поддержка в Redmax TV на русском языке доступна 24/7 - даже в шаббат!",
        participationInTheLottery:"",
        imgLink: redmax,
        id: 29,
    },
/////new

    {
        companyName:"Маша и три медведя",
        previousParticipation:'',
        socialNetwork: {
            instagram: "https://www.instagram.com/mashaandthreebears?igsh=NmE1ZjNhYWx3ZDdr",
            facebook: "https://www.facebook.com/mashaand3bears?mibextid=ZbWKwL",
        },
        description:'Тот самый детский книжный магазин, который еще недавно назывался "Маша и Медведь". У нас на полках отличный выбор детских книг для всех возрастов на русском, иврите, украинском и английском – и дорогая сердцу классика, и новинки от лучших современных авторов. Мы верим, что любовь к чтению зажигается с детства, и стараемся создать такую атмосферу, чтоб каждый маленький читатель чувствовал себя у нас как дома и мог найти для себя что-то особенное, а наша команда всегда рядом, чтобы помочь в выборе идеальной книги. По выходным в нашем магазине проходят очень разные и очень интересные мастер-классы, игры, квесты, квизы, викторины и спектакли. Или можно просто прийти понаблюдать за жизнью хомячков, полистать книжки и отдохнуть в игровой зоне.',
        participationInTheLottery:"",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733571156847_228674644",
        id: 281,
    },

    {
        companyName:"RubinArt",
        previousParticipation:"",
        socialNetwork: {
            instagram: "https://www.instagram.com/rubinartbooks/",
            facebook: "",
            personalSite: "",
        },
        description:"Книжное издательство и галерея. Специализируется на издании книг для детей и для семейного чтения. Издательство ориентировано на тексты на любых языках в рамках еврейской традиции, иудаику и на иллюстрирование и визуальную поддержку интересных проектов, предоставляя профессиональное сопровождение от момента написания рукописи и до получения тиража в типографии (включая услуги редактора, корректора, верстальщика, дизайнера, иллюстратора). Галерея при издательстве занимается продвижением картин израильского художника Давида Рубина.",
        participationInTheLottery:"",
        imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733571157245_645939751",
        id:201
    },

    {
        companyName:"Книжная ярмарка Пражская книжная башня",
           previousParticipation:true,
           socialNetwork: {
               instagram: "https://www.instagram.com/praguebooktower/",
               facebook: "https://www.facebook.com/profile.php?id=61563883464215&mibextid=LQQJ4d&rdid=oNf7NRd1yHPmA1ng",
               personalSite: "https://praguebooktower.cz/",
           },
           description:"Первая международная ярмарка неподцензурной русскоязычной литературы «Пражская книжная башня». Это ярмарка нового тамиздата, где можно найти произведения, запрещенные к изданию и продаже в России, и пообщаться с их авторами, некоторые из которых объявлены иностранными агентами или находятся в розыске",
           participationInTheLottery:"да",
           imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733571157209_757870310",
           id:301,
       },
   {
        companyName:"Masterskaya Ton",
           previousParticipation:true,
           socialNetwork: {
               instagram: "",
               facebook: "",
               personalSite: "",
           },
           description:"Екатерина Остерман - автор бренда 'Masterskaya Ton' Керамика для дома и души. На маркете будут давно полюбившиеся всем работы и много новинок",
           participationInTheLottery:"да",
           imgLink:"",
           id:302,
       },
   {
        companyName:"Prima Naturalis",
           previousParticipation:true,
           socialNetwork: {
               instagram: "https://www.instagram.com/prima_naturalis/",
               facebook: "https://www.facebook.com/share/19cigeAuJ2/",
               personalSite: "prima-naturalis.co.il",
           },
           description:"Татьяна Кузьменко, создатель бренда Prima Naturalis, привезет на фестиваль ЭКО-продукцию ручной работы: потрясающее натуральное мыло, твердые шампуни, эфирные масла, ароматические свечи, бамбуковые зубные щётки и др.",
           participationInTheLottery:"да",
           imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733319154793_86267020",
           id:303,
       },
   {
        companyName:"Борис Войцеховский",
           previousParticipation:true,
           socialNetwork: {
               instagram: "https://www.instagram.com/voitsekh1",
               facebook: "",
               personalSite: "",
           },
           description:"Борис Войцеховский, художник. Участник многочисленных групповых и персональных выставок, привезет на фестиваль авторские принты, а так же футболки, шопер и открытки со своими рисунками",
           participationInTheLottery:"да",
           imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733319154782_639654819",
           id:304,
       },
   {
        companyName:"No Dark Factory",
           previousParticipation:true,
           socialNetwork: {
               instagram: " https://www.instagram.com/nodark.factory",
               facebook: "",
               personalSite: "",
           },
           description:"Алина и Рома, основатели No Dark Factory, начали свое необычное путешествие, переехав в Израиль после многих лет жизни в Москве. No Dark Factory -- это уникальные свечи ручной работы с авторским дизайном и необычными ароматами. Каждая свеча отражает их опыт и вдохновение, почерпнутое в Хайфе и Израиле в целом. Их миссия — дарить свет, тепло и атмосферу уюта в дома по всему миру.",
           participationInTheLottery:"да",
           imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733571189234_978507415",
           id:305,
       },
   {
        companyName:"Мири Брагински (Miri Braginsky)",
           previousParticipation:true,
           socialNetwork: {
               instagram: "",
               facebook: "https://www.facebook.com/profile.php?id=100000135334467&mibextid=kFxxJD ",
               personalSite: "https://gala-studio.com/braginsky/index.php",
           },
           description:"Мири Брагински (Miri Braginsky) - художник, писательница, учительница рисования, ловец чудес и 'спасатель всяких', бывшая 'отказница' и нынешняя жительница Самарии, мама неговорящего аутиста Даниэля и автор книг, среди которых сказки для детей и взрослых, альбом графики и новая уникальная книга 'Ловля китов в горах Бейт-Арье', ",
           participationInTheLottery:"да",
           imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733319154791_428067030",
           id:306,
       },

       {
        companyName:"Книгвардс",
           previousParticipation:true,
           socialNetwork: {
               instagram: "https://www.instagram.com/knigvards.knigi_il",
               facebook: "https://www.facebook.com/knigvards.knigi.il?mibextid=ZbWKwL",
               personalSite: "",
           },
           description:"Интернет магазин детских книг с радостью предоставит вам возможность познакомиться с лучшими новинками детской литературы",
           participationInTheLottery:"да",
           imgLink:"https://newbacketitemspic.s3.eu-central-1.amazonaws.com/1733571156846_39147123",
           id:307,
       },
   
   {
        companyName:"AMITEA",
           previousParticipation:true,
           socialNetwork: {
               instagram: "https://www.instagram.com/amitea.co.il",
               facebook: "https://www.facebook.com/amitea.co.il?rdid=BauKguM02XUIjYUp",
               personalSite: "https://www.amitea.co.il/",
           },
           description:"AMITEA — это семейный бренд, интернет-магазин чая и чайный клуб. Мы привозим качественный чай из Китая, Индии, Грузии, Японии, Тайваня, Лаоса. В общем, со всех чайных уголков мира. Пьем, изучаем и продаем чай с 2003 года, разбираемся во всем, от выращивания и производства до чайной церемонии. Проводим чайные встречи и дегустации по всей стране, рассказываем про чай и продвигаем чайную культуру",
           participationInTheLottery:"да",
           imgLink:"",
           id:308,
       },
   
   
    
]

export default hanukkahParticipantsData