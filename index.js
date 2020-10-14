import Handsontable from "handsontable";

// import 'handsontable/es/plugins/persistentState/persistentState';
// import 'handsontable/es/plugins/autoColumnSize/autoColumnSize';
// import 'handsontable/es/plugins/autofill/autofill';
// import 'handsontable/es/plugins/manualRowResize/manualRowResize';
// import 'handsontable/es/plugins/autoRowSize/autoRowSize';
// import 'handsontable/es/plugins/columnSorting/columnSorting';
// import 'handsontable/es/plugins/manualRowMove/manualRowMove';
// import 'handsontable/es/plugins/comments/comments';
import 'handsontable/es/plugins/contextMenu/contextMenu';
import 'handsontable/es/plugins/contextMenu/contextMenu/contextMenu.css';
// import 'handsontable/es/plugins/copyPaste/copyPaste';
// import 'handsontable/es/plugins/customBorders/customBorders';
// import 'handsontable/es/plugins/dragToScroll/dragToScroll';
// import 'handsontable/es/plugins/manualColumnFreeze/manualColumnFreeze';
// import 'handsontable/es/plugins/manualColumnMove/manualColumnMove';
// import 'handsontable/es/plugins/manualColumnResize/manualColumnResize';
// import 'handsontable/es/plugins/mergeCells/mergeCells';
// import 'handsontable/es/plugins/multipleSelectionHandles/multipleSelectionHandles';
// import 'handsontable/es/plugins/multiColumnSorting/multiColumnSorting';
// import 'handsontable/es/plugins/observeChanges/observeChanges';
// import 'handsontable/es/plugins/search/search';
// import 'handsontable/es/plugins/touchScroll/touchScroll';
// import 'handsontable/es/plugins/undoRedo/undoRedo';
// import 'handsontable/es/plugins/_base';
//
// import 'handsontable/es/plugins/bindRowsWithHeaders/bindRowsWithHeaders';
// import 'handsontable/es/plugins/columnSummary/columnSummary';
// import 'handsontable/es/plugins/dropdownMenu/dropdownMenu';
// import 'handsontable/es/plugins/exportFile/exportFile';
// import 'handsontable/es/plugins/filters/filters';
// import 'handsontable/es/plugins/formulas/formulas';
// import 'handsontable/es/plugins/headerTooltips/headerTooltips';
// import 'handsontable/es/plugins/collapsibleColumns/collapsibleColumns';
// import 'handsontable/es/plugins/nestedHeaders/nestedHeaders';
// import 'handsontable/es/plugins/nestedRows/nestedRows';
// import 'handsontable/es/plugins/hiddenColumns/hiddenColumns';
// import 'handsontable/es/plugins/hiddenRows/hiddenRows';
// import 'handsontable/es/plugins/trimRows/trimRows';

import "handsontable/dist/handsontable.css";

const container = document.getElementById('example1');
const hot = new Handsontable(container, {
  data: Handsontable.helper.createSpreadsheetData(5,10),
  colHeaders: true,
  rowHeaders: true,
  colWidths: 60,
  nestedHeaders: [
    ['A', {label: 'B', colspan: 8}, 'C'],
    ['D', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, 'G'],
    ['H', {label: 'I', colspan: 2}, {label: 'J', colspan: 2}, {label: 'K', colspan: 2}, {label: 'L', colspan: 2}, 'M'],
    ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
  ],
  collapsibleColumns: [
    {row: -4, col: 1, collapsible: true},
    {row: -3, col: 1, collapsible: true},
    {row: -2, col: 1, collapsible: true},
    {row: -2, col: 3, collapsible: true}
  ],
  contextMenu: true,
});

