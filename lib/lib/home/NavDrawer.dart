import 'package:flutter/material.dart';

class NavDrawer extends StatelessWidget{

  @override
  Widget build(BuildContext context){
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            child: Text(
              'Side menu',
              style: TextStyle(color: Colors.black, fontSize: 25)
            )
          )
        ],
      )
    );
  }
}