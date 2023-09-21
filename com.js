(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        "+98+": function(n, t) {
            n.exports = '<div class="container mb-5">\n  <nhbk-breadcrumb [data]="breadcrumb"></nhbk-breadcrumb>\n  <div class="row">\n    <div class="offset-xl-3 offset-md-1 col-xl-6 col-md-10">\n      <bcp-title size="md" family="demi" class="pb-4 text-center">{{ mainTitle }}</bcp-title>\n      <nhbk-item-group [itemGroup]="itemsList" isItemClick="true" (onItemClick)="selectedItem($event)"></nhbk-item-group>\n\n      <div class="pt-4 pb-4" *ngIf="informationalMessage">\n        <bcp-alert state="attention" open="true" show-close-button="false">\n          <bcp-icon slot="icon" name="info-r"></bcp-icon>\n          <bcp-paragraph slot="message" size="sm" family="regular" color="primary-700" class="py-2 pr-2 pl-1">Recuerda que algunos pagos tienen un horario restringido.</bcp-paragraph>\n        </bcp-alert>\n      </div>\n    </div>\n  </div>\n</div>'
        },
        "+Fzg": function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return c
            })), e.d(t, "b", (function() {
                return o
            })), e.d(t, "c", (function() {
                return s
            })), e.d(t, "d", (function() {
                return i
            })), e.d(t, "e", (function() {
                return l
            })), e.d(t, "f", (function() {
                return d
            })), e.d(t, "g", (function() {
                return f
            })), e.d(t, "h", (function() {
                return u
            }));
            var r = e("0EHh"),
                a = e("gOu0");

            function o(n) {
                for (var t = function(n) {
                        var t = [];
                        return n.forEach((function(n) {
                            n.data.forEach((function(n) {
                                t.push(c(n[0]))
                            }))
                        })), {
                            min: Math.min.apply(Math, t),
                            max: Math.max.apply(Math, t)
                        }
                    }(JSON.parse(JSON.stringify(n))), e = t.min, r = t.max, a = []; e <= r;) a.push(e), e += 432e6;
                return a
            }

            function i(n, t, e, o) {
                return void 0 === t && (t = !0), void 0 === e && (e = "datetime"), {
                    animation: !0,
                    shadow: !1,
                    shared: !1,
                    useHTML: !0,
                    formatter: function() {
                        if (o) {
                            var t = this.point.series.userOptions,
                                r = {
                                    title: t.title,
                                    subtitle: t.name,
                                    color: t.color,
                                    data: t.data,
                                    point: {
                                        x: this.key,
                                        y: this.y
                                    }
                                };
                            return o(r)
                        }
                        return '\n        <bcp-paragraph family="regular" size="sm" color="white">\n          ' + ("datetime" === e ? a.a.dateFormat("%d %b, %Y", this.x) + "<br>" : "") + "\n          " + this.series.name + "<br/>\n          " + n + " " + a.a.numberFormat(this.y, 2) + "\n        </bcp-paragraph>\n      "
                    },
                    backgroundColor: Object(r.a)("text"),
                    borderRadius: 15,
                    borderWidth: 0,
                    distance: 22,
                    padding: 18,
                    style: {
                        opacity: .9
                    },
                    enabled: t
                }
            }

            function c(n) {
                var t = String(n).split("-"),
                    e = Number(t[2]),
                    r = Number(t[1]) - 1,
                    a = Number(t[0]);
                return Date.UTC(e, r, a, 0, 0, 0, 0)
            }

            function s(n, t) {
                var e = n >= 0 ? "" : "-",
                    r = Math.abs(n);
                return r < 1e3 ? t + " " + e + r : r >= 1e3 && r < 1e6 ? t + " " + e + r / 1e3 + "K" : t + " " + e + r / 1e6 + "M"
            }

            function l(n, t) {
                return "left" === t.orientation ? t.label + " " + n : n + " " + t.label
            }

            function u() {
                a.a.setOptions({
                    lang: {
                        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
                        shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
                        weekdays: ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"],
                        numericSymbols: ["K", "M", "G", "T", "P", "E"],
                        decimalPoint: ".",
                        thousandsSep: ","
                    }
                })
            }

            function d(n) {
                var t = function(n) {
                        var t = [];
                        return n.forEach((function(n) {
                            n.data.forEach((function(n) {
                                t.push(n[1])
                            }))
                        })), {
                            min: Math.min.apply(Math, t),
                            max: Math.max.apply(Math, t)
                        }
                    }(JSON.parse(JSON.stringify(n))).min,
                    e = 0;
                return t < 0 && (e = t), e
            }
            var p = {
                "bcp-font-family-primary-bold": 'var(--bcp-font-family-primary-bold: "Flexo-Bold")',
                "bcp-font-family-primary-demi": 'var(--bcp-font-family-primary-demi: "Flexo-Demi")',
                "bcp-font-family-primary-regular": 'var(--bcp-font-family-primary-regular: "Flexo-Regular")'
            };

            function f(n) {
                return p[n]
            }
        },
        "+TR7": function(n, t) {
            n.exports = '<div class="row favorite-row">\n  <div class="col row-total d-flex justify-content-between">\n    <div class="add-favorite">\n      <a href="javascript:void(0)" (click)="dispatchLinkAction()"><i class="icon" [ngClass]="{\'bcp-star-f\':favorite, \'bcp-envelope-f resend-mail\': email}"></i><b>\n          <ng-content select=".link-text"></ng-content>\n        </b></a>\n    </div>\n    <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-between">\n      <div class="total-amount-label">\n        <ng-content select=".amount-label"></ng-content>\n      </div>\n      <div class="ml-md-1 quantity">\n        <ng-content select=".amount"></ng-content>\n      </div>\n    </div>\n  </div>\n\n</div>\n'
        },
        "+n/t": function(n, t, e) {
            "use strict";
            e.d(t, "f", (function() {
                return r
            })), e.d(t, "a", (function() {
                return o
            })), e.d(t, "e", (function() {
                return i
            })), e.d(t, "d", (function() {
                return c
            })), e.d(t, "c", (function() {
                return s
            })), e.d(t, "b", (function() {
                return l
            }));
            var r, a = e("IwX6");
            ! function(n) {
                n.Module = "transferencia-a-terceros", n.NewTransfer = "nueva-transferencia", n.Request = "solicitud", n.Confirmation = "confirmacion", n.Summary = "resumen"
            }(r || (r = {}));
            var o = "Recuerda que para esta operaci\xf3n se aplica tipo de cambio.",
                i = {
                    accountNotFound: {
                        title: "Mensaje de error",
                        body: "Ingresa un n\xfamero de cuenta v\xe1lido",
                        acceptText: "Entiendo",
                        ignoreBackdropClick: !0,
                        showCloseIcon: !1,
                        height: 180
                    },
                    accountNotValid: {
                        title: "Cuenta de destino inv\xe1lida",
                        body: "Verifica el n\xfamero de la cuenta e int\xe9ntalo nuevamente.",
                        acceptText: "Entiendo",
                        ignoreBackdropClick: !0,
                        showCloseIcon: !1
                    },
                    accountCTS: {
                        title: "Cuenta ingresada inv\xe1lida",
                        body: "No se pueden realizar transferencias a cuentas CTS.",
                        acceptText: "Entiendo",
                        ignoreBackdropClick: !0,
                        showCloseIcon: !1
                    },
                    collectionAccount: {
                        title: "Mensaje de error",
                        body: 'Para transferir a esta empresa ingrese a la opci\xf3n "Pagar servicio".',
                        acceptText: "Entiendo",
                        ignoreBackdropClick: !0,
                        showCloseIcon: !1
                    },
                    blockedAccount: {
                        title: "Operaci\xf3n inv\xe1lida",
                        body: "El n\xfamero de cuenta ingresado se encuentra bloqueado.",
                        acceptText: "Entiendo",
                        ignoreBackdropClick: !0,
                        showCloseIcon: !1
                    },
                    equalAccount: {
                        title: "Las cuentas ingresadas son iguales",
                        body: "La cuenta que ingresaste para recibir el dinero no puede ser la misma desde donde enviar\xe1s la transferencia. Para poder continuar con la operaci\xf3n, por favor selecciona otra cuenta.",
                        acceptText: "Entiendo",
                        ignoreBackdropClick: !0,
                        showCloseIcon: !1
                    }
                },
                c = "\xa1Transferencia a terceros BCP exitosa!",
                s = "Transferencia a terceros BCP",
                l = [{
                    text: "Inicio",
                    textBack: "Volver a Inicio",
                    href: "portal"
                }, {
                    text: "Transferir dinero",
                    textBack: "Volver a Transferir dinero",
                    href: "" + a.a.Transfers
                }, {
                    text: "A terceros BCP",
                    textBack: "Volver a Terceros",
                    href: a.a.Transfers + "/" + r.Module
                }]
        },
        "/PTb": function(n, t) {
            n.exports = '<bcp-title class="main-title" size="sm" family="demi">{{ title | translate }}</bcp-title>\n<div class="d-xl-flex">\n    <div class="text-container">\n        <div class="d-flex" *ngFor="let item of textList">\n            <bcp-icon name="check-r" color="primary-300"></bcp-icon>\n            <bcp-paragraph class="item-text" size="md" family="regular">{{ item | translate }}</bcp-paragraph>\n        </div>\n    </div>\n    <bcp-img alt="Imagen de beneficios" class="d-flex justify-content-center mb-3 mb-xl-0" height="160" src="https://stbcpzonasegura.viabcp.com/assets/img/benefits.svg" width="160"></bcp-img>    \n</div>\n'
        },
        "/s0H": function(n, t, e) {
            "use strict";
            var r, a;
            e.d(t, "b", (function() {
                    return r
                })), e.d(t, "a", (function() {
                    return a
                })),
                function(n) {
                    n.USD = "US$", n.PEN = "S/"
                }(r || (r = {})),
                function(n) {
                    n.USD = "1001", n.PEN = "0001"
                }(a || (a = {}))
        },
        "0EHh": function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return a
            }));
            var r = {
                "primary-900": "var(--primary-900, #001f5a)",
                "primary-800": "var(--primary-800, #002473)",
                "primary-700": "var(--primary-700, #002a8d)",
                "primary-700-25": "var(--primary-700-25, rgba(0, 42, 141, 0.25))",
                "primary-600": "var(--primary-600, #002da0)",
                "primary-500": "var(--primary-500, #0030b3)",
                "primary-400": "var(--primary-400, #0a47f0)",
                "primary-300": "var(--primary-300, #3d77ff)",
                "primary-200": "var(--primary-200, #70a9ff)",
                "primary-100": "var(--primary-100, #b3d6ff)",
                "primary-050": "var(--primary-050, #d1e6ff)",
                "primary-040": "var(--primary-040, #ebf4ff)",
                "secondary-900": "var(--secondary-900, #8f1100)",
                "secondary-800": "var(--secondary-800, #b02b00)",
                "secondary-700": "var(--secondary-700, #ca4500)",
                "secondary-600": "var(--secondary-600, #e45e00)",
                "secondary-500": "var(--secondary-500, #ff7800)",
                "secondary-400": "var(--secondary-400, #ff961f)",
                "secondary-300": "var(--secondary-300, #ffa733)",
                "secondary-200": "var(--secondary-200, #ffbb5c)",
                "secondary-200-40": "var(--secondary-200-40, rgba(255, 187, 92, 0.4))",
                "secondary-200-20": "var(--secondary-200-20, rgba(255, 187, 92, 0.2))",
                "secondary-100": "var(--secondary-100, #ffd89f)",
                "secondary-050": "var(--secondary-050, #ffe8c7)",
                "secondary-040": "var(--secondary-040, #fff6e6)",
                "background-900": "var(--background-900, #264b78)",
                "background-800": "var(--background-800, #3c5d86)",
                "background-700": "var(--background-700, #527094)",
                "background-600": "var(--background-600, #6982a3)",
                "background-500": "var(--background-500, #7f95b1)",
                "background-400": "var(--background-400, #95a7bf)",
                "background-300": "var(--background-300, #acbace)",
                "background-200": "var(--background-200, #c2ccdc)",
                "background-100": "var(--background-100, #d8dfea)",
                "background-050": "var(--background-050, #eaeff5)",
                "background-040": "var(--background-040, #f2f4f8)",
                error: "var(--error, #e30425)",
                "error-light": "var(--error-light, #fff2f5)",
                "error-20": "var(--error-20, rgba(227, 4, 37, 0.2))",
                "error-close": "var(--error-close, #fd9ba9)",
                success: "var(--success, #6ac90f)",
                "success-light": "var(--success-light, #f4ffea)",
                "success-dark": "var(--success-dark, #37a500)",
                "success-20": "var(--success-20, rgba(106, 201, 15, 0.2))",
                "success-close": "var(--success-close, #d8fab8)",
                attention: "var(--attention, #3f78bf)",
                "attention-light": "var(--attention-light, #f5f8ff)",
                "attention-20": "var(--attention-20, rgba(63, 120, 191, 0.2))",
                "attention-close": "var(--attention-close, #c6d7ec)",
                alert: "var(--alert, #ffcb1f)",
                "alert-light": "var(--alert-light, #fffded)",
                "alert-20": "var(--alert-20, rgba(255, 203, 31, 0.2))",
                "alert-close": "var(--alert-close, #ffedb3)",
                text: "var(--text, #202e44)",
                white: "var(--white, #ffffff)",
                "complementary-900": "var(--complementary-900, #003b34)",
                "complementary-800": "var(--complementary-800, #0b4d45)",
                "complementary-700": "var(--complementary-700, #005e53)",
                "complementary-600": "var(--complementary-600, #008071)",
                "complementary-500": "var(--complementary-500, #1f9183)",
                "complementary-400": "var(--complementary-400, #0aa693)",
                "complementary-300": "var(--complementary-300, #08bda6)",
                "complementary-200": "var(--complementary-200, #65cfc1)",
                "complementary-100": "var(--complementary-100, #a2ebe2)",
                "complementary-050": "var(--complementary-050, #d4faf5)",
                "complementary-040": "var(--complementary-040, #e8fcf9)",
                "analogous-700": "var(--analogous-700, #0759a4)",
                "analogous-600": "var(--analogous-600, #5625b3)",
                "analogous-400": "var(--analogous-400, #48a3f3)",
                "analogous-300": "var(--analogous-300, #9877d3)",
                "analogous-200": "var(--analogous-200, #a2dbff)",
                "analogous-100": "var(--analogous-100, #d2c1f0)",
                "onsurface-900": "var(--onsurface-900, #4d5b70)",
                "onsurface-800": "var(--onsurface-800, #606c7f)",
                "onsurface-700": "var(--onsurface-700, #737e8e)",
                "onsurface-600": "var(--onsurface-600, #868f9e)",
                "onsurface-500": "var(--onsurface-500, #99a1ad)",
                "onsurface-400": "var(--onsurface-400, #acb2bd)",
                "onsurface-300": "var(--onsurface-300, #bfc4cc)",
                "onsurface-200": "var(--onsurface-200, #d2d5dc)",
                "onsurface-100": "var(--onsurface-100, #e5e7eb)",
                "onsurface-050": "var(--onsurface-050, #eff0f2)",
                "onsurface-040": "var(--onsurface-040, #f6f6f7)",
                "white-90": "var(--white-90, rgba(255, 255, 255, 0.9))",
                "white-80": "var(--white-80, rgba(255, 255, 255, 0.8))",
                "white-70": "var(--white-70, rgba(255, 255, 255, 0.7))",
                "white-60": "var(--white-60, rgba(255, 255, 255, 0.6))",
                "white-50": "var(--white-50, rgba(255, 255, 255, 0.5))",
                "white-40": "var(--white-40, rgba(255, 255, 255, 0.4))",
                "white-30": "var(--white-30, rgba(255, 255, 255, 0.3))",
                "white-20": "var(--white-20, rgba(255, 255, 255, 0.2))",
                "white-10": "var(--white-10, rgba(255, 255, 255, 0.1))",
                "white-0": "var(--white-0, rgba(255, 255, 255, 0))",
                "text-90": "var(--text-90, rgba(32, 46, 68, 0.9))",
                "text-80": "var(--text-80, rgba(32, 46, 68, 0.8))",
                "text-70": "var(--text-70, rgba(32, 46, 68, 0.7))",
                "text-60": "var(--text-60, rgba(32, 46, 68, 0.6))",
                "text-50": "var(--text-50, rgba(32, 46, 68, 0.5))",
                "text-40": "var(--text-40, rgba(32, 46, 68, 0.4))",
                "text-30": "var(--text-30, rgba(32, 46, 68, 0.3))",
                "text-20": "var(--text-20, rgba(32, 46, 68, 0.2))",
                "text-10": "var(--text-10, rgba(32, 46, 68, 0.1))",
                "text-0": "var(--text-0, rgba(32, 46, 68, 0))",
                "analogous-01-900": "var(--analogous-01-900, #220854)",
                "analogous-01-800": "var(--analogous-01-800, #35117a)",
                "analogous-01-700": "var(--analogous-01-700, #451a96)",
                "analogous-01-600": "var(--analogous-01-600, #5625b3)",
                "analogous-01-500": "var(--analogous-01-500, #6d3acd)",
                "analogous-01-400": "var(--analogous-01-400, #7b52c5)",
                "analogous-01-300": "var(--analogous-01-300, #9877d3)",
                "analogous-01-200": "var(--analogous-01-200, #b59ce2)",
                "analogous-01-100": "var(--analogous-01-100, #d2c1f0)",
                "analogous-01-050": "var(--analogous-01-050, #ece4fc)",
                "analogous-01-040": "var(--analogous-01-040, #f4f0fc)",
                "analogous-02-900": "var(--analogous-02-900, #002c5a)",
                "analogous-02-800": "var(--analogous-02-800, #003873)",
                "analogous-02-700": "var(--analogous-02-700, #00448c)",
                "analogous-02-600": "var(--analogous-02-600, #005aa8)",
                "analogous-02-500": "var(--analogous-02-500, #1672b8)",
                "analogous-02-400": "var(--analogous-02-400, #127dc9)",
                "analogous-02-300": "var(--analogous-02-300, #1f95de)",
                "analogous-02-200": "var(--analogous-02-200, #6fb7e3)",
                "analogous-02-100": "var(--analogous-02-100, #abd9f5)",
                "analogous-02-050": "var(--analogous-02-050, #d2eefc)",
                "analogous-02-040": "var(--analogous-02-040, #e8f6fc)",
                "black-80": "var(--black-80, rgba(0, 0, 0, 0.8))",
                "black-70": "var(--black-70, rgba(0, 0, 0, 0.7))",
                "black-60": "var(--black-60, rgba(0, 0, 0, 0.6))",
                "black-50": "var(--black-50, rgba(0, 0, 0, 0.5))",
                "black-40": "var(--black-40, rgba(0, 0, 0, 0.4))",
                "black-30": "var(--black-30, rgba(0, 0, 0, 0.3))",
                "black-20": "var(--black-20, rgba(0, 0, 0, 0.2))",
                "black-10": "var(--black-10, rgba(0, 0, 0, 0.1))",
                "black-0": "var(--black-0, rgba(0, 0, 0, 0))",
                black: "var(--black, #000000)"
            };

            function a(n) {
                return r[n]
            }
        },
        "3xIc": function(n, t, e) {
            "use strict";
            var r = e("DtyJ");
            e.d(t, "a", (function() {
                return r.a
            }))
        },
        "4OBB": function(n, t) {
            n.exports = '.breadcrumb {\n  width: 100%;\n  background: none;\n  margin-top: 21px;\n  padding: 0px;\n  display: flex; }\n  .breadcrumb .breadcrumb-item:nth-child(2)::before {\n    content: "";\n    background: none; }\n  .breadcrumb .breadcrumb-item:nth-child(3)::before {\n    content: "";\n    background: none; }\n  .breadcrumb .first-breadcrumb {\n    font-family: Flexo;\n    font-size: 14px;\n    font-style: normal;\n    line-height: 1.71;\n    font-weight: bold;\n    color: #2cc0d5;\n    cursor: pointer; }\n  .breadcrumb .second-item-breadcrumb {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    display: inline-block;\n    font-family: Flexo;\n    font-size: 14px;\n    font-style: normal;\n    line-height: 1.71;\n    font-weight: bold;\n    color: #2cc0d5; }\n  .breadcrumb .last-crumb-hidden {\n    max-width: 100%;\n    overflow: hidden; }\n  .breadcrumb .last-crumb {\n    display: inline-block;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    text-align: left;\n    color: #080808; }\n  .breadcrumb .size-angle {\n    font-size: 10px;\n    margin-right: 1px;\n    margin-left: 5px;\n    color: #080808; }\n  @media (min-width: 768px) {\n  .breadcrumb {\n    width: 100%;\n    background: none; } }\n  @media (min-width: 321px) and (max-width: 767px) {\n  .breadcrumb {\n    width: 100%;\n    background: none;\n    text-align: center; }\n    .breadcrumb .breadcrumb-item:nth-child(3)::before {\n      content: "";\n      background: none;\n      text-overflow: ellipsis; } }\n'
        },
        "4Rml": function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return i
            }));
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("gIcY"),
                i = function() {
                    function n() {
                        this.taxAssocieatedDescription = "", this.penaltyFormGroup = new o.e({
                            taxAssocieatedControlName: new o.d("", [o.l.required, o.l.minLength(4)])
                        })
                    }
                    return n.prototype.cleanForm = function() {
                        this.penaltyFormGroup = new o.e({
                            taxAssocieatedControlName: new o.d("", [o.l.required, o.l.minLength(4)])
                        })
                    }, n = r.c([Object(a.B)()], n)
                }()
        },
        "637R": function(n, t) {
            n.exports = ":host .main-title {\n  margin-bottom: 32px; }\n\n:host .item-text {\n  padding: 0 0 10px 5px; }\n"
        },
        "6yu0": function(n, t) {
            n.exports = ".l-banner-protected {\n  background-color: var(--primary-300);\n  border-radius: 8px;\n  padding: 0px 16px;\n  height: 80px;\n  cursor: pointer; }\n  .l-banner-protected .img-banner {\n    background-image: url('https://stbcpzonasegura.viabcp.com/assets/img/banner-protect-card.svg');\n    background-repeat: no-repeat;\n    width: 64px;\n    height: 64px; }\n"
        },
        AP8s: function(n, t) {
            n.exports = '<div class="card origin-card">\n    <div class="card-body">\n      <div class="container">\n        <div class="row">\n          <div class="col-12 title">\n            <i class="icon bcp-list-f icon-card"></i>\n            <span>\n              <ng-content select="title-card"></ng-content>\n            </span>\n          </div>\n        </div>\n        <div class="row account-data-row">\n          <div class="col-sm-12 col-md-6">\n            <div>\n              <span class="account-label">\n                <ng-content select="label-account"></ng-content>\n              </span>\n            </div>\n            <div>\n              <div class="account-number">\n                <ng-content select="account-name"></ng-content>\n                <ng-content select="account-number"></ng-content>\n              </div>\n            </div>\n          </div>\n          <div class="col-sm-12 col-md-6">\n            <div>\n              <span class="account-label">\n                <ng-content select="label-email"></ng-content>\n              </span>\n            </div>\n            <div>\n              <div class="d-mail">\n                <ng-content select="email"></ng-content>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row commission-total-row">\n          <div class="col-sm-12 col-md-6">\n            <div>\n              <span class="amount-transfer-label">\n                <ng-content select="label-amount-transfer"></ng-content>\n              </span>\n            </div>\n            <div>\n              <div class="d-amount-transfer">\n                <ng-content select="amount-transfer"></ng-content>\n              </div>\n            </div>\n          </div>\n          <div class="col-sm-12 col-md-6">\n            <div>\n              <span class="commission-label">\n                <ng-content select="label-commission"></ng-content>\n              </span>\n            </div>\n            <div>\n              <div class="d-commission">\n                <ng-content select="commission"></ng-content>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row account-data-row">\n          <div class="col-sm-12 col-md-6" *ngIf="showEmailLabel">\n            <div>\n              <span class="account-label">\n                <ng-content select="label-email-constancy"></ng-content>\n              </span>\n            </div>\n            <div>\n              <span class="account-number">\n                <ng-content select="email-constancy"></ng-content>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n'
        },
        OHie: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("Ip0R"),
                i = function() {
                    function n() {}
                    return n = r.c([Object(a.o)({
                        selector: "nhbk-layout-container",
                        template: e("fnyw")
                    })], n)
                }();
            e.d(t, "a", (function() {
                return c
            }));
            var c = function() {
                function n() {}
                return n = r.c([Object(a.K)({
                    declarations: [i],
                    exports: [i],
                    imports: [o.b]
                })], n)
            }()
        },
        PHb1: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return p
            }));
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("t/Na"),
                i = e("AytR"),
                c = e("67Y/"),
                s = e("9Z1F"),
                l = e("MCKX"),
                u = e("GFTY"),
                d = e("UsZ5"),
                p = function() {
                    function n(n) {
                        this.http = n, this._url = i.a.API_URL_GATEWAY + "/ux-nhbk-account-overview-v1/channel/nhbk/v1/account-overview/transactions/search"
                    }
                    return n.prototype.getAccountDetailTransactions = function(n) {
                        var t = Object(l.a)(n, u.c.ACCOUNT);
                        return this.http.post(this._url, t).pipe(Object(c.a)((function(n) {
                            return n
                        })), Object(s.a)((function(n) {
                            throw new d.a(n.toString(), "ERROR")
                        })))
                    }, n = r.c([Object(a.B)(), r.f("design:paramtypes", [o.b])], n)
                }()
        }
    }
]);