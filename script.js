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
const HADIS_SOZLERI = [
  "Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz, nefret ettirmeyiniz.",
  "Amellerin Allah'a en sevimlisi az da olsa devamlı olanıdır.",
  "Allah sizin suretlerinize değil, kalplerinize ve amellerinize bakar.",
  "Bir iyilik yap, denize at; balık bilmezse Halik bilir.",
  "Sabır acıdır, meyvesi tatlıdır.",
  "Güzel ahlak, terazide en ağır gelen iyiliktir.",
  "İnsanların en hayırlısı, insanlara faydalı olandır.",
  "Dua müminin silahıdır."
];
const OGUT_BILDIRIMLERI = [
  "Namazını vaktinde kılmaya niyet et, niyet hayrın başlangıcıdır.",
  "Günün içinde kısa bir tefekkür molası ver, kalp huzur bulur.",
  "Bir kişiye tebessüm etmek de sadakadır, unutma.",
  "Bugün bir ayet veya hadis öğrenmeye vakit ayır.",
  "Zikri artır, kalbin sakinleşsin.",
  "İyiliği gizli yapmak ihlası güçlendirir."
];
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
    ayarEzanOnceAlt: "Seçilen süre kadar önce bir hatırlatma gönderilir.",
    ayarEzanKapali: "Kapalı",
    ayarEzanDkOnce: "{n} dakika önce",
    kibleKonumKapali: "Konum ayarlarda kapalı. Açmak için Ayarlar sekmesinden Konum’u etkinleştir.",
    hadisBildirimBaslik: "Günün Hadisi",
    ezanHatirlatmaBaslik: "Namaz vakti yaklaşıyor",
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
    ayarTitresimEtiket: "Dokunuşta hafif titreşim",
    ayarTitresimAlt: "Butonlara basınca kısa titreşim (destekleyen cihazlarda).",
    ayarManeviOgutEtiket: "Manevi öğüt bildirimleri",
    ayarManeviOgutAlt:
      "Yaklaşık 5 saatte bir kısa hatırlatma — uygulama açık veya arka plandayken çalışır.",
    ayarCumaEtiket: "Cuma sabahı kutlama",
    ayarCumaAlt: "Cuma günü sabah saatlerinde bir kez hayırlı cumalar bildirimi.",
    ayarBildirimNotu:
      "Sunucudan anlık push için ayrı altyapı gerekir; bu uygulama izin verildiğinde cihazda zamanlanmış hatırlatmalar kullanır.",
    ayarKisayolBaslik: "Ana ekran kısayolu (Android)",
    ayarKisayolMetin:
      "Tarayıcı menüsünden “Ana ekrana ekle” deyin. İkona uzun basınca Kıble, Vakitler, Kur’an ve Ayarlar kısayolları çıkar.",
    bildirimDurumuAcik: "Bildirimler açık. Ayarlardan öğüt, Cuma ve hatırlatmaları yönetebilirsin.",
    bildirimDurumuIlk: "Bildirim izni verildi. Ayarlardan türleri seçebilirsin.",
    hayirliCumalarBaslik: "Hayırlı Cumalar",
    hayirliCumalarGovde: "Allah kabul etsin. Hayırlı ve bereketli bir Cuma dileriz.",
    bildirimDurumuDestekYok: "Bu cihaz bildirimleri desteklemiyor.",
    bildirimDurumuKapali: "Bildirimler kapalı. Ezan sekmesinde Bildirimleri Aç’a dokun.",
    bildirimDurumuHata: "Bildirim gönderilemedi. Lütfen tekrar dene.",
    bildirimDurumuIzinsiz: "Bildirim izni verilmedi."
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
    ayarEzanOnceAlt: "Sends one reminder this many minutes before each time.",
    ayarEzanKapali: "Off",
    ayarEzanDkOnce: "{n} min before",
    kibleKonumKapali: "Location is off in Settings. Turn on Location in the Settings tab.",
    hadisBildirimBaslik: "Daily Hadith",
    ezanHatirlatmaBaslik: "Prayer time approaching",
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
    ayarTitresimEtiket: "Light haptic on tap",
    ayarTitresimAlt: "Short vibration on buttons (where supported).",
    ayarManeviOgutEtiket: "Spiritual reminder notifications",
    ayarManeviOgutAlt: "About every 5 hours while the app is open or in the background.",
    ayarCumaEtiket: "Friday morning greeting",
    ayarCumaAlt: "Once on Friday morning — a Jumu’ah message.",
    ayarBildirimNotu:
      "True server push needs backend infrastructure; this app uses scheduled reminders on your device when allowed.",
    ayarKisayolBaslik: "Home screen shortcut (Android)",
    ayarKisayolMetin:
      "Use “Add to Home screen” in the browser menu. Long-press the icon for Qibla, Times, Quran, and Settings shortcuts.",
    bildirimDurumuAcik: "Notifications on. Manage reminders in Settings.",
    bildirimDurumuIlk: "Permission granted. Choose notification types in Settings.",
    hayirliCumalarBaslik: "Jumu’ah Mubarak",
    hayirliCumalarGovde: "May Allah accept from you. Have a blessed Friday.",
    bildirimDurumuDestekYok: "This device does not support notifications.",
    bildirimDurumuKapali: "Notifications are off. Tap Enable Notifications on the Prayer tab.",
    bildirimDurumuHata: "Could not send notification. Please try again.",
    bildirimDurumuIzinsiz: "Notification permission was not granted."
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
    ayarEzanOnceAlt: "Mengirim satu pengingat beberapa menit sebelum setiap waktu.",
    ayarEzanKapali: "Mati",
    ayarEzanDkOnce: "{n} menit sebelum",
    kibleKonumKapali: "Lokasi dimatikan di Pengaturan. Aktifkan Lokasi di tab Pengaturan.",
    hadisBildirimBaslik: "Hadits Hari Ini",
    ezanHatirlatmaBaslik: "Waktu salat mendekat",
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
    ayarTitresimEtiket: "Getaran ringan saat ketuk",
    ayarTitresimAlt: "Getaran singkat pada tombol (jika didukung).",
    ayarManeviOgutEtiket: "Notifikasi pengingat rohani",
    ayarManeviOgutAlt: "Sekitar setiap 5 jam saat aplikasi terbuka atau di latar belakang.",
    ayarCumaEtiket: "Ucapan Jumat pagi",
    ayarCumaAlt: "Sekali pada Jumat pagi — pesan Jumu’ah.",
    ayarBildirimNotu:
      "Push sungguhan dari server memerlukan backend; aplikasi ini memakai pengingat terjadwal di perangkat.",
    ayarKisayolBaslik: "Pintasan layar beranda (Android)",
    ayarKisayolMetin:
      "Gunakan “Tambahkan ke Layar beranda” di menu browser. Tekan lama ikon untuk pintasan Kiblat, Waktu, Quran, dan Pengaturan.",
    bildirimDurumuAcik: "Notifikasi aktif. Atur di Pengaturan.",
    bildirimDurumuIlk: "Izin diberikan. Pilih jenis notifikasi di Pengaturan.",
    hayirliCumalarBaslik: "Jumu’ah Mubarak",
    hayirliCumalarGovde: "Semoga Allah menerima. Semoga Jumat Anda diberkahi.",
    bildirimDurumuDestekYok: "Perangkat ini tidak mendukung notifikasi.",
    bildirimDurumuKapali: "Notifikasi mati. Ketuk Aktifkan Notifikasi di tab Salat.",
    bildirimDurumuHata: "Notifikasi gagal. Coba lagi.",
    bildirimDurumuIzinsiz: "Izin notifikasi tidak diberikan."
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
    ayarEzanOnceAlt: "إرسال تذكير قبل كل وقت بالدقائق المختارة.",
    ayarEzanKapali: "إيقاف",
    ayarEzanDkOnce: "قبل {n} دقيقة",
    kibleKonumKapali: "الموقع معطّل في الإعدادات. فعّل الموقع من تبويب الإعدادات.",
    hadisBildirimBaslik: "حديث اليوم",
    ezanHatirlatmaBaslik: "اقترب وقت الصلاة",
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
    ayarTitresimEtiket: "اهتزاز خفيف عند اللمس",
    ayarTitresimAlt: "اهتزاز قصير عند الأزرار (إن وُجدت).",
    ayarManeviOgutEtiket: "تذكيرات روحية",
    ayarManeviOgutAlt: "تقريباً كل 5 ساعات عند فتح التطبيق أو في الخلفية.",
    ayarCumaEtiket: "تهنئة صباح الجمعة",
    ayarCumaAlt: "مرة واحدة صباح الجمعة — رسالة مباركة.",
    ayarBildirimNotu:
      "الإشعارات الفورية من الخادم تحتاج بنية خلفية؛ هذا التطبيق يستخدم تذكيرات مجدولة على جهازك.",
    ayarKisayolBaslik: "اختصار الشاشة الرئيسية (أندرويد)",
    ayarKisayolMetin:
      "استخدم «إضافة إلى الشاشة الرئيسية» من قائمة المتصفح. اضغط مطولاً على الأيقونة لاختصارات القبلة والمواقيت والقرآن والإعدادات.",
    bildirimDurumuAcik: "الإشعارات مفعّلة. أدر الأنواع من الإعدادات.",
    bildirimDurumuIlk: "تم منح الإذن. اختر أنواع الإشعارات من الإعدادات.",
    hayirliCumalarBaslik: "جمعة مباركة",
    hayirliCumalarGovde: "تقبل الله منكم. جمعاً مباركاً.",
    bildirimDurumuDestekYok: "هذا الجهاز لا يدعم الإشعارات.",
    bildirimDurumuKapali: "الإشعارات مغلقة. اضغط «تفعيل الإشعارات» في تبويب الصلاة.",
    bildirimDurumuHata: "تعذر إرسال الإشعار. حاول مرة أخرى.",
    bildirimDurumuIzinsiz: "لم يُمنح إذن الإشعارات."
  }
};
let sayacIntervalId = null;
let bildirimIntervalId = null;
let sonTimings = null;
let sonVakitlerKaynak = "il";
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
    titresimAcik: true
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
    return {
      otomatikSessiz: Boolean(kayit.otomatikSessiz),
      konumKullan: kayit.konumKullan !== false,
      gununHadisiBildirim: Boolean(kayit.gununHadisiBildirim),
      ezanHatirlatmaDk: dkGecerli,
      maneviOgutBildirim: kayit.maneviOgutBildirim !== false,
      cumaSabahiBildirim: Boolean(kayit.cumaSabahiBildirim),
      titresimAcik: kayit.titresimAcik !== false
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

async function bildirimGonderIcerik(baslik, govde, ekstra = {}) {
  const sessiz = bildirimSessizOlsunMu();
  const temel = {
    body: govde,
    icon: "./icons/icon-192.png",
        badge: "./icons/icon-192.png",
    silent: sessiz,
    ...ekstra
  };
  if ("serviceWorker" in navigator) {
    const reg = await navigator.serviceWorker.getRegistration();
    if (reg) {
      await reg.showNotification(baslik, temel);
      return;
    }
  }
  if ("Notification" in window) {
    new Notification(baslik, {
      body: govde,
      silent: sessiz
    });
  }
}

function simdikiHadisMetni() {
  const blok = Math.floor(Date.now() / IKI_SAAT_MS);
  return HADIS_SOZLERI[blok % HADIS_SOZLERI.length];
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
    "ayarSessizEtiket",
    "ayarSessizAlt",
    "ayarKonumEtiket",
    "ayarKonumAlt",
    "ayarTitresimEtiket",
    "ayarTitresimAlt",
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

  document.documentElement.lang = seciliDil;
  document.body.dir = seciliDil === "ar" ? "rtl" : "ltr";
  dilSecimiButonunuGuncelle();
  ezanHatirlatmaSecenekleriniDoldur();
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
  const index = Math.floor(Math.random() * OGUT_BILDIRIMLERI.length);
  return OGUT_BILDIRIMLERI[index];
}

function hadisMetniniGuncelle() {
  const hadisMetni = document.getElementById("hadisMetni");
  if (!hadisMetni) {
    return;
  }
  const blok = Math.floor(Date.now() / IKI_SAAT_MS);
  const metin = HADIS_SOZLERI[blok % HADIS_SOZLERI.length];
  hadisMetni.textContent = metin;
}

function hadisKutusuBaslat() {
  hadisMetniniGuncelle();
  setInterval(hadisMetniniGuncelle, 60 * 1000);
}

async function ogutBildirimiGonder() {
  const mesaj = rasgeleOgutSec();
  await bildirimGonderIcerik("Manevi Hatırlatma", mesaj);
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
  if (!ayar.cumaSabahiBildirim || Notification.permission !== "granted") {
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
  const ayar = uygulamaAyarlariOku();
  const dk = ayar.ezanHatirlatmaDk;
  if (!sonTimings || dk <= 0) {
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
      if (fark < 0 || fark >= dakikaMs) {
        continue;
      }
      const vakitTarihObj = new Date(vakitMs);
      const gunAnahtar = `${vakitTarihObj.getFullYear()}-${ikiHane(vakitTarihObj.getMonth() + 1)}-${ikiHane(vakitTarihObj.getDate())}`;
      const depoAnahtar = `${EZAN_HATIRLATMA_DEPOLAMA_ON_EKI}${gunAnahtar}_${v.alan}_${dk}`;
      if (localStorage.getItem(depoAnahtar)) {
        continue;
      }
      localStorage.setItem(depoAnahtar, "1");
      const govde = `${v.etiket} · ${saat}`;
      await bildirimGonderIcerik(metinAl("ezanHatirlatmaBaslik"), govde);
    }
  }
}

async function bildirimDongusunuCalistir() {
  if (!("Notification" in window)) {
    bildirimDurumuYaz(metinAl("bildirimDurumuDestekYok"));
    return;
  }
  if (Notification.permission !== "granted") {
    bildirimDurumuYaz(metinAl("bildirimDurumuKapali"));
    return;
  }

  bildirimDurumuYaz(metinAl("bildirimDurumuAcik"));

  if (bildirimIntervalId !== null) {
    clearInterval(bildirimIntervalId);
    bildirimIntervalId = null;
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
  }, 60 * 1000);
}

