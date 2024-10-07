import { Controller } from '@hotwired/stimulus';
import SignaturePad from 'signature_pad';

// Connects to data-controller="signature"
export default class extends Controller {
  static targets = ['name', 'output', 'change', 'level', 'rate', 'canvas'];

  connect() {
    console.log('Hello, Please your signature.');
    // const canvas = document.querySelector('canvas');
    // const signaturePad = new SignaturePad(canvas, {
    const signaturePad = new SignaturePad(
      document.getElementById('signature-pad'),
      {
        backgroundColor: 'rgb(255, 255, 255)',
        penColor: 'rgb(0, 0, 0)',
      }
    );
    const saveButton = document.getElementById('save');
    const cancelButton = document.getElementById('clear');
    saveButton.addEventListener('click', function (e) {
      const data = signaturePad.toDataURL('image/png');
      window.open(data);
    });
    cancelButton.addEventListener('click', function (e) {
      signaturePad.clear();
    });
  }

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }

  changeText() {
    this.changeTarget.textContent = 'テキストが変更されました！';
  }

  multiplication() {
    let a = this.levelTarget.value;
    let b = this.rateTarget.value;
    result = a * b;
    console.log(result);
    // this.resultTarget.integerContent = a * b;
  }

  signaturePad() {}
}
