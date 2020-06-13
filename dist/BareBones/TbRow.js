"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TbRow = void 0;
var TableRow_1 = require("@material-ui/core/TableRow/TableRow");
var React = require("react");
var renders_1 = require("../utils/renders");
exports.TbRow = function (_a) {
    var row = _a.row, columns = _a.columns, onRowClick = _a.onRowClick;
    return (React.createElement(TableRow_1.default, { hover: true, onClick: onRowClick }, renders_1.renderCells(columns, row)));
};
