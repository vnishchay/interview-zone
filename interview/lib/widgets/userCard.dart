import 'package:flutter/material.dart';
import 'package:interview/pages/interviewPage.dart';

class UserCard extends StatelessWidget {
  const UserCard({Key? key}) : super(key: key);
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Container(
        padding: EdgeInsets.all(6),
        child: Card(
          shape: new RoundedRectangleBorder(
              side: BorderSide(width: 1, color: Colors.black),
              borderRadius: new BorderRadius.all(
                new Radius.circular(20.0),
              )),
          color: Colors.white30,
          child: Row(
            children: [
              CircleAvatar(
                child: Align(
                    alignment: Alignment.topLeft,
                    child: Icon(
                      Icons.circle_sharp,
                      color: Colors.green,
                    )),
                radius: 50,
              ),
              SizedBox(
                width: 40,
              ),
              Text(
                "User1 Name ",
                style: TextStyle(fontSize: 20),
              ),
              SizedBox(
                height: 15,
              )
            ],
          ),
        ),
      ),
    );
  }
}
