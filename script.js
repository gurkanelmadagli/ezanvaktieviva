const VAKITLER = ["Sabah", "Öğle", "İkindi", "Akşam", "Yatsı", "Vitir"];
const DEPOLAMA_ANAHTARI = "kaza_namazi_sayaclari_v1";
const SECILI_IL_ANAHTARI = "secili_il_v1";
const AKTIF_MENU_ANAHTARI = "aktif_menu_v1";
const SON_BILDIRIM_ZAMANI_ANAHTARI = "son_ogut_bildirim_zamani_v1";
const IKI_SAAT_MS = 2 * 60 * 60 * 1000;
const BES_SAAT_MS = 5 * 60 * 60 * 1000;
const SECILI_SURE_ANAHTARI = "secili_sure_v1";
const SECILI_DIL_ANAHTARI = "secili_dil_v1";
const UYGULAMA_AYARLARI_ANAHTARI = "uygulama_ayarlari_v1";
const VAKITLER_ONBELLEK_ANAHTARI = "ezan_vakit_onbellek_v1";
const VAKITLER_GPS_ONBELLEK_ANAHTARI = "ezan_vakit_gps_onbellek_v1";
const SON_HADIS_BILDIRIM_GUNU_ANAHTARI = "son_hadis_bildirim_gunu_v1";
const NAMAZ_VAKTI_ARALIK_MS = 40 * 60 * 1000;
const EZAN_HATIRLATMA_DEPOLAMA_ON_EKI = "ezan_hat_";
/** Hatırlatma anı ile çarpan kontrol arası gecikmelerde kaçırılmasın (depo anahtarı tek sefer) */
const EZAN_HATIRLATMA_YAKALAMA_MS = 5 * 60 * 1000;
/** Yerel planlı bildirim kimlik aralığı (iptal/yenileme için) */
const PLANLI_BILDIRIM_ID_MIN = 9100000;
const PLANLI_BILDIRIM_ID_MAX = 9109999;
const PLANLI_GUN_SAYISI = 14;
const PLANLI_ID_EZAN_BAS = 9100000;
const PLANLI_ID_HADIS_BAS = 9105000;
const PLANLI_ID_CUMA_BAS = 9105200;
const PLANLI_ID_OGUT_BAS = 9105400;
const PLANLI_HADIS_SAAT = 9;
const PLANLI_CUMA_SAAT = 9;
/** Takvim API yoksa bugünkü vakitlerle kaç gün yedek planlansın (yarın saatleri küçük sapma gösterebilir). */
const PLANLI_EZAN_YEDEK_GUN = 3;
/** Android 8+: kanal yoksa zamanlı bildirim hiç gösterilmez (Capacitor şeması). */
const YEREL_BILDIRIM_ANDROID_KANAL_ID = "ezan_vakti_hatirlatma";
let yerelBildirimKanaliHazir = false;
const ILLER = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya",
  "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik",
  "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum",
  "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir",
  "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul",
  "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis",
  "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa",
  "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye",
  "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Sivas", "Şırnak",
  "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
];
const EZAN_GOSTERIM_SIRASI = [
  { etiket: "Sabah", alan: "Fajr" },
  { etiket: "Güneş", alan: "Sunrise" },
  { etiket: "Öğle", alan: "Dhuhr" },
  { etiket: "İkindi", alan: "Asr" },
  { etiket: "Akşam", alan: "Maghrib" },
  { etiket: "Yatsı", alan: "Isha" }
];
const VAKIT_IKONLARI = {
  Sabah: "🌅",
  Öğle: "☀️",
  İkindi: "🌤️",
  Akşam: "🌇",
  Yatsı: "🌙",
  Vitir: "✨"
};
const KABE_KONUMU = { lat: 21.4225, lon: 39.8262 };
const HADIS_SOZLERI_DIL = {
  tr: [
    "Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz, nefret ettirmeyiniz.",
    "Amellerin Allah'a en sevimlisi az da olsa devamlı olanıdır.",
    "Allah sizin suretlerinize değil, kalplerinize ve amellerinize bakar.",
    "Bir iyilik yap, denize at; balık bilmezse Halik bilir.",
    "Sabır acıdır, meyvesi tatlıdır.",
    "Güzel ahlak, terazide en ağır gelen iyiliktir.",
    "İnsanların en hayırlısı, insanlara faydalı olandır.",
    "Dua müminin silahıdır."
  ],
  en: [
    "Make things easy, not difficult; give glad tidings and do not drive people away.",
    "The deeds most beloved to Allah are those done consistently, even if small.",
    "Allah looks at your hearts and deeds, not your appearances.",
    "Do a good deed and cast it into the sea: the fish may not know, but the Creator does.",
    "Patience is bitter, but its fruit is sweet.",
    "Good character is the heaviest thing on the scale.",
    "The best of people are those who benefit others.",
    "Supplication is the believer's weapon."
  ],
  id: [
    "Permudahkan, jangan dipersulit; beri kabar gembira, jangan membuat orang menjauh.",
    "Amal yang paling Allah cintai adalah yang dilakukan terus-menerus, meski sedikit.",
    "Allah melihat hati dan amalmu, bukan penampilanmu.",
    "Kerjakan kebaikan dan lemparkan ke laut: ikan mungkin tidak tahu, tetapi Pencipta tahu.",
    "Kesabaran pahit, buahnya manis.",
    "Akhlak mulia adalah yang paling berat di timbangan.",
    "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia.",
    "Doa adalah senjata orang beriman."
  ],
  ar: [
    "يسّروا ولا تعسّروا، وبشّروا ولا تنفّروا.",
    "أحبّ الأعمال إلى الله أدومها وإن قلّ.",
    "إنّ الله لا ينظر إلى صوركم ولكن ينظر إلى قلوبكم وأعمالكم.",
    "اعمل معروفًا واضرب به البحر: لا يعلم السمك، ويعلم الخالق.",
    "الصبر مرّ وثمره حلو.",
    "أثقل شيء في الميزان حسن الخلق.",
    "خير الناس أنفعهم للناس.",
    "الدعاء سلاح المؤمن."
  ]
};
const OGUT_BILDIRIMLERI_DIL = {
  tr: [
    "Namazını vaktinde kılmaya niyet et, niyet hayrın başlangıcıdır.",
    "Günün içinde kısa bir tefekkür molası ver, kalp huzur bulur.",
    "Bir kişiye tebessüm etmek de sadakadır, unutma.",
    "Bugün bir ayet veya hadis öğrenmeye vakit ayır.",
    "Zikri artır, kalbin sakinleşsin.",
    "İyiliği gizli yapmak ihlası güçlendirir."
  ],
  en: [
    "Intend to pray on time; intention is where good begins.",
    "Take a short moment of reflection in your day; the heart finds calm.",
    "Smiling at someone is also charity.",
    "Set aside time today to learn a verse or hadith.",
    "Increase remembrance; your heart settles.",
    "Doing good in secret strengthens sincerity."
  ],
  id: [
    "Niatkan shalat tepat waktu; niat adalah awal kebaikan.",
    "Luangkan sejenak merenung di hari ini; hati menjadi tenang.",
    "Tersenyum pada seseorang juga sedekah.",
    "Sisihkan waktu hari ini untuk mempelajari satu ayat atau hadis.",
    "Perbanyak zikir; hatimu menjadi damai.",
    "Berbuat baik secara diam-diam memperkuat ikhlas."
  ],
  ar: [
    "انوِ صلاتك في وقتها؛ النية بداية الخير.",
    "خذ لحظة تفكّر قصيرة في يومك؛ يطمئن القلب.",
    "ابتسامتك في وجه أخيك صدقة.",
    "خصّص وقتًا اليوم لتتعلم آية أو حديثًا.",
    "أكثر من الذكر؛ يسكن قلبك.",
    "الإحسان في السر يقوّي الإخلاص."
  ]
};

function hadisSozleriSeciliListe() {
  const l = HADIS_SOZLERI_DIL[seciliDil];
  return Array.isArray(l) && l.length > 0 ? l : HADIS_SOZLERI_DIL.tr;
}

function ogutBildirimleriSeciliListe() {
  const l = OGUT_BILDIRIMLERI_DIL[seciliDil];
  return Array.isArray(l) && l.length > 0 ? l : OGUT_BILDIRIMLERI_DIL.tr;
}

