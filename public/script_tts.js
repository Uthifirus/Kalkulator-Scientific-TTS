function js() {
  var sel = document.getElementById("selectId").value;
  var jwb = document.getElementById("jawaban").value;

  switch (sel) {
    case "1":
      if (jwb == "takjil") {
        document.getElementById("1.9").style.display = "";
        document.getElementById("2.9").style.display = "";
        document.getElementById("3.9").style.display = "";
        document.getElementById("4.9").style.display = "";
        document.getElementById("5.9").style.display = "";
        document.getElementById("6.9").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "2":
      if (jwb == "tadharus") {
        document.getElementById("2.6").style.display = "";
        document.getElementById("3.6").style.display = "";
        document.getElementById("4.6").style.display = "";
        document.getElementById("5.6").style.display = "";
        document.getElementById("6.6").style.display = "";
        document.getElementById("7.6").style.display = "";
        document.getElementById("8.6").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "3":
      if (jwb == "eidalfitr") {
        document.getElementById("2.11").style.display = "";
        document.getElementById("3.11").style.display = "";
        document.getElementById("4.11").style.display = "";
        document.getElementById("5.11").style.display = "";
        document.getElementById("6.11").style.display = "";
        document.getElementById("7.11").style.display = "";
        document.getElementById("8.11").style.display = "";
        document.getElementById("9.11").style.display = "";
        document.getElementById("10.11").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "4":
      if (jwb == "taraweh") {
        document.getElementById("2.6").style.display = "";
        document.getElementById("2.7").style.display = "";
        document.getElementById("2.8").style.display = "";
        document.getElementById("2.9").style.display = "";
        document.getElementById("2.10").style.display = "";
        document.getElementById("2.11").style.display = "";
        document.getElementById("2.12").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "5":
      if (jwb == "ramadha") {
        document.getElementById("5.1").style.display = "";
        document.getElementById("5.2").style.display = "";
        document.getElementById("5.3").style.display = "";
        document.getElementById("5.4").style.display = "";
        document.getElementById("5.5").style.display = "";
        document.getElementById("5.6").style.display = "";
        document.getElementById("5.7").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "6":
      if (jwb == "haus") {
        document.getElementById("7.4").style.display = "";
        document.getElementById("7.5").style.display = "";
        document.getElementById("7.6").style.display = "";
        document.getElementById("7.7").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "7":
      if (jwb == "sahur") {
        document.getElementById("10.7").style.display = "";
        document.getElementById("10.8").style.display = "";
        document.getElementById("10.9").style.display = "";
        document.getElementById("10.10").style.display = "";
        document.getElementById("10.11").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    default:
      break;
  }
}
