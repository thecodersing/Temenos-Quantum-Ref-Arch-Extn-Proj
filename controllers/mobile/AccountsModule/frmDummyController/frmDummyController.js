define({
  onNavigate: function (data) {
    kony.print("onNavigate is invoked");
  },
  onViewCreated: function () {
    kony.print("onViewCreated is invoked");
    this.view.init = this.init;
    this.view.preShow = this.preShow;
    this.view.btnGo.onClick =  this.clickhandler;
  },
  postShow: function () {
    kony.print("postShow is invoked");
  },
  init: function () {
    kony.print("init is invoked");
  },
  preShow: function () {
    kony.print("preshow is invoked");
  },
  clickhandler: function(){
    kony.print("clickhandler is invoked");
    //var nav = new kony.mvc.Navigation("frmHome");
    //nav.navigate();
    var accountsModule = applicationManager.getModule("AccountsModule");
    accountsModule.presentationController.getAccountsandShowHome();
  },
});
