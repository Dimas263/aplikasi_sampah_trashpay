import 'dart:io';
import 'dart:ui';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:intl/intl.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/main.dart';

class KonfirmasiSampah extends StatefulWidget {
  final File _image;
  final String jenis_sampah;
  final String lokasi_sampah;
  final String nama_sampah;
  final String nilai_sampah;
  final String sampah_recycle;

  KonfirmasiSampah(this._image,this.jenis_sampah,this.lokasi_sampah,this.nama_sampah,this.nilai_sampah,this.sampah_recycle);

  @override
  _KonfirmasiSampahState createState() => _KonfirmasiSampahState();
}

class _KonfirmasiSampahState extends State<KonfirmasiSampah> {
  File _image;
  String jenis_sampah;
  String lokasi_sampah;
  String nama_sampah;
  String nilai_sampah;
  String sampah_recycle;
  String tanggal_buang;
  String saldo_sampah_pesan;
  int saldo_sampah;

  static get user => FirebaseAuth.instance.currentUser;
  @override
  void initState(){
    setState(() {
      this._image = widget._image;
      this.jenis_sampah = widget.jenis_sampah;
      this.lokasi_sampah = widget.lokasi_sampah;
      this.nama_sampah = widget.nama_sampah;
      this.nilai_sampah = widget.nilai_sampah;
      this.sampah_recycle = widget.sampah_recycle;
      var nilai_saldo = '$nilai_sampah';
      if (this.jenis_sampah == this.sampah_recycle){
        this.saldo_sampah = int.parse(nilai_saldo) * 10;
        this.saldo_sampah_pesan = "Selamat, anda mendapatkan saldo. Terus jaga lingkungan dengan membuang sampah pada tempatnya";
      }
      else {
        this.saldo_sampah = 0;
        this.saldo_sampah_pesan = "Maaf, anda tidak mendapatkan saldo karena anda salah membuang sampah";
      }
      var now = new DateTime.now();
      var formatter = new DateFormat('dd-MM-yyyy');
      this.tanggal_buang = formatter.format(now);
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                margin: const EdgeInsets.only(top:55,right:15,left:15,bottom:10),
                child: Text(
                  "Konfirmasi",
                  style: GoogleFonts.montserrat(
                    fontSize: 36.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#000000'),
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              Container(
                child: Column(
                  children: [
                    Container(
                      margin: const EdgeInsets.only(right:35,left:35),
                      child: Image.file(_image,width:250),
                    ),
                    Padding(padding: const EdgeInsets.all(10)),
                    Container(
                      margin: const EdgeInsets.only(right:15,left:15),
                      child: Column(
                        children: [
                          ListTile(
                            title: Text(
                              'Total Sampah',
                              style: GoogleFonts.montserrat(
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                            ),
                            subtitle: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              color: HexColor('#F5F5F5'),
                              elevation: 0,
                              child: Padding(
                                padding: const EdgeInsets.all(10),
                                child: Text(
                                  '1',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 12.0,
                                    fontWeight: FontWeight.bold,
                                    color: HexColor('#428DFC'),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          ListTile(
                            title: Text(
                              'Saldo yang didapatkan',
                              style: GoogleFonts.montserrat(
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                            ),
                            subtitle: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              color: HexColor('#F5F5F5'),
                              elevation: 0,
                              child: Padding(
                                padding: const EdgeInsets.all(10),
                                child: Text(
                                  'Rp. $saldo_sampah,00',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 12.0,
                                    fontWeight: FontWeight.bold,
                                    color: HexColor('#43C418'),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(right:25,left:25,bottom: 10),
                            child: Text(
                              '$saldo_sampah_pesan',
                              style: GoogleFonts.montserrat(
                                fontSize: 12.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#FC4850'),
                              ),
                              textAlign: TextAlign.left,
                            ),
                          ),
                          ListTile(
                            title: Text(
                              'Lokasi Pembuangan Sampah',
                              style: GoogleFonts.montserrat(
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                            ),
                            subtitle: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              color: HexColor('#F5F5F5'),
                              elevation: 0,
                              child: Padding(
                                padding: const EdgeInsets.all(10),
                                child: Text(
                                  '$lokasi_sampah',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 12.0,
                                    fontWeight: FontWeight.bold,
                                    color: HexColor('#428DFC'),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          ListTile(
                            title: Text(
                              'Sampah Anda',
                              style: GoogleFonts.montserrat(
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                            ),
                            subtitle: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              color: HexColor('#F5F5F5'),
                              elevation: 0,
                              child: Padding(
                                padding: const EdgeInsets.all(10),
                                child: Text(
                                  '$sampah_recycle',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 12.0,
                                    fontWeight: FontWeight.bold,
                                    color: HexColor('#428DFC'),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          ListTile(
                            title: Text(
                              'Tempat Sampah',
                              style: GoogleFonts.montserrat(
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                            ),
                            subtitle: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              color: HexColor('#F5F5F5'),
                              elevation: 0,
                              child: Padding(
                                padding: const EdgeInsets.all(10),
                                child: Text(
                                  '$jenis_sampah',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 12.0,
                                    fontWeight: FontWeight.bold,
                                    color: HexColor('#428DFC'),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          ListTile(
                            title: Text(
                              'Tanggal',
                              style: GoogleFonts.montserrat(
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                            ),
                            subtitle: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8.0),
                              ),
                              color: HexColor('#F5F5F5'),
                              elevation: 0,
                              child: Padding(
                                padding: const EdgeInsets.all(10),
                                child: Text(
                                  '$tanggal_buang',
                                  style: GoogleFonts.montserrat(
                                    fontSize: 12.0,
                                    fontWeight: FontWeight.bold,
                                    color: HexColor('#428DFC'),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Container(
                      child: Padding(
                        padding: const EdgeInsets.only(top:25, right:25,left:25,),
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          color: HexColor('#00AEE0'),
                          elevation: 3.0,
                          child: InkWell(
                            borderRadius: BorderRadius.circular(9.0),
                            splashColor: HexColor('#000000'),
                            onTap: () async {
                              Future<dynamic> konfirmasiDialog(){

                                return showDialog(
                                  context: context,
                                  builder: (context) => new AlertDialog(
                                    title: Center(
                                        child: Image.network('https://img.icons8.com/color/50/000000/checked.png'),
                                    ),
                                    actions: [
                                      Center(
                                          child: Padding(
                                            padding: const EdgeInsets.only(bottom: 20),
                                            child: Text(
                                              'Berhasil',
                                              style: GoogleFonts.montserrat(
                                                  color: HexColor('#90C418'),
                                                  fontWeight: FontWeight.bold,
                                                  fontSize: 18
                                              ),
                                              textAlign: TextAlign.center,
                                            ),
                                          )
                                      ),
                                      Center(
                                          child: Padding(
                                            padding: const EdgeInsets.only(bottom: 20),
                                            child: Text(
                                              'Terus buang sampah pada tempatnya dan ciptakan lingkungan yang bersih',
                                              style: GoogleFonts.montserrat(
                                                  color: HexColor('#000000'),
                                                  fontWeight: FontWeight.bold,
                                                  fontSize: 18
                                              ),
                                              textAlign: TextAlign.center,
                                            ),
                                          )
                                      ),
                                      Center(
                                          child: Padding(
                                            padding: const EdgeInsets.all(10),
                                            child: Card(
                                              shape: RoundedRectangleBorder(
                                                borderRadius: BorderRadius.circular(8.0),
                                              ),
                                              color: HexColor('#90C418'),
                                              child: InkWell(
                                                borderRadius: BorderRadius.circular(8.0),
                                                splashColor: HexColor('#428DFC'),
                                                onTap: () async {
                                                  Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: NavigationView(user: user,)));
                                                },
                                                child: ListTile(
                                                  title: Text(
                                                    'Oke',
                                                    style: GoogleFonts.montserrat(
                                                        color: HexColor('#ffffff'),
                                                        fontWeight: FontWeight.bold,
                                                        fontSize: 18
                                                    ),
                                                    textAlign: TextAlign.center,
                                                  ),
                                                ),
                                              ),
                                            ),
                                          )
                                      ),
                                    ],
                                  ),
                                );
                              }
                              return konfirmasiDialog();
                            },
                            child: ListTile(
                              title: Text(
                                'Konfirmasi',
                                style: GoogleFonts.montserrat(
                                  fontSize: 26.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#ffffff'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