function ezanVakitBildirimEtiketi(alan) {
  const map = {
    Fajr: "vakitBildirimFajr",
    Sunrise: "vakitBildirimSunrise",
    Dhuhr: "vakitBildirimDhuhr",
    Asr: "vakitBildirimAsr",
    Maghrib: "vakitBildirimMaghrib",
    Isha: "vakitBildirimIsha"
  };
  const anahtar = map[alan];
  return anahtar ? metinAl(anahtar) : String(alan);
}
const DIL_BAYRAK_YOLLARI = {
  tr: "icons/flags/tr.svg",
  id: "icons/flags/id.svg",
  en: "icons/flags/gb.svg",
  ar: "icons/flags/sa.svg"
};
const DIL_METINLERI = {
  tr: {
    appBaslik: "Ezan Vakitleri ve Kaza Takip",
    appAciklama: "Bulunduğun ili seç, güncel vakitleri gör, kazalarını takip et.",
    tabEzan: "🕌 Ezan",
    tabKuran: "📖 Kur'an",
    tabKible: "🧭 Kıble",
    tabKaza: "📿 Kaza Namazları",
    ezanBaslik: "Bugünün Ezan Vakitleri",
    ilEtiket: "İl:",
    yenileBtn: "Yenile",
    sonrakiVakitEtiket: "Sonraki vakit",
    hadisBaslik: "Günün Hadisi",
    bildirimIzinBtn: "Bildirimleri Aç",
    kibleBaslik: "Kıble Bulucu",
    kibleAltBaslik: "Kıble Yönünü Bul",
    kibleBulBtn: "Konumumdan Bul",
    kalibrasyonBaslik: "Kalibrasyon İpucu",
    kuranBaslik: "Kur'an Oku",
    sureEtiket: "Sure:",
    sureYukleBtn: "Yükle",
    kazaBaslik: "Kaza Namazı Takibi",
    kazaKaydetBtn: "Kaydet",
    kazaTemizleBtn: "Temizle",
    dilBaslik: "Dil Seçimi",
    dilEtiket: "Dil:",
    dilButonEtiket: "Dil",
    gizlilikPolitikasi: "Gizlilik politikası",
    tabAyarlar: "⚙️ Ayarlar",
    ayarlarBaslik: "Ayarlar",
    ayarlarAciklama:
      "Bildirimler için önce Ezan sekmesindeki “Bildirimleri Aç” ile izin ver.",
    ayarSessizEtiket: "Vakitlerde otomatik sessize alma",
    ayarSessizAlt: "Namaz vakti aralığında bildirimler sessiz gönderilir.",
    ayarKonumEtiket: "Konum",
    ayarKonumAlt: "Kıble bulucu için konum kullanımına izin verir.",
    ayarHadisEtiket: "Günün Hadisi bildirimleri",
    ayarHadisAlt: "Her gün bir kez günün hadisini bildirir.",
    ayarEzanOnceEtiket: "Ezan vakitlerinden önce bildirim",
    ayarEzanOnceAlt:
      "Seçtiğin dakika kadar önce (ör. 20 dk) hatırlatma kurulur. Uygulama kapalıyken bildirim yalnızca Play Store / APK ile kurulan Android uygulamasında çalışır; sitede veya tarayıcıda açınca kapalıyken gelmez. APK’da: bildirim izni + Android 14/15’te tam alarm izni + vakitlerin en az bir kez yüklenmesi gerekir.",
    ayarEzanKapali: "Kapalı",
    ayarEzanDkOnce: "{n} dakika önce",
    ayarTemaEtiket: "Görünüm teması",
    ayarTemaAlt:
      "Otomatik: yatsı ile imsak arası koyu, diğer zamanlar açık. İsterseniz her zaman açık veya koyu seçebilirsiniz.",
    ayarTemaOtomatik: "Otomatik (vakitlere göre)",
    ayarTemaAcik: "Açık tema",
    ayarTemaKoyu: "Koyu tema",
    kibleKonumKapali: "Konum ayarlarda kapalı. Açmak için Ayarlar sekmesinden Konum’u etkinleştir.",
    kibleKonumAliniyor: "Konum alınıyor…",
    konumIzniRed:
      "Konum izni verilmedi veya tarayıcıda engelli. Adres çubuğundaki kilit / site ayarlarından konuma izin verin.",
    konumKaynakYok: "Konum kaynağı kullanılamıyor. GPS’i açıp açık alanda tekrar deneyin.",
    konumZamanAsimi: "Konum zaman aşımına uğradı. Bir süre sonra tekrar deneyin.",
    konumHttpsGerekli: "Konum yalnızca güvenli bağlantıda (https) çalışır.",
    konumDestekYok: "Bu cihaz veya tarayıcı konumu desteklemiyor.",
    konumGenelHata: "Konum alınamadı. İzinleri ve bağlantınızı kontrol edin.",
    hadisBildirimBaslik: "Günün Hadisi",
    ezanHatirlatmaBaslik: "Namaz vakti yaklaşıyor",
    maneviOgutBildirimBaslik: "Manevi hatırlatma",
    vakitBildirimFajr: "Sabah",
    vakitBildirimSunrise: "Güneş",
    vakitBildirimDhuhr: "Öğle",
    vakitBildirimAsr: "İkindi",
    vakitBildirimMaghrib: "Akşam",
    vakitBildirimIsha: "Yatsı",
    konumdanVakitBtn: "Konumdan al",
    paylasVakitlerBtn: "Vakitleri paylaş",
    paylasHadisBtn: "Paylaş",
    cevrimdisiBanner: "Çevrimdışı: Son kaydedilen bugünün vakitleri gösteriliyor.",
    durumCevrimdisi: "{il} · son kayıtlı vakitler (ağ yok)",
    durumCevrimdisiGps: "Son konuma göre kayıtlı vakitler (ağ yok)",
    durumYukleniyor: "{il} için vakitler yükleniyor...",
    durumVakitGunluk: "{il} için bugünün ezan vakitleri",
    durumVakitHata: "Vakitler alınamadı. Bağlantını kontrol edip Yenile’ye bas.",
    durumKonumVakit: "Konumunuza göre bugünün vakitleri güncellendi.",
    durumKonumAliniyor: "Konum ve vakitler alınıyor...",
    paylasVakitBaslik: "Namaz vakitleri",
    paylasKonumSatiri: "(Konuma göre)",
    ayarManeviOgutEtiket: "Manevi öğüt bildirimleri",
    ayarManeviOgutAlt:
      "Yaklaşık 5 saatte bir kısa hatırlatma — uygulama açık veya arka plandayken çalışır.",
    ayarCumaEtiket: "Cuma sabahı kutlama",
    ayarCumaAlt: "Cuma günü sabah saatlerinde bir kez hayırlı cumalar bildirimi.",
    ayarBildirimNotu:
      "Sunucudan anlık push için ayrı altyapı gerekir; bu uygulama izin verildiğinde cihazda zamanlanmış hatırlatmalar kullanır.",
    ayarKisayolBaslik: "Ana ekran kısayolu (Android)",
    ayarKisayolMetin:
      "Sekmeler ekranın üstündedir. Tarayıcı menüsünden “Ana ekrana ekle” deyin; ikona uzun basınca Kıble, Vakitler, Kur’an ve Ayarlar kısayolları çıkar.",
    ayarGuncellemeBaslik: "Güncellemeler",
    ayarGuncellemeAlt:
      "Web / PWA: sunucudaki yeni sürümü arar. Android mağaza uygulaması için güncellemeleri mağazadan yükleyin.",
    ayarGuncellemeBtn: "Güncellemeleri kontrol et",
    ayarGuncellemeYenileBtn: "Yenileyerek uygula",
    guncellemeKontrolEdiliyor: "Kontrol ediliyor…",
    guncellemeGuncel: "Yeni sürüm bulunamadı; uygulama güncel görünüyor.",
    guncellemeHazirYenile: "Yeni sürüm indirildi. Tamamlamak için yenileyin.",
    guncellemeSwYok:
      "Bu sürümde arka planda güncelleme denetimi yok (ör. yüklü Android uygulaması). Güncellemeler için uygulama mağazanızı kullanın.",
    guncellemeSwKayitYok: "Henüz kayıtlı servis çalışanı yok. Sayfayı bir kez yenileyip tekrar deneyin.",
    guncellemeHata: "Güncelleme kontrolü başarısız. Bağlantınızı kontrol edip tekrar deneyin.",
    bildirimDurumuAcik: "Bildirimler açık. Ayarlardan öğüt, Cuma ve hatırlatmaları yönetebilirsin.",
    bildirimDurumuIlk: "Bildirim izni verildi. Ayarlardan türleri seçebilirsin.",
    hayirliCumalarBaslik: "Hayırlı Cumalar",
    hayirliCumalarGovde: "Allah kabul etsin. Hayırlı ve bereketli bir Cuma dileriz.",
    bildirimDurumuDestekYok: "Bu cihaz bildirimleri desteklemiyor.",
    bildirimDurumuNativeKurulum:
      "Android bildirim eklentisi bu APK'da bulunmadi. Gelistirici olarak `npm install` + `npm run cap:sync` yapip uygulamayi yeniden derleyin.",
    bildirimDurumuKapali: "Bildirimler kapalı. Ezan sekmesinde Bildirimleri Aç’a dokun.",
    bildirimDurumuHata: "Bildirim gönderilemedi. Lütfen tekrar dene.",
    bildirimDurumuIzinsiz: "Bildirim izni verilmedi.",
    bildirimTestBaslik: "Bildirim testi",
    bildirimTestGovde: "Bildirimler aktif. Test bildirimi basariyla gonderildi.",
    bildirimTamAlarmUyariMetin:
      "Android 14/15: Ezan öncesi hatırlatma için “Alarmlar ve hatırlatmalar”da tam alarm izni gerekir. Açmazsanız hatırlatmalar gecikebilir veya uygulama kapalıyken gelmeyebilir.",
    bildirimTamAlarmBtn: "Tam alarm iznini aç",
    bildirimEzanPlaniYokVakit:
      "Ezan öncesi hatırlatma şu an zamanlanamadı. Ezan sekmesinde vakitleri yükleyin (Yenile veya konum), bildirim iznini verin; Android 14/15’te tam alarm iznini açın. Ardından bu süreyi tekrar seçin.",
    bildirimEzanSadeceAndroidApk:
      "Ezan öncesi hatırlatma, uygulama kapalıyken yalnızca yüklü Android uygulamasında çalışır. Tarayıcı veya sadece web sayfası kullanıyorsanız bu özellik devreye girmez.",
    bildirimZamanlamaHata:
      "Sistem bildirim zamanlamayı reddetti. Bildirim izni, tam alarm izni ve pil kısıtlamasını kontrol edin.",
    yuklemeEkran: "Yükleniyor…",
    uygulamaCikisOnay: "Uygulamadan çıkmak istiyor musunuz?"
  },
  en: {
    appBaslik: "Prayer Times and Qada Tracker",
    appAciklama: "Select your city, see prayer times, and track your qada prayers.",
    tabEzan: "🕌 Prayer",
    tabKuran: "📖 Quran",
    tabKible: "🧭 Qibla",
    tabKaza: "📿 Qada",
    ezanBaslik: "Today's Prayer Times",
    ilEtiket: "City:",
    yenileBtn: "Refresh",
    sonrakiVakitEtiket: "Next prayer",
    hadisBaslik: "Daily Hadith",
    bildirimIzinBtn: "Enable Notifications",
    kibleBaslik: "Qibla Finder",
    kibleAltBaslik: "Find Qibla Direction",
    kibleBulBtn: "Find with Location",
    kalibrasyonBaslik: "Calibration Tip",
    kuranBaslik: "Read Quran",
    sureEtiket: "Surah:",
    sureYukleBtn: "Load",
    kazaBaslik: "Qada Prayer Tracker",
    kazaKaydetBtn: "Save",
    kazaTemizleBtn: "Clear",
    dilBaslik: "Language",
    dilEtiket: "Language:",
    dilButonEtiket: "Lang",
    gizlilikPolitikasi: "Privacy policy",
    tabAyarlar: "⚙️ Settings",
    ayarlarBaslik: "Settings",
    ayarlarAciklama: 'Enable notifications first with “Enable Notifications” on the Prayer tab.',
    ayarSessizEtiket: "Auto silent during prayer times",
    ayarSessizAlt: "Notifications are sent silently during the prayer window.",
    ayarKonumEtiket: "Location",
    ayarKonumAlt: "Allows location for the Qibla finder.",
    ayarHadisEtiket: "Daily Hadith notifications",
    ayarHadisAlt: "Sends today’s hadith once per day.",
    ayarEzanOnceEtiket: "Reminder before prayer times",
    ayarEzanOnceAlt:
      "Sets a reminder this many minutes before each prayer (e.g. 20 min). When the app is fully closed, this only works in the installed Android app (APK/Play), not in the website or browser alone. There you need notification permission, exact alarms on Android 14/15, and prayer times loaded at least once.",
    ayarEzanKapali: "Off",
    ayarEzanDkOnce: "{n} min before",
    ayarTemaEtiket: "Appearance",
    ayarTemaAlt:
      "Automatic follows prayer times (dark from Isha until Fajr). You can also lock light or dark.",
    ayarTemaOtomatik: "Automatic (by prayer times)",
    ayarTemaAcik: "Light theme",
    ayarTemaKoyu: "Dark theme",
    kibleKonumKapali: "Location is off in Settings. Turn on Location in the Settings tab.",
    kibleKonumAliniyor: "Getting location…",
    konumIzniRed:
      "Location permission was denied or blocked. Allow location in the site settings (lock icon in the address bar).",
    konumKaynakYok: "Location is unavailable. Turn on GPS and try again in an open area.",
    konumZamanAsimi: "Location request timed out. Try again in a moment.",
    konumHttpsGerekli: "Location requires a secure connection (https).",
    konumDestekYok: "This browser or device does not support geolocation.",
    konumGenelHata: "Could not get location. Check permissions and connection.",
    hadisBildirimBaslik: "Daily Hadith",
    ezanHatirlatmaBaslik: "Prayer time approaching",
    maneviOgutBildirimBaslik: "Spiritual reminder",
    vakitBildirimFajr: "Fajr",
    vakitBildirimSunrise: "Sunrise",
    vakitBildirimDhuhr: "Dhuhr",
    vakitBildirimAsr: "Asr",
    vakitBildirimMaghrib: "Maghrib",
    vakitBildirimIsha: "Isha",
    konumdanVakitBtn: "Use location",
    paylasVakitlerBtn: "Share times",
    paylasHadisBtn: "Share",
    cevrimdisiBanner: "Offline: showing the last saved prayer times for today.",
    durumCevrimdisi: "{il} · cached times (no network)",
    durumCevrimdisiGps: "Cached times for your last location (offline)",
    durumYukleniyor: "Loading times for {il}...",
    durumVakitGunluk: "Today’s prayer times for {il}",
    durumVakitHata: "Could not load times. Check your connection and tap Refresh.",
    durumKonumVakit: "Today’s times updated for your location.",
    durumKonumAliniyor: "Getting location and times...",
    paylasVakitBaslik: "Prayer times",
    paylasKonumSatiri: "(By location)",
    ayarManeviOgutEtiket: "Spiritual reminder notifications",
    ayarManeviOgutAlt: "About every 5 hours while the app is open or in the background.",
    ayarCumaEtiket: "Friday morning greeting",
    ayarCumaAlt: "Once on Friday morning — a Jumu’ah message.",
    ayarBildirimNotu:
      "True server push needs backend infrastructure; this app uses scheduled reminders on your device when allowed.",
    ayarKisayolBaslik: "Home screen shortcut (Android)",
    ayarKisayolMetin:
      "Tabs are at the top. Use “Add to Home screen” in the browser menu. Long-press the icon for Qibla, Times, Quran, and Settings shortcuts.",
    ayarGuncellemeBaslik: "Updates",
    ayarGuncellemeAlt:
      "Web / PWA: checks the server for a new version. For the Play Store app, install updates from the store.",
    ayarGuncellemeBtn: "Check for updates",
    ayarGuncellemeYenileBtn: "Reload to apply",
    guncellemeKontrolEdiliyor: "Checking…",
    guncellemeGuncel: "No update found; you appear to be on the latest version.",
    guncellemeHazirYenile: "A new version was downloaded. Reload to finish.",
    guncellemeSwYok:
      "Background update checks are not available in this build (e.g. installed Android app). Use your app store for updates.",
    guncellemeSwKayitYok: "No service worker yet. Refresh the page once, then try again.",
    guncellemeHata: "Update check failed. Check your connection and try again.",
    bildirimDurumuAcik: "Notifications on. Manage reminders in Settings.",
    bildirimDurumuIlk: "Permission granted. Choose notification types in Settings.",
    hayirliCumalarBaslik: "Jumu’ah Mubarak",
    hayirliCumalarGovde: "May Allah accept from you. Have a blessed Friday.",
    bildirimDurumuDestekYok: "This device does not support notifications.",
    bildirimDurumuNativeKurulum:
      "Android notification plugin is missing in this APK. As developer, run `npm install` + `npm run cap:sync` and rebuild the app.",
    bildirimDurumuKapali: "Notifications are off. Tap Enable Notifications on the Prayer tab.",
    bildirimDurumuHata: "Could not send notification. Please try again.",
    bildirimDurumuIzinsiz: "Notification permission was not granted.",
    bildirimTestBaslik: "Notification test",
    bildirimTestGovde: "Notifications are active. Test notification sent successfully.",
    bildirimTamAlarmUyariMetin:
      "Android 14/15: For prayer reminders before each time, allow “Alarms & reminders” (exact alarms). Without it, reminders may be late or not fire when the app is closed.",
    bildirimTamAlarmBtn: "Open exact alarm settings",
    bildirimEzanPlaniYokVakit:
      "Prayer reminders could not be scheduled. Load times on the Prayer tab (Refresh or location), allow notifications, and on Android 14/15 allow exact alarms. Then pick the minutes again.",
    bildirimEzanSadeceAndroidApk:
      "Reminders before prayer when the app is closed only work in the installed Android app. They do not run from the browser or a web tab alone.",
    bildirimZamanlamaHata:
      "The system rejected scheduling. Check notification permission, exact alarms, and battery restrictions.",
    yuklemeEkran: "Loading…",
    uygulamaCikisOnay: "Do you want to exit the app?"
  },
  id: {
    appBaslik: "Waktu Salat dan Pelacak Qada",
    appAciklama: "Pilih kota, lihat waktu salat, dan pantau salat qada.",
    tabEzan: "🕌 Salat",
    tabKuran: "📖 Quran",
    tabKible: "🧭 Kiblat",
    tabKaza: "📿 Qada",
    ezanBaslik: "Waktu Salat Hari Ini",
    ilEtiket: "Kota:",
    yenileBtn: "Muat Ulang",
    sonrakiVakitEtiket: "Salat berikutnya",
    hadisBaslik: "Hadis Harian",
    bildirimIzinBtn: "Aktifkan Notifikasi",
    kibleBaslik: "Pencari Kiblat",
    kibleAltBaslik: "Temukan Arah Kiblat",
    kibleBulBtn: "Cari dari Lokasi",
    kalibrasyonBaslik: "Tips Kalibrasi",
    kuranBaslik: "Baca Quran",
    sureEtiket: "Surah:",
    sureYukleBtn: "Muat",
    kazaBaslik: "Pelacak Salat Qada",
    kazaKaydetBtn: "Simpan",
    kazaTemizleBtn: "Bersihkan",
    dilBaslik: "Pilih Bahasa",
    dilEtiket: "Bahasa:",
    dilButonEtiket: "Bahasa",
    gizlilikPolitikasi: "Kebijakan privasi",
    tabAyarlar: "⚙️ Pengaturan",
    ayarlarBaslik: "Pengaturan",
    ayarlarAciklama: 'Aktifkan notifikasi lewat “Aktifkan Notifikasi” di tab Salat.',
    ayarSessizEtiket: "Bisukan otomatis saat waktu salat",
    ayarSessizAlt: "Notifikasi dikirim tanpa suara selama jendela waktu salat.",
    ayarKonumEtiket: "Lokasi",
    ayarKonumAlt: "Mengizinkan lokasi untuk pencari kiblat.",
    ayarHadisEtiket: "Notifikasi hadits harian",
    ayarHadisAlt: "Mengirim hadits hari ini sekali sehari.",
    ayarEzanOnceEtiket: "Pengingat sebelum waktu salat",
    ayarEzanOnceAlt:
      "Pengingat X menit sebelum setiap waktu. Saat aplikasi benar-benar tertutup, ini hanya jalan di aplikasi Android terpasang (APK/Play), bukan di situs web saja. Butuh izin notifikasi, alarm tepat (Android 14/15), dan waktu salat sudah dimuat sekali.",
    ayarEzanKapali: "Mati",
    ayarEzanDkOnce: "{n} menit sebelum",
    ayarTemaEtiket: "Tema tampilan",
    ayarTemaAlt:
      "Otomatis mengikuti waktu salat (gelap dari Isya hingga Subuh). Anda juga bisa mengunci terang atau gelap.",
    ayarTemaOtomatik: "Otomatis (menurut waktu salat)",
    ayarTemaAcik: "Tema terang",
    ayarTemaKoyu: "Tema gelap",
    kibleKonumKapali: "Lokasi dimatikan di Pengaturan. Aktifkan Lokasi di tab Pengaturan.",
    kibleKonumAliniyor: "Mengambil lokasi…",
    konumIzniRed:
      "Izin lokasi ditolak atau diblokir. Izinkan lokasi di pengaturan situs (ikon gembok di bilah alamat).",
    konumKaynakYok: "Lokasi tidak tersedia. Nyalakan GPS dan coba lagi di area terbuka.",
    konumZamanAsimi: "Permintaan lokasi habis waktu. Coba lagi sebentar lagi.",
    konumHttpsGerekli: "Lokasi memerlukan koneksi aman (https).",
    konumDestekYok: "Peramban atau perangkat ini tidak mendukung geolokasi.",
    konumGenelHata: "Lokasi tidak bisa diambil. Periksa izin dan koneksi.",
    hadisBildirimBaslik: "Hadits Hari Ini",
    ezanHatirlatmaBaslik: "Waktu salat mendekat",
    maneviOgutBildirimBaslik: "Pengingat spiritual",
    vakitBildirimFajr: "Subuh",
    vakitBildirimSunrise: "Terbit",
    vakitBildirimDhuhr: "Dzuhur",
    vakitBildirimAsr: "Ashar",
    vakitBildirimMaghrib: "Maghrib",
    vakitBildirimIsha: "Isya",
    konumdanVakitBtn: "Dari lokasi",
    paylasVakitlerBtn: "Bagikan waktu",
    paylasHadisBtn: "Bagikan",
    cevrimdisiBanner: "Offline: menampilkan waktu terakhir yang disimpan untuk hari ini.",
    durumCevrimdisi: "{il} · waktu tersimpan (tanpa jaringan)",
    durumCevrimdisiGps: "Waktu terakhir menurut lokasi Anda (offline)",
    durumYukleniyor: "Memuat waktu untuk {il}...",
    durumVakitGunluk: "Waktu salat hari ini — {il}",
    durumVakitHata: "Waktu tidak bisa dimuat. Periksa koneksi dan ketuk Muat Ulang.",
    durumKonumVakit: "Waktu hari ini diperbarui menurut lokasi Anda.",
    durumKonumAliniyor: "Mengambil lokasi dan waktu...",
    paylasVakitBaslik: "Waktu salat",
    paylasKonumSatiri: "(Menurut lokasi)",
    ayarManeviOgutEtiket: "Notifikasi pengingat rohani",
    ayarManeviOgutAlt: "Sekitar setiap 5 jam saat aplikasi terbuka atau di latar belakang.",
    ayarCumaEtiket: "Ucapan Jumat pagi",
    ayarCumaAlt: "Sekali pada Jumat pagi — pesan Jumu’ah.",
    ayarBildirimNotu:
      "Push sungguhan dari server memerlukan backend; aplikasi ini memakai pengingat terjadwal di perangkat.",
    ayarKisayolBaslik: "Pintasan layar beranda (Android)",
    ayarKisayolMetin:
      "Tab ada di atas. Gunakan “Tambahkan ke Layar beranda” di menu browser. Tekan lama ikon untuk pintasan Kiblat, Waktu, Quran, dan Pengaturan.",
    ayarGuncellemeBaslik: "Pembaruan",
    ayarGuncellemeAlt:
      "Web / PWA: memeriksa versi baru di server. Untuk aplikasi toko, perbarui lewat toko aplikasi.",
    ayarGuncellemeBtn: "Periksa pembaruan",
    ayarGuncellemeYenileBtn: "Muat ulang untuk menerapkan",
    guncellemeKontrolEdiliyor: "Memeriksa…",
    guncellemeGuncel: "Tidak ada pembaruan; Anda sudah memakai versi terbaru.",
    guncellemeHazirYenile: "Versi baru diunduh. Muat ulang untuk menyelesaikan.",
    guncellemeSwYok:
      "Pemeriksaan pembaruan latar tidak tersedia di build ini (mis. aplikasi Android terpasang). Gunakan toko aplikasi.",
    guncellemeSwKayitYok: "Service worker belum terdaftar. Segarkan halaman lalu coba lagi.",
    guncellemeHata: "Pemeriksaan gagal. Periksa koneksi dan coba lagi.",
    bildirimDurumuAcik: "Notifikasi aktif. Atur di Pengaturan.",
    bildirimDurumuIlk: "Izin diberikan. Pilih jenis notifikasi di Pengaturan.",
    hayirliCumalarBaslik: "Jumu’ah Mubarak",
    hayirliCumalarGovde: "Semoga Allah menerima. Semoga Jumat Anda diberkahi.",
    bildirimDurumuDestekYok: "Perangkat ini tidak mendukung notifikasi.",
    bildirimDurumuNativeKurulum:
      "Plugin notifikasi Android tidak ada di APK ini. Sebagai pengembang, jalankan `npm install` + `npm run cap:sync` lalu build ulang aplikasi.",
    bildirimDurumuKapali: "Notifikasi mati. Ketuk Aktifkan Notifikasi di tab Salat.",
    bildirimDurumuHata: "Notifikasi gagal. Coba lagi.",
    bildirimDurumuIzinsiz: "Izin notifikasi tidak diberikan.",
    bildirimTestBaslik: "Tes notifikasi",
    bildirimTestGovde: "Notifikasi aktif. Notifikasi uji berhasil dikirim.",
    bildirimTamAlarmUyariMetin:
      "Android 14/15: Untuk pengingat sebelum waktu salat, izinkan “Alarm & pengingat” (alarm tepat waktu). Tanpa ini, pengingat bisa terlambat atau tidak muncul saat aplikasi tertutup.",
    bildirimTamAlarmBtn: "Buka pengaturan alarm tepat",
    bildirimEzanPlaniYokVakit:
      "Pengingat sebelum salat tidak terjadwal. Muat waktu di tab Salat, izinkan notifikasi, dan di Android 14/15 izinkan alarm tepat. Lalu pilih menit lagi.",
    bildirimEzanSadeceAndroidApk:
      "Pengingat saat aplikasi tertutup hanya di aplikasi Android terpasang. Tidak jalan dari browser saja.",
    bildirimZamanlamaHata:
      "Sistem menolak penjadwalan. Periksa izin notifikasi, alarm tepat, dan pembatasan baterai.",
    yuklemeEkran: "Memuat…",
    uygulamaCikisOnay: "Keluar dari aplikasi?"
  },
  ar: {
    appBaslik: "مواقيت الصلاة وتتبع القضاء",
    appAciklama: "اختر مدينتك وتابع المواقيت وسجل صلوات القضاء.",
    tabEzan: "🕌 الصلاة",
    tabKuran: "📖 القرآن",
    tabKible: "🧭 القبلة",
    tabKaza: "📿 القضاء",
    ezanBaslik: "مواقيت اليوم",
    ilEtiket: "المدينة:",
    yenileBtn: "تحديث",
    sonrakiVakitEtiket: "الصلاة القادمة",
    hadisBaslik: "حديث اليوم",
    bildirimIzinBtn: "تفعيل الإشعارات",
    kibleBaslik: "محدد القبلة",
    kibleAltBaslik: "تحديد اتجاه القبلة",
    kibleBulBtn: "تحديد بالموقع",
    kalibrasyonBaslik: "نصيحة المعايرة",
    kuranBaslik: "قراءة القرآن",
    sureEtiket: "السورة:",
    sureYukleBtn: "تحميل",
    kazaBaslik: "متابعة صلاة القضاء",
    kazaKaydetBtn: "حفظ",
    kazaTemizleBtn: "مسح",
    dilBaslik: "اختيار اللغة",
    dilEtiket: "اللغة:",
    dilButonEtiket: "لغة",
    gizlilikPolitikasi: "سياسة الخصوصية",
    tabAyarlar: "⚙️ الإعدادات",
    ayarlarBaslik: "الإعدادات",
    ayarlarAciklama: "فعّل الإشعارات أولاً عبر «تفعيل الإشعارات» في تبويب الصلاة.",
    ayarSessizEtiket: "كتم تلقائي أثناء أوقات الصلاة",
    ayarSessizAlt: "تُرسل الإشعارات بصمت خلال فترة وقت الصلاة.",
    ayarKonumEtiket: "الموقع",
    ayarKonumAlt: "السماح بالموقع لمحدد القبلة.",
    ayarHadisEtiket: "إشعارات حديث اليوم",
    ayarHadisAlt: "إرسال حديث اليوم مرة واحدة يومياً.",
    ayarEzanOnceEtiket: "تذكير قبل أوقات الأذان",
    ayarEzanOnceAlt:
      "يُجدول تذكيرًا قبل كل صلاة بعدد الدقائق (مثل 20). مع إغلاق التطبيق بالكامل يعمل فقط في تطبيق أندرويد المثبّت، لا من المتصفح وحده. يلزم إذن الإشعارات والمنبّه الدقيق (14/15) وتحميل المواقيت مرة واحدة على الأقل.",
    ayarEzanKapali: "إيقاف",
    ayarEzanDkOnce: "قبل {n} دقيقة",
    ayarTemaEtiket: "مظهر التطبيق",
    ayarTemaAlt:
      "تلقائي يتبع أوقات الصلاة (داكن من العشاء حتى الفجر). يمكنك أيضاً تثبيت الوضع الفاتح أو الداكن.",
    ayarTemaOtomatik: "تلقائي (حسب أوقات الصلاة)",
    ayarTemaAcik: "سمة فاتحة",
    ayarTemaKoyu: "سمة داكنة",
    kibleKonumKapali: "الموقع معطّل في الإعدادات. فعّل الموقع من تبويب الإعدادات.",
    kibleKonumAliniyor: "جاري جلب الموقع…",
    konumIzniRed:
      "لم يُمنح إذن الموقع أو حُظر. اسمح بالموقع من إعدادات الموقع (أيقونة القفل في شريط العنوان).",
    konumKaynakYok: "الموقع غير متاح. شغّل GPS وحاول مجدداً في مكان مفتوح.",
    konumZamanAsimi: "انتهت مهلة طلب الموقع. أعد المحاولة بعد قليل.",
    konumHttpsGerekli: "الموقع يعمل فقط على اتصال آمن (https).",
    konumDestekYok: "المتصفح أو الجهاز لا يدعم تحديد الموقع.",
    konumGenelHata: "تعذر الحصول على الموقع. تحقق من الأذونات والاتصال.",
    hadisBildirimBaslik: "حديث اليوم",
    ezanHatirlatmaBaslik: "اقترب وقت الصلاة",
    maneviOgutBildirimBaslik: "تذكير روحي",
    vakitBildirimFajr: "الفجر",
    vakitBildirimSunrise: "الشروق",
    vakitBildirimDhuhr: "الظهر",
    vakitBildirimAsr: "العصر",
    vakitBildirimMaghrib: "المغرب",
    vakitBildirimIsha: "العشاء",
    konumdanVakitBtn: "بالموقع",
    paylasVakitlerBtn: "مشاركة المواقيت",
    paylasHadisBtn: "مشاركة",
    cevrimdisiBanner: "دون اتصال: عرض آخر مواقيت محفوظة لليوم.",
    durumCevrimdisi: "{il} · مواقيت محفوظة (لا يوجد شبكة)",
    durumCevrimdisiGps: "آخر مواقيت حسب موقعك (دون اتصال)",
    durumYukleniyor: "جاري تحميل مواقيت {il}...",
    durumVakitGunluk: "مواقيت اليوم — {il}",
    durumVakitHata: "تعذر تحميل المواقيت. تحقق من الاتصال واضغط تحديث.",
    durumKonumVakit: "تم تحديث مواقيت اليوم حسب موقعك.",
    durumKonumAliniyor: "جاري جلب الموقع والمواقيت...",
    paylasVakitBaslik: "مواقيت الصلاة",
    paylasKonumSatiri: "(حسب الموقع)",
    ayarManeviOgutEtiket: "تذكيرات روحية",
    ayarManeviOgutAlt: "تقريباً كل 5 ساعات عند فتح التطبيق أو في الخلفية.",
    ayarCumaEtiket: "تهنئة صباح الجمعة",
    ayarCumaAlt: "مرة واحدة صباح الجمعة — رسالة مباركة.",
    ayarBildirimNotu:
      "الإشعارات الفورية من الخادم تحتاج بنية خلفية؛ هذا التطبيق يستخدم تذكيرات مجدولة على جهازك.",
    ayarKisayolBaslik: "اختصار الشاشة الرئيسية (أندرويد)",
    ayarKisayolMetin:
      "التبويبات في أعلى الشاشة. استخدم «إضافة إلى الشاشة الرئيسية» من قائمة المتصفح. اضغط مطولاً على الأيقونة لاختصارات القبلة والمواقيت والقرآن والإعدادات.",
    ayarGuncellemeBaslik: "التحديثات",
    ayarGuncellemeAlt:
      "الويب / PWA: يتحقق من إصدار جديد على الخادم. لتطبيق المتجر، حدّث من المتجر.",
    ayarGuncellemeBtn: "التحقق من التحديثات",
    ayarGuncellemeYenileBtn: "تحديث الصفحة للتطبيق",
    guncellemeKontrolEdiliyor: "جاري التحقق…",
    guncellemeGuncel: "لا يوجد تحديث؛ يبدو أنك تستخدم أحدث إصدار.",
    guncellemeHazirYenile: "تم تنزيل إصدار جديد. حدّث الصفحة لإكمال التحديث.",
    guncellemeSwYok:
      "لا يتوفر فحص تحديث في الخلفية في هذا الإصدار (مثل تطبيق أندرويد المثبت). استخدم متجر التطبيقات.",
    guncellemeSwKayitYok: "لا يوجد service worker بعد. حدّث الصفحة ثم أعد المحاولة.",
    guncellemeHata: "فشل التحقق من التحديث. تحقق من الاتصال وحاول مرة أخرى.",
    bildirimDurumuAcik: "الإشعارات مفعّلة. أدر الأنواع من الإعدادات.",
    bildirimDurumuIlk: "تم منح الإذن. اختر أنواع الإشعارات من الإعدادات.",
    hayirliCumalarBaslik: "جمعة مباركة",
    hayirliCumalarGovde: "تقبل الله منكم. جمعاً مباركاً.",
    bildirimDurumuDestekYok: "هذا الجهاز لا يدعم الإشعارات.",
    bildirimDurumuNativeKurulum:
      "مكوّن إشعارات أندرويد غير موجود في هذا الـAPK. كمطوّر شغّل `npm install` ثم `npm run cap:sync` وأعد بناء التطبيق.",
    bildirimDurumuKapali: "الإشعارات مغلقة. اضغط «تفعيل الإشعارات» في تبويب الصلاة.",
    bildirimDurumuHata: "تعذر إرسال الإشعار. حاول مرة أخرى.",
    bildirimDurumuIzinsiz: "لم يُمنح إذن الإشعارات.",
    bildirimTestBaslik: "اختبار الإشعارات",
    bildirimTestGovde: "الإشعارات مفعلة. تم إرسال إشعار الاختبار بنجاح.",
    bildirimTamAlarmUyariMetin:
      "أندرويد 14/15: لتذكير ما قبل المواقيت، اسمح بـ «التنبيهات والتذكيرات» (التنبيهات في الوقت الدقيق). بدون ذلك قد تتأخر التذكيرات أو لا تظهر عند إغلاق التطبيق.",
    bildirimTamAlarmBtn: "فتح إعدادات التنبيه الدقيق",
    bildirimEzanPlaniYokVakit:
      "تعذر جدولة تذكير ما قبل الصلاة. حمّل المواقيت من تبويب الصلاة، فعّل الإشعارات، وعلى أندرويد 14/15 فعّل المنبّهات الدقيقة. ثم اختر الدقائق من جديد.",
    bildirimEzanSadeceAndroidApk:
      "التذكير قبل الصلاة مع إغلاق التطبيق يعمل فقط في تطبيق أندرويد المثبّت، لا من المتصفح وحده.",
    bildirimZamanlamaHata:
      "رفض النظام الجدولة. تحقق من إذن الإشعارات والمنبّه الدقيق وتقييد البطارية.",
    yuklemeEkran: "جاري التحميل…",
    uygulamaCikisOnay: "هل تريد إغلاق التطبيق؟"
  }
};
let sayacIntervalId = null;
let bildirimIntervalId = null;
let planliBildirimGuncelleniyor = false;
let planliBildirimYenilemeIstendi = false;
let planliBildirimAppDinleyici = false;
let sonArkaPlanaPlanliZamani = 0;
let sonTimings = null;
let sonVakitlerKaynak = "il";
let yerelBildirimIdSayaci = 1;
let ilkVakitYuklemePromise = null;
let menuGeriYigini = [];
let androidGeriDinleyiciKayitli = false;
let androidGeriKayitSuruyor = false;
let androidGeriZamanlayiciId = null;
let tarihceGeriDinleyiciKayitli = false;
let kibleAcisi = null;
let cihazBasligi = null;
let kazaVeri = varsayilanVeri();
const kazaSayiAlanlari = {};
let seciliDil = localStorage.getItem(SECILI_DIL_ANAHTARI) || "tr";

