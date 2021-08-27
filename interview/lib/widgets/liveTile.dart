import 'package:flutter/material.dart';

class LiveInterviewSmall extends StatelessWidget {
  const LiveInterviewSmall({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _size = MediaQuery.of(context).size;
    return Container(
      height: _size.height * 1 / 5,
      width: _size.width * 2 / 3,
      color: Colors.black87,
      child: Center(
        child: Icon(
          Icons.call,
          size: 60,
          color: Colors.red,
        ),
      ),
    );
  }
}
