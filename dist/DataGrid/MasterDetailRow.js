"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDetailRow = void 0;
var Collapse_1 = require("@material-ui/core/Collapse");
var IconButton_1 = require("@material-ui/core/IconButton");
var TableCell_1 = require("@material-ui/core/TableCell");
var TableRow_1 = require("@material-ui/core/TableRow");
var Add_1 = require("@material-ui/icons/Add");
var Minimize_1 = require("@material-ui/icons/Minimize");
var React = require("react");
var tubular_react_common_1 = require("tubular-react-common");
exports.MasterDetailRow = function (_a) {
    var detail = _a.detail, renderCells = _a.renderCells, style = _a.style, clickEvent = _a.clickEvent, rowData = _a.rowData, columns = _a.columns;
    var _b = tubular_react_common_1.useMasterDetails(), open = _b[0], openDetails = _b[1];
    var openMasterDetails = function () {
        openDetails();
    };
    var childWithRowData = React.cloneElement(detail, { row: rowData });
    return (React.createElement(React.Fragment, null,
        React.createElement(TableRow_1.default, { hover: true, style: style, onClick: clickEvent },
            React.createElement(TableCell_1.default, { padding: "checkbox", size: "small", align: "center" },
                React.createElement(IconButton_1.default, { size: "small", onClick: openMasterDetails }, open ? React.createElement(Minimize_1.default, null) : React.createElement(Add_1.default, null))),
            renderCells),
        open && (React.createElement(TableRow_1.default, { hover: true, style: style },
            React.createElement(TableCell_1.default, { colSpan: columns.length + 1 },
                React.createElement(Collapse_1.default, { in: open, timeout: "auto", unmountOnExit: true }, childWithRowData))))));
};
exports.default = exports.MasterDetailRow;
