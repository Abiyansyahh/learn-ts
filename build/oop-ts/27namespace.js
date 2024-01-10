"use strict";
var NamespaceExample;
(function (NamespaceExample) {
    class Hewan {
    }
    NamespaceExample.Hewan = Hewan;
    NamespaceExample.kodok = new Hewan();
})(NamespaceExample || (NamespaceExample = {}));
const belalang = new NamespaceExample.Hewan();
let kodok2a = NamespaceExample.kodok;
