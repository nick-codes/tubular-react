"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridBody = void 0;
var TableBody_1 = require("@material-ui/core/TableBody");
var React = require("react");
var TbRow_1 = require("../BareBones/TbRow");
var utils_1 = require("../utils");
var MasterDetailRow_1 = require("./MasterDetailRow");
var NoDataRow_1 = require("./NoDataRow");
var getStyles = function (isPointer) { return ({
    row: { cursor: isPointer ? 'pointer' : 'auto' },
    title: { paddingLeft: '15px' },
}); };
var generateOnRowClickProxy = function (onRowClick) {
    return function (row) { return function () {
        if (onRowClick) {
            onRowClick(row);
        }
    }; };
};
exports.GridBody = function (_a) {
    var tbTableInstance = _a.tbTableInstance, rowComponent = _a.rowComponent, onRowClick = _a.onRowClick, detailComponent = _a.detailComponent;
    var styles = getStyles(Boolean(onRowClick));
    var RowComponent = rowComponent ? rowComponent : TbRow_1.TbRow;
    var onRowClickProxy = onRowClick ? generateOnRowClickProxy(onRowClick) : function (_row) { return void 0; };
    var state = tbTableInstance.state;
    var content = null;
    if (state.filteredRecordCount === 0 && !state.isLoading) {
        content = React.createElement(NoDataRow_1.NoDataRow, { columns: state.columns, styles: styles });
    }
    else {
        content = state.data.map(function (row, rowIndex) {
            if (detailComponent) {
                return (React.createElement(MasterDetailRow_1.default, { detail: detailComponent, renderCells: utils_1.renderCells(state.columns, row), clickEvent: onRowClickProxy, style: styles.row, key: rowIndex, rowData: row, columns: state.columns }));
            }
            return (React.createElement(RowComponent, { row: row, key: rowIndex, rowIndex: rowIndex, columns: state.columns, onRowClick: onRowClickProxy(row) }));
        });
    }
    return React.createElement(TableBody_1.default, null, content);
};
