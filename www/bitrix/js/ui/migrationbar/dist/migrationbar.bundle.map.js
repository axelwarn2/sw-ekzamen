{"version":3,"file":"migrationbar.bundle.map.js","names":["this","BX","exports","main_core","ui_buttons","main_popup","_","t","_t","_t2","_t3","_t4","_t5","_t6","_t7","_t8","_t9","MigrationBar","constructor","target","title","cross","items","buttons","link","hint","width","height","minWidth","minHeight","Type","isDomNode","isString","isObject","isBoolean","isArray","isNumber","layout","wrapper","container","text","remove","popupHint","getWrapper","Tag","render","getContainer","getCross","getTitle","getItemContainer","getButtonsContainer","addEventListener","classList","once","style","setProperty","_this$title","_this$title2","isTitleObject","titleText","alignTitle","align","getHint","getImage","getLink","_this$link","linkNode","href","setCursorPointerMode","add","events","eventKeys","Object","keys","forEach","event","popupHintWidth","hintIconWidth","Popup","darkMode","content","angle","offset","offsetLeft","animation","show","close","adjustItemData","map","item","id","src","setButtons","length","button","option","assign","Button","appendChild","_this$link2","offsetHeight","itemNode","itemKeys","i","setAttribute","UI","Main"],"sources":["migrationbar.bundle.js"],"mappings":"AACAA,KAAKC,GAAKD,KAAKC,IAAM,CAAC,GACrB,SAAUC,EAAQC,EAAUC,EAAWC,GACvC,aAEA,IAAIC,EAAIC,GAAKA,EACXC,EACAC,EACAC,EACAC,EACAC,EACAC,EACAC,EACAC,EACAC,EACF,MAAMC,EACJC,aAAYC,OACVA,EAAMC,MACNA,EAAKC,MACLA,EAAKC,MACLA,EAAKC,QACLA,EAAOC,KACPA,EAAIC,KACJA,EAAIC,MACJA,EAAKC,OACLA,EAAMC,SACNA,EAAQC,UACRA,IAEA7B,KAAKmB,OAAShB,EAAU2B,KAAKC,UAAUZ,GAAUA,EAAS,KAC1DnB,KAAKoB,MAAQjB,EAAU2B,KAAKE,SAASZ,IAAUjB,EAAU2B,KAAKG,SAASb,GAASA,EAAQ,KACxFpB,KAAKqB,MAAQlB,EAAU2B,KAAKI,UAAUb,GAASA,EAAQ,KACvDrB,KAAKsB,MAAQnB,EAAU2B,KAAKK,QAAQb,GAASA,EAAQ,GACrDtB,KAAKuB,QAAUpB,EAAU2B,KAAKK,QAAQZ,GAAWA,EAAU,KAC3DvB,KAAKwB,KAAOrB,EAAU2B,KAAKG,SAAST,GAAQA,EAAO,KACnDxB,KAAKyB,KAAOtB,EAAU2B,KAAKE,SAASP,GAAQA,EAAO,KACnDzB,KAAK0B,MAAQvB,EAAU2B,KAAKM,SAASV,GAASA,EAAQ,KACtD1B,KAAK2B,OAASxB,EAAU2B,KAAKM,SAAST,GAAUA,EAAS,KACzD3B,KAAK4B,SAAWzB,EAAU2B,KAAKM,SAASR,GAAYA,EAAW,KAC/D5B,KAAK6B,UAAY1B,EAAU2B,KAAKM,SAASP,GAAaA,EAAY,KAClE7B,KAAKqC,OAAS,CACZC,QAAS,KACTC,UAAW,KACXjB,MAAO,KACPF,MAAO,KACPoB,KAAM,KACNhB,KAAM,KACNiB,OAAQ,KACRlB,QAAS,MAEXvB,KAAK0C,UAAY,IACnB,CACAC,aACE,IAAK3C,KAAKqC,OAAOC,QAAS,CACxBtC,KAAKqC,OAAOC,QAAUnC,EAAUyC,IAAIC,OAAOrC,IAAOA,EAAKF,CAAC;;MAG1D,CACA,OAAON,KAAKqC,OAAOC,OACrB,CACAQ,eACE,IAAK9C,KAAKqC,OAAOE,UAAW,CAC1BvC,KAAKqC,OAAOE,UAAYpC,EAAUyC,IAAIC,OAAOpC,IAAQA,EAAMH,CAAC;;OAE5D;;QAEC;QACA;;OAED;;MAEAN,KAAKqB,MAAQrB,KAAK+C,WAAa,GAAI/C,KAAKoB,MAAQpB,KAAKgD,WAAa,GAAIhD,KAAKiD,mBAAoBjD,KAAKkD,uBACpGlD,KAAKqC,OAAOE,UAAUY,iBAAiB,gBAAgB,KACrDnD,KAAKqC,OAAOE,UAAUa,UAAUX,OAAO,SAAS,GAC/C,CACDY,KAAM,OAER,GAAIrD,KAAK0B,MAAO,CACd1B,KAAKqC,OAAOE,UAAUe,MAAMC,YAAY,QAASvD,KAAK0B,MAAQ,KAChE,CACA,GAAI1B,KAAK2B,OAAQ,CACf3B,KAAKqC,OAAOE,UAAUe,MAAMC,YAAY,SAAUvD,KAAK2B,OAAS,KAClE,CACA,GAAI3B,KAAK4B,SAAU,CACjB5B,KAAKqC,OAAOE,UAAUe,MAAMC,YAAY,YAAavD,KAAK4B,SAAW,KACvE,CACA,GAAI5B,KAAK6B,UAAW,CAClB7B,KAAKqC,OAAOE,UAAUe,MAAMC,YAAY,aAAcvD,KAAK6B,UAAY,KACzE,CACF,CACA,OAAO7B,KAAKqC,OAAOE,SACrB,CACAS,WACE,IAAKhD,KAAKqC,OAAOjB,MAAO,CACtB,IAAIoC,EAAaC,EACjB,MAAMC,EAAgBvD,EAAU2B,KAAKG,SAASjC,KAAKoB,OACnD,MAAMuC,EAAYD,GAAiBF,EAAcxD,KAAKoB,QAAU,UAAY,EAAIoC,EAAYhB,KAAOxC,KAAKoB,MACxG,MAAMwC,EAAaF,GAAiBD,EAAezD,KAAKoB,QAAU,UAAY,EAAIqC,EAAaI,MAAQ,KACvG7D,KAAKqC,OAAOjB,MAAQjB,EAAUyC,IAAIC,OAAOnC,IAAQA,EAAMJ,CAAC;0CACrB;OACnC;OACA;;MAEAsD,EAAa,WAAaA,EAAa,GAAID,EAAW3D,KAAKyB,KAAOzB,KAAK8D,UAAY,GACrF,CACA,OAAO9D,KAAKqC,OAAOjB,KACrB,CACA2B,WACE,IAAK/C,KAAKqC,OAAOI,OAAQ,CACvBzC,KAAKqC,OAAOI,OAAStC,EAAUyC,IAAIC,OAAOlC,IAAQA,EAAML,CAAC;;;;OAKzDN,KAAKqC,OAAOI,OAAOU,iBAAiB,SAAS,IAAMnD,KAAKyC,UAC1D,CACA,OAAOzC,KAAKqC,OAAOI,MACrB,CACAS,sBACE,IAAKlD,KAAKqC,OAAOd,QAAS,CACxBvB,KAAKqC,OAAOd,QAAUpB,EAAUyC,IAAIC,OAAOjC,IAAQA,EAAMN,CAAC;;MAG5D,CACA,OAAON,KAAKqC,OAAOd,OACrB,CACA0B,mBACE,IAAKjD,KAAKqC,OAAOf,MAAO,CACtBtB,KAAKqC,OAAOf,MAAQnB,EAAUyC,IAAIC,OAAOhC,IAAQA,EAAMP,CAAC;;MAG1D,CACA,OAAON,KAAKqC,OAAOf,KACrB,CACAyC,WACE,OAAO/D,KAAKsB,KACd,CACA0C,UACE,IAAKhE,KAAKqC,OAAOb,KAAM,CACrB,IAAIyC,EACJ,MAAMC,GAAYD,EAAajE,KAAKwB,OAAS,MAAQyC,EAAWE,KAAO,IAAM,MAC7EnE,KAAKqC,OAAOb,KAAOrB,EAAUyC,IAAIC,OAAO/B,IAAQA,EAAMR,CAAC;OACvD,oCAAoC,MAAM;MAC1C4D,EAAUlE,KAAKwB,KAAKgB,KAAM0B,GAC1B,MAAME,EAAuB,KAC3BpE,KAAKqC,OAAOb,KAAK4B,UAAUiB,IAAI,mBAAmB,EAEpD,GAAIrE,KAAKwB,KAAK2C,KAAM,CAClBC,IACApE,KAAKqC,OAAOb,KAAK2C,KAAOnE,KAAKwB,KAAK2C,IACpC,CACA,GAAInE,KAAKwB,KAAKL,OAAQ,CACpBnB,KAAKqC,OAAOb,KAAKL,OAASnB,KAAKwB,KAAKL,MACtC,CACA,GAAInB,KAAKwB,KAAK8C,OAAQ,CACpBF,IACA,MAAMG,EAAYC,OAAOC,KAAKzE,KAAKwB,KAAK8C,QACxCC,EAAUG,SAAQC,IAChB3E,KAAKqC,OAAOb,KAAK2B,iBAAiBwB,GAAO,KACvC3E,KAAKwB,KAAK8C,OAAOK,IAAQ,GACzB,GAEN,CACF,CACA,OAAO3E,KAAKqC,OAAOb,IACrB,CACAsC,UACE,IAAK9D,KAAKqC,OAAOZ,KAAM,CACrBzB,KAAKqC,OAAOZ,KAAOtB,EAAUyC,IAAIC,OAAO9B,IAAQA,EAAMT,CAAC;;;;OAKvD,MAAMsE,EAAiB,IACvB,MAAMC,EAAgB,GACtB7E,KAAK0C,UAAY,IAAIrC,EAAWyE,MAAM,KAAM9E,KAAKqC,OAAOZ,KAAM,CAC5DsD,SAAU,KACVC,QAAShF,KAAKyB,KACdwD,MAAO,CACLC,OAAQN,EAAiB,EAAI,IAE/BlD,MAAOkD,EACPO,aAAcP,EAAiB,GAAKC,EAAgB,EAAI,GACxDO,UAAW,iBAEbpF,KAAKqC,OAAOZ,KAAK0B,iBAAiB,aAAa,KAC7CnD,KAAK0C,UAAU2C,MAAM,IAEvBrF,KAAKqC,OAAOZ,KAAK0B,iBAAiB,cAAc,KAC9CnD,KAAK0C,UAAU4C,OAAO,GAE1B,CACA,OAAOtF,KAAKqC,OAAOZ,IACrB,CACA8D,iBACEvF,KAAKsB,MAAQtB,KAAKsB,MAAMkE,KAAIC,IACnB,CACLC,GAAID,EAAKC,GAAKD,EAAKC,GAAK,KACxBC,IAAKF,EAAKE,IAAMF,EAAKE,IAAM,KAC3BrB,OAAQmB,EAAKnB,OAASmB,EAAKnB,OAAS,QAG1C,CACAsB,aACE,GAAI5F,KAAKuB,QAAQsE,OAAS,EAAG,CAC3B7F,KAAKuB,QAAQmD,SAAQoB,IACnB,MAAMC,EAASvB,OAAOwB,OAAO,CAAC,EAAGF,GACjCA,EAAS,IAAI1F,EAAW6F,OAAOF,GAC/B/F,KAAKkD,sBAAsBgD,YAAYJ,EAAOjD,SAAS,GAE3D,CACF,CACAA,SACE,IAAIsD,EACJ,GAAInG,KAAKmB,OAAQ,CACfnB,KAAK2C,aAAaW,MAAMC,YAAY,SAAUvD,KAAKmB,OAAOiF,aAAe,MACzEpG,KAAKmB,OAAO+E,YAAYlG,KAAK2C,cAC7B3C,KAAK2C,aAAauD,YAAYlG,KAAK8C,eACrC,CACA,GAAI9C,KAAKsB,MAAMuE,OAAS,EAAG,CACzB7F,KAAKsB,MAAMoD,SAAQe,IACjB,IAAIY,EAAWZ,EACfY,EAAWlG,EAAUyC,IAAIC,OAAO7B,IAAQA,EAAMV,CAAC;;QAG/CN,KAAKiD,mBAAmBiD,YAAYG,GACpC,MAAMC,EAAW9B,OAAOC,KAAKgB,GAC7B,IAAK,IAAIc,EAAI,EAAGA,EAAID,EAAST,OAAQU,IAAK,CACxC,MAAM5B,EAAQ2B,EAASC,GACvBF,EAASG,aAAa7B,EAAOc,EAAKd,GACpC,IAEJ,CACA,IAAKwB,EAAcnG,KAAKwB,OAAS,MAAQ2E,EAAY3D,KAAM,CACzDxC,KAAKiD,mBAAmBiD,YAAYlG,KAAKgE,UAC3C,CACF,CACAvB,SACEzC,KAAK8C,eAAeM,UAAUiB,IAAI,WAClCrE,KAAK8C,eAAeK,iBAAiB,gBAAgB,KACnDnD,KAAK8C,eAAeM,UAAUX,OAAO,WACrCzC,KAAK8C,eAAeL,SACpBzC,KAAK2C,aAAaF,QAAQ,GACzB,CACDY,KAAM,MAEV,CACAgC,OACErF,KAAKuF,iBACLvF,KAAK4F,aACL5F,KAAK6C,QACP,EAGF3C,EAAQe,aAAeA,CAExB,EA9PA,CA8PGjB,KAAKC,GAAGwG,GAAKzG,KAAKC,GAAGwG,IAAM,CAAC,EAAGxG,GAAGA,GAAGwG,GAAGxG,GAAGyG"}