function varsayilanVeri() {
  return VAKITLER.reduce((sonuc, vakit) => {
    sonuc[vakit] = 0;
    return sonuc;
  }, {});
}

function veriyiYukle() {
  const hamVeri = localStorage.getItem(DEPOLAMA_ANAHTARI);
  if (!hamVeri) {
    return varsayilanVeri();
  }

  try {
    const kayitliVeri = JSON.parse(hamVeri);
    const yeniVeri = varsayilanVeri();

    VAKITLER.forEach((vakit) => {
      const deger = Number(kayitliVeri[vakit]);
      yeniVeri[vakit] = Number.isFinite(deger) && deger >= 0 ? deger : 0;
    });

    return yeniVeri;
  } catch {
    return varsayilanVeri();
  }
}

function veriyiKaydet(veri) {
  localStorage.setItem(DEPOLAMA_ANAHTARI, JSON.stringify(veri));
}

function seciliIliYukle() {
  const kayitliIl = localStorage.getItem(SECILI_IL_ANAHTARI);
  return ILLER.includes(kayitliIl) ? kayitliIl : "İstanbul";
}

function seciliIliKaydet(il) {
  localStorage.setItem(SECILI_IL_ANAHTARI, il);
}

function aktifMenuyuYukle() {
  const menu = localStorage.getItem(AKTIF_MENU_ANAHTARI);
  return ["ezan", "kuran", "kible", "kaza", "ayarlar"].includes(menu) ? menu : "ezan";
}

