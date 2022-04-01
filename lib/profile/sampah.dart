import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:search_page/search_page.dart';

class SampahBuang {
  final String gambar;
  final String jenis_sampah;
  final String lokasi_pembuangan;

  SampahBuang(this.gambar, this.jenis_sampah, this.lokasi_pembuangan);
}

class Sampahku extends StatefulWidget {

  @override
  _SampahkuState createState() => _SampahkuState();
}

class _SampahkuState extends State<Sampahku> {

  static List<SampahBuang> sampah_recycle = [
    SampahBuang('https://p0.pikist.com/photos/600/775/recycle-bin-paper-waste-garbage-waste-paper-paper-pile-throw-away.jpg', 'Organik', 'Jakarta',),
    SampahBuang('http://beritamanado.com/wp-content/uploads/2017/01/Botol-plastik.jpg', 'Nonorganik', 'Jakarta',),
    SampahBuang('https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/grid/original/130490_kulit-pisang.jpg', 'Organik', 'Depok'),
    SampahBuang('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf2cUuWmEUmZHEVGt1htSqCmON2Q1kukg-A&usqp=CAU', 'Organik', 'Bekasi'),
  ];

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
          "Sampahku",
          style: GoogleFonts.montserrat(
            fontSize: 20.0,
            fontWeight: FontWeight.bold,
            color: HexColor('#428DFC'),
          ),
        ),
        elevation: 0,
        brightness: Brightness.light,
        backgroundColor: HexColor('#ffffff'),
      ),
      body: Container(
          margin: EdgeInsets.all(15.0),
          child: GridView.builder(
            itemCount: sampah_recycle.length,
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 4.0,
                mainAxisSpacing: 4.0
            ),
            itemBuilder: (BuildContext context, int index){
              //return Image.network(barang_recycle[index].gambar);
              return Container(
                child: SingleChildScrollView(
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    child: InkWell(
                      borderRadius: BorderRadius.circular(8.0),
                      splashColor: HexColor('#428DFC'),
                      onTap: () async{

                      },
                      child: Padding(
                        padding: EdgeInsets.all(10.0),
                        child: Column(
                          children: [
                            Image.network(sampah_recycle[index].gambar, height: 100,),
                            Padding(padding: EdgeInsets.all(5.0)),
                            Text(
                              sampah_recycle[index].jenis_sampah,
                              style: GoogleFonts.montserrat(
                                fontSize: 12.0,
                                fontWeight: FontWeight.bold,
                                color: HexColor('#000000'),
                              ),
                              textAlign: TextAlign.center,
                            ),
                            Text(
                              sampah_recycle[index].lokasi_pembuangan,
                              style: GoogleFonts.montserrat(
                                fontSize: 10.0,
                                color: HexColor('#000000'),
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              );
            },
          )
      ),
      floatingActionButton: FloatingActionButton(
        tooltip: 'Cari Produk Anda',
        onPressed: () => showSearch(
          context: context,
          delegate: SearchPage<SampahBuang>(
            onQueryUpdate: (s) => print(s),
            items: sampah_recycle,
            searchLabel: 'Cari Sampahmu',
            suggestion: Center(
              child: Text('Cari Jenis Sampah atau Lokasi Membuang Sampah'),
            ),
            failure: Center(
              child: Text('Sampah Tidak Ditemukan :('),
            ),
            filter: (sampah) => [
              sampah.jenis_sampah,
              sampah.lokasi_pembuangan,
            ],
            builder: (sampah) => Container(
              margin: EdgeInsets.only(top:5.0, left:15.0, right: 15.0),
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
                child: InkWell(
                  borderRadius: BorderRadius.circular(8.0),
                  splashColor: HexColor('#428DFC'),
                  onTap: () async{

                  },
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: ListTile(
                      leading: Image.network(sampah.gambar),
                      title: Text(sampah.jenis_sampah),
                      subtitle: Text(sampah.lokasi_pembuangan),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        child: Icon(Icons.search),
      ),
    );
  }
}
