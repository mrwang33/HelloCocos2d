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
        // �����������������Ԥ����Դ
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        // ���ǲ�������ʧʱ��������Χ
        maxStarDuration: 0,
        minStarDuration: 0,
        // ����ڵ㣬����ȷ���������ɵĸ߶�
        ground: {
            default: null,
            type: cc.Node
        },
        // player �ڵ㣬���ڻ�ȡ���ǵ����ĸ߶ȣ��Ϳ��������ж�����
        player: {
            default: null,
            type: cc.Node
        },
        score: {
            default: null,
            type: cc.Label
        }
    },


    // Game.js
    onLoad: function () {
        // ��ȡ��ƽ��� y ������
        this.groundY = this.ground.y + this.ground.height / 2;
        // ����һ���µ�����
        this.spawnNewStar();
    },

    // ����һ���µ�star
    spawnNewStar: function () {
        // ʹ�ø�����ģ���ڳ���������һ���½ڵ�
        var newStar = cc.instantiate(this.starPrefab);
        // �������Ľڵ���ӵ� Canvas �ڵ�����
        this.node.addChild(newStar);
        // Ϊ��������һ�����λ��
        newStar.setPosition(this.getNewStarPosition());
        // �� Game �����ʵ�������������
        newStar.getComponent('Star').game = this;
    },

    // ��ȡ�������������λ��
    getNewStarPosition: function () {
        var randX = 0;
        // ���ݵ�ƽ��λ�ú�������Ծ�߶ȣ�����õ�һ�����ǵ� y ����
        var randY = this.groundY + cc.random0To1() * this.player.getComponent('Player').jumpHeight + 50;
        // ������Ļ��ȣ�����õ�һ������ x ����
        var maxX = this.node.width / 2;
        randX = cc.randomMinus1To1() * maxX;
        // ������������
        return cc.p(randX, randY);
    },
    // LIFE-CYCLE CALLBACKS:

    addScore: function () {
        var scoreValue = this.score.string;
        scoreValue++;
        this.score.string = scoreValue;
    },

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
