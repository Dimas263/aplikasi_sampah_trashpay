import 'dart:ui';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/home/pasar/detail.dart';
import 'package:sampah/profile/produkBaru.dart';
import 'package:search_page/search_page.dart';

class Produk {
  final String gambar;
  final String nama_produk;
  final String pemilik;
  final String deskripsi;

  Produk(this.gambar, this.nama_produk, this.pemilik, this.deskripsi);
}

class Produkku extends StatefulWidget {

  @override
  _ProdukkuState createState() => _ProdukkuState();
}

class _ProdukkuState extends State<Produkku> {
  User _user;
  String username;
  static get user => FirebaseAuth.instance.currentUser;

  @override
  void initState() {
    _user = user;
    this.username = _user.displayName;

    super.initState();
  }

  static List<Produk> barang_recycle = [
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-11.jpg', 'Pot Tanaman', '','Membuat pot tanaman gantung dari botol berkas, caranya tinggal potong bagian bawah botol, tambahkan tali gantungan, lalu lukis dengan cat warna sesuai keinginan, deh'),
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-2.jpg', 'Robot Mainan', '','Dengan sedikit usaha dan kreativitas, botol bekas pun bisa dijadikan mainan robot-robotan yang keren. Tak sulit kok membuatnya. Kamu hanya butuh botol bekas, lem, gunting, dan juga kreatifitas. Biar lebih seru, ajak juga anak belajar membuat kerajinan dari botol plastik bekas ini, ya!'),
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-1.jpg', 'Tempat Pensil', '','kamu bisa mengubah botol bekas menjadi wadah tempat pensil warna yang unik bagi anak-anak di rumah. Agar lebih menarik, kamu bisa mewarnai botol berdasarkan masing-masing pensil warna yang ada. Anak pasti akan semakin betah belajar dan mewarnai!'),
    Produk('https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/daur-ulang-plastik-8.jpg', 'Celengan Anak', '','Mengajarkan anak untuk terbiasa menabung sejak dini akan lebih mudah dengan cara ini. Kamu hanya perlu memanfaatkan botol bekas, lalu mengubahnya menjadi sebuah kerajinan dari botol plastik bekas yang berbentuk celengan. Selain lebih murah, modelnya pun bisa disesuaikan dengan keinginan anak-anak ‘kan'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: HexColor('#ffffff'),
      appBar: AppBar(
        centerTitle: true,
        leading: Image.asset(
          'assets/images/sampah.png',height: 16,
        ),
        title: Text(
          "Trashop $username",
          style: GoogleFonts.montserrat(
            fontSize: 20.0,
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
                        Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: DeskripsiProdukRecycle(barang_recycle[index].gambar, barang_recycle[index].nama_produk, '$username', barang_recycle[index].deskripsi)));
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
                              '$username',
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
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Text(
            'Daftarkan Produk Recycle',
            style: GoogleFonts.montserrat(
              fontSize: 14.0,
              fontWeight: FontWeight.bold,
              color: HexColor('#000000'),
            ),
          ),
          Padding(padding: const EdgeInsets.all(5),),
          FloatingActionButton(
            onPressed: () {
              Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: ProdukBaru()));
            },
            child: Icon(Icons.add),
          ),
          Padding(padding: const EdgeInsets.all(5),),
          FloatingActionButton(
            tooltip: 'Cari Produk Anda',
            onPressed: () => showSearch(
              context: context,
              delegate: SearchPage<Produk>(
                onQueryUpdate: (s) => print(s),
                items: barang_recycle,
                searchLabel: 'Cari Produk Recycle',
                suggestion: Center(
                  child: Text('Cari Berdasarkan Nama Produk'),
                ),
                failure: Center(
                  child: Text('Produk Tidak Ditemukan :('),
                ),
                filter: (produk) => [
                  produk.nama_produk,
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
                        Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: DeskripsiProdukRecycle(produk.gambar, produk.nama_produk, '$username', produk.deskripsi)));
                      },
                      child: Padding(
                        padding: const EdgeInsets.all(10),
                        child: ListTile(
                          leading: Image.network(produk.gambar),
                          title: Text(produk.nama_produk),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            child: Icon(Icons.search),
          ),
        ],
      ),
    );
  }
}
