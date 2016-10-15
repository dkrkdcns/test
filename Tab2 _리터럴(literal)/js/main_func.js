$(document).ready(function () {

    var tab1 = new Tab();
    tab1.init('.tab_menu1', '.tab_contents1');

    var tab2 = new Tab();
    tab2.init('.tab_menu2', '.tab_contents2');

});

function Tab() {
    var that = this;

    that.$tabMenu = null;
    that.$tabContents = null;
    that.currentIndex = null;
    that.oldIndex = null;

    that.init = function (menu, contents) {
        that.currentIndex = 0;
        that.$tabMenu = $(menu).find('li');
        that.$tabContents = $(contents).find('li');

        that.initEvent();
    };

    that.initEvent = function () {
        that. $tabMenu.on('click', function () {
            that.oldIndex = that.currentIndex;
            that.currentIndex = $(this).index();

            that.tabMenuToggle($(this));
            that.tabContentsToggle();
        });
    };

    that.tabMenuToggle = function ($self) {
        that.$tabMenu.removeClass('active');
        $self.addClass('active');
    };

    that.tabContentsToggle = function () {
        that.$tabContents.eq(that.oldIndex).hide();
        that.$tabContents.eq(that.currentIndex).show();
     };
}