function aktifMenuyuKaydet(menu) {
  localStorage.setItem(AKTIF_MENU_ANAHTARI, menu);
}

function varsayilanUygulamaAyarlari() {
  return {
    otomatikSessiz: false,
    konumKullan: true,
    gununHadisiBildirim: false,
    ezanHatirlatmaDk: 0,
    maneviOgutBildirim: true,
    cumaSabahiBildirim: false,
    temaTercihi: "otomatik"
  };
}

function uygulamaAyarlariOku() {
  try {
    const ham = localStorage.getItem(UYGULAMA_AYARLARI_ANAHTARI);
    if (!ham) {
      return varsayilanUygulamaAyarlari();
    }
    const kayit = JSON.parse(ham);
    const varsayilan = varsayilanUygulamaAyarlari();
    const dk = Number(kayit.ezanHatirlatmaDk);
    const dkGecerli = [0, 5, 10, 15, 20, 25, 30].includes(dk) ? dk : 0;
    const temaHam = kayit.temaTercihi;
    const temaGecerli = ["otomatik", "acik", "koyu"].includes(temaHam) ? temaHam : "otomatik";
    return {
      otomatikSessiz: Boolean(kayit.otomatikSessiz),
      konumKullan: kayit.konumKullan !== false,
      gununHadisiBildirim: Boolean(kayit.gununHadisiBildirim),
      ezanHatirlatmaDk: dkGecerli,
      maneviOgutBildirim: kayit.maneviOgutBildirim !== false,
      cumaSabahiBildirim: Boolean(kayit.cumaSabahiBildirim),
      temaTercihi: temaGecerli
    };
  } catch {
    return varsayilanUygulamaAyarlari();
  }
}

function uygulamaAyarlariKaydet(ayar) {
  localStorage.setItem(UYGULAMA_AYARLARI_ANAHTARI, JSON.stringify(ayar));
}

function bugunTarihAnahtari() {
  const d = new Date();
  return `${d.getFullYear()}-${ikiHane(d.getMonth() + 1)}-${ikiHane(d.getDate())}`;
}

function namazVaktiIcindeMi() {
  if (!sonTimings) {
    return false;
  }
  const simdi = Date.now();
  for (const v of EZAN_GOSTERIM_SIRASI) {
    if (v.etiket === "Güneş") {
      continue;
    }
    const saat = saatiTemizle(sonTimings[v.alan]);
    for (let gunKaydir = -1; gunKaydir <= 1; gunKaydir += 1) {
      const baz = new Date();
      baz.setDate(baz.getDate() + gunKaydir);
      const basla = vakitTarihiOlustur(saat, baz).getTime();
      if (simdi >= basla && simdi < basla + NAMAZ_VAKTI_ARALIK_MS) {
        return true;
      }
    }
  }
  return false;
}

function bildirimSessizOlsunMu() {
  const ayar = uygulamaAyarlariOku();
  return Boolean(ayar.otomatikSessiz && namazVaktiIcindeMi());
}

function yerelBildirimEklentisiAl() {
  const P = window.Capacitor?.Plugins;
  return P?.LocalNotifications ?? P?.localNotifications ?? null;
}

async function bildirimYetkiDurumuAl() {
  const LN = yerelBildirimEklentisiAl();
  if (LN && typeof LN.checkPermissions === "function") {
    try {
      const p = await LN.checkPermissions();
      return p?.display || "prompt";
    } catch {
      return "prompt";
    }
  }
  if ("Notification" in window) {
    return Notification.permission;
  }
  if (capacitorAndroidMi()) {
    return "native-missing";
  }
  return "unsupported";
}

async function bildirimIzniIste() {
  const LN = yerelBildirimEklentisiAl();
  if (LN && typeof LN.requestPermissions === "function") {
    try {
      const p = await LN.requestPermissions();
      return p?.display || "denied";
    } catch {
      return "denied";
    }
  }
  if ("Notification" in window && typeof Notification.requestPermission === "function") {
    try {
      return await Notification.requestPermission();
    } catch {
      return "denied";
    }
  }
  return "unsupported";
}

function yerelZamanlanmisBildirimDestekleniyorMu() {
  const LN = yerelBildirimEklentisiAl();
  return Boolean(LN && typeof LN.schedule === "function");
}

async function yerelBildirimAndroidKanaliniHazirla() {
  const pl = window.Capacitor?.getPlatform?.();
  if (pl !== "android") {
    yerelBildirimKanaliHazir = true;
    return;
  }
  const LN = yerelBildirimEklentisiAl();
  if (!LN?.createChannel) {
    return;
  }
  if (yerelBildirimKanaliHazir) {
    return;
  }
  try {
    await LN.createChannel({
      id: YEREL_BILDIRIM_ANDROID_KANAL_ID,
      name: "Ezan Vakti",
      description: "Namaz vakitleri ve hatırlatmalar",
      importance: 4,
      visibility: 1,
      vibration: true
    });
  } catch {
    /* kanal zaten var veya tekrar oluşturma; yine de channelId kullanılır */
  }
  yerelBildirimKanaliHazir = true;
}

function yerelBildirimPayloadAndroidKanalEkle(lnBildirim) {
  if (window.Capacitor?.getPlatform?.() === "android") {
    lnBildirim.channelId = YEREL_BILDIRIM_ANDROID_KANAL_ID;
  }
}

async function androidTamAlarmIzniVerildiMi() {
  if (window.Capacitor?.getPlatform?.() !== "android") {
    return true;
  }
  const LN = yerelBildirimEklentisiAl();
  if (!LN?.checkExactNotificationSetting) {
    return true;
  }
  try {
    const st = await LN.checkExactNotificationSetting();
    return st?.exact_alarm === "granted";
  } catch {
    return true;
  }
}

async function androidTamAlarmSistemAyarlariAc() {
  const LN = yerelBildirimEklentisiAl();
  if (LN?.changeExactNotificationSetting) {
    try {
      await LN.changeExactNotificationSetting();
    } catch {
      /* yok say */
    }
  }
}

function androidTamAlarmUyariPaneliniGuncelle() {
  const kutu = document.getElementById("bildirimTamAlarmKutu");
  const metin = document.getElementById("bildirimTamAlarmMetin");
  const btn = document.getElementById("androidTamAlarmBtn");
  if (!kutu || !metin || !btn) {
    return;
  }
  if (window.Capacitor?.getPlatform?.() !== "android" || !yerelZamanlanmisBildirimDestekleniyorMu()) {
    kutu.classList.add("gizli");
    return;
  }
  void (async () => {
    const yetki = await bildirimYetkiDurumuAl();
    if (yetki !== "granted") {
      kutu.classList.add("gizli");
      return;
    }
    const ayar = uygulamaAyarlariOku();
    if (ayar.ezanHatirlatmaDk <= 0) {
      kutu.classList.add("gizli");
      return;
    }
    const tam = await androidTamAlarmIzniVerildiMi();
    if (tam) {
      kutu.classList.add("gizli");
      return;
    }
    metin.textContent = metinAl("bildirimTamAlarmUyariMetin");
    btn.textContent = metinAl("bildirimTamAlarmBtn");
    kutu.classList.remove("gizli");
  })();
}

function ezanPlanliHatirlatmalariSonTimingsIleEkle(liste, timingsObj, dk, simdiMs, dakikaMs) {
  if (!timingsObj || dk <= 0) {
    return;
  }
  for (let gun = 0; gun < PLANLI_EZAN_YEDEK_GUN; gun += 1) {
    const bazGun = new Date();
    bazGun.setHours(0, 0, 0, 0);
    bazGun.setDate(bazGun.getDate() + gun);
    let vIdx = 0;
    for (const v of EZAN_GOSTERIM_SIRASI) {
      const saat = saatiTemizle(timingsObj[v.alan]);
      const vakitMs = vakitTarihiOlustur(saat, bazGun).getTime();
      const hatirlatmaMs = vakitMs - dk * dakikaMs;
      if (hatirlatmaMs > simdiMs + 5000 && hatirlatmaMs < simdiMs + PLANLI_GUN_SAYISI * 24 * 60 * 60 * 1000) {
        const id = PLANLI_ID_EZAN_BAS + gun * 32 + vIdx;
        const govde = `${ezanVakitBildirimEtiketi(v.alan)} · ${saat}`;
        liste.push({
          id,
          baslik: metinAl("ezanHatirlatmaBaslik"),
          govde,
          zaman: new Date(hatirlatmaMs)
        });
      }
      vIdx += 1;
    }
  }
}

function hadisMetniZamanDamgasiIcin(zamanMs) {
  const liste = hadisSozleriSeciliListe();
  const blok = Math.floor(zamanMs / IKI_SAAT_MS);
  return liste[blok % liste.length];
}

function sonrakiNGunIcinAyYilCiftleri(n) {
  const map = new Map();
  const bas = new Date();
  for (let i = 0; i < n; i += 1) {
    const d = new Date(bas);
    d.setDate(d.getDate() + i);
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    map.set(`${y}-${m}`, { y, m });
  }
  return [...map.values()];
}

function gunlukTakvimAnahtari(bazTarih) {
  const gun = bazTarih.getDate();
  const ay = bazTarih.getMonth() + 1;
  const yil = bazTarih.getFullYear();
  return `${ikiHane(gun)}-${ikiHane(ay)}-${yil}`;
}

async function aladhanTakvimGunleriGetirIl(il, month, year) {
  const ilApi = apiIcinIlAdi(il);
  const url = `https://api.aladhan.com/v1/calendarByCity?city=${encodeURIComponent(ilApi)}&country=Turkey&method=13&month=${month}&year=${year}`;
  const yanit = await fetch(url);
  if (!yanit.ok) {
    throw new Error("takvim");
  }
  const sonuc = await yanit.json();
  return Array.isArray(sonuc?.data) ? sonuc.data : [];
}

async function aladhanTakvimGunleriGetirKoordinat(lat, lon, month, year) {
  const url = `https://api.aladhan.com/v1/calendar?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(lon)}&method=13&month=${month}&year=${year}`;
  const yanit = await fetch(url);
  if (!yanit.ok) {
    throw new Error("takvim");
  }
  const sonuc = await yanit.json();
  return Array.isArray(sonuc?.data) ? sonuc.data : [];
}

async function takvimHaritasiSonrakiGunler(il, lat, lon) {
  const harita = new Map();
  const aylar = sonrakiNGunIcinAyYilCiftleri(PLANLI_GUN_SAYISI);
  for (const { y, m } of aylar) {
    let gunler;
    if (typeof lat === "number" && typeof lon === "number" && Number.isFinite(lat) && Number.isFinite(lon)) {
      gunler = await aladhanTakvimGunleriGetirKoordinat(lat, lon, m, y);
    } else {
      gunler = await aladhanTakvimGunleriGetirIl(il, m, y);
    }
    for (const gun of gunler) {
      const tarihStr = gun?.date?.gregorian?.date;
      if (tarihStr && gun?.timings) {
        harita.set(tarihStr, gun.timings);
      }
    }
  }
  return harita;
}

function bildirimKaynagiIlveyaKoordinat() {
  const il = seciliIliYukle();
  if (sonVakitlerKaynak === "gps") {
    const ob = vakitGpsOnbellekOku();
    if (ob && typeof ob.lat === "number" && typeof ob.lon === "number") {
      return { il, lat: ob.lat, lon: ob.lon };
    }
  }
  return { il, lat: null, lon: null };
}

async function planliYerelBildirimleriIptalEt() {
  const LN = yerelBildirimEklentisiAl();
  if (!LN?.getPending || !LN?.cancel) {
    return;
  }
  try {
    const pending = await LN.getPending();
    const liste = pending?.notifications || [];
    const bizim = liste.filter((n) => {
      const id = Number(n?.id);
      return id >= PLANLI_BILDIRIM_ID_MIN && id <= PLANLI_BILDIRIM_ID_MAX;
    });
    if (bizim.length === 0) {
      return;
    }
    await LN.cancel({
      notifications: bizim.map((n) => ({ id: n.id }))
    });
  } catch {
    /* yok say */
  }
}

async function yerelBildirimleriTopluZamanla(bildirimler) {
  const LN = yerelBildirimEklentisiAl();
  if (!LN?.schedule || bildirimler.length === 0) {
    return;
  }
  await yerelBildirimAndroidKanaliniHazirla();
  const pl = window.Capacitor?.getPlatform?.();
  const parca = 20;
  for (let i = 0; i < bildirimler.length; i += parca) {
    const dilim = bildirimler.slice(i, i + parca).map((b) => {
      /**
       * Capacitor Android: allowWhileIdle false iken setExact(RTC) kullanılıyor; uyku/ekran kapalıyken
       * tetiklenmeyebilir. true iken RTC_WAKEUP + setExactAndAllowWhileIdle (veya tam izin yoksa
       * setAndAllowWhileIdle) — uygulama kapalıyken ezan öncesi bildirim için şart.
       */
      const allowWhileIdle = pl === "android";
      const lnBildirim = {
        id: b.id,
        title: b.baslik,
        body: b.govde,
        schedule: { at: b.zaman, allowWhileIdle }
      };
      if (pl === "ios") {
        lnBildirim.sound = "default";
      } else if (pl === "android") {
        lnBildirim.sound = "";
      }
      yerelBildirimPayloadAndroidKanalEkle(lnBildirim);
      return lnBildirim;
    });
    try {
      await LN.schedule({ notifications: dilim });
    } catch {
      bildirimDurumuYaz(metinAl("bildirimZamanlamaHata"));
      throw new Error("schedule");
    }
  }
}

