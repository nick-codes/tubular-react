"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridHeader = void 0;
var TableCell_1 = require("@material-ui/core/TableCell");
var TableRow_1 = require("@material-ui/core/TableRow");
var React = require("react");
var GridHeaderCell_1 = require("./GridHeaderCell");
exports.GridHeader = function (_a) {
    var tbTableInstance = _a.tbTableInstance, detailComponent = _a.detailComponent;
    var api = tbTableInstance.api, state = tbTableInstance.state;
    return (React.createElement(TableRow_1.default, null,
        detailComponent && React.createElement(TableCell_1.default, { key: "Detail", padding: "default" }),
        state.columns
            .filter(function (col) { return col.visible; })
            .map(function (column) { return (React.createElement(GridHeaderCell_1.GridHeaderCell, { key: column.name, column: column, sortColumn: api.sortColumn })); })));
};
