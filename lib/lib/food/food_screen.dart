// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:test/home/home_screen.dart';
import 'package:test/home/text_section.dart';
import 'package:test/style.dart';
import 'package:test/home/NavDrawer.dart';

class Food extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: NavDrawer(),
      appBar: 
      AppBar(
        titleTextStyle: AppBarTextStyle,
        backgroundColor: Color.fromRGBO(255,222,117, 100),
      ), 
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              TextSection('Basil Chicken', 'Good shit pun made, made in Thailand, easy quick, can eat shit ton of rice'),
              Image.asset('assets/images/basil chicken.jpg'),
              DataTable(
                columns: const <DataColumn>[
                  DataColumn(label: Text('Ingredients', style: TextStyle(fontStyle: FontStyle.italic))),
                  DataColumn(label: Text('', style: TextStyle(fontStyle: FontStyle.italic)))
                ],
                rows: const <DataRow>[
                  DataRow(
                    cells: <DataCell>[DataCell(Text('Chicken Breast')), DataCell(Text('500g')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('Basil')),DataCell(Text('idk'))]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('Chilli')),DataCell(Text('alot')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('Garlic')),DataCell(Text('shit ton')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('Thai soysauce')),DataCell(Text('idk')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('Thai oyster sauce')),DataCell(Text('idk')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('salt, pepper')),DataCell(Text('alot')),]
                  ),
                ],
              ),
              DataTable(
                headingRowHeight: 20,
                columns: const <DataColumn>[
                  DataColumn(label: Text('Steps', style: TextStyle(fontStyle: FontStyle.italic))),
                  DataColumn(label: Text('', style: TextStyle(fontStyle: FontStyle.italic)))
                ],
                rows: const <DataRow>[
                  DataRow(
                    cells: <DataCell>[DataCell(Text('1')), DataCell(Text('Cut chicken into small blocks. Dice garlic and chilli.')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('2')),DataCell(Text('Oil in pan and put garlic and chilli.'))]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('3')),DataCell(Text('Put chicken in pan and cook a bit')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('4')),DataCell(Text('Put sauces and cook.')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('5')),DataCell(Text('Chuck in basil and turn off heat.')),]
                  ),
                  DataRow(
                    cells: <DataCell>[DataCell(Text('6')),DataCell(Text('Done!')),]
                  ),
                ],
              ),
            ],
          )
        )
      )
    );
  }
}
