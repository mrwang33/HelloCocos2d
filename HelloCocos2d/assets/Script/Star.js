// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        // ���Ǻ�����֮��ľ���С�������ֵʱ���ͻ�����ռ�
        pickRadius: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    getPlayerDistance: function () {
        // ���� player �ڵ�λ���жϾ���
        var playerPos = this.game.player.getPosition();
        // ��������λ�ü�������֮�����
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },

    onPicked: function () {
        // �����Ǳ��ռ�ʱ������ Game �ű��еĽӿڣ�����һ���µ�����
        this.game.spawnNewStar();
        this.game.addScore();

        // Ȼ�����ٵ�ǰ���ǽڵ�
        this.node.destroy();
    },

    update: function (dt) {
        // ÿ֡�жϺ�����֮��ľ����Ƿ�С���ռ�����
        if (this.getPlayerDistance() < this.pickRadius) {
            // �����ռ���Ϊ
            this.onPicked();
            return;
        }
    },

    start () {

    },

    // update (dt) {},
});