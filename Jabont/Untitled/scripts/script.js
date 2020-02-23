/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference -     
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Animation = require('Animation');


// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
const coralfish = Scene.root.find('coralfish')
var driver = Animation.timeDriver({durationMilliseconds: 1000});
var sampler = Animation.samplers.linear(3, -5);
coralfish.transform.z = Animation.animate(driver, sampler);
// driver.start();
Diagnostics.watch("Mouth Openness - ", coralfish.transform.x.lastvalue);// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
