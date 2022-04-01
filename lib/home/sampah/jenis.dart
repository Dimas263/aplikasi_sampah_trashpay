
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/home/sampah/nonorganik.dart';
import 'package:sampah/home/sampah/organik.dart';


class JenisSampah extends StatefulWidget {
  const JenisSampah({Key key, User user})
      : _user = user,
        super(key: key);

  final User _user;
  @override
  _JenisSampahState createState() => _JenisSampahState();
}

class _JenisSampahState extends State<JenisSampah> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                margin: const EdgeInsets.only(top:10,right:15,left:15,bottom:10),
                child: Text(
                  "Jenis Sampah",
                  style: GoogleFonts.montserrat(
                    fontSize: 26.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#000000'),
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top:10,right:15,left:15,bottom:10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Column(
                      children: [
                        Container(
                          child: Padding(
                            padding: const EdgeInsets.all(10),
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(9.0),
                              ),
                              color: HexColor('#00AEE0'),
                              elevation: 1.0,
                              child: InkWell(
                                borderRadius: BorderRadius.circular(9.0),
                                splashColor: HexColor('#000000'),
                                onTap: () async{
                                  Navigator.push(context, PageTransition(type: PageTransitionType.rightToLeft, duration: Duration(seconds: 1), child: OrganikPage()));
                                },
                                child: Image.network('https://lun-eu.icons8.com/a/BPIDU8YV90e3zdQJbg7r2Q/OR2VCH2MBEqxAoQWgtespA/Group.png',),
                              ),
                            ),
                          ),
                        ),
                        Container(
                          margin: const EdgeInsets.only(top: 5,),
                          child: Column(
                            children: [
                              Text(
                                'Organik',
                                style: GoogleFonts.montserrat(
                                    color: HexColor('#000000'),
                                    fontWeight: FontWeight.bold,
                                    fontSize: 18
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    Column(
                      children: [
                        Container(
                          child: Padding(
                            padding: const EdgeInsets.all(10),
                            child: Card(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(9.0),
                              ),
                              color: HexColor('#F04E23'),
                              elevation: 1.0,
                              child: InkWell(
                                borderRadius: BorderRadius.circular(9.0),
                                splashColor: HexColor('#000000'),
                                onTap: () {
                                  Navigator.push(context, PageTransition(type: PageTransitionType.rightToLeft, duration: Duration(seconds: 1), child: NonorganikPage()));
                                },
                                child: Image.network('https://lun-eu.icons8.com/a/BPIDU8YV90e3zdQJbg7r2Q/OR2VCH2MBEqxAoQWgtespA/Group.png'),
                              ),
                            ),
                          ),
                        ),
                        Container(
                          margin: const EdgeInsets.only(top: 5,),
                          child: Column(
                            children: [
                              Text(
                                'Non Organik',
                                style: GoogleFonts.montserrat(
                                    color: HexColor('#000000'),
                                    fontWeight: FontWeight.bold,
                                    fontSize: 18
                                ),
                                textAlign: TextAlign.center,
                              ),
                            ],
                          ),
                        ),
                      ],
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
