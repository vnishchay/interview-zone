import 'dart:ui';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:interview/pages/login.dart';
import 'package:interview/pages/pairFinder.dart';
import 'package:interview/pages/signUp.dart';
import 'package:interview/pages/userAccount.dart';
import 'package:interview/widgets/problemTile.dart';
import 'package:interview/widgets/topProblems.dart';
import 'package:interview/widgets/userprofile_card.dart';

class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        physics: BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            backgroundColor: Colors.green[900],
            expandedHeight: 100,
            flexibleSpace: FlexibleSpaceBar(
              centerTitle: true,
              title: Text(
                "_interview-zone",
              ),
              titlePadding: EdgeInsets.all(10),
            ),
          ),
          SliverList(
              delegate: SliverChildListDelegate([
            TopProblem(),
            ProblemTile(),
            Container(
              // padding: EdgeInsets.all(),
              child: Row(
                children: [
                  UserProfileCard(
                    icon: Icon(
                      Icons.timer_10_outlined,
                      size: 30,
                    ),
                    color: Colors.cyan.shade900,
                    pageRoute: MaterialPageRoute(builder: (context) => Login()),
                    title: Title(
                      child: Text(
                        "Login",
                        style: TextStyle(fontSize: 20),
                      ),
                      color: Colors.purple,
                    ),
                  ),
                  UserProfileCard(
                    icon: Icon(
                      Icons.timer_10_outlined,
                      size: 30,
                    ),
                    color: Colors.cyan.shade900,
                    pageRoute:
                        MaterialPageRoute(builder: (context) => SignUp()),
                    title: Title(
                      child: Text(
                        "SignUp",
                        style: TextStyle(fontSize: 20),
                      ),
                      color: Colors.purple,
                    ),
                  ),
                ],
              ),
            ),
            ProblemTile(),
            ProblemTile(),
          ]))
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
          onPressed: () {
            Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => PairFinderPage()));
          },
          elevation: 40,
          backgroundColor: Colors.black,
          hoverColor: Colors.black87,
          focusColor: Colors.cyan.shade900,
          label: Wrap(
            children: [
              Icon(Icons.search),
              Title(color: Colors.black, child: Text("Find Peer"))
            ],
          )),
    );
  }
}
