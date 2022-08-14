import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController controler;
  final String hinttext;
  final int maxLines;
  const CustomTextField({
    required this.controler,
    required this.hinttext,
    this.maxLines = 1,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controler,
      decoration: InputDecoration(
        hintText: hinttext,
        border: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.black38,
          ),
        ),
      ),
      validator: (val) {
        if (val == null || val.isEmpty) {
          return 'Enter your $hinttext';
        }
        return null;
      },
      maxLines: maxLines,
    );
  }
}
