export interface Member {
  id: string;
  name: string;
  nim: string;
  faculty: string;
  major: string;
  role: string;
  program: string;
  additionalRole: string;
  initials: string;
  color: string;
}

export interface StoryChapter {
  number: string;
  title: string;
  subtitle: string;
  dateRange: string;
  narrative: string[];
  quote?: {
    text: string;
    author: string;
  };
  highlight?: {
    title: string;
    description: string;
    icon: string;
  };
  tags: string[];
}

export interface ProgramOutput {
  themeNumber: number;
  themeTitle: string;
  sdgs: string;
  summary: string;
  items: {
    title: string;
    description: string;
    leader: string;
    code: string;
  }[];
}

export const MEMBERS: Member[] = [
  {
    id: "farros",
    name: "A Faidhullah Farros Basykailakh",
    nim: "21120123140171",
    faculty: "Fakultas Teknik",
    major: "Teknik Komputer",
    role: "Web & IoT System Architect",
    program: "Pengembangan dan Pemanfaatan Website Profil Pondok Pesantren Asshodiqiyah sebagai Media Informasi Pesantren Tanggap Banjir dan Pengelolaan Air Berkelanjutan.",
    additionalRole: "Scriptwriter After Movie & Perwakilan koordinasi digitalisasi administrasi MoU Pesantren dengan Bank Jateng.",
    initials: "AF",
    color: "from-emerald-600 to-teal-500"
  },
  {
    id: "anastasya",
    name: "Anastasya Shayla Mukti",
    nim: "21080123140113",
    faculty: "Fakultas Teknik",
    major: "Teknik Lingkungan",
    role: "Environmental & Sanitation Specialist",
    program: "Penyusunan Sistem Pembersihan Sampah dan Sedimen pada Trashrack dan Kolam Retensi.",
    additionalRole: "Konseptor Video Dokumenter & Pemateri Pola Hidup Bersih dan Sehat (PHBS) pada MPLS SMK Asshodiqiyah.",
    initials: "AS",
    color: "from-teal-600 to-cyan-500"
  },
  {
    id: "bongki",
    name: "Bongki Sabian",
    nim: "14050123120021",
    faculty: "FISIP",
    major: "Hubungan Internasional",
    role: "Public Engagement & SDGs Facilitator",
    program: "Sosialisasi SDGs 11 dan Kolam Retensi Berbasis Critical Thinking dan Public Speaking bagi Santri.",
    additionalRole: "Konseptor Video After Movie, Fasilitator PPDB MTs-MA & Panitia Lomba HUT RI Pesantren.",
    initials: "BS",
    color: "from-blue-600 to-indigo-500"
  },
  {
    id: "dendy",
    name: "Dendy Astrian Nugraha",
    nim: "40040623650032",
    faculty: "Sekolah Vokasi",
    major: "Teknik Listrik Industri",
    role: "IoT Hardware & Electrical Engineer",
    program: "Perancangan Sistem Monitoring Ketinggian Air Kolam Retensi Berbasis Internet of Things (IoT), Modul Instalasi & Checklist Pemeliharaan.",
    additionalRole: "Talent Video Dokumenter, Fasilitator Ekoteologi Islam Matamuda MTs & Koordinator Pengecatan Lapangan Futsal.",
    initials: "DA",
    color: "from-amber-600 to-orange-500"
  },
  {
    id: "nardo",
    name: "Febrian Nardo",
    nim: "21010123130091",
    faculty: "Fakultas Teknik",
    major: "Teknik Sipil",
    role: "Civil Infrastructure & Scheduling",
    program: "Pembuatan Desain Pagar Jagaan, Scheduling Konstruksi, dan Perhitungan Kebutuhan Pekerja Infrastruktur Kolam Retensi.",
    additionalRole: "Talent Video Dokumenter, Pemateri Hakikat Ekoteologi Islam MTs/MA & Korlap Acara Jalan Sehat.",
    initials: "FN",
    color: "from-sky-600 to-blue-500"
  },
  {
    id: "lisa",
    name: "Khalishah Hafizhah Hasna (Lisa)",
    nim: "21020123120033",
    faculty: "Fakultas Teknik",
    major: "Arsitektur",
    role: "Landscape Architect & Visual Editor",
    program: "Perancangan Elemen Arsitektural dan Penataan Lanskap Kawasan Kolam Retensi Pondok Pesantren Asshodiqiyah.",
    additionalRole: "Video Editor Utama After Movie & Fasilitator Pendamping Materi Ekoteologi Islam Santri MTs.",
    initials: "KH",
    color: "from-rose-600 to-pink-500"
  },
  {
    id: "lala",
    name: "Kumaralalita Putri Kamalia (Lala)",
    nim: "21010123130126",
    faculty: "Fakultas Teknik",
    major: "Teknik Sipil",
    role: "Hydrology & Trashrack Designer",
    program: "Perencanaan dan Perhitungan Saluran Inlet serta Desain Struktur Trash Rack Kolam Retensi.",
    additionalRole: "Cameraman Dokumentasi Produksi & Fasilitator Kelompok Pendamping Ekoteologi Islam.",
    initials: "KP",
    color: "from-emerald-600 to-green-500"
  },
  {
    id: "lia",
    name: "Lia Nora Angelina Panjaitan",
    nim: "12020123120025",
    faculty: "FEB",
    major: "Ekonomi",
    role: "Economic Feasibility & Voice Artist",
    program: "Analisis Manfaat Ekonomi Kolam Retensi & Kajian Kelayakan Finansial Unit Usaha Koperasi Pesantren Berkelanjutan.",
    additionalRole: "Voiceover Narator Utama Video Dokumenter & Tim Administrasi PPDB MTs-MA.",
    initials: "LN",
    color: "from-purple-600 to-indigo-500"
  },
  {
    id: "dinda",
    name: "Maharani Dinda Arroyyani",
    nim: "14030123120013",
    faculty: "FISIP",
    major: "Administrasi Bisnis",
    role: "Business Governance & SOP Strategist",
    program: "Penguatan Tata Kelola Kelembagaan, Regulasi Operasional, dan Standar Manajemen Usaha Koperasi Pesantren.",
    additionalRole: "Konseptor Video After Movie & Pemateri Konsep Ekoteologi Islam pada MPLS SMK.",
    initials: "MD",
    color: "from-violet-600 to-purple-500"
  },
  {
    id: "ariq",
    name: "Muhammad Ariq Zahir",
    nim: "21100123140103",
    faculty: "Fakultas Teknik",
    major: "Teknik Geologi",
    role: "Geological Surveyor & Sanitarian",
    program: "Pemetaan Karakteristik Lapisan Tanah, Evaluasi Sistem Sanitasi dan Resapan Air Kawasan Pesantren.",
    additionalRole: "Cameraman Dokumenter Lapangan & Fasilitator Kelompok MATAMUDA MTs.",
    initials: "AZ",
    color: "from-cyan-600 to-teal-500"
  },
  {
    id: "ulin",
    name: "Muhammad Ulin Nuha",
    nim: "40011323650046",
    faculty: "Sekolah Vokasi",
    major: "Manajemen dan Administrasi Logistik",
    role: "Logistics & Digital Bookkeeping",
    program: "Digitalisasi Pembukuan Transaksi Kas Harian, Tata Kelola Alur Logistik & Manajemen Persediaan Barang Koperasi Santri.",
    additionalRole: "Scriptwriter Naskah Video After Movie & Pemateri Perilaku Hidup Bersih pada MPLS SMK.",
    initials: "UN",
    color: "from-emerald-700 to-teal-600"
  }
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    number: "01",
    title: "Datang ke Kaligawe dan Mengetuk Pintu Ndalem",
    subtitle: "Penerjunan, Sowan Pengasuh, dan Pemahaman Geografis Tanah Cekungan",
    dateRange: "29 Juni – 05 Juli 2026",
    narrative: [
      "Hari-hari pertama kami di Kaligawe dimulai bukan dengan kabel atau rumus debit air, melainkan dengan melepas alas kaki di depan teras ndalem pengasuh pondok. Di luar, jalanan Sawah Besar Timur berdebu, khas kawasan industri dan permukiman pesisir Semarang yang selalu punya bau asin laut berpadu dengan aroma tanah basah sehabis hujan.",
      "Sebagai kelompok KKN yang beranggotakan 11 mahasiswa dari berbagai fakultas—Teknik Komputer, Sipil, Arsitektur, Lingkungan, Geologi, Vokasi Listrik dan Logistik, hingga Ekonomi dan FISIP—kami menyadari satu hal sejak awal: kami tidak bisa datang dengan sikap menggurui. Teori yang kami pelajari di Tembalang harus diuji langsung pada realitas harian santri.",
      "Pondok Pesantren Asshodiqiyah menaungi ratusan santri mukim sekaligus unit pendidikan MTs dan SMK. Letaknya berada di dataran rendah cekungan Semarang yang sangat rentan terhadap genangan air rob pasang surut air laut dan hujan deras."
    ],
    quote: {
      text: "Kaligawe itu tanah cekungan, mas. Kalau rob laut pasang ketemu hujan lebat dari atas, air dari jalan pada lari ke halaman asrama santri. Kami punya kolam retensi di belakang, tapi pompanya sering ngadat karena kesumbat sampah.",
      author: "Pengurus Pondok Pesantren Asshodiqiyah saat Sowan Awal"
    },
    highlight: {
      title: "Observasi Awal Posko",
      description: "Pemetaan awal fokus pada 3 isu krusial: manajemen air kolam retensi, pencatatan manual koperasi santri, dan sanitasi asrama.",
      icon: "MapPin"
    },
    tags: ["Sowan Ndalem", "Pelepasan KKN", "Survei Awal", "Penyusunan LRK"]
  },
  {
    number: "02",
    title: "Menyusuri Lumpur Kolam, Menghitung Debit, dan Sketsa Lanskap",
    subtitle: "Pengukuran Fisik Kolam Retensi, Struktur Tanah, dan Desain Ruang Terbuka Hijau",
    dateRange: "06 – 19 Juli 2026",
    narrative: [
      "Memasuki minggu kedua dan ketiga, posko kami berubah menjadi ruang kerja lapangan. Febrian Nardo dan Lala (Kumaralalita) dari Teknik Sipil membawa pita meteran dan peralatan ukur, menyusuri tepi kolam retensi di belakang asrama pondok. Mereka mengukur dimensi geometri kolam, kemiringan dinding, serta kapasitas tampung efektif terhadap debit limpasan hujan di kawasan sekitar seluas lebih dari satu hektar.",
      "Di titik saluran pembuangan, Ariq Zahir dari Teknik Geologi mengamati kondisi litologi tanah. Struktur tanah aluvial di Kaligawe memiliki permeabilitas yang lambat dan rentan terhadap penurunan tanah (land subsidence). Jika kolam dibiarkan tergenang terlalu lama tanpa sirkulasi pompa yang baik, rembesan air bawah tanah berpotensi melemahkan kestabilan fondasi gedung santri.",
      "Lisa (Khalishah) dari Arsitektur melihat potensi lain. Menurutnya, kolam retensi tidak boleh hanya dipandang sebagai kubangan tandon air yang suram. Ia mulai menyusun sketsa masterplan lanskap: merancang pagar pengaman teralis di sekeliling kolam agar santri aman saat beraktivitas, mendesain jalur jalan setapak, serta mengusulkan penanaman vegetasi penyerap air di zona sempadan."
    ],
    highlight: {
      title: "Kolaborasi Sipil & Arsitektur",
      description: "Kalkulasi debit tampung dipadukan dengan masterplan 3D penataan lanskap hijau yang aman bagi para santri.",
      icon: "Ruler"
    },
    tags: ["Pengukuran Geometri", "Analisis Litologi", "Desain 3D", "Trashrack"]
  },
  {
    number: "03",
    title: "Solderan Malam, Sensor IoT ESP32, dan Website Mitigasi",
    subtitle: "Rancang Bangun Telemetri Ketinggian Air dan Sistem Informasi Pesantren",
    dateRange: "20 Juli – 02 Agustus 2026",
    narrative: [
      "Tengah Juli menjadi malam-malam paling sibuk di posko. Dendy Astrian Nugraha (Vokasi Teknik Listrik Industri) dan A Faidhullah Farros Basykailakh (Teknik Komputer) berbagi tugas merancang sistem deteksi level air berbasis Internet of Things (IoT).",
      "Masalah utama di lapangan adalah keterlambatan menyalakan pompa listrik. Ketika hujan lebat turun tengah malam, santri dan pengurus pondok sering kali baru menyadari air kolam meluap saat halaman sudah tergenang. Dengan modul sensor ultrasonik tahan air dan mikrokontroler ESP32, elevasi ketinggian air diukur secara terus-menerus setiap beberapa detik.",
      "Farros membangun website profil dan sistem informasi mitigasi yang terintegrasi. Kini, pengurus pondok dapat melihat status kolam (Aman, Waspada, Bahaya) langsung dari layar gawai mereka. Sementara itu, Anastasya dari Teknik Lingkungan menyusun Standar Operasional Prosedur (SOP) pembersihan saringan sampah (trashrack) agar pompa tidak tersumbat lumpur dan plastik."
    ],
    quote: {
      text: "Sensor air ini menjawab kekhawatiran pengurus pondok saat hujan tengah malam. Sekarang status ketinggian kolam terpantau otomatis secara real-time.",
      author: "Dendy Astrian Nugraha & Farros"
    },
    highlight: {
      title: "Teknologi Tepat Guna (TTG)",
      description: "Integrasi sensor ultrasonik ESP32 + dashboard cloud + buku panduan operasional & pemeliharaan (O&M).",
      icon: "Cpu"
    },
    tags: ["IoT ESP32", "Web Mitigasi", "SOP Trashrack", "Kelistrikan Pompa"]
  },
  {
    number: "04",
    title: "Masuk ke Ruang Koperasi: Dari Buku Tulis Menuju Kas Digital",
    subtitle: "Pendampingan Tata Kelola, Buku Kas Spreadsheet, dan Alur Logistik Koperasi Santri",
    dateRange: "20 Juli – 02 Agustus 2026",
    narrative: [
      "Di sisi timur pesantren, berdiri sebuah bangunan kecil yang menjadi urat nadi perputaran ekonomi santri: Koperasi Pondok Pesantren Asshodiqiyah. Koperasi ini menyediakan kebutuhan harian, mulai dari makanan ringan, sabun, hingga kitab dan perlengkapan sekolah.",
      "Saat tim Soshum—Lia Nora Angelina Panjaitan (Ekonomi), Muhammad Ulin Nuha (Manajemen Logistik), dan Maharani Dinda Arroyyani (Administrasi Bisnis)—mulai melakukan pendampingan, mereka menemukan pencatatan transaksi masih dilakukan secara manual pada buku tulis bergaris. Santri yang bertugas sebagai kasir sering berganti jadwal, membuat pencatatan kas masuk dan sisa persediaan barang rawan selisih.",
      "Ulin dan Lia merancang template buku kas berbasis spreadsheet yang menghitung arus kas harian dan margin laba rugi secara otomatis. Maharani Dinda melengkapinya dengan merumuskan SOP kelembagaan: pembagian tugas piket kasir santri, alur pemesanan distributor, dan mekanisme stok opname mingguan."
    ],
    highlight: {
      title: "Kemandirian Ekonomi Pesantren",
      description: "Santri pengelola koperasi dilatih mengoperasikan sistem pencatatan digital mandiri.",
      icon: "Coins"
    },
    tags: ["Digital Bookkeeping", "SOP Koperasi", "Manajemen Stok", "SDGs 11.a"]
  },
  {
    number: "05",
    title: "Mata Muda, Public Speaking, dan Aksi Sanitasi Santri",
    subtitle: "Pelatihan Berpikir Kritis SDGs 11 dan Kerja Bakti Lingkungan Asrama",
    dateRange: "03 – 09 Agustus 2026",
    narrative: [
      "Awal Agustus ditandai dengan riuhnya suasana aula sekolah. Bongki Sabian dari Hubungan Internasional memimpin pelatihan bertajuk Mata Muda: Public Speaking & Critical Thinking Berbasis SDGs 11 bagi santri MTs dan SMK Asshodiqiyah.",
      "Santri diajak untuk tidak hanya menjadi penonton dalam isu-isu lingkungan mereka sendiri. Dengan metode interaktif dan permainan peran, puluhan santri memberanikan diri tampil ke depan panggung, berbicara di depan mikrofon tentang pentingnya menjaga kebersihan saluran air, menghemat energi, dan peran pemuda pesantren dalam membangun ketahanan bencana.",
      "Pelatihan ini langsung disambung dengan aksi nyata di lapangan: seluruh tim KKN bersama santri dan pengurus pondok menggelar kerja bakti massal membersihkan saluran air asrama, menata tempat pemilahan sampah organik dan anorganik, serta melakukan simulasi pembersihan saringan sedimen."
    ],
    highlight: {
      title: "Kapasitas & Kepemimpinan Santri",
      description: "Peningkatan pemahaman konsep SDGs dari 23% menjadi 77% dan sense of ownership santri hingga 92%.",
      icon: "Megaphone"
    },
    tags: ["Mata Muda", "Public Speaking", "Aksi Sanitasi", "SDGs 11"]
  },
  {
    number: "06",
    title: "Serah Terima Berita Acara dan Jejak yang Ditinggalkan",
    subtitle: "Pengesahan Luaran, Expo Gelar Karya IDBU 61, dan Penayangan After Movie",
    dateRange: "10 – 19 Agustus 2026",
    narrative: [
      "Pertengahan Agustus menandai akhir dari 45 hari masa pengabdian kami. Bertempat di ndalem pengasuh pondok, dilaksanakan penandatanganan Berita Acara Serah Terima tiga paket program multidisiplin secara resmi, disaksikan oleh pimpinan Pondok Pesantren Asshodiqiyah dan Kepala Kelurahan Kaligawe.",
      "Seluruh berkas luaran—modul sensor IoT ketinggian air yang telah beroperasi di kolam retensi, akun website profil mitigasi, cetak biru lanskap arsitektur, dokumen SOP trashrack, serta template pembukuan koperasi santri—diserahkan sepenuhnya untuk dikelola secara mandiri oleh pihak pesantren.",
      "Pada hari expo Gelar Karya IDBU 61 Universitas Diponegoro, video dokumenter sinematik After Movie Kelompok 3 diputar. Menatap kembali rekaman 45 hari dari hari pertama datang hingga hari terakhir pamit membuat kami sadar: Kaligawe telah memberi kami lebih banyak pelajaran hidup daripada apa yang sempat kami berikan untuk mereka."
    ],
    quote: {
      text: "Pengabdian ini berakhir di atas kertas laporan 90 halaman, namun hubungan kekeluargaan, sapaan santri setiap kali kami lewat di lorong pondok, dan rasa cinta pada Kaligawe akan selalu tinggal di ingatan kami.",
      author: "Refleksi Akhir Tim KKN-T IDBU 61 Kelompok 3"
    },
    highlight: {
      title: "Luaran 100% Terverifikasi",
      description: "Seluruh berkas administrasi, berita acara resmi, dan video dokumenter telah rampung disahkan.",
      icon: "Award"
    },
    tags: ["Berita Acara TTG", "Gelar Karya", "After Movie", "LPK 90 Hal"]
  }
];

