parcelRequire = (function(e, r, t, n) {
    var i,
        o = 'function' == typeof parcelRequire && parcelRequire,
        u = 'function' == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = 'function' == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && 'string' == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = 'MODULE_NOT_FOUND'), c);
            }
            (p.resolve = function(r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function(e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function(r, t) {
            e[r] = [
                function(e, r) {
                    r.exports = t;
                },
                {}
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        'object' == typeof exports && 'undefined' != typeof module
            ? (module.exports = l)
            : 'function' == typeof define && define.amd
            ? define(function() {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        d6sW: [
            function(require, module, exports) {
                !(function() {
                    document.querySelector('#contact-form').addEventListener('submit', function() {
                        event.preventDefault(),
                            console.log(
                                '\n          Name: '
                                    .concat(event.target.elements.name.value, '\n          Email: ')
                                    .concat(
                                        event.target.elements.email.value,
                                        '\n          Subject: '
                                    )
                                    .concat(
                                        event.target.elements.subject.value,
                                        '\n          Message: '
                                    )
                                    .concat(event.target.elements.message.value, '\n        ')
                            );
                    });
                    for (
                        var e = document.getElementsByClassName('modal'),
                            t = function(t) {
                                var n = e[t];
                                (document.getElementById(
                                    'modalButton-'.concat(t)
                                ).onclick = function() {
                                    n.style.display = 'block';
                                }),
                                    (document.getElementById(
                                        'modalCloseIcon-'.concat(t)
                                    ).onclick = function() {
                                        n.style.display = 'none';
                                    }),
                                    (document.getElementById(
                                        'modalCloseButton-'.concat(t)
                                    ).onclick = function() {
                                        n.style.display = 'none';
                                    });
                            },
                            n = 0;
                        n < e.length;
                        n++
                    )
                        t(n);
                    window.onclick = function(e) {
                        'modal' === e.target.className && (e.target.style.display = 'none');
                    };
                })();
            },
            {}
        ]
    },
    {},
    ['d6sW'],
    null
);
//# sourceMappingURL=main.98d01e5f.js.map