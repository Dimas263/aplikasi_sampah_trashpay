import 'dart:async';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:pin_code_fields/pin_code_fields.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../main.dart';

const _url_dana = "https://link.dana.id/lBx7Kcflieb";
void _launchURL_dana() async =>
    await canLaunch(_url_dana) ? await launch(_url_dana) : throw 'Could not launch $_url_dana';

class PinCodeVerificationScreen extends StatefulWidget {
  final String phoneNumber;
  final String jumlahPencairan;

  PinCodeVerificationScreen(this.phoneNumber, this.jumlahPencairan);

  @override
  _PinCodeVerificationScreenState createState() =>
      _PinCodeVerificationScreenState();
}

class _PinCodeVerificationScreenState extends State<PinCodeVerificationScreen> {
  var onTapRecognizer;

  TextEditingController textEditingController = TextEditingController();
  // ..text = "123456";

  StreamController<ErrorAnimationType> errorController;

  bool hasError = false;
  String currentText = "";
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();
  final formKey = GlobalKey<FormState>();

  static get user => FirebaseAuth.instance.currentUser;

  @override
  void initState() {
    onTapRecognizer = TapGestureRecognizer()
      ..onTap = _launchURL_dana;
      /*
      ..onTap = () {
        //Navigator.pop(context);
      };
      */
    errorController = StreamController<ErrorAnimationType>();
    super.initState();
  }

  @override
  void dispose() {
    errorController.close();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue.shade50,
      key: scaffoldKey,
      body: GestureDetector(
        onTap: () {},
        child: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: ListView(
            children: <Widget>[
              SizedBox(height: 55),
              Padding(
                padding: const EdgeInsets.only(top: 35.0, bottom: 5),
                child: Text(
                  'Dana Verification',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 22),
                  textAlign: TextAlign.center,
                ),
              ),
              Padding(
                padding:
                const EdgeInsets.symmetric(horizontal: 30.0, vertical: 8),
                child: RichText(
                  text: TextSpan(
                      text: "Masukan Pin Dana dari ",
                      children: [
                        TextSpan(
                            text: widget.phoneNumber,
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.bold,
                                fontSize: 15)),
                      ],
                      style: TextStyle(color: Colors.black54, fontSize: 15)),
                  textAlign: TextAlign.center,
                ),
              ),
              SizedBox(
                height: 35,
              ),
              Form(
                key: formKey,
                child: Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 8.0, horizontal: 30),
                    child: PinCodeTextField(
                      appContext: context,
                      pastedTextStyle: TextStyle(
                        color: Colors.blue.shade600,
                        fontWeight: FontWeight.bold,
                      ),
                      length: 6,
                      obscureText: true,
                      obscuringCharacter: '*',
                      animationType: AnimationType.fade,
                      validator: (v) {
                        if (v.length < 3) {
                          return "*Masukan Pin dengan benar";
                        } else {
                          return null;
                        }
                      },
                      pinTheme: PinTheme(
                        shape: PinCodeFieldShape.box,
                        borderRadius: BorderRadius.circular(5),
                        activeColor: Colors.blue,
                        fieldHeight: 60,
                        fieldWidth: 50,
                        activeFillColor:
                        hasError ? Colors.orange : Colors.white,
                      ),
                      cursorColor: Colors.black,
                      animationDuration: Duration(milliseconds: 300),
                      textStyle: TextStyle(fontSize: 20, height: 1.6),
                      backgroundColor: Colors.blue.shade50,
                      enableActiveFill: true,
                      errorAnimationController: errorController,
                      controller: textEditingController,
                      keyboardType: TextInputType.number,
                      boxShadows: [
                        BoxShadow(
                          offset: Offset(0, 1),
                          color: Colors.black12,
                          blurRadius: 10,
                        )
                      ],
                      onCompleted: (v) {
                        print("Completed");
                      },
                      // onTap: () {
                      //   print("Pressed");
                      // },
                      onChanged: (value) {
                        print(value);
                        setState(() {
                          currentText = value;
                        });
                      },
                      beforeTextPaste: (text) {
                        print("Allowing to paste $text");
                        //if you return true then it will show the paste confirmation dialog. Otherwise if false, then nothing will happen.
                        //but you can show anything you want here, like your pop up saying wrong paste format or etc
                        return true;
                      },
                    )),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 30.0),
                child: Text(
                  hasError ? "*Pin yang anda masukan salah" : "",
                  style: TextStyle(
                      color: Colors.red,
                      fontSize: 12,
                      fontWeight: FontWeight.w400),
                ),
              ),
              SizedBox(
                height: 20,
              ),
              RichText(
                textAlign: TextAlign.center,
                text: TextSpan(
                    text: "Apakah anda lupa Pin? ",
                    style: TextStyle(color: Colors.black54, fontSize: 15),
                    children: [
                      TextSpan(
                          text: " DANA",
                          recognizer: onTapRecognizer,
                          style: TextStyle(
                              color: Colors.blue,
                              fontWeight: FontWeight.bold,
                              fontSize: 16))
                    ]),
              ),
              SizedBox(
                height: 14,
              ),
              Container(
                margin:
                const EdgeInsets.symmetric(vertical: 16.0, horizontal: 30),
                child: ButtonTheme(
                  buttonColor: Colors.blue,
                  height: 50,
                  child: FlatButton(
                    onPressed: () {
                      formKey.currentState.validate();
                      // conditions for validating
                      if (currentText.length != 6 || currentText != "123456") {
                        errorController.add(ErrorAnimationType
                            .shake); // Triggering error shake animation
                        setState(() {
                          hasError = true;
                        });
                      } else {
                        setState(() {
                          hasError = false;
                          /*
                          scaffoldKey.currentState.showSnackBar(SnackBar(
                            content: Text("Aye!!"),
                            duration: Duration(seconds: 2),
                          ));
                          */
                          Future<dynamic> danaDialog(){

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
                                          'Selamat, pencairan saldo Rp.'+widget.jumlahPencairan+' Ke Dana Berhasil',
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
                                                'Selesai',
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
                          return danaDialog();
                        });
                      }
                    },
                    child: Center(
                        child: Text(
                          "VERIFY".toUpperCase(),
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold),
                        )),
                  ),
                ),
                decoration: BoxDecoration(
                    color: Colors.blue.shade300,
                    borderRadius: BorderRadius.circular(5),
                    boxShadow: [
                      BoxShadow(
                          color: Colors.blue.shade200,
                          offset: Offset(1, -2),
                          blurRadius: 5),
                      BoxShadow(
                          color: Colors.blue.shade200,
                          offset: Offset(-1, 2),
                          blurRadius: 5)
                    ]),
              ),
              SizedBox(
                height: 16,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  FlatButton(
                    child: Text("Clear"),
                    onPressed: () {
                      textEditingController.clear();
                    },
                  ),
                  /*
                  FlatButton(
                    child: Text("Set Text"),
                    onPressed: () {
                      textEditingController.text = "123456";
                    },
                  ),
                  */
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}