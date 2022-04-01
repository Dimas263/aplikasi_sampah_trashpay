import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';

class DeskripsiProdukRecycle extends StatefulWidget {
  final String gambar_barang;
  final String nama_produk;
  final String pemilik_produk;
  final String deskripsi_produk;

  DeskripsiProdukRecycle(this.gambar_barang, this.nama_produk, this.pemilik_produk, this.deskripsi_produk);

  @override
  _DeskripsiProdukRecycleState createState() => _DeskripsiProdukRecycleState();
}

class _DeskripsiProdukRecycleState extends State<DeskripsiProdukRecycle> {

  String gambar_barang;
  String nama_produk;
  String pemilik_produk;
  String deskripsi_produk;

  @override
  void initState(){
    setState(() {
      this.gambar_barang = widget.gambar_barang;
      this.nama_produk = widget.nama_produk;
      this.pemilik_produk = widget.pemilik_produk;
      this.deskripsi_produk = widget.deskripsi_produk;
    });
    super.initState();
  }

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
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  margin: const EdgeInsets.only(top:10,right:15,left:15,bottom:10),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Container(
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          color: HexColor('#FFFFFF'),
                          child: InkWell(
                            borderRadius: BorderRadius.circular(9.0),
                            splashColor: HexColor('#428DFC'),
                            onTap: () {

                            },
                            child: Padding(
                              padding: const EdgeInsets.all(15),
                              child: Image.network('$gambar_barang', height: 150,),
                            ),
                          ),
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(top:5,right:15,left:15,bottom:5),
                      ),
                      Container(
                        margin: const EdgeInsets.only(top:5,right:15,left:15,bottom:5),
                        child: Column(
                          children: [
                            Text(
                              '$nama_produk',
                              style: GoogleFonts.montserrat(
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                              textAlign: TextAlign.center,
                            ),
                            Text(
                              '$pemilik_produk',
                              style: GoogleFonts.montserrat(
                                fontSize: 18.0,
                                color: HexColor('#000000'),
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(top:25,right:5,left:5,bottom:5),
                        child: Card(
                          child: Padding(
                            padding: const EdgeInsets.all(10),
                            child: Column(
                              children: [
                                Text(
                                  'Deskripsi',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 24.0,
                                    fontWeight: FontWeight.bold,
                                    color: HexColor('#428DFC'),
                                  ),
                                  textAlign: TextAlign.left,
                                ),
                                Container(
                                  child: Padding(
                                      padding: const EdgeInsets.all(10),
                                      child: Text(
                                        '$deskripsi_produk',
                                        style: GoogleFonts.montserrat(
                                          fontSize: 14.0,
                                        ),
                                        textAlign: TextAlign.justify,
                                      )
                                  ),
                                )
                              ],
                            ),
                          ),
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(top:25,right:20,left:20,bottom:5),
                        child: Column(
                          children: [
                            Text(
                              'Tertarik Dengan Produk Ini?',
                              style: GoogleFonts.montserrat(
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#FC4850'),
                              ),
                              textAlign: TextAlign.left,
                            ),
                            Container(
                              margin: const EdgeInsets.only(top:15,right:15,left:15,bottom:5),
                              child: ListTile(
                                onTap: () {

                                },
                                leading: Text(
                                  'Hubungi Pemilik',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 18.0,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                trailing: Image.network('https://img.icons8.com/external-sbts2018-flat-sbts2018/48/000000/external-chat-social-media-basic-1-sbts2018-flat-sbts2018-1.png'),
                              )
                            )
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