function bildirimleriBaslat() {
  const izinBtn = document.getElementById("bildirimIzinBtn");
  if (!izinBtn) {
    return;
  }

  izinBtn.addEventListener("click", async () => {
    if (!("Notification" in window)) {
      bildirimDurumuYaz(metinAl("bildirimDurumuDestekYok"));
      return;
    }
    const izin = await Notification.requestPermission();
    if (izin === "granted") {
      bildirimDurumuYaz(metinAl("bildirimDurumuIlk"));
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

function vakitTemasiniUygula(timings) {
  const gece = geceModuMu(timings);
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

function konumuAl() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("desteklenmiyor"));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 0
    });
  });
}

async function kibleyiBul() {
  const kibleDurum = document.getElementById("kibleDurum");
  const kibleAciYazisi = document.getElementById("kibleAci");
  if (!uygulamaAyarlariOku().konumKullan) {
    kibleDurum.textContent = metinAl("kibleKonumKapali");
    return;
  }
  kibleDurum.textContent = "Konum alınıyor...";

  try {
    const konum = await konumuAl();
    const { latitude, longitude } = konum.coords;
    kibleAcisi = kiblaAcisiHesapla(latitude, longitude);
    kibleAciYazisi.textContent = `Kıble açısı: ${kibleAcisi.toFixed(1)}°`;
    await pusulaIzniIsteVeBaslat();
    ibreyiGuncelle();
    durumMetniGuncelle();
  } catch {
    kibleDurum.textContent = "Konum alınamadı. Konum iznini açıp tekrar dene.";
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

function vakitGpsOnbellekKaydet(timings) {
  localStorage.setItem(
    VAKITLER_GPS_ONBELLEK_ANAHTARI,
    JSON.stringify({ tarih: bugunTarihAnahtari(), timings })
  );
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
    durumMetni = null
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
    vakitGpsOnbellekKaydet(timings);
    sonVakitlerKaynak = "gps";
  }
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
  const il = document.getElementById("ilSecimi")?.value || seciliIliYukle();
  if (!uygulamaAyarlariOku().konumKullan) {
    durumYazisi.textContent = metinAl("kibleKonumKapali");
    return;
  }
  durumYazisi.textContent = metinAl("durumKonumAliniyor");
  try {
    const konum = await konumuAl();
    const { latitude, longitude } = konum.coords;
    const timings = await vakitleriKoordinatlaCek(latitude, longitude);
    vakitleriUygula(il, timings, durumYazisi, {
      cevrimdisi: false,
      onbellekModu: "gps",
      durumMetni: metinAl("durumKonumVakit")
    });
  } catch {
    if (bugunlukOnbellektenDene(il, durumYazisi)) {
      return;
    }
    sayaçTemizle();
    document.getElementById("cevrimdisiBanner")?.classList.add("gizli");
    durumYazisi.textContent = metinAl("durumVakitHata");
  }
}

function menuleriBaslat() {
  const sekmeler = document.querySelectorAll(".sekme-buton");
  const ezanMenu = document.getElementById("menuEzan");
  const kuranMenu = document.getElementById("menuKuran");
  const kibleMenu = document.getElementById("menuKible");
  const kazaMenu = document.getElementById("menuKaza");
  const ayarlarMenu = document.getElementById("menuAyarlar");
  const urlMenu = new URLSearchParams(window.location.search).get("menu");
  let aktifMenu = aktifMenuyuYukle();
  if (["ezan", "kuran", "kible", "kaza", "ayarlar"].includes(urlMenu)) {
    aktifMenu = urlMenu;
    aktifMenuyuKaydet(urlMenu);
  }

  ezanMenu.classList.toggle("gizli", aktifMenu !== "ezan");
  kuranMenu.classList.toggle("gizli", aktifMenu !== "kuran");
  kibleMenu.classList.toggle("gizli", aktifMenu !== "kible");
  kazaMenu.classList.toggle("gizli", aktifMenu !== "kaza");
  ayarlarMenu.classList.toggle("gizli", aktifMenu !== "ayarlar");
  sekmeler.forEach((s) => s.classList.toggle("aktif", s.dataset.menu === aktifMenu));

  sekmeler.forEach((sekme) => {
    sekme.addEventListener("click", () => {
      const hedef = sekme.dataset.menu;
      aktifMenuyuKaydet(hedef);
      sekmeler.forEach((s) => s.classList.remove("aktif"));
      sekme.classList.add("aktif");

      ezanMenu.classList.toggle("gizli", hedef !== "ezan");
      kuranMenu.classList.toggle("gizli", hedef !== "kuran");
      kibleMenu.classList.toggle("gizli", hedef !== "kible");
      kazaMenu.classList.toggle("gizli", hedef !== "kaza");
      ayarlarMenu.classList.toggle("gizli", hedef !== "ayarlar");

    });
  });
}

function ayarlarMenusunuBaslat() {
  const sessiz = document.getElementById("ayarOtomatikSessiz");
  const konum = document.getElementById("ayarKonumAcik");
  const hadis = document.getElementById("ayarGununHadisi");
  const ezanSel = document.getElementById("ayarEzanHatirlatma");
  const manevi = document.getElementById("ayarManeviOgut");
  const cuma = document.getElementById("ayarCumaBildirim");
  const titresim = document.getElementById("ayarTitresimAcik");
  if (!sessiz || !konum || !hadis || !ezanSel || !manevi || !cuma || !titresim) {
    return;
  }

  const uiAyarUygula = () => {
    const a = uygulamaAyarlariOku();
    sessiz.checked = a.otomatikSessiz;
    konum.checked = a.konumKullan;
    hadis.checked = a.gununHadisiBildirim;
    manevi.checked = a.maneviOgutBildirim;
    cuma.checked = a.cumaSabahiBildirim;
    titresim.checked = a.titresimAcik;
    ezanHatirlatmaSecenekleriniDoldur();
  };

  uiAyarUygula();

  const kaydet = (parcali) => {
    const mevcut = uygulamaAyarlariOku();
    uygulamaAyarlariKaydet({ ...mevcut, ...parcali });
  };

  sessiz.addEventListener("change", () => {
    kaydet({ otomatikSessiz: sessiz.checked });
  });
  konum.addEventListener("change", () => {
    kaydet({ konumKullan: konum.checked });
  });
  hadis.addEventListener("change", () => {
    kaydet({ gununHadisiBildirim: hadis.checked });
  });
  manevi.addEventListener("change", () => {
    kaydet({ maneviOgutBildirim: manevi.checked });
  });
  cuma.addEventListener("change", () => {
    kaydet({ cumaSabahiBildirim: cuma.checked });
  });
  titresim.addEventListener("change", () => {
    kaydet({ titresimAcik: titresim.checked });
  });
  ezanSel.addEventListener("change", () => {
    const dk = Number(ezanSel.value);
    kaydet({ ezanHatirlatmaDk: [0, 5, 10, 15, 20, 25, 30].includes(dk) ? dk : 0 });
    ezanHatirlatmaSecenekleriniDoldur();
  });
}

function hafifTitreme() {
  if (!uygulamaAyarlariOku().titresimAcik || !navigator.vibrate) {
    return;
  }
  navigator.vibrate(12);
}

function titresimiBaslat() {
  document.body.addEventListener(
    "click",
    (event) => {
      const t = event.target;
      if (!(t instanceof Element)) {
        return;
      }
      if (
        t.closest(".sekme-buton, .yenile-buton, .sil-buton, .buton, label.anahtar, .ayarlar-buton")
      ) {
        hafifTitreme();
      }
    },
    true
  );
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
  ezanVakitleriniYukle(seciliIl);

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
titresimiBaslat();
uygulamayiBaslat();
ayarlariBaslat();
ayarlarMenusunuBaslat();
menuleriBaslat();
ilSeciminiBaslat();
hadisKutusuBaslat();
bildirimleriBaslat();
kuranMenusunuBaslat();
kibleBulucuyuBaslat();
kazaAksiyonlariniBaslat();
servisWorkerKaydet();
