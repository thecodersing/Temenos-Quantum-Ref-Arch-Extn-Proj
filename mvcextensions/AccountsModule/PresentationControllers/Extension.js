define({
  getAccountsSC: function(resp) {
    resp = resp.accounts;
    var maskedData = resp.map(acc => {
      acc.accountidmasked = acc.accountid.slice(-3)
        .padStart(acc.accountid.length, 'X');
      return acc;
    });
    var accNavObj = applicationManager.getNavigationManager();
    accNavObj.setCustomInfo("frmHome",maskedData);
    accNavObj.navigateTo("frmHome");
  }
});