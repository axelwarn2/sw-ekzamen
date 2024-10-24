{"version":3,"file":"ui.notification.stack.map.js","names":["BX","namespace","UI","Notification","Position","TOP_LEFT","TOP_CENTER","TOP_RIGHT","BOTTOM_LEFT","BOTTOM_CENTER","BOTTOM_RIGHT","Stack","options","type","isPlainObject","Object","create","this","balloons","queueStack","id","isNotEmptyString","util","getRandomString","toLowerCase","position","getPositionCode","spacing","offsetX","offsetY","newestOnTop","balloonType","Balloon","setOptions","addCustomEvent","Event","getFullName","handleBalloonClose","bind","code","prototype","adjustPosition","balloon","offset","getBalloons","forEach","currentBalloon","getPosition","getContainer","style","left","getOffsetX","top","getOffsetY","transform","right","bottom","getSpacing","getHeight","add","length","getQueue","isBalloonFitToViewport","queue","push","clear","close","Error","indexOf","isNewestOnTop","splice","setState","State","QUEUED","checkQueue","slice","i","INIT","shift","show","viewportHeight","document","documentElement","clientHeight","balloonHeight","event","closingBalloon","getBalloon","getStack","filter","setSpacing","setOffsetX","setOffsetY","setNewestOnTop","setBalloonType","getId","isNumber","reduce","height","getBalloonType","className","isFunction","classFn","getClass","onTop","isBoolean"],"sources":["ui.notification.stack.js"],"mappings":"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"}