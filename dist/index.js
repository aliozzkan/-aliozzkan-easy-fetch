'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var initialValue = {
    status: null,
    data: null,
    error: null,
    isPending: false,
    isRejected: false,
    isFulfilled: false,
};
// Hook
var useFetchData = function () {
    var _a = React.useState(initialValue), _fetchData = _a[0], _setFetchData = _a[1];
    function pending() {
        _setFetchData(__assign(__assign({}, initialValue), { status: "pending", isPending: true }));
    }
    function fulfilled(data) {
        _setFetchData(__assign(__assign({}, initialValue), { status: "fulfilled", data: data, isFulfilled: true }));
    }
    function rejected(error) {
        _setFetchData(__assign(__assign({}, initialValue), { status: "rejected", error: error, isRejected: true }));
    }
    function reset() {
        _setFetchData(initialValue);
    }
    return [_fetchData, { pending: pending, fulfilled: fulfilled, rejected: rejected, reset: reset }];
};

var initialValue$1 = {
    status: null,
    data: null,
    error: null,
    isPending: false,
    isRejected: false,
    isFulfilled: false,
};
function createInitialValue() {
    var initial = __assign({}, initialValue$1);
    return initial;
}
function mutationFetch(t, stateName) {
    return {
        pending: function () {
            var _a;
            t.setState((_a = {},
                _a[stateName] = __assign(__assign({}, initialValue$1), { status: "pending", isPending: true }),
                _a));
        },
        fulfilled: function (data) {
            var _a;
            t.setState((_a = {},
                _a[stateName] = __assign(__assign({}, initialValue$1), { status: "fulfilled", data: data, isFulfilled: true }),
                _a));
        },
        rejected: function (error) {
            var _a;
            t.setState((_a = {},
                _a[stateName] = __assign(__assign({}, initialValue$1), { status: "rejected", error: error, isRejected: true }),
                _a));
        },
        reset: function () {
            var _a;
            t.setState((_a = {},
                _a[stateName] = __assign({}, initialValue$1),
                _a));
        },
    };
}

var _classRelation = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createInitialValue: createInitialValue,
    mutationFetch: mutationFetch
});

function createService(apiFunction) {
    var defaultServiceCallback = {
        onSuccess: function () { },
        onError: function () { },
    };
    return function (mutation, cb) {
        if (cb === void 0) { cb = defaultServiceCallback; }
        return function (apiFunctionData) {
            if (apiFunctionData === void 0) { apiFunctionData = null; }
            return __awaiter(this, void 0, void 0, function () {
                var data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (mutation) {
                                mutation.pending();
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, apiFunction({
                                    jsonData: apiFunctionData === null || apiFunctionData === void 0 ? void 0 : apiFunctionData.jsonData,
                                }).then(function (r) { return r.data; })];
                        case 2:
                            data = _a.sent();
                            if (mutation) {
                                mutation.fulfilled(data);
                            }
                            if (cb.onSuccess) {
                                cb.onSuccess(data);
                            }
                            return [2 /*return*/, true];
                        case 3:
                            error_1 = _a.sent();
                            if (mutation) {
                                mutation.rejected(error_1);
                            }
                            if (cb.onError) {
                                cb.onError(error_1);
                            }
                            console.log(error_1);
                            return [2 /*return*/, false];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
    };
}

var classRelation = _classRelation;

exports.classRelation = classRelation;
exports.createService = createService;
exports.useFetchData = useFetchData;
//# sourceMappingURL=index.js.map
