import 'package:flutter/material.dart';
import 'package:interview/pages/pairFinder.dart';
import 'package:interview/widgets/userCard.dart';
import 'package:interview/widgets/userprofile_card.dart';

class UserAccount extends StatelessWidget {
  const UserAccount({Key? key}) : super(key: key);

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
                "_your_profile",
              ),
              titlePadding: EdgeInsets.all(10),
            ),
          ),
          SliverGrid(
              delegate: SliverChildListDelegate.fixed([
                UserProfileCard(
                  icon: Icon(
                    Icons.account_box_outlined,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.verified_user_sharp,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.timer_10_outlined,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.verified_user_sharp,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.verified_user_sharp,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.account_balance,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.data_usage_outlined,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.verified_user_sharp,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.verified_user_sharp,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
                UserProfileCard(
                  icon: Icon(
                    Icons.verified_user_sharp,
                    size: 45,
                  ),
                  color: Colors.purpleAccent,
                  pageRoute:
                      MaterialPageRoute(builder: (context) => UserAccount()),
                  title: Title(
                    child: Text(
                      "hello world",
                      style: TextStyle(fontSize: 20),
                    ),
                    color: Colors.purple,
                  ),
                ),
              ]),
              gridDelegate:
                  SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2)),
        ],
      ),
    );
  }
}
