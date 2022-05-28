"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      "Articles",
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://www.viva.co.id/gaya-hidup/kesehatan-intim/1475812-tanda-di-mata-ini-bisa-menandakan-kolesterol-sedang-tinggi",
          title: "Tanda di Mata Ini Bisa Menandakan Kolesterol Sedang Tinggi",
          image:
            "https://thumb.viva.co.id/media/frontend/thumbs3/2022/05/17/628374ec25b64-mata-floaters_665_374.jpg",
          description:
            "VIVA – Tubuh kita membutuhkan kolesterol, sejenis lemak, agar berfungsi dengan baik. Namun, memiliki terlalu banyak kolesterol dalam darah dapat berdampak negatif terhadap kesehatan Anda. Kolesterol tinggi merupakan faktor risiko yang diketahui untuk masalah kesehatan yang parah, mulai dari penyakit jantung hingga stroke. Ditandai dengan kurangnya tanda-tanda peringatan, kolesterol tinggi sering digambarkan sebagai kondisi diam.  Namun, membiarkan kadar Anda tidak terdeteksi dapat membahayakan kesehatan kardiovaskular Anda. Salah satu indikator kolesterol tinggi dalam darah Anda bisa jadi eye floaters. Floaters adalah bintik-bintik dalam penglihatan Anda dan biasanya terlihat seperti spek hitam atau abu-abu atau jaring laba-laba yang melayang ketika Anda menggerakkan mata.  Bintik-bintik gelap atau garis-garis dalam penglihatan Anda (floaters) adalah gejala oklusi vena retina. Retina, jaringan peka cahaya di belakang mata, menerima suplai darah melalui arteri retina dan vena retina. Ketika vena tersumbat, itu disebut oklusi vena retina. Selengkapnya di",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://www.viva.co.id/gaya-hidup/kesehatan-intim/1478129-manfaat-wortel",
          title: "7 Manfaat Wortel Ini Bisa Atasi Masalah Kesehatan Tubuh",
          image:
            "https://thumb.viva.co.id/media/frontend/thumbs3/2018/03/16/5aabb60e513a2-jus-wortel_665_374.jpg",
          description:
            "VIVA – Manfaat wortel untuk kesehatan memang bisa dibilang cukup banyak dan bermanfaat karena diperkaya akan vitamin, mineral dan senyawa antioksidan yang terkandung di dalamnya. Wortel juga diketahui dapat membantu mendukung fungsi kekebalan tubuh, mengurangi risiko jenis kanker tertentu dan meningkatkan penyembuhan luka serta kesehatan dalam pencernaan. Banyak sekali bukan manfaatnya? Kamu yang menginginkan tubuh sehat bisa mengonsumsi wortel baik dengan dibuat menjadi makanan maupun minuman jus atau yang lainnya. Pada kali ini akan kita pelajari lebih lanjut mengenai manfaat wortel yang baik untuk kesehatan. Mengutip dari Medical News Today, berikut ini sejumlah manfaat wortel untuk kesehatan yang bisa kamu ketahui. <h1>1.Baik untuk kesehatan mata</h1> Manfaat wortel yang paling terkenal adalah baik untuk kesehatan mata dan penglihatan yang pasti sudah banyak diketahui juga oleh kebanyakan orang. Kandungan yang terdapat di dalam wortel ada vitamin A. Bagi seseorang yang kekurangan vitamin A dapat menyebabkan xerophthalmia, penyakit mata yang progresif. Xerophthalmia juga dapat menyebabkan rabun senja atau kesulitan melihat ketika tingkat cahaya rendah. Kekurangan vitamin A juga dapat menjadi salah satu penyebab utama kebutaan pada anak-anak yang dapat dicegah. Wortel juga mengandung antioksidan lutein dan zeaxanthin dan kombinasi keduanya dapat membantu mencegah degenerasi makula terkait usia, sejenis kehilangan penglihatan. Namun, kebanyakan orang penglihatannya tidak mungkin langsung membaik dari makan wortel saja kecuali mereka kekurangan vitamin A. Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://www.viva.co.id/gaya-hidup/kesehatan-intim/1474865-cara-menghilangkan-mata-panda",
          title: "10 Cara Menghilangkan Mata Panda dan Penyebabnya",
          image:
            "https://thumb.viva.co.id/media/frontend/thumbs3/2021/06/09/60c01d7d72f74-ilustrasi-kantung-mata-bola-mata_665_374.jpg",
          description:
            "VIVA – Cara menghilangkan mata panda. Mengalami mata panda bisa terjadi pada siapa saja, baik itu laki-laki maupun perempuan. Beberapa orang memiliki cara yang berbeda untuk menutupi mata panda. Bisa dengan menggunakan make up, namun tidak bisa menghilangkan secara keseluruhan. Penyebab mata panda bisa bermacam-macam. Mata panda pada umumnya disebabkan karena kelelahan atau kurangnya tidur. Selain dua hal tersebut, mata pada juga bisa disebabkan karena dehidrasi, rokok, konsumsi minuman beralkohol, faktor genetik dan alergi. Tidak hanya itu, mata panda juga bisa disebabkan karena proses penuaan. Seiring bertambahnya umur, tubuh akan mengalami penipisan pada kulit serta berkurangnya sistem jaringan lemak dan kolagen. Hal inilah yang akan membuat pembuluh darah di bawah mata terlihat menonjol, sehingga warna kulit terlihat lebih gelap. Berikut beberapa cara menghilangkan mata panda, seperti dikutip dari berbagai sumber kesehatan, sebagai berikut: <h1>1. Menggunakan Kompres Air</h1> Cara menghilangkan mata panda bisa dengan mengompres air dingin dan letakan di bagian kedua mata. Mata panda terbentuk karena pembuluh darah di bawah kulit sekitar mata menjadi lebar. Untuk menghilangkan mata panda bisa menggunakan air dingin. Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://www.viva.co.id/gaya-hidup/kesehatan-intim/1474865-cara-menghilangkan-mata-panda",
          title: "10 Cara Menghilangkan Mata Panda dan Penyebabnya",
          image:
            "https://thumb.viva.co.id/media/frontend/thumbs3/2021/06/09/60c01d7d72f74-ilustrasi-kantung-mata-bola-mata_665_374.jpg",
          description:
            "VIVA – Cara menghilangkan mata panda. Mengalami mata panda bisa terjadi pada siapa saja, baik itu laki-laki maupun perempuan. Beberapa orang memiliki cara yang berbeda untuk menutupi mata panda. Bisa dengan menggunakan make up, namun tidak bisa menghilangkan secara keseluruhan. Penyebab mata panda bisa bermacam-macam. Mata panda pada umumnya disebabkan karena kelelahan atau kurangnya tidur. Selain dua hal tersebut, mata pada juga bisa disebabkan karena dehidrasi, rokok, konsumsi minuman beralkohol, faktor genetik dan alergi. Tidak hanya itu, mata panda juga bisa disebabkan karena proses penuaan. Seiring bertambahnya umur, tubuh akan mengalami penipisan pada kulit serta berkurangnya sistem jaringan lemak dan kolagen. Hal inilah yang akan membuat pembuluh darah di bawah mata terlihat menonjol, sehingga warna kulit terlihat lebih gelap. Berikut beberapa cara menghilangkan mata panda, seperti dikutip dari berbagai sumber kesehatan, sebagai berikut: <h1>1. Menggunakan Kompres Air</h1> Cara menghilangkan mata panda bisa dengan mengompres air dingin dan letakan di bagian kedua mata. Mata panda terbentuk karena pembuluh darah di bawah kulit sekitar mata menjadi lebar. Untuk menghilangkan mata panda bisa menggunakan air dingin. Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://www.kompas.com/sains/read/2022/04/25/080500323/mata-kering--penyebab-gejala-dan-cara-mencegahnya",
          title: "Mata Kering: Penyebab, Gejala, dan Cara Mencegahnya",
          image:
            "https://asset.kompas.com/crops/NnuPtiFdgFDaxVtC8a5FDNjyZkw=/0x0:901x601/750x500/data/photo/2021/10/07/615e7acccd985.jpg",
          description:
            "KOMPAS.com - Mata adalah salah satu bagian tubuh yang mempunyai peran vital, sehingga harus dijaga kesehatannya. Masalah kesehatan yang terjadi pada mata beraneka ragam, salah satu yang paling sering ditemui yaitu mata kering. Kondisi ini dapat menyebabkan rasa tidak nyaman di mata, bahkan dapat merusak permukaan bola mata. “Terdapat beberapa masalah yang cukup sering ditemukan di poli mata, seperti masalah penyakit mata kering dan katarak. Kedua penyakit ini dapat menyebabkan gangguan penglihatan,” ujar dr Anna Nur Utami, SpM, Dokter Subspesialis Infeksi Imunologi JEC Eye Hospitals & Clinics seperti dikutip Kompas.com, Sabtu (23/4/2022). Anna menyampaikan, perempuan lebih berisiko mengalami mata kering dibandingkan laki-laki. Selain itu, kondisi mata kering juga lebih banyak dialami oleh orang berusia lebih dari 30 tahun. Perlu digarisbawahi, hidrasi rupanya juga memengaruhi kondisi mata kering. Lebih dari 50 persen tubuh terdiri dari air, sehingga tidak mengherankan jika tingkat cairan tubuh dapat mempengaruhi penglihatan. Untuk itu, penting untuk menjaga kecukupan cairan tubuh, salah satunya dengan minum air putih sesuai kebutuhan tubuh. “Kekurangan cairan berpotensi terjadinya dehidrasi dan timbulnya mata kering. Mata kering dapat menyebabkan mata merah, mata gatal, dan terganggunya pandangan,” jelas Anna. Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://health.kompas.com/read/2022/05/19/140000268/riset-buktikan-kualitas-tidur-pengaruhi-kesehatan-mata",
          title: "Riset Buktikan Kualitas Tidur Pengaruhi Kesehatan Mata",
          image:
            "https://asset.kompas.com/crops/J8aMaWbErqYT2hovHIwAxCegng0=/102x70:5461x3643/750x500/data/photo/2021/12/04/61aab1b4766a1.jpg",
          description:
            "KOMPAS.com - Sudah banyak penelitian yang membuktikan bahwa tidur yang cukup berengaruh besar pada kesehatan tubuh kita. Tidur yang cukup membantu meningkatkan tingkat energi, suasana hati, dan kinerja kita secara keseluruhan. Riset terbaru yang diterbitkan dalam Stem Cell Reports juga membuktikan bahwa tidur yang cukup juga berdampak pada kesehatan mata. Riset tersebut dilakukan oleh para peneliti dari Universitas Harvard dan Universitas Xiamen di China. Riset dilakukan untuk memahami bagaimana tidut mempengaruhi kesehatan mata. Dalam riset tersebut, peneliti memeriksa kornea atau lapisan tipis jaringan yang menutupi mata, yang memainkan peran kunci dalam kesehatan dan fungsi mata secara keseluruhan. Kornea yang sehat menunjukan kondisi mata yang sehat pula. Riset dilalukan dengan meneliti pola tidur tikus. Setelah analisis data, ditemukan bahwa tikus yang tidak bisa tidur malam dengan baik memiliki korna mata yang buruk. Sebaliknya, tikus yang mendapatkan tidur yang cukup menunjukkan kesehatan kornea yang lebih baik. Hal ini terjadi karena tidur yang nyenyak membantu tubuh melawan stres oksidatif. Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://health.kompas.com/read/2022/05/19/140000268/riset-buktikan-kualitas-tidur-pengaruhi-kesehatan-mata",
          title: "Riset Buktikan Kualitas Tidur Pengaruhi Kesehatan Mata",
          image:
            "https://asset.kompas.com/crops/J8aMaWbErqYT2hovHIwAxCegng0=/102x70:5461x3643/750x500/data/photo/2021/12/04/61aab1b4766a1.jpg",
          description:
            "KOMPAS.com - Sudah banyak penelitian yang membuktikan bahwa tidur yang cukup berengaruh besar pada kesehatan tubuh kita. Tidur yang cukup membantu meningkatkan tingkat energi, suasana hati, dan kinerja kita secara keseluruhan. Riset terbaru yang diterbitkan dalam Stem Cell Reports juga membuktikan bahwa tidur yang cukup juga berdampak pada kesehatan mata. Riset tersebut dilakukan oleh para peneliti dari Universitas Harvard dan Universitas Xiamen di China. Riset dilakukan untuk memahami bagaimana tidut mempengaruhi kesehatan mata. Dalam riset tersebut, peneliti memeriksa kornea atau lapisan tipis jaringan yang menutupi mata, yang memainkan peran kunci dalam kesehatan dan fungsi mata secara keseluruhan. Kornea yang sehat menunjukan kondisi mata yang sehat pula. Riset dilalukan dengan meneliti pola tidur tikus. Setelah analisis data, ditemukan bahwa tikus yang tidak bisa tidur malam dengan baik memiliki korna mata yang buruk. Sebaliknya, tikus yang mendapatkan tidur yang cukup menunjukkan kesehatan kornea yang lebih baik. Hal ini terjadi karena tidur yang nyenyak membantu tubuh melawan stres oksidatif. Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://edukasi.kompas.com/read/2022/01/16/184853071/dokter-rsnd-undip-ini-keluhan-mata-pada-lansia-dan-tips-menjaganya",
          title:
            "Dokter RSND Undip: Ini Keluhan Mata pada Lansia dan Tips Menjaganya",
          image:
            "https://asset.kompas.com/crops/ZZkjDggNx1qIxHua2BlYZCvrfDw=/21x20:1250x839/750x500/data/photo/2021/10/06/615d51e9a03a6.jpg",
          description:
            "KOMPAS.com - Seiring bertambahnya usia, biasa terjadi penurunan fungsi mata. Bahkan ada beberapa penyakit mata yang pada umumnya terjadi pada orang yang sudah lanjut usia. Masyarakat perlu mengetahui bagaimana cara menjaga kesehatan mata pada lansia. Ada berbagai cara untuk menjaga kesehatan mata lansia dengan makanan yang bergizi dan bernutrisi sangat membantu dalam meningkatkan kesehatan mata pada orangtua. Menurut Dokter Spesialis Mata Rumah Sakit Nasional Diponegoro (RSND) Universitas Diponegoro (Undip) Puspita Kusuma Dewi, fungsi mata adalah sebagai organ penglihatan, dengan merawatnya justru agar tidak bermasalah. Dia mengatakan, mata yang harus dirawat bagi para lanjut usia, tidak harus menunggu jika ada masalah. “Pada usia senja mau tidak mau ada perubahan-perubahan organ mata yang akan mengalami penuaan berbeda dengan saat kita berusia relatif lebih muda,” terang Puspita Kusuma Dewi seperti dikutip dari laman Undip, Minggu (16/1/2022). Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://health.kompas.com/read/2022/02/04/153031468/merawat-mata-di-masa-pandemi",
          title: "Merawat Mata di Masa Pandemi",
          image:
            "https://asset.kompas.com/crops/gYekkkB3Xbf65Fl9zUUQm4XPO5g=/0x0:780x520/750x500/data/photo/2022/02/04/61fce3c64410c.jpg",
          description:
            "Oleh Prema Muthiah, Optometrist dan Dosen Prodi Optometri Ukrida & Widiastuti Eko Wulandari, Staf Prodi Optometri Ukrida PANDEMI Covid-19 membuat hampir seluruh aktivitas, seperti belajar, bercengkerama, dan bermain, berpindah ke ranah online. Perusahaan menerapkan skema remote working. Sementara itu, kampus dan sekolah berfokus pada e-learning. Situasi tersebut membuat penggunaan peralatan telekomunikasi, seperti handphone, laptop serta, aplikasi pertemuan, seperti Zoom dan Google Meet, meningkat tajam. Memang benar bahwa platform online memungkinkan belajar dan bekerja berjalan optimal selama pandemi. Sayangnya, penggunaan gawai elektronik dengan intensitas tinggi dan terus-menerus juga membawa efek samping yang mengkhawatirkan bagi penglihatan serta kesehatan mata. Selama ini, kebanyakan orang mengabaikan kebutuhan untuk pemeriksaan mata secara rutin dan perawatan mata tingkat dasar. Namun, dampak negatif dari paparan layar gawai tersebut akhirnya membuat banyak orang ingin berkonsultasi dengan dokter mata atau optometris. Peningkatan waktu paparan layar perangkat digital atau screen-time dapat menyebabkan masalah penglihatan dan sejumlah persoalan pada mata. Menatap layar perangkat digital selama lebih dari 3 hingga 4 jam secara terus-menerus akan menimbulkan gejala yang disebut computer vision syndrome (CVS) dan digital eye strain. Terlalu fokus menatap layar perangkat digital dapat membuat seseorang lupa mengedipkan mata sehingga jumlah kedipan (blink rate) menurun. Hal itu menyebabkan mata mengalami tekanan berlebih. Apabila dibiarkan tanpa penanganan dan tidak dimonitor, hal ini bisa menyebabkan mata kering, penglihatan semakin kabur, sakit kepala, serta percepatan kelainan refraksi (refraction-error), seperti miopia. Di samping itu, gejala CVS dan digital eye strain bisa menjadi awal munculnya presbiopia, yaitu kondisi menurunnya kemampuan akomodasi mata. Presbiopia pada orang dewasa dikenal dengan istilah awam rabun dekat atau mata tua. Jika sudah mengalami kondisi ini, bisa jadi seseorang perlu menggunakan lensa baca dalam usia lebih dini dari seharusnya. Perlu dicatat, menurut penelitian yang dilakukan oleh Brien Holden Vision Institute (BHVI) pada 2016, prevalensi miopia pada 2050 di seluruh dunia diprediksi akan mencapai hampir 50 persen. Prevalensinya di Asia, terutama pada orang muda dengan usia di bawah 20 tahun, akan mendekati 90 persen. Indonesia merupakan negara dengan angka lonjakan miopia yang signifikan. Data Oftalmologi Komunitas (Ofkom) Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan Universitas Gadjah Mada (FKKMK UGM) mencatat bahwa dari 312 anak di Indonesia, 41 persennya mengalami miopia dan 21 persen mengalami gangguan refraksi berat. Berkurangnya aktivitas fisik dan berada dalam kondisi statis dalam jangka waktu lama di depan layar digital akan menyebabkan perubahan posisi ergonomis. Ditambah dengan pencahayaan yang tidak baik, leher dan punggung akan terasa sakit. Itu semua merupakan persoalan yang terjadi akibat tingginya screen-time pada masa pandemi.Selengkapnya di ",
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          url: "https://lifestyle.kompas.com/read/2022/01/31/124054820/3-sumber-makanan-kaya-vitamin-a-yang-dapat-dimasukkan-dalam-menu-sehari",
          title:
            "3 Sumber Makanan Kaya Vitamin A yang Dapat Dimasukkan Dalam Menu Sehari-hari",
          image:
            "https://asset.kompas.com/crops/A2281xmh5FjbrQ2_iOUzZfdRsfo=/0x0:1000x667/750x500/data/photo/2021/12/21/61c2020bf1a84.jpg",
          description:
            " KOMPAS.com - Peran vitamin A dalam makanan ternyata lebih dari sekadar meningkatkan penglihatan atau kesehatan mata. Mikronutrien retinoid yang larut dalam lemak ini juga mampu mendukung fungsi kekebalan, reproduksi, dan komunikasi sel di dalam tubuh kita. Menurut Healthline, vitamin A bahkan sangat penting untuk bayi, anak-anak, serta wanita hamil dan menyusui. Sebab, kekurangan mikronutrien ini bisa mengakibatkan kelelahan maupun kerentanan terhadap infeksi karena sistem kekebalan tubuh yang lemah. Parahnya lagi, kekurangan vitamin A juga bisa menimbulkan xerophthalmia atau kekeringan mata yang parah sehingga dapat menyebabkan kebutaan jika tidak diobati. Setiap orang memiliki kebutuhan vitamin A yang berbeda-beda berdasarkan usia, jenis kelamin, dan tingkat penyerapannya dalam makanan. Menurut laporan Harvard T.H. Chan School of Public Health, asupan vitamin A yang cukup untuk orang dewasa atau sudah berusia 19 tahun ke atas adalah 900 mcg (3.000 IU) untuk pria dan 700 mcg (2.333 IU) untuk wanita. Namun, untuk menjaga asupan vitamin A tetap seimbang, pastikan kita tidak melewati asupan harian maksimal yaitu 3000 mcg (10.000 IU). Karena jika melebihi batas, vitamin A dapat berakumulasi di hati yang menyebabkan peningkatan toksisitas dalam tubuh. Hal ini dapat mengakibatkan penglihatan kabur, kelelahan, kelemahan, kejang-kejang, lekas marah, dan nyeri pada tulang, otot, serta persendian. Selengkapnya di ",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
