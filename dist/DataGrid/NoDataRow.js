"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDataRow = void 0;
var TableCell_1 = require("@material-ui/core/TableCell/TableCell");
var TableRow_1 = require("@material-ui/core/TableRow/TableRow");
var Typography_1 = require("@material-ui/core/Typography/Typography");
var Warning_1 = require("@material-ui/icons/Warning");
var React = require("react");
var Lang_1 = require("../utils/Lang");
exports.NoDataRow = function (_a) {
    var columns = _a.columns, styles = _a.styles;
    return (React.createElement(TableRow_1.default, null,
        React.createElement(TableCell_1.default, { colSpan: columns.filter(function (col) { return col.visible; }).length },
            React.createElement(Typography_1.default, { style: styles.title, variant: "body2", gutterBottom: true },
                React.createElement(Warning_1.default, null),
                " ",
                Lang_1.default.translate('NoRecords')))));
};