async function planliYerelBildirimleriGuncelle() {
  if (!yerelZamanlanmisBildirimDestekleniyorMu()) {
    return;
  }
  if (planliBildirimGuncelleniyor) {
    planliBildirimYenilemeIstendi = true;
    return;
  }
  planliBildirimGuncelleniyor = true;
  let planliSonEzanHatirlatmaSayisi = -1;
  try {
    const yetki = await bildirimYetkiDurumuAl();
    if (yetki !== "granted") {
      return;
    }
    await yerelBildirimAndroidKanaliniHazirla();
    await planliYerelBildirimleriIptalEt();
    const ayar = uygulamaAyarlariOku();
    const simdiMs = Date.now();
    const dakikaMs = 60 * 1000;
    const liste = [];
    const { il, lat, lon } = bildirimKaynagiIlveyaKoordinat();

    let takvimHaritasi = null;
    try {
      takvimHaritasi = await takvimHaritasiSonrakiGunler(il, lat, lon);
    } catch {
      takvimHaritasi = null;
    }

    const takvimGecerli = takvimHaritasi && takvimHaritasi.size > 0;

    if (ayar.ezanHatirlatmaDk > 0) {
      const dk = ayar.ezanHatirlatmaDk;
      if (takvimGecerli) {
        for (let gun = 0; gun < PLANLI_GUN_SAYISI; gun += 1) {
          const bazGun = new Date();
          bazGun.setHours(0, 0, 0, 0);
          bazGun.setDate(bazGun.getDate() + gun);
          const anahtar = gunlukTakvimAnahtari(bazGun);
          const gunlukTimings = takvimHaritasi.get(anahtar);
          if (!gunlukTimings) {
            continue;
          }
          let vIdx = 0;
          for (const v of EZAN_GOSTERIM_SIRASI) {
            const saat = saatiTemizle(gunlukTimings[v.alan]);
            const vakitMs = vakitTarihiOlustur(saat, bazGun).getTime();
            const hatirlatmaMs = vakitMs - dk * dakikaMs;
            if (hatirlatmaMs > simdiMs + 5000 && hatirlatmaMs < simdiMs + PLANLI_GUN_SAYISI * 24 * 60 * 60 * 1000) {
              const id = PLANLI_ID_EZAN_BAS + gun * 32 + vIdx;
              const govde = `${ezanVakitBildirimEtiketi(v.alan)} · ${saat}`;
              liste.push({
                id,
                baslik: metinAl("ezanHatirlatmaBaslik"),
                govde,
                zaman: new Date(hatirlatmaMs)
              });
            }
            vIdx += 1;
          }
        }
      } else if (sonTimings) {
        ezanPlanliHatirlatmalariSonTimingsIleEkle(liste, sonTimings, dk, simdiMs, dakikaMs);
      }
    }

    if (ayar.gununHadisiBildirim) {
      for (let gun = 0; gun < PLANLI_GUN_SAYISI; gun += 1) {
        const bazGun = new Date();
        bazGun.setHours(0, 0, 0, 0);
        bazGun.setDate(bazGun.getDate() + gun);
        const at = new Date(bazGun);
        at.setHours(PLANLI_HADIS_SAAT, 0, 0, 0);
        if (at.getTime() > simdiMs + 5000) {
          const id = PLANLI_ID_HADIS_BAS + gun;
          liste.push({
            id,
            baslik: metinAl("hadisBildirimBaslik"),
            govde: hadisMetniZamanDamgasiIcin(at.getTime()),
            zaman: at
          });
        }
      }
    }

    if (ayar.cumaSabahiBildirim) {
      let cumaSayac = 0;
      for (let gun = 0; gun < PLANLI_GUN_SAYISI; gun += 1) {
        const bazGun = new Date();
        bazGun.setHours(0, 0, 0, 0);
        bazGun.setDate(bazGun.getDate() + gun);
        if (bazGun.getDay() !== 5) {
          continue;
        }
        const at = new Date(bazGun);
        at.setHours(PLANLI_CUMA_SAAT, 0, 0, 0);
        if (at.getTime() > simdiMs + 5000 && cumaSayac < 6) {
          liste.push({
            id: PLANLI_ID_CUMA_BAS + cumaSayac,
            baslik: metinAl("hayirliCumalarBaslik"),
            govde: metinAl("hayirliCumalarGovde"),
            zaman: at
          });
          cumaSayac += 1;
        }
      }
    }

    if (ayar.maneviOgutBildirim) {
      const ogutListe = ogutBildirimleriSeciliListe();
      let t = Math.ceil(simdiMs / BES_SAAT_MS) * BES_SAAT_MS;
      if (t <= simdiMs + 5000) {
        t += BES_SAAT_MS;
      }
      let slot = 0;
      const sonTarih = simdiMs + 72 * 60 * 60 * 1000;
      while (slot < 18 && t < sonTarih) {
        if (t > simdiMs + 5000) {
          liste.push({
            id: PLANLI_ID_OGUT_BAS + slot,
            baslik: metinAl("maneviOgutBildirimBaslik"),
            govde: ogutListe[slot % ogutListe.length],
            zaman: new Date(t)
          });
        }
        t += BES_SAAT_MS;
        slot += 1;
      }
    }

    planliSonEzanHatirlatmaSayisi = liste.filter(
      (x) => x.id >= PLANLI_ID_EZAN_BAS && x.id < PLANLI_ID_HADIS_BAS
    ).length;
    await yerelBildirimleriTopluZamanla(liste);
  } catch {
    /* yok say */
  } finally {
    planliBildirimGuncelleniyor = false;
    androidTamAlarmUyariPaneliniGuncelle();
    if (planliSonEzanHatirlatmaSayisi >= 0) {
      const pa = uygulamaAyarlariOku();
      if (pa.ezanHatirlatmaDk > 0 && planliSonEzanHatirlatmaSayisi === 0) {
        bildirimDurumuYaz(metinAl("bildirimEzanPlaniYokVakit"));
      }
    }
    if (planliBildirimYenilemeIstendi) {
      planliBildirimYenilemeIstendi = false;
      void planliYerelBildirimleriGuncelle().catch(() => {});
    }
  }
}

function planliBildirimAppDurumuDinleyicisiniBaslat() {
  if (planliBildirimAppDinleyici || !yerelZamanlanmisBildirimDestekleniyorMu()) {
    return;
  }
  const App = capacitorAppEklentisiAl();
  if (!App?.addListener) {
    return;
  }
  planliBildirimAppDinleyici = true;
  void App.addListener("appStateChange", ({ isActive }) => {
    if (isActive) {
      void planliYerelBildirimleriGuncelle().catch(() => {});
      androidTamAlarmUyariPaneliniGuncelle();
    }
  }).catch(() => {
    planliBildirimAppDinleyici = false;
  });
}

async function bildirimGonderIcerik(baslik, govde, ekstra = {}) {
  const sessiz = bildirimSessizOlsunMu();
  const temel = {
    body: govde,
    ...ekstra
  };
  if (sessiz) {
    temel.silent = true;
  }
  const LN = yerelBildirimEklentisiAl();
  if (LN && typeof LN.schedule === "function") {
    await yerelBildirimAndroidKanaliniHazirla();
    const id = yerelBildirimIdSayaci;
    yerelBildirimIdSayaci += 1;
    if (yerelBildirimIdSayaci > 2147483000) {
      yerelBildirimIdSayaci = 1;
    }
    const pl = window.Capacitor?.getPlatform?.();
    const lnBildirim = {
      id,
      title: baslik,
      body: govde,
      schedule: {
        at: new Date(Date.now() + 250),
        ...(pl === "android" ? { allowWhileIdle: true } : {})
      },
      extra: ekstra
    };
    if (sessiz) {
      lnBildirim.silent = true;
    } else {
      if (pl === "ios") {
        lnBildirim.sound = "default";
      } else if (pl === "android") {
        lnBildirim.sound = "";
      }
    }
    yerelBildirimPayloadAndroidKanalEkle(lnBildirim);
    await LN.schedule({
      notifications: [lnBildirim]
    });
    return;
  }
  if ("serviceWorker" in navigator) {
    const reg = await navigator.serviceWorker.getRegistration();
    if (reg) {
      await reg.showNotification(baslik, temel);
      return;
    }
  }
  if ("Notification" in window) {
    const secenek = { body: govde };
    if (sessiz) {
      secenek.silent = true;
    }
    new Notification(baslik, secenek);
  }
}

function simdikiHadisMetni() {
  const liste = hadisSozleriSeciliListe();
  const blok = Math.floor(Date.now() / IKI_SAAT_MS);
  return liste[blok % liste.length];
}

function metinAl(anahtar) {
  return DIL_METINLERI[seciliDil]?.[anahtar] || DIL_METINLERI.tr[anahtar] || anahtar;
}

function dilSecimiButonunuGuncelle() {
  const ayarlarBtn = document.getElementById("ayarlarBtn");
  const bayrakImg = document.getElementById("dilBayrakImg");
  const btnMetin = document.getElementById("ayarlarBtnMetin");
  if (!ayarlarBtn || !bayrakImg || !btnMetin) {
    return;
  }
  const yol = DIL_BAYRAK_YOLLARI[seciliDil] || DIL_BAYRAK_YOLLARI.tr;
  bayrakImg.src = yol;
  bayrakImg.alt = "";
  btnMetin.textContent = metinAl("dilButonEtiket");
  ayarlarBtn.setAttribute("aria-label", metinAl("dilBaslik"));
}

function ezanHatirlatmaSecenekleriniDoldur() {
  const select = document.getElementById("ayarEzanHatirlatma");
  if (!select) {
    return;
  }
  const ayar = uygulamaAyarlariOku();
  const onceki = String(ayar.ezanHatirlatmaDk);
  const dkList = [0, 5, 10, 15, 20, 25, 30];
  const kapali = metinAl("ayarEzanKapali");
  const sablon = metinAl("ayarEzanDkOnce");
  select.innerHTML = "";
  dkList.forEach((dk) => {
    const opt = document.createElement("option");
    opt.value = String(dk);
    opt.textContent = dk === 0 ? kapali : sablon.replace("{n}", String(dk));
    select.appendChild(opt);
  });
  select.value = dkList.includes(Number(onceki)) ? onceki : "0";
}

function temaSecenekleriniDoldur() {
  const select = document.getElementById("ayarTemaSecimi");
  if (!select) {
    return;
  }
  const ayar = uygulamaAyarlariOku();
  const onceki = ayar.temaTercihi;
  const secenekler = [
    { val: "otomatik", key: "ayarTemaOtomatik" },
    { val: "acik", key: "ayarTemaAcik" },
    { val: "koyu", key: "ayarTemaKoyu" }
  ];
  select.innerHTML = "";
  secenekler.forEach(({ val, key }) => {
    const opt = document.createElement("option");
    opt.value = val;
    opt.textContent = metinAl(key);
    select.appendChild(opt);
  });
  select.value = secenekler.some((s) => s.val === onceki) ? onceki : "otomatik";
}

function diliUygula() {
  const metinIdleri = [
    "appBaslik",
    "appAciklama",
    "tabEzan",
    "tabKuran",
    "tabKible",
    "tabKaza",
    "tabAyarlar",
    "ayarlarBaslik",
    "ayarlarAciklama",
    "ayarBildirimNotu",
    "ayarTemaEtiket",
    "ayarTemaAlt",
    "ayarSessizEtiket",
    "ayarSessizAlt",
    "ayarKonumEtiket",
    "ayarKonumAlt",
    "ayarManeviOgutEtiket",
    "ayarManeviOgutAlt",
    "ayarCumaEtiket",
    "ayarCumaAlt",
    "ayarHadisEtiket",
    "ayarHadisAlt",
    "ayarEzanOnceEtiket",
    "ayarEzanOnceAlt",
    "ayarKisayolBaslik",
    "ayarKisayolMetin",
    "ayarGuncellemeBaslik",
    "ayarGuncellemeAlt",
    "ayarGuncellemeBtn",
    "ayarGuncellemeYenileBtn",
    "ezanBaslik",
    "ilEtiket",
    "konumdanVakitBtn",
    "yenileBtn",
    "paylasVakitlerBtn",
    "paylasHadisBtn",
    "sonrakiVakitEtiket",
    "hadisBaslik",
    "bildirimIzinBtn",
    "kibleBaslik",
    "kibleAltBaslik",
    "kibleBulBtn",
    "kalibrasyonBaslik",
    "kuranBaslik",
    "sureEtiket",
    "sureYukleBtn",
    "kazaBaslik",
    "kazaKaydetBtn",
    "kazaTemizleBtn",
    "dilBaslik",
    "dilEtiket",
    "gizlilikPolitikasi"
  ];
  metinIdleri.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = metinAl(id);
    }
  });

  const yuklemeMetinEl = document.getElementById("yuklemeMetin");
  if (yuklemeMetinEl) {
    yuklemeMetinEl.textContent = metinAl("yuklemeEkran");
  }

  document.documentElement.lang = seciliDil;
  document.body.dir = seciliDil === "ar" ? "rtl" : "ltr";
  dilSecimiButonunuGuncelle();
  ezanHatirlatmaSecenekleriniDoldur();
  temaSecenekleriniDoldur();
  document.getElementById("ayarGuncellemeDurum")?.replaceChildren();
  document.getElementById("ayarGuncellemeYenileBtn")?.classList.add("gizli");
  androidTamAlarmUyariPaneliniGuncelle();
}

function ayarlariBaslat() {
  const ayarlarBtn = document.getElementById("ayarlarBtn");
  const ayarlarPanel = document.getElementById("ayarlarPanel");
  const dilSecimi = document.getElementById("dilSecimi");
  if (!ayarlarBtn || !ayarlarPanel || !dilSecimi) {
    return;
  }

  dilSecimi.value = seciliDil;
  diliUygula();

  ayarlarBtn.addEventListener("click", () => {
    ayarlarPanel.classList.toggle("gizli");
  });

  document.addEventListener("click", (event) => {
    const hedef = event.target;
    if (!ayarlarPanel.contains(hedef) && !ayarlarBtn.contains(hedef)) {
      ayarlarPanel.classList.add("gizli");
    }
  });

  dilSecimi.addEventListener("change", async (event) => {
    seciliDil = event.target.value;
    localStorage.setItem(SECILI_DIL_ANAHTARI, seciliDil);
    diliUygula();
    void planliYerelBildirimleriGuncelle().catch(() => {});
    const seciliSure = document.getElementById("sureSecimi")?.value;
    if (seciliSure) {
      await sureyiGetirVeGoster(seciliSure);
    }
  });
}

function kartOlustur(vakit, veri) {
  const kart = document.createElement("article");
  kart.className = "kart";

  const baslik = document.createElement("h2");
  baslik.className = "kart-baslik";
  baslik.innerHTML = `<span class="kart-ikon">${VAKIT_IKONLARI[vakit] || "🕋"}</span><span>${vakit}</span>`;

  const sayi = document.createElement("div");
  sayi.className = "sayi";
  sayi.textContent = veri[vakit];
  kazaSayiAlanlari[vakit] = sayi;

  const butonlar = document.createElement("div");
  butonlar.className = "butonlar";

  const artiButonu = document.createElement("button");
  artiButonu.className = "buton buton-arti";
  artiButonu.type = "button";
  artiButonu.textContent = "+";
  artiButonu.setAttribute("aria-label", `${vakit} kaza sayısını artır`);

  const eksiButonu = document.createElement("button");
  eksiButonu.className = "buton buton-eksi";
  eksiButonu.type = "button";
  eksiButonu.textContent = "-";
  eksiButonu.setAttribute("aria-label", `${vakit} kaza sayısını azalt`);

  artiButonu.addEventListener("click", () => {
    veri[vakit] += 1;
    sayi.textContent = veri[vakit];
    kazaDurumYazisiniGuncelle("Kaydedilmedi: Değişiklikleri korumak için Kaydet'e bas.");
  });

  eksiButonu.addEventListener("click", () => {
    veri[vakit] = Math.max(0, veri[vakit] - 1);
    sayi.textContent = veri[vakit];
    kazaDurumYazisiniGuncelle("Kaydedilmedi: Değişiklikleri korumak için Kaydet'e bas.");
  });

  butonlar.append(eksiButonu, artiButonu);
  kart.append(baslik, sayi, butonlar);
  return kart;
}

function uygulamayiBaslat() {
  const kartlarAlani = document.getElementById("kartlar");
  kazaVeri = veriyiYukle();

  VAKITLER.forEach((vakit) => {
    const kart = kartOlustur(vakit, kazaVeri);
    kartlarAlani.appendChild(kart);
  });
}

function kazaDurumYazisiniGuncelle(metin) {
  const alan = document.getElementById("kazaDurumYazisi");
  if (alan) {
    alan.textContent = metin;
  }
}

function kazaDegerleriniYenile() {
  VAKITLER.forEach((vakit) => {
    if (kazaSayiAlanlari[vakit]) {
      kazaSayiAlanlari[vakit].textContent = kazaVeri[vakit];
    }
  });
}

function kazaAksiyonlariniBaslat() {
  const kaydetBtn = document.getElementById("kazaKaydetBtn");
  const temizleBtn = document.getElementById("kazaTemizleBtn");

  kaydetBtn.addEventListener("click", () => {
    veriyiKaydet(kazaVeri);
    kazaDurumYazisiniGuncelle("Kaza verileri cihaz depolamasına kaydedildi.");
  });

  temizleBtn.addEventListener("click", () => {
    kazaVeri = varsayilanVeri();
    kazaDegerleriniYenile();
    veriyiKaydet(kazaVeri);
    kazaDurumYazisiniGuncelle("Tüm kaza verileri temizlendi ve cihaz depolamasına kaydedildi.");
  });
}

