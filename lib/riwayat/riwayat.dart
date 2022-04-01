import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';

class RiwayatPage extends StatefulWidget {
  const RiwayatPage({Key key, User user})
      : _user = user,
        super(key: key);

  final User _user;

  @override
  _RiwayatPageState createState() => _RiwayatPageState();
}

class _RiwayatPageState extends State<RiwayatPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: HexColor('#ffffff'),
      body: Container(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Container(
                margin: const EdgeInsets.only(top:5,right:35,left:35,bottom:5),
              ),
              Container(
                margin: const EdgeInsets.only(top:5,right:35,left:35,bottom:10),
                child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  color: HexColor('#E8E8E8'),
                  elevation: 0,
                  child: Padding(
                    padding: const EdgeInsets.all(25),
                    child: Column(
                      children: [
                        Text(
                          'Riwayat Sampah',
                          style: GoogleFonts.montserrat(
                            fontSize: 18.0,
                            fontWeight: FontWeight.bold,
                            color: HexColor('#428DFC'),
                          ),
                          textAlign: TextAlign.center,
                        ),
                        Padding(padding: const EdgeInsets.all(10)),
                        Card(
                          margin: const EdgeInsets.only(top: 5, right:15,left:15, bottom: 5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          color: HexColor('#ffffff'),
                          elevation: 1,
                          child: InkWell(
                            onTap: () {
                              showDialog(
                                  context: context,
                                  builder: (context) {
                                    return AlertDialog(
                                      actions: [
                                        ListTile(
                                          title: Text(
                                            'Sampah Anda',
                                            style: GoogleFonts.montserrat(
                                              fontSize: 18.0,
                                              fontWeight: FontWeight.bold,
                                              color: HexColor('#000000'),
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Padding(padding: const EdgeInsets.all(10)),
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
                                                '1 Desember 2021',
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
                                            'Jumlah Sampah',
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
                                                '5',
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
                                            'Jenis Sampah',
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
                                                'Organik',
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
                                            'Lokasi',
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
                                                'Sudirman',
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
                                            'Saldo Masuk',
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
                                                'Rp. 1000',
                                                style: GoogleFonts.montserrat(
                                                  fontSize: 12.0,
                                                  fontWeight: FontWeight.bold,
                                                  color: HexColor('#90C418'),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    );
                                  }
                              );
                            },
                            child: ListTile(
                              subtitle: Text(
                                '1 Desember 2021',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#428DFC'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                              title: Text(
                                'Sampah Organik',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#000000'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ),
                        Card(
                          margin: const EdgeInsets.only(top: 5, right:15,left:15, bottom: 5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          color: HexColor('#ffffff'),
                          elevation: 1,
                          child: InkWell(
                            onTap: () {
                              showDialog(
                                  context: context,
                                  builder: (context) {
                                    return AlertDialog(
                                      actions: [
                                        ListTile(
                                          title: Text(
                                            'Sampah Anda',
                                            style: GoogleFonts.montserrat(
                                              fontSize: 18.0,
                                              fontWeight: FontWeight.bold,
                                              color: HexColor('#000000'),
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Padding(padding: const EdgeInsets.all(10)),
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
                                                '5 Desember 2021',
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
                                            'Jumlah Sampah',
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
                                                '5',
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
                                            'Jenis Sampah',
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
                                                'Nonorganik',
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
                                            'Lokasi',
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
                                                'Sudirman',
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
                                            'Saldo Masuk',
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
                                                'Rp. 1000',
                                                style: GoogleFonts.montserrat(
                                                  fontSize: 12.0,
                                                  fontWeight: FontWeight.bold,
                                                  color: HexColor('#90C418'),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    );
                                  }
                              );
                            },
                            child: ListTile(
                              subtitle: Text(
                                '5 Desember 2021',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#428DFC'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                              title: Text(
                                'Sampah Nonorganik',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#000000'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ),
                        Card(
                          margin: const EdgeInsets.only(top: 5, right:15,left:15, bottom: 5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          color: HexColor('#ffffff'),
                          elevation: 1,
                          child: InkWell(
                            onTap: () {
                              showDialog(
                                  context: context,
                                  builder: (context) {
                                    return AlertDialog(
                                      actions: [
                                        ListTile(
                                          title: Text(
                                            'Sampah Anda',
                                            style: GoogleFonts.montserrat(
                                              fontSize: 18.0,
                                              fontWeight: FontWeight.bold,
                                              color: HexColor('#000000'),
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Padding(padding: const EdgeInsets.all(10)),
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
                                                '8 Desember 2021',
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
                                            'Jumlah Sampah',
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
                                                '5',
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
                                            'Jenis Sampah',
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
                                                'Organik',
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
                                            'Lokasi',
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
                                                'Sudirman',
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
                                            'Saldo Masuk',
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
                                                'Rp. 1000',
                                                style: GoogleFonts.montserrat(
                                                  fontSize: 12.0,
                                                  fontWeight: FontWeight.bold,
                                                  color: HexColor('#90C418'),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    );
                                  }
                              );
                            },
                            child: ListTile(
                              subtitle: Text(
                                '8 Desember 2021',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#428DFC'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                              title: Text(
                                'Sampah Organik',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#000000'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ),
                        Card(
                          margin: const EdgeInsets.only(top: 5, right:15,left:15, bottom: 5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          color: HexColor('#ffffff'),
                          elevation: 1,
                          child: InkWell(
                            onTap: () {
                              showDialog(
                                  context: context,
                                  builder: (context) {
                                    return AlertDialog(
                                      actions: [
                                        ListTile(
                                          title: Text(
                                            'Sampah Anda',
                                            style: GoogleFonts.montserrat(
                                              fontSize: 18.0,
                                              fontWeight: FontWeight.bold,
                                              color: HexColor('#000000'),
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Padding(padding: const EdgeInsets.all(10)),
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
                                                '12 Desember 2021',
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
                                            'Jumlah Sampah',
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
                                                '5',
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
                                            'Jenis Sampah',
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
                                                'Organik',
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
                                            'Lokasi',
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
                                                'Sudirman',
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
                                            'Saldo Masuk',
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
                                                'Rp. 1000',
                                                style: GoogleFonts.montserrat(
                                                  fontSize: 12.0,
                                                  fontWeight: FontWeight.bold,
                                                  color: HexColor('#90C418'),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    );
                                  }
                              );
                            },
                            child: ListTile(
                              subtitle: Text(
                                '12 Desember 2021',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#428DFC'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                              title: Text(
                                'Sampah Organik',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#000000'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ),
                        Card(
                          margin: const EdgeInsets.only(top: 5, right:15,left:15, bottom: 5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          color: HexColor('#ffffff'),
                          elevation: 1,
                          child: InkWell(
                            onTap: () {
                              showDialog(
                                  context: context,
                                  builder: (context) {
                                    return AlertDialog(
                                      actions: [
                                        ListTile(
                                          title: Text(
                                            'Sampah Anda',
                                            style: GoogleFonts.montserrat(
                                              fontSize: 18.0,
                                              fontWeight: FontWeight.bold,
                                              color: HexColor('#000000'),
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Padding(padding: const EdgeInsets.all(10)),
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
                                                '18 Desember 2021',
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
                                            'Jumlah Sampah',
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
                                                '5',
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
                                            'Jenis Sampah',
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
                                                'Nonorganik',
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
                                            'Lokasi',
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
                                                'Sudirman',
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
                                            'Saldo Masuk',
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
                                                'Rp. 1000',
                                                style: GoogleFonts.montserrat(
                                                  fontSize: 12.0,
                                                  fontWeight: FontWeight.bold,
                                                  color: HexColor('#90C418'),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    );
                                  }
                              );
                            },
                            child: ListTile(
                              subtitle: Text(
                                '18 Desember 2021',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#428DFC'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                              title: Text(
                                'Sampah Nonorganik',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#000000'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ),
                        Card(
                          margin: const EdgeInsets.only(top: 5, right:15,left:15, bottom: 5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          color: HexColor('#ffffff'),
                          elevation: 1,
                          child: InkWell(
                            onTap: () {
                              showDialog(
                                  context: context,
                                  builder: (context) {
                                    return AlertDialog(
                                      actions: [
                                        ListTile(
                                          title: Text(
                                            'Sampah Anda',
                                            style: GoogleFonts.montserrat(
                                              fontSize: 18.0,
                                              fontWeight: FontWeight.bold,
                                              color: HexColor('#000000'),
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Padding(padding: const EdgeInsets.all(10)),
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
                                                '20 Desember 2021',
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
                                            'Jumlah Sampah',
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
                                                '5',
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
                                            'Jenis Sampah',
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
                                                'Nonorganik',
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
                                            'Lokasi',
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
                                                'Sudirman',
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
                                            'Saldo Masuk',
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
                                                'Rp. 1000',
                                                style: GoogleFonts.montserrat(
                                                  fontSize: 12.0,
                                                  fontWeight: FontWeight.bold,
                                                  color: HexColor('#90C418'),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    );
                                  }
                              );
                            },
                            child: ListTile(
                              subtitle: Text(
                                '20 Desember 2021',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#428DFC'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                              title: Text(
                                'Sampah Nonrganik',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#000000'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          ),
                        ),
                        Card(
                          margin: const EdgeInsets.only(top: 5, right:15,left:15, bottom: 5),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          color: HexColor('#ffffff'),
                          elevation: 1,
                          child: InkWell(
                            onTap: () {
                              showDialog(
                                  context: context,
                                  builder: (context) {
                                    return AlertDialog(
                                      actions: [
                                        ListTile(
                                          title: Text(
                                            'Sampah Anda',
                                            style: GoogleFonts.montserrat(
                                              fontSize: 18.0,
                                              fontWeight: FontWeight.bold,
                                              color: HexColor('#000000'),
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                        Padding(padding: const EdgeInsets.all(10)),
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
                                                '26 Desember 2021',
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
                                            'Jumlah Sampah',
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
                                                '5',
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
                                            'Jenis Sampah',
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
                                                'Organik',
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
                                            'Lokasi',
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
                                                'Sudirman',
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
                                            'Saldo Masuk',
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
                                                'Rp. 1000',
                                                style: GoogleFonts.montserrat(
                                                  fontSize: 12.0,
                                                  fontWeight: FontWeight.bold,
                                                  color: HexColor('#90C418'),
                                                ),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ],
                                    );
                                  }
                              );
                            },
                            child: ListTile(
                              subtitle: Text(
                                '26 Desember 2021',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#428DFC'),
                                ),
                                textAlign: TextAlign.center,
                              ),
                              title: Text(
                                'Sampah Organik',
                                style: GoogleFonts.montserrat(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.bold,
                                  color: HexColor('#000000'),
                                ),
                                textAlign: TextAlign.center,
                              ),
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
      ),
    );
  }
}
