import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class FolderPage {
  input: any;
  result: any;
  inputType: any;
  resultType: any;
  inputTypeValue: any;
  resultTypeValue: any;

  constructor() {}

  ionViewDidEnter() {
    this.input = document.getElementById('input');
    this.result = document.getElementById('result');
    this.inputType = document.getElementById('inputType');
    this.resultType = document.getElementById('resultType');

    this.input.addEventListener("keyup", this.myResult.bind(this));
    this.inputType.addEventListener("change", this.myResult.bind(this));
    this.resultType.addEventListener("change", this.myResult.bind(this));

    this.inputTypeValue = this.inputType.value;
    this.resultTypeValue = this.resultType.value;
  }

  myResult() {
    this.inputTypeValue = this.inputType.value;
    this.resultTypeValue = this.resultType.value;

    if (this.inputTypeValue === "meter" && this.resultTypeValue === "kilometer") {
      this.result.value = Number(this.input.value) * 0.001;
    } else if (this.inputTypeValue === "meter" && this.resultTypeValue === "centimeter") {
      this.result.value = Number(this.input.value) * 100;
    } else if (this.inputTypeValue === "meter" && this.resultTypeValue === "meter") {
      this.result.value = this.input.value;
    }

    if (this.inputTypeValue === "kilometer" && this.resultTypeValue === "meter") {
      this.result.value = Number(this.input.value) * 1000;
    } else if (this.inputTypeValue === "kilometer" && this.resultTypeValue === "centimeter") {
      this.result.value = Number(this.input.value) * 100000;
    } else if (this.inputTypeValue === "kilometer" && this.resultTypeValue === "kilometer") {
      this.result.value = this.input.value;
    }

    if (this.inputTypeValue === "centimeter" && this.resultTypeValue === "kilometer") {
      this.result.value = Number(this.input.value) * 0.00001;
    } else if (this.inputTypeValue === "centimeter" && this.resultTypeValue === "meter") {
      this.result.value = Number(this.input.value) * 0.01;
    } else if (this.inputTypeValue === "centimeter" && this.resultTypeValue === "centimeter") {
      this.result.value = this.input.value;
    }
  }
}
