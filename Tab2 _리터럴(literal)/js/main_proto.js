$(document).ready(function () {

    var tab1 = new Tab('.tab_menu1', '.tab_contents1');

    var tab2 = new Tab('.tab_menu2', '.tab_contents2');

});

var Tab = function (m, c) {
    this.$tabMenu = null;
    this.$tabContents = null;
    this.currentIndex = null;
    this.oldIndex =  null;

    this.init(m, c);
};

Tab.prototype.init = function (menu, contents) {
    this.currentIndex = 0;
    this.$tabMenu = $(menu).find('li');
    this.$tabContents = $(contents).find('li');

    this. initEvent();
};

Tab.prototype.initEvent = function () {
    var that = this;
    that.$tabMenu.on('click', function () {
        that.oldIndex = that.currentIndex;
        that.currentIndex = $(this).index();

        that.tabMenuToggle($(this));
        that.tabContentsToggle();
    });
};

Tab.prototype.tabMenuToggle = function ($self) {
    this.$tabMenu.removeClass('active');
    $self.addClass('active');
};

Tab.prototype.tabContentsToggle = function () {
    this.$tabContents.eq(this.oldIndex).hide();
    this.$tabContents.eq(this.currentIndex).show();
};