//import 'dart:html';
import 'dart:io';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:image_picker/image_picker.dart';
import 'package:page_transition/page_transition.dart';

import '../main.dart';

class ProdukBaru extends StatefulWidget {

  @override
  _ProdukBaruState createState() => _ProdukBaruState();
}

class _ProdukBaruState extends State<ProdukBaru> {

  // Image Picker
  List<File> _images = [];
  File _image; // Used only if you need a single picture
  bool _busy;

  Future getImageGallery() async {
    ImagePicker picker = ImagePicker();
    final pickedFile = await picker.getImage(source: ImageSource.gallery);

    setState(() {
      if (pickedFile != null) {
        //_images.add(File(pickedFile.path));
        _image = File(pickedFile.path); // Use if you only need a single picture
      } else {
        print('No image selected.');
      }
    });
  }

  Future getImageCamera() async {
    ImagePicker picker = ImagePicker();
    final pickedFile = await picker.getImage(source: ImageSource.camera);

    setState(() {
      if (pickedFile != null) {
        //_images.add(File(pickedFile.path));
        _image = File(pickedFile.path); // Use if you only need a single picture
      } else {
        print('No image selected.');
      }
    });
  }

  @override
  void initState() {
    super.initState();
    _busy = true;
  }

  @override
  Widget build(BuildContext context) {

    List<Widget> stackChildren = [];

    stackChildren.add(
        Positioned(
          // using ternary operator
          child: _image == null ?
          Container(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Image.network('https://img.icons8.com/ios-glyphs/120/000000/picture.png', width: 300,),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: <Widget>[
                    FloatingActionButton(
                      backgroundColor: HexColor('#000000'),
                      heroTag: "Scan",
                      child: Icon(Icons.camera_alt),
                      onPressed: getImageCamera,
                    ),
                    SizedBox(width: 10,),
                    FloatingActionButton(
                      backgroundColor: HexColor('#000000'),
                      heroTag: "Scan",
                      child: Icon(Icons.add_photo_alternate_rounded),
                      onPressed: getImageGallery,
                    ),
                    SizedBox(width: 10,),
                  ],
                ),
              ],
            ),
          )
              : // if not null then
          Container(
              child:Image.file(_image)
          ),
        )
    );
    /*
    if (_busy) {
      stackChildren.add(
          Center(
            child: CircularProgressIndicator(),
          )
      );
    }
    */
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        leading: Image.asset(
          'assets/images/sampah.png',height: 16,
        ),
        title: Text(
          "Produk Recycle",
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
                  margin: const EdgeInsets.only(top:35,right:15,left:15,bottom:1),
                  child: Text(
                    "Tambah Produk",
                    style: GoogleFonts.montserrat(
                      fontSize: 26.0,
                      fontWeight: FontWeight.bold,
                      color: HexColor('#000000'),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                Container(
                  margin: const EdgeInsets.only(top:10,right:15,left:15),
                  child: Padding(
                    padding: const EdgeInsets.all(5),
                    child: Card(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(9.0),
                        ),
                        color: HexColor('#ffffff'),
                        elevation: 1.0,
                        child: Padding(
                          padding: const EdgeInsets.all(15),
                          child: Stack(
                            children: stackChildren,
                          ),
                        )
                    ),
                  ),
                ),
                Container(
                  child: Padding(
                    padding: const EdgeInsets.only(top:25, right:25,left:25,),
                    child: _image == null ?
                    Container() : Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(9.0),
                      ),
                      color: Colors.blue,
                      elevation: 3.0,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(9.0),
                        splashColor: HexColor('#000000'),
                        onTap: () async {
                          Navigator.push(context, PageTransition(type: PageTransitionType.rightToLeft, duration: Duration(seconds: 1), child: InputProduk(_image)));
                        },
                        child: ListTile(
                          title: Text(
                            'Selanjutnya',
                            style: GoogleFonts.montserrat(
                              fontSize: 26.0,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
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
        ),
      ),
    );
  }
}

class InputProduk extends StatefulWidget {
  final File _image;

  InputProduk(this._image);

  @override
  _InputProdukState createState() => _InputProdukState();
}

class _InputProdukState extends State<InputProduk> {
  File _image;
  final formKey = GlobalKey<FormState>();
  final nama_produk = TextEditingController();
  final deskripsi = TextEditingController();

  User _user;
  String username;
  static get user => FirebaseAuth.instance.currentUser;

  @override
  void initState(){
    _user = user;
    this.username = _user.displayName;

    setState(() {
      this._image = widget._image;
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        leading: Image.asset(
          'assets/images/sampah.png',height: 16,
        ),
        title: Text(
          "Produk Recycle",
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
                /*
                Container(
                  margin: const EdgeInsets.only(top:25,right:15,left:15,bottom:10),
                  child: Text(
                    "Produk Recycle",
                    style: GoogleFonts.montserrat(
                      fontSize: 26.0,
                      fontWeight: FontWeight.bold,
                      color: HexColor('#000000'),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                */
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
                              child: Image.file(_image)
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top:15.0, right: 15.0, left: 25.0,bottom: 5.0),
                              child: TextFormField(
                                controller: nama_produk,
                                keyboardType: TextInputType.text,
                                decoration: new InputDecoration(
                                  hintText: "xxxxxxxxxx",
                                  labelText: "Nama Produk",
                                  border: OutlineInputBorder(
                                      borderRadius: new BorderRadius.circular(5.0)),
                                ),
                                validator: (value) {
                                  if (value.isEmpty) {
                                    return 'Nama produk tidak boleh kosong';
                                  }
                                  return null;
                                },
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top:15.0, right: 15.0, left: 25.0,bottom: 5.0),
                              child: TextFormField(
                                controller: deskripsi,
                                keyboardType: TextInputType.text,
                                maxLines: 15,
                                decoration: new InputDecoration(
                                  hintText: "xxxxxxxxx",
                                  labelText: "Deskripsi Produk",
                                  border: OutlineInputBorder(
                                      borderRadius: new BorderRadius.circular(5.0)),
                                ),
                                validator: (value) {
                                  if (value.isEmpty) {
                                    return 'Deskripsi Produk tidak boleh kosong';
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
                                    "Daftarkan",
                                    textAlign: TextAlign.center,
                                    style: GoogleFonts.montserrat(
                                        color: HexColor('#ffffff'),
                                        fontWeight: FontWeight.bold,
                                        fontSize: 26
                                    ),
                                  ),
                                ),
                                color: HexColor('#428DFC'),
                                onPressed: () async {
                                  if (formKey.currentState.validate()) {
                                    Navigator.pushReplacement(context, PageTransition(type: PageTransitionType.fade, duration: Duration(seconds: 1), child: NavigationView(user: user,)));
                                  }
                                },
                              ),
                            ),
                            Container(
                              child: Padding(
                                padding: const EdgeInsets.only(top:100, right:25,left:25,),
                              ),
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