function rasgeleOgutSec() {
  const liste = ogutBildirimleriSeciliListe();
  const index = Math.floor(Math.random() * liste.length);
  return liste[index];
}

function hadisMetniniGuncelle() {
  const hadisMetni = document.getElementById("hadisMetni");
  if (!hadisMetni) {
    return;
  }
  const liste = hadisSozleriSeciliListe();
  const blok = Math.floor(Date.now() / IKI_SAAT_MS);
  hadisMetni.textContent = liste[blok % liste.length];
}

function hadisKutusuBaslat() {
  hadisMetniniGuncelle();
  setInterval(hadisMetniniGuncelle, 60 * 1000);
}

async function ogutBildirimiGonder() {
  const mesaj = rasgeleOgutSec();
  await bildirimGonderIcerik(metinAl("maneviOgutBildirimBaslik"), mesaj);
}

function bildirimDurumuYaz(metin) {
  const alan = document.getElementById("bildirimDurum");
  if (alan) {
    alan.textContent = metin;
  }
}

async function gunlukHadisBildirimiKontrol() {
  const ayar = uygulamaAyarlariOku();
  if (!ayar.gununHadisiBildirim) {
    return;
  }
  const bugun = bugunTarihAnahtari();
  if (localStorage.getItem(SON_HADIS_BILDIRIM_GUNU_ANAHTARI) === bugun) {
    return;
  }
  const metin = simdikiHadisMetni();
  await bildirimGonderIcerik(metinAl("hadisBildirimBaslik"), metin);
  localStorage.setItem(SON_HADIS_BILDIRIM_GUNU_ANAHTARI, bugun);
}

async function cumaSabahiBildirimiKontrol() {
  const ayar = uygulamaAyarlariOku();
  const yetki = await bildirimYetkiDurumuAl();
  if (!ayar.cumaSabahiBildirim || yetki !== "granted") {
    return;
  }
  const d = new Date();
  if (d.getDay() !== 5) {
    return;
  }
  const saat = d.getHours();
  if (saat < 8 || saat >= 12) {
    return;
  }
  const anahtar = `cuma_bildirim_${bugunTarihAnahtari()}`;
  if (localStorage.getItem(anahtar)) {
    return;
  }
  await bildirimGonderIcerik(metinAl("hayirliCumalarBaslik"), metinAl("hayirliCumalarGovde"));
  localStorage.setItem(anahtar, "1");
}

async function ezanHatirlatmaKontrol() {
  if (yerelZamanlanmisBildirimDestekleniyorMu()) {
    return;
  }
  const ayar = uygulamaAyarlariOku();
  const dk = ayar.ezanHatirlatmaDk;
  if (!sonTimings || dk <= 0) {
    return;
  }
  const yetki = await bildirimYetkiDurumuAl();
  if (yetki !== "granted") {
    return;
  }
  const simdi = Date.now();
  const dakikaMs = 60 * 1000;

  for (const v of EZAN_GOSTERIM_SIRASI) {
    const saat = saatiTemizle(sonTimings[v.alan]);
    for (let gunKaydir = -1; gunKaydir <= 1; gunKaydir += 1) {
      const baz = new Date();
      baz.setDate(baz.getDate() + gunKaydir);
      const vakitMs = vakitTarihiOlustur(saat, baz).getTime();
      const hatirlatmaMs = vakitMs - dk * dakikaMs;
      const fark = simdi - hatirlatmaMs;
      if (fark < 0 || fark >= EZAN_HATIRLATMA_YAKALAMA_MS) {
        continue;
      }
      const vakitTarihObj = new Date(vakitMs);
      const gunAnahtar = `${vakitTarihObj.getFullYear()}-${ikiHane(vakitTarihObj.getMonth() + 1)}-${ikiHane(vakitTarihObj.getDate())}`;
      const depoAnahtar = `${EZAN_HATIRLATMA_DEPOLAMA_ON_EKI}${gunAnahtar}_${v.alan}_${dk}`;
      if (localStorage.getItem(depoAnahtar)) {
        continue;
      }
      localStorage.setItem(depoAnahtar, "1");
      const govde = `${ezanVakitBildirimEtiketi(v.alan)} · ${saat}`;
      await bildirimGonderIcerik(metinAl("ezanHatirlatmaBaslik"), govde);
    }
  }
}

async function bildirimDongusunuCalistir() {
  const yetki = await bildirimYetkiDurumuAl();
  if (yetki === "native-missing") {
    bildirimDurumuYaz(metinAl("bildirimDurumuNativeKurulum"));
    return;
  }
  if (yetki === "unsupported") {
    bildirimDurumuYaz(metinAl("bildirimDurumuDestekYok"));
    return;
  }
  if (yetki !== "granted") {
    bildirimDurumuYaz(metinAl("bildirimDurumuKapali"));
    return;
  }

  bildirimDurumuYaz(metinAl("bildirimDurumuAcik"));

  if (bildirimIntervalId !== null) {
    clearInterval(bildirimIntervalId);
    bildirimIntervalId = null;
  }

  if (yerelZamanlanmisBildirimDestekleniyorMu()) {
    void (async () => {
      try {
        await yerelBildirimAndroidKanaliniHazirla();
        await planliYerelBildirimleriGuncelle();
        androidTamAlarmUyariPaneliniGuncelle();
      } catch {
        bildirimDurumuYaz(metinAl("bildirimDurumuHata"));
      }
    })();
    planliBildirimAppDurumuDinleyicisiniBaslat();
    return;
  }

  const kontrolVeGonder = async () => {
    const ayar = uygulamaAyarlariOku();
    const simdi = Date.now();
    if (ayar.maneviOgutBildirim) {
      const sonZaman = Number(localStorage.getItem(SON_BILDIRIM_ZAMANI_ANAHTARI) || 0);
      if (simdi - sonZaman >= BES_SAAT_MS) {
        await ogutBildirimiGonder();
        localStorage.setItem(SON_BILDIRIM_ZAMANI_ANAHTARI, String(simdi));
      }
    }
    await gunlukHadisBildirimiKontrol().catch(() => {});
    await cumaSabahiBildirimiKontrol().catch(() => {});
    await ezanHatirlatmaKontrol().catch(() => {});
  };

  kontrolVeGonder().catch(() => {
    bildirimDurumuYaz(metinAl("bildirimDurumuHata"));
  });
  bildirimIntervalId = window.setInterval(() => {
    kontrolVeGonder().catch(() => {});
  }, 30 * 1000);
}

function planliArkaPlanaGiderkenDene() {
  if (!yerelZamanlanmisBildirimDestekleniyorMu()) {
    return;
  }
  const simdi = Date.now();
  if (simdi - sonArkaPlanaPlanliZamani < 2500) {
    return;
  }
  sonArkaPlanaPlanliZamani = simdi;
  void planliYerelBildirimleriGuncelle().catch(() => {});
}

function bildirimleriBaslat() {
  const izinBtn = document.getElementById("bildirimIzinBtn");
  const tamAlarmBtn = document.getElementById("androidTamAlarmBtn");
  if (!izinBtn) {
    return;
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      planliArkaPlanaGiderkenDene();
    }
  });
  window.addEventListener("pagehide", planliArkaPlanaGiderkenDene, { capture: true });

  tamAlarmBtn?.addEventListener("click", () => {
    void androidTamAlarmSistemAyarlariAc();
  });

  izinBtn.addEventListener("click", async () => {
    const mevcut = await bildirimYetkiDurumuAl();
    if (mevcut === "native-missing") {
      bildirimDurumuYaz(metinAl("bildirimDurumuNativeKurulum"));
      return;
    }
    if (mevcut === "unsupported") {
      bildirimDurumuYaz(metinAl("bildirimDurumuDestekYok"));
      return;
    }
    const izin = mevcut === "granted" ? "granted" : await bildirimIzniIste();
    if (izin === "granted") {
      bildirimDurumuYaz(metinAl("bildirimDurumuIlk"));
      await bildirimGonderIcerik(metinAl("bildirimTestBaslik"), metinAl("bildirimTestGovde")).catch(() => {});
      await bildirimDongusunuCalistir();
    } else {
      bildirimDurumuYaz(metinAl("bildirimDurumuIzinsiz"));
    }
  });

  bildirimDongusunuCalistir();
}

function ezanKartiOlustur(baslik, saat) {
  const kart = document.createElement("article");
  kart.className = "ezan-kart";

  const kartBaslik = document.createElement("h3");
  kartBaslik.className = "ezan-baslik";
  kartBaslik.textContent = baslik;

  const kartSaat = document.createElement("p");
  kartSaat.className = "ezan-saat";
  kartSaat.textContent = saat;

  kart.append(kartBaslik, kartSaat);
  return kart;
}

function saatiTemizle(rawSaat) {
  return String(rawSaat || "--:--").split(" ")[0];
}

function hhmmParcala(saat) {
  const [saatParcasi, dakikaParcasi] = String(saat).split(":");
  return {
    saat: Number(saatParcasi),
    dakika: Number(dakikaParcasi)
  };
}

function vakitTarihiOlustur(saat, bazTarih = new Date()) {
  const { saat: h, dakika: m } = hhmmParcala(saat);
  const tarih = new Date(bazTarih);
  tarih.setHours(h, m, 0, 0);
  return tarih;
}

function ikiHane(deger) {
  return String(deger).padStart(2, "0");
}

function msToSaatDakikaSaniye(ms) {
  const toplamSaniye = Math.max(0, Math.floor(ms / 1000));
  const saat = Math.floor(toplamSaniye / 3600);
  const dakika = Math.floor((toplamSaniye % 3600) / 60);
  const saniye = toplamSaniye % 60;
  return `${ikiHane(saat)}:${ikiHane(dakika)}:${ikiHane(saniye)}`;
}

function sonrakiVakitiBul(timings) {
  const simdi = new Date();
  for (const vakit of EZAN_GOSTERIM_SIRASI) {
    const saat = saatiTemizle(timings[vakit.alan]);
    const vakitTarihi = vakitTarihiOlustur(saat, simdi);
    if (vakitTarihi > simdi) {
      return { etiket: vakit.etiket, zaman: vakitTarihi, alan: vakit.alan };
    }
  }

  const yarin = new Date(simdi);
  yarin.setDate(yarin.getDate() + 1);
  const ilkVakit = EZAN_GOSTERIM_SIRASI[0];
  const ilkSaat = saatiTemizle(timings[ilkVakit.alan]);
  return { etiket: ilkVakit.etiket, zaman: vakitTarihiOlustur(ilkSaat, yarin), alan: ilkVakit.alan };
}

function geceModuMu(timings) {
  if (!timings) {
    return true;
  }
  const simdi = new Date();
  const bugun = new Date(simdi);
  const ishaMs = vakitTarihiOlustur(saatiTemizle(timings.Isha), bugun).getTime();
  const fajrMs = vakitTarihiOlustur(saatiTemizle(timings.Fajr), bugun).getTime();
  const simdiMs = simdi.getTime();
  return simdiMs >= ishaMs || simdiMs < fajrMs;
}

function temaGeceMiHesapla(timings) {
  const mod = uygulamaAyarlariOku().temaTercihi;
  if (mod === "acik") {
    return false;
  }
  if (mod === "koyu") {
    return true;
  }
  return geceModuMu(timings);
}

function vakitTemasiniUygula(timings) {
  const gece = temaGeceMiHesapla(timings);
  document.documentElement.dataset.tema = gece ? "gece" : "gunduz";
  const renk = gece ? "#0c101d" : "#e8ecf4";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", renk);
}

function sayaçGuncelle() {
  if (!sonTimings) {
    return;
  }

  const sonraki = sonrakiVakitiBul(sonTimings);
  const kalan = sonraki.zaman.getTime() - Date.now();
  document.getElementById("sonrakiVakitAdi").textContent = sonraki.etiket;
  document.getElementById("kalanSure").textContent = msToSaatDakikaSaniye(kalan);
  vakitTemasiniUygula(sonTimings);
  const kutu = document.getElementById("kalanSureKutu");
  if (kutu) {
    const birSaat = 60 * 60 * 1000;
    const vurgu = sonraki.alan === "Maghrib" || (kalan > 0 && kalan <= birSaat);
    kutu.classList.toggle("sonraki-vurgulu", vurgu);
  }
}

function sayaçBaslat(timings) {
  sonTimings = timings;
  if (sayacIntervalId) {
    clearInterval(sayacIntervalId);
  }
  sayaçGuncelle();
  sayacIntervalId = setInterval(sayaçGuncelle, 1000);
  void ezanHatirlatmaKontrol().catch(() => {});
}

function sayaçTemizle() {
  sonTimings = null;
  sonVakitlerKaynak = "il";
  if (sayacIntervalId) {
    clearInterval(sayacIntervalId);
    sayacIntervalId = null;
  }
  document.getElementById("sonrakiVakitAdi").textContent = "--";
  document.getElementById("kalanSure").textContent = "--:--:--";
  document.getElementById("kalanSureKutu")?.classList.remove("sonraki-vurgulu");
  vakitTemasiniUygula(null);
}

