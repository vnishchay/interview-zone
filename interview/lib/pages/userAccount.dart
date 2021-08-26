import 'package:flutter/material.dart';
import 'package:interview/pages/pairFinder.dart';

class UserAccount extends StatelessWidget {
  const UserAccount({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        physics: BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            backgroundColor: Colors.purple[900],
            expandedHeight: 100,
            flexibleSpace: FlexibleSpaceBar(
              centerTitle: true,
              title: Text(
                "_your_profile",
              ),
              titlePadding: EdgeInsets.all(10),
            ),
          ),
          SliverList(
              delegate: SliverChildBuilderDelegate(
                  (context, index) => LiveInterviewTile()))
        ],
      ),
    );
  }
}
