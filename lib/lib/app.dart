import 'package:flutter/material.dart';
import 'home/home_screen.dart';
import 'style.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Home(),
      theme: ThemeData(
          textTheme: const TextTheme(headline6: AppBarTextStyle)
        )
    );
  }
}
