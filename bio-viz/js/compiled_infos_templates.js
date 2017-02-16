this["HBtemplates"] = this["HBtemplates"] || {};

this["HBtemplates"]["templates/bioviz.tmpl"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\" style=\"margin: 0px 10px\">\n    <div class=\"col-md-6\" style=\"padding:0px;\">\n        <div id=\"bioviz\"></div>\n    </div>\n    <div class=\"col-md-6 right-block\" style=\"padding-right:0px;\">\n        <div class=\"panel panel-default params\">\n            <div class=\"panel-heading\">\n                <div style=\"display:inline-block;\">\n                    <span id=\"structureCount\" class=\"badge\"></span>\n                </div>\n                <h4>3D Structures</h4>\n            </div>\n            <div class=\"panel-body\">\n                <div id=\"pdbForm\">\n                    <h4>OPTIONS</h4>\n                    <div>\n                        <label for=\"#pdbList\">Choose PDB ID : </label>\n                        <select id=\"pdbList\" class=\"form-control input-sm\"></select>\n                    </div>\n                    <div>\n                        <label for=\"#molList\">Choose chain : </label>\n                        <select id=\"molList\" class=\"form-control input-sm\"></select>\n                        <div class=\"checkbox-inline\">\n                            <label>\n                                <input id=\"showContext\" type=\"checkbox\"> SHOW CONTEXT (ALL)\n                            </label>\n                        </div>\n\n                    </div>\n                    <div class=\"alert alert-info bioviz-menu-info\" role=\"alert\">\n                        <span class=\"fa fa-info-circle\"></span>\n                        <span>Click on the 3D viewer then press <kbd>i</kbd> to display help.</span>\n                    </div>\n                </div>\n                <div class=\"clickLog\">\n                    <h4>3D STRUCTURES</h4>\n                    <!--                        <ul id=\"eventTriggered\"></ul>-->\n                    <div>\n                        <div class=\"pdbTableContainer\">\n                            <table id=\"pdbTable\" class=\"table-striped\" style=\"width:100%;\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"pdbName\">PDB</th>\n                                        <th>Method</th>\n                                        <th>Resolution (&#8491;)</th>\n                                        <th>Chain(s)</th>\n                                        <th>Positions</th>\n                                        <th class=\"pdbLinks\">Further links</th>\n                                    </tr>\n                                </thead>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});