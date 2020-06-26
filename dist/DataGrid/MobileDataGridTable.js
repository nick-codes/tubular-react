"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileDataGridTable = void 0;
var GridList_1 = require("@material-ui/core/GridList");
var React = require("react");
var TbMobileRow_1 = require("../BareBones/TbMobileRow");
var generateOnRowClickProxy = function (onRowClick) {
    return function (row) {
        return function () {
            if (onRowClick) {
                onRowClick(row);
            }
        };
    };
};
exports.MobileDataGridTable = function (_a) {
    var tbTableInstance = _a.tbTableInstance, rowComponent = _a.rowComponent, onRowClick = _a.onRowClick;
    var RowComponent = rowComponent ? rowComponent : TbMobileRow_1.TbMobileRow;
    var onRowClickProxy = onRowClick ? generateOnRowClickProxy(onRowClick) : function (_row) { return void 0; };
    return (React.createElement(GridList_1.default, { cellHeight: "auto", cols: 1 }, tbTableInstance.state.data.map(function (row, index) { return (React.createElement(RowComponent, { columns: tbTableInstance.state.columns, row: row, rowIndex: index, onRowClick: onRowClickProxy(row), key: index })); })));
};
