import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:sampah/home/pasar/detail.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:search_page/search_page.dart';

class Produk {
  final String gambar, nama_produk, pemilik, deskripsi;

  Produk(this.gambar, this.nama_produk, this.pemilik, this.deskripsi);
}

class ProdukRecycle extends StatefulWidget {
  const ProdukRecycle({Key key, User user})
      : _user = user,
        super(key: key);

  final User _user;

  @override
  _ProdukRecycleState createState() => _ProdukRecycleState();
}

class _ProdukRecycleState extends State<ProdukRecycle> {
  static List<Produk> barang_recycle = [
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-11.jpg', 'Pot Tanaman', 'Mia','Membuat pot tanaman gantung dari botol berkas, caranya tinggal potong bagian bawah botol, tambahkan tali gantungan, lalu lukis dengan cat warna sesuai keinginan, deh'),
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-2.jpg', 'Robot Mainan', 'Dimas','Dengan sedikit usaha dan kreativitas, botol bekas pun bisa dijadikan mainan robot-robotan yang keren. Tak sulit kok membuatnya. Kamu hanya butuh botol bekas, lem, gunting, dan juga kreatifitas. Biar lebih seru, ajak juga anak belajar membuat kerajinan dari botol plastik bekas ini, ya!'),
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-1.jpg', 'Tempat Pensil', 'Adi','kamu bisa mengubah botol bekas menjadi wadah tempat pensil warna yang unik bagi anak-anak di rumah. Agar lebih menarik, kamu bisa mewarnai botol berdasarkan masing-masing pensil warna yang ada. Anak pasti akan semakin betah belajar dan mewarnai!'),
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-8.jpg', 'Celengan Anak', 'Dimas','Mengajarkan anak untuk terbiasa menabung sejak dini akan lebih mudah dengan cara ini. Kamu hanya perlu memanfaatkan botol bekas, lalu mengubahnya menjadi sebuah kerajinan dari botol plastik bekas yang berbentuk celengan. Selain lebih murah, modelnya pun bisa disesuaikan dengan keinginan anak-anak ‘kan'),
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-10.jpg', 'Bunga Hias', 'Mia','Kerajinan botol bekas juga bisa kamu gunakan sebagai hiasan untuk mempercantik rumah, lho. Misalnya, kamu bisa daur ulang plastik jadi rangkaian bunga-bunga aneka warna yang indah.Caranya pun mudah, botol tinggal digunting berbentuk lancip pada ujung-ujungnya menyerupai kelopak bunga.Setelah itu, kamu bisa mewarnai sesuai keinginan. Jangan lupa tambahkan tangkai dan daunnya ya!'),
    Produk('https://blogpictures.99.co/perahuu.jpg', 'Perahu Plastik', 'Chandra','Gunakan botol plastik untuk dijadikan perahu, nikmati weekend anda dengan refreshing di sekitar sungai, Sebanyak 600 botol plastik bekas dibutuhkan untuk membuat perahu berukuran 4,5×1,4 meter ini. Caranya cukup sederhana, 600 botol plastik bekas tersebut digabungkan sekaligus dengan lem khusus.'),
  ];

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      backgroundColor: HexColor('#ffffff'),
      appBar: AppBar(
        centerTitle: true,
        leading: Image.asset(
          'assets/images/sampah.png',height: 16,
        ),
        title: Text(
          "Trash Pay Shop",
          style: GoogleFonts.montserrat(
            fontSize: 26.0,
            fontWeight: FontWeight.bold,
            color: HexColor('#428DFC'),
          ),
        ),
        elevation: 0,
        brightness: Brightness.light,
        backgroundColor: HexColor('#ffffff'),
      ),
      body: Container(
          margin: EdgeInsets.all(15.0),
          child: GridView.builder(
            itemCount: barang_recycle.length,
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 4.0,
                mainAxisSpacing: 4.0
            ),
            itemBuilder: (BuildContext context, int index){
              //return Image.network(barang_recycle[index].gambar);
              return Container(
                child: SingleChildScrollView(
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    child: InkWell(
                      borderRadius: BorderRadius.circular(8.0),
                      splashColor: HexColor('#428DFC'),
                      onTap: () async{
                        Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: DeskripsiProdukRecycle(barang_recycle[index].gambar, barang_recycle[index].nama_produk, barang_recycle[index].pemilik, barang_recycle[index].deskripsi)));
                      },
                      child: Padding(
                        padding: EdgeInsets.all(10.0),
                        child: Column(
                          children: [
                            Image.network(barang_recycle[index].gambar, height: 100,),
                            Padding(padding: EdgeInsets.all(5.0)),
                            Text(
                              barang_recycle[index].nama_produk,
                              style: GoogleFonts.montserrat(
                                fontSize: 12.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                              textAlign: TextAlign.center,
                            ),
                            Text(
                              barang_recycle[index].pemilik,
                              style: GoogleFonts.montserrat(
                                fontSize: 10.0,
                                color: HexColor('#000000'),
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              );
            },
          )
      ),
      floatingActionButton: FloatingActionButton(
        tooltip: 'Cari Produk Recycle',
        onPressed: () => showSearch(
          context: context,
          delegate: SearchPage<Produk>(
            onQueryUpdate: (s) => print(s),
            items: barang_recycle,
            searchLabel: 'Cari Produk Recycle',
            suggestion: Center(
              child: Text('Cari Berdasarkan Nama Produk Atau Pemilik Produk'),
            ),
            failure: Center(
              child: Text('Produk Tidak Ditemukan :('),
            ),
            filter: (produk) => [
              produk.nama_produk,
              produk.pemilik,
            ],
            builder: (produk) => Container(
              margin: EdgeInsets.only(top:5.0, left:15.0, right: 15.0),
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
                child: InkWell(
                  borderRadius: BorderRadius.circular(8.0),
                  splashColor: HexColor('#428DFC'),
                  onTap: () async{
                    Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: DeskripsiProdukRecycle(produk.gambar, produk.nama_produk, produk.pemilik, produk.deskripsi)));
                  },
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: ListTile(
                      leading: Image.network(produk.gambar),
                      title: Text(produk.nama_produk),
                      subtitle: Text(produk.pemilik),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        child: Icon(Icons.search),
      ),
    );
  }
}
