import 'dart:async';

import 'package:ff_navigation_bar/ff_navigation_bar.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/auth/auth.dart';
import 'package:sampah/home/home.dart';
import 'package:sampah/profile/profile.dart';
import 'package:sampah/riwayat/riwayat.dart';


void main() async{
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(SplashscreenPage());
}

class SplashscreenPage extends StatefulWidget {

  @override
  _SplashscreenPageState createState() => _SplashscreenPageState();
}

class _SplashscreenPageState extends State<SplashscreenPage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Splashscreen()
    );
  }
}

class Splashscreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SplashState();
  }
}
class SplashState extends State<Splashscreen> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    startTime();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: initScreen(context),
    );
  }

  startTime() async {
    var duration = new Duration(seconds: 10);
    return new Timer(duration, route);
  }
  route() {
    Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.rightToLeft, duration: Duration(seconds: 2), child: LoginPage()));
  }

  initScreen(BuildContext context) {
    return Scaffold(
      backgroundColor: HexColor('#ffffff'),
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                child: Image.asset(
                  'assets/images/sampah.png',
                  height: 250,
                ),
              ),
              Padding(padding: EdgeInsets.only(top: 20.0)),
              Text(
                "Trash Pay",
                style: GoogleFonts.montserrat(
                  fontSize: 36.0,
                  fontWeight: FontWeight.bold,
                  color: HexColor('#2B2B2B'),
                ),
              ),
              Padding(padding: EdgeInsets.only(top: 20.0)),
              CircularProgressIndicator(
                backgroundColor: Colors.white,
                strokeWidth: 2,
              ),
              SizedBox(height: 100),
              Text(
                "Develop by",
                style: GoogleFonts.montserrat(
                  fontSize: 18.0,
                  fontWeight: FontWeight.bold,
                  color: HexColor('#2B2B2B'),
                ),
              ),
              SizedBox(height: 5),
              Text(
                "Dimas263",
                style: GoogleFonts.montserrat(
                  fontSize: 14.0,
                  fontWeight: FontWeight.bold,
                  color: HexColor('#2B2B2B'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class LoginPage extends StatefulWidget {

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.only(
              left: 16.0,
              right: 16.0,
              bottom: 20.0,
            ),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                Row(),
                Expanded(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        child: Image.asset(
                          'assets/images/sampah.png',
                          height: 250,
                        ),
                      ),
                      SizedBox(height: 20),
                      Flexible(
                          flex: 1,
                          child: Text(
                            "Trash Pay",
                            style: GoogleFonts.montserrat(
                              fontSize: 36.0,
                              fontWeight: FontWeight.bold,
                              color: HexColor('#2B2B2B'),
                            ),
                          ),
                      ),
                      SizedBox(height: 100),
                      Flexible(
                        flex: 1,
                        child: Text(
                          "Masuk",
                          style: GoogleFonts.montserrat(
                            fontSize: 24.0,
                            fontWeight: FontWeight.bold,
                            color: HexColor('#428DFC'),
                          ),
                        ),
                      ),
                      SizedBox(height: 25),
                      Flexible(
                        flex: 1,
                        child: FutureBuilder(
                          future: Authentication.initializeFirebase(context: context),
                          builder: (context, snapshot) {
                            if (snapshot.hasError) {
                              return Text('Error initializing Firebase');
                            } else if (snapshot.connectionState == ConnectionState.done) {
                              return GoogleSignInButton();
                            }
                            return CircularProgressIndicator(
                              valueColor: AlwaysStoppedAnimation<Color>(
                                Colors.red,
                              ),
                            );
                          },
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

class GoogleSignInButton extends StatefulWidget {
  @override
  _GoogleSignInButtonState createState() => _GoogleSignInButtonState();
}

class _GoogleSignInButtonState extends State<GoogleSignInButton> {
  bool _isSigningIn = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: _isSigningIn
          ? CircularProgressIndicator(
        valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
      )
          : OutlinedButton(
        style: ButtonStyle(
          backgroundColor: MaterialStateProperty.all(Colors.white),
          shape: MaterialStateProperty.all(
            RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(40),
            ),
          ),
        ),
        onPressed: () async {
          setState(() {
            _isSigningIn = true;
          });

          // TODO: Add a method call to the Google Sign-In authentication
          User user =
          await Authentication.signInWithGoogle(context: context);

          setState(() {
            _isSigningIn = false;
          });

          if (user != null) {
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(
                builder: (context) => NavigationView(
                  user: user,
                ),
              ),
            );
          }
        },
        child: Padding(
          padding: const EdgeInsets.all(10),
          child: Image.asset(
            'assets/images/google.png', height: 60,
          ),
        ),
      ),
    );
  }
}


class NavigationView extends StatefulWidget {
  const NavigationView({Key key, User user})
      : _user = user,
        super(key: key);

  final User _user;

  @override
  _NavigationViewState createState() => _NavigationViewState();
}

class _NavigationViewState extends State<NavigationView> {
  int selectedIndex = 0;
  final pageOption = [
    HomePage(user: user,),
    RiwayatPage(user: user,),
    ProfilePage(user: user,),
  ];

  static get user => FirebaseAuth.instance.currentUser;

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
          "Trash Pay",
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
      body: pageOption[selectedIndex],
      bottomNavigationBar: FFNavigationBar(
        theme: FFNavigationBarTheme(
          barHeight: 75.0,
          itemWidth: 60.0,
          unselectedItemTextStyle: GoogleFonts.montserrat(fontWeight: FontWeight.bold,),
          barBackgroundColor: HexColor('#428DFC'),
          unselectedItemLabelColor: HexColor('#000000'),
          unselectedItemIconColor: HexColor('#000000'),
          selectedItemBorderColor: HexColor('#000000'),
          selectedItemBackgroundColor: HexColor('#000000'),
          selectedItemIconColor: HexColor('#ffffff'),
          selectedItemLabelColor: HexColor('#000000'),
          showSelectedItemShadow: false,
        ),
        selectedIndex: selectedIndex,
        onSelectTab: (index) {
          setState(() {
            selectedIndex = index;
          });
        },
        items: [
          FFNavigationBarItem(
            iconData: CupertinoIcons.home,
            label: 'Home',
          ),
          FFNavigationBarItem(
            iconData: CupertinoIcons.hourglass,
            label: 'Riwayat',
          ),
          FFNavigationBarItem(
            iconData: CupertinoIcons.person,
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}



