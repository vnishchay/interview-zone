import 'package:flutter/material.dart';

class ProblemTile extends StatelessWidget {
  const ProblemTile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _size = MediaQuery.of(context).size;
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        // height: _size.height * 1 / 3,
        padding: EdgeInsets.all(10),
        height: _size.width * 2 / 3,
        width: _size.width,
        color: Colors.black12,
        child: Container(
          alignment: Alignment.center,
          child: Column(
            children: [
              Text(
                "sfdgfodijijdlifjdsijfiodsjgoifgnvlkdsjijritoijaowpeoroipfgjsghlksdgfgkkfnv",
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w500,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              Text(
                  "sfdgfodijijdli fjdsijfiodsjgoifgnvlkdsjijritoijaowpeoroipfgjsghlksdgfgkkfnv"),
              Text(
                  "sfdgfodijijdli fjdsijfiodsjgoifgnvlkdsjijritoijaowpeoroipfgjsghlksdgfgkkfnv"),
            ],
          ),
        ),
      ),
    );
  }
}
