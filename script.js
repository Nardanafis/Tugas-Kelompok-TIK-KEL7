/* =========================================================
   SEHATIN — script.js
   Data konten + seluruh logika interaktif (SPA sederhana
   tanpa backend, tanpa framework, hanya HTML/CSS/JS murni).
   ========================================================= */

(function () {
  'use strict';

  /* ============================================================
     1. DATA
     ============================================================ */

  const CATEGORIES = [
    { slug: 'mental',     name: 'Kesehatan Mental',       icon: '🧠', desc: 'Memahami emosi, stres, dan kesehatan psikologis remaja.' },
    { slug: 'nutrisi',    name: 'Nutrisi & Gizi',         icon: '🥗', desc: 'Pola makan seimbang untuk tubuh yang optimal.' },
    { slug: 'remaja',     name: 'Kesehatan Remaja',       icon: '🧑‍🎓', desc: 'Isu kesehatan yang relevan di masa pubertas dan sekolah.' },
    { slug: 'kebugaran',  name: 'Kebugaran',              icon: '🏃', desc: 'Aktivitas fisik dan olahraga untuk tubuh yang bugar.' },
    { slug: 'penyakit',   name: 'Penyakit',               icon: '🦠', desc: 'Mengenal gejala umum, faktor risiko, dan pencegahan.' },
    { slug: 'jantung',    name: 'Kesehatan Jantung',      icon: '❤️', desc: 'Menjaga jantung tetap sehat sejak usia muda.' },
    { slug: 'pernapasan', name: 'Kesehatan Pernapasan',   icon: '🫁', desc: 'Merawat paru-paru di tengah polusi dan aktivitas harian.' },
    { slug: 'reproduksi', name: 'Kesehatan Reproduksi',   icon: '🌱', desc: 'Edukasi dasar seputar pubertas dan organ reproduksi.' },
    { slug: 'p3k',        name: 'Pertolongan Pertama',    icon: '🩹', desc: 'Langkah dasar menangani cedera atau kondisi darurat ringan.' },
    { slug: 'gayahidup',  name: 'Gaya Hidup Sehat',       icon: '🌿', desc: 'Kebiasaan harian yang mendukung kesehatan jangka panjang.' }
  ];

  const ARTICLES = [
    {
      id: 'tidur-cukup',
      title: 'Mengapa Tidur Cukup Penting bagi Tubuh?',
      category: 'gayahidup', icon: '😴',
      excerpt: 'Tidur bukan sekadar istirahat — inilah yang terjadi pada tubuh dan otak saat kamu tidur cukup setiap malam.',
      date: '15 Agu 2026', readTime: '4 menit', tags: ['tidur', 'istirahat', 'insomnia', 'gaya hidup'],
      content: [
        { type: 'p', text: 'Tidur adalah kebutuhan biologis dasar, sama pentingnya dengan makan dan bernapas. Saat tidur, tubuh melakukan proses pemulihan sel, konsolidasi memori, dan pengaturan hormon yang tidak bisa berjalan optimal saat kita terjaga.' },
        { type: 'h2', text: 'Apa yang Terjadi Saat Kita Tidur?' },
        { type: 'ul', items: [
          'Otak memproses dan menyimpan informasi yang dipelajari sepanjang hari.',
          'Tubuh memperbaiki jaringan otot dan sel yang rusak.',
          'Sistem imun memproduksi protein pelindung untuk melawan infeksi.',
          'Hormon pertumbuhan dan hormon pengatur nafsu makan kembali seimbang.'
        ]},
        { type: 'highlight', text: 'Remaja usia 13–18 tahun umumnya membutuhkan sekitar 8–10 jam tidur per malam agar tubuh dan otak berkembang optimal.' },
        { type: 'h2', text: 'Dampak Kurang Tidur' },
        { type: 'p', text: 'Kurang tidur secara terus-menerus dapat menurunkan konsentrasi belajar, memperlambat waktu reaksi, memicu perubahan suasana hati, serta meningkatkan risiko gangguan metabolisme dalam jangka panjang.' },
        { type: 'h2', text: 'Tips Menjaga Kualitas Tidur' },
        { type: 'ul', items: [
          'Tidur dan bangun di jam yang konsisten setiap hari, termasuk akhir pekan.',
          'Kurangi paparan layar gawai minimal 30 menit sebelum tidur.',
          'Hindari kafein di sore dan malam hari.',
          'Ciptakan kamar yang gelap, tenang, dan sejuk.'
        ]}
      ],
      sources: ['World Health Organization (WHO) — Physical Activity and Sleep Guidance', 'Kementerian Kesehatan RI — Panduan Kesehatan Remaja']
    },
    {
      id: 'kesehatan-mental-remaja',
      title: 'Cara Menjaga Kesehatan Mental pada Remaja',
      category: 'mental', icon: '🧠',
      excerpt: 'Masa remaja penuh perubahan emosi. Kenali cara sederhana menjaga kesehatan mental sehari-hari.',
      date: '12 Agu 2026', readTime: '5 menit', tags: ['kesehatan mental', 'remaja', 'emosi', 'sekolah'],
      content: [
        { type: 'p', text: 'Masa remaja adalah periode perubahan besar secara fisik, sosial, dan emosional. Wajar bila muncul perasaan cemas, bingung, atau tertekan — yang penting adalah bagaimana mengelolanya secara sehat.' },
        { type: 'h2', text: 'Faktor yang Memengaruhi Kesehatan Mental Remaja' },
        { type: 'ul', items: [
          'Tekanan akademik dan ekspektasi nilai di sekolah.',
          'Dinamika pertemanan dan tekanan sosial, termasuk di media sosial.',
          'Perubahan hormon yang memengaruhi suasana hati.',
          'Pola tidur dan aktivitas fisik yang tidak teratur.'
        ]},
        { type: 'h2', text: 'Kebiasaan yang Membantu' },
        { type: 'ul', items: [
          'Bicarakan perasaanmu dengan orang yang dipercaya — orang tua, guru, atau sahabat.',
          'Batasi waktu bermain media sosial jika membuat cemas atau membanding-bandingkan diri.',
          'Luangkan waktu untuk hobi dan aktivitas yang menyenangkan.',
          'Tetap aktif bergerak — olahraga ringan terbukti membantu suasana hati.',
          'Latih teknik relaksasi seperti menarik napas dalam saat merasa cemas.'
        ]},
        { type: 'highlight', text: 'Kesehatan mental sama pentingnya dengan kesehatan fisik. Mencari bantuan bukan tanda kelemahan, melainkan langkah yang berani dan bijak.' },
        { type: 'h2', text: 'Kapan Perlu Mencari Bantuan Profesional?' },
        { type: 'p', text: 'Jika perasaan sedih, cemas, atau kehilangan minat berlangsung lebih dari dua minggu dan mengganggu aktivitas sehari-hari, sebaiknya bicarakan dengan guru bimbingan konseling, psikolog, atau tenaga kesehatan terdekat.' }
      ],
      sources: ['World Health Organization (WHO) — Adolescent Mental Health', 'Kementerian Kesehatan RI — Direktorat Kesehatan Jiwa']
    },
    {
      id: 'pola-makan-seimbang',
      title: 'Mengenal Pola Makan Bergizi Seimbang',
      category: 'nutrisi', icon: '🥗',
      excerpt: 'Piring makan yang seimbang membantu tubuh tumbuh optimal. Simak prinsip dasarnya.',
      date: '10 Agu 2026', readTime: '4 menit', tags: ['nutrisi', 'gizi', 'makanan', 'diet sehat'],
      content: [
        { type: 'p', text: 'Pola makan bergizi seimbang berarti mengonsumsi berbagai jenis makanan dalam jumlah dan proporsi yang sesuai kebutuhan tubuh, bukan sekadar makan kenyang.' },
        { type: 'h2', text: 'Prinsip "Isi Piringku"' },
        { type: 'ul', items: [
          'Separuh piring diisi sayur dan buah beraneka warna.',
          'Seperempat piring berisi sumber karbohidrat seperti nasi, kentang, atau jagung.',
          'Seperempat piring berisi sumber protein: ikan, telur, tempe, tahu, atau daging.',
          'Cukupi kebutuhan cairan dengan air putih, bukan minuman manis.'
        ]},
        { type: 'h2', text: 'Zat Gizi Penting bagi Remaja' },
        { type: 'ul', items: [
          'Protein — mendukung pertumbuhan otot dan jaringan tubuh.',
          'Zat besi dan kalsium — penting terutama pada masa pubertas.',
          'Serat — menjaga pencernaan tetap sehat.',
          'Vitamin D — mendukung kesehatan tulang bersama kalsium.'
        ]},
        { type: 'highlight', text: 'Batasi konsumsi gula, garam, dan lemak berlebih (gula maksimal 4 sendok makan, garam 1 sendok teh, dan lemak 5 sendok makan per hari) sesuai anjuran umum Kemenkes RI.' },
        { type: 'p', text: 'Sarapan juga tidak boleh dilewatkan karena membantu menjaga konsentrasi belajar dan energi sepanjang pagi.' }
      ],
      sources: ['Kementerian Kesehatan RI — Pedoman Gizi Seimbang', 'World Health Organization (WHO) — Healthy Diet Fact Sheet']
    },
    {
      id: 'aktivitas-fisik',
      title: 'Pentingnya Aktivitas Fisik bagi Kesehatan',
      category: 'kebugaran', icon: '🏃',
      excerpt: 'Bergerak aktif setiap hari memberi manfaat besar bagi tubuh dan pikiran. Berapa banyak yang cukup?',
      date: '8 Agu 2026', readTime: '4 menit', tags: ['olahraga', 'kebugaran', 'aktivitas fisik'],
      content: [
        { type: 'p', text: 'Aktivitas fisik adalah setiap gerakan tubuh yang menggunakan energi — mulai dari jalan kaki, bersepeda, hingga olahraga terstruktur.' },
        { type: 'h2', text: 'Manfaat Aktivitas Fisik Rutin' },
        { type: 'ul', items: [
          'Memperkuat otot, tulang, dan sendi yang sedang berkembang.',
          'Meningkatkan daya tahan jantung dan paru-paru.',
          'Membantu menjaga berat badan ideal.',
          'Memperbaiki suasana hati dan kualitas tidur.',
          'Meningkatkan konsentrasi dan performa belajar.'
        ]},
        { type: 'highlight', text: 'Anak dan remaja dianjurkan melakukan aktivitas fisik dengan intensitas sedang hingga berat rata-rata 60 menit per hari.' },
        { type: 'h2', text: 'Contoh Aktivitas Sederhana' },
        { type: 'ul', items: [
          'Jalan kaki atau bersepeda ke sekolah bila memungkinkan.',
          'Naik-turun tangga dibanding menggunakan lift.',
          'Bermain olahraga bersama teman saat istirahat.',
          'Meregangkan tubuh setiap 1 jam saat belajar lama di depan layar.'
        ]}
      ],
      sources: ['World Health Organization (WHO) — Physical Activity Guidelines', 'Kementerian Kesehatan RI — Germas (Gerakan Masyarakat Hidup Sehat)']
    },
    {
      id: 'kesehatan-jantung',
      title: 'Cara Menjaga Kesehatan Jantung Sejak Dini',
      category: 'jantung', icon: '❤️',
      excerpt: 'Kebiasaan menjaga jantung yang dimulai sejak remaja akan berdampak besar di masa depan.',
      date: '5 Agu 2026', readTime: '5 menit', tags: ['jantung', 'kardiovaskular', 'penyakit'],
      content: [
        { type: 'p', text: 'Penyakit jantung sering dianggap masalah orang dewasa, padahal kebiasaan yang membentuk risiko penyakit jantung banyak dimulai sejak usia muda.' },
        { type: 'h2', text: 'Faktor Risiko yang Perlu Diwaspadai' },
        { type: 'ul', items: [
          'Pola makan tinggi lemak jenuh, garam, dan gula tambahan.',
          'Kurangnya aktivitas fisik dan terlalu banyak duduk.',
          'Kebiasaan merokok atau terpapar asap rokok.',
          'Berat badan berlebih dan kurang tidur.'
        ]},
        { type: 'h2', text: 'Kebiasaan Baik untuk Jantung' },
        { type: 'ul', items: [
          'Rutin bergerak aktif minimal 60 menit sehari.',
          'Perbanyak konsumsi sayur, buah, dan ikan.',
          'Hindari rokok dan asapnya.',
          'Kelola stres dengan cara yang sehat.',
          'Periksa tekanan darah secara berkala bila memiliki riwayat keluarga.'
        ]},
        { type: 'highlight', text: 'Gejala seperti nyeri dada, sesak napas mendadak, atau jantung berdebar tidak normal perlu segera diperiksakan ke tenaga medis, bukan didiagnosis sendiri.' }
      ],
      sources: ['World Health Organization (WHO) — Cardiovascular Diseases Fact Sheet', 'Centers for Disease Control and Prevention (CDC) — Heart Disease Prevention']
    },
    {
      id: 'tanda-stres',
      title: 'Mengenali Tanda-Tanda Stres dan Cara Mengatasinya',
      category: 'mental', icon: '😮‍💨',
      excerpt: 'Stres adalah respons alami tubuh. Kenali tandanya agar bisa dikelola sebelum berdampak lebih jauh.',
      date: '2 Agu 2026', readTime: '4 menit', tags: ['stres', 'kesehatan mental', 'relaksasi'],
      content: [
        { type: 'p', text: 'Stres adalah reaksi tubuh terhadap tekanan atau tuntutan, misalnya tugas sekolah yang menumpuk atau masalah pertemanan. Dalam kadar wajar, stres bisa memotivasi — namun bila berlebihan, ia dapat mengganggu kesehatan.' },
        { type: 'h2', text: 'Tanda-Tanda Umum Stres' },
        { type: 'ul', items: [
          'Sulit berkonsentrasi atau mudah lupa.',
          'Perubahan pola tidur — sulit tidur atau justru berlebihan.',
          'Mudah marah, cemas, atau menangis tanpa sebab jelas.',
          'Keluhan fisik seperti sakit kepala atau sakit perut tanpa penyebab medis lain.'
        ]},
        { type: 'h2', text: 'Cara Mengelola Stres' },
        { type: 'ul', items: [
          'Kenali dan tuliskan apa yang menjadi sumber stres.',
          'Atur waktu belajar dan istirahat secara realistis.',
          'Lakukan teknik pernapasan dalam atau peregangan ringan.',
          'Bicarakan dengan orang terdekat, jangan dipendam sendiri.',
          'Batasi hal-hal yang memperberat pikiran, termasuk scrolling media sosial berlebihan.'
        ]},
        { type: 'highlight', text: 'Jika stres terasa berat, berkepanjangan, dan sulit dikendalikan sendiri, tidak apa-apa untuk meminta bantuan konselor sekolah atau psikolog.' }
      ],
      sources: ['World Health Organization (WHO) — Stress Management', 'American Psychological Association — Stress in Adolescents']
    },
    {
      id: 'gejala-flu',
      title: 'Mengenali Gejala Flu Biasa dan Kapan Harus ke Dokter',
      category: 'penyakit', icon: '🤒',
      excerpt: 'Tidak semua demam dan pilek berbahaya, tapi penting tahu kapan gejala perlu diperiksakan.',
      date: '30 Jul 2026', readTime: '4 menit', tags: ['flu', 'demam', 'penyakit', 'gejala'],
      content: [
        { type: 'p', text: 'Flu (influenza) dan common cold (pilek biasa) adalah infeksi saluran pernapasan yang sangat umum, terutama saat pergantian musim atau cuaca ekstrem.' },
        { type: 'h2', text: 'Gejala Umum' },
        { type: 'ul', items: [
          'Demam ringan hingga sedang.',
          'Hidung tersumbat atau meler.',
          'Batuk, tenggorokan gatal, atau nyeri saat menelan.',
          'Badan terasa pegal dan mudah lelah.'
        ]},
        { type: 'h2', text: 'Faktor Risiko' },
        { type: 'ul', items: [
          'Daya tahan tubuh menurun karena kurang tidur atau kelelahan.',
          'Kontak dekat dengan orang yang sedang sakit.',
          'Cuci tangan tidak teratur.'
        ]},
        { type: 'h2', text: 'Langkah Pencegahan' },
        { type: 'ul', items: [
          'Cuci tangan secara rutin dengan sabun.',
          'Istirahat cukup dan konsumsi makanan bergizi.',
          'Gunakan masker saat sakit agar tidak menularkan ke orang lain.'
        ]},
        { type: 'highlight', text: 'Segera periksakan diri ke fasilitas kesehatan bila demam tinggi berlangsung lebih dari 3 hari, disertai sesak napas, nyeri dada, atau tubuh sangat lemas.' }
      ],
      sources: ['Centers for Disease Control and Prevention (CDC) — Cold Versus Flu', 'Kementerian Kesehatan RI — Panduan Kesehatan Masyarakat']
    },
    {
      id: 'p3k-luka-ringan',
      title: 'Pertolongan Pertama pada Luka Ringan',
      category: 'p3k', icon: '🩹',
      excerpt: 'Langkah dasar dan aman untuk menangani luka lecet atau sayat ringan sebelum ke tenaga medis bila perlu.',
      date: '28 Jul 2026', readTime: '3 menit', tags: ['pertolongan pertama', 'luka', 'p3k', 'darurat'],
      content: [
        { type: 'p', text: 'Luka lecet atau sayat ringan sering terjadi dalam aktivitas sehari-hari. Penanganan awal yang tepat membantu mencegah infeksi dan mempercepat pemulihan.' },
        { type: 'h2', text: 'Langkah Umum Penanganan Luka Ringan' },
        { type: 'ul', items: [
          'Cuci tangan sebelum menyentuh area luka.',
          'Bersihkan luka dengan air mengalir yang bersih.',
          'Hentikan perdarahan ringan dengan menekan lembut memakai kain bersih.',
          'Tutup luka dengan perban atau plester steril.',
          'Ganti perban secara berkala dan jaga area luka tetap bersih dan kering.'
        ]},
        { type: 'highlight', text: 'Ini adalah panduan umum untuk luka ringan, bukan pengganti penanganan medis untuk luka dalam, luka akibat benda kotor/berkarat, atau perdarahan yang tidak berhenti.' },
        { type: 'h2', text: 'Segera Cari Bantuan Medis Jika' },
        { type: 'ul', items: [
          'Perdarahan tidak berhenti setelah ditekan beberapa menit.',
          'Luka cukup dalam, lebar, atau terlihat tulang/otot.',
          'Muncul tanda infeksi: kemerahan meluas, bengkak, nanah, atau demam.',
          'Luka disebabkan oleh benda berkarat dan riwayat imunisasi tetanus tidak jelas.'
        ]}
      ],
      sources: ['World Health Organization (WHO) — Basic First Aid Guidance', 'Palang Merah Indonesia (PMI) — Panduan Pertolongan Pertama']
    },
    {
      id: 'kesehatan-pernapasan-polusi',
      title: 'Menjaga Kesehatan Pernapasan di Tengah Polusi Udara',
      category: 'pernapasan', icon: '🫁',
      excerpt: 'Kualitas udara yang buruk memengaruhi paru-paru. Kenali cara melindungi sistem pernapasan sehari-hari.',
      date: '25 Jul 2026', readTime: '4 menit', tags: ['pernapasan', 'polusi', 'paru-paru'],
      content: [
        { type: 'p', text: 'Paparan polusi udara dalam waktu lama dapat mengganggu fungsi paru-paru, terutama pada anak-anak, remaja, dan orang dengan riwayat asma.' },
        { type: 'h2', text: 'Dampak Polusi Udara bagi Tubuh' },
        { type: 'ul', items: [
          'Iritasi saluran napas, batuk, dan sesak ringan.',
          'Memperberat gejala pada penderita asma atau alergi.',
          'Menurunkan fungsi paru-paru jika terpapar dalam jangka panjang.'
        ]},
        { type: 'h2', text: 'Cara Melindungi Diri' },
        { type: 'ul', items: [
          'Gunakan masker saat kualitas udara buruk atau berkendara di jalan padat.',
          'Kurangi aktivitas fisik berat di luar ruangan saat polusi tinggi.',
          'Perbanyak ventilasi dan tanaman di dalam rumah bila memungkinkan.',
          'Hindari paparan asap rokok, termasuk sebagai perokok pasif.'
        ]},
        { type: 'highlight', text: 'Latihan pernapasan dan olahraga tetap penting, namun sesuaikan waktu dan tempatnya dengan kondisi kualitas udara di sekitarmu.' }
      ],
      sources: ['World Health Organization (WHO) — Air Quality and Health', 'Centers for Disease Control and Prevention (CDC) — Air Pollution and Respiratory Health']
    },
    {
      id: 'pubertas-reproduksi',
      title: 'Mengenal Perubahan Tubuh Saat Pubertas',
      category: 'reproduksi', icon: '🌱',
      excerpt: 'Pubertas membawa banyak perubahan fisik dan emosional yang wajar terjadi. Ini yang perlu kamu ketahui.',
      date: '22 Jul 2026', readTime: '4 menit', tags: ['pubertas', 'reproduksi', 'remaja'],
      content: [
        { type: 'p', text: 'Pubertas adalah proses alami perkembangan tubuh menuju kematangan fisik dan reproduksi, yang umumnya terjadi antara usia 10–16 tahun dan berbeda-beda pada setiap orang.' },
        { type: 'h2', text: 'Perubahan yang Umum Terjadi' },
        { type: 'ul', items: [
          'Pertumbuhan tinggi badan yang lebih cepat.',
          'Perubahan suara dan pertumbuhan rambut tubuh.',
          'Perubahan hormon yang memengaruhi kulit dan suasana hati.',
          'Mulainya siklus menstruasi pada remaja perempuan.'
        ]},
        { type: 'highlight', text: 'Setiap tubuh berkembang dengan kecepatannya masing-masing. Merasa canggung atau bingung dengan perubahan ini adalah hal yang wajar.' },
        { type: 'h2', text: 'Menjaga Kebersihan dan Kesehatan Diri' },
        { type: 'ul', items: [
          'Jaga kebersihan tubuh, terutama area yang lebih mudah berkeringat.',
          'Gunakan produk kebersihan pribadi yang sesuai dan aman.',
          'Cari informasi dari sumber tepercaya atau tenaga kesehatan, bukan asumsi pribadi.',
          'Jangan ragu bertanya kepada orang tua, guru BK, atau tenaga kesehatan bila ada kekhawatiran.'
        ]}
      ],
      sources: ['World Health Organization (WHO) — Adolescent Health', 'Kementerian Kesehatan RI — Kesehatan Reproduksi Remaja']
    }
  ];

  const TIPS = [
    'Minum air putih minimal 8 gelas sehari untuk menjaga tubuh tetap terhidrasi.',
    'Tidur dan bangun pada jadwal yang teratur, termasuk saat akhir pekan.',
    'Lakukan aktivitas fisik ringan minimal 30–60 menit setiap hari.',
    'Konsumsi makanan beragam dan bergizi seimbang setiap kali makan.',
    'Batasi penggunaan gawai minimal 30 menit sebelum tidur.',
    'Luangkan waktu untuk beristirahat dan melakukan hobi yang menyenangkan.',
    'Cuci tangan dengan sabun sebelum makan dan setelah beraktivitas di luar.',
    'Kelola stres dengan berbicara pada orang yang kamu percaya.',
    'Kurangi konsumsi minuman tinggi gula dan gantilah dengan air putih.',
    'Duduk terlalu lama? Berdiri dan meregangkan tubuh setiap satu jam sekali.'
  ];

  const FACTS = [
    { text: 'Otak remaja terus berkembang hingga usia sekitar 25 tahun, terutama bagian yang mengatur pengambilan keputusan.', source: 'WHO — Adolescent Health' },
    { text: 'Mencuci tangan dengan sabun dapat mengurangi risiko penyakit diare hingga signifikan dibandingkan tidak mencuci tangan sama sekali.', source: 'CDC — Handwashing Facts' },
    { text: 'Aktivitas fisik rutin terbukti membantu meningkatkan suasana hati selain menyehatkan tubuh secara fisik.', source: 'WHO — Physical Activity' },
    { text: 'Sarapan yang bergizi membantu menjaga konsentrasi dan performa belajar di sekolah.', source: 'Kementerian Kesehatan RI' },
    { text: 'Tidur yang cukup membantu proses penyimpanan ingatan, termasuk materi pelajaran yang baru dipelajari.', source: 'WHO — Sleep and Health' },
    { text: 'Merokok pada usia remaja meningkatkan risiko kecanduan nikotin lebih besar dibanding memulai pada usia dewasa.', source: 'CDC — Youth and Tobacco Use' },
    { text: 'Konsumsi gula berlebih dikaitkan dengan peningkatan risiko obesitas dan gangguan metabolik di kemudian hari.', source: 'WHO — Sugar Intake Guideline' }
  ];

  const QUICK_ACCESS = [
    { slug: 'mental', icon: '🧠', label: 'Kesehatan Mental' },
    { slug: 'nutrisi', icon: '🥗', label: 'Nutrisi & Gizi' },
    { slug: 'jantung', icon: '❤️', label: 'Kesehatan Jantung' },
    { slug: 'pernapasan', icon: '🫁', label: 'Kesehatan Pernapasan' },
    { slug: 'gayahidup', icon: '🏃', label: 'Gaya Hidup Sehat' },
    { slug: 'penyakit', icon: '🦠', label: 'Penyakit & Pencegahan' }
  ];

  /* ============================================================
     2. STATE
     ============================================================ */

  const state = {
    view: 'home',
    categoryFilter: 'all',
    showFavoritesOnly: false,
    favorites: loadFavorites(),
    tipIndex: Math.floor(Math.random() * TIPS.length),
    currentArticleId: null
  };

  function loadFavorites() {
    try {
      const raw = localStorage.getItem('sehatin_favorites');
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (e) { return new Set(); }
  }
  function saveFavorites() {
    try { localStorage.setItem('sehatin_favorites', JSON.stringify([...state.favorites])); } catch (e) {}
  }

  function categoryOf(slug) {
    return CATEGORIES.find(c => c.slug === slug) || { name: slug, icon: '📄' };
  }
  function articleCount(slug) {
    return ARTICLES.filter(a => a.category === slug).length;
  }

  /* ============================================================
     3. DOM REFS
     ============================================================ */

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  const searchToggle = $('#searchToggle');
  const searchPanel = $('#searchPanel');
  const searchInput = $('#searchInput');
  const searchClose = $('#searchClose');
  const searchFilters = $('#searchFilters');
  const searchResults = $('#searchResults');
  const darkModeToggle = $('#darkModeToggle');
  const scrollTopBtn = $('#scrollTopBtn');
  const toastContainer = $('#toastContainer');
  const modalOverlay = $('#modalOverlay');
  const modalBody = $('#modalBody');
  const modalClose = $('#modalClose');

  /* ============================================================
     4. VIEW ROUTING
     ============================================================ */

  function switchView(view, opts) {
    opts = opts || {};
    state.view = view;
    $$('.view').forEach(v => v.classList.toggle('active', v.dataset.viewPanel === view));
    $$('.nav-link').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
    closeSearchPanel();
    closeMobileNav();
    if (opts.scrollTop !== false) window.scrollTo({ top: 0, behavior: 'auto' });
    if (view === 'artikel-list') renderArticleList();
    if (view === 'kategori') renderCategoryGrid();
    if (view === 'tips') renderTipsPage();
    observeReveals();
  }

  document.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('[data-view]');
    if (viewBtn) {
      e.preventDefault();
      switchView(viewBtn.dataset.view);
    }
  });

  /* ============================================================
     5. RENDER: QUICK ACCESS
     ============================================================ */

  function renderQuickAccess() {
    const grid = $('#quickAccessGrid');
    grid.innerHTML = QUICK_ACCESS.map(q => `
      <button class="quick-card" data-goto-category="${q.slug}" aria-label="Lihat artikel ${q.label}">
        <span class="qc-icon" aria-hidden="true">${q.icon}</span>
        <strong>${q.label}</strong>
      </button>
    `).join('');
  }

  document.addEventListener('click', (e) => {
    const qc = e.target.closest('[data-goto-category]');
    if (qc) {
      state.categoryFilter = qc.dataset.gotoCategory;
      state.showFavoritesOnly = false;
      switchView('artikel-list');
    }
  });

  /* ============================================================
     6. RENDER: ARTICLE CARDS
     ============================================================ */

  function articleCardHTML(a) {
    const isFav = state.favorites.has(a.id);
    const cat = categoryOf(a.category);
    return `
      <article class="article-card">
        <div class="article-thumb" aria-hidden="true">
          ${a.icon}
          <button class="bookmark-btn" data-bookmark="${a.id}" aria-pressed="${isFav}" aria-label="${isFav ? 'Hapus dari favorit' : 'Simpan ke favorit'}">${isFav ? '★' : '☆'}</button>
        </div>
        <div class="article-body">
          <span class="article-cat">${cat.icon} ${cat.name}</span>
          <h3>${a.title}</h3>
          <p class="article-desc">${a.excerpt}</p>
          <div class="article-meta"><span>${a.date}</span><span>⏱ ${a.readTime} membaca</span></div>
          <button class="btn btn-outline" data-open-article="${a.id}">Baca Selengkapnya</button>
        </div>
      </article>
    `;
  }

  function renderLatestArticles() {
    const grid = $('#latestArticleGrid');
    const latest = ARTICLES.slice(0, 6);
    grid.innerHTML = latest.map(articleCardHTML).join('');
  }

  function renderArticleList() {
    renderCategoryFilterBar();
    const grid = $('#allArticleGrid');
    const emptyState = $('#articleEmptyState');
    let list = ARTICLES.slice();
    if (state.categoryFilter !== 'all') list = list.filter(a => a.category === state.categoryFilter);
    if (state.showFavoritesOnly) list = list.filter(a => state.favorites.has(a.id));

    $('#articleResultCount').textContent = `Menampilkan ${list.length} dari ${ARTICLES.length} artikel`;
    grid.innerHTML = list.map(articleCardHTML).join('');
    emptyState.hidden = list.length !== 0;
  }

  function renderCategoryFilterBar() {
    const bar = $('#categoryFilterBar');
    const chips = [{ slug: 'all', name: 'Semua Kategori', icon: '📚' }, ...CATEGORIES];
    bar.innerHTML = chips.map(c => `
      <button class="chip ${state.categoryFilter === c.slug ? 'active' : ''}" data-filter-category="${c.slug}">
        ${c.icon} ${c.name}
      </button>
    `).join('');
  }

  document.addEventListener('click', (e) => {
    const filterBtn = e.target.closest('[data-filter-category]');
    if (filterBtn) {
      state.categoryFilter = filterBtn.dataset.filterCategory;
      renderArticleList();
    }
    const openBtn = e.target.closest('[data-open-article]');
    if (openBtn) openArticle(openBtn.dataset.openArticle);

    const bookmarkBtn = e.target.closest('[data-bookmark]');
    if (bookmarkBtn) toggleBookmark(bookmarkBtn.dataset.bookmark);
  });

  $('#favoriteToggleBtn').addEventListener('click', function () {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    this.setAttribute('aria-pressed', String(state.showFavoritesOnly));
    this.classList.toggle('active', state.showFavoritesOnly);
    renderArticleList();
  });

  function toggleBookmark(id) {
    const article = ARTICLES.find(a => a.id === id);
    if (!article) return;
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast(`Dihapus dari favorit: "${article.title}"`);
    } else {
      state.favorites.add(id);
      showToast(`Disimpan ke favorit: "${article.title}"`);
    }
    saveFavorites();
    // re-render whichever grids are visible
    if (state.view === 'home') renderLatestArticles();
    if (state.view === 'artikel-list') renderArticleList();
    if (state.view === 'artikel-detail') updateDetailBookmarkBtn();
    document.querySelectorAll(`[data-bookmark="${id}"]`).forEach(btn => {
      const fav = state.favorites.has(id);
      btn.setAttribute('aria-pressed', fav);
      btn.textContent = fav ? '★' : '☆';
    });
  }

  /* ============================================================
     7. ARTICLE DETAIL
     ============================================================ */

  function openArticle(id) {
    const article = ARTICLES.find(a => a.id === id);
    if (!article) return;
    state.currentArticleId = id;
    renderArticleDetail(article);
    switchView('artikel-detail');
  }

  function contentBlockHTML(block) {
    if (block.type === 'p') return `<p>${block.text}</p>`;
    if (block.type === 'h2') return `<h2>${block.text}</h2>`;
    if (block.type === 'ul') return `<ul>${block.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    if (block.type === 'highlight') return `<div class="highlight-box"><strong>💡 Poin Penting:</strong> ${block.text}</div>`;
    return '';
  }

  function renderArticleDetail(a) {
    const cat = categoryOf(a.category);
    const isFav = state.favorites.has(a.id);
    const related = ARTICLES.filter(x => x.category === a.category && x.id !== a.id).slice(0, 3);
    const relatedFallback = related.length ? related : ARTICLES.filter(x => x.id !== a.id).slice(0, 3);

    $('#articleDetailContent').innerHTML = `
      <button class="back-btn" data-view="artikel-list">← Kembali ke Artikel</button>
      <div class="detail-meta">
        <span class="article-cat">${cat.icon} ${cat.name}</span>
        <span>${a.date}</span>
        <span>⏱ ${a.readTime} membaca</span>
      </div>
      <h1>${a.title}</h1>
      <div class="detail-thumb" aria-hidden="true">${a.icon}</div>
      <div class="detail-actions">
        <button class="btn btn-ghost" id="detailBookmarkBtn" data-bookmark="${a.id}" aria-pressed="${isFav}">
          ${isFav ? '★ Tersimpan di Favorit' : '☆ Simpan ke Favorit'}
        </button>
      </div>
      <div class="article-body-content">
        ${a.content.map(contentBlockHTML).join('')}
      </div>
      <div class="source-box">
        <h4>Sumber Informasi</h4>
        <ul>${a.sources.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="related-articles">
        <h3>Artikel Terkait</h3>
        <div class="article-grid">${relatedFallback.map(articleCardHTML).join('')}</div>
      </div>
    `;
    updateReadingProgress();
  }

  function updateDetailBookmarkBtn() {
    const btn = $('#detailBookmarkBtn');
    if (!btn) return;
    const isFav = state.favorites.has(state.currentArticleId);
    btn.setAttribute('aria-pressed', isFav);
    btn.innerHTML = isFav ? '★ Tersimpan di Favorit' : '☆ Simpan ke Favorit';
  }

  /* Reading progress bar */
  function updateReadingProgress() {
    const bar = $('#readingProgress');
    if (state.view !== 'artikel-detail') { bar.style.setProperty('--progress', '0%'); return; }
    const article = $('#articleDetailContent');
    if (!article) return;
    const total = article.scrollHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(window.scrollY - article.offsetTop + window.innerHeight * 0.3, 0), total);
    const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
    bar.style.setProperty('--progress', pct + '%');
  }

  /* ============================================================
     8. CATEGORY PAGE
     ============================================================ */

  function renderCategoryGrid() {
    const grid = $('#categoryGridFull');
    grid.innerHTML = CATEGORIES.map(c => `
      <button class="category-card" data-goto-category="${c.slug}">
        <span class="cat-icon" aria-hidden="true">${c.icon}</span>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <span class="cat-count">${articleCount(c.slug)} artikel</span>
      </button>
    `).join('');
  }

  /* ============================================================
     9. SEARCH
     ============================================================ */

  function renderSearchFilterChips() {
    const chips = [{ slug: 'all', name: 'Semua' }, ...CATEGORIES];
    searchFilters.innerHTML = chips.map(c => {
      const isActive = c.slug === 'all' ? !searchState.category : searchState.category === c.slug;
      return `<button class="chip ${isActive ? 'active' : ''}" data-search-filter="${c.slug}">${c.name}</button>`;
    }).join('');
  }

  const searchState = { category: null };

  function runSearch(query) {
    const q = query.trim().toLowerCase();
    let results = ARTICLES;
    if (searchState.category) results = results.filter(a => a.category === searchState.category);
    if (q) {
      results = results.filter(a => {
        const hay = [a.title, a.excerpt, categoryOf(a.category).name, ...(a.tags || [])].join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    if (!q && !searchState.category) {
      searchResults.innerHTML = `<p class="search-hint">Ketik kata kunci untuk mencari artikel, misalnya "stres", "tidur", atau "vitamin".</p>`;
      return;
    }
    if (!results.length) {
      searchResults.innerHTML = `<p class="search-empty">Tidak ditemukan artikel yang cocok. Coba kata kunci lain.</p>`;
      return;
    }
    searchResults.innerHTML = results.slice(0, 8).map(a => `
      <button class="search-result-item" data-open-article="${a.id}" data-search-select="1">
        <span class="search-result-thumb" aria-hidden="true">${a.icon}</span>
        <span>
          <strong>${a.title}</strong>
          <span>${categoryOf(a.category).name} · ${a.readTime} membaca</span>
        </span>
      </button>
    `).join('');
  }

  function openSearchPanel() {
    renderSearchFilterChips();
    searchPanel.hidden = false;
    searchToggle.setAttribute('aria-expanded', 'true');
    runSearch(searchInput.value);
    setTimeout(() => searchInput.focus(), 50);
  }
  function closeSearchPanel() {
    searchPanel.hidden = true;
    searchToggle.setAttribute('aria-expanded', 'false');
  }

  searchToggle.addEventListener('click', () => (searchPanel.hidden ? openSearchPanel() : closeSearchPanel()));
  $('#heroSearchBtn').addEventListener('click', openSearchPanel);
  searchClose.addEventListener('click', closeSearchPanel);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSearchPanel(); closeModal(); } });

  let searchDebounce;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchDebounce);
    const val = e.target.value;
    searchDebounce = setTimeout(() => runSearch(val), 180);
  });

  document.addEventListener('click', (e) => {
    const sf = e.target.closest('[data-search-filter]');
    if (sf) {
      searchState.category = sf.dataset.searchFilter === 'all' ? null : sf.dataset.searchFilter;
      renderSearchFilterChips();
      runSearch(searchInput.value);
    }
    const sel = e.target.closest('[data-search-select]');
    if (sel) closeSearchPanel();
  });

  /* ============================================================
     10. TIPS
     ============================================================ */

  function renderTip() {
    const text = TIPS[state.tipIndex];
    const el = $('#tipText');
    if (el) el.textContent = text;
    const elFull = $('#tipTextFull');
    if (elFull) elFull.textContent = text;
  }
  function nextTip() {
    let next;
    do { next = Math.floor(Math.random() * TIPS.length); } while (next === state.tipIndex && TIPS.length > 1);
    state.tipIndex = next;
    renderTip();
  }
  $('#nextTipBtn').addEventListener('click', nextTip);
  $('#nextTipBtnFull').addEventListener('click', nextTip);

  function renderTipsPage() {
    renderTip();
    $('#allTipsList').innerHTML = TIPS.map((t, i) => `
      <div class="tip-item"><span class="n">${String(i + 1).padStart(2, '0')}</span><p style="margin:0;color:var(--text)">${t}</p></div>
    `).join('');
  }

  /* ============================================================
     11. HEALTH FACTS
     ============================================================ */

  function renderFacts() {
    $('#factsGrid').innerHTML = FACTS.map(f => `
      <div class="fact-card reveal-on-scroll">
        <p>🔎 ${f.text}</p>
        <span class="fact-source">Sumber: ${f.source}</span>
      </div>
    `).join('');
  }

  /* ============================================================
     12. EMERGENCY / MODAL
     ============================================================ */

  function openModal(html) {
    modalBody.innerHTML = html;
    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modalOverlay.hidden = true;
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

  $('#emergencyBtn').addEventListener('click', () => {
    openModal(`
      <h3 id="modalTitle">🚨 Bantuan Darurat</h3>
      <p>Jika kamu atau orang di sekitarmu mengalami kondisi darurat medis, segera hubungi layanan berikut:</p>
      <ul>
        <li><strong>119</strong> — Layanan Ambulans &amp; Gawat Darurat Kementerian Kesehatan RI</li>
        <li><strong>112</strong> — Nomor Panggilan Darurat Nasional</li>
        <li>Segera menuju IGD (Instalasi Gawat Darurat) rumah sakit atau puskesmas terdekat.</li>
      </ul>
      <p style="font-size:.85rem;">SEHATIN adalah media edukasi dan tidak dapat memberikan pertolongan medis langsung. Dalam kondisi darurat, selalu hubungi layanan resmi di atas atau tenaga medis terdekat.</p>
    `);
  });

  document.addEventListener('click', (e) => {
    const fm = e.target.closest('[data-footer-modal]');
    if (!fm) return;
    const kind = fm.dataset.footerModal;
    if (kind === 'privacy') {
      openModal(`
        <h3 id="modalTitle">Kebijakan Privasi</h3>
        <p>SEHATIN tidak mengumpulkan data pribadi pengguna melalui server, karena website ini berjalan sepenuhnya di perangkatmu (client-side).</p>
        <p>Data seperti artikel favorit dan preferensi mode tampilan hanya disimpan secara lokal di peramban (localStorage) milikmu sendiri dan tidak dikirim ke pihak mana pun.</p>
      `);
    } else if (kind === 'disclaimer') {
      openModal(`
        <h3 id="modalTitle">Disclaimer</h3>
        <p>Informasi dalam website ini ditujukan untuk edukasi dan tidak menggantikan konsultasi, diagnosis, atau pengobatan dari tenaga kesehatan profesional.</p>
        <p>Jika mengalami keluhan atau kondisi yang mengkhawatirkan, konsultasikan dengan tenaga kesehatan terdekat.</p>
      `);
    }
  });

  /* ============================================================
     13. DARK MODE
     ============================================================ */

  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    $('#themeIconSun').hidden = theme === 'dark';
    $('#themeIconMoon').hidden = theme !== 'dark';
    try { localStorage.setItem('sehatin_theme', theme); } catch (e) {}
  }
  darkModeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(current);
  });

  /* ============================================================
     14. MOBILE NAV
     ============================================================ */

  function closeMobileNav() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  /* ============================================================
     15. SCROLL EFFECTS
     ============================================================ */

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
    scrollTopBtn.hidden = window.scrollY < 400;
    updateReadingProgress();
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  let revealObserver;
  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
      }, { threshold: 0.15 });
    }
    $$('.reveal-on-scroll').forEach(el => revealObserver.observe(el));
  }

  /* ============================================================
     16. TOASTS
     ============================================================ */

  function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = 'toast' + (type === 'error' ? ' toast-error' : '');
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  /* ============================================================
     17. FORM VALIDATION HELPERS
     ============================================================ */

  function setFieldError(inputEl, errorEl, message) {
    if (message) {
      inputEl.classList.add('invalid');
      errorEl.textContent = message;
      return false;
    }
    inputEl.classList.remove('invalid');
    errorEl.textContent = '';
    return true;
  }

  /* ============================================================
     18. CALCULATORS
     ============================================================ */

  // ---- BMI ----
  $('#bmiForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const weightEl = $('#bmiWeight'), heightEl = $('#bmiHeight');
    const weight = parseFloat(weightEl.value), height = parseFloat(heightEl.value);
    let ok = true;
    ok = setFieldError(weightEl, $('#bmiWeightError'), (!weight || weight <= 0 || weight > 400) ? 'Masukkan berat badan yang valid (1–400 kg).' : '') && ok;
    ok = setFieldError(heightEl, $('#bmiHeightError'), (!height || height <= 0 || height > 300) ? 'Masukkan tinggi badan yang valid (50–300 cm).' : '') && ok;
    if (!ok) { showToast('Periksa kembali data yang kamu masukkan.', 'error'); return; }

    const hM = height / 100;
    const bmi = weight / (hM * hM);
    let catLabel, catClass, desc;
    if (bmi < 18.5) { catLabel = 'Berat Badan Kurang'; catClass = 'cat-underweight'; desc = 'Pertimbangkan menambah asupan gizi seimbang. Konsultasikan dengan tenaga kesehatan bila perlu.'; }
    else if (bmi < 25) { catLabel = 'Berat Badan Normal'; catClass = 'cat-normal'; desc = 'Pertahankan pola makan dan aktivitas fisik yang sehat.'; }
    else if (bmi < 30) { catLabel = 'Berat Badan Berlebih'; catClass = 'cat-overweight'; desc = 'Tingkatkan aktivitas fisik dan jaga pola makan seimbang.'; }
    else { catLabel = 'Obesitas'; catClass = 'cat-obese'; desc = 'Sebaiknya konsultasikan dengan tenaga kesehatan untuk penanganan yang tepat.'; }

    const resultEl = $('#bmiResult');
    resultEl.hidden = false;
    resultEl.innerHTML = `
      <div class="result-value">${bmi.toFixed(1)}</div>
      <span class="result-category ${catClass}">${catLabel}</span>
      <p>${desc} Kategori ini mengikuti klasifikasi umum BMI untuk dewasa Asia dan bersifat edukatif, bukan diagnosis.</p>
    `;
    showToast('BMI berhasil dihitung.');
  });

  // ---- WATER ----
  $('#waterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const weightEl = $('#waterWeight');
    const weight = parseFloat(weightEl.value);
    const ok = setFieldError(weightEl, $('#waterWeightError'), (!weight || weight <= 0 || weight > 400) ? 'Masukkan berat badan yang valid (1–400 kg).' : '');
    if (!ok) { showToast('Periksa kembali data yang kamu masukkan.', 'error'); return; }
    const activityFactor = parseFloat($('#waterActivity').value);
    const liters = ((weight * 33) / 1000) * activityFactor;
    const glasses = Math.round((liters * 1000) / 250);
    const resultEl = $('#waterResult');
    resultEl.hidden = false;
    resultEl.innerHTML = `
      <div class="result-value">${liters.toFixed(1)} L</div>
      <span class="result-category cat-normal">≈ ${glasses} gelas (250 ml) / hari</span>
      <p>Perkiraan kebutuhan cairan harian ini bersifat umum. Kebutuhan aktual dapat berbeda tergantung cuaca, kondisi kesehatan, dan tingkat keringat.</p>
    `;
    showToast('Kebutuhan air harian berhasil dihitung.');
  });

  // ---- CALORIE (Mifflin-St Jeor, simplified) ----
  $('#calorieForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const weightEl = $('#calWeight'), heightEl = $('#calHeight'), ageEl = $('#calAge');
    const weight = parseFloat(weightEl.value), height = parseFloat(heightEl.value), age = parseFloat(ageEl.value);
    let ok = true;
    ok = setFieldError(weightEl, $('#calWeightError'), (!weight || weight <= 0 || weight > 400) ? 'Masukkan berat badan yang valid.' : '') && ok;
    ok = setFieldError(heightEl, $('#calHeightError'), (!height || height <= 0 || height > 300) ? 'Masukkan tinggi badan yang valid.' : '') && ok;
    ok = setFieldError(ageEl, $('#calAgeError'), (!age || age <= 0 || age > 120) ? 'Masukkan usia yang valid (5–120 tahun).' : '') && ok;
    if (!ok) { showToast('Periksa kembali data yang kamu masukkan.', 'error'); return; }

    const gender = $('#calGender').value;
    const activity = parseFloat($('#calActivity').value);
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr += gender === 'male' ? 5 : -161;
    const total = Math.round(bmr * activity);

    const resultEl = $('#calorieResult');
    resultEl.hidden = false;
    resultEl.innerHTML = `
      <div class="result-value">${total.toLocaleString('id-ID')} kkal</div>
      <span class="result-category cat-normal">Perkiraan Kebutuhan Kalori Harian</span>
      <p>Dihitung menggunakan rumus estimasi umum (Mifflin-St Jeor) dan tingkat aktivitas yang kamu pilih. Kebutuhan sebenarnya bisa berbeda antar individu.</p>
    `;
    showToast('Kebutuhan kalori berhasil dihitung.');
  });

  // ---- AGE ----
  $('#ageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const dateEl = $('#birthDate');
    const val = dateEl.value;
    const today = new Date();
    let errMsg = '';
    if (!val) errMsg = 'Pilih tanggal lahir terlebih dahulu.';
    else if (new Date(val) > today) errMsg = 'Tanggal lahir tidak boleh di masa depan.';
    const ok = setFieldError(dateEl, $('#birthDateError'), errMsg);
    if (!ok) { showToast('Periksa kembali tanggal yang kamu masukkan.', 'error'); return; }

    const birth = new Date(val);
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) { months -= 1; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years -= 1; months += 12; }

    const resultEl = $('#ageResult');
    resultEl.hidden = false;
    resultEl.innerHTML = `
      <div class="result-value">${years} tahun</div>
      <span class="result-category cat-normal">${months} bulan ${days} hari</span>
      <p>Usia dihitung berdasarkan tanggal lahir yang kamu masukkan dan tanggal hari ini.</p>
    `;
    showToast('Usia berhasil dihitung.');
  });

  /* ============================================================
     19. CONTACT FORM
     ============================================================ */

  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nameEl = $('#contactName'), emailEl = $('#contactEmail'), msgEl = $('#contactMessage');
    let ok = true;
    ok = setFieldError(nameEl, $('#contactNameError'), nameEl.value.trim().length < 2 ? 'Masukkan nama lengkap kamu.' : '') && ok;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    ok = setFieldError(emailEl, $('#contactEmailError'), !emailPattern.test(emailEl.value.trim()) ? 'Masukkan alamat email yang valid.' : '') && ok;
    ok = setFieldError(msgEl, $('#contactMessageError'), msgEl.value.trim().length < 10 ? 'Tuliskan pesan minimal 10 karakter.' : '') && ok;
    if (!ok) { showToast('Beberapa isian belum sesuai, silakan periksa kembali.', 'error'); return; }

    showToast('Pesan kamu berhasil dikirim. Terima kasih!');
    e.target.reset();
  });

  /* ============================================================
     20. IMAGE FALLBACK (untuk elemen <img> bila ada di masa depan)
     ============================================================ */

  document.addEventListener('error', (e) => {
    const t = e.target;
    if (t && t.tagName === 'IMG' && !t.dataset.fallbackApplied) {
      t.dataset.fallbackApplied = '1';
      t.style.display = 'none';
    }
  }, true);

  /* ============================================================
     21. INIT
     ============================================================ */

  function init() {
    try {
      const savedTheme = localStorage.getItem('sehatin_theme');
      if (savedTheme) applyTheme(savedTheme);
      else applyTheme('light');
    } catch (e) { applyTheme('light'); }

    renderQuickAccess();
    renderLatestArticles();
    renderTip();
    renderFacts();
    switchView('home', { scrollTop: false });
    observeReveals();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
