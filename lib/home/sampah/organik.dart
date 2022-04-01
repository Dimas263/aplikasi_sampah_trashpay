import 'dart:io';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:sampah/home/sampah/konfirmasi.dart';
import 'package:tflite/tflite.dart';
import 'package:image_picker/image_picker.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:barcode_scan/barcode_scan.dart';
import 'package:page_transition/page_transition.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class OrganikPage extends StatefulWidget {

  @override
  _OrganikPageState createState() => _OrganikPageState();
}

class _OrganikPageState extends State<OrganikPage> {
  File _image;
  List _recognitions;
  bool _busy;
  double _imageWidth, _imageHeight;
  String sampah_recycle = "Organik";
  String sampah_detect = "";
  String label_detect = "";
  String nilai_detect = "";

  final picker = ImagePicker();

  // this function loads the model
  loadTfModel() async {
    await Tflite.loadModel(
      model: "assets/models/ssd_mobilenet.tflite",
      labels: "assets/models/labels.txt",
    );
  }

  // this function detects the objects on the image
  detectObject(File image) async {
    var recognitions = await Tflite.detectObjectOnImage(
        path: image.path,       // required
        model: "SSDMobileNet",
        imageMean: 127.5,
        imageStd: 127.5,
        threshold: 0.4,       // defaults to 0.1
        numResultsPerClass: 10,// defaults to 5
        asynch: true          // defaults to true
    );
    FileImage(image)
        .resolve(ImageConfiguration())
        .addListener((ImageStreamListener((ImageInfo info, bool _) {
      setState(() {
        _imageWidth = info.image.width.toDouble();
        _imageHeight = info.image.height.toDouble();
      });
    })));
    setState(() {
      _recognitions = recognitions;
    });
  }

