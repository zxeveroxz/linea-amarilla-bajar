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
        Bv4f: function(n, t) {
            n.exports = '<li>\n    <h6 class="dropdown-header text-primary">{{title}}</h6>\n    <ng-content></ng-content>\n</li>'
        },
        D10I: function(n, t, e) {
            "use strict";
            e.d(t, "c", (function() {
                return r
            })), e.d(t, "a", (function() {
                return a
            })), e.d(t, "b", (function() {
                return o
            }));
            var r = [{
                    title: "Pagar servicio",
                    icon: "water-drop-r",
                    href: "portal/pago-de-servicios/selecciona-tu-tipo-de-pago"
                }, {
                    title: "Pagar tarjetas",
                    icon: "card-credit-r",
                    href: "portal/pagos/tarjetas"
                }, {
                    title: "Pagar letras y facturas",
                    icon: "document-r",
                    href: "portal/pago-letras-y-facturas"
                }, {
                    title: "Pagar cr\xe9ditos",
                    icon: "hand-holding-r",
                    href: "portal/pagos/creditos"
                }],
                a = [{
                    text: "Inicio",
                    textBack: "Volver a Inicio",
                    href: "portal"
                }, {
                    text: "Realizar pagos",
                    textBack: "Volver a Realizar pagos",
                    href: "portal/pagos"
                }],
                o = {
                    title: "Operaci\xf3n fuera de horario",
                    body: "",
                    acceptText: "Volver a Realizar pagos",
                    cancelText: "",
                    showCloseIcon: !1,
                    ignoreBackdropClick: !0
                }
        },
        EK4o: function(n, t) {
            n.exports = ".resend-mail {\n  transform: translateY(2px); }\n\n:host .favorite-row {\n  margin-top: 32px; }\n\n:host .favorite-row .row-total {\n    justify-content: space-between;\n    -webkit-box-pack: justify; }\n\n:host .favorite-row .row-total .add-favorite a {\n      color: #2CC0D5;\n      text-decoration: none;\n      display: flex;\n      flex-direction: row; }\n\n:host .favorite-row .row-total .add-favorite a i {\n        line-height: 1.6;\n        margin-right: 8px; }\n\n:host .favorite-row .row-total .total-amount-label {\n      color: #002D87;\n      font-size: 16px;\n      font-stretch: normal;\n      font-style: normal;\n      font-weight: bold;\n      letter-spacing: normal;\n      margin-bottom: 4px; }\n\n:host .favorite-row .row-total .quantity {\n      color: black;\n      font-size: 24px;\n      font-stretch: normal;\n      font-style: normal;\n      font-weight: bold;\n      letter-spacing: normal;\n      transform: translateY(-7px); }\n\n@media screen and (max-width: 481px) {\n  :host .favorite-row .add-favorite a {\n    justify-content: center;\n    margin-bottom: 24px;\n    margin-top: 16px; }\n  :host .favorite-row .row-total {\n    display: flex;\n    flex-direction: column-reverse;\n    text-align: -webkit-center; } }\n"
        },
        IRmI: function(n, t) {
            n.exports = ""
        },
        IyFa: function(n, t, e) {
            "use strict";
            e.d(t, "b", (function() {
                return o
            })), e.d(t, "a", (function() {
                return i
            }));
            var r = e("tdfY"),
                a = "" + e("AytR").a.ID_FORM_MEDALLIA;

            function o(n) {
                i(), n && n.deleteCookie(r.a), window.AxPzB2845 && delete window.AxPzB2845
            }

            function i() {
                var n = window.KAMPYLE_ONSITE_SDK;
                n && (n.isSurveyDisplayed(a) && n.closeForm(a))
            }
        },
        KfU9: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("Ip0R"),
                i = function() {
                    function n() {
                        this.hasClosedSession = !1, this.logoutAction = new a.w
                    }
                    return n.prototype.ngOnInit = function() {}, n.prototype.closeSession = function() {
                        this.logoutAction.emit()
                    }, r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "hasClosedSession", void 0), r.c([Object(a.R)(), r.f("design:type", Object)], n.prototype, "logoutAction", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-navbar-light",
                        template: e("j91W"),
                        styles: [e("YBI/")]
                    }), r.f("design:paramtypes", [])], n)
                }();
            e.d(t, "a", (function() {
                return c
            }));
            var c = function() {
                function n() {}
                return n = r.c([Object(a.K)({
                    declarations: [i],
                    exports: [i],
                    imports: [o.b],
                    schemas: [a.j]
                })], n)
            }()
        },
        Lnil: function(n, t) {
            n.exports = ".logo {\n  float: left;\n  padding: 10px; }\n\n.titleMenu {\n  font-size: 16px;\n  font-weight: bold;\n  margin-left: 11px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 2.25;\n  letter-spacing: normal;\n  text-align: left;\n  cursor: pointer; }\n\n.event-hover:hover {\n  color: #0063bd; }\n\n.menu-selected {\n  color: #012d74;\n  outline: none; }\n\n.p-arrow {\n  float: right;\n  margin-right: 17px;\n  margin-top: 16px;\n  width: 10px;\n  height: 10px;\n  font-size: 10px; }\n\nul {\n  list-style-type: none; }\n\n.selected-background {\n  background: #f8f8f8;\n  color: #012d74; }\n\n.nav-link {\n  width: 223px;\n  color: #0063bd;\n  font-family: Flexo;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  text-align: left;\n  color: #012d74; }\n\n.nav-item {\n  cursor: pointer; }\n"
        },
        MpvE: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            })), e.d(t, "d", (function() {
                return a
            })), e.d(t, "c", (function() {
                return o
            })), e.d(t, "b", (function() {
                return i
            }));
            var r = {
                    path: "",
                    loadChildren: "./view/type/sunat-type.module#SunatTypeModule"
                },
                a = {
                    path: "tributos",
                    loadChildren: "./view/tax/tax.module#TaxModule"
                },
                o = {
                    path: "multa",
                    loadChildren: "./view/penalty/penalty.module#PenaltyModule"
                },
                i = {
                    path: "fraccionamiento",
                    loadChildren: "./view/division/division.module#DivisionModule"
                }
        },
        N9xM: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                function n() {}
                return n.numberFormat = function(t, e) {
                    return "integer" === e ? n.numberToInteger(t) : n.numberToDecimal(t)
                }, n.numberToInteger = function(t) {
                    var e = Number(t).toFixed(0);
                    return n.thousandsSeparator(e.toString())
                }, n.numberToDecimal = function(t) {
                    var e = Number(t).toFixed(2);
                    return n.thousandsSeparator(e)
                }, n.thousandsSeparator = function(n, t) {
                    return void 0 === t && (t = ","), "number" == typeof n && (n = "" + n), n.replace(/\B(?=(\d{3})+(?!\d))/g, t)
                }, n
            }()
        },
        NzfB: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("Ip0R"),
                i = function() {
                    function n() {}
                    return n.prototype.onPrimaryButtonClick = function() {
                        this.errorDetail.acceptEvent && this.errorDetail.acceptEvent()
                    }, n.prototype.onSecondaryButtonClick = function() {
                        this.errorDetail.secondaryEvent && this.errorDetail.secondaryEvent()
                    }, r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "errorDetail", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-image-error",
                        template: e("xqYJ"),
                        styles: [e("ODon")]
                    })], n)
                }();
            e.d(t, "a", (function() {
                return s
            }));
            var c = [i],
                s = function() {
                    function n() {}
                    return n = r.c([Object(a.K)({
                        declarations: c,
                        exports: c,
                        imports: [o.b],
                        schemas: [a.j]
                    })], n)
                }()
        },
        ODon: function(n, t) {
            n.exports = ".error-container {\n  max-width: 600px;\n  margin: auto; }\n\n.image-size {\n  height: 140px; }\n\n.width-btn {\n  width: 250px; }\n\n@media (min-width: 768px) {\n  .image-size {\n    height: 180px; } }\n"
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
        },
        PZi5: function(n, t) {
            n.exports = ".l-open-account {\n  background-color: var(--white);\n  border-radius: 8px;\n  box-shadow: 0 0 4px 0 rgba(82, 112, 148, 0.2), 0 1px 1px 0 rgba(82, 112, 148, 0.12), 0 1px 1px 0 rgba(82, 112, 148, 0.14);\n  padding: 12px 16px 12px; }\n  .l-open-account__btn {\n    width: 74px; }\n"
        },
        QITF: function(n, t) {
            n.exports = '<div (click)="redirecToProtectCard()" class="l-banner-protected d-flex justify-content-between align-items-center mb-3">\n  <div class="d-flex align-items-center">\n    <div class="img-banner mt-3"></div>\n    <bcp-paragraph class="pl-1 pl-md-0" family="regular" size="md" color="background-040">\n      <strong>Protege tus Tarjetas</strong> <br> Por solo <strong>S/ 12.99</strong> al mes inc. IGV</bcp-paragraph>\n    </div>\n  <bcp-icon name="angle-right-r" color="background-040"></bcp-icon>\n</div>'
        },
        Qv8p: function(n, t, e) {
            "use strict";
            var r;
            e.d(t, "b", (function() {
                    return r
                })), e.d(t, "c", (function() {
                    return a
                })), e.d(t, "a", (function() {
                    return o
                })),
                function(n) {
                    n.Module = "transferencia-propia", n.NewTransfer = "nueva-transferencia", n.Confirmation = "confirmacion", n.Summary = "resumen"
                }(r || (r = {}));
            var a = "\xa1Transferencia entre mis cuentas exitosa!",
                o = "Transferencia entre mis cuentas"
        },
        RfBm: function(n, t, e) {
            "use strict";
            var r, a;
            e.d(t, "b", (function() {
                    return r
                })), e.d(t, "d", (function() {
                    return a
                })), e.d(t, "a", (function() {
                    return i
                })), e.d(t, "c", (function() {
                    return o
                })),
                function(n) {
                    n.DNI = "1", n.CE = "3", n.RUC = "6", n.PAS = "4"
                }(r || (r = {})),
                function(n) {
                    n.DNI = "DNI", n.CE = "CE", n.RUC = "RUC", n.PAS = "PAS"
                }(a || (a = {}));
            var o, i = {
                1: "DNI",
                3: "CE",
                4: "PAS",
                6: "RUC"
            };
            ! function(n) {
                n[n.DNI = 8] = "DNI", n[n.CE = 11] = "CE", n[n.RUC = 11] = "RUC", n[n.PAS = 11] = "PAS"
            }(o || (o = {}))
        },
        TpkN: function(n, t) {
            n.exports = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n  <a class="navbar-brand" href="#">\n      <img src="https://stbcpzonasegura.viabcp.com/assets/img/logo.svg" width="155" height="30" alt="">            \n  </a>\n  <ng-content></ng-content>\n</nav>'
        },
        "UJ+L": function(n, t) {
            n.exports = ""
        },
        Ucpj: function(n, t) {
            n.exports = ".origin-card {\n  border-radius: 4px;\n  box-shadow: 0 4px 6px 0 rgba(23, 43, 77, 0.1);\n  border: solid 1px #ededed;\n  width: 100%; }\n  .origin-card .title {\n    font-size: 24px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    color: #002D87; }\n  .origin-card .title .icon-card {\n      margin-top: 1px;\n      display: inline-block; }\n  .origin-card .title .account-icon {\n      display: inline; }\n  .origin-card .account-data-row {\n    margin-top: 16px;\n    padding-left: 32px;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: normal; }\n  .origin-card .commission-total-row {\n    margin-top: 16px;\n    padding-left: 32px;\n    font-style: normal;\n    font-stretch: normal;\n    letter-spacing: normal; }\n  @media screen and (max-width: 768px) {\n  .origin-card {\n    margin-top: 40px; }\n    .origin-card .title {\n      margin-left: -16px; }\n      .origin-card .title .icon-card {\n        display: none; }\n      .origin-card .title .account-icon {\n        display: none; }\n    .origin-card .account-data-row {\n      margin-left: -28px;\n      padding-left: 0px;\n      margin-top: 16px; }\n      .origin-card .account-data-row .account-number {\n        display: flex;\n        margin-bottom: 15px;\n        flex-direction: column; }\n      .origin-card .account-data-row .d-mail {\n        display: flex;\n        flex-direction: column; }\n    .origin-card .commission-total-row {\n      margin-left: -28px;\n      padding-left: 0px;\n      margin-top: 16px; }\n      .origin-card .commission-total-row .d-amount-transfer {\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 15px; }\n      .origin-card .commission-total-row .d-commission {\n        display: flex;\n        flex-direction: column; } }\n  .origin-card .account-data-row .account-label, .origin-card .commission-total-row .amount-transfer-label, .origin-card .commission-total-row .commission-label {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.71;\n  color: #002D87; }\n  .origin-card .account-data-row .account-number, .origin-card .account-data-row .d-mail, .origin-card .commission-total-row .d-amount-transfer, .origin-card .commission-total-row .d-commission {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1.33;\n  color: #282828; }\n"
        },
        Vg94: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                function n() {
                    this.envVariables = {
                        assetBasePath: "/assets"
                    }
                }
                return n.getInstance = function() {
                    return n.instance || (n.instance = new n), n.instance
                }, n.prototype.getEnvValue = function(n, t) {
                    return this.envVariables[n] || t
                }, n
            }()
        },
        WihW: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return s
            }));
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("gIcY"),
                i = e("caY8"),
                c = e("SozT"),
                s = function() {
                    function n() {
                        this.taxFormGroup = new o.e({
                            weekControlName: new o.d("", o.l.required)
                        })
                    }
                    return n.prototype.cleanForm = function() {
                        this.taxFormGroup = new o.e({
                            weekControlName: new o.d("", o.l.required)
                        })
                    }, n.prototype.prepareWeeks = function(n) {
                        return n ? -1 !== c.h.indexOf(n.sunatTributeId) ? c.b : -1 !== c.g.indexOf(n.sunatTributeId) ? c.f : [] : []
                    }, n.prototype.isValidateWeek = function(n, t) {
                        return !(!t || "undefined" === n || n.length < 6) && (-1 !== ["2011", "2031", "2041"].indexOf(t.sunatTributeId) ? this.isValidatePeriod2011And2031And2041(n) : "8131" === t.sunatTributeId ? this.isValidatePeriod8131(n) && "13" !== n.substring(2, 0) : "8132" === t.sunatTributeId && this.isValidatePeriod8132(n))
                    }, n.prototype.isValidatePeriod2011And2031And2041 = function(n) {
                        return !Object(i.b)(n, "012009")
                    }, n.prototype.isValidatePeriod8131 = function(n) {
                        return !Object(i.b)("032004", n)
                    }, n.prototype.isValidatePeriod8132 = function(n) {
                        return !Object(i.b)("032004", n)
                    }, n = r.c([Object(a.B)()], n)
                }()
        },
        Y0Z0: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("t/Na"),
                i = e("67Y/"),
                c = e("9Z1F"),
                s = e("F/XL"),
                l = e("XlPw"),
                u = e("AytR"),
                d = e("vLmd"),
                p = function() {
                    function n() {
                        this.userPreferencesPageLink = "/portal/perfil/datos-personales", this.navbarStructure = [{
                            categoryId: "HKINICIO",
                            href: "/portal/mis-productos",
                            icon: "house-r",
                            label: "Inicio"
                        }, {
                            categoryId: "HKOPERATIONS",
                            icon: "transaction-r",
                            label: "Operaciones",
                            options: [{
                                optionId: "HKTRANSFERMONEY",
                                href: "portal/transferencias",
                                icon: "transaction-r",
                                label: "Transferir dinero"
                            }, {
                                optionId: "HKSENDMONEYTOPHONE",
                                href: d.b.INTEROPERABILITY,
                                icon: "paper-plane-r",
                                label: "Yapear a celular"
                            }, {
                                optionId: "HKPAYMENTS",
                                href: "/portal/pagos",
                                icon: "card-credit-r",
                                label: "Realizar pagos"
                            }, {
                                optionId: "HKACCOUNTSTATEMENT",
                                href: "/portal/estado-de-cuenta",
                                icon: "document-b",
                                label: "Ver estados de cuenta"
                            }]
                        }, {
                            categoryId: "HKDISCOVER",
                            icon: "compass-r",
                            label: "Explora",
                            options: [{
                                optionId: "HKSALARYADVANCE",
                                href: "/portal/adelanto-de-sueldo",
                                icon: "atm-r",
                                label: "Adelanto de sueldo"
                            }, {
                                optionId: "HKCASHDISPOSITION",
                                href: "/portal/disposicion-de-efectivo",
                                icon: "bill-r",
                                label: "Disposici\xf3n de efectivo"
                            }, {
                                optionId: "HKMUTUALFUNDS",
                                href: "/portal/error/fondos-mutuos",
                                icon: "money-bag-soles-r",
                                label: "Fondos mutuos"
                            }]
                        }, {
                            categoryId: "HKPREFERENCES",
                            icon: "gear-r",
                            label: "Preferencias",
                            options: [{
                                optionId: "HKFAVORITESMANAGEMENT",
                                href: "/portal/perfil/configuracion/mis-favoritos",
                                icon: "star-r",
                                label: "Administrador de favoritos"
                            }, {
                                optionId: "HKEDITPRODUCTS",
                                href: "/portal/perfil/configuracion/administrar-productos",
                                icon: "pen-r",
                                label: "Administrador de productos"
                            }, {
                                optionId: "HKCHALLENGEQUESTIONS",
                                href: "/portal/perfil/seguridad/actualizacion-de-preguntas-reto",
                                icon: "question-circle-r",
                                label: "Preguntas de seguridad"
                            }, {
                                optionId: "HKCHANGEPASSWORD",
                                href: "/portal/perfil/seguridad/cambio-clave",
                                icon: "lock-r",
                                label: "Cambio de clave internet"
                            }, {
                                optionId: "HKSENDPROOF",
                                href: "/portal/perfil/datos-personales",
                                icon: "mail-r",
                                label: "Correo/Env\xedo de Constancia"
                            }]
                        }]
                    }
                    return n.prototype.getNavbarStructure = function() {
                        return this.navbarStructure
                    }, n.prototype.getPreferencesPageLink = function() {
                        return this.userPreferencesPageLink
                    }, n = r.c([Object(a.B)({
                        providedIn: "root"
                    })], n)
                }(),
                f = e("ZYCi"),
                b = e("cPMC");
            e.d(t, "a", (function() {
                return m
            }));
            var m = function() {
                function n(n, t, e, r) {
                    this._http = n, this.navbarConfig = t, this.router = e, this.productStorageService = r, this.endpoint = u.a.API_URL_GATEWAY + "/ux-nhbk-feature-flag-v1/channel/nhbk/v1/feature-flag"
                }
                return n.prototype.callFeatureFlag = function() {
                    var n = this.productStorageService.getByKeyOfStorage("featureFlag");
                    return n ? Object(s.a)(n) : this._http.get(this.endpoint)
                }, n.prototype.get = function() {
                    var n = this;
                    return this.callFeatureFlag().pipe(Object(i.a)((function(t) {
                        n.productStorageService.saveDataByKeyInStorage(t, "featureFlag");
                        var e = [],
                            r = n.navbarConfig.getNavbarStructure(),
                            a = t.map((function(n) {
                                return {
                                    channelCode: n.channelCode,
                                    featureFlagId: n.featureFlagId,
                                    isPymesAllowed: n.customer.isPymesAllowed,
                                    segment: n.customer.segment,
                                    code: n.feature.code,
                                    description: n.feature.description,
                                    status: n.status.code,
                                    displayMessage: n.displayMessage,
                                    href: "",
                                    icon: "",
                                    label: ""
                                }
                            }));
                        return r.forEach((function(t) {
                            var o = a.filter((function(n) {
                                return n.code === t.categoryId
                            }));
                            o[0].href = t.href, o[0].icon = t.icon, o[0].options = n.getOptions(t, a), o[0].label = t.label;
                            var i = n.returnCategory(o[0], n.getOptions(t, a));
                            1 === r.filter((function(n) {
                                return n.categoryId === i.code
                            })).length && e.push(i)
                        })), e
                    })), Object(c.a)((function(n) {
                        return Object(l.a)(n)
                    })))
                }, n.prototype.getOptions = function(n, t) {
                    var e = this,
                        r = [];
                    return n.options && n.options.map((function(a) {
                        var o = t.filter((function(n) {
                            return n.code === a.optionId
                        }));
                        if (1 === o.length) {
                            o[0].href = a.href, o[0].icon = a.icon, o[0].label = a.label;
                            var i = e.returnOption(o[0]);
                            1 === n.options.filter((function(n) {
                                return n.optionId === i.code
                            })).length && r.push(i)
                        }
                    })), r
                }, n.prototype.returnOption = function(n) {
                    return {
                        channelCode: n.channelCode,
                        featureFlagId: n.featureFlagId,
                        isPymesAllowed: n.isPymesAllowed,
                        segment: n.segment,
                        code: n.code,
                        description: n.description,
                        status: n.status,
                        displayMessage: n.displayMessage,
                        href: n.href,
                        icon: n.icon,
                        optionName: "",
                        label: n.label
                    }
                }, n.prototype.returnCategory = function(n, t) {
                    return {
                        channelCode: n.channelCode,
                        featureFlagId: n.featureFlagId,
                        isPymesAllowed: n.isPymesAllowed,
                        segment: n.segment,
                        code: n.code,
                        description: n.description,
                        status: n.status,
                        displayMessage: n.displayMessage,
                        href: n.href,
                        icon: n.icon,
                        categoryName: "",
                        options: t || [],
                        showOptionsInUx: !1,
                        label: n.label
                    }
                }, n.prototype.getMyPerfilUrl = function() {
                    this.router.navigate([this.navbarConfig.getPreferencesPageLink()])
                }, n = r.c([Object(a.B)({
                    providedIn: "root"
                }), r.f("design:paramtypes", [o.b, p, f.c, b.a])], n)
            }()
        },
        "YBI/": function(n, t) {
            n.exports = ".closed-session {\n  pointer-events: auto;\n  cursor: pointer; }\n"
        },
        ZDmf: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            }));
            var r = function(n) {
                this.name = n
            }
        },
        ZhOy: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("Ip0R"),
                o = e("CcnG"),
                i = e("aIxz"),
                c = function() {
                    function n(n) {
                        this.app = n, this.informationalMessage = !1, this.breadcrumb = [], this.mainTitle = "", this.itemsList = [], this.onSelectedItem = new o.w
                    }
                    return n.prototype.ngOnInit = function() {
                        this.app.loading(i.b.HIDE)
                    }, n.prototype.selectedItem = function(n) {
                        this.onSelectedItem.emit(n)
                    }, r.c([Object(o.E)(), r.f("design:type", Object)], n.prototype, "informationalMessage", void 0), r.c([Object(o.E)(), r.f("design:type", Array)], n.prototype, "breadcrumb", void 0), r.c([Object(o.E)(), r.f("design:type", Object)], n.prototype, "mainTitle", void 0), r.c([Object(o.E)(), r.f("design:type", Array)], n.prototype, "itemsList", void 0), r.c([Object(o.R)(), r.f("design:type", Object)], n.prototype, "onSelectedItem", void 0), n = r.c([Object(o.o)({
                        selector: "nhbk-options-view",
                        template: e("+98+")
                    }), r.f("design:paramtypes", [i.a])], n)
                }(),
                s = e("Br5q"),
                l = e("ztzP");
            e.d(t, "a", (function() {
                return u
            }));
            var u = function() {
                function n() {}
                return n = r.c([Object(o.K)({
                    imports: [a.b, l.a, s.a],
                    exports: [c],
                    declarations: [c],
                    schemas: [o.j]
                })], n)
            }()
        },
        bl4H: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return i
            }));
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("gIcY"),
                i = function() {
                    function n() {
                        this.divisionFormGroup = new o.e({
                            resolutionNumberControlName: new o.d("", [o.l.required])
                        })
                    }
                    return n.prototype.cleanForm = function() {
                        this.divisionFormGroup = new o.e({
                            resolutionNumberControlName: new o.d("", [o.l.required])
                        })
                    }, n = r.c([Object(a.B)()], n)
                }()
        },
        buEt: function(n, t, e) {
            "use strict";
            var r = e("DtyJ");
            e.d(t, "a", (function() {
                return r.c
            }))
        },
        "dvh/": function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                function n(n, t) {
                    this.bcpElement = n, this.blacklistedCharacters = "", this.currentValue = "", this.lastValue = "", this.blacklistedCharacters = t
                }
                return n.prototype.keydownHandler = function() {
                    this.lastValue = this.bcpElement.ctrlValue || ""
                }, n.prototype.keyPressHandler = function(n) {
                    this.stopPropagation(n, n.key)
                }, n.prototype.inputHandler = function(n) {
                    var t = n.target;
                    this.currentValue = t.value, this.isValid(this.currentValue) ? this.bcpElement.ctrlValue = this.currentValue : (n.target.value = this.lastValue, this.bcpElement.ctrlValue = this.lastValue)
                }, n.prototype.dropHandler = function(n) {
                    n.dataTransfer && this.stopPropagation(n, n.dataTransfer.getData("text"))
                }, n.prototype.pasteHandler = function(n) {
                    n.clipboardData && this.stopPropagation(n, n.clipboardData.getData("text"))
                }, n.prototype.buildRestrictedPattern = function() {
                    var n = this.blacklistedCharacters,
                        t = n.split("").map((function(n) {
                            return n.concat("\\")
                        }));
                    return "^[^" + "\\".concat(t.join("").slice(0, -1)) + "]*$"
                }, n.prototype.isValid = function(n) {
                    var t = this.buildRestrictedPattern();
                    return new RegExp(t).test(n)
                }, n.prototype.stopPropagation = function(n, t) {
                    this.isValid(t) || n.preventDefault()
                }, n
            }()
        },
        eoVN: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return c
            })), e.d(t, "b", (function() {
                return i
            })), e.d(t, "c", (function() {
                return o
            }));
            var r = e("fb4N");

            function a(n, t) {
                Object(r.h)(t) || n.detail.preventDefault()
            }

            function o(n) {
                a(n, n.detail.key)
            }

            function i(n) {
                var t = n.detail.dataTransfer.getData("text");
                a(n, t)
            }

            function c(n) {
                var t = n.detail.clipboardData.getData("text");
                a(n, t)
            }
        },
        f6Ne: function(n, t) {
            n.exports = '<nav class="nav flex-column">\n  <div class="nav-item" *ngFor="let menu of menus; let i = index;" >\n    <div [class]="menu.hidden ? \'event-hover\' : \'menu-selected event-hover\'" (click)="toggle(i)">\n      <i class="logo icon {{menu.icon}}"></i>\n      <span class="titleMenu" (click)="redirect(menu.defaultRouterLink)">{{menu.name}}</span>\n      <i\n        *ngIf="menu.subMenu"\n        [class]="menu.hidden ? \'p-arrow icon bcp-angle-down-f\' : \'p-arrow icon bcp-angle-up-f\'">\n      </i>\n    </div>\n    <ul [hidden]="menu.hidden" *ngIf="menu.subMenu">\n      <li *ngFor="let subMenu of menu.subMenu">\n        <span [class]="menu.hidden  ? \' nav-link event-hover\': \'nav-link menu-selected event-hover\'"\n          [routerLink]="\'/portal/perfil/\' + subMenu.routerLink"\n          (click)="getPathMenu(subMenu)"\n          routerLinkActive="subMenu.name + selected-background">\n          {{subMenu.name}}\n        </span>\n      </li>\n    </ul>\n  </div>\n</nav>\n'
        },
        faKD: function(n, t, e) {
            "use strict";
            var r, a;
            e.d(t, "a", (function() {
                    return r
                })), e.d(t, "b", (function() {
                    return a
                })),
                function(n) {
                    n.ABROAD = "transfers-abroad", n.OTHERS_BANKS = "others-banks"
                }(r || (r = {})),
                function(n) {
                    n.TYPE = "/portal/transferencias", n.ABROAD = "/portal/transferencias/transfers-abroad", n.OTHERS_BANKS = "/portal/transferencias/others-banks"
                }(a || (a = {}))
        },
        fb4N: function(n, t, e) {
            "use strict";

            function r(n, t, e) {
                var r = x(e),
                    a = l(n, r),
                    o = l(t, r);
                return !(!t || !n) && a >= o
            }

            function a(n, t, e) {
                var r = x(e),
                    a = l(n, r),
                    o = l(t, r);
                return !(!n || !t) && (t.length < 10 || a <= o)
            }

            function o(n, t) {
                if (function(n) {
                        return n && 10 === n.trim().length
                    }(n)) {
                    var e = l(n, x(t));
                    return function(n, t, e) {
                        return t >= 0 && t < 12 && n > 0 && n <= function(n, t) {
                            switch (n) {
                                case 1:
                                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28;
                                case 8:
                                case 3:
                                case 5:
                                case 10:
                                    return 30;
                                default:
                                    return 31
                            }
                        }(t, e)
                    }(e.getDate(), e.getMonth(), e.getFullYear())
                }
                return !1
            }

            function i(n, t) {
                var e = n.split(t);
                return {
                    daySelected: Number(e[0]),
                    monthSelected: Number(e[1]),
                    yearSelected: Number(e[2])
                }
            }

            function c(n, t, e) {
                return new Date(e + "/" + t + "/" + n)
            }

            function s(n) {
                if (n) return l(n, "-")
            }

            function l(n, t) {
                var e = i(n, t);
                return c(e.daySelected, e.monthSelected, e.yearSelected)
            }

            function u(n) {
                return "" === n
            }

            function d(n, t, e, i) {
                var c = o(n, t),
                    s = !!e && o(e, t) && r(n, e, t),
                    l = !!i && o(i, t) && a(n, i, t);
                return !!c && (e && i ? s && l : e && !i ? s : !(!e && i) || l)
            }

            function p(n) {
                return n.split("-").join("/")
            }

            function f(n) {
                return n.split("/").join("-")
            }

            function b(n) {
                return n ? p(n) : ""
            }

            function m(n) {
                return n ? {
                    dateFrom: p(n.dateFrom),
                    dateTo: p(n.dateTo)
                } : {
                    dateFrom: "",
                    dateTo: ""
                }
            }

            function g(n) {
                if (n) {
                    var t = {
                            dateFromIsEmpty: u((a = n).dateFrom),
                            dateToIsEmpty: u(a.dateTo)
                        },
                        e = t.dateFromIsEmpty,
                        r = t.dateToIsEmpty;
                    return e && r ? null : {
                        dateFrom: f(n.dateFrom),
                        dateTo: f(n.dateTo)
                    }
                }
                var a;
                return null
            }

            function h(n) {
                var t = n;
                return 2 === n.length ? t = n.replace(/^(\d{0,2})/, "$1/") : n.length > 2 && n.length < 4 ? t = n.replace(/^(\d{0,2})(\d{0,2})/, "$1/$2") : n.length >= 4 && (t = n.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, "$1/$2/$3")), t
            }

            function v(n) {
                var t = new RegExp("^[0-9]*$"),
                    e = new RegExp("([0-9]{2})/([0-9]{2})/[0-9]{4}");
                return t.test(n) || e.test(n)
            }

            function y(n, t, e, r) {
                var a = n.month === e && n.year === r,
                    o = t.month === e && t.year === r;
                return !(a || o)
            }

            function x(n) {
                return n.substring(2, 3)
            }

            function w() {
                var n = new Date;
                return {
                    day: n.getDate(),
                    month: n.getMonth(),
                    year: n.getFullYear()
                }
            }
            e.d(t, "a", (function() {
                return m
            })), e.d(t, "b", (function() {
                return r
            })), e.d(t, "c", (function() {
                return f
            })), e.d(t, "d", (function() {
                return b
            })), e.d(t, "e", (function() {
                return w
            })), e.d(t, "f", (function() {
                return s
            })), e.d(t, "g", (function() {
                return g
            })), e.d(t, "h", (function() {
                return v
            })), e.d(t, "i", (function() {
                return d
            })), e.d(t, "j", (function() {
                return h
            })), e.d(t, "k", (function() {
                return a
            })), e.d(t, "l", (function() {
                return u
            })), e.d(t, "m", (function() {
                return l
            })), e.d(t, "n", (function() {
                return c
            })), e.d(t, "o", (function() {
                return i
            })), e.d(t, "p", (function() {
                return y
            }))
        },
        fnyw: function(n, t) {
            n.exports = "<ng-content></ng-content>\n"
        },
        gQMk: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("Ip0R"),
                i = function() {
                    function n() {
                        this.title = "Utiliza este producto y aprovecha de sus beneficios", this.textList = []
                    }
                    return n.prototype.ngOnInit = function() {}, r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "title", void 0), r.c([Object(a.E)(), r.f("design:type", Array)], n.prototype, "textList", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-product-benefits",
                        template: e("/PTb"),
                        styles: [e("637R")]
                    }), r.f("design:paramtypes", [])], n)
                }(),
                c = e("A7o+"),
                s = e("tDfj"),
                l = e("t/Na"),
                u = e("AytR");
            e.d(t, "a", (function() {
                return d
            }));
            var d = function() {
                function n(n) {
                    this.translateService = n, this.translateService.setDefaultLang(u.a.defaultLang)
                }
                return n = r.c([Object(a.K)({
                    imports: [o.b, c.b.forChild({
                        loader: {
                            provide: c.a,
                            useFactory: Object(s.b)("https://stbcpzonasegura.viabcp.com/assets/business/bcp-product-details/assets/i18n/"),
                            deps: [l.b]
                        },
                        isolate: !0
                    })],
                    declarations: [i],
                    exports: [i],
                    schemas: [a.j]
                }), r.f("design:paramtypes", [c.c])], n)
            }()
        },
        j91W: function(n, t) {
            n.exports = '<bcp-navbar theme="light" brand-name="Banca por internet" brand-logo="https://stbcpzonasegura.viabcp.com/assets/img/logo-blue.svg" with-shadow="true" is-fixed="true">\n  <div slot="content-right" style="display: flex;">\n    <bcp-paragraph *ngIf="hasClosedSession" color="text" family="demi" size="md" class="closed-session" (click)="closeSession()">Cerrar sesi\xf3n</bcp-paragraph>\n  </div>\n</bcp-navbar>\n'
        },
        mEZQ: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return o
            }));
            var r = e("lYZG"),
                a = e("G5J1");

            function o(n, t, e) {
                return void 0 === t && (t = a.a), void 0 === e && (e = a.a), Object(r.a)((function() {
                    return n() ? t : e
                }))
            }
        },
        n6E7: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("Ip0R"),
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {}, n = r.c([Object(a.o)({
                        selector: "nhbk2-navbar",
                        template: e("TpkN"),
                        encapsulation: a.rb.None,
                        styles: [e("IRmI")]
                    }), r.f("design:paramtypes", [])], n)
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
        nP7i: function(n, t) {
            n.exports = '<nhbk2-dropdown name="genericDropdown" [ngModel]="dropdownValue" (ngModelChange)="dropdownValueChange($event)">\n  <nhbk2-dropdown-title *ngIf="label !== \'\'">{{label}}</nhbk2-dropdown-title>\n  <nhbk2-dropdown-toggle>\n    <div class="text" *ngIf="!displayMember">\n      <span class="dropdown-placeholder">{{placeholder}}</span>\n    </div>\n    <nhbk2-dropdown-toggle-text *ngIf="displayMember">{{displayMember}}</nhbk2-dropdown-toggle-text>\n    <nhbk2-dropdown-toggle-error *ngIf="textError !== \'\'">{{textError}}</nhbk2-dropdown-toggle-error>\n  </nhbk2-dropdown-toggle>\n  <nhbk2-dropdown-menu>\n    <nhbk2-menu-group *ngFor="let titleMenu of menuResponsive" [title]="titleMenu.name">\n      <nhbk2-dropdown-menu-item *ngFor="let subMenu of titleMenu.subMenu" [value]="subMenu" (click)="getPathMenu(subMenu)">\n          <span class="nav-link">{{subMenu.name}}</span>\n      </nhbk2-dropdown-menu-item>\n    </nhbk2-menu-group>\n  </nhbk2-dropdown-menu>\n</nhbk2-dropdown>\n'
        },
        naT6: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("Ip0R"),
                i = e("cPW0"),
                c = e("xTIr"),
                s = e("jzkV"),
                l = function() {
                    function n() {
                        this.currency = c.a.usd, this.isAdditional = !1
                    }
                    return n.prototype.handleOpen = function() {
                        i.a.openHyperlink(s.b.OPEN_ACCOUNT)
                    }, r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "currency", void 0), r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "isAdditional", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-open-account",
                        template: e("umHa"),
                        styles: [e("PZi5")]
                    })], n)
                }(),
                u = e("LoGX"),
                d = function() {
                    function n() {}
                    return n.prototype.transform = function(n) {
                        return n ? u.a.getCurrencyDescription(n).toLowerCase() : ""
                    }, n = r.c([Object(a.V)({
                        name: "descriptionByCurrency"
                    })], n)
                }();
            e.d(t, "a", (function() {
                return p
            }));
            var p = function() {
                function n() {}
                return n = r.c([Object(a.K)({
                    declarations: [l, d],
                    imports: [o.b],
                    exports: [l],
                    schemas: [a.j]
                })], n)
            }()
        },
        pT31: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("gIcY"),
                i = e("Ip0R"),
                c = function() {
                    function n() {
                        this.favorite = !1, this.email = !1, this.onLinkAction = new a.w
                    }
                    return n.prototype.dispatchLinkAction = function() {
                        this.onLinkAction.emit()
                    }, r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "favorite", void 0), r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "email", void 0), r.c([Object(a.R)(), r.f("design:type", Object)], n.prototype, "onLinkAction", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-total-row-transfer",
                        template: e("+TR7"),
                        styles: [e("EK4o")]
                    })], n)
                }();
            e.d(t, "a", (function() {
                return l
            }));
            var s = [c],
                l = function() {
                    function n() {}
                    return n = r.c([Object(a.K)({
                        declarations: s,
                        exports: s,
                        imports: [o.g, i.b]
                    })], n)
                }()
        },
        pTf7: function(n, t) {
            n.exports = '<nav class="breadcrumb">\n    <div class="breadcrumb-item">\n        <span class="first-breadcrumb" [routerLink]="[\'/portal\']">Inicio</span>\n    </div>\n    <div class="second-item-breadcrumb" [ngClass]= "{\'last-crumb-hidden\': lastCrumb}" *ngFor="let crumb of crumbs; let lastCrumb = last;">\n      <i class="size-angle icon bcp-angle-right-f"></i>\n        <span [class]="lastCrumb ? \'last-crumb\' : \'font-breadcrumb\'" >{{crumb.name}}</span>\n    </div>\n  </nav>\n'
        },
        rlF6: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("Ip0R"),
                o = e("CcnG"),
                i = e("cPW0"),
                c = e("jzkV"),
                s = function() {
                    function n() {}
                    return n.prototype.redirecToProtectCard = function() {
                        i.a.openHyperlink(c.c.ProtectCard)
                    }, n = r.c([Object(o.o)({
                        selector: "nhbk-banner-protect-card",
                        template: e("QITF"),
                        styles: [e("6yu0")]
                    })], n)
                }();
            e.d(t, "a", (function() {
                return l
            }));
            var l = function() {
                function n() {}
                return n = r.c([Object(o.K)({
                    declarations: [s],
                    imports: [a.b],
                    exports: [s],
                    schemas: [o.j]
                })], n)
            }()
        },
        rvGH: function(n, t, e) {
            "use strict";
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("Ip0R"),
                i = e("ZYCi"),
                c = e("nTl4"),
                s = e("Xs/w"),
                l = function() {
                    function n(n, t) {
                        this.router = n, this.profileMenu = t, this.path = new a.w, this.menus = [new c.a("", "", !1, "", [new c.b("", "", "", "", !1)])]
                    }
                    return n.prototype.getPathMenu = function(n) {
                        this.profileMenu.selectSubMenus(n.id), this.path.emit(n)
                    }, n.prototype.toggle = function(n) {
                        this.profileMenu.updateSelectedMenu(n)
                    }, n.prototype.redirect = function(n) {
                        n && this.router.navigate([n]).then().catch()
                    }, r.c([Object(a.E)(), r.f("design:type", Array)], n.prototype, "menus", void 0), r.c([Object(a.R)(), r.f("design:type", Object)], n.prototype, "path", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-menu-profile",
                        template: e("f6Ne"),
                        styles: [e("Lnil")]
                    }), r.f("design:paramtypes", [i.c, s.a])], n)
                }(),
                u = e("ZDmf"),
                d = function() {
                    function n() {
                        this.crumbs = [new u.a("")]
                    }
                    return r.c([Object(a.E)(), r.f("design:type", Array)], n.prototype, "crumbs", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-breadcrumb-profile",
                        template: e("pTf7"),
                        styles: [e("4OBB")]
                    }), r.f("design:paramtypes", [])], n)
                }(),
                p = e("umbB"),
                f = e("gIcY"),
                b = function() {
                    function n(n, t, e) {
                        this.ref = n, this.router = t, this.profileMenuService = e, this.path = new a.w, this.propagateChange = function(n) {}, this.propagateOnTouched = function(n) {}, this.label = "", this.placeholder = "", this.textError = "", this.menuResponsive = [new p.a("", "", [new p.b("", "", "", "")])], this.dropdownValue = "", this.displayMember = ""
                    }
                    var t;
                    return t = n, n.prototype.getPathMenu = function(n) {
                        this.profileMenuService.selectSubMenus(n.id), this.path.emit(n), this.router.navigate(["portal/perfil/" + n.routerLink]).then().catch()
                    }, n.prototype.redirect = function(n) {
                        n && this.router.navigate([n]).then().catch()
                    }, n.prototype.ngOnInit = function() {
                        this.ref.markForCheck()
                    }, n.prototype.dropdownValueChange = function(n) {
                        this.dropdownValue = n.name, this.writeValue(n)
                    }, n.prototype.writeValue = function(n) {
                        this.displayMember = n.name, this.propagateChange(n)
                    }, n.prototype.registerOnChange = function(n) {
                        this.propagateChange = n
                    }, n.prototype.registerOnTouched = function(n) {
                        this.propagateOnTouched = n
                    }, r.c([Object(a.E)(), r.f("design:type", String)], n.prototype, "label", void 0), r.c([Object(a.E)(), r.f("design:type", Array)], n.prototype, "menuResponsive", void 0), r.c([Object(a.E)(), r.f("design:type", String)], n.prototype, "placeholder", void 0), r.c([Object(a.E)(), r.f("design:type", String)], n.prototype, "textError", void 0), r.c([Object(a.R)(), r.f("design:type", Object)], n.prototype, "path", void 0), n = t = r.c([Object(a.o)({
                        selector: "nhbk-menu-dropdown",
                        template: e("nP7i"),
                        providers: [{
                            provide: f.i,
                            useExisting: Object(a.wb)((function() {
                                return t
                            })),
                            multi: !0
                        }],
                        styles: [e("ws+Y")]
                    }), r.f("design:paramtypes", [a.l, i.c, s.a])], n)
                }(),
                m = function() {
                    function n() {
                        this.showEmailLabel = !1
                    }
                    return r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "showEmailLabel", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk-card-summary-profile",
                        template: e("AP8s"),
                        encapsulation: a.rb.None,
                        styles: [e("Ucpj")]
                    }), r.f("design:paramtypes", [])], n)
                }(),
                g = function() {
                    function n() {
                        this.title = ""
                    }
                    return r.c([Object(a.E)(), r.f("design:type", Object)], n.prototype, "title", void 0), n = r.c([Object(a.o)({
                        selector: "nhbk2-menu-group",
                        template: e("Bv4f"),
                        encapsulation: a.rb.None,
                        styles: [e("UJ+L")]
                    })], n)
                }(),
                h = function() {
                    function n() {}
                    return n = r.c([Object(a.K)({
                        declarations: [g],
                        exports: [g],
                        imports: [o.b]
                    })], n)
                }(),
                v = e("1XAk"),
                y = function() {
                    function n() {}
                    return n = r.c([Object(a.K)({
                        declarations: [l, d, b, m],
                        imports: [v.a, h, o.b, i.d, f.g],
                        exports: [l, d, b, m]
                    })], n)
                }(),
                x = function() {
                    function n() {}
                    return n = r.c([Object(a.K)({
                        declarations: [],
                        imports: [o.b]
                    })], n)
                }(),
                w = function() {
                    function n() {}
                    return n = r.c([Object(a.K)({
                        declarations: [],
                        imports: [o.b]
                    })], n)
                }();
            e.d(t, "a", (function() {
                return O
            }));
            var k = [o.b, w, x, y],
                O = function() {
                    function n() {}
                    return n = r.c([Object(a.K)({
                        imports: k,
                        exports: k,
                        schemas: [a.J]
                    })], n)
                }()
        },
        umHa: function(n, t) {
            n.exports = '<div class="l-open-account">\n  <div class="d-flex justify-content-between">\n    <div class="align-self-center d-flex">\n      <bcp-img alt="Imagen" src="https://stbcpzonasegura.viabcp.com/assets/img/spot-circle-bills.svg"></bcp-img>\n\n      <div class="d-flex flex-column justify-content-center ml-2 ml-md-3">\n        <bcp-paragraph size="sm" family="bold" class="d-block d-md-none">\n          Abre una cuenta\n          {{ isAdditional ? \'adicional\' : (currency | descriptionByCurrency) }}\n        </bcp-paragraph>\n\n        <bcp-paragraph size="md" family="bold" class="d-none d-md-block">\n          Abre una cuenta\n          {{ isAdditional ? \'adicional\' : (currency | descriptionByCurrency) }}\n        </bcp-paragraph>\n\n        <bcp-paragraph\n          size="sm"\n          color="onsurface-800"\n        >\n          <ng-container *ngIf="isAdditional; else notAdditional">\n            O revisa que no tengas\n            cuentas ocultas en tu administrador de productos\n          </ng-container>\n          <ng-template #notAdditional>\n            Necesitas una cuenta {{ currency | descriptionByCurrency }} para\n            calcular tu tipo de cambio.\n          </ng-template>\n        </bcp-paragraph>\n      </div>\n    </div>\n\n    <bcp-button\n      class="align-self-center ml-1 ml-sm-2 ml-md-3"\n      type="text"\n      size="sm"\n      tier="primary"\n      (ctrlClick)="handleOpen()"\n    >\n      <bcp-paragraph size="sm" family="bold" color="secondary-500" class="d-block d-md-none">\n        <span class="d-inline-block l-open-account__btn">\xc1brela aqu\xed</span>\n      </bcp-paragraph>\n\n      <bcp-paragraph size="md" family="bold" color="secondary-500" class="d-none d-md-block">\n        <span class="d-inline-block l-open-account__btn">\xc1brela aqu\xed</span>\n      </bcp-paragraph>\n    </bcp-button>\n  </div>\n</div>\n'
        },
        usSb: function(n, t, e) {
            "use strict";
            var r, a;
            e.d(t, "a", (function() {
                    return r
                })), e.d(t, "b", (function() {
                    return a
                })),
                function(n) {
                    n.OTHER = "otro-banco-financiera"
                }(r || (r = {})),
                function(n) {
                    n.TYPE = "/portal/pagos/tarjetas", n.OTHER = "/portal/pago-de-tarjetas/otro-banco-financiera"
                }(a || (a = {}))
        },
        vCbk: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            })), e.d(t, "b", (function() {
                return o
            })), e.d(t, "c", (function() {
                return a
            })), e.d(t, "d", (function() {
                return i
            })), e.d(t, "e", (function() {
                return s
            })), e.d(t, "f", (function() {
                return l
            })), e.d(t, "g", (function() {
                return c
            })), e.d(t, "h", (function() {
                return u
            }));

            function r(n, t) {
                var e = Object.keys(n),
                    r = Object.keys(t);
                if (e.length !== r.length) return !1;
                for (var a = 0, o = e; a < o.length; a++) {
                    var i = o[a];
                    if (n[i] !== t[i]) return !1
                }
                return !0
            }

            function a(n) {
                var t = [];
                return n.forEach((function(n) {
                    Array.isArray(n) ? t.push(a(n)) : "object" == typeof n ? t.push(o(n)) : t.push(n)
                })), t
            }

            function o(n) {
                for (var t = {}, e = 0, r = Object.entries(n); e < r.length; e++) {
                    var i = r[e],
                        c = i[0],
                        s = i[1];
                    Array.isArray(s) ? t[c] = a(s) : t[c] = "object" == typeof s ? o(s) : s
                }
                return t
            }

            function i(n, t) {
                var e = n.length;
                if (e !== t.length) return !1;
                for (; e--;)
                    if (n[e] !== t[e]) return !1;
                return !0
            }

            function c() {
                var n = navigator.userAgent;
                return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(n) ? "mobile" : /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(n) ? "tablet" : "desktop"
            }

            function s(n) {
                return void 0 === n && (n = 16), window.crypto.getRandomValues(new Uint32Array(1))[0].toString(n)
            }

            function l(n) {
                var t = window.getComputedStyle(n);
                return n.getBoundingClientRect().width - parseFloat(t.paddingLeft || "0") - parseFloat(t.paddingRight || "0")
            }

            function u(n) {
                var t = window.getComputedStyle(n);
                return n.getBoundingClientRect().height - parseFloat(t.paddingTop || "0") - parseFloat(t.paddingBottom || "0")
            }
        },
        vLmd: function(n, t, e) {
            "use strict";
            var r, a;
            e.d(t, "a", (function() {
                    return r
                })), e.d(t, "b", (function() {
                    return a
                })),
                function(n) {
                    n.INTEROPERABILITY = "envio-celular", n.INTEROPERABILITY_STEP1 = "ingresar-celular", n.INTEROPERABILITY_STEP2 = "lista-entidades", n.INTEROPERABILITY_STEP3 = "seleccion-cuenta", n.INTEROPERABILITY_STEP4 = "confirmacion", n.INTEROPERABILITY_STEP5 = "resumen"
                }(r || (r = {})),
                function(n) {
                    n.PORTAL_HOME = "/portal/mis-productos", n.ADMINISTRATOR = "/portal/perfil/configuracion/administrar-productos", n.INTEROPERABILITY = "/portal/envio-celular/", n.INTEROPERABILITY_STEP1 = "/portal/envio-celular/ingresar-celular", n.INTEROPERABILITY_STEP2 = "/portal/envio-celular/lista-entidades", n.INTEROPERABILITY_STEP3 = "/portal/envio-celular/seleccion-cuenta", n.INTEROPERABILITY_STEP4 = "/portal/envio-celular/confirmacion", n.INTEROPERABILITY_STEP5 = "/portal/envio-celular/resumen"
                }(a || (a = {}))
        },
        wT3b: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return u
            }));
            var r = e("mrSG"),
                a = e("CcnG"),
                o = e("t/Na"),
                i = e("67Y/"),
                c = e("AytR"),
                s = e("UsZ5"),
                l = e("ZQ4D"),
                u = function() {
                    function n(n) {
                        this.httpClient = n
                    }
                    return n.prototype.findByFormCodeAndTypeCode = function(n, t) {
                        var e = c.a.API_URL + "/app/sunatpayment/tribute",
                            r = {
                                request: {
                                    applicationFormCode: n,
                                    typeCode: t
                                }
                            };
                        return this.httpClient.post(e, r).pipe(Object(i.a)((function(n) {
                            if (n.response && l.a.WITHOUT_ERROR === n.errorCode) return n.response;
                            throw new s.a(n.errorCode, n.literalCode)
                        })))
                    }, n = r.c([Object(a.B)(), r.f("design:paramtypes", [o.b])], n)
                }()
        },
        "ws+Y": function(n, t) {
            n.exports = ".dropdown-placeholder {\n  color: #a8a8a8;\n  font-family: Flexo;\n  font-size: 16px;\n  font-stretch: normal;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-height: 2; }\n\n.main-navigation {\n  width: 100%;\n  position: relative; }\n\n.main-navigation ul {\n    margin: 0 auto;\n    padding: 18px; }\n\n.main-navigation ul .item {\n      display: inline;\n      padding-right: 43px;\n      font-size: 13px;\n      text-transform: uppercase; }\n\n.main-navigation ul .item:hover ul {\n        display: none; }\n\n.dropdown-toggle {\n  font-weight: bold; }\n\n.dropdown-placeholder {\n  color: #a8a8a8;\n  font-family: Flexo;\n  font-size: 16px;\n  font-stretch: normal;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-height: 2; }\n\n.text-primary {\n  color: black; }\n"
        },
        xXU7: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return i
            }));
            var r = e("6blF"),
                a = e("T1DM"),
                o = e("/21U");

            function i(n, t) {
                return void 0 === n && (n = 0), void 0 === t && (t = a.a), (!Object(o.a)(n) || n < 0) && (n = 0), t && "function" == typeof t.schedule || (t = a.a), new r.a((function(e) {
                    return e.add(t.schedule(c, n, {
                        subscriber: e,
                        counter: 0,
                        period: n
                    })), e
                }))
            }

            function c(n) {
                var t = n.subscriber,
                    e = n.counter,
                    r = n.period;
                t.next(e), this.schedule({
                    subscriber: t,
                    counter: e + 1,
                    period: r
                }, r)
            }
        },
        xqYJ: function(n, t) {
            n.exports = '<div class="text-center px-2 error-container">\n  <img class="image-size" src="{{errorDetail?.image}}" alt="imagen de error">\n  <bcp-title size="md" family="demi" class="mt-4 error-message-title">{{errorDetail?.title}}</bcp-title>\n  <bcp-paragraph size="lg" class="mt-2 error-message-body">\n    <div [innerHTML]="errorDetail?.htmlBody"></div>\n  </bcp-paragraph>\n\n  <div *ngIf="errorDetail?.template">\n    <ng-container *ngTemplateOutlet="errorDetail?.template"></ng-container>\n  </div>\n\n  <div class="d-flex flex-column align-items-center mt-2">\n    <div *ngIf="errorDetail?.primaryButtonText" class="my-4 width-btn">\n      <bcp-button *ngIf="!errorDetail?.primaryLink" class="error-button" shape="rectangle" tier="primary" full-width="true" size="lg"\n        (click)="onPrimaryButtonClick()">{{ errorDetail?.primaryButtonText }}\n      </bcp-button>\n\n      <bcp-button *ngIf="errorDetail?.primaryLink" class="error-button" shape="rectangle" tier="primary" full-width="true" size="lg">\n        <a [href]="errorDetail?.primaryLink" target="{{ errorDetail?.primaryTarget ? \'_blank\' : \'_self\'}}">\n          <bcp-paragraph color="white" class="d-inline">{{ errorDetail?.primaryButtonText }}</bcp-paragraph>\n        </a>\n      </bcp-button>\n    </div>\n\n    <div *ngIf="errorDetail?.secondaryButtonText">\n      <bcp-button *ngIf="!errorDetail?.secondaryLink" shape="text" tier="primary" size="lg" (click)="onSecondaryButtonClick()">\n        {{errorDetail?.secondaryButtonText}}\n      </bcp-button>\n\n      <bcp-button *ngIf="errorDetail?.secondaryLink" shape="text">\n        <a [href]="errorDetail?.secondaryLink" target="{{ errorDetail?.secondaryTarget ? \'_blank\' : \'_self\'}}">\n          <bcp-paragraph color="secondary-500" class="d-inline">{{ errorDetail?.secondaryButtonText }}</bcp-paragraph>\n        </a>\n      </bcp-button>\n    </div>\n  </div>\n</div>\n'
        }
    }
]);