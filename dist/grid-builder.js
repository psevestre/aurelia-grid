System.register(['aurelia-framework'], function(exports_1) {
    var aurelia_framework_1;
    var GridBuilder;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            GridBuilder = (function () {
                function GridBuilder(grid, element) {
                    this.scrollBarWidth = 16;
                    this.grid = grid;
                    this.element = element;
                    this.template = this.grid.template;
                    this.viewCompiler = this.grid.viewCompiler;
                    this.viewResources = this.grid.viewResources;
                    this.bindingEngine = this.grid.bindingEngine;
                    this.container = this.grid.container;
                }
                GridBuilder.prototype.build = function () {
                    // Listen for window resize so we can re-flow the grid layout
                    this.resizeListener = window.addEventListener('resize', this.headersSyncColumnHeadersWithColumns.bind(this));
                    // The table body element will host the rows
                    var tbody = this.element.querySelector("table>tbody");
                    this.viewSlot = new aurelia_framework_1.ViewSlot(tbody, true);
                    // Get the row template too and add a repeater/class
                    var row = tbody.querySelector("tr");
                    this.buildRowTemplate(row);
                    this.rowTemplate = document.createDocumentFragment();
                    this.rowTemplate.appendChild(row);
                    this.buildTemplates();
                };
                GridBuilder.prototype.buildRowTemplate = function (row) {
                    // builds <template><tr repeat.for="$item of data">...</template>
                    row.setAttribute("repeat.for", "$item of source.items");
                    row.setAttribute("class", "${ $item === $parent.selectedItem ? 'info' : '' }");
                    // TODO: Do we allow the user to customise the row template or just
                    // provide a callback?
                    // Copy any user specified row attributes to the row template
                    for (var prop in this.template.rowAttributes) {
                        if (this.template.rowAttributes.hasOwnProperty(prop)) {
                            row.setAttribute(prop, this.template.rowAttributes[prop]);
                        }
                    }
                };
                GridBuilder.prototype.buildTemplates = function () {
                    var _this = this;
                    // Create a fragment we will manipulate the DOM in
                    var rowTemplate = this.rowTemplate.cloneNode(true);
                    var row = rowTemplate.querySelector("tr");
                    // Create the columns
                    this.template.columns.forEach(function (c) {
                        var td = document.createElement("td");
                        // Set attributes
                        for (var prop in c) {
                            if (c.hasOwnProperty(prop)) {
                                if (prop == "template")
                                    td.innerHTML = c[prop];
                                else
                                    td.setAttribute(prop, c[prop]);
                            }
                        }
                        row.appendChild(td);
                    });
                    // Now compile the row template
                    var view = this.viewCompiler.compile(rowTemplate, this.viewResources).create(this.container);
                    // Templating 17.x changes the API
                    // ViewFactory.create() no longer takes a binding context (2nd parameter)
                    // Instead, must call view.bind(context)
                    view.bind(this.grid);
                    // based on viewSlot.swap() from templating 0.16.0
                    var removeResponse = this.viewSlot.removeAll();
                    if (removeResponse instanceof Promise) {
                        removeResponse.then(function () { return _this.viewSlot.add(view); });
                    }
                    this.viewSlot.add(view);
                    // code above replaces the following call
                    //this.viewSlot.swap(view);
                    this.viewSlot.attached();
                    // HACK: why is the change handler not firing for noRowsMessage?
                    // this.noRowsMessageChanged(); /???
                };
                GridBuilder.prototype.unbind = function () {
                    window.removeEventListener('resize', this.resizeListener);
                    //this.dontWatchForChanges();
                };
                GridBuilder.prototype.headersSyncColumnHeadersWithColumns = function () {
                    debugger;
                    // Get the first row from the data if there is one...
                    var cells = this.element.querySelectorAll("table>tbody>tr:first-child>td");
                    for (var i = this.grid.gridHeaders.length - 1; i >= 0; i--) {
                        var header = this.grid.gridHeaders[i];
                        var filter = this.grid.gridFilters[i];
                        var cell = cells[i];
                        if (cell && header && filter) {
                            var overflow = this.isBodyOverflowing();
                            var tgtWidth = cell.offsetWidth + (i == this.grid.gridHeaders.length - 1 && overflow ? this.scrollBarWidth : 0);
                            // Make the header the same width as the cell...
                            header.setAttribute("style", "width: " + tgtWidth + "px");
                            filter.setAttribute("style", "width: " + tgtWidth + "px");
                        }
                    }
                    ;
                };
                GridBuilder.prototype.isBodyOverflowing = function () {
                    var container = this.grid.gridContainer();
                    ;
                    return container.offsetHeight < container.scrollHeight || container.offsetWidth < container.scrollWidth;
                };
                return GridBuilder;
            })();
            exports_1("GridBuilder", GridBuilder);
        }
    }
});
