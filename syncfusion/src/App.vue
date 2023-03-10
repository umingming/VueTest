<template>
    <div id="app">
        <div class="control-section">
            <div style="width: 100%">
                <div class="sb-mobile-palette-bar">
                    <div
                        id="palette-icon"
                        role="button"
                        class="e-ddb-icons1 e-toggle-palette"
                    ></div>
                </div>
                <div id="palette-space" class="sb-mobile-palette">
                    <ejs-symbolpalette
                        id="symbolpalette"
                        :expandMode="expandMode"
                        :palettes="palettes"
                        :width="palettewidth"
                        :height="paletteheight"
                        :getNodeDefaults="palettegetNodeDefaults"
                        :getSymbolInfo="getSymbolInfo"
                        :symbolHeight="symbolHeight"
                        :symbolWidth="symbolWidth"
                    ></ejs-symbolpalette>
                </div>

                <div id="diagram-space" class="sb-mobile-diagram">
                    <ejs-diagram
                        style="display: block"
                        ref="diagramObject"
                        id="diagram"
                        :width="width"
                        :height="height"
                        :nodes="nodes"
                        :connectors="connectors"
                        :getNodeDefaults="getNodeDefaults"
                        :getConnectorDefaults="getConnectorDefaults"
                        :dragEnter="dragEnter"
                        :snapSettings="snapSettings"
                        :created="created"
                    ></ejs-diagram>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.e-ddb-icons {
    font-family: "e-ddb-icons";
    speak: none;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.e-ddb-icons1 {
    font-family: "e-ddb-icons1";
    speak: none;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.e-toggle-palette::before {
    content: "\e700";
}

.e-basic::before {
    content: "\e726";
}

.e-flow::before {
    content: "\e724";
}

.e-connector::before {
    content: "\e725";
}

.sb-mobile-palette {
    width: 240px;
    height: 100%;
    float: left;
}

.sb-mobile-palette-bar {
    display: none;
}

.sb-mobile-diagram {
    width: calc(100% - 242px);
    height: 100%;
    float: left;
}

@media (max-width: 550px) {
    .sb-mobile-palette {
        z-index: 19;
        position: absolute;
        display: none;
        transition: transform 300ms linear, visibility 0s linear 300ms;
        width: 39%;
        height: 100%;
    }

    .sb-mobile-palette-bar {
        display: block;
        width: 100%;
        background: #fafafa;
        padding: 10px 10px;
        border: 0.5px solid #e0e0e0;
        min-height: 40px;
    }

    .sb-mobile-diagram {
        width: 100%;
        height: 100%;
        float: left;
        left: 0px;
    }

    #palette-icon {
        font-size: 20px;
    }
}

.sb-mobile-palette-open {
    position: absolute;
    display: block;
    right: 15px;
}
#app {
    margin-top: 50px;
}
::v-deep #symbolpalette {
    width: 150px !important;
}
/* ::v-deep #start,
::v-deep #end {
    position: relative;
    width: 63px;
    height: 35px;
    top: 8px;
} */
</style>
<script>
import Vue from "vue";
import {
    DiagramPlugin,
    SymbolPalettePlugin,
} from "@syncfusion/ej2-vue-diagrams";
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);
let isMobile;
let interval;
interval = [
    1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25,
    9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75,
];

let gridlines = {
    lineColor: "#e0e0e0",
    lineIntervals: interval,
};

//Initializes the nodes for the diagram
let nodes = [
    {
        id: "start",
        width: 50,
        height: 40,
        offsetX: 300,
        offsetY: 80,
        shape: { type: "Flow", shape: "Terminator" },
        annotations: [
            {
                content: "Start",
            },
        ],
    },
];
//Initializes the connector for the diagram
let connectors = [];

