import 'package:flutter/material.dart';
import 'package:interview/pages/signUp.dart';

class UserProfileCard extends StatelessWidget {
  final Icon icon;
  final Route pageRoute;
  final Color color;
  final Title title;
  const UserProfileCard({
    Key? key,
    required this.icon,
    required this.pageRoute,
    required this.color,
    required this.title,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _size = MediaQuery.of(context).size;
    return GestureDetector(
      onTap: () {
        Navigator.of(context).push(pageRoute);
      },
      child: Container(
        padding: EdgeInsets.all(10),
        child: Container(
          height: _size.height * 1 / 5,
          width: _size.width * 1.3 / 3,
          color: Colors.purple,
          padding: EdgeInsets.all(8),
          child: Column(
            children: [
              Padding(
                padding: EdgeInsets.all(10),
                child: Center(
                  child: icon,
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 25),
                child: title,
              )
            ],
          ),
        ),
      ),
    );
  }
}
