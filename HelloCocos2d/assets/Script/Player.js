
cc.Class({
    extends: cc.Component,

    properties: {
        // ������Ծ�߶�
        jumpHeight: 0,
        // ������Ծ����ʱ��
        jumpDuration: 0,
        // ����ƶ��ٶ�
        maxMoveSpeed: 0,
        // ���ٶ�
        accel: 0
    },

    /*
     ��Ծ����
    */
    setJumpAction: function () {
        // ��Ծ����
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // ����
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // �����ظ�
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    setInputControl: function () {
        var self = this;
        // ��Ӽ����¼�����
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // �а�������ʱ���ж��Ƿ�������ָ���ķ�����Ƽ������������Ӧ�������
            onKeyPressed: function (keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = true;
                        self.accRight = false;
                        break;
                    case cc.KEY.d:
                        self.accLeft = false;
                        self.accRight = true;
                        break;
                }
            },
            // �ɿ�����ʱ��ֹͣ��÷���ļ���
            onKeyReleased: function (keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = false;
                        break;
                    case cc.KEY.d:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
    },

    onLoad: function () {
        // ��ʼ����Ծ����
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);

        // ���ٶȷ��򿪹�
        this.accLeft = false;
        this.accRight = false;
        // ���ǵ�ǰˮƽ�����ٶ�
        this.xSpeed = 0;

        // ��ʼ�������������
        this.setInputControl();
    },

    update: function (dt) {
        // ���ݵ�ǰ���ٶȷ���ÿ֡�����ٶ�
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // �������ǵ��ٶȲ��ܳ������ֵ
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // ���ݵ�ǰ�ٶȸ������ǵ�λ��
        this.node.x += this.xSpeed * dt;
    },


    start () {

    },

    // update (dt) {},
});
