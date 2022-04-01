import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/home/pencairan/dana.dart';
import 'package:sampah/home/pencairan/indomaret.dart';

class JenisPencairan extends StatefulWidget {
  const JenisPencairan({Key key, User user})
      : _user = user,
        super(key: key);

  final User _user;

  @override
  _JenisPencairanState createState() => _JenisPencairanState();
}

class _JenisPencairanState extends State<JenisPencairan> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                margin: const EdgeInsets.only(top:10,right:15,left:15,bottom:15),
                child: Text(
                  "Pencairan",
                  style: GoogleFonts.montserrat(
                    fontSize: 36.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#000000'),
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
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
                        elevation: 3.0,
                        child: InkWell(
                          borderRadius: BorderRadius.circular(9.0),
                          splashColor: HexColor('#428DFC'),
                          onTap: () {
                            Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: PencairanDana()));
                          },
                          child: Padding(
                            padding: const EdgeInsets.all(15),
                            child: Image.network('https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/200px-Logo_dana_blue.svg.png',width: 200,),
                          ),
                        ),
                      ),
                    ),
                    Container(
                      margin: const EdgeInsets.only(top:5,right:15,left:15,bottom:5),
                    ),
                    Container(
                      child: Card(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(9.0),
                        ),
                        color: HexColor('#FFFFFF'),
                        elevation: 3.0,
                        child: InkWell(
                          borderRadius: BorderRadius.circular(9.0),
                          splashColor: HexColor('#428DFC'),
                          onTap: () {
                            Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: PencairanIndomaret()));
                          },
                          child: Padding(
                            padding: const EdgeInsets.all(15),
                            child: Image.network('https://upload.wikimedia.org/wikipedia/en/3/3e/Logo_Indomaret_small.png',width: 200,),
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