export const PROGRAM_OUTPUTS: ProgramOutput[] = [
  {
    themeNumber: 1,
    themeTitle: "Disaster Resilient Infrastructure & Safety Management",
    sdgs: "SDGs 11.5 & 11.b (Ketahanan Bencana)",
    summary: "Mitigasi komprehensif risiko genangan air rob melalui teknologi IoT deteksi level air, perancangan masterplan lanskap kolam retensi, saluran inlet, dan SOP pembersihan saringan sampah.",
    items: [
      {
        title: "Website Profil & Sistem Informasi Mitigasi Pesantren",
        description: "Portal daring sebagai pusat informasi lembaga, SOP tanggap darurat genangan, dan kanal dokumentasi digital.",
        leader: "A Faidhullah Farros Basykailakh",
        code: "LM1A"
      },
      {
        title: "SOP Pembersihan Sampah & Sedimen Trashrack Kolam Retensi",
        description: "Modul teknis tahapan pembersihan berkala, keselamatan kerja, dan perawatan saluran masuk kolam.",
        leader: "Anastasya Shayla Mukti",
        code: "LM1B"
      },
      {
        title: "Sosialisasi SDGs 11 & Sense of Ownership Kolam Retensi",
        description: "Pelatihan public speaking dan berpikir kritis untuk menumbuhkan kepedulian santri terhadap fasilitas lingkungan.",
        leader: "Bongki Sabian",
        code: "LM1C"
      },
      {
        title: "Sistem Monitoring Ketinggian Air Berbasis Internet of Things (IoT)",
        description: "Rancangan sensor ultrasonik, modul operasional pemeliharaan, dan checklist instalasi pemantauan air.",
        leader: "Dendy Astrian Nugraha",
        code: "LM1D"
      },
      {
        title: "Desain Pagar Jagaan, Scheduling & Perhitungan Tenaga Kerja",
        description: "Analisis teknis dan jadwal kerja konstruksi infrastruktur pengaman area kolam retensi.",
        leader: "Febrian Nardo",
        code: "LM1E"
      },
      {
        title: "Perancangan Elemen Arsitektural & Lanskap Kawasan Kolam",
        description: "Masterplan 3D penataan sempadan kolam, pagar pembatas, pedestrian, dan vegetasi resapan.",
        leader: "Khalishah Hafizhah Hasna (Lisa)",
        code: "LM1F"
      },
      {
        title: "Perencanaan Saluran Inlet & Desain Struktur Trash Rack",
        description: "Perhitungan hidrologi dimensi saluran dan kekuatan mekanis kisi-kisi penyaring sampah.",
        leader: "Kumaralalita Putri Kamalia (Lala)",
        code: "LM1G"
      }
    ]
  },
  {
    themeNumber: 2,
    themeTitle: "Pemberdayaan Ekonomi Koperasi Pesantren Berkelanjutan",
    sdgs: "SDGs 11.a (Konektivitas Ekonomi & Kemandirian)",
    summary: "Transformasi tata kelola unit usaha koperasi pondok pesantren menuju sistem pencatatan digital yang transparan dan akuntabel.",
    items: [
      {
        title: "Analisis Kelayakan Finansial & Manfaat Ekonomi",
        description: "Kajian perputaran modal, margin laba barang kebutuhan santri, dan estimasi nilai manfaat ekonomi fasilitas pondok.",
        leader: "Lia Nora Angelina Panjaitan",
        code: "LM2A"
      },
      {
        title: "SOP Tata Kelola Kelembagaan & Manajemen Persediaan",
        description: "Standarisasi alur pengadaan barang, pembagian tugas piket kasir santri, dan mekanisme stok opname mingguan.",
        leader: "Maharani Dinda Arroyyani",
        code: "LM2B"
      },
      {
        title: "Digitalisasi Buku Kas & Template Spreadsheet Terpadu",
        description: "Aplikasi spreadsheet akuntansi kas harian yang menghitung saldo dan laporan laba rugi bulanan secara otomatis.",
        leader: "Muhammad Ulin Nuha",
        code: "LM2C"
      }
    ]
  },
  {
    themeNumber: 3,
    themeTitle: "Circular Resource & Environmental Sanitation",
    sdgs: "SDGs 11.6 (Dampak Lingkungan Kota)",
    summary: "Peningkatan kualitas sanitasi kamar mandi santri, pemetaan daya dukung geologi tanah, dan edukasi pemilahan sampah sirkular.",
    items: [
      {
        title: "Pemetaan Litologi Tanah & Evaluasi Sistem Sanitasi Resapan",
        description: "Survei lapisan tanah sekitar kolam retensi dan pendataan fasilitas sanitasi seluruh kompleks pesantren.",
        leader: "Muhammad Ariq Zahir",
        code: "LM3A"
      },
      {
        title: "Video Dokumenter Sinematik After Movie KKN 45 Hari",
        description: "Produksi video 1080p berdurasi penuh yang merekam seluruh proses kolaborasi mahasiswa dengan masyarakat Kaligawe.",
        leader: "Seluruh Tim (Kreatif & Editor)",
        code: "LM4"
      }
    ]
  }
];