//Initialize the flowshapes for the symbol palatte
let flowshapes = [
    {
        id: "start",
        shape: { type: "Flow", shape: "Terminator" },
        annotations: [{ content: "Start" }],
        iconCss: 'e-NoneStart'
    },
    {
        id: "end",
        shape: {
            type: "Flow",
            shape: "Terminator",
        },
        annotations: [{ content: "End" }],
    },
    { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
    { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
    { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
    { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
    { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
    { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
];

//Initializes connector symbols for the symbol palette
let connectorSymbols = [
    {
        id: "Link2",
        type: "Orthogonal",
        sourcePoint: { x: 0, y: 35 },
        targetPoint: { x: 40, y: 0 },
        targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
        },
        annotations: [{ content: "Yes", style: { fill: "white" } }],
        style: { strokeWidth: 2, strokeColor: "#757575" },
    },
    {
        id: "Link3",
        type: "Orthogonal",
        sourcePoint: { x: 0, y: 35 },
        targetPoint: { x: 40, y: 0 },
        targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
        },
        annotations: [{ content: "No", style: { fill: "white" } }],
        style: { strokeWidth: 2, strokeColor: "#757575" },
    },
    {
        id: "Link1",
        type: "Orthogonal",
        sourcePoint: { x: 0, y: 35 },
        targetPoint: { x: 40, y: 0 },
        targetDecorator: {
            shape: "Arrow",
            style: { strokeColor: "#757575", fill: "#757575" },
        },
        style: { strokeWidth: 2, strokeColor: "#757575" },
    },
];

export default Vue.extend({
    data: function () {
        return {
            width: "100%",
            height: "700px",
            nodes: nodes,
            connectors: connectors,
            snapSettings: {
                horizontalGridlines: gridlines,
                verticalGridlines: gridlines,
            },
            created: () => {
                addEvents();
            },
            //Sets the default values of a node
            getNodeDefaults: () => {
                let obj = {};
                if (obj.width === undefined) {
                    obj.width = 145;
                } else {
                    let ratio = 100 / obj.width;
                    obj.width = 100;
                    if (obj.height) {
                        obj.height *= ratio;
                    }
                }
                obj.style = { fill: "#357BD2", strokeColor: "white" };
                obj.annotations = [
                    { style: { color: "white", fill: "transparent" } },
                ];

                //Set ports
                obj.ports = getPorts();
                return obj;
            },
            //Sets the default values of a connector
            getConnectorDefaults: (obj) => {
                if (obj.id.indexOf("connector") !== -1) {
                    obj.type = "Orthogonal";
                    obj.targetDecorator = {
                        shape: "Arrow",
                        width: 10,
                        height: 10,
                    };
                }
            },
            //Sets the Node style for DragEnter element.
            dragEnter: (args) => {
                let diagram = this.$refs.diagramObject.ej2Instances;
                console.log(diagram);

                let obj = args.element;
                if (obj && obj.width && obj.height) {
                    let oWidth = obj.width;
                    let oHeight = obj.height;
                    let ratio = 100 / obj.width;
                    obj.width = 100;
                    obj.height *= ratio;
                    if (obj.offsetX) obj.offsetX += (obj.width - oWidth) / 2;
                    if (obj.offsetY) obj.offsetY += (obj.height - oHeight) / 2;
                    obj.style = { fill: "#357BD2", strokeColor: "white" };
                }
            },
            expandMode: "Multiple",
            palettes: [
                {
                    id: "connectors",
                    expanded: true,
                    symbols: connectorSymbols,
                    iconCss: "shapes",
                    title: "Connectors",
                },
                {
                    id: "flow",
                    expanded: true,
                    symbols: flowshapes,
                    iconCss: "shapes",
                    title: "Flow Shapes",
                },
            ],
            palettewidth: "100%",
            paletteheight: "700px",
            symbolHeight: 60,
            symbolWidth: 60,
            palettegetNodeDefaults: (symbol) => {
                symbol.style = { strokeColor: "#757575" };
                if (
                    symbol.id === "start" ||
                    symbol.id === "end" ||
                    symbol.id === "Terminator"
                ) {
                    symbol.width = 80;
                    symbol.height = 40;
                } else if (
                    symbol.id === "Decision" ||
                    symbol.id === "Document" ||
                    symbol.id === "PreDefinedProcess" ||
                    symbol.id === "PaperTap" ||
                    symbol.id === "DirectData" ||
                    symbol.id === "MultiDocument" ||
                    symbol.id === "Data"
                ) {
                    symbol.width = 50;
                    symbol.height = 40;
                } else {
                    symbol.width = 50;
                    symbol.height = 50;
                }
            },
            getSymbolInfo: () => {
                return { fit: true };
            },
        };
    },
    mounted: function () {
        let diagram = this.$refs.diagramObject.ej2Instances;
        diagram.fitToPage();
    },
});

function getPorts() {
    let ports = [
        { id: "port1", shape: "Circle", offset: { x: 0, y: 0.5 } },
        { id: "port2", shape: "Circle", offset: { x: 0.5, y: 1 } },
        { id: "port3", shape: "Circle", offset: { x: 1, y: 0.5 } },
        { id: "port4", shape: "Circle", offset: { x: 0.5, y: 0 } },
    ];
    return ports;
}

function addEvents() {
    isMobile = window.matchMedia("(max-width:550px)").matches;
    if (isMobile) {
        let paletteIcon = document.getElementById("palette-icon");
        if (paletteIcon) {
            paletteIcon.addEventListener("click", openPalette, false);
        }
    }
}

function openPalette() {
    let paletteSpace = document.getElementById("palette-space");
    isMobile = window.matchMedia("(max-width:550px)").matches;
    if (isMobile) {
        if (!paletteSpace.classList.contains("sb-mobile-palette-open")) {
            paletteSpace.classList.add("sb-mobile-palette-open");
        } else {
            paletteSpace.classList.remove("sb-mobile-palette-open");
        }
    }
}
</script>