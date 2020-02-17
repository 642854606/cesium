import defineProperties from '../Core/defineProperties.js';
import destroyObject from '../Core/destroyObject.js';

    /**
     * @private
     */
    function GlobeTranslucency() {
        this._colorTexture = undefined;
        this._depthTexture = undefined;
    }

    defineProperties(GlobeTranslucency.prototype, {
        command : {
            get : function() {
                return this._translucentCommand;
            }
        },
        framebuffer : {
            get : function() {
                return this._framebuffer;
            }
        }
    });

    GlobeTranslucency.prototype.isDestroyed = function() {
        return false;
    };

    GlobeTranslucency.prototype.destroy = function() {
        return destroyObject(this);
    };

    GlobeTranslucency.prototype.update = function(globeCommands, length) {
        // Create derived commands
        // Modify behavior based on fog and depthTestAgainstTerrain and logDepth and such
        // Clear stencil
    };

    GlobeTranslucency.prototype.executeBackFaces = function(globeCommands, length) {
        // Execute back face commands
        // Execute terrain classification
    };

    GlobeTranslucency.prototype.executeBackFacesClassification = function(classificationCommands, length) {
        // Execute terrain classification on back faces
    };

    GlobeTranslucency.prototype.executeFrontFaces = function(globeCommands, length) {
        // Execute front faces
    };

    GlobeTranslucency.prototype.executeFrontFacesClassification = function(classificationCommands) {
        // Execute terrain classification on front faces
    };

    GlobeTranslucency.prototype.executeDepthTest = function(depthTexture) {
        // Discard pixels that are behind the given depth texture
        // Called twice for depthTestAgainstTerrain = false, once otherwise
    };

    GlobeTranslucency.prototype.execute = function(globeCommands, sceneDepthTexture) {
        // Execute translucent command in either OIT pass or non-OIT pass
    };

export default GlobeTranslucency;
