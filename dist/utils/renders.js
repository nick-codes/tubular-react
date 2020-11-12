"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCells = exports.renderDefaultListItem = exports.renderCellContent = void 0;
var TableCell_1 = require("@material-ui/core/TableCell");
var CheckBox_1 = require("@material-ui/icons/CheckBox");
var CheckBoxOutlineBlank_1 = require("@material-ui/icons/CheckBoxOutlineBlank");
var React = require("react");
var tubular_common_1 = require("tubular-common");
var date_fns_1 = require("@date-io/date-fns");
var dateFns = new date_fns_1.default();
exports.renderCellContent = function (column, row) {
    switch (column.dataType) {
        case tubular_common_1.ColumnDataType.Numeric:
            return row[column.name] || 0;
        case tubular_common_1.ColumnDataType.Date:
            return dateFns.format(row[column.name], 'fullDate');
        case tubular_common_1.ColumnDataType.DateTime:
        case tubular_common_1.ColumnDataType.DateTimeUtc:
            return dateFns.format(row[column.name], 'fullDateTime');
        case tubular_common_1.ColumnDataType.Boolean:
            return row[column.name] === true ? React.createElement(CheckBox_1.default, null) : React.createElement(CheckBoxOutlineBlank_1.default, null);
        default:
            return row[column.name];
    }
};
exports.renderDefaultListItem = function (columns, row) {
    return columns
        .filter(function (col) { return col.visible; })
        .map(function (column) { return React.createElement("div", { key: column.name }, exports.renderCellContent(column, row)); });
};
exports.renderCells = function (columns, row) {
    return columns
        .filter(function (col) { return col.visible; })
        .map(function (column) { return (React.createElement(TableCell_1.default, { key: column.name, padding: column.label === '' ? 'none' : 'default', align: tubular_common_1.getColumnAlign(column) }, exports.renderCellContent(column, row))); });
};
