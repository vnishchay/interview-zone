import 'package:flutter/material.dart';

class TopProblem extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final _size = MediaQuery.of(context).size;
    return Container(
      padding: EdgeInsets.all(8),
      child: Container(
        // height: _size.height * 1 / 3,
        padding: EdgeInsets.all(15),
        height: _size.width * 2 / 3,
        width: _size.width,
        color: Colors.cyan.shade300,
        child: Container(
          alignment: Alignment.center,
          child: Center(
            child: Column(
              children: [
                Text(
                  "Topfdgfodijijdlifjdsijfiodsjgoifgnvlkdsjijritoijaowpeoroipfgjsghlksdgfgkkfnv",
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                SizedBox(
                  height: 10,
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      "sfdgfodijijdli fjdsijfiodsjgoifgnvlkdsjijritoijaowpeoroipfgjsghlksdgfgkkfnv"),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                      "sfdgfodijijdli fjdsijfiodsjgoifgnvlkdsjijritoijaowpeoroipfgjsghlksdgfgkkfnv"),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
