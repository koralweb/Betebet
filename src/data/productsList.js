let productsList = [
  {
    title: 'Салат "Охотничий"',
    desc: 'Картофель по-деревенски, бекон, томаты черри, яйцо, лук зелёный, охотничьи колбаски, соус "Цезарь"',
    price: 400,
    image: require('../image/s1.jpg'),
    weight: 430,
    class: 'Салат',
  },
  {
    title: 'Салат "Цезарь с куриным филе"',
    desc: 'Лист салата, томаты черри, соус "Цезарь", куриное филе, сыр пармезан, сухари',
    price: 430,
    image: require('../image/s2.jpg'),
    weight: 350,
    class: 'Салат',
  },
  {
    title: 'Салат "Цезарь с креветками"',
    desc: 'Креветки тигровые, лист салата, томаты черри, соус "Цезарь", сыр пармезан, сухари',
    price: 520,
    image: require('../image/s3.jpg'),
    weight: 360,
    class: 'Салат',
  },
  {
    title: 'Салат с куриным филе и грибами',
    desc: 'Куриное филе, шампиньоны, огурец, яичный блинчик, лист салата, сыр Пармезан, томаты черри, соус "Цезарь" или спайси на выбор',
    price: 460,
    image: require('../image/s4.jpg'),
    weight: 350,
    class: 'Салат',
  },
  {
    title: 'Салат "Тёплый с телятиной и овощами"',
    desc: 'Лист салата, томаты черри, телятина, шампиньоны, болгарский перец, баклажаны, цукини, заправка на основе оливкового масла, кунжут',
    price: 610,
    image: require('../image/s5.jpg'),
    weight: 350,
    class: 'Салат',
  },
  {
    title: 'WOK с курицей и ананасами',
    desc: 'Лапша удон, куриное филе, ананас, перец болгарский, морковь, фасоль стручковая, лук репчатый, пекинская капуста, соус терияки.',
    price: 460,
    image: require('../image/w1.jpg'),
    weight: 370,
    class: 'Вок',
  },
  {
    title: 'WOK со свининой',
    desc: 'Лапша удон, свинина, перец болгарский, морковь, фасоль стручковая, лук репчатый, пекинская капуста, соус терияки.',
    price: 420,
    image: require('../image/w2.jpg'),
    weight: 380,
    class: 'Вок',
  },
  {
    title: 'WOK с говядиной',
    desc: 'Лапша удон, говядина, перец болгарский, морковь, фасоль стручковая, лук репчатый, пекинская капуста, соус терияки.',
    price: 420,
    image: require('../image/w3.jpg'),
    weight: 380,
    class: 'Вок',
  },
  {
    title: 'WOK с креветками',
    desc: 'Лапша удон, креветки тигровые, перец болгарский, морковь, фасоль стручковая, лук репчатый, пекинская капуста, соус терияки.',
    price: 510,
    image: require('../image/w4.jpg'),
    weight: 320,
    class: 'Вок',
  },
  {
    title: 'WOK с овощами',
    desc: ' Лапша удон, перец болгарский, морковь, фасоль стручковая, лук репчатый, пекинская капуста, соус терияки.',
    price: 380,
    image: require('../image/w5.jpg'),
    weight: 340,
    class: 'Вок',
  },
  {
    title: 'Солянка',
    desc: ' Мясные деликатесы, говяжий бульон, оливки, лимон, соленый огурец, лук, зелень, сметана.',
    price: 320,
    image: require('../image/c1.jpg'),
    weight: 420,
    class: 'Суп',
  },
  {
    title: 'Крем-суп грибной',
    desc: ' Шампиньоны, белые грибы, картофель, сливки, лук репчатый, зелень, морковь.',
    price: 350,
    image: require('../image/c2.jpg'),
    weight: 370,
    class: 'Суп',
  },
  {
    title: 'Норвежский сливочный суп',
    desc: 'Лосось, томаты, сливки, картофель, морковь, зелень, лук репчатый.',
    price: 350,
    image: require('../image/c3.jpg'),
    weight: 370,
    class: 'Суп',
  },
  {
    title: 'Том Ям с тигровыми креветками',
    desc: 'Рис, бульон куриный, шампиньоны, тигровые креветки 3шт, кальмар, паста Том Ям, кокосовое молоко, черри, имбирь, лемонграсс, лайм, перец чили.',
    price: 720,
    image: require('../image/c4.jpg'),
    weight: 510,
    class: 'Суп',
  },
  {
    title: 'Рамен с курицей',
    desc: 'Мясной бульон, яичная лапша, куриное филе, шампиньоны, яйцо, имбирь, кунжут, пекинская капуста, нори.',
    price: 370,
    image: require('../image/c5.jpg'),
    weight: 370,
    class: 'Суп',
  },
  {
    title: 'Фирменный Фил XL',
    desc: 'Сёмга с/с, сливочный сыр, нори, рис',
    price: 750,
    image: require('../image/r1.jpg'),
    weight: 320,
    class: 'Роллы',
  },
  {
    title: 'Ролл "Цезарь" Темпура',
    desc: 'Куриное филе, сливочный сыр, кляр, панировка, сыр Пармезан, нори, рис, салат',
    price: 500,
    image: require('../image/r2.jpg'),
    weight: 430,
    class: 'Роллы',
  },
  {
    title: 'Ролл "Лобстер"',
    desc: 'Снежный краб, огурец, сливочный сыр, соус Унаги, кунжут, нори, рис',
    price: 530,
    image: require('../image/r3.jpg'),
    weight: 340,
    class: 'Роллы',
  },
  {
    title: 'Ролл "Нияма"',
    desc: ' Креветка королевская, снежный краб, сливочный сыр, огурец, кунжут, нори, рис',
    price: 560,
    image: require('../image/r4.jpg'),
    weight: 370,
    class: 'Роллы',
  },
  {
    title: 'Ролл "Магма Темпура"',
    desc: ' Сёмга с/с, сливочный сыр, снежный краб, соус Лава, кляр, панировка, кунжут, нори, рис',
    price: 430,
    image: require('../image/r5.jpg'),
    weight: 350,
    class: 'Роллы',
  },
  {
    title: 'Чизкейк "Сливочно-Клубничный"',
    desc: 'Сыр творожный сливочный, соль, сахар, сметана, сахарное печень, мука пшеничная в.с., яйцо, маргарин, клубничный топпинг.',
    price: 200,
    image: require('../image/d1.jpg'),
    weight: 105,
    class: 'Десерт',
  },
  {
    title: 'Чизкейк "Нью-Йорк"',
    desc: 'Сыр творожный сливочный, соль, сахар, сметана, сахарное печенье, мука пшеничная в.с., яйцо, маргарин, топпинг карамель',
    price: 200,
    image: require('../image/d2.jpg'),
    weight: 105,
    class: 'Десерт',
  },
  {
    title: 'Десерт "Макарун"',
    desc: ' Белая миндальная мука, сахар, сахарная пудра, яичный белок',
    price: 120,
    image: require('../image/d3.jpg'),
    weight: 40,
    class: 'Десерт',
  },
  {
    title: 'Чизкейк Шоколадный',
    desc: 'Сыр твороженный сливочный, соль, сахар, сметана, сахарное шоколадное печенье, мука пшеничная в.с., яйцо, маргарин, какао-порошок, топпинг шоколадный',
    price: 200,
    image: require('../image/d4.jpg'),
    weight: 105,
    class: 'Десерт',
  },
  {
    title: '"Тирамису" домашнее',
    desc: 'Сливки,сыр сливочный, печенье Савоярди, сгущеное молоко, кофе, коньяк',
    price: 260,
    image: require('../image/d5.jpg'),
    weight: 110,
    class: 'Десерт',
  },
];

productsList = productsList.map(el => {
  return {
    ...el,
    added: false,
    count: 1,
    id: Math.random(),
  };
});

export default productsList;
