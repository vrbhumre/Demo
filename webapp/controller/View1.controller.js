sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                alert("Hello Probosys!");
                this.fnOnSave();
                this.fnOnClose();
            },
            fnOnSave: function () {
                alert("Hello Vrundavani!:::lkm:!");
            },
            fnOnClose: function () {
                alert("Hello Nitin!!!!!");
            }
        });
    });
