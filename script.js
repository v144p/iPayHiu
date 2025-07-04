function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert("Nomor berhasil disalin : " + number);
  });
}