function apiIcinIlAdi(il) {
  return il
    .replaceAll("İ", "I")
    .replaceAll("ı", "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function ilMetniTamEslestir(a, b) {
  return apiIcinIlAdi(a).toLowerCase().trim() === apiIcinIlAdi(b).toLowerCase().trim();
}

function ilAdiniIllerListesiyleEslestir(hamMetin) {
  if (!hamMetin || typeof hamMetin !== "string") {
    return null;
  }
  const s = hamMetin.trim();
  if (!s) {
    return null;
  }
  const uzunlukSirali = [...ILLER].sort((a, b) => b.length - a.length);
  for (const il of uzunlukSirali) {
    if (ilMetniTamEslestir(s, il)) {
      return il;
    }
  }
  const sNorm = apiIcinIlAdi(s).toLowerCase();
  for (const il of uzunlukSirali) {
    const ilNorm = apiIcinIlAdi(il).toLowerCase();
    if (ilNorm.length >= 4 && (sNorm.includes(ilNorm) || ilNorm.includes(sNorm))) {
      return il;
    }
  }
  return null;
}

async function koordinattanIlTahminEt(lat, lon) {
  try {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(lon)}&localityLanguage=tr`;
    const res = await fetch(url);
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    if (data.countryCode && data.countryCode !== "TR") {
      return null;
    }
    const sirali = [data.principalSubdivision, data.city, data.locality, data.administrative]
      .filter((x) => x && String(x).trim());
    for (const parca of sirali) {
      const es = ilAdiniIllerListesiyleEslestir(String(parca));
      if (es) {
        return es;
      }
    }
    return null;
  } catch {
    return null;
  }
}

function yuklemeEkraniniKapat() {
  const el = document.getElementById("yuklemeEkrani");
  if (!el || el.dataset.kapatildi === "1") {
    return;
  }
  el.dataset.kapatildi = "1";
  el.removeAttribute("aria-busy");
  el.setAttribute("aria-hidden", "true");
  el.classList.add("yukleme-ekrani--kapali");
  window.setTimeout(() => {
    el.classList.add("gizli");
    /* Mobil Chrome’da adres çubuğunun hızlıca küçülmesini tetiklemek için tek satırlık kaydırma */
    try {
      const y = window.scrollY || 0;
      window.scrollTo(0, y + 1);
      window.requestAnimationFrame(() => {
        window.scrollTo(0, y);
      });
    } catch {
      /* yok say */
    }
  }, 480);
}

function dereceyiNormalle(deger) {
  return (deger + 360) % 360;
}

function radyan(deger) {
  return (deger * Math.PI) / 180;
}

function kiblaAcisiHesapla(enlem, boylam) {
  const lat1 = radyan(enlem);
  const lon1 = radyan(boylam);
  const lat2 = radyan(KABE_KONUMU.lat);
  const lon2 = radyan(KABE_KONUMU.lon);
  const dLon = lon2 - lon1;

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return dereceyiNormalle((Math.atan2(y, x) * 180) / Math.PI);
}

function ibreyiGuncelle() {
  const pusulaIbre = document.getElementById("pusulaIbre");
  if (!pusulaIbre || kibleAcisi === null) {
    return;
  }
  const donus = cihazBasligi === null ? kibleAcisi : dereceyiNormalle(kibleAcisi - cihazBasligi);
  pusulaIbre.style.transform = `translate(-50%, -100%) rotate(${donus}deg)`;
}

function durumMetniGuncelle() {
  const kibleDurum = document.getElementById("kibleDurum");
  if (kibleAcisi === null) {
    return;
  }

  if (cihazBasligi === null) {
    kibleDurum.textContent = "Pusula sensörü yok. İbre kuzeye göre kıble yönünü gösteriyor.";
    return;
  }

  const fark = Math.round(dereceyiNormalle(kibleAcisi - cihazBasligi));
  if (fark <= 5 || fark >= 355) {
    kibleDurum.textContent = "Kıble yönündesin. Allah kabul etsin.";
  } else if (fark < 180) {
    kibleDurum.textContent = `Kıble için telefonu sağa doğru yaklaşık ${fark}° çevir.`;
  } else {
    kibleDurum.textContent = `Kıble için telefonu sola doğru yaklaşık ${360 - fark}° çevir.`;
  }
}

function yonDegisimiDinleyici(event) {
  let baslik = null;
  if (typeof event.webkitCompassHeading === "number") {
    baslik = event.webkitCompassHeading;
  } else if (typeof event.alpha === "number") {
    baslik = dereceyiNormalle(360 - event.alpha);
  }

  if (baslik !== null && Number.isFinite(baslik)) {
    cihazBasligi = baslik;
    ibreyiGuncelle();
    durumMetniGuncelle();
  }
}

async function pusulaIzniIsteVeBaslat() {
  if (typeof window.DeviceOrientationEvent === "undefined") {
    return;
  }

  const izinGerekiyor = typeof DeviceOrientationEvent.requestPermission === "function";
  if (izinGerekiyor) {
    try {
      const cevap = await DeviceOrientationEvent.requestPermission();
      if (cevap !== "granted") {
        return;
      }
    } catch {
      return;
    }
  }

  window.addEventListener("deviceorientation", yonDegisimiDinleyici, true);
}

async function konumIzniPermissionsDurumu() {
  if (!navigator.permissions?.query) {
    return null;
  }
  try {
    const sonuc = await navigator.permissions.query({ name: "geolocation" });
    return sonuc.state;
  } catch {
    return null;
  }
}

function konumHatasiKullaniciyaMetin(err) {
  const k = err?.konumKodu;
  if (k === "IZIN_RED" || err?.geoKod === 1) {
    return metinAl("konumIzniRed");
  }
  if (k === "HTTPS") {
    return metinAl("konumHttpsGerekli");
  }
  if (k === "DESTEK_YOK") {
    return metinAl("konumDestekYok");
  }
  if (k === "KULLANILAMIYOR" || err?.geoKod === 2) {
    return metinAl("konumKaynakYok");
  }
  if (k === "ZAMAN_ASIMI" || err?.geoKod === 3) {
    return metinAl("konumZamanAsimi");
  }
  return metinAl("konumGenelHata");
}

function konumuAl() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      const e = new Error("desteklenmiyor");
      e.konumKodu = "DESTEK_YOK";
      reject(e);
      return;
    }
    if (typeof window.isSecureContext === "boolean" && !window.isSecureContext) {
      const e = new Error("https");
      e.konumKodu = "HTTPS";
      reject(e);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      resolve,
      (geoErr) => {
        const e = new Error(geoErr?.message || "konum");
        e.geoKod = geoErr?.code;
        if (geoErr?.code === 1) {
          e.konumKodu = "IZIN_RED";
        } else if (geoErr?.code === 2) {
          e.konumKodu = "KULLANILAMIYOR";
        } else if (geoErr?.code === 3) {
          e.konumKodu = "ZAMAN_ASIMI";
        } else {
          e.konumKodu = "GENEL";
        }
        reject(e);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 60000
      }
    );
  });
}

async function kibleyiBul() {
  const kibleDurum = document.getElementById("kibleDurum");
  const kibleAciYazisi = document.getElementById("kibleAci");
  if (!uygulamaAyarlariOku().konumKullan) {
    kibleDurum.textContent = metinAl("kibleKonumKapali");
    return;
  }
  const izinOnceden = await konumIzniPermissionsDurumu();
  if (izinOnceden === "denied") {
    kibleDurum.textContent = metinAl("konumIzniRed");
    return;
  }
  kibleDurum.textContent = metinAl("kibleKonumAliniyor");

  try {
    const konum = await konumuAl();
    const { latitude, longitude } = konum.coords;
    kibleAcisi = kiblaAcisiHesapla(latitude, longitude);
    kibleAciYazisi.textContent = `Kıble açısı: ${kibleAcisi.toFixed(1)}°`;
    await pusulaIzniIsteVeBaslat();
    ibreyiGuncelle();
    durumMetniGuncelle();
  } catch (err) {
    kibleDurum.textContent = konumHatasiKullaniciyaMetin(err);
  }
}

function kibleBulucuyuBaslat() {
  const kibleBulBtn = document.getElementById("kibleBulBtn");
  if (!kibleBulBtn) {
    return;
  }
  kibleBulBtn.addEventListener("click", kibleyiBul);
}

function kuranDurumYaz(metin) {
  const alan = document.getElementById("kuranDurumYazisi");
  if (alan) {
    alan.textContent = metin;
  }
}

function seciliSureyiYukle() {
  return localStorage.getItem(SECILI_SURE_ANAHTARI) || "1";
}

function seciliSureyiKaydet(sureNo) {
  localStorage.setItem(SECILI_SURE_ANAHTARI, String(sureNo));
}

function ayetKartiOlustur(no, arapca, turkce) {
  const kart = document.createElement("article");
  kart.className = "ayet-kart";
  kart.innerHTML = `
    <p class="ayet-no">Ayet ${no}</p>
    <p class="ayet-arapca">${arapca}</p>
    <p class="ayet-turkce">${turkce}</p>
  `;
  return kart;
}

async function sureleriYukle() {
  const secim = document.getElementById("sureSecimi");
  secim.innerHTML = "";
  const yanit = await fetch("https://api.quran.gading.dev/surah");
  if (!yanit.ok) {
    throw new Error("Sure listesi alınamadı");
  }
  const json = await yanit.json();
  const sureler = json?.data || [];
  sureler.forEach((sure) => {
    const sureNo = sure.number;
    const latinAd = sure?.name?.transliteration?.tr || sure?.name?.transliteration?.en || sure?.name?.short || "Sure";
    const arapcaAd = sure?.name?.short || "";
    const option = document.createElement("option");
    option.value = String(sureNo);
    option.textContent = `${sureNo}. ${latinAd} ${arapcaAd ? `(${arapcaAd})` : ""}`;
    secim.appendChild(option);
  });
}

async function sureyiGetirVeGoster(sureNo) {
  const ayetlerAlani = document.getElementById("ayetlerAlani");
  ayetlerAlani.innerHTML = "";
  kuranDurumYaz("Sure yükleniyor...");

  try {
    const mealEdition = seciliDil === "id"
      ? "id.indonesian"
      : seciliDil === "en"
        ? "en.asad"
        : seciliDil === "ar"
          ? "ar.muyassar"
          : "tr.diyanet";
    const [arapcaYanit, turkceYanit] = await Promise.all([
      fetch(`https://api.quran.gading.dev/surah/${sureNo}`),
      fetch(`https://api.alquran.cloud/v1/surah/${sureNo}/${mealEdition}`)
    ]);

    if (!arapcaYanit.ok) {
      throw new Error("Arapça sure alınamadı");
    }

    const arapcaJson = await arapcaYanit.json();
    const ayetler = arapcaJson?.data?.verses || [];
    const mealJson = turkceYanit.ok ? await turkceYanit.json() : null;
    const mealAyetler = mealJson?.data?.ayahs || [];

    if (!ayetler.length) {
      throw new Error("Ayet verisi alınamadı");
    }

    ayetler.forEach((ayet, index) => {
      const arapcaMetin = ayet?.text?.arab || "";
      const meal = mealAyetler[index]?.text || "Çeviri şu anda yüklenemedi.";
      ayetlerAlani.appendChild(ayetKartiOlustur(ayet.number?.inSurah || "-", arapcaMetin, meal));
    });
    kuranDurumYaz(mealAyetler.length ? "Sure yüklendi." : "Sure yüklendi, çeviri kısmen alınamadı.");
  } catch {
    kuranDurumYaz("Sure yüklenemedi. İnternet bağlantını kontrol edip tekrar dene.");
  }
}

async function kuranMenusunuBaslat() {
  const sureSecimi = document.getElementById("sureSecimi");
  const sureYukleBtn = document.getElementById("sureYukleBtn");

  try {
    await sureleriYukle();
    const kayitliSure = seciliSureyiYukle();
    sureSecimi.value = kayitliSure;
    await sureyiGetirVeGoster(kayitliSure);
  } catch {
    kuranDurumYaz("Sure listesi alınamadı. İnternet bağlantını kontrol et.");
    return;
  }

  sureSecimi.addEventListener("change", async (event) => {
    const sureNo = event.target.value;
    seciliSureyiKaydet(sureNo);
    await sureyiGetirVeGoster(sureNo);
  });

  sureYukleBtn.addEventListener("click", async () => {
    const sureNo = sureSecimi.value;
    seciliSureyiKaydet(sureNo);
    await sureyiGetirVeGoster(sureNo);
  });
}

function vakitOnbellekOku() {
  try {
    const ham = localStorage.getItem(VAKITLER_ONBELLEK_ANAHTARI);
    if (!ham) {
      return null;
    }
    return JSON.parse(ham);
  } catch {
    return null;
  }
}

function vakitOnbellekKaydet(il, timings) {
  localStorage.setItem(
    VAKITLER_ONBELLEK_ANAHTARI,
    JSON.stringify({ il, tarih: bugunTarihAnahtari(), timings })
  );
}

function vakitGpsOnbellekOku() {
  try {
    const ham = localStorage.getItem(VAKITLER_GPS_ONBELLEK_ANAHTARI);
    if (!ham) {
      return null;
    }
    return JSON.parse(ham);
  } catch {
    return null;
  }
}

function vakitGpsOnbellekKaydet(timings, lat, lon) {
  const kayit = { tarih: bugunTarihAnahtari(), timings };
  if (typeof lat === "number" && typeof lon === "number" && Number.isFinite(lat) && Number.isFinite(lon)) {
    kayit.lat = lat;
    kayit.lon = lon;
  }
  localStorage.setItem(VAKITLER_GPS_ONBELLEK_ANAHTARI, JSON.stringify(kayit));
}

async function vakitleriIlIleCek(il) {
  const ilApi = apiIcinIlAdi(il);
  const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(ilApi)}&country=Turkey&method=13`;
  const yanit = await fetch(url);
  if (!yanit.ok) {
    throw new Error("sunucu");
  }
  const sonuc = await yanit.json();
  const timings = sonuc?.data?.timings;
  if (!timings) {
    throw new Error("veri");
  }
  return timings;
}

async function vakitleriKoordinatlaCek(lat, lon) {
  const url = `https://api.aladhan.com/v1/timings?latitude=${encodeURIComponent(lat)}&longitude=${encodeURIComponent(lon)}&method=13`;
  const yanit = await fetch(url);
  if (!yanit.ok) {
    throw new Error("sunucu");
  }
  const sonuc = await yanit.json();
  const timings = sonuc?.data?.timings;
  if (!timings) {
    throw new Error("veri");
  }
  return timings;
}

function vakitleriUygula(il, timings, durumYazisi, secenekler = {}) {
  const {
    cevrimdisi = false,
    onbellekModu = "il",
    durumMetni = null,
    gpsLat = null,
    gpsLon = null
  } = secenekler;
  const ezanKartlarAlani = document.getElementById("ezanKartlar");
  ezanKartlarAlani.innerHTML = "";
  EZAN_GOSTERIM_SIRASI.forEach((vakit) => {
    const saat = saatiTemizle(timings[vakit.alan]);
    ezanKartlarAlani.appendChild(ezanKartiOlustur(vakit.etiket, saat));
  });
  sayaçBaslat(timings);
  if (onbellekModu === "il") {
    vakitOnbellekKaydet(il, timings);
    sonVakitlerKaynak = "il";
  } else if (onbellekModu === "gps") {
    vakitGpsOnbellekKaydet(timings, gpsLat, gpsLon);
    sonVakitlerKaynak = "gps";
  }
  void planliYerelBildirimleriGuncelle().catch(() => {});
  const ban = document.getElementById("cevrimdisiBanner");
  if (ban) {
    ban.classList.toggle("gizli", !cevrimdisi);
    if (cevrimdisi) {
      ban.textContent = metinAl("cevrimdisiBanner");
    }
  }
  if (durumYazisi) {
    if (durumMetni) {
      durumYazisi.textContent = durumMetni;
    } else if (cevrimdisi) {
      durumYazisi.textContent = metinAl("durumCevrimdisi").replace("{il}", il);
    } else {
      durumYazisi.textContent = metinAl("durumVakitGunluk").replace("{il}", il);
    }
  }
}

function bugunlukOnbellektenDene(il, durumYazisi) {
  const bugun = bugunTarihAnahtari();
  const ob = vakitOnbellekOku();
  if (ob && ob.il === il && ob.tarih === bugun && ob.timings) {
    vakitleriUygula(il, ob.timings, durumYazisi, {
      cevrimdisi: true,
      onbellekModu: "yok",
      durumMetni: metinAl("durumCevrimdisi").replace("{il}", il)
    });
    sonVakitlerKaynak = "il";
    return true;
  }
  const gpsOb = vakitGpsOnbellekOku();
  if (gpsOb && gpsOb.tarih === bugun && gpsOb.timings) {
    vakitleriUygula(il, gpsOb.timings, durumYazisi, {
      cevrimdisi: true,
      onbellekModu: "yok",
      durumMetni: metinAl("durumCevrimdisiGps")
    });
    sonVakitlerKaynak = "gps";
    return true;
  }
  return false;
}

async function ezanVakitleriniYukle(il) {
  const ezanKartlarAlani = document.getElementById("ezanKartlar");
  const durumYazisi = document.getElementById("durumYazisi");
  ezanKartlarAlani.innerHTML = "";
  durumYazisi.textContent = metinAl("durumYukleniyor").replace("{il}", il);

  try {
    const timings = await vakitleriIlIleCek(il);
    vakitleriUygula(il, timings, durumYazisi, { cevrimdisi: false, onbellekModu: "il" });
  } catch {
    if (bugunlukOnbellektenDene(il, durumYazisi)) {
      return;
    }
    sayaçTemizle();
    document.getElementById("cevrimdisiBanner")?.classList.add("gizli");
    durumYazisi.textContent = metinAl("durumVakitHata");
  }
}

