// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:test/food/food_screen.dart';
import 'package:test/home/text_section.dart';
import 'package:test/style.dart';
import 'image_banner.dart';
import 'text_section.dart';
import 'NavDrawer.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: NavDrawer(),
      appBar: 
      AppBar(
        titleTextStyle: AppBarTextStyle,
        backgroundColor: Color.fromRGBO(255, 222, 117, 100),
      ), 
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.stretch,

            children: <Widget>[
              Container(
                child: Image.asset('assets/images/basil chicken.jpg'),
                padding: const EdgeInsets.all(8.0),
              ),
              ListView(
                scrollDirection: Axis.horizontal,
                padding: EdgeInsets.all(8),
                shrinkWrap: true,
                children: [
                  Row(
                    children: <Widget>[
                      Container(
                        child: Image.asset('assets/images/basil chicken.jpg'),
                        padding: const EdgeInsets.all(8.0),
                        height: 100,
                        width: 100,
                      ),
                      Container(
                        child: Image.asset('assets/images/basil chicken.jpg'),
                        padding: const EdgeInsets.all(8.0),
                        height: 100,
                        width: 100,
                      ),
                      Container(
                        child: Image.asset('assets/images/basil chicken.jpg'),
                        padding: const EdgeInsets.all(8.0),
                        height: 100,
                        width: 100,
                      ),
                      Container(
                        child: Image.asset('assets/images/basil chicken.jpg'),
                        padding: const EdgeInsets.all(8.0),
                        height: 100,
                        width: 100,
                      ),
                      Container(
                        child: Image.asset('assets/images/basil chicken.jpg'),
                        padding: const EdgeInsets.all(8.0),
                        height: 100,
                        width: 100,
                      ),
                      Container(
                        child: Image.asset('assets/images/basil chicken.jpg'),
                        padding: const EdgeInsets.all(8.0),
                        height: 100,
                        width: 100,
                      ),
                    ],
                  ),
                ],
              ),
              Container(
                child: GestureDetector(
                  onTap: () {
                    Navigator.push(context, MaterialPageRoute(builder: (context) => Food()));
                  },
                  child: Image.asset(
                    'assets/images/basil chicken.jpg',
                    fit: BoxFit.cover,
                  )
                ),
                padding: const EdgeInsets.all(8.0),
              ),
            ],
          )
        )
      )
    );
  }
}
