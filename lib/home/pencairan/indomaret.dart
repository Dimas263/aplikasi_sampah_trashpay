import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:page_transition/page_transition.dart';
import 'package:sampah/main.dart';

class PencairanIndomaret extends StatefulWidget {

  @override
  _PencairanIndomaretState createState() => _PencairanIndomaretState();
}

class _PencairanIndomaretState extends State<PencairanIndomaret> {
  final formKey = GlobalKey<FormState>();
  final jumlah_pencairan = TextEditingController();

  User _user;
  String useruid;
  static get user => FirebaseAuth.instance.currentUser;

  @override
  void initState() {
    _user = user;
    this.useruid = _user.uid.substring(_user.uid.length - 6);

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
      body: Container(
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
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
                  margin: const EdgeInsets.only(top:25,right:15,left:15,bottom:10),
                  child: Text(
                    "Pencairan Indomaret",
                    style: GoogleFonts.montserrat(
                      fontSize: 26.0,
                      fontWeight: FontWeight.bold,
                      color: HexColor('#000000'),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                Form(
                  key: formKey,
                  child: SizedBox(
                    width: double.infinity,
                    height: MediaQuery.of(context).size.height,
                    child: SingleChildScrollView(
                      child: Container(
                        margin: const EdgeInsets.only(top:10,right:20,left:20,bottom:10),
                        child: Column(
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(top:15.0, right: 15.0, left: 25.0,bottom: 5.0),
                              child: TextFormField(
                                controller: jumlah_pencairan,
                                keyboardType: TextInputType.number,
                                decoration: new InputDecoration(
                                  hintText: "xxxxx",
                                  labelText: "Jumlah Pencairan",
                                  border: OutlineInputBorder(
                                      borderRadius: new BorderRadius.circular(5.0)),
                                ),
                                validator: (value) {
                                  if (value.isEmpty) {
                                    return 'Jumlah saldo yang ingin dicairkan tidak boleh kosong';
                                  }
                                  return null;
                                },
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top:25,left:25.0 ,right: 15.0,),
                              child: RaisedButton(
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(15.0),
                                ),
                                child: ListTile(
                                  title: Text(
                                    "Cairkan",
                                    textAlign: TextAlign.center,
                                    style: GoogleFonts.montserrat(
                                        color: HexColor('#000000'),
                                        fontWeight: FontWeight.bold,
                                        fontSize: 26
                                    ),
                                  ),
                                ),
                                color: HexColor('#428DFC'),
                                onPressed: () async {
                                  if (formKey.currentState.validate()) {
                                    Future<dynamic> indomaretDialog(){

                                      return showDialog(
                                        context: context,
                                        builder: (context) => new AlertDialog(
                                          title: Center(
                                              child: Text(
                                                'Kode Pancairan',
                                                style: GoogleFonts.montserrat(
                                                    color: HexColor('#FC4850'),
                                                    fontWeight: FontWeight.bold,
                                                    fontSize: 26
                                                ),
                                              )
                                          ),
                                          actions: [
                                            Center(
                                                child: Padding(
                                                  padding: const EdgeInsets.only(bottom: 20),
                                                  child: Text(
                                                    '$useruid'+'INDX'+jumlah_pencairan.text+'MRT',
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
                                    return indomaretDialog();
                                  }
                                },
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(bottom: 55.0,),
                            ),
                          ],
                        ),
                      ),
                    ),
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
