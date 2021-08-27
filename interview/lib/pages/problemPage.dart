import 'package:flutter/material.dart';
import 'package:interview/widgets/problemTile.dart';

class ProblemsPage extends StatelessWidget {
  const ProblemsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _size = MediaQuery.of(context).size;
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
                "_solve_these",
              ),
              titlePadding: EdgeInsets.all(10),
            ),
          ),
          SliverList(
              delegate: SliverChildListDelegate([
            ProblemTile(),
            ProblemTile(),
            ProblemTile(),
          ]))
        ],
      ),
    );
  }
}
