"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGridCard = void 0;
var Card_1 = require("@material-ui/core/Card");
var CardActions_1 = require("@material-ui/core/CardActions");
var CardContent_1 = require("@material-ui/core/CardContent");
var IconButton_1 = require("@material-ui/core/IconButton");
var Typography_1 = require("@material-ui/core/Typography");
var LabelImportant_1 = require("@material-ui/icons/LabelImportant");
var makeStyles_1 = require("@material-ui/styles/makeStyles");
var React = require("react");
var tubular_common_1 = require("tubular-common");
var uno_js_1 = require("uno-js");
var useStyles = makeStyles_1.default(function (_a) {
    var palette = _a.palette;
    return ({
        cardActions: {
            justifyContent: 'flex-end',
            paddingTop: 0,
        },
        cardBtn: {
            color: palette.primary.dark,
            textDecoration: 'none',
        },
        cardMobile: {
            marginBottom: '2px',
            marginLeft: '10px',
            marginRight: '10px',
            maxHeight: '400px',
            minHeight: '200px',
            minWidth: '95%',
        },
        dataLabel: {
            flexDirection: 'column',
            flexGrow: 1,
            fontWeight: 'bold',
            margin: '4px',
            textAlign: 'right',
            width: '50%',
        },
        dataRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start ',
        },
        dataValue: {
            flexDirection: 'column',
            flexGrow: 1,
            margin: '2px',
            textAlign: 'left',
            width: '50%',
        },
    });
});
var renderGeneral = function (column, item) { return item[column.name]; };
var renderBoolean = function (column, item) { return (React.createElement("input", { type: "checkbox", checked: item[column.name], disabled: true })); };
var renderString = function (column, item) {
    return item[column.name].length > 50 ? item[column.name].substring(0, 50) + '...' : renderGeneral(column, item);
};
var columnRender = function (column, item) {
    switch (column.dataType) {
        case tubular_common_1.ColumnDataType.Boolean:
            return renderBoolean(column, item);
        case tubular_common_1.ColumnDataType.String:
            return renderString(column, item);
        default:
            return renderGeneral(column, item);
    }
};
exports.DataGridCard = function (_a) {
    var columns = _a.columns, item = _a.item, onClickCallback = _a.onClickCallback;
    var classes = useStyles({});
    return (React.createElement(Card_1.default, { className: classes.cardMobile },
        React.createElement(CardContent_1.default, null,
            columns.map(function (column, index) { return (React.createElement("div", { className: classes.dataRow, key: index },
                React.createElement(Typography_1.default, { component: "div", variant: "body2", color: "textSecondary", className: classes.dataLabel },
                    uno_js_1.humanize(column.name),
                    ":"),
                React.createElement(Typography_1.default, { component: "div", variant: "body2", color: "textSecondary", className: classes.dataValue }, columnRender(column, item)))); }),
            React.createElement(CardActions_1.default, { className: classes.cardActions }, onClickCallback && (React.createElement(IconButton_1.default, { className: classes.cardBtn, color: "default", onClick: onClickCallback, size: "small" },
                React.createElement(LabelImportant_1.default, null)))))));
};