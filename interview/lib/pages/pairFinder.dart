import 'dart:ui';

import 'package:flutter/material.dart';

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
                "intervew on",
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

class LiveInterviewTile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: Container(
        padding: EdgeInsets.all(6),
        child: Card(
          shape: new RoundedRectangleBorder(
              borderRadius: new BorderRadius.all(new Radius.circular(20.0))),
          color: Colors.white30,
          child: Column(
            children: [
              Center(
                  child: Icon(
                Icons.event_busy_outlined,
                size: 50,
              )),
              Container(
                padding: EdgeInsets.all(10),
                width: MediaQuery.of(context).size.width,
                child: Wrap(
                  alignment: WrapAlignment.spaceAround,
                  children: [
                    Text(
                      "User1",
                      style: TextStyle(fontSize: 20),
                    ),
                    Text(
                      "User2",
                      style: TextStyle(fontSize: 20),
                    )
                  ],
                ),
              ),
              SizedBox(
                height: 20,
              )
            ],
          ),
        ),
      ),
    );
  }
}
