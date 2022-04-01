import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/home/pasar/produk.dart';
import 'package:sampah/home/pencairan/jenis.dart';
import 'package:sampah/home/sampah/jenis.dart';

class Penghasilanku extends StatefulWidget {

  @override
  _PenghasilankuState createState() => _PenghasilankuState();
}

class _PenghasilankuState extends State<Penghasilanku> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: HexColor('#ffffff'),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              margin: const EdgeInsets.only(top:50,right:15,left:15,bottom:10),
              child: Text(
                "Penghasilanku",
                style: GoogleFonts.montserrat(
                  fontSize: 36.0,
                  fontWeight: FontWeight.bold,
                  color: HexColor('#000000'),
                ),
                textAlign: TextAlign.center,
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:15,right:35,left:35),
              child: ListTile(
                leading: Text(
                  "Sisa Saldo :",
                  style: GoogleFonts.montserrat(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#000000'),
                  ),
                  textAlign: TextAlign.center,
                ),
                trailing: Text(
                  "Rp. 10000,00",
                  style: GoogleFonts.montserrat(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#428DFC'),
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:5,right:35,left:35,bottom:5),
              child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  color: HexColor('#90C418'),
                  elevation: 1.0,
                  child: Padding(
                    padding: const EdgeInsets.all(15),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        ListTile(
                          title: Text(
                            "Saldo Masuk",
                            style: GoogleFonts.montserrat(
                              fontSize: 14.0,
                              fontWeight: FontWeight.bold,
                              color: HexColor('#000000'),
                            ),
                          ),
                        ),
                        ListTile(
                          leading: FaIcon(FontAwesomeIcons.arrowUp),
                          title: Text(
                            "Rp. 100000",
                            style: GoogleFonts.montserrat(
                              fontSize: 26.0,
                              fontWeight: FontWeight.bold,
                              color: HexColor('#000000'),
                            ),
                          ),
                        ),
                      ],
                    ),
                  )
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:5,right:35,left:35,bottom:15),
              child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  color: HexColor('#FC4850'),
                  elevation: 1.0,
                  child: Padding(
                    padding: const EdgeInsets.all(15),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        ListTile(
                          title: Text(
                            "Saldo Keluar",
                            style: GoogleFonts.montserrat(
                              fontSize: 14.0,
                              fontWeight: FontWeight.bold,
                              color: HexColor('#000000'),
                            ),
                          ),
                        ),
                        ListTile(
                          leading: FaIcon(FontAwesomeIcons.arrowDown),
                          title: Text(
                            "Rp. 90000",
                            style: GoogleFonts.montserrat(
                              fontSize: 26.0,
                              fontWeight: FontWeight.bold,
                              color: HexColor('#000000'),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
