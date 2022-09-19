function downloadResults_sheetjs(filename, data) {
    var ws = XLSX.utils.aoa_to_sheet(data);
    /* build up workbook */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');
    /* generate download */
    XLSX.writeFile(wb, filename);
  }


  function convert_to_number(s){
    if (s.includes(",")){
      return s;
    }
    return Number(s);
  }
  
  
  