async function ezanVakitleriniKonumdanYukle() {
  const durumYazisi = document.getElementById("durumYazisi");
  const ilSecimi = document.getElementById("ilSecimi");
  let il = ilSecimi?.value || seciliIliYukle();
  if (!uygulamaAyarlariOku().konumKullan) {
    durumYazisi.textContent = metinAl("kibleKonumKapali");
    return;
  }
  const izinOnceden = await konumIzniPermissionsDurumu();
  if (izinOnceden === "denied") {
    durumYazisi.textContent = metinAl("konumIzniRed");
    return;
  }
  durumYazisi.textContent = metinAl("durumKonumAliniyor");
  try {
    const konum = await konumuAl();
    const { latitude, longitude } = konum.coords;
    const tespitIl = await koordinattanIlTahminEt(latitude, longitude);
    if (tespitIl && ilSecimi) {
      ilSecimi.value = tespitIl;
      seciliIliKaydet(tespitIl);
      il = tespitIl;
    }
    const timings = await vakitleriKoordinatlaCek(latitude, longitude);
    vakitleriUygula(il, timings, durumYazisi, {
      cevrimdisi: false,
      onbellekModu: "gps",
      durumMetni: metinAl("durumKonumVakit"),
      gpsLat: latitude,
      gpsLon: longitude
    });
  } catch (err) {
    if (err?.konumKodu || typeof err?.geoKod === "number") {
      durumYazisi.textContent = konumHatasiKullaniciyaMetin(err);
      return;
    }
    if (bugunlukOnbellektenDene(il, durumYazisi)) {
      return;
    }
    sayaçTemizle();
    document.getElementById("cevrimdisiBanner")?.classList.add("gizli");
    durumYazisi.textContent = metinAl("durumVakitHata");
  }
}

const MENU_SEKMELERI = ["ezan", "kuran", "kible", "kaza", "ayarlar"];

function simdikiSekmeOku() {
  const btn = document.querySelector(".sekme-buton.aktif");
  const m = btn?.dataset?.menu;
  return MENU_SEKMELERI.includes(m) ? m : aktifMenuyuYukle();
}

function sekmeyeGecUygula(hedef, gecmis = "replace") {
  if (!MENU_SEKMELERI.includes(hedef)) {
    return;
  }
  const ezanMenu = document.getElementById("menuEzan");
  const kuranMenu = document.getElementById("menuKuran");
  const kibleMenu = document.getElementById("menuKible");
  const kazaMenu = document.getElementById("menuKaza");
  const ayarlarMenu = document.getElementById("menuAyarlar");
  const sekmeler = document.querySelectorAll(".sekme-buton");
  if (!ezanMenu || !kuranMenu || !kibleMenu || !kazaMenu || !ayarlarMenu) {
    return;
  }
  ezanMenu.classList.toggle("gizli", hedef !== "ezan");
  kuranMenu.classList.toggle("gizli", hedef !== "kuran");
  kibleMenu.classList.toggle("gizli", hedef !== "kible");
  kazaMenu.classList.toggle("gizli", hedef !== "kaza");
  ayarlarMenu.classList.toggle("gizli", hedef !== "ayarlar");
  sekmeler.forEach((s) => s.classList.toggle("aktif", s.dataset.menu === hedef));
  aktifMenuyuKaydet(hedef);
  if (gecmis === "skip") {
    return;
  }
  try {
    const u = new URL(window.location.href);
    u.searchParams.set("menu", hedef);
    const qs = u.searchParams.toString();
    const yeniUrl = `${u.pathname}${qs ? `?${qs}` : ""}${u.hash}`;
    const st = { menu: hedef };
    if (gecmis === "push") {
      history.pushState(st, "", yeniUrl);
    } else {
      history.replaceState(st, "", yeniUrl);
    }
  } catch {
    /* yok say */
  }
}

function capacitorAppEklentisiAl() {
  const P = window.Capacitor?.Plugins;
  return P?.App ?? P?.app;
}

function capacitorAndroidMi() {
  const C = window.Capacitor;
  if (!C) {
    return false;
  }
  if (typeof C.getPlatform === "function" && C.getPlatform() === "android") {
    return true;
  }
  if (typeof C.isNativePlatform === "function" && C.isNativePlatform()) {
    return /Android/i.test(navigator.userAgent || "");
  }
  return false;
}

function uygulamadanCik() {
  const App = capacitorAppEklentisiAl();
  if (App?.exitApp) {
    void App.exitApp();
  }
}

function menuGeriIsle(geriOlayi) {
  const panel = document.getElementById("ayarlarPanel");
  if (panel && !panel.classList.contains("gizli")) {
    panel.classList.add("gizli");
    return;
  }
  if (menuGeriYigini.length > 0) {
    const onceki = menuGeriYigini.pop();
    sekmeyeGecUygula(onceki, "replace");
    return;
  }
  if (geriOlayi && geriOlayi.canGoBack) {
    window.history.back();
    return;
  }
  if (window.confirm(metinAl("uygulamaCikisOnay"))) {
    uygulamadanCik();
  }
}

function androidGeriVeCikisBaslat() {
  if (androidGeriDinleyiciKayitli) {
    return true;
  }
  if (!window.Capacitor || !capacitorAndroidMi()) {
    return false;
  }
  const App = capacitorAppEklentisiAl();
  if (!App || typeof App.addListener !== "function") {
    return false;
  }
  if (androidGeriKayitSuruyor) {
    return false;
  }
  androidGeriKayitSuruyor = true;
  Promise.resolve(
    App.addListener("backButton", (ev) => {
      menuGeriIsle(ev);
    })
  )
    .then(() => {
      androidGeriDinleyiciKayitli = true;
    })
    .catch(() => {})
    .finally(() => {
      androidGeriKayitSuruyor = false;
    });
  return false;
}

function androidGeriVeCikisZamanlaDene() {
  if (!capacitorAndroidMi()) {
    return;
  }
  if (androidGeriDinleyiciKayitli) {
    return;
  }
  if (androidGeriZamanlayiciId != null) {
    return;
  }
  let deneme = 0;
  androidGeriZamanlayiciId = window.setInterval(() => {
    deneme += 1;
    if (androidGeriVeCikisBaslat() || deneme >= 40) {
      window.clearInterval(androidGeriZamanlayiciId);
      androidGeriZamanlayiciId = null;
    }
  }, 100);
}

function tarihceGeriBaslat() {
  if (tarihceGeriDinleyiciKayitli) {
    return;
  }
  tarihceGeriDinleyiciKayitli = true;
  window.addEventListener("popstate", () => {
    const m = new URLSearchParams(window.location.search).get("menu");
    if (!MENU_SEKMELERI.includes(m)) {
      return;
    }
    menuGeriYigini = [];
    sekmeyeGecUygula(m, "skip");
  });
}

function menuleriBaslat() {
  const sekmeler = document.querySelectorAll(".sekme-buton");
  const urlMenu = new URLSearchParams(window.location.search).get("menu");
  let aktifMenu = aktifMenuyuYukle();
  if (MENU_SEKMELERI.includes(urlMenu)) {
    aktifMenu = urlMenu;
    aktifMenuyuKaydet(urlMenu);
  }

  menuGeriYigini = [];
  sekmeyeGecUygula(aktifMenu, "replace");

  tarihceGeriBaslat();

  sekmeler.forEach((sekme) => {
    sekme.addEventListener("click", () => {
      const hedef = sekme.dataset.menu;
      const simdi = simdikiSekmeOku();
      if (simdi !== hedef) {
        menuGeriYigini.push(simdi);
      }
      sekmeyeGecUygula(hedef, "push");
    });
  });

  androidGeriVeCikisZamanlaDene();
  window.addEventListener("load", () => {
    androidGeriVeCikisZamanlaDene();
  });
}

function ayarlarMenusunuBaslat() {
  const sessiz = document.getElementById("ayarOtomatikSessiz");
  const konum = document.getElementById("ayarKonumAcik");
  const hadis = document.getElementById("ayarGununHadisi");
  const ezanSel = document.getElementById("ayarEzanHatirlatma");
  const temaSel = document.getElementById("ayarTemaSecimi");
  const manevi = document.getElementById("ayarManeviOgut");
  const cuma = document.getElementById("ayarCumaBildirim");
  if (!sessiz || !konum || !hadis || !ezanSel || !temaSel || !manevi || !cuma) {
    return;
  }

  const uiAyarUygula = () => {
    const a = uygulamaAyarlariOku();
    sessiz.checked = a.otomatikSessiz;
    konum.checked = a.konumKullan;
    hadis.checked = a.gununHadisiBildirim;
    manevi.checked = a.maneviOgutBildirim;
    cuma.checked = a.cumaSabahiBildirim;
    ezanHatirlatmaSecenekleriniDoldur();
    temaSecenekleriniDoldur();
  };

  uiAyarUygula();

  const kaydet = (parcali) => {
    const mevcut = uygulamaAyarlariOku();
    uygulamaAyarlariKaydet({ ...mevcut, ...parcali });
  };
  const kaydetVePlanliBildirim = (parcali) => {
    kaydet(parcali);
    void planliYerelBildirimleriGuncelle().catch(() => {});
  };

  sessiz.addEventListener("change", () => {
    kaydet({ otomatikSessiz: sessiz.checked });
  });
  konum.addEventListener("change", () => {
    kaydet({ konumKullan: konum.checked });
  });
  hadis.addEventListener("change", () => {
    kaydetVePlanliBildirim({ gununHadisiBildirim: hadis.checked });
  });
  manevi.addEventListener("change", () => {
    kaydetVePlanliBildirim({ maneviOgutBildirim: manevi.checked });
  });
  cuma.addEventListener("change", () => {
    kaydetVePlanliBildirim({ cumaSabahiBildirim: cuma.checked });
  });
  ezanSel.addEventListener("change", async () => {
    const dk = Number(ezanSel.value);
    kaydet({ ezanHatirlatmaDk: [0, 5, 10, 15, 20, 25, 30].includes(dk) ? dk : 0 });
    ezanHatirlatmaSecenekleriniDoldur();
    await planliYerelBildirimleriGuncelle().catch(() => {});
    const pa = uygulamaAyarlariOku();
    if (pa.ezanHatirlatmaDk > 0 && !yerelZamanlanmisBildirimDestekleniyorMu()) {
      bildirimDurumuYaz(metinAl("bildirimEzanSadeceAndroidApk"));
    }
  });
  temaSel.addEventListener("change", () => {
    const v = temaSel.value;
    const temaTercihi = ["otomatik", "acik", "koyu"].includes(v) ? v : "otomatik";
    kaydet({ temaTercihi });
    temaSecenekleriniDoldur();
    vakitTemasiniUygula(sonTimings);
  });
}

async function metinPaylas(baslik, metin) {
  if (navigator.share) {
    try {
      await navigator.share({ title: baslik, text: metin });
      return;
    } catch (e) {
      if (e && e.name === "AbortError") {
        return;
      }
    }
  }
  const url = `https://wa.me/?text=${encodeURIComponent(`${baslik}\n\n${metin}`)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function paylasVakitleri() {
  if (!sonTimings) {
    return;
  }
  const il = document.getElementById("ilSecimi")?.value || "";
  const satirlar = EZAN_GOSTERIM_SIRASI.map(
    (v) => `${v.etiket}: ${saatiTemizle(sonTimings[v.alan])}`
  );
  const baslik = metinAl("paylasVakitBaslik");
  let govde = `${baslik}\n${il}`;
  if (sonVakitlerKaynak === "gps") {
    govde += `\n${metinAl("paylasKonumSatiri")}`;
  }
  govde += `\n\n${satirlar.join("\n")}`;
  metinPaylas("Ezan Vakti", govde);
}

function paylasGununHadisi() {
  const m = document.getElementById("hadisMetni")?.textContent?.trim() || simdikiHadisMetni();
  metinPaylas(metinAl("hadisBaslik"), m);
}

function ilSeciminiBaslat() {
  const ilSecimi = document.getElementById("ilSecimi");
  const yenileBtn = document.getElementById("yenileBtn");
  const konumBtn = document.getElementById("konumdanVakitBtn");

  ILLER.forEach((il) => {
    const option = document.createElement("option");
    option.value = il;
    option.textContent = il;
    ilSecimi.appendChild(option);
  });

  const seciliIl = seciliIliYukle();
  ilSecimi.value = seciliIl;
  ilkVakitYuklemePromise = ezanVakitleriniYukle(seciliIl);

  ilSecimi.addEventListener("change", (event) => {
    const il = event.target.value;
    seciliIliKaydet(il);
    ezanVakitleriniYukle(il);
  });

  yenileBtn.addEventListener("click", () => {
    ezanVakitleriniYukle(ilSecimi.value);
  });

  konumBtn?.addEventListener("click", () => {
    ezanVakitleriniKonumdanYukle();
  });

  document.getElementById("paylasVakitlerBtn")?.addEventListener("click", () => {
    paylasVakitleri();
  });
  document.getElementById("paylasHadisBtn")?.addEventListener("click", () => {
    paylasGununHadisi();
  });
}

async function guncellemeleriKontrolEt() {
  const durum = document.getElementById("ayarGuncellemeDurum");
  const yenileBtn = document.getElementById("ayarGuncellemeYenileBtn");
  const kontrolBtn = document.getElementById("ayarGuncellemeBtn");

  const yaz = (anahtar) => {
    if (durum) {
      durum.textContent = metinAl(anahtar);
    }
  };

  const yenileGizle = () => yenileBtn?.classList.add("gizli");
  const yenileGoster = () => yenileBtn?.classList.remove("gizli");

  yenileGizle();

  if (!kontrolBtn) {
    return;
  }

  if (!("serviceWorker" in navigator)) {
    yaz("guncellemeSwYok");
    return;
  }

  kontrolBtn.disabled = true;
  yaz("guncellemeKontrolEdiliyor");

  try {
    const reg = await navigator.serviceWorker.getRegistration();
    if (!reg) {
      yaz("guncellemeSwKayitYok");
      return;
    }

    if (reg.waiting) {
      yaz("guncellemeHazirYenile");
      yenileGoster();
      return;
    }

    let yeniSurum = false;

    const updatefoundIsleyici = () => {
      const iw = reg.installing;
      if (!iw) {
        return;
      }
      iw.addEventListener("statechange", () => {
        if (iw.state === "installed" && navigator.serviceWorker.controller) {
          yeniSurum = true;
          yaz("guncellemeHazirYenile");
          yenileGoster();
        }
      });
    };

    reg.addEventListener("updatefound", updatefoundIsleyici);
    await reg.update();

    for (let i = 0; i < 15; i += 1) {
      await new Promise((r) => setTimeout(r, 200));
      if (reg.waiting || yeniSurum) {
        break;
      }
    }

    reg.removeEventListener("updatefound", updatefoundIsleyici);

    if (reg.waiting) {
      yaz("guncellemeHazirYenile");
      yenileGoster();
    } else if (!yeniSurum) {
      yaz("guncellemeGuncel");
    }
  } catch {
    yaz("guncellemeHata");
  } finally {
    kontrolBtn.disabled = false;
  }
}

function guncellemeKontrolunuBaslat() {
  const kontrolBtn = document.getElementById("ayarGuncellemeBtn");
  const yenileBtn = document.getElementById("ayarGuncellemeYenileBtn");
  kontrolBtn?.addEventListener("click", () => {
    guncellemeleriKontrolEt();
  });
  yenileBtn?.addEventListener("click", () => {
    window.location.reload();
  });
}

function servisWorkerKaydet() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {
        // Service worker kaydı başarısız olursa uygulama normal şekilde çalışır.
      });
    });
  }
}

function pwaOzelEtkilesimleriBaslat() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

pwaOzelEtkilesimleriBaslat();
uygulamayiBaslat();
ayarlariBaslat();
ayarlarMenusunuBaslat();
guncellemeKontrolunuBaslat();
menuleriBaslat();
ilSeciminiBaslat();
hadisKutusuBaslat();
bildirimleriBaslat();
kuranMenusunuBaslat();
kibleBulucuyuBaslat();
kazaAksiyonlariniBaslat();
servisWorkerKaydet();

Promise.race([
  ilkVakitYuklemePromise ?? Promise.resolve(),
  new Promise((resolve) => {
    window.setTimeout(resolve, 5000);
  })
]).finally(() => {
  requestAnimationFrame(() => {
    yuklemeEkraniniKapat();
  });
});
