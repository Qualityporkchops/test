// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

class TextSection extends StatelessWidget {
  final String _title;
  final String _body;
  static const double _hPad = 16.0;


  TextSection(this._title,this._body);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          padding: const EdgeInsets.fromLTRB(_hPad, 32.0, _hPad, 4.0),
          child: Text(_title, style: TextStyle(fontSize: 25),)
        ),
        Container(
          padding: const EdgeInsets.fromLTRB(_hPad, 10.0, _hPad, _hPad),
          child: Text(_body)
        ),
      ]
    );
  }
}