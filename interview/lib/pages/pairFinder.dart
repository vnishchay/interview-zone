import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:interview/widgets/liveInterviewsListTile.dart';
import 'package:interview/widgets/problemTile.dart';
import 'package:interview/widgets/topProblems.dart';

class PairFinderPage extends StatelessWidget {
  const PairFinderPage({Key? key}) : super(key: key);

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
              "_search_here",
            ),
            titlePadding: EdgeInsets.all(10),
          ),
          shadowColor: Colors.black,
          elevation: 30,
        ),
        SliverList(
            delegate: SliverChildListDelegate([
          LiveInterviewTile(),
          LiveInterviewTile(),
          LiveInterviewTile(),
          LiveInterviewTile(),
          LiveInterviewTile(),
          LiveInterviewTile(),
          LiveInterviewTile(),
          LiveInterviewTile(),
        ]))
      ],
    ));
  }
}
