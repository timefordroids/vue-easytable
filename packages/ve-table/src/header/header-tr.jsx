import HeaderTh from "./header-th";
import { clsName } from "../util";
import { COMPS_NAME, EMIT_EVENTS } from "../util/constant";
import VueDomResizeObserver from "../../../src/comps/resize-observer";
import emitter from "../../../src/mixins/emitter";
export default {
    name: COMPS_NAME.VE_TABLE_THADER_TR,
    mixins: [emitter],
    props: {
        // group columns item
        groupColumn: {
            type: Array,
            required: true
        },
        headerRows: {
            type: Array,
            default: function() {
                return [];
            }
        },
        colgroups: {
            type: Array,
            required: true
        },
        fixedHeader: {
            type: Boolean,
            required: true
        },
        rowIndex: {
            type: Number,
            required: true
        },
        // checkbox option
        checkboxOptipon: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // sort option
        sortOption: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // sort columns
        sortColumns: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // cell style option
        cellStyleOption: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // event custom option
        eventCustomOption: {
            type: Object,
            default: function() {
                return null;
            }
        }
    },
    methods: {
        // tr height change
        trHeightChange({ height }) {
            this.dispatch(
                COMPS_NAME.VE_TABLE,
                EMIT_EVENTS.HEADER_TR_HEIGHT_CHANGE,
                {
                    rowIndex: this.rowIndex,
                    height: height
                }
            );
        },
        // click
        rowClick(e, fn) {
            fn && fn(e);
        },
        // dblclick
        rowDblclick(e, fn) {
            fn && fn(e);
        },
        // contextmenu
        rowContextmenu(e, fn) {
            fn && fn(e);
        },
        // mouseenter
        rowMouseenter(e, fn) {
            fn && fn(e);
        },
        // mouseleave
        rowMouseleave(e, fn) {
            fn && fn(e);
        }
    },
    render() {
        const {
            groupColumn,
            colgroups,
            headerRows,
            fixedHeader,
            rowIndex,
            trHeightChange,
            checkboxOptipon,
            sortOption,
            sortColumns,
            cellStyleOption,
            eventCustomOption
        } = this;

        // custom on cell event
        let customEvents = {};
        if (eventCustomOption) {
            const { headerRowEvents } = eventCustomOption;
            customEvents = headerRowEvents ? headerRowEvents({ rowIndex }) : {};
        }

        const {
            click,
            dblclick,
            contextmenu,
            mouseenter,
            mouseleave
        } = customEvents;

        const events = {
            click: e => {
                this.rowClick(e, click);
            },
            dblclick: e => {
                this.rowDblclick(e, dblclick);
            },
            contextmenu: e => {
                this.rowContextmenu(e, contextmenu);
            },
            mouseenter: e => {
                this.rowMouseenter(e, mouseenter);
            },
            mouseleave: e => {
                this.rowMouseleave(e, mouseleave);
            }
        };

        const trProps = {
            class: clsName("header-tr"),
            props: {
                tagName: "tr"
            },
            on: {
                "on-dom-resize-change": trHeightChange
            },
            nativeOn: events
        };

        return (
            <VueDomResizeObserver {...trProps}>
                {groupColumn.map(groupColumnItem => {
                    // th props
                    const thProps = {
                        key: groupColumnItem.key,
                        props: {
                            groupColumn,
                            groupColumnItem,
                            colgroups,
                            headerRows,
                            fixedHeader,
                            rowIndex,
                            checkboxOptipon,
                            sortOption,
                            sortColumns,
                            cellStyleOption,
                            eventCustomOption: this.eventCustomOption
                        }
                    };

                    return <HeaderTh {...thProps} />;
                })}
            </VueDomResizeObserver>
        );
    }
};