  @override
  void initState() {
    super.initState();
    _busy = true;
    loadTfModel().then((val) {{
      setState(() {
        _busy = false;
      });
    }});
  }
  // display the bounding boxes over the detected objects
  List<Widget> renderBoxes(Size screen) {
    if (_recognitions == null) return [];
    if (_imageWidth == null || _imageHeight == null) return [];

    double factorX = screen.width;
    double factorY = _imageHeight / _imageHeight * screen.width;

    Color blue = Colors.blue;

    return _recognitions.map((re) {
      return Container(
        child: Positioned(
            left: re["rect"]["x"] * factorX,
            top: re["rect"]["y"] * factorY,
            width: re["rect"]["w"] * factorX,
            height: re["rect"]["h"] * factorY,
            child: ((re["confidenceInClass"] > 0.50))? Container(
              decoration: BoxDecoration(
                  border: Border.all(
                    color: blue,
                    width: 3,
                  )
              ),
              child: Text(
                //this.sampah_detect = "${re["detectedClass"]}, ${(re["confidenceInClass"] * 100).toStringAsFixed(0)}%",
                this.sampah_detect = "${re["detectedClass"]}, ${(re["confidenceInClass"] * 100).toStringAsFixed(0)}",
                style: TextStyle(
                  background: Paint()..color = blue,
                  color: Colors.white,
                  fontSize: 15,
                ),
              ),
            ) : Container()
        ),
      );
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

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
                      onPressed: getImageFromCamera,
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

    stackChildren.addAll(renderBoxes(size));

    if (_busy) {
      stackChildren.add(
          Center(
            child: CircularProgressIndicator(),
          )
      );
    }

    return Scaffold(
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                margin: const EdgeInsets.only(top:10,right:15,left:15,bottom:10),
                child: Text(
                  "Scan Sampah",
                  style: GoogleFonts.montserrat(
                    fontSize: 36.0,
                    fontWeight: FontWeight.bold,
                    color: HexColor('#000000'),
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top:10,right:15,left:15),
                child: Padding(
                  padding: const EdgeInsets.all(10),
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
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(9.0),
                    ),
                    color: HexColor('#00AEE0'),
                    elevation: 3.0,
                    child: InkWell(
                      borderRadius: BorderRadius.circular(9.0),
                      splashColor: HexColor('#000000'),
                      onTap: () async {
                        this.label_detect = '$sampah_detect'.substring(0, '$sampah_detect'.indexOf(","));
                        this.nilai_detect = '$sampah_detect'.substring('$sampah_detect'.indexOf(",") + 1);
                        Navigator.push(context, PageTransition(type: PageTransitionType.rightToLeft, duration: Duration(seconds: 1), child: BarcodePage(_image,'$label_detect', '$nilai_detect', '$sampah_recycle')));
                      },
                      child: ListTile(
                        title: Text(
                          'Selanjutnya',
                          style: GoogleFonts.montserrat(
                            fontSize: 26.0,
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
      ),
    );
  }
  // gets image from camera and runs detectObject
  Future getImageFromCamera() async {
    final pickedFile = await picker.getImage(source: ImageSource.camera);

    setState(() {
      if(pickedFile != null) {
        _image = File(pickedFile.path);
      } else {
        print("Tidak ada gambar yang discan");
      }
    });
    detectObject(_image);
  }
}

class BarcodePage extends StatefulWidget {
  final File _image;
  final String nama_sampah;
  final String nilai_sampah;
  final String sampah_recycle;

  BarcodePage(this._image,this.nama_sampah, this.nilai_sampah, this.sampah_recycle);
  @override
  _BarcodePageState createState() => _BarcodePageState();

}

class _BarcodePageState extends State<BarcodePage> {
  File _image;
  String nama_sampah;
  String nilai_sampah;
  String sampah_recycle;
  String barcode = "";
  String jenis_sampah = "";
  String lokasi_sampah = "";

  @override
  void initState(){
    setState(() {
      this._image = widget._image;
      this.nama_sampah = widget.nama_sampah;
      this.nilai_sampah = widget.nilai_sampah;
      this.sampah_recycle = widget.sampah_recycle;
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              margin: const EdgeInsets.only(top:10,right:15,left:15,bottom:10),
              child: Text(
                "Scan QR Code",
                style: GoogleFonts.montserrat(
                  fontSize: 36.0,
                  fontWeight: FontWeight.bold,
                  color: HexColor('#000000'),
                ),
                textAlign: TextAlign.center,
              ),
            ),
            Container(
              margin: const EdgeInsets.only(top:10,right:15,left:15),
              child: Padding(
                padding: const EdgeInsets.all(10),
                child: Card(
                  child: Image.network('https://img.icons8.com/pastel-glyph/180/000000/qr-code--v2.png', width: 250,),
                ),
              ),
            ),
            /*
            Text(
              'Result: $barcode',
              textAlign: TextAlign.center,
            ),
            */
            Text(
              'Hasil :',
              style: GoogleFonts.montserrat(
                fontSize: 16.0,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            Text(
              'Sampah Anda: $sampah_recycle',
              textAlign: TextAlign.center,
            ),
            Text(
              'Tempat Sampah: $jenis_sampah',
              textAlign: TextAlign.center,
            ),
            Text(
              'Lokasi Pembuangan: $lokasi_sampah',
              textAlign: TextAlign.center,
            ),
            //Text('$nama_sampah'),
            //Text('$nilai_sampah'),
            //Text('$sampah_recycle'),
            Container(
              margin: const EdgeInsets.only(top:25,right:15,left:15),
              child: Padding(
                padding: const EdgeInsets.only(right: 15,left: 15),
                child: ListTile(
                  title: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(9.0),
                    ),
                    color: HexColor('#00AEE0'),
                    child: InkWell(
                      borderRadius: BorderRadius.circular(9.0),
                      splashColor: HexColor('#000000'),
                      onTap: () async {
                        try {
                          String barcode = await BarcodeScanner.scan();
                          setState(() {
                            this.barcode = barcode;
                            String str = barcode;
                            String kept = str.substring( 0, str.indexOf(","));
                            this.jenis_sampah = kept;
                            String remainder = str.substring(str.indexOf(",")+1);
                            this.lokasi_sampah = remainder;
                          });
                        } on PlatformException catch (error) {
                          if (error.code == BarcodeScanner.CameraAccessDenied) {
                            setState(() {
                              this.barcode = 'kamera tidak diizinkan';
                            });
                          } else {
                            setState(() {
                              this.barcode = 'Error: $error';
                            });
                          }
                        }
                      },
                      child: Padding(
                        padding: const EdgeInsets.all(5),
                        child: Text(
                          'Scan QRCode',
                          style: GoogleFonts.montserrat(
                            fontSize: 24.0,
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
            ),
            Container(
              margin: const EdgeInsets.only(top:5,right:15,left:15),
              child: Padding(
                padding: const EdgeInsets.only(right: 15,left: 15),
                child: ListTile(
                  title: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(9.0),
                    ),
                    color: HexColor('#90C418'),
                    child: InkWell(
                      borderRadius: BorderRadius.circular(9.0),
                      splashColor: HexColor('#000000'),
                      onTap: () async {
                        if (this.barcode == '') {
                          Future<dynamic> scanDialog(){
                            return showDialog(
                              context: context,
                              builder: (context) => new AlertDialog(
                                title: Center(
                                  child: FaIcon(
                                    FontAwesomeIcons.exclamationCircle,
                                    color: HexColor('#F04E23'),
                                  ),
                                ),
                                content: Text(
                                  'Scan Dulu QR Code nya !',
                                  style: GoogleFonts.montserrat(
                                      color: HexColor('#000000'),
                                      fontWeight: FontWeight.bold,
                                      fontSize: 14
                                  ),
                                  textAlign: TextAlign.center,
                                ),
                              ),
                            );
                          }
                          return scanDialog();
                        }
                        else{
                          Navigator.push(context, PageTransition(type: PageTransitionType.rightToLeft, duration: Duration(seconds: 1), child: KonfirmasiSampah(_image,'$jenis_sampah', '$lokasi_sampah', '$nama_sampah', '$nilai_sampah', '$sampah_recycle')));
                        }
                      },
                      child: Padding(
                        padding: const EdgeInsets.all(5),
                        child: Text(
                          'Selanjutnya',
                          style: GoogleFonts.montserrat(
                            fontSize: 24.0,
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
            ),
          ],
        ),
      ),
    );
  }
}

