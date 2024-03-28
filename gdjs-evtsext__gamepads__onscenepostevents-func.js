
if (typeof gdjs.evtsExt__Gamepads__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__onScenePostEvents = {};


gdjs.evtsExt__Gamepads__onScenePostEvents.userFunc0x8d7800 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Each time a player press a button i save the last button pressed for the next frame
/** @type {Gamepad[]} */
var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameter
let countPlayers = Object.keys(gdjs._extensionController.players).length;

//Repeat for each players
for (var i = 0; i < countPlayers; i++) {
    var gamepad = gamepads[i]; // Get the gamepad of the player
    if (gamepad == null) return;

    for (var b = 0; b < Object.keys(gamepad.buttons).length; b++) { //For each buttons
        if (gamepad.buttons[b].pressed) { //One of them is pressed
            gdjs._extensionController.players[i].lastButtonUsed = b; //Save the button pressed

            //Save the state of the button for the next frame.
            gdjs._extensionController.players[i].previousFrameStateButtons[b] = { pressed: true };
        }
    }
}



};
gdjs.evtsExt__Gamepads__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__Gamepads__onScenePostEvents.userFunc0x8d7800(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Gamepads__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
