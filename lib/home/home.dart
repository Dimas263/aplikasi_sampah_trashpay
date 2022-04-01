import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/home/pasar/produk.dart';
import 'package:sampah/home/pencairan/jenis.dart';
import 'package:sampah/home/sampah/jenis.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key key, User user})
      : _user = user,
        super(key: key);

  final User _user;
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  User _user;

  static get user => FirebaseAuth.instance.currentUser;

  @override
  void initState() {
    _user = widget._user;

    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: HexColor('#ffffff'),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Container(
              margin: const EdgeInsets.only(top:50,right:35,left:35,bottom:15),
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
                color: HexColor('#428DFC'),
                elevation: 1.0,
                child: Padding(
                  padding: const EdgeInsets.all(15),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ListTile(
                        title: Text(
                          "Saldo",
                          style: GoogleFonts.montserrat(
                            fontSize: 14.0,
                            fontWeight: FontWeight.bold,
                            color: HexColor('#000000'),
                          ),
                        ),
                      ),
                      ListTile(
                        leading: Image.network('https://img.icons8.com/ios/50/000000/wallet--v1.png'),
                        title: Text(
                          "Rp. 10000",
                          style: GoogleFonts.montserrat(
                            fontSize: 30.0,
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
              margin: const EdgeInsets.only(top:10,right:35,left:35,bottom:15),
              child: Text(
                "Menu",
                style: GoogleFonts.montserrat(
                  fontSize: 18.0,
                  fontWeight: FontWeight.bold,
                  color: HexColor('#000000'),
                ),
                textAlign: TextAlign.center,
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:10,right:35,left:35,bottom:15),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Column(
                    children: [
                      Container(
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          color: HexColor('#F39922'),
                          elevation: 1.0,
                          child: InkWell(
                            borderRadius: BorderRadius.circular(9.0),
                            splashColor: HexColor('#428DFC'),
                            onTap: () {
                              Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: JenisSampah(user: user,)));
                            },
                            child: Padding(
                              padding: const EdgeInsets.all(15),
                              child: Image.network('https://img.icons8.com/ios/50/000000/litter-disposal.png'),
                            ),
                          ),
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(top: 5,),
                        child: Column(
                          children: [
                            Text(
                              'Sampah',
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
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          color: HexColor('#90C418'),
                          elevation: 1.0,
                          child: InkWell(
                            borderRadius: BorderRadius.circular(9.0),
                            splashColor: HexColor('#428DFC'),
                            onTap: () {
                              Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: JenisPencairan(user: user,)));
                            },
                            child: Padding(
                              padding: const EdgeInsets.all(15),
                              child: Image.network('https://img.icons8.com/pastel-glyph/50/000000/money--v1.png'),
                            ),
                          ),
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(top: 5,),
                        child: Column(
                          children: [
                            Text(
                              'Pencairan',
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
                        child: Card(
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(9.0),
                          ),
                          color: HexColor('#FC4850'),
                          elevation: 1.0,
                          child: InkWell(
                            borderRadius: BorderRadius.circular(9.0),
                            splashColor: HexColor('#428DFC'),
                            onTap: () {
                              Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: ProdukRecycle(user: user,)));
                            },
                            child: Padding(
                              padding: const EdgeInsets.all(15),
                              child: Image.network('https://img.icons8.com/ios/50/000000/shopping-bag--v1.png'),
                            ),
                          ),
                        ),
                      ),
                      Container(
                        margin: const EdgeInsets.only(top: 5,),
                        child: Column(
                          children: [
                            Text(
                              'Pasar',
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
    );
  }
}
