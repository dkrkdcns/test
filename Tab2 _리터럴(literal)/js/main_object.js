$(function () {
    tabMenu.init('.tab_menu li', '.tab_contents li');
});


// 오브젝트(객체) 리터럴 방식
var tabMenu = {
    $tabMenu: null
    , $tabContents: null
    , currentIndex: null
    , oldIndex: null
    , init: function (menuSel, conSel) {
        this.currentIndex = 0;
        this.$tabMenu = $(menuSel);
        this.$tabContents =  $(conSel);

        this.initEvent();
    }
    , initEvent: function () {
        var that = this;
        this.$tabMenu.on('click', function () {
            that.oldIndex = that.currentIndex;
            that.currentIndex = $(this).index();

            that.tabMenuOnOff($(this));
            that.tabContentOnOff();
        });
    }
    , tabMenuOnOff: function ($self) {
        this.$tabMenu.removeClass('active');
        $self.addClass('active');
    }
    , tabContentOnOff:  function () {
        this.$tabContents.eq(this.oldIndex).hide();
        this.$tabContents.eq(this.currentIndex).show();
    }
};