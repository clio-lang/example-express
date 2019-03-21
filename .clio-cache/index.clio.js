module.exports = async function(scope, builtins, file) {
    var ws_connections = [];
    await builtins.clio_require('express/express', ['express'], __dirname, scope);
    builtins.define_function((function(scope) {
        var func = builtins.lazy(async function(req, res) {
            var scope = Object.assign({}, func.frozenscope);
            var args_obj = {};
            var _arguments = arguments;
            ['req', 'res'].forEach(function(arg, index) {
                scope[arg] = _arguments[index]
            });
            return await (async function(__data) {
                var fn = async function(__data) {
                    return await builtins.funcall([...__data], [], (await builtins.get_property(await builtins.funcall(['res'], [scope], builtins.get_symbol, file, {
                        index: 84,
                        fn: '<get-symbol>'
                    }), "send")), file, {
                        index: 84,
                        fn: 'undefined'
                    })
                }
                if (__data[0].is_reactive) {
                    return __data[0].set_listener(function(n) {
                        return fn([n, ...__data.slice(1)])
                    })
                } else {
                    return await fn(__data)
                }
            })([`Hello World!`])
        }, true);
        func.frozenscope = Object.assign({}, scope);
        func.frozenscope['handler'] = func;
        func.frozenscope['recall'] = func;
        func.is_clio_fn = true;
        return func;
    })(scope), 'handler', scope);
    builtins.decorate_function(await builtins.funcall(['eager'], [scope], builtins.get_symbol, file, {
        index: 38,
        fn: '<get-symbol>'
    }), [], 'handler', scope);
    await (async function(__data) {
        var fn = async function(__data) {
            return (await builtins.update_vars(scope, ['app'], await builtins.funcall([...__data], [], await builtins.funcall(['call'], [scope], builtins.get_symbol, file, {
                index: 105,
                fn: '<get-symbol>'
            }), file, {
                index: 105,
                fn: 'call'
            })))
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([await builtins.funcall(['express'], [scope], builtins.get_symbol, file, {
        index: 94,
        fn: '<get-symbol>'
    })]);
    await (async function(__data) {
        var fn = async function(__data) {
            return await builtins.funcall([...__data], [`/`, await builtins.funcall(['handler'], [scope], builtins.get_symbol, file, {
                index: 132,
                fn: '<get-symbol>'
            })], await builtins.funcall(['get'], [scope], builtins.get_symbol, file, {
                index: 124,
                fn: '<get-symbol>'
            }), file, {
                index: 124,
                fn: 'get'
            })
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([await builtins.funcall(['app'], [scope], builtins.get_symbol, file, {
        index: 117,
        fn: '<get-symbol>'
    })]);
    await (async function(__data) {
        var fn = async function(__data) {
            return await builtins.funcall([...__data], [], (await builtins.get_property(await builtins.funcall(['app'], [scope], builtins.get_symbol, file, {
                index: 148,
                fn: '<get-symbol>'
            }), "listen")), file, {
                index: 148,
                fn: 'undefined'
            })
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([new builtins.Decimal('5000')]);
    for (var server in ws_connections) {
        if (ws_connections.hasOwnProperty(server)) {
            if (ws_connections[server].emitters == {}) {
                ws_connections[server].socket.close()
            }
        }
    }
    return scope;
};