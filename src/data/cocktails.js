export const cocktails = [
  {
    id: 1,
    name: "Aşko",
    category: "Signature Cocktails",
    description:
      "İlk yudumdan itibaren damağınızda hafif ekşi bir aşk patlaması hissedeceksiniz. Rhubarb'ın narin tatlılığı ve limon suyunun canlılığı, nane yapraklarının ferahlığıyla buluşurken köpürtülmüş yumurta akı kokteyle yumuşak bir dokunuş katar. Aşko, romantik akşamların vazgeçilmezi olacak bir imza kokteyl! Aşk, her yudumda yeniden keşfedilir. 💖",
    image: "/images/cocktails/asko.jpg",
    ingredients: [
      "40 ml Koskenkorva Rhubarb",
      "30 ml taze limon suyu",
      "10 ml şeker şurubu",
      "10 taze nane yaprağı",
      "Köpürtülmüş yumurta akı",
    ],
    preparation:
      "Tüm malzemeler shaker'da buzla karıştırılır. İnce süzgeçten süzülerek soğutulmuş kokteyl bardağına dökülür. Passion fruit kabuğu ile süslenir.",
    price: "Ekşi, tatlı",
  },
  {
    id: 2,
    name: "Dump",
    category: "Signature Cocktails",
    description:
      "Bu kokteyl, QA32’de inspection lot ararken Z’lenmiş implementasyonlarla boğuşan danışmanlara ilham kaynağıdır. Master data eksiklikleri, karakteristik tanımları ve ABAP kodlarından alınan dump’ların fantastik bir karışımıdır. Standartta yoktu, biz Z’ledik cümlesinin eşlikçisi olarak tasarlanmıştır. Her yudumda PY'nin sizi arayıp 'Şu işi ne yaptık?' demediğini hayal edin!",
    image: "/images/cocktails/dump.jpg",
    ingredients: [
      "Absolut Vodka",
      "Beefeter",
      "Citrus Blend",
      "Kuzu kulağı",
      "Köpürtülmüş yumurta akı",
    ],
    price: "Ekşi, narenciye",
  },
  {
    id: 3,
    name: "Ebenin Avı",
    category: "Signature Cocktails",
    description:
      "Absolut Vodka'nın saf gücü, taze yaban mersinlerinin meyvemsi aromasıyla harmanlanıyor. Taze limon suyu canlı bir asidite sunarken, şeker şurubu tatlı bir denge oluşturuyor. Köpürtülmüş yumurta akı ise kokteyle yumuşak bir doku ve göz alıcı bir köpük katıyor. Ebenin Avı, hem tat hem de tarz arayanlar için cesur bir seçenek. İlk yudumdan sonra yapacağınız yorumunuz: 'Yok Ebenin Avı! olacak!",
    image: "/images/cocktails/ebeninavi.JPG",
    ingredients: [
      "Absolut Vodka",
      "Blueberries",
      "Taze limon suyu",
      "Şeker şurubu",
      "Köpürtülmüş yumurta akı",
    ],
    price: "Mayhoş",
  },
  {
    id: 4,
    name: "Blue Dream 2",
    category: "Signature Cocktails",
    description: "Blue Dream, Marmaris Söğüt’ün eşsiz atmosferinden ilham alarak yenilenen nevi şahsına münhasır tadıyla leziz bir kokteyl deneyimi sunar. Curaçao’nun tropikal dokunuşlarıyla geçmişin tatlarını çağdaş bir yorumla birleştiren bu kokteyl, nostalji ve yenilik arasında kusursuz bir denge kurar.",
    image: "/images/cocktails/bluedream.JPG",
    ingredients: [
      "Absolut Vodka",
      "Blue Curaçao",
      "Taze limon suyu",
      "Şeker şurubu",
      "Köpürtülmüş yumurta akı",
    ],
    price: "Tropical, tatlı",
  },
  {
    id: 5,
    name: "Submariner",
    category: "Signature Cocktails",
    description:
      "Bu kokteyl, güçlü bir enerjiyi ve ritmik bir karakteri yansıtan tatlarla hazırlandı. Mezcal'in isli derinliği, taze limon suyunun keskinliğiyle dengelenirken, çilek püresi ve şeker şurubu tatlı bir uyum sunuyor. Köpürtülmüş yumurta akı, dokusuyla zarif bir dokunuş ve estetik bir görünüm kazandırıyor. Bu özel karışım, her yudumda dinamik bir hikaye anlatırken sofistike bir deneyim sunuyor.",
    image: "/images/cocktails/anlayamazsiniz.JPG",
    ingredients: [
      "Mezcal",
      "Taze limon suyu",
      "Şeker şurubu",
      "Çilek püresi",
      "Köpürtülmüş yumurta akı",
    ],
    price: "Tatlı, meyvemsi",
  },
  {
    id: 6,
    name: "Sunset ™",
    category: "Signature Cocktails",
    description:
      "Bu kokteyl, gün batımının turuncu ve kırmızı tonlarını bardağınıza taşır. İçindeki turunçgiller Bodrum sahillerinin ferahlığını, hafif tatlılık ise akşam esintisinin huzurunu hissettirir. Sunset, güneşi batırıp gün batımına kadehinde devam etmek isteyenlerin bir numaralı tercihidir",
    image: "/images/cocktails/sunset.JPG",
    ingredients: [
      "Aperol",
      "Beefeter",
      "Taze limon suyu",
      "Şeker şurubu",
      "Köpürtülmüş yumurta akı",
    ],
    price: "Efsane tat",
  },
  {
    id: 7,
    name: "Trakya Geceleri",
    category: "Signature Cocktails",
    description: "Ailemizin medari iftiharı, 250 yıllık büyükanne tarifimiz, yenilenen tadiyla karşınızda! Deneyenlerin %96.7 sinin bu neymis yauvv tekrar istiyorum yauvv dediği tarifimiz, Bir takım kendini bilmez, hadsizlerin, “Od Urladaki rakı kavun kokteyli daha iyi yeaa” karalamalarına karşı hamle olarak, ArGe ekibimizin yoğun calışmalari ile yenilenerek, siz değerli misafirlerimizin huzuruna çıkıyor.",
    image: "/images/cocktails/rakikavun.jpeg",
    ingredients: [
      "Tekirdağ Altın Seri Rakısı",
      "Mastika",
      "Absolut Vodka",
      "Kavun"    
    ],
    preparation:
      "Tüm malzemeler shaker'da buzla karıştırılır. İnce süzgeçten süzülerek soğutulmuş kokteyl bardağına dökülür. Passion fruit kabuğu ile süslenir.",
    price: "Yenilenen tadıyla bir aile geleneği",
  },
  {
    id: 8,
    name: "Yürüyen Uçah",
    category: "Signature Cocktails",
    description:
      "Bu kokteyl öyle bir etkiye sahiptir ki, birkaç yudum sonrası etrafınızdaki dünyayı farklı görmeye başlayabilirsiniz. İkinci bardaktan sonra uçağın yürüdüğüne, gökyüzünün yere yaklaştığına inanmaya hazır olun. Yürüyen Uçak, hayal gücünüzü kanatlandırırken sizi de eğlencenin doruklarına çıkarır. Herkes bir kez de olsa bu uçuşa katılmalı! ✈️",
    image: "/images/cocktails/limonsour.jpg",
    ingredients: [
      "Vodka",
      "Orange Liqueur",
      "Taze limon suyu",
      "Şeker şurubu",
      "Köpürtülmüş yumurta akı",
    ],
    price: "Ekşi",
  },

  {
    id: 9,
    name: "Gin & Tonic",
    category: "Klasik Kokteyller",
    description: "",
    image: "/images/cocktails/gintonic.jpg",
    ingredients: [
      "Beefeter Gin",
      "Tonic Water",
      "Taze limon suyu",
    ],
    price: "Ekşi",
  },
  {
    id: 10,
    name: "Mojito",
    category: "Klasik Kokteyller",
    image: "/images/cocktails/mojito.jpg",
    ingredients: [
      "Rom",
      "Blue Curaçao",
      "Esmer şeker",
      "Esmer şeker",
      "Taze lime suyu",
      "Club soda",
    ],
    price: "Kahri&Kahri Special Edition",
  },

  {
    id: 11,
    name: "Likya Patara",
    category: "Şaraplar",
    description:
      "Likya Patara, Likya bölgesinin eşsiz terroirinden gelen yerel ve uluslararası üzümlerle üretilen zarif bir kırmızı şaraptır. Yumuşak tanenler, olgun kırmızı meyve aromaları ve dengeli bir asidite sunarak keyifli bir içim sağlar.",
    image: "/images/wines/patara.jpg",
    price: "Kırmızı",
  },
  {
    id: 12,
    name: "Sarafin",
    category: "Şaraplar",
    description: "Sarafin, Türkiye'nin Trakya bölgesindeki seçkin bağlardan elde edilen üzümlerle üretilen premium bir şarap markasıdır. Sofistike aromaları ve dengeli yapısıyla, farklı çeşitlerinde bölgeye özgü üzüm karakterlerini öne çıkarır.",
    image: "/images/wines/sarafin.jpg",
    price: "Kırmızı",
  },
  {
    id: 13,
    name: "Chianti",
    category: "Şaraplar",
    description: "Chianti, İtalya'nın Toskana bölgesine özgü Sangiovese üzümünden yapılan, dengeli asiditesi ve canlı kırmızı meyve aromalarıyla tanınan bir kırmızı şaraptır. Genellikle hafif baharatlı ve topraksı notalarla zenginleşen, yemeklerle mükemmel uyum sağlayan bir lezzet sunar.",
    image: "/images/wines/chianti.jpg",
    price: "Kırmızı",
  },
  {
    id: 14,
    name: "Vedat Milor | Bülüğübağ",
    category: "Şaraplar",
    description: "Vedat Milor'un övgüyle bahsettiği Bülüğübağ, Türkiye'nin Bozcaada bölgesinden gelen, sınırlı üretim yapılan ve bölgenin karakteristik üzüm çeşitlerini öne çıkaran bir şaraptır. Doğal yöntemlerle üretilen bu şaraplar, zengin aromatik profili ve dengeli yapısıyla gastronomik uyum sunar.",
    image: "/images/wines/buyulubag.jpg",
    price: "Beyaz",
  },
  {
    id: 15,
    name: "Likya Fox",
    category: "Şaraplar",
    description: "Likya Fox, Antalya'nın Elmalı bölgesinde yetişen yerel Tilki Kuyruğu üzümünden üretilen, Likya şaraplarının premium serilerinden biridir. Bu eşsiz şarap, zengin kırmızı meyve aromaları, baharatlı dokunuşları ve uzun bitişiyle benzersiz bir tat deneyimi sunar.",
    image: "/images/wines/fox.jpg",
    price: "Beyaz",
  },

  {
    id: 16,
    name: "Tamnavulin",
    category: "Özel Koleksiyon",
    description: "Tamnavulin, İskoçya'nın Speyside bölgesinden gelen zengin ve yumuşak bir single malt viskidir. Tatlı karamelli, vanilyalı ve hafif meyvemsi aromalarıyla kolay içimli ve zarif bir lezzet sunar.",
    image: "/images/wines/tamnavulin.jpg",
    price: "Single Malt",
  },
  {
    id: 17,
    name: "Talisker Skye",
    category: "Özel Koleksiyon",
    description: "Talisker Skye, İskoçya'nın Skye Adası'ndan gelen deniz esintili ve hafif dumanlı bir single malt viskidir. Narenciye, baharat ve hafif tatlılık notalarıyla dengeli ve keyifli bir içim sunar.",
    image: "/images/wines/talisker.jpg",
    price: "Single Malt",
  },
  {
    id: 18,
    name: "Johnnie Walker Black Label",
    category: "Özel Koleksiyon",
    description: "Johnnie Walker Black Label, 12 yıllık seçkin İskoç viskilerinden harmanlanarak oluşturulmuş, zengin ve dengeli bir lezzet sunar. Dumanlı, vanilyalı ve meyvemsi notaların kusursuz uyumuyla sofistike bir içim deneyimi sağlar.",
    image: "/images/wines/blacklabel.jpg",
    price: "Blended",
  },
];

export const categories = [
  "Signature Cocktails",
  "Klasik Kokteyller",
  "Şaraplar",
  "Özel Koleksiyon",
];
