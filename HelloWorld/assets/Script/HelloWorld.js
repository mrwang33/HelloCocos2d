cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        console.log(this.lable);
        this.label.String = this.text;
    },

    // called every frame
    update: function (dt) {
        this.label.String = "hey monika"+dt;
    },
});
