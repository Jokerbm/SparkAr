
/**
 * Modules
 */
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Patches = require('Patches');

const root = Scene.root; // Just a shorthand
const face = FaceTracking.face(0); // Track the first face that appear on the screen

/**
 * Points position of the mouth.
 * Init now to use it later on
 */
const mouthPoint = {
    leftX: face.mouth.leftCorner.x,
    leftY: face.mouth.leftCorner.y,
    righttX: face.mouth.rightCorner.x,
    rightY: face.mouth.rightCorner.y,
    topX: face.mouth.upperLipCenter.x,
    topY: face.mouth.upperLipCenter.y,
    bottomX: face.mouth.lowerLipCenter.x,
    bottomY: face.mouth.lowerLipCenter.y
  };

/**
 * Subscribe to the mouth open event
 */
FaceTracking.face(0)
  .mouth.openness.monitor()
  .subscribe(function(event) {
    if (event.newValue > 0.4) {
      // When the mouth is open, we update the position of each corner and send it back to Spark AR.
      Patches.setScalarValue('mouthleftXCorner', mouthPoint.leftX);
      Patches.setScalarValue('mouthleftYCorner', mouthPoint.leftY);

      Patches.setScalarValue('mouthRightXCorner', mouthPoint.righttX);
      Patches.setScalarValue('mouthRightYCorner', mouthPoint.rightY);

      Patches.setScalarValue('topLipsCenterX', mouthPoint.topX);
      Patches.setScalarValue('topLipsCenterY', mouthPoint.topY);

      Patches.setScalarValue('bottomLipsCenterX', mouthPoint.bottomX);
      Patches.setScalarValue('bottomLipsCenterY', mouthPoint.bottomY);
    }
  });