import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/auth/auth.dart';
import 'package:sampah/main.dart';
import 'package:sampah/profile/penghasilan.dart';
import 'package:sampah/profile/produk.dart';
import 'package:sampah/profile/sampah.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({Key key, User user})
      : _user = user,
        super(key: key);

  final User _user;

  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  User _user;
  bool _isSigningOut = false;

  Route _routeToSignInScreen() {
    return PageRouteBuilder(
      pageBuilder: (context, animation, secondaryAnimation) => LoginPage(),
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        var begin = Offset(-1.0, 0.0);
        var end = Offset.zero;
        var curve = Curves.ease;

        var tween =
        Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

        return SlideTransition(
          position: animation.drive(tween),
          child: child,
        );
      },
    );
  }

  Future<dynamic> exitDialog(){
    return showDialog(
      context: context,
      builder: (context) => new AlertDialog(
        title: ListTile(
          leading: Image.asset(
            'assets/images/sampah.png',
          ),
          title: Text(
            'Trash Pay',
            style: GoogleFonts.montserrat(
              color: HexColor('#000000'),
              fontWeight: FontWeight.bold,
              fontSize: 18
            ),
          ),
          trailing: FaIcon(
            FontAwesomeIcons.exclamationCircle,
            color: HexColor('#F39922'),
          ),
        ),
        content: Text(
          'Apakah ingin keluar dari aplikasi?',
          style: GoogleFonts.montserrat(
            color: HexColor('#000000'),
            fontWeight: FontWeight.bold,
            fontSize: 14
          ),
          textAlign: TextAlign.center,
        ),
        actions: [
          TextButton(
            child: Text(
              'Ya',
              style: GoogleFonts.montserrat(
                color: HexColor('#90C418'),
                fontWeight: FontWeight.bold,
              ),
            ),
            onPressed: () async {
              setState(() {
                _isSigningOut = true;
              });
              await Authentication.signOut(context: context);
              setState(() {
                _isSigningOut = false;
              });
              Navigator.of(context)
                  .pushReplacement(_routeToSignInScreen());
            },
          ),
          TextButton(
            child: Text(
              'Tidak',
              style: GoogleFonts.montserrat(
                color: HexColor('#FC4850'),
                fontWeight: FontWeight.bold,
              ),
            ),
            onPressed: () {
              Navigator.of(context).pop(false);
            },
          ),
        ],
      ),
    );
  }

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
        margin: const EdgeInsets.only(top:35,right:35,left:35,bottom:35),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              child: ListTile(
                leading: ClipOval(
                  child: Material(
                    color: Colors.grey,
                    child: Image.network(
                      _user.photoURL,
                      fit: BoxFit.fitHeight,
                    ),
                  ),
                ),
                title: Text(
                  _user.displayName,
                  style: GoogleFonts.montserrat(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#000000'),
                  ),
                ),
                subtitle: Text(
                  _user.email,
                  style: GoogleFonts.montserrat(
                    fontSize: 14.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#b4b4b4'),
                  ),
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:25,right:35,left:35,bottom:10),
              child: ListTile(
                title: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(9.0),
                  ),
                  color: HexColor('#428DFC'),
                  elevation: 1.0,
                  child: InkWell(
                    onTap: () async {
                      Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: Penghasilanku()));
                    },
                    child: Padding(
                      padding: const EdgeInsets.all(15),
                      child: Text(
                        "Penghasilanku",
                        style: GoogleFonts.montserrat(
                          fontSize: 16.0,
                          fontWeight: FontWeight.bold,
                          color: HexColor('#000000'),
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:10,right:35,left:35,bottom:10),
              child: ListTile(
                title: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(9.0),
                  ),
                  color: HexColor('#428DFC'),
                  elevation: 1.0,
                  child: InkWell(
                    onTap: () async {
                      Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: Sampahku()));
                    },
                    child: Padding(
                      padding: const EdgeInsets.all(15),
                      child: Text(
                        "Sampahku",
                        style: GoogleFonts.montserrat(
                          fontSize: 16.0,
                          fontWeight: FontWeight.bold,
                          color: HexColor('#000000'),
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:10,right:35,left:35,bottom:15),
              child: ListTile(
                title: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(9.0),
                  ),
                  color: HexColor('#428DFC'),
                  elevation: 1.0,
                  child: InkWell(
                    onTap: () async {
                      Navigator.push(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: Produkku()));
                    },
                    child: Padding(
                      padding: const EdgeInsets.all(15),
                      child: Text(
                        "Produkku",
                        style: GoogleFonts.montserrat(
                          fontSize: 16.0,
                          fontWeight: FontWeight.bold,
                          color: HexColor('#000000'),
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:10,right:35,left:35,bottom:15),
              child: ListTile(
                title: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(9.0),
                  ),
                  color: HexColor('#000000'),
                  elevation: 1.0,
                  child: InkWell(
                    onTap: () => exitDialog(),
                    child: Padding(
                      padding: const EdgeInsets.all(15),
                      child: Text(
                        "Keluar",
                        style: GoogleFonts.montserrat(
                          fontSize: 16.0,
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
    );
  }
}
