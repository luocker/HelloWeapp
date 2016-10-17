var cc = global.cc;
var _ccsg = global._ccsg;

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) {
                    return a(o, !0);
                }
                if (i) {
                    return i(o, !0);
                }
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = "function" == typeof require && require;
    for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }
    return s;
})({
    1: [ function(require, module, exports) {
        cc._tmp = cc._tmp || {};
        cc._LogInfos = cc._LogInfos || {};
        var engineVersion = "1.3.0-beta.3";
        global["CocosEngine"] = cc.ENGINE_VERSION = engineVersion;
        cc._drawingUtil = null;
        cc._renderContext = null;
        cc._supportRender = false;
        cc._canvas = null;
        cc.container = null;
        cc._gameDiv = null;
        require("./cocos2d/core/utils");
        require("./cocos2d/core/platform/CCSys");
        (function() {
            var _engineInitCalled = false, _engineLoadedCallback = null;
            cc._engineLoaded = false;
            function _determineRenderType() {
                cc._renderType = cc.game.RENDER_TYPE_CANVAS;
                cc._supportRender = true;
            }
            function _afterEngineLoaded() {
                cc._engineLoaded = true;
                console.log(cc.ENGINE_VERSION);
                _engineLoadedCallback && _engineLoadedCallback();
            }
            function _load() {
                _afterEngineLoaded();
            }
            function _windowLoaded() {
                window.removeEventListener("load", _windowLoaded, false);
                _load(cc.game.config);
            }
            cc.initEngine = function(config, cb) {
                if (_engineInitCalled) {
                    var previousCallback = _engineLoadedCallback;
                    _engineLoadedCallback = function() {
                        previousCallback && previousCallback();
                        cb && cb();
                    };
                    return;
                }
                _engineLoadedCallback = cb;
                !cc.game.config && config ? cc.game.config = config : cc.game.config || cc.game._loadConfig();
                config = cc.game.config;
                _determineRenderType(config);
                wx || document.body ? _load(config) : window.addEventListener("load", _windowLoaded, false);
                _engineInitCalled = true;
            };
        })();
    }, {
        "./cocos2d/core/platform/CCSys": 71,
        "./cocos2d/core/utils": 96
    } ],
    2: [ function(require, module, exports) {
        cc._LogInfos = {
            ActionManager: {
                addAction: "cc.ActionManager.addAction(): action must be non-null",
                removeAction: "cocos2d: removeAction: Target not found",
                removeActionByTag: "cc.ActionManager.removeActionByTag(): an invalid tag",
                removeActionByTag_2: "cc.ActionManager.removeActionByTag(): target must be non-null",
                getActionByTag: "cc.ActionManager.getActionByTag(): an invalid tag",
                getActionByTag_2: "cocos2d : getActionByTag(tag = %s): Action not found"
            },
            configuration: {
                loadConfigFile: "Expected 'data' dict, but not found. Config file: %s",
                loadConfigFile_2: "Please load the resource first : %s"
            },
            Director: {
                resume: "cocos2d: Director: Error in gettimeofday",
                setProjection: "cocos2d: Director: unrecognized projection",
                popToSceneStackLevel: "cocos2d: Director: unrecognized projection",
                popToSceneStackLevel_2: "cocos2d: Director: Error in gettimeofday",
                popScene: "running scene should not null",
                pushScene: "the scene should not null"
            },
            Array: {
                verifyType: "element type is wrong!"
            },
            deprecated: '"%s" is deprecated, please use "%s" instead.',
            Scheduler: {
                scheduleCallbackForTarget: "CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:%s to %s",
                scheduleCallbackForTarget_2: "cc.scheduler.scheduleCallbackForTarget(): callback_fn should be non-null.",
                scheduleCallbackForTarget_3: "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
                pauseTarget: "cc.Scheduler.pauseTarget():target should be non-null",
                resumeTarget: "cc.Scheduler.resumeTarget():target should be non-null",
                isTargetPaused: "cc.Scheduler.isTargetPaused():target should be non-null"
            },
            Node: {
                getZOrder: "getZOrder is deprecated. Please use getLocalZOrder instead.",
                setZOrder: "setZOrder is deprecated. Please use setLocalZOrder instead.",
                getRotation: "RotationX != RotationY. Don't know which one to return",
                getScale: "ScaleX != ScaleY. Don't know which one to return",
                addChild: "An Node can't be added as a child of itself.",
                addChild_2: "child already added. It can't be added again",
                addChild_3: "child must be non-null",
                removeFromParentAndCleanup: "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
                boundingBox: "boundingBox is deprecated. Use getBoundingBox instead",
                removeChildByTag: "argument tag is an invalid tag",
                removeChildByTag_2: "cocos2d: removeChildByTag(tag = %s): child not found!",
                removeAllChildrenWithCleanup: "removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead",
                stopActionByTag: "cc.Node.stopActionBy(): argument tag an invalid tag",
                getActionByTag: "cc.Node.getActionByTag(): argument tag is an invalid tag",
                reumeSchedulerAndActions: "resumeSchedulerAndActions is deprecated, please use resume instead.",
                pauseSchedulerAndActions: "pauseSchedulerAndActions is deprecated, please use pause instead.",
                _arrayMakeObjectsPerformSelector: "Unknown callback function",
                reorderChild: "child must be non-null",
                runAction: "cc.Node.runAction(): action must be non-null",
                schedule: "callback function must be non-null",
                schedule_2: "interval must be positive",
                initWithTexture: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
                _requestDirtyFlag: "_ccsg.Node._requestDirtyFlag: failed to satisfy the request, key (%s) for flag have already been taken"
            },
            AtlasNode: {
                _updateAtlasValues: "cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses",
                _initWithTileFile: "",
                _initWithTexture: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."
            },
            _checkEventListenerAvailable: {
                keyboard: "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
                touchOneByOne: "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
                touchAllAtOnce: "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
                acceleration: "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil"
            },
            EventListener: {
                create: "Invalid parameter."
            },
            __getListenerID: "Don't call this method if the event is for touch.",
            LayerMultiplex: {
                initWithLayers: "parameters should not be ending with null in Javascript",
                switchTo: "Invalid index in MultiplexLayer switchTo message",
                switchToAndReleaseMe: "Invalid index in MultiplexLayer switchTo message",
                addLayer: "cc.Layer.addLayer(): layer should be non-null"
            },
            view: {
                setDesignResolutionSize: "Resolution not valid",
                setDesignResolutionSize_2: "should set resolutionPolicy"
            },
            inputManager: {
                handleTouchesBegin: "The touches is more than MAX_TOUCHES, nUnusedIndex = %s"
            },
            checkGLErrorDebug: "WebGL error %s",
            spriteFrameAnimationCache: {
                _addAnimationsWithDictionary: "cocos2d: cc.SpriteFrameAnimationCache: No animations were found in provided dictionary.",
                _addAnimationsWithDictionary_2: "cc.SpriteFrameAnimationCache. Invalid animation format",
                addAnimations: "cc.SpriteFrameAnimationCache.addAnimations(): File could not be found",
                _parseVersion1: "cocos2d: cc.SpriteFrameAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
                _parseVersion1_2: "cocos2d: cc.SpriteFrameAnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
                _parseVersion1_3: "cocos2d: cc.SpriteFrameAnimationCache: None of the frames for animation '%s' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.",
                _parseVersion1_4: "cocos2d: cc.SpriteFrameAnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '%s' may be missing.",
                _parseVersion2: "cocos2d: CCAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
                _parseVersion2_2: "cocos2d: cc.SpriteFrameAnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
                addAnimations_2: "cc.SpriteFrameAnimationCache.addAnimations(): Invalid texture file name"
            },
            Sprite: {
                reorderChild: "cc.Sprite.reorderChild(): this child is not in children list",
                ignoreAnchorPointForPosition: "cc.Sprite.ignoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode",
                setDisplayFrameWithAnimationName: "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found",
                setDisplayFrameWithAnimationName_2: "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index",
                setDisplayFrame: "setDisplayFrame is deprecated, please use setSpriteFrame instead.",
                _updateBlendFunc: "cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode",
                initWithSpriteFrame: "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",
                initWithSpriteFrameName: "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null",
                initWithSpriteFrameName1: " is null, please check.",
                initWithFile: "cc.Sprite.initWithFile(): filename should be non-null",
                setDisplayFrameWithAnimationName_3: "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null",
                reorderChild_2: "cc.Sprite.reorderChild(): child should be non-null",
                addChild: "cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode",
                addChild_2: "cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode",
                addChild_3: "cc.Sprite.addChild(): child should be non-null",
                setTexture: "cc.Sprite.texture setter: Batched sprites should use the same texture as the batchnode",
                updateQuadFromSprite: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
                insertQuadFromSprite: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
                addChild_4: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
                addChild_5: "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture",
                initWithTexture: "Sprite.initWithTexture(): Argument must be non-nil ",
                setSpriteFrame: "Invalid spriteFrameName",
                setTexture_2: "Invalid argument: cc.Sprite.texture setter expects a CCTexture2D.",
                updateQuadFromSprite_2: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
                insertQuadFromSprite_2: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null"
            },
            SpriteBatchNode: {
                addSpriteWithoutQuad: "cc.SpriteBatchNode.addQuadFromSprite(): SpriteBatchNode only supports cc.Sprites as children",
                increaseAtlasCapacity: "cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from %s to %s.",
                increaseAtlasCapacity_2: "cocos2d: WARNING: Not enough memory to resize the atlas",
                reorderChild: "cc.SpriteBatchNode.addChild(): Child doesn't belong to Sprite",
                removeChild: "cc.SpriteBatchNode.addChild(): sprite batch node should contain the child",
                addSpriteWithoutQuad_2: "cc.SpriteBatchNode.addQuadFromSprite(): child should be non-null",
                reorderChild_2: "cc.SpriteBatchNode.addChild(): child should be non-null",
                updateQuadFromSprite: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
                insertQuadFromSprite: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
                addChild: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
                initWithTexture: "Sprite.initWithTexture(): Argument must be non-nil ",
                addChild_2: "cc.Sprite.addChild(): child should be non-null",
                setSpriteFrame: "Invalid spriteFrameName",
                setTexture: "Invalid argument: cc.Sprite texture setter expects a CCTexture2D.",
                updateQuadFromSprite_2: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
                insertQuadFromSprite_2: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
                addChild_3: "cc.SpriteBatchNode.addChild(): child should be non-null"
            },
            spriteFrameCache: {
                _getFrameConfig: "cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist",
                addSpriteFrames: "cocos2d: WARNING: an alias with name %s already exists",
                _checkConflict: "cocos2d: WARNING: Sprite frame: %s has already been added by another source, please fix name conflit",
                getSpriteFrame: "cocos2d: cc.SpriteFrameCahce: Frame %s not found",
                _getFrameConfig_2: "Please load the resource first : %s",
                addSpriteFrames_2: "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null",
                addSpriteFrames_3: "Argument must be non-nil"
            },
            TextureAtlas: {
                initWithFile: "cocos2d: Could not open file: %s",
                insertQuad: "cc.TextureAtlas.insertQuad(): invalid totalQuads",
                initWithTexture: "cc.TextureAtlas.initWithTexture():texture should be non-null",
                updateQuad: "cc.TextureAtlas.updateQuad(): quad should be non-null",
                updateQuad_2: "cc.TextureAtlas.updateQuad(): Invalid index",
                insertQuad_2: "cc.TextureAtlas.insertQuad(): Invalid index",
                insertQuads: "cc.TextureAtlas.insertQuad(): Invalid index + amount",
                insertQuadFromIndex: "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex",
                insertQuadFromIndex_2: "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex",
                removeQuadAtIndex: "cc.TextureAtlas.removeQuadAtIndex(): Invalid index",
                removeQuadsAtIndex: "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds",
                moveQuadsFromIndex: "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds",
                moveQuadsFromIndex_2: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex",
                moveQuadsFromIndex_3: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex"
            },
            textureCache: {
                addPVRTCImage: "TextureCache:addPVRTCImage does not support on HTML5",
                addETCImage: "TextureCache:addPVRTCImage does not support on HTML5",
                textureForKey: "textureForKey is deprecated. Please use getTextureForKey instead.",
                addPVRImage: "addPVRImage does not support on HTML5",
                addUIImage: "cocos2d: Couldn't add UIImage in TextureCache",
                dumpCachedTextureInfo: "cocos2d: '%s' id=%s %s x %s",
                dumpCachedTextureInfo_2: "cocos2d: '%s' id= HTMLCanvasElement %s x %s",
                dumpCachedTextureInfo_3: "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",
                addUIImage_2: "cc.Texture.addUIImage(): image should be non-null",
                invalidKey: "TextureCache: url should be non-null"
            },
            Texture2D: {
                initWithETCFile: "initWithETCFile does not support on HTML5",
                initWithPVRFile: "initWithPVRFile does not support on HTML5",
                initWithPVRTCData: "initWithPVRTCData does not support on HTML5",
                addImage: "cc.Texture.addImage(): path should be non-null",
                initWithImage: "cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil",
                initWithImage_2: "cocos2d: WARNING: Image (%s x %s) is bigger than the supported %s x %s",
                initWithString: "initWithString isn't supported on cocos2d-html5",
                initWithETCFile_2: "initWithETCFile does not support on HTML5",
                initWithPVRFile_2: "initWithPVRFile does not support on HTML5",
                initWithPVRTCData_2: "initWithPVRTCData does not support on HTML5",
                bitsPerPixelForFormat: "bitsPerPixelForFormat: %s, cannot give useful result, it's a illegal pixel format",
                _initPremultipliedATextureWithImage: "cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha",
                addImage_2: "cc.Texture.addImage(): path should be non-null",
                initWithData: "NSInternalInconsistencyException"
            },
            MissingFile: "Missing file: %s",
            RectWidth: "Rect width exceeds maximum margin: %s",
            RectHeight: "Rect height exceeds maximum margin: %s",
            EventManager: {
                addListener: "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
                removeListeners: "Invalid listener type!",
                setPriority: "Can't set fixed priority with scene graph based listener.",
                addListener_2: "Invalid parameters.",
                addListener_3: "listener must be a cc.EventListener object when adding a fixed priority listener",
                addListener_4: "The listener has been registered, please don't register it again.",
                _forceAddEventListener: "Invalid scene graph priority!",
                _updateListeners: "If program goes here, there should be event in dispatch.",
                _updateListeners_2: "_inDispatch should be 1 here."
            }
        };
        cc._LogInfos.Editor = {
            Class: {
                callSuperCtor: "cc.Class will automatically call super constructor of %s, you should not call it manually."
            }
        };
        function _formatString(arg) {
            if ("object" != typeof arg) {
                return arg;
            }
            try {
                return JSON.stringify(arg);
            } catch (err) {
                return "";
            }
        }
        var Enum = require("./cocos2d/core/value-types/CCEnum");
        cc.DebugMode = Enum({
            NONE: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            INFO_FOR_WEB_PAGE: 4,
            WARN_FOR_WEB_PAGE: 5,
            ERROR_FOR_WEB_PAGE: 6
        });
        cc._initDebugSetting = function(mode) {
            cc.log = cc.warn = cc.error = cc._throw = cc.assert = function() {};
            if (mode === cc.DebugMode.NONE) {
                return;
            }
            var locLog;
            if (console && console.log.apply) {
                console.error || (console.error = console.log);
                console.warn || (console.warn = console.log);
                console.error.bind ? cc.error = console.error.bind(console) : cc.error = function() {
                    return console.error.apply(console, arguments);
                };
                cc.assert = function(cond, msg) {
                    if (!cond && msg) {
                        for (var i = 2; i < arguments.length; i++) {
                            msg = msg.replace(/(%s)|(%d)/, _formatString(arguments[i]));
                        }
                        throw new Error(msg);
                    }
                };
                mode !== cc.DebugMode.ERROR && (console.warn.bind ? cc.warn = console.warn.bind(console) : cc.warn = function() {
                    return console.warn.apply(console, arguments);
                });
                if (mode === cc.DebugMode.INFO) {
                    console.log.bind ? cc.log = console.log.bind(console) : cc.log = function() {
                        return console.log.apply(console, arguments);
                    };
                    cc.info = function() {
                        (console.info || console.log).apply(console, arguments);
                    };
                }
            }
            cc._throw = function(error) {
                var stack = error.stack;
                stack ? cc.error(stack) : cc.error(error);
            };
        };
    }, {
        "./cocos2d/core/value-types/CCEnum": 103
    } ],
    3: [ function(require, module, exports) {
        (function(cc, _ccsg) {
            cc._tmp.PrototypeCCNode = function() {
                var _p = _ccsg.Node.prototype;
                cc.defineGetterSetter(_p, "x", _p.getPositionX, _p.setPositionX);
                cc.defineGetterSetter(_p, "y", _p.getPositionY, _p.setPositionY);
                cc.defineGetterSetter(_p, "width", _p._getWidth, _p._setWidth);
                cc.defineGetterSetter(_p, "height", _p._getHeight, _p._setHeight);
                cc.defineGetterSetter(_p, "anchorX", _p._getAnchorX, _p._setAnchorX);
                cc.defineGetterSetter(_p, "anchorY", _p._getAnchorY, _p._setAnchorY);
                cc.defineGetterSetter(_p, "skewX", _p.getSkewX, _p.setSkewX);
                cc.defineGetterSetter(_p, "skewY", _p.getSkewY, _p.setSkewY);
                cc.defineGetterSetter(_p, "zIndex", _p.getLocalZOrder, _p.setLocalZOrder);
                cc.defineGetterSetter(_p, "vertexZ", _p.getVertexZ, _p.setVertexZ);
                cc.defineGetterSetter(_p, "rotation", _p.getRotation, _p.setRotation);
                cc.defineGetterSetter(_p, "rotationX", _p.getRotationX, _p.setRotationX);
                cc.defineGetterSetter(_p, "rotationY", _p.getRotationY, _p.setRotationY);
                cc.defineGetterSetter(_p, "scale", _p.getScale, _p.setScale);
                cc.defineGetterSetter(_p, "scaleX", _p.getScaleX, _p.setScaleX);
                cc.defineGetterSetter(_p, "scaleY", _p.getScaleY, _p.setScaleY);
                cc.defineGetterSetter(_p, "children", _p.getChildren);
                cc.defineGetterSetter(_p, "childrenCount", _p.getChildrenCount);
                cc.defineGetterSetter(_p, "parent", _p.getParent, _p.setParent);
                cc.defineGetterSetter(_p, "visible", _p.isVisible, _p.setVisible);
                cc.defineGetterSetter(_p, "running", _p.isRunning);
                cc.defineGetterSetter(_p, "ignoreAnchor", _p.isIgnoreAnchorPointForPosition, _p.setIgnoreAnchorPointForPosition);
                cc.defineGetterSetter(_p, "actionManager", _p.getActionManager, _p.setActionManager);
                cc.defineGetterSetter(_p, "scheduler", _p.getScheduler, _p.setScheduler);
                cc.defineGetterSetter(_p, "shaderProgram", _p.getShaderProgram, _p.setShaderProgram);
                cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
                cc.defineGetterSetter(_p, "opacityModifyRGB", _p.isOpacityModifyRGB);
                cc.defineGetterSetter(_p, "cascadeOpacity", _p.isCascadeOpacityEnabled, _p.setCascadeOpacityEnabled);
                cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
                cc.defineGetterSetter(_p, "cascadeColor", _p.isCascadeColorEnabled, _p.setCascadeColorEnabled);
            };
            cc.s_globalOrderOfArrival = 1;
            _ccsg.Node = cc.Class({
                name: "ccsg.Node",
                properties: {
                    _localZOrder: 0,
                    _globalZOrder: 0,
                    _vertexZ: 0,
                    _rotationX: 0,
                    _rotationY: 0,
                    _scaleX: 1,
                    _scaleY: 1,
                    _position: cc.p(0, 0),
                    _skewX: 0,
                    _skewY: 0,
                    _children: [],
                    _visible: true,
                    _anchorPoint: cc.p(0, 0),
                    _contentSize: cc.size(0, 0),
                    _parent: null,
                    _ignoreAnchorPointForPosition: false,
                    tag: cc.macro.NODE_TAG_INVALID,
                    _showNode: false,
                    _name: "",
                    _realOpacity: 255,
                    _realColor: cc.Color.WHITE,
                    _cascadeColorEnabled: false,
                    _cascadeOpacityEnabled: false
                },
                ctor: function() {
                    var name = arguments[0];
                    this.__instanceId = cc.ClassManager.getNewInstanceId();
                    this._running = false;
                    this._reorderChildDirty = false;
                    this._shaderProgram = null;
                    this._arrivalOrder = 0;
                    this._additionalTransformDirty = false;
                    this._isTransitionFinished = false;
                    var director = cc.director;
                    this._actionManager = director.getActionManager();
                    this._scheduler = director.getScheduler();
                    this._additionalTransform = cc.affineTransformMakeIdentity();
                    this._initRendererCmd();
                },
                init: function() {
                    return true;
                },
                _arrayMakeObjectsPerformSelector: function(array, callbackType) {
                    if (!array || 0 === array.length) {
                        return;
                    }
                    var i, len = array.length, node;
                    var nodeCallbackType = _ccsg.Node._stateCallbackType;
                    switch (callbackType) {
                      case nodeCallbackType.onEnter:
                        for (i = 0; i < len; i++) {
                            node = array[i];
                            node && node.onEnter();
                        }
                        break;

                      case nodeCallbackType.onExit:
                        for (i = 0; i < len; i++) {
                            node = array[i];
                            node && node.onExit();
                        }
                        break;

                      case nodeCallbackType.onEnterTransitionDidFinish:
                        for (i = 0; i < len; i++) {
                            node = array[i];
                            node && node.onEnterTransitionDidFinish();
                        }
                        break;

                      case nodeCallbackType.cleanup:
                        for (i = 0; i < len; i++) {
                            node = array[i];
                            node && node.cleanup();
                        }
                        break;

                      case nodeCallbackType.updateTransform:
                        for (i = 0; i < len; i++) {
                            node = array[i];
                            node && node.updateTransform();
                        }
                        break;

                      case nodeCallbackType.onExitTransitionDidStart:
                        for (i = 0; i < len; i++) {
                            node = array[i];
                            node && node.onExitTransitionDidStart();
                        }
                        break;

                      case nodeCallbackType.sortAllChildren:
                        for (i = 0; i < len; i++) {
                            node = array[i];
                            node && node.sortAllChildren();
                        }
                        break;

                      default:
                        cc.assert(0, cc._LogInfos.Node._arrayMakeObjectsPerformSelector);
                    }
                },
                attr: function(attrs) {
                    for (var key in attrs) {
                        this[key] = attrs[key];
                    }
                },
                getSkewX: function() {
                    return this._skewX;
                },
                setSkewX: function(newSkewX) {
                    this._skewX = newSkewX;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getSkewY: function() {
                    return this._skewY;
                },
                setSkewY: function(newSkewY) {
                    this._skewY = newSkewY;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                setLocalZOrder: function(localZOrder) {
                    this._localZOrder = localZOrder;
                    this._parent && this._parent.reorderChild(this, localZOrder);
                },
                _setLocalZOrder: function(localZOrder) {
                    this._localZOrder = localZOrder;
                },
                getLocalZOrder: function() {
                    return this._localZOrder;
                },
                getZOrder: function() {
                    cc.log(cc._LogInfos.Node.getZOrder);
                    return this.getLocalZOrder();
                },
                setZOrder: function(z) {
                    cc.log(cc._LogInfos.Node.setZOrder);
                    this.setLocalZOrder(z);
                },
                setGlobalZOrder: function(globalZOrder) {
                    this._globalZOrder !== globalZOrder && (this._globalZOrder = globalZOrder);
                },
                getGlobalZOrder: function() {
                    return this._globalZOrder;
                },
                getVertexZ: function() {
                    return this._vertexZ;
                },
                setVertexZ: function(Var) {
                    this._vertexZ = Var;
                },
                getRotation: function() {
                    this._rotationX !== this._rotationY && cc.log(cc._LogInfos.Node.getRotation);
                    return this._rotationX;
                },
                setRotation: function(newRotation) {
                    this._rotationX = this._rotationY = newRotation;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getRotationX: function() {
                    return this._rotationX;
                },
                setRotationX: function(rotationX) {
                    this._rotationX = rotationX;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getRotationY: function() {
                    return this._rotationY;
                },
                setRotationY: function(rotationY) {
                    this._rotationY = rotationY;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getScale: function() {
                    this._scaleX !== this._scaleY && cc.log(cc._LogInfos.Node.getScale);
                    return this._scaleX;
                },
                setScale: function(scale, scaleY) {
                    this._scaleX = scale;
                    this._scaleY = scaleY || 0 === scaleY ? scaleY : scale;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getScaleX: function() {
                    return this._scaleX;
                },
                setScaleX: function(newScaleX) {
                    this._scaleX = newScaleX;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getScaleY: function() {
                    return this._scaleY;
                },
                setScaleY: function(newScaleY) {
                    this._scaleY = newScaleY;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                setPosition: function(newPosOrxValue, yValue) {
                    var locPosition = this._position;
                    if (void 0 === yValue) {
                        if (locPosition.x === newPosOrxValue.x && locPosition.y === newPosOrxValue.y) {
                            return;
                        }
                        locPosition.x = newPosOrxValue.x;
                        locPosition.y = newPosOrxValue.y;
                    } else {
                        if (locPosition.x === newPosOrxValue && locPosition.y === yValue) {
                            return;
                        }
                        locPosition.x = newPosOrxValue;
                        locPosition.y = yValue;
                    }
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getPosition: function() {
                    return cc.p(this._position);
                },
                getPositionX: function() {
                    return this._position.x;
                },
                setPositionX: function(x) {
                    this._position.x = x;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getPositionY: function() {
                    return this._position.y;
                },
                setPositionY: function(y) {
                    this._position.y = y;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                getChildrenCount: function() {
                    return this._children.length;
                },
                getChildren: function() {
                    return this._children;
                },
                isVisible: function() {
                    return this._visible;
                },
                setVisible: function(visible) {
                    if (this._visible !== visible) {
                        this._visible = visible;
                        this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                        cc.renderer.childrenOrderDirty = true;
                    }
                },
                getAnchorPoint: function() {
                    return cc.p(this._anchorPoint);
                },
                setAnchorPoint: function(point, y) {
                    var locAnchorPoint = this._anchorPoint;
                    if (void 0 === y) {
                        if (point.x === locAnchorPoint.x && point.y === locAnchorPoint.y) {
                            return;
                        }
                        locAnchorPoint.x = point.x;
                        locAnchorPoint.y = point.y;
                    } else {
                        if (point === locAnchorPoint.x && y === locAnchorPoint.y) {
                            return;
                        }
                        locAnchorPoint.x = point;
                        locAnchorPoint.y = y;
                    }
                    this._renderCmd._updateAnchorPointInPoint();
                },
                _getAnchorX: function() {
                    return this._anchorPoint.x;
                },
                _setAnchorX: function(x) {
                    if (this._anchorPoint.x === x) {
                        return;
                    }
                    this._anchorPoint.x = x;
                    this._renderCmd._updateAnchorPointInPoint();
                },
                _getAnchorY: function() {
                    return this._anchorPoint.y;
                },
                _setAnchorY: function(y) {
                    if (this._anchorPoint.y === y) {
                        return;
                    }
                    this._anchorPoint.y = y;
                    this._renderCmd._updateAnchorPointInPoint();
                },
                getAnchorPointInPoints: function() {
                    return this._renderCmd.getAnchorPointInPoints();
                },
                _getWidth: function() {
                    return this._contentSize.width;
                },
                _setWidth: function(width) {
                    this._contentSize.width = width;
                    this._renderCmd._updateAnchorPointInPoint();
                },
                _getHeight: function() {
                    return this._contentSize.height;
                },
                _setHeight: function(height) {
                    this._contentSize.height = height;
                    this._renderCmd._updateAnchorPointInPoint();
                },
                getContentSize: function() {
                    return cc.size(this._contentSize);
                },
                setContentSize: function(size, height) {
                    var locContentSize = this._contentSize;
                    if (void 0 === height) {
                        if (size.width === locContentSize.width && size.height === locContentSize.height) {
                            return;
                        }
                        locContentSize.width = size.width;
                        locContentSize.height = size.height;
                    } else {
                        if (size === locContentSize.width && height === locContentSize.height) {
                            return;
                        }
                        locContentSize.width = size;
                        locContentSize.height = height;
                    }
                    this._renderCmd._updateAnchorPointInPoint();
                },
                isRunning: function() {
                    return this._running;
                },
                getParent: function() {
                    return this._parent;
                },
                setParent: function(parent) {
                    this._parent = parent;
                    var dirtyFlags = _ccsg.Node._dirtyFlags;
                    this._renderCmd.setDirtyFlag(dirtyFlags.transformDirty | dirtyFlags.opacityDirty);
                },
                isIgnoreAnchorPointForPosition: function() {
                    return this._ignoreAnchorPointForPosition;
                },
                setIgnoreAnchorPointForPosition: function(newValue) {
                    if (newValue !== this._ignoreAnchorPointForPosition) {
                        this._ignoreAnchorPointForPosition = newValue;
                        this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                    }
                },
                getTag: function() {
                    return this.tag;
                },
                setTag: function(tag) {
                    this.tag = tag;
                },
                setName: function(name) {
                    this._name = name;
                },
                getName: function() {
                    return this._name;
                },
                updateOrderOfArrival: function() {
                    this._arrivalOrder = ++cc.s_globalOrderOfArrival;
                },
                getActionManager: function() {
                    this._actionManager || (this._actionManager = cc.director.getActionManager());
                    return this._actionManager;
                },
                setActionManager: function(actionManager) {
                    if (this._actionManager !== actionManager) {
                        this.stopAllActions();
                        this._actionManager = actionManager;
                    }
                },
                getScheduler: function() {
                    this._scheduler || (this._scheduler = cc.director.getScheduler());
                    return this._scheduler;
                },
                setScheduler: function(scheduler) {
                    if (this._scheduler !== scheduler) {
                        this.unscheduleAllCallbacks();
                        this._scheduler = scheduler;
                    }
                },
                boundingBox: function() {
                    cc.log(cc._LogInfos.Node.boundingBox);
                    return this.getBoundingBox();
                },
                getBoundingBox: function() {
                    var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
                    return cc._rectApplyAffineTransformIn(rect, this.getNodeToParentTransform());
                },
                cleanup: function() {
                    this.stopAllActions();
                    this.unscheduleAllCallbacks();
                    this._arrayMakeObjectsPerformSelector(this._children, _ccsg.Node._stateCallbackType.cleanup);
                },
                getChildByTag: function(aTag) {
                    var __children = this._children;
                    if (null !== __children) {
                        for (var i = 0; i < __children.length; i++) {
                            var node = __children[i];
                            if (node && node.tag === aTag) {
                                return node;
                            }
                        }
                    }
                    return null;
                },
                getChildByName: function(name) {
                    if (!name) {
                        cc.log("Invalid name");
                        return null;
                    }
                    var locChildren = this._children;
                    for (var i = 0, len = locChildren.length; i < len; i++) {
                        if (locChildren[i]._name === name) {
                            return locChildren[i];
                        }
                    }
                    return null;
                },
                addChild: function(child, localZOrder, tag) {
                    localZOrder = void 0 === localZOrder ? child._localZOrder : localZOrder;
                    var name, setTag = false;
                    if ("undefined" == typeof tag) {
                        tag = void 0;
                        name = child._name;
                    } else {
                        if (cc.js.isString(tag)) {
                            name = tag;
                            tag = void 0;
                        } else {
                            if (cc.js.isNumber(tag)) {
                                setTag = true;
                                name = "";
                            }
                        }
                    }
                    cc.assert(child, cc._LogInfos.Node.addChild_3);
                    cc.assert(null === child._parent, "child already added. It can't be added again");
                    this._addChildHelper(child, localZOrder, tag, name, setTag);
                },
                _addChildHelper: function(child, localZOrder, tag, name, setTag) {
                    this._children || (this._children = []);
                    this._insertChild(child, localZOrder);
                    setTag ? child.setTag(tag) : child.setName(name);
                    child.setParent(this);
                    child.updateOrderOfArrival();
                    if (this._running) {
                        child.onEnter();
                        this._isTransitionFinished && child.onEnterTransitionDidFinish();
                    }
                    child._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                    this._cascadeColorEnabled && child._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.colorDirty);
                    this._cascadeOpacityEnabled && child._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.opacityDirty);
                },
                removeFromParent: function(cleanup) {
                    if (this._parent) {
                        void 0 === cleanup && (cleanup = true);
                        this._parent.removeChild(this, cleanup);
                    }
                },
                removeFromParentAndCleanup: function(cleanup) {
                    cc.log(cc._LogInfos.Node.removeFromParentAndCleanup);
                    this.removeFromParent(cleanup);
                },
                removeChild: function(child, cleanup) {
                    if (0 === this._children.length) {
                        return;
                    }
                    void 0 === cleanup && (cleanup = true);
                    this._children.indexOf(child) > -1 && this._detachChild(child, cleanup);
                    cc.renderer.childrenOrderDirty = true;
                },
                removeChildByTag: function(tag, cleanup) {
                    tag === cc.macro.NODE_TAG_INVALID && cc.log(cc._LogInfos.Node.removeChildByTag);
                    var child = this.getChildByTag(tag);
                    child ? this.removeChild(child, cleanup) : cc.log(cc._LogInfos.Node.removeChildByTag_2, tag);
                },
                removeAllChildrenWithCleanup: function(cleanup) {
                    this.removeAllChildren(cleanup);
                },
                removeAllChildren: function(cleanup) {
                    var __children = this._children;
                    if (null !== __children) {
                        void 0 === cleanup && (cleanup = true);
                        for (var i = 0; i < __children.length; i++) {
                            var node = __children[i];
                            if (node) {
                                if (this._running) {
                                    node.onExitTransitionDidStart();
                                    node.onExit();
                                }
                                cleanup && node.cleanup();
                                node.parent = null;
                                node._renderCmd.detachFromParent();
                            }
                        }
                        this._children.length = 0;
                        cc.renderer.childrenOrderDirty = true;
                    }
                },
                _detachChild: function(child, doCleanup) {
                    if (this._running) {
                        child.onExitTransitionDidStart();
                        child.onExit();
                    }
                    doCleanup && child.cleanup();
                    child.parent = null;
                    child._renderCmd.detachFromParent();
                    cc.js.array.remove(this._children, child);
                },
                _insertChild: function(child, z) {
                    cc.renderer.childrenOrderDirty = this._reorderChildDirty = true;
                    this._children.push(child);
                    child._setLocalZOrder(z);
                },
                setNodeDirty: function() {
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                },
                reorderChild: function(child, zOrder) {
                    cc.assert(child, cc._LogInfos.Node.reorderChild);
                    cc.renderer.childrenOrderDirty = this._reorderChildDirty = true;
                    child.updateOrderOfArrival();
                    child._setLocalZOrder(zOrder);
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.orderDirty);
                },
                sortAllChildren: function() {
                    if (this._reorderChildDirty) {
                        var _children = this._children;
                        var len = _children.length, i, j, tmp;
                        for (i = 1; i < len; i++) {
                            tmp = _children[i];
                            j = i - 1;
                            while (j >= 0) {
                                if (tmp._localZOrder < _children[j]._localZOrder) {
                                    _children[j + 1] = _children[j];
                                } else {
                                    if (!(tmp._localZOrder === _children[j]._localZOrder && tmp._arrivalOrder < _children[j]._arrivalOrder)) {
                                        break;
                                    }
                                    _children[j + 1] = _children[j];
                                }
                                j--;
                            }
                            _children[j + 1] = tmp;
                        }
                        this._reorderChildDirty = false;
                    }
                },
                draw: function(ctx) {},
                transformAncestors: function() {
                    if (null !== this._parent) {
                        this._parent.transformAncestors();
                        this._parent.transform();
                    }
                },
                onEnter: function() {
                    this._isTransitionFinished = false;
                    this._running = true;
                    this._arrayMakeObjectsPerformSelector(this._children, _ccsg.Node._stateCallbackType.onEnter);
                    this.resume();
                },
                onEnterTransitionDidFinish: function() {
                    this._isTransitionFinished = true;
                    this._arrayMakeObjectsPerformSelector(this._children, _ccsg.Node._stateCallbackType.onEnterTransitionDidFinish);
                },
                onExitTransitionDidStart: function() {
                    this._arrayMakeObjectsPerformSelector(this._children, _ccsg.Node._stateCallbackType.onExitTransitionDidStart);
                },
                onExit: function() {
                    this._running = false;
                    this.pause();
                    this._arrayMakeObjectsPerformSelector(this._children, _ccsg.Node._stateCallbackType.onExit);
                },
                runAction: function(action) {
                    cc.assert(action, cc._LogInfos.Node.runAction);
                    this.actionManager.addAction(action, this, !this._running);
                    return action;
                },
                stopAllActions: function() {
                    this.actionManager && this.actionManager.removeAllActionsFromTarget(this);
                },
                stopAction: function(action) {
                    this.actionManager.removeAction(action);
                },
                stopActionByTag: function(tag) {
                    if (tag === cc.Action.TAG_INVALID) {
                        cc.log(cc._LogInfos.Node.stopActionByTag);
                        return;
                    }
                    this.actionManager.removeActionByTag(tag, this);
                },
                getActionByTag: function(tag) {
                    if (tag === cc.Action.TAG_INVALID) {
                        cc.log(cc._LogInfos.Node.getActionByTag);
                        return null;
                    }
                    return this.actionManager.getActionByTag(tag, this);
                },
                getNumberOfRunningActions: function() {
                    return this.actionManager.numberOfRunningActionsInTarget(this);
                },
                scheduleUpdate: function() {
                    this.scheduleUpdateWithPriority(0);
                },
                scheduleUpdateWithPriority: function(priority) {
                    this.scheduler.scheduleUpdate(this, priority, !this._running);
                },
                unscheduleUpdate: function() {
                    this.scheduler.unscheduleUpdate(this);
                },
                schedule: function(callback, interval, repeat, delay, key) {
                    var len = arguments.length;
                    if ("function" == typeof callback) {
                        if (1 === len) {
                            interval = 0;
                            repeat = cc.macro.REPEAT_FOREVER;
                            delay = 0;
                            key = this.__instanceId;
                        } else {
                            if (2 === len) {
                                if ("number" == typeof interval) {
                                    repeat = cc.macro.REPEAT_FOREVER;
                                    delay = 0;
                                    key = this.__instanceId;
                                } else {
                                    key = interval;
                                    interval = 0;
                                    repeat = cc.macro.REPEAT_FOREVER;
                                    delay = 0;
                                }
                            } else {
                                if (3 === len) {
                                    if ("string" == typeof repeat) {
                                        key = repeat;
                                        repeat = cc.macro.REPEAT_FOREVER;
                                    } else {
                                        key = this.__instanceId;
                                    }
                                    delay = 0;
                                } else {
                                    4 === len && (key = this.__instanceId);
                                }
                            }
                        }
                    } else {
                        if (1 === len) {
                            interval = 0;
                            repeat = cc.macro.REPEAT_FOREVER;
                            delay = 0;
                        } else {
                            if (2 === len) {
                                repeat = cc.macro.REPEAT_FOREVER;
                                delay = 0;
                            }
                        }
                    }
                    cc.assert(callback, cc._LogInfos.Node.schedule);
                    cc.assert(interval >= 0, cc._LogInfos.Node.schedule_2);
                    interval = interval || 0;
                    repeat = null == repeat ? cc.macro.REPEAT_FOREVER : repeat;
                    delay = delay || 0;
                    this.scheduler.schedule(callback, this, interval, repeat, delay, !this._running, key);
                },
                scheduleOnce: function(callback, delay, key) {
                    void 0 === key && (key = this.__instanceId);
                    this.schedule(callback, 0, 0, delay, key);
                },
                unschedule: function(callback_fn) {
                    if (!callback_fn) {
                        return;
                    }
                    this.scheduler.unschedule(callback_fn, this);
                },
                unscheduleAllCallbacks: function() {
                    this.scheduler.unscheduleAllForTarget(this);
                },
                resumeSchedulerAndActions: function() {
                    cc.log(cc._LogInfos.Node.resumeSchedulerAndActions);
                    this.resume();
                },
                resume: function() {
                    this.scheduler.resumeTarget(this);
                    this.actionManager && this.actionManager.resumeTarget(this);
                },
                pauseSchedulerAndActions: function() {
                    cc.log(cc._LogInfos.Node.pauseSchedulerAndActions);
                    this.pause();
                },
                pause: function() {
                    this.scheduler.pauseTarget(this);
                    this.actionManager && this.actionManager.pauseTarget(this);
                },
                setAdditionalTransform: function(additionalTransform) {
                    if (void 0 === additionalTransform) {
                        return this._additionalTransformDirty = false;
                    }
                    this._additionalTransform = additionalTransform;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                    this._additionalTransformDirty = true;
                },
                getParentToNodeTransform: function() {
                    return this._renderCmd.getParentToNodeTransform();
                },
                parentToNodeTransform: function() {
                    return this.getParentToNodeTransform();
                },
                getNodeToWorldTransform: function() {
                    var t = this.getNodeToParentTransform();
                    for (var p = this._parent; null !== p; p = p.parent) {
                        t = cc.affineTransformConcat(t, p.getNodeToParentTransform());
                    }
                    return t;
                },
                nodeToWorldTransform: function() {
                    return this.getNodeToWorldTransform();
                },
                getWorldToNodeTransform: function() {
                    return cc.affineTransformInvert(this.getNodeToWorldTransform());
                },
                worldToNodeTransform: function() {
                    return this.getWorldToNodeTransform();
                },
                convertToNodeSpace: function(worldPoint) {
                    return cc.pointApplyAffineTransform(worldPoint, this.getWorldToNodeTransform());
                },
                convertToWorldSpace: function(nodePoint) {
                    nodePoint = nodePoint || cc.v2(0, 0);
                    return cc.pointApplyAffineTransform(nodePoint, this.getNodeToWorldTransform());
                },
                convertToNodeSpaceAR: function(worldPoint) {
                    return cc.pSub(this.convertToNodeSpace(worldPoint), this._renderCmd.getAnchorPointInPoints());
                },
                convertToWorldSpaceAR: function(nodePoint) {
                    nodePoint = nodePoint || cc.v2(0, 0);
                    var pt = cc.pAdd(nodePoint, this._renderCmd.getAnchorPointInPoints());
                    return this.convertToWorldSpace(pt);
                },
                _convertToWindowSpace: function(nodePoint) {
                    var worldPoint = this.convertToWorldSpace(nodePoint);
                    return cc.director.convertToUI(worldPoint);
                },
                convertTouchToNodeSpace: function(touch) {
                    var point = touch.getLocation();
                    return this.convertToNodeSpace(point);
                },
                convertTouchToNodeSpaceAR: function(touch) {
                    var point = cc.director.convertToGL(touch.getLocation());
                    return this.convertToNodeSpaceAR(point);
                },
                updateTransform: function() {
                    this._arrayMakeObjectsPerformSelector(this._children, _ccsg.Node._stateCallbackType.updateTransform);
                },
                retain: function() {},
                release: function() {},
                visit: function(parentCmd) {
                    this._renderCmd.visit(parentCmd);
                },
                transform: function(parentCmd, recursive) {
                    this._renderCmd.transform(parentCmd, recursive);
                },
                nodeToParentTransform: function() {
                    return this.getNodeToParentTransform();
                },
                getNodeToParentTransform: function(ancestor) {
                    var t = this._renderCmd.getNodeToParentTransform();
                    if (ancestor) {
                        var T = {
                            a: t.a,
                            b: t.b,
                            c: t.c,
                            d: t.d,
                            tx: t.tx,
                            ty: t.ty
                        };
                        for (var p = this._parent; null != p && p != ancestor; p = p.getParent()) {
                            cc.affineTransformConcatIn(T, p.getNodeToParentTransform());
                        }
                        return T;
                    }
                    return t;
                },
                getNodeToParentAffineTransform: function(ancestor) {
                    return this.getNodeToParentTransform(ancestor);
                },
                getShaderProgram: function() {
                    return this._renderCmd.getShaderProgram();
                },
                setShaderProgram: function(newShaderProgram) {
                    this._renderCmd.setShaderProgram(newShaderProgram);
                },
                getGLServerState: function() {
                    return 0;
                },
                setGLServerState: function(state) {},
                getBoundingBoxToWorld: function() {
                    var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
                    var trans = this.getNodeToWorldTransform();
                    cc._rectApplyAffineTransformIn(rect, trans);
                    if (!this._children) {
                        return rect;
                    }
                    var locChildren = this._children;
                    for (var i = 0; i < locChildren.length; i++) {
                        var child = locChildren[i];
                        if (child && child._visible) {
                            var childRect = child._getBoundingBoxToCurrentNode(trans);
                            childRect && (rect = cc.rectUnion(rect, childRect));
                        }
                    }
                    return rect;
                },
                _getBoundingBoxToCurrentNode: function(parentTransform) {
                    var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
                    var trans = void 0 === parentTransform ? this.getNodeToParentTransform() : cc.affineTransformConcat(this.getNodeToParentTransform(), parentTransform);
                    cc._rectApplyAffineTransformIn(rect, trans);
                    if (!this._children) {
                        return rect;
                    }
                    var locChildren = this._children;
                    for (var i = 0; i < locChildren.length; i++) {
                        var child = locChildren[i];
                        if (child && child._visible) {
                            var childRect = child._getBoundingBoxToCurrentNode(trans);
                            childRect && (rect = cc.rectUnion(rect, childRect));
                        }
                    }
                    return rect;
                },
                getOpacity: function() {
                    return this._realOpacity;
                },
                getDisplayedOpacity: function() {
                    return this._renderCmd.getDisplayedOpacity();
                },
                setOpacity: function(opacity) {
                    this._realOpacity = opacity;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.opacityDirty);
                },
                updateDisplayedOpacity: function(parentOpacity) {
                    this._renderCmd._updateDisplayOpacity(parentOpacity);
                },
                isCascadeOpacityEnabled: function() {
                    return this._cascadeOpacityEnabled;
                },
                setCascadeOpacityEnabled: function(cascadeOpacityEnabled) {
                    if (this._cascadeOpacityEnabled === cascadeOpacityEnabled) {
                        return;
                    }
                    this._cascadeOpacityEnabled = cascadeOpacityEnabled;
                    this._renderCmd.setCascadeOpacityEnabledDirty();
                },
                getColor: function() {
                    var locRealColor = this._realColor;
                    return cc.color(locRealColor.r, locRealColor.g, locRealColor.b, locRealColor.a);
                },
                getDisplayedColor: function() {
                    return this._renderCmd.getDisplayedColor();
                },
                setColor: function(color) {
                    var locRealColor = this._realColor;
                    locRealColor.r = color.r;
                    locRealColor.g = color.g;
                    locRealColor.b = color.b;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.colorDirty);
                },
                updateDisplayedColor: function(parentColor) {
                    this._renderCmd._updateDisplayColor(parentColor);
                },
                isCascadeColorEnabled: function() {
                    return this._cascadeColorEnabled;
                },
                setCascadeColorEnabled: function(cascadeColorEnabled) {
                    if (this._cascadeColorEnabled === cascadeColorEnabled) {
                        return;
                    }
                    this._cascadeColorEnabled = cascadeColorEnabled;
                    this._renderCmd.setCascadeColorEnabledDirty();
                },
                setOpacityModifyRGB: function(opacityValue) {},
                isOpacityModifyRGB: function() {
                    return false;
                },
                _initRendererCmd: function() {
                    this._renderCmd = cc.renderer.getRenderCmd(this);
                },
                _createRenderCmd: function() {
                    return cc._renderType === cc.game.RENDER_TYPE_CANVAS ? new _ccsg.Node.CanvasRenderCmd(this) : new _ccsg.Node.WebGLRenderCmd(this);
                }
            });
            _ccsg.Node.extend = function(options) {
                return cc._Class.extend.call(_ccsg.Node, options);
            };
            _ccsg.Node.prototype.ctor = _ccsg.Node;
            _ccsg.Node._stateCallbackType = {
                onEnter: 1,
                onExit: 2,
                cleanup: 3,
                onEnterTransitionDidFinish: 4,
                updateTransform: 5,
                onExitTransitionDidStart: 6,
                sortAllChildren: 7
            };
            cc.assert("function" == typeof cc._tmp.PrototypeCCNode, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
            cc._tmp.PrototypeCCNode();
            delete cc._tmp.PrototypeCCNode;
            cc.CustomRenderCmd = function(target, func) {
                this._needDraw = true;
                this._target = target;
                this._callback = func;
                this.rendering = function(ctx, scaleX, scaleY) {
                    if (!this._callback) {
                        return;
                    }
                    this._callback.call(this._target, ctx, scaleX, scaleY);
                };
            };
            var dirtyFlags = _ccsg.Node._dirtyFlags = {
                transformDirty: 1,
                visibleDirty: 2,
                colorDirty: 4,
                opacityDirty: 8,
                cacheDirty: 16,
                orderDirty: 32,
                textDirty: 64,
                gradientDirty: 128,
                textureDirty: 256,
                contentDirty: 512,
                COUNT: 9
            };
            cc.js.get(dirtyFlags, "all", function() {
                var count = dirtyFlags.COUNT;
                return (1 << count) - 1;
            }, false);
            _ccsg.Node._requestDirtyFlag = function(key) {
                cc.assert(!dirtyFlags[key], cc._LogInfos.Node._requestDirtyFlag, key);
                var count = dirtyFlags.COUNT;
                var value = 1 << count;
                dirtyFlags[key] = value;
                dirtyFlags.COUNT++;
                return value;
            };
            var ONE_DEGREE = Math.PI / 180;
            var stack = new Array(50);
            function transformChildTree(root) {
                var index = 1;
                var children, child, curr, parentCmd, i, len;
                stack[0] = root;
                while (index) {
                    index--;
                    curr = stack[index];
                    stack[index] = null;
                    if (!curr) {
                        continue;
                    }
                    children = curr._children;
                    if (children && children.length > 0) {
                        parentCmd = curr._renderCmd;
                        for (i = 0, len = children.length; i < len; ++i) {
                            child = children[i];
                            stack[index] = child;
                            index++;
                            child._renderCmd.transform(parentCmd);
                        }
                    }
                }
            }
            _ccsg.Node.RenderCmd = function(renderable) {
                this._dirtyFlag = 1;
                cc.renderer.pushDirtyNode(this);
                this._node = renderable;
                this._needDraw = false;
                this._anchorPointInPoints = new cc.Vec2(0, 0);
                this._transform = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    tx: 0,
                    ty: 0
                };
                this._worldTransform = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    tx: 0,
                    ty: 0
                };
                this._inverse = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    tx: 0,
                    ty: 0
                };
                this._displayedOpacity = 255;
                this._displayedColor = cc.color(255, 255, 255, 255);
                this._cascadeColorEnabledDirty = false;
                this._cascadeOpacityEnabledDirty = false;
                this._curLevel = -1;
            };
            _ccsg.Node.RenderCmd.prototype = {
                constructor: _ccsg.Node.RenderCmd,
                getAnchorPointInPoints: function() {
                    return cc.p(this._anchorPointInPoints);
                },
                getDisplayedColor: function() {
                    var tmpColor = this._displayedColor;
                    return cc.color(tmpColor.r, tmpColor.g, tmpColor.b, tmpColor.a);
                },
                getDisplayedOpacity: function() {
                    return this._displayedOpacity;
                },
                setCascadeColorEnabledDirty: function() {
                    this._cascadeColorEnabledDirty = true;
                    this.setDirtyFlag(dirtyFlags.colorDirty);
                },
                setCascadeOpacityEnabledDirty: function() {
                    this._cascadeOpacityEnabledDirty = true;
                    this.setDirtyFlag(dirtyFlags.opacityDirty);
                },
                getParentToNodeTransform: function() {
                    this._dirtyFlag & dirtyFlags.transformDirty && (this._inverse = cc.affineTransformInvert(this.getNodeToParentTransform()));
                    return this._inverse;
                },
                detachFromParent: function() {},
                _updateAnchorPointInPoint: function() {
                    var locAPP = this._anchorPointInPoints, locSize = this._node._contentSize, locAnchorPoint = this._node._anchorPoint;
                    locAPP.x = locSize.width * locAnchorPoint.x;
                    locAPP.y = locSize.height * locAnchorPoint.y;
                    this.setDirtyFlag(dirtyFlags.transformDirty);
                },
                setDirtyFlag: function(dirtyFlag) {
                    0 === this._dirtyFlag && 0 !== dirtyFlag && cc.renderer.pushDirtyNode(this);
                    this._dirtyFlag |= dirtyFlag;
                },
                getParentRenderCmd: function() {
                    if (this._node && this._node._parent && this._node._parent._renderCmd) {
                        return this._node._parent._renderCmd;
                    }
                    return null;
                },
                transform: function(parentCmd, recursive) {
                    var node = this._node, pt = parentCmd ? parentCmd._worldTransform : null, t = this._transform, wt = this._worldTransform;
                    var hasRotation = node._rotationX || node._rotationY;
                    var hasSkew = node._skewX || node._skewY;
                    var sx = node._scaleX, sy = node._scaleY;
                    var appX = this._anchorPointInPoints.x, appY = this._anchorPointInPoints.y;
                    var a = 1, b = 0, c = 0, d = 1;
                    if (hasRotation || hasSkew) {
                        t.tx = node._position.x;
                        t.ty = node._position.y;
                        if (hasRotation) {
                            var rotationRadiansX = node._rotationX * ONE_DEGREE;
                            c = Math.sin(rotationRadiansX);
                            d = Math.cos(rotationRadiansX);
                            if (node._rotationY === node._rotationX) {
                                a = d;
                                b = -c;
                            } else {
                                var rotationRadiansY = node._rotationY * ONE_DEGREE;
                                a = Math.cos(rotationRadiansY);
                                b = -Math.sin(rotationRadiansY);
                            }
                        }
                        t.a = a *= sx;
                        t.b = b *= sx;
                        t.c = c *= sy;
                        t.d = d *= sy;
                        if (hasSkew) {
                            var skx = Math.tan(node._skewX * ONE_DEGREE);
                            var sky = Math.tan(node._skewY * ONE_DEGREE);
                            skx === 1 / 0 && (skx = 99999999);
                            sky === 1 / 0 && (sky = 99999999);
                            t.a = a + c * sky;
                            t.b = b + d * sky;
                            t.c = c + a * skx;
                            t.d = d + b * skx;
                        }
                        if (appX || appY) {
                            t.tx -= t.a * appX + t.c * appY;
                            t.ty -= t.b * appX + t.d * appY;
                            if (node._ignoreAnchorPointForPosition) {
                                t.tx += appX;
                                t.ty += appY;
                            }
                        }
                        if (pt) {
                            wt.a = t.a * pt.a + t.b * pt.c;
                            wt.b = t.a * pt.b + t.b * pt.d;
                            wt.c = t.c * pt.a + t.d * pt.c;
                            wt.d = t.c * pt.b + t.d * pt.d;
                            wt.tx = pt.a * t.tx + pt.c * t.ty + pt.tx;
                            wt.ty = pt.d * t.ty + pt.ty + pt.b * t.tx;
                        } else {
                            wt.a = t.a;
                            wt.b = t.b;
                            wt.c = t.c;
                            wt.d = t.d;
                            wt.tx = t.tx;
                            wt.ty = t.ty;
                        }
                    } else {
                        t.a = sx;
                        t.b = 0;
                        t.c = 0;
                        t.d = sy;
                        t.tx = node._position.x;
                        t.ty = node._position.y;
                        if (appX || appY) {
                            t.tx -= t.a * appX;
                            t.ty -= t.d * appY;
                            if (node._ignoreAnchorPointForPosition) {
                                t.tx += appX;
                                t.ty += appY;
                            }
                        }
                        if (pt) {
                            wt.a = t.a * pt.a + t.b * pt.c;
                            wt.b = t.a * pt.b + t.b * pt.d;
                            wt.c = t.c * pt.a + t.d * pt.c;
                            wt.d = t.c * pt.b + t.d * pt.d;
                            wt.tx = t.tx * pt.a + t.ty * pt.c + pt.tx;
                            wt.ty = t.tx * pt.b + t.ty * pt.d + pt.ty;
                        } else {
                            wt.a = t.a;
                            wt.b = t.b;
                            wt.c = t.c;
                            wt.d = t.d;
                            wt.tx = t.tx;
                            wt.ty = t.ty;
                        }
                    }
                    if (this._currentRegion) {
                        this._updateCurrentRegions();
                        this._notifyRegionStatus && this._notifyRegionStatus(_ccsg.Node.CanvasRenderCmd.RegionStatus.DirtyDouble);
                    }
                    recursive && transformChildTree(node);
                    this._cacheDirty = true;
                },
                getNodeToParentTransform: function() {
                    this._dirtyFlag & dirtyFlags.transformDirty && this.transform();
                    return this._transform;
                },
                _propagateFlagsDown: function(parentCmd) {
                    var locFlag = this._dirtyFlag;
                    var parentNode = parentCmd ? parentCmd._node : null;
                    parentNode && parentNode._cascadeColorEnabled && parentCmd._dirtyFlag & dirtyFlags.colorDirty && (locFlag |= dirtyFlags.colorDirty);
                    parentNode && parentNode._cascadeOpacityEnabled && parentCmd._dirtyFlag & dirtyFlags.opacityDirty && (locFlag |= dirtyFlags.opacityDirty);
                    parentCmd && parentCmd._dirtyFlag & dirtyFlags.transformDirty && (locFlag |= dirtyFlags.transformDirty);
                    this._dirtyFlag = locFlag;
                },
                visit: function(parentCmd) {
                    var node = this._node, renderer = cc.renderer;
                    parentCmd = parentCmd || this.getParentRenderCmd();
                    parentCmd && (this._curLevel = parentCmd._curLevel + 1);
                    this._propagateFlagsDown(parentCmd);
                    if (!node._visible) {
                        return;
                    }
                    if (isNaN(node._customZ)) {
                        node._vertexZ = renderer.assignedZ;
                        renderer.assignedZ += renderer.assignedZStep;
                    }
                    this._syncStatus(parentCmd);
                    this.visitChildren();
                },
                _updateDisplayColor: function(parentColor) {
                    var node = this._node;
                    var locDispColor = this._displayedColor, locRealColor = node._realColor;
                    var i, len, selChildren, item;
                    this._notifyRegionStatus && this._notifyRegionStatus(_ccsg.Node.CanvasRenderCmd.RegionStatus.Dirty);
                    if (this._cascadeColorEnabledDirty && !node._cascadeColorEnabled) {
                        locDispColor.r = locRealColor.r;
                        locDispColor.g = locRealColor.g;
                        locDispColor.b = locRealColor.b;
                        var whiteColor = new cc.Color(255, 255, 255, 255);
                        selChildren = node._children;
                        for (i = 0, len = selChildren.length; i < len; i++) {
                            item = selChildren[i];
                            item && item._renderCmd && item._renderCmd._updateDisplayColor(whiteColor);
                        }
                        this._cascadeColorEnabledDirty = false;
                    } else {
                        if (void 0 === parentColor) {
                            var locParent = node._parent;
                            parentColor = locParent && locParent._cascadeColorEnabled ? locParent.getDisplayedColor() : cc.Color.WHITE;
                        }
                        locDispColor.r = 0 | locRealColor.r * parentColor.r / 255;
                        locDispColor.g = 0 | locRealColor.g * parentColor.g / 255;
                        locDispColor.b = 0 | locRealColor.b * parentColor.b / 255;
                        if (node._cascadeColorEnabled) {
                            selChildren = node._children;
                            for (i = 0, len = selChildren.length; i < len; i++) {
                                item = selChildren[i];
                                if (item && item._renderCmd) {
                                    item._renderCmd._updateDisplayColor(locDispColor);
                                    item._renderCmd._updateColor();
                                }
                            }
                        }
                    }
                    this._dirtyFlag &= ~dirtyFlags.colorDirty;
                },
                _updateDisplayOpacity: function(parentOpacity) {
                    var node = this._node;
                    var i, len, selChildren, item;
                    this._notifyRegionStatus && this._notifyRegionStatus(_ccsg.Node.CanvasRenderCmd.RegionStatus.Dirty);
                    if (this._cascadeOpacityEnabledDirty && !node._cascadeOpacityEnabled) {
                        this._displayedOpacity = node._realOpacity;
                        selChildren = node._children;
                        for (i = 0, len = selChildren.length; i < len; i++) {
                            item = selChildren[i];
                            item && item._renderCmd && item._renderCmd._updateDisplayOpacity(255);
                        }
                        this._cascadeOpacityEnabledDirty = false;
                    } else {
                        if (void 0 === parentOpacity) {
                            var locParent = node._parent;
                            parentOpacity = 255;
                            locParent && locParent._cascadeOpacityEnabled && (parentOpacity = locParent.getDisplayedOpacity());
                        }
                        this._displayedOpacity = node._realOpacity * parentOpacity / 255;
                        if (node._cascadeOpacityEnabled) {
                            selChildren = node._children;
                            for (i = 0, len = selChildren.length; i < len; i++) {
                                item = selChildren[i];
                                if (item && item._renderCmd) {
                                    item._renderCmd._updateDisplayOpacity(this._displayedOpacity);
                                    item._renderCmd._updateColor();
                                }
                            }
                        }
                    }
                    this._dirtyFlag &= ~dirtyFlags.opacityDirty;
                },
                _syncDisplayColor: function(parentColor) {
                    var node = this._node, locDispColor = this._displayedColor, locRealColor = node._realColor;
                    if (void 0 === parentColor) {
                        var locParent = node._parent;
                        parentColor = locParent && locParent._cascadeColorEnabled ? locParent.getDisplayedColor() : cc.Color.WHITE;
                    }
                    locDispColor.r = 0 | locRealColor.r * parentColor.r / 255;
                    locDispColor.g = 0 | locRealColor.g * parentColor.g / 255;
                    locDispColor.b = 0 | locRealColor.b * parentColor.b / 255;
                },
                _syncDisplayOpacity: function(parentOpacity) {
                    var node = this._node;
                    if (void 0 === parentOpacity) {
                        var locParent = node._parent;
                        parentOpacity = 255;
                        locParent && locParent._cascadeOpacityEnabled && (parentOpacity = locParent.getDisplayedOpacity());
                    }
                    this._displayedOpacity = node._realOpacity * parentOpacity / 255;
                },
                _updateColor: function() {},
                updateStatus: function() {
                    var locFlag = this._dirtyFlag;
                    if (locFlag & dirtyFlags.contentDirty) {
                        this._notifyRegionStatus && this._notifyRegionStatus(_ccsg.Node.CanvasRenderCmd.RegionStatus.Dirty);
                        this._dirtyFlag &= ~dirtyFlags.contentDirty;
                    }
                    if (locFlag & dirtyFlags.transformDirty) {
                        this.transform(this.getParentRenderCmd(), true);
                        this._dirtyFlag &= ~dirtyFlags.transformDirty;
                    }
                },
                _syncStatus: function(parentCmd) {
                    var locFlag = this._dirtyFlag;
                    locFlag & dirtyFlags.transformDirty && this.transform(parentCmd);
                },
                visitChildren: function() {
                    var renderer = cc.renderer;
                    var node = this._node;
                    var i, children = node._children, child;
                    var len = children.length;
                    if (len > 0) {
                        node.sortAllChildren();
                        for (i = 0; i < len; i++) {
                            child = children[i];
                            if (!(child._localZOrder < 0)) {
                                break;
                            }
                            child._renderCmd.visit(this);
                        }
                        renderer.pushRenderCommand(this);
                        for (;i < len; i++) {
                            children[i]._renderCmd.visit(this);
                        }
                    } else {
                        renderer.pushRenderCommand(this);
                    }
                    this._dirtyFlag = 0;
                }
            };
            _ccsg.Node.RenderCmd.prototype.originVisit = _ccsg.Node.RenderCmd.prototype.visit;
            _ccsg.Node.RenderCmd.prototype.originTransform = _ccsg.Node.RenderCmd.prototype.transform;
            _ccsg.Node.CanvasRenderCmd = function(renderable) {
                _ccsg.Node.RenderCmd.call(this, renderable);
                this._cachedParent = null;
                this._cacheDirty = false;
                this._currentRegion = new cc.Region();
                this._oldRegion = new cc.Region();
                this._regionFlag = 0;
            };
            _ccsg.Node.CanvasRenderCmd.RegionStatus = {
                NotDirty: 0,
                Dirty: 1,
                DirtyDouble: 2
            };
            var proto = _ccsg.Node.CanvasRenderCmd.prototype = Object.create(_ccsg.Node.RenderCmd.prototype);
            proto.constructor = _ccsg.Node.CanvasRenderCmd;
            proto._notifyRegionStatus = function(status) {
                this._needDraw && this._regionFlag < status && (this._regionFlag = status);
            };
            var localBB = new cc.Rect();
            proto.getLocalBB = function() {
                var node = this._node;
                localBB.x = localBB.y = 0;
                localBB.width = node._getWidth();
                localBB.height = node._getHeight();
                return localBB;
            };
            proto._updateCurrentRegions = function() {
                var temp = this._currentRegion;
                this._currentRegion = this._oldRegion;
                this._oldRegion = temp;
                _ccsg.Node.CanvasRenderCmd.RegionStatus.DirtyDouble !== this._regionFlag || this._currentRegion.isEmpty() || this._oldRegion.union(this._currentRegion);
                this._currentRegion.updateRegion(this.getLocalBB(), this._worldTransform);
            };
            proto.setDirtyFlag = function(dirtyFlag, child) {
                _ccsg.Node.RenderCmd.prototype.setDirtyFlag.call(this, dirtyFlag, child);
                this._setCacheDirty(child);
                this._cachedParent && this._cachedParent.setDirtyFlag(dirtyFlag, true);
            };
            proto._setCacheDirty = function() {
                if (false === this._cacheDirty) {
                    this._cacheDirty = true;
                    var cachedP = this._cachedParent;
                    cachedP && cachedP !== this && cachedP._setNodeDirtyForCache && cachedP._setNodeDirtyForCache();
                }
            };
            proto._setCachedParent = function(cachedParent) {
                if (this._cachedParent === cachedParent) {
                    return;
                }
                this._cachedParent = cachedParent;
                var children = this._node._children;
                for (var i = 0, len = children.length; i < len; i++) {
                    children[i]._renderCmd._setCachedParent(cachedParent);
                }
            };
            proto.detachFromParent = function() {
                this._cachedParent = null;
                var selChildren = this._node._children, item;
                for (var i = 0, len = selChildren.length; i < len; i++) {
                    item = selChildren[i];
                    item && item._renderCmd && item._renderCmd.detachFromParent();
                }
            };
            proto.setShaderProgram = function(shaderProgram) {};
            proto.getShaderProgram = function() {
                return null;
            };
            _ccsg.Scene = _ccsg.Node.extend({
                _className: "Scene",
                ctor: function() {
                    _ccsg.Node.prototype.ctor.call(this);
                    this._ignoreAnchorPointForPosition = true;
                    this.setAnchorPoint(.5, .5);
                    this.setContentSize(cc.director.getWinSize());
                }
            });
            cc.LoaderScene = _ccsg.Scene.extend({
                _interval: null,
                _label: null,
                _className: "LoaderScene",
                _onProjectionChange: null,
                cb: null,
                target: null,
                init: function() {
                    var self = this;
                    var logoWidth = 160;
                    var logoHeight = 200;
                    var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(32, 32, 32, 255));
                    self.addChild(bgLayer, 0);
                    var fontSize = 24, lblHeight = -logoHeight / 2 + 100;
                    if (cc._loaderImage) {
                        var img = new Image();
                        img.src = cc._loaderImage;
                        logoWidth = img.width;
                        logoHeight = img.height;
                        self._initStage(img, cc.visibleRect.center);
                        fontSize = 14;
                        lblHeight = -logoHeight / 2 - 10;
                    }
                    var label = self._label = new cc.LabelTTF("Loading... 0%", "Arial", fontSize);
                    label.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, lblHeight)));
                    label.setColor(cc.color(180, 180, 180));
                    bgLayer.addChild(this._label, 10);
                    return true;
                },
                _initStage: function(img, centerPos) {
                    var self = this;
                    var texture2d = self._texture2d = new cc.Texture2D();
                    texture2d.initWithElement(img);
                    texture2d.handleLoadedTexture();
                    var logo = self._logo = new _ccsg.Sprite(texture2d);
                    logo.x = centerPos.x;
                    logo.y = centerPos.y;
                    self._bgLayer.addChild(logo, 10);
                },
                onEnter: function() {
                    var self = this;
                    _ccsg.Node.prototype.onEnter.call(self);
                    self.schedule(self._startLoading, .3);
                    this._onProjectionChange = function() {
                        self._updateTransform();
                    };
                    cc.director.on(cc.Director.EVENT_PROJECTION_CHANGED, this._onProjectionChange);
                },
                onExit: function() {
                    cc.director.off(cc.Director.EVENT_PROJECTION_CHANGED, this._onProjectionChange);
                    _ccsg.Node.prototype.onExit.call(this);
                    var tmpStr = "Loading... 0%";
                    this._label.setString(tmpStr);
                },
                initWithResources: function(resources, cb, target) {
                    cc.js.isString(resources) && (resources = [ resources ]);
                    this.resources = resources || [];
                    this.cb = cb;
                    this.target = target;
                },
                _startLoading: function() {
                    var self = this;
                    self.unschedule(self._startLoading);
                    var res = self.resources;
                    cc.loader.load(res, function(loadedCount, count) {
                        var percent = loadedCount / count * 100 | 0;
                        percent = Math.min(percent, 100);
                        self._label.setString("Loading... " + percent + "%");
                    }, function(error, items) {
                        self.cb && self.cb.call(self.target, error, items);
                    });
                },
                _updateTransform: function() {
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                    this._bgLayer._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                    this._label._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                    this._logo._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                }
            });
            cc.LoaderScene.preload = function(resources, cb, target) {
                var _cc = cc;
                if (!_cc.loaderScene) {
                    _cc.loaderScene = new cc.LoaderScene();
                    _cc.loaderScene.init();
                }
                _cc.loaderScene.initWithResources(resources, cb, target);
                cc.director.runScene(_cc.loaderScene);
                return _cc.loaderScene;
            };
            cc.Layer = _ccsg.Node.extend({
                _className: "Layer",
                ctor: function() {
                    _ccsg.Node.prototype.ctor.call(this);
                    this._ignoreAnchorPointForPosition = true;
                    this.setAnchorPoint(.5, .5);
                    this.setContentSize(cc.winSize);
                },
                init: function() {
                    var _t = this;
                    _t._ignoreAnchorPointForPosition = true;
                    _t.setAnchorPoint(.5, .5);
                    _t.setContentSize(cc.winSize);
                    _t._cascadeColorEnabled = false;
                    _t._cascadeOpacityEnabled = false;
                    return true;
                },
                bake: function() {
                    this._renderCmd.bake();
                },
                unbake: function() {
                    this._renderCmd.unbake();
                },
                isBaked: function() {
                    return this._renderCmd._isBaked;
                },
                addChild: function(child, localZOrder, tag) {
                    _ccsg.Node.prototype.addChild.call(this, child, localZOrder, tag);
                    this._renderCmd._bakeForAddChild(child);
                },
                _createRenderCmd: function() {
                    return cc._renderType === cc.game.RENDER_TYPE_CANVAS ? new cc.Layer.CanvasRenderCmd(this) : new cc.Layer.WebGLRenderCmd(this);
                }
            });
            cc.LayerColor = cc.Layer.extend({
                _blendFunc: null,
                _className: "LayerColor",
                getBlendFunc: function() {
                    return this._blendFunc;
                },
                changeWidthAndHeight: function(w, h) {
                    this.width = w;
                    this.height = h;
                },
                changeWidth: function(w) {
                    this.width = w;
                },
                changeHeight: function(h) {
                    this.height = h;
                },
                setOpacityModifyRGB: function(value) {},
                isOpacityModifyRGB: function() {
                    return false;
                },
                ctor: function(color, width, height) {
                    cc.Layer.prototype.ctor.call(this);
                    this._blendFunc = new cc.BlendFunc(cc.macro.SRC_ALPHA, cc.macro.ONE_MINUS_SRC_ALPHA);
                    cc.LayerColor.prototype.init.call(this, color, width, height);
                },
                init: function(color, width, height) {
                    cc._renderType !== cc.game.RENDER_TYPE_CANVAS && (this.shaderProgram = cc.shaderCache.programForKey(cc.macro.SHADER_POSITION_COLOR));
                    var winSize = cc.director.getWinSize();
                    color = color || cc.color(0, 0, 0, 255);
                    width = void 0 === width ? winSize.width : width;
                    height = void 0 === height ? winSize.height : height;
                    var locRealColor = this._realColor;
                    locRealColor.r = color.r;
                    locRealColor.g = color.g;
                    locRealColor.b = color.b;
                    this._realOpacity = color.a;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.colorDirty | _ccsg.Node._dirtyFlags.opacityDirty);
                    cc.LayerColor.prototype.setContentSize.call(this, width, height);
                    return true;
                },
                setBlendFunc: function(src, dst) {
                    var locBlendFunc = this._blendFunc;
                    if (void 0 === dst) {
                        locBlendFunc.src = src.src;
                        locBlendFunc.dst = src.dst;
                    } else {
                        locBlendFunc.src = src;
                        locBlendFunc.dst = dst;
                    }
                    this._renderCmd.updateBlendFunc(locBlendFunc);
                },
                _createRenderCmd: function() {
                    return cc._renderType === cc.game.RENDER_TYPE_CANVAS ? new cc.LayerColor.CanvasRenderCmd(this) : new cc.LayerColor.WebGLRenderCmd(this);
                }
            });
            (function() {
                var proto = cc.LayerColor.prototype;
                cc.defineGetterSetter(proto, "width", proto._getWidth, proto._setWidth);
                cc.defineGetterSetter(proto, "height", proto._getHeight, proto._setHeight);
            })();
            cc.LayerGradient = cc.LayerColor.extend({
                _endColor: null,
                _startOpacity: 255,
                _endOpacity: 255,
                _alongVector: null,
                _compressedInterpolation: false,
                _className: "LayerGradient",
                _colorStops: [],
                ctor: function(start, end, v, stops) {
                    cc.LayerColor.prototype.ctor.call(this);
                    this._endColor = cc.color(0, 0, 0, 255);
                    this._alongVector = cc.p(0, -1);
                    this._startOpacity = 255;
                    this._endOpacity = 255;
                    if (stops && stops instanceof Array) {
                        this._colorStops = stops;
                        stops.splice(0, 0, {
                            p: 0,
                            color: start || cc.Color.BLACK
                        });
                        stops.push({
                            p: 1,
                            color: end || cc.Color.BLACK
                        });
                    } else {
                        this._colorStops = [ {
                            p: 0,
                            color: start || cc.Color.BLACK
                        }, {
                            p: 1,
                            color: end || cc.Color.BLACK
                        } ];
                    }
                    cc.LayerGradient.prototype.init.call(this, start, end, v, stops);
                },
                init: function(start, end, v, stops) {
                    start = start || cc.color(0, 0, 0, 255);
                    end = end || cc.color(0, 0, 0, 255);
                    v = v || cc.p(0, -1);
                    var _t = this;
                    var locEndColor = _t._endColor;
                    _t._startOpacity = start.a;
                    locEndColor.r = end.r;
                    locEndColor.g = end.g;
                    locEndColor.b = end.b;
                    _t._endOpacity = end.a;
                    _t._alongVector = v;
                    _t._compressedInterpolation = true;
                    cc.LayerColor.prototype.init.call(_t, cc.color(start.r, start.g, start.b, 255));
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.colorDirty | _ccsg.Node._dirtyFlags.opacityDirty | _ccsg.Node._dirtyFlags.gradientDirty);
                    return true;
                },
                setContentSize: function(size, height) {
                    cc.LayerColor.prototype.setContentSize.call(this, size, height);
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.gradientDirty);
                },
                _setWidth: function(width) {
                    cc.LayerColor.prototype._setWidth.call(this, width);
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.gradientDirty);
                },
                _setHeight: function(height) {
                    cc.LayerColor.prototype._setHeight.call(this, height);
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.gradientDirty);
                },
                getStartColor: function() {
                    return cc.color(this._realColor);
                },
                setStartColor: function(color) {
                    this.color = color;
                    var stops = this._colorStops;
                    if (stops && stops.length > 0) {
                        var selColor = stops[0].color;
                        selColor.r = color.r;
                        selColor.g = color.g;
                        selColor.b = color.b;
                    }
                },
                setEndColor: function(color) {
                    var locColor = this._endColor;
                    locColor.r = color.r;
                    locColor.g = color.g;
                    locColor.b = color.b;
                    var stops = this._colorStops;
                    if (stops && stops.length > 0) {
                        var selColor = stops[stops.length - 1].color;
                        selColor.r = color.r;
                        selColor.g = color.g;
                        selColor.b = color.b;
                    }
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.colorDirty);
                },
                getEndColor: function() {
                    return cc.color(this._endColor);
                },
                setStartOpacity: function(o) {
                    this._startOpacity = o;
                    var stops = this._colorStops;
                    stops && stops.length > 0 && (stops[0].color.a = o);
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.opacityDirty);
                },
                getStartOpacity: function() {
                    return this._startOpacity;
                },
                setEndOpacity: function(o) {
                    this._endOpacity = o;
                    var stops = this._colorStops;
                    stops && stops.length > 0 && (stops[stops.length - 1].color.a = o);
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.opacityDirty);
                },
                getEndOpacity: function() {
                    return this._endOpacity;
                },
                setVector: function(Var) {
                    this._alongVector.x = Var.x;
                    this._alongVector.y = Var.y;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.gradientDirty);
                },
                getVector: function() {
                    return cc.p(this._alongVector.x, this._alongVector.y);
                },
                isCompressedInterpolation: function() {
                    return this._compressedInterpolation;
                },
                setCompressedInterpolation: function(compress) {
                    this._compressedInterpolation = compress;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.gradientDirty);
                },
                getColorStops: function() {
                    return this._colorStops;
                },
                setColorStops: function(colorStops) {
                    this._colorStops = colorStops;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.colorDirty | _ccsg.Node._dirtyFlags.opacityDirty | _ccsg.Node._dirtyFlags.gradientDirty);
                },
                _createRenderCmd: function() {
                    return cc._renderType === cc.game.RENDER_TYPE_CANVAS ? new cc.LayerGradient.CanvasRenderCmd(this) : new cc.LayerGradient.WebGLRenderCmd(this);
                }
            });
            (function() {
                var proto = cc.LayerGradient.prototype;
                proto.startColor;
                cc.defineGetterSetter(proto, "startColor", proto.getStartColor, proto.setStartColor);
                proto.endColor;
                cc.defineGetterSetter(proto, "endColor", proto.getEndColor, proto.setEndColor);
                proto.startOpacity;
                cc.defineGetterSetter(proto, "startOpacity", proto.getStartOpacity, proto.setStartOpacity);
                proto.endOpacity;
                cc.defineGetterSetter(proto, "endOpacity", proto.getEndOpacity, proto.setEndOpacity);
                proto.vector;
                cc.defineGetterSetter(proto, "vector", proto.getVector, proto.setVector);
                proto.colorStops;
                cc.defineGetterSetter(proto, "colorStops", proto.getColorStops, proto.setColorStops);
            })();
            cc.LayerMultiplex = cc.Layer.extend({
                _enabledLayer: 0,
                _layers: null,
                _className: "LayerMultiplex",
                ctor: function(layers) {
                    cc.Layer.prototype.ctor.call(this);
                    layers instanceof Array ? cc.LayerMultiplex.prototype.initWithLayers.call(this, layers) : cc.LayerMultiplex.prototype.initWithLayers.call(this, Array.prototype.slice.call(arguments));
                },
                initWithLayers: function(layers) {
                    layers.length > 0 && null == layers[layers.length - 1] && cc.log(cc._LogInfos.LayerMultiplex.initWithLayers);
                    this._layers = layers;
                    this._enabledLayer = 0;
                    this.addChild(this._layers[this._enabledLayer]);
                    return true;
                },
                switchTo: function(n) {
                    if (n >= this._layers.length) {
                        cc.log(cc._LogInfos.LayerMultiplex.switchTo);
                        return;
                    }
                    this.removeChild(this._layers[this._enabledLayer], true);
                    this._enabledLayer = n;
                    this.addChild(this._layers[n]);
                },
                switchToAndReleaseMe: function(n) {
                    if (n >= this._layers.length) {
                        cc.log(cc._LogInfos.LayerMultiplex.switchToAndReleaseMe);
                        return;
                    }
                    this.removeChild(this._layers[this._enabledLayer], true);
                    this._layers[this._enabledLayer] = null;
                    this._enabledLayer = n;
                    this.addChild(this._layers[n]);
                },
                addLayer: function(layer) {
                    if (!layer) {
                        cc.log(cc._LogInfos.LayerMultiplex.addLayer);
                        return;
                    }
                    this._layers.push(layer);
                }
            });
            (function() {
                cc.Layer.CanvasRenderCmd = function(renderable) {
                    _ccsg.Node.CanvasRenderCmd.call(this, renderable);
                    this._isBaked = false;
                    this._bakeSprite = null;
                    this._updateCache = 2;
                };
                var proto = cc.Layer.CanvasRenderCmd.prototype = Object.create(_ccsg.Node.CanvasRenderCmd.prototype);
                proto.constructor = cc.Layer.CanvasRenderCmd;
                proto._setCacheDirty = function(child) {
                    child && 0 === this._updateCache && (this._updateCache = 2);
                    if (false === this._cacheDirty) {
                        this._cacheDirty = true;
                        var cachedP = this._cachedParent;
                        cachedP && cachedP !== this && cachedP._setNodeDirtyForCache && cachedP._setNodeDirtyForCache();
                    }
                };
                proto.updateStatus = function() {
                    var flags = _ccsg.Node._dirtyFlags, locFlag = this._dirtyFlag;
                    if (locFlag & flags.orderDirty) {
                        this._cacheDirty = true;
                        0 === this._updateCache && (this._updateCache = 2);
                        this._dirtyFlag &= ~flags.orderDirty;
                    }
                    _ccsg.Node.RenderCmd.prototype.updateStatus.call(this);
                };
                proto._syncStatus = function(parentCmd) {
                    var flags = _ccsg.Node._dirtyFlags, locFlag = this._dirtyFlag;
                    if (locFlag & flags.orderDirty) {
                        this._cacheDirty = true;
                        0 === this._updateCache && (this._updateCache = 2);
                        this._dirtyFlag &= ~flags.orderDirty;
                    }
                    _ccsg.Node.RenderCmd.prototype._syncStatus.call(this, parentCmd);
                };
                proto.transform = function(parentCmd, recursive) {
                    var wt = this._worldTransform;
                    var a = wt.a, b = wt.b, c = wt.c, d = wt.d;
                    _ccsg.Node.CanvasRenderCmd.prototype.transform.call(this, parentCmd, recursive);
                    wt.a === a && wt.b === b && wt.c === c && wt.d === d || 0 !== this._updateCache || (this._updateCache = 2);
                };
                proto.bake = function() {
                    if (!this._isBaked) {
                        this._needDraw = true;
                        this._isBaked = this._cacheDirty = true;
                        0 === this._updateCache && (this._updateCache = 2);
                        var children = this._node._children;
                        for (var i = 0, len = children.length; i < len; i++) {
                            children[i]._renderCmd._setCachedParent(this);
                        }
                        if (!this._bakeSprite) {
                            this._bakeSprite = new cc.BakeSprite();
                            this._bakeSprite.setAnchorPoint(0, 0);
                        }
                    }
                };
                proto.unbake = function() {
                    if (this._isBaked) {
                        this._needDraw = false;
                        this._isBaked = false;
                        this._cacheDirty = true;
                        0 === this._updateCache && (this._updateCache = 2);
                        var children = this._node._children;
                        for (var i = 0, len = children.length; i < len; i++) {
                            children[i]._renderCmd._setCachedParent(null);
                        }
                    }
                };
                proto.isBaked = function() {
                    return this._isBaked;
                };
                proto.rendering = function() {
                    if (this._cacheDirty) {
                        var node = this._node;
                        var children = node._children, locBakeSprite = this._bakeSprite;
                        this.transform(this.getParentRenderCmd(), true);
                        var boundingBox = this._getBoundingBoxForBake();
                        boundingBox.width = 0 | boundingBox.width + .5;
                        boundingBox.height = 0 | boundingBox.height + .5;
                        var bakeContext = locBakeSprite.getCacheContext();
                        var ctx = bakeContext.getContext();
                        locBakeSprite.setPosition(boundingBox.x, boundingBox.y);
                        if (this._updateCache > 0) {
                            locBakeSprite.resetCanvasSize(boundingBox.width, boundingBox.height);
                            bakeContext.setOffset(0 - boundingBox.x, ctx.canvas.height - boundingBox.height + boundingBox.y);
                            node.sortAllChildren();
                            cc.renderer._turnToCacheMode(this.__instanceId);
                            for (var i = 0, len = children.length; i < len; i++) {
                                children[i].visit(this);
                            }
                            cc.renderer._renderingToCacheCanvas(bakeContext, this.__instanceId);
                            locBakeSprite.transform();
                            this._updateCache--;
                        }
                        this._cacheDirty = false;
                    }
                };
                proto.visit = function(parentCmd) {
                    if (!this._isBaked) {
                        this.originVisit(parentCmd);
                        return;
                    }
                    var node = this._node, children = node._children;
                    var len = children.length;
                    this._propagateFlagsDown(parentCmd);
                    if (!node._visible || 0 === len) {
                        return;
                    }
                    this._syncStatus(parentCmd);
                    cc.renderer.pushRenderCommand(this);
                    this._bakeSprite.visit(this);
                    this._dirtyFlag = 0;
                };
                proto._bakeForAddChild = function(child) {
                    child._parent === this._node && this._isBaked && child._renderCmd._setCachedParent(this);
                };
                proto._getBoundingBoxForBake = function() {
                    var rect = null, node = this._node;
                    if (!node._children || 0 === node._children.length) {
                        return cc.rect(0, 0, 10, 10);
                    }
                    var trans = node.getNodeToWorldTransform();
                    var locChildren = node._children;
                    for (var i = 0, len = locChildren.length; i < len; i++) {
                        var child = locChildren[i];
                        if (child && child._visible) {
                            if (rect) {
                                var childRect = child._getBoundingBoxToCurrentNode(trans);
                                childRect && (rect = cc.rectUnion(rect, childRect));
                            } else {
                                rect = child._getBoundingBoxToCurrentNode(trans);
                            }
                        }
                    }
                    return rect;
                };
            })();
            (function() {
                cc.LayerColor.CanvasRenderCmd = function(renderable) {
                    cc.Layer.CanvasRenderCmd.call(this, renderable);
                    this._needDraw = true;
                    this._blendFuncStr = "source-over";
                    this._bakeRenderCmd = new cc.CustomRenderCmd(this, this._bakeRendering);
                };
                var proto = cc.LayerColor.CanvasRenderCmd.prototype = Object.create(cc.Layer.CanvasRenderCmd.prototype);
                proto.constructor = cc.LayerColor.CanvasRenderCmd;
                proto.unbake = function() {
                    cc.Layer.CanvasRenderCmd.prototype.unbake.call(this);
                    this._needDraw = true;
                };
                proto.rendering = function(ctx, scaleX, scaleY) {
                    var wrapper = ctx || cc._renderContext, context = wrapper.getContext(), node = this._node, curColor = this._displayedColor, opacity = this._displayedOpacity / 255, locWidth = node._contentSize.width, locHeight = node._contentSize.height;
                    if (0 === opacity) {
                        return;
                    }
                    wrapper.setCompositeOperation(this._blendFuncStr);
                    wrapper.setGlobalAlpha(opacity);
                    wrapper.setFillStyle("rgba(" + (0 | curColor.r) + "," + (0 | curColor.g) + "," + (0 | curColor.b) + ", 1)");
                    wrapper.setTransform(this._worldTransform, scaleX, scaleY);
                    context.fillRect(0, 0, locWidth, -locHeight);
                    cc.g_NumberOfDraws++;
                };
                proto.updateBlendFunc = function(blendFunc) {
                    this._blendFuncStr = _ccsg.Node.CanvasRenderCmd._getCompositeOperationByBlendFunc(blendFunc);
                };
                proto._updateSquareVertices = proto._updateSquareVerticesWidth = proto._updateSquareVerticesHeight = function() {};
                proto._bakeRendering = function() {
                    if (this._cacheDirty) {
                        var node = this._node;
                        var locBakeSprite = this._bakeSprite, children = node._children;
                        var len = children.length, i;
                        this.transform(this.getParentRenderCmd(), true);
                        var boundingBox = this._getBoundingBoxForBake();
                        boundingBox.width = 0 | boundingBox.width + .5;
                        boundingBox.height = 0 | boundingBox.height + .5;
                        var bakeContext = locBakeSprite.getCacheContext();
                        var ctx = bakeContext.getContext();
                        locBakeSprite.setPosition(boundingBox.x, boundingBox.y);
                        if (this._updateCache > 0) {
                            ctx.fillStyle = bakeContext._currentFillStyle;
                            locBakeSprite.resetCanvasSize(boundingBox.width, boundingBox.height);
                            bakeContext.setOffset(0 - boundingBox.x, ctx.canvas.height - boundingBox.height + boundingBox.y);
                            var child;
                            cc.renderer._turnToCacheMode(this.__instanceId);
                            if (len > 0) {
                                node.sortAllChildren();
                                for (i = 0; i < len; i++) {
                                    child = children[i];
                                    if (!(child._localZOrder < 0)) {
                                        break;
                                    }
                                    child._renderCmd.visit(this);
                                }
                                cc.renderer.pushRenderCommand(this);
                                for (;i < len; i++) {
                                    children[i]._renderCmd.visit(this);
                                }
                            } else {
                                cc.renderer.pushRenderCommand(this);
                            }
                            cc.renderer._renderingToCacheCanvas(bakeContext, this.__instanceId);
                            locBakeSprite.transform();
                            this._updateCache--;
                        }
                        this._cacheDirty = false;
                    }
                };
                proto.visit = function(parentCmd) {
                    if (!this._isBaked) {
                        this.originVisit();
                        return;
                    }
                    var node = this._node;
                    this._propagateFlagsDown(parentCmd);
                    if (!node._visible) {
                        return;
                    }
                    this._syncStatus(parentCmd);
                    cc.renderer.pushRenderCommand(this._bakeRenderCmd);
                    this._bakeSprite._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.transformDirty);
                    this._bakeSprite.visit(this);
                    this._dirtyFlag = 0;
                };
                proto._getBoundingBoxForBake = function() {
                    var node = this._node;
                    var rect = cc.rect(0, 0, node._contentSize.width, node._contentSize.height);
                    var trans = node.getNodeToWorldTransform();
                    rect = cc.rectApplyAffineTransform(rect, node.getNodeToWorldTransform());
                    if (!node._children || 0 === node._children.length) {
                        return rect;
                    }
                    var locChildren = node._children;
                    for (var i = 0; i < locChildren.length; i++) {
                        var child = locChildren[i];
                        if (child && child._visible) {
                            var childRect = child._getBoundingBoxToCurrentNode(trans);
                            rect = cc.rectUnion(rect, childRect);
                        }
                    }
                    return rect;
                };
            })();
            (function() {
                cc.LayerGradient.CanvasRenderCmd = function(renderable) {
                    cc.LayerColor.CanvasRenderCmd.call(this, renderable);
                    this._needDraw = true;
                    this._startPoint = cc.p(0, 0);
                    this._endPoint = cc.p(0, 0);
                    this._startStopStr = null;
                    this._endStopStr = null;
                };
                var proto = cc.LayerGradient.CanvasRenderCmd.prototype = Object.create(cc.LayerColor.CanvasRenderCmd.prototype);
                proto.constructor = cc.LayerGradient.CanvasRenderCmd;
                proto.rendering = function(ctx, scaleX, scaleY) {
                    var wrapper = ctx || cc._renderContext, context = wrapper.getContext(), node = this._node, opacity = this._displayedOpacity / 255;
                    if (0 === opacity) {
                        return;
                    }
                    var locWidth = node._contentSize.width, locHeight = node._contentSize.height;
                    wrapper.setCompositeOperation(this._blendFuncStr);
                    wrapper.setGlobalAlpha(opacity);
                    var gradient = context.createLinearGradient(this._startPoint.x, this._startPoint.y, this._endPoint.x, this._endPoint.y);
                    if (node._colorStops) {
                        for (var i = 0; i < node._colorStops.length; i++) {
                            var stop = node._colorStops[i];
                            gradient.addColorStop(stop.p, this._colorStopsStr[i]);
                        }
                    } else {
                        gradient.addColorStop(0, this._startStopStr);
                        gradient.addColorStop(1, this._endStopStr);
                    }
                    wrapper.setFillStyle(gradient);
                    wrapper.setTransform(this._worldTransform, scaleX, scaleY);
                    context.fillRect(0, 0, locWidth, -locHeight);
                    cc.g_NumberOfDraws++;
                };
                proto.updateStatus = function() {
                    var flags = _ccsg.Node._dirtyFlags, locFlag = this._dirtyFlag;
                    if (locFlag & flags.gradientDirty) {
                        this._dirtyFlag |= flags.colorDirty;
                        this._dirtyFlag &= ~flags.gradientDirty;
                    }
                    _ccsg.Node.RenderCmd.prototype.updateStatus.call(this);
                };
                proto._syncStatus = function(parentCmd) {
                    var flags = _ccsg.Node._dirtyFlags, locFlag = this._dirtyFlag;
                    if (locFlag & flags.gradientDirty) {
                        this._dirtyFlag |= flags.colorDirty;
                        this._dirtyFlag &= ~flags.gradientDirty;
                    }
                    _ccsg.Node.RenderCmd.prototype._syncStatus.call(this, parentCmd);
                };
                proto._updateColor = function() {
                    var node = this._node;
                    var contentSize = node._contentSize;
                    var tWidth = .5 * contentSize.width, tHeight = .5 * contentSize.height;
                    var angle = cc.pAngleSigned(cc.p(0, -1), node._alongVector);
                    var p1 = cc.pRotateByAngle(cc.p(0, -1), cc.p(0, 0), angle);
                    var factor = Math.min(Math.abs(1 / p1.x), Math.abs(1 / p1.y));
                    this._startPoint.x = tWidth * (-p1.x * factor) + tWidth;
                    this._startPoint.y = tHeight * (p1.y * factor) - tHeight;
                    this._endPoint.x = tWidth * (p1.x * factor) + tWidth;
                    this._endPoint.y = tHeight * (-p1.y * factor) - tHeight;
                    var locStartColor = this._displayedColor, locEndColor = node._endColor;
                    var startOpacity = node._startOpacity / 255, endOpacity = node._endOpacity / 255;
                    this._startStopStr = "rgba(" + Math.round(locStartColor.r) + "," + Math.round(locStartColor.g) + "," + Math.round(locStartColor.b) + "," + startOpacity.toFixed(4) + ")";
                    this._endStopStr = "rgba(" + Math.round(locEndColor.r) + "," + Math.round(locEndColor.g) + "," + Math.round(locEndColor.b) + "," + endOpacity.toFixed(4) + ")";
                    if (node._colorStops) {
                        this._startOpacity = 0;
                        this._endOpacity = 0;
                        this._colorStopsStr = [];
                        for (var i = 0; i < node._colorStops.length; i++) {
                            var stopColor = node._colorStops[i].color;
                            var stopOpacity = null == stopColor.a ? 1 : stopColor.a / 255;
                            this._colorStopsStr.push("rgba(" + Math.round(stopColor.r) + "," + Math.round(stopColor.g) + "," + Math.round(stopColor.b) + "," + stopOpacity.toFixed(4) + ")");
                        }
                    }
                };
            })();
            cc.configuration = {
                ERROR: 0,
                STRING: 1,
                INT: 2,
                DOUBLE: 3,
                BOOLEAN: 4,
                _maxTextureSize: 0,
                _maxModelviewStackDepth: 0,
                _supportsPVRTC: false,
                _supportsNPOT: false,
                _supportsBGRA8888: false,
                _supportsDiscardFramebuffer: false,
                _supportsShareableVAO: false,
                _maxSamplesAllowed: 0,
                _maxTextureUnits: 0,
                _GlExtensions: "",
                _valueDict: {},
                _inited: false,
                _init: function() {
                    var locValueDict = this._valueDict;
                    locValueDict["cocos2d.x.version"] = cc.ENGINE_VERSION;
                    locValueDict["cocos2d.x.compiled_with_profiler"] = false;
                    locValueDict["cocos2d.x.compiled_with_gl_state_cache"] = cc.macro.ENABLE_GL_STATE_CACHE;
                    this._inited = true;
                },
                getMaxTextureSize: function() {
                    return this._maxTextureSize;
                },
                getMaxModelviewStackDepth: function() {
                    return this._maxModelviewStackDepth;
                },
                getMaxTextureUnits: function() {
                    return this._maxTextureUnits;
                },
                supportsNPOT: function() {
                    return this._supportsNPOT;
                },
                supportsPVRTC: function() {
                    return this._supportsPVRTC;
                },
                supportsETC: function() {
                    return false;
                },
                supportsS3TC: function() {
                    return false;
                },
                supportsATITC: function() {
                    return false;
                },
                supportsBGRA8888: function() {
                    return this._supportsBGRA8888;
                },
                supportsDiscardFramebuffer: function() {
                    return this._supportsDiscardFramebuffer;
                },
                supportsShareableVAO: function() {
                    return this._supportsShareableVAO;
                },
                checkForGLExtension: function(searchName) {
                    return this._GlExtensions.indexOf(searchName) > -1;
                },
                getValue: function(key, default_value) {
                    this._inited || this._init();
                    var locValueDict = this._valueDict;
                    if (locValueDict[key]) {
                        return locValueDict[key];
                    }
                    return default_value;
                },
                setValue: function(key, value) {
                    this._valueDict[key] = value;
                },
                gatherGPUInfo: function() {
                    if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                        return;
                    }
                    this._inited || this._init();
                    var gl = cc._renderContext;
                    var locValueDict = this._valueDict;
                    locValueDict["gl.vendor"] = gl.getParameter(gl.VENDOR);
                    locValueDict["gl.renderer"] = gl.getParameter(gl.RENDERER);
                    locValueDict["gl.version"] = gl.getParameter(gl.VERSION);
                    this._GlExtensions = "";
                    var extArr = gl.getSupportedExtensions();
                    for (var i = 0; i < extArr.length; i++) {
                        this._GlExtensions += extArr[i] + " ";
                    }
                    this._maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
                    locValueDict["gl.max_texture_size"] = this._maxTextureSize;
                    this._maxTextureUnits = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
                    locValueDict["gl.max_texture_units"] = this._maxTextureUnits;
                    this._supportsPVRTC = this.checkForGLExtension("GL_IMG_texture_compression_pvrtc");
                    locValueDict["gl.supports_PVRTC"] = this._supportsPVRTC;
                    this._supportsNPOT = false;
                    locValueDict["gl.supports_NPOT"] = this._supportsNPOT;
                    this._supportsBGRA8888 = this.checkForGLExtension("GL_IMG_texture_format_BGRA888");
                    locValueDict["gl.supports_BGRA8888"] = this._supportsBGRA8888;
                    this._supportsDiscardFramebuffer = this.checkForGLExtension("GL_EXT_discard_framebuffer");
                    locValueDict["gl.supports_discard_framebuffer"] = this._supportsDiscardFramebuffer;
                    this._supportsShareableVAO = this.checkForGLExtension("vertex_array_object");
                    locValueDict["gl.supports_vertex_array_object"] = this._supportsShareableVAO;
                    cc.checkGLErrorDebug();
                },
                loadConfigFile: function(url) {
                    this._inited || this._init();
                    var dict = cc.loader.getRes(url);
                    if (!dict) {
                        throw new Error("Please load the resource first : " + url);
                    }
                    cc.assert(dict, cc._LogInfos.configuration.loadConfigFile_2, url);
                    var getDatas = dict["data"];
                    if (!getDatas) {
                        cc.log(cc._LogInfos.configuration.loadConfigFile, url);
                        return;
                    }
                    for (var selKey in getDatas) {
                        this._valueDict[selKey] = getDatas[selKey];
                    }
                }
            };
            cc.DrawingPrimitiveCanvas = cc._Class.extend({
                _cacheArray: [],
                _renderContext: null,
                ctor: function(renderContext) {
                    this._renderContext = renderContext;
                },
                drawPoint: function(point, size) {
                    size || (size = 1);
                    var locScaleX = cc.view.getScaleX(), locScaleY = cc.view.getScaleY();
                    var newPoint = cc.p(point.x * locScaleX, point.y * locScaleY);
                    var ctx = this._renderContext.getContext();
                    ctx.beginPath();
                    ctx.arc(newPoint.x, -newPoint.y, size * locScaleX, 0, 2 * Math.PI, false);
                    ctx.closePath();
                    ctx.fill();
                },
                drawPoints: function(points, numberOfPoints, size) {
                    if (null == points) {
                        return;
                    }
                    size || (size = 1);
                    var locContext = this._renderContext.getContext(), locScaleX = cc.view.getScaleX(), locScaleY = cc.view.getScaleY();
                    locContext.beginPath();
                    for (var i = 0, len = points.length; i < len; i++) {
                        locContext.arc(points[i].x * locScaleX, -points[i].y * locScaleY, size * locScaleX, 0, 2 * Math.PI, false);
                    }
                    locContext.closePath();
                    locContext.fill();
                },
                drawLine: function(origin, destination) {
                    var locContext = this._renderContext.getContext(), locScaleX = cc.view.getScaleX(), locScaleY = cc.view.getScaleY();
                    locContext.beginPath();
                    locContext.moveTo(origin.x * locScaleX, -origin.y * locScaleY);
                    locContext.lineTo(destination.x * locScaleX, -destination.y * locScaleY);
                    locContext.closePath();
                    locContext.stroke();
                },
                drawRect: function(origin, destination) {
                    this.drawLine(cc.p(origin.x, origin.y), cc.p(destination.x, origin.y));
                    this.drawLine(cc.p(destination.x, origin.y), cc.p(destination.x, destination.y));
                    this.drawLine(cc.p(destination.x, destination.y), cc.p(origin.x, destination.y));
                    this.drawLine(cc.p(origin.x, destination.y), cc.p(origin.x, origin.y));
                },
                drawSolidRect: function(origin, destination, color) {
                    var vertices = [ origin, cc.p(destination.x, origin.y), destination, cc.p(origin.x, destination.y) ];
                    this.drawSolidPoly(vertices, 4, color);
                },
                drawPoly: function(vertices, numOfVertices, closePolygon, fill) {
                    fill = fill || false;
                    if (null == vertices) {
                        return;
                    }
                    if (vertices.length < 3) {
                        throw new Error("Polygon's point must greater than 2");
                    }
                    var firstPoint = vertices[0], locContext = this._renderContext.getContext();
                    var locScaleX = cc.view.getScaleX(), locScaleY = cc.view.getScaleY();
                    locContext.beginPath();
                    locContext.moveTo(firstPoint.x * locScaleX, -firstPoint.y * locScaleY);
                    for (var i = 1, len = vertices.length; i < len; i++) {
                        locContext.lineTo(vertices[i].x * locScaleX, -vertices[i].y * locScaleY);
                    }
                    closePolygon && locContext.closePath();
                    fill ? locContext.fill() : locContext.stroke();
                },
                drawSolidPoly: function(polygons, numberOfPoints, color) {
                    this.setDrawColor(color.r, color.g, color.b, color.a);
                    this.drawPoly(polygons, numberOfPoints, true, true);
                },
                drawCircle: function(center, radius, angle, segments, drawLineToCenter) {
                    drawLineToCenter = drawLineToCenter || false;
                    var locContext = this._renderContext.getContext();
                    var locScaleX = cc.view.getScaleX(), locScaleY = cc.view.getScaleY();
                    locContext.beginPath();
                    var endAngle = angle - 2 * Math.PI;
                    locContext.arc(0 | center.x * locScaleX, 0 | -(center.y * locScaleY), radius * locScaleX, -angle, -endAngle, false);
                    drawLineToCenter && locContext.lineTo(0 | center.x * locScaleX, 0 | -(center.y * locScaleY));
                    locContext.stroke();
                },
                drawQuadBezier: function(origin, control, destination, segments) {
                    var vertices = this._cacheArray;
                    vertices.length = 0;
                    var t = 0;
                    for (var i = 0; i < segments; i++) {
                        var x = Math.pow(1 - t, 2) * origin.x + 2 * (1 - t) * t * control.x + t * t * destination.x;
                        var y = Math.pow(1 - t, 2) * origin.y + 2 * (1 - t) * t * control.y + t * t * destination.y;
                        vertices.push(cc.p(x, y));
                        t += 1 / segments;
                    }
                    vertices.push(cc.p(destination.x, destination.y));
                    this.drawPoly(vertices, segments + 1, false, false);
                },
                drawCubicBezier: function(origin, control1, control2, destination, segments) {
                    var vertices = this._cacheArray;
                    vertices.length = 0;
                    var t = 0;
                    for (var i = 0; i < segments; i++) {
                        var x = Math.pow(1 - t, 3) * origin.x + 3 * Math.pow(1 - t, 2) * t * control1.x + 3 * (1 - t) * t * t * control2.x + t * t * t * destination.x;
                        var y = Math.pow(1 - t, 3) * origin.y + 3 * Math.pow(1 - t, 2) * t * control1.y + 3 * (1 - t) * t * t * control2.y + t * t * t * destination.y;
                        vertices.push(cc.p(x, y));
                        t += 1 / segments;
                    }
                    vertices.push(cc.p(destination.x, destination.y));
                    this.drawPoly(vertices, segments + 1, false, false);
                },
                drawCatmullRom: function(points, segments) {
                    this.drawCardinalSpline(points, .5, segments);
                },
                drawCardinalSpline: function(config, tension, segments) {
                    cc._renderContext.setStrokeStyle("rgba(255,255,255,1)");
                    var points = this._cacheArray;
                    points.length = 0;
                    var p, lt;
                    var deltaT = 1 / config.length;
                    for (var i = 0; i < segments + 1; i++) {
                        var dt = i / segments;
                        if (1 === dt) {
                            p = config.length - 1;
                            lt = 1;
                        } else {
                            p = 0 | dt / deltaT;
                            lt = (dt - deltaT * p) / deltaT;
                        }
                        var newPos = cc.cardinalSplineAt(cc.getControlPointAt(config, p - 1), cc.getControlPointAt(config, p - 0), cc.getControlPointAt(config, p + 1), cc.getControlPointAt(config, p + 2), tension, lt);
                        points.push(newPos);
                    }
                    this.drawPoly(points, segments + 1, false, false);
                },
                drawImage: function(image, sourcePoint, sourceSize, destPoint, destSize) {
                    var len = arguments.length;
                    var ctx = this._renderContext.getContext();
                    switch (len) {
                      case 2:
                        var height = image.height;
                        ctx.drawImage(image, sourcePoint.x, -(sourcePoint.y + height));
                        break;

                      case 3:
                        ctx.drawImage(image, sourcePoint.x, -(sourcePoint.y + sourceSize.height), sourceSize.width, sourceSize.height);
                        break;

                      case 5:
                        ctx.drawImage(image, sourcePoint.x, sourcePoint.y, sourceSize.width, sourceSize.height, destPoint.x, -(destPoint.y + destSize.height), destSize.width, destSize.height);
                        break;

                      default:
                        throw new Error("Argument must be non-nil");
                    }
                },
                drawStar: function(ctx, radius, color) {
                    var wrapper = ctx || this._renderContext;
                    var context = wrapper.getContext();
                    radius *= cc.view.getScaleX();
                    var colorStr = "rgba(" + (0 | color.r) + "," + (0 | color.g) + "," + (0 | color.b);
                    wrapper.setFillStyle(colorStr + ",1)");
                    var subRadius = radius / 10;
                    context.beginPath();
                    context.moveTo(-radius, radius);
                    context.lineTo(0, subRadius);
                    context.lineTo(radius, radius);
                    context.lineTo(subRadius, 0);
                    context.lineTo(radius, -radius);
                    context.lineTo(0, -subRadius);
                    context.lineTo(-radius, -radius);
                    context.lineTo(-subRadius, 0);
                    context.lineTo(-radius, radius);
                    context.closePath();
                    context.fill();
                    var rg = context.createRadialGradient(0, 0, subRadius, 0, 0, radius);
                    rg.addColorStop(0, colorStr + ", 1)");
                    rg.addColorStop(.3, colorStr + ", 0.8)");
                    rg.addColorStop(1, colorStr + ", 0.0)");
                    wrapper.setFillStyle(rg);
                    context.beginPath();
                    var startAngle_1 = 0;
                    var endAngle_1 = cc.macro.PI2;
                    context.arc(0, 0, radius - subRadius, startAngle_1, endAngle_1, false);
                    context.closePath();
                    context.fill();
                },
                drawColorBall: function(ctx, radius, color) {
                    var wrapper = ctx || this._renderContext;
                    var context = wrapper.getContext();
                    radius *= cc.view.getScaleX();
                    var colorStr = "rgba(" + (0 | color.r) + "," + (0 | color.g) + "," + (0 | color.b);
                    var subRadius = radius / 10;
                    var g1 = context.createRadialGradient(0, 0, subRadius, 0, 0, radius);
                    g1.addColorStop(0, colorStr + ", 1)");
                    g1.addColorStop(.3, colorStr + ", 0.8)");
                    g1.addColorStop(.6, colorStr + ", 0.4)");
                    g1.addColorStop(1, colorStr + ", 0.0)");
                    wrapper.setFillStyle(g1);
                    context.beginPath();
                    var startAngle_1 = 0;
                    var endAngle_1 = cc.macro.PI2;
                    context.arc(0, 0, radius, startAngle_1, endAngle_1, false);
                    context.closePath();
                    context.fill();
                },
                fillText: function(strText, x, y) {
                    this._renderContext.getContext().fillText(strText, x, -y);
                },
                setDrawColor: function(r, g, b, a) {
                    this._renderContext.setFillStyle("rgba(" + r + "," + g + "," + b + "," + a / 255 + ")");
                    this._renderContext.setStrokeStyle("rgba(" + r + "," + g + "," + b + "," + a / 255 + ")");
                },
                setPointSize: function(pointSize) {},
                setLineWidth: function(width) {
                    this._renderContext.getContext().lineWidth = width * cc.view.getScaleX();
                }
            });
            var EventTarget = require("../cocos2d/core/event/event-target");
            var dataPool = {
                _pool: {},
                _lengths: [],
                put: function(data) {
                    var length = data.length;
                    if (this._pool[length]) {
                        this._pool[length].push(data);
                    } else {
                        this._pool[length] = [ data ];
                        this._lengths.push(length);
                        this._lengths.sort();
                    }
                },
                get: function(length) {
                    var id;
                    for (var i = 0; i < this._lengths.length; i++) {
                        if (this._lengths[i] >= length) {
                            id = this._lengths[i];
                            break;
                        }
                    }
                    return id ? this._pool[id].pop() : void 0;
                }
            };
            var FIX_ARTIFACTS_BY_STRECHING_TEXEL = cc.macro.FIX_ARTIFACTS_BY_STRECHING_TEXEL, webgl, vl, vb, vt, vr, cornerId = [];
            var simpleQuadGenerator = {
                _rebuildQuads_base: function(sprite, spriteFrame, contentSize, isTrimmedContentSize) {
                    var vertices = sprite._vertices, wt = sprite._renderCmd._worldTransform, l, b, r, t;
                    if (isTrimmedContentSize) {
                        l = 0;
                        b = 0;
                        r = contentSize.width;
                        t = contentSize.height;
                    } else {
                        var originalSize = spriteFrame._originalSize;
                        var rect = spriteFrame._rect;
                        var offset = spriteFrame._offset;
                        var scaleX = contentSize.width / originalSize.width;
                        var scaleY = contentSize.height / originalSize.height;
                        var trimmLeft = offset.x + (originalSize.width - rect.width) / 2;
                        var trimmRight = offset.x - (originalSize.width - rect.width) / 2;
                        var trimmedBottom = offset.y + (originalSize.height - rect.height) / 2;
                        var trimmedTop = offset.y - (originalSize.height - rect.height) / 2;
                        l = trimmLeft * scaleX;
                        b = trimmedBottom * scaleY;
                        r = contentSize.width + trimmRight * scaleX;
                        t = contentSize.height + trimmedTop * scaleY;
                    }
                    if (vertices.length < 8) {
                        dataPool.put(vertices);
                        vertices = dataPool.get(8) || new Float32Array(8);
                        sprite._vertices = vertices;
                    }
                    if (webgl) {
                        vertices[0] = l * wt.a + b * wt.c + wt.tx;
                        vertices[1] = l * wt.b + b * wt.d + wt.ty;
                        vertices[2] = r * wt.a + b * wt.c + wt.tx;
                        vertices[3] = r * wt.b + b * wt.d + wt.ty;
                        vertices[4] = l * wt.a + t * wt.c + wt.tx;
                        vertices[5] = l * wt.b + t * wt.d + wt.ty;
                        vertices[6] = r * wt.a + t * wt.c + wt.tx;
                        vertices[7] = r * wt.b + t * wt.d + wt.ty;
                    } else {
                        vertices[0] = l;
                        vertices[1] = b;
                        vertices[2] = r;
                        vertices[3] = b;
                        vertices[4] = l;
                        vertices[5] = t;
                        vertices[6] = r;
                        vertices[7] = t;
                    }
                    cornerId[0] = 0;
                    cornerId[1] = 2;
                    cornerId[2] = 4;
                    cornerId[3] = 6;
                    sprite._uvsDirty && this._calculateUVs(sprite, spriteFrame);
                    sprite._vertCount = 4;
                },
                _calculateUVs: function(sprite, spriteFrame) {
                    var uvs = sprite._uvs;
                    var atlasWidth = spriteFrame._rect.width;
                    var atlasHeight = spriteFrame._rect.height;
                    var textureRect = spriteFrame._rect;
                    if (uvs.length < 8) {
                        dataPool.put(uvs);
                        uvs = dataPool.get(8) || new Float32Array(8);
                        sprite._uvs = uvs;
                    }
                    var l, b, r, t;
                    var texelCorrect = FIX_ARTIFACTS_BY_STRECHING_TEXEL ? .5 : 0;
                    if (spriteFrame._rotated) {
                        l = (textureRect.x + texelCorrect) / atlasWidth;
                        b = (textureRect.y + textureRect.width - texelCorrect) / atlasHeight;
                        r = (textureRect.x + textureRect.height - texelCorrect) / atlasWidth;
                        t = (textureRect.y + texelCorrect) / atlasHeight;
                        uvs[0] = l;
                        uvs[1] = t;
                        uvs[2] = l;
                        uvs[3] = b;
                        uvs[4] = r;
                        uvs[5] = t;
                        uvs[6] = r;
                        uvs[7] = b;
                    } else {
                        l = (textureRect.x + texelCorrect) / atlasWidth;
                        b = (textureRect.y + textureRect.height - texelCorrect) / atlasHeight;
                        r = (textureRect.x + textureRect.width - texelCorrect) / atlasWidth;
                        t = (textureRect.y + texelCorrect) / atlasHeight;
                        uvs[0] = l;
                        uvs[1] = b;
                        uvs[2] = r;
                        uvs[3] = b;
                        uvs[4] = l;
                        uvs[5] = t;
                        uvs[6] = r;
                        uvs[7] = t;
                    }
                }
            };
            var scale9QuadGenerator = {
                x: new Array(4),
                y: new Array(4),
                _rebuildQuads_base: function(sprite, spriteFrame, contentSize, insetLeft, insetRight, insetTop, insetBottom) {
                    var vertices = sprite._vertices;
                    var wt = sprite._renderCmd._worldTransform;
                    var leftWidth, centerWidth, rightWidth;
                    var topHeight, centerHeight, bottomHeight;
                    var rect = spriteFrame._rect;
                    leftWidth = insetLeft;
                    rightWidth = insetRight;
                    centerWidth = rect.width - leftWidth - rightWidth;
                    topHeight = insetTop;
                    bottomHeight = insetBottom;
                    centerHeight = rect.height - topHeight - bottomHeight;
                    var preferSize = contentSize;
                    var sizableWidth = preferSize.width - leftWidth - rightWidth;
                    var sizableHeight = preferSize.height - topHeight - bottomHeight;
                    var xScale = preferSize.width / (leftWidth + rightWidth);
                    var yScale = preferSize.height / (topHeight + bottomHeight);
                    xScale = xScale > 1 ? 1 : xScale;
                    yScale = yScale > 1 ? 1 : yScale;
                    sizableWidth = sizableWidth < 0 ? 0 : sizableWidth;
                    sizableHeight = sizableHeight < 0 ? 0 : sizableHeight;
                    var x = this.x;
                    var y = this.y;
                    x[0] = 0;
                    x[1] = leftWidth * xScale;
                    x[2] = x[1] + sizableWidth;
                    x[3] = preferSize.width;
                    y[0] = 0;
                    y[1] = bottomHeight * yScale;
                    y[2] = y[1] + sizableHeight;
                    y[3] = preferSize.height;
                    if (vertices.length < 32) {
                        dataPool.put(vertices);
                        vertices = dataPool.get(32) || new Float32Array(32);
                        sprite._vertices = vertices;
                    }
                    var offset = 0, row, col;
                    if (webgl) {
                        for (row = 0; row < 4; row++) {
                            for (col = 0; col < 4; col++) {
                                vertices[offset] = x[col] * wt.a + y[row] * wt.c + wt.tx;
                                vertices[offset + 1] = x[col] * wt.b + y[row] * wt.d + wt.ty;
                                offset += 2;
                            }
                        }
                    } else {
                        for (row = 0; row < 4; row++) {
                            for (col = 0; col < 4; col++) {
                                vertices[offset] = x[col];
                                vertices[offset + 1] = y[row];
                                offset += 2;
                            }
                        }
                    }
                    cornerId[0] = 0;
                    cornerId[1] = 6;
                    cornerId[2] = 24;
                    cornerId[3] = 30;
                    sprite._uvsDirty && this._calculateUVs(sprite, spriteFrame, insetLeft, insetRight, insetTop, insetBottom);
                },
                _calculateUVs: function(sprite, spriteFrame, insetLeft, insetRight, insetTop, insetBottom) {
                    var uvs = sprite._uvs;
                    var rect = spriteFrame._rect;
                    var atlasWidth = spriteFrame._rect.width;
                    var atlasHeight = spriteFrame._rect.height;
                    var leftWidth, centerWidth, rightWidth;
                    var topHeight, centerHeight, bottomHeight;
                    var textureRect = spriteFrame._rect;
                    leftWidth = insetLeft;
                    rightWidth = insetRight;
                    centerWidth = rect.width - leftWidth - rightWidth;
                    topHeight = insetTop;
                    bottomHeight = insetBottom;
                    centerHeight = rect.height - topHeight - bottomHeight;
                    if (uvs.length < 32) {
                        dataPool.put(uvs);
                        uvs = dataPool.get(32) || new Float32Array(32);
                        sprite._uvs = uvs;
                    }
                    var u = this.x;
                    var v = this.y;
                    var texelCorrect = FIX_ARTIFACTS_BY_STRECHING_TEXEL ? .5 : 0;
                    var offset = 0, row, col;
                    if (spriteFrame._rotated) {
                        u[0] = (textureRect.x + texelCorrect) / atlasWidth;
                        u[1] = (bottomHeight + textureRect.x) / atlasWidth;
                        u[2] = (bottomHeight + centerHeight + textureRect.x) / atlasWidth;
                        u[3] = (textureRect.x + textureRect.height - texelCorrect) / atlasWidth;
                        v[3] = (textureRect.y + texelCorrect) / atlasHeight;
                        v[2] = (leftWidth + textureRect.y) / atlasHeight;
                        v[1] = (leftWidth + centerWidth + textureRect.y) / atlasHeight;
                        v[0] = (textureRect.y + textureRect.width - texelCorrect) / atlasHeight;
                        for (row = 0; row < 4; row++) {
                            for (col = 0; col < 4; col++) {
                                uvs[offset] = u[row];
                                uvs[offset + 1] = v[3 - col];
                                offset += 2;
                            }
                        }
                    } else {
                        u[0] = (textureRect.x + texelCorrect) / atlasWidth;
                        u[1] = (leftWidth + textureRect.x) / atlasWidth;
                        u[2] = (leftWidth + centerWidth + textureRect.x) / atlasWidth;
                        u[3] = (textureRect.x + textureRect.width - texelCorrect) / atlasWidth;
                        v[3] = (textureRect.y + texelCorrect) / atlasHeight;
                        v[2] = (topHeight + textureRect.y) / atlasHeight;
                        v[1] = (topHeight + centerHeight + textureRect.y) / atlasHeight;
                        v[0] = (textureRect.y + textureRect.height - texelCorrect) / atlasHeight;
                        for (row = 0; row < 4; row++) {
                            for (col = 0; col < 4; col++) {
                                uvs[offset] = u[col];
                                uvs[offset + 1] = v[row];
                                offset += 2;
                            }
                        }
                    }
                }
            };
            cc.Scale9Sprite = _ccsg.Node.extend({
                _spriteFrame: null,
                _insetLeft: 0,
                _insetRight: 0,
                _insetTop: 0,
                _insetBottom: 0,
                _blendFunc: null,
                _renderingType: 1,
                _brightState: 0,
                _rawVerts: null,
                _rawUvs: null,
                _vertices: null,
                _uvs: null,
                _vertCount: 0,
                _quadsDirty: true,
                _uvsDirty: true,
                _isTriangle: false,
                _isTrimmedContentSize: true,
                _fillType: 0,
                _fillCenter: null,
                _fillStart: 0,
                _fillRange: 2 * Math.PI,
                _distortionOffset: null,
                _distortionTiling: null,
                ctor: function(textureOrSpriteFrame) {
                    _ccsg.Node.prototype.ctor.call(this);
                    this._renderCmd.setState(this._brightState);
                    this._blendFunc = cc.BlendFunc._alphaNonPremultiplied();
                    this._fillCenter = cc.v2(0, 0);
                    this.setAnchorPoint(cc.p(.5, .5));
                    this._rawVerts = null;
                    this._rawUvs = null;
                    this._vertices = dataPool.get(8) || new Float32Array(8);
                    this._uvs = dataPool.get(8) || new Float32Array(8);
                    if ("string" == typeof textureOrSpriteFrame) {
                        var frame = cc.spriteFrameCache.getSpriteFrame(textureOrSpriteFrame);
                        frame ? this.initWithSpriteFrame(frame) : this.initWithTexture(textureOrSpriteFrame);
                    } else {
                        textureOrSpriteFrame instanceof cc.SpriteFrame ? this.initWithSpriteFrame(textureOrSpriteFrame) : textureOrSpriteFrame instanceof cc.Texture2D && this.initWithTexture(textureOrSpriteFrame);
                    }
                    if (void 0 === webgl) {
                        webgl = cc._renderType === cc.game.RENDER_TYPE_WEBGL;
                        vl = cc.visibleRect.left;
                        vr = cc.visibleRect.right;
                        vt = cc.visibleRect.top;
                        vb = cc.visibleRect.bottom;
                    }
                },
                loaded: function() {
                    return null !== this._spriteFrame && this._spriteFrame.textureLoaded();
                },
                initWithTexture: function(textureOrTextureFile) {
                    this.setTexture(textureOrTextureFile);
                },
                initWithSpriteFrame: function(spriteFrameOrSFName) {
                    this.setSpriteFrame(spriteFrameOrSFName);
                },
                setTexture: function(textureOrTextureFile) {
                    var spriteFrame = new cc.SpriteFrame(textureOrTextureFile);
                    this.setSpriteFrame(spriteFrame);
                },
                setSpriteFrame: function(spriteFrameOrSFName) {
                    var spriteFrame;
                    spriteFrame = spriteFrameOrSFName instanceof cc.SpriteFrame ? spriteFrameOrSFName : cc.spriteFrameCache.getSpriteFrame(spriteFrameOrSFName);
                    if (spriteFrame) {
                        this._spriteFrame = spriteFrame;
                        this._quadsDirty = true;
                        this._uvsDirty = true;
                        this._renderCmd._needDraw = false;
                        var self = this;
                        var onResourceDataLoaded = function() {
                            cc.sizeEqualToSize(self._contentSize, cc.size(0, 0)) && self.setContentSize(self._spriteFrame._rect);
                            self._renderCmd._needDraw = true;
                            self._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                        };
                        spriteFrame.textureLoaded() ? onResourceDataLoaded() : spriteFrame.once("load", onResourceDataLoaded, this);
                    }
                },
                setBlendFunc: function(blendFunc, dst) {
                    if (void 0 === dst) {
                        this._blendFunc.src = blendFunc.src || cc.macro.BLEND_SRC;
                        this._blendFunc.dst = blendFunc.dst || cc.macro.BLEND_DST;
                    } else {
                        this._blendFunc.src = blendFunc || cc.macro.BLEND_SRC;
                        this._blendFunc.dst = dst || cc.macro.BLEND_DST;
                    }
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                },
                getBlendFunc: function() {
                    return new cc.BlendFunc(this._blendFunc.src, this._blendFunc.dst);
                },
                setContentSize: function(width, height) {
                    if (void 0 === height) {
                        height = width.height;
                        width = width.width;
                    }
                    if (width === this._contentSize.width && height === this._contentSize.height) {
                        return;
                    }
                    _ccsg.Node.prototype.setContentSize.call(this, width, height);
                    this._quadsDirty = true;
                },
                enableTrimmedContentSize: function(isTrimmed) {
                    if (this._isTrimmedContentSize !== isTrimmed) {
                        this._isTrimmedContentSize = isTrimmed;
                        this._quadsDirty = true;
                        this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                    }
                },
                isTrimmedContentSizeEnabled: function() {
                    return this._isTrimmedContentSize;
                },
                setState: function(state) {
                    this._brightState = state;
                    this._renderCmd.setState(state);
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                },
                getState: function() {
                    return this._brightState;
                },
                setRenderingType: function(type) {
                    if (this._renderingType === type) {
                        return;
                    }
                    this._renderingType = type;
                    this._quadsDirty = true;
                    this._uvsDirty = true;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                },
                getRenderingType: function() {
                    return this._renderingType;
                },
                setInsetLeft: function(insetLeft) {
                    this._insetLeft = insetLeft;
                    this._quadsDirty = true;
                    this._uvsDirty = true;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                },
                getInsetLeft: function() {
                    return this._insetLeft;
                },
                setInsetTop: function(insetTop) {
                    this._insetTop = insetTop;
                    this._quadsDirty = true;
                    this._uvsDirty = true;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                },
                getInsetTop: function() {
                    return this._insetTop;
                },
                setInsetRight: function(insetRight) {
                    this._insetRight = insetRight;
                    this._quadsDirty = true;
                    this._uvsDirty = true;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                },
                getInsetRight: function() {
                    return this._insetRight;
                },
                setInsetBottom: function(insetBottom) {
                    this._insetBottom = insetBottom;
                    this._quadsDirty = true;
                    this._uvsDirty = true;
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                },
                getInsetBottom: function() {
                    return this._insetBottom;
                },
                setFillType: function(value) {
                    if (this._fillType === value) {
                        return;
                    }
                    this._fillType = value;
                    if (this._renderingType === RenderingType.FILLED) {
                        this._quadsDirty = true;
                        this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                    }
                },
                getFillType: function() {
                    return this._fillType;
                },
                setFillCenter: function(value, y) {
                    this._fillCenter = cc.v2(value, y);
                    if (this._renderingType === RenderingType.FILLED && this._fillType === FillType.RADIAL) {
                        this._quadsDirty = true;
                        this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                    }
                },
                setDistortionTiling: function(valueOrX, y) {
                    if (void 0 === y) {
                        y = valueOrX.y;
                        valueOrX = valueOrX.x;
                    }
                    this._distortionTiling = this._distortionTiling || cc.v2(0, 0);
                    this._distortionTiling.x = valueOrX;
                    this._distortionTiling.y = y;
                },
                setDistortionOffset: function(valueOrX, y) {
                    if (void 0 === y) {
                        y = valueOrX.y;
                        valueOrX = valueOrX.x;
                    }
                    this._distortionOffset = this._distortionOffset || cc.v2(0, 0);
                    this._distortionOffset.x = valueOrX;
                    this._distortionOffset.y = y;
                },
                getFillCenter: function() {
                    return cc.v2(this._fillCenter);
                },
                setFillStart: function(value) {
                    if (this._fillStart === value) {
                        return;
                    }
                    this._fillStart = value;
                    if (this._renderingType === RenderingType.FILLED) {
                        this._quadsDirty = true;
                        this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                    }
                },
                getFillStart: function() {
                    return this._fillStart;
                },
                setFillRange: function(value) {
                    if (this._fillRange === value) {
                        return;
                    }
                    this._fillRange = value;
                    if (this._renderingType === RenderingType.FILLED) {
                        this._quadsDirty = true;
                        this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.contentDirty);
                    }
                },
                getFillRange: function() {
                    return this._fillRange;
                },
                _rebuildQuads: function() {
                    if (!this._spriteFrame || !this._spriteFrame._textureLoaded) {
                        this._renderCmd._needDraw = false;
                        return;
                    }
                    this._isTriangle = false;
                    switch (this._renderingType) {
                      case RenderingType.SIMPLE:
                        simpleQuadGenerator._rebuildQuads_base(this, this._spriteFrame, this._contentSize, this._isTrimmedContentSize);
                        break;

                      case RenderingType.SLICED:
                        scale9QuadGenerator._rebuildQuads_base(this, this._spriteFrame, this._contentSize, this._insetLeft, this._insetRight, this._insetTop, this._insetBottom);
                        break;

                      default:
                        this._quadsDirty = false;
                        this._uvsDirty = false;
                        this._renderCmd._needDraw = false;
                        cc.error("Can not generate quad");
                        return;
                    }
                    this._quadsDirty = false;
                    this._uvsDirty = false;
                },
                _createRenderCmd: function() {
                    return cc._renderType === cc.game.RENDER_TYPE_CANVAS ? new cc.Scale9Sprite.CanvasRenderCmd(this) : new cc.Scale9Sprite.WebGLRenderCmd(this);
                }
            });
            var _p = cc.Scale9Sprite.prototype;
            cc.js.addon(_p, EventTarget.prototype);
            cc.defineGetterSetter(_p, "insetLeft", _p.getInsetLeft, _p.setInsetLeft);
            cc.defineGetterSetter(_p, "insetTop", _p.getInsetTop, _p.setInsetTop);
            cc.defineGetterSetter(_p, "insetRight", _p.getInsetRight, _p.setInsetRight);
            cc.defineGetterSetter(_p, "insetBottom", _p.getInsetBottom, _p.setInsetBottom);
            cc.Scale9Sprite.state = {
                NORMAL: 0,
                GRAY: 1,
                DISTORTION: 2
            };
            var RenderingType = cc.Scale9Sprite.RenderingType = cc.Enum({
                SIMPLE: 0,
                SLICED: 1,
                TILED: 2,
                FILLED: 3
            });
            var FillType = cc.Scale9Sprite.FillType = cc.Enum({
                HORIZONTAL: 0,
                VERTICAL: 1,
                RADIAL: 2
            });
            cc.Scale9Sprite.CanvasRenderCmd = function(renderable) {
                _ccsg.Node.CanvasRenderCmd.call(this, renderable);
                this._needDraw = true;
                this._state = cc.Scale9Sprite.state.NORMAL;
                this._originalTexture = this._textureToRender = null;
            };
            var proto = cc.Scale9Sprite.CanvasRenderCmd.prototype = Object.create(_ccsg.Node.CanvasRenderCmd.prototype);
            proto.constructor = cc.Scale9Sprite.CanvasRenderCmd;
            proto.transform = function(parentCmd, recursive) {
                this.originTransform(parentCmd, recursive);
                this._node._rebuildQuads();
            };
            proto._updateDisplayColor = function(parentColor) {
                _ccsg.Node.WebGLRenderCmd.prototype._updateDisplayColor.call(this, parentColor);
                this._originalTexture = this._textureToRender = null;
            };
            proto.setState = function(state) {
                if (this._state === state) {
                    return;
                }
                this._state = state;
                this._originalTexture = this._textureToRender = null;
            };
            proto.rendering = function(ctx, scaleX, scaleY) {
                var node = this._node;
                var locDisplayOpacity = this._displayedOpacity;
                var locTexture = null;
                node._spriteFrame && (locTexture = node._spriteFrame._textureFilename);
                if (!node.loaded() || 0 === locDisplayOpacity) {
                    return;
                }
                null !== this._textureToRender && this._originalTexture === locTexture || (this._textureToRender = this._originalTexture = locTexture);
                var wrapper = ctx || cc._renderContext, context = wrapper.getContext();
                wrapper.save();
                wrapper.setTransform(this._worldTransform, scaleX, scaleY);
                if (this._textureToRender) {
                    node._quadsDirty && node._rebuildQuads();
                    var x, y, w, h;
                    var vertices = node._vertices;
                    x = vertices[0];
                    y = vertices[1];
                    w = vertices[6] - x;
                    h = vertices[7] - y;
                    y = -y - h;
                    w > 0 && h > 0 && context.drawImage(this._textureToRender, x, y, w, h);
                    cc.g_NumberOfDraws++;
                }
                wrapper.restore();
            };
            var TextUtils = {
                label_wordRex: /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+|\S)/,
                label_symbolRex: /^[!,.:;}\]%\?>、‘“》？。，！]/,
                label_lastWordRex: /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+|\S)$/,
                label_lastEnglish: /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+$/,
                label_firsrEnglish: /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]/,
                label_wrapinspection: true,
                isUnicodeCJK: function(ch) {
                    var __CHINESE_REG = /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/;
                    var __JAPANESE_REG = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
                    var __KOREAN_REG = /^[\u1100-\u11FF]|[\u3130-\u318F]|[\uA960-\uA97F]|[\uAC00-\uD7AF]|[\uD7B0-\uD7FF]+$/;
                    return __CHINESE_REG.test(ch) || __JAPANESE_REG.test(ch) || __KOREAN_REG.test(ch);
                },
                isUnicodeSpace: function(ch) {
                    ch = ch.charCodeAt(0);
                    return ch >= 9 && ch <= 13 || 32 === ch || 133 === ch || 160 === ch || 5760 === ch || ch >= 8192 && ch <= 8202 || 8232 === ch || 8233 === ch || 8239 === ch || 8287 === ch || 12288 === ch;
                },
                fragmentText: function(stringToken, allWidth, maxWidth, measureText) {
                    var wrappedWords = [];
                    if (0 === stringToken.length || maxWidth < 0) {
                        wrappedWords.push("");
                        return wrappedWords;
                    }
                    var text = stringToken;
                    while (allWidth > maxWidth && text.length > 1) {
                        var fuzzyLen = text.length * (maxWidth / allWidth) | 0;
                        var tmpText = text.substr(fuzzyLen);
                        var width = allWidth - measureText(tmpText);
                        var sLine = tmpText;
                        var pushNum = 0;
                        var checkWhile = 0;
                        var checkCount = 10;
                        while (width > maxWidth && checkWhile++ < checkCount) {
                            fuzzyLen *= maxWidth / width;
                            fuzzyLen = 0 | fuzzyLen;
                            tmpText = text.substr(fuzzyLen);
                            width = allWidth - measureText(tmpText);
                        }
                        checkWhile = 0;
                        while (width < maxWidth && checkWhile++ < checkCount) {
                            if (tmpText) {
                                var exec = this.label_wordRex.exec(tmpText);
                                pushNum = exec ? exec[0].length : 1;
                                sLine = tmpText;
                            }
                            fuzzyLen += pushNum;
                            tmpText = text.substr(fuzzyLen);
                            width = allWidth - measureText(tmpText);
                        }
                        fuzzyLen -= pushNum;
                        if (0 === fuzzyLen) {
                            fuzzyLen = 1;
                            sLine = sLine.substr(1);
                        }
                        var sText = text.substr(0, fuzzyLen), result;
                        if (this.label_wrapinspection && this.label_symbolRex.test(sLine || tmpText)) {
                            result = this.label_lastWordRex.exec(sText);
                            fuzzyLen -= result ? result[0].length : 0;
                            0 === fuzzyLen && (fuzzyLen = 1);
                            sLine = text.substr(fuzzyLen);
                            sText = text.substr(0, fuzzyLen);
                        }
                        if (this.label_firsrEnglish.test(sLine)) {
                            result = this.label_lastEnglish.exec(sText);
                            if (result && sText !== result[0]) {
                                fuzzyLen -= result[0].length;
                                sLine = text.substr(fuzzyLen);
                                sText = text.substr(0, fuzzyLen);
                            }
                        }
                        sText.trim().length > 0 && wrappedWords.push(sText);
                        text = sLine || tmpText;
                        allWidth = measureText(text);
                    }
                    text.length > 0 && wrappedWords.push(text);
                    return wrappedWords;
                }
            };
            cc.TextUtils = module.exports = TextUtils;
            var EventTarget = require("../cocos2d/core/event/event-target");
            var FontLetterDefinition = function() {
                this._u = 0;
                this._v = 0;
                this._width = 0;
                this._height = 0;
                this._offsetX = 0;
                this._offsetY = 0;
                this._textureID = 0;
                this._validDefinition = false;
                this._xAdvance = 0;
            };
            cc.FontAtlas = function(fntConfig) {
                this._lineHeight = fntConfig.commonHeight;
                this._fontSize = fntConfig.fontSize;
                this._letterDefinitions = {};
                this._fntConfig = fntConfig;
            };
            cc.FontAtlas.prototype = {
                constructor: cc.FontAtlas,
                setFontSize: function(fontSize) {
                    this._fontSize = fontSize;
                },
                getOriginalFontSize: function() {
                    return this._fntConfig.fontSize;
                },
                addLetterDefinitions: function(letter, letterDefinition) {
                    this._letterDefinitions[letter] = letterDefinition;
                },
                cloneLetterDefinition: function() {
                    var copyLetterDefinitions = {};
                    for (var key in this._letterDefinitions) {
                        var value = new FontLetterDefinition();
                        cc.js.mixin(value, this._letterDefinitions[key]);
                        copyLetterDefinitions[key] = value;
                    }
                    return copyLetterDefinitions;
                },
                assignLetterDefinitions: function(letterDefinition) {
                    for (var key in this._letterDefinitions) {
                        var newValue = letterDefinition[key];
                        var oldValue = this._letterDefinitions[key];
                        cc.js.mixin(oldValue, newValue);
                    }
                },
                scaleFontLetterDefinition: function(scaleFactor) {
                    for (var fontDefinition in this._letterDefinitions) {
                        var letterDefinitions = this._letterDefinitions[fontDefinition];
                        letterDefinitions._width *= scaleFactor;
                        letterDefinitions._height *= scaleFactor;
                        letterDefinitions._offsetX *= scaleFactor;
                        letterDefinitions._offsetY *= scaleFactor;
                        letterDefinitions._xAdvance *= scaleFactor;
                    }
                },
                getLetterDefinitionForChar: function(char) {
                    var hasKey = this._letterDefinitions.hasOwnProperty(char.charCodeAt(0));
                    var letterDefinition;
                    letterDefinition = hasKey ? this._letterDefinitions[char.charCodeAt(0)] : null;
                    return letterDefinition;
                }
            };
            var LetterInfo = function() {
                this._char = "";
                this._valid = true;
                this._positionX = 0;
                this._positionY = 0;
                this._atlasIndex = 0;
                this._lineIndex = 0;
            };
            _ccsg.Label = _ccsg.Node.extend({
                _hAlign: cc.TextAlignment.LEFT,
                _vAlign: cc.VerticalTextAlignment.TOP,
                _string: "",
                _fontSize: 40,
                _drawFontsize: 40,
                _overFlow: 0,
                _isWrapText: true,
                _spacingX: 0,
                _blendFunc: null,
                _labelType: 0,
                _fontHandle: "",
                _lineSpacing: 0,
                _maxLineWidth: 0,
                _labelDimensions: cc.size(0, 0),
                _labelWidth: 0,
                _labelHeight: 0,
                _lineHeight: 40,
                _outlined: false,
                _outlineColor: null,
                _outlineWidth: 1,
                _className: "Label",
                _margin: 0,
                _isBold: false,
                _isItalic: false,
                _isUnderline: false,
                ctor: function(string, fontHandle, textureUrl) {
                    EventTarget.call(this);
                    fontHandle = fontHandle || "";
                    this._fontHandle = fontHandle;
                    string = string || "";
                    this._string = string;
                    _ccsg.Node.prototype.ctor.call(this);
                    this.setAnchorPoint(cc.p(.5, .5));
                    _ccsg.Node.prototype.setContentSize.call(this, cc.size(128, 128));
                    this._blendFunc = cc.BlendFunc._alphaNonPremultiplied();
                    this.setFontFileOrFamily(fontHandle, textureUrl);
                    this.setString(this._string);
                },
                _resetBMFont: function() {
                    this._imageOffset = cc.p(0, 0);
                    this._cascadeColorEnabled = true;
                    this._cascadeOpacityEnabled = true;
                    this._fontAtlas = null;
                    this._config = null;
                    this._numberOfLines = 0;
                    this._lettersInfo = [];
                    this._linesWidth = [];
                    this._linesOffsetX = [];
                    this._textDesiredHeight = 0;
                    this._letterOffsetY = 0;
                    this._tailoredTopY = 0;
                    this._tailoredBottomY = 0;
                    this._bmfontScale = 1;
                    this._additionalKerning = 0;
                    this._horizontalKernings = [];
                    this._lineBreakWithoutSpaces = false;
                    this._reusedRect = cc.rect(0, 0, 0, 0);
                    this._textureLoaded = false;
                    if (this._spriteBatchNode) {
                        this.removeChild(this._spriteBatchNode);
                        this._spriteBatchNode = null;
                    }
                },
                setHorizontalAlign: function(align) {
                    if (this._hAlign === align) {
                        return;
                    }
                    this._hAlign = align;
                    this._notifyLabelSkinDirty();
                },
                getHorizontalAlign: function() {
                    return this._hAlign;
                },
                setVerticalAlign: function(align) {
                    if (this._vAlign === align) {
                        return;
                    }
                    this._vAlign = align;
                    this._notifyLabelSkinDirty();
                },
                getVerticalAlign: function() {
                    return this._vAlign;
                },
                setString: function(string) {
                    "string" != typeof string && (string = "" + string);
                    if (this._string === string) {
                        return;
                    }
                    this._string = string;
                    this._notifyLabelSkinDirty();
                },
                setMargin: function(value) {
                    this._margin = value;
                    this._notifyLabelSkinDirty();
                },
                getString: function() {
                    return this._string;
                },
                getStringLength: function() {
                    return this._string.length;
                },
                enableWrapText: function(enabled) {
                    if (this._isWrapText === enabled) {
                        return;
                    }
                    if (this._overFlow === _ccsg.Label.Overflow.RESIZE_HEIGHT || this._overFlow === _ccsg.Label.Overflow.NONE) {
                        return;
                    }
                    this._isWrapText = enabled;
                    this._rescaleWithOriginalFontSize();
                    this._notifyLabelSkinDirty();
                },
                enableItalics: function(enabled) {
                    this._isItalic = enabled;
                    enabled ? this.setSkewX(12) : this.setSkewX(0);
                },
                enableBold: function(enabled) {
                    this._isBold = enabled;
                    this._notifyLabelSkinDirty();
                },
                enableUnderline: function(enabled) {
                    this._isUnderline = enabled;
                    this._notifyLabelSkinDirty();
                },
                isWrapTextEnabled: function() {
                    return this._isWrapText;
                },
                getFontName: function() {
                    return this._fontHandle;
                },
                setFontSize: function(fntSize) {
                    this._fontSize = fntSize;
                    this._drawFontsize = fntSize;
                    this._notifyLabelSkinDirty();
                },
                getFontSize: function() {
                    return this._fontSize;
                },
                isOutlined: function() {
                    return this._outlined;
                },
                setOutlined: function(value) {
                    this._outlined = !!value;
                    this._notifyLabelSkinDirty();
                },
                getOutlineColor: function() {
                    return this._outlineColor;
                },
                setOutlineColor: function(value) {
                    this._outlineColor = cc.color(value);
                    this._notifyLabelSkinDirty();
                },
                setOutlineWidth: function(value) {
                    this._outlineWidth = value;
                    this._notifyLabelSkinDirty();
                },
                getOutlineWidth: function() {
                    return this._outlineWidth;
                },
                _updateWrapText: function(overflow) {
                    overflow === _ccsg.Label.Overflow.RESIZE_HEIGHT && (this._isWrapText = true);
                    overflow === _ccsg.Label.Overflow.NONE && (this._isWrapText = false);
                },
                _setOverflowBMFont: function() {
                    if (this._labelType === _ccsg.Label.Type.BMFont) {
                        this._overFlow === _ccsg.Label.Overflow.RESIZE_HEIGHT && this._setDimensions(this._labelDimensions.width, 0);
                        this._overFlow === _ccsg.Label.Overflow.NONE && this._setDimensions(0, 0);
                        this._rescaleWithOriginalFontSize();
                    }
                },
                setOverflow: function(overflow) {
                    if (this._overFlow === overflow) {
                        return;
                    }
                    this._overFlow = overflow;
                    this._updateWrapText(this._overFlow);
                    this._setOverflowBMFont();
                    this._notifyLabelSkinDirty();
                },
                getOverflow: function() {
                    return this._overFlow;
                },
                setSpacingX: function(spacing) {
                    if (this._spacingX === spacing) {
                        return;
                    }
                    this._spacingX = spacing;
                },
                setLineHeight: function(lineHeight) {
                    if (this._lineHeight === lineHeight) {
                        return;
                    }
                    this._lineHeight = lineHeight;
                    this._notifyLabelSkinDirty();
                },
                setLineBreakWithoutSpace: function(lineBreakFlag) {
                    if (this._lineBreakWithoutSpaces === lineBreakFlag) {
                        return;
                    }
                    this._lineBreakWithoutSpaces = lineBreakFlag;
                    this._notifyLabelSkinDirty();
                },
                getSpacingX: function() {
                    return this._spacingX;
                },
                getLineHeight: function() {
                    return this._lineHeight;
                },
                getBMFontLineHeight: function() {
                    if (this._fontAtlas) {
                        return this._fontAtlas._lineHeight;
                    }
                },
                setFontFileOrFamily: function(fontHandle, textureUrl) {
                    fontHandle = fontHandle || "Arial";
                    var extName = cc.path.extname(fontHandle);
                    this._resetBMFont();
                    if (!extName) {
                        this._fontHandle = fontHandle;
                        this._labelType = _ccsg.Label.Type.SystemFont;
                        this._renderCmd._needDraw = true;
                        this._notifyLabelSkinDirty();
                        this.emit("load");
                        return;
                    }
                    if (".ttf" === extName) {
                        this._labelType = _ccsg.Label.Type.TTF;
                        this._renderCmd._needDraw = true;
                        this._fontHandle = this._loadTTFFont(fontHandle);
                    } else {
                        if (".fnt" === extName) {
                            this._labelType = _ccsg.Label.Type.BMFont;
                            this._renderCmd._needDraw = false;
                            this._initBMFontWithString(this._string, fontHandle, textureUrl);
                        }
                    }
                    this._notifyLabelSkinDirty();
                },
                cleanup: function() {
                    this._super();
                    this._fontFaceStyle && document.body.contains(this._fontFaceStyle) && document.body.removeChild(this._fontFaceStyle);
                    this._preloadDiv && document.body.contains(this._preloadDiv) && document.body.removeChild(this._preloadDiv);
                },
                _loadTTFFont: function(fontHandle) {
                    var ttfIndex = fontHandle.lastIndexOf(".ttf");
                    if (ttfIndex === -1) {
                        return fontHandle;
                    }
                    var slashPos = fontHandle.lastIndexOf("/");
                    var fontFamilyName;
                    fontFamilyName = slashPos === -1 ? fontHandle.substring(0, ttfIndex) + "_LABEL" : fontHandle.substring(slashPos + 1, ttfIndex) + "_LABEL";
                    var self = this;
                    if (window.FontFace) {
                        var fontFace = new FontFace(fontFamilyName, "url('" + fontHandle + "')");
                        fontFace.load().then(function(loadedFace) {
                            document.fonts.add(loadedFace);
                            self._notifyLabelSkinDirty();
                            self.emit("load");
                        });
                    } else {
                        var doc = document, fontStyle = document.createElement("style");
                        fontStyle.type = "text/css";
                        doc.body.appendChild(fontStyle);
                        this._fontFaceStyle = fontStyle;
                        var fontStr = "";
                        fontStr += isNaN(fontFamilyName - 0) ? "@font-face { font-family:" + fontFamilyName + "; src:" : "@font-face { font-family:'" + fontFamilyName + "'; src:";
                        fontStr += "url('" + fontHandle + "');";
                        fontStyle.textContent = fontStr + "}";
                        var preloadDiv = document.createElement("div");
                        var _divStyle = preloadDiv.style;
                        _divStyle.fontFamily = fontFamilyName;
                        preloadDiv.innerHTML = ".";
                        _divStyle.position = "absolute";
                        _divStyle.left = "-100px";
                        _divStyle.top = "-100px";
                        doc.body.appendChild(preloadDiv);
                        this._preloadDiv = preloadDiv;
                        fontStyle.onload = function() {
                            fontStyle.onload = null;
                            self.scheduleOnce(function() {
                                self._notifyLabelSkinDirty();
                                self.emit("load");
                            }, .1);
                        };
                    }
                    return fontFamilyName;
                },
                setContentSize: function(size, height) {
                    if (this._overFlow === _ccsg.Label.Overflow.NONE) {
                        return;
                    }
                    this._setDimensions(size, height);
                },
                setBlendFunc: function(src, dst) {
                    var locBlendFunc = this._blendFunc;
                    if (void 0 === dst) {
                        locBlendFunc.src = src.src;
                        locBlendFunc.dst = src.dst;
                    } else {
                        locBlendFunc.src = src;
                        locBlendFunc.dst = dst;
                    }
                },
                getBlendFunc: function() {
                    return new cc.BlendFunc(this._blendFunc.src, this._blendFunc.dst);
                },
                _setupBMFontOverflowMetrics: function(newWidth, newHeight) {
                    this._overFlow === _ccsg.Label.Overflow.RESIZE_HEIGHT && (newHeight = 0);
                    if (this._overFlow === _ccsg.Label.Overflow.NONE) {
                        newWidth = 0;
                        newHeight = 0;
                    }
                    this._labelWidth = newWidth;
                    this._labelHeight = newHeight;
                    this._labelDimensions.width = newWidth;
                    this._labelDimensions.height = newHeight;
                    this._maxLineWidth = newWidth;
                },
                _updateLabel: function() {
                    if (this._labelType === _ccsg.Label.Type.BMFont) {
                        var contentSize = this._contentSize;
                        var newWidth = contentSize.width;
                        var newHeight = contentSize.height;
                        this._setupBMFontOverflowMetrics(newWidth, newHeight);
                        this._updateContent();
                        this.setColor(this.color);
                    } else {
                        this._labelType !== _ccsg.Label.Type.TTF && this._labelType !== _ccsg.Label.Type.SystemFont || this._renderCmd._bakeLabel();
                    }
                },
                _notifyLabelSkinDirty: function() {
                    this._renderCmd.setDirtyFlag(_ccsg.Node._dirtyFlags.textDirty | _ccsg.Node._dirtyFlags.contentDirty);
                },
                _createRenderCmd: function() {
                    return cc._renderType === cc.game.RENDER_TYPE_WEBGL ? new _ccsg.Label.WebGLRenderCmd(this) : new _ccsg.Label.CanvasRenderCmd(this);
                },
                getContentSize: function() {
                    var locFlag = this._renderCmd._dirtyFlag;
                    if (locFlag & _ccsg.Node._dirtyFlags.textDirty) {
                        this._updateLabel();
                        this._renderCmd._dirtyFlag &= ~_ccsg.Node._dirtyFlags.textDirty;
                    }
                    return _ccsg.Node.prototype.getContentSize.call(this);
                },
                _getWidth: function() {
                    var locFlag = this._renderCmd._dirtyFlag;
                    if (locFlag & _ccsg.Node._dirtyFlags.textDirty) {
                        this._updateLabel();
                        this._renderCmd._dirtyFlag &= ~_ccsg.Node._dirtyFlags.textDirty;
                    }
                    return _ccsg.Node.prototype._getWidth.call(this);
                },
                _getHeight: function() {
                    var locFlag = this._renderCmd._dirtyFlag;
                    if (locFlag & _ccsg.Node._dirtyFlags.textDirty) {
                        this._updateLabel();
                        this._renderCmd._dirtyFlag &= ~_ccsg.Node._dirtyFlags.textDirty;
                    }
                    return _ccsg.Node.prototype._getHeight.call(this);
                }
            });
            cc.BMFontHelper = {
                _alignText: function() {
                    var ret = true;
                    do {
                        if (!this._spriteBatchNode) {
                            return true;
                        }
                        this._textDesiredHeight = 0;
                        this._linesWidth = [];
                        this._lineBreakWithoutSpaces ? this._multilineTextWrapByChar() : this._multilineTextWrapByWord();
                        this._computeAlignmentOffset();
                        if (this._overFlow === _ccsg.Label.Overflow.SHRINK) {
                            var fontSize = this.getFontSize();
                            fontSize > 0 && this._isVerticalClamp() && this._shrinkLabelToContentSize(this._isVerticalClamp.bind(this));
                        }
                        if (!this._updateQuads()) {
                            ret = false;
                            this._overFlow === _ccsg.Label.Overflow.SHRINK && this._shrinkLabelToContentSize(this._isHorizontalClamp.bind(this));
                            break;
                        }
                    } while (0);
                    return ret;
                },
                _isHorizontalClamped: function(px, lineIndex) {
                    var wordWidth = this._linesWidth[lineIndex];
                    var letterOverClamp = px > this._contentSize.width || px < 0;
                    return this._isWrapText ? wordWidth > this._contentSize.width && letterOverClamp : letterOverClamp;
                },
                _updateQuads: function() {
                    var ret = true;
                    this._spriteBatchNode.removeAllChildren();
                    for (var ctr = 0; ctr < this._string.length; ++ctr) {
                        if (this._lettersInfo[ctr]._valid) {
                            var letterDef = this._fontAtlas._letterDefinitions[this._lettersInfo[ctr]._char];
                            this._reusedRect.height = letterDef._height;
                            this._reusedRect.width = letterDef._width;
                            this._reusedRect.x = letterDef._u;
                            this._reusedRect.y = letterDef._v;
                            var py = this._lettersInfo[ctr]._positionY + this._letterOffsetY;
                            if (this._labelHeight > 0) {
                                if (py > this._tailoredTopY) {
                                    var clipTop = py - this._tailoredTopY;
                                    this._reusedRect.y += clipTop;
                                    this._reusedRect.height -= clipTop;
                                    py -= clipTop;
                                }
                                py - letterDef._height * this._bmfontScale < this._tailoredBottomY && (this._reusedRect.height = py < this._tailoredBottomY ? 0 : py - this._tailoredBottomY);
                            }
                            var lineIndex = this._lettersInfo[ctr]._lineIndex;
                            var px = this._lettersInfo[ctr]._positionX + letterDef._width / 2 * this._bmfontScale + this._linesOffsetX[lineIndex];
                            if (this._labelWidth > 0 && this._isHorizontalClamped(px, lineIndex)) {
                                if (this._overFlow === _ccsg.Label.Overflow.CLAMP) {
                                    this._reusedRect.width = 0;
                                } else {
                                    if (this._overFlow === _ccsg.Label.Overflow.SHRINK) {
                                        if (this._contentSize.width > letterDef._width) {
                                            ret = false;
                                            break;
                                        }
                                        this._reusedRect.width = 0;
                                    }
                                }
                            }
                            if (this._reusedRect.height > 0 && this._reusedRect.width > 0) {
                                var fontChar = this.getChildByTag(ctr);
                                var locTexture = this._spriteBatchNode._texture;
                                if (!fontChar) {
                                    fontChar = new _ccsg.Sprite();
                                    fontChar.initWithTexture(locTexture);
                                    fontChar.setAnchorPoint(cc.p(0, 1));
                                }
                                fontChar.setTextureRect(this._reusedRect, false, this._reusedRect.size);
                                var letterPositionX = this._lettersInfo[ctr]._positionX + this._linesOffsetX[this._lettersInfo[ctr]._lineIndex];
                                fontChar.setPosition(letterPositionX, py);
                                var index = this._spriteBatchNode.getChildrenCount();
                                this._lettersInfo[ctr]._atlasIndex = index;
                                this._updateLetterSpriteScale(fontChar);
                                this._spriteBatchNode.addChild(fontChar);
                            }
                        }
                    }
                    return ret;
                },
                _updateLetterSpriteScale: function(sprite) {
                    this._labelType === _ccsg.Label.Type.BMFont && this._fontSize > 0 && sprite.setScale(this._bmfontScale);
                },
                _recordPlaceholderInfo: function(letterIndex, char) {
                    if (letterIndex >= this._lettersInfo.length) {
                        var tmpInfo = new LetterInfo();
                        this._lettersInfo.push(tmpInfo);
                    }
                    this._lettersInfo[letterIndex]._char = char;
                    this._lettersInfo[letterIndex]._valid = false;
                },
                _recordLetterInfo: function(letterPosition, character, letterIndex, lineIndex) {
                    if (letterIndex >= this._lettersInfo.length) {
                        var tmpInfo = new LetterInfo();
                        this._lettersInfo.push(tmpInfo);
                    }
                    character = character.charCodeAt(0);
                    this._lettersInfo[letterIndex]._lineIndex = lineIndex;
                    this._lettersInfo[letterIndex]._char = character;
                    this._lettersInfo[letterIndex]._valid = this._fontAtlas._letterDefinitions[character]._validDefinition;
                    this._lettersInfo[letterIndex]._positionX = letterPosition.x;
                    this._lettersInfo[letterIndex]._positionY = letterPosition.y;
                },
                _setDimensions: function(size, height) {
                    var newWidth = "number" == typeof size.width ? size.width : size;
                    var newHeight = "number" == typeof size.height ? size.height : height;
                    var oldSize = this.getContentSize();
                    _ccsg.Node.prototype.setContentSize.call(this, size, height);
                    if (newHeight !== oldSize.height || newWidth !== oldSize.width) {
                        this._setupBMFontOverflowMetrics(newWidth, newHeight);
                        this._drawFontsize > 0 && this._restoreFontSize();
                        this._notifyLabelSkinDirty();
                    }
                },
                _restoreFontSize: function() {
                    this._fontSize = this._drawFontsize;
                },
                _multilineTextWrap: function(nextTokenFunc) {
                    var textLen = this.getStringLength();
                    var lineIndex = 0;
                    var nextTokenX = 0;
                    var nextTokenY = 0;
                    var longestLine = 0;
                    var letterRight = 0;
                    var lineSpacing = this._lineSpacing;
                    var highestY = 0;
                    var lowestY = 0;
                    var letterDef = null;
                    var letterPosition = cc.p(0, 0);
                    this._updateBMFontScale();
                    for (var index = 0; index < textLen; ) {
                        var character = this._string.charAt(index);
                        if ("\n" === character) {
                            this._linesWidth.push(letterRight);
                            letterRight = 0;
                            lineIndex++;
                            nextTokenX = 0;
                            nextTokenY -= this._lineHeight * this._bmfontScale + lineSpacing;
                            this._recordPlaceholderInfo(index, character);
                            index++;
                            continue;
                        }
                        var tokenLen = nextTokenFunc(this._string, index, textLen);
                        var tokenHighestY = highestY;
                        var tokenLowestY = lowestY;
                        var tokenRight = letterRight;
                        var nextLetterX = nextTokenX;
                        var newLine = false;
                        for (var tmp = 0; tmp < tokenLen; ++tmp) {
                            var letterIndex = index + tmp;
                            character = this._string.charAt(letterIndex);
                            if ("\r" === character) {
                                this._recordPlaceholderInfo(letterIndex, character);
                                continue;
                            }
                            letterDef = this._fontAtlas.getLetterDefinitionForChar(character);
                            if (!letterDef) {
                                this._recordPlaceholderInfo(letterIndex, character);
                                console.log("Can't find letter definition in font file for letter:" + character);
                                continue;
                            }
                            var letterX = nextLetterX + letterDef._offsetX * this._bmfontScale;
                            if (this._isWrapText && this._maxLineWidth > 0 && nextTokenX > 0 && letterX + letterDef._width * this._bmfontScale > this._maxLineWidth && !cc.TextUtils.isUnicodeSpace(character)) {
                                this._linesWidth.push(letterRight);
                                letterRight = 0;
                                lineIndex++;
                                nextTokenX = 0;
                                nextTokenY -= this._lineHeight * this._bmfontScale + lineSpacing;
                                newLine = true;
                                break;
                            }
                            letterPosition.x = letterX;
                            letterPosition.y = nextTokenY - letterDef._offsetY * this._bmfontScale;
                            this._recordLetterInfo(letterPosition, character, letterIndex, lineIndex);
                            letterIndex + 1 < this._horizontalKernings.length && letterIndex < textLen - 1 && (nextLetterX += this._horizontalKernings[letterIndex + 1]);
                            nextLetterX += letterDef._xAdvance * this._bmfontScale + this._additionalKerning;
                            tokenRight = letterPosition.x + letterDef._width * this._bmfontScale;
                            tokenHighestY < letterPosition.y && (tokenHighestY = letterPosition.y);
                            tokenLowestY > letterPosition.y - letterDef._height * this._bmfontScale && (tokenLowestY = letterPosition.y - letterDef._height * this._bmfontScale);
                        }
                        if (newLine) {
                            continue;
                        }
                        nextTokenX = nextLetterX;
                        letterRight = tokenRight;
                        highestY < tokenHighestY && (highestY = tokenHighestY);
                        lowestY > tokenLowestY && (lowestY = tokenLowestY);
                        longestLine < letterRight && (longestLine = letterRight);
                        index += tokenLen;
                    }
                    this._linesWidth.push(letterRight);
                    this._numberOfLines = lineIndex + 1;
                    this._textDesiredHeight = this._numberOfLines * this._lineHeight * this._bmfontScale;
                    this._numberOfLines > 1 && (this._textDesiredHeight += (this._numberOfLines - 1) * this._lineSpacing);
                    var contentSize = cc.size(this._labelWidth, this._labelHeight);
                    this._labelWidth <= 0 && (contentSize.width = parseFloat(longestLine.toFixed(2)));
                    this._labelHeight <= 0 && (contentSize.height = parseFloat(this._textDesiredHeight.toFixed(2)));
                    _ccsg.Node.prototype.setContentSize.call(this, contentSize);
                    this._tailoredTopY = contentSize.height;
                    this._tailoredBottomY = 0;
                    highestY > 0 && (this._tailoredTopY = contentSize.height + highestY);
                    lowestY < -this._textDesiredHeight && (this._tailoredBottomY = this._textDesiredHeight + lowestY);
                    return true;
                },
                _multilineTextWrapByWord: function() {
                    return this._multilineTextWrap(this._getFirstWordLen.bind(this));
                },
                _multilineTextWrapByChar: function() {
                    return this._multilineTextWrap(this._getFirstCharLen.bind(this));
                },
                _isVerticalClamp: function() {
                    return this._textDesiredHeight > this._contentSize.height;
                },
                _isHorizontalClamp: function() {
                    var letterClamp = false;
                    for (var ctr = 0; ctr < this.getStringLength(); ++ctr) {
                        if (this._lettersInfo[ctr]._valid) {
                            var letterDef = this._fontAtlas._letterDefinitions[this._lettersInfo[ctr]._char];
                            var px = this._lettersInfo[ctr]._positionX + letterDef._width / 2 * this._bmfontScale;
                            var lineIndex = this._lettersInfo[ctr]._lineIndex;
                            if (this._labelWidth > 0) {
                                if (this._isWrapText) {
                                    var wordWidth = this._linesWidth[lineIndex];
                                    if (wordWidth > this._contentSize.width && (px > this._contentSize.width || px < 0)) {
                                        letterClamp = true;
                                        break;
                                    }
                                } else {
                                    if (px > this._contentSize.width) {
                                        letterClamp = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    return letterClamp;
                },
                _shrinkLabelToContentSize: function(lambda) {
                    var fontSize = this.getFontSize();
                    var i = 0;
                    var tempLetterDefinition = this._fontAtlas.cloneLetterDefinition();
                    var originalLineHeight = this._lineHeight;
                    var flag = true;
                    while (lambda()) {
                        ++i;
                        var newFontSize = fontSize - i;
                        flag = false;
                        if (newFontSize <= 0) {
                            break;
                        }
                        var scale = newFontSize / fontSize;
                        this._fontAtlas.assignLetterDefinitions(tempLetterDefinition);
                        this._fontAtlas.scaleFontLetterDefinition(scale);
                        this._lineHeight = originalLineHeight * scale;
                        this._lineBreakWithoutSpaces ? this._multilineTextWrapByChar() : this._multilineTextWrapByWord();
                        this._computeAlignmentOffset();
                    }
                    this._lineHeight = originalLineHeight;
                    this._fontAtlas.assignLetterDefinitions(tempLetterDefinition);
                    flag || fontSize - i >= 0 && this._scaleFontSizeDown(fontSize - i);
                },
                _scaleFontSizeDown: function(fontSize) {
                    var shouldUpdateContent = true;
                    if (this._labelType === _ccsg.Label.Type.BMFont) {
                        if (!fontSize) {
                            fontSize = .1;
                            shouldUpdateContent = false;
                        }
                        this._fontSize = fontSize;
                        shouldUpdateContent && this._updateContent();
                    }
                },
                _updateContent: function() {
                    if (this._fontAtlas) {
                        this._computeHorizontalKerningForText(this._string);
                        this._alignText();
                    }
                },
                _computeAlignmentOffset: function() {
                    this._linesOffsetX = [];
                    switch (this._hAlign) {
                      case cc.TextAlignment.LEFT:
                        for (var i = 0; i < this._numberOfLines; ++i) {
                            this._linesOffsetX.push(0);
                        }
                        break;

                      case cc.TextAlignment.CENTER:
                        this._linesWidth.forEach(function(lineWidth) {
                            this._linesOffsetX.push((this._contentSize.width - lineWidth) / 2);
                        }.bind(this));
                        break;

                      case cc.TextAlignment.RIGHT:
                        this._linesWidth.forEach(function(lineWidth) {
                            this._linesOffsetX.push(this._contentSize.width - lineWidth);
                        }.bind(this));
                    }
                    switch (this._vAlign) {
                      case cc.VerticalTextAlignment.TOP:
                        this._letterOffsetY = this._contentSize.height;
                        break;

                      case cc.VerticalTextAlignment.CENTER:
                        this._letterOffsetY = (this._contentSize.height + this._textDesiredHeight) / 2;
                        break;

                      case cc.VerticalTextAlignment.BOTTOM:
                        this._letterOffsetY = this._textDesiredHeight;
                    }
                },
                _getFirstCharLen: function() {
                    return 1;
                },
                _getFirstWordLen: function(text, startIndex, textLen) {
                    var character = text.charAt(startIndex);
                    if (cc.TextUtils.isUnicodeCJK(character) || "\n" === character || cc.TextUtils.isUnicodeSpace(character)) {
                        return 1;
                    }
                    var len = 1;
                    var nextLetterX = 0;
                    var letterDef;
                    var letterX;
                    for (var index = startIndex + 1; index < textLen; ++index) {
                        character = text.charAt(index);
                        letterDef = this._fontAtlas.getLetterDefinitionForChar(character);
                        if (!letterDef) {
                            break;
                        }
                        letterX = nextLetterX + letterDef._offsetX * this._bmfontScale;
                        if (letterX + letterDef._width * this._bmfontScale > this._maxLineWidth && !cc.TextUtils.isUnicodeSpace(character) && this._maxLineWidth > 0 && len >= 2) {
                            return len - 1;
                        }
                        nextLetterX += letterDef._xAdvance * this._bmfontScale + this._additionalKerning;
                        if ("\n" === character || cc.TextUtils.isUnicodeSpace(character) || cc.TextUtils.isUnicodeCJK(character)) {
                            break;
                        }
                        len++;
                    }
                    return len;
                },
                _updateBMFontScale: function() {
                    if (this._labelType === _ccsg.Label.Type.BMFont) {
                        var originalFontSize = this._fontAtlas._fontSize;
                        this._bmfontScale = this._fontSize / originalFontSize;
                    } else {
                        this._bmfontScale = 1;
                    }
                },
                _initBMFontWithString: function(str, fntFile, textureUrl) {
                    var self = this;
                    if (self._config) {
                        cc.log("_ccsg.Label._initBMFontWithString(): re-init is no longer supported");
                        return false;
                    }
                    this._string = str;
                    this._setBMFontFile(fntFile, textureUrl);
                },
                _createSpriteBatchNode: function(texture) {
                    this._spriteBatchNode = new cc.SpriteBatchNode(texture, this._string.length);
                    this._spriteBatchNode.setCascadeColorEnabled(true);
                    this._spriteBatchNode.setCascadeOpacityEnabled(true);
                    this.addChild(this._spriteBatchNode);
                    this._updateContent();
                    this.setColor(this.color);
                },
                _createFontChars: function() {
                    if (!this._config) {
                        return;
                    }
                    this._fontAtlas = new cc.FontAtlas(this._config);
                    this._lineHeight || (this._lineHeight = this._fontAtlas._lineHeight);
                    var locCfg = this._config;
                    var locFontDict = locCfg.fontDefDictionary;
                    for (var fontDef in locFontDict) {
                        var letterDefinition = new FontLetterDefinition();
                        var tempRect = locFontDict[fontDef].rect;
                        letterDefinition._offsetX = locFontDict[fontDef].xOffset;
                        letterDefinition._offsetY = locFontDict[fontDef].yOffset;
                        letterDefinition._width = tempRect.width;
                        letterDefinition._height = tempRect.height;
                        letterDefinition._u = tempRect.x + this._imageOffset.x;
                        letterDefinition._v = tempRect.y + this._imageOffset.y;
                        letterDefinition._textureID = 0;
                        letterDefinition._validDefinition = true;
                        letterDefinition._xAdvance = locFontDict[fontDef].xAdvance;
                        this._fontAtlas.addLetterDefinitions(fontDef, letterDefinition);
                    }
                },
                _rescaleWithOriginalFontSize: function() {
                    var renderingFontSize = this.getFontSize();
                    this._drawFontsize - renderingFontSize >= 1 && this._overFlow === _ccsg.Label.Overflow.SHRINK && (this._labelType === _ccsg.Label.Type.BMFont ? this._scaleFontSizeDown(this._drawFontsize) : this._fontSize = this._drawFontsize);
                },
                _computeHorizontalKerningForText: function() {
                    var stringLen = this.getStringLength();
                    var locKerningDict = this._config.kerningDict;
                    var prev = -1;
                    for (var i = 0; i < stringLen; ++i) {
                        var key = this._string.charCodeAt(i);
                        var kerningAmount = locKerningDict[prev << 16 | 65535 & key] || 0;
                        i < stringLen - 1 ? this._horizontalKernings[i] = kerningAmount : this._horizontalKernings[i] = 0;
                        prev = key;
                    }
                },
                _setBMFontFile: function(filename, textureUrl) {
                    if (filename) {
                        this._fontHandle = filename;
                        var self = this;
                        if (this._labelType === _ccsg.Label.Type.BMFont) {
                            this._resetBMFont();
                            cc.loader.load(this._fontHandle, function(err, config) {
                                err && cc.log("_ccsg.Label._initBMFontWithString(): Impossible to create font. Please check file");
                                self._config = config;
                                self._createFontChars();
                                var texture = cc.textureCache.addImage(textureUrl || self._config.atlasName);
                                var locIsLoaded = texture.isLoaded();
                                self._textureLoaded = locIsLoaded;
                                locIsLoaded ? self._spriteBatchNode || self._createSpriteBatchNode(texture) : texture.once("load", function() {
                                    var self = this;
                                    self._spriteBatchNode || self._createSpriteBatchNode(texture);
                                    self._textureLoaded = true;
                                    self.emit("load");
                                }, self);
                            });
                        }
                    }
                }
            };
            var _p = _ccsg.Label.prototype;
            cc.js.addon(_p, EventTarget.prototype);
            cc.js.mixin(_p, cc.BMFontHelper);
            _ccsg.Label.Type = cc.Enum({
                TTF: 0,
                BMFont: 1,
                SystemFont: 2
            });
            _ccsg.Label.Overflow = cc.Enum({
                NONE: 0,
                CLAMP: 1,
                SHRINK: 2,
                RESIZE_HEIGHT: 3
            });
            var labelPro = _ccsg.Label.prototype;
            Object.defineProperty(labelPro, "width", {
                get: labelPro._getWidth,
                set: _ccsg.Node.prototype._setWidth
            });
            Object.defineProperty(labelPro, "height", {
                get: labelPro._getHeight,
                set: _ccsg.Node.prototype._setHeight
            });
            (function() {
                _ccsg.Label.TTFLabelBaker = function() {};
                var proto = _ccsg.Label.TTFLabelBaker.prototype = Object.create(Object.prototype);
                proto.updateStatus = function() {
                    var flags = _ccsg.Node._dirtyFlags, locFlag = this._dirtyFlag;
                    if (locFlag & dirtyFlags.contentDirty) {
                        this._notifyRegionStatus && this._notifyRegionStatus(_ccsg.Node.CanvasRenderCmd.RegionStatus.Dirty);
                        this._dirtyFlag &= ~dirtyFlags.contentDirty;
                    }
                    if (locFlag & flags.textDirty) {
                        this._notifyRegionStatus && this._notifyRegionStatus(_ccsg.Node.CanvasRenderCmd.RegionStatus.Dirty);
                        this._rebuildLabelSkin();
                    }
                    if (this._dirtyFlag & flags.transformDirty) {
                        this.transform(this.getParentRenderCmd(), true);
                        this._dirtyFlag &= ~flags.transformDirty;
                    }
                };
                proto._syncStatus = function(parentCmd) {
                    var flags = _ccsg.Node._dirtyFlags, locFlag = this._dirtyFlag;
                    var parentNode = parentCmd ? parentCmd._node : null;
                    parentCmd && parentCmd._dirtyFlag & flags.transformDirty && (locFlag |= flags.transformDirty);
                    this._dirtyFlag = locFlag;
                    this._dirtyFlag & flags.textDirty && this._rebuildLabelSkin();
                    this._dirtyFlag & flags.transformDirty && this.transform(parentCmd);
                };
                proto._getLineHeight = function() {
                    var nodeSpacingY = this._node.getLineHeight();
                    var node = this._node;
                    nodeSpacingY = 0 === nodeSpacingY ? node._fontSize : nodeSpacingY * node._fontSize / this._drawFontsize;
                    var lineHeight = 0 | nodeSpacingY;
                    return lineHeight;
                };
                proto._constructFontDesc = function() {
                    var node = this._node;
                    var fontDesc = node._fontSize.toString() + "px ";
                    var fontFamily = 0 === node._fontHandle.length ? "serif" : node._fontHandle;
                    fontDesc += fontFamily;
                    node._isBold && (fontDesc = "bold " + fontDesc);
                    return fontDesc;
                };
                proto._measureText = function(ctx) {
                    return function(string) {
                        return ctx.measureText(string).width;
                    };
                };
                proto._calculateLabelFont = function() {
                    var node = this._node;
                    var paragraphedStrings = node._string.split("\n");
                    node._fontSize = node._drawFontsize;
                    var fontDesc = this._constructFontDesc();
                    this._labelContext.font = fontDesc;
                    var paragraphLength = this._calculateParagraphLength(paragraphedStrings, this._labelContext);
                    if (_ccsg.Label.Overflow.SHRINK === node._overFlow) {
                        this._splitedStrings = paragraphedStrings;
                        var i = 0;
                        var totalHeight = 0;
                        var maxLength = 0;
                        if (node._isWrapText) {
                            var canvasWidthNoMargin = this._canvasSize.width - 2 * this._getMargin();
                            var canvasHeightNoMargin = this._canvasSize.height - 2 * this._getMargin();
                            if (canvasWidthNoMargin < 0 || canvasHeightNoMargin < 0) {
                                fontDesc = this._constructFontDesc();
                                this._labelContext.font = fontDesc;
                                return fontDesc;
                            }
                            totalHeight = canvasHeightNoMargin + 1;
                            maxLength = canvasWidthNoMargin + 1;
                            var actualFontSize = this._drawFontsize + 1;
                            var textFragment = "";
                            var tryDivideByTwo = true;
                            var startShrinkFontSize = 0 | actualFontSize;
                            while (totalHeight > canvasHeightNoMargin || maxLength > canvasWidthNoMargin) {
                                if (tryDivideByTwo) {
                                    actualFontSize = startShrinkFontSize / 2 | 0;
                                } else {
                                    actualFontSize = startShrinkFontSize - 1;
                                    startShrinkFontSize = actualFontSize;
                                }
                                if (actualFontSize <= 0) {
                                    cc.log("Label font size can't be shirnked less than 0!");
                                    break;
                                }
                                node._fontSize = actualFontSize;
                                fontDesc = this._constructFontDesc();
                                this._labelContext.font = fontDesc;
                                this._splitedStrings = [];
                                totalHeight = 0;
                                for (i = 0; i < paragraphedStrings.length; ++i) {
                                    var j = 0;
                                    var allWidth = this._labelContext.measureText(paragraphedStrings[i]).width;
                                    textFragment = cc.TextUtils.fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(this._labelContext));
                                    while (j < textFragment.length) {
                                        var measureWidth = this._labelContext.measureText(textFragment[j]).width;
                                        maxLength = measureWidth;
                                        totalHeight += this._getLineHeight();
                                        ++j;
                                    }
                                    this._splitedStrings = this._splitedStrings.concat(textFragment);
                                }
                                if (tryDivideByTwo) {
                                    if (totalHeight > canvasHeightNoMargin) {
                                        startShrinkFontSize = 0 | actualFontSize;
                                    } else {
                                        tryDivideByTwo = false;
                                        totalHeight = canvasHeightNoMargin + 1;
                                    }
                                }
                            }
                        } else {
                            totalHeight = paragraphedStrings.length * this._getLineHeight();
                            for (i = 0; i < paragraphedStrings.length; ++i) {
                                maxLength < paragraphLength[i] && (maxLength = paragraphLength[i]);
                            }
                            var scaleX = (this._canvasSize.width - 2 * this._getMargin()) / maxLength;
                            var scaleY = this._canvasSize.height / totalHeight;
                            node._fontSize = this._drawFontsize * Math.min(1, scaleX, scaleY) | 0;
                            fontDesc = this._constructFontDesc();
                            this._labelContext.font = fontDesc;
                        }
                    }
                    return fontDesc;
                };
                proto._getMargin = function() {
                    return this._node && this._node._margin || 0;
                };
                proto._calculateParagraphLength = function(paragraphedStrings, ctx) {
                    var paragraphLength = [];
                    for (var i = 0; i < paragraphedStrings.length; ++i) {
                        var textMetric = ctx.measureText(paragraphedStrings[i]);
                        paragraphLength.push(textMetric.width);
                    }
                    return paragraphLength;
                };
                proto._calculateCanvasSize = function() {
                    var node = this._node;
                    var canvasWidth = node._contentSize.width;
                    var canvasHeight = node._contentSize.height;
                    canvasWidth <= 0 && (canvasWidth = 1);
                    canvasHeight <= 0 && (canvasHeight = 1);
                    return cc.size(canvasWidth, canvasHeight);
                };
                proto._calculateSplitedStrings = function() {
                    var node = this._node;
                    var paragraphedStrings = node._string.split("\n");
                    var i;
                    if (node._isWrapText) {
                        this._splitedStrings = [];
                        var canvasWidthNoMargin = this._canvasSize.width - 2 * this._getMargin();
                        for (i = 0; i < paragraphedStrings.length; ++i) {
                            var allWidth = this._labelContext.measureText(paragraphedStrings[i]).width;
                            var textFragment = cc.TextUtils.fragmentText(paragraphedStrings[i], allWidth, canvasWidthNoMargin, this._measureText(this._labelContext));
                            this._splitedStrings = this._splitedStrings.concat(textFragment);
                        }
                    } else {
                        this._splitedStrings = paragraphedStrings;
                    }
                };
                proto._updateLabelDimensions = function() {
                    var node = this._node;
                    var paragraphedStrings = node._string.split("\n");
                    var i;
                    var ctx = this._labelContext;
                    if (_ccsg.Label.Overflow.RESIZE_HEIGHT === node._overFlow) {
                        this._canvasSize.height = this._splitedStrings.length * this._getLineHeight();
                        _ccsg.Node.prototype.setContentSize.call(node, this._canvasSize);
                    } else {
                        if (_ccsg.Label.Overflow.NONE === node._overFlow) {
                            this._splitedStrings = paragraphedStrings;
                            var canvasSizeX = 0;
                            var canvasSizeY = 0;
                            for (i = 0; i < paragraphedStrings.length; ++i) {
                                var paraLength = ctx.measureText(paragraphedStrings[i]).width;
                                canvasSizeX = canvasSizeX > paraLength ? canvasSizeX : paraLength;
                            }
                            canvasSizeY = this._splitedStrings.length * this._getLineHeight();
                            this._canvasSize.width = parseFloat(canvasSizeX.toFixed(2)) + 2 * this._getMargin();
                            this._canvasSize.height = parseFloat(canvasSizeY.toFixed(2));
                            node._isItalic && (this._canvasSize.width += node._drawFontsize * Math.tan(.20943951));
                            _ccsg.Node.prototype.setContentSize.call(node, this._canvasSize);
                        }
                    }
                };
                proto._calculateFillTextStartPosition = function() {
                    var node = this._node;
                    var lineHeight = this._getLineHeight();
                    var lineCount = 1;
                    var labelX;
                    var firstLinelabelY;
                    labelX = 0 + this._getMargin();
                    firstLinelabelY = 0;
                    return cc.p(labelX, firstLinelabelY);
                };
                proto._calculateTextBaseline = function() {
                    var node = this._node;
                    var hAlign;
                    var vAlign;
                    hAlign = cc.TextAlignment.RIGHT === node._hAlign ? "right" : cc.TextAlignment.CENTER === node._hAlign ? "center" : "left";
                    this._labelContext.textAlign = hAlign;
                    vAlign = cc.VerticalTextAlignment.TOP === node._vAlign ? "top" : cc.VerticalTextAlignment.CENTER === node._vAlign ? "middle" : "bottom";
                    this._labelContext.textBaseline = vAlign;
                };
                proto._bakeLabel = function() {};
                proto._calculateUnderlineStartPosition = function() {
                    var node = this._node;
                    var lineHeight = this._getLineHeight();
                    var lineCount = this._splitedStrings.length;
                    var labelX;
                    var firstLinelabelY;
                    labelX = 0 + this._getMargin();
                    firstLinelabelY = cc.VerticalTextAlignment.TOP === node._vAlign ? node._fontSize : cc.VerticalTextAlignment.CENTER === node._vAlign ? this._canvasSize.height / 2 - lineHeight * (lineCount - 1) / 2 + node._fontSize / 2 : this._canvasSize.height - lineHeight * (lineCount - 1);
                    return cc.p(labelX, firstLinelabelY);
                };
                proto._updateTexture = function(ctx) {
                    ctx.font = this._fontDesc;
                    var startPosition = this._calculateFillTextStartPosition();
                    var lineHeight = this._getLineHeight();
                    ctx.lineJoin = "round";
                    var color = this._displayedColor;
                    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                    var underlineStartPosition;
                    for (var i = 0; i < this._splitedStrings.length; ++i) {
                        if (this._node.isOutlined()) {
                            var strokeColor = this._node.getOutlineColor() || cc.color(255, 255, 255, 255);
                            ctx.strokeStyle = "rgb(" + strokeColor.r + "," + strokeColor.g + "," + strokeColor.b + ")";
                            ctx.lineWidth = 2 * this._node.getOutlineWidth();
                            ctx.strokeText(this._splitedStrings[i], startPosition.x, startPosition.y + i * lineHeight);
                        }
                        ctx.fillText(this._splitedStrings[i], startPosition.x, startPosition.y + i * lineHeight);
                        if (this._node._isUnderline) {
                            underlineStartPosition = this._calculateUnderlineStartPosition();
                            ctx.beginPath();
                            ctx.lineWidth = this._node._fontSize / 8;
                            ctx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                            ctx.moveTo(underlineStartPosition.x, underlineStartPosition.y + i * lineHeight - 1);
                            ctx.lineTo(underlineStartPosition.x + this._labelCanvas.width, underlineStartPosition.y + i * lineHeight - 1);
                            ctx.stroke();
                        }
                    }
                    this._texture._textureLoaded = false;
                    this._texture.handleLoadedTexture(true);
                };
                proto._rebuildLabelSkin = function() {
                    this._dirtyFlag &= ~_ccsg.Node._dirtyFlags.textDirty;
                    var node = this._node;
                    node._updateLabel();
                };
            })();
            (function() {
                _ccsg.Label.CanvasRenderCmd = function(renderableObject) {
                    _ccsg.Node.CanvasRenderCmd.call(this, renderableObject);
                    this._needDraw = true;
                    this._splitedStrings = null;
                };
                var proto = _ccsg.Label.CanvasRenderCmd.prototype = Object.create(_ccsg.Node.CanvasRenderCmd.prototype);
                cc.js.mixin(proto, _ccsg.Label.TTFLabelBaker.prototype);
                proto.constructor = _ccsg.Label.CanvasRenderCmd;
                proto.transform = function(parentCmd, recursive) {
                    this.originTransform(parentCmd, recursive);
                    var bb = this._currentRegion, l = bb._minX, r = bb._maxX, b = bb._minY, t = bb._maxY, rect = cc.visibleRect, vl = rect.left.x, vr = rect.right.x, vt = rect.top.y, vb = rect.bottom.y;
                    r < vl || l > vr || t < vb || b > vt ? this._needDraw = false : this._needDraw = true;
                };
                proto.rendering = function(ctx, scaleX, scaleY) {
                    var node = this._node;
                    if (node._labelType === _ccsg.Label.Type.TTF || node._labelType === _ccsg.Label.Type.SystemFont) {
                        var locDisplayOpacity = this._displayedOpacity;
                        if (0 === locDisplayOpacity) {
                            return;
                        }
                        var wrapper = ctx || cc._renderContext, ctx = wrapper.getContext();
                        wrapper.save();
                        wrapper.setTransform(this._worldTransform, scaleX, scaleY);
                        ctx.setFontSize(node._fontSize);
                        var startPosition = this._calculateFillTextStartPosition();
                        ctx.lineJoin = "round";
                        var color = this._displayedColor;
                        ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
                        if (this._node.isOutlined()) {
                            var strokeColor = this._node.getOutlineColor() || cc.color(255, 255, 255, 255);
                            ctx.strokeStyle = "rgb(" + strokeColor.r + "," + strokeColor.g + "," + strokeColor.b + ")";
                            ctx.lineWidth = 2 * this._node.getOutlineWidth();
                            ctx.strokeText(this._node._string, startPosition.x, startPosition.y);
                        }
                        ctx.fillText(this._node._string, startPosition.x, startPosition.y);
                        wrapper.restore();
                        cc.g_NumberOfDraws = cc.g_NumberOfDraws + 1;
                    }
                };
            })();
        }).call(window, cc, _ccsg);
    }, {
        "../cocos2d/core/event/event-target": 49
    } ],
    4: [ function(require, module, exports) {
        var JS = cc.js;
        var Animator = require("./animators").Animator;
        var DynamicAnimCurve = require("./animation-curves").DynamicAnimCurve;
        var SampledAnimCurve = require("./animation-curves").SampledAnimCurve;
        var sampleMotionPaths = require("./motion-path-helper").sampleMotionPaths;
        var EventAnimCurve = require("./animation-curves").EventAnimCurve;
        var EventInfo = require("./animation-curves").EventInfo;
        var WrapModeMask = require("./types").WrapModeMask;
        var binarySearch = require("./binary-search");
        function AnimationAnimator(target, animation) {
            Animator.call(this, target);
            this.animation = animation;
        }
        JS.extend(AnimationAnimator, Animator);
        var p = AnimationAnimator.prototype;
        p.playState = function(state, startTime) {
            if (!state.clip) {
                return;
            }
            state.curveLoaded || initClipData(this.target, state);
            this.addAnimation(state);
            state.animator = this;
            state.play();
            "number" == typeof startTime && (state.time = startTime);
            this.play();
        };
        p.addAnimation = function(anim) {
            Animator.prototype.addAnimation.call(this, anim);
            var listeners = this.animation._listeners;
            for (var i = 0, l = listeners.length; i < l; i++) {
                var listener = listeners[i];
                anim.on(listener[0], listener[1], listener[2], listener[3]);
            }
        };
        p.removeAnimation = function(anim) {
            Animator.prototype.removeAnimation.call(this, anim);
            anim.animator = null;
        };
        p.sample = function() {
            var anims = this.playingAnims;
            for (var i = 0; i < anims.length; i++) {
                var anim = anims[i];
                anim.sample();
            }
        };
        p.stopState = function(state) {
            state && state.stop();
        };
        p.pauseState = function(state) {
            state && state.pause();
        };
        p.resumeState = function(state) {
            state && state.resume();
            this.isPaused && this.resume();
        };
        p.setStateTime = function(state, time) {
            state && state.setTime(time);
        };
        p.onStop = function() {
            var anims = this.playingAnims;
            for (var i = anims.length - 1; i >= 0; i--) {
                anims[i].stop();
            }
            Animator.prototype.onStop.call(this);
        };
        p.onPause = function() {
            var anims = this.playingAnims;
            for (var i = 0, l = anims.length; i < l; i++) {
                anims[i].pause();
            }
        };
        p.onResume = function() {
            var anims = this.playingAnims;
            for (var i = 0, l = anims.length; i < l; i++) {
                anims[i].resume();
            }
        };
        p._reloadClip = function(state) {
            initClipData(this.target, state);
        };
        function createBatchedProperty(propPath, firstDotIndex, mainValue, animValue) {
            mainValue = mainValue.clone();
            var nextValue = mainValue;
            var leftIndex = firstDotIndex + 1;
            var rightIndex = propPath.indexOf(".", leftIndex);
            while (rightIndex !== -1) {
                var nextName = propPath.slice(leftIndex, rightIndex);
                nextValue = nextValue[nextName];
                leftIndex = rightIndex + 1;
                rightIndex = propPath.indexOf(".", leftIndex);
            }
            var lastPropName = propPath.slice(leftIndex);
            nextValue[lastPropName] = animValue;
            return mainValue;
        }
        function splitPropPath(propPath) {
            var array = propPath.split(".");
            array.shift();
            return array.length > 0 ? array : null;
        }
        function initClipData(root, state) {
            var clip = state.clip;
            var curves = state.curves;
            curves.length = 0;
            state.duration = clip.duration;
            state.speed = clip.speed;
            state.wrapMode = clip.wrapMode;
            state.frameRate = clip.sample;
            (state.wrapMode & WrapModeMask.Loop) === WrapModeMask.Loop ? state.repeatCount = 1 / 0 : state.repeatCount = 1;
            function checkMotionPath(motionPath) {
                if (!Array.isArray(motionPath)) {
                    return false;
                }
                for (var i = 0, l = motionPath.length; i < l; i++) {
                    var controls = motionPath[i];
                    if (!Array.isArray(controls) || 6 !== controls.length) {
                        return false;
                    }
                }
                return true;
            }
            function createPropCurve(target, propPath, keyframes) {
                var isMotionPathProp = target instanceof cc.Node && "position" === propPath;
                var motionPaths = [];
                var curve;
                curve = isMotionPathProp ? new SampledAnimCurve() : new DynamicAnimCurve();
                curve.target = target;
                var propName, propValue;
                var dotIndex = propPath.indexOf(".");
                var hasSubProp = dotIndex !== -1;
                if (hasSubProp) {
                    propName = propPath.slice(0, dotIndex);
                    propValue = target[propName];
                } else {
                    propName = propPath;
                }
                curve.prop = propName;
                curve.subProps = splitPropPath(propPath);
                for (var j = 0, l = keyframes.length; j < l; j++) {
                    var keyframe = keyframes[j];
                    var ratio = keyframe.frame / state.duration;
                    curve.ratios.push(ratio);
                    if (isMotionPathProp) {
                        var motionPath = keyframe.motionPath;
                        if (motionPath && !checkMotionPath(motionPath)) {
                            cc.error("motion path of target [" + target.name + "] in prop [" + propPath + "] frame [" + j + "] is not valid");
                            motionPath = null;
                        }
                        motionPaths.push(motionPath);
                    }
                    var curveValue = keyframe.value;
                    curve.values.push(curveValue);
                    var curveTypes = keyframe.curve;
                    if (curveTypes) {
                        if ("string" == typeof curveTypes) {
                            curve.types.push(curveTypes);
                            continue;
                        }
                        if (Array.isArray(curveTypes)) {
                            curveTypes[0] === curveTypes[1] && curveTypes[2] === curveTypes[3] ? curve.types.push(DynamicAnimCurve.Linear) : curve.types.push(DynamicAnimCurve.Bezier(curveTypes));
                            continue;
                        }
                    }
                    curve.types.push(DynamicAnimCurve.Linear);
                }
                isMotionPathProp && sampleMotionPaths(motionPaths, curve, clip.duration, clip.sample);
                return curve;
            }
            function createTargetCurves(target, curveData) {
                var propsData = curveData.props;
                var compsData = curveData.comps;
                if (propsData) {
                    for (var propPath in propsData) {
                        var data = propsData[propPath];
                        var curve = createPropCurve(target, propPath, data);
                        curves.push(curve);
                    }
                }
                if (compsData) {
                    for (var compName in compsData) {
                        var comp = target.getComponent(compName);
                        if (!comp) {
                            continue;
                        }
                        var compData = compsData[compName];
                        for (var propPath in compData) {
                            var data = compData[propPath];
                            var curve = createPropCurve(comp, propPath, data);
                            curves.push(curve);
                        }
                    }
                }
            }
            var curveData = clip.curveData;
            var childrenCurveDatas = curveData.paths;
            createTargetCurves(root, curveData);
            for (var namePath in childrenCurveDatas) {
                var target = cc.find(namePath, root);
                if (!target) {
                    continue;
                }
                var childCurveDatas = childrenCurveDatas[namePath];
                createTargetCurves(target, childCurveDatas);
            }
            var events = clip.events;
            if (events) {
                var curve;
                for (var i = 0, l = events.length; i < l; i++) {
                    if (!curve) {
                        curve = new EventAnimCurve();
                        curve.target = root;
                        curves.push(curve);
                    }
                    var eventData = events[i];
                    var ratio = eventData.frame / state.duration;
                    var eventInfo;
                    var index = binarySearch(curve.ratios, ratio);
                    if (index >= 0) {
                        eventInfo = curve.events[index];
                    } else {
                        eventInfo = new EventInfo();
                        curve.ratios.push(ratio);
                        curve.events.push(eventInfo);
                    }
                    eventInfo.add(eventData.func, eventData.params);
                }
            }
        }
        module.exports = AnimationAnimator;
    }, {
        "./animation-curves": 6,
        "./animators": 9,
        "./binary-search": 11,
        "./motion-path-helper": 14,
        "./types": 16
    } ],
    5: [ function(require, module, exports) {
        var AnimationClip = cc.Class({
            name: "cc.AnimationClip",
            "extends": cc.Asset,
            properties: {
                _duration: {
                    "default": 0,
                    type: "Float"
                },
                duration: {
                    get: function() {
                        return this._duration;
                    }
                },
                sample: {
                    "default": 60
                },
                speed: {
                    "default": 1
                },
                wrapMode: {
                    "default": cc.WrapMode.Normal
                },
                curveData: {
                    "default": {},
                    visible: false
                },
                events: {
                    "default": [],
                    visible: false
                }
            },
            statics: {
                createWithSpriteFrames: function(spriteFrames, sample) {
                    if (!Array.isArray(spriteFrames)) {
                        cc.error("sprite frames must be an Array.");
                        return null;
                    }
                    var clip = new AnimationClip();
                    clip.sample = sample || clip.sample;
                    clip._duration = spriteFrames.length / clip.sample;
                    var frames = [];
                    var step = 1 / clip.sample;
                    for (var i = 0, l = spriteFrames.length; i < l; i++) {
                        frames[i] = {
                            frame: i * step,
                            value: spriteFrames[i]
                        };
                    }
                    clip.curveData = {
                        comps: {
                            "cc.Sprite": {
                                spriteFrame: frames
                            }
                        }
                    };
                    return clip;
                }
            }
        });
        cc.AnimationClip = module.exports = AnimationClip;
    }, {} ],
    6: [ function(require, module, exports) {
        var bezierByTime = require("./bezier").bezierByTime;
        var binarySearch = require("./binary-search");
        var WrapModeMask = require("./types").WrapModeMask;
        function computeRatioByType(ratio, type) {
            if ("string" == typeof type) {
                var func = cc.Easing[type];
                func ? ratio = func(ratio) : cc.error("Can't find easing type [" + type + "]");
            } else {
                Array.isArray(type) && (ratio = bezierByTime(type, ratio));
            }
            return ratio;
        }
        var AnimCurve = cc.Class({
            name: "cc.AnimCurve",
            sample: function(time, ratio, animationNode) {},
            onTimeChangedManually: function() {}
        });
        var DynamicAnimCurve = cc.Class({
            name: "cc.DynamicAnimCurve",
            "extends": AnimCurve,
            properties: {
                target: null,
                prop: "",
                values: [],
                ratios: [],
                types: [],
                subProps: null
            },
            _calcValue: function(frameIndex, ratio) {
                var values = this.values;
                var fromVal = values[frameIndex - 1];
                var toVal = values[frameIndex];
                var value;
                value = "number" == typeof fromVal ? fromVal + (toVal - fromVal) * ratio : fromVal && fromVal.lerp ? fromVal.lerp(toVal, ratio) : fromVal;
                return value;
            },
            _applyValue: function(target, prop, value) {
                target[prop] = value;
            },
            _findFrameIndex: binarySearch,
            sample: function(time, ratio, animationNode) {
                var values = this.values;
                var ratios = this.ratios;
                var frameCount = ratios.length;
                if (0 === frameCount) {
                    return;
                }
                var value;
                var index = this._findFrameIndex(ratios, ratio);
                if (index < 0) {
                    index = ~index;
                    if (index <= 0) {
                        value = values[0];
                    } else {
                        if (index >= frameCount) {
                            value = values[frameCount - 1];
                        } else {
                            var fromRatio = ratios[index - 1];
                            var toRatio = ratios[index];
                            var type = this.types[index - 1];
                            var ratioBetweenFrames = (ratio - fromRatio) / (toRatio - fromRatio);
                            ratioBetweenFrames = computeRatioByType(ratioBetweenFrames, type);
                            value = this._calcValue(index, ratioBetweenFrames);
                        }
                    }
                } else {
                    value = values[index];
                }
                var subProps = this.subProps;
                if (subProps) {
                    var mainProp = this.target[this.prop];
                    var subProp = mainProp;
                    for (var i = 0; i < subProps.length - 1; i++) {
                        var subPropName = subProps[i];
                        if (!subProp) {
                            return;
                        }
                        subProp = subProp[subPropName];
                    }
                    var propName = subProps[subProps.length - 1];
                    if (!subProp) {
                        return;
                    }
                    this._applyValue(subProp, propName, value);
                    value = mainProp;
                }
                this._applyValue(this.target, this.prop, value);
            }
        });
        DynamicAnimCurve.Linear = null;
        DynamicAnimCurve.Bezier = function(controlPoints) {
            return controlPoints;
        };
        var SampledAnimCurve = cc.Class({
            name: "cc.SampledAnimCurve",
            "extends": DynamicAnimCurve,
            _findFrameIndex: function(ratios, ratio) {
                var length = ratios.length - 1;
                if (0 === length) {
                    return 0;
                }
                var start = ratios[0];
                if (ratio < start) {
                    return 0;
                }
                var end = ratios[length];
                if (ratio > end) {
                    return length;
                }
                ratio = (ratio - start) / (end - start);
                var eachLength = 1 / length;
                var index = ratio / eachLength;
                var floorIndex = 0 | index;
                var EPSILON = 1e-6;
                if (index - floorIndex < EPSILON) {
                    return floorIndex;
                }
                return ~(floorIndex + 1);
            }
        });
        var EventInfo = function() {
            this.events = [];
        };
        EventInfo.prototype.add = function(func, params) {
            this.events.push({
                func: func || "",
                params: params || []
            });
        };
        var EventAnimCurve = cc.Class({
            name: "cc.EventAnimCurve",
            "extends": AnimCurve,
            properties: {
                target: null,
                ratios: [],
                events: [],
                _lastWrappedInfo: null
            },
            _wrapIterations: function(iterations) {
                iterations - (0 | iterations) === 0 && (iterations -= 1);
                return 0 | iterations;
            },
            sample: function(time, ratio, animationNode) {
                var length = this.ratios.length;
                var currentWrappedInfo = animationNode.getWrappedInfo(animationNode.time);
                var direction = currentWrappedInfo.direction;
                var currentIndex = binarySearch(this.ratios, currentWrappedInfo.ratio);
                if (currentIndex < 0) {
                    currentIndex = ~currentIndex - 1;
                    direction < 0 && (currentIndex += 1);
                }
                var lastWrappedInfo = this._lastWrappedInfo;
                currentWrappedInfo.frameIndex = currentIndex;
                this._lastWrappedInfo = currentWrappedInfo;
                if (!lastWrappedInfo) {
                    this._fireEvent(currentIndex);
                    return;
                }
                var lastIndex = lastWrappedInfo.frameIndex;
                var wrapMode = animationNode.wrapMode;
                var currentIterations = this._wrapIterations(currentWrappedInfo.iterations);
                var lastIterations = this._wrapIterations(lastWrappedInfo.iterations);
                var interationsChanged = lastIterations !== -1 && currentIterations !== lastIterations;
                if (lastIndex === currentIndex && interationsChanged && 1 === length) {
                    this._fireEvent(0);
                } else {
                    if (lastIndex !== currentIndex || interationsChanged) {
                        direction = lastWrappedInfo.direction;
                        do {
                            if (lastIndex !== currentIndex) {
                                if (direction === -1 && 0 === lastIndex && currentIndex > 0) {
                                    (wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong ? direction *= -1 : lastIndex = length;
                                    lastIterations++;
                                } else {
                                    if (1 === direction && lastIndex === length - 1 && currentIndex < length - 1) {
                                        (wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong ? direction *= -1 : lastIndex = -1;
                                        lastIterations++;
                                    }
                                }
                                if (lastIndex === currentIndex) {
                                    break;
                                }
                                if (lastIterations > currentIterations) {
                                    break;
                                }
                            }
                            lastIndex += direction;
                            cc.director.getAnimationManager().pushDelayEvent(this, "_fireEvent", [ lastIndex ]);
                        } while (lastIndex !== currentIndex && lastIndex > -1 && lastIndex < length);
                    }
                }
            },
            _fireEvent: function(index) {
                if (index < 0 || index >= this.events.length) {
                    return;
                }
                var eventInfo = this.events[index];
                var events = eventInfo.events;
                var components = this.target._components;
                for (var i = 0; i < events.length; i++) {
                    var event = events[i];
                    var funcName = event.func;
                    for (var j = 0; j < components.length; j++) {
                        var component = components[j];
                        var func = component[funcName];
                        func && func.apply(component, event.params);
                    }
                }
            },
            onTimeChangedManually: function() {
                this._lastWrappedInfo = null;
            }
        });
        module.exports = {
            AnimCurve: AnimCurve,
            DynamicAnimCurve: DynamicAnimCurve,
            SampledAnimCurve: SampledAnimCurve,
            EventAnimCurve: EventAnimCurve,
            EventInfo: EventInfo,
            computeRatioByType: computeRatioByType
        };
    }, {
        "./bezier": 10,
        "./binary-search": 11,
        "./types": 16
    } ],
    7: [ function(require, module, exports) {
        var JS = cc.js;
        var AnimationManager = cc.Class({
            ctor: function() {
                this.animators = [];
                this.__instanceId = cc.ClassManager.getNewInstanceId();
                this._updating = false;
                this._removeList = [];
                this._delayEvents = [];
            },
            update: function(dt) {
                this._updating = true;
                var animators = this.animators;
                var i, l;
                for (i = 0, l = animators.length; i < l; i++) {
                    var animator = animators[i];
                    animator._isPlaying && !animator._isPaused && animator.update(dt);
                }
                this._updating = false;
                var removeList = this._removeList;
                for (i = 0, l = removeList.length; i < l; i++) {
                    this.removeAnimator(removeList[i]);
                }
                removeList.length = 0;
                var events = this._delayEvents;
                for (i = 0, l = events.length; i < l; i++) {
                    var event = events[i];
                    event.target[event.func].apply(event.target, event.args);
                }
                events.length = 0;
            },
            destruct: function() {},
            addAnimator: function(animator) {
                var index = this.animators.indexOf(animator);
                index === -1 && this.animators.push(animator);
                index = this._removeList.indexOf(animator);
                index !== -1 && this._removeList.splice(index, 1);
            },
            removeAnimator: function(animator) {
                var index = this.animators.indexOf(animator);
                if (index >= 0) {
                    if (this._updating) {
                        var removeList = this._removeList;
                        removeList.indexOf(animator) === -1 && removeList.push(animator);
                    } else {
                        this.animators.splice(index, 1);
                    }
                } else {
                    cc.error("animator not added or already removed");
                }
            },
            pushDelayEvent: function(target, func, args) {
                this._delayEvents.push({
                    target: target,
                    func: func,
                    args: args
                });
            }
        });
        cc.AnimationManager = module.exports = AnimationManager;
    }, {} ],
    8: [ function(require, module, exports) {
        var JS = cc.js;
        var AnimationNode = require("./types").AnimationNode;
        function AnimationState(clip, name) {
            AnimationNode.call(this, null, null, {
                duration: clip.length
            });
            this._emit = this.emit;
            this.emit = function() {
                cc.director.getAnimationManager().pushDelayEvent(this, "_emit", arguments);
            };
            this._clip = clip;
            this._name = name || clip.name;
        }
        JS.extend(AnimationState, AnimationNode);
        var state = AnimationState.prototype;
        JS.get(state, "clip", function() {
            return this._clip;
        });
        JS.get(state, "name", function() {
            return this._name;
        });
        JS.obsolete(state, "AnimationState.length", "duration");
        JS.getset(state, "curveLoaded", function() {
            return this.curves.length > 0;
        }, function() {
            this.curves.length = 0;
        });
        state.onPlay = function() {
            this.setTime(0);
            AnimationNode.prototype.onPlay.call(this);
        };
        state.onStop = function() {
            AnimationNode.prototype.onStop.call(this);
            this.animator && this.animator.removeAnimation(this);
        };
        state.setTime = function(time) {
            this.time = time || 0;
            this.curves.forEach(function(curve) {
                curve.onTimeChangedManually();
            });
        };
        cc.AnimationState = module.exports = AnimationState;
    }, {
        "./types": 16
    } ],
    9: [ function(require, module, exports) {
        var JS = cc.js;
        var Playable = require("./playable");
        var AnimationNode = require("./types").AnimationNode;
        var DynamicAnimCurve = require("./animation-curves").DynamicAnimCurve;
        function Animator(target) {
            this.target = target;
            this.playingAnims = [];
            this._updating = false;
            this._removeList = [];
        }
        JS.extend(Animator, Playable);
        var animProto = Animator.prototype;
        animProto.update = function(dt) {
            this._updating = true;
            var i, l;
            var anims = this.playingAnims;
            var stoppedCount = 0;
            for (i = 0, l = anims.length; i < l; i++) {
                var anim = anims[i];
                if (anim._isPlaying && !anim._isPaused) {
                    anim.update(dt);
                    anim._isPlaying || stoppedCount++;
                }
            }
            this._updating = false;
            (0 === anims.length || stoppedCount >= anims.length) && this.stop();
            var removeList = this._removeList;
            for (i = 0, l = removeList.length; i < l; i++) {
                this.removeAnimation(removeList[i]);
            }
            removeList.length = 0;
        };
        animProto.onPlay = function() {
            cc.director.getAnimationManager().addAnimator(this);
        };
        animProto.onStop = function() {
            cc.director.getAnimationManager().removeAnimator(this);
        };
        animProto.addAnimation = function(anim) {
            var index = this.playingAnims.indexOf(anim);
            index === -1 && this.playingAnims.push(anim);
            index = this._removeList.indexOf(anim);
            index !== -1 && this._removeList.splice(index, 1);
        };
        animProto.removeAnimation = function(anim) {
            var index = this.playingAnims.indexOf(anim);
            if (index >= 0) {
                if (this._updating) {
                    var removeList = this._removeList;
                    removeList.indexOf(anim) === -1 && removeList.push(anim);
                } else {
                    this.playingAnims.splice(index, 1);
                }
            } else {
                cc.error("animation not added or already removed");
            }
        };
        function EntityAnimator(target) {
            Animator.call(this, target);
        }
        JS.extend(EntityAnimator, Animator);
        var entProto = EntityAnimator.prototype;
        function computeNullRatios(keyFrames) {
            var lastIndex = 0;
            var lastRatio = 0;
            var len = keyFrames.length;
            for (var i = 0; i < len; i++) {
                var frame = keyFrames[i];
                var ratio = frame.ratio;
                0 === i && "number" != typeof ratio ? frame.computedRatio = ratio = 0 : i === len - 1 && "number" != typeof ratio && (frame.computedRatio = ratio = 1);
                if ("number" == typeof ratio) {
                    if (lastIndex + 1 < i) {
                        var count = i - lastIndex;
                        var step = (ratio - lastRatio) / count;
                        for (var j = lastIndex + 1; j < i; j++) {
                            lastRatio += step;
                            keyFrames[j].computedRatio = lastRatio;
                        }
                    }
                    lastIndex = i;
                    lastRatio = ratio;
                }
            }
        }
        entProto.animate = function(keyFrames, timingInput) {
            if (!keyFrames) {
                cc.error("[animate] keyFrames must be non-nil");
                return null;
            }
            computeNullRatios(keyFrames);
            var anim = this._doAnimate(keyFrames, timingInput);
            this.play();
            return anim;
        };
        function findCurve(curves, target, propName) {
            var i = 0, curve;
            for (;i < curves.length; i++) {
                curve = curves[i];
                if (curve.target === target && curve.prop === propName) {
                    return curve;
                }
            }
            return null;
        }
        function createPropCurve(curves, target, propName, value, ratio) {
            var curve = findCurve(curves, target, propName);
            if (!curve) {
                curve = new DynamicAnimCurve();
                curves.push(curve);
                curve.target = target;
                curve.prop = propName;
            }
            curve.values.push(value);
            curve.ratios.push(ratio);
        }
        entProto._doAnimate = function(keyFrames, timingInput) {
            var anim = new AnimationNode(this, null, timingInput);
            anim.play();
            var curves = anim.curves;
            var lastRatio = -1;
            for (var i = 0; i < keyFrames.length; i++) {
                var frame = keyFrames[i];
                var ratio = frame.ratio;
                "number" != typeof ratio && (ratio = frame.computedRatio);
                if (ratio < 0) {
                    cc.error("[animate] ratio should >= 0!");
                    continue;
                }
                if (ratio < lastRatio) {
                    cc.error("[animate] ratio should in the order of smallest to largest!");
                    continue;
                }
                lastRatio = ratio;
                for (var key in frame) {
                    var data = frame[key];
                    if ("props" === key) {
                        for (var propName in data) {
                            createPropCurve(curves, this.target, propName, data[propName], ratio);
                        }
                    } else {
                        if ("comps" === key) {
                            for (var compName in data) {
                                var comp = this.target.getComponent(compName);
                                var compData = data[compName];
                                for (var propName in compData) {
                                    createPropCurve(curves, comp, propName, compData[propName], ratio);
                                }
                            }
                        }
                    }
                }
            }
            this.playingAnims.push(anim);
            return anim;
        };
        module.exports = {
            Animator: Animator,
            EntityAnimator: EntityAnimator
        };
    }, {
        "./animation-curves": 6,
        "./playable": 15,
        "./types": 16
    } ],
    10: [ function(require, module, exports) {
        function bezier(C1, C2, C3, C4, t) {
            var t1 = 1 - t;
            return C1 * t1 * t1 * t1 + 3 * C2 * t1 * t1 * t + 3 * C3 * t1 * t * t + C4 * t * t * t;
        }
        var cos = Math.cos, acos = Math.acos, max = Math.max, pi = Math.PI, tau = 2 * pi, sqrt = Math.sqrt;
        function crt(v) {
            return v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3);
        }
        function cardano(curve, x) {
            var pa = x - 0;
            var pb = x - curve[0];
            var pc = x - curve[2];
            var pd = x - 1;
            var pa3 = 3 * pa;
            var pb3 = 3 * pb;
            var pc3 = 3 * pc;
            var d = -pa + pb3 - pc3 + pd, rd = 1 / d, r3 = 1 / 3, a = (pa3 - 6 * pb + pc3) * rd, a3 = a * r3, b = (-pa3 + pb3) * rd, c = pa * rd, p = (3 * b - a * a) * r3, p3 = p * r3, q = (2 * a * a * a - 9 * a * b + 27 * c) / 27, q2 = q / 2, discriminant = q2 * q2 + p3 * p3 * p3, u1, v1, x1, x2, x3;
            if (discriminant < 0) {
                var mp3 = -p * r3, mp33 = mp3 * mp3 * mp3, r = sqrt(mp33), t = -q / (2 * r), cosphi = t < -1 ? -1 : t > 1 ? 1 : t, phi = acos(cosphi), crtr = crt(r), t1 = 2 * crtr;
                x1 = t1 * cos(phi * r3) - a3;
                x2 = t1 * cos((phi + tau) * r3) - a3;
                x3 = t1 * cos((phi + 2 * tau) * r3) - a3;
                return 0 <= x1 && x1 <= 1 ? 0 <= x2 && x2 <= 1 ? 0 <= x3 && x3 <= 1 ? max(x1, x2, x3) : max(x1, x2) : 0 <= x3 && x3 <= 1 ? max(x1, x3) : x1 : 0 <= x2 && x2 <= 1 ? 0 <= x3 && x3 <= 1 ? max(x2, x3) : x2 : x3;
            }
            if (0 === discriminant) {
                u1 = q2 < 0 ? crt(-q2) : -crt(q2);
                x1 = 2 * u1 - a3;
                x2 = -u1 - a3;
                return 0 <= x1 && x1 <= 1 ? 0 <= x2 && x2 <= 1 ? max(x1, x2) : x1 : x2;
            }
            var sd = sqrt(discriminant);
            u1 = crt(-q2 + sd);
            v1 = crt(q2 + sd);
            x1 = u1 - v1 - a3;
            return x1;
        }
        function bezierByTime(controlPoints, x) {
            var percent = cardano(controlPoints, x);
            var p0y = 0;
            var p1y = controlPoints[1];
            var p2y = controlPoints[3];
            var p3y = 1;
            var t1 = 1 - percent;
            return p0y * t1 * t1 * t1 + 3 * p1y * percent * t1 * t1 + 3 * p2y * percent * percent * t1 + p3y * percent * percent * percent;
        }
        module.exports = {
            bezier: bezier,
            bezierByTime: bezierByTime
        };
    }, {} ],
    11: [ function(require, module, exports) {
        var EPSILON = 1e-6;
        function binarySearch(array, value) {
            var l = 0, h = array.length - 1;
            while (l <= h) {
                var m = l + h >> 1;
                if (Math.abs(array[m] - value) < EPSILON) {
                    return m;
                }
                array[m] > value ? h = m - 1 : l = m + 1;
            }
            return ~l;
        }
        module.exports = binarySearch;
    }, {} ],
    12: [ function(require, module, exports) {
        var Easing = {
            constant: function() {
                return 0;
            },
            linear: function(k) {
                return k;
            },
            quadIn: function(k) {
                return k * k;
            },
            quadOut: function(k) {
                return k * (2 - k);
            },
            quadInOut: function(k) {
                if ((k *= 2) < 1) {
                    return .5 * k * k;
                }
                return -.5 * (--k * (k - 2) - 1);
            },
            cubicIn: function(k) {
                return k * k * k;
            },
            cubicOut: function(k) {
                return --k * k * k + 1;
            },
            cubicInOut: function(k) {
                if ((k *= 2) < 1) {
                    return .5 * k * k * k;
                }
                return .5 * ((k -= 2) * k * k + 2);
            },
            quartIn: function(k) {
                return k * k * k * k;
            },
            quartOut: function(k) {
                return 1 - --k * k * k * k;
            },
            quartInOut: function(k) {
                if ((k *= 2) < 1) {
                    return .5 * k * k * k * k;
                }
                return -.5 * ((k -= 2) * k * k * k - 2);
            },
            quintIn: function(k) {
                return k * k * k * k * k;
            },
            quintOut: function(k) {
                return --k * k * k * k * k + 1;
            },
            quintInOut: function(k) {
                if ((k *= 2) < 1) {
                    return .5 * k * k * k * k * k;
                }
                return .5 * ((k -= 2) * k * k * k * k + 2);
            },
            sineIn: function(k) {
                return 1 - Math.cos(k * Math.PI / 2);
            },
            sineOut: function(k) {
                return Math.sin(k * Math.PI / 2);
            },
            sineInOut: function(k) {
                return .5 * (1 - Math.cos(Math.PI * k));
            },
            expoIn: function(k) {
                return 0 === k ? 0 : Math.pow(1024, k - 1);
            },
            expoOut: function(k) {
                return 1 === k ? 1 : 1 - Math.pow(2, -10 * k);
            },
            expoInOut: function(k) {
                if (0 === k) {
                    return 0;
                }
                if (1 === k) {
                    return 1;
                }
                if ((k *= 2) < 1) {
                    return .5 * Math.pow(1024, k - 1);
                }
                return .5 * (-Math.pow(2, -10 * (k - 1)) + 2);
            },
            circIn: function(k) {
                return 1 - Math.sqrt(1 - k * k);
            },
            circOut: function(k) {
                return Math.sqrt(1 - --k * k);
            },
            circInOut: function(k) {
                if ((k *= 2) < 1) {
                    return -.5 * (Math.sqrt(1 - k * k) - 1);
                }
                return .5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
            },
            elasticIn: function(k) {
                var s, a = .1, p = .4;
                if (0 === k) {
                    return 0;
                }
                if (1 === k) {
                    return 1;
                }
                if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                } else {
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }
                return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
            },
            elasticOut: function(k) {
                var s, a = .1, p = .4;
                if (0 === k) {
                    return 0;
                }
                if (1 === k) {
                    return 1;
                }
                if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                } else {
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }
                return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
            },
            elasticInOut: function(k) {
                var s, a = .1, p = .4;
                if (0 === k) {
                    return 0;
                }
                if (1 === k) {
                    return 1;
                }
                if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                } else {
                    s = p * Math.asin(1 / a) / (2 * Math.PI);
                }
                if ((k *= 2) < 1) {
                    return -.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
                }
                return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * .5 + 1;
            },
            backIn: function(k) {
                var s = 1.70158;
                return k * k * ((s + 1) * k - s);
            },
            backOut: function(k) {
                var s = 1.70158;
                return --k * k * ((s + 1) * k + s) + 1;
            },
            backInOut: function(k) {
                var s = 2.5949095;
                if ((k *= 2) < 1) {
                    return .5 * (k * k * ((s + 1) * k - s));
                }
                return .5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
            },
            bounceOut: function(k) {
                return k < 1 / 2.75 ? 7.5625 * k * k : k < 2 / 2.75 ? 7.5625 * (k -= 1.5 / 2.75) * k + .75 : k < 2.5 / 2.75 ? 7.5625 * (k -= 2.25 / 2.75) * k + .9375 : 7.5625 * (k -= 2.625 / 2.75) * k + .984375;
            },
            smooth: function(t) {
                if (t <= 0) {
                    return 0;
                }
                if (t >= 1) {
                    return 1;
                }
                return t * t * (3 - 2 * t);
            },
            fade: function(t) {
                if (t <= 0) {
                    return 0;
                }
                if (t >= 1) {
                    return 1;
                }
                return t * t * t * (t * (6 * t - 15) + 10);
            }
        };
        function _makeOutIn(fnIn, fnOut) {
            return function(k) {
                if (k < .5) {
                    return fnOut(2 * k) / 2;
                }
                return fnIn(2 * k - 1) / 2 + .5;
            };
        }
        Easing.quadOutIn = _makeOutIn(Easing.quadIn, Easing.quadOut);
        Easing.cubicOutIn = _makeOutIn(Easing.cubicIn, Easing.cubicOut);
        Easing.quartOutIn = _makeOutIn(Easing.quartIn, Easing.quartOut);
        Easing.quintOutIn = _makeOutIn(Easing.quintIn, Easing.quintOut);
        Easing.sineOutIn = _makeOutIn(Easing.sineIn, Easing.sineOut);
        Easing.expoOutIn = _makeOutIn(Easing.expoIn, Easing.expoOut);
        Easing.circOutIn = _makeOutIn(Easing.circIn, Easing.circOut);
        Easing.backOutIn = _makeOutIn(Easing.backIn, Easing.backOut);
        Easing.backOutIn = _makeOutIn(Easing.backIn, Easing.backOut);
        Easing.bounceIn = function(k) {
            return 1 - Easing.bounceOut(1 - k);
        };
        Easing.bounceInOut = function(k) {
            if (k < .5) {
                return .5 * Easing.bounceIn(2 * k);
            }
            return .5 * Easing.bounceOut(2 * k - 1) + .5;
        };
        Easing.bounceOutIn = _makeOutIn(Easing.bounceIn, Easing.bounceOut);
        cc.Easing = module.exports = Easing;
    }, {} ],
    13: [ function(require, module, exports) {
        require("./bezier");
        require("./easing");
        require("./types");
        require("./motion-path-helper");
        require("./animation-curves");
        require("./animation-clip");
        require("./animators");
        require("./animation-manager");
        require("./animation-state");
        require("./animation-animator");
    }, {
        "./animation-animator": 4,
        "./animation-clip": 5,
        "./animation-curves": 6,
        "./animation-manager": 7,
        "./animation-state": 8,
        "./animators": 9,
        "./bezier": 10,
        "./easing": 12,
        "./motion-path-helper": 14,
        "./types": 16
    } ],
    14: [ function(require, module, exports) {
        var DynamicAnimCurve = require("./animation-curves").DynamicAnimCurve;
        var computeRatioByType = require("./animation-curves").computeRatioByType;
        var bezier = require("./bezier").bezier;
        var binarySearch = require("./binary-search");
        var v2 = cc.v2;
        function Curve(points) {
            this.points = points || [];
            this.beziers = [];
            this.ratios = [];
            this.progresses = [];
            this.length = 0;
            this.computeBeziers();
        }
        Curve.prototype.computeBeziers = function() {
            this.beziers.length = 0;
            this.ratios.length = 0;
            this.progresses.length = 0;
            this.length = 0;
            var bezier;
            for (var i = 1; i < this.points.length; i++) {
                var startPoint = this.points[i - 1];
                var endPoint = this.points[i];
                bezier = new Bezier();
                bezier.start = startPoint.pos;
                bezier.startCtrlPoint = startPoint.out;
                bezier.end = endPoint.pos;
                bezier.endCtrlPoint = endPoint["in"];
                this.beziers.push(bezier);
                this.length += bezier.getLength();
            }
            var current = 0;
            for (var i = 0; i < this.beziers.length; i++) {
                bezier = this.beziers[i];
                this.ratios[i] = bezier.getLength() / this.length;
                this.progresses[i] = current += this.ratios[i];
            }
            return this.beziers;
        };
        function Bezier() {
            this.start = v2();
            this.end = v2();
            this.startCtrlPoint = v2();
            this.endCtrlPoint = v2();
        }
        Bezier.prototype.getPointAt = function(u) {
            var t = this.getUtoTmapping(u);
            return this.getPoint(t);
        };
        Bezier.prototype.getPoint = function(t) {
            var x = bezier(this.start.x, this.startCtrlPoint.x, this.endCtrlPoint.x, this.end.x, t);
            var y = bezier(this.start.y, this.startCtrlPoint.y, this.endCtrlPoint.y, this.end.y, t);
            return new v2(x, y);
        };
        Bezier.prototype.getLength = function() {
            var lengths = this.getLengths();
            return lengths[lengths.length - 1];
        };
        Bezier.prototype.getLengths = function(divisions) {
            divisions || (divisions = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
            if (this.cacheArcLengths && this.cacheArcLengths.length === divisions + 1) {
                return this.cacheArcLengths;
            }
            var cache = [];
            var current, last = this.getPoint(0);
            var p, sum = 0;
            cache.push(0);
            for (p = 1; p <= divisions; p++) {
                current = this.getPoint(p / divisions);
                sum += cc.pDistance(current, last);
                cache.push(sum);
                last = current;
            }
            this.cacheArcLengths = cache;
            return cache;
        };
        Bezier.prototype.getUtoTmapping = function(u, distance) {
            var arcLengths = this.getLengths();
            var i = 0, il = arcLengths.length;
            var targetArcLength;
            targetArcLength = distance ? distance : u * arcLengths[il - 1];
            var low = 0, high = il - 1, comparison;
            while (low <= high) {
                i = Math.floor(low + (high - low) / 2);
                comparison = arcLengths[i] - targetArcLength;
                if (comparison < 0) {
                    low = i + 1;
                    continue;
                }
                if (comparison > 0) {
                    high = i - 1;
                    continue;
                }
                high = i;
                break;
            }
            i = high;
            if (arcLengths[i] === targetArcLength) {
                var t = i / (il - 1);
                return t;
            }
            var lengthBefore = arcLengths[i];
            var lengthAfter = arcLengths[i + 1];
            var segmentLength = lengthAfter - lengthBefore;
            var segmentFraction = (targetArcLength - lengthBefore) / segmentLength;
            var t = (i + segmentFraction) / (il - 1);
            return t;
        };
        function sampleMotionPaths(motionPaths, data, duration, fps) {
            function createControlPoints(array) {
                if (array instanceof cc.Vec2) {
                    return {
                        "in": array,
                        pos: array,
                        out: array
                    };
                }
                if (Array.isArray(array) && 6 === array.length) {
                    return {
                        "in": v2(array[2], array[3]),
                        pos: v2(array[0], array[1]),
                        out: v2(array[4], array[5])
                    };
                }
                return {
                    "in": cc.Vec2.ZERO,
                    pos: cc.Vec2.ZERO,
                    out: cc.Vec2.ZERO
                };
            }
            var values = data.values;
            if (0 === motionPaths.length || 0 === values.length) {
                return;
            }
            values = values.map(function(value) {
                return v2(value[0], value[1]);
            });
            if (1 === values.length) {
                data.values = values;
                return;
            }
            var types = data.types;
            var ratios = data.ratios;
            var newValues = data.values = [];
            var newTypes = data.types = [];
            var newRatios = data.ratios = [];
            function addNewDatas(value, type, ratio) {
                newValues.push(value);
                newTypes.push(type);
                newRatios.push(ratio);
            }
            var startRatioOffset = 0;
            var EPSILON = 1e-6;
            var newType = DynamicAnimCurve.Linear;
            for (var i = 0, l = motionPaths.length; i < l - 1; i++) {
                var motionPath = motionPaths[i];
                var ratio = ratios[i];
                var nextRatio = ratios[i + 1];
                var betweenRatio = nextRatio - ratio;
                var value = values[i];
                var nextValue = values[i + 1];
                var type = types[i];
                var results = [];
                var progress = startRatioOffset / betweenRatio;
                var speed = 1 / (betweenRatio * duration * fps);
                var finalProgress;
                if (motionPath && motionPath.length > 0) {
                    var points = [];
                    points.push(createControlPoints(value));
                    for (var j = 0, l2 = motionPath.length; j < l2; j++) {
                        var controlPoints = createControlPoints(motionPath[j]);
                        points.push(controlPoints);
                    }
                    points.push(createControlPoints(nextValue));
                    var curve = new Curve(points);
                    curve.computeBeziers();
                    var progresses = curve.progresses;
                    while (1 - progress > EPSILON) {
                        finalProgress = progress;
                        finalProgress = computeRatioByType(finalProgress, type);
                        var pos, bezier, normal, length;
                        if (finalProgress < 0) {
                            bezier = curve.beziers[0];
                            length = (0 - finalProgress) * bezier.getLength();
                            normal = bezier.start.sub(bezier.endCtrlPoint).normalize();
                            pos = bezier.start.add(normal.mul(length));
                        } else {
                            if (finalProgress > 1) {
                                bezier = curve.beziers[curve.beziers.length - 1];
                                length = (finalProgress - 1) * bezier.getLength();
                                normal = bezier.end.sub(bezier.startCtrlPoint).normalize();
                                pos = bezier.end.add(normal.mul(length));
                            } else {
                                var bezierIndex = binarySearch(progresses, finalProgress);
                                bezierIndex < 0 && (bezierIndex = ~bezierIndex);
                                finalProgress -= bezierIndex > 0 ? progresses[bezierIndex - 1] : 0;
                                finalProgress /= curve.ratios[bezierIndex];
                                pos = curve.beziers[bezierIndex].getPointAt(finalProgress);
                            }
                        }
                        results.push(pos);
                        progress += speed;
                    }
                } else {
                    while (1 - progress > EPSILON) {
                        finalProgress = progress;
                        finalProgress = computeRatioByType(finalProgress, type);
                        results.push(value.lerp(nextValue, finalProgress));
                        progress += speed;
                    }
                }
                newType = "constant" === type ? type : DynamicAnimCurve.Linear;
                for (var j = 0, l2 = results.length; j < l2; j++) {
                    var newRatio = ratio + startRatioOffset + speed * j * betweenRatio;
                    addNewDatas(results[j], newType, newRatio);
                }
                startRatioOffset = Math.abs(progress - 1) > EPSILON ? (progress - 1) * betweenRatio : 0;
            }
            ratios[ratios.length - 1] !== newRatios[newRatios.length - 1] && addNewDatas(values[values.length - 1], newType, ratios[ratios.length - 1]);
        }
        module.exports = {
            sampleMotionPaths: sampleMotionPaths,
            Curve: Curve,
            Bezier: Bezier
        };
    }, {
        "./animation-curves": 6,
        "./bezier": 10,
        "./binary-search": 11
    } ],
    15: [ function(require, module, exports) {
        var JS = cc.js;
        function Playable() {
            this._isPlaying = false;
            this._isPaused = false;
            this._stepOnce = false;
        }
        var prototype = Playable.prototype;
        JS.get(prototype, "isPlaying", function() {
            return this._isPlaying;
        }, true);
        JS.get(prototype, "isPaused", function() {
            return this._isPaused;
        }, true);
        var virtual = function() {};
        prototype.onPlay = virtual;
        prototype.onPause = virtual;
        prototype.onResume = virtual;
        prototype.onStop = virtual;
        prototype.onError = virtual;
        prototype.play = function() {
            if (this._isPlaying) {
                if (this._isPaused) {
                    this._isPaused = false;
                    this.onResume();
                } else {
                    this.onError("already-playing");
                }
            } else {
                this._isPlaying = true;
                this.onPlay();
            }
        };
        prototype.stop = function() {
            if (this._isPlaying) {
                this._isPlaying = false;
                this._isPaused = false;
                this.onStop();
            }
        };
        prototype.pause = function() {
            this._isPaused = true;
            this.onPause();
        };
        prototype.resume = function() {
            this._isPaused = false;
            this.onResume();
        };
        prototype.step = function() {
            this.pause();
            this._stepOnce = true;
            this._isPlaying || this.play();
        };
        module.exports = Playable;
    }, {} ],
    16: [ function(require, module, exports) {
        var JS = cc.js;
        var Playable = require("./playable");
        var WrapModeMask = {
            Loop: 2,
            ShouldWrap: 4,
            PingPong: 22,
            Reverse: 36
        };
        var WrapMode = cc.Enum({
            Default: 0,
            Normal: 1,
            Reverse: WrapModeMask.Reverse,
            Loop: WrapModeMask.Loop,
            LoopReverse: WrapModeMask.Loop | WrapModeMask.Reverse,
            PingPong: WrapModeMask.PingPong,
            PingPongReverse: WrapModeMask.PingPong | WrapModeMask.Reverse
        });
        cc.WrapMode = WrapMode;
        var AnimationNodeBase = function() {
            Playable.call(this);
        };
        JS.extend(AnimationNodeBase, Playable);
        AnimationNodeBase.prototype.update = function(deltaTime) {};
        function AnimationNode(animator, curves, timingInput) {
            AnimationNodeBase.call(this);
            this.animator = animator;
            this.curves = curves || [];
            this.delay = 0;
            this.repeatCount = 1;
            this.duration = 1;
            this.speed = 1;
            this.wrapMode = WrapMode.Normal;
            if (timingInput) {
                this.delay = timingInput.delay || this.delay;
                var duration = timingInput.duration;
                "undefined" != typeof duration && (this.duration = duration);
                var speed = timingInput.speed;
                "undefined" != typeof speed && (this.speed = speed);
                var wrapMode = timingInput.wrapMode;
                if ("undefined" != typeof wrapMode) {
                    var isEnum = "number" == typeof wrapMode;
                    isEnum ? this.wrapMode = wrapMode : this.wrapMode = WrapMode[wrapMode];
                }
                var repeatCount = timingInput.repeatCount;
                "undefined" != typeof repeatCount ? this.repeatCount = repeatCount : this.wrapMode & WrapModeMask.Loop && (this.repeatCount = 1 / 0);
            }
            this.time = 0;
            this._timeNoScale = 0;
            this._firstFramePlayed = false;
            this._duringDelay = false;
            this.delay > 0 && (this._duringDelay = true);
        }
        JS.extend(AnimationNode, AnimationNodeBase);
        JS.mixin(AnimationNode.prototype, {
            update: function(delta) {
                if (this._duringDelay) {
                    this._timeNoScale += delta;
                    if (this._timeNoScale < this.delay) {
                        return;
                    }
                    this._duringDelay = false;
                }
                this._firstFramePlayed ? this.time += delta * this.speed : this._firstFramePlayed = true;
                var info = this.sample();
                this._lastWrappedInfo || (this._lastWrappedInfo = info);
                var anotherIteration = (0 | info.iterations) > (0 | this._lastWrappedInfo.iterations);
                this.repeatCount > 1 && anotherIteration && ((this.wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse ? this._lastWrappedInfo.direction < 0 && this.emit("lastframe", this) : this._lastWrappedInfo.direction > 0 && this.emit("lastframe", this));
                if (info.stopped) {
                    this.stop();
                    this.emit("finished", this);
                }
                this._lastWrappedInfo = info;
            },
            _needRevers: function(currentIterations) {
                var wrapMode = this.wrapMode;
                var needRevers = false;
                if ((wrapMode & WrapModeMask.PingPong) === WrapModeMask.PingPong) {
                    var isEnd = currentIterations - (0 | currentIterations) === 0;
                    isEnd && currentIterations > 0 && (currentIterations -= 1);
                    var isOddIteration = 1 & currentIterations;
                    isOddIteration && (needRevers = !needRevers);
                }
                (wrapMode & WrapModeMask.Reverse) === WrapModeMask.Reverse && (needRevers = !needRevers);
                return needRevers;
            },
            getWrappedInfo: function(time) {
                var stopped = false;
                var duration = this.duration;
                var ratio = 0;
                var wrapMode = this.wrapMode;
                var currentIterations = Math.abs(time / duration);
                currentIterations > this.repeatCount && (currentIterations = this.repeatCount);
                var needRevers = false;
                wrapMode & WrapModeMask.ShouldWrap && (needRevers = this._needRevers(currentIterations));
                var direction = needRevers ? -1 : 1;
                this.speed < 0 && (direction *= -1);
                if (currentIterations >= this.repeatCount) {
                    stopped = true;
                    var tempRatio = this.repeatCount - (0 | this.repeatCount);
                    0 === tempRatio && (tempRatio = 1);
                    time = tempRatio * duration * (time > 0 ? 1 : -1);
                }
                if (time > duration) {
                    var tempTime = time % duration;
                    time = 0 === tempTime ? duration : tempTime;
                } else {
                    if (time < 0) {
                        time %= duration;
                        0 !== time && (time += duration);
                    }
                }
                wrapMode & WrapModeMask.ShouldWrap && needRevers && (time = duration - time);
                ratio = time / duration;
                return {
                    ratio: ratio,
                    time: time,
                    direction: direction,
                    stopped: stopped,
                    iterations: currentIterations
                };
            },
            sample: function() {
                var info = this.getWrappedInfo(this.time);
                var curves = this.curves;
                for (var i = 0, len = curves.length; i < len; i++) {
                    var curve = curves[i];
                    curve.sample(info.time, info.ratio, this);
                }
                return info;
            },
            onStop: function() {
                this.emit("stop", this);
            },
            onPlay: function() {
                this.emit("play", this);
            },
            onPause: function() {
                this.emit("pause", this);
            },
            onResume: function() {
                this.emit("resume", this);
            }
        });
        cc.defineGetterSetter(AnimationNode.prototype, "wrapMode", function() {
            return this._wrapMode;
        }, function(value) {
            this._wrapMode = value;
            this.time = 0;
            value & WrapModeMask.Loop ? this.repeatCount = 1 / 0 : this.repeatCount = 1;
        });
        cc.js.mixin(AnimationNode.prototype, cc.EventTarget.prototype);
        cc.AnimationNode = AnimationNode;
        module.exports = {
            WrapModeMask: WrapModeMask,
            WrapMode: WrapMode,
            AnimationNode: AnimationNode
        };
    }, {
        "./playable": 15
    } ],
    17: [ function(require, module, exports) {
        var HashElement = cc._Class.extend({
            actions: null,
            target: null,
            actionIndex: 0,
            currentAction: null,
            currentActionSalvaged: false,
            paused: false,
            hh: null,
            ctor: function() {
                this.actions = [];
                this.target = null;
                this.actionIndex = 0;
                this.currentAction = null;
                this.currentActionSalvaged = false;
                this.paused = false;
                this.hh = null;
            }
        });
        cc.ActionManager = cc._Class.extend({
            _hashTargets: null,
            _arrayTargets: null,
            _currentTarget: null,
            _currentTargetSalvaged: false,
            _searchElementByTarget: function(arr, target) {
                for (var k = 0; k < arr.length; k++) {
                    if (target === arr[k].target) {
                        return arr[k];
                    }
                }
                return null;
            },
            ctor: function() {
                this._hashTargets = {};
                this._arrayTargets = [];
                this._currentTarget = null;
                this._currentTargetSalvaged = false;
            },
            addAction: function(action, target, paused) {
                if (!action) {
                    throw new Error("cc.ActionManager.addAction(): action must be non-null");
                }
                if (!target) {
                    throw new Error("cc.ActionManager.addAction(): action must be non-null");
                }
                var element = this._hashTargets[target.__instanceId];
                if (!element) {
                    element = new HashElement();
                    element.paused = paused;
                    element.target = target;
                    this._hashTargets[target.__instanceId] = element;
                    this._arrayTargets.push(element);
                }
                this._actionAllocWithHashElement(element);
                element.actions.push(action);
                action.startWithTarget(target);
            },
            removeAllActions: function() {
                var locTargets = this._arrayTargets;
                for (var i = 0; i < locTargets.length; i++) {
                    var element = locTargets[i];
                    element && this.removeAllActionsFromTarget(element.target, true);
                }
            },
            removeAllActionsFromTarget: function(target, forceDelete) {
                if (null == target) {
                    return;
                }
                var element = this._hashTargets[target.__instanceId];
                if (element) {
                    element.actions.indexOf(element.currentAction) === -1 || element.currentActionSalvaged || (element.currentActionSalvaged = true);
                    element.actions.length = 0;
                    this._currentTarget !== element || forceDelete ? this._deleteHashElement(element) : this._currentTargetSalvaged = true;
                }
            },
            removeAction: function(action) {
                if (null == action) {
                    return;
                }
                var target = action.getOriginalTarget();
                var element = this._hashTargets[target.__instanceId];
                if (element) {
                    for (var i = 0; i < element.actions.length; i++) {
                        if (element.actions[i] === action) {
                            element.actions.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    cc.log(cc._LogInfos.ActionManager.removeAction);
                }
            },
            removeActionByTag: function(tag, target) {
                tag === cc.Action.TAG_INVALID && cc.log(cc._LogInfos.ActionManager.addAction);
                cc.assert(target, cc._LogInfos.ActionManager.addAction);
                var element = this._hashTargets[target.__instanceId];
                if (element) {
                    var limit = element.actions.length;
                    for (var i = 0; i < limit; ++i) {
                        var action = element.actions[i];
                        if (action && action.getTag() === tag && action.getOriginalTarget() === target) {
                            this._removeActionAtIndex(i, element);
                            break;
                        }
                    }
                }
            },
            getActionByTag: function(tag, target) {
                tag === cc.Action.TAG_INVALID && cc.log(cc._LogInfos.ActionManager.getActionByTag);
                var element = this._hashTargets[target.__instanceId];
                if (element) {
                    if (null != element.actions) {
                        for (var i = 0; i < element.actions.length; ++i) {
                            var action = element.actions[i];
                            if (action && action.getTag() === tag) {
                                return action;
                            }
                        }
                    }
                    cc.log(cc._LogInfos.ActionManager.getActionByTag_2, tag);
                }
                return null;
            },
            getNumberOfRunningActionsInTarget: function(target) {
                var element = this._hashTargets[target.__instanceId];
                if (element) {
                    return element.actions ? element.actions.length : 0;
                }
                return 0;
            },
            pauseTarget: function(target) {
                var element = this._hashTargets[target.__instanceId];
                element && (element.paused = true);
            },
            resumeTarget: function(target) {
                var element = this._hashTargets[target.__instanceId];
                element && (element.paused = false);
            },
            pauseAllRunningActions: function() {
                var idsWithActions = [];
                var locTargets = this._arrayTargets;
                for (var i = 0; i < locTargets.length; i++) {
                    var element = locTargets[i];
                    if (element && !element.paused) {
                        element.paused = true;
                        idsWithActions.push(element.target);
                    }
                }
                return idsWithActions;
            },
            resumeTargets: function(targetsToResume) {
                if (!targetsToResume) {
                    return;
                }
                for (var i = 0; i < targetsToResume.length; i++) {
                    targetsToResume[i] && this.resumeTarget(targetsToResume[i]);
                }
            },
            pauseTargets: function(targetsToPause) {
                if (!targetsToPause) {
                    return;
                }
                for (var i = 0; i < targetsToPause.length; i++) {
                    targetsToPause[i] && this.pauseTarget(targetsToPause[i]);
                }
            },
            purgeSharedManager: function() {
                cc.director.getScheduler().unscheduleUpdate(this);
            },
            _removeActionAtIndex: function(index, element) {
                var action = element.actions[index];
                action !== element.currentAction || element.currentActionSalvaged || (element.currentActionSalvaged = true);
                element.actions.splice(index, 1);
                element.actionIndex >= index && element.actionIndex--;
                0 === element.actions.length && (this._currentTarget === element ? this._currentTargetSalvaged = true : this._deleteHashElement(element));
            },
            _deleteHashElement: function(element) {
                var ret = false;
                if (element) {
                    if (this._hashTargets[element.target.__instanceId]) {
                        delete this._hashTargets[element.target.__instanceId];
                        cc.js.array.remove(this._arrayTargets, element);
                        ret = true;
                    }
                    element.actions = null;
                    element.target = null;
                }
                return ret;
            },
            _actionAllocWithHashElement: function(element) {
                null == element.actions && (element.actions = []);
            },
            update: function(dt) {
                var locTargets = this._arrayTargets, locCurrTarget;
                for (var elt = 0; elt < locTargets.length; elt++) {
                    this._currentTarget = locTargets[elt];
                    locCurrTarget = this._currentTarget;
                    if (!locCurrTarget.paused) {
                        for (locCurrTarget.actionIndex = 0; locCurrTarget.actionIndex < (locCurrTarget.actions ? locCurrTarget.actions.length : 0); locCurrTarget.actionIndex++) {
                            locCurrTarget.currentAction = locCurrTarget.actions[locCurrTarget.actionIndex];
                            if (!locCurrTarget.currentAction) {
                                continue;
                            }
                            locCurrTarget.currentActionSalvaged = false;
                            locCurrTarget.currentAction.step(dt * (locCurrTarget.currentAction._speedMethod ? locCurrTarget.currentAction._speed : 1));
                            if (locCurrTarget.currentActionSalvaged) {
                                locCurrTarget.currentAction = null;
                            } else {
                                if (locCurrTarget.currentAction.isDone()) {
                                    locCurrTarget.currentAction.stop();
                                    var action = locCurrTarget.currentAction;
                                    locCurrTarget.currentAction = null;
                                    this.removeAction(action);
                                }
                            }
                            locCurrTarget.currentAction = null;
                        }
                    }
                    this._currentTargetSalvaged && 0 === locCurrTarget.actions.length && this._deleteHashElement(locCurrTarget) && elt--;
                }
            }
        });
    }, {} ],
    18: [ function(require, module, exports) {
        var EventTarget = require("./event/event-target");
        var Class = require("./platform/_CCClass");
        var AutoReleaseUtils = require("./load-pipeline/auto-release-utils");
        cc.g_NumberOfDraws = 0;
        cc.Director = Class.extend({
            _landscape: false,
            _nextDeltaTimeZero: false,
            _paused: false,
            _purgeDirectorInNextLoop: false,
            _sendCleanupToScene: false,
            _animationInterval: 0,
            _oldAnimationInterval: 0,
            _projection: 0,
            _contentScaleFactor: 1,
            _deltaTime: 0,
            _winSizeInPoints: null,
            _lastUpdate: null,
            _nextScene: null,
            _notificationNode: null,
            _openGLView: null,
            _scenesStack: null,
            _projectionDelegate: null,
            _loadingScene: "",
            _runningScene: null,
            _scene: null,
            _totalFrames: 0,
            _secondsPerFrame: 0,
            _dirtyRegion: null,
            _scheduler: null,
            _actionManager: null,
            ctor: function() {
                var self = this;
                EventTarget.call(self);
                self._lastUpdate = Date.now();
                cc.game.on(cc.game.EVENT_SHOW, function() {
                    self._lastUpdate = Date.now();
                });
            },
            init: function() {
                this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS;
                this._scenesStack = [];
                this._projection = cc.Director.PROJECTION_DEFAULT;
                this._projectionDelegate = null;
                this._totalFrames = 0;
                this._lastUpdate = Date.now();
                this._paused = false;
                this._purgeDirectorInNextLoop = false;
                this._winSizeInPoints = cc.size(0, 0);
                this._openGLView = null;
                this._contentScaleFactor = 1;
                this._scheduler = new cc.Scheduler();
                if (cc.ActionManager) {
                    this._actionManager = new cc.ActionManager();
                    this._scheduler.scheduleUpdate(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
                } else {
                    this._actionManager = null;
                }
                this.sharedInit();
                return true;
            },
            sharedInit: function() {
                if (cc.AnimationManager) {
                    this._animationManager = new cc.AnimationManager();
                    this._scheduler.scheduleUpdate(this._animationManager, cc.Scheduler.PRIORITY_SYSTEM, false);
                } else {
                    this._animationManager = null;
                }
                if (cc.CollisionManager) {
                    this._collisionManager = new cc.CollisionManager();
                    this._scheduler.scheduleUpdate(this._collisionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
                } else {
                    this._collisionManager = null;
                }
                cc._widgetManager && cc._widgetManager.init(this);
            },
            calculateDeltaTime: function() {
                var now = Date.now();
                if (this._nextDeltaTimeZero) {
                    this._deltaTime = 0;
                    this._nextDeltaTimeZero = false;
                } else {
                    this._deltaTime = (now - this._lastUpdate) / 1e3;
                    cc.game.config[cc.game.CONFIG_KEY.debugMode] > 0 && this._deltaTime > 1 && (this._deltaTime = 1 / 60);
                }
                this._lastUpdate = now;
            },
            convertToGL: null,
            convertToUI: null,
            engineUpdate: function(deltaTime) {
                this._scheduler.update(deltaTime);
            },
            _visitScene: function() {
                if (this._runningScene) {
                    var renderer = cc.renderer;
                    if (renderer.childrenOrderDirty) {
                        renderer.clearRenderCommands();
                        cc.renderer.assignedZ = 0;
                        this._runningScene._renderCmd._curLevel = 0;
                        this._runningScene._renderCmd.visit();
                        renderer.resetFlag();
                    } else {
                        renderer.transformDirty() && renderer.transform();
                    }
                }
            },
            visit: function(deltaTime) {
                this.emit(cc.Director.EVENT_BEFORE_VISIT, this);
                this._beforeVisitScene && this._beforeVisitScene();
                this._visitScene();
                this._notificationNode && this._notificationNode.visit();
                this.emit(cc.Director.EVENT_AFTER_VISIT, this);
                this._afterVisitScene && this._afterVisitScene();
            },
            _beforeVisitScene: null,
            _afterVisitScene: null,
            end: function() {
                this._purgeDirectorInNextLoop = true;
            },
            getContentScaleFactor: function() {
                return this._contentScaleFactor;
            },
            getNotificationNode: function() {
                return this._notificationNode;
            },
            getWinSize: function() {
                return cc.size(this._winSizeInPoints);
            },
            getWinSizeInPixels: function() {
                return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor);
            },
            getVisibleSize: null,
            getVisibleOrigin: null,
            getZEye: null,
            pause: function() {
                if (this._paused) {
                    return;
                }
                this._oldAnimationInterval = this._animationInterval;
                this.setAnimationInterval(.25);
                this._paused = true;
            },
            popScene: function() {
                cc.assert(this._runningScene, cc._LogInfos.Director.popScene);
                this._scenesStack.pop();
                var c = this._scenesStack.length;
                if (0 === c) {
                    this.end();
                } else {
                    this._sendCleanupToScene = true;
                    this._nextScene = this._scenesStack[c - 1];
                }
            },
            purgeCachedData: function() {
                cc.spriteFrameCache._clear();
                cc.textureCache._clear();
            },
            purgeDirector: function() {
                this.getScheduler().unscheduleAll();
                cc.eventManager && cc.eventManager.setEnabled(false);
                if (this._runningScene) {
                    this._runningScene.onExitTransitionDidStart();
                    this._runningScene.onExit();
                    this._runningScene.cleanup();
                    cc.renderer.clearRenderCommands();
                }
                this._runningScene = null;
                this._nextScene = null;
                this._scenesStack.length = 0;
                this.stopAnimation();
                this.purgeCachedData();
                cc.checkGLErrorDebug();
            },
            reset: function() {
                this.purgeDirector();
                cc.eventManager && cc.eventManager.setEnabled(true);
                this._actionManager && this._scheduler.scheduleUpdate(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
                this._animationManager && this._scheduler.scheduleUpdate(this._animationManager, cc.Scheduler.PRIORITY_SYSTEM, false);
                this._collisionManager && this._scheduler.scheduleUpdate(this._collisionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
                this.startAnimation();
            },
            pushScene: function(scene) {
                cc.assert(scene, cc._LogInfos.Director.pushScene);
                this._sendCleanupToScene = false;
                this._scenesStack.push(scene);
                this._nextScene = scene;
            },
            runSceneImmediate: function(scene, onBeforeLoadScene, onLaunched) {
                var id, node, game = cc.game;
                var persistNodes = game._persistRootNodes;
                scene instanceof cc.Scene && scene._load();
                for (id in persistNodes) {
                    node = persistNodes[id];
                    game._ignoreRemovePersistNode = node;
                    node.parent = null;
                    game._ignoreRemovePersistNode = null;
                }
                var oldScene = this._scene;
                var autoReleaseAssets = oldScene && oldScene.autoReleaseAssets && oldScene.dependAssets;
                AutoReleaseUtils.autoRelease(cc.loader, autoReleaseAssets, scene.dependAssets);
                cc.isValid(oldScene) && oldScene.destroy();
                this._scene = null;
                cc.Object._deferredDestroy();
                onBeforeLoadScene && onBeforeLoadScene();
                this.emit(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, scene);
                var sgScene = scene;
                if (scene instanceof cc.Scene) {
                    this._scene = scene;
                    sgScene = scene._sgNode;
                    for (id in persistNodes) {
                        node = persistNodes[id];
                        var existNode = scene.getChildByUuid(id);
                        if (existNode) {
                            var index = existNode.getSiblingIndex();
                            existNode._destroyImmediate();
                            node.parent = scene;
                            node.setSiblingIndex(index);
                        } else {
                            node.parent = scene;
                        }
                    }
                    scene._activate();
                }
                if (this._runningScene) {
                    var i = this._scenesStack.length;
                    this._scenesStack[Math.max(i - 1, 0)] = sgScene;
                    this._sendCleanupToScene = true;
                    this._nextScene = sgScene;
                } else {
                    this.pushScene(sgScene);
                    this.startAnimation();
                }
                this._nextScene && this.setNextScene();
                onLaunched && onLaunched(null, scene);
                this.emit(cc.Director.EVENT_AFTER_SCENE_LAUNCH, scene);
            },
            runScene: function(scene, onBeforeLoadScene, onLaunched) {
                cc.assert(scene, cc._LogInfos.Director.pushScene);
                scene instanceof cc.Scene && scene._load();
                this.once(cc.Director.EVENT_AFTER_UPDATE, function() {
                    this.runSceneImmediate(scene, onBeforeLoadScene, onLaunched);
                });
            },
            _getSceneUuid: function(key) {
                var scenes = cc.game._sceneInfos;
                if ("string" == typeof key) {
                    key.endsWith(".fire") || (key += ".fire");
                    "/" === key[0] || key.startsWith("db://assets/") || (key = "/" + key);
                    for (var i = 0; i < scenes.length; i++) {
                        var info = scenes[i];
                        if (info.url.endsWith(key)) {
                            return info;
                        }
                    }
                } else {
                    if ("number" == typeof key) {
                        if (0 <= key && key < scenes.length) {
                            return scenes[key];
                        }
                        cc.error("loadScene: The scene index to load (%s) is out of range.", key);
                    } else {
                        cc.error('loadScene: Unknown name type to load: "%s"', key);
                    }
                }
                return null;
            },
            loadScene: function(sceneName, onLaunched, _onUnloaded) {
                if (this._loadingScene) {
                    cc.error('loadScene: Failed to load scene "%s" because "%s" is already loading', sceneName, this._loadingScene);
                    return false;
                }
                var info = this._getSceneUuid(sceneName);
                if (info) {
                    var uuid = info.uuid;
                    this.emit(cc.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
                    this._loadingScene = sceneName;
                    var self;
                    var groupName;
                    var ensureAsync;
                    this._loadSceneByUuid(uuid, onLaunched, _onUnloaded);
                    return true;
                }
                cc.error('loadScene: Can not load the scene "%s" because it was not in the build settings before playing.', sceneName);
                return false;
            },
            preloadScene: function(sceneName, onLoaded) {
                var info = this._getSceneUuid(sceneName);
                if (info) {
                    this.emit(cc.Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
                    cc.loader.load({
                        id: info.uuid,
                        type: "uuid"
                    }, function(error, asset) {
                        error && cc.error('Failed to preload "%s", %s', sceneName, error.message);
                        onLoaded && onLoaded(error, asset);
                    });
                } else {
                    var error = 'Can not preload the scene "' + sceneName + '" because it is not in the build settings.';
                    onLoaded(new Error(error));
                    cc.error("preloadScene: " + error);
                }
            },
            _loadSceneByUuid: function(uuid, onLaunched, onUnloaded) {
                cc.AssetLibrary.loadAsset(uuid, function(error, sceneAsset) {
                    var self = cc.director;
                    self._loadingScene = "";
                    var scene;
                    if (error) {
                        error = "Failed to load scene: " + error;
                        cc.error(error);
                        console.assert(false, error);
                    } else {
                        if (sceneAsset instanceof cc.SceneAsset) {
                            scene = sceneAsset.scene;
                            scene._id = sceneAsset._uuid;
                            scene._name = sceneAsset._name;
                            self.runSceneImmediate(scene, onUnloaded, onLaunched);
                        } else {
                            error = "The asset " + uuid + " is not a scene";
                            cc.error(error);
                            scene = null;
                        }
                    }
                    error && onLaunched && onLaunched(error);
                });
            },
            resume: function() {
                if (!this._paused) {
                    return;
                }
                this.setAnimationInterval(this._oldAnimationInterval);
                this._lastUpdate = Date.now();
                this._lastUpdate || cc.log(cc._LogInfos.Director.resume);
                this._paused = false;
                this._deltaTime = 0;
            },
            setContentScaleFactor: function(scaleFactor) {
                scaleFactor !== this._contentScaleFactor && (this._contentScaleFactor = scaleFactor);
            },
            setDepthTest: null,
            setClearColor: null,
            setDefaultValues: function() {},
            setNextDeltaTimeZero: function(nextDeltaTimeZero) {
                this._nextDeltaTimeZero = nextDeltaTimeZero;
            },
            setNextScene: function() {
                var runningIsTransition = false, newIsTransition = false;
                if (cc.TransitionScene) {
                    runningIsTransition = !!this._runningScene && this._runningScene instanceof cc.TransitionScene;
                    newIsTransition = !!this._nextScene && this._nextScene instanceof cc.TransitionScene;
                }
                if (!newIsTransition) {
                    var locRunningScene = this._runningScene;
                    if (locRunningScene) {
                        locRunningScene.onExitTransitionDidStart();
                        locRunningScene.onExit();
                    }
                    this._sendCleanupToScene && locRunningScene && locRunningScene.cleanup();
                }
                this._runningScene = this._nextScene;
                cc.renderer.childrenOrderDirty = true;
                this._nextScene = null;
                if (!runningIsTransition && null !== this._runningScene) {
                    this._runningScene.onEnter();
                    this._runningScene.onEnterTransitionDidFinish();
                }
            },
            setNotificationNode: function(node) {
                cc.renderer.childrenOrderDirty = true;
                if (this._notificationNode) {
                    this._notificationNode.onExitTransitionDidStart();
                    this._notificationNode.onExit();
                    this._notificationNode.cleanup();
                }
                this._notificationNode = node;
                if (!node) {
                    return;
                }
                this._notificationNode.onEnter();
                this._notificationNode.onEnterTransitionDidFinish();
            },
            getDelegate: function() {
                return this._projectionDelegate;
            },
            setDelegate: function(delegate) {
                this._projectionDelegate = delegate;
            },
            setOpenGLView: null,
            setProjection: null,
            setViewport: null,
            getOpenGLView: null,
            getProjection: null,
            setAlphaBlending: null,
            isSendCleanupToScene: function() {
                return this._sendCleanupToScene;
            },
            getRunningScene: function() {
                return this._runningScene;
            },
            getScene: function() {
                return this._scene;
            },
            getAnimationInterval: function() {
                return this._animationInterval;
            },
            isDisplayStats: function() {
                return !!cc.profiler && cc.profiler.isShowingStats();
            },
            setDisplayStats: function(displayStats) {
                cc.profiler && (displayStats ? cc.profiler.showStats() : cc.profiler.hideStats());
            },
            getSecondsPerFrame: function() {
                return this._secondsPerFrame;
            },
            isNextDeltaTimeZero: function() {
                return this._nextDeltaTimeZero;
            },
            isPaused: function() {
                return this._paused;
            },
            getTotalFrames: function() {
                return this._totalFrames;
            },
            popToRootScene: function() {
                this.popToSceneStackLevel(1);
            },
            popToSceneStackLevel: function(level) {
                cc.assert(this._runningScene, cc._LogInfos.Director.popToSceneStackLevel_2);
                var locScenesStack = this._scenesStack;
                var c = locScenesStack.length;
                if (0 === c) {
                    this.end();
                    return;
                }
                if (level > c) {
                    return;
                }
                while (c > level) {
                    var current = locScenesStack.pop();
                    if (current.running) {
                        current.onExitTransitionDidStart();
                        current.onExit();
                    }
                    current.cleanup();
                    c--;
                }
                this._nextScene = locScenesStack[locScenesStack.length - 1];
                this._sendCleanupToScene = false;
            },
            getScheduler: function() {
                return this._scheduler;
            },
            setScheduler: function(scheduler) {
                this._scheduler !== scheduler && (this._scheduler = scheduler);
            },
            getActionManager: function() {
                return this._actionManager;
            },
            setActionManager: function(actionManager) {
                this._actionManager !== actionManager && (this._actionManager = actionManager);
            },
            getAnimationManager: function() {
                return this._animationManager;
            },
            getCollisionManager: function() {
                return this._collisionManager;
            },
            getDeltaTime: function() {
                return this._deltaTime;
            },
            _calculateMPF: function() {
                var now = Date.now();
                this._secondsPerFrame = (now - this._lastUpdate) / 1e3;
            }
        });
        cc.js.addon(cc.Director.prototype, EventTarget.prototype);
        cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
        cc.Director.EVENT_BEFORE_SCENE_LOADING = "director_before_scene_loading";
        cc.Director.EVENT_BEFORE_SCENE_LAUNCH = "director_before_scene_launch";
        cc.Director.EVENT_AFTER_SCENE_LAUNCH = "director_after_scene_launch";
        cc.Director.EVENT_BEFORE_UPDATE = "director_before_update";
        cc.Director.EVENT_COMPONENT_UPDATE = "director_component_update";
        cc.Director.EVENT_COMPONENT_LATE_UPDATE = "director_component_late_update";
        cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
        cc.Director.EVENT_BEFORE_VISIT = "director_before_visit";
        cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
        cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
        cc.DisplayLinkDirector = cc.Director.extend({
            invalid: false,
            startAnimation: function() {
                this._nextDeltaTimeZero = true;
                this.invalid = false;
            },
            mainLoop: function() {
                if (this._purgeDirectorInNextLoop) {
                    this._purgeDirectorInNextLoop = false;
                    this.purgeDirector();
                } else {
                    if (!this.invalid) {
                        this.calculateDeltaTime();
                        if (!this._paused) {
                            this.emit(cc.Director.EVENT_BEFORE_UPDATE);
                            this.emit(cc.Director.EVENT_COMPONENT_UPDATE, this._deltaTime);
                            this.engineUpdate(this._deltaTime);
                            this.emit(cc.Director.EVENT_COMPONENT_LATE_UPDATE, this._deltaTime);
                            this.emit(cc.Director.EVENT_AFTER_UPDATE);
                            cc.Object._deferredDestroy();
                        }
                        this._nextScene && this.setNextScene();
                        this.visit(this._deltaTime);
                        cc.g_NumberOfDraws = 0;
                        cc.renderer.clear();
                        cc.renderer.rendering(cc._renderContext);
                        this._totalFrames++;
                        this.emit(cc.Director.EVENT_AFTER_DRAW);
                        this._calculateMPF();
                    }
                }
            },
            stopAnimation: function() {
                this.invalid = true;
            },
            setAnimationInterval: function(value) {
                this._animationInterval = value;
                if (!this.invalid) {
                    this.stopAnimation();
                    this.startAnimation();
                }
            }
        });
        cc.Director.sharedDirector = null;
        cc.Director.firstUseDirector = true;
        cc.Director._getInstance = function() {
            if (cc.Director.firstUseDirector) {
                cc.Director.firstUseDirector = false;
                cc.Director.sharedDirector = new cc.DisplayLinkDirector();
                cc.Director.sharedDirector.init();
            }
            return cc.Director.sharedDirector;
        };
        cc.defaultFPS = 60;
        cc.Director.PROJECTION_2D = 0;
        cc.Director.PROJECTION_3D = 1;
        cc.Director.PROJECTION_CUSTOM = 3;
        cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_2D;
    }, {
        "./event/event-target": 49,
        "./load-pipeline/auto-release-utils": 56,
        "./platform/_CCClass": 74
    } ],
    19: [ function(require, module, exports) {
        require("./CCDirector");
        require("./CCGame");
        cc.game.once(cc.game.EVENT_RENDERER_INITED, function() {
            if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                var _p = cc.Director.prototype;
                _p.getProjection = function(projection) {
                    return this._projection;
                };
                _p.setProjection = function(projection) {
                    this._projection = projection;
                    this.emit(cc.Director.EVENT_PROJECTION_CHANGED, this);
                };
                _p.setDepthTest = function() {};
                _p.setClearColor = function(clearColor) {
                    cc.renderer._clearColor = clearColor;
                    cc.renderer._clearFillStyle = "rgb(" + clearColor.r + "," + clearColor.g + "," + clearColor.b + ")";
                };
                _p.setOpenGLView = function(openGLView) {
                    this._winSizeInPoints.width = cc.sys.windowPixelResolution.width;
                    this._winSizeInPoints.height = cc.sys.windowPixelResolution.height;
                    this._openGLView = openGLView || cc.view;
                    cc.eventManager && cc.eventManager.setEnabled(true);
                };
                _p.getVisibleSize = function() {
                    return this.getWinSize();
                };
                _p.getVisibleOrigin = function() {
                    return cc.p(0, 0);
                };
            }
        });
    }, {
        "./CCDirector": 18,
        "./CCGame": 20
    } ],
    20: [ function(require, module, exports) {
        var EventTarget = require("./event/event-target");
        var View;
        View = require("./platform/CCView");
        var game = {
            EVENT_HIDE: "game_on_hide",
            EVENT_SHOW: "game_on_show",
            EVENT_GAME_INITED: "game_inited",
            EVENT_RENDERER_INITED: "renderer_inited",
            RENDER_TYPE_CANVAS: 0,
            RENDER_TYPE_WEBGL: 1,
            RENDER_TYPE_OPENGL: 2,
            _persistRootNodes: {},
            _ignoreRemovePersistNode: null,
            CONFIG_KEY: {
                width: "width",
                height: "height",
                engineDir: "engineDir",
                modules: "modules",
                debugMode: "debugMode",
                showFPS: "showFPS",
                frameRate: "frameRate",
                id: "id",
                renderMode: "renderMode",
                registerSystemEvent: "registerSystemEvent",
                jsList: "jsList",
                scenes: "scenes"
            },
            _paused: true,
            _isCloning: false,
            _prepareCalled: false,
            _prepared: false,
            _rendererInitialized: false,
            _renderContext: null,
            _intervalId: null,
            _lastTime: null,
            _frameTime: null,
            _sceneInfos: [],
            frame: null,
            container: null,
            canvas: null,
            config: null,
            onStart: null,
            onStop: null,
            setFrameRate: function(frameRate) {
                var self = this, config = self.config, CONFIG_KEY = self.CONFIG_KEY;
                config[CONFIG_KEY.frameRate] = frameRate;
                self._intervalId && cancelAnimationFrame(self._intervalId);
                self._intervalId = 0;
                self._paused = true;
                self._setAnimFrame();
                self._runMainLoop();
            },
            step: function() {
                cc.director.mainLoop();
            },
            pause: function() {
                if (this._paused) {
                    return;
                }
                this._paused = true;
                this._intervalId && cancelAnimationFrame(this._intervalId);
                this._intervalId = 0;
            },
            resume: function() {
                if (!this._paused) {
                    return;
                }
                this._paused = false;
                this._runMainLoop();
            },
            isPaused: function() {
                return this._paused;
            },
            restart: function() {
                cc.director.popToSceneStackLevel(0);
                game.onStart();
            },
            end: function() {
                close();
            },
            prepare: function(cb) {
                var self = this, config = self.config, CONFIG_KEY = self.CONFIG_KEY;
                this._initConfig(config);
                if (this._prepared) {
                    cb && cb();
                    return;
                }
                if (this._prepareCalled) {
                    return;
                }
                if (cc._engineLoaded) {
                    this._prepareCalled = true;
                    this._initRenderer(config[CONFIG_KEY.width], config[CONFIG_KEY.height]);
                    cc.view = View ? View._getInstance() : null;
                    cc.director = cc.Director._getInstance();
                    cc.director.setOpenGLView && cc.director.setOpenGLView(cc.view);
                    cc.winSize = cc.director.getWinSize();
                    this._setAnimFrame();
                    this._runMainLoop();
                    var jsList = config[CONFIG_KEY.jsList];
                    if (jsList && jsList.length > 0) {
                        cc.loader.load(jsList, function(err) {
                            if (err) {
                                throw new Error(JSON.stringify(err));
                            }
                            self._prepared = true;
                            self.emit(self.EVENT_GAME_INITED);
                            cb && cb();
                        });
                    } else {
                        self.emit(self.EVENT_GAME_INITED);
                        cb && cb();
                    }
                    return;
                }
                cc.initEngine(this.config, function() {
                    self.prepare(cb);
                });
            },
            run: function(config, onStart) {
                if ("function" == typeof config) {
                    game.onStart = config;
                } else {
                    config && (game.config = config);
                    "function" == typeof onStart && (game.onStart = onStart);
                }
                this.prepare(game.onStart && game.onStart.bind(game));
            },
            addPersistRootNode: function(node) {
                if (!(node instanceof cc.Node && node.uuid)) {
                    cc.warn("The target can not be made persist because it's not a cc.Node or it doesn't have _id property.");
                    return;
                }
                var id = node.uuid;
                if (!this._persistRootNodes[id]) {
                    var scene = cc.director._scene;
                    if (cc.isValid(scene)) {
                        if (node.parent) {
                            if (!(node.parent instanceof cc.Scene)) {
                                cc.warn("The node can not be made persist because it's not under root node.");
                                return;
                            }
                            if (node.parent !== scene) {
                                cc.warn("The node can not be made persist because it's not in current scene.");
                                return;
                            }
                        } else {
                            node.parent = scene;
                        }
                        this._persistRootNodes[id] = node;
                        node._persistNode = true;
                    }
                }
            },
            removePersistRootNode: function(node) {
                if (node !== this._ignoreRemovePersistNode) {
                    var id = node.uuid || "";
                    if (node === this._persistRootNodes[id]) {
                        delete this._persistRootNodes[id];
                        node._persistNode = false;
                    }
                }
            },
            isPersistRootNode: function(node) {
                return node._persistNode;
            },
            _setAnimFrame: function() {
                this._lastTime = new Date();
                this._frameTime = 1e3 / game.config[game.CONFIG_KEY.frameRate];
            },
            _stTime: function(callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, game._frameTime - (currTime - game._lastTime));
                var id = setTimeout(function() {
                    callback();
                }, timeToCall);
                game._lastTime = currTime + timeToCall;
                return id;
            },
            _ctTime: function(id) {
                clearTimeout(id);
            },
            _runMainLoop: function() {
                var self = this, callback, config = self.config, CONFIG_KEY = self.CONFIG_KEY, director = cc.director;
                director.setDisplayStats(config[CONFIG_KEY.showFPS]);
                callback = function() {
                    if (!self._paused) {
                        director.mainLoop();
                        self._intervalId && cancelAnimationFrame(self._intervalId);
                        self._intervalId = requestAnimationFrame(callback);
                    }
                };
                requestAnimationFrame(callback);
                self._paused = false;
            },
            _initConfig: function(config) {
                var CONFIG_KEY = this.CONFIG_KEY, modules = config[CONFIG_KEY.modules];
                "number" != typeof config[CONFIG_KEY.debugMode] && (config[CONFIG_KEY.debugMode] = 0);
                "number" != typeof config[CONFIG_KEY.frameRate] && (config[CONFIG_KEY.frameRate] = 60);
                "number" != typeof config[CONFIG_KEY.renderMode] && (config[CONFIG_KEY.renderMode] = 0);
                "boolean" != typeof config[CONFIG_KEY.registerSystemEvent] && (config[CONFIG_KEY.registerSystemEvent] = true);
                config[CONFIG_KEY.showFPS] = !(CONFIG_KEY.showFPS in config) || !!config[CONFIG_KEY.showFPS];
                config[CONFIG_KEY.engineDir] = config[CONFIG_KEY.engineDir] || "frameworks/cocos2d-html5";
                modules && modules.indexOf("core") < 0 && modules.splice(0, 0, "core");
                modules && (config[CONFIG_KEY.modules] = modules);
                this._sceneInfos = config[CONFIG_KEY.scenes] || [];
                this.collisionMatrix = config.collisionMatrix || [];
                this.groupList = config.groupList || [];
                cc._initDebugSetting(config[CONFIG_KEY.debugMode]);
                this.config = config;
            },
            _initRenderer: function() {
                if (this._rendererInitialized) {
                    return;
                }
                if (!cc._supportRender) {
                    throw new Error("The renderer doesn't support the renderMode " + this.config[this.CONFIG_KEY.renderMode]);
                }
                cc._renderType = game.RENDER_TYPE_CANVAS;
                cc.renderer = cc.rendererCanvas;
                cc.renderer.init();
                this._renderContext = cc._renderContext = new cc.CanvasContextWrapper(wx.createContext());
                this.emit(this.EVENT_RENDERER_INITED, true);
                this._rendererInitialized = true;
            }
        };
        EventTarget.call(game);
        cc.js.addon(game, EventTarget.prototype);
        cc.game = module.exports = game;
    }, {
        "./event/event-target": 49,
        "./platform/CCView": 72
    } ],
    21: [ function(require, module, exports) {
        "use strict";
        var EventTarget = require("./event/event-target");
        var PrefabHelper = require("./utils/prefab-helper");
        var JS = cc.js;
        var Flags = cc.Object.Flags;
        var Destroying = Flags.Destroying;
        var DontDestroy = Flags.DontDestroy;
        var Activating = Flags.Activating;
        var EventType = cc.Enum({
            TOUCH_START: "touchstart",
            TOUCH_MOVE: "touchmove",
            TOUCH_END: "touchend",
            TOUCH_CANCEL: "touchcancel",
            MOUSE_DOWN: "mousedown",
            MOUSE_MOVE: "mousemove",
            MOUSE_ENTER: "mouseenter",
            MOUSE_LEAVE: "mouseleave",
            MOUSE_UP: "mouseup",
            MOUSE_WHEEL: "mousewheel"
        });
        var _touchEvents = [ EventType.TOUCH_START, EventType.TOUCH_MOVE, EventType.TOUCH_END, EventType.TOUCH_CANCEL ];
        var _mouseEvents = [ EventType.MOUSE_DOWN, EventType.MOUSE_ENTER, EventType.MOUSE_MOVE, EventType.MOUSE_LEAVE, EventType.MOUSE_UP, EventType.MOUSE_WHEEL ];
        var _currentHovered = null;
        var _touchStartHandler = function(touch, event) {
            var pos = touch.getLocation();
            var node = this.owner;
            if (node._hitTest(pos, this)) {
                event.type = EventType.TOUCH_START;
                event.touch = touch;
                event.bubbles = true;
                node.dispatchEvent(event);
                return true;
            }
            return false;
        };
        var _touchMoveHandler = function(touch, event) {
            var node = this.owner;
            event.type = EventType.TOUCH_MOVE;
            event.touch = touch;
            event.bubbles = true;
            node.dispatchEvent(event);
        };
        var _touchEndHandler = function(touch, event) {
            var pos = touch.getLocation();
            var node = this.owner;
            node._hitTest(pos, this) ? event.type = EventType.TOUCH_END : event.type = EventType.TOUCH_CANCEL;
            event.touch = touch;
            event.bubbles = true;
            node.dispatchEvent(event);
        };
        var _mouseDownHandler = function(event) {
            var pos = event.getLocation();
            var node = this.owner;
            if (node._hitTest(pos, this)) {
                event.type = EventType.MOUSE_DOWN;
                node.dispatchEvent(event);
                event.stopPropagation();
            }
        };
        var _mouseMoveHandler = function(event) {
            var pos = event.getLocation();
            var node = this.owner;
            if (node._hitTest(pos, this)) {
                event.stopPropagation();
                if (!this._previousIn) {
                    if (_currentHovered) {
                        event.type = EventType.MOUSE_LEAVE;
                        _currentHovered.dispatchEvent(event);
                        _currentHovered._mouseListener._previousIn = false;
                    }
                    _currentHovered = this.owner;
                    event.type = EventType.MOUSE_ENTER;
                    node.dispatchEvent(event);
                    this._previousIn = true;
                }
                event.type = EventType.MOUSE_MOVE;
                node.dispatchEvent(event);
            } else {
                if (this._previousIn) {
                    event.type = EventType.MOUSE_LEAVE;
                    node.dispatchEvent(event);
                    this._previousIn = false;
                    _currentHovered = null;
                }
            }
        };
        var _mouseUpHandler = function(event) {
            var pos = event.getLocation();
            var node = this.owner;
            if (node._hitTest(pos, this)) {
                event.type = EventType.MOUSE_UP;
                node.dispatchEvent(event);
                event.stopPropagation();
            }
        };
        var _mouseWheelHandler = function(event) {
            var pos = event.getLocation();
            var node = this.owner;
            if (node._hitTest(pos, this)) {
                event.type = EventType.MOUSE_WHEEL;
                node.dispatchEvent(event);
            }
        };
        var _searchMaskParent = function(node) {
            if (cc.Mask) {
                var index = 0;
                var mask = null;
                for (var curr = node; curr && curr instanceof cc.Node; curr = curr.parent, ++index) {
                    mask = curr.getComponent(cc.Mask);
                    if (mask) {
                        return {
                            index: index,
                            node: curr
                        };
                    }
                }
            }
            return null;
        };
        function getConstructor(typeOrClassName) {
            if (!typeOrClassName) {
                cc.error("getComponent: Type must be non-nil");
                return null;
            }
            if ("string" == typeof typeOrClassName) {
                return JS.getClassByName(typeOrClassName);
            }
            return typeOrClassName;
        }
        function findComponent(node, constructor) {
            for (var i = 0; i < node._components.length; ++i) {
                var comp = node._components[i];
                if (comp instanceof constructor) {
                    return comp;
                }
            }
            return null;
        }
        function findComponents(node, constructor, components) {
            for (var i = 0; i < node._components.length; ++i) {
                var comp = node._components[i];
                comp instanceof constructor && components.push(comp);
            }
        }
        function findChildComponent(children, constructor) {
            for (var i = 0; i < children.length; ++i) {
                var node = children[i];
                var comp = findComponent(node, constructor);
                if (comp) {
                    return comp;
                }
                if (node.children.length > 0) {
                    comp = findChildComponent(node.children, constructor);
                    if (comp) {
                        return comp;
                    }
                }
            }
            return null;
        }
        function findChildComponents(children, constructor, components) {
            for (var i = 0; i < children.length; ++i) {
                var node = children[i];
                findComponents(node, constructor, components);
                node._children.length > 0 && findChildComponents(node._children, constructor, components);
            }
        }
        var Node = cc.Class({
            name: "cc.Node",
            "extends": require("./utils/base-node"),
            mixins: [ EventTarget ],
            properties: {
                active: {
                    get: function() {
                        return this._active;
                    },
                    set: function(value) {
                        value = !!value;
                        if (this._active !== value) {
                            this._active = value;
                            var couldActiveInHierarchy = this._parent && this._parent._activeInHierarchy;
                            if (couldActiveInHierarchy) {
                                this._onActivatedInHierarchy(value);
                                this.emit("active-in-hierarchy-changed", this);
                            }
                        }
                    }
                },
                activeInHierarchy: {
                    get: function() {
                        return this._activeInHierarchy;
                    }
                },
                _active: true,
                _components: [],
                _prefab: null,
                _persistNode: {
                    get: function() {
                        return (this._objFlags & DontDestroy) > 0;
                    },
                    set: function(value) {
                        value ? this._objFlags |= DontDestroy : this._objFlags &= ~DontDestroy;
                    }
                },
                groupIndex: {
                    "default": 0,
                    type: cc.Integer
                },
                group: {
                    get: function() {
                        return cc.game.groupList[this.groupIndex] || "";
                    },
                    set: function(value) {
                        this.groupIndex = cc.game.groupList.indexOf(value);
                        this.emit("group-changed");
                    }
                }
            },
            ctor: function() {
                var name = arguments[0];
                this._name = "undefined" != typeof name ? name : "New Node";
                this._activeInHierarchy = false;
                this._widget = null;
                this._touchListener = null;
                this._mouseListener = null;
            },
            destroy: function() {
                cc.Object.prototype.destroy.call(this) && this._activeInHierarchy && this._deactivateChildComponents();
            },
            _onPreDestroy: function() {
                var i, len;
                this._objFlags |= Destroying;
                var parent = this._parent;
                var destroyByParent = parent && parent._objFlags & Destroying;
                !destroyByParent;
                var children = this._children;
                for (i = 0, len = children.length; i < len; ++i) {
                    children[i]._destroyImmediate();
                }
                for (i = 0, len = this._components.length; i < len; ++i) {
                    var component = this._components[i];
                    component._destroyImmediate();
                }
                cc.director.getActionManager().removeAllActionsFromTarget(this);
                this._releaseAllActions();
                _currentHovered === this && (_currentHovered = null);
                for (i = 0, len = this.__eventTargets.length; i < len; ++i) {
                    var target = this.__eventTargets[i];
                    target && target.targetOff(this);
                }
                this.__eventTargets.length = 0;
                this._persistNode && cc.game.removePersistRootNode(this);
                if (!destroyByParent) {
                    if (parent) {
                        var childIndex = parent._children.indexOf(this);
                        parent._children.splice(childIndex, 1);
                        parent.emit("child-removed", this);
                    }
                    this._removeSgNode();
                }
            },
            getComponent: function(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName);
                if (constructor) {
                    return findComponent(this, constructor);
                }
                return null;
            },
            getComponents: function(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName), components = [];
                constructor && findComponents(this, constructor, components);
                return components;
            },
            getComponentInChildren: function(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName);
                if (constructor) {
                    return findChildComponent(this._children, constructor);
                }
                return null;
            },
            getComponentsInChildren: function(typeOrClassName) {
                var constructor = getConstructor(typeOrClassName), components = [];
                if (constructor) {
                    findComponents(this, constructor, components);
                    findChildComponents(this._children, constructor, components);
                }
                return components;
            },
            _checkMultipleComp: false,
            addComponent: function(typeOrClassName) {
                var constructor;
                if ("string" == typeof typeOrClassName) {
                    constructor = JS.getClassByName(typeOrClassName);
                    if (!constructor) {
                        cc.error('addComponent: Failed to get class "%s"', typeOrClassName);
                        cc._RFpeek() && cc.error('addComponent: Should not add component ("%s") when the scripts are still loading.', typeOrClassName);
                        return null;
                    }
                } else {
                    if (!typeOrClassName) {
                        cc.error("addComponent: Type must be non-nil");
                        return null;
                    }
                    constructor = typeOrClassName;
                }
                if ("function" != typeof constructor) {
                    cc.error("addComponent: The component to add must be a constructor");
                    return null;
                }
                if (!cc.isChildClassOf(constructor, cc.Component)) {
                    cc.error("addComponent: The component to add must be child class of cc.Component");
                    return null;
                }
                var ReqComp = constructor._requireComponent;
                if (ReqComp && !this.getComponent(ReqComp)) {
                    var depended = this.addComponent(ReqComp);
                    if (!depended) {
                        return null;
                    }
                }
                var component = new constructor();
                component.node = this;
                this._components.push(component);
                if (this._activeInHierarchy) {
                    "function" == typeof component.__preload && cc.Component._callPreloadOnComponent(component);
                    component.__onNodeActivated(true);
                }
                return component;
            },
            _addComponentAt: false,
            removeComponent: function(component) {
                if (!component) {
                    cc.error("removeComponent: Component must be non-nil");
                    return;
                }
                "object" != typeof component && (component = this.getComponent(component));
                component && component.destroy();
            },
            _getDependComponent: false,
            _removeComponent: function(component) {
                if (!component) {
                    cc.error("Argument must be non-nil");
                    return;
                }
                if (!(this._objFlags & Destroying)) {
                    var i = this._components.indexOf(component);
                    i !== -1 ? this._components.splice(i, 1) : component.node !== this && cc.error("Component not owned by this entity");
                }
            },
            _registerIfAttached: false,
            _onBatchCreated: function() {
                var prefabInfo = this._prefab;
                prefabInfo && prefabInfo.sync && !prefabInfo._synced && PrefabHelper.syncWithPrefab(this);
                this._updateDummySgNode();
                this._parent && this._parent._sgNode.addChild(this._sgNode);
                this._activeInHierarchy || cc.director.getActionManager().pauseTarget(this);
                var children = this._children;
                for (var i = 0, len = children.length; i < len; i++) {
                    children[i]._onBatchCreated();
                }
            },
            _activeRecursively: function(newActive) {
                var cancelActivation = false;
                if (this._objFlags & Activating) {
                    if (newActive) {
                        cc.error('Node "%s" is already activating', this.name);
                        return;
                    }
                    cancelActivation = true;
                } else {
                    newActive && (this._objFlags |= Activating);
                }
                this._activeInHierarchy = newActive;
                var originCount = this._components.length;
                for (var c = 0; c < originCount; ++c) {
                    var component = this._components[c];
                    if (component instanceof cc.Component) {
                        component.__onNodeActivated(newActive);
                        if (newActive && !this._activeInHierarchy) {
                            this._objFlags &= ~Activating;
                            return;
                        }
                    } else {
                        cc.error('Sorry, the component of "%s" which with an index of %s is corrupted! It has been removed.', this.name, c);
                        console.log("Corrupted component value:", component);
                        component ? this._removeComponent(component) : JS.array.removeAt(this._components, c);
                        --c;
                        --originCount;
                    }
                }
                for (var i = 0, len = this._children.length; i < len; ++i) {
                    var child = this._children[i];
                    if (child._active) {
                        child._activeRecursively(newActive);
                        if (newActive && !this._activeInHierarchy) {
                            this._objFlags &= ~Activating;
                            return;
                        }
                    }
                }
                if (cancelActivation) {
                    this._objFlags &= ~Activating;
                    return;
                }
                if (newActive) {
                    cc.director.getActionManager().resumeTarget(this);
                    this._touchListener && (this._touchListener.mask = _searchMaskParent(this));
                    this._mouseListener && (this._mouseListener.mask = _searchMaskParent(this));
                } else {
                    cc.director.getActionManager().pauseTarget(this);
                }
                this._objFlags &= ~Activating;
            },
            _onActivatedInHierarchy: function(newActive) {
                newActive && cc.Component._callPreloadOnNode(this);
                this._activeRecursively(newActive);
            },
            _onHierarchyChanged: function(oldParent) {
                var newParent = this._parent;
                !this._persistNode || newParent instanceof cc.Scene || cc.game.removePersistRootNode(this);
                var activeInHierarchyBefore = this._active && !!(oldParent && oldParent._activeInHierarchy);
                var shouldActiveNow = this._active && !!(newParent && newParent._activeInHierarchy);
                activeInHierarchyBefore !== shouldActiveNow && this._onActivatedInHierarchy(shouldActiveNow);
                cc._widgetManager._nodesOrderDirty = true;
                var scene;
                var inCurrentSceneBefore;
                var inCurrentSceneNow;
                var newPrefabRoot;
                var myPrefabInfo;
            },
            _deactivateChildComponents: function() {
                var originCount = this._components.length;
                for (var c = 0; c < originCount; ++c) {
                    var component = this._components[c];
                    component.__onNodeActivated(false);
                }
                for (var i = 0, len = this.childrenCount; i < len; ++i) {
                    var entity = this._children[i];
                    entity._active && entity._deactivateChildComponents();
                }
            },
            _instantiate: function() {
                var clone = cc.instantiate._clone(this, this);
                clone._parent = null;
                var thisPrefabInfo = this._prefab;
                var syncing = thisPrefabInfo && this === thisPrefabInfo.root && thisPrefabInfo.sync;
                syncing && (clone._prefab._synced = thisPrefabInfo._synced);
                clone._onBatchCreated();
                return clone;
            },
            on: function(type, callback, target, useCapture) {
                var newAdded = false;
                if (_touchEvents.indexOf(type) !== -1) {
                    if (!this._touchListener) {
                        this._touchListener = cc.EventListener.create({
                            event: cc.EventListener.TOUCH_ONE_BY_ONE,
                            swallowTouches: true,
                            owner: this,
                            mask: _searchMaskParent(this),
                            onTouchBegan: _touchStartHandler,
                            onTouchMoved: _touchMoveHandler,
                            onTouchEnded: _touchEndHandler
                        });
                        newAdded = true;
                    }
                } else {
                    if (_mouseEvents.indexOf(type) !== -1 && !this._mouseListener) {
                        this._mouseListener = cc.EventListener.create({
                            event: cc.EventListener.MOUSE,
                            _previousIn: false,
                            owner: this,
                            mask: _searchMaskParent(this),
                            onMouseDown: _mouseDownHandler,
                            onMouseMove: _mouseMoveHandler,
                            onMouseUp: _mouseUpHandler,
                            onMouseScroll: _mouseWheelHandler
                        });
                        newAdded = true;
                    }
                }
                newAdded && !this._activeInHierarchy && cc.director.getScheduler().schedule(function() {
                    !this._activeInHierarchy;
                }, this, 0, 0, 0, false);
                return this._EventTargetOn(type, callback, target, useCapture);
            },
            off: function(type, callback, target, useCapture) {
                this._EventTargetOff(type, callback, target, useCapture);
                _touchEvents.indexOf(type) !== -1 ? this._checkTouchListeners() : _mouseEvents.indexOf(type) !== -1 && this._checkMouseListeners();
            },
            targetOff: function(target) {
                this._EventTargetTargetOff(target);
                this._checkTouchListeners();
                this._checkMouseListeners();
            },
            _checkTouchListeners: function() {
                if (!(this._objFlags & Destroying) && this._bubblingListeners && this._touchListener) {
                    for (var i = 0; i < _touchEvents.length; ++i) {
                        if (this._bubblingListeners.has(_touchEvents[i])) {
                            return;
                        }
                    }
                    this._touchListener = null;
                }
            },
            _checkMouseListeners: function() {
                if (!(this._objFlags & Destroying) && this._bubblingListeners && this._mouseListener) {
                    for (var i = 0; i < _mouseEvents.length; ++i) {
                        if (this._bubblingListeners.has(_mouseEvents[i])) {
                            return;
                        }
                    }
                    _currentHovered === this && (_currentHovered = null);
                    this._mouseListener = null;
                }
            },
            _hitTest: function(point, listener) {
                var w = this.width, h = this.height;
                var rect = cc.rect(0, 0, w, h);
                var trans = this.getNodeToWorldTransform();
                cc._rectApplyAffineTransformIn(rect, trans);
                var left = point.x - rect.x, right = rect.x + rect.width - point.x, bottom = point.y - rect.y, top = rect.y + rect.height - point.y;
                if (left >= 0 && right >= 0 && top >= 0 && bottom >= 0) {
                    if (listener && listener.mask) {
                        var mask = listener.mask;
                        var parent = this;
                        for (var i = 0; parent && i < mask.index; ++i, parent = parent.parent) {}
                        if (parent === mask.node) {
                            var comp = parent.getComponent(cc.Mask);
                            return !comp || !comp.enabledInHierarchy || comp._hitTest(point);
                        }
                        listener.mask = null;
                        return true;
                    }
                    return true;
                }
                return false;
            },
            _getCapturingTargets: function(type, array) {
                var parent = this.parent;
                while (parent) {
                    parent.hasEventListener(type, true) && array.push(parent);
                    parent = parent.parent;
                }
            },
            _getBubblingTargets: function(type, array) {
                var parent = this.parent;
                while (parent) {
                    parent.hasEventListener(type) && array.push(parent);
                    parent = parent.parent;
                }
            },
            isRunning: function() {
                return this._activeInHierarchy;
            },
            runAction: function(action) {
                if (!this.active) {
                    return;
                }
                cc.assert(action, cc._LogInfos.Node.runAction);
                cc.director.getActionManager().addAction(action, this, false);
                return action;
            },
            stopAllActions: function() {
                cc.director.getActionManager().removeAllActionsFromTarget(this);
            },
            stopAction: function(action) {
                cc.director.getActionManager().removeAction(action);
            },
            stopActionByTag: function(tag) {
                if (tag === cc.Action.TAG_INVALID) {
                    cc.log(cc._LogInfos.Node.stopActionByTag);
                    return;
                }
                cc.director.getActionManager().removeActionByTag(tag, this);
            },
            getActionByTag: function(tag) {
                if (tag === cc.Action.TAG_INVALID) {
                    cc.log(cc._LogInfos.Node.getActionByTag);
                    return null;
                }
                cc.director.getActionManager().getActionByTag(tag, this);
            },
            getNumberOfRunningActions: function() {
                cc.director.getActionManager().numberOfRunningActionsInTarget(this);
            },
            _retainAction: function(action) {},
            _releaseAllActions: function() {
                var i;
            }
        });
        Node.EventType = EventType;
        cc.Node = module.exports = Node;
    }, {
        "./event/event-target": 49,
        "./utils/base-node": 94,
        "./utils/prefab-helper": 99
    } ],
    22: [ function(require, module, exports) {
        var NIL = function() {};
        cc.Scene = cc.Class({
            name: "cc.Scene",
            "extends": require("./utils/base-node"),
            properties: {
                autoReleaseAssets: void 0
            },
            ctor: function() {
                var sgNode = this._sgNode = new _ccsg.Scene();
                sgNode.setAnchorPoint(0, 0);
                this._anchorPoint.x = 0;
                this._anchorPoint.y = 0;
                this._activeInHierarchy = false;
                this._inited = !cc.game._isCloning;
                this.dependAssets = null;
            },
            destroy: function() {
                var children = this._children;
                var DontDestroy = cc.Object.Flags.DontDestroy;
                for (var i = 0, len = children.length; i < len; ++i) {
                    var child = children[i];
                    child.isValid && (child._objFlags & DontDestroy || child.destroy());
                }
                this._super();
                this._activeInHierarchy = false;
            },
            _onHierarchyChanged: NIL,
            _load: function() {
                if (!this._inited) {
                    this._updateDummySgNode();
                    cc.director.getActionManager().pauseTarget(this);
                    var children = this._children;
                    for (var i = 0, len = children.length; i < len; i++) {
                        children[i]._onBatchCreated();
                    }
                    this._inited = true;
                }
            },
            _activate: function(active) {
                active = false !== active;
                var i, child, children = this._children, len = children.length;
                this._activeInHierarchy = active;
                for (i = 0; i < len; ++i) {
                    child = children[i];
                    child._active && child._onActivatedInHierarchy(active);
                }
            }
        });
        module.exports = cc.Scene;
    }, {
        "./utils/base-node": 94
    } ],
    23: [ function(require, module, exports) {
        var ListEntry = function(prev, next, callback, target, priority, paused, markedForDeletion) {
            this.prev = prev;
            this.next = next;
            this.callback = callback;
            this.target = target;
            this.priority = priority;
            this.paused = paused;
            this.markedForDeletion = markedForDeletion;
        };
        ListEntry.prototype.trigger = function(dt) {
            this.callback.call(this.target, dt);
        };
        var HashUpdateEntry = function(list, entry, target, callback, hh) {
            this.list = list;
            this.entry = entry;
            this.target = target;
            this.callback = callback;
            this.hh = hh;
        };
        var HashTimerEntry = function(timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused, hh) {
            var _t = this;
            _t.timers = timers;
            _t.target = target;
            _t.timerIndex = timerIndex;
            _t.currentTimer = currentTimer;
            _t.currentTimerSalvaged = currentTimerSalvaged;
            _t.paused = paused;
            _t.hh = hh;
        };
        var Timer = cc._Class.extend({
            getInterval: function() {
                return this._interval;
            },
            setInterval: function(interval) {
                this._interval = interval;
            },
            setupTimerWithInterval: function(seconds, repeat, delay) {
                this._elapsed = -1;
                this._interval = seconds;
                this._delay = delay;
                this._useDelay = this._delay > 0;
                this._repeat = repeat;
                this._runForever = this._repeat === cc.macro.REPEAT_FOREVER;
            },
            trigger: function() {
                return 0;
            },
            cancel: function() {
                return 0;
            },
            ctor: function() {
                this._scheduler = null;
                this._elapsed = -1;
                this._runForever = false;
                this._useDelay = false;
                this._timesExecuted = 0;
                this._repeat = 0;
                this._delay = 0;
                this._interval = 0;
            },
            update: function(dt) {
                if (this._elapsed === -1) {
                    this._elapsed = 0;
                    this._timesExecuted = 0;
                } else {
                    this._elapsed += dt;
                    if (this._runForever && !this._useDelay) {
                        if (this._elapsed >= this._interval) {
                            this.trigger();
                            this._elapsed = 0;
                        }
                    } else {
                        if (this._useDelay) {
                            if (this._elapsed >= this._delay) {
                                this.trigger();
                                this._elapsed -= this._delay;
                                this._timesExecuted += 1;
                                this._useDelay = false;
                            }
                        } else {
                            if (this._elapsed >= this._interval) {
                                this.trigger();
                                this._elapsed = 0;
                                this._timesExecuted += 1;
                            }
                        }
                        !this._runForever && this._timesExecuted > this._repeat && this.cancel();
                    }
                }
            }
        });
        var TimerTargetSelector = Timer.extend({
            ctor: function() {
                this._target = null;
                this._selector = null;
            },
            initWithSelector: function(scheduler, target, selector, seconds, repeat, delay) {
                this._scheduler = scheduler;
                this._target = target;
                this._selector = selector;
                this.setupTimerWithInterval(seconds, repeat, delay);
                return true;
            },
            getSelector: function() {
                return this._selector;
            },
            trigger: function() {
                this._selector && this._target && this._selector.call(this._target, this._elapsed);
            },
            cancel: function() {
                this._scheduler.unschedule(this._selector, this._target);
            }
        });
        var getTargetId = function(target) {
            return target.__instanceId || target.uuid;
        };
        cc.Scheduler = cc._Class.extend({
            _timeScale: 1,
            _updatesNegList: null,
            _updates0List: null,
            _updatesPosList: null,
            _hashForTimers: null,
            _arrayForTimers: null,
            _hashForUpdates: null,
            _currentTarget: null,
            _currentTargetSalvaged: false,
            _updateHashLocked: false,
            ctor: function() {
                this._timeScale = 1;
                this._updatesNegList = [];
                this._updates0List = [];
                this._updatesPosList = [];
                this._hashForUpdates = {};
                this._hashForTimers = {};
                this._currentTarget = null;
                this._currentTargetSalvaged = false;
                this._updateHashLocked = false;
                this._arrayForTimers = [];
            },
            _schedulePerFrame: function(callback, target, priority, paused) {
                var hashElement = this._hashForUpdates[getTargetId(target)];
                if (hashElement && hashElement.entry) {
                    if (hashElement.entry.priority === priority) {
                        hashElement.entry.markedForDeletion = false;
                        hashElement.entry.paused = paused;
                        return;
                    }
                    if (this._updateHashLocked) {
                        cc.log("warning: you CANNOT change update priority in scheduled function");
                        hashElement.entry.markedForDeletion = false;
                        hashElement.entry.paused = paused;
                        return;
                    }
                    this.unscheduleUpdate(target);
                }
                0 === priority ? this._appendIn(this._updates0List, callback, target, paused) : priority < 0 ? this._priorityIn(this._updatesNegList, callback, target, priority, paused) : this._priorityIn(this._updatesPosList, callback, target, priority, paused);
            },
            _removeHashElement: function(element) {
                delete this._hashForTimers[getTargetId(element.target)];
                cc.js.array.remove(this._arrayForTimers, element);
                element.Timer = null;
                element.target = null;
                element = null;
            },
            _removeUpdateFromHash: function(entry) {
                var self = this, element = self._hashForUpdates[getTargetId(entry.target)];
                if (element) {
                    cc.js.array.remove(element.list, element.entry);
                    delete self._hashForUpdates[getTargetId(element.target)];
                    element.entry = null;
                    element.target = null;
                }
            },
            _priorityIn: function(ppList, callback, target, priority, paused) {
                var self = this, listElement = new ListEntry(null, null, callback, target, priority, paused, false);
                if (ppList) {
                    var index2Insert = ppList.length - 1;
                    for (var i = 0; i <= index2Insert; i++) {
                        if (priority < ppList[i].priority) {
                            index2Insert = i;
                            break;
                        }
                    }
                    ppList.splice(i, 0, listElement);
                } else {
                    ppList = [];
                    ppList.push(listElement);
                }
                self._hashForUpdates[getTargetId(target)] = new HashUpdateEntry(ppList, listElement, target, null);
                return ppList;
            },
            _appendIn: function(ppList, callback, target, paused) {
                var self = this, listElement = new ListEntry(null, null, callback, target, 0, paused, false);
                ppList.push(listElement);
                self._hashForUpdates[getTargetId(target)] = new HashUpdateEntry(ppList, listElement, target, null, null);
            },
            setTimeScale: function(timeScale) {
                this._timeScale = timeScale;
            },
            getTimeScale: function() {
                return this._timeScale;
            },
            update: function(dt) {
                this._updateHashLocked = true;
                1 !== this._timeScale && (dt *= this._timeScale);
                var i, list, len, entry;
                for (i = 0, list = this._updatesNegList, len = list.length; i < len; i++) {
                    entry = list[i];
                    entry.paused || entry.markedForDeletion || entry.trigger(dt);
                }
                for (i = 0, list = this._updates0List, len = list.length; i < len; i++) {
                    entry = list[i];
                    entry.paused || entry.markedForDeletion || entry.trigger(dt);
                }
                for (i = 0, list = this._updatesPosList, len = list.length; i < len; i++) {
                    entry = list[i];
                    entry.paused || entry.markedForDeletion || entry.trigger(dt);
                }
                var elt, arr = this._arrayForTimers;
                for (i = 0; i < arr.length; i++) {
                    elt = arr[i];
                    this._currentTarget = elt;
                    this._currentTargetSalvaged = false;
                    if (!elt.paused) {
                        for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; ++elt.timerIndex) {
                            elt.currentTimer = elt.timers[elt.timerIndex];
                            elt.currentTimerSalvaged = false;
                            elt.currentTimer.update(dt);
                            elt.currentTimer = null;
                        }
                    }
                    this._currentTargetSalvaged && 0 === this._currentTarget.timers.length && this._removeHashElement(this._currentTarget);
                }
                for (i = 0, list = this._updatesNegList; i < list.length; ) {
                    entry = list[i];
                    entry.markedForDeletion ? this._removeUpdateFromHash(entry) : i++;
                }
                for (i = 0, list = this._updates0List; i < list.length; ) {
                    entry = list[i];
                    entry.markedForDeletion ? this._removeUpdateFromHash(entry) : i++;
                }
                for (i = 0, list = this._updatesPosList; i < list.length; ) {
                    entry = list[i];
                    entry.markedForDeletion ? this._removeUpdateFromHash(entry) : i++;
                }
                this._updateHashLocked = false;
                this._currentTarget = null;
            },
            scheduleCallbackForTarget: function(target, callback_fn, interval, repeat, delay, paused) {
                this.schedule(callback_fn, target, interval, repeat, delay, paused);
            },
            schedule: function(callback, target, interval, repeat, delay, paused) {
                "use strict";
                if ("function" != typeof callback) {
                    var tmp = callback;
                    callback = target;
                    target = tmp;
                }
                if (4 === arguments.length || 5 === arguments.length) {
                    paused = repeat;
                    repeat = cc.macro.REPEAT_FOREVER;
                    delay = 0;
                }
                cc.assert(target, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3);
                var instanceId = getTargetId(target);
                var element = this._hashForTimers[instanceId];
                if (element) {
                    cc.assert(element.paused === paused, "");
                } else {
                    element = new HashTimerEntry(null, target, 0, null, null, paused, null);
                    this._arrayForTimers.push(element);
                    this._hashForTimers[instanceId] = element;
                }
                var timer, i;
                if (null == element.timers) {
                    element.timers = [];
                } else {
                    for (i = 0; i < element.timers.length; ++i) {
                        timer = element.timers[i];
                        if (timer && callback === timer.getSelector()) {
                            cc.log("CCScheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f", timer.getInterval(), interval);
                            timer.setInterval(interval);
                            return;
                        }
                    }
                }
                timer = new TimerTargetSelector();
                timer.initWithSelector(this, target, callback, interval, repeat, delay);
                element.timers.push(timer);
            },
            scheduleUpdate: function(target, priority, paused, updateFunc) {
                updateFunc = updateFunc || target.update;
                this._schedulePerFrame(updateFunc, target, priority, paused);
            },
            _getUnscheduleMark: function(key, timer) {
                switch (typeof key) {
                  case "number":
                  case "string":
                    return key === timer.getKey();

                  case "function":
                    return key === timer._callback || key === timer.getSelector();
                }
            },
            unschedule: function(callback, target) {
                if (!target || !callback) {
                    return;
                }
                var self = this, element = self._hashForTimers[getTargetId(target)];
                if (element) {
                    var timers = element.timers;
                    for (var i = 0, li = timers.length; i < li; i++) {
                        var timer = timers[i];
                        if (this._getUnscheduleMark(callback, timer)) {
                            timer !== element.currentTimer || element.currentTimerSalvaged || (element.currentTimerSalvaged = true);
                            timers.splice(i, 1);
                            element.timerIndex >= i && element.timerIndex--;
                            0 === timers.length && (self._currentTarget === element ? self._currentTargetSalvaged = true : self._removeHashElement(element));
                            return;
                        }
                    }
                }
            },
            unscheduleUpdate: function(target) {
                if (null == target) {
                    return;
                }
                var element = this._hashForUpdates[getTargetId(target)];
                element && (this._updateHashLocked ? element.entry.markedForDeletion = true : this._removeUpdateFromHash(element.entry));
            },
            unscheduleAllForTarget: function(target) {
                if (null == target) {
                    return;
                }
                var element = this._hashForTimers[getTargetId(target)];
                if (element) {
                    element.timers.indexOf(element.currentTimer) > -1 && !element.currentTimerSalvaged && (element.currentTimerSalvaged = true);
                    element.timers.length = 0;
                    this._currentTarget === element ? this._currentTargetSalvaged = true : this._removeHashElement(element);
                }
                this.unscheduleUpdate(target);
            },
            unscheduleAll: function() {
                this.unscheduleAllWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
            },
            unscheduleAllWithMinPriority: function(minPriority) {
                var i, element, arr = this._arrayForTimers;
                for (i = arr.length - 1; i >= 0; i--) {
                    element = arr[i];
                    this.unscheduleAllForTarget(element.target);
                }
                var entry;
                var temp_length = 0;
                if (minPriority < 0) {
                    for (i = 0; i < this._updatesNegList.length; ) {
                        temp_length = this._updatesNegList.length;
                        entry = this._updatesNegList[i];
                        entry && entry.priority >= minPriority && this.unscheduleUpdate(entry.target);
                        temp_length == this._updatesNegList.length && i++;
                    }
                }
                if (minPriority <= 0) {
                    for (i = 0; i < this._updates0List.length; ) {
                        temp_length = this._updates0List.length;
                        entry = this._updates0List[i];
                        entry && this.unscheduleUpdate(entry.target);
                        temp_length == this._updates0List.length && i++;
                    }
                }
                for (i = 0; i < this._updatesPosList.length; ) {
                    temp_length = this._updatesPosList.length;
                    entry = this._updatesPosList[i];
                    entry && entry.priority >= minPriority && this.unscheduleUpdate(entry.target);
                    temp_length == this._updatesPosList.length && i++;
                }
            },
            isScheduled: function(callback, target) {
                cc.assert(callback, "Argument callback must not be empty");
                cc.assert(target, "Argument target must be non-nullptr");
                var element = this._hashForUpdates[getTargetId(target)];
                if (!element) {
                    return false;
                }
                if (null == element.timers) {
                    return false;
                }
                var timers = element.timers;
                for (var i = 0; i < timers.length; ++i) {
                    var timer = timers[i];
                    if (callback === timer.getKey()) {
                        return true;
                    }
                }
                return false;
            },
            pauseAllTargets: function() {
                this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
            },
            pauseAllTargetsWithMinPriority: function(minPriority) {
                var self = this, element, locArrayForTimers = self._arrayForTimers;
                var i, li;
                for (i = 0, li = locArrayForTimers.length; i < li; i++) {
                    element = locArrayForTimers[i];
                    element && (element.paused = true);
                }
                var entry;
                if (minPriority < 0) {
                    for (i = 0; i < this._updatesNegList.length; i++) {
                        entry = this._updatesNegList[i];
                        entry && entry.priority >= minPriority && (entry.paused = true);
                    }
                }
                if (minPriority <= 0) {
                    for (i = 0; i < this._updates0List.length; i++) {
                        entry = this._updates0List[i];
                        entry && (entry.paused = true);
                    }
                }
                for (i = 0; i < this._updatesPosList.length; i++) {
                    entry = this._updatesPosList[i];
                    entry && entry.priority >= minPriority && (entry.paused = true);
                }
            },
            resumeTargets: function(targetsToResume) {
                if (!targetsToResume) {
                    return;
                }
                for (var i = 0; i < targetsToResume.length; i++) {
                    this.resumeTarget(targetsToResume[i]);
                }
            },
            pauseTarget: function(target) {
                cc.assert(target, cc._LogInfos.Scheduler.pauseTarget);
                var self = this, instanceId = getTargetId(target), element = self._hashForTimers[instanceId];
                element && (element.paused = true);
                var elementUpdate = self._hashForUpdates[instanceId];
                elementUpdate && (elementUpdate.entry.paused = true);
            },
            resumeTarget: function(target) {
                cc.assert(target, cc._LogInfos.Scheduler.resumeTarget);
                var self = this, instanceId = getTargetId(target), element = self._hashForTimers[instanceId];
                element && (element.paused = false);
                var elementUpdate = self._hashForUpdates[instanceId];
                elementUpdate && (elementUpdate.entry.paused = false);
            },
            isTargetPaused: function(target) {
                cc.assert(target, cc._LogInfos.Scheduler.isTargetPaused);
                var instanceId = getTargetId(target), element = this._hashForTimers[instanceId];
                if (element) {
                    return element.paused;
                }
                var elementUpdate = this._hashForUpdates[instanceId];
                if (elementUpdate) {
                    return elementUpdate.entry.paused;
                }
                return false;
            },
            scheduleUpdateForTarget: function(target, priority, paused) {
                this.scheduleUpdate(target, priority, paused);
            },
            unscheduleCallbackForTarget: function(target, callback) {
                this.unschedule(callback, target);
            },
            unscheduleUpdateForTarget: function(target) {
                this.unscheduleUpdate(target);
            },
            unscheduleAllCallbacksForTarget: function(target) {
                this.unscheduleAllForTarget(target);
            },
            unscheduleAllCallbacks: function() {
                this.unscheduleAllWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
            },
            unscheduleAllCallbacksWithMinPriority: function(minPriority) {
                this.unscheduleAllWithMinPriority(minPriority);
            }
        });
        cc.Scheduler.PRIORITY_SYSTEM = -2147483648;
        cc.Scheduler.PRIORITY_NON_SYSTEM = cc.Scheduler.PRIORITY_SYSTEM + 1;
    }, {} ],
    24: [ function(require, module, exports) {
        var RawAsset = require("./CCRawAsset");
        cc.Asset = cc.Class({
            name: "cc.Asset",
            "extends": RawAsset,
            properties: {
                rawUrl: {
                    get: function() {
                        if (this._rawFiles) {
                            if (cc.AssetLibrary) {
                                return cc.AssetLibrary.getImportedDir(this._uuid) + "/" + this._uuid + "/" + this._rawFiles[0];
                            }
                            cc.error("asset.url is not usable in core process");
                        }
                        return "";
                    },
                    visible: false
                },
                rawUrls: {
                    get: function() {
                        if (this._rawFiles) {
                            if (cc.AssetLibrary) {
                                var dir = cc.AssetLibrary.getImportedDir(this._uuid) + "/" + this._uuid + "/";
                                return this._rawFiles.map(function(filename) {
                                    return dir + filename;
                                });
                            }
                            cc.error("asset.urls is not usable in core process");
                        }
                        return [];
                    },
                    visible: false
                },
                _rawFiles: null
            },
            statics: {
                deserialize: function(data) {
                    return cc.deserialize(data);
                },
                preventDeferredLoadDependents: false
            },
            serialize: function() {
                return Editor.serialize(this);
            },
            createNode: null,
            _setRawFiles: function(rawFiles) {
                this._rawFiles = rawFiles.length > 0 ? rawFiles : null;
            }
        });
        module.exports = cc.Asset;
    }, {
        "./CCRawAsset": 27
    } ],
    25: [ function(require, module, exports) {
        var Font = cc.Class({
            name: "cc.Font",
            "extends": cc.Asset
        });
        cc.Font = Font;
        module.exports = Font;
    }, {} ],
    26: [ function(require, module, exports) {
        function visitWrapper(wrapper, visitor) {
            visitor(wrapper);
            var children = wrapper._children;
            for (var i = 0; i < children.length; i++) {
                visitor(children[i]);
            }
        }
        var Prefab = cc.Class({
            name: "cc.Prefab",
            "extends": cc.Asset,
            properties: {
                data: null
            },
            createNode: function(cb) {
                var node;
            },
            _instantiate: function() {
                this.data._prefab._synced = true;
                var node = cc.instantiate(this.data);
                return node;
            }
        });
        cc.Prefab = module.exports = Prefab;
        cc.js.obsolete(cc, "cc._Prefab", "Prefab");
    }, {} ],
    27: [ function(require, module, exports) {
        var CCObject = require("../platform/CCObject");
        cc.RawAsset = cc.Class({
            name: "cc.RawAsset",
            "extends": CCObject,
            ctor: function() {
                Object.defineProperty(this, "_uuid", {
                    value: "",
                    writable: true
                });
            },
            statics: {
                createNodeByInfo: null
            }
        });
        Object.defineProperty(cc.RawAsset, "isRawAssetType", {
            value: function(ctor) {
                return cc.isChildClassOf(ctor, cc.RawAsset) && !cc.isChildClassOf(ctor, cc.Asset);
            }
        });
        module.exports = cc.RawAsset;
    }, {
        "../platform/CCObject": 70
    } ],
    28: [ function(require, module, exports) {
        var Scene = cc.Class({
            name: "cc.SceneAsset",
            "extends": cc.Asset,
            properties: {
                scene: null,
                asyncLoadAssets: void 0
            }
        });
        cc.SceneAsset = Scene;
        module.exports = Scene;
    }, {} ],
    29: [ function(require, module, exports) {
        var Script = cc.Class({
            name: "cc.Script",
            "extends": cc.Asset
        });
        cc._Script = Script;
        var JavaScript = cc.Class({
            name: "cc.JavaScript",
            "extends": Script
        });
        cc._JavaScript = JavaScript;
        var CoffeeScript = cc.Class({
            name: "cc.CoffeeScript",
            "extends": Script
        });
        cc._CoffeeScript = CoffeeScript;
    }, {} ],
    30: [ function(require, module, exports) {
        var SpriteAtlas = cc.Class({
            name: "cc.SpriteAtlas",
            "extends": cc.Asset,
            properties: {
                _spriteFrames: {
                    "default": {}
                }
            },
            getTexture: function() {
                var keys = Object.keys(this._spriteFrames);
                if (keys.length > 0) {
                    var spriteFrame = this._spriteFrames[keys[0]];
                    return spriteFrame ? spriteFrame.getTexture() : null;
                }
                return null;
            },
            getSpriteFrame: function(key) {
                return this._spriteFrames[key];
            },
            getSpriteFrames: function() {
                var frames = [];
                var spriteFrames = this._spriteFrames;
                for (var key in spriteFrames) {
                    frames.push(spriteFrames[key]);
                }
                return frames;
            }
        });
        cc.SpriteAtlas = SpriteAtlas;
        module.exports = SpriteAtlas;
    }, {} ],
    31: [ function(require, module, exports) {
        require("./CCRawAsset");
        require("./CCAsset");
        require("./CCFont");
        require("./CCPrefab");
        require("./CCScripts");
        require("./CCSceneAsset");
        require("../sprites/CCSpriteFrame");
        require("../textures/CCTexture2D");
        require("./CCSpriteAtlas");
    }, {
        "../sprites/CCSpriteFrame": 89,
        "../textures/CCTexture2D": 90,
        "./CCAsset": 24,
        "./CCFont": 25,
        "./CCPrefab": 26,
        "./CCRawAsset": 27,
        "./CCSceneAsset": 28,
        "./CCScripts": 29,
        "./CCSpriteAtlas": 30
    } ],
    32: [ function(require, module, exports) {
        var TOP = 1;
        var MID = 2;
        var BOT = 4;
        var LEFT = 8;
        var CENTER = 16;
        var RIGHT = 32;
        var HORIZONTAL = LEFT | CENTER | RIGHT;
        var VERTICAL = TOP | MID | BOT;
        function getParentSize(parent) {
            return parent instanceof cc.Scene ? cc.visibleRect : !parent._sizeProvider || parent._sizeProvider instanceof _ccsg.Node ? parent._contentSize : parent.getContentSize();
        }
        function alignToParent(node, widget) {
            var visibleRect;
            var parent = node._parent;
            var parentSize = getParentSize(parent);
            var parentAnchor = parent._anchorPoint;
            var isRoot = parent instanceof cc.Scene;
            var x = node._position.x, y = node._position.y;
            var anchor = node.getAnchorPoint();
            if (widget._alignFlags & HORIZONTAL) {
                var parentWidth = parentSize.width;
                var localLeft, localRight;
                if (isRoot) {
                    visibleRect = cc.visibleRect;
                    localLeft = visibleRect.left.x;
                    localRight = visibleRect.right.x;
                } else {
                    localLeft = -parentAnchor.x * parentWidth;
                    localRight = localLeft + parentWidth;
                }
                localLeft += widget._isAbsLeft ? widget._left : widget._left * parentWidth;
                localRight -= widget._isAbsRight ? widget._right : widget._right * parentWidth;
                var width, anchorX = anchor.x, scaleX = node._scaleX;
                if (scaleX < 0) {
                    anchorX = 1 - anchorX;
                    scaleX = -scaleX;
                }
                if (widget.isStretchWidth) {
                    width = localRight - localLeft;
                    node.width = width / scaleX;
                    x = localLeft + anchorX * width;
                } else {
                    width = node.width * scaleX;
                    if (widget.isAlignHorizontalCenter) {
                        var localHorizontalCenter = widget._isAbsHorizontalCenter ? widget._horizontalCenter : widget._horizontalCenter * parentWidth;
                        var parentCenter = (.5 - parentAnchor.x) * parentWidth;
                        x = parentCenter + (anchorX - .5) * width + localHorizontalCenter;
                    } else {
                        x = widget.isAlignLeft ? localLeft + anchorX * width : localRight + (anchorX - 1) * width;
                    }
                }
            }
            if (widget._alignFlags & VERTICAL) {
                var parentHeight = parentSize.height;
                var localTop, localBottom;
                if (isRoot) {
                    visibleRect = cc.visibleRect;
                    localBottom = visibleRect.bottom.y;
                    localTop = visibleRect.top.y;
                } else {
                    localBottom = -parentAnchor.y * parentHeight;
                    localTop = localBottom + parentHeight;
                }
                localBottom += widget._isAbsBottom ? widget._bottom : widget._bottom * parentHeight;
                localTop -= widget._isAbsTop ? widget._top : widget._top * parentHeight;
                var height, anchorY = anchor.y, scaleY = node._scaleY;
                if (scaleY < 0) {
                    anchorY = 1 - anchorY;
                    scaleY = -scaleY;
                }
                if (widget.isStretchHeight) {
                    height = localTop - localBottom;
                    node.height = height / scaleY;
                    y = localBottom + anchorY * height;
                } else {
                    height = node.height * scaleY;
                    if (widget.isAlignVerticalCenter) {
                        var localVerticalCenter = widget._isAbsVerticalCenter ? widget._verticalCenter : widget._verticalCenter * parentHeight;
                        var parentMiddle = (.5 - parentAnchor.y) * parentHeight;
                        y = parentMiddle + (anchorY - .5) * height + localVerticalCenter;
                    } else {
                        y = widget.isAlignBottom ? localBottom + anchorY * height : localTop + (anchorY - 1) * height;
                    }
                }
            }
            node.setPosition(x, y);
        }
        function visitNode(node) {
            var widget = node._widget;
            if (widget) {
                alignToParent(node, widget);
                widget.isAlignOnce ? widget.enabled = false : activeWidgets.push(widget);
            }
            var children = node._children;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                child._active && visitNode(child);
            }
        }
        var animationState;
        function refreshScene() {
            var nowPreviewing;
            var scene = cc.director.getScene();
            if (scene) {
                widgetManager.isAligning = true;
                if (widgetManager._nodesOrderDirty) {
                    activeWidgets.length = 0;
                    visitNode(scene);
                    widgetManager._nodesOrderDirty = false;
                } else {
                    var i, widget, iterator = widgetManager._activeWidgetsIterator;
                    var editingNode;
                    var node;
                    for (iterator.i = 0; iterator.i < activeWidgets.length; ++iterator.i) {
                        widget = activeWidgets[iterator.i];
                        alignToParent(widget.node, widget);
                    }
                }
                widgetManager.isAligning = false;
            }
        }
        var adjustWidgetToAllowMovingInEditor = false;
        var adjustWidgetToAllowResizingInEditor = false;
        var activeWidgets = [];
        var widgetManager = cc._widgetManager = module.exports = {
            _AlignFlags: {
                TOP: TOP,
                MID: MID,
                BOT: BOT,
                LEFT: LEFT,
                CENTER: CENTER,
                RIGHT: RIGHT
            },
            isAligning: false,
            _nodesOrderDirty: false,
            _activeWidgetsIterator: new cc.js.array.MutableForwardIterator(activeWidgets),
            init: function(director) {
                director.on(cc.Director.EVENT_BEFORE_VISIT, refreshScene);
            },
            add: function(widget) {
                widget.node._widget = widget;
                this._nodesOrderDirty = true;
            },
            remove: function(widget) {
                widget.node._widget = null;
                var index = activeWidgets.indexOf(widget);
                index > -1 && this._activeWidgetsIterator.removeAt(index);
            },
            _getParentSize: getParentSize
        };
    }, {} ],
    33: [ function(require, module, exports) {
        var AnimationAnimator = require("../../animation/animation-animator");
        var AnimationClip = require("../../animation/animation-clip");
        function equalClips(clip1, clip2) {
            if (clip1 === clip2) {
                return true;
            }
            return clip1 && clip2 && (clip1.name === clip2.name || clip1._uuid === clip2._uuid);
        }
        var Animation = cc.Class({
            name: "cc.Animation",
            "extends": require("./CCComponent"),
            editor: false,
            ctor: function() {
                this._animator = null;
                this._nameToState = {};
                this._didInit = false;
                this._currentClip = null;
                this._listeners = [];
            },
            properties: {
                _defaultClip: {
                    "default": null,
                    type: AnimationClip
                },
                defaultClip: {
                    type: AnimationClip,
                    get: function() {
                        return this._defaultClip;
                    },
                    set: function(value) {
                        return;
                        var clips;
                        var i, l;
                    },
                    tooltip: "i18n:COMPONENT.animation.default_clip"
                },
                currentClip: {
                    get: function() {
                        return this._currentClip;
                    },
                    set: function(value) {
                        this._currentClip = value;
                    },
                    type: AnimationClip,
                    visible: false
                },
                _clips: {
                    "default": [],
                    type: [ AnimationClip ],
                    tooltip: "i18n:COMPONENT.animation.clips",
                    visible: true
                },
                playOnLoad: {
                    "default": false,
                    tooltip: "i18n:COMPONENT.animation.play_on_load"
                }
            },
            onEnable: function() {
                if (this.playOnLoad && this._defaultClip) {
                    this.playOnLoad = false;
                    var state = this.getAnimationState(this._defaultClip.name);
                    this._animator.playState(state);
                } else {
                    this.resume();
                }
            },
            onDisable: function() {
                this.pause();
            },
            onDestroy: function() {
                this.stop();
            },
            getClips: function() {
                return this._clips;
            },
            play: function(name, startTime) {
                var state = this.playAdditive(name, startTime);
                var playingStates = this._animator.playingAnims;
                for (var i = playingStates.length; i >= 0; i--) {
                    if (playingStates[i] === state) {
                        continue;
                    }
                    this._animator.stopState(playingStates[i]);
                }
                return state;
            },
            playAdditive: function(name, startTime) {
                this._init();
                var state = this.getAnimationState(name || this._defaultClip.name);
                if (state) {
                    var animator = this._animator;
                    if (animator.isPlaying && state.isPlaying) {
                        if (state.isPaused) {
                            animator.resumeState(state);
                        } else {
                            animator.stopState(state);
                            animator.playState(state, startTime);
                        }
                    } else {
                        animator.playState(state, startTime);
                    }
                    this.currentClip = state.clip;
                }
                return state;
            },
            stop: function(name) {
                if (!this._didInit) {
                    return;
                }
                if (name) {
                    var state = this._nameToState[name];
                    state && this._animator.stopState(state);
                } else {
                    this._animator.stop();
                }
            },
            pause: function(name) {
                if (!this._didInit) {
                    return;
                }
                if (name) {
                    var state = this._nameToState[name];
                    state && this._animator.pauseState(state);
                } else {
                    this._animator.pause();
                }
            },
            resume: function(name) {
                if (!this._didInit) {
                    return;
                }
                if (name) {
                    var state = this._nameToState[name];
                    state && this._animator.resumeState(state);
                } else {
                    this._animator.resume();
                }
            },
            setCurrentTime: function(time, name) {
                this._init();
                if (name) {
                    var state = this._nameToState[name];
                    state && this._animator.setStateTime(state, time);
                } else {
                    for (var name in this._nameToState) {
                        state = this._nameToState[name];
                        this._animator.setStateTime(state, time);
                    }
                }
            },
            getAnimationState: function(name) {
                this._init();
                var state = this._nameToState[name];
                state && !state.curveLoaded && this._animator._reloadClip(state);
                return state || null;
            },
            addClip: function(clip, newName) {
                if (!clip) {
                    cc.warn("Invalid clip to add");
                    return;
                }
                this._init();
                cc.js.array.contains(this._clips, clip) || this._clips.push(clip);
                newName = newName || clip.name;
                var oldState = this._nameToState[newName];
                if (oldState) {
                    if (oldState.clip === clip) {
                        return oldState;
                    }
                    var index = this._clips.indexOf(oldState.clip);
                    index !== -1 && this._clips.splice(index, 1);
                }
                var newState = new cc.AnimationState(clip, newName);
                this._nameToState[newName] = newState;
                return newState;
            },
            removeClip: function(clip, force) {
                if (!clip) {
                    cc.warn("Invalid clip to remove");
                    return;
                }
                this._init();
                var state;
                for (var name in this._nameToState) {
                    state = this._nameToState[name];
                    var stateClip = state.clip;
                    if (stateClip === clip) {
                        break;
                    }
                }
                if (clip === this._defaultClip) {
                    if (!force) {
                        cc.warn("clip is defaultClip, set force to true to force remove clip and animation state");
                        return;
                    }
                    this._defaultClip = null;
                }
                if (state && state.isPlaying) {
                    if (!force) {
                        cc.warn("animation state is playing, set force to true to force stop and remove clip and animation state");
                        return;
                    }
                    this.stop(state.name);
                }
                this._clips = this._clips.filter(function(item) {
                    return item !== clip;
                });
                state && delete this._nameToState[state.name];
            },
            sample: function() {
                this._init();
                this._animator.sample();
            },
            on: function(type, callback, target, useCapture) {
                this._init();
                var listeners = this._listeners;
                for (var i = 0, l = listeners.length; i < l; i++) {
                    var listener = listeners[i];
                    if (listener[0] === type && listener[1] === callback && listener[2] === target && listener[3] === useCapture) {
                        return;
                    }
                }
                var anims = this._animator.playingAnims;
                for (var j = 0, jj = anims.length; j < jj; j++) {
                    anims[j].on(type, callback, target, useCapture);
                }
                listeners.push([ type, callback, target, useCapture ]);
            },
            off: function(type, callback, target, useCapture) {
                this._init();
                var listeners = this._listeners;
                var nameToState = this._nameToState;
                for (var i = listeners.length - 1; i >= 0; i--) {
                    var listener = listeners[i];
                    if (listener[0] === type && listener[1] === callback && listener[2] === target && listener[3] === useCapture) {
                        for (var name in nameToState) {
                            var state = nameToState[name];
                            state.off(type, callback, target, useCapture);
                        }
                        listeners.splice(i, 1);
                    }
                }
            },
            _init: function() {
                if (this._didInit) {
                    return;
                }
                this._didInit = true;
                this._animator = new AnimationAnimator(this.node, this);
                this._createStates();
            },
            _createStates: function() {
                this._nameToState = {};
                var state = null;
                var defaultClipState = false;
                for (var i = 0; i < this._clips.length; ++i) {
                    var clip = this._clips[i];
                    if (clip) {
                        state = new cc.AnimationState(clip);
                        this._nameToState[state.name] = state;
                        equalClips(this._defaultClip, clip) && (defaultClipState = state);
                    }
                }
                if (this._defaultClip && !defaultClipState) {
                    state = new cc.AnimationState(this._defaultClip);
                    this._nameToState[state.name] = state;
                }
            }
        });
        cc.Animation = module.exports = Animation;
    }, {
        "../../animation/animation-animator": 4,
        "../../animation/animation-clip": 5,
        "./CCComponent": 35
    } ],
    34: [ function(require, module, exports) {
        var designResolutionWrapper = {
            getContentSize: function() {
                return cc.visibleRect;
            },
            setContentSize: function(size) {},
            _getWidth: function() {
                return this.getContentSize().width;
            },
            _getHeight: function() {
                return this.getContentSize().height;
            }
        };
        var Canvas = cc.Class({
            name: "cc.Canvas",
            "extends": require("./CCComponent"),
            editor: false,
            statics: {
                instance: null
            },
            properties: {
                _designResolution: cc.size(960, 640),
                designResolution: {
                    get: function() {
                        return cc.size(this._designResolution);
                    },
                    set: function(value) {
                        this._designResolution.width = value.width;
                        this._designResolution.height = value.height;
                        this.applySettings();
                    },
                    tooltip: "i18n:COMPONENT.canvas.design_resolution"
                },
                _fitWidth: false,
                _fitHeight: true,
                fitHeight: {
                    get: function() {
                        return this._fitHeight;
                    },
                    set: function(value) {
                        if (this._fitHeight !== value) {
                            this._fitHeight = value;
                            this.applySettings();
                        }
                    },
                    tooltip: "i18n:COMPONENT.canvas.fit_height"
                },
                fitWidth: {
                    get: function() {
                        return this._fitWidth;
                    },
                    set: function(value) {
                        if (this._fitWidth !== value) {
                            this._fitWidth = value;
                            this.applySettings();
                        }
                    },
                    tooltip: "i18n:COMPONENT.canvas.fit_width"
                }
            },
            ctor: function() {
                this._thisOnResized = this.onResized.bind(this);
            },
            __preload: function() {
                var Flags = cc.Object.Flags;
                this._objFlags &= Flags.PersistentMask;
                this._objFlags |= Flags.IsPositionLocked | Flags.IsAnchorLocked | Flags.IsSizeLocked;
                if (Canvas.instance) {
                    return cc.error("Can't init canvas '%s' because it conflicts with the existing '%s', the scene should only have one active canvas at the same time", this.node.name, Canvas.instance.node.name);
                }
                Canvas.instance = this;
                if (this.node._sizeProvider) {
                    var renderer = this.node.getComponent(cc._RendererUnderSG);
                    renderer ? cc.error("Should not add Canvas to a node which already contains a renderer component (%s).", cc.js.getClassName(renderer)) : cc.error("Should not add Canvas to a node which size is already used by its other component.");
                } else {
                    this.node._sizeProvider = designResolutionWrapper;
                }
                cc.director.on(cc.Director.EVENT_BEFORE_VISIT, this.alignWithScreen, this);
                this.applySettings();
                this.onResized();
            },
            onDestroy: function() {
                this.node._sizeProvider === designResolutionWrapper && (this.node._sizeProvider = null);
                cc.director.off(cc.Director.EVENT_BEFORE_VISIT, this.alignWithScreen, this);
                Canvas.instance === this && (Canvas.instance = null);
            },
            alignWithScreen: function() {
                var designSize;
                var canvasSize = cc.visibleRect;
                var clipTopRight = !this.fitHeight && !this.fitWidth;
                var offsetX = 0;
                var offsetY = 0;
                if (clipTopRight) {
                    designSize = cc.view.getDesignResolutionSize();
                    offsetX = .5 * (designSize.width - canvasSize.width);
                    offsetY = .5 * (designSize.height - canvasSize.height);
                }
                this.node.setPosition(.5 * canvasSize.width + offsetX, .5 * canvasSize.height + offsetY);
            },
            onResized: function() {
                this.alignWithScreen();
            },
            applySettings: function() {
                var ResolutionPolicy = cc.ResolutionPolicy;
                var policy;
                policy = this.fitHeight && this.fitWidth ? ResolutionPolicy.SHOW_ALL : this.fitHeight || this.fitWidth ? this.fitWidth ? ResolutionPolicy.FIXED_WIDTH : ResolutionPolicy.FIXED_HEIGHT : ResolutionPolicy.NO_BORDER;
                var designRes = this._designResolution;
                cc.view.setDesignResolutionSize(designRes.width, designRes.height, policy);
            }
        });
        cc.Canvas = module.exports = Canvas;
    }, {
        "./CCComponent": 35
    } ],
    35: [ function(require, module, exports) {
        require("../platform/CCObject");
        require("../CCNode");
        var idGenerater = new (require("../platform/id-generater"))("Comp");
        var Misc = require("../utils/misc");
        var Flags = cc.Object.Flags;
        var IsOnEnableCalled = Flags.IsOnEnableCalled;
        var IsEditorOnEnableCalled = Flags.IsEditorOnEnableCalled;
        var IsPreloadCalled = Flags.IsPreloadCalled;
        var IsOnLoadStarted = Flags.IsOnLoadStarted;
        var IsOnLoadCalled = Flags.IsOnLoadCalled;
        var IsStartCalled = Flags.IsStartCalled;
        var ExecInTryCatchTmpl = false;
        var callPreloadInTryCatch = false;
        var callOnLoadInTryCatch = false;
        var callOnEnableInTryCatch = false;
        var callStartInTryCatch = false;
        var callOnDisableInTryCatch = false;
        var callOnDestroyInTryCatch = false;
        var callOnFocusInTryCatch = false;
        var callOnLostFocusInTryCatch = false;
        function callOnEnable(self, enable) {
            var enableCalled = self._objFlags & IsOnEnableCalled;
            if (enable) {
                if (!enableCalled) {
                    self.onEnable && self.onEnable();
                    var deactivatedDuringOnEnable = !self.node._activeInHierarchy;
                    if (deactivatedDuringOnEnable) {
                        return;
                    }
                    cc.director.getScheduler().resumeTarget(self);
                    _registerEvent(self, true);
                    self._objFlags |= IsOnEnableCalled;
                }
            } else {
                if (enableCalled) {
                    self.onDisable && self.onDisable();
                    cc.director.getScheduler().pauseTarget(self);
                    _registerEvent(self, false);
                    self._objFlags &= ~IsOnEnableCalled;
                }
            }
        }
        function _registerEvent(self, on) {
            !self.start || self._objFlags & IsStartCalled || (on ? cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, _callStart, self) : cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, _callStart, self));
            if (!self.update && !self.lateUpdate) {
                return;
            }
            if (on) {
                cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, _registerUpdateEvent, self);
            } else {
                cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, _registerUpdateEvent, self);
                cc.director.off(cc.Director.EVENT_COMPONENT_UPDATE, _callUpdate, self);
                cc.director.off(cc.Director.EVENT_COMPONENT_LATE_UPDATE, _callLateUpdate, self);
            }
        }
        var _registerUpdateEvent = function() {
            cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, _registerUpdateEvent, this);
            this.update && cc.director.on(cc.Director.EVENT_COMPONENT_UPDATE, _callUpdate, this);
            this.lateUpdate && cc.director.on(cc.Director.EVENT_COMPONENT_LATE_UPDATE, _callLateUpdate, this);
        };
        var _callStart = function() {
            cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, _callStart, this);
            this.start();
            this._objFlags |= IsStartCalled;
        };
        var _callUpdate = function(event) {
            this.update(event.detail);
        };
        var _callLateUpdate = function(event) {
            this.lateUpdate(event.detail);
        };
        function _callPreloadOnNode(node) {
            node._activeInHierarchy = true;
            var comps = node._components;
            var i = 0, len = comps.length;
            for (;i < len; ++i) {
                var component = comps[i];
                if (component && !(component._objFlags & IsPreloadCalled) && "function" == typeof component.__preload) {
                    component.__preload();
                    component._objFlags |= IsPreloadCalled;
                }
            }
            var children = node._children;
            for (i = 0, len = children.length; i < len; ++i) {
                var child = children[i];
                child._active && _callPreloadOnNode(child);
            }
        }
        function _callPreloadOnComponent(component) {
            component.__preload();
        }
        var Component = cc.Class({
            name: "cc.Component",
            "extends": cc.Object,
            ctor: function() {
                this.__instanceId = cc.ClassManager.getNewInstanceId();
            },
            properties: {
                node: {
                    "default": null,
                    visible: false
                },
                name: {
                    get: function() {
                        if (this._name) {
                            return this._name;
                        }
                        var className = cc.js.getClassName(this);
                        var trimLeft = className.lastIndexOf(".");
                        trimLeft >= 0 && (className = className.slice(trimLeft + 1));
                        return this.node.name + "<" + className + ">";
                    },
                    set: function(value) {
                        this._name = value;
                    },
                    visible: false
                },
                _id: {
                    "default": "",
                    serializable: false
                },
                uuid: {
                    get: function() {
                        var id = this._id;
                        id || (id = this._id = idGenerater.getNewId());
                        return id;
                    },
                    visible: false
                },
                __scriptAsset: false,
                _enabled: true,
                enabled: {
                    get: function() {
                        return this._enabled;
                    },
                    set: function(value) {
                        if (this._enabled !== value) {
                            this._enabled = value;
                            this.node._activeInHierarchy && callOnEnable(this, value);
                        }
                    },
                    visible: false
                },
                enabledInHierarchy: {
                    get: function() {
                        return (this._objFlags & IsOnEnableCalled) > 0;
                    },
                    visible: false
                },
                _isOnLoadCalled: {
                    get: function() {
                        return this._objFlags & IsOnLoadCalled;
                    }
                },
                __eventTargets: {
                    "default": [],
                    serializable: false
                }
            },
            update: null,
            lateUpdate: null,
            __preload: null,
            onLoad: null,
            start: null,
            onEnable: null,
            onDisable: null,
            onDestroy: null,
            onFocusInEditor: null,
            onLostFocusInEditor: null,
            addComponent: function(typeOrTypename) {
                return this.node.addComponent(typeOrTypename);
            },
            getComponent: function(typeOrClassName) {
                return this.node.getComponent(typeOrClassName);
            },
            getComponents: function(typeOrClassName) {
                return this.node.getComponents(typeOrClassName);
            },
            getComponentInChildren: function(typeOrClassName) {
                return this.node.getComponentInChildren(typeOrClassName);
            },
            getComponentsInChildren: function(typeOrClassName) {
                return this.node.getComponentsInChildren(typeOrClassName);
            },
            _getLocalBounds: null,
            onRestore: null,
            destroy: function() {
                var depend;
                this._super() && this._enabled && this.node._activeInHierarchy && callOnEnable(this, false);
            },
            __onNodeActivated: function(active) {
                if (active && !(this._objFlags & IsOnLoadStarted)) {
                    this._objFlags |= IsOnLoadStarted;
                    this.onLoad && this.onLoad();
                    this._objFlags |= IsOnLoadCalled;
                }
                if (this._enabled) {
                    if (active) {
                        var deactivatedOnLoading = !this.node._activeInHierarchy;
                        if (deactivatedOnLoading) {
                            return;
                        }
                    }
                    callOnEnable(this, active);
                }
            },
            _onPreDestroy: function() {
                var i, l, target;
                callOnEnable(this, false);
                this.unscheduleAllCallbacks();
                for (i = 0, l = this.__eventTargets.length; i < l; ++i) {
                    target = this.__eventTargets[i];
                    target && target.targetOff(this);
                }
                this.__eventTargets.length = 0;
                this.onDestroy && this._objFlags & IsOnLoadCalled && this.onDestroy();
                this.node._removeComponent(this);
            },
            _destruct: Misc.destructIgnoreId,
            _instantiate: function() {
                var clone = cc.instantiate._clone(this, this);
                clone.node = null;
                return clone;
            },
            isRunning: function() {
                return this.enabledInHierarchy;
            },
            schedule: function(callback, interval, repeat, delay) {
                cc.assert(callback, cc._LogInfos.Node.schedule);
                cc.assert(interval >= 0, cc._LogInfos.Node.schedule_2);
                interval = interval || 0;
                repeat = isNaN(repeat) ? cc.macro.REPEAT_FOREVER : repeat;
                delay = delay || 0;
                cc.director.getScheduler().schedule(callback, this, interval, repeat, delay, !this.enabledInHierarchy);
            },
            scheduleOnce: function(callback, delay) {
                this.schedule(callback, 0, 0, delay);
            },
            unschedule: function(callback_fn) {
                if (!callback_fn) {
                    return;
                }
                cc.director.getScheduler().unschedule(callback_fn, this);
            },
            unscheduleAllCallbacks: function() {
                cc.director.getScheduler().unscheduleAllForTarget(this);
            }
        });
        Component._requireComponent = null;
        Object.defineProperty(Component, "_registerEditorProps", {
            value: function(cls, props) {
                var reqComp = props.requireComponent;
                reqComp && (cls._requireComponent = reqComp);
                var name;
                var key;
                var val;
                var willExecuteInEditMode;
            }
        });
        Object.defineProperties(Component, {
            _callPreloadOnNode: {
                value: _callPreloadOnNode
            },
            _callPreloadOnComponent: {
                value: _callPreloadOnComponent
            }
        });
        Component.prototype.__scriptUuid = "";
        cc.Component = module.exports = Component;
    }, {
        "../CCNode": 21,
        "../platform/CCObject": 70,
        "../platform/id-generater": 78,
        "../utils/misc": 97
    } ],
    36: [ function(require, module, exports) {
        cc.Component.EventHandler = cc.Class({
            name: "cc.ClickEvent",
            properties: {
                target: {
                    "default": null,
                    type: cc.Node
                },
                component: {
                    "default": ""
                },
                handler: {
                    "default": ""
                }
            },
            statics: {
                emitEvents: function(events) {
                    "use strict";
                    for (var i = 0, l = events.length; i < l; i++) {
                        var event = events[i];
                        if (!event instanceof cc.Component.EventHandler) {
                            continue;
                        }
                        event.emit(Array.prototype.slice.call(arguments, 1));
                    }
                }
            },
            emit: function(params) {
                var target = this.target;
                if (!cc.isValid(target)) {
                    return;
                }
                var comp = target.getComponent(this.component);
                if (!cc.isValid(comp)) {
                    return;
                }
                var handler = comp[this.handler];
                if ("function" != typeof handler) {
                    return;
                }
                handler.apply(comp, params);
            }
        });
    }, {} ],
    37: [ function(require, module, exports) {
        var HorizontalAlign = cc.TextAlignment;
        var VerticalAlign = cc.VerticalTextAlignment;
        var Overflow = _ccsg.Label.Overflow;
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    immediate || func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                callNow && func.apply(context, args);
            };
        }
        var Label = cc.Class({
            name: "cc.Label",
            "extends": cc._RendererUnderSG,
            ctor: function() {},
            editor: false,
            _updateSgNodeString: function() {
                this._sgNode.setString(this.string);
                this._updateNodeSize();
            },
            _updateSgNodeFontSize: function() {
                if (this._sgNode) {
                    this._sgNode.setFontSize(this._fontSize);
                    this._updateNodeSize();
                }
            },
            properties: {
                _useOriginalSize: true,
                string: {
                    "default": "Label",
                    multiline: true,
                    tooltip: "i18n:COMPONENT.label.string",
                    notify: function() {
                        this._sgNode && this._updateSgNodeString();
                    }
                },
                horizontalAlign: {
                    "default": HorizontalAlign.LEFT,
                    type: HorizontalAlign,
                    tooltip: "i18n:COMPONENT.label.horizontal_align",
                    notify: function() {
                        this._sgNode && this._sgNode.setHorizontalAlign(this.horizontalAlign);
                    },
                    animatable: false
                },
                verticalAlign: {
                    "default": VerticalAlign.TOP,
                    type: VerticalAlign,
                    tooltip: "i18n:COMPONENT.label.vertical_align",
                    notify: function() {
                        this._sgNode && this._sgNode.setVerticalAlign(this.verticalAlign);
                    },
                    animatable: false
                },
                _actualFontSize: {
                    "default": 40
                },
                actualFontSize: {
                    displayName: "Actual Font Size",
                    animatable: false,
                    readonly: true,
                    get: function() {
                        this._sgNode && (this._actualFontSize = this._sgNode.getFontSize());
                        return this._actualFontSize;
                    }
                },
                _fontSize: 40,
                fontSize: {
                    get: function() {
                        return this._fontSize;
                    },
                    set: function(value) {
                        this._fontSize = value;
                        this._updateSgNodeFontSize();
                    },
                    tooltip: "i18n:COMPONENT.label.font_size"
                },
                _lineHeight: 40,
                lineHeight: {
                    get: function() {
                        this._sgNode && (this._lineHeight = this._sgNode.getLineHeight());
                        return this._lineHeight;
                    },
                    set: function(value) {
                        this._lineHeight = value;
                        if (this._sgNode) {
                            this._sgNode.setLineHeight(value);
                            this._updateNodeSize();
                        }
                    },
                    tooltip: "i18n:COMPONENT.label.line_height"
                },
                overflow: {
                    "default": Overflow.NONE,
                    type: Overflow,
                    tooltip: "i18n:COMPONENT.label.overflow",
                    notify: function() {
                        if (this._sgNode) {
                            this._sgNode.setOverflow(this.overflow);
                            this._updateNodeSize();
                        }
                    },
                    animatable: false
                },
                _enableWrapText: true,
                enableWrapText: {
                    get: function() {
                        this._sgNode && (this._enableWrapText = this._sgNode.isWrapTextEnabled());
                        return this._enableWrapText;
                    },
                    set: function(value) {
                        this._enableWrapText = value;
                        this._sgNode && this._sgNode.enableWrapText(value);
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.label.wrap"
                },
                _N$file: null,
                font: {
                    get: function() {
                        return this._N$file;
                    },
                    set: function(value) {
                        value || (this._isSystemFontUsed = true);
                        this._N$file = value;
                        this._bmFontOriginalSize = -1;
                        value && this._isSystemFontUsed && (this._isSystemFontUsed = false);
                        if (this._sgNode) {
                            "string" == typeof value && cc.warn("Sorry, the cc.Font has been modified from Raw Asset to Asset.Please load the font asset before using.");
                            var isAsset = value instanceof cc.Font;
                            var fntRawUrl = isAsset ? value.rawUrl : "";
                            var textureUrl = isAsset ? value.texture : "";
                            this._sgNode.setFontFileOrFamily(fntRawUrl, textureUrl);
                        }
                    },
                    type: cc.Font,
                    tooltip: "i18n:COMPONENT.label.font",
                    animatable: false
                },
                _isSystemFontUsed: true,
                useSystemFont: {
                    get: function() {
                        return this._isSystemFontUsed;
                    },
                    set: function(value) {
                        if (!value && this._isSystemFontUsed) {
                            return;
                        }
                        this._isSystemFontUsed = !!value;
                        if (value) {
                            this.font = null;
                            this._sgNode && this._sgNode.setFontFileOrFamily("Arial");
                        }
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.label.system_font"
                },
                _bmFontOriginalSize: {
                    displayName: "BMFont Original Size",
                    "default": -1,
                    serializable: false,
                    readonly: true,
                    visible: true,
                    animatable: false
                }
            },
            statics: {
                HorizontalAlign: HorizontalAlign,
                VerticalAlign: VerticalAlign,
                Overflow: Overflow
            },
            __preload: function() {
                this._super();
                var sgSizeInitialized = this._sgNode._isUseSystemFont;
                sgSizeInitialized && this._updateNodeSize();
                this._sgNode.on("load", this._updateNodeSize, this);
            },
            _createSgNode: function() {
                return null;
            },
            _initSgNode: function() {
                "string" == typeof this.font && cc.warn("Sorry, the cc.Font has been modified from Raw Asset to Asset.Please load the font asset before using.");
                var isAsset = this.font instanceof cc.Font;
                var fntRawUrl = isAsset ? this.font.rawUrl : "";
                var textureUrl = isAsset ? this.font.texture : "";
                var sgNode = this._sgNode = new _ccsg.Label(this.string, fntRawUrl, textureUrl);
                sgNode.setVisible(false);
                sgNode.setHorizontalAlign(this.horizontalAlign);
                sgNode.setVerticalAlign(this.verticalAlign);
                sgNode.setFontSize(this._fontSize);
                sgNode.setOverflow(this.overflow);
                sgNode.enableWrapText(this._enableWrapText);
                sgNode.setLineHeight(this._lineHeight);
                sgNode.setString(this.string);
                sgNode.setContentSize(this.node.getContentSize());
                sgNode.setColor(this.node.color);
            },
            _updateNodeSize: function() {
                var initialized = this._sgNode && this._sgNode.parent;
                initialized && (this.overflow !== Overflow.NONE && this.overflow !== Overflow.RESIZE_HEIGHT || this.node.setContentSize(this._sgNode.getContentSize()));
            }
        });
        cc.Label = module.exports = Label;
    }, {} ],
    38: [ function(require, module, exports) {
        var LabelOutline = cc.Class({
            name: "cc.LabelOutline",
            "extends": require("./CCComponent"),
            editor: false,
            ctor: function() {
                this._labelSGNode = null;
            },
            properties: {
                _color: cc.color(255, 255, 255, 255),
                _width: 1,
                color: {
                    get: function() {
                        return this._color;
                    },
                    set: function(value) {
                        this._color = cc.color(value);
                        this._labelSGNode && this._labelSGNode.setOutlineColor(cc.color(this._color));
                    }
                },
                width: {
                    get: function() {
                        return this._width;
                    },
                    set: function(value) {
                        this._width = value;
                        if (this._labelSGNode) {
                            this._labelSGNode.setOutlineWidth(value);
                            this._labelSGNode.setMargin(value);
                        }
                    }
                }
            },
            onEnable: function() {
                var label = this.node.getComponent("cc.Label");
                var sgNode = this._labelSGNode = label && label._sgNode;
                if (this._labelSGNode) {
                    sgNode.setOutlined(true);
                    sgNode.setOutlineColor(cc.color(this._color));
                    sgNode.setOutlineWidth(this._width);
                    sgNode.setMargin(this._width);
                }
            },
            onDisable: function() {
                if (this._labelSGNode) {
                    this._labelSGNode.setOutlined(false);
                    this._labelSGNode.setMargin(0);
                }
                this._labelSGNode = null;
            }
        });
        cc.LabelOutline = module.exports = LabelOutline;
    }, {
        "./CCComponent": 35
    } ],
    39: [ function(require, module, exports) {
        var Type = cc.Enum({
            NONE: 0,
            HORIZONTAL: 1,
            VERTICAL: 2,
            GRID: 3
        });
        var ResizeMode = cc.Enum({
            NONE: 0,
            CONTAINER: 1,
            CHILDREN: 2
        });
        var AxisDirection = cc.Enum({
            HORIZONTAL: 0,
            VERTICAL: 1
        });
        var VerticalDirection = cc.Enum({
            BOTTOM_TO_TOP: 0,
            TOP_TO_BOTTOM: 1
        });
        var HorizontalDirection = cc.Enum({
            LEFT_TO_RIGHT: 0,
            RIGHT_TO_LEFT: 1
        });
        var Layout = cc.Class({
            name: "cc.Layout",
            "extends": require("./CCComponent"),
            editor: false,
            properties: {
                _layoutSize: cc.size(300, 200),
                _layoutDirty: {
                    "default": true,
                    serializable: false
                },
                _resize: ResizeMode.NONE,
                _N$layoutType: Type.NONE,
                type: {
                    type: Type,
                    get: function() {
                        return this._N$layoutType;
                    },
                    set: function(value) {
                        this._N$layoutType = value;
                        var reLayouted;
                        this._doLayoutDirty();
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.layout.layout_type"
                },
                resizeMode: {
                    type: ResizeMode,
                    tooltip: "i18n:COMPONENT.layout.resize_mode",
                    get: function() {
                        return this._resize;
                    },
                    set: function(value) {
                        if (this.type === Type.NONE && value === ResizeMode.CHILDREN) {
                            return;
                        }
                        this._resize = value;
                        var reLayouted;
                        this._doLayoutDirty();
                    },
                    animatable: false
                },
                cellSize: {
                    "default": cc.size(40, 40),
                    tooltip: "i18n:COMPONENT.layout.cell_size",
                    type: cc.Size,
                    notify: function() {
                        this._doLayoutDirty();
                    },
                    animatable: false
                },
                startAxis: {
                    "default": AxisDirection.HORIZONTAL,
                    tooltip: "i18n:COMPONENT.layout.start_axis",
                    type: AxisDirection,
                    notify: function() {
                        var reLayouted;
                        this._doLayoutDirty();
                    },
                    animatable: false
                },
                padding: {
                    "default": 0,
                    tooltip: "i18n:COMPONENT.layout.padding",
                    notify: function() {
                        this._doLayoutDirty();
                    },
                    animatable: false
                },
                spacingX: {
                    "default": 0,
                    notify: function() {
                        this._doLayoutDirty();
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.layout.space_x"
                },
                spacingY: {
                    "default": 0,
                    notify: function() {
                        this._doLayoutDirty();
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.layout.space_y"
                },
                verticalDirection: {
                    "default": VerticalDirection.TOP_TO_BOTTOM,
                    type: VerticalDirection,
                    notify: function() {
                        this._doLayoutDirty();
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.layout.vertical_direction"
                },
                horizontalDirection: {
                    "default": HorizontalDirection.LEFT_TO_RIGHT,
                    type: HorizontalDirection,
                    notify: function() {
                        this._doLayoutDirty();
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.layout.horizontal_direction"
                }
            },
            statics: {
                Type: Type,
                VerticalDirection: VerticalDirection,
                HorizontalDirection: HorizontalDirection,
                ResizeMode: ResizeMode,
                AxisDirection: AxisDirection
            },
            __preload: function() {
                cc.sizeEqualToSize(this.node.getContentSize(), cc.size(0, 0)) && this.node.setContentSize(this._layoutSize);
                this.node.on("size-changed", this._resized, this);
                this.node.on("anchor-changed", this._doLayoutDirty, this);
                this.node.on("child-added", this._childAdded, this);
                this.node.on("child-removed", this._childRemoved, this);
                this.node.on("child-reorder", this._doLayoutDirty, this);
                this._updateChildrenEventListener();
            },
            _doLayoutDirty: function() {
                this._layoutDirty = true;
            },
            _updateChildrenEventListener: function() {
                var children = this.node.children;
                children.forEach(function(child) {
                    child.on("size-changed", this._doLayoutDirty, this);
                    child.on("position-changed", this._doLayoutDirty, this);
                    child.on("anchor-changed", this._doLayoutDirty, this);
                    child.on("active-in-hierarchy-changed", this._doLayoutDirty, this);
                }.bind(this));
            },
            _childAdded: function(event) {
                var child = event.detail;
                child.on("size-changed", this._doLayoutDirty, this);
                child.on("position-changed", this._doLayoutDirty, this);
                child.on("anchor-changed", this._doLayoutDirty, this);
                child.on("active-in-hierarchy-changed", this._doLayoutDirty, this);
                this._doLayoutDirty();
            },
            _childRemoved: function(event) {
                var child = event.detail;
                child.off("size-changed", this._doLayoutDirty, this);
                child.off("position-changed", this._doLayoutDirty, this);
                child.off("anchor-changed", this._doLayoutDirty, this);
                child.off("active-in-hierarchy-changed", this._doLayoutDirty, this);
                this._doLayoutDirty();
            },
            _resized: function() {
                this._layoutSize = this.node.getContentSize();
                this._doLayoutDirty();
            },
            _doLayoutHorizontally: function(baseWidth, rowBreak, fnPositionY, applyChildren) {
                var layoutAnchor = this.node.getAnchorPoint();
                var children = this.node.children;
                var sign = 1;
                var leftBoundaryOfLayout = -layoutAnchor.x * baseWidth;
                if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                    sign = -1;
                    leftBoundaryOfLayout = (1 - layoutAnchor.x) * baseWidth;
                }
                var nextX = leftBoundaryOfLayout + sign * this.padding - sign * this.spacingX;
                var rowMaxHeight = 0;
                var tempMaxHeight = 0;
                var secondMaxHeight = 0;
                var row = 0;
                var containerResizeBoundary = 0;
                var maxHeightChildAnchorY = 0;
                var newChildWidth = this.cellSize.width;
                this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildWidth = (baseWidth - 2 * this.padding - (children.length - 1) * this.spacingX) / children.length);
                children.forEach(function(child) {
                    if (!child.activeInHierarchy) {
                        return;
                    }
                    if (this._resize === ResizeMode.CHILDREN) {
                        child.width = newChildWidth;
                        this.type === Type.GRID && (child.height = this.cellSize.height);
                    }
                    var anchorX = child.anchorX;
                    secondMaxHeight > tempMaxHeight && (tempMaxHeight = secondMaxHeight);
                    if (child.height >= tempMaxHeight) {
                        secondMaxHeight = tempMaxHeight;
                        tempMaxHeight = child.height;
                        maxHeightChildAnchorY = child.getAnchorPoint().y;
                    }
                    this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && (anchorX = 1 - child.anchorX);
                    nextX = nextX + sign * anchorX * child.width + sign * this.spacingX;
                    var rightBoundaryOfChild = sign * (1 - anchorX) * child.width;
                    if (rowBreak) {
                        var rowBreakBoundary = nextX + rightBoundaryOfChild + sign * this.padding;
                        var leftToRightRowBreak = this.horizontalDirection === HorizontalDirection.LEFT_TO_RIGHT && rowBreakBoundary > (1 - layoutAnchor.x) * baseWidth;
                        var rightToLeftRowBreak = this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && rowBreakBoundary < -layoutAnchor.x * baseWidth;
                        if (leftToRightRowBreak || rightToLeftRowBreak) {
                            if (child.height >= tempMaxHeight) {
                                0 === secondMaxHeight && (secondMaxHeight = tempMaxHeight);
                                rowMaxHeight += secondMaxHeight;
                                secondMaxHeight = tempMaxHeight;
                            } else {
                                rowMaxHeight += tempMaxHeight;
                                secondMaxHeight = child.height;
                                tempMaxHeight = 0;
                            }
                            nextX = leftBoundaryOfLayout + sign * (this.padding + anchorX * child.width);
                            row++;
                        }
                    }
                    var finalPositionY = fnPositionY(child, rowMaxHeight, row);
                    baseWidth >= child.width + 2 * this.padding && applyChildren && child.setPosition(cc.p(nextX, finalPositionY));
                    var signX = 1;
                    var tempFinalPositionY;
                    var topMarign = 0 === tempMaxHeight ? child.height : tempMaxHeight;
                    if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                        containerResizeBoundary = containerResizeBoundary || this.node._contentSize.height;
                        signX = -1;
                        tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.padding);
                        tempFinalPositionY < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
                    } else {
                        containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.height;
                        tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.padding);
                        tempFinalPositionY > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
                    }
                    nextX += rightBoundaryOfChild;
                }.bind(this));
                return containerResizeBoundary;
            },
            _getVerticalBaseHeight: function(children) {
                var newHeight = 0;
                var activeChildCount = 0;
                if (this.resizeMode === ResizeMode.CONTAINER) {
                    children.forEach(function(child) {
                        if (!child.activeInHierarchy) {
                            return;
                        }
                        activeChildCount++;
                        newHeight += child.height;
                    });
                    newHeight += (activeChildCount - 1) * this.spacingY + 2 * this.padding;
                } else {
                    newHeight = this.node.getContentSize().height;
                }
                return newHeight;
            },
            _doLayoutVertically: function(baseHeight, columnBreak, fnPositionX, applyChildren) {
                var layoutAnchor = this.node.getAnchorPoint();
                var children = this.node.children;
                var sign = 1;
                var bottomBoundaryOfLayout = -layoutAnchor.y * baseHeight;
                if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                    sign = -1;
                    bottomBoundaryOfLayout = (1 - layoutAnchor.y) * baseHeight;
                }
                var nextY = bottomBoundaryOfLayout + sign * this.padding - sign * this.spacingY;
                var columnMaxWidth = 0;
                var tempMaxWidth = 0;
                var secondMaxWidth = 0;
                var column = 0;
                var containerResizeBoundary = 0;
                var maxWidthChildAnchorX = 0;
                var newChildHeight = this.cellSize.height;
                this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildHeight = (baseHeight - 2 * this.padding - (children.length - 1) * this.spacingY) / children.length);
                children.forEach(function(child) {
                    if (!child.activeInHierarchy) {
                        return;
                    }
                    if (this.resizeMode === ResizeMode.CHILDREN) {
                        child.height = newChildHeight;
                        this.type === Type.GRID && (child.width = this.cellSize.width);
                    }
                    var anchorY = child.anchorY;
                    secondMaxWidth > tempMaxWidth && (tempMaxWidth = secondMaxWidth);
                    if (child.width >= tempMaxWidth) {
                        secondMaxWidth = tempMaxWidth;
                        tempMaxWidth = child.width;
                        maxWidthChildAnchorX = child.getAnchorPoint().x;
                    }
                    this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && (anchorY = 1 - child.anchorY);
                    nextY = nextY + sign * anchorY * child.height + sign * this.spacingY;
                    var topBoundaryOfChild = sign * (1 - anchorY) * child.height;
                    if (columnBreak) {
                        var columnBreakBoundary = nextY + topBoundaryOfChild + sign * this.padding;
                        var bottomToTopColumnBreak = this.verticalDirection === VerticalDirection.BOTTOM_TO_TOP && columnBreakBoundary > (1 - layoutAnchor.y) * baseHeight;
                        var topToBottomColumnBreak = this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && columnBreakBoundary < -layoutAnchor.y * baseHeight;
                        if (bottomToTopColumnBreak || topToBottomColumnBreak) {
                            if (child.width >= tempMaxWidth) {
                                0 === secondMaxWidth && (secondMaxWidth = tempMaxWidth);
                                columnMaxWidth += secondMaxWidth;
                                secondMaxWidth = tempMaxWidth;
                            } else {
                                columnMaxWidth += tempMaxWidth;
                                secondMaxWidth = child.width;
                                tempMaxWidth = 0;
                            }
                            nextY = bottomBoundaryOfLayout + sign * (this.padding + anchorY * child.height);
                            column++;
                        }
                    }
                    var finalPositionX = fnPositionX(child, columnMaxWidth, column);
                    baseHeight >= child.height + 2 * this.padding && applyChildren && child.setPosition(cc.p(finalPositionX, nextY));
                    var signX = 1;
                    var tempFinalPositionX;
                    var rightMarign = 0 === tempMaxWidth ? child.width : tempMaxWidth;
                    if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                        signX = -1;
                        containerResizeBoundary = containerResizeBoundary || this.node._contentSize.width;
                        tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.padding);
                        tempFinalPositionX < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
                    } else {
                        containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.width;
                        tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.padding);
                        tempFinalPositionX > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
                    }
                    nextY += topBoundaryOfChild;
                }.bind(this));
                return containerResizeBoundary;
            },
            _doLayoutBasic: function() {
                var children = this.node.children;
                var allChildrenBoundingBox = null;
                children.forEach(function(child) {
                    if (!child.activeInHierarchy) {
                        return;
                    }
                    allChildrenBoundingBox = allChildrenBoundingBox ? cc.rectUnion(allChildrenBoundingBox, child.getBoundingBoxToWorld()) : child.getBoundingBoxToWorld();
                });
                if (allChildrenBoundingBox) {
                    var leftBottomInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.p(allChildrenBoundingBox.x, allChildrenBoundingBox.y));
                    var rightTopInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.p(allChildrenBoundingBox.x + allChildrenBoundingBox.width, allChildrenBoundingBox.y + allChildrenBoundingBox.height));
                    var newSize = cc.size(parseFloat((rightTopInParentSpace.x - leftBottomInParentSpace.x).toFixed(2)), parseFloat((rightTopInParentSpace.y - leftBottomInParentSpace.y).toFixed(2)));
                    var layoutPosition = this.node.getPosition();
                    var newAnchorX = (layoutPosition.x - leftBottomInParentSpace.x) / newSize.width;
                    var newAnchorY = (layoutPosition.y - leftBottomInParentSpace.y) / newSize.height;
                    var newAnchor = cc.p(parseFloat(newAnchorX.toFixed(2)), parseFloat(newAnchorY.toFixed(2)));
                    this.node.setAnchorPoint(newAnchor);
                    this.node.setContentSize(newSize);
                }
            },
            _doLayoutGridAxisHorizontal: function(layoutAnchor, layoutSize) {
                var baseWidth = layoutSize.width;
                var sign = 1;
                var bottomBoundaryOfLayout = -layoutAnchor.y * layoutSize.height;
                if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                    sign = -1;
                    bottomBoundaryOfLayout = (1 - layoutAnchor.y) * layoutSize.height;
                }
                var fnPositionY = function(child, topOffset, row) {
                    return bottomBoundaryOfLayout + sign * (topOffset + child.anchorY * child.height + this.padding + row * this.spacingY);
                }.bind(this);
                var newHeight = 0;
                if (this.resizeMode === ResizeMode.CONTAINER) {
                    var boundary = this._doLayoutHorizontally(baseWidth, true, fnPositionY, false);
                    newHeight = bottomBoundaryOfLayout - boundary;
                    newHeight < 0 && (newHeight *= -1);
                    bottomBoundaryOfLayout = -layoutAnchor.y * newHeight;
                    if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                        sign = -1;
                        bottomBoundaryOfLayout = (1 - layoutAnchor.y) * newHeight;
                    }
                }
                this._doLayoutHorizontally(baseWidth, true, fnPositionY, true);
                this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(baseWidth, newHeight);
            },
            _doLayoutGridAxisVertical: function(layoutAnchor, layoutSize) {
                var baseHeight = layoutSize.height;
                var sign = 1;
                var leftBoundaryOfLayout = -layoutAnchor.x * layoutSize.width;
                if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                    sign = -1;
                    leftBoundaryOfLayout = (1 - layoutAnchor.x) * layoutSize.width;
                }
                var fnPositionX = function(child, leftOffset, column) {
                    return leftBoundaryOfLayout + sign * (leftOffset + child.anchorX * child.width + this.padding + column * this.spacingX);
                }.bind(this);
                var newWidth = 0;
                if (this.resizeMode === ResizeMode.CONTAINER) {
                    var boundary = this._doLayoutVertically(baseHeight, true, fnPositionX, false);
                    newWidth = leftBoundaryOfLayout - boundary;
                    newWidth < 0 && (newWidth *= -1);
                    leftBoundaryOfLayout = -layoutAnchor.x * newWidth;
                    if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                        sign = -1;
                        leftBoundaryOfLayout = (1 - layoutAnchor.x) * newWidth;
                    }
                }
                this._doLayoutVertically(baseHeight, true, fnPositionX, true);
                this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(newWidth, baseHeight);
            },
            _doLayoutGrid: function() {
                var layoutAnchor = this.node.getAnchorPoint();
                var layoutSize = this.node.getContentSize();
                this.startAxis === AxisDirection.HORIZONTAL ? this._doLayoutGridAxisHorizontal(layoutAnchor, layoutSize) : this.startAxis === AxisDirection.VERTICAL && this._doLayoutGridAxisVertical(layoutAnchor, layoutSize);
            },
            _getHorizontalBaseWidth: function(children) {
                var newWidth = 0;
                var activeChildCount = 0;
                if (this.resizeMode === ResizeMode.CONTAINER) {
                    children.forEach(function(child) {
                        if (!child.activeInHierarchy) {
                            return;
                        }
                        activeChildCount++;
                        newWidth += child.width;
                    });
                    newWidth += (activeChildCount - 1) * this.spacingX + 2 * this.padding;
                } else {
                    newWidth = this.node.getContentSize().width;
                }
                return newWidth;
            },
            _doLayout: function() {
                if (this.type === Type.HORIZONTAL) {
                    var newWidth = this._getHorizontalBaseWidth(this.node.children);
                    var fnPositionY = function(child) {
                        return child.y;
                    };
                    this._doLayoutHorizontally(newWidth, false, fnPositionY, true);
                    this.node.width = newWidth;
                } else {
                    if (this.type === Type.VERTICAL) {
                        var newHeight = this._getVerticalBaseHeight(this.node.children);
                        var fnPositionX = function(child) {
                            return child.x;
                        };
                        this._doLayoutVertically(newHeight, false, fnPositionX, true);
                        this.node.height = newHeight;
                    } else {
                        this.type === Type.NONE ? this.resizeMode === ResizeMode.CONTAINER && this._doLayoutBasic() : this.type === Type.GRID && this._doLayoutGrid();
                    }
                }
            },
            onEnable: function() {
                cc.director.on(cc.Director.EVENT_BEFORE_VISIT, this._updateLayout, this);
            },
            onDisable: function() {
                cc.director.off(cc.Director.EVENT_BEFORE_VISIT, this._updateLayout, this);
            },
            _updateLayout: function() {
                if (this._layoutDirty && this.node.children.length > 0) {
                    this._doLayout();
                    this._layoutDirty = false;
                }
            }
        });
        cc.Layout = module.exports = Layout;
    }, {
        "./CCComponent": 35
    } ],
    40: [ function(require, module, exports) {
        var RendererInSG = cc.Class({
            "extends": require("./CCSGComponent"),
            name: "cc._RendererInSG",
            ctor: function() {
                var sgNode = this._sgNode = this._createSgNode();
                sgNode.setVisible(false);
                this._plainNode = new _ccsg.Node();
            },
            __preload: function() {
                this._initSgNode();
                var sgSize;
            },
            onEnable: function() {
                this._replaceSgNode(this._sgNode);
            },
            onDisable: function() {
                this._replaceSgNode(this._plainNode);
            },
            onDestroy: function() {
                this._removeSgNode();
                var releasedByNode;
            },
            _replaceSgNode: function(sgNode) {
                var node = this.node;
                var replaced = node._sgNode;
                replaced._entity = null;
                var children = replaced.getChildren().slice();
                replaced.removeAllChildren(false);
                sgNode.getChildrenCount() > 0 && sgNode.removeAllChildren(false);
                for (var i = 0, len = children.length; i < len; ++i) {
                    sgNode.addChild(children[i]);
                }
                var parentNode = replaced.getParent();
                if (parentNode) {
                    parentNode.removeChild(replaced);
                    parentNode.addChild(sgNode);
                    sgNode._arrivalOrder = replaced._arrivalOrder;
                    cc.renderer.childrenOrderDirty = parentNode._reorderChildDirty = true;
                }
                node._sgNode = sgNode;
                node._sgNode._entity = node;
                node._updateSgNode();
            }
        });
        cc._RendererInSG = module.exports = RendererInSG;
    }, {
        "./CCSGComponent": 42
    } ],
    41: [ function(require, module, exports) {
        var RendererUnderSG = cc.Class({
            "extends": require("./CCSGComponent"),
            name: "cc._RendererUnderSG",
            ctor: function() {
                var sgNode = this._sgNode = this._createSgNode();
                sgNode && sgNode.setVisible(false);
            },
            __preload: function() {
                this._initSgNode();
                this._registSizeProvider();
                this._appendSgNode(this._sgNode);
            },
            onEnable: function() {
                this._sgNode && this._sgNode.setVisible(true);
            },
            onDisable: function() {
                this._sgNode && this._sgNode.setVisible(false);
            },
            onDestroy: function() {
                this.node._sizeProvider === this._sgNode && (this.node._sizeProvider = null);
                this._removeSgNode();
            },
            _appendSgNode: function(sgNode) {
                if (!sgNode) {
                    return;
                }
                var node = this.node;
                sgNode.setColor(node._color);
                node._cascadeOpacityEnabled || sgNode.setOpacity(node._opacity);
                sgNode.setAnchorPoint(node._anchorPoint);
                sgNode.setIgnoreAnchorPointForPosition(node.__ignoreAnchor);
                sgNode.setOpacityModifyRGB(node._opacityModifyRGB);
                sgNode.setLocalZOrder(-1);
                var sgParent = node._sgNode;
                sgParent.addChild(sgNode);
            }
        });
        cc._RendererUnderSG = module.exports = RendererUnderSG;
    }, {
        "./CCSGComponent": 42
    } ],
    42: [ function(require, module, exports) {
        var SceneGraphHelper = require("../utils/scene-graph-helper");
        var SGComponent = cc.Class({
            "extends": require("./CCComponent"),
            name: "cc._SGComponent",
            editor: false,
            properties: {
                _sgNode: {
                    "default": null,
                    serializable: false
                }
            },
            _createSgNode: null,
            _initSgNode: null,
            _removeSgNode: SceneGraphHelper.removeSgNode,
            _registSizeProvider: function() {
                if (this.node._sizeProvider) {
                    var name = cc.js.getClassName(this);
                    this.node.getComponent(cc.Canvas) ? cc.error("Should not add renderer component (%s) to a Canvas node.", name) : cc.error("Should not add %s to a node which size is already used by its other component.", name);
                } else {
                    this.node._sizeProvider = this._sgNode;
                }
            }
        });
        cc._SGComponent = module.exports = SGComponent;
    }, {
        "../utils/scene-graph-helper": 100,
        "./CCComponent": 35
    } ],
    43: [ function(require, module, exports) {
        var Base = require("./CCRendererUnderSG");
        var SpriteType = cc.Scale9Sprite.RenderingType;
        var FillType = cc.Scale9Sprite.FillType;
        var BlendFactor = cc.BlendFunc.BlendFactor;
        var SizeMode = cc.Enum({
            CUSTOM: 0,
            TRIMMED: 1,
            RAW: 2
        });
        var Sprite = cc.Class({
            name: "cc.Sprite",
            "extends": Base,
            editor: false,
            ctor: function() {
                this._blendFunc = new cc.BlendFunc(this._srcBlendFactor, this._dstBlendFactor);
            },
            properties: {
                _spriteFrame: {
                    "default": null,
                    type: cc.SpriteFrame
                },
                _type: SpriteType.SIMPLE,
                _sizeMode: SizeMode.TRIMMED,
                _fillType: 0,
                _fillCenter: cc.v2(0, 0),
                _fillStart: 0,
                _fillRange: 0,
                _isTrimmedMode: true,
                _srcBlendFactor: BlendFactor.SRC_ALPHA,
                _dstBlendFactor: BlendFactor.ONE_MINUS_SRC_ALPHA,
                _atlas: {
                    "default": null,
                    type: cc.SpriteAtlas,
                    tooltip: "i18n:COMPONENT.sprite.atlas",
                    editorOnly: true,
                    visible: true,
                    animatable: false
                },
                spriteFrame: {
                    get: function() {
                        return this._spriteFrame;
                    },
                    set: function(value, force) {
                        var lastSprite = this._spriteFrame;
                        if (lastSprite === value) {
                            return;
                        }
                        this._spriteFrame = value;
                        this._applySpriteFrame(lastSprite);
                    },
                    type: cc.SpriteFrame
                },
                type: {
                    get: function() {
                        return this._type;
                    },
                    set: function(value) {
                        this._type = value;
                        this._sgNode.setRenderingType(this._type);
                        this._applyCapInset();
                    },
                    type: SpriteType,
                    animatable: false,
                    tooltip: "i18n:COMPONENT.sprite.type"
                },
                fillType: {
                    get: function() {
                        return this._fillType;
                    },
                    set: function(value) {
                        this._fillType = value;
                        this._sgNode && this._sgNode.setFillType(value);
                    },
                    type: FillType,
                    tooltip: "i18n:COMPONENT.sprite.fill_type"
                },
                fillCenter: {
                    get: function() {
                        return this._fillCenter;
                    },
                    set: function(value) {
                        this._fillCenter = cc.v2(value);
                        this._sgNode && this._sgNode.setFillCenter(this._fillCenter);
                    },
                    tooltip: "i18n:COMPONENT.sprite.fill_center"
                },
                fillStart: {
                    get: function() {
                        return this._fillStart;
                    },
                    set: function(value) {
                        this._fillStart = cc.clampf(value, -1, 1);
                        this._sgNode && this._sgNode.setFillStart(value);
                    },
                    tooltip: "i18n:COMPONENT.sprite.fill_start"
                },
                fillRange: {
                    get: function() {
                        return this._fillRange;
                    },
                    set: function(value) {
                        this._fillRange = cc.clampf(value, -1, 1);
                        this._sgNode && this._sgNode.setFillRange(value);
                    },
                    tooltip: "i18n:COMPONENT.sprite.fill_range"
                },
                trim: {
                    get: function() {
                        return this._isTrimmedMode;
                    },
                    set: function(value) {
                        if (this._isTrimmedMode !== value) {
                            this._isTrimmedMode = value;
                            this._sgNode.enableTrimmedContentSize(value);
                        }
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.sprite.trim"
                },
                srcBlendFactor: {
                    get: function() {
                        return this._srcBlendFactor;
                    },
                    set: function(value) {
                        this._srcBlendFactor = value;
                        this._blendFunc.src = value;
                    },
                    animatable: false,
                    type: BlendFactor,
                    tooltip: "i18n:COMPONENT.sprite.src_blend_factor"
                },
                dstBlendFactor: {
                    get: function() {
                        return this._dstBlendFactor;
                    },
                    set: function(value) {
                        this._dstBlendFactor = value;
                        this._blendFunc.dst = value;
                    },
                    animatable: false,
                    type: BlendFactor,
                    tooltip: "i18n:COMPONENT.sprite.dst_blend_factor"
                },
                sizeMode: {
                    get: function() {
                        return this._sizeMode;
                    },
                    set: function(value) {
                        this._sizeMode = value;
                        value !== SizeMode.CUSTOM && this._applySpriteSize();
                    },
                    animatable: false,
                    type: SizeMode,
                    tooltip: "i18n:COMPONENT.sprite.size_mode"
                }
            },
            statics: {
                FillType: FillType,
                Type: SpriteType,
                SizeMode: SizeMode
            },
            setVisible: function(visible) {
                this.enabled = visible;
            },
            setInsetLeft: function(insetLeft) {
                this._sgNode.setInsetLeft(insetLeft);
            },
            getInsetLeft: function() {
                return this._sgNode.getInsetLeft();
            },
            setInsetTop: function(insetTop) {
                this._sgNode.setInsetTop(insetTop);
            },
            getInsetTop: function() {
                return this._sgNode.getInsetTop();
            },
            setInsetRight: function(insetRight) {
                this._sgNode.setInsetRight(insetRight);
            },
            getInsetRight: function() {
                return this._sgNode.getInsetRight();
            },
            setInsetBottom: function(insetBottom) {
                this._sgNode.setInsetBottom(insetBottom);
            },
            getInsetBottom: function() {
                return this._sgNode.getInsetBottom();
            },
            onEnable: function() {
                this._sgNode && this._spriteFrame && this._spriteFrame.textureLoaded() && this._sgNode.setVisible(true);
            },
            _applyAtlas: false,
            _applyCapInset: function() {
                if (this._type === SpriteType.SLICED && this._spriteFrame) {
                    var sgNode = this._sgNode;
                    sgNode.setInsetTop(this._spriteFrame.insetTop);
                    sgNode.setInsetBottom(this._spriteFrame.insetBottom);
                    sgNode.setInsetRight(this._spriteFrame.insetRight);
                    sgNode.setInsetLeft(this._spriteFrame.insetLeft);
                }
            },
            _applySpriteSize: function() {
                if (SizeMode.CUSTOM !== this._sizeMode && this._spriteFrame) {
                    if (SizeMode.RAW === this._sizeMode) {
                        var size = this._spriteFrame.getOriginalSize();
                        this.node.setContentSize(size);
                    } else {
                        if (SizeMode.TRIMMED === this._sizeMode) {
                            var rect = this._spriteFrame.getRect();
                            this.node.setContentSize(cc.size(rect.width, rect.height));
                        } else {
                            this.node.setContentSize(this.node.getContentSize(true));
                        }
                    }
                } else {
                    this.node.setContentSize(this.node.getContentSize(true));
                }
            },
            _onSpriteFrameLoaded: function(event) {
                var self = this;
                var sgNode = this._sgNode;
                sgNode.setSpriteFrame(self._spriteFrame);
                self._applyCapInset();
                self._applySpriteSize();
                self.enabledInHierarchy && !sgNode.isVisible() && sgNode.setVisible(true);
            },
            _applySpriteFrame: function(oldFrame) {
                var sgNode = this._sgNode;
                oldFrame && oldFrame.off && oldFrame.off("load", this._onSpriteFrameLoaded, this);
                var spriteFrame = this._spriteFrame;
                spriteFrame ? this._onSpriteFrameLoaded(null) : sgNode.setVisible(false);
            },
            _createSgNode: function() {
                return new cc.Scale9Sprite();
            },
            _initSgNode: function() {
                this._applySpriteFrame(null);
                var sgNode = this._sgNode;
                sgNode.setContentSize(this.node.getContentSize(true));
                this._applySpriteSize();
                sgNode.setRenderingType(this._type);
                sgNode.setFillType(this._fillType);
                sgNode.setFillCenter(this._fillCenter);
                sgNode.setFillStart(this._fillStart);
                sgNode.setFillRange(this._fillRange);
                sgNode.enableTrimmedContentSize(this._isTrimmedMode);
                this._blendFunc.src = this._srcBlendFactor;
                this._blendFunc.dst = this._dstBlendFactor;
            },
            _resized: false
        });
        var misc = require("../utils/misc");
        var SameNameGetSets = [ "insetLeft", "insetTop", "insetRight", "insetBottom" ];
        var DiffNameGetSets = {
            type: [ null, "setRenderingType" ]
        };
        misc.propertyDefine(Sprite, SameNameGetSets, DiffNameGetSets);
        cc.Sprite = module.exports = Sprite;
    }, {
        "../utils/misc": 97,
        "./CCRendererUnderSG": 41
    } ],
    44: [ function(require, module, exports) {
        var SpriteDistortion = cc.Class({
            name: "cc.SpriteDistortion",
            "extends": require("./CCComponent"),
            editor: false,
            ctor: function() {
                this._spriteSGNode = null;
            },
            properties: {
                _distortionOffset: cc.v2(0, 0),
                offset: {
                    get: function() {
                        return this._distortionOffset;
                    },
                    set: function(value) {
                        this._distortionOffset.x = value.x;
                        this._distortionOffset.y = value.y;
                        this._spriteSGNode && this._spriteSGNode.setDistortionOffset(this._distortionOffset);
                    }
                },
                _distortionTiling: cc.v2(1, 1),
                tiling: {
                    get: function() {
                        return this._distortionTiling;
                    },
                    set: function(value) {
                        this._distortionTiling.x = value.x;
                        this._distortionTiling.y = value.y;
                        this._spriteSGNode && this._spriteSGNode.setDistortionTiling(this._distortionTiling);
                    }
                }
            },
            onEnable: function() {
                var sprite = this.node.getComponent("cc.Sprite");
                var sgNode = this._spriteSGNode = sprite && sprite._sgNode;
                if (this._spriteSGNode) {
                    sgNode.setState(cc.Scale9Sprite.state.DISTORTION);
                    sgNode.setDistortionOffset(this._distortionOffset);
                    sgNode.setDistortionTiling(this._distortionTiling);
                }
            },
            onDisable: function() {
                this._spriteSGNode && this._spriteSGNode.setState(cc.Scale9Sprite.state.NORMAL);
                this._spriteSGNode = null;
            }
        });
        cc.SpriteDistortion = module.exports = SpriteDistortion;
    }, {
        "./CCComponent": 35
    } ],
    45: [ function(require, module, exports) {
        var WidgetManager = require("../base-ui/CCWidgetManager");
        var AlignFlags = WidgetManager._AlignFlags;
        var TOP = AlignFlags.TOP;
        var MID = AlignFlags.MID;
        var BOT = AlignFlags.BOT;
        var LEFT = AlignFlags.LEFT;
        var CENTER = AlignFlags.CENTER;
        var RIGHT = AlignFlags.RIGHT;
        var TOP_BOT = TOP | BOT;
        var LEFT_RIGHT = LEFT | RIGHT;
        var Widget = cc.Class({
            name: "cc.Widget",
            "extends": require("./CCComponent"),
            editor: false,
            properties: {
                isAlignTop: {
                    get: function() {
                        return (this._alignFlags & TOP) > 0;
                    },
                    set: function(value) {
                        this._setAlign(TOP, value);
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.widget.align_top"
                },
                isAlignVerticalCenter: {
                    get: function() {
                        return (this._alignFlags & MID) > 0;
                    },
                    set: function(value) {
                        if (value) {
                            this.isAlignTop = false;
                            this.isAlignBottom = false;
                            this._alignFlags |= MID;
                        } else {
                            this._alignFlags &= ~MID;
                        }
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.widget.align_v_center"
                },
                isAlignBottom: {
                    get: function() {
                        return (this._alignFlags & BOT) > 0;
                    },
                    set: function(value) {
                        this._setAlign(BOT, value);
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.widget.align_bottom"
                },
                isAlignLeft: {
                    get: function() {
                        return (this._alignFlags & LEFT) > 0;
                    },
                    set: function(value) {
                        this._setAlign(LEFT, value);
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.widget.align_left"
                },
                isAlignHorizontalCenter: {
                    get: function() {
                        return (this._alignFlags & CENTER) > 0;
                    },
                    set: function(value) {
                        if (value) {
                            this.isAlignLeft = false;
                            this.isAlignRight = false;
                            this._alignFlags |= CENTER;
                        } else {
                            this._alignFlags &= ~CENTER;
                        }
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.widget.align_h_center"
                },
                isAlignRight: {
                    get: function() {
                        return (this._alignFlags & RIGHT) > 0;
                    },
                    set: function(value) {
                        this._setAlign(RIGHT, value);
                    },
                    animatable: false,
                    tooltip: "i18n:COMPONENT.widget.align_right"
                },
                isStretchWidth: {
                    get: function() {
                        return (this._alignFlags & LEFT_RIGHT) === LEFT_RIGHT;
                    },
                    visible: false
                },
                isStretchHeight: {
                    get: function() {
                        return (this._alignFlags & TOP_BOT) === TOP_BOT;
                    },
                    visible: false
                },
                top: {
                    get: function() {
                        return this._top;
                    },
                    set: function(value) {
                        this._top = value;
                    },
                    tooltip: "i18n:COMPONENT.widget.top"
                },
                bottom: {
                    get: function() {
                        return this._bottom;
                    },
                    set: function(value) {
                        this._bottom = value;
                    },
                    tooltip: "i18n:COMPONENT.widget.bottom"
                },
                left: {
                    get: function() {
                        return this._left;
                    },
                    set: function(value) {
                        this._left = value;
                    },
                    tooltip: "i18n:COMPONENT.widget.left"
                },
                right: {
                    get: function() {
                        return this._right;
                    },
                    set: function(value) {
                        this._right = value;
                    },
                    tooltip: "i18n:COMPONENT.widget.right"
                },
                horizontalCenter: {
                    get: function() {
                        return this._horizontalCenter;
                    },
                    set: function(value) {
                        this._horizontalCenter = value;
                    },
                    tooltip: "i18n:COMPONENT.widget.horizontal_center"
                },
                verticalCenter: {
                    get: function() {
                        return this._verticalCenter;
                    },
                    set: function(value) {
                        this._verticalCenter = value;
                    },
                    tooltip: "i18n:COMPONENT.widget.vertical_center"
                },
                isAbsoluteHorizontalCenter: {
                    get: function() {
                        return this._isAbsHorizontalCenter;
                    },
                    set: function(value) {
                        this._isAbsHorizontalCenter = value;
                    },
                    animatable: false
                },
                isAbsoluteVerticalCenter: {
                    get: function() {
                        return this._isAbsVerticalCenter;
                    },
                    set: function(value) {
                        this._isAbsVerticalCenter = value;
                    },
                    animatable: false
                },
                isAbsoluteTop: {
                    get: function() {
                        return this._isAbsTop;
                    },
                    set: function(value) {
                        this._isAbsTop = value;
                    },
                    animatable: false
                },
                isAbsoluteBottom: {
                    get: function() {
                        return this._isAbsBottom;
                    },
                    set: function(value) {
                        this._isAbsBottom = value;
                    },
                    animatable: false
                },
                isAbsoluteLeft: {
                    get: function() {
                        return this._isAbsLeft;
                    },
                    set: function(value) {
                        this._isAbsLeft = value;
                    },
                    animatable: false
                },
                isAbsoluteRight: {
                    get: function() {
                        return this._isAbsRight;
                    },
                    set: function(value) {
                        this._isAbsRight = value;
                    },
                    animatable: false
                },
                isAlignOnce: {
                    "default": true,
                    tooltip: "i18n:COMPONENT.widget.align_once",
                    displayName: "AlignOnce"
                },
                _alignFlags: 0,
                _left: 0,
                _right: 0,
                _top: 0,
                _bottom: 0,
                _verticalCenter: 0,
                _horizontalCenter: 0,
                _isAbsLeft: true,
                _isAbsRight: true,
                _isAbsTop: true,
                _isAbsBottom: true,
                _isAbsHorizontalCenter: true,
                _isAbsVerticalCenter: true,
                _originalWidth: 0,
                _originalHeight: 0
            },
            onEnable: function() {
                WidgetManager.add(this);
            },
            onDisable: function() {
                WidgetManager.remove(this);
            },
            _setAlign: function(flag, isAlign) {
                var current = (this._alignFlags & flag) > 0;
                if (isAlign == current) {
                    return;
                }
                var isHorizontal = (flag & LEFT_RIGHT) > 0;
                if (isAlign) {
                    this._alignFlags |= flag;
                    if (isHorizontal) {
                        this.isAlignHorizontalCenter = false;
                        this.isStretchWidth && (this._originalWidth = this.node.width);
                    } else {
                        this.isAlignVerticalCenter = false;
                        this.isStretchHeight && (this._originalHeight = this.node.height);
                    }
                } else {
                    isHorizontal ? this.isStretchWidth && (this.node.width = this._originalWidth) : this.isStretchHeight && (this.node.height = this._originalHeight);
                    this._alignFlags &= ~flag;
                }
            }
        });
        cc.Widget = module.exports = Widget;
    }, {
        "../base-ui/CCWidgetManager": 32,
        "./CCComponent": 35
    } ],
    46: [ function(require, module, exports) {
        require("./CCComponent");
        require("./CCRendererInSG");
        require("./CCRendererUnderSG");
        require("./CCComponentEventHandler");
        require("./missing-script");
        module.exports = [ require("./CCSprite"), require("./CCWidget"), require("./CCCanvas"), require("./CCAnimation"), require("./CCLabel"), require("./CCLayout"), require("./CCSpriteDistortion"), require("./CCLabelOutline") ];
    }, {
        "./CCAnimation": 33,
        "./CCCanvas": 34,
        "./CCComponent": 35,
        "./CCComponentEventHandler": 36,
        "./CCLabel": 37,
        "./CCLabelOutline": 38,
        "./CCLayout": 39,
        "./CCRendererInSG": 40,
        "./CCRendererUnderSG": 41,
        "./CCSprite": 43,
        "./CCSpriteDistortion": 44,
        "./CCWidget": 45,
        "./missing-script": 47
    } ],
    47: [ function(require, module, exports) {
        var JS = cc.js;
        var MissingClass = cc.Class({
            name: "cc.MissingClass",
            properties: {
                _$erialized: {
                    "default": null,
                    visible: false,
                    editorOnly: true
                }
            }
        });
        var MissingScript = cc.Class({
            name: "cc.MissingScript",
            "extends": cc.Component,
            editor: {
                inspector: "packages://inspector/inspectors/comps/missing-script.js"
            },
            properties: {
                compiled: {
                    "default": false,
                    serializable: false
                },
                _$erialized: {
                    "default": null,
                    visible: false,
                    editorOnly: true
                }
            },
            ctor: false,
            statics: {
                safeFindClass: function(id, data) {
                    var cls = JS._getClassById(id);
                    if (cls) {
                        return cls;
                    }
                    if (id) {
                        cc.deserialize.reportMissingClass(id);
                        return data.node && false ? MissingScript : MissingClass;
                    }
                    return null;
                }
            },
            onLoad: function() {
                cc.warn('Script attached to "%s" is missing or invalid.', this.node.name);
            }
        });
        cc._MissingScript = module.exports = MissingScript;
    }, {} ],
    48: [ function(require, module, exports) {
        var JS = cc.js;
        var CallbacksHandler = require("../platform/callbacks-invoker").CallbacksHandler;
        var REMOVE_PLACEHOLDER = CallbacksHandler.REMOVE_PLACEHOLDER;
        function EventListeners() {
            CallbacksHandler.call(this);
            this._invoking = {};
            this._toRemove = {};
            this._toRemoveAll = null;
        }
        JS.extend(EventListeners, CallbacksHandler);
        EventListeners.prototype.invoke = function(event) {
            var key = event.type, list = this._callbackTable[key], i, endIndex, callingFunc, target, hasTarget;
            this._invoking[key] = true;
            if (list) {
                if (1 === list.length) {
                    callingFunc = list[0];
                    callingFunc !== REMOVE_PLACEHOLDER && callingFunc.call(event.currentTarget, event);
                } else {
                    endIndex = list.length - 1;
                    if (key === cc.Director.EVENT_COMPONENT_UPDATE) {
                        var dt = event.detail;
                        for (i = 1; i <= endIndex; i += 2) {
                            target = list[i];
                            target !== REMOVE_PLACEHOLDER && target.update(dt);
                        }
                    } else {
                        for (i = 0; i <= endIndex; ) {
                            callingFunc = list[i];
                            var increment = 1;
                            if (callingFunc !== REMOVE_PLACEHOLDER) {
                                target = list[i + 1];
                                hasTarget = target && "object" == typeof target;
                                if (hasTarget) {
                                    callingFunc.call(target, event);
                                    increment = 2;
                                } else {
                                    callingFunc.call(event.currentTarget, event);
                                }
                                if (event._propagationImmediateStopped || i + increment > endIndex) {
                                    break;
                                }
                            }
                            i += increment;
                        }
                    }
                }
            }
            this._invoking[key] = false;
            this._clearToRemove(key);
        };
        module.exports = EventListeners;
    }, {
        "../platform/callbacks-invoker": 76
    } ],
    49: [ function(require, module, exports) {
        var EventListeners = require("./event-listeners");
        require("./event");
        var JS = cc.js;
        var cachedArray = new Array(16);
        cachedArray.length = 0;
        var _doDispatchEvent = function(owner, event) {
            var target, i;
            event.target = owner;
            cachedArray.length = 0;
            owner._getCapturingTargets(event.type, cachedArray);
            event.eventPhase = 1;
            for (i = cachedArray.length - 1; i >= 0; --i) {
                target = cachedArray[i];
                if (target._isTargetActive(event.type) && target._capturingListeners) {
                    event.currentTarget = target;
                    target._capturingListeners.invoke(event);
                    if (event._propagationStopped) {
                        cachedArray.length = 0;
                        return;
                    }
                }
            }
            cachedArray.length = 0;
            if (owner._isTargetActive(event.type)) {
                event.eventPhase = 2;
                event.currentTarget = owner;
                owner._capturingListeners && owner._capturingListeners.invoke(event);
                !event._propagationImmediateStopped && owner._bubblingListeners && owner._bubblingListeners.invoke(event);
            }
            if (!event._propagationStopped && event.bubbles) {
                owner._getBubblingTargets(event.type, cachedArray);
                event.eventPhase = 3;
                for (i = 0; i < cachedArray.length; ++i) {
                    target = cachedArray[i];
                    if (target._isTargetActive(event.type) && target._bubblingListeners) {
                        event.currentTarget = target;
                        target._bubblingListeners.invoke(event);
                        if (event._propagationStopped) {
                            cachedArray.length = 0;
                            return;
                        }
                    }
                }
            }
            cachedArray.length = 0;
        };
        var EventTarget = function() {
            this._capturingListeners = null;
            this._bubblingListeners = null;
        };
        JS.mixin(EventTarget.prototype, {
            hasEventListener: function(type, checkCapture) {
                if (checkCapture && this._capturingListeners && this._capturingListeners.has(type)) {
                    return true;
                }
                if (!checkCapture && this._bubblingListeners && this._bubblingListeners.has(type)) {
                    return true;
                }
                return false;
            },
            on: function(type, callback, target, useCapture) {
                if ("boolean" == typeof target) {
                    useCapture = target;
                    target = void 0;
                } else {
                    useCapture = !!useCapture;
                }
                if (!callback) {
                    cc.error("Callback of event must be non-nil");
                    return;
                }
                var listeners = null;
                listeners = useCapture ? this._capturingListeners = this._capturingListeners || new EventListeners() : this._bubblingListeners = this._bubblingListeners || new EventListeners();
                if (!listeners.has(type, callback, target)) {
                    listeners.add(type, callback, target);
                    target && target.__eventTargets && target.__eventTargets.push(this);
                }
                return callback;
            },
            off: function(type, callback, target, useCapture) {
                if ("boolean" == typeof target) {
                    useCapture = target;
                    target = void 0;
                } else {
                    useCapture = !!useCapture;
                }
                if (!callback) {
                    return;
                }
                var listeners = useCapture ? this._capturingListeners : this._bubblingListeners;
                if (listeners) {
                    listeners.remove(type, callback, target);
                    if (target && target.__eventTargets) {
                        var index = target.__eventTargets.indexOf(this);
                        target.__eventTargets.splice(index, 1);
                    }
                }
            },
            targetOff: function(target) {
                this._capturingListeners && this._capturingListeners.removeAll(target);
                this._bubblingListeners && this._bubblingListeners.removeAll(target);
            },
            once: function(type, callback, target, useCapture) {
                var self = this;
                var cb = function(event) {
                    self.off(type, cb, target, useCapture);
                    callback.call(this, event);
                };
                this.on(type, cb, target, useCapture);
            },
            dispatchEvent: function(event) {
                _doDispatchEvent(this, event);
                cachedArray.length = 0;
            },
            emit: function(message, detail) {
                if ("string" != typeof message) {
                    cc.error("The message must be provided");
                    return;
                }
                var caplisteners = this._capturingListeners && this._capturingListeners._callbackTable[message];
                var bublisteners = this._bubblingListeners && this._bubblingListeners._callbackTable[message];
                if (!(caplisteners && 0 !== caplisteners.length || bublisteners && 0 !== bublisteners.length)) {
                    return;
                }
                var event = new cc.Event.EventCustom(message);
                event.detail = detail;
                event.eventPhase = 2;
                event.target = event.currentTarget = this;
                caplisteners && this._capturingListeners.invoke(event);
                bublisteners && !event._propagationImmediateStopped && this._bubblingListeners.invoke(event);
            },
            _isTargetActive: function(type) {
                return true;
            },
            _getCapturingTargets: function(type, array) {},
            _getBubblingTargets: function(type, array) {}
        });
        EventTarget.prototype._EventTargetOn = EventTarget.prototype.on;
        EventTarget.prototype._EventTargetOnce = EventTarget.prototype.once;
        EventTarget.prototype._EventTargetOff = EventTarget.prototype.off;
        EventTarget.prototype._EventTargetTargetOff = EventTarget.prototype.targetOff;
        cc.EventTarget = module.exports = EventTarget;
    }, {
        "./event": 50,
        "./event-listeners": 48
    } ],
    50: [ function(require, module, exports) {
        var JS = require("../platform/js");
        cc.Event = function(type, bubbles) {
            this.type = type;
            this.bubbles = !!bubbles;
            this.target = null;
            this.currentTarget = null;
            this.eventPhase = 0;
            this._propagationStopped = false;
            this._propagationImmediateStopped = false;
        };
        cc.Event.prototype = {
            constructor: cc.Event,
            unuse: function() {
                this.type = cc.Event.NO_TYPE;
                this.target = null;
                this.currentTarget = null;
                this.eventPhase = cc.Event.NONE;
                this._propagationStopped = false;
                this._propagationImmediateStopped = false;
            },
            reuse: function(type, bubbles) {
                this.type = type;
                this.bubbles = bubbles || false;
            },
            stopPropagation: function() {
                this._propagationStopped = true;
            },
            stopPropagationImmediate: function() {
                this._propagationImmediateStopped = true;
            },
            isStopped: function() {
                return this._propagationStopped || this._propagationImmediateStopped;
            },
            getCurrentTarget: function() {
                return this.currentTarget;
            },
            getType: function() {
                return this.type;
            }
        };
        cc.Event.NO_TYPE = "no_type";
        cc.Event.NONE = 0;
        cc.Event.CAPTURING_PHASE = 1;
        cc.Event.AT_TARGET = 2;
        cc.Event.BUBBLING_PHASE = 3;
        var EventCustom = function(type, bubbles) {
            cc.Event.call(this, type, bubbles);
            this.detail = null;
        };
        JS.extend(EventCustom, cc.Event);
        JS.mixin(EventCustom.prototype, {
            setUserData: function(data) {
                this.detail = data;
            },
            getUserData: function() {
                return this.detail;
            },
            getEventName: cc.Event.prototype.getType
        });
        cc.Event.EventCustom = EventCustom;
        module.exports = cc.Event;
    }, {
        "../platform/js": 81
    } ],
    51: [ function(require, module, exports) {
        require("./event.js");
        require("./event-listeners.js");
        require("./event-target.js");
    }, {
        "./event-listeners.js": 48,
        "./event-target.js": 49,
        "./event.js": 50
    } ],
    52: [ function(require, module, exports) {
        require("./platform");
        require("./assets");
        require("./CCNode");
        require("./CCScene");
        require("./components");
        require("./base-ui/CCWidgetManager");
    }, {
        "./CCNode": 21,
        "./CCScene": 22,
        "./assets": 31,
        "./base-ui/CCWidgetManager": 32,
        "./components": 46,
        "./platform": 79
    } ],
    53: [ function(require, module, exports) {
        var JS = require("../platform/js");
        var Pipeline = require("./pipeline");
        var Downloader = require("./downloader");
        var Loader = require("./loader");
        var AssetTable = require("./asset-table");
        var callInNextTick = require("../platform/utils").callInNextTick;
        var AutoReleaseUtils = require("./auto-release-utils");
        var resources = new AssetTable();
        function CCLoader() {
            var downloader = new Downloader();
            var loader = new Loader();
            Pipeline.call(this, [ downloader, loader ]);
            this.downloader = downloader;
            this.loader = loader;
            this._autoReleaseSetting = {};
        }
        JS.extend(CCLoader, Pipeline);
        JS.mixin(CCLoader.prototype, {
            getXMLHttpRequest: Pipeline.getXMLHttpRequest,
            addDownloadHandlers: function(extMap) {
                this.downloader.addHandlers(extMap);
            },
            addLoadHandlers: function(extMap) {
                this.loader.addHandlers(extMap);
            },
            load: function(resources, progressCallback, completeCallback) {
                if ("string" == typeof resources && resources.startsWith("resources://")) {
                    cc.warn('Sorry, the "resources://" protocol is obsoleted, use cc.loader.loadRes instead please.');
                    this.loadRes(resources.slice("resources://".length), progressCallback, completeCallback);
                    return;
                }
                if (void 0 === completeCallback) {
                    completeCallback = progressCallback;
                    progressCallback = null;
                }
                var self = this;
                var singleRes = false;
                if (!(resources instanceof Array)) {
                    resources = resources ? [ resources ] : [];
                    singleRes = true;
                }
                if (0 === resources.length) {
                    completeCallback && callInNextTick(function() {
                        completeCallback.call(self, null, self._items);
                        completeCallback = null;
                    });
                    return;
                }
                var error = null;
                var checker = {};
                var totalCount = 0;
                var completedCount = 0;
                function loadedCheck(item) {
                    checker[item.id] = item;
                    if (item.error) {
                        error = error || [];
                        error.push(item.id);
                    }
                    completedCount++;
                    progressCallback && progressCallback.call(self, completedCount, totalCount, item);
                    for (var url in checker) {
                        if (!checker[url]) {
                            return;
                        }
                    }
                    completeCallback && callInNextTick(function() {
                        singleRes ? completeCallback.call(self, item.error, item.content) : completeCallback.call(self, error, self._items);
                        completeCallback = null;
                    });
                }
                for (var i = 0; i < resources.length; ++i) {
                    var url = resources[i].id || resources[i];
                    if ("string" != typeof url) {
                        continue;
                    }
                    var item = this.getItem(url);
                    if (!item || item && !item.complete) {
                        this._items.addListener(url, loadedCheck);
                        checker[url] = null;
                        totalCount++;
                    } else {
                        if (item && item.complete) {
                            checker[url] = item;
                            totalCount++;
                            completedCount++;
                        }
                    }
                }
                if (totalCount === completedCount) {
                    var id = resources[0].id || resources[0];
                    var content = this._items.getContent(id);
                    var error = this._items.getError(id);
                    completeCallback && callInNextTick(function() {
                        singleRes ? completeCallback.call(self, error, content) : completeCallback.call(self, null, self._items);
                        completeCallback = null;
                    });
                } else {
                    this.flowIn(resources);
                }
            },
            _resources: resources,
            _getResUuid: function(url, type) {
                var uuid = resources.getUuid(url, type);
                if (!uuid) {
                    var extname = cc.path.extname(url);
                    if (extname) {
                        url = url.slice(0, -extname.length);
                        uuid = resources.getUuid(url, type);
                        uuid && cc.warn("loadRes: should not specify the extname in " + url + extname);
                    }
                }
                return uuid;
            },
            loadRes: function(url, type, completeCallback) {
                if (!completeCallback && type && !cc.isChildClassOf(type, cc.RawAsset)) {
                    completeCallback = type;
                    type = null;
                }
                var self = this;
                var uuid = self._getResUuid(url, type);
                uuid ? this.load({
                    id: uuid,
                    type: "uuid",
                    uuid: uuid
                }, function(err, asset) {
                    asset && self.setAutoReleaseRecursively(uuid, false);
                    completeCallback && completeCallback(err, asset);
                }) : callInNextTick(function() {
                    var info;
                    info = type ? cc.js.getClassName(type) + ' in "' + url + '" does not exist.' : 'Resources url "' + url + '" does not exist.';
                    completeCallback && completeCallback(new Error(info), null);
                });
            },
            loadResAll: function(url, type, completeCallback) {
                if (!completeCallback && type && !cc.isChildClassOf(type, cc.RawAsset)) {
                    completeCallback = type;
                    type = null;
                }
                var self = this;
                var uuids = resources.getUuidArray(url, type);
                var remain = uuids.length;
                if (remain > 0) {
                    var results = [];
                    var aborted = false;
                    function loaded(err, res) {
                        if (aborted) {
                            return;
                        }
                        if (err) {
                            aborted = true;
                            completeCallback && completeCallback(err, null);
                            return;
                        }
                        results.push(res);
                        --remain;
                        if (0 === remain) {
                            for (var i = 0; i < uuids.length; i++) {
                                self.setAutoReleaseRecursively(uuids[i], false);
                            }
                            completeCallback && completeCallback(null, results);
                        }
                    }
                    for (var i = 0, len = remain; i < len; ++i) {
                        var uuid = uuids[i];
                        self.load({
                            id: uuid,
                            type: "uuid",
                            uuid: uuid
                        }, loaded);
                    }
                } else {
                    callInNextTick(function() {
                        completeCallback && completeCallback(null, []);
                    });
                }
            },
            getRes: function(url) {
                var item = this._items.getContent(url);
                if (!item) {
                    var uuid = this._getResUuid(url);
                    item = this._items.getContent(uuid);
                }
                return item;
            },
            getResCount: function() {
                return this._items.totalCount;
            },
            getItem: function(url) {
                var item = this._items.map[url];
                if (!item) {
                    return item;
                }
                item.alias && (item = this._items.map[item.alias]);
                return item;
            },
            release: function(url) {
                this.removeItem(url);
            },
            releaseAsset: function(asset) {
                var uuid = asset._uuid;
                uuid && this.removeItem(uuid);
            },
            releaseRes: function(url) {
                var uuid = this._getResUuid(url);
                uuid ? this.removeItem(uuid) : cc.error('Resources url "%s" does not exist.', url);
            },
            releaseAll: function() {
                this.clear();
            },
            _baseRemoveItem: Pipeline.prototype.removeItem,
            removeItem: function(key) {
                var removed = this._baseRemoveItem(key);
                delete this._autoReleaseSetting[key];
                return removed;
            },
            setAutoRelease: function(assetOrUrlOrUuid, autoRelease) {
                var key = AutoReleaseUtils.getKey(this, assetOrUrlOrUuid);
                key ? this._autoReleaseSetting[key] = !!autoRelease : cc.warn("No need to release non-cached asset.");
            },
            setAutoReleaseRecursively: function(assetOrUrlOrUuid, autoRelease) {
                autoRelease = !!autoRelease;
                var key = AutoReleaseUtils.getKey(this, assetOrUrlOrUuid);
                if (key) {
                    this._autoReleaseSetting[key] = autoRelease;
                    var depends = AutoReleaseUtils.getDependsRecursively(key);
                    for (var i = 0; i < depends.length; i++) {
                        var depend = depends[i];
                        this._autoReleaseSetting[depend] = autoRelease;
                    }
                } else {
                    cc.warn("No need to release non-cached asset.");
                }
            },
            isAutoRelease: function(assetOrUrl) {
                var key = AutoReleaseUtils.getKey(this, assetOrUrl);
                if (key) {
                    return !!this._autoReleaseSetting[key];
                }
                return false;
            }
        });
        cc.loader = new CCLoader();
        module.exports = cc.loader;
    }, {
        "../platform/js": 81,
        "../platform/utils": 85,
        "./asset-table": 54,
        "./auto-release-utils": 56,
        "./downloader": 57,
        "./loader": 60,
        "./pipeline": 63
    } ],
    54: [ function(require, module, exports) {
        function Entry(uuid, type) {
            this.uuid = uuid;
            this.type = type;
        }
        function AssetTable() {
            this._pathToUuid = {};
        }
        function isMatchByWord(path, test) {
            if (path.length > test.length) {
                var nextAscii = path.charCodeAt(test.length);
                return 46 === nextAscii || 47 === nextAscii;
            }
            return true;
        }
        cc.js.mixin(AssetTable.prototype, {
            getUuid: function(path, type) {
                path = cc.url.normalize(path);
                var item = this._pathToUuid[path];
                if (item) {
                    if (Array.isArray(item)) {
                        if (!type) {
                            return item[0].uuid;
                        }
                        for (var i = 0; i < item.length; i++) {
                            var entry = item[i];
                            if (cc.isChildClassOf(entry.type, type)) {
                                return entry.uuid;
                            }
                        }
                    } else {
                        if (!type || cc.isChildClassOf(item.type, type)) {
                            return item.uuid;
                        }
                    }
                }
                return "";
            },
            getUuidArray: function(path, type) {
                path = cc.url.normalize(path);
                "/" === path[path.length - 1] && (path = path.slice(0, -1));
                var path2uuid = this._pathToUuid;
                var uuids = [];
                var p, i;
                if (type) {
                    var isChildClassOf = cc.isChildClassOf;
                    for (p in path2uuid) {
                        if (p.startsWith(path) && isMatchByWord(p, path)) {
                            var item = path2uuid[p];
                            if (Array.isArray(item)) {
                                for (i = 0; i < item.length; i++) {
                                    var entry = item[i];
                                    isChildClassOf(entry.type, type) && uuids.push(entry.uuid);
                                }
                            } else {
                                isChildClassOf(item.type, type) && uuids.push(item.uuid);
                            }
                        }
                    }
                } else {
                    for (p in path2uuid) {
                        if (p.startsWith(path) && isMatchByWord(p, path)) {
                            var item = path2uuid[p];
                            if (Array.isArray(item)) {
                                for (i = 0; i < item.length; i++) {
                                    uuids.push(item[i].uuid);
                                }
                            } else {
                                uuids.push(item.uuid);
                            }
                        }
                    }
                }
                return uuids;
            },
            getAllPaths: function() {
                return Object.keys(this._pathToUuid);
            },
            add: function(path, uuid, type, isMainAsset) {
                path = path.substring(0, path.length - cc.path.extname(path).length);
                var newEntry = new Entry(uuid, type);
                var pathToUuid = this._pathToUuid;
                var exists = pathToUuid[path];
                exists ? Array.isArray(exists) ? isMainAsset ? exists.unshift(newEntry) : exists.push(newEntry) : isMainAsset ? pathToUuid[path] = [ newEntry, exists ] : pathToUuid[path] = [ exists, newEntry ] : pathToUuid[path] = newEntry;
            },
            reset: function() {
                this._pathToUuid = {};
            }
        });
        module.exports = AssetTable;
    }, {} ],
    55: [ function(require, module, exports) {
        var Path = require("../utils/CCPath");
        var Sys = require("../platform/CCSys");
        var Pipeline = require("./pipeline");
        var __audioSupport = Sys.__audioSupport;
        var formatSupport = __audioSupport.format;
        var context = __audioSupport.context;
        function loadDomAudio(item, callback) {
            var dom = document.createElement("audio");
            dom.src = item.url;
            var clearEvent = function() {
                clearTimeout(timer);
                dom.removeEventListener("canplaythrough", success, false);
                dom.removeEventListener("error", failure, false);
                __audioSupport.USE_LOADER_EVENT && dom.removeEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
            };
            var timer = setTimeout(function() {
                0 === dom.readyState ? failure() : success();
            }, 8e3);
            var success = function() {
                clearEvent();
                item.element = dom;
                callback(null, item.url);
            };
            var failure = function() {
                clearEvent();
                cc.log("load audio failure - " + item.url);
            };
            dom.addEventListener("canplaythrough", success, false);
            dom.addEventListener("error", failure, false);
            __audioSupport.USE_LOADER_EVENT && dom.addEventListener(__audioSupport.USE_LOADER_EVENT, success, false);
        }
        function loadWebAudio(item, callback) {
            if (!context) {
                return;
            }
            var request = Pipeline.getXMLHttpRequest();
            request.open("GET", item.url, true);
            request.responseType = "arraybuffer";
            request.onload = function() {
                context["decodeAudioData"](request.response, function(buffer) {
                    item.buffer = buffer;
                    callback(null, item.url);
                }, function() {
                    callback("decode error - " + item.url, null);
                });
            };
            request.onerror = function() {
                callback("request error - " + item.url, null);
            };
            request.send();
        }
        function downloadAudio(item, callback) {
            if (0 === formatSupport.length) {
                return callback(new Error("Audio Downloader: audio not supported on this browser!"));
            }
            item.content = item.url;
            if (!__audioSupport.WEB_AUDIO) {
                return loadDomAudio(item, callback);
            }
            var request = Pipeline.getXMLHttpRequest();
            request.open("HEAD", item.url, true);
            request.onload = function() {
                var bit = this.getResponseHeader("Content-Length");
                if (bit > audioEngine._maxWebAudioSize) {
                    return loadDomAudio(item, callback);
                }
                return loadWebAudio(item, callback);
            };
            request.onerror = function() {
                var ERRSTR = "can not found the resource of audio! Last match url is : " + item.url;
                return callback({
                    status: 520,
                    errorMessage: ERRSTR
                }, null);
            };
            request.send();
        }
        module.exports = downloadAudio;
    }, {
        "../platform/CCSys": 71,
        "../utils/CCPath": 93,
        "./pipeline": 63
    } ],
    56: [ function(require, module, exports) {
        function parseDepends(key, parsed) {
            var item = cc.loader.getItem(key);
            if (item) {
                var depends = item.dependKeys;
                if (depends) {
                    for (var i = 0; i < depends.length; i++) {
                        var depend = depends[i];
                        if (!parsed[depend]) {
                            parsed[depend] = true;
                            parseDepends(depend, parsed);
                        }
                    }
                }
            }
        }
        function release(loader, key, nextSceneAssets) {
            if (!nextSceneAssets || nextSceneAssets.indexOf(key) === -1) {
                var item = loader.getItem(key);
                if (item) {
                    var removed = loader.removeItem(key);
                    var asset = item.content;
                    asset instanceof cc.Texture2D && cc.textureCache.removeTextureForKey(item.url);
                }
            }
        }
        module.exports = {
            getKey: function(loader, assetOrUrlOrUuid) {
                if (assetOrUrlOrUuid) {
                    if ("string" == typeof assetOrUrlOrUuid) {
                        var item = cc.loader.getItem(assetOrUrlOrUuid);
                        return item && item.url || assetOrUrlOrUuid;
                    }
                    if (assetOrUrlOrUuid instanceof cc.Asset) {
                        return assetOrUrlOrUuid._uuid;
                    }
                    if (assetOrUrlOrUuid instanceof cc.Texture2D) {
                        return assetOrUrlOrUuid.url;
                    }
                    if (cc.Audio && assetOrUrlOrUuid instanceof cc.Audio) {
                        return assetOrUrlOrUuid.src;
                    }
                    cc.warn("unknown asset type");
                }
                return "";
            },
            autoRelease: function(loader, oldSceneAssets, nextSceneAssets) {
                var releaseSettings = loader._autoReleaseSetting;
                var i, key;
                if (oldSceneAssets) {
                    for (i = 0; i < oldSceneAssets.length; i++) {
                        key = oldSceneAssets[i];
                        false !== releaseSettings[key] && release(loader, key, nextSceneAssets);
                    }
                }
                var keys = Object.keys(releaseSettings);
                for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    true === releaseSettings[key] && release(loader, key, nextSceneAssets);
                }
            },
            getDependsRecursively: function(key) {
                var depends = {};
                parseDepends(key, depends);
                return Object.keys(depends);
            }
        };
    }, {} ],
    57: [ function(require, module, exports) {
        var JS = require("../platform/js");
        var Path = require("../utils/CCPath");
        var Pipeline = require("./pipeline");
        var PackDownloader = require("./pack-downloader");
        var downloadText = require("./text-downloader");
        var urlAppendTimestamp = require("./utils").urlAppendTimestamp;
        var downloadAudio;
        downloadAudio = require("./audio-downloader");
        function downloadScript(item, callback, isAsync) {
            var url = item.url;
            require(url);
            callback(null, url);
        }
        function downloadImage(item, callback, isCrossOrigin) {
            callback(null, item.url);
        }
        function downloadFont(item, callback) {
            var url = item.url, type = item.type, name = item.name, srcs = item.srcs;
            if (name && srcs) {
                srcs.indexOf(url) === -1 && srcs.push(url);
            } else {
                type = cc.path.extname(url);
                name = cc.path.basename(url, type);
            }
            callback(null, null);
        }
        function downloadJson(item, callback) {
            var json = require(item.url + ".js");
            callback(null, json);
        }
        function downloadUuid(item, callback) {
            var uuid = item.id;
            var self = this;
            cc.AssetLibrary.queryAssetInfo(uuid, function(error, url, isRawAsset) {
                if (error) {
                    callback(error);
                } else {
                    item.url = url;
                    item.isRawAsset = isRawAsset;
                    if (isRawAsset) {
                        var ext = Path.extname(url).toLowerCase();
                        if (!ext) {
                            callback(new Error("Download Uuid: can not find type of raw asset[" + uuid + "]: " + url));
                            return;
                        }
                        ext = ext.substr(1);
                        self.pipeline._items.map[url] = {
                            id: url,
                            url: url,
                            type: ext,
                            error: null,
                            alias: item.id,
                            complete: true
                        };
                        var downloadFunc = self.extMap[ext] || self.extMap["default"];
                        item.type = ext;
                        downloadFunc(item, callback);
                    } else {
                        var loadByPack = PackDownloader.load(item, callback);
                        loadByPack || self.extMap["json"](item, callback);
                    }
                }
            });
        }
        var defaultMap = {
            js: downloadScript,
            png: downloadImage,
            jpg: downloadImage,
            bmp: downloadImage,
            jpeg: downloadImage,
            gif: downloadImage,
            ico: downloadImage,
            tiff: downloadImage,
            webp: downloadImage,
            image: downloadImage,
            mp3: downloadAudio,
            ogg: downloadAudio,
            wav: downloadAudio,
            mp4: downloadAudio,
            m4a: downloadAudio,
            txt: downloadText,
            xml: downloadText,
            vsh: downloadText,
            fsh: downloadText,
            atlas: downloadText,
            tmx: downloadText,
            tsx: downloadText,
            json: downloadJson,
            ExportJson: downloadText,
            plist: downloadText,
            fnt: downloadText,
            font: downloadFont,
            eot: downloadFont,
            ttf: downloadFont,
            woff: downloadFont,
            svg: downloadFont,
            ttc: downloadFont,
            uuid: downloadUuid,
            "default": downloadText
        };
        var ID = "Downloader";
        var Downloader = function(extMap) {
            this.id = ID;
            this.async = true;
            this.pipeline = null;
            this.maxConcurrent = cc.sys.isMobile ? 2 : 512;
            this._curConcurrent = 0;
            this._loadQueue = [];
            this.extMap = JS.mixin(extMap, defaultMap);
        };
        Downloader.ID = ID;
        JS.mixin(Downloader.prototype, {
            addHandlers: function(extMap) {
                JS.mixin(this.extMap, extMap);
            },
            handle: function(item, callback) {
                var self = this;
                var downloadFunc = this.extMap[item.type] || this.extMap["default"];
                if (this._curConcurrent < this.maxConcurrent) {
                    this._curConcurrent++;
                    downloadFunc.call(this, item, function(err, result) {
                        self._curConcurrent = Math.max(0, self._curConcurrent - 1);
                        while (self._curConcurrent < self.maxConcurrent) {
                            var nextOne = self._loadQueue.shift();
                            if (!nextOne) {
                                break;
                            }
                            self.handle(nextOne.item, nextOne.callback);
                        }
                        callback && callback(err, result);
                    });
                } else {
                    item.ignoreMaxConcurrency ? downloadFunc.call(this, item, function(err, result) {
                        callback && callback(err, result);
                    }) : this._loadQueue.push({
                        item: item,
                        callback: callback
                    });
                }
            }
        });
        Pipeline.Downloader = module.exports = Downloader;
    }, {
        "../platform/js": 81,
        "../utils/CCPath": 93,
        "./audio-downloader": 55,
        "./pack-downloader": 62,
        "./pipeline": 63,
        "./text-downloader": 64,
        "./utils": 65
    } ],
    58: [ function(require, module, exports) {
        require("./downloader");
        require("./loader");
        require("./json-unpacker");
        require("./loading-items");
        require("./pipeline");
        require("./CCLoader");
    }, {
        "./CCLoader": 53,
        "./downloader": 57,
        "./json-unpacker": 59,
        "./loader": 60,
        "./loading-items": 61,
        "./pipeline": 63
    } ],
    59: [ function(require, module, exports) {
        function JsonUnpacker() {
            this.jsons = {};
        }
        JsonUnpacker.prototype.read = function(indices, data) {
            var jsons = "string" == typeof data ? JSON.parse(data) : data;
            jsons.length !== indices.length && cc.error("Pack indices and data do not match in size");
            for (var i = 0; i < indices.length; i++) {
                var key = indices[i];
                var json = jsons[i];
                this.jsons[key] = json;
            }
        };
        JsonUnpacker.prototype.retrieve = function(key) {
            return this.jsons[key] || null;
        };
        module.exports = JsonUnpacker;
    }, {} ],
    60: [ function(require, module, exports) {
        var JS = require("../platform/js");
        var Pipeline = require("./pipeline");
        var loadUuid = require("./uuid-loader");
        function loadNothing(item, callback) {
            callback(null, null);
        }
        function loadJSON(item, callback) {
            if ("object" == typeof item.content) {
                callback(null, item.content);
                return;
            }
            "string" != typeof item.content && callback(new Error("JSON Loader: Input item doesn't contain string content"));
            try {
                var result = JSON.parse(item.content);
                callback(null, result);
            } catch (e) {
                callback(new Error("JSON Loader: Parse json [" + item.id + "] failed : " + e));
            }
        }
        function loadImage(item, callback) {
            var url = item.url;
            callback(null, url);
        }
        function loadPlist(item, callback) {
            "string" != typeof item.content && callback(new Error("Plist Loader: Input item doesn't contain string content"));
            var result = cc.plistParser.parse(item.content);
            result ? callback(null, result) : callback(new Error("Plist Loader: Parse [" + item.id + "] failed"));
        }
        var fntRE = {
            INFO_EXP: /info [^\n]*(\n|$)/gi,
            COMMON_EXP: /common [^\n]*(\n|$)/gi,
            PAGE_EXP: /page [^\n]*(\n|$)/gi,
            CHAR_EXP: /char [^\n]*(\n|$)/gi,
            KERNING_EXP: /kerning [^\n]*(\n|$)/gi,
            ITEM_EXP: /\w+=[^ \r\n]+/gi,
            INT_EXP: /^[\-]?\d+$/
        };
        function _parseFntStrToObj(str) {
            var arr = str.match(fntRE.ITEM_EXP);
            var obj = {};
            if (arr) {
                for (var i = 0, li = arr.length; i < li; i++) {
                    var tempStr = arr[i];
                    var index = tempStr.indexOf("=");
                    var key = tempStr.substring(0, index);
                    var value = tempStr.substring(index + 1);
                    value.match(fntRE.INT_EXP) ? value = parseInt(value) : '"' === value[0] && (value = value.substring(1, value.length - 1));
                    obj[key] = value;
                }
            }
            return obj;
        }
        function loadFnt(item, callback) {
            var fntStr = item.content;
            var url = item.url;
            var fnt = {}, i, li;
            var infoObj = _parseFntStrToObj(fntStr.match(fntRE.INFO_EXP)[0]);
            var paddingArr = infoObj["padding"].split(",");
            var padding = {
                left: parseInt(paddingArr[0]),
                top: parseInt(paddingArr[1]),
                right: parseInt(paddingArr[2]),
                bottom: parseInt(paddingArr[3])
            };
            var commonObj = _parseFntStrToObj(fntStr.match(fntRE.COMMON_EXP)[0]);
            fnt.commonHeight = commonObj["lineHeight"];
            fnt.fontSize = infoObj["size"];
            if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                var texSize = cc.configuration.getMaxTextureSize();
                (commonObj["scaleW"] > texSize.width || commonObj["scaleH"] > texSize.height) && cc.log("cc.LabelBMFont._parseCommonArguments(): page can't be larger than supported");
            }
            1 !== commonObj["pages"] && cc.log("cc.LabelBMFont._parseCommonArguments(): only supports 1 page");
            var pageObj = _parseFntStrToObj(fntStr.match(fntRE.PAGE_EXP)[0]);
            0 !== pageObj["id"] && cc.log("cc.LabelBMFont._parseImageFileName() : file could not be found");
            fnt.atlasName = cc.path.changeBasename(url, pageObj["file"]);
            var charLines = fntStr.match(fntRE.CHAR_EXP);
            var fontDefDictionary = fnt.fontDefDictionary = {};
            for (i = 0, li = charLines.length; i < li; i++) {
                var charObj = _parseFntStrToObj(charLines[i]);
                var charId = charObj["id"];
                fontDefDictionary[charId] = {
                    rect: {
                        x: charObj["x"],
                        y: charObj["y"],
                        width: charObj["width"],
                        height: charObj["height"]
                    },
                    xOffset: charObj["xoffset"],
                    yOffset: charObj["yoffset"],
                    xAdvance: charObj["xadvance"]
                };
            }
            var kerningDict = fnt.kerningDict = {};
            var kerningLines = fntStr.match(fntRE.KERNING_EXP);
            if (kerningLines) {
                for (i = 0, li = kerningLines.length; i < li; i++) {
                    var kerningObj = _parseFntStrToObj(kerningLines[i]);
                    kerningDict[kerningObj["first"] << 16 | 65535 & kerningObj["second"]] = kerningObj["amount"];
                }
            }
            callback(null, fnt);
        }
        var defaultMap = {
            png: loadImage,
            jpg: loadImage,
            bmp: loadImage,
            jpeg: loadImage,
            gif: loadImage,
            ico: loadImage,
            tiff: loadImage,
            webp: loadImage,
            image: loadImage,
            json: loadJSON,
            ExportJson: loadJSON,
            plist: loadPlist,
            fnt: loadFnt,
            uuid: loadUuid,
            prefab: loadUuid,
            fire: loadUuid,
            scene: loadUuid,
            "default": loadNothing
        };
        var ID = "Loader";
        var Loader = function(extMap) {
            this.id = ID;
            this.async = true;
            this.pipeline = null;
            this.extMap = JS.mixin(extMap, defaultMap);
        };
        Loader.ID = ID;
        JS.mixin(Loader.prototype, {
            addHandlers: function(extMap) {
                this.extMap = JS.mixin(this.extMap, extMap);
            },
            handle: function(item, callback) {
                var loadFunc = this.extMap[item.type] || this.extMap["default"];
                loadFunc.call(this, item, function(err, result) {
                    err ? callback && callback(err) : callback && callback(null, result);
                });
            }
        });
        Pipeline.Loader = module.exports = Loader;
    }, {
        "../platform/js": 81,
        "./pipeline": 63,
        "./uuid-loader": 66
    } ],
    61: [ function(require, module, exports) {
        var CallbacksInvoker = require("../platform/callbacks-invoker");
        var JS = require("../platform/js");
        var LoadingItems = function() {
            CallbacksInvoker.call(this);
            this.map = {};
            this.completed = {};
            this.totalCount = 0;
            this.completedCount = 0;
        };
        JS.mixin(LoadingItems.prototype, CallbacksInvoker.prototype, {
            append: function(items) {
                var list = [];
                for (var i = 0; i < items.length; ++i) {
                    var item = items[i];
                    var id = item.id;
                    if (!this.map[id]) {
                        this.map[item.id] = item;
                        list.push(item);
                    }
                }
                this.totalCount += list.length;
                return list;
            },
            isCompleted: function() {
                return this.completedCount >= this.totalCount;
            },
            isItemCompleted: function(id) {
                return !!this.completed[id];
            },
            exists: function(id) {
                return !!this.map[id];
            },
            getContent: function(id) {
                var item = this.map[id];
                var ret = null;
                item && (item.content ? ret = item.content : item.alias && (ret = this.getContent(item.alias)));
                return ret;
            },
            getError: function(id) {
                var item = this.map[id];
                var ret = null;
                item && (item.error ? ret = item.error : item.alias && (ret = this.getError(item.alias)));
                return ret;
            },
            addListener: CallbacksInvoker.prototype.add,
            hasListener: CallbacksInvoker.prototype.has,
            removeListener: CallbacksInvoker.prototype.remove,
            removeAllListeners: CallbacksInvoker.prototype.removeAll,
            removeItem: function(url) {
                var item = this.map[url];
                if (!item) {
                    return;
                }
                if (!this.completed[item.alias || url]) {
                    return;
                }
                delete this.completed[url];
                delete this.map[url];
                if (item.alias) {
                    delete this.completed[item.alias];
                    delete this.map[item.alias];
                }
                this.completedCount--;
                this.totalCount--;
            },
            complete: function(url) {
                if (this.map[url] && !this.completed[url]) {
                    var item = this.map[url];
                    item.complete = true;
                    this.completed[url] = item;
                    this.completedCount++;
                }
            }
        });
        module.exports = LoadingItems;
    }, {
        "../platform/callbacks-invoker": 76,
        "../platform/js": 81
    } ],
    62: [ function(require, module, exports) {
        var JsonUnpacker = require("./json-unpacker");
        var uuidToPack = {};
        var packIndices = {};
        var globalUnpackers = {};
        function error(callback, uuid, packUuid) {
            callback(new Error("Can not retrieve " + uuid + " from packer " + packUuid));
        }
        module.exports = {
            initPacks: function(packs) {
                packIndices = packs;
                for (var packUuid in packs) {
                    var uuids = packs[packUuid];
                    for (var i = 0; i < uuids.length; i++) {
                        var uuid = uuids[i];
                        uuidToPack[uuid] = packUuid;
                    }
                }
            },
            _loadNewPack: function(uuid, packUuid, callback) {
                var packUrl = cc.AssetLibrary.getImportedDir(packUuid) + "/" + packUuid + ".json";
                cc.loader.load({
                    id: packUrl,
                    ignoreMaxConcurrency: true
                }, function(err, packJson) {
                    if (err) {
                        cc.error("Failed to download package for " + uuid);
                        return callback(err);
                    }
                    var unpacker = globalUnpackers[packUuid];
                    if (!unpacker) {
                        console.log("Load pack %s for %s", packUuid, uuid);
                        unpacker = globalUnpackers[packUuid] = new JsonUnpacker();
                    }
                    unpacker.read(packIndices[packUuid], packJson);
                    var json = unpacker.retrieve(uuid);
                    json ? callback(null, json) : error(callback, uuid, packUuid);
                });
            },
            load: function(item, callback) {
                var uuid = item.id;
                var packUuid = uuidToPack[uuid];
                if (!packUuid) {
                    return false;
                }
                var unpacker = globalUnpackers[packUuid];
                unpacker ? setTimeout(function() {
                    var json = unpacker.retrieve(uuid);
                    json ? callback(null, json) : error(callback, uuid, packUuid);
                }, 0) : this._loadNewPack(uuid, packUuid, callback);
                return true;
            }
        };
    }, {
        "./json-unpacker": 59
    } ],
    63: [ function(require, module, exports) {
        var JS = require("../platform/js");
        var Path = require("../utils/CCPath");
        var LoadingItems = require("./loading-items");
        var ItemState = {
            WORKING: 1,
            COMPLETE: 2,
            ERROR: 3
        };
        function asyncFlow(item) {
            var pipeId = this.id;
            var itemState = item.states[pipeId];
            var next = this.next;
            if (item.error || itemState === ItemState.WORKING || itemState === ItemState.ERROR) {
                return;
            }
            if (itemState === ItemState.COMPLETE) {
                next ? next.flowIn(item) : this.pipeline.flowOut(item);
            } else {
                item.states[pipeId] = ItemState.WORKING;
                var pipe = this;
                this.handle(item, function(err, result) {
                    if (err) {
                        item.error = err;
                        item.states[pipeId] = ItemState.ERROR;
                        pipe.pipeline.flowOut(item);
                    } else {
                        result && (item.content = result);
                        item.states[pipeId] = ItemState.COMPLETE;
                        next ? next.flowIn(item) : pipe.pipeline.flowOut(item);
                    }
                });
            }
        }
        function syncFlow(item) {
            var pipeId = this.id;
            var itemState = item.states[pipeId];
            var next = this.next;
            if (item.error || itemState === ItemState.WORKING || itemState === ItemState.ERROR) {
                return;
            }
            if (itemState === ItemState.COMPLETE) {
                next ? next.flowIn(item) : this.pipeline.flowOut(item);
            } else {
                item.states[pipeId] = ItemState.WORKING;
                var result = this.handle(item);
                if (result instanceof Error) {
                    item.error = result;
                    item.states[pipeId] = ItemState.ERROR;
                    this.pipeline.flowOut(item);
                } else {
                    result && (item.content = result);
                    item.states[pipeId] = ItemState.COMPLETE;
                    next ? next.flowIn(item) : this.pipeline.flowOut(item);
                }
            }
        }
        function isIdValid(id) {
            var realId = id.id || id;
            return "string" == typeof realId;
        }
        function createItem(id) {
            var result;
            if ("object" == typeof id && id.id) {
                id.type || (id.type = Path.extname(id.id).toLowerCase().substr(1));
                result = {
                    url: id.url || id.id,
                    error: null,
                    content: null,
                    complete: false,
                    states: {}
                };
                JS.mixin(result, id);
            } else {
                "string" == typeof id && (result = {
                    id: id,
                    url: id,
                    type: Path.extname(id).toLowerCase().substr(1),
                    error: null,
                    content: null,
                    complete: false,
                    states: {}
                });
            }
            if (result.skips) {
                for (var i = 0, l = result.skips.length; i < l; i++) {
                    var skip = result.skips[i];
                    result.states[skip] = ItemState.COMPLETE;
                }
            }
            return result;
        }
        function getXMLHttpRequest() {
            return XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
        }
        var Pipeline = function(pipes) {
            this._pipes = pipes;
            this._items = new LoadingItems();
            this._errorUrls = [];
            this._flowing = false;
            for (var i = 0; i < pipes.length; ++i) {
                var pipe = pipes[i];
                if (!pipe.handle || !pipe.id) {
                    continue;
                }
                pipe.pipeline = this;
                pipe.next = i < pipes.length - 1 ? pipes[i + 1] : null;
                pipe.flowIn = pipe.async ? asyncFlow : syncFlow;
            }
        };
        Pipeline.ItemState = new cc.Enum(ItemState);
        Pipeline.getXMLHttpRequest = getXMLHttpRequest;
        JS.mixin(Pipeline.prototype, {
            insertPipe: function(pipe, index) {
                if (!pipe.handle || !pipe.id) {
                    return;
                }
                pipe.pipeline = this;
                pipe.flowIn = pipe.async ? asyncFlow : syncFlow;
                if (index < this._pipes.length) {
                    pipe.next = this._pipes[index];
                    this._pipes.splice(index, 0, pipe);
                } else {
                    pipe.next = null;
                    this._pipes.push(pipe);
                }
            },
            appendPipe: function(pipe) {
                if (!pipe.handle || !pipe.id) {
                    return;
                }
                pipe.pipeline = this;
                pipe.next = null;
                pipe.flowIn = pipe.async ? asyncFlow : syncFlow;
                this._pipes.push(pipe);
            },
            flowIn: function(urlList) {
                var items = [], i, url, item;
                for (i = 0; i < urlList.length; ++i) {
                    url = urlList[i];
                    if (!isIdValid(url)) {
                        throw new Error("Pipeline flowIn: Invalid url: " + (url.id || url));
                    }
                    item = createItem(url);
                    items.push(item);
                }
                var acceptedItems = this._items.append(items);
                if (0 === this._pipes.length || 0 === acceptedItems.length) {
                    this.complete();
                    return acceptedItems;
                }
                this._flowing = true;
                var pipe = this._pipes[0];
                if (pipe) {
                    for (i = 0; i < acceptedItems.length; i++) {
                        pipe.flowIn(acceptedItems[i]);
                    }
                }
                return acceptedItems;
            },
            flowInDeps: function(urlList, callback) {
                var checker = {};
                var items = this._items;
                function loadedCheck(item) {
                    checker[item.id] = item;
                    for (var url in checker) {
                        if (!checker[url]) {
                            return;
                        }
                    }
                    callback && callback.call(this, checker);
                    callback = null;
                }
                for (var i = 0; i < urlList.length; ++i) {
                    var url = urlList[i].id || urlList[i];
                    if ("string" != typeof url || checker[url]) {
                        continue;
                    }
                    var item = items.map[url];
                    if (item) {
                        checker[url] = item;
                    } else {
                        items.addListener(url, loadedCheck);
                        checker[url] = null;
                    }
                }
                var accepted = this.flowIn(urlList);
                if (0 === accepted.length) {
                    callback && callback.call(this, checker);
                    callback = null;
                }
                return accepted;
            },
            complete: function() {
                if (this._items.isCompleted()) {
                    this._flowing = false;
                    var error = 0 === this._errorUrls.length ? null : this._errorUrls;
                    this.onComplete && this.onComplete(error, this._items);
                    for (var i = 0; i < this._errorUrls.length; ++i) {
                        var id = this._errorUrls[i];
                        this._items.removeItem(id);
                    }
                    this._errorUrls = [];
                }
            },
            flowOut: function(item) {
                var id = item.id;
                var items = this._items;
                var exists = items.map[id];
                if (!exists || exists.complete) {
                    return;
                }
                var errorListId = this._errorUrls.indexOf(id);
                item.error && errorListId === -1 ? this._errorUrls.push(id) : item.error || errorListId === -1 || this._errorUrls.splice(errorListId, 1);
                items.complete(item.id);
                this.onProgress && this.onProgress(items.completedCount, items.totalCount, item);
                this.complete();
                items.invokeAndRemove(id, item);
            },
            copyItemStates: function(srcItem, dstItems) {
                if (!(dstItems instanceof Array)) {
                    dstItems.states = srcItem.states;
                    return;
                }
                for (var i = 0; i < dstItems.length; ++i) {
                    dstItems[i].states = srcItem.states;
                }
            },
            isFlowing: function() {
                return this._flowing;
            },
            getItems: function() {
                return this._items;
            },
            getItem: function(url) {
                return this._items.map[url];
            },
            removeItem: function(url) {
                var item = this._items.map[url];
                if (item) {
                    if (!item.complete) {
                        item.error = new Error("Canceled manually");
                        this.flowOut(item);
                    }
                    this._items.removeItem(url);
                    return true;
                }
                return false;
            },
            clear: function() {
                if (this._flowing) {
                    var items = this._items.map;
                    for (var url in items) {
                        var item = items[url];
                        if (!item.complete) {
                            item.error = new Error("Canceled manually");
                            this.flowOut(item);
                        }
                    }
                }
                this._items = new LoadingItems();
                this._errorUrls = [];
                this._flowing = false;
            },
            onProgress: null,
            onComplete: null
        });
        cc.Pipeline = module.exports = Pipeline;
    }, {
        "../platform/js": 81,
        "../utils/CCPath": 93,
        "./loading-items": 61
    } ],
    64: [ function(require, module, exports) {
        var Pipeline = require("./pipeline");
        var urlAppendTimestamp = require("./utils").urlAppendTimestamp;
        module.exports = function(item, callback) {
            var url = item.url, xhr = Pipeline.getXMLHttpRequest(), errInfo = "Load " + url + " failed!";
            url = urlAppendTimestamp(url);
            xhr.open("GET", url, true);
            xhr.onload = function() {
                4 === xhr.readyState && (200 === xhr.status || 0 === xhr.status ? callback(null, xhr.responseText) : callback({
                    status: xhr.status,
                    errorMessage: errInfo
                }));
            };
            xhr.onerror = function() {
                callback({
                    status: xhr.status,
                    errorMessage: errInfo
                });
            };
            xhr.send(null);
        };
    }, {
        "./pipeline": 63,
        "./utils": 65
    } ],
    65: [ function(require, module, exports) {
        var _noCacheRex = /\?/;
        module.exports = {
            urlAppendTimestamp: function(url) {
                cc.game.config["noCache"] && "string" == typeof url && (url += _noCacheRex.test(url) ? "&_t=" + (new Date() - 0) : "?_t=" + (new Date() - 0));
                return url;
            }
        };
    }, {} ],
    66: [ function(require, module, exports) {
        var JS = require("../platform/js");
        require("../platform/deserialize");
        var _tdInfo = new cc.deserialize.Details();
        function isSceneObj(json) {
            var SCENE_ID = "cc.Scene";
            var PREFAB_ID = "cc.Prefab";
            return json && (json[0] && json[0].__type__ === SCENE_ID || json[1] && json[1].__type__ === SCENE_ID || json[0] && json[0].__type__ === PREFAB_ID);
        }
        function loadDepends(pipeline, item, asset, tdInfo, deferredLoadRawAssetsInRuntime, callback) {
            var uuid = item.id, uuidList = tdInfo.uuidList;
            var objList, propList, depends;
            var i, dependUuid;
            if (deferredLoadRawAssetsInRuntime) {
                objList = [];
                propList = [];
                depends = [];
                for (i = 0; i < uuidList.length; i++) {
                    dependUuid = uuidList[i];
                    var obj = tdInfo.uuidObjList[i];
                    var prop = tdInfo.uuidPropList[i];
                    var info = cc.AssetLibrary._getAssetInfoInRuntime(dependUuid);
                    if (info.raw) {
                        var url = info.url;
                        obj[prop] = url;
                    } else {
                        objList.push(obj);
                        propList.push(prop);
                        depends.push({
                            id: dependUuid,
                            type: "uuid",
                            uuid: dependUuid,
                            deferredLoadRaw: true
                        });
                    }
                }
            } else {
                objList = JS.array.copy(tdInfo.uuidObjList);
                propList = JS.array.copy(tdInfo.uuidPropList);
                depends = new Array(uuidList.length);
                for (i = 0; i < uuidList.length; i++) {
                    dependUuid = uuidList[i];
                    depends[i] = {
                        id: dependUuid,
                        type: "uuid",
                        uuid: dependUuid
                    };
                }
            }
            if (tdInfo.rawProp) {
                objList.push(asset);
                propList.push(tdInfo.rawProp);
                depends.push(item.url);
            }
            if (0 === depends.length) {
                asset._uuid = uuid;
                return callback(null, asset);
            }
            var dependKeys = item.dependKeys = [];
            pipeline.flowInDeps(depends, function(items) {
                var item;
                for (var src in items) {
                    item = items[src];
                    item.uuid && item.content && "object" == typeof item.content && (item.content._uuid = item.uuid);
                }
                for (var i = 0; i < depends.length; i++) {
                    var dependSrc = depends[i].uuid;
                    var dependObj = objList[i];
                    var dependProp = propList[i];
                    item = items[dependSrc];
                    if (item) {
                        if (item.complete) {
                            if (item.error) {
                                cc._throw(item.error);
                            } else {
                                var value = item.isRawAsset ? item.url : item.content;
                                dependObj[dependProp] = value;
                                dependKeys.push(item.isRawAsset ? item.url : dependSrc);
                            }
                        } else {
                            var loadCallback = function(item) {
                                var value = item.isRawAsset ? item.url : item.content;
                                this.obj[this.prop] = value;
                                dependKeys.push(item.isRawAsset ? item.url : item.uuid);
                            };
                            var target = {
                                obj: dependObj,
                                prop: dependProp
                            };
                            var list = pipeline.getItems()._callbackTable[dependSrc];
                            list ? list.unshift(loadCallback, target) : pipeline.getItems().add(dependSrc, loadCallback, target);
                        }
                    }
                }
                asset._uuid = uuid;
                callback(null, asset);
            });
        }
        function canDeferredLoad(asset, item, isScene) {
            var res = item.deferredLoadRaw;
            res ? asset instanceof cc.Asset && asset.constructor.preventDeferredLoadDependents && (res = false) : isScene && asset instanceof cc.SceneAsset && (res = asset.asyncLoadAssets);
            return res;
        }
        function loadUuid(item, callback) {
            var json;
            if ("string" == typeof item.content) {
                try {
                    json = JSON.parse(item.content);
                } catch (e) {
                    callback(new Error("Uuid Loader: Parse asset [" + item.id + "] failed : " + e.stack));
                    return;
                }
            } else {
                if ("object" != typeof item.content) {
                    callback(new Error("JSON Loader: Input item doesn't contain string content"));
                    return;
                }
                json = item.content;
            }
            var isScene = isSceneObj(json);
            var classFinder = isScene ? cc._MissingScript.safeFindClass : function(id) {
                var cls = JS._getClassById(id);
                if (cls) {
                    return cls;
                }
                cc.warn('Can not get class "%s"', id);
                return Object;
            };
            var tdInfo = item.deserializeInfo || _tdInfo;
            var asset;
            try {
                asset = cc.deserialize(json, tdInfo, {
                    classFinder: classFinder,
                    target: item.existingAsset,
                    customEnv: item
                });
            } catch (e) {
                var err = e.stack;
                callback(new Error("Uuid Loader: Deserialize asset [" + item.id + "] failed : " + err));
                return;
            }
            var deferredLoad = canDeferredLoad(asset, item, isScene);
            loadDepends(this.pipeline, item, asset, tdInfo, deferredLoad, callback);
            tdInfo.reset();
        }
        module.exports = loadUuid;
        loadUuid.isSceneObj = isSceneObj;
    }, {
        "../platform/deserialize": 77,
        "../platform/js": 81
    } ],
    67: [ function(require, module, exports) {
        var Asset = require("../assets/CCAsset");
        var callInNextTick = require("./utils").callInNextTick;
        var Loader = require("../load-pipeline/CCLoader");
        var PackDownloader = require("../load-pipeline/pack-downloader");
        var AutoReleaseUtils = require("../load-pipeline/auto-release-utils");
        var _libraryBase = "";
        var _rawAssetsBase = "";
        var _uuidToRawAsset = {};
        function isScene(asset) {
            return asset && (asset.constructor === cc.SceneAsset || asset instanceof cc.Scene);
        }
        var AssetLibrary = {
            loadAsset: function(uuid, callback, options) {
                if ("string" != typeof uuid) {
                    return callInNextTick(callback, new Error("[AssetLibrary] uuid must be string"), null);
                }
                var item = {
                    id: uuid,
                    type: "uuid"
                };
                options && options.deserializeInfo && (item.deserializeInfo = options.deserializeInfo);
                options && options.existingAsset && (item.existingAsset = options.existingAsset);
                Loader.load(item, function(error, asset) {
                    if (error || !asset) {
                        error = new Error("[AssetLibrary] loading JSON or dependencies failed: " + error.message);
                    } else {
                        asset.constructor === cc.SceneAsset && (asset.scene.dependAssets = AutoReleaseUtils.getDependsRecursively(uuid));
                        isScene(asset) && Loader.removeItem(uuid);
                    }
                    callback && callback(error, asset);
                });
            },
            getImportedDir: function(uuid) {
                return _libraryBase + uuid.slice(0, 2);
            },
            _queryAssetInfoInEditor: function(uuid, callback) {},
            _getAssetInfoInRuntime: function(uuid) {
                var info = _uuidToRawAsset[uuid];
                if (info && !cc.isChildClassOf(info.type, cc.Asset)) {
                    return {
                        url: _rawAssetsBase + info.url,
                        raw: true
                    };
                }
                var url = this.getImportedDir(uuid) + "/" + uuid + ".json";
                return {
                    url: url,
                    raw: false
                };
            },
            queryAssetInfo: function(uuid, callback) {
                var info = this._getAssetInfoInRuntime(uuid);
                callback(null, info.url, info.raw);
            },
            parseUuidInEditor: function(url) {
                var uuid;
                var isImported;
                var dir;
                var dirBasename;
                var isAssetUrl;
                var index;
            },
            loadJson: function(json, callback) {
                var randomUuid = "" + (new Date().getTime() + Math.random());
                var item = {
                    id: randomUuid,
                    type: "uuid",
                    content: json,
                    skips: [ Loader.downloader.id ]
                };
                Loader.load(item, function(error, asset) {
                    if (error) {
                        error = new Error("[AssetLibrary] loading JSON or dependencies failed: " + error.message);
                    } else {
                        asset.constructor === cc.SceneAsset && (asset.scene.dependAssets = AutoReleaseUtils.getDependsRecursively(randomUuid));
                        isScene(asset) && Loader.removeItem(randomUuid);
                    }
                    asset._uuid = "";
                    callback && callback(error, asset);
                });
            },
            getAssetByUuid: function(uuid) {
                return AssetLibrary._uuidToAsset[uuid] || null;
            },
            init: function(options) {
                var libraryPath = options.libraryPath;
                libraryPath = libraryPath.replace(/\\/g, "/");
                _libraryBase = cc.path._setEndWithSep(libraryPath, "/");
                _rawAssetsBase = options.rawAssetsBase;
                var resources = Loader._resources;
                resources.reset();
                var rawAssets = options.rawAssets;
                if (rawAssets) {
                    var RES_DIR = "resources/";
                    for (var mountPoint in rawAssets) {
                        var assets = rawAssets[mountPoint];
                        for (var uuid in assets) {
                            var info = assets[uuid];
                            var url = info[0];
                            var typeId = info[1];
                            var type = cc.js._getClassById(typeId);
                            if (!type) {
                                cc.error("Cannot get", typeId);
                                continue;
                            }
                            _uuidToRawAsset[uuid] = {
                                url: mountPoint + "/" + url,
                                type: type
                            };
                            if ("assets" === mountPoint && url.startsWith(RES_DIR)) {
                                if (cc.isChildClassOf(type, Asset)) {
                                    var ext = cc.path.extname(url);
                                    url = ext ? url.slice(RES_DIR.length, -ext.length) : url.slice(RES_DIR.length);
                                } else {
                                    url = url.slice(RES_DIR.length);
                                }
                                var isSubAsset = 1 === info[2];
                                resources.add(url, uuid, type, !isSubAsset);
                            }
                        }
                    }
                }
                options.packedAssets && PackDownloader.initPacks(options.packedAssets);
                var mountPaths = options.mountPaths;
                mountPaths || (mountPaths = {
                    assets: _rawAssetsBase + "assets",
                    internal: _rawAssetsBase + "internal"
                });
                cc.url._init(mountPaths);
            }
        };
        AssetLibrary._uuidToAsset = {};
        cc.AssetLibrary = AssetLibrary;
    }, {
        "../assets/CCAsset": 24,
        "../load-pipeline/CCLoader": 53,
        "../load-pipeline/auto-release-utils": 56,
        "../load-pipeline/pack-downloader": 62,
        "./utils": 85
    } ],
    68: [ function(require, module, exports) {
        var JS = require("./js");
        var Enum = require("../value-types/CCEnum");
        var Utils = require("./utils");
        var _isPlainEmptyObj_DEV = Utils.isPlainEmptyObj_DEV;
        var _cloneable_DEV = Utils.cloneable_DEV;
        var Attr = require("./attribute");
        var getTypeChecker = Attr.getTypeChecker;
        var preprocessAttrs = require("./preprocess-attrs");
        var BUILTIN_ENTRIES = [ "name", "extends", "mixins", "ctor", "properties", "statics", "editor" ];
        var TYPO_TO_CORRECT = {
            extend: "extends",
            property: "properties",
            "static": "statics",
            constructor: "ctor"
        };
        var INVALID_STATICS = [ "name", "__ctors__", "__props__", "arguments", "call", "apply", "caller", "length", "prototype" ];
        var deferredInitializer = {
            datas: null,
            push: function(data) {
                if (this.datas) {
                    this.datas.push(data);
                } else {
                    this.datas = [ data ];
                    var self = this;
                    setTimeout(function() {
                        self.init();
                    }, 0);
                }
            },
            init: function() {
                var datas = this.datas;
                if (datas) {
                    for (var i = 0; i < datas.length; ++i) {
                        var data = datas[i];
                        var cls = data.cls;
                        var properties = data.props;
                        "function" == typeof properties && (properties = properties());
                        var name = JS.getClassName(cls);
                        properties ? declareProperties(cls, name, properties, cls.$super, data.mixins) : cc.error('Properties function of "%s" should return an object!', name);
                    }
                    this.datas = null;
                }
            }
        };
        function appendProp(cls, name) {
            if (name.indexOf(".") !== -1) {
                cc.error('Disallow to use "." in property name');
                return;
            }
            var index = cls.__props__.indexOf(name);
            index < 0 && cls.__props__.push(name);
        }
        function defineProp(cls, className, propName, defaultValue, attrs) {
            if ("object" == typeof defaultValue && defaultValue) {
                if (Array.isArray(defaultValue)) {
                    if (defaultValue.length > 0) {
                        cc.error('Default array must be empty, set default value of %s.%s to [], and initialize in "onLoad" or "ctor" please. (just like "this.%s = [...];")', className, propName, propName);
                        return;
                    }
                } else {
                    if (!_isPlainEmptyObj_DEV(defaultValue) && !_cloneable_DEV(defaultValue)) {
                        cc.error('Do not set default value to non-empty object, unless the object defines its own "clone" function. Set default value of %s.%s to null or {}, and initialize in "onLoad" or "ctor" please. (just like "this.%s = {foo: bar};")', className, propName, propName);
                        return;
                    }
                }
            }
            for (var base = cls.$super; base; base = base.$super) {
                if (base.prototype.hasOwnProperty(propName)) {
                    cc.error("Can not declare %s.%s, it is already defined in the prototype of %s", className, propName, className);
                    return;
                }
            }
            Attr.setClassAttr(cls, propName, "default", defaultValue);
            appendProp(cls, propName);
            if (attrs) {
                var onAfterProp = null;
                for (var i = 0; i < attrs.length; i++) {
                    var attr = attrs[i];
                    Attr.attr(cls, propName, attr);
                    if (attr._onAfterProp) {
                        onAfterProp = onAfterProp || [];
                        onAfterProp.push(attr._onAfterProp);
                    }
                }
                if (onAfterProp) {
                    for (var c = 0; c < onAfterProp.length; c++) {
                        onAfterProp[c](cls, propName);
                    }
                }
            }
        }
        function defineGetSet(cls, name, propName, val, attrs) {
            var getter = val.get;
            var setter = val.set;
            var proto = cls.prototype;
            var d = Object.getOwnPropertyDescriptor(proto, propName);
            if (getter) {
                if (d && d.get) {
                    cc.error('"%s": the getter of "%s" is already defined!', name, propName);
                    return;
                }
                if (attrs) {
                    for (var i = 0; i < attrs.length; ++i) {
                        var attr = attrs[i];
                        if (false === attr._canUsedInGetter) {
                            cc.error('Can not apply the specified attribute to the getter of "%s.%s", attribute index: %s', name, propName, i);
                            continue;
                        }
                        Attr.attr(cls, propName, attr);
                        false !== attr.serializable && true !== attr.editorOnly || cc.warn('No need to use "serializable: false" or "editorOnly: true" for the getter of "%s.%s", every getter is actually non-serialized.', name, propName);
                    }
                }
                var ForceSerializable = false;
                ForceSerializable || Attr.attr(cls, propName, Attr.NonSerialized);
                (ForceSerializable || true) && appendProp(cls, propName);
                d ? Object.defineProperty(proto, propName, {
                    get: getter
                }) : Object.defineProperty(proto, propName, {
                    get: getter,
                    configurable: true,
                    enumerable: true
                });
                Attr.setClassAttr(cls, propName, "hasGetter", true);
            }
            if (setter) {
                if (d && d.set) {
                    return cc.error('"%s": the setter of "%s" is already defined!', name, propName);
                }
                Object.defineProperty(proto, propName, {
                    set: setter,
                    configurable: true,
                    enumerable: true
                });
                Attr.setClassAttr(cls, propName, "hasSetter", true);
            }
        }
        function getDefault(defaultVal) {
            if ("function" == typeof defaultVal) {
                return defaultVal();
            }
            return defaultVal;
        }
        var DELIMETER = Attr.DELIMETER;
        function instantiateProps(instance, itsClass) {
            var attrs = Attr.getClassAttrs(itsClass);
            var propList = itsClass.__props__;
            if (null === propList) {
                deferredInitializer.init();
                propList = itsClass.__props__;
            }
            for (var i = 0; i < propList.length; i++) {
                var prop = propList[i];
                var attrKey = prop + DELIMETER + "default";
                if (attrKey in attrs) {
                    var def = attrs[attrKey];
                    def && ("object" == typeof def && def ? def = "function" == typeof def.clone ? def.clone() : Array.isArray(def) ? [] : {} : "function" == typeof def && (def = getDefault(def)));
                    instance[prop] = def;
                }
            }
        }
        cc.isChildClassOf = function(subclass, superclass) {
            if (subclass && superclass) {
                if ("function" != typeof subclass) {
                    return false;
                }
                if ("function" != typeof superclass) {
                    cc.warn("[isChildClassOf] superclass should be function type, not", superclass);
                    return false;
                }
                if (subclass === superclass) {
                    return true;
                }
                for (;;) {
                    var proto = subclass.prototype;
                    var dunderProto = proto && Object.getPrototypeOf(proto);
                    subclass = dunderProto && dunderProto.constructor;
                    if (!subclass) {
                        return false;
                    }
                    if (subclass === superclass) {
                        return true;
                    }
                }
            }
            return false;
        };
        function getInheritanceChain(klass) {
            var chain = [];
            for (;;) {
                var dunderProto = Object.getPrototypeOf(klass.prototype);
                klass = dunderProto && dunderProto.constructor;
                if (!klass) {
                    break;
                }
                klass !== Object && chain.push(klass);
            }
            return chain;
        }
        function doDefine(className, baseClass, mixins, constructor, options) {
            var fireClass = _createCtor(constructor, baseClass, mixins, className, options);
            Object.defineProperty(fireClass, "extend", {
                value: function(options) {
                    options["extends"] = this;
                    return CCClass(options);
                },
                writable: true,
                configurable: true
            });
            if (baseClass) {
                JS.extend(fireClass, baseClass);
                fireClass.$super = baseClass;
            }
            if (mixins) {
                for (var m = 0; m < mixins.length; ++m) {
                    var mixin = mixins[m];
                    JS.mixin(fireClass.prototype, mixin.prototype);
                    for (var p in mixin) {
                        mixin.hasOwnProperty(p) && INVALID_STATICS.indexOf(p) < 0 && (fireClass[p] = mixin[p]);
                    }
                    CCClass._isCCClass(mixin) && JS.mixin(Attr.getClassAttrs(fireClass).constructor.prototype, Attr.getClassAttrs(mixin).constructor.prototype);
                }
                fireClass.prototype.constructor = fireClass;
            }
            JS.setClassName(className, fireClass);
            return fireClass;
        }
        function define(className, baseClasses, mixins, constructor, options) {
            if (cc.isChildClassOf(baseClasses, cc.Component)) {
                var frame = cc._RFpeek();
                if (frame) {
                    constructor && cc.warn("Should not define constructor for cc.Component %s.", className);
                    if (frame.beh) {
                        cc.error("Each script can have at most one Component.");
                        return cls;
                    }
                    var uuid = frame.uuid;
                    uuid;
                    className = className || frame.script;
                    var cls = doDefine(className, baseClasses, mixins, constructor, options);
                    uuid && JS._setClassId(uuid, cls);
                    frame.beh = cls;
                    return cls;
                }
            }
            return doDefine(className, baseClasses, mixins, constructor, options);
        }
        function _checkCtor(ctor, className) {
            if (CCClass._isCCClass(ctor)) {
                cc.error('ctor of "%s" can not be another CCClass', className);
                return;
            }
            if ("function" != typeof ctor) {
                cc.error('ctor of "%s" must be function type', className);
                return;
            }
            if (ctor.length > 0) {
                cc.warn('Can not instantiate CCClass "%s" with arguments.', className);
                return;
            }
        }
        function normalizeClassName(className) {
            return DefaultName;
        }
        function _createCtor(ctor, baseClass, mixins, className, options) {
            var useTryCatch = !(className && className.startsWith("cc."));
            var shouldAddProtoCtor;
            var originCtor;
            var superCallBounded = options && baseClass && boundSuperCalls(baseClass, options);
            ctor && true && _checkCtor(ctor, className);
            var ctors = [];
            var baseOrMixins = [ baseClass ].concat(mixins);
            for (var b = 0; b < baseOrMixins.length; b++) {
                var baseOrMixin = baseOrMixins[b];
                if (baseOrMixin) {
                    if (CCClass._isCCClass(baseOrMixin)) {
                        var baseCtors = baseOrMixin.__ctors__;
                        baseCtors && (ctors = ctors.concat(baseCtors));
                    } else {
                        baseOrMixin && ctors.push(baseOrMixin);
                    }
                }
            }
            ctor && ctors.push(ctor);
            var fireClass = function() {
                this._super = null;
                instantiateProps(this, fireClass);
                var cs = fireClass.__ctors__;
                if (cs) {
                    for (var i = 0, l = cs.length; i < l; ++i) {
                        cs[i].apply(this, arguments);
                    }
                }
            };
            Object.defineProperty(fireClass, "__ctors__", {
                value: ctors.length > 0 ? ctors : null
            });
            return fireClass;
        }
        var SuperCallReg = /xyz/.test(function() {
            xyz;
        }) ? /\b_super\b/ : /.*/;
        function _boundSuperCall(func, funcName, base) {
            var superFunc = null;
            var pd = JS.getPropertyDescriptor(base.prototype, funcName);
            if (pd) {
                superFunc = pd.value;
                if ("function" == typeof superFunc) {
                    var hasSuperCall = SuperCallReg.test(func);
                    if (hasSuperCall) {
                        return function() {
                            var tmp = this._super;
                            this._super = superFunc;
                            var ret = func.apply(this, arguments);
                            this._super = tmp;
                            return ret;
                        };
                    }
                }
            }
            return null;
        }
        function boundSuperCalls(baseClass, options) {
            var hasSuperCall = false;
            for (var funcName in options) {
                if (BUILTIN_ENTRIES.indexOf(funcName) < 0) {
                    var func = options[funcName];
                    if ("function" == typeof func) {
                        var bounded = _boundSuperCall(func, funcName, baseClass);
                        if (bounded) {
                            hasSuperCall = true;
                            options[funcName] = bounded;
                        }
                    }
                }
            }
            return hasSuperCall;
        }
        function declareProperties(cls, className, properties, baseClass, mixins) {
            cls.__props__ = [];
            baseClass && baseClass.__props__ && (cls.__props__ = baseClass.__props__.slice());
            if (mixins) {
                for (var m = 0; m < mixins.length; ++m) {
                    var mixin = mixins[m];
                    mixin.__props__ && (cls.__props__ = cls.__props__.concat(mixin.__props__.filter(function(x) {
                        return cls.__props__.indexOf(x) < 0;
                    })));
                }
            }
            if (properties) {
                preprocessAttrs(properties, className, cls);
                for (var propName in properties) {
                    var val = properties[propName];
                    var attrs = parseAttributes(val, className, propName);
                    "default" in val ? defineProp(cls, className, propName, val["default"], attrs) : defineGetSet(cls, className, propName, val, attrs);
                }
            }
        }
        function CCClass(options) {
            if (0 === arguments.length) {
                return define();
            }
            if (!options) {
                cc.error("cc.Class: Option must be non-nil");
                return define();
            }
            var name = options.name;
            var base = options["extends"];
            var mixins = options.mixins;
            var cls;
            cls = define(name, base, mixins, options.ctor, options);
            name || (name = cc.js.getClassName(cls));
            var properties = options.properties;
            if ("function" == typeof properties || base && null === base.__props__ || mixins && mixins.some(function(x) {
                return null === x.__props__;
            })) {
                deferredInitializer.push({
                    cls: cls,
                    props: properties,
                    mixins: mixins
                });
                cls.__props__ = null;
            } else {
                declareProperties(cls, name, properties, base, options.mixins);
            }
            var statics = options.statics;
            if (statics) {
                var staticPropName;
                for (staticPropName in statics) {
                    INVALID_STATICS.indexOf(staticPropName) !== -1 && cc.error('Cannot define %s.%s because static member name can not be "%s".', name, staticPropName, staticPropName);
                }
                for (staticPropName in statics) {
                    cls[staticPropName] = statics[staticPropName];
                }
            }
            for (var funcName in options) {
                if (BUILTIN_ENTRIES.indexOf(funcName) >= 0) {
                    continue;
                }
                var func = options[funcName];
                if ("function" == typeof func || null === func) {
                    Object.defineProperty(cls.prototype, funcName, {
                        value: func,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    if (false === func && base && base.prototype) {
                        var overrided = base.prototype[funcName];
                        if ("function" == typeof overrided) {
                            var baseFuc = JS.getClassName(base) + "." + funcName;
                            var subFuc = name + "." + funcName;
                            cc.warn('"%s" overrided "%s" but "%s" is defined as "false" so the super method will not be called. You can set "%s" to null to disable this warning.', subFuc, baseFuc, subFuc, subFuc);
                        }
                    }
                    var correct = TYPO_TO_CORRECT[funcName];
                    correct ? cc.warn('Unknown type of %s.%s, maybe you want is "%s".', name, funcName, correct) : func && cc.error('Unknown type of %s.%s, property should be defined in "properties" or "ctor"', name, funcName);
                }
            }
            var editor = options.editor;
            editor && (cc.isChildClassOf(base, cc.Component) ? cc.Component._registerEditorProps(cls, editor) : cc.warn('Can not use "editor" attribute, "%s" not inherits from Components.', name));
            return cls;
        }
        CCClass._isCCClass = function(constructor) {
            return !!constructor && "undefined" != typeof constructor.__ctors__;
        };
        CCClass._fastDefine = function(className, constructor, serializableFields) {
            JS.setClassName(className, constructor);
            var props = constructor.__props__ = Object.keys(serializableFields);
            for (var i = 0; i < props.length; i++) {
                var key = props[i];
                var val = serializableFields[key];
                Attr.setClassAttr(constructor, key, "visible", false);
                Attr.setClassAttr(constructor, key, "default", val);
            }
        };
        CCClass.Attr = Attr;
        CCClass.attr = Attr.attr;
        CCClass.getInheritanceChain = getInheritanceChain;
        var PrimitiveTypes = {
            Integer: "Number",
            Float: "Number",
            Boolean: "Boolean",
            String: "String"
        };
        var tmpAttrs = [];
        function parseAttributes(attrs, className, propName) {
            var ERR_Type = "The %s of %s must be type %s";
            tmpAttrs.length = 0;
            var result = tmpAttrs;
            var type = attrs.type;
            if (type) {
                var primitiveType = PrimitiveTypes[type];
                if (primitiveType) {
                    result.push({
                        type: type,
                        _onAfterProp: getTypeChecker(primitiveType, "cc." + type)
                    });
                } else {
                    if ("Object" === type) {
                        cc.error('Please define "type" parameter of %s.%s as the actual constructor.', className, propName);
                    } else {
                        if (type === Attr.ScriptUuid) {
                            var attr = Attr.ObjectType(cc.ScriptAsset);
                            attr.type = "Script";
                            result.push(attr);
                        } else {
                            "object" == typeof type ? Enum.isEnum(type) ? result.push({
                                type: "Enum",
                                enumList: Enum.getList(type)
                            }) : cc.error('Please define "type" parameter of %s.%s as the constructor of %s.', className, propName, type) : "function" == typeof type ? attrs.url ? result.push({
                                type: "Object",
                                ctor: type,
                                _onAfterProp: getTypeChecker("String", "cc.String")
                            }) : result.push(Attr.ObjectType(type)) : cc.error('Unknown "type" parameter of %s.%s：%s', className, propName, type);
                        }
                    }
                }
            }
            function parseSimpleAttr(attrName, expectType, attrCreater) {
                if (attrName in attrs) {
                    var val = attrs[attrName];
                    if (typeof val === expectType) {
                        if (attrCreater) {
                            result.push("function" == typeof attrCreater ? attrCreater(val) : attrCreater);
                        } else {
                            var attr = {};
                            attr[attrName] = val;
                            result.push(attr);
                        }
                    } else {
                        cc.error(ERR_Type, attrName, className, propName, expectType);
                    }
                }
            }
            parseSimpleAttr("rawType", "string", Attr.RawType);
            parseSimpleAttr("editorOnly", "boolean", Attr.EditorOnly);
            parseSimpleAttr("displayName", "string");
            parseSimpleAttr("multiline", "boolean", {
                multiline: true
            });
            parseSimpleAttr("readonly", "boolean", {
                readonly: true
            });
            parseSimpleAttr("tooltip", "string");
            parseSimpleAttr("slide", "boolean");
            attrs.url && result.push({
                saveUrlAsAsset: true
            });
            false === attrs.serializable && result.push(Attr.NonSerialized);
            var visible = attrs.visible;
            if ("undefined" != typeof visible) {
                attrs.visible || result.push({
                    visible: false
                });
            } else {
                var startsWithUS = 95 === propName.charCodeAt(0);
                startsWithUS && result.push({
                    visible: false
                });
            }
            var range = attrs.range;
            range && (Array.isArray(range) ? range.length >= 2 ? result.push({
                min: range[0],
                max: range[1],
                step: range[2]
            }) : cc.error("The length of range array must be equal or greater than 2") : cc.error(ERR_Type, "range", className, propName, "array"));
            parseSimpleAttr("min", "number");
            parseSimpleAttr("max", "number");
            parseSimpleAttr("step", "number");
            return result;
        }
        cc.Class = CCClass;
        module.exports = {
            instantiateProps: instantiateProps,
            isArray: function(defaultVal) {
                defaultVal = getDefault(defaultVal);
                return Array.isArray(defaultVal);
            },
            fastDefine: CCClass._fastDefine
        };
    }, {
        "../value-types/CCEnum": 103,
        "./attribute": 75,
        "./js": 81,
        "./preprocess-attrs": 82,
        "./utils": 85
    } ],
    69: [ function(require, module, exports) {
        require("./_CCClass");
        cc._tmp = cc._tmp || {};
        cc.KEY = {
            none: 0,
            back: 6,
            menu: 18,
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            space: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            select: 41,
            insert: 45,
            Delete: 46,
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,
            num0: 96,
            num1: 97,
            num2: 98,
            num3: 99,
            num4: 100,
            num5: 101,
            num6: 102,
            num7: 103,
            num8: 104,
            num9: 105,
            "*": 106,
            "+": 107,
            "-": 109,
            numdel: 110,
            "/": 111,
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            semicolon: 186,
            equal: 187,
            "=": 187,
            ",": 188,
            comma: 188,
            dash: 189,
            ".": 190,
            period: 190,
            forwardslash: 191,
            grave: 192,
            "[": 219,
            openbracket: 219,
            backslash: 220,
            "]": 221,
            closebracket: 221,
            quote: 222,
            dpadLeft: 1e3,
            dpadRight: 1001,
            dpadUp: 1003,
            dpadDown: 1004,
            dpadCenter: 1005
        };
        cc.ImageFormat = cc.Enum({
            JPG: 0,
            PNG: 1,
            TIFF: 2,
            WEBP: 3,
            PVR: 4,
            ETC: 5,
            S3TC: 6,
            ATITC: 7,
            TGA: 8,
            RAWDATA: 9,
            UNKNOWN: 10
        });
        cc.getImageFormatByData = function(imgData) {
            if (imgData.length > 8 && 137 === imgData[0] && 80 === imgData[1] && 78 === imgData[2] && 71 === imgData[3] && 13 === imgData[4] && 10 === imgData[5] && 26 === imgData[6] && 10 === imgData[7]) {
                return cc.ImageFormat.PNG;
            }
            if (imgData.length > 2 && (73 === imgData[0] && 73 === imgData[1] || 77 === imgData[0] && 77 === imgData[1] || 255 === imgData[0] && 216 === imgData[1])) {
                return cc.ImageFormat.TIFF;
            }
            return cc.ImageFormat.UNKNOWN;
        };
        cc.macro = {
            INVALID_INDEX: -1,
            NODE_TAG_INVALID: -1,
            PI: Math.PI,
            PI2: 2 * Math.PI,
            FLT_MAX: parseFloat("3.402823466e+38F"),
            FLT_MIN: parseFloat("1.175494351e-38F"),
            RAD: Math.PI / 180,
            DEG: 180 / Math.PI,
            UINT_MAX: 4294967295,
            REPEAT_FOREVER: Number.MAX_VALUE - 1,
            FLT_EPSILON: 1.192092896e-7,
            ONE: 1,
            ZERO: 0,
            SRC_ALPHA: 770,
            SRC_ALPHA_SATURATE: 776,
            SRC_COLOR: 768,
            DST_ALPHA: 772,
            DST_COLOR: 774,
            ONE_MINUS_SRC_ALPHA: 771,
            ONE_MINUS_SRC_COLOR: 769,
            ONE_MINUS_DST_ALPHA: 773,
            ONE_MINUS_DST_COLOR: 775,
            ONE_MINUS_CONSTANT_ALPHA: 32772,
            ONE_MINUS_CONSTANT_COLOR: 32770,
            LINEAR: 9729,
            BLEND_DST: 771,
            WEB_ORIENTATION_PORTRAIT: 0,
            WEB_ORIENTATION_LANDSCAPE_LEFT: -90,
            WEB_ORIENTATION_PORTRAIT_UPSIDE_DOWN: 180,
            WEB_ORIENTATION_LANDSCAPE_RIGHT: 90,
            ORIENTATION_PORTRAIT: 1,
            ORIENTATION_LANDSCAPE: 2,
            ORIENTATION_AUTO: 3,
            DENSITYDPI_DEVICE: "device-dpi",
            DENSITYDPI_HIGH: "high-dpi",
            DENSITYDPI_MEDIUM: "medium-dpi",
            DENSITYDPI_LOW: "low-dpi",
            VERTEX_ATTRIB_FLAG_NONE: 0,
            VERTEX_ATTRIB_FLAG_POSITION: 1,
            VERTEX_ATTRIB_FLAG_COLOR: 2,
            VERTEX_ATTRIB_FLAG_TEX_COORDS: 4,
            VERTEX_ATTRIB_FLAG_POS_COLOR_TEX: 7,
            GL_ALL: 0,
            VERTEX_ATTRIB_POSITION: 0,
            VERTEX_ATTRIB_COLOR: 1,
            VERTEX_ATTRIB_TEX_COORDS: 2,
            VERTEX_ATTRIB_MAX: 3,
            UNIFORM_PMATRIX: 0,
            UNIFORM_MVMATRIX: 1,
            UNIFORM_MVPMATRIX: 2,
            UNIFORM_TIME: 3,
            UNIFORM_SINTIME: 4,
            UNIFORM_COSTIME: 5,
            UNIFORM_RANDOM01: 6,
            UNIFORM_SAMPLER: 7,
            UNIFORM_MAX: 8,
            SHADER_POSITION_TEXTURECOLOR: "ShaderPositionTextureColor",
            SHADER_SPRITE_POSITION_TEXTURECOLOR: "ShaderSpritePositionTextureColor",
            SHADER_POSITION_TEXTURECOLORALPHATEST: "ShaderPositionTextureColorAlphaTest",
            SHADER_SPRITE_POSITION_TEXTURECOLORALPHATEST: "ShaderSpritePositionTextureColorAlphaTest",
            SHADER_POSITION_COLOR: "ShaderPositionColor",
            SHADER_SPRITE_POSITION_COLOR: "ShaderSpritePositionColor",
            SHADER_POSITION_TEXTURE: "ShaderPositionTexture",
            SHADER_POSITION_TEXTURE_UCOLOR: "ShaderPositionTexture_uColor",
            SHADER_POSITION_TEXTUREA8COLOR: "ShaderPositionTextureA8Color",
            SHADER_POSITION_UCOLOR: "ShaderPosition_uColor",
            SHADER_POSITION_LENGTHTEXTURECOLOR: "ShaderPositionLengthTextureColor",
            UNIFORM_PMATRIX_S: "CC_PMatrix",
            UNIFORM_MVMATRIX_S: "CC_MVMatrix",
            UNIFORM_MVPMATRIX_S: "CC_MVPMatrix",
            UNIFORM_TIME_S: "CC_Time",
            UNIFORM_SINTIME_S: "CC_SinTime",
            UNIFORM_COSTIME_S: "CC_CosTime",
            UNIFORM_RANDOM01_S: "CC_Random01",
            UNIFORM_SAMPLER_S: "CC_Texture0",
            UNIFORM_ALPHA_TEST_VALUE_S: "CC_alpha_value",
            ATTRIBUTE_NAME_COLOR: "a_color",
            ATTRIBUTE_NAME_POSITION: "a_position",
            ATTRIBUTE_NAME_TEX_COORD: "a_texCoord",
            ITEM_SIZE: 32,
            CURRENT_ITEM: 3233828865,
            ZOOM_ACTION_TAG: 3233828866,
            NORMAL_TAG: 8801,
            SELECTED_TAG: 8802,
            DISABLE_TAG: 8803,
            FIX_ARTIFACTS_BY_STRECHING_TEXEL: 1,
            DIRECTOR_STATS_POSITION: cc.p(0, 0),
            DIRECTOR_FPS_INTERVAL: .5,
            COCOSNODE_RENDER_SUBPIXEL: 1,
            SPRITEBATCHNODE_RENDER_SUBPIXEL: 1,
            AUTO_PREMULTIPLIED_ALPHA_FOR_PNG: 0,
            OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA: 0,
            TEXTURE_ATLAS_USE_TRIANGLE_STRIP: 0,
            TEXTURE_ATLAS_USE_VAO: 0,
            TEXTURE_NPOT_SUPPORT: 0,
            USE_LA88_LABELS: 1,
            SPRITE_DEBUG_DRAW: 0,
            LABELBMFONT_DEBUG_DRAW: 0,
            LABELATLAS_DEBUG_DRAW: 0,
            ENABLE_STACKABLE_ACTIONS: 1,
            ENABLE_GL_STATE_CACHE: 1
        };
        cc.defineGetterSetter(cc.macro, "BLEND_SRC", function() {
            return cc._renderType === cc.game.RENDER_TYPE_WEBGL && cc.macro.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? cc.macro.ONE : cc.macro.SRC_ALPHA;
        });
        cc.lerp = function(a, b, r) {
            return a + (b - a) * r;
        };
        cc.rand = function() {
            return 16777215 * Math.random();
        };
        cc.randomMinus1To1 = function() {
            return 2 * (Math.random() - .5);
        };
        cc.random0To1 = Math.random;
        cc.degreesToRadians = function(angle) {
            return angle * cc.macro.RAD;
        };
        cc.radiansToDegrees = function(angle) {
            return angle * cc.macro.DEG;
        };
        cc.nodeDrawSetup = function(node) {
            if (node._shaderProgram) {
                node._shaderProgram.use();
                node._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4();
            }
        };
        cc.incrementGLDraws = function(addNumber) {
            cc.g_NumberOfDraws += addNumber;
        };
        cc.checkGLErrorDebug = function() {
            if (cc.renderMode === cc.game.RENDER_TYPE_WEBGL) {
                var _error = cc._renderContext.getError();
                _error && cc.log(cc._LogInfos.checkGLErrorDebug, _error);
            }
        };
    }, {
        "./_CCClass": 74
    } ],
    70: [ function(require, module, exports) {
        var JS = require("./js");
        var Destroyed = 1;
        var RealDestroyed = 2;
        var ToDestroy = 4;
        var DontSave = 8;
        var EditorOnly = 16;
        var Dirty = 32;
        var DontDestroy = 64;
        var Destroying = 128;
        var Activating = 256;
        var IsOnEnableCalled = 2048;
        var IsEditorOnEnableCalled = 4096;
        var IsPreloadCalled = 8192;
        var IsOnLoadCalled = 16384;
        var IsOnLoadStarted = 32768;
        var IsStartCalled = 65536;
        var IsRotationLocked = 1 << 17;
        var IsScaleLocked = 1 << 18;
        var IsAnchorLocked = 1 << 19;
        var IsSizeLocked = 1 << 20;
        var IsPositionLocked = 1 << 21;
        var PersistentMask = ~(ToDestroy | Dirty | Destroying | DontDestroy | Activating | IsPreloadCalled | IsOnLoadStarted | IsOnLoadCalled | IsStartCalled | IsOnEnableCalled | IsEditorOnEnableCalled | IsRotationLocked | IsScaleLocked | IsAnchorLocked | IsSizeLocked | IsPositionLocked);
        function CCObject() {
            this._name = "";
            this._objFlags = 0;
        }
        CCObject.Flags = {
            Destroyed: Destroyed,
            DontSave: DontSave,
            EditorOnly: EditorOnly,
            Dirty: Dirty,
            DontDestroy: DontDestroy,
            PersistentMask: PersistentMask,
            Destroying: Destroying,
            Activating: Activating,
            IsPreloadCalled: IsPreloadCalled,
            IsOnLoadCalled: IsOnLoadCalled,
            IsOnLoadStarted: IsOnLoadStarted,
            IsOnEnableCalled: IsOnEnableCalled,
            IsStartCalled: IsStartCalled,
            IsEditorOnEnableCalled: IsEditorOnEnableCalled,
            IsPositionLocked: IsPositionLocked,
            IsRotationLocked: IsRotationLocked,
            IsScaleLocked: IsScaleLocked,
            IsAnchorLocked: IsAnchorLocked,
            IsSizeLocked: IsSizeLocked
        };
        require("./CCClass").fastDefine("cc.Object", CCObject, {
            _name: "",
            _objFlags: 0
        });
        var objectsToDestroy = [];
        function deferredDestroy() {
            var deleteCount = objectsToDestroy.length;
            for (var i = 0; i < deleteCount; ++i) {
                var obj = objectsToDestroy[i];
                obj._objFlags & Destroyed || obj._destroyImmediate();
            }
            deleteCount === objectsToDestroy.length ? objectsToDestroy.length = 0 : objectsToDestroy.splice(0, deleteCount);
        }
        Object.defineProperty(CCObject, "_deferredDestroy", {
            value: deferredDestroy
        });
        var prototype = CCObject.prototype;
        JS.getset(prototype, "name", function() {
            return this._name;
        }, function(value) {
            this._name = value;
        });
        JS.get(prototype, "isValid", function() {
            return !(this._objFlags & Destroyed);
        });
        var deferredDestroyTimer = null;
        prototype.destroy = function() {
            if (this._objFlags & Destroyed) {
                cc.warn("object already destroyed");
                return false;
            }
            if (this._objFlags & ToDestroy) {
                return false;
            }
            this._objFlags |= ToDestroy;
            objectsToDestroy.push(this);
            return true;
        };
        prototype._destruct = function() {
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    switch (typeof this[key]) {
                      case "string":
                        this[key] = "";
                        break;

                      case "object":
                      case "function":
                        this[key] = null;
                    }
                }
            }
        };
        prototype._onPreDestroy = null;
        prototype._destroyImmediate = function() {
            if (this._objFlags & Destroyed) {
                cc.error("object already destroyed");
                return;
            }
            this._onPreDestroy && this._onPreDestroy();
            this._destruct();
            this._objFlags |= Destroyed;
        };
        prototype._deserialize = null;
        cc.isValid = function(value) {
            return "object" == typeof value ? !(!value || value._objFlags & Destroyed) : "undefined" != typeof value;
        };
        cc.Object = CCObject;
        module.exports = CCObject;
    }, {
        "./CCClass": 68,
        "./js": 81
    } ],
    71: [ function(require, module, exports) {
        if (cc.sys) {
            return;
        }
        cc.sys = {};
        var sys = cc.sys;
        sys.LANGUAGE_ENGLISH = "en";
        sys.LANGUAGE_CHINESE = "zh";
        sys.LANGUAGE_FRENCH = "fr";
        sys.LANGUAGE_ITALIAN = "it";
        sys.LANGUAGE_GERMAN = "de";
        sys.LANGUAGE_SPANISH = "es";
        sys.LANGUAGE_DUTCH = "du";
        sys.LANGUAGE_RUSSIAN = "ru";
        sys.LANGUAGE_KOREAN = "ko";
        sys.LANGUAGE_JAPANESE = "ja";
        sys.LANGUAGE_HUNGARIAN = "hu";
        sys.LANGUAGE_PORTUGUESE = "pt";
        sys.LANGUAGE_ARABIC = "ar";
        sys.LANGUAGE_NORWEGIAN = "no";
        sys.LANGUAGE_POLISH = "pl";
        sys.LANGUAGE_UNKNOWN = "unknown";
        sys.OS_IOS = "iOS";
        sys.OS_ANDROID = "Android";
        sys.OS_WINDOWS = "Windows";
        sys.OS_MARMALADE = "Marmalade";
        sys.OS_LINUX = "Linux";
        sys.OS_BADA = "Bada";
        sys.OS_BLACKBERRY = "Blackberry";
        sys.OS_OSX = "OS X";
        sys.OS_WP8 = "WP8";
        sys.OS_WINRT = "WINRT";
        sys.OS_UNKNOWN = "Unknown";
        sys.UNKNOWN = -1;
        sys.WIN32 = 0;
        sys.LINUX = 1;
        sys.MACOS = 2;
        sys.ANDROID = 3;
        sys.IPHONE = 4;
        sys.IPAD = 5;
        sys.BLACKBERRY = 6;
        sys.NACL = 7;
        sys.EMSCRIPTEN = 8;
        sys.TIZEN = 9;
        sys.WINRT = 10;
        sys.WP8 = 11;
        sys.MOBILE_BROWSER = 100;
        sys.DESKTOP_BROWSER = 101;
        sys.WEAPP = 102;
        sys.EDITOR_PAGE = 102;
        sys.EDITOR_CORE = 103;
        sys.BROWSER_TYPE_WEAPP = "weapp";
        sys.BROWSER_TYPE_WECHAT = "wechat";
        sys.BROWSER_TYPE_ANDROID = "androidbrowser";
        sys.BROWSER_TYPE_IE = "ie";
        sys.BROWSER_TYPE_QQ = "qqbrowser";
        sys.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
        sys.BROWSER_TYPE_UC = "ucbrowser";
        sys.BROWSER_TYPE_360 = "360browser";
        sys.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
        sys.BROWSER_TYPE_BAIDU = "baidubrowser";
        sys.BROWSER_TYPE_MAXTHON = "maxthon";
        sys.BROWSER_TYPE_OPERA = "opera";
        sys.BROWSER_TYPE_OUPENG = "oupeng";
        sys.BROWSER_TYPE_MIUI = "miuibrowser";
        sys.BROWSER_TYPE_FIREFOX = "firefox";
        sys.BROWSER_TYPE_SAFARI = "safari";
        sys.BROWSER_TYPE_CHROME = "chrome";
        sys.BROWSER_TYPE_LIEBAO = "liebao";
        sys.BROWSER_TYPE_QZONE = "qzone";
        sys.BROWSER_TYPE_SOUGOU = "sogou";
        sys.BROWSER_TYPE_UNKNOWN = "unknown";
        sys.isNative = false;
        sys.isBrowser = "object" == typeof window && "object" == typeof document;
        if (wx) {
            sys.isMobile = true;
            sys.platform = sys.WEAPP;
            sys.language = sys.LANGUAGE_CHINESE;
            sys.os = sys.OS_UNKNOWN;
            sys.osVersion = "0";
            sys.osMainVersion = 0;
            sys.isBrowser = true;
            sys.browserVersion = "";
            sys.browserType = sys.BROWSER_TYPE_WEAPP;
            sys.windowPixelResolution = {
                width: 0,
                height: 0
            };
            wx.getSystemInfo({
                complete: function(res) {
                    sys.windowPixelResolution.width = res.windowWidth;
                    sys.windowPixelResolution.height = res.windowHeight;
                    sys.language = res.language;
                    sys.browserVersion = res.version;
                    sys.devicePixelRatio = res.pixelRatio;
                }
            });
            sys.capabilities = {
                canvas: true,
                opengl: false
            };
            sys.__audioSupport = {};
        } else {
            var win = window, nav = win.navigator, doc = document, docEle = doc.documentElement;
            var ua = nav.userAgent.toLowerCase();
            sys.isMobile = /mobile|android|iphone|ipad/.test(ua);
            sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
            var currLanguage = nav.language;
            currLanguage = currLanguage ? currLanguage : nav.browserLanguage;
            currLanguage = currLanguage ? currLanguage.split("-")[0] : sys.LANGUAGE_ENGLISH;
            sys.language = currLanguage;
            var isAndroid = false, iOS = false, osVersion = "", osMainVersion = 0;
            var uaResult = /android (\d+(?:\.\d+)+)/i.exec(ua) || /android (\d+(?:\.\d+)+)/i.exec(nav.platform);
            if (uaResult) {
                isAndroid = true;
                osVersion = uaResult[1] || "";
                osMainVersion = parseInt(osVersion) || 0;
            }
            uaResult = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(ua);
            if (uaResult) {
                iOS = true;
                osVersion = uaResult[2] || "";
                osMainVersion = parseInt(osVersion) || 0;
            }
            var osName = sys.OS_UNKNOWN;
            nav.appVersion.indexOf("Win") !== -1 ? osName = sys.OS_WINDOWS : iOS ? osName = sys.OS_IOS : nav.appVersion.indexOf("Mac") !== -1 ? osName = sys.OS_OSX : nav.appVersion.indexOf("X11") !== -1 && nav.appVersion.indexOf("Linux") === -1 ? osName = sys.OS_UNIX : isAndroid ? osName = sys.OS_ANDROID : nav.appVersion.indexOf("Linux") !== -1 && (osName = sys.OS_LINUX);
            sys.os = osName;
            sys.osVersion = osVersion;
            sys.osMainVersion = osMainVersion;
            sys.browserType = sys.BROWSER_TYPE_UNKNOWN;
            (function() {
                var typeReg1 = /mqqbrowser|sogou|qzone|liebao|micromessenger|ucbrowser|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|trident|miuibrowser/i;
                var typeReg2 = /qqbrowser|chrome|safari|firefox|opr|oupeng|opera/i;
                var browserTypes = typeReg1.exec(ua);
                browserTypes || (browserTypes = typeReg2.exec(ua));
                var browserType = browserTypes ? browserTypes[0] : sys.BROWSER_TYPE_UNKNOWN;
                "micromessenger" === browserType ? browserType = sys.BROWSER_TYPE_WECHAT : "safari" === browserType && ua.match(/android.*applewebkit/) ? browserType = sys.BROWSER_TYPE_ANDROID : "trident" === browserType ? browserType = sys.BROWSER_TYPE_IE : "360 aphone" === browserType ? browserType = sys.BROWSER_TYPE_360 : "mxbrowser" === browserType ? browserType = sys.BROWSER_TYPE_MAXTHON : "opr" === browserType && (browserType = sys.BROWSER_TYPE_OPERA);
                sys.browserType = browserType;
            })();
            sys.browserVersion = "";
            (function() {
                var versionReg1 = /(micromessenger|qq|mx|maxthon|baidu|sogou)(mobile)?(browser)?\/?([\d.]+)/i;
                var versionReg2 = /(msie |rv:|firefox|chrome|ucbrowser|oupeng|opera|opr|safari|miui)(mobile)?(browser)?\/?([\d.]+)/i;
                var tmp = ua.match(versionReg1);
                tmp || (tmp = ua.match(versionReg2));
                sys.browserVersion = tmp ? tmp[4] : "";
            })();
            var w = window.innerWidth || document.documentElement.clientWidth;
            var h = window.innerHeight || document.documentElement.clientHeight;
            var ratio = window.devicePixelRatio || 1;
            sys.windowPixelResolution = {
                width: ratio * w,
                height: ratio * h
            };
            sys._checkWebGLRenderMode = function() {
                if (cc._renderType !== cc.game.RENDER_TYPE_WEBGL) {
                    throw new Error("This feature supports WebGL render mode only.");
                }
            };
            var _tmpCanvas1 = document.createElement("canvas"), _tmpCanvas2 = document.createElement("canvas");
            cc.create3DContext = function(canvas, opt_attribs) {
                var names = [ "webgl", "experimental-webgl", "webkit-3d", "moz-webgl" ];
                var context = null;
                for (var ii = 0; ii < names.length; ++ii) {
                    try {
                        context = canvas.getContext(names[ii], opt_attribs);
                    } catch (e) {}
                    if (context) {
                        break;
                    }
                }
                return context;
            };
            sys._supportCanvasNewBlendModes = function() {
                var data1, data2;
                var canvas = _tmpCanvas1;
                canvas.width = 1;
                canvas.height = 1;
                var context = canvas.getContext("2d");
                context.fillStyle = "#000";
                context.fillRect(0, 0, 1, 1);
                context.globalCompositeOperation = "multiply";
                var canvas2 = _tmpCanvas2;
                canvas2.width = 1;
                canvas2.height = 1;
                var context2 = canvas2.getContext("2d");
                context2.fillStyle = "#fff";
                context2.fillRect(0, 0, 1, 1);
                context.drawImage(canvas2, 0, 0, 1, 1);
                data1 = context.getImageData(0, 0, 1, 1).data[0];
                canvas = _tmpCanvas1;
                canvas.width = 1;
                canvas.height = 1;
                var context = canvas.getContext("2d");
                context.fillStyle = "#fff";
                context.fillRect(0, 0, 1, 1);
                context.globalCompositeOperation = "destination-atop";
                canvas2 = _tmpCanvas2;
                canvas2.width = 1;
                canvas2.height = 1;
                var context2 = canvas2.getContext("2d");
                context2.fillStyle = "#000";
                context2.fillRect(0, 0, 1, 1);
                context.drawImage(canvas2, 0, 0, 1, 1);
                data2 = context.getImageData(0, 0, 1, 1).data[0];
                return 0 === data1 && 0 === data2;
            }();
            if (cc.sys.isMobile) {
                var fontStyle = document.createElement("style");
                fontStyle.type = "text/css";
                document.body.appendChild(fontStyle);
                fontStyle.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}";
            }
            try {
                var localStorage = sys.localStorage = win.localStorage;
                localStorage.setItem("storage", "");
                localStorage.removeItem("storage");
                localStorage = null;
            } catch (e) {
                var warn = function() {
                    cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option");
                };
                sys.localStorage = {
                    getItem: warn,
                    setItem: warn,
                    removeItem: warn,
                    clear: warn
                };
            }
            var _supportCanvas = !!_tmpCanvas1.getContext("2d");
            var _supportWebGL = false;
            if (win.WebGLRenderingContext) {
                var tmpCanvas = document.createElement("CANVAS");
                try {
                    var context = cc.create3DContext(tmpCanvas, {
                        stencil: true
                    });
                    context && context.getShaderPrecisionFormat && (_supportWebGL = true);
                    _supportWebGL && sys.os === sys.OS_IOS && (window.indexedDB || (_supportWebGL = false));
                    if (_supportWebGL && sys.os === sys.OS_ANDROID) {
                        var browserVer = parseFloat(sys.browserVersion);
                        switch (sys.browserType) {
                          case sys.BROWSER_TYPE_MOBILE_QQ:
                          case sys.BROWSER_TYPE_BAIDU:
                          case sys.BROWSER_TYPE_BAIDU_APP:
                            _supportWebGL = browserVer >= 6.2;
                            break;

                          case sys.BROWSER_TYPE_ANDROID:
                            sys.osMainVersion && sys.osMainVersion >= 5 && (_supportWebGL = true);
                            break;

                          case sys.BROWSER_TYPE_CHROME:
                            _supportWebGL = browserVer >= 30;
                            break;

                          case sys.BROWSER_TYPE_UNKNOWN:
                          case sys.BROWSER_TYPE_360:
                          case sys.BROWSER_TYPE_MIUI:
                          case sys.BROWSER_TYPE_UC:
                            _supportWebGL = false;
                        }
                    }
                } catch (e) {}
                tmpCanvas = null;
            }
            var capabilities = sys.capabilities = {
                canvas: _supportCanvas,
                opengl: _supportWebGL
            };
            (void 0 !== docEle["ontouchstart"] || void 0 !== doc["ontouchstart"] || nav.msPointerEnabled) && (capabilities["touches"] = true);
            void 0 !== docEle["onmouseup"] && (capabilities["mouse"] = true);
            void 0 !== docEle["onkeyup"] && (capabilities["keyboard"] = true);
            (win.DeviceMotionEvent || win.DeviceOrientationEvent) && (capabilities["accelerometer"] = true);
            var __audioSupport;
            (function() {
                var DEBUG = false;
                var version = sys.browserVersion;
                var supportWebAudio = !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
                __audioSupport = {
                    ONLY_ONE: false,
                    WEB_AUDIO: supportWebAudio,
                    DELAY_CREATE_CTX: false
                };
                sys.os === sys.OS_IOS && (__audioSupport.USE_LOADER_EVENT = "loadedmetadata");
                if (sys.browserType === sys.BROWSER_TYPE_FIREFOX) {
                    __audioSupport.DELAY_CREATE_CTX = true;
                    __audioSupport.USE_LOADER_EVENT = "canplay";
                }
                sys.os === sys.OS_ANDROID && sys.browserType === sys.BROWSER_TYPE_UC && (__audioSupport.ONE_SOURCE = true);
                DEBUG && setTimeout(function() {
                    cc.log("browse type: " + sys.browserType);
                    cc.log("browse version: " + version);
                    cc.log("MULTI_CHANNEL: " + __audioSupport.MULTI_CHANNEL);
                    cc.log("WEB_AUDIO: " + __audioSupport.WEB_AUDIO);
                    cc.log("AUTOPLAY: " + __audioSupport.AUTOPLAY);
                }, 0);
            })();
            try {
                if (__audioSupport.WEB_AUDIO) {
                    __audioSupport.context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
                    __audioSupport.DELAY_CREATE_CTX && setTimeout(function() {
                        __audioSupport.context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
                    }, 0);
                }
            } catch (error) {
                __audioSupport.WEB_AUDIO = false;
                cc.log("browser don't support web audio");
            }
            var formatSupport = [];
            (function() {
                var audio = document.createElement("audio");
                if (audio.canPlayType) {
                    var ogg = audio.canPlayType('audio/ogg; codecs="vorbis"');
                    ogg && formatSupport.push(".ogg");
                    var mp3 = audio.canPlayType("audio/mpeg");
                    mp3 && formatSupport.push(".mp3");
                    var wav = audio.canPlayType('audio/wav; codecs="1"');
                    wav && formatSupport.push(".wav");
                    var mp4 = audio.canPlayType("audio/mp4");
                    mp4 && formatSupport.push(".mp4");
                    var m4a = audio.canPlayType("audio/x-m4a");
                    m4a && formatSupport.push(".m4a");
                }
            })();
            __audioSupport.format = formatSupport;
            sys.__audioSupport = __audioSupport;
        }
        sys.garbageCollect = function() {};
        sys.dumpRoot = function() {};
        sys.restartVM = function() {};
        sys.cleanScript = function(jsfile) {};
        sys.isObjectValid = function(obj) {
            return !!obj;
        };
        sys.dump = function() {
            var self = this;
            var str = "";
            str += "isMobile : " + self.isMobile + "\r\n";
            str += "language : " + self.language + "\r\n";
            str += "browserType : " + self.browserType + "\r\n";
            str += "browserVersion : " + self.browserVersion + "\r\n";
            str += "capabilities : " + JSON.stringify(self.capabilities) + "\r\n";
            str += "os : " + self.os + "\r\n";
            str += "osVersion : " + self.osVersion + "\r\n";
            str += "platform : " + self.platform + "\r\n";
            str += "Using " + (cc._renderType === cc.game.RENDER_TYPE_WEBGL ? "WEBGL" : "CANVAS") + " renderer.\r\n";
            cc.log(str);
        };
        sys.openURL = function(url) {
            window.open(url);
        };
        module.exports = sys;
    }, {} ],
    72: [ function(require, module, exports) {
        var __BrowserGetter = {
            init: function() {},
            availWidth: function(frame) {
                return cc.sys.windowPixelResolution.width;
            },
            availHeight: function(frame) {
                return cc.sys.windowPixelResolution.height;
            },
            meta: {
                width: "device-width"
            },
            adaptationType: cc.sys.browserType
        };
        var _scissorRect = cc.rect();
        var View = cc._Class.extend({
            _delegate: null,
            _frameSize: null,
            _designResolutionSize: null,
            _originalDesignResolutionSize: null,
            _viewPortRect: null,
            _visibleRect: null,
            _retinaEnabled: false,
            _autoFullScreen: false,
            _devicePixelRatio: 1,
            _viewName: "",
            _resizeCallback: null,
            _orientationChanging: true,
            _scaleX: 1,
            _originalScaleX: 1,
            _scaleY: 1,
            _originalScaleY: 1,
            _isRotated: false,
            _orientation: 3,
            _resolutionPolicy: null,
            _rpExactFit: null,
            _rpShowAll: null,
            _rpNoBorder: null,
            _rpFixedHeight: null,
            _rpFixedWidth: null,
            _initialized: false,
            _contentTranslateLeftTop: null,
            _frameZoomFactor: 1,
            __resizeWithBrowserSize: false,
            _isAdjustViewPort: true,
            _targetDensityDPI: null,
            _antiAliasEnabled: true,
            ctor: function() {
                var _t = this, _strategyer = cc.ContainerStrategy, _strategy = cc.ContentStrategy;
                __BrowserGetter.init(this);
                _t._frameSize = cc.size(0, 0);
                _t._initFrameSize();
                var w = cc.sys.windowPixelResolution.width, h = cc.sys.windowPixelResolution.height;
                _t._designResolutionSize = cc.size(w, h);
                _t._originalDesignResolutionSize = cc.size(w, h);
                _t._viewPortRect = cc.rect(0, 0, w, h);
                _t._visibleRect = cc.rect(0, 0, w, h);
                _t._contentTranslateLeftTop = {
                    left: 0,
                    top: 0
                };
                _t._viewName = "Cocos2dHTML5";
                cc.visibleRect && cc.visibleRect.init(_t._visibleRect);
                _t._rpExactFit = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
                _t._rpShowAll = new cc.ResolutionPolicy(_strategyer.PROPORTION_TO_FRAME, _strategy.SHOW_ALL);
                _t._rpNoBorder = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.NO_BORDER);
                _t._rpFixedHeight = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
                _t._rpFixedWidth = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
                _t._targetDensityDPI = cc.macro.DENSITYDPI_HIGH;
            },
            _resizeEvent: function() {
                var view;
                view = this.setDesignResolutionSize ? this : cc.view;
                var prevFrameW = view._frameSize.width, prevFrameH = view._frameSize.height, prevRotated = view._isRotated;
                view._initFrameSize();
                if (view._isRotated === prevRotated && view._frameSize.width === prevFrameW && view._frameSize.height === prevFrameH) {
                    return;
                }
                var width = view._originalDesignResolutionSize.width;
                var height = view._originalDesignResolutionSize.height;
                width > 0 && view.setDesignResolutionSize(width, height, view._resolutionPolicy);
                view._resizeCallback && view._resizeCallback.call();
            },
            _orientationChange: function() {
                cc.view._orientationChanging = true;
                cc.view._resizeEvent();
            },
            setTargetDensityDPI: function(densityDPI) {
                this._targetDensityDPI = densityDPI;
                this._adjustViewportMeta();
            },
            getTargetDensityDPI: function() {
                return this._targetDensityDPI;
            },
            resizeWithBrowserSize: function(enabled) {},
            setResizeCallback: function(callback) {
                "function" != typeof callback && null != callback || (this._resizeCallback = callback);
            },
            setOrientation: function(orientation) {
                orientation &= cc.macro.ORIENTATION_AUTO;
                orientation && (this._orientation = orientation);
            },
            _initFrameSize: function() {
                var locFrameSize = this._frameSize;
                var w = __BrowserGetter.availWidth(cc.game.frame);
                var h = __BrowserGetter.availHeight(cc.game.frame);
                locFrameSize.width = w;
                locFrameSize.height = h;
                this._isRotated = false;
            },
            _adjustSizeKeepCanvasSize: function() {
                var designWidth = this._originalDesignResolutionSize.width;
                var designHeight = this._originalDesignResolutionSize.height;
                designWidth > 0 && this.setDesignResolutionSize(designWidth, designHeight, this._resolutionPolicy);
            },
            _adjustViewportMeta: function() {},
            _resetScale: function() {
                this._scaleX = this._originalScaleX;
                this._scaleY = this._originalScaleY;
            },
            _adjustSizeToBrowser: function() {},
            initialize: function() {
                this._initialized = true;
            },
            adjustViewPort: function(enabled) {
                this._isAdjustViewPort = enabled;
            },
            enableRetina: function(enabled) {
                this._retinaEnabled = !!enabled;
            },
            isRetinaEnabled: function() {
                return this._retinaEnabled;
            },
            enableAntiAlias: function(enabled) {},
            isAntiAliasEnabled: function() {
                return this._antiAliasEnabled;
            },
            enableAutoFullScreen: function(enabled) {},
            isAutoFullScreenEnabled: function() {
                return this._autoFullScreen;
            },
            isViewReady: function() {
                return cc.game.canvas && cc._renderContext;
            },
            setFrameZoomFactor: function(zoomFactor) {
                this._frameZoomFactor = zoomFactor;
                this.centerWindow();
                cc.director.setProjection(cc.director.getProjection());
            },
            setContentTranslateLeftTop: function(offsetLeft, offsetTop) {
                this._contentTranslateLeftTop = {
                    left: offsetLeft,
                    top: offsetTop
                };
            },
            getContentTranslateLeftTop: function() {
                return this._contentTranslateLeftTop;
            },
            setCanvasSize: function(width, height) {
                var canvas = cc.game.canvas;
                var container = cc.game.container;
                canvas.width = width * this._devicePixelRatio;
                canvas.height = height * this._devicePixelRatio;
                canvas.style.width = width + "px";
                canvas.style.height = height + "px";
                container.style.width = width + "px";
                container.style.height = height + "px";
                this._resizeEvent();
            },
            getCanvasSize: function() {
                return cc.size(cc.game.canvas.width, cc.game.canvas.height);
            },
            getFrameSize: function() {
                return cc.size(this._frameSize.width, this._frameSize.height);
            },
            setFrameSize: function(width, height) {},
            getVisibleSize: function() {
                return cc.size(this._visibleRect.width, this._visibleRect.height);
            },
            getVisibleSizeInPixel: function() {
                return cc.size(this._visibleRect.width * this._scaleX, this._visibleRect.height * this._scaleY);
            },
            getVisibleOrigin: function() {
                return cc.p(this._visibleRect.x, this._visibleRect.y);
            },
            getVisibleOriginInPixel: function() {
                return cc.p(this._visibleRect.x * this._scaleX, this._visibleRect.y * this._scaleY);
            },
            canSetContentScaleFactor: function() {
                return true;
            },
            getResolutionPolicy: function() {
                return this._resolutionPolicy;
            },
            setResolutionPolicy: function(resolutionPolicy) {
                var _t = this;
                if (resolutionPolicy instanceof cc.ResolutionPolicy) {
                    _t._resolutionPolicy = resolutionPolicy;
                } else {
                    var _locPolicy = cc.ResolutionPolicy;
                    resolutionPolicy === _locPolicy.EXACT_FIT && (_t._resolutionPolicy = _t._rpExactFit);
                    resolutionPolicy === _locPolicy.SHOW_ALL && (_t._resolutionPolicy = _t._rpShowAll);
                    resolutionPolicy === _locPolicy.NO_BORDER && (_t._resolutionPolicy = _t._rpNoBorder);
                    resolutionPolicy === _locPolicy.FIXED_HEIGHT && (_t._resolutionPolicy = _t._rpFixedHeight);
                    resolutionPolicy === _locPolicy.FIXED_WIDTH && (_t._resolutionPolicy = _t._rpFixedWidth);
                }
            },
            setDesignResolutionSize: function(width, height, resolutionPolicy) {
                if (!(width > 0 || height > 0)) {
                    cc.log(cc._LogInfos.view.setDesignResolutionSize);
                    return;
                }
                this.setResolutionPolicy(resolutionPolicy);
                var policy = this._resolutionPolicy;
                if (!policy) {
                    cc.log(cc._LogInfos.view.setDesignResolutionSize_2);
                    return;
                }
                policy.preApply(this);
                cc.sys.isMobile && this._adjustViewportMeta();
                this._initFrameSize();
                this._originalDesignResolutionSize.width = this._designResolutionSize.width = width;
                this._originalDesignResolutionSize.height = this._designResolutionSize.height = height;
                var result = policy.apply(this, this._designResolutionSize);
                if (result.scale && 2 === result.scale.length) {
                    this._scaleX = result.scale[0];
                    this._scaleY = result.scale[1];
                }
                if (result.viewport) {
                    var vp = this._viewPortRect, vb = this._visibleRect, rv = result.viewport;
                    vp.x = rv.x;
                    vp.y = rv.y;
                    vp.width = rv.width;
                    vp.height = rv.height;
                    vb.x = -vp.x / this._scaleX;
                    vb.y = -vp.y / this._scaleY;
                    vb.width = this._frameSize.width / this._scaleX;
                    vb.height = this._frameSize.height / this._scaleY;
                    cc._renderContext.setOffset && cc._renderContext.setOffset(vp.x, -vp.y);
                }
                var director = cc.director;
                director._winSizeInPoints.width = this._designResolutionSize.width;
                director._winSizeInPoints.height = this._designResolutionSize.height;
                policy.postApply(this);
                cc.winSize.width = director._winSizeInPoints.width;
                cc.winSize.height = director._winSizeInPoints.height;
                cc.renderer._allNeedDraw = true;
                this._originalScaleX = this._scaleX;
                this._originalScaleY = this._scaleY;
                cc.visibleRect && cc.visibleRect.init(this._visibleRect);
            },
            getDesignResolutionSize: function() {
                return cc.size(this._designResolutionSize.width, this._designResolutionSize.height);
            },
            setRealPixelResolution: function(width, height, resolutionPolicy) {
                this.setDesignResolutionSize(width, height, resolutionPolicy);
            },
            setViewPortInPoints: function(x, y, w, h) {},
            setScissorInPoints: function(x, y, w, h) {},
            isScissorEnabled: function() {
                return false;
            },
            getScissorRect: function() {
                return cc.rect(_scissorRect);
            },
            setViewName: function(viewName) {
                null != viewName && viewName.length > 0 && (this._viewName = viewName);
            },
            getViewName: function() {
                return this._viewName;
            },
            getViewPortRect: function() {
                return this._viewPortRect;
            },
            getScaleX: function() {
                return this._scaleX;
            },
            getScaleY: function() {
                return this._scaleY;
            },
            getDevicePixelRatio: function() {
                return this._devicePixelRatio;
            },
            convertToLocationInView: function(tx, ty, relatedPos) {
                var x = this._devicePixelRatio * (tx - relatedPos.left);
                var y = this._devicePixelRatio * (relatedPos.top + relatedPos.height - ty);
                return this._isRotated ? {
                    x: this._viewPortRect.width - y,
                    y: x
                } : {
                    x: x,
                    y: y
                };
            },
            _convertMouseToLocationInView: function(point, relatedPos) {
                var viewport = this._viewPortRect, _t = this;
                point.x = (_t._devicePixelRatio * (point.x - relatedPos.left) - viewport.x) / _t._scaleX;
                point.y = (_t._devicePixelRatio * (relatedPos.top + relatedPos.height - point.y) - viewport.y) / _t._scaleY;
            },
            _convertPointWithScale: function(point) {
                var viewport = this._viewPortRect;
                point.x = (point.x - viewport.x) / this._scaleX;
                point.y = (point.y - viewport.y) / this._scaleY;
            },
            _convertTouchesWithScale: function(touches) {
                var viewport = this._viewPortRect, scaleX = this._scaleX, scaleY = this._scaleY, selTouch, selPoint, selPrePoint;
                for (var i = 0; i < touches.length; i++) {
                    selTouch = touches[i];
                    selPoint = selTouch._point;
                    selPrePoint = selTouch._prevPoint;
                    selPoint.x = (selPoint.x - viewport.x) / scaleX;
                    selPoint.y = (selPoint.y - viewport.y) / scaleY;
                    selPrePoint.x = (selPrePoint.x - viewport.x) / scaleX;
                    selPrePoint.y = (selPrePoint.y - viewport.y) / scaleY;
                }
            }
        });
        View._getInstance = function() {
            if (!this._instance) {
                this._instance = this._instance || new View();
                this._instance.initialize();
            }
            return this._instance;
        };
        cc.ContainerStrategy = cc._Class.extend({
            preApply: function(view) {},
            apply: function(view, designedResolution) {},
            postApply: function(view) {},
            _setupContainer: function(view, w, h) {},
            _fixContainer: function() {}
        });
        cc.ContentStrategy = cc._Class.extend({
            _result: {
                scale: [ 1, 1 ],
                viewport: null
            },
            _buildResult: function(containerW, containerH, contentW, contentH, scaleX, scaleY) {
                Math.abs(containerW - contentW) < 2 && (contentW = containerW);
                Math.abs(containerH - contentH) < 2 && (contentH = containerH);
                var viewport = cc.rect(Math.round((containerW - contentW) / 2), Math.round((containerH - contentH) / 2), contentW, contentH);
                cc._renderType === cc.game.RENDER_TYPE_CANVAS;
                this._result.scale = [ scaleX, scaleY ];
                this._result.viewport = viewport;
                return this._result;
            },
            preApply: function(view) {},
            apply: function(view, designedResolution) {
                return {
                    scale: [ 1, 1 ]
                };
            },
            postApply: function(view) {}
        });
        (function() {
            var EqualToFrame = cc.ContainerStrategy.extend({
                apply: function(view) {}
            });
            var ProportionalToFrame = cc.ContainerStrategy.extend({
                apply: function(view, designedResolution) {}
            });
            cc.ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame();
            cc.ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame();
            var ExactFit = cc.ContentStrategy.extend({
                apply: function(view, designedResolution) {
                    var containerW = view._frameSize.width, containerH = view._frameSize.height, scaleX = containerW / designedResolution.width, scaleY = containerH / designedResolution.height;
                    return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY);
                }
            });
            var ShowAll = cc.ContentStrategy.extend({
                apply: function(view, designedResolution) {
                    var containerW = view._frameSize.width, containerH = view._frameSize.height, designW = designedResolution.width, designH = designedResolution.height, scaleX = containerW / designW, scaleY = containerH / designH, scale = 0, contentW, contentH;
                    scaleX < scaleY ? (scale = scaleX, contentW = containerW, contentH = designH * scale) : (scale = scaleY, 
                    contentW = designW * scale, contentH = containerH);
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                }
            });
            var NoBorder = cc.ContentStrategy.extend({
                apply: function(view, designedResolution) {
                    var containerW = view._frameSize.width, containerH = view._frameSize.height, designW = designedResolution.width, designH = designedResolution.height, scaleX = containerW / designW, scaleY = containerH / designH, scale, contentW, contentH;
                    scaleX < scaleY ? (scale = scaleY, contentW = designW * scale, contentH = containerH) : (scale = scaleX, 
                    contentW = containerW, contentH = designH * scale);
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                }
            });
            var FixedHeight = cc.ContentStrategy.extend({
                apply: function(view, designedResolution) {
                    var containerW = view._frameSize.width, containerH = view._frameSize.height, designH = designedResolution.height, scale = containerH / designH, contentW = containerW, contentH = containerH;
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                },
                postApply: function(view) {
                    cc.director._winSizeInPoints = view.getVisibleSize();
                }
            });
            var FixedWidth = cc.ContentStrategy.extend({
                apply: function(view, designedResolution) {
                    var containerW = view._frameSize.width, containerH = view._frameSize.height, designW = designedResolution.width, scale = containerW / designW, contentW = containerW, contentH = containerH;
                    return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
                },
                postApply: function(view) {
                    cc.director._winSizeInPoints = view.getVisibleSize();
                }
            });
            cc.ContentStrategy.EXACT_FIT = new ExactFit();
            cc.ContentStrategy.SHOW_ALL = new ShowAll();
            cc.ContentStrategy.NO_BORDER = new NoBorder();
            cc.ContentStrategy.FIXED_HEIGHT = new FixedHeight();
            cc.ContentStrategy.FIXED_WIDTH = new FixedWidth();
        })();
        cc.ResolutionPolicy = cc._Class.extend({
            _containerStrategy: null,
            _contentStrategy: null,
            ctor: function(containerStg, contentStg) {
                this.setContainerStrategy(containerStg);
                this.setContentStrategy(contentStg);
            },
            preApply: function(view) {
                this._containerStrategy.preApply(view);
                this._contentStrategy.preApply(view);
            },
            apply: function(view, designedResolution) {
                this._containerStrategy.apply(view, designedResolution);
                return this._contentStrategy.apply(view, designedResolution);
            },
            postApply: function(view) {
                this._containerStrategy.postApply(view);
                this._contentStrategy.postApply(view);
            },
            setContainerStrategy: function(containerStg) {
                containerStg instanceof cc.ContainerStrategy && (this._containerStrategy = containerStg);
            },
            setContentStrategy: function(contentStg) {
                contentStg instanceof cc.ContentStrategy && (this._contentStrategy = contentStg);
            }
        });
        cc.js.get(cc.ResolutionPolicy.prototype, "canvasSize", function() {
            return cc.v2(cc.game.canvas.width, cc.game.canvas.height);
        });
        cc.ResolutionPolicy.EXACT_FIT = 0;
        cc.ResolutionPolicy.NO_BORDER = 1;
        cc.ResolutionPolicy.SHOW_ALL = 2;
        cc.ResolutionPolicy.FIXED_HEIGHT = 3;
        cc.ResolutionPolicy.FIXED_WIDTH = 4;
        cc.ResolutionPolicy.UNKNOWN = 5;
        module.exports = View;
    }, {} ],
    73: [ function(require, module, exports) {
        cc.visibleRect = {
            topLeft: cc.p(0, 0),
            topRight: cc.p(0, 0),
            top: cc.p(0, 0),
            bottomLeft: cc.p(0, 0),
            bottomRight: cc.p(0, 0),
            bottom: cc.p(0, 0),
            center: cc.p(0, 0),
            left: cc.p(0, 0),
            right: cc.p(0, 0),
            width: 0,
            height: 0,
            init: function(visibleRect) {
                var w = this.width = visibleRect.width;
                var h = this.height = visibleRect.height;
                var l = visibleRect.x, b = visibleRect.y, t = b + h, r = l + w;
                this.topLeft.x = l;
                this.topLeft.y = t;
                this.topRight.x = r;
                this.topRight.y = t;
                this.top.x = l + w / 2;
                this.top.y = t;
                this.bottomLeft.x = l;
                this.bottomLeft.y = b;
                this.bottomRight.x = r;
                this.bottomRight.y = b;
                this.bottom.x = l + w / 2;
                this.bottom.y = b;
                this.center.x = l + w / 2;
                this.center.y = b + h / 2;
                this.left.x = l;
                this.left.y = b + h / 2;
                this.right.x = r;
                this.right.y = b + h / 2;
            }
        };
    }, {} ],
    74: [ function(require, module, exports) {
        var ClassManager = cc.ClassManager = {
            id: 0 | 998 * Math.random(),
            instanceId: 0 | 998 * Math.random(),
            getNewID: function() {
                return this.id++;
            },
            getNewInstanceId: function() {
                return this.instanceId++;
            }
        };
        var fnTest = /\b_super\b/;
        var Class = function() {};
        Class.extend = function(props) {
            var _super = this.prototype;
            var prototype = Object.create(_super);
            var classId = ClassManager.getNewID();
            ClassManager[classId] = _super;
            var nonEnumerableDesc = {
                writable: true,
                configurable: true
            };
            prototype.__instanceId = null;
            function _Class() {
                this.__instanceId = ClassManager.getNewInstanceId();
                this.ctor && this.ctor.apply(this, arguments);
            }
            _Class.id = classId;
            nonEnumerableDesc.value = classId;
            Object.defineProperty(prototype, "__cid__", nonEnumerableDesc);
            _Class.prototype = prototype;
            nonEnumerableDesc.value = _Class;
            Object.defineProperty(_Class.prototype, "constructor", nonEnumerableDesc);
            for (var idx = 0, li = arguments.length; idx < li; ++idx) {
                var prop = arguments[idx];
                for (var name in prop) {
                    var isFunc = "function" == typeof prop[name];
                    var override = "function" == typeof _super[name];
                    var hasSuperCall = fnTest.test(prop[name]);
                    if (isFunc && override && hasSuperCall) {
                        nonEnumerableDesc.value = function(name, fn) {
                            return function() {
                                var tmp = this._super;
                                this._super = _super[name];
                                var ret = fn.apply(this, arguments);
                                this._super = tmp;
                                return ret;
                            };
                        }(name, prop[name]);
                        Object.defineProperty(prototype, name, nonEnumerableDesc);
                    } else {
                        if (isFunc) {
                            nonEnumerableDesc.value = prop[name];
                            Object.defineProperty(prototype, name, nonEnumerableDesc);
                        } else {
                            prototype[name] = prop[name];
                        }
                    }
                }
            }
            _Class.extend = Class.extend;
            _Class.implement = function(prop) {
                for (var name in prop) {
                    prototype[name] = prop[name];
                }
            };
            return _Class;
        };
        cc.defineGetterSetter = function(proto, prop, getter, setter, getterName, setterName) {
            if (proto.__defineGetter__) {
                getter && proto.__defineGetter__(prop, getter);
                setter && proto.__defineSetter__(prop, setter);
            } else {
                if (!Object.defineProperty) {
                    throw new Error("browser does not support getters");
                }
                var desc = {
                    configurable: true
                };
                getter && (desc.get = getter);
                setter && (desc.set = setter);
                Object.defineProperty(proto, prop, desc);
            }
        };
        cc.clone = function(obj) {
            var newObj = obj.constructor ? new obj.constructor() : {};
            for (var key in obj) {
                var copy = obj[key];
                "object" != typeof copy || !copy || copy instanceof _ccsg.Node || copy instanceof HTMLElement ? newObj[key] = copy : newObj[key] = cc.clone(copy);
            }
            return newObj;
        };
        cc._Class = module.exports = Class;
    }, {} ],
    75: [ function(require, module, exports) {
        var JS = require("./js");
        var isPlainEmptyObj = require("./utils").isPlainEmptyObj_DEV;
        function createAttrsSingle(owner, ownerCtor, superAttrs) {
            var AttrsCtor;
            AttrsCtor = function() {};
            superAttrs && JS.extend(AttrsCtor, superAttrs.constructor);
            var attrs = new AttrsCtor();
            Object.defineProperty(owner, "__attrs__", {
                value: attrs
            });
            return attrs;
        }
        function createAttrs(subclass) {
            var superClass;
            var chains = cc.Class.getInheritanceChain(subclass);
            for (var i = chains.length - 1; i >= 0; i--) {
                var cls = chains[i];
                var attrs = cls.__attrs__;
                if (!attrs) {
                    superClass = chains[i + 1];
                    createAttrsSingle(cls, cls, superClass && superClass.__attrs__);
                }
            }
            superClass = chains[0];
            createAttrsSingle(subclass, subclass, superClass && superClass.__attrs__);
            return subclass.__attrs__;
        }
        var DELIMETER = "$_$";
        function attr(ctor, propName, newAttrs) {
            var attrs, setter, key;
            if ("function" == typeof ctor) {
                attrs = ctor.__attrs__ || createAttrs(ctor);
                setter = attrs.constructor.prototype;
            } else {
                var instance = ctor;
                attrs = instance.__attrs__;
                if (!attrs) {
                    ctor = instance.constructor;
                    var clsAttrs = ctor.__attrs__ || createAttrs(ctor);
                    attrs = createAttrsSingle(instance, ctor, clsAttrs);
                }
                setter = attrs;
            }
            if ("undefined" == typeof newAttrs) {
                var prefix = propName + DELIMETER;
                var ret = {};
                for (key in attrs) {
                    key.startsWith(prefix) && (ret[key.slice(prefix.length)] = attrs[key]);
                }
                return ret;
            }
            if ("object" == typeof newAttrs) {
                for (key in newAttrs) {
                    95 !== key.charCodeAt(0) && (setter[propName + DELIMETER + key] = newAttrs[key]);
                }
            } else {
                cc.error("attribute must be type object");
            }
        }
        function getClassAttrs(ctor) {
            return ctor.__attrs__ || createAttrs(ctor);
        }
        function setClassAttr(ctor, propName, key, value) {
            var attrs = ctor.__attrs__ || createAttrs(ctor);
            attrs.constructor.prototype[propName + DELIMETER + key] = value;
        }
        cc.Integer = "Integer";
        cc.Float = "Float";
        cc.Boolean = "Boolean";
        cc.String = "String";
        var NonSerialized = {
            serializable: false,
            _canUsedInGetter: false
        };
        var EditorOnly = {
            editorOnly: true,
            _canUsedInGetter: false
        };
        function getTypeChecker(type, attrName) {
            return function(constructor, mainPropName) {
                var propInfo = '"' + JS.getClassName(constructor) + "." + mainPropName + '"';
                var mainPropAttrs = attr(constructor, mainPropName);
                if (!mainPropAttrs.saveUrlAsAsset) {
                    var mainPropAttrsType = mainPropAttrs.type;
                    mainPropAttrsType !== cc.Integer && mainPropAttrsType !== cc.Float || (mainPropAttrsType = "Number");
                    if (mainPropAttrsType !== type) {
                        cc.warn("Can only indicate one type attribute for %s.", propInfo);
                        return;
                    }
                }
                if (!mainPropAttrs.hasOwnProperty("default")) {
                    return;
                }
                var defaultVal = mainPropAttrs["default"];
                if ("undefined" == typeof defaultVal) {
                    return;
                }
                var isContainer = Array.isArray(defaultVal) || isPlainEmptyObj(defaultVal);
                if (isContainer) {
                    return;
                }
                var defaultType = typeof defaultVal;
                var type_lowerCase = type.toLowerCase();
                if (defaultType === type_lowerCase) {
                    if (!mainPropAttrs.saveUrlAsAsset) {
                        if ("object" === type_lowerCase) {
                            if (!defaultVal || defaultVal instanceof mainPropAttrs.ctor) {
                                return;
                            }
                            cc.warn("The default value of %s is not instance of %s.", propInfo, JS.getClassName(mainPropAttrs.ctor));
                        } else {
                            "Number" !== type && cc.warn('No needs to indicate the "%s" attribute for %s, which its default value is type of %s.', attrName, propInfo, type);
                        }
                    }
                } else {
                    if ("function" === defaultType) {
                        return;
                    }
                    if (type === cc.String && null == defaultVal) {
                        cc.isChildClassOf(mainPropAttrs.ctor, cc.RawAsset) || cc.warn("The default value of %s must be an empty string.", propInfo);
                    } else {
                        if (mainPropAttrs.ctor !== String || "string" !== defaultType && null != defaultVal) {
                            if (mainPropAttrs.ctor === Boolean && "boolean" === defaultType) {
                                mainPropAttrs.type = cc.Boolean;
                                cc.warn("The type of %s must be cc.Boolean, not Boolean.", propInfo);
                            } else {
                                if (mainPropAttrs.ctor === Number && "number" === defaultType) {
                                    mainPropAttrs.type = cc.Float;
                                    cc.warn("The type of %s must be cc.Float or cc.Integer, not Number.", propInfo);
                                } else {
                                    cc.warn('Can not indicate the "%s" attribute for %s, which its default value is type of %s.', attrName, propInfo, defaultType);
                                }
                            }
                        } else {
                            mainPropAttrs.type = cc.String;
                            cc.warn("The type of %s must be cc.String, not String.", propInfo);
                        }
                    }
                }
                delete mainPropAttrs.type;
            };
        }
        function ObjectType(typeCtor) {
            return {
                type: "Object",
                ctor: typeCtor,
                _onAfterProp: function(classCtor, mainPropName) {
                    getTypeChecker("Object", "type")(classCtor, mainPropName);
                    var defaultDef = getClassAttrs(classCtor)[mainPropName + DELIMETER + "default"];
                    var defaultVal = defaultDef;
                    if ("function" == typeof defaultDef) {
                        try {
                            defaultVal = defaultDef();
                        } catch (e) {
                            return;
                        }
                    }
                    if (!Array.isArray(defaultVal) && cc.isChildClassOf(typeCtor, cc.ValueType)) {
                        var typename = JS.getClassName(typeCtor);
                        var info = cc.js.formatStr('No need to specify the "type" of "%s.%s" because %s is a child class of ValueType.', JS.getClassName(classCtor), mainPropName, typename);
                        defaultDef ? cc.log(info) : cc.warn(info + ' Just set the default value to "new %s()" and it will be handled properly.', typename, JS.getClassName(classCtor), mainPropName, typename);
                    }
                }
            };
        }
        function RawType(typename) {
            var NEED_EXT_TYPES = [ "image", "json", "text", "audio" ];
            return {
                rawType: typename,
                serializable: false,
                _canUsedInGetter: false,
                _onAfterProp: function(constructor, mainPropName) {
                    var checked = function checkRawType(constructor) {
                        if (!cc.isChildClassOf(constructor, cc.Asset)) {
                            cc.error("RawType is only available for Assets");
                            return false;
                        }
                        var attrs = getClassAttrs(constructor);
                        var found = false;
                        for (var p = 0; p < constructor.__props__.length; p++) {
                            var propName = constructor.__props__[p];
                            var rawType = attrs[propName + DELIMETER + "rawType"];
                            if (rawType) {
                                var containsUppercase = rawType.toLowerCase() !== rawType;
                                if (containsUppercase) {
                                    cc.error("RawType name cannot contain uppercase");
                                    return false;
                                }
                                if (found) {
                                    cc.error("Each asset cannot have more than one RawType");
                                    return false;
                                }
                                found = true;
                            }
                        }
                        return true;
                    }(constructor);
                }
            };
        }
        module.exports = {
            attr: attr,
            getClassAttrs: getClassAttrs,
            setClassAttr: setClassAttr,
            DELIMETER: DELIMETER,
            getTypeChecker: getTypeChecker,
            NonSerialized: NonSerialized,
            EditorOnly: EditorOnly,
            ObjectType: ObjectType,
            RawType: RawType,
            ScriptUuid: {}
        };
    }, {
        "./js": 81,
        "./utils": 85
    } ],
    76: [ function(require, module, exports) {
        var JS = require("./js");
        var CallbacksHandler = function() {
            this._callbackTable = {};
        };
        var REMOVE_PLACEHOLDER = Number.POSITIVE_INFINITY;
        CallbacksHandler.REMOVE_PLACEHOLDER = REMOVE_PLACEHOLDER;
        CallbacksHandler.prototype._clearToRemove = function(key) {
            var list = this._callbackTable[key];
            if (this._toRemove[key] && list) {
                var count, i;
                for (i = list.length - 1; i >= 0; ) {
                    count = 0;
                    while (list[i] === REMOVE_PLACEHOLDER) {
                        i--;
                        count++;
                    }
                    count > 0 ? list.splice(i + 1, count) : i--;
                }
                delete this._toRemove[key];
            }
            if (this._toRemoveAll) {
                this.removeAll(this._toRemoveAll);
                this._toRemoveAll = null;
            }
        };
        CallbacksHandler.prototype.add = function(key, callback, target) {
            var list = this._callbackTable[key];
            if ("undefined" != typeof list) {
                list.push(callback);
                "object" == typeof target && list.push(target);
                return false;
            }
            list = "object" == typeof target ? [ callback, target ] : [ callback ];
            this._callbackTable[key] = list;
            return true;
        };
        CallbacksHandler.prototype.has = function(key, callback, target) {
            var list = this._callbackTable[key], callbackTarget, index;
            if (list && list.length > 0) {
                if (!callback) {
                    return true;
                }
                if ("function" != typeof callback) {
                    return false;
                }
                index = list.indexOf(callback);
                while (index !== -1) {
                    callbackTarget = list[index + 1];
                    "object" != typeof callbackTarget && (callbackTarget = void 0);
                    if (callbackTarget === target) {
                        return true;
                    }
                    index = cc.js.array.indexOf.call(list, callback, index + 1);
                }
                return false;
            }
            return false;
        };
        CallbacksHandler.prototype.removeAll = function(key) {
            if (this._invoking[key]) {
                this._toRemoveAll = key;
                return;
            }
            if ("object" == typeof key) {
                var target = key, list, index, callback;
                for (key in this._callbackTable) {
                    list = this._callbackTable[key];
                    index = list.lastIndexOf(target);
                    while (index !== -1) {
                        callback = list[index - 1];
                        "function" == typeof callback ? list.splice(index - 1, 2) : list.splice(index, 1);
                        index = list.lastIndexOf(target);
                    }
                }
            } else {
                delete this._callbackTable[key];
            }
        };
        CallbacksHandler.prototype.remove = function(key, callback, target) {
            var list = this._callbackTable[key], index, callbackTarget;
            if (list) {
                index = list.indexOf(callback);
                while (index !== -1) {
                    callbackTarget = list[index + 1];
                    "object" != typeof callbackTarget && (callbackTarget = void 0);
                    if (callbackTarget === target) {
                        if (this._invoking[key]) {
                            list[index] = REMOVE_PLACEHOLDER;
                            callbackTarget && (list[index + 1] = REMOVE_PLACEHOLDER);
                            this._toRemove[key] = true;
                        } else {
                            list.splice(index, callbackTarget ? 2 : 1);
                        }
                        break;
                    }
                    index = cc.js.array.indexOf.call(list, callback, index + 1);
                }
                return true;
            }
            return false;
        };
        var CallbacksInvoker = function() {
            CallbacksHandler.call(this);
            this._invoking = {};
            this._toRemove = {};
            this._toRemoveAll = null;
        };
        JS.extend(CallbacksInvoker, CallbacksHandler);
        CallbacksInvoker.prototype.invoke = function(key, p1, p2, p3, p4, p5) {
            this._invoking[key] = true;
            var list = this._callbackTable[key];
            if (list) {
                var i, endIndex = list.length - 1;
                for (i = 0; i <= endIndex; ) {
                    var callingFunc = list[i];
                    var increment = 1;
                    if (callingFunc !== REMOVE_PLACEHOLDER) {
                        var target = list[i + 1];
                        var hasTarget = target && "object" == typeof target;
                        if (hasTarget) {
                            callingFunc.call(target, p1, p2, p3, p4, p5);
                            increment = 2;
                        } else {
                            callingFunc(p1, p2, p3, p4, p5);
                        }
                    }
                    i += increment;
                }
            }
            this._invoking[key] = false;
            this._clearToRemove(key);
        };
        CallbacksInvoker.prototype.invokeAndRemove = function(key, p1, p2, p3, p4, p5) {
            this._invoking[key] = true;
            var list = this._callbackTable[key], i, l, increment, callingFunc, target;
            if (list) {
                for (i = 0, l = list.length; i < l; ) {
                    callingFunc = list[i];
                    increment = 1;
                    if (callingFunc !== REMOVE_PLACEHOLDER) {
                        target = list[i + 1];
                        if (target && "object" == typeof target) {
                            callingFunc.call(target, p1, p2, p3, p4, p5);
                            increment = 2;
                        } else {
                            callingFunc(p1, p2, p3, p4, p5);
                        }
                    }
                    i += increment;
                }
            }
            this._invoking[key] = false;
            delete this._toRemove[key];
            this.removeAll(key);
        };
        CallbacksInvoker.prototype.bindKey = function(key, remove) {
            var self = this;
            return function bindedInvocation(p1, p2, p3, p4, p5) {
                var list = self._callbackTable[key], i, l, target;
                if (list) {
                    for (i = 0, l = list.length; i < l; ) {
                        target = list[i + 1];
                        if (target && "object" == typeof target) {
                            list[i].call(target, p1, p2, p3, p4, p5);
                            i += 2;
                        } else {
                            list[i](p1, p2, p3, p4, p5);
                            ++i;
                        }
                    }
                }
                remove && self.removeAll(key);
            };
        };
        CallbacksInvoker.CallbacksHandler = CallbacksHandler;
        module.exports = CallbacksInvoker;
    }, {
        "./js": 81
    } ],
    77: [ function(require, module, exports) {
        var JS = require("./js");
        var Attr = require("./attribute");
        var Details = function() {
            this.uuidList = [];
            this.uuidObjList = [];
            this.uuidPropList = [];
            this.rawProp = "";
            this.visit = null;
        };
        Details.prototype.reset = function() {
            this.uuidList.length = 0;
            this.uuidObjList.length = 0;
            this.uuidPropList.length = 0;
            this.rawProp = "";
        };
        Details.prototype.assignAssetsBy = function(getter) {
            for (var i = 0, len = this.uuidList.length; i < len; i++) {
                var uuid = this.uuidList[i];
                var obj = this.uuidObjList[i];
                var prop = this.uuidPropList[i];
                obj[prop] = getter(uuid);
            }
        };
        Details.prototype.getUuidOf = function(obj, propName) {
            for (var i = 0; i < this.uuidObjList.length; i++) {
                if (this.uuidObjList[i] === obj && this.uuidPropList[i] === propName) {
                    return this.uuidList[i];
                }
            }
            return "";
        };
        Details.prototype.push = function(obj, propName, uuid) {
            this.uuidList.push(uuid);
            this.uuidObjList.push(obj);
            this.uuidPropList.push(propName);
        };
        var _Deserializer = function() {
            function _Deserializer(jsonObj, result, target, classFinder, customEnv, ignoreEditorOnly) {
                this._classFinder = classFinder;
                this._target = target;
                this._ignoreEditorOnly = ignoreEditorOnly;
                this._idList = [];
                this._idObjList = [];
                this._idPropList = [];
                this.result = result || new Details();
                this.customEnv = customEnv;
                if (Array.isArray(jsonObj)) {
                    var jsonArray = jsonObj;
                    var refCount = jsonArray.length;
                    this.deserializedList = new Array(refCount);
                    for (var i = 0; i < refCount; i++) {
                        if (jsonArray[i]) {
                            var mainTarget;
                            mainTarget = 0 === i && target;
                            this.deserializedList[i] = _deserializeObject(this, jsonArray[i], mainTarget);
                        }
                    }
                    this.deserializedData = refCount > 0 ? this.deserializedList[0] : [];
                } else {
                    this.deserializedList = [ null ];
                    this.deserializedData = jsonObj ? _deserializeObject(this, jsonObj, target) : null;
                    this.deserializedList[0] = this.deserializedData;
                }
                _dereference(this);
            }
            function _dereference(self) {
                var deserializedList = self.deserializedList;
                var idPropList = self._idPropList;
                var idList = self._idList;
                var idObjList = self._idObjList;
                for (var i = 0, len = self._idList.length; i < len; i++) {
                    var propName = idPropList[i];
                    var id = idList[i];
                    idObjList[i][propName] = deserializedList[id];
                }
            }
            _Deserializer.prototype._deserializeObjField = function(obj, jsonObj, propName, target) {
                var id = jsonObj.__id__;
                if ("undefined" == typeof id) {
                    var uuid = jsonObj.__uuid__;
                    if (uuid) {
                        this.result.uuidList.push(uuid);
                        this.result.uuidObjList.push(obj);
                        this.result.uuidPropList.push(propName);
                    } else {
                        obj[propName] = _deserializeObject(this, jsonObj, target && target[propName]);
                        this.result.visit && this.result.visit(obj, propName);
                    }
                } else {
                    var dObj = this.deserializedList[id];
                    if (dObj) {
                        obj[propName] = dObj;
                    } else {
                        this._idList.push(id);
                        this._idObjList.push(obj);
                        this._idPropList.push(propName);
                    }
                    this.result.visit && this.result.visit(obj, propName);
                }
            };
            function _deserializePrimitiveObject(self, instance, serialized) {
                for (var propName in serialized) {
                    if (serialized.hasOwnProperty(propName)) {
                        var prop = serialized[propName];
                        if ("object" != typeof prop) {
                            if ("__type__" !== propName) {
                                instance[propName] = prop;
                                self.result.visit && self.result.visit(instance, propName);
                            }
                        } else {
                            prop ? self._deserializeObjField(instance, prop, propName, self._target && instance) : instance[propName] = null;
                        }
                    }
                }
            }
            function _deserializeTypedObject(self, instance, serialized) {
                for (var propName in instance) {
                    var prop = serialized[propName];
                    "undefined" != typeof prop && serialized.hasOwnProperty(propName) && ("object" != typeof prop ? instance[propName] = prop : prop ? self._deserializeObjField(instance, prop, propName, self._target && instance) : instance[propName] = null);
                }
            }
            var RAW_TYPE = Attr.DELIMETER + "rawType";
            var EDITOR_ONLY = Attr.DELIMETER + "editorOnly";
            var SERIALIZABLE = Attr.DELIMETER + "serializable";
            function _deserializeFireClass(self, obj, serialized, klass, target) {
                var props = klass.__props__;
                var attrs = Attr.getClassAttrs(klass);
                for (var p = 0; p < props.length; p++) {
                    var propName = props[p];
                    var rawType = attrs[propName + RAW_TYPE];
                    if (rawType) {
                        self.result.rawProp && cc.error("not support multi raw object in a file");
                        self.result.rawProp = propName;
                    } else {
                        if (attrs[propName + EDITOR_ONLY]) {
                            var mayUsedInPersistRoot = obj instanceof cc.Node && "_id" === propName;
                            if (!mayUsedInPersistRoot) {
                                continue;
                            }
                        }
                        if (false === attrs[propName + SERIALIZABLE]) {
                            continue;
                        }
                        var prop = serialized[propName];
                        if ("undefined" == typeof prop) {
                            continue;
                        }
                        "object" != typeof prop ? obj[propName] = prop : prop ? self._deserializeObjField(obj, prop, propName, target && obj) : obj[propName] = null;
                    }
                }
                if ("_$erialized" === props[props.length - 1]) {
                    obj._$erialized = JSON.parse(JSON.stringify(serialized));
                    _deserializePrimitiveObject(self, obj._$erialized, serialized);
                }
            }
            function _deserializeObject(self, serialized, target) {
                var prop;
                var obj = null;
                var klass = null;
                if (serialized.__type__) {
                    var type = serialized.__type__;
                    klass = self._classFinder(type, serialized);
                    if (!klass) {
                        var noLog = self._classFinder === JS._getClassById;
                        noLog && cc.deserialize.reportMissingClass(type);
                        return null;
                    }
                    if (target) {
                        target instanceof klass || cc.warn("Type of target to deserialize not matched with data: target is %s, data is %s", JS.getClassName(target), klass);
                        obj = target;
                    } else {
                        obj = new klass();
                    }
                    if (obj._deserialize) {
                        obj._deserialize(serialized.content, self);
                        return obj;
                    }
                    cc.Class._isCCClass(klass) ? _deserializeFireClass(self, obj, serialized, klass, target) : _deserializeTypedObject(self, obj, serialized);
                } else {
                    if (Array.isArray(serialized)) {
                        if (target) {
                            target.length = serialized.length;
                            obj = target;
                        } else {
                            obj = new Array(serialized.length);
                        }
                        for (var i = 0; i < serialized.length; i++) {
                            prop = serialized[i];
                            if ("object" == typeof prop && prop) {
                                self._deserializeObjField(obj, prop, "" + i, target && obj);
                            } else {
                                obj[i] = prop;
                                self.result.visit && self.result.visit(obj, "" + i);
                            }
                        }
                    } else {
                        obj = target || {};
                        _deserializePrimitiveObject(self, obj, serialized);
                    }
                }
                return obj;
            }
            return _Deserializer;
        }();
        cc.deserialize = function(data, result, options) {
            options = options || {};
            var classFinder = options.classFinder || JS._getClassById;
            var createAssetRefs = options.createAssetRefs || cc.sys.platform === cc.sys.EDITOR_CORE;
            var target = options.target;
            var customEnv = options.customEnv;
            var ignoreEditorOnly = options.ignoreEditorOnly;
            "string" == typeof data && (data = JSON.parse(data));
            createAssetRefs && !result && (result = new Details());
            cc.game._isCloning = true;
            var deserializer = new _Deserializer(data, result, target, classFinder, customEnv, ignoreEditorOnly);
            cc.game._isCloning = false;
            createAssetRefs && result.assignAssetsBy(Editor.serialize.asAsset);
            return deserializer.deserializedData;
        };
        cc.deserialize.Details = Details;
        cc.deserialize.reportMissingClass = function(id) {
            cc.warn('Can not find class "%s"', id);
        };
    }, {
        "./attribute": 75,
        "./js": 81
    } ],
    78: [ function(require, module, exports) {
        var NonUuidMark = ".";
        function IdGenerater(category) {
            this.id = 0 | 998 * Math.random();
            this.prefix = category ? "" + category + NonUuidMark : "";
        }
        IdGenerater.prototype.getNewId = function() {
            return this.prefix + ++this.id;
        };
        IdGenerater.global = new IdGenerater("global");
        module.exports = IdGenerater;
    }, {} ],
    79: [ function(require, module, exports) {
        require("./js");
        require("./CCClass");
        require("./CCObject");
        require("./callbacks-invoker");
        require("./url");
        require("./deserialize");
        require("./instantiate");
        require("./requiring-frame");
        require("./CCSys");
        require("./CCMacro");
        cc.sys.isBrowser && require("./CCAssetLibrary");
        require("./CCVisibleRect");
    }, {
        "./CCAssetLibrary": 67,
        "./CCClass": 68,
        "./CCMacro": 69,
        "./CCObject": 70,
        "./CCSys": 71,
        "./CCVisibleRect": 73,
        "./callbacks-invoker": 76,
        "./deserialize": 77,
        "./instantiate": 80,
        "./js": 81,
        "./requiring-frame": 83,
        "./url": 84
    } ],
    80: [ function(require, module, exports) {
        var CCObject = require("./CCObject");
        var PersistentMask = CCObject.Flags.PersistentMask;
        var Attr = require("./attribute");
        var _isDomNode = require("./utils").isDomNode;
        function instantiate(original) {
            if ("object" != typeof original || Array.isArray(original)) {
                cc.error("The thing you want to instantiate must be an object");
                return null;
            }
            if (!original) {
                cc.error("The thing you want to instantiate is nil");
                return null;
            }
            if (original instanceof CCObject && !original.isValid) {
                cc.error("The thing you want to instantiate is destroyed");
                return null;
            }
            var clone;
            if (original instanceof CCObject) {
                if (original._instantiate) {
                    cc.game._isCloning = true;
                    clone = original._instantiate();
                    cc.game._isCloning = false;
                    return clone;
                }
                if (original instanceof cc.Asset) {
                    cc.error("The instantiate method for given asset do not implemented");
                    return null;
                }
            }
            cc.game._isCloning = true;
            clone = doInstantiate(original);
            cc.game._isCloning = false;
            return clone;
        }
        var objsToClearTmpVar = [];
        function doInstantiate(obj, parent) {
            if (Array.isArray(obj)) {
                cc.error("Can not instantiate array");
                return null;
            }
            if (_isDomNode && _isDomNode(obj)) {
                cc.error("Can not instantiate DOM element");
                return null;
            }
            var clone;
            if (obj._iN$t) {
                clone = obj._iN$t;
            } else {
                var klass = obj.constructor;
                clone = new klass();
            }
            enumerateObject(obj, clone, parent);
            for (var i = 0, len = objsToClearTmpVar.length; i < len; ++i) {
                objsToClearTmpVar[i]._iN$t = null;
            }
            objsToClearTmpVar.length = 0;
            return clone;
        }
        function enumerateObject(obj, clone, parent) {
            var value, type, key;
            var klass = obj.constructor;
            obj._iN$t = clone;
            objsToClearTmpVar.push(obj);
            if (cc.Class._isCCClass(klass)) {
                var DELIMETER = Attr.DELIMETER;
                var props = klass.__props__;
                var attrs = Attr.getClassAttrs(klass);
                for (var p = 0; p < props.length; p++) {
                    key = props[p];
                    if (false !== attrs[key + DELIMETER + "serializable"]) {
                        value = obj[key];
                        type = typeof value;
                        "object" === type ? clone[key] = value ? instantiateObj(value, parent, clone, key) : value : clone[key] = "function" !== type ? value : null;
                    }
                }
            } else {
                for (key in obj) {
                    if (!obj.hasOwnProperty(key) || 95 === key.charCodeAt(0) && 95 === key.charCodeAt(1) && "__type__" !== key) {
                        continue;
                    }
                    value = obj[key];
                    if (value === clone) {
                        continue;
                    }
                    type = typeof value;
                    "object" === type ? clone[key] = value ? instantiateObj(value, parent, clone, key) : value : clone[key] = "function" !== type ? value : null;
                }
            }
            obj instanceof CCObject && (clone._objFlags &= PersistentMask);
        }
        function instantiateObj(obj, parent, ownerObj, ownerKey) {
            var clone = obj._iN$t;
            if (clone) {
                return clone;
            }
            if (!cc.isValid(obj)) {
                return null;
            }
            if (obj instanceof cc.Asset) {
                return obj;
            }
            if (Array.isArray(obj)) {
                var len = obj.length;
                clone = new Array(len);
                obj._iN$t = clone;
                for (var i = 0; i < len; ++i) {
                    var value = obj[i];
                    var type = typeof value;
                    "object" === type ? clone[i] = value ? instantiateObj(value, parent, clone, "" + i) : value : clone[i] = "function" !== type ? value : null;
                }
                objsToClearTmpVar.push(obj);
                return clone;
            }
            if (obj instanceof cc.ValueType) {
                return obj.clone();
            }
            var ctor = obj.constructor;
            if (cc.Class._isCCClass(ctor)) {
                if (parent) {
                    if (parent instanceof cc.Component) {
                        if (obj instanceof cc._BaseNode || obj instanceof cc.Component) {
                            return obj;
                        }
                    } else {
                        if (parent instanceof cc._BaseNode) {
                            if (obj instanceof cc._BaseNode) {
                                if (!obj.isChildOf(parent)) {
                                    return obj;
                                }
                            } else {
                                if (obj instanceof cc.Component && !obj.node.isChildOf(parent)) {
                                    return obj;
                                }
                            }
                        }
                    }
                }
            } else {
                if (ctor !== Object) {
                    return obj;
                }
            }
            clone = new ctor();
            enumerateObject(obj, clone, parent);
            return clone;
        }
        instantiate._clone = doInstantiate;
        cc.instantiate = instantiate;
        module.exports = instantiate;
    }, {
        "./CCObject": 70,
        "./attribute": 75,
        "./utils": 85
    } ],
    81: [ function(require, module, exports) {
        function _getPropertyDescriptor(obj, name) {
            var pd = Object.getOwnPropertyDescriptor(obj, name);
            if (pd) {
                return pd;
            }
            var p = Object.getPrototypeOf(obj);
            return p ? _getPropertyDescriptor(p, name) : null;
        }
        function _copyprop(name, source, target) {
            var pd = _getPropertyDescriptor(source, name);
            Object.defineProperty(target, name, pd);
        }
        var js = {
            isNumber: function(obj) {
                return "number" == typeof obj || obj instanceof Number;
            },
            isString: function(obj) {
                return "string" == typeof obj || obj instanceof String;
            },
            addon: function(obj) {
                "use strict";
                obj = obj || {};
                for (var i = 1, length = arguments.length; i < length; i++) {
                    var source = arguments[i];
                    if (source) {
                        if ("object" != typeof source) {
                            cc.error("cc.js.addon called on non-object:", source);
                            continue;
                        }
                        for (var name in source) {
                            name in obj || _copyprop(name, source, obj);
                        }
                    }
                }
                return obj;
            },
            mixin: function(obj) {
                "use strict";
                obj = obj || {};
                for (var i = 1, length = arguments.length; i < length; i++) {
                    var source = arguments[i];
                    if (source) {
                        if ("object" != typeof source) {
                            cc.error("cc.js.mixin: arguments must be type object:", source);
                            continue;
                        }
                        for (var name in source) {
                            _copyprop(name, source, obj);
                        }
                    }
                }
                return obj;
            },
            extend: function(cls, base) {
                if (!base) {
                    cc.error("The base class to extend from must be non-nil");
                    return;
                }
                if (!cls) {
                    cc.error("The class to extend must be non-nil");
                    return;
                }
                Object.keys(cls.prototype).length > 0 && cc.error("Class should be extended before assigning any prototype members.");
                for (var p in base) {
                    base.hasOwnProperty(p) && (cls[p] = base[p]);
                }
                cls.prototype = Object.create(base.prototype);
                cls.prototype.constructor = cls;
                return cls;
            },
            clear: function(obj) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; i++) {
                    delete obj[keys[i]];
                }
            },
            getPropertyDescriptor: _getPropertyDescriptor
        };
        js.getClassName = function(obj) {
            if ("function" == typeof obj) {
                if (obj.prototype.__classname__) {
                    return obj.prototype.__classname__;
                }
            } else {
                if (obj && obj.constructor) {
                    if (obj.constructor.prototype && obj.constructor.prototype.hasOwnProperty("__classname__")) {
                        return obj.__classname__;
                    }
                    var retval;
                    obj.constructor.name && (retval = obj.constructor.name);
                    if (obj.constructor.toString) {
                        var arr, str = obj.constructor.toString();
                        arr = "[" === str.charAt(0) ? str.match(/\[\w+\s*(\w+)\]/) : str.match(/function\s*(\w+)/);
                        arr && 2 === arr.length && (retval = arr[1]);
                    }
                    return "Object" !== retval ? retval : "";
                }
            }
            return "";
        };
        var TCID_PREFIX = "cc.TmpCId.";
        var id = 0;
        function getTempCID() {
            return TCID_PREFIX + id++;
        }
        var isTempClassId = function(id) {
            return "string" != typeof id || id.startsWith(TCID_PREFIX);
        };
        (function() {
            var _idToClass = {};
            var _nameToClass = {};
            function getRegister(key, table) {
                return function(id, constructor) {
                    constructor.prototype.hasOwnProperty(key) && delete table[constructor.prototype[key]];
                    constructor.prototype[key] = id;
                    if (id) {
                        var registered = table[id];
                        if (registered && registered !== constructor) {
                            var error = "A Class already exists with the same " + key + ' : "' + id + '".';
                            cc.error(error);
                        } else {
                            table[id] = constructor;
                        }
                    }
                };
            }
            js._setClassId = getRegister("__cid__", _idToClass);
            var doSetClassName = getRegister("__classname__", _nameToClass);
            js.setClassName = function(className, constructor) {
                doSetClassName(className, constructor);
                if (!constructor.prototype.hasOwnProperty("__cid__")) {
                    var id = className || getTempCID();
                    id && js._setClassId(id, constructor);
                }
            };
            js.unregisterClass = function(constructor) {
                "use strict";
                for (var i = 0; i < arguments.length; i++) {
                    var p = arguments[i].prototype;
                    var classId = p.__cid__;
                    classId && delete _idToClass[classId];
                    var classname = p.__classname__;
                    classname && delete _nameToClass[classname];
                }
            };
            js._getClassById = function(classId) {
                return _idToClass[classId];
            };
            js.getClassByName = function(classname) {
                return _nameToClass[classname];
            };
            js._getClassId = function(obj, allowTempId) {
                allowTempId = "undefined" == typeof allowTempId || allowTempId;
                var res;
                if ("function" == typeof obj && obj.prototype.hasOwnProperty("__cid__")) {
                    res = obj.prototype.__cid__;
                    if (!allowTempId && true && isTempClassId(res)) {
                        return "";
                    }
                    return res;
                }
                if (obj && obj.constructor) {
                    var prototype = obj.constructor.prototype;
                    if (prototype && prototype.hasOwnProperty("__cid__")) {
                        res = obj.__cid__;
                        if (!allowTempId && true && isTempClassId(res)) {
                            return "";
                        }
                        return res;
                    }
                }
                return "";
            };
            Object.defineProperty(js, "_registeredClassIds", {
                get: function() {
                    var dump = {};
                    for (var id in _idToClass) {
                        dump[id] = _idToClass[id];
                    }
                    return dump;
                },
                set: function(value) {
                    js.clear(_idToClass);
                    for (var id in value) {
                        _idToClass[id] = value[id];
                    }
                }
            });
            Object.defineProperty(js, "_registeredClassNames", {
                get: function() {
                    var dump = {};
                    for (var id in _nameToClass) {
                        dump[id] = _nameToClass[id];
                    }
                    return dump;
                },
                set: function(value) {
                    js.clear(_nameToClass);
                    for (var id in value) {
                        _nameToClass[id] = value[id];
                    }
                }
            });
        })();
        js.getset = function(obj, prop, getter, setter, enumerable) {
            if ("function" != typeof setter) {
                enumerable = setter;
                setter = void 0;
            }
            Object.defineProperty(obj, prop, {
                get: getter,
                set: setter,
                enumerable: !!enumerable
            });
        };
        js.get = function(obj, prop, getter, enumerable) {
            Object.defineProperty(obj, prop, {
                get: getter,
                enumerable: !!enumerable
            });
        };
        js.set = function(obj, prop, setter, enumerable) {
            Object.defineProperty(obj, prop, {
                set: setter,
                enumerable: !!enumerable
            });
        };
        js.obsolete = function(obj, obsoleted, newPropName, writable) {
            var oldName = obsoleted.split(".").slice(-1);
            function get() {
                cc.warn('"%s" is deprecated, use "%s" instead please.', obsoleted, newPropName);
                return this[newPropName];
            }
            writable ? js.getset(obj, oldName, get, function(value) {
                cc.warn('"%s" is deprecated, use "%s" instead please.', obsoleted, newPropName);
                this[newPropName] = value;
            }) : js.get(obj, oldName, get);
        };
        js.obsoletes = function(obj, objName, props, writable) {
            for (var obsoleted in props) {
                var newName = props[obsoleted];
                js.obsolete(obj, objName + "." + obsoleted, newName, writable);
            }
        };
        js.formatStr = function() {
            var args = arguments;
            var l = args.length;
            if (l < 1) {
                return "";
            }
            var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
            var i = 1;
            var str = args[0];
            var hasSubstitution = "string" == typeof str && REGEXP_NUM_OR_STR.test(str);
            if (hasSubstitution) {
                var REGEXP_STR = /%s/;
                for (;i < l; ++i) {
                    var arg = args[i];
                    var regExpToTest = "number" == typeof arg ? REGEXP_NUM_OR_STR : REGEXP_STR;
                    regExpToTest.test(str) ? str = str.replace(regExpToTest, arg) : str += " " + arg;
                }
            } else {
                if (l > 1) {
                    for (;i < l; ++i) {
                        str += " " + args[i];
                    }
                } else {
                    str = "" + str;
                }
            }
            return str;
        };
        js.array = {
            remove: function(array, value) {
                var index = array.indexOf(value);
                if (index !== -1) {
                    array.splice(index, 1);
                    return true;
                }
                return false;
            },
            removeAt: function(array, index) {
                array.splice(index, 1);
            },
            contains: function(array, value) {
                return array.indexOf(value) !== -1;
            },
            verifyType: function(array, type) {
                if (array && array.length > 0) {
                    for (var i = 0; i < array.length; i++) {
                        if (!(array[i] instanceof type)) {
                            cc.log(cc._LogInfos.Array.verifyType);
                            return false;
                        }
                    }
                }
                return true;
            },
            removeArray: function(array, minusArr) {
                for (var i = 0, l = minusArr.length; i < l; i++) {
                    remove(array, minusArr[i]);
                }
            },
            appendObjectsAt: function(array, addObjs, index) {
                array.splice.apply(array, [ index, 0 ].concat(addObjs));
                return array;
            },
            copy: function(array) {
                var i, len = array.length, arr_clone = new Array(len);
                for (i = 0; i < len; i += 1) {
                    arr_clone[i] = array[i];
                }
                return arr_clone;
            },
            indexOf: Array.prototype.indexOf
        };
        cc.js = js;
        module.exports = js;
    }, {} ],
    82: [ function(require, module, exports) {
        var SerializableAttrs = {
            url: {
                canUsedInGet: true
            },
            "default": {},
            serializable: {},
            editorOnly: {},
            rawType: {}
        };
        function parseNotify(val, propName, notify, properties) {
            if (val.get || val.set) {
                cc.warn('"notify" can\'t work with "get/set" !');
                return;
            }
            if (val.hasOwnProperty("default")) {
                var newKey = "_N$" + propName;
                val.get = function() {
                    return this[newKey];
                };
                val.set = function(value) {
                    var oldValue = this[newKey];
                    this[newKey] = value;
                    notify.call(this, oldValue);
                };
                var newValue = {};
                properties[newKey] = newValue;
                for (var attr in SerializableAttrs) {
                    var v = SerializableAttrs[attr];
                    if (val.hasOwnProperty(attr)) {
                        newValue[attr] = val[attr];
                        v.canUsedInGet || delete val[attr];
                    }
                }
            } else {
                cc.warn('"notify" must work with "default" !');
            }
        }
        function checkUrl(val, className, propName, url) {
            Array.isArray(url) && url.length > 0 && (url = url[0]);
            val.type = url;
        }
        function parseType(val, type, className, propName) {
            if (Array.isArray(type)) {
                var isArray;
                if (!(type.length > 0)) {
                    return cc.error("Invalid type of %s.%s", className, propName);
                }
                val.type = type = type[0];
            }
        }
        function postCheckType(val, type, className, propName) {}
        function getBaseClassWherePropertyDefined_DEV(propName, cls) {
            var res;
            for (;cls && cls.__props__ && cls.__props__.indexOf(propName) !== -1; cls = cls.$super) {
                res = cls;
            }
            res || cc.error("unknown error");
            return res;
        }
        module.exports = function(properties, className, cls) {
            for (var propName in properties) {
                var val = properties[propName];
                var isLiteral = val && val.constructor === Object;
                if (!isLiteral) {
                    if (Array.isArray(val) && val.length > 0) {
                        val = {
                            "default": [],
                            type: val
                        };
                    } else {
                        if ("function" == typeof val) {
                            var type = val;
                            val = cc.RawAsset.isRawAssetType(type) ? {
                                "default": "",
                                url: type
                            } : cc.isChildClassOf(type, cc.ValueType) ? {
                                "default": new type()
                            } : {
                                "default": null,
                                type: val
                            };
                        } else {
                            val = {
                                "default": val
                            };
                        }
                    }
                    properties[propName] = val;
                }
                if (val) {
                    if (!val.override && cls.__props__.indexOf(propName) !== -1) {
                        var baseClass = cc.js.getClassName(getBaseClassWherePropertyDefined_DEV(propName, cls));
                        cc.warn('"%s.%s" hides inherited property "%s.%s". To make the current property override that implementation, add the `override: true` attribute please.', className, propName, baseClass, propName);
                    }
                    var notify = val.notify;
                    notify && parseNotify(val, propName, notify, properties);
                    "type" in val && parseType(val, val.type, className, propName);
                    "url" in val && checkUrl(val, className, propName, val.url);
                    "type" in val && postCheckType(val, val.type, className, propName);
                }
            }
        };
    }, {
        "./CCClass": 68
    } ],
    83: [ function(require, module, exports) {
        var requiringFrames = [];
        cc._RFpush = function(module, uuid, script) {
            if (2 === arguments.length) {
                script = uuid;
                uuid = "";
            }
            requiringFrames.push({
                uuid: uuid,
                script: script,
                module: module,
                exports: module.exports,
                beh: null
            });
        };
        cc._RFpop = function() {
            var frameInfo = requiringFrames.pop();
            var module = frameInfo.module;
            var exports = module.exports;
            if (exports === frameInfo.exports) {
                for (var anyKey in exports) {
                    return;
                }
                module.exports = exports = frameInfo.beh;
            }
        };
        cc._RFpeek = function() {
            return requiringFrames[requiringFrames.length - 1];
        };
    }, {} ],
    84: [ function(require, module, exports) {
        var _mounts = {};
        cc.url = {
            _rawAssets: "",
            _builtinRawAssets: "",
            normalize: function(url) {
                46 === url.charCodeAt(0) && 47 === url.charCodeAt(1) ? url = url.slice(2) : 47 === url.charCodeAt(0) && (url = url.slice(1));
                return url;
            },
            raw: function(url) {
                url = this.normalize(url);
                url.startsWith("resources/") || cc.error('Sorry can not load "%s" because it is not placed in the "resources" folder.', url);
                return this._rawAssets + url;
            },
            builtinRaw: false,
            _init: function(mountPaths) {
                for (var dir in mountPaths) {
                    var path = mountPaths[dir];
                    path = cc.path._setEndWithSep(path, "/");
                    _mounts[dir] = path;
                }
                this._rawAssets = _mounts.assets;
                this._builtinRawAssets = _mounts.internal;
            }
        };
        module.exports = cc.url;
    }, {} ],
    85: [ function(require, module, exports) {
        module.exports = {
            isDomNode: "object" == typeof window && ("function" == typeof Node ? function(obj) {
                return obj instanceof Node;
            } : function(obj) {
                return obj && "object" == typeof obj && "number" == typeof obj.nodeType && "string" == typeof obj.nodeName;
            }),
            callInNextTick: function(callback, p1, p2) {
                callback && setTimeout(function() {
                    callback(p1, p2);
                }, 0);
            }
        };
        cc.js.mixin(module.exports, {
            isPlainEmptyObj_DEV: function(obj) {
                if (!obj || obj.constructor !== Object) {
                    return false;
                }
                for (var k in obj) {
                    return false;
                }
                return true;
            },
            cloneable_DEV: function(obj) {
                return obj && "function" == typeof obj.clone && (obj.constructor.prototype.hasOwnProperty("clone") || obj.hasOwnProperty("clone"));
            }
        });
    }, {} ],
    86: [ function(require, module, exports) {
        var Region = function() {
            this._minX = 0;
            this._minY = 0;
            this._maxX = 0;
            this._maxY = 0;
            this._width = 0;
            this._height = 0;
            this._area = 0;
        };
        var regionProto = Region.prototype;
        var regionPool = [];
        function regionCreate() {
            var region = regionPool.pop();
            region || (region = new Region());
            return region;
        }
        function regionRelease(region) {
            regionPool.push(region);
        }
        regionProto.setTo = function(minX, minY, maxX, maxY) {
            this._minX = minX;
            this._minY = minY;
            this._maxX = maxX;
            this._maxY = maxY;
            this.updateArea();
            return this;
        };
        regionProto.intValues = function() {
            this._minX = Math.floor(this._minX);
            this._minY = Math.floor(this._minY);
            this._maxX = Math.ceil(this._maxX);
            this._maxY = Math.ceil(this._maxY);
            this.updateArea();
        };
        regionProto.updateArea = function() {
            this._width = this._maxX - this._minX;
            this._height = this._maxY - this._minY;
            this._area = this._width * this._height;
        };
        regionProto.union = function(target) {
            if (this.isEmpty()) {
                this.setTo(target._minX, target._minY, target._maxX, target._maxY);
                return;
            }
            this._minX > target._minX && (this._minX = target._minX);
            this._minY > target._minY && (this._minY = target._minY);
            this._maxX < target._maxX && (this._maxX = target._maxX);
            this._maxY < target._maxY && (this._maxY = target._maxY);
            this.updateArea();
        };
        regionProto.setEmpty = function() {
            this._minX = 0;
            this._minY = 0;
            this._maxX = 0;
            this._maxY = 0;
            this._width = 0;
            this._height = 0;
            this._area = 0;
        };
        regionProto.isEmpty = function() {
            return this._width <= 0 || this._height <= 0;
        };
        regionProto.intersects = function(target) {
            if (this.isEmpty() || target.isEmpty()) {
                return false;
            }
            var max = this._minX > target._minX ? this._minX : target._minX;
            var min = this._maxX < target._maxX ? this._maxX : target._maxX;
            if (max > min) {
                return false;
            }
            max = this._minY > target._minY ? this._minY : target._minY;
            min = this._maxY < target._maxY ? this._maxY : target._maxY;
            return max <= min;
        };
        regionProto.updateRegion = function(bounds, matrix) {
            if (0 === bounds.width || 0 === bounds.height) {
                this.setEmpty();
                return;
            }
            var m = matrix;
            var a = m.a;
            var b = m.b;
            var c = m.c;
            var d = m.d;
            var tx = m.tx;
            var ty = m.ty;
            var x = bounds.x;
            var y = bounds.y;
            var xMax = x + bounds.width;
            var yMax = y + bounds.height;
            var minX, minY, maxX, maxY;
            if (1 === a && 0 === b && 0 === c && 1 === d) {
                minX = x + tx - 1;
                minY = y + ty - 1;
                maxX = xMax + tx + 1;
                maxY = yMax + ty + 1;
            } else {
                var x0 = a * x + c * y + tx;
                var y0 = b * x + d * y + ty;
                var x1 = a * xMax + c * y + tx;
                var y1 = b * xMax + d * y + ty;
                var x2 = a * xMax + c * yMax + tx;
                var y2 = b * xMax + d * yMax + ty;
                var x3 = a * x + c * yMax + tx;
                var y3 = b * x + d * yMax + ty;
                var tmp = 0;
                if (x0 > x1) {
                    tmp = x0;
                    x0 = x1;
                    x1 = tmp;
                }
                if (x2 > x3) {
                    tmp = x2;
                    x2 = x3;
                    x3 = tmp;
                }
                minX = (x0 < x2 ? x0 : x2) - 1;
                maxX = (x1 > x3 ? x1 : x3) + 1;
                if (y0 > y1) {
                    tmp = y0;
                    y0 = y1;
                    y1 = tmp;
                }
                if (y2 > y3) {
                    tmp = y2;
                    y2 = y3;
                    y3 = tmp;
                }
                minY = (y0 < y2 ? y0 : y2) - 1;
                maxY = (y1 > y3 ? y1 : y3) + 1;
            }
            this._minX = minX;
            this._minY = minY;
            this._maxX = maxX;
            this._maxY = maxY;
            this._width = maxX - minX;
            this._height = maxY - minY;
            this._area = this._width * this._height;
        };
        function unionArea(r1, r2) {
            var minX = r1._minX < r2._minX ? r1._minX : r2._minX;
            var minY = r1._minY < r2._minY ? r1._minY : r2._minY;
            var maxX = r1._maxX > r2._maxX ? r1._maxX : r2._maxX;
            var maxY = r1._maxY > r2._maxY ? r1._maxY : r2._maxY;
            return (maxX - minX) * (maxY - minY);
        }
        var DirtyRegion = function() {
            this.dirtyList = [];
            this.hasClipRect = false;
            this.clipWidth = 0;
            this.clipHeight = 0;
            this.clipArea = 0;
            this.clipRectChanged = false;
        };
        var dirtyRegionProto = DirtyRegion.prototype;
        dirtyRegionProto.setClipRect = function(width, height) {
            this.hasClipRect = true;
            this.clipRectChanged = true;
            this.clipWidth = Math.ceil(width);
            this.clipHeight = Math.ceil(height);
            this.clipArea = this.clipWidth * this.clipHeight;
        };
        dirtyRegionProto.addRegion = function(target) {
            var minX = target._minX, minY = target._minY, maxX = target._maxX, maxY = target._maxY;
            if (this.hasClipRect) {
                minX < 0 && (minX = 0);
                minY < 0 && (minY = 0);
                maxX > this.clipWidth && (maxX = this.clipWidth);
                maxY > this.clipHeight && (maxY = this.clipHeight);
            }
            if (minX >= maxX || minY >= maxY) {
                return false;
            }
            if (this.clipRectChanged) {
                return true;
            }
            var dirtyList = this.dirtyList;
            var region = regionCreate();
            dirtyList.push(region.setTo(minX, minY, maxX, maxY));
            this.mergeDirtyList(dirtyList);
            return true;
        };
        dirtyRegionProto.clear = function() {
            var dirtyList = this.dirtyList;
            var length = dirtyList.length;
            for (var i = 0; i < length; i++) {
                regionRelease(dirtyList[i]);
            }
            dirtyList.length = 0;
        };
        dirtyRegionProto.getDirtyRegions = function() {
            var dirtyList = this.dirtyList;
            if (this.clipRectChanged) {
                this.clipRectChanged = false;
                this.clear();
                var region = regionCreate();
                dirtyList.push(region.setTo(0, 0, this.clipWidth, this.clipHeight));
            } else {
                while (this.mergeDirtyList(dirtyList)) {}
            }
            var numDirty = this.dirtyList.length;
            if (numDirty > 0) {
                for (var i = 0; i < numDirty; i++) {
                    this.dirtyList[i].intValues();
                }
            }
            return this.dirtyList;
        };
        dirtyRegionProto.mergeDirtyList = function(dirtyList) {
            var length = dirtyList.length;
            if (length < 2) {
                return false;
            }
            var hasClipRect = this.hasClipRect;
            var bestDelta = length > 3 ? Number.POSITIVE_INFINITY : 0;
            var mergeA = 0;
            var mergeB = 0;
            var totalArea = 0;
            for (var i = 0; i < length - 1; i++) {
                var regionA = dirtyList[i];
                hasClipRect && (totalArea += regionA.area);
                for (var j = i + 1; j < length; j++) {
                    var regionB = dirtyList[j];
                    var delta = unionArea(regionA, regionB) - regionA.area - regionB.area;
                    if (bestDelta > delta) {
                        mergeA = i;
                        mergeB = j;
                        bestDelta = delta;
                    }
                }
            }
            hasClipRect && totalArea / this.clipArea > .95 && (this.clipRectChanged = true);
            if (mergeA !== mergeB) {
                var region = dirtyList[mergeB];
                dirtyList[mergeA].union(region);
                regionRelease(region);
                dirtyList.splice(mergeB, 1);
                return true;
            }
            return false;
        };
        cc.Region = Region;
        cc.DirtyRegion = DirtyRegion;
    }, {} ],
    87: [ function(require, module, exports) {
        cc.rendererCanvas = {
            childrenOrderDirty: true,
            assignedZ: 0,
            assignedZStep: 1e-4,
            _transformNodePool: [],
            _renderCmds: [],
            _isCacheToCanvasOn: false,
            _cacheToCanvasCmds: {},
            _cacheInstanceIds: [],
            _currentID: 0,
            _clearColor: cc.color(),
            _clearFillStyle: "rgb(0, 0, 0)",
            _dirtyRegion: null,
            _allNeedDraw: true,
            _enableDirtyRegion: true,
            _debugDirtyRegion: false,
            _dirtyRegionCountThreshold: 10,
            init: function() {
                this.enableDirtyRegion(false);
            },
            getRenderCmd: function(renderableObject) {
                return renderableObject._createRenderCmd();
            },
            enableDirtyRegion: function(enabled) {
                this._enableDirtyRegion = enabled;
            },
            isDirtyRegionEnabled: function() {
                return this._enableDirtyRegion;
            },
            setDirtyRegionCountThreshold: function(threshold) {
                this._dirtyRegionCountThreshold = threshold;
            },
            _collectDirtyRegion: function() {
                var locCmds = this._renderCmds, i, len;
                var dirtyRegion = this._dirtyRegion;
                var localStatus = _ccsg.Node.CanvasRenderCmd.RegionStatus;
                var dirtryRegionCount = 0;
                var result = true;
                for (i = 0, len = locCmds.length; i < len; i++) {
                    var cmd = locCmds[i];
                    var regionFlag = cmd._regionFlag;
                    var oldRegion = cmd._oldRegion;
                    var currentRegion = cmd._currentRegion;
                    if (regionFlag > localStatus.NotDirty) {
                        ++dirtryRegionCount;
                        dirtryRegionCount > this._dirtyRegionCountThreshold && (result = false);
                        if (result) {
                            !currentRegion.isEmpty() && dirtyRegion.addRegion(currentRegion);
                            cmd._regionFlag > localStatus.Dirty && !oldRegion.isEmpty() && dirtyRegion.addRegion(oldRegion);
                        }
                        cmd._regionFlag = localStatus.NotDirty;
                    }
                }
                return result;
            },
            _beginDrawDirtyRegion: function(ctxWrapper) {
                var ctx = ctxWrapper.getContext();
                var dirtyList = this._dirtyRegion.getDirtyRegions();
                ctx.save();
                var scaleX = ctxWrapper._scaleX;
                var scaleY = ctxWrapper._scaleY;
                ctxWrapper.setTransform({
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    tx: 0,
                    ty: 0
                }, scaleX, scaleY);
                ctx.beginPath();
                for (var index = 0, count = dirtyList.length; index < count; ++index) {
                    var region = dirtyList[index];
                    ctx.rect(region._minX, -region._maxY, region._width, region._height);
                }
                ctx.clip();
            },
            _endDrawDirtyRegion: function(ctx) {
                ctx.restore();
            },
            _debugDrawDirtyRegion: function(ctxWrapper) {
                if (!this._debugDirtyRegion) {
                    return;
                }
                var ctx = ctxWrapper.getContext();
                var dirtyList = this._dirtyRegion.getDirtyRegions();
                var scaleX = ctxWrapper._scaleX;
                var scaleY = ctxWrapper._scaleY;
                ctxWrapper.setTransform({
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    tx: 0,
                    ty: 0
                }, scaleX, scaleY);
                ctx.beginPath();
                for (var index = 0, count = dirtyList.length; index < count; ++index) {
                    var region = dirtyList[index];
                    ctx.rect(region._minX, -region._maxY, region._width, region._height);
                }
                var oldstyle = ctx.fillStyle;
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.fillStyle = oldstyle;
            },
            rendering: function(ctxWrapper) {
                var dirtyRegion = this._dirtyRegion = this._dirtyRegion || new cc.DirtyRegion();
                var viewport = cc.view._frameSize;
                var wrapper = ctxWrapper || cc._renderContext;
                var ctx = wrapper.getContext();
                var scaleX = cc.view.getScaleX(), scaleY = cc.view.getScaleY();
                wrapper.setViewScale(scaleX, scaleY);
                wrapper.computeRealOffsetY();
                var dirtyList = this._dirtyRegion.getDirtyRegions();
                var locCmds = this._renderCmds, i, len;
                var allNeedDraw = this._allNeedDraw || !this._enableDirtyRegion;
                allNeedDraw || (allNeedDraw = allNeedDraw || !this._collectDirtyRegion());
                allNeedDraw || this._beginDrawDirtyRegion(wrapper);
                ctx.clearActions();
                ctx.clearRect(0, 0, viewport.width, viewport.height);
                if (0 !== this._clearColor.r || 0 !== this._clearColor.g || 0 !== this._clearColor.b) {
                    wrapper.setFillStyle(this._clearFillStyle);
                    wrapper.setGlobalAlpha(this._clearColor.a);
                    ctx.fillRect(0, 0, viewport.width, viewport.height);
                }
                for (i = 0, len = locCmds.length; i < len; i++) {
                    var cmd = locCmds[i];
                    if (!cmd._needDraw) {
                        continue;
                    }
                    var needRendering = false;
                    var cmdRegion = cmd._currentRegion;
                    if (!cmdRegion || allNeedDraw) {
                        needRendering = true;
                    } else {
                        for (var index = 0, count = dirtyList.length; index < count; ++index) {
                            if (dirtyList[index].intersects(cmdRegion)) {
                                needRendering = true;
                                break;
                            }
                        }
                    }
                    needRendering && cmd.rendering(wrapper, scaleX, scaleY);
                }
                if (!allNeedDraw) {
                    this._debugDrawDirtyRegion(wrapper);
                    this._endDrawDirtyRegion(ctx);
                }
                wx.drawCanvas({
                    canvasId: cc.game.config.id,
                    actions: ctx.getActions()
                });
                dirtyRegion.clear();
                this._allNeedDraw = false;
            },
            resetFlag: function() {
                this.childrenOrderDirty = false;
                this._transformNodePool.length = 0;
            },
            transform: function() {
                var locPool = this._transformNodePool;
                locPool.sort(this._sortNodeByLevelAsc);
                for (var i = 0, len = locPool.length; i < len; i++) {
                    locPool[i].updateStatus();
                }
                locPool.length = 0;
            },
            transformDirty: function() {
                return this._transformNodePool.length > 0;
            },
            _sortNodeByLevelAsc: function(n1, n2) {
                return n1._curLevel - n2._curLevel;
            },
            pushDirtyNode: function(node) {
                this._transformNodePool.push(node);
            },
            clear: function() {},
            clearRenderCommands: function() {
                this._renderCmds.length = 0;
                this._cacheInstanceIds.length = 0;
                this._isCacheToCanvasOn = false;
                this._allNeedDraw = true;
            },
            pushRenderCommand: function(cmd) {
                if (!cmd.rendering) {
                    return;
                }
                if (this._isCacheToCanvasOn) {
                    var currentId = this._currentID, locCmdBuffer = this._cacheToCanvasCmds;
                    var cmdList = locCmdBuffer[currentId];
                    cmdList.indexOf(cmd) === -1 && cmdList.push(cmd);
                } else {
                    this._renderCmds.indexOf(cmd) === -1 && this._renderCmds.push(cmd);
                }
            }
        };
        (function() {
            cc.CanvasContextWrapper = function(context) {
                this._context = context;
                this._saveCount = 0;
                this._currentFillStyle = context.fillStyle;
                this._currentStrokeStyle = context.strokeStyle;
                this._offsetX = 0;
                this._offsetY = 0;
                this._realOffsetY = this.height;
                this._trs = [];
                this._lastTRS = null;
            };
            var proto = cc.CanvasContextWrapper.prototype;
            proto.resetCache = function() {
                var context = this._context;
                this._currentFillStyle = context.fillStyle;
                this._currentStrokeStyle = context.strokeStyle;
                this._realOffsetY = cc.sys.windowPixelResolution.height + this._offsetY;
            };
            proto.setOffset = function(x, y) {
                this._offsetX = x;
                this._offsetY = y;
                this._realOffsetY = cc.sys.windowPixelResolution.height + this._offsetY;
            };
            proto.computeRealOffsetY = function() {
                this._realOffsetY = cc.sys.windowPixelResolution.height + this._offsetY;
            };
            proto.setViewScale = function(scaleX, scaleY) {
                this._scaleX = scaleX;
                this._scaleY = scaleY;
            };
            proto.getContext = function() {
                return this._context;
            };
            proto.save = function() {
                this._lastTRS = {};
                this._trs.push(this._lastTRS);
                this._saveCount++;
            };
            proto.restore = function() {
                var trs = this._trs.pop();
                if (trs) {
                    var ctx = this._context;
                    trs.scale && ctx.scale(1 / trs.scale.x, 1 / trs.scale.y);
                    trs.rotate && ctx.rotate(-trs.rotate);
                    trs.translate && ctx.translate(-trs.translate.x, -trs.translate.y);
                }
                this._lastTRS && (this._lastTRS = null);
                this._saveCount--;
            };
            proto.setGlobalAlpha = function(alpha) {
                if (this._saveCount > 0) {
                    this._context.globalAlpha = alpha;
                } else {
                    if (this._currentAlpha !== alpha) {
                        this._currentAlpha = alpha;
                        this._context.globalAlpha = alpha;
                    }
                }
            };
            proto.setCompositeOperation = function(compositionOperation) {};
            proto.setFillStyle = function(fillStyle) {
                this._context.fillStyle = fillStyle;
            };
            proto.setStrokeStyle = function(strokeStyle) {
                if (this._saveCount > 0) {
                    this._context.strokeStyle = strokeStyle;
                } else {
                    if (this._currentStrokeStyle !== strokeStyle) {
                        this._currentStrokeStyle = strokeStyle;
                        this._context.strokeStyle = strokeStyle;
                    }
                }
            };
            proto.setTransform = function(t, scaleX, scaleY) {
                scaleX = scaleX || 1;
                scaleY = scaleY || 1;
                var sx = Math.sqrt(t.a * t.a + t.c * t.c) * scaleX;
                var sy = Math.sqrt(t.b * t.b + t.d * t.d) * scaleY;
                var rotation = Math.atan(t.c * scaleX / (t.d * scaleY));
                var tx = this._offsetX + t.tx * scaleX;
                var ty = this._realOffsetY - t.ty * scaleY;
                var ctx = this._context;
                if (0 !== tx || 0 !== ty) {
                    ctx.translate(tx, ty);
                    this._lastTRS && (this._lastTRS.translate = {
                        x: tx,
                        y: ty
                    });
                }
                if (0 !== rotation) {
                    ctx.rotate(rotation);
                    this._lastTRS && (this._lastTRS.rotate = rotation);
                }
                if (1 !== sx || 1 !== sy) {
                    ctx.scale(sx, sy);
                    this._lastTRS && (this._lastTRS.scale = {
                        x: sx,
                        y: sy
                    });
                }
            };
        })();
    }, {} ],
    88: [ function(require, module, exports) {
        require("./RendererCanvas");
        require("./DirtyRegion");
    }, {
        "./DirtyRegion": 86,
        "./RendererCanvas": 87
    } ],
    89: [ function(require, module, exports) {
        var EventTarget = require("../event/event-target");
        cc.SpriteFrame = cc.Class({
            name: "cc.SpriteFrame",
            "extends": require("../assets/CCAsset"),
            mixins: [ EventTarget ],
            properties: {
                _textureFilenameSetter: {
                    set: function(url) {
                        this._textureFilename = url;
                        url;
                    }
                }
            },
            ctor: function() {
                cc.game._isCloning || cc.warn("It's not recommended to use SpriteFrame constructor (new SpriteFrame) because its memory usage can't be tracked in native environment, if you know what you are doing, you may need to manually retain it after creation then release it when you no longer need it.");
                var filename = arguments[0];
                var rect = arguments[1];
                var rotated = arguments[2];
                var offset = arguments[3];
                var originalSize = arguments[4];
                this._rect = null;
                this._offset = null;
                this._originalSize = null;
                this._rotated = false;
                this.insetTop = 0;
                this.insetBottom = 0;
                this.insetLeft = 0;
                this.insetRight = 0;
                this._texture = null;
                this._textureFilename = "";
                this._textureLoaded = true;
                void 0 !== filename && this.initWithTexture(filename, rect, rotated, offset, originalSize);
            },
            textureLoaded: function() {
                return this._textureLoaded;
            },
            addLoadedEventListener: function(callback, target) {
                this.once("load", callback, target);
            },
            isRotated: function() {
                return this._rotated;
            },
            setRotated: function(bRotated) {
                this._rotated = bRotated;
            },
            getRect: function() {
                return cc.rect(this._rect);
            },
            setRect: function(rect) {
                this._rect = rect;
            },
            getOriginalSize: function() {
                return cc.size(this._originalSize);
            },
            setOriginalSize: function(size) {
                if (this._originalSize) {
                    this._originalSize.width = size.width;
                    this._originalSize.height = size.height;
                } else {
                    this._originalSize = cc.size(size);
                }
            },
            getTexture: function() {
                return this._texture;
            },
            getOffset: function() {
                return cc.v2(this._offset);
            },
            setOffset: function(offsets) {
                this._offset = cc.v2(offsets);
            },
            clone: function() {
                return new cc.SpriteFrame(this._texture || this._textureFilename, this._rect, this._rotated, this._offset, this._originalSize);
            },
            setTexture: function(textureOrTextureFile, rect, rotated, offset, originalSize) {
                rect ? this.setRect(rect) : this._rect = null;
                offset ? this.setOffset(offset) : this._offset = null;
                originalSize ? this.setOriginalSize(originalSize) : this._originalSize = null;
                this._rotated = rotated || false;
                var texture = textureOrTextureFile;
                if (cc.js.isString(texture)) {
                    this._textureFilename = texture;
                    this._loadTexture();
                }
                return true;
            },
            _loadTexture: function() {
                this._textureFilename && (this._textureLoaded = true);
            },
            ensureLoadTexture: function() {
                this._texture || this._loadTexture();
            },
            _checkRect: function(texture) {
                var rect = this._rect;
                var maxX = rect.x, maxY = rect.y;
                if (this._rotated) {
                    maxX += rect.height;
                    maxY += rect.width;
                } else {
                    maxX += rect.width;
                    maxY += rect.height;
                }
                maxX > texture.getPixelWidth() && cc.error(cc._LogInfos.RectWidth, texture.url + "/" + this.name);
                maxY > texture.getPixelHeight() && cc.error(cc._LogInfos.RectHeight, texture.url + "/" + this.name);
            },
            _serialize: false,
            _deserialize: function(data, handle) {
                var rect = data.rect;
                rect && this.setRect(new cc.Rect(rect[0], rect[1], rect[2], rect[3]));
                data.offset && this.setOffset(new cc.Vec2(data.offset[0], data.offset[1]));
                data.originalSize && this.setOriginalSize(new cc.Size(data.originalSize[0], data.originalSize[1]));
                this._rotated = 1 === data.rotated;
                this._name = data.name;
                var capInsets = data.capInsets;
                if (capInsets) {
                    this.insetLeft = capInsets[0];
                    this.insetTop = capInsets[1];
                    this.insetRight = capInsets[2];
                    this.insetBottom = capInsets[3];
                }
                var textureUuid = data.texture;
                if (textureUuid) {
                    var dontLoadTexture = handle.customEnv && handle.customEnv.deferredLoadRaw;
                    var receiver = dontLoadTexture ? "_textureFilename" : "_textureFilenameSetter";
                    handle.result.push(this, receiver, textureUuid);
                }
            }
        });
        var proto = cc.SpriteFrame.prototype;
        proto.copyWithZone = proto.clone;
        proto.copy = proto.clone;
        proto.initWithTexture = proto.setTexture;
    }, {
        "../assets/CCAsset": 24,
        "../event/event-target": 49
    } ],
    90: [ function(require, module, exports) {
        var EventTarget = require("../event/event-target");
        var sys = require("../platform/CCSys");
        var JS = require("../platform/js");
        var misc = require("../utils/misc");
        var game = require("../CCGame");
        require("../platform/_CCClass");
        require("../platform/CCClass");
        var WrapMode = cc.Enum({
            REPEAT: 10497,
            CLAMP_TO_EDGE: 33071,
            MIRRORED_REPEAT: 33648
        });
        var Texture2D = cc.Class({
            name: "cc.Texture2D",
            "extends": require("../assets/CCRawAsset"),
            mixins: [ EventTarget ],
            statics: {
                WrapMode: WrapMode
            },
            ctor: function() {
                this.url = null;
                this._textureLoaded = false;
                this._htmlElementObj = null;
                this._contentSize = cc.size(0, 0);
                this._pixelWidth = 0;
                this._pixelHeight = 0;
                if (cc._renderType === game.RENDER_TYPE_CANVAS) {
                    this._pattern = "";
                    this._grayElementObj = null;
                    this._backupElement = null;
                    this._isGray = false;
                } else {
                    if (cc._renderType === game.RENDER_TYPE_WEBGL) {
                        this._pixelFormat = Texture2D.defaultPixelFormat;
                        this._hasPremultipliedAlpha = false;
                        this._hasMipmaps = false;
                        this._webTextureObj = null;
                    }
                }
            },
            getPixelWidth: function() {
                return this._pixelWidth;
            },
            getPixelHeight: function() {
                return this._pixelHeight;
            },
            getContentSize: function() {
                return cc.size(this._contentSize.width, this._contentSize.height);
            },
            _getWidth: function() {
                return this._contentSize.width;
            },
            _getHeight: function() {
                return this._contentSize.height;
            },
            getContentSizeInPixels: function() {
                return this._contentSize;
            },
            initWithElement: function(element) {
                if (!element) {
                    return;
                }
                this._htmlElementObj = element;
                this._pixelWidth = this._contentSize.width = element.width;
                this._pixelHeight = this._contentSize.height = element.height;
                this._textureLoaded = true;
            },
            initWithData: function(data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
                return false;
            },
            initWithImage: function(uiImage) {
                return false;
            },
            getHtmlElementObj: function() {
                return this._htmlElementObj;
            },
            isLoaded: function() {
                return this._textureLoaded;
            },
            handleLoadedTexture: function() {
                var self = this;
                if (!self._htmlElementObj) {
                    var img = cc.loader.getRes(self.url);
                    if (!img) {
                        return;
                    }
                    self.initWithElement(img);
                }
                if (!self._htmlElementObj.width || !self._htmlElementObj.height) {
                    return;
                }
                var locElement = self._htmlElementObj;
                self._pixelWidth = self._contentSize.width = locElement.width;
                self._pixelHeight = self._contentSize.height = locElement.height;
                self._textureLoaded = true;
                cc._renderType === cc.game.RENDER_TYPE_WEBGL && (cc.view._antiAliasEnabled ? self.setAntiAliasTexParameters() : self.setAliasTexParameters());
                self.emit("load");
            },
            description: function() {
                return "<cc.Texture2D | Name = " + this.getName() + " | Dimensions = " + this.getPixelWidth() + " x " + this.getPixelHeight() + ">";
            },
            releaseTexture: function() {
                this._webTextureObj && cc._renderContext.deleteTexture(this._webTextureObj);
                cc.loader.release(this._uuid || this.url);
            },
            getName: function() {
                return this._webTextureObj || null;
            },
            getPixelFormat: function() {
                return this._pixelFormat || null;
            },
            hasPremultipliedAlpha: function() {
                return this._hasPremultipliedAlpha || false;
            },
            hasMipmaps: function() {
                return this._hasMipmaps || false;
            },
            setTexParameters: function(texParams, magFilter, wrapS, wrapT) {
                void 0 !== magFilter && (texParams = {
                    minFilter: texParams,
                    magFilter: magFilter,
                    wrapS: wrapS,
                    wrapT: wrapT
                });
                if (texParams.wrapS === WrapMode.REPEAT && texParams.wrapT === WrapMode.REPEAT) {
                    this._pattern = "repeat";
                    return;
                }
                if (texParams.wrapS === WrapMode.REPEAT) {
                    this._pattern = "repeat-x";
                    return;
                }
                if (texParams.wrapT === WrapMode.REPEAT) {
                    this._pattern = "repeat-y";
                    return;
                }
                this._pattern = "";
            },
            setAntiAliasTexParameters: function() {},
            setAliasTexParameters: function() {},
            generateMipmap: function() {},
            stringForFormat: function() {
                return "";
            },
            bitsPerPixelForFormat: function(format) {
                return -1;
            }
        });
        Texture2D.WrapMode = WrapMode;
        var _c = Texture2D;
        _c.PIXEL_FORMAT_RGBA8888 = 2;
        _c.PIXEL_FORMAT_RGB888 = 3;
        _c.PIXEL_FORMAT_RGB565 = 4;
        _c.PIXEL_FORMAT_A8 = 5;
        _c.PIXEL_FORMAT_I8 = 6;
        _c.PIXEL_FORMAT_AI88 = 7;
        _c.PIXEL_FORMAT_RGBA4444 = 8;
        _c.PIXEL_FORMAT_RGB5A1 = 7;
        _c.PIXEL_FORMAT_PVRTC4 = 9;
        _c.PIXEL_FORMAT_PVRTC2 = 10;
        _c.PIXEL_FORMAT_DEFAULT = _c.PIXEL_FORMAT_RGBA8888;
        _c.defaultPixelFormat = _c.PIXEL_FORMAT_DEFAULT;
        var _M = Texture2D._M = {};
        _M[_c.PIXEL_FORMAT_RGBA8888] = "RGBA8888";
        _M[_c.PIXEL_FORMAT_RGB888] = "RGB888";
        _M[_c.PIXEL_FORMAT_RGB565] = "RGB565";
        _M[_c.PIXEL_FORMAT_A8] = "A8";
        _M[_c.PIXEL_FORMAT_I8] = "I8";
        _M[_c.PIXEL_FORMAT_AI88] = "AI88";
        _M[_c.PIXEL_FORMAT_RGBA4444] = "RGBA4444";
        _M[_c.PIXEL_FORMAT_RGB5A1] = "RGB5A1";
        _M[_c.PIXEL_FORMAT_PVRTC4] = "PVRTC4";
        _M[_c.PIXEL_FORMAT_PVRTC2] = "PVRTC2";
        var _B = Texture2D._B = {};
        _B[_c.PIXEL_FORMAT_RGBA8888] = 32;
        _B[_c.PIXEL_FORMAT_RGB888] = 24;
        _B[_c.PIXEL_FORMAT_RGB565] = 16;
        _B[_c.PIXEL_FORMAT_A8] = 8;
        _B[_c.PIXEL_FORMAT_I8] = 8;
        _B[_c.PIXEL_FORMAT_AI88] = 16;
        _B[_c.PIXEL_FORMAT_RGBA4444] = 16;
        _B[_c.PIXEL_FORMAT_RGB5A1] = 16;
        _B[_c.PIXEL_FORMAT_PVRTC4] = 4;
        _B[_c.PIXEL_FORMAT_PVRTC2] = 3;
        var _p = Texture2D.prototype;
        _p.name;
        cc.defineGetterSetter(_p, "name", _p.getName);
        _p.pixelFormat;
        cc.defineGetterSetter(_p, "pixelFormat", _p.getPixelFormat);
        _p.pixelWidth;
        cc.defineGetterSetter(_p, "pixelWidth", _p.getPixelWidth);
        _p.pixelHeight;
        cc.defineGetterSetter(_p, "pixelHeight", _p.getPixelHeight);
        _p.width;
        cc.defineGetterSetter(_p, "width", _p._getWidth);
        _p.height;
        cc.defineGetterSetter(_p, "height", _p._getHeight);
        game.once(game.EVENT_RENDERER_INITED, function() {
            if (cc._renderType === game.RENDER_TYPE_CANVAS) {
                var renderToCache = function(image, cache) {
                    var w = image.width;
                    var h = image.height;
                    cache[0].width = w;
                    cache[0].height = h;
                    cache[1].width = w;
                    cache[1].height = h;
                    cache[2].width = w;
                    cache[2].height = h;
                    cache[3].width = w;
                    cache[3].height = h;
                    var cacheCtx = cache[3].getContext("2d");
                    cacheCtx.drawImage(image, 0, 0);
                    var pixels = cacheCtx.getImageData(0, 0, w, h).data;
                    var ctx;
                    for (var rgbI = 0; rgbI < 4; rgbI++) {
                        ctx = cache[rgbI].getContext("2d");
                        var to = ctx.getImageData(0, 0, w, h);
                        var data = to.data;
                        for (var i = 0; i < pixels.length; i += 4) {
                            data[i] = 0 === rgbI ? pixels[i] : 0;
                            data[i + 1] = 1 === rgbI ? pixels[i + 1] : 0;
                            data[i + 2] = 2 === rgbI ? pixels[i + 2] : 0;
                            data[i + 3] = pixels[i + 3];
                        }
                        ctx.putImageData(to, 0, 0);
                    }
                    image.onload = null;
                };
                var generateGrayTexture = function(texture, rect, renderCanvas) {
                    if (null === texture) {
                        return null;
                    }
                    renderCanvas = renderCanvas || document.createElement("canvas");
                    rect = rect || cc.rect(0, 0, texture.width, texture.height);
                    renderCanvas.width = rect.width;
                    renderCanvas.height = rect.height;
                    var context = renderCanvas.getContext("2d");
                    context.drawImage(texture, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
                    var imgData = context.getImageData(0, 0, rect.width, rect.height);
                    var data = imgData.data;
                    for (var i = 0, len = data.length; i < len; i += 4) {
                        data[i] = data[i + 1] = data[i + 2] = .34 * data[i] + .5 * data[i + 1] + .16 * data[i + 2];
                    }
                    context.putImageData(imgData, 0, 0);
                    return renderCanvas;
                };
                JS.mixin(Texture2D.prototype, {
                    _generateTextureCacheForColor: function() {
                        if (this.channelCache) {
                            return this.channelCache;
                        }
                        var textureCache = [ document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas") ];
                        renderToCache(this._htmlElementObj, textureCache);
                        return this.channelCache = textureCache;
                    },
                    _switchToGray: function(toGray) {
                        if (!this._textureLoaded || this._isGray === toGray) {
                            return;
                        }
                        this._isGray = toGray;
                        if (this._isGray) {
                            this._backupElement = this._htmlElementObj;
                            this._grayElementObj || (this._grayElementObj = generateGrayTexture(this._htmlElementObj));
                            this._htmlElementObj = this._grayElementObj;
                        } else {
                            null !== this._backupElement && (this._htmlElementObj = this._backupElement);
                        }
                    },
                    _generateGrayTexture: function() {
                        if (!this._textureLoaded) {
                            return null;
                        }
                        var grayElement = generateGrayTexture(this._htmlElementObj);
                        var newTexture = new Texture2D();
                        newTexture.initWithElement(grayElement);
                        newTexture.handleLoadedTexture();
                        return newTexture;
                    },
                    _generateColorTexture: sys._supportCanvasNewBlendModes ? function(r, g, b, rect, canvas) {
                        var onlyCanvas = false;
                        canvas ? onlyCanvas = true : canvas = document.createElement("canvas");
                        var textureImage = this._htmlElementObj;
                        rect || (rect = cc.rect(0, 0, textureImage.width, textureImage.height));
                        canvas.width = rect.width;
                        canvas.height = rect.height;
                        if (rect.width && rect.height) {
                            var context = canvas.getContext("2d");
                            context.globalCompositeOperation = "source-over";
                            context.fillStyle = "rgb(" + (0 | r) + "," + (0 | g) + "," + (0 | b) + ")";
                            context.fillRect(0, 0, rect.width, rect.height);
                            context.globalCompositeOperation = "multiply";
                            context.drawImage(textureImage, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
                            context.globalCompositeOperation = "destination-atop";
                            context.drawImage(textureImage, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
                        }
                        if (onlyCanvas) {
                            return canvas;
                        }
                        var newTexture = new Texture2D();
                        newTexture.initWithElement(canvas);
                        newTexture.handleLoadedTexture();
                        return newTexture;
                    } : function(r, g, b, rect, canvas) {
                        var onlyCanvas = false;
                        canvas ? onlyCanvas = true : canvas = document.createElement("canvas");
                        var textureImage = this._htmlElementObj;
                        rect || (rect = cc.rect(0, 0, textureImage.width, textureImage.height));
                        canvas.width = rect.width;
                        canvas.height = rect.height;
                        if (rect.width && rect.height) {
                            var context = canvas.getContext("2d");
                            context.drawImage(textureImage, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
                            var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                            var data = imageData.data;
                            r /= 255;
                            g /= 255;
                            b /= 255;
                            for (var i = 0; i < data.length; i += 4) {
                                data[i] = data[i] * r;
                                data[i + 1] = data[i + 1] * g;
                                data[i + 2] = data[i + 2] * b;
                            }
                            context.putImageData(imageData, 0, 0);
                        }
                        if (onlyCanvas) {
                            return canvas;
                        }
                        var newTexture = new Texture2D();
                        newTexture.initWithElement(canvas);
                        newTexture.handleLoadedTexture();
                        return newTexture;
                    }
                });
            } else {
                cc._renderType === game.RENDER_TYPE_WEBGL && JS.mixin(Texture2D.prototype, {
                    initWithData: function(data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
                        var self = this, tex2d = Texture2D;
                        var gl = cc._renderContext;
                        var format = gl.RGBA, type = gl.UNSIGNED_BYTE;
                        var bitsPerPixel = Texture2D._B[pixelFormat];
                        var bytesPerRow = pixelsWide * bitsPerPixel / 8;
                        bytesPerRow % 8 === 0 ? gl.pixelStorei(gl.UNPACK_ALIGNMENT, 8) : bytesPerRow % 4 === 0 ? gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4) : bytesPerRow % 2 === 0 ? gl.pixelStorei(gl.UNPACK_ALIGNMENT, 2) : gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
                        self._webTextureObj = gl.createTexture();
                        cc.gl.bindTexture2D(self);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                        switch (pixelFormat) {
                          case tex2d.PIXEL_FORMAT_RGBA8888:
                            format = gl.RGBA;
                            break;

                          case tex2d.PIXEL_FORMAT_RGB888:
                            format = gl.RGB;
                            break;

                          case tex2d.PIXEL_FORMAT_RGBA4444:
                            type = gl.UNSIGNED_SHORT_4_4_4_4;
                            break;

                          case tex2d.PIXEL_FORMAT_RGB5A1:
                            type = gl.UNSIGNED_SHORT_5_5_5_1;
                            break;

                          case tex2d.PIXEL_FORMAT_RGB565:
                            type = gl.UNSIGNED_SHORT_5_6_5;
                            break;

                          case tex2d.PIXEL_FORMAT_AI88:
                            format = gl.LUMINANCE_ALPHA;
                            break;

                          case tex2d.PIXEL_FORMAT_A8:
                            format = gl.ALPHA;
                            break;

                          case tex2d.PIXEL_FORMAT_I8:
                            format = gl.LUMINANCE;
                            break;

                          default:
                            cc.assert(0, cc._LogInfos.Texture2D.initWithData);
                        }
                        gl.texImage2D(gl.TEXTURE_2D, 0, format, pixelsWide, pixelsHigh, 0, format, type, data);
                        self._contentSize.width = contentSize.width;
                        self._contentSize.height = contentSize.height;
                        self._pixelWidth = pixelsWide;
                        self._pixelHeight = pixelsHigh;
                        self._pixelFormat = pixelFormat;
                        self._hasPremultipliedAlpha = false;
                        self._hasMipmaps = false;
                        self._textureLoaded = true;
                        return true;
                    },
                    initWithImage: function(uiImage) {
                        if (null == uiImage) {
                            cc.log(cc._LogInfos.Texture2D.initWithImage);
                            return false;
                        }
                        var imageWidth = uiImage.getWidth();
                        var imageHeight = uiImage.getHeight();
                        var maxTextureSize = cc.configuration.getMaxTextureSize();
                        if (imageWidth > maxTextureSize || imageHeight > maxTextureSize) {
                            cc.log(cc._LogInfos.Texture2D.initWithImage_2, imageWidth, imageHeight, maxTextureSize, maxTextureSize);
                            return false;
                        }
                        this._textureLoaded = true;
                        return this._initPremultipliedATextureWithImage(uiImage, imageWidth, imageHeight);
                    },
                    initWithElement: function(element) {
                        if (!element) {
                            return;
                        }
                        this._webTextureObj = cc._renderContext.createTexture();
                        this._htmlElementObj = element;
                        this._textureLoaded = true;
                    },
                    handleLoadedTexture: function(premultiplied) {
                        premultiplied = !!premultiplied;
                        var self = this;
                        if (!game._rendererInitialized) {
                            return;
                        }
                        if (!self._htmlElementObj) {
                            var img = cc.loader.getRes(self.url);
                            if (!img) {
                                return;
                            }
                            self.initWithElement(img);
                        }
                        if (!self._htmlElementObj.width || !self._htmlElementObj.height) {
                            return;
                        }
                        var gl = cc._renderContext;
                        cc.gl.bindTexture2D(self);
                        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
                        premultiplied && gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self._htmlElementObj);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                        cc.gl.bindTexture2D(null);
                        premultiplied && gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
                        var pixelsWide = self._htmlElementObj.width;
                        var pixelsHigh = self._htmlElementObj.height;
                        self._pixelWidth = self._contentSize.width = pixelsWide;
                        self._pixelHeight = self._contentSize.height = pixelsHigh;
                        self._pixelFormat = Texture2D.PIXEL_FORMAT_RGBA8888;
                        self._hasPremultipliedAlpha = premultiplied;
                        self._hasMipmaps = false;
                        self._textureLoaded = true;
                        cc.view._antiAliasEnabled ? self.setAntiAliasTexParameters() : self.setAliasTexParameters();
                        self.emit("load");
                    },
                    setTexParameters: function(texParams, magFilter, wrapS, wrapT) {
                        var _t = this;
                        var gl = cc._renderContext;
                        void 0 !== magFilter && (texParams = {
                            minFilter: texParams,
                            magFilter: magFilter,
                            wrapS: wrapS,
                            wrapT: wrapT
                        });
                        cc.assert(_t._pixelWidth === misc.NextPOT(_t._pixelWidth) && _t._pixelHeight === misc.NextPOT(_t._pixelHeight) || texParams.wrapS === gl.CLAMP_TO_EDGE && texParams.wrapT === gl.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures");
                        cc.gl.bindTexture2D(_t);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texParams.minFilter);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texParams.magFilter);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, texParams.wrapS);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, texParams.wrapT);
                    },
                    setAntiAliasTexParameters: function() {
                        var gl = cc._renderContext;
                        cc.gl.bindTexture2D(this);
                        this._hasMipmaps ? gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST) : gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    },
                    setAliasTexParameters: function() {
                        var gl = cc._renderContext;
                        cc.gl.bindTexture2D(this);
                        this._hasMipmaps ? gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_NEAREST) : gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                    },
                    generateMipmap: function() {
                        var _t = this;
                        cc.assert(_t._pixelWidth === misc.NextPOT(_t._pixelWidth) && _t._pixelHeight === misc.NextPOT(_t._pixelHeight), "Mimpap texture only works in POT textures");
                        cc.gl.bindTexture2D(_t);
                        cc._renderContext.generateMipmap(cc._renderContext.TEXTURE_2D);
                        _t._hasMipmaps = true;
                    },
                    stringForFormat: function() {
                        return Texture2D._M[this._pixelFormat];
                    },
                    bitsPerPixelForFormat: function(format) {
                        format = format || this._pixelFormat;
                        var value = Texture2D._B[format];
                        if (null != value) {
                            return value;
                        }
                        cc.log(cc._LogInfos.Texture2D.bitsPerPixelForFormat, format);
                        return -1;
                    },
                    _initPremultipliedATextureWithImage: function(uiImage, width, height) {
                        var tex2d = Texture2D;
                        var tempData = uiImage.getData();
                        var inPixel32 = null;
                        var inPixel8 = null;
                        var outPixel16 = null;
                        var hasAlpha = uiImage.hasAlpha();
                        var imageSize = cc.size(uiImage.getWidth(), uiImage.getHeight());
                        var pixelFormat = tex2d.defaultPixelFormat;
                        var bpp = uiImage.getBitsPerComponent();
                        var i;
                        if (!hasAlpha) {
                            if (bpp >= 8) {
                                pixelFormat = tex2d.PIXEL_FORMAT_RGB888;
                            } else {
                                cc.log(cc._LogInfos.Texture2D._initPremultipliedATextureWithImage);
                                pixelFormat = tex2d.PIXEL_FORMAT_RGB565;
                            }
                        }
                        var length = width * height;
                        if (pixelFormat === tex2d.PIXEL_FORMAT_RGB565) {
                            if (hasAlpha) {
                                tempData = new Uint16Array(width * height);
                                inPixel32 = uiImage.getData();
                                for (i = 0; i < length; ++i) {
                                    tempData[i] = (inPixel32[i] >> 0 & 255) >> 3 << 11 | (inPixel32[i] >> 8 & 255) >> 2 << 5 | (inPixel32[i] >> 16 & 255) >> 3 << 0;
                                }
                            } else {
                                tempData = new Uint16Array(width * height);
                                inPixel8 = uiImage.getData();
                                for (i = 0; i < length; ++i) {
                                    tempData[i] = (255 & inPixel8[i]) >> 3 << 11 | (255 & inPixel8[i]) >> 2 << 5 | (255 & inPixel8[i]) >> 3 << 0;
                                }
                            }
                        } else {
                            if (pixelFormat === tex2d.PIXEL_FORMAT_RGBA4444) {
                                tempData = new Uint16Array(width * height);
                                inPixel32 = uiImage.getData();
                                for (i = 0; i < length; ++i) {
                                    tempData[i] = (inPixel32[i] >> 0 & 255) >> 4 << 12 | (inPixel32[i] >> 8 & 255) >> 4 << 8 | (inPixel32[i] >> 16 & 255) >> 4 << 4 | (inPixel32[i] >> 24 & 255) >> 4 << 0;
                                }
                            } else {
                                if (pixelFormat === tex2d.PIXEL_FORMAT_RGB5A1) {
                                    tempData = new Uint16Array(width * height);
                                    inPixel32 = uiImage.getData();
                                    for (i = 0; i < length; ++i) {
                                        tempData[i] = (inPixel32[i] >> 0 & 255) >> 3 << 11 | (inPixel32[i] >> 8 & 255) >> 3 << 6 | (inPixel32[i] >> 16 & 255) >> 3 << 1 | (inPixel32[i] >> 24 & 255) >> 7 << 0;
                                    }
                                } else {
                                    if (pixelFormat === tex2d.PIXEL_FORMAT_A8) {
                                        tempData = new Uint8Array(width * height);
                                        inPixel32 = uiImage.getData();
                                        for (i = 0; i < length; ++i) {
                                            tempData[i] = inPixel32 >> 24 & 255;
                                        }
                                    }
                                }
                            }
                        }
                        if (hasAlpha && pixelFormat === tex2d.PIXEL_FORMAT_RGB888) {
                            inPixel32 = uiImage.getData();
                            tempData = new Uint8Array(width * height * 3);
                            for (i = 0; i < length; ++i) {
                                tempData[3 * i] = inPixel32 >> 0 & 255;
                                tempData[3 * i + 1] = inPixel32 >> 8 & 255;
                                tempData[3 * i + 2] = inPixel32 >> 16 & 255;
                            }
                        }
                        this.initWithData(tempData, pixelFormat, width, height, imageSize);
                        tempData != uiImage.getData() && (tempData = null);
                        this._hasPremultipliedAlpha = uiImage.isPremultipliedAlpha();
                        return true;
                    }
                });
            }
        });
        cc.Texture2D = module.exports = Texture2D;
    }, {
        "../CCGame": 20,
        "../assets/CCRawAsset": 27,
        "../event/event-target": 49,
        "../platform/CCClass": 68,
        "../platform/CCSys": 71,
        "../platform/_CCClass": 74,
        "../platform/js": 81,
        "../utils/misc": 97
    } ],
    91: [ function(require, module, exports) {
        var JS = require("../platform/js");
        var game = require("../CCGame");
        var Texture2D = require("./CCTexture2D");
        var textureCache = {
            _textures: {},
            _textureColorsCache: {},
            _textureKeySeq: 0 | 1e3 * Math.random(),
            _loadedTexturesBefore: {},
            handleLoadedTexture: null,
            _initializingRenderer: function() {
                var selPath;
                var locLoadedTexturesBefore = this._loadedTexturesBefore, locTextures = this._textures;
                for (selPath in locLoadedTexturesBefore) {
                    var tex2d = locLoadedTexturesBefore[selPath];
                    tex2d.handleLoadedTexture();
                    locTextures[selPath] = tex2d;
                }
                this._loadedTexturesBefore = {};
            },
            description: function() {
                return "<TextureCache | Number of textures = " + this._textures.length + ">";
            },
            textureForKey: function(textureKeyName) {
                cc.log(cc._LogInfos.textureCache.textureForKey);
                return this.getTextureForKey(textureKeyName);
            },
            getTextureForKey: function(textureKeyName) {
                return this._textures[textureKeyName];
            },
            getKeyByTexture: function(texture) {
                for (var key in this._textures) {
                    if (this._textures[key] === texture) {
                        return key;
                    }
                }
                return null;
            },
            _generalTextureKey: function(id) {
                return "_textureKey_" + id;
            },
            getTextureColors: function(texture) {
                var image = texture._htmlElementObj;
                var key = this.getKeyByTexture(image);
                key || (key = image instanceof HTMLImageElement ? image.src : this._generalTextureKey(texture.__instanceId));
                this._textureColorsCache[key] || (this._textureColorsCache[key] = texture._generateTextureCacheForColor());
                return this._textureColorsCache[key];
            },
            getAllTextures: function() {
                var texs = [];
                for (var key in this._textures) {
                    var item = this._textures[key];
                    texs.push(item);
                }
                return texs;
            },
            removeAllTextures: function() {
                var locTextures = this._textures;
                for (var selKey in locTextures) {
                    locTextures[selKey] && locTextures[selKey].releaseTexture();
                }
                this._textures = {};
            },
            removeTexture: function(texture) {
                if (!texture) {
                    return;
                }
                var locTextures = this._textures;
                for (var selKey in locTextures) {
                    if (locTextures[selKey] === texture) {
                        locTextures[selKey].releaseTexture();
                        delete locTextures[selKey];
                    }
                }
            },
            removeTextureForKey: function(textureKeyName) {
                if ("string" != typeof textureKeyName) {
                    return;
                }
                var locTextures = this._textures;
                if (locTextures[textureKeyName]) {
                    locTextures[textureKeyName].releaseTexture();
                    delete locTextures[textureKeyName];
                }
            },
            addImage: null,
            addImageAsync: null,
            cacheImage: function(path, texture) {
                cc.assert(path, cc._LogInfos.textureCache.invalidKey);
                if (texture instanceof Texture2D) {
                    this._textures[path] = texture;
                    return;
                }
                var texture2d = new Texture2D();
                texture2d.initWithElement(texture);
                texture2d.handleLoadedTexture();
                this._textures[path] = texture2d;
            },
            addUIImage: function(image, key) {
                cc.assert(image, cc._LogInfos.textureCache.addUIImage_2);
                if (key && this._textures[key]) {
                    return this._textures[key];
                }
                var texture = new Texture2D();
                texture.initWithImage(image);
                null != key ? this._textures[key] = texture : cc.log(cc._LogInfos.textureCache.addUIImage);
                return texture;
            },
            dumpCachedTextureInfo: function() {
                var count = 0;
                var totalBytes = 0, locTextures = this._textures;
                for (var key in locTextures) {
                    var selTexture = locTextures[key];
                    count++;
                    selTexture.getHtmlElementObj() instanceof HTMLImageElement ? cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo, key, selTexture.getHtmlElementObj().src, selTexture.getPixelWidth(), selTexture.getPixelHeight()) : cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo_2, key, selTexture.getPixelWidth(), selTexture.getPixelHeight());
                    totalBytes += selTexture.getPixelWidth() * selTexture.getPixelHeight() * 4;
                }
                var locTextureColorsCache = this._textureColorsCache;
                for (key in locTextureColorsCache) {
                    var selCanvasColorsArr = locTextureColorsCache[key];
                    for (var selCanvasKey in selCanvasColorsArr) {
                        var selCanvas = selCanvasColorsArr[selCanvasKey];
                        count++;
                        cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo_2, key, selCanvas.width, selCanvas.height);
                        totalBytes += selCanvas.width * selCanvas.height * 4;
                    }
                }
                cc.log(cc._LogInfos.textureCache.dumpCachedTextureInfo_3, count, totalBytes / 1024, (totalBytes / 1048576).toFixed(2));
            },
            _clear: function() {
                this._textures = {};
                this._textureColorsCache = {};
                this._textureKeySeq = 0 | 1e3 * Math.random();
                this._loadedTexturesBefore = {};
            }
        };
        game.once(game.EVENT_RENDERER_INITED, function() {
            var _p = textureCache;
            if (cc._renderType === game.RENDER_TYPE_CANVAS) {
                _p.handleLoadedTexture = function(url) {
                    var locTexs = this._textures;
                    var tex = locTexs[url];
                    if (!tex) {
                        cc.assert(url, cc._LogInfos.textureCache.invalidKey);
                        tex = locTexs[url] = new Texture2D();
                        tex.url = url;
                    }
                    tex.handleLoadedTexture();
                };
                _p.addImage = function(url, cb, target) {
                    cc.assert(url, cc._LogInfos.Texture2D.addImage);
                    var locTexs = this._textures;
                    var tex = locTexs[url];
                    if (tex) {
                        if (tex.isLoaded()) {
                            cb && cb.call(target, tex);
                            return tex;
                        }
                        tex.once("load", function() {
                            cb && cb.call(target, tex);
                        }, target);
                        return tex;
                    }
                    tex = locTexs[url] = new Texture2D();
                    tex.url = url;
                    cc.loader.load(url, function(err, texture) {
                        if (err) {
                            return cb && cb.call(target, err || new Error("Unknown error"));
                        }
                        textureCache.handleLoadedTexture(url);
                        cb && cb.call(target, tex);
                    });
                    return tex;
                };
                _p.addImageAsync = _p.addImage;
            } else {
                if (cc._renderType === game.RENDER_TYPE_WEBGL) {
                    _p.handleLoadedTexture = function(url) {
                        var locTexs = this._textures, tex, premultiplied;
                        cc.game._rendererInitialized || (locTexs = this._loadedTexturesBefore);
                        tex = locTexs[url];
                        if (!tex) {
                            cc.assert(url, cc._LogInfos.textureCache.invalidKey);
                            tex = locTexs[url] = new Texture2D();
                            tex.url = url;
                        }
                        premultiplied = cc.macro.AUTO_PREMULTIPLIED_ALPHA_FOR_PNG && ".png" === cc.path.extname(url);
                        tex.handleLoadedTexture(premultiplied);
                    };
                    _p.addImage = function(url, cb, target) {
                        cc.assert(url, cc._LogInfos.Texture2D.addImage_2);
                        var locTexs = this._textures;
                        cc.game._rendererInitialized || (locTexs = this._loadedTexturesBefore);
                        var tex = locTexs[url];
                        if (tex) {
                            if (tex.isLoaded()) {
                                cb && cb.call(target, tex);
                                return tex;
                            }
                            tex.once("load", function() {
                                cb && cb.call(target, tex);
                            }, target);
                            return tex;
                        }
                        tex = locTexs[url] = new Texture2D();
                        tex.url = url;
                        cc.loader.load(url, function(err, texture) {
                            if (err) {
                                return cb && cb.call(target, err || new Error("Unknown error"));
                            }
                            textureCache.handleLoadedTexture(url);
                            cb && cb.call(target, tex);
                        });
                        return tex;
                    };
                    _p.addImageAsync = _p.addImage;
                }
            }
        });
        cc.textureCache = module.exports = textureCache;
    }, {
        "../CCGame": 20,
        "../platform/js": 81,
        "./CCTexture2D": 90
    } ],
    92: [ function(require, module, exports) {
        require("./CCTexture2D");
        require("./CCTextureCache");
    }, {
        "./CCTexture2D": 90,
        "./CCTextureCache": 91
    } ],
    93: [ function(require, module, exports) {
        require("../platform/CCSys");
        var EXTNAME_RE = /(\.[^\.\/\?\\]*)(\?.*)?$/;
        var NORMALIZE_RE = /[^\.\/]+\/\.\.\//;
        cc.path = {
            join: function() {
                var l = arguments.length;
                var result = "";
                for (var i = 0; i < l; i++) {
                    result = (result + ("" === result ? "" : "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
                }
                return result;
            },
            extname: function(pathStr) {
                var temp = EXTNAME_RE.exec(pathStr);
                return temp ? temp[1] : "";
            },
            mainFileName: function(fileName) {
                if (fileName) {
                    var idx = fileName.lastIndexOf(".");
                    if (idx !== -1) {
                        return fileName.substring(0, idx);
                    }
                }
                return fileName;
            },
            basename: function(pathStr, extname) {
                var index = pathStr.indexOf("?");
                index > 0 && (pathStr = pathStr.substring(0, index));
                var reg = /(\/|\\\\)([^(\/|\\\\)]+)$/g;
                var result = reg.exec(pathStr.replace(/(\/|\\\\)$/, ""));
                if (!result) {
                    return null;
                }
                var baseName = result[2];
                if (extname && pathStr.substring(pathStr.length - extname.length).toLowerCase() === extname.toLowerCase()) {
                    return baseName.substring(0, baseName.length - extname.length);
                }
                return baseName;
            },
            dirname: function(pathStr) {
                return pathStr.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2");
            },
            changeExtname: function(pathStr, extname) {
                extname = extname || "";
                var index = pathStr.indexOf("?");
                var tempStr = "";
                if (index > 0) {
                    tempStr = pathStr.substring(index);
                    pathStr = pathStr.substring(0, index);
                }
                index = pathStr.lastIndexOf(".");
                if (index < 0) {
                    return pathStr + extname + tempStr;
                }
                return pathStr.substring(0, index) + extname + tempStr;
            },
            changeBasename: function(pathStr, basename, isSameExt) {
                if (0 === basename.indexOf(".")) {
                    return this.changeExtname(pathStr, basename);
                }
                var index = pathStr.indexOf("?");
                var tempStr = "";
                var ext = isSameExt ? this.extname(pathStr) : "";
                if (index > 0) {
                    tempStr = pathStr.substring(index);
                    pathStr = pathStr.substring(0, index);
                }
                index = pathStr.lastIndexOf("/");
                index = index <= 0 ? 0 : index + 1;
                return pathStr.substring(0, index) + basename + ext + tempStr;
            },
            _normalize: function(url) {
                var oldUrl = url = String(url);
                do {
                    oldUrl = url;
                    url = url.replace(NORMALIZE_RE, "");
                } while (oldUrl.length !== url.length);
                return url;
            },
            sep: cc.sys.os === cc.sys.OS_WINDOWS ? "\\" : "/",
            _setEndWithSep: function(path, endsWithSep) {
                var sep = cc.path.sep;
                if ("undefined" == typeof endsWithSep) {
                    endsWithSep = true;
                } else {
                    if ("string" == typeof endsWithSep) {
                        sep = endsWithSep;
                        endsWithSep = !!endsWithSep;
                    }
                }
                var endChar = path[path.length - 1];
                var oldEndWithSep = "\\" === endChar || "/" === endChar;
                !oldEndWithSep && endsWithSep ? path += sep : oldEndWithSep && !endsWithSep && (path = path.slice(0, -1));
                return path;
            }
        };
        module.exports = cc.path;
    }, {
        "../platform/CCSys": 71
    } ],
    94: [ function(require, module, exports) {
        var SgHelper = require("./scene-graph-helper");
        var Destroying = require("../platform/CCObject").Flags.Destroying;
        var Misc = require("./misc");
        var IdGenerater = require("../platform/id-generater");
        function updateOrder(node) {
            var parent = node._parent;
            parent._reorderChildDirty = true;
            parent._delaySort();
        }
        var POSITION_CHANGED = "position-changed";
        var SIZE_CHANGED = "size-changed";
        var ANCHOR_CHANGED = "anchor-changed";
        var CHILD_ADDED = "child-added";
        var CHILD_REMOVED = "child-removed";
        var CHILD_REORDER = "child-reorder";
        var ERR_INVALID_NUMBER = false;
        var idGenerater = new IdGenerater("Node");
        var BaseNode = cc.Class({
            name: "cc._BaseNode",
            "extends": cc.Object,
            mixins: [ cc.EventTarget ],
            properties: {
                _opacity: 255,
                _color: cc.Color.WHITE,
                _cascadeOpacityEnabled: true,
                _parent: null,
                _anchorPoint: cc.p(.5, .5),
                _contentSize: cc.size(0, 0),
                _children: [],
                _rotationX: 0,
                _rotationY: 0,
                _scaleX: 1,
                _scaleY: 1,
                _position: cc.p(0, 0),
                _skewX: 0,
                _skewY: 0,
                _localZOrder: 0,
                _globalZOrder: 0,
                _tag: cc.macro.NODE_TAG_INVALID,
                _opacityModifyRGB: false,
                name: {
                    get: function() {
                        return this._name;
                    },
                    set: function(value) {
                        if (value.indexOf("/") !== -1) {
                            cc.error("Node name can not include '/'.");
                            return;
                        }
                        this._name = value;
                    }
                },
                parent: {
                    get: function() {
                        return this._parent;
                    },
                    set: function(value) {
                        if (this._parent === value) {
                            return;
                        }
                        var sgNode = this._sgNode;
                        sgNode.parent && sgNode.parent.removeChild(sgNode, false);
                        var oldParent = this._parent;
                        this._parent = value || null;
                        if (value) {
                            var parent = value._sgNode;
                            parent.addChild(sgNode);
                            updateOrder(this);
                            value._children.push(this);
                            value.emit(CHILD_ADDED, this);
                        }
                        if (oldParent) {
                            if (!(oldParent._objFlags & Destroying)) {
                                var removeAt = oldParent._children.indexOf(this);
                                if (removeAt < 0) {
                                    return cc.error("Internal error, should not remove unknown node from parent.");
                                }
                                oldParent._children.splice(removeAt, 1);
                                oldParent.emit(CHILD_REMOVED, this);
                                this._onHierarchyChanged(oldParent);
                            }
                        } else {
                            value && this._onHierarchyChanged(null);
                        }
                    }
                },
                _id: {
                    "default": "",
                    editorOnly: true
                },
                uuid: {
                    get: function() {
                        var id = this._id;
                        id || (id = this._id = idGenerater.getNewId());
                        return id;
                    }
                },
                skewX: {
                    get: function() {
                        return this._skewX;
                    },
                    set: function(value) {
                        this._skewX = value;
                        this._sgNode.skewX = value;
                    }
                },
                skewY: {
                    get: function() {
                        return this._skewY;
                    },
                    set: function(value) {
                        this._skewY = value;
                        this._sgNode.skewY = value;
                    }
                },
                zIndex: {
                    get: function() {
                        return this._localZOrder;
                    },
                    set: function(value) {
                        if (this._localZOrder !== value) {
                            this._localZOrder = value;
                            this._sgNode.zIndex = value;
                            this._parent && updateOrder(this);
                        }
                    }
                },
                rotation: {
                    get: function() {
                        this._rotationX !== this._rotationY && cc.log(cc._LogInfos.Node.getRotation);
                        return this._rotationX;
                    },
                    set: function(value) {
                        if (this._rotationX !== value || this._rotationY !== value) {
                            this._rotationX = this._rotationY = value;
                            this._sgNode.rotation = value;
                        }
                    }
                },
                rotationX: {
                    get: function() {
                        return this._rotationX;
                    },
                    set: function(value) {
                        if (this._rotationX !== value) {
                            this._rotationX = value;
                            this._sgNode.rotationX = value;
                        }
                    }
                },
                rotationY: {
                    get: function() {
                        return this._rotationY;
                    },
                    set: function(value) {
                        if (this._rotationY !== value) {
                            this._rotationY = value;
                            this._sgNode.rotationY = value;
                        }
                    }
                },
                scaleX: {
                    get: function() {
                        return this._scaleX;
                    },
                    set: function(value) {
                        if (this._scaleX !== value) {
                            this._scaleX = value;
                            this._sgNode.scaleX = value;
                        }
                    }
                },
                scaleY: {
                    get: function() {
                        return this._scaleY;
                    },
                    set: function(value) {
                        if (this._scaleY !== value) {
                            this._scaleY = value;
                            this._sgNode.scaleY = value;
                        }
                    }
                },
                x: {
                    get: function() {
                        return this._position.x;
                    },
                    set: function(value) {
                        var localPosition = this._position;
                        if (value !== localPosition.x) {
                            var oldValue;
                            localPosition.x = value;
                            this._sgNode.setPositionX(value);
                            var capListeners = this._capturingListeners && this._capturingListeners._callbackTable[POSITION_CHANGED];
                            var bubListeners = this._bubblingListeners && this._bubblingListeners._callbackTable[POSITION_CHANGED];
                            (capListeners && capListeners.length > 0 || bubListeners && bubListeners.length > 0) && this.emit(POSITION_CHANGED);
                        }
                    }
                },
                y: {
                    get: function() {
                        return this._position.y;
                    },
                    set: function(value) {
                        var localPosition = this._position;
                        if (value !== localPosition.y) {
                            var oldValue;
                            localPosition.y = value;
                            this._sgNode.setPositionY(value);
                            var capListeners = this._capturingListeners && this._capturingListeners._callbackTable[POSITION_CHANGED];
                            var bubListeners = this._bubblingListeners && this._bubblingListeners._callbackTable[POSITION_CHANGED];
                            (capListeners && capListeners.length > 0 || bubListeners && bubListeners.length > 0) && this.emit(POSITION_CHANGED);
                        }
                    }
                },
                children: {
                    get: function() {
                        return this._children;
                    }
                },
                childrenCount: {
                    get: function() {
                        return this._children.length;
                    }
                },
                anchorX: {
                    get: function() {
                        return this._anchorPoint.x;
                    },
                    set: function(value) {
                        var anchorPoint = this._anchorPoint;
                        if (anchorPoint.x !== value) {
                            anchorPoint.x = value;
                            var sizeProvider = this._sizeProvider;
                            sizeProvider instanceof _ccsg.Node && sizeProvider.setAnchorPoint(anchorPoint);
                            this.emit(ANCHOR_CHANGED);
                        }
                    }
                },
                anchorY: {
                    get: function() {
                        return this._anchorPoint.y;
                    },
                    set: function(value) {
                        var anchorPoint = this._anchorPoint;
                        if (anchorPoint.y !== value) {
                            anchorPoint.y = value;
                            var sizeProvider = this._sizeProvider;
                            sizeProvider instanceof _ccsg.Node && sizeProvider.setAnchorPoint(anchorPoint);
                            this.emit(ANCHOR_CHANGED);
                        }
                    }
                },
                width: {
                    get: function() {
                        if (this._sizeProvider) {
                            var w = this._sizeProvider._getWidth();
                            this._contentSize.width = w;
                            return w;
                        }
                        return this._contentSize.width;
                    },
                    set: function(value) {
                        if (value !== this._contentSize.width) {
                            var sizeProvider = this._sizeProvider;
                            sizeProvider && sizeProvider.setContentSize(value, sizeProvider._getHeight());
                            var clone;
                            this._contentSize.width = value;
                            this.emit(SIZE_CHANGED);
                        }
                    }
                },
                height: {
                    get: function() {
                        if (this._sizeProvider) {
                            var h = this._sizeProvider._getHeight();
                            this._contentSize.height = h;
                            return h;
                        }
                        return this._contentSize.height;
                    },
                    set: function(value) {
                        if (value !== this._contentSize.height) {
                            var sizeProvider = this._sizeProvider;
                            sizeProvider && sizeProvider.setContentSize(sizeProvider._getWidth(), value);
                            var clone;
                            this._contentSize.height = value;
                            this.emit(SIZE_CHANGED);
                        }
                    }
                },
                _ignoreAnchor: {
                    get: function() {
                        return this.__ignoreAnchor;
                    },
                    set: function(value) {
                        if (this.__ignoreAnchor !== value) {
                            this.__ignoreAnchor = value;
                            this._sgNode.ignoreAnchor = value;
                            var sizeProvider = this._sizeProvider;
                            sizeProvider instanceof _ccsg.Node && sizeProvider !== this._sgNode && (sizeProvider.ignoreAnchor = value);
                            this.emit(ANCHOR_CHANGED);
                        }
                    }
                },
                tag: {
                    get: function() {
                        return this._tag;
                    },
                    set: function(value) {
                        this._tag = value;
                        this._sgNode.tag = value;
                    }
                },
                opacity: {
                    get: function() {
                        return this._opacity;
                    },
                    set: function(value) {
                        if (this._opacity !== value) {
                            this._opacity = value;
                            this._sgNode.setOpacity(value);
                            if (!this._cascadeOpacityEnabled) {
                                var sizeProvider = this._sizeProvider;
                                sizeProvider instanceof _ccsg.Node && sizeProvider !== this._sgNode && sizeProvider.setOpacity(value);
                            }
                        }
                    },
                    range: [ 0, 255 ]
                },
                cascadeOpacity: {
                    get: function() {
                        return this._cascadeOpacityEnabled;
                    },
                    set: function(value) {
                        if (this._cascadeOpacityEnabled !== value) {
                            this._cascadeOpacityEnabled = value;
                            this._sgNode.cascadeOpacity = value;
                            var opacity = value ? 255 : this._opacity;
                            var sizeProvider = this._sizeProvider;
                            sizeProvider instanceof _ccsg.Node && sizeProvider.setOpacity(opacity);
                        }
                    }
                },
                color: {
                    get: function() {
                        var color = this._color;
                        return new cc.Color(color.r, color.g, color.b, color.a);
                    },
                    set: function(value) {
                        if (!this._color.equals(value)) {
                            var color = this._color;
                            color.r = value.r;
                            color.g = value.g;
                            color.b = value.b;
                            255 !== value.a && cc.warn('Should not set alpha via "color", set "opacity" please.');
                            this._sizeProvider instanceof _ccsg.Node && this._sizeProvider.setColor(value);
                        }
                    }
                }
            },
            ctor: function() {
                var sgNode = this._sgNode = new _ccsg.Node();
                cc.game._isCloning || (sgNode.cascadeOpacity = true);
                this._sizeProvider = null;
                this.__ignoreAnchor = false;
                this._reorderChildDirty = false;
                this.__instanceId = this._id || cc.ClassManager.getNewInstanceId();
                this.__eventTargets = [];
            },
            _onPreDestroy: function() {
                for (var i = 0, len = this.__eventTargets.length; i < len; ++i) {
                    var target = this.__eventTargets[i];
                    target && target.targetOff(this);
                }
                cc.director.off(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
            },
            _destruct: Misc.destructIgnoreId,
            _onHierarchyChanged: null,
            init: function() {
                return true;
            },
            attr: function(attrs) {
                for (var key in attrs) {
                    this[key] = attrs[key];
                }
            },
            setGlobalZOrder: function(globalZOrder) {
                this._globalZOrder = globalZOrder;
                this._sgNode.setGlobalZOrder(globalZOrder);
            },
            getGlobalZOrder: function() {
                this._globalZOrder = this._sgNode.getGlobalZOrder();
                return this._globalZOrder;
            },
            getScale: function() {
                this._scaleX !== this._scaleY && cc.log(cc._LogInfos.Node.getScale);
                return this._scaleX;
            },
            setScale: function(scaleX, scaleY) {
                if ("object" == typeof scaleX) {
                    scaleY = scaleX.y;
                    scaleX = scaleX.x;
                } else {
                    scaleY = scaleY || 0 === scaleY ? scaleY : scaleX;
                }
                if (this._scaleX !== scaleX || this._scaleY !== scaleY) {
                    this._scaleX = scaleX;
                    this._scaleY = scaleY;
                    this._sgNode.setScale(scaleX, scaleY);
                }
            },
            getPosition: function() {
                return cc.p(this._position);
            },
            setPosition: function(newPosOrxValue, yValue) {
                var xValue;
                if ("undefined" == typeof yValue) {
                    xValue = newPosOrxValue.x;
                    yValue = newPosOrxValue.y;
                } else {
                    xValue = newPosOrxValue;
                    yValue = yValue;
                }
                var locPosition = this._position;
                if (locPosition.x === xValue && locPosition.y === yValue) {
                    return;
                }
                var oldPosition;
                locPosition.x = xValue;
                locPosition.y = yValue;
                this._sgNode.setPosition(xValue, yValue);
                var capListeners = this._capturingListeners && this._capturingListeners._callbackTable[POSITION_CHANGED];
                var bubListeners = this._bubblingListeners && this._bubblingListeners._callbackTable[POSITION_CHANGED];
                (capListeners && capListeners.length > 0 || bubListeners && bubListeners.length > 0) && this.emit(POSITION_CHANGED);
            },
            getAnchorPoint: function() {
                return cc.p(this._anchorPoint);
            },
            setAnchorPoint: function(point, y) {
                var locAnchorPoint = this._anchorPoint;
                if (void 0 === y) {
                    if (point.x === locAnchorPoint.x && point.y === locAnchorPoint.y) {
                        return;
                    }
                    locAnchorPoint.x = point.x;
                    locAnchorPoint.y = point.y;
                } else {
                    if (point === locAnchorPoint.x && y === locAnchorPoint.y) {
                        return;
                    }
                    locAnchorPoint.x = point;
                    locAnchorPoint.y = y;
                }
                var sizeProvider = this._sizeProvider;
                sizeProvider instanceof _ccsg.Node && sizeProvider.setAnchorPoint(locAnchorPoint);
                this.emit(ANCHOR_CHANGED);
            },
            getAnchorPointInPoints: function() {
                return this._sgNode.getAnchorPointInPoints();
            },
            getContentSize: function(ignoreSizeProvider) {
                if (this._sizeProvider && !ignoreSizeProvider) {
                    var size = this._sizeProvider.getContentSize();
                    this._contentSize = size;
                    return size;
                }
                return cc.size(this._contentSize);
            },
            setContentSize: function(size, height) {
                var locContentSize = this._contentSize;
                var clone;
                if (void 0 === height) {
                    if (size.width === locContentSize.width && size.height === locContentSize.height) {
                        return;
                    }
                    locContentSize.width = size.width;
                    locContentSize.height = size.height;
                } else {
                    if (size === locContentSize.width && height === locContentSize.height) {
                        return;
                    }
                    locContentSize.width = size;
                    locContentSize.height = height;
                }
                this._sizeProvider && this._sizeProvider.setContentSize(locContentSize);
                this.emit(SIZE_CHANGED);
            },
            getBoundingBox: function() {
                var size = this.getContentSize();
                var rect = cc.rect(0, 0, size.width, size.height);
                return cc._rectApplyAffineTransformIn(rect, this.getNodeToParentTransform());
            },
            cleanup: function() {
                cc.director.getActionManager().removeAllActionsFromTarget(this);
                var i, len = this._children.length, node;
                for (i = 0; i < len; ++i) {
                    node = this._children[i];
                    node && node.cleanup();
                }
            },
            getChildByTag: function(aTag) {
                var children = this._children;
                if (null !== children) {
                    for (var i = 0; i < children.length; i++) {
                        var node = children[i];
                        if (node && node.tag === aTag) {
                            return node;
                        }
                    }
                }
                return null;
            },
            getChildByUuid: function(uuid) {
                if (!uuid) {
                    cc.log("Invalid uuid");
                    return null;
                }
                var locChildren = this._children;
                for (var i = 0, len = locChildren.length; i < len; i++) {
                    if (locChildren[i]._id === uuid) {
                        return locChildren[i];
                    }
                }
                return null;
            },
            getChildByName: function(name) {
                if (!name) {
                    cc.log("Invalid name");
                    return null;
                }
                var locChildren = this._children;
                for (var i = 0, len = locChildren.length; i < len; i++) {
                    if (locChildren[i]._name === name) {
                        return locChildren[i];
                    }
                }
                return null;
            },
            addChild: function(child, localZOrder, tag) {
                localZOrder = void 0 === localZOrder ? child._localZOrder : localZOrder;
                var name, setTag = false;
                if ("undefined" == typeof tag) {
                    tag = void 0;
                    name = child._name;
                } else {
                    if (cc.js.isString(tag)) {
                        name = tag;
                        tag = void 0;
                    } else {
                        if (cc.js.isNumber(tag)) {
                            setTag = true;
                            name = "";
                        }
                    }
                }
                if (!(child instanceof cc.Node)) {
                    return cc.error("addChild: The child to add must be instance of cc.Node, not %s.", cc.js.getClassName(child));
                }
                cc.assert(child, cc._LogInfos.Node.addChild_3);
                cc.assert(null === child._parent, "child already added. It can't be added again");
                child.parent = this;
                child.zIndex = localZOrder;
                setTag ? child.setTag(tag) : child.setName(name);
            },
            removeFromParent: function(cleanup) {
                if (this._parent) {
                    void 0 === cleanup && (cleanup = true);
                    this._parent.removeChild(this, cleanup);
                }
            },
            removeChild: function(child, cleanup) {
                if (this._children.indexOf(child) > -1) {
                    (cleanup || void 0 === cleanup) && child.cleanup();
                    child.parent = null;
                }
            },
            removeChildByTag: function(tag, cleanup) {
                tag === cc.macro.NODE_TAG_INVALID && cc.log(cc._LogInfos.Node.removeChildByTag);
                var child = this.getChildByTag(tag);
                child ? this.removeChild(child, cleanup) : cc.log(cc._LogInfos.Node.removeChildByTag_2, tag);
            },
            removeAllChildren: function(cleanup) {
                var children = this._children;
                void 0 === cleanup && (cleanup = true);
                for (var i = children.length - 1; i >= 0; i--) {
                    var node = children[i];
                    if (node) {
                        cleanup && node.cleanup();
                        node.parent = null;
                    }
                }
                this._children.length = 0;
            },
            setNodeDirty: function() {
                this._sgNode.setNodeDirty();
            },
            getParentToNodeTransform: function() {
                return this._sgNode.getParentToNodeTransform();
            },
            _isSgTransformArToMe: function(myContentSize) {
                var renderSize = this._sgNode.getContentSize();
                if (0 === renderSize.width && 0 === renderSize.height && (0 !== myContentSize.width || 0 !== myContentSize.height)) {
                    return true;
                }
                if (this._sgNode.isIgnoreAnchorPointForPosition()) {
                    return true;
                }
                return false;
            },
            getNodeToWorldTransform: function() {
                var contentSize = this.getContentSize();
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
                var mat = this._sgNode.getNodeToWorldTransform();
                if (this._isSgTransformArToMe(contentSize)) {
                    var tx = -this._anchorPoint.x * contentSize.width;
                    var ty = -this._anchorPoint.y * contentSize.height;
                    var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
                    mat = cc.affineTransformConcatIn(offset, mat);
                }
                return mat;
            },
            getNodeToWorldTransformAR: function() {
                var contentSize = this.getContentSize();
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
                var mat = this._sgNode.getNodeToWorldTransform();
                if (!this._isSgTransformArToMe(contentSize)) {
                    var tx = this._anchorPoint.x * contentSize.width;
                    var ty = this._anchorPoint.y * contentSize.height;
                    var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
                    mat = cc.affineTransformConcatIn(offset, mat);
                }
                return mat;
            },
            getWorldToNodeTransform: function() {
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
                return this._sgNode.getWorldToNodeTransform();
            },
            convertToNodeSpace: function(worldPoint) {
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
                var nodePositionIgnoreAnchorPoint = this._sgNode.convertToNodeSpace(worldPoint);
                return cc.pAdd(nodePositionIgnoreAnchorPoint, cc.p(this._anchorPoint.x * this._contentSize.width, this._anchorPoint.y * this._contentSize.height));
            },
            convertToWorldSpace: function(nodePoint) {
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
                var x = nodePoint.x - this._anchorPoint.x * this._contentSize.width;
                var y = nodePoint.y - this._anchorPoint.y * this._contentSize.height;
                var worldPositionIgnoreAnchorPoint = this._sgNode.convertToWorldSpace(cc.v2(x, y));
                return worldPositionIgnoreAnchorPoint;
            },
            convertToNodeSpaceAR: function(worldPoint) {
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
                return this._sgNode.isIgnoreAnchorPointForPosition() ? cc.v2(this._sgNode.convertToNodeSpace(worldPoint)) : this._sgNode.convertToNodeSpaceAR(worldPoint);
            },
            convertToWorldSpaceAR: function(nodePoint) {
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.director._visitScene();
                return this._sgNode.isIgnoreAnchorPointForPosition() ? cc.v2(this._sgNode.convertToWorldSpace(nodePoint)) : cc.v2(this._sgNode.convertToWorldSpaceAR(nodePoint));
            },
            convertTouchToNodeSpace: function(touch) {
                return this.convertToNodeSpace(touch.getLocation());
            },
            convertTouchToNodeSpaceAR: function(touch) {
                return this.convertToNodeSpaceAR(touch.getLocation());
            },
            getNodeToParentTransform: function() {
                var contentSize = this.getContentSize();
                var mat = this._sgNode.getNodeToParentTransform();
                if (this._isSgTransformArToMe(contentSize)) {
                    var tx = -this._anchorPoint.x * contentSize.width;
                    var ty = -this._anchorPoint.y * contentSize.height;
                    var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
                    mat = cc.affineTransformConcatIn(offset, mat);
                }
                return mat;
            },
            getNodeToParentTransformAR: function() {
                var contentSize = this.getContentSize();
                var mat = this._sgNode.getNodeToParentTransform();
                if (!this._isSgTransformArToMe(contentSize)) {
                    var tx = this._anchorPoint.x * contentSize.width;
                    var ty = this._anchorPoint.y * contentSize.height;
                    var offset = cc.affineTransformMake(1, 0, 0, 1, tx, ty);
                    mat = cc.affineTransformConcatIn(offset, mat);
                }
                return mat;
            },
            getBoundingBoxToWorld: function() {
                var trans;
                this.parent && (trans = this.parent.getNodeToWorldTransformAR());
                return this._getBoundingBoxTo(trans);
            },
            _getBoundingBoxTo: function(parentTransformAR) {
                var size = this.getContentSize();
                var width = size.width;
                var height = size.height;
                var rect = cc.rect(-this._anchorPoint.x * width, -this._anchorPoint.y * height, width, height);
                var transAR = cc.affineTransformConcat(this.getNodeToParentTransformAR(), parentTransformAR);
                cc._rectApplyAffineTransformIn(rect, transAR);
                if (!this._children) {
                    return rect;
                }
                var locChildren = this._children;
                for (var i = 0; i < locChildren.length; i++) {
                    var child = locChildren[i];
                    if (child && child.active) {
                        var childRect = child._getBoundingBoxTo(transAR);
                        childRect && (rect = cc.rectUnion(rect, childRect));
                    }
                }
                return rect;
            },
            getDisplayedOpacity: function() {
                return this._sgNode.getDisplayedOpacity();
            },
            _updateDisplayedOpacity: function(parentOpacity) {
                this._sgNode.updateDisplayedOpacity(parentOpacity);
            },
            getDisplayedColor: function() {
                return this._sgNode.getDisplayedColor();
            },
            setOpacityModifyRGB: function(opacityValue) {
                if (this._opacityModifyRGB !== opacityValue) {
                    this._opacityModifyRGB = opacityValue;
                    this._sgNode.setOpacityModifyRGB(opacityValue);
                    var sizeProvider = this._sizeProvider;
                    sizeProvider instanceof _ccsg.Node && sizeProvider !== this._sgNode && sizeProvider.setOpacityModifyRGB(opacityValue);
                }
            },
            isOpacityModifyRGB: function() {
                return this._opacityModifyRGB;
            },
            getSiblingIndex: function() {
                return this._parent ? this._parent._children.indexOf(this) : 0;
            },
            setSiblingIndex: function(index) {
                if (!this._parent) {
                    return;
                }
                var array = this._parent._children;
                index = index !== -1 ? index : array.length - 1;
                var oldIndex = array.indexOf(this);
                if (index !== oldIndex) {
                    array.splice(oldIndex, 1);
                    index < array.length ? array.splice(index, 0, this) : array.push(this);
                    var parent = this._parent;
                    var siblings = parent._children;
                    for (var i = 0, len = siblings.length; i < len; i++) {
                        var sibling = siblings[i]._sgNode;
                        sibling._arrivalOrder = i;
                    }
                    cc.renderer.childrenOrderDirty = true;
                    parent._sgNode._reorderChildDirty = true;
                    parent._reorderChildDirty = true;
                    parent._delaySort();
                }
            },
            isChildOf: function(parent) {
                var child = this;
                do {
                    if (child === parent) {
                        return true;
                    }
                    child = child._parent;
                } while (child);
                return false;
            },
            sortAllChildren: function() {
                if (this._reorderChildDirty) {
                    this._reorderChildDirty = false;
                    var _children = this._children;
                    if (_children.length > 1) {
                        var len = _children.length, i, j, child;
                        for (i = 1; i < len; i++) {
                            child = _children[i];
                            j = i - 1;
                            while (j >= 0) {
                                if (child._localZOrder < _children[j]._localZOrder) {
                                    _children[j + 1] = _children[j];
                                } else {
                                    if (!(child._localZOrder === _children[j]._localZOrder && child._sgNode._arrivalOrder < _children[j]._sgNode._arrivalOrder)) {
                                        break;
                                    }
                                    _children[j + 1] = _children[j];
                                }
                                j--;
                            }
                            _children[j + 1] = child;
                        }
                        this.emit(CHILD_REORDER);
                    }
                }
                cc.director.off(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
            },
            _delaySort: function() {
                cc.director.on(cc.Director.EVENT_AFTER_UPDATE, this.sortAllChildren, this);
            },
            _updateDummySgNode: function() {
                var self = this;
                var sgNode = self._sgNode;
                sgNode.setPosition(self._position);
                sgNode.setRotationX(self._rotationX);
                sgNode.setRotationY(self._rotationY);
                sgNode.setScale(self._scaleX, self._scaleY);
                sgNode.setSkewX(self._skewX);
                sgNode.setSkewY(self._skewY);
                sgNode.setIgnoreAnchorPointForPosition(self.__ignoreAnchor);
                var arrivalOrder = sgNode._arrivalOrder;
                sgNode.setLocalZOrder(self._localZOrder);
                sgNode._arrivalOrder = arrivalOrder;
                sgNode.setGlobalZOrder(self._globalZOrder);
                sgNode.setOpacity(self._opacity);
                sgNode.setOpacityModifyRGB(self._opacityModifyRGB);
                sgNode.setCascadeOpacityEnabled(self._cascadeOpacityEnabled);
                sgNode.setTag(self._tag);
            },
            _updateSgNode: function() {
                this._updateDummySgNode();
                var sgNode = this._sgNode;
                sgNode.setAnchorPoint(this._anchorPoint);
                sgNode.setVisible(this._active);
                sgNode.setColor(this._color);
                this._activeInHierarchy ? cc.director.getActionManager().resumeTarget(this) : cc.director.getActionManager().pauseTarget(this);
            },
            onRestore: false,
            _removeSgNode: SgHelper.removeSgNode
        });
        var SameNameGetSets = [ "name", "skewX", "skewY", "position", "rotation", "rotationX", "rotationY", "scale", "scaleX", "scaleY", "children", "childrenCount", "parent", "opacity", "color", "tag" ];
        var DiffNameGetSets = {
            x: [ "getPositionX", "setPositionX" ],
            y: [ "getPositionY", "setPositionY" ],
            zIndex: [ "getLocalZOrder", "setLocalZOrder" ],
            opacityModifyRGB: [ "isOpacityModifyRGB" ],
            cascadeOpacity: [ "isCascadeOpacityEnabled", "setCascadeOpacityEnabled" ]
        };
        Misc.propertyDefine(BaseNode, SameNameGetSets, DiffNameGetSets);
        cc._BaseNode = module.exports = BaseNode;
    }, {
        "../platform/CCObject": 70,
        "../platform/id-generater": 78,
        "./misc": 97,
        "./scene-graph-helper": 100
    } ],
    95: [ function(require, module, exports) {
        cc.find = module.exports = function(path, referenceNode) {
            if (null == path) {
                cc.error("Argument must be non-nil");
                return null;
            }
            if (referenceNode) {
                if (!referenceNode.isValid) {
                    cc.warn("reference node is destroyed");
                    return null;
                }
            } else {
                var scene = cc.director.getScene();
                if (!scene) {
                    cc.warn("Can not get current scene.");
                    return null;
                }
                if (!scene.isValid) {
                    cc.warn("Scene is destroyed");
                    return null;
                }
                referenceNode = scene;
            }
            var match = referenceNode;
            var startIndex = "/" !== path[0] ? 0 : 1;
            var nameList = path.split("/");
            for (var n = startIndex; n < nameList.length; n++) {
                var name = nameList[n];
                var children = match._children;
                match = null;
                for (var t = 0, len = children.length; t < len; ++t) {
                    var subChild = children[t];
                    if (subChild.name === name) {
                        match = subChild;
                        break;
                    }
                }
                if (!match) {
                    return null;
                }
            }
            return match;
        };
    }, {} ],
    96: [ function(require, module, exports) {
        require("./CCPath");
        require("./find");
        require("./mutable-forward-iterator");
    }, {
        "./CCPath": 93,
        "./find": 95,
        "./mutable-forward-iterator": 98
    } ],
    97: [ function(require, module, exports) {
        var misc = {};
        misc.propertyDefine = function(ctor, sameNameGetSets, diffNameGetSets) {
            function define(np, propName, getter, setter) {
                var pd = Object.getOwnPropertyDescriptor(np, propName);
                if (pd) {
                    pd.get && (np[getter] = pd.get);
                    pd.set && setter && (np[setter] = pd.set);
                } else {
                    var getterFunc = np[getter];
                    if (getterFunc) {
                        cc.js.getset(np, propName, getterFunc, np[setter]);
                    } else {
                        var clsName = cc.Class._isCCClass(ctor) && cc.js.getClassName(ctor) || ctor.name || "(anonymous class)";
                        cc.warn("no %s or %s on %s", propName, getter, clsName);
                    }
                }
            }
            var propName, np = ctor.prototype;
            for (var i = 0; i < sameNameGetSets.length; i++) {
                propName = sameNameGetSets[i];
                var suffix = propName[0].toUpperCase() + propName.slice(1);
                define(np, propName, "get" + suffix, "set" + suffix);
            }
            for (propName in diffNameGetSets) {
                var getset = diffNameGetSets[propName];
                define(np, propName, getset[0], getset[1]);
            }
        };
        misc.NextPOT = function(x) {
            x -= 1;
            x |= x >> 1;
            x |= x >> 2;
            x |= x >> 4;
            x |= x >> 8;
            x |= x >> 16;
            return x + 1;
        };
        misc.destructIgnoreId = function() {
            for (var key in this) {
                if (this.hasOwnProperty(key) && "_id" !== key) {
                    switch (typeof this[key]) {
                      case "string":
                        this[key] = "";
                        break;

                      case "object":
                      case "function":
                        this[key] = null;
                    }
                }
            }
        };
        module.exports = misc;
    }, {} ],
    98: [ function(require, module, exports) {
        var js = require("../platform/js");
        function MutableForwardIterator(array) {
            this.i = 0;
            this.array = array;
        }
        var proto = MutableForwardIterator.prototype;
        proto.removeAt = function(i) {
            this.array.splice(i, 1);
            i <= this.i && --this.i;
        };
        proto.push = function(item) {
            this.array.push(item);
        };
        js.array.MutableForwardIterator = module.exports = MutableForwardIterator;
    }, {
        "../platform/js": 81
    } ],
    99: [ function(require, module, exports) {
        cc._PrefabInfo = cc.Class({
            name: "cc.PrefabInfo",
            properties: {
                root: null,
                asset: null,
                fileId: "",
                sync: false,
                _synced: {
                    "default": false,
                    serializable: false
                }
            }
        });
        module.exports = {
            syncWithPrefab: function(node) {
                var _prefab = node._prefab;
                _prefab._synced = true;
                if (!_prefab.asset) {
                    cc.error('Failed to load prefab asset for node "%s"', node.name);
                    node._prefab = null;
                    return;
                }
                var _objFlags = node._objFlags;
                var _parent = node._parent;
                var _id = node._id;
                var _name = node._name;
                var _active = node._active;
                var _position = node._position;
                var _rotationX = node._rotationX;
                var _rotationY = node._rotationY;
                var _localZOrder = node._localZOrder;
                var _globalZOrder = node._globalZOrder;
                var prefabRoot = _prefab.asset.data;
                prefabRoot._prefab._synced = true;
                prefabRoot._iN$t = node;
                cc.game._isCloning = true;
                cc.instantiate._clone(prefabRoot, prefabRoot);
                cc.game._isCloning = false;
                node._objFlags = _objFlags;
                node._parent = _parent;
                node._id = _id;
                node._prefab = _prefab;
                node._name = _name;
                node._active = _active;
                node._position = _position;
                node._rotationX = _rotationX;
                node._rotationY = _rotationY;
                node._localZOrder = _localZOrder;
                node._globalZOrder = _globalZOrder;
            }
        };
    }, {} ],
    100: [ function(require, module, exports) {
        var SceneGraphUtils = {
            removeSgNode: function() {
                var node = this._sgNode;
                if (node) {
                    var parent = node._parent;
                    parent && parent.removeChild(node);
                    node.release();
                    this._sgNode._entity && (this._sgNode._entity = null);
                }
            }
        };
        SceneGraphUtils._getChildrenOffset = function(entityParent) {
            if (entityParent) {
                var sgParent = entityParent._sgNode;
                var firstChildEntity = entityParent._children[0];
                if (firstChildEntity) {
                    var firstChildSg = firstChildEntity._sgNode;
                    var offset = sgParent._children.indexOf(firstChildSg);
                    if (offset !== -1) {
                        return offset;
                    }
                    cc.error("%s's scene graph node not contains in the parent's children", firstChildEntity.name);
                    return -1;
                }
                return sgParent._children.length;
            }
            return 0;
        };
        SceneGraphUtils.checkMatchCurrentScene = function() {
            var scene = cc.director.getScene();
            var sgScene = cc.director.getRunningScene();
            function checkMatch(ent, sgNode) {
                if (ent._sgNode !== sgNode) {
                    throw new Error("scene graph node not equal: " + ent.name);
                }
                var childCount = ent._children.length;
                var childrenOffset = SceneGraphUtils._getChildrenOffset(ent);
                if (sgNode._children.length !== childCount + childrenOffset) {
                    throw new Error("Mismatched child scene graphs: " + ent.name);
                }
                for (var i = 0; i < childCount; i++) {
                    checkMatch(ent._children[i], sgNode._children[childrenOffset + i]);
                }
            }
            checkMatch(scene, sgScene);
        };
        cc._Test.SceneGraphUtils = SceneGraphUtils;
        module.exports = SceneGraphUtils;
    }, {} ],
    101: [ function(require, module, exports) {
        cc.AffineTransform = function(a, b, c, d, tx, ty) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
        };
        cc.affineTransformMake = function(a, b, c, d, tx, ty) {
            return {
                a: a,
                b: b,
                c: c,
                d: d,
                tx: tx,
                ty: ty
            };
        };
        cc.affineTransformClone = function(t) {
            return {
                a: t.a,
                b: t.b,
                c: t.c,
                d: t.d,
                tx: t.tx,
                ty: t.ty
            };
        };
        cc.pointApplyAffineTransform = function(point, transOrY, t) {
            var x, y;
            if (void 0 === t) {
                t = transOrY;
                x = point.x;
                y = point.y;
            } else {
                x = point;
                y = transOrY;
            }
            return {
                x: t.a * x + t.c * y + t.tx,
                y: t.b * x + t.d * y + t.ty
            };
        };
        cc._pointApplyAffineTransform = function(x, y, t) {
            return cc.pointApplyAffineTransform(x, y, t);
        };
        cc.sizeApplyAffineTransform = function(size, t) {
            return {
                width: t.a * size.width + t.c * size.height,
                height: t.b * size.width + t.d * size.height
            };
        };
        cc.affineTransformMakeIdentity = function() {
            return {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                tx: 0,
                ty: 0
            };
        };
        cc.affineTransformIdentity = function() {
            return {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                tx: 0,
                ty: 0
            };
        };
        cc.rectApplyAffineTransform = function(rect, t) {
            var ol = rect.x;
            var ob = rect.y;
            var or = ol + rect.width;
            var ot = ob + rect.height;
            var lbx = t.a * ol + t.c * ob + t.tx;
            var lby = t.b * ol + t.d * ob + t.ty;
            var rbx = t.a * or + t.c * ob + t.tx;
            var rby = t.b * or + t.d * ob + t.ty;
            var ltx = t.a * ol + t.c * ot + t.tx;
            var lty = t.b * ol + t.d * ot + t.ty;
            var rtx = t.a * or + t.c * ot + t.tx;
            var rty = t.b * or + t.d * ot + t.ty;
            var minX = Math.min(lbx, rbx, ltx, rtx);
            var maxX = Math.max(lbx, rbx, ltx, rtx);
            var minY = Math.min(lby, rby, lty, rty);
            var maxY = Math.max(lby, rby, lty, rty);
            return cc.rect(minX, minY, maxX - minX, maxY - minY);
        };
        cc._rectApplyAffineTransformIn = function(rect, t) {
            var ol = rect.x;
            var ob = rect.y;
            var or = ol + rect.width;
            var ot = ob + rect.height;
            var lbx = t.a * ol + t.c * ob + t.tx;
            var lby = t.b * ol + t.d * ob + t.ty;
            var rbx = t.a * or + t.c * ob + t.tx;
            var rby = t.b * or + t.d * ob + t.ty;
            var ltx = t.a * ol + t.c * ot + t.tx;
            var lty = t.b * ol + t.d * ot + t.ty;
            var rtx = t.a * or + t.c * ot + t.tx;
            var rty = t.b * or + t.d * ot + t.ty;
            var minX = Math.min(lbx, rbx, ltx, rtx);
            var maxX = Math.max(lbx, rbx, ltx, rtx);
            var minY = Math.min(lby, rby, lty, rty);
            var maxY = Math.max(lby, rby, lty, rty);
            rect.x = minX;
            rect.y = minY;
            rect.width = maxX - minX;
            rect.height = maxY - minY;
            return rect;
        };
        cc.obbApplyAffineTransform = function(rect, anAffineTransform, out_bl, out_tl, out_tr, out_br) {
            var x = rect.x;
            var y = rect.y;
            var width = rect.width;
            var height = rect.height;
            var tx = anAffineTransform.a * x + anAffineTransform.c * y + anAffineTransform.tx;
            var ty = anAffineTransform.b * x + anAffineTransform.d * y + anAffineTransform.ty;
            var xa = anAffineTransform.a * width;
            var xb = anAffineTransform.b * width;
            var yc = anAffineTransform.c * height;
            var yd = anAffineTransform.d * height;
            out_tl.x = tx;
            out_tl.y = ty;
            out_tr.x = xa + tx;
            out_tr.y = xb + ty;
            out_bl.x = yc + tx;
            out_bl.y = yd + ty;
            out_br.x = xa + yc + tx;
            out_br.y = xb + yd + ty;
        };
        cc.affineTransformTranslate = function(t, tx, ty) {
            return {
                a: t.a,
                b: t.b,
                c: t.c,
                d: t.d,
                tx: t.tx + t.a * tx + t.c * ty,
                ty: t.ty + t.b * tx + t.d * ty
            };
        };
        cc.affineTransformScale = function(t, sx, sy) {
            return {
                a: t.a * sx,
                b: t.b * sx,
                c: t.c * sy,
                d: t.d * sy,
                tx: t.tx,
                ty: t.ty
            };
        };
        cc.affineTransformRotate = function(aTransform, anAngle) {
            var fSin = Math.sin(anAngle);
            var fCos = Math.cos(anAngle);
            return {
                a: aTransform.a * fCos + aTransform.c * fSin,
                b: aTransform.b * fCos + aTransform.d * fSin,
                c: aTransform.c * fCos - aTransform.a * fSin,
                d: aTransform.d * fCos - aTransform.b * fSin,
                tx: aTransform.tx,
                ty: aTransform.ty
            };
        };
        cc.affineTransformConcat = function(t1, t2) {
            return {
                a: t1.a * t2.a + t1.b * t2.c,
                b: t1.a * t2.b + t1.b * t2.d,
                c: t1.c * t2.a + t1.d * t2.c,
                d: t1.c * t2.b + t1.d * t2.d,
                tx: t1.tx * t2.a + t1.ty * t2.c + t2.tx,
                ty: t1.tx * t2.b + t1.ty * t2.d + t2.ty
            };
        };
        cc.affineTransformConcatIn = function(t1, t2) {
            var a = t1.a, b = t1.b, c = t1.c, d = t1.d, tx = t1.tx, ty = t1.ty;
            t1.a = a * t2.a + b * t2.c;
            t1.b = a * t2.b + b * t2.d;
            t1.c = c * t2.a + d * t2.c;
            t1.d = c * t2.b + d * t2.d;
            t1.tx = tx * t2.a + ty * t2.c + t2.tx;
            t1.ty = tx * t2.b + ty * t2.d + t2.ty;
            return t1;
        };
        cc.affineTransformEqualToTransform = function(t1, t2) {
            return t1.a === t2.a && t1.b === t2.b && t1.c === t2.c && t1.d === t2.d && t1.tx === t2.tx && t1.ty === t2.ty;
        };
        cc.affineTransformInvert = function(t) {
            var determinant = 1 / (t.a * t.d - t.b * t.c);
            return {
                a: determinant * t.d,
                b: -determinant * t.b,
                c: -determinant * t.c,
                d: determinant * t.a,
                tx: determinant * (t.c * t.ty - t.d * t.tx),
                ty: determinant * (t.b * t.tx - t.a * t.ty)
            };
        };
    }, {} ],
    102: [ function(require, module, exports) {
        var ValueType = require("./CCValueType");
        var JS = require("../platform/js");
        var Color = function() {
            function Color(r, g, b, a) {
                if ("object" == typeof r) {
                    g = r.g;
                    b = r.b;
                    a = r.a;
                    r = r.r;
                }
                this.r = r || 0;
                this.g = g || 0;
                this.b = b || 0;
                this.a = "number" == typeof a ? a : 255;
            }
            JS.extend(Color, ValueType);
            require("../platform/CCClass").fastDefine("cc.Color", Color, {
                r: 0,
                g: 0,
                b: 0,
                a: 255
            });
            var DefaultColors = {
                WHITE: [ 255, 255, 255, 255 ],
                BLACK: [ 0, 0, 0, 255 ],
                TRANSPARENT: [ 0, 0, 0, 0 ],
                GRAY: [ 127.5, 127.5, 127.5 ],
                RED: [ 255, 0, 0 ],
                GREEN: [ 0, 255, 0 ],
                BLUE: [ 0, 0, 255 ],
                YELLOW: [ 255, 235, 4 ],
                ORANGE: [ 255, 127, 0 ],
                CYAN: [ 0, 255, 255 ],
                MAGENTA: [ 255, 0, 255 ]
            };
            for (var colorName in DefaultColors) {
                var colorGetter = function(r, g, b, a) {
                    return function() {
                        return new Color(r, g, b, a);
                    };
                }.apply(null, DefaultColors[colorName]);
                Object.defineProperty(Color, colorName, {
                    get: colorGetter
                });
            }
            Color.prototype.clone = function() {
                return new Color(this.r, this.g, this.b, this.a);
            };
            Color.prototype.equals = function(other) {
                return other && this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
            };
            Color.prototype.lerp = function(to, ratio, out) {
                out = out || new Color();
                var r = this.r;
                var g = this.g;
                var b = this.b;
                var a = this.a;
                out.r = r + (to.r - r) * ratio;
                out.g = g + (to.g - g) * ratio;
                out.b = b + (to.b - b) * ratio;
                out.a = a + (to.a - a) * ratio;
                return out;
            };
            Color.prototype.toString = function() {
                return "rgba(" + this.r.toFixed() + ", " + this.g.toFixed() + ", " + this.b.toFixed() + ", " + this.a.toFixed() + ")";
            };
            Color.prototype.setR = function(red) {
                this.r = red;
                return this;
            };
            Color.prototype.setG = function(green) {
                this.g = green;
                return this;
            };
            Color.prototype.setB = function(blue) {
                this.b = blue;
                return this;
            };
            Color.prototype.setA = function(alpha) {
                this.a = alpha;
                return this;
            };
            Color.prototype.toCSS = function(opt) {
                return "rgba" === opt ? "rgba(" + (0 | this.r) + "," + (0 | this.g) + "," + (0 | this.b) + "," + (this.a / 255).toFixed(2) + ")" : "rgb" === opt ? "rgb(" + (0 | this.r) + "," + (0 | this.g) + "," + (0 | this.b) + ")" : "#" + this.toHEX(opt);
            };
            Color.prototype.clamp = function() {
                this.r = cc.clampf(this.r, 0, 255);
                this.g = cc.clampf(this.g, 0, 255);
                this.b = cc.clampf(this.b, 0, 255);
                this.a = cc.clampf(this.a, 0, 255);
            };
            Color.prototype.fromHEX = function(hexString) {
                var hex = parseInt(hexString.indexOf("#") > -1 ? hexString.substring(1) : hexString, 16);
                this.r = hex >> 16;
                this.g = (65280 & hex) >> 8;
                this.b = 255 & hex;
                return this;
            };
            Color.prototype.toHEX = function(fmt) {
                var hex = [ (0 | this.r).toString(16), (0 | this.g).toString(16), (0 | this.b).toString(16) ];
                var i = -1;
                if ("#rgb" === fmt) {
                    for (i = 0; i < hex.length; ++i) {
                        hex[i].length > 1 && (hex[i] = hex[i][0]);
                    }
                } else {
                    if ("#rrggbb" === fmt) {
                        for (i = 0; i < hex.length; ++i) {
                            1 === hex[i].length && (hex[i] = "0" + hex[i]);
                        }
                    }
                }
                return hex.join("");
            };
            Color.prototype.toRGBValue = function() {
                return (cc.clampf(this.r, 0, 255) << 16) + (cc.clampf(this.g, 0, 255) << 8) + cc.clampf(this.b, 0, 255);
            };
            Color.prototype.fromHSV = function(h, s, v) {
                var rgb = Color.hsv2rgb(h, s, v);
                this.r = rgb.r;
                this.g = rgb.g;
                this.b = rgb.b;
                return this;
            };
            Color.prototype.toHSV = function() {
                return Color.rgb2hsv(this.r, this.g, this.b);
            };
            return Color;
        }();
        Color.rgb2hsv = function(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            var hsv = {
                h: 0,
                s: 0,
                v: 0
            };
            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var delta = 0;
            hsv.v = max;
            hsv.s = max ? (max - min) / max : 0;
            if (hsv.s) {
                delta = max - min;
                r === max ? hsv.h = (g - b) / delta : g === max ? hsv.h = 2 + (b - r) / delta : hsv.h = 4 + (r - g) / delta;
                hsv.h /= 6;
                hsv.h < 0 && (hsv.h += 1);
            } else {
                hsv.h = 0;
            }
            return hsv;
        };
        Color.hsv2rgb = function(h, s, v) {
            var rgb = {
                r: 0,
                g: 0,
                b: 0
            };
            if (0 === s) {
                rgb.r = rgb.g = rgb.b = v;
            } else {
                if (0 === v) {
                    rgb.r = rgb.g = rgb.b = 0;
                } else {
                    1 === h && (h = 0);
                    h *= 6;
                    s = s;
                    v = v;
                    var i = Math.floor(h);
                    var f = h - i;
                    var p = v * (1 - s);
                    var q = v * (1 - s * f);
                    var t = v * (1 - s * (1 - f));
                    switch (i) {
                      case 0:
                        rgb.r = v;
                        rgb.g = t;
                        rgb.b = p;
                        break;

                      case 1:
                        rgb.r = q;
                        rgb.g = v;
                        rgb.b = p;
                        break;

                      case 2:
                        rgb.r = p;
                        rgb.g = v;
                        rgb.b = t;
                        break;

                      case 3:
                        rgb.r = p;
                        rgb.g = q;
                        rgb.b = v;
                        break;

                      case 4:
                        rgb.r = t;
                        rgb.g = p;
                        rgb.b = v;
                        break;

                      case 5:
                        rgb.r = v;
                        rgb.g = p;
                        rgb.b = q;
                    }
                }
            }
            rgb.r *= 255;
            rgb.g *= 255;
            rgb.b *= 255;
            return rgb;
        };
        cc.Color = Color;
        cc.color = function color(r, g, b, a) {
            if ("string" == typeof r) {
                var result = new cc.Color();
                return result.fromHEX(r);
            }
            if ("object" == typeof r) {
                return new cc.Color(r.r, r.g, r.b, r.a);
            }
            return new cc.Color(r, g, b, a);
        };
        cc.colorEqual = function(color1, color2) {
            return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
        };
        cc.hexToColor = function(hex) {
            hex = hex.replace(/^#?/, "0x");
            var c = parseInt(hex);
            var r = c >> 16;
            var g = (65280 & c) >> 8;
            var b = 255 & c;
            return cc.color(r, g, b);
        };
        cc.colorToHex = function(color) {
            var hR = color.r.toString(16), hG = color.g.toString(16), hB = color.b.toString(16);
            return "#" + (color.r < 16 ? "0" + hR : hR) + (color.g < 16 ? "0" + hG : hG) + (color.b < 16 ? "0" + hB : hB);
        };
        module.exports = cc.Color;
    }, {
        "../platform/CCClass": 68,
        "../platform/js": 81,
        "./CCValueType": 108
    } ],
    103: [ function(require, module, exports) {
        cc.Enum = function(obj) {
            var enumType = {};
            Object.defineProperty(enumType, "__enums__", {
                value: void 0,
                writable: true
            });
            var lastIndex = -1;
            for (var key in obj) {
                var val = obj[key];
                val === -1 ? val = ++lastIndex : lastIndex = val;
                enumType[key] = val;
                var reverseKey = "" + val;
                if (key !== reverseKey) {
                    if (enumType.hasOwnProperty(reverseKey) && false) {
                        cc.error("%s already defined in Enum.", reverseKey);
                        continue;
                    }
                    Object.defineProperty(enumType, reverseKey, {
                        value: key
                    });
                }
            }
            return enumType;
        };
        cc.Enum.isEnum = function(enumType) {
            return enumType && enumType.hasOwnProperty("__enums__");
        };
        cc.Enum.getList = function(enumDef) {
            if (void 0 !== enumDef.__enums__) {
                return enumDef.__enums__;
            }
            var enums = [];
            for (var entry in enumDef) {
                if (enumDef.hasOwnProperty(entry)) {
                    var value = enumDef[entry];
                    var isInteger = "number" == typeof value && (0 | value) === value;
                    isInteger && enums.push({
                        name: entry,
                        value: value
                    });
                }
            }
            enums.sort(function(a, b) {
                return a.value - b.value;
            });
            enumDef.__enums__ = enums;
            return enums;
        };
        var _TestEnum = cc.Enum({
            ZERO: -1,
            ONE: -1,
            TWO: -1,
            THREE: -1
        });
        0 === _TestEnum.ZERO && 1 === _TestEnum.ONE && 2 === _TestEnum.TWO && 3 === _TestEnum.THREE || cc.error('Sorry, "cc.Enum" not available on this platform, please report this error here: https://github.com/fireball-x/fireball/issues/new');
        module.exports = cc.Enum;
    }, {} ],
    104: [ function(require, module, exports) {
        var POINT_EPSILON = parseFloat("1.192092896e-07F");
        cc.pNeg = function(point) {
            return cc.p(-point.x, -point.y);
        };
        cc.pAdd = function(v1, v2) {
            return cc.p(v1.x + v2.x, v1.y + v2.y);
        };
        cc.pSub = function(v1, v2) {
            return cc.p(v1.x - v2.x, v1.y - v2.y);
        };
        cc.pMult = function(point, floatVar) {
            return cc.p(point.x * floatVar, point.y * floatVar);
        };
        cc.pMidpoint = function(v1, v2) {
            return cc.pMult(cc.pAdd(v1, v2), .5);
        };
        cc.pDot = function(v1, v2) {
            return v1.x * v2.x + v1.y * v2.y;
        };
        cc.pCross = function(v1, v2) {
            return v1.x * v2.y - v1.y * v2.x;
        };
        cc.pPerp = function(point) {
            return cc.p(-point.y, point.x);
        };
        cc.pRPerp = function(point) {
            return cc.p(point.y, -point.x);
        };
        cc.pProject = function(v1, v2) {
            return cc.pMult(v2, cc.pDot(v1, v2) / cc.pDot(v2, v2));
        };
        cc.pLengthSQ = function(v) {
            return cc.pDot(v, v);
        };
        cc.pDistanceSQ = function(point1, point2) {
            return cc.pLengthSQ(cc.pSub(point1, point2));
        };
        cc.pLength = function(v) {
            return Math.sqrt(cc.pLengthSQ(v));
        };
        cc.pDistance = function(v1, v2) {
            return cc.pLength(cc.pSub(v1, v2));
        };
        cc.pNormalize = function(v) {
            var n = cc.pLength(v);
            return 0 === n ? cc.p(v) : cc.pMult(v, 1 / n);
        };
        cc.pForAngle = function(a) {
            return cc.p(Math.cos(a), Math.sin(a));
        };
        cc.pToAngle = function(v) {
            return Math.atan2(v.y, v.x);
        };
        cc.clampf = function(value, min_inclusive, max_inclusive) {
            if (min_inclusive > max_inclusive) {
                var temp = min_inclusive;
                min_inclusive = max_inclusive;
                max_inclusive = temp;
            }
            return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
        };
        cc.clamp01 = function(value) {
            return value < 0 ? 0 : value < 1 ? value : 1;
        };
        cc.pClamp = function(p, min_inclusive, max_inclusive) {
            return cc.p(cc.clampf(p.x, min_inclusive.x, max_inclusive.x), cc.clampf(p.y, min_inclusive.y, max_inclusive.y));
        };
        cc.pFromSize = function(s) {
            return cc.p(s.width, s.height);
        };
        cc.pCompOp = function(p, opFunc) {
            return cc.p(opFunc(p.x), opFunc(p.y));
        };
        cc.pLerp = function(a, b, alpha) {
            return cc.pAdd(cc.pMult(a, 1 - alpha), cc.pMult(b, alpha));
        };
        cc.pFuzzyEqual = function(a, b, variance) {
            if (a.x - variance <= b.x && b.x <= a.x + variance && a.y - variance <= b.y && b.y <= a.y + variance) {
                return true;
            }
            return false;
        };
        cc.pCompMult = function(a, b) {
            return cc.p(a.x * b.x, a.y * b.y);
        };
        cc.pAngleSigned = function(a, b) {
            var a2 = cc.pNormalize(a);
            var b2 = cc.pNormalize(b);
            var angle = Math.atan2(a2.x * b2.y - a2.y * b2.x, cc.pDot(a2, b2));
            if (Math.abs(angle) < POINT_EPSILON) {
                return 0;
            }
            return angle;
        };
        cc.pAngle = function(a, b) {
            var angle = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
            if (Math.abs(angle) < POINT_EPSILON) {
                return 0;
            }
            return angle;
        };
        cc.pRotateByAngle = function(v, pivot, angle) {
            var r = cc.pSub(v, pivot);
            var cosa = Math.cos(angle), sina = Math.sin(angle);
            var t = r.x;
            r.x = t * cosa - r.y * sina + pivot.x;
            r.y = t * sina + r.y * cosa + pivot.y;
            return r;
        };
        cc.pLineIntersect = function(A, B, C, D, retP) {
            if (A.x === B.x && A.y === B.y || C.x === D.x && C.y === D.y) {
                return false;
            }
            var BAx = B.x - A.x;
            var BAy = B.y - A.y;
            var DCx = D.x - C.x;
            var DCy = D.y - C.y;
            var ACx = A.x - C.x;
            var ACy = A.y - C.y;
            var denom = DCy * BAx - DCx * BAy;
            retP.x = DCx * ACy - DCy * ACx;
            retP.y = BAx * ACy - BAy * ACx;
            if (0 === denom) {
                if (0 === retP.x || 0 === retP.y) {
                    return true;
                }
                return false;
            }
            retP.x = retP.x / denom;
            retP.y = retP.y / denom;
            return true;
        };
        cc.pSegmentIntersect = function(A, B, C, D) {
            var retP = cc.p(0, 0);
            if (cc.pLineIntersect(A, B, C, D, retP) && retP.x >= 0 && retP.x <= 1 && retP.y >= 0 && retP.y <= 1) {
                return true;
            }
            return false;
        };
        cc.pIntersectPoint = function(A, B, C, D) {
            var retP = cc.p(0, 0);
            if (cc.pLineIntersect(A, B, C, D, retP)) {
                var P = cc.p(0, 0);
                P.x = A.x + retP.x * (B.x - A.x);
                P.y = A.y + retP.x * (B.y - A.y);
                return P;
            }
            return cc.p(0, 0);
        };
        cc.pSameAs = function(A, B) {
            if (null != A && null != B) {
                return A.x === B.x && A.y === B.y;
            }
            return false;
        };
        cc.pZeroIn = function(v) {
            v.x = 0;
            v.y = 0;
        };
        cc.pIn = function(v1, v2) {
            v1.x = v2.x;
            v1.y = v2.y;
        };
        cc.pMultIn = function(point, floatVar) {
            point.x *= floatVar;
            point.y *= floatVar;
        };
        cc.pSubIn = function(v1, v2) {
            v1.x -= v2.x;
            v1.y -= v2.y;
        };
        cc.pAddIn = function(v1, v2) {
            v1.x += v2.x;
            v1.y += v2.y;
        };
        cc.pNormalizeIn = function(v) {
            cc.pMultIn(v, 1 / Math.sqrt(v.x * v.x + v.y * v.y));
        };
    }, {} ],
    105: [ function(require, module, exports) {
        var ValueType = require("./CCValueType");
        var JS = require("../platform/js");
        function Rect(x, y, w, h) {
            if (x && "object" == typeof x) {
                y = x.y;
                w = x.width;
                h = x.height;
                x = x.x;
            }
            this.x = x || 0;
            this.y = y || 0;
            this.width = w || 0;
            this.height = h || 0;
        }
        JS.extend(Rect, ValueType);
        require("../platform/CCClass").fastDefine("cc.Rect", Rect, {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        });
        Rect.fromMinMax = function(v1, v2) {
            var min_x = Math.min(v1.x, v2.x);
            var min_y = Math.min(v1.y, v2.y);
            var max_x = Math.max(v1.x, v2.x);
            var max_y = Math.max(v1.y, v2.y);
            return new Rect(min_x, min_y, max_x - min_x, max_y - min_y);
        };
        Rect.contain = function _Contain(a, b) {
            if (a.x < b.x && a.x + a.width > b.x + b.width && a.y < b.y && a.y + a.height > b.y + b.height) {
                return 1;
            }
            if (b.x < a.x && b.x + b.width > a.x + a.width && b.y < a.y && b.y + b.height > a.y + a.height) {
                return -1;
            }
            return 0;
        };
        var proto = Rect.prototype;
        proto.clone = function() {
            return new Rect(this.x, this.y, this.width, this.height);
        };
        proto.equals = function(other) {
            return other && this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
        };
        proto.lerp = function(to, ratio, out) {
            out = out || new Rect();
            var x = this.x;
            var y = this.y;
            var width = this.width;
            var height = this.height;
            out.x = x + (to.x - x) * ratio;
            out.y = y + (to.y - y) * ratio;
            out.width = width + (to.width - width) * ratio;
            out.height = height + (to.height - height) * ratio;
            return out;
        };
        proto.toString = function() {
            return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
        };
        Object.defineProperty(proto, "xMin", {
            get: function() {
                return this.x;
            },
            set: function(value) {
                this.width += this.x - value;
                this.x = value;
            }
        });
        Object.defineProperty(proto, "yMin", {
            get: function() {
                return this.y;
            },
            set: function(value) {
                this.height += this.y - value;
                this.y = value;
            }
        });
        Object.defineProperty(proto, "xMax", {
            get: function() {
                return this.x + this.width;
            },
            set: function(value) {
                this.width = value - this.x;
            }
        });
        Object.defineProperty(proto, "yMax", {
            get: function() {
                return this.y + this.height;
            },
            set: function(value) {
                this.height = value - this.y;
            }
        });
        Object.defineProperty(proto, "center", {
            get: function() {
                return new cc.Vec2(this.x + .5 * this.width, this.y + .5 * this.height);
            },
            set: function(value) {
                this.x = value.x - .5 * this.width;
                this.y = value.y - .5 * this.height;
            }
        });
        Object.defineProperty(proto, "size", {
            get: function() {
                return new cc.Size(this.width, this.height);
            },
            set: function(value) {
                this.width = value.width;
                this.height = value.height;
            }
        });
        proto.intersects = function(rect) {
            return cc.rectIntersectsRect(this, rect);
        };
        proto.contains = function(point) {
            return this.x < point.x && this.x + this.width > point.x && this.y < point.y && this.y + this.height > point.y;
        };
        proto.containsRect = function(rect) {
            return this.x < rect.x && this.x + this.width > rect.x + rect.width && this.y < rect.y && this.y + this.height > rect.y + rect.height;
        };
        cc.Rect = Rect;
        cc.rect = function rect(x, y, w, h) {
            return new Rect(x, y, w, h);
        };
        cc.rectEqualToRect = function(rect1, rect2) {
            return rect1 && rect2 && rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
        };
        cc._rectEqualToZero = function(rect) {
            return rect && 0 === rect.x && 0 === rect.y && 0 === rect.width && 0 === rect.height;
        };
        cc.rectContainsRect = function(rect1, rect2) {
            if (!rect1 || !rect2) {
                return false;
            }
            return !(rect1.x >= rect2.x || rect1.y >= rect2.y || rect1.x + rect1.width <= rect2.x + rect2.width || rect1.y + rect1.height <= rect2.y + rect2.height);
        };
        cc.rectGetMaxX = function(rect) {
            return rect.x + rect.width;
        };
        cc.rectGetMidX = function(rect) {
            return rect.x + rect.width / 2;
        };
        cc.rectGetMinX = function(rect) {
            return rect.x;
        };
        cc.rectGetMaxY = function(rect) {
            return rect.y + rect.height;
        };
        cc.rectGetMidY = function(rect) {
            return rect.y + rect.height / 2;
        };
        cc.rectGetMinY = function(rect) {
            return rect.y;
        };
        cc.rectContainsPoint = function(rect, point) {
            return point.x >= cc.rectGetMinX(rect) && point.x <= cc.rectGetMaxX(rect) && point.y >= cc.rectGetMinY(rect) && point.y <= cc.rectGetMaxY(rect);
        };
        cc.rectIntersectsRect = function(ra, rb) {
            var maxax = ra.x + ra.width, maxay = ra.y + ra.height, maxbx = rb.x + rb.width, maxby = rb.y + rb.height;
            return !(maxax < rb.x || maxbx < ra.x || maxay < rb.y || maxby < ra.y);
        };
        cc.rectOverlapsRect = function(rectA, rectB) {
            return !(rectA.x + rectA.width < rectB.x || rectB.x + rectB.width < rectA.x || rectA.y + rectA.height < rectB.y || rectB.y + rectB.height < rectA.y);
        };
        cc.rectUnion = function(rectA, rectB) {
            var rect = cc.rect(0, 0, 0, 0);
            rect.x = Math.min(rectA.x, rectB.x);
            rect.y = Math.min(rectA.y, rectB.y);
            rect.width = Math.max(rectA.x + rectA.width, rectB.x + rectB.width) - rect.x;
            rect.height = Math.max(rectA.y + rectA.height, rectB.y + rectB.height) - rect.y;
            return rect;
        };
        cc.rectIntersection = function(rectA, rectB) {
            var intersection = cc.rect(Math.max(cc.rectGetMinX(rectA), cc.rectGetMinX(rectB)), Math.max(cc.rectGetMinY(rectA), cc.rectGetMinY(rectB)), 0, 0);
            intersection.width = Math.min(cc.rectGetMaxX(rectA), cc.rectGetMaxX(rectB)) - cc.rectGetMinX(intersection);
            intersection.height = Math.min(cc.rectGetMaxY(rectA), cc.rectGetMaxY(rectB)) - cc.rectGetMinY(intersection);
            return intersection;
        };
        module.exports = cc.Rect;
    }, {
        "../platform/CCClass": 68,
        "../platform/js": 81,
        "./CCValueType": 108
    } ],
    106: [ function(require, module, exports) {
        var ValueType = require("./CCValueType");
        var JS = require("../platform/js");
        function Size(width, height) {
            if (width && "object" == typeof width) {
                height = width.height;
                width = width.width;
            }
            this.width = width || 0;
            this.height = height || 0;
        }
        JS.extend(Size, ValueType);
        require("../platform/CCClass").fastDefine("cc.Size", Size, {
            width: 0,
            height: 0
        });
        JS.get(Size, "ZERO", function() {
            return new Size(0, 0);
        });
        var proto = Size.prototype;
        proto.clone = function() {
            return new Size(this.width, this.height);
        };
        proto.equals = function(other) {
            return other && this.width === other.width && this.height === other.height;
        };
        proto.lerp = function(to, ratio, out) {
            out = out || new Size();
            var width = this.width;
            var height = this.height;
            out.width = width + (to.width - width) * ratio;
            out.height = height + (to.height - height) * ratio;
            return out;
        };
        proto.toString = function() {
            return "(" + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
        };
        cc.size = function(w, h) {
            return new Size(w, h);
        };
        cc.sizeEqualToSize = function(size1, size2) {
            return size1 && size2 && size1.width === size2.width && size1.height === size2.height;
        };
        cc.Size = module.exports = Size;
    }, {
        "../platform/CCClass": 68,
        "../platform/js": 81,
        "./CCValueType": 108
    } ],
    107: [ function(require, module, exports) {
        cc.Acceleration = function(x, y, z, timestamp) {
            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
            this.timestamp = timestamp || 0;
        };
        cc.BlendFunc = function(src1, dst1) {
            this.src = src1;
            this.dst = dst1;
        };
        var BlendFactor = cc.Enum({
            ONE: 1,
            ZERO: 0,
            SRC_ALPHA: 770,
            SRC_COLOR: 768,
            DST_ALPHA: 772,
            DST_COLOR: 774,
            ONE_MINUS_SRC_ALPHA: 771,
            ONE_MINUS_SRC_COLOR: 769,
            ONE_MINUS_DST_ALPHA: 773,
            ONE_MINUS_DST_COLOR: 775
        });
        cc.BlendFunc._disable = function() {
            return new cc.BlendFunc(BlendFactor.ONE, BlendFactor.ZERO);
        };
        cc.BlendFunc._alphaPremultiplied = function() {
            return new cc.BlendFunc(BlendFactor.ONE, BlendFactor.ONE_MINUS_SRC_ALPHA);
        };
        cc.BlendFunc._alphaNonPremultiplied = function() {
            return new cc.BlendFunc(BlendFactor.SRC_ALPHA, BlendFactor.ONE_MINUS_SRC_ALPHA);
        };
        cc.BlendFunc._additive = function() {
            return new cc.BlendFunc(BlendFactor.SRC_ALPHA, BlendFactor.ONE);
        };
        cc.BlendFunc.BlendFactor = BlendFactor;
        cc.js.get(cc.BlendFunc, "DISABLE", cc.BlendFunc._disable);
        cc.js.get(cc.BlendFunc, "ALPHA_PREMULTIPLIED", cc.BlendFunc._alphaPremultiplied);
        cc.js.get(cc.BlendFunc, "ALPHA_NON_PREMULTIPLIED", cc.BlendFunc._alphaNonPremultiplied);
        cc.js.get(cc.BlendFunc, "ADDITIVE", cc.BlendFunc._additive);
        cc.blendFuncDisable = cc.BlendFunc._disable;
        cc.FontDefinition = function(properties) {
            var _t = this;
            _t.fontName = "Arial";
            _t.fontSize = 12;
            _t.textAlign = cc.TextAlignment.CENTER;
            _t.verticalAlign = cc.VerticalTextAlignment.TOP;
            _t.fillStyle = cc.color(255, 255, 255, 255);
            _t.boundingWidth = 0;
            _t.boundingHeight = 0;
            _t.strokeEnabled = false;
            _t.strokeStyle = cc.color(255, 255, 255, 255);
            _t.lineWidth = 1;
            _t.lineHeight = "normal";
            _t.fontStyle = "normal";
            _t.fontWeight = "normal";
            _t.shadowEnabled = false;
            _t.shadowOffsetX = 0;
            _t.shadowOffsetY = 0;
            _t.shadowBlur = 0;
            _t.shadowOpacity = 1;
            if (properties && properties instanceof Object) {
                for (var key in properties) {
                    _t[key] = properties[key];
                }
            }
        };
        cc.FontDefinition.prototype._getCanvasFontStr = function() {
            var lineHeight = this.lineHeight.charAt ? this.lineHeight : this.lineHeight + "px";
            return this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px/" + lineHeight + " '" + this.fontName + "'";
        };
        cc.TextAlignment = cc.Enum({
            LEFT: 0,
            CENTER: 1,
            RIGHT: 2
        });
        cc.VerticalTextAlignment = cc.Enum({
            TOP: 0,
            CENTER: 1,
            BOTTOM: 2
        });
        cc._Dictionary = cc.Class({
            ctor: function() {
                this._keyMapTb = {};
                this._valueMapTb = {};
                this.__currId = 2 << (0 | 10 * Math.random());
            },
            __getKey: function() {
                this.__currId++;
                return "key_" + this.__currId;
            },
            setObject: function(value, key) {
                if (null == key) {
                    return;
                }
                var keyId = this.__getKey();
                this._keyMapTb[keyId] = key;
                this._valueMapTb[keyId] = value;
            },
            objectForKey: function(key) {
                if (null == key) {
                    return null;
                }
                var locKeyMapTb = this._keyMapTb;
                for (var keyId in locKeyMapTb) {
                    if (locKeyMapTb[keyId] === key) {
                        return this._valueMapTb[keyId];
                    }
                }
                return null;
            },
            valueForKey: function(key) {
                return this.objectForKey(key);
            },
            removeObjectForKey: function(key) {
                if (null == key) {
                    return;
                }
                var locKeyMapTb = this._keyMapTb;
                for (var keyId in locKeyMapTb) {
                    if (locKeyMapTb[keyId] === key) {
                        delete this._valueMapTb[keyId];
                        delete locKeyMapTb[keyId];
                        return;
                    }
                }
            },
            removeObjectsForKeys: function(keys) {
                if (null == keys) {
                    return;
                }
                for (var i = 0; i < keys.length; i++) {
                    this.removeObjectForKey(keys[i]);
                }
            },
            allKeys: function() {
                var keyArr = [], locKeyMapTb = this._keyMapTb;
                for (var key in locKeyMapTb) {
                    keyArr.push(locKeyMapTb[key]);
                }
                return keyArr;
            },
            removeAllObjects: function() {
                this._keyMapTb = {};
                this._valueMapTb = {};
            },
            count: function() {
                return this.allKeys().length;
            }
        });
    }, {} ],
    108: [ function(require, module, exports) {
        var JS = require("../platform/js");
        function ValueType() {}
        JS.setClassName("cc.ValueType", ValueType);
        JS.mixin(ValueType.prototype, {
            clone: false,
            equals: false,
            toString: function() {
                return "" + {};
            },
            lerp: false
        });
        cc.ValueType = ValueType;
        module.exports = ValueType;
    }, {
        "../platform/js": 81
    } ],
    109: [ function(require, module, exports) {
        var ValueType = require("./CCValueType");
        var JS = require("../platform/js");
        var CCClass = require("../platform/CCClass");
        function Vec2(x, y) {
            if (x && "object" == typeof x) {
                y = x.y;
                x = x.x;
            }
            this.x = x || 0;
            this.y = y || 0;
        }
        JS.extend(Vec2, ValueType);
        CCClass.fastDefine("cc.Vec2", Vec2, {
            x: 0,
            y: 0
        });
        JS.mixin(Vec2.prototype, {
            clone: function() {
                return new Vec2(this.x, this.y);
            },
            set: function(newValue) {
                this.x = newValue.x;
                this.y = newValue.y;
                return this;
            },
            equals: function(other) {
                return other && this.x === other.x && this.y === other.y;
            },
            toString: function() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ")";
            },
            lerp: function(to, ratio, out) {
                out = out || new Vec2();
                var x = this.x;
                var y = this.y;
                out.x = x + (to.x - x) * ratio;
                out.y = y + (to.y - y) * ratio;
                return out;
            },
            addSelf: function(vector) {
                this.x += vector.x;
                this.y += vector.y;
                return this;
            },
            add: function(vector, out) {
                out = out || new Vec2();
                out.x = this.x + vector.x;
                out.y = this.y + vector.y;
                return out;
            },
            subSelf: function(vector) {
                this.x -= vector.x;
                this.y -= vector.y;
                return this;
            },
            sub: function(vector, out) {
                out = out || new Vec2();
                out.x = this.x - vector.x;
                out.y = this.y - vector.y;
                return out;
            },
            mulSelf: function(num) {
                this.x *= num;
                this.y *= num;
                return this;
            },
            mul: function(num, out) {
                out = out || new Vec2();
                out.x = this.x * num;
                out.y = this.y * num;
                return out;
            },
            scaleSelf: function(vector) {
                this.x *= vector.x;
                this.y *= vector.y;
                return this;
            },
            scale: function(vector, out) {
                out = out || new Vec2();
                out.x = this.x * vector.x;
                out.y = this.y * vector.y;
                return out;
            },
            divSelf: function(num) {
                this.x /= num;
                this.y /= num;
                return this;
            },
            div: function(num, out) {
                out = out || new Vec2();
                out.x = this.x / num;
                out.y = this.y / num;
                return out;
            },
            negSelf: function() {
                this.x = -this.x;
                this.y = -this.y;
                return this;
            },
            neg: function(out) {
                out = out || new Vec2();
                out.x = -this.x;
                out.y = -this.y;
                return out;
            },
            dot: function(vector) {
                return this.x * vector.x + this.y * vector.y;
            },
            cross: function(vector) {
                return this.y * vector.x - this.x * vector.y;
            },
            mag: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            magSqr: function() {
                return this.x * this.x + this.y * this.y;
            },
            normalizeSelf: function() {
                var magSqr = this.x * this.x + this.y * this.y;
                if (1 === magSqr) {
                    return this;
                }
                if (0 === magSqr) {
                    console.warn("Can't normalize zero vector");
                    return this;
                }
                var invsqrt = 1 / Math.sqrt(magSqr);
                this.x *= invsqrt;
                this.y *= invsqrt;
                return this;
            },
            normalize: function(out) {
                out = out || new Vec2();
                out.x = this.x;
                out.y = this.y;
                out.normalizeSelf();
                return out;
            },
            angle: function(vector) {
                var magSqr1 = this.magSqr();
                var magSqr2 = vector.magSqr();
                if (0 === magSqr1 || 0 === magSqr2) {
                    console.warn("Can't get angle between zero vector");
                    return 0;
                }
                var dot = this.dot(vector);
                var theta = dot / Math.sqrt(magSqr1 * magSqr2);
                theta = cc.clampf(theta, -1, 1);
                return Math.acos(theta);
            },
            signAngle: function(vector) {
                return Math.atan2(this.y, this.x) - Math.atan2(vector.y, vector.x);
            },
            rotate: function(radians, out) {
                out = out || new Vec2();
                out.x = this.x;
                out.y = this.y;
                return out.rotateSelf(radians);
            },
            rotateSelf: function(radians) {
                var sin = Math.sin(radians);
                var cos = Math.cos(radians);
                var x = this.x;
                this.x = cos * x - sin * this.y;
                this.y = sin * x + cos * this.y;
                return this;
            }
        });
        JS.get(Vec2, "ONE", function() {
            return new Vec2(1, 1);
        });
        JS.get(Vec2, "ZERO", function() {
            return new Vec2(0, 0);
        });
        JS.get(Vec2, "UP", function() {
            return new Vec2(0, 1);
        });
        JS.get(Vec2, "RIGHT", function() {
            return new Vec2(1, 0);
        });
        cc.Vec2 = Vec2;
        cc.v2 = function v2(x, y) {
            return new Vec2(x, y);
        };
        cc.p = cc.v2;
        cc.pointEqualToPoint = function(point1, point2) {
            return point1 && point2 && point1.x === point2.x && point1.y === point2.y;
        };
        module.exports = cc.Vec2;
    }, {
        "../platform/CCClass": 68,
        "../platform/js": 81,
        "./CCValueType": 108
    } ],
    110: [ function(require, module, exports) {
        require("./CCValueType");
        require("./CCEnum");
        require("./CCVec2");
        require("./CCPointExtension");
        require("./CCSize");
        require("./CCRect");
        require("./CCColor");
        require("./CCTypes");
        require("./CCAffineTransform");
    }, {
        "./CCAffineTransform": 101,
        "./CCColor": 102,
        "./CCEnum": 103,
        "./CCPointExtension": 104,
        "./CCRect": 105,
        "./CCSize": 106,
        "./CCTypes": 107,
        "./CCValueType": 108,
        "./CCVec2": 109
    } ],
    111: [ function(require, module, exports) {
        cc.math.AABB = function(min, max) {
            this.min = min || new cc.math.Vec3();
            this.max = max || new cc.math.Vec3();
        };
        cc.math.AABB.prototype.containsPoint = function(point) {
            return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
        };
        cc.math.AABB.containsPoint = function(pPoint, pBox) {
            return pPoint.x >= pBox.min.x && pPoint.x <= pBox.max.x && pPoint.y >= pBox.min.y && pPoint.y <= pBox.max.y && pPoint.z >= pBox.min.z && pPoint.z <= pBox.max.z;
        };
        cc.math.AABB.prototype.assignFrom = function(aabb) {
            this.min.assignFrom(aabb.min);
            this.max.assignFrom(aabb.max);
        };
        cc.math.AABB.assign = function(pOut, pIn) {
            pOut.min.assignFrom(pIn.min);
            pOut.max.assignFrom(pIn.max);
            return pOut;
        };
    }, {} ],
    112: [ function(require, module, exports) {
        cc.math.Matrix4Stack = function(top, stack) {
            this.top = top;
            this.stack = stack || [];
        };
        var proto = cc.math.Matrix4Stack.prototype;
        proto.initialize = function() {
            this.stack.length = 0;
            this.top = null;
        };
        proto.push = function(item) {
            item = item || this.top;
            this.stack.push(this.top);
            this.top = new cc.math.Matrix4(item);
        };
        proto.pop = function() {
            this.top = this.stack.pop();
        };
        proto.release = function() {
            this.stack = null;
            this.top = null;
            this._matrixPool = null;
        };
        proto._getFromPool = function(item) {
            var pool = this._matrixPool;
            if (0 === pool.length) {
                return new cc.math.Matrix4(item);
            }
            var ret = pool.pop();
            ret.assignFrom(item);
            return ret;
        };
        proto._putInPool = function(matrix) {
            this._matrixPool.push(matrix);
        };
    }, {} ],
    113: [ function(require, module, exports) {
        var math = cc.math;
        math.KM_GL_MODELVIEW = 5888;
        math.KM_GL_PROJECTION = 5889;
        math.KM_GL_TEXTURE = 5890;
        math.modelview_matrix_stack = new math.Matrix4Stack();
        math.projection_matrix_stack = new math.Matrix4Stack();
        math.texture_matrix_stack = new math.Matrix4Stack();
        cc.current_stack = null;
        var initialized = false;
        var lazyInitialize = function() {
            if (!initialized) {
                var identity = new math.Matrix4();
                math.modelview_matrix_stack.initialize();
                math.projection_matrix_stack.initialize();
                math.texture_matrix_stack.initialize();
                cc.current_stack = math.modelview_matrix_stack;
                initialized = true;
                identity.identity();
                math.modelview_matrix_stack.push(identity);
                math.projection_matrix_stack.push(identity);
                math.texture_matrix_stack.push(identity);
            }
        };
        lazyInitialize();
        math.glFreeAll = function() {
            math.modelview_matrix_stack.release();
            math.modelview_matrix_stack = null;
            math.projection_matrix_stack.release();
            math.projection_matrix_stack = null;
            math.texture_matrix_stack.release();
            math.texture_matrix_stack = null;
            initialized = false;
            cc.current_stack = null;
        };
        math.glPushMatrix = function() {
            cc.current_stack.push(cc.current_stack.top);
        };
        math.glPushMatrixWitMat4 = function(saveMat) {
            cc.current_stack.stack.push(cc.current_stack.top);
            saveMat.assignFrom(cc.current_stack.top);
            cc.current_stack.top = saveMat;
        };
        math.glPopMatrix = function() {
            cc.current_stack.top = cc.current_stack.stack.pop();
        };
        math.glMatrixMode = function(mode) {
            switch (mode) {
              case math.KM_GL_MODELVIEW:
                cc.current_stack = math.modelview_matrix_stack;
                break;

              case math.KM_GL_PROJECTION:
                cc.current_stack = math.projection_matrix_stack;
                break;

              case math.KM_GL_TEXTURE:
                cc.current_stack = math.texture_matrix_stack;
                break;

              default:
                throw new Error("Invalid matrix mode specified");
            }
        };
        math.glLoadIdentity = function() {
            cc.current_stack.top.identity();
        };
        math.glLoadMatrix = function(pIn) {
            cc.current_stack.top.assignFrom(pIn);
        };
        math.glMultMatrix = function(pIn) {
            cc.current_stack.top.multiply(pIn);
        };
        var tempMatrix = new math.Matrix4();
        math.glTranslatef = function(x, y, z) {
            var translation = math.Matrix4.createByTranslation(x, y, z, tempMatrix);
            cc.current_stack.top.multiply(translation);
        };
        var tempVector3 = new math.Vec3();
        math.glRotatef = function(angle, x, y, z) {
            tempVector3.fill(x, y, z);
            var rotation = math.Matrix4.createByAxisAndAngle(tempVector3, cc.degreesToRadians(angle), tempMatrix);
            cc.current_stack.top.multiply(rotation);
        };
        math.glScalef = function(x, y, z) {
            var scaling = math.Matrix4.createByScale(x, y, z, tempMatrix);
            cc.current_stack.top.multiply(scaling);
        };
        math.glGetMatrix = function(mode, pOut) {
            switch (mode) {
              case math.KM_GL_MODELVIEW:
                pOut.assignFrom(math.modelview_matrix_stack.top);
                break;

              case math.KM_GL_PROJECTION:
                pOut.assignFrom(math.projection_matrix_stack.top);
                break;

              case math.KM_GL_TEXTURE:
                pOut.assignFrom(math.texture_matrix_stack.top);
                break;

              default:
                throw new Error("Invalid matrix mode specified");
            }
        };
    }, {} ],
    114: [ function(require, module, exports) {
        require("./utility");
        require("./vec2");
        require("./vec3");
        require("./vec4");
        require("./ray2");
        require("./mat3");
        require("./mat4");
        require("./plane");
        require("./quaternion");
        require("./aabb");
        require("./gl/mat4stack");
        require("./gl/matrix");
    }, {
        "./aabb": 111,
        "./gl/mat4stack": 112,
        "./gl/matrix": 113,
        "./mat3": 115,
        "./mat4": 116,
        "./plane": 117,
        "./quaternion": 118,
        "./ray2": 119,
        "./utility": 120,
        "./vec2": 121,
        "./vec3": 122,
        "./vec4": 123
    } ],
    115: [ function(require, module, exports) {
        var Uint16Array = Uint16Array || Array;
        var Float32Array = Float32Array || Array;
        cc.math.Matrix3 = function(mat3) {
            mat3 && mat3.mat ? this.mat = new Float32Array(mat3.mat) : this.mat = new Float32Array(9);
        };
        var proto = cc.math.Matrix3.prototype;
        proto.fill = function(mat3) {
            var mat = this.mat, matIn = mat3.mat;
            mat[0] = matIn[0];
            mat[1] = matIn[1];
            mat[2] = matIn[2];
            mat[3] = matIn[3];
            mat[4] = matIn[4];
            mat[5] = matIn[5];
            mat[6] = matIn[6];
            mat[7] = matIn[7];
            mat[8] = matIn[8];
            return this;
        };
        proto.adjugate = function() {
            var mat = this.mat;
            var m0 = mat[0], m1 = mat[1], m2 = mat[2], m3 = mat[3], m4 = mat[4], m5 = mat[5], m6 = mat[6], m7 = mat[7], m8 = mat[8];
            mat[0] = m4 * m8 - m5 * m7;
            mat[1] = m2 * m7 - m1 * m8;
            mat[2] = m1 * m5 - m2 * m4;
            mat[3] = m5 * m6 - m3 * m8;
            mat[4] = m0 * m8 - m2 * m6;
            mat[5] = m2 * m3 - m0 * m5;
            mat[6] = m3 * m7 - m4 * m6;
            mat[8] = m0 * m4 - m1 * m3;
            return this;
        };
        proto.identity = function() {
            var mat = this.mat;
            mat[1] = mat[2] = mat[3] = mat[5] = mat[6] = mat[7] = 0;
            mat[0] = mat[4] = mat[8] = 1;
            return this;
        };
        var tmpMatrix = new cc.math.Matrix3();
        proto.inverse = function(determinate) {
            if (0 === determinate) {
                return this;
            }
            tmpMatrix.assignFrom(this);
            var detInv = 1 / determinate;
            this.adjugate();
            this.multiplyScalar(detInv);
            return this;
        };
        proto.isIdentity = function() {
            var mat = this.mat;
            return 1 === mat[0] && 0 === mat[1] && 0 === mat[2] && 0 === mat[3] && 1 === mat[4] && 0 === mat[5] && 0 === mat[6] && 0 === mat[7] && 1 === mat[8];
        };
        proto.transpose = function() {
            var mat = this.mat;
            var m1 = mat[1], m2 = mat[2], m3 = mat[3], m5 = mat[5], m6 = mat[6], m7 = mat[7];
            mat[1] = m3;
            mat[2] = m6;
            mat[3] = m1;
            mat[5] = m7;
            mat[6] = m2;
            mat[7] = m5;
            return this;
        };
        proto.determinant = function() {
            var mat = this.mat;
            var output = mat[0] * mat[4] * mat[8] + mat[1] * mat[5] * mat[6] + mat[2] * mat[3] * mat[7];
            output -= mat[2] * mat[4] * mat[6] + mat[0] * mat[5] * mat[7] + mat[1] * mat[3] * mat[8];
            return output;
        };
        proto.multiply = function(mat3) {
            var m1 = this.mat, m2 = mat3.mat;
            var a0 = m1[0], a1 = m1[1], a2 = m1[2], a3 = m1[3], a4 = m1[4], a5 = m1[5], a6 = m1[6], a7 = m1[7], a8 = m1[8];
            var b0 = m2[0], b1 = m2[1], b2 = m2[2], b3 = m2[3], b4 = m2[4], b5 = m2[5], b6 = m2[6], b7 = m2[7], b8 = m2[8];
            m1[0] = a0 * b0 + a3 * b1 + a6 * b2;
            m1[1] = a1 * b0 + a4 * b1 + a7 * b2;
            m1[2] = a2 * b0 + a5 * b1 + a8 * b2;
            m1[3] = a2 * b0 + a5 * b1 + a8 * b2;
            m1[4] = a1 * b3 + a4 * b4 + a7 * b5;
            m1[5] = a2 * b3 + a5 * b4 + a8 * b5;
            m1[6] = a0 * b6 + a3 * b7 + a6 * b8;
            m1[7] = a1 * b6 + a4 * b7 + a7 * b8;
            m1[8] = a2 * b6 + a5 * b7 + a8 * b8;
            return this;
        };
        proto.multiplyScalar = function(factor) {
            var mat = this.mat;
            mat[0] *= factor;
            mat[1] *= factor;
            mat[2] *= factor;
            mat[3] *= factor;
            mat[4] *= factor;
            mat[5] *= factor;
            mat[6] *= factor;
            mat[7] *= factor;
            mat[8] *= factor;
            return this;
        };
        cc.math.Matrix3.rotationAxisAngle = function(axis, radians) {
            var rcos = Math.cos(radians), rsin = Math.sin(radians);
            var retMat = new cc.math.Matrix3();
            var mat = retMat.mat;
            mat[0] = rcos + axis.x * axis.x * (1 - rcos);
            mat[1] = axis.z * rsin + axis.y * axis.x * (1 - rcos);
            mat[2] = -axis.y * rsin + axis.z * axis.x * (1 - rcos);
            mat[3] = -axis.z * rsin + axis.x * axis.y * (1 - rcos);
            mat[4] = rcos + axis.y * axis.y * (1 - rcos);
            mat[5] = axis.x * rsin + axis.z * axis.y * (1 - rcos);
            mat[6] = axis.y * rsin + axis.x * axis.z * (1 - rcos);
            mat[7] = -axis.x * rsin + axis.y * axis.z * (1 - rcos);
            mat[8] = rcos + axis.z * axis.z * (1 - rcos);
            return retMat;
        };
        proto.assignFrom = function(matIn) {
            if (this === matIn) {
                cc.log("cc.math.Matrix3.assign(): current matrix equals matIn");
                return this;
            }
            var mat = this.mat, m2 = matIn.mat;
            mat[0] = m2[0];
            mat[1] = m2[1];
            mat[2] = m2[2];
            mat[3] = m2[3];
            mat[4] = m2[4];
            mat[5] = m2[5];
            mat[6] = m2[6];
            mat[7] = m2[7];
            mat[8] = m2[8];
            return this;
        };
        proto.equals = function(mat3) {
            if (this === mat3) {
                return true;
            }
            var EPSILON = cc.math.EPSILON, m1 = this.mat, m2 = mat3.mat;
            for (var i = 0; i < 9; ++i) {
                if (!(m1[i] + EPSILON > m2[i] && m1[i] - EPSILON < m2[i])) {
                    return false;
                }
            }
            return true;
        };
        cc.math.Matrix3.createByRotationX = function(radians) {
            var retMat = new cc.math.Matrix3(), mat = retMat.mat;
            mat[0] = 1;
            mat[1] = 0;
            mat[2] = 0;
            mat[3] = 0;
            mat[4] = Math.cos(radians);
            mat[5] = Math.sin(radians);
            mat[6] = 0;
            mat[7] = -Math.sin(radians);
            mat[8] = Math.cos(radians);
            return retMat;
        };
        cc.math.Matrix3.createByRotationY = function(radians) {
            var retMat = new cc.math.Matrix3(), mat = retMat.mat;
            mat[0] = Math.cos(radians);
            mat[1] = 0;
            mat[2] = -Math.sin(radians);
            mat[3] = 0;
            mat[4] = 1;
            mat[5] = 0;
            mat[6] = Math.sin(radians);
            mat[7] = 0;
            mat[8] = Math.cos(radians);
            return retMat;
        };
        cc.math.Matrix3.createByRotationZ = function(radians) {
            var retMat = new cc.math.Matrix3(), mat = retMat.mat;
            mat[0] = Math.cos(radians);
            mat[1] = -Math.sin(radians);
            mat[2] = 0;
            mat[3] = Math.sin(radians);
            mat[4] = Math.cos(radians);
            mat[5] = 0;
            mat[6] = 0;
            mat[7] = 0;
            mat[8] = 1;
            return retMat;
        };
        cc.math.Matrix3.createByRotation = function(radians) {
            var retMat = new cc.math.Matrix3(), mat = retMat.mat;
            mat[0] = Math.cos(radians);
            mat[1] = Math.sin(radians);
            mat[2] = 0;
            mat[3] = -Math.sin(radians);
            mat[4] = Math.cos(radians);
            mat[5] = 0;
            mat[6] = 0;
            mat[7] = 0;
            mat[8] = 1;
            return retMat;
        };
        cc.math.Matrix3.createByScale = function(x, y) {
            var ret = new cc.math.Matrix3();
            ret.identity();
            ret.mat[0] = x;
            ret.mat[4] = y;
            return ret;
        };
        cc.math.Matrix3.createByTranslation = function(x, y) {
            var ret = new cc.math.Matrix3();
            ret.identity();
            ret.mat[6] = x;
            ret.mat[7] = y;
            return ret;
        };
        cc.math.Matrix3.createByQuaternion = function(quaternion) {
            if (!quaternion) {
                return null;
            }
            var ret = new cc.math.Matrix3(), mat = ret.mat;
            mat[0] = 1 - 2 * (quaternion.y * quaternion.y + quaternion.z * quaternion.z);
            mat[1] = 2 * (quaternion.x * quaternion.y - quaternion.w * quaternion.z);
            mat[2] = 2 * (quaternion.x * quaternion.z + quaternion.w * quaternion.y);
            mat[3] = 2 * (quaternion.x * quaternion.y + quaternion.w * quaternion.z);
            mat[4] = 1 - 2 * (quaternion.x * quaternion.x + quaternion.z * quaternion.z);
            mat[5] = 2 * (quaternion.y * quaternion.z - quaternion.w * quaternion.x);
            mat[6] = 2 * (quaternion.x * quaternion.z - quaternion.w * quaternion.y);
            mat[7] = 2 * (quaternion.y * quaternion.z + quaternion.w * quaternion.x);
            mat[8] = 1 - 2 * (quaternion.x * quaternion.x + quaternion.y * quaternion.y);
            return ret;
        };
        proto.rotationToAxisAngle = function() {
            return cc.math.Quaternion.rotationMatrix(this).toAxisAndAngle();
        };
    }, {} ],
    116: [ function(require, module, exports) {
        cc.math.Matrix4 = function(mat4) {
            mat4 && mat4.mat ? this.mat = new Float32Array(mat4.mat) : this.mat = new Float32Array(16);
        };
        var proto = cc.math.Matrix4.prototype;
        proto.fill = function(scalarArr) {
            var mat = this.mat;
            for (var i = 0; i < 16; i++) {
                mat[i] = scalarArr[i];
            }
            return this;
        };
        cc.math.mat4Identity = function(pOut) {
            var mat = pOut.mat;
            mat[1] = mat[2] = mat[3] = mat[4] = mat[6] = mat[7] = mat[8] = mat[9] = mat[11] = mat[12] = mat[13] = mat[14] = 0;
            mat[0] = mat[5] = mat[10] = mat[15] = 1;
            return pOut;
        };
        proto.identity = function() {
            var mat = this.mat;
            mat[1] = mat[2] = mat[3] = mat[4] = mat[6] = mat[7] = mat[8] = mat[9] = mat[11] = mat[12] = mat[13] = mat[14] = 0;
            mat[0] = mat[5] = mat[10] = mat[15] = 1;
            return this;
        };
        proto.get = function(row, col) {
            return this.mat[row + 4 * col];
        };
        proto.set = function(row, col, value) {
            this.mat[row + 4 * col] = value;
        };
        proto.swap = function(r1, c1, r2, c2) {
            var mat = this.mat, tmp = mat[r1 + 4 * c1];
            mat[r1 + 4 * c1] = mat[r2 + 4 * c2];
            mat[r2 + 4 * c2] = tmp;
        };
        cc.math.Matrix4._gaussj = function(a, b) {
            var i, icol = 0, irow = 0, j, k, l, ll, n = 4, m = 4, selElement;
            var big, dum, pivinv;
            var indxc = [ 0, 0, 0, 0 ], indxr = [ 0, 0, 0, 0 ], ipiv = [ 0, 0, 0, 0 ];
            for (i = 0; i < n; i++) {
                big = 0;
                for (j = 0; j < n; j++) {
                    if (1 !== ipiv[j]) {
                        for (k = 0; k < n; k++) {
                            if (0 === ipiv[k]) {
                                selElement = Math.abs(a.get(j, k));
                                if (selElement >= big) {
                                    big = selElement;
                                    irow = j;
                                    icol = k;
                                }
                            }
                        }
                    }
                }
                ++ipiv[icol];
                if (irow !== icol) {
                    for (l = 0; l < n; l++) {
                        a.swap(irow, l, icol, l);
                    }
                    for (l = 0; l < m; l++) {
                        b.swap(irow, l, icol, l);
                    }
                }
                indxr[i] = irow;
                indxc[i] = icol;
                if (0 === a.get(icol, icol)) {
                    return false;
                }
                pivinv = 1 / a.get(icol, icol);
                a.set(icol, icol, 1);
                for (l = 0; l < n; l++) {
                    a.set(icol, l, a.get(icol, l) * pivinv);
                }
                for (l = 0; l < m; l++) {
                    b.set(icol, l, b.get(icol, l) * pivinv);
                }
                for (ll = 0; ll < n; ll++) {
                    if (ll !== icol) {
                        dum = a.get(ll, icol);
                        a.set(ll, icol, 0);
                        for (l = 0; l < n; l++) {
                            a.set(ll, l, a.get(ll, l) - a.get(icol, l) * dum);
                        }
                        for (l = 0; l < m; l++) {
                            b.set(ll, l, a.get(ll, l) - b.get(icol, l) * dum);
                        }
                    }
                }
            }
            for (l = n - 1; l >= 0; l--) {
                if (indxr[l] !== indxc[l]) {
                    for (k = 0; k < n; k++) {
                        a.swap(k, indxr[l], k, indxc[l]);
                    }
                }
            }
            return true;
        };
        var identityMatrix = new cc.math.Matrix4().identity();
        cc.math.mat4Inverse = function(pOut, pM) {
            var inv = new cc.math.Matrix4(pM);
            var tmp = new cc.math.Matrix4(identityMatrix);
            if (false === cc.math.Matrix4._gaussj(inv, tmp)) {
                return null;
            }
            pOut.assignFrom(inv);
            return pOut;
        };
        proto.inverse = function() {
            var inv = new cc.math.Matrix4(this);
            var tmp = new cc.math.Matrix4(identityMatrix);
            if (false === cc.math.Matrix4._gaussj(inv, tmp)) {
                return null;
            }
            return inv;
        };
        proto.isIdentity = function() {
            var mat = this.mat;
            return 1 === mat[0] && 0 === mat[1] && 0 === mat[2] && 0 === mat[3] && 0 === mat[4] && 1 === mat[5] && 0 === mat[6] && 0 === mat[7] && 0 === mat[8] && 0 === mat[9] && 1 === mat[10] && 0 === mat[11] && 0 === mat[12] && 0 === mat[13] && 0 === mat[14] && 1 === mat[15];
        };
        proto.transpose = function() {
            var mat = this.mat;
            var m1 = mat[1], m2 = mat[2], m3 = mat[3], m4 = mat[4], m6 = mat[6], m7 = mat[7], m8 = mat[8], m9 = mat[9], m11 = mat[11], m12 = mat[12], m13 = mat[13], m14 = mat[14];
            mat[1] = m4;
            mat[2] = m8;
            mat[3] = m12;
            mat[4] = m1;
            mat[6] = m9;
            mat[7] = m13;
            mat[8] = m2;
            mat[9] = m6;
            mat[11] = m14;
            mat[12] = m3;
            mat[13] = m7;
            mat[14] = m11;
            return this;
        };
        cc.math.mat4Multiply = function(pOut, pM1, pM2) {
            var outArray = pOut.mat, mat1 = pM1.mat, mat2 = pM2.mat;
            var a00 = mat1[0], a01 = mat1[1], a02 = mat1[2], a03 = mat1[3];
            var a10 = mat1[4], a11 = mat1[5], a12 = mat1[6], a13 = mat1[7];
            var a20 = mat1[8], a21 = mat1[9], a22 = mat1[10], a23 = mat1[11];
            var a30 = mat1[12], a31 = mat1[13], a32 = mat1[14], a33 = mat1[15];
            var b00 = mat2[0], b01 = mat2[1], b02 = mat2[2], b03 = mat2[3];
            var b10 = mat2[4], b11 = mat2[5], b12 = mat2[6], b13 = mat2[7];
            var b20 = mat2[8], b21 = mat2[9], b22 = mat2[10], b23 = mat2[11];
            var b30 = mat2[12], b31 = mat2[13], b32 = mat2[14], b33 = mat2[15];
            outArray[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
            outArray[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
            outArray[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
            outArray[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
            outArray[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
            outArray[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
            outArray[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
            outArray[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
            outArray[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
            outArray[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
            outArray[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
            outArray[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
            outArray[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
            outArray[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
            outArray[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
            outArray[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
            return pOut;
        };
        proto.multiply = function(mat4) {
            var mat = this.mat, mat2 = mat4.mat;
            var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3];
            var a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7];
            var a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11];
            var a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15];
            var b00 = mat2[0], b01 = mat2[1], b02 = mat2[2], b03 = mat2[3];
            var b10 = mat2[4], b11 = mat2[5], b12 = mat2[6], b13 = mat2[7];
            var b20 = mat2[8], b21 = mat2[9], b22 = mat2[10], b23 = mat2[11];
            var b30 = mat2[12], b31 = mat2[13], b32 = mat2[14], b33 = mat2[15];
            mat[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
            mat[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
            mat[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
            mat[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
            mat[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
            mat[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
            mat[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
            mat[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
            mat[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
            mat[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
            mat[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
            mat[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
            mat[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
            mat[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
            mat[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
            mat[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
            return this;
        };
        cc.math.getMat4MultiplyValue = function(pM1, pM2) {
            var m1 = pM1.mat, m2 = pM2.mat;
            var mat = new Float32Array(16);
            mat[0] = m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2] + m1[12] * m2[3];
            mat[1] = m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2] + m1[13] * m2[3];
            mat[2] = m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2] + m1[14] * m2[3];
            mat[3] = m1[3] * m2[0] + m1[7] * m2[1] + m1[11] * m2[2] + m1[15] * m2[3];
            mat[4] = m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6] + m1[12] * m2[7];
            mat[5] = m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6] + m1[13] * m2[7];
            mat[6] = m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6] + m1[14] * m2[7];
            mat[7] = m1[3] * m2[4] + m1[7] * m2[5] + m1[11] * m2[6] + m1[15] * m2[7];
            mat[8] = m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10] + m1[12] * m2[11];
            mat[9] = m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10] + m1[13] * m2[11];
            mat[10] = m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10] + m1[14] * m2[11];
            mat[11] = m1[3] * m2[8] + m1[7] * m2[9] + m1[11] * m2[10] + m1[15] * m2[11];
            mat[12] = m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12] * m2[15];
            mat[13] = m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13] * m2[15];
            mat[14] = m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14] * m2[15];
            mat[15] = m1[3] * m2[12] + m1[7] * m2[13] + m1[11] * m2[14] + m1[15] * m2[15];
            return mat;
        };
        cc.math.mat4Assign = function(pOut, pIn) {
            if (pOut === pIn) {
                cc.log("cc.math.mat4Assign(): pOut equals pIn");
                return pOut;
            }
            var outArr = pOut.mat;
            var inArr = pIn.mat;
            outArr[0] = inArr[0];
            outArr[1] = inArr[1];
            outArr[2] = inArr[2];
            outArr[3] = inArr[3];
            outArr[4] = inArr[4];
            outArr[5] = inArr[5];
            outArr[6] = inArr[6];
            outArr[7] = inArr[7];
            outArr[8] = inArr[8];
            outArr[9] = inArr[9];
            outArr[10] = inArr[10];
            outArr[11] = inArr[11];
            outArr[12] = inArr[12];
            outArr[13] = inArr[13];
            outArr[14] = inArr[14];
            outArr[15] = inArr[15];
            return pOut;
        };
        proto.assignFrom = function(mat4) {
            if (this === mat4) {
                cc.log("cc.mat.Matrix4.assignFrom(): mat4 equals current matrix");
                return this;
            }
            var outArr = this.mat, inArr = mat4.mat;
            outArr[0] = inArr[0];
            outArr[1] = inArr[1];
            outArr[2] = inArr[2];
            outArr[3] = inArr[3];
            outArr[4] = inArr[4];
            outArr[5] = inArr[5];
            outArr[6] = inArr[6];
            outArr[7] = inArr[7];
            outArr[8] = inArr[8];
            outArr[9] = inArr[9];
            outArr[10] = inArr[10];
            outArr[11] = inArr[11];
            outArr[12] = inArr[12];
            outArr[13] = inArr[13];
            outArr[14] = inArr[14];
            outArr[15] = inArr[15];
            return this;
        };
        proto.equals = function(mat4) {
            if (this === mat4) {
                cc.log("cc.math.Matrix4 equal: pMat1 and pMat2 are same object.");
                return true;
            }
            var matA = this.mat, matB = mat4.mat, EPSILON = cc.math.EPSILON;
            for (var i = 0; i < 16; i++) {
                if (!(matA[i] + EPSILON > matB[i] && matA[i] - EPSILON < matB[i])) {
                    return false;
                }
            }
            return true;
        };
        cc.math.Matrix4.createByRotationX = function(radians, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var mat = matrix.mat;
            mat[0] = 1;
            mat[3] = mat[2] = mat[1] = 0;
            mat[4] = 0;
            mat[5] = Math.cos(radians);
            mat[6] = Math.sin(radians);
            mat[7] = 0;
            mat[8] = 0;
            mat[9] = -Math.sin(radians);
            mat[10] = Math.cos(radians);
            mat[11] = 0;
            mat[14] = mat[13] = mat[12] = 0;
            mat[15] = 1;
            return matrix;
        };
        cc.math.Matrix4.createByRotationY = function(radians, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var mat = matrix.mat;
            mat[0] = Math.cos(radians);
            mat[1] = 0;
            mat[2] = -Math.sin(radians);
            mat[3] = 0;
            mat[7] = mat[6] = mat[4] = 0;
            mat[5] = 1;
            mat[8] = Math.sin(radians);
            mat[9] = 0;
            mat[10] = Math.cos(radians);
            mat[11] = 0;
            mat[14] = mat[13] = mat[12] = 0;
            mat[15] = 1;
            return matrix;
        };
        cc.math.Matrix4.createByRotationZ = function(radians, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var mat = matrix.mat;
            mat[0] = Math.cos(radians);
            mat[1] = Math.sin(radians);
            mat[3] = mat[2] = 0;
            mat[4] = -Math.sin(radians);
            mat[5] = Math.cos(radians);
            mat[7] = mat[6] = 0;
            mat[11] = mat[9] = mat[8] = 0;
            mat[10] = 1;
            mat[14] = mat[13] = mat[12] = 0;
            mat[15] = 1;
            return matrix;
        };
        cc.math.Matrix4.createByPitchYawRoll = function(pitch, yaw, roll, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var cr = Math.cos(pitch), sr = Math.sin(pitch);
            var cp = Math.cos(yaw), sp = Math.sin(yaw);
            var cy = Math.cos(roll), sy = Math.sin(roll);
            var srsp = sr * sp, crsp = cr * sp;
            var mat = matrix.mat;
            mat[0] = cp * cy;
            mat[4] = cp * sy;
            mat[8] = -sp;
            mat[1] = srsp * cy - cr * sy;
            mat[5] = srsp * sy + cr * cy;
            mat[9] = sr * cp;
            mat[2] = crsp * cy + sr * sy;
            mat[6] = crsp * sy - sr * cy;
            mat[10] = cr * cp;
            mat[3] = mat[7] = mat[11] = 0;
            mat[15] = 1;
            return matrix;
        };
        cc.math.Matrix4.createByQuaternion = function(quaternion, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var mat = matrix.mat;
            mat[0] = 1 - 2 * (quaternion.y * quaternion.y + quaternion.z * quaternion.z);
            mat[1] = 2 * (quaternion.x * quaternion.y + quaternion.z * quaternion.w);
            mat[2] = 2 * (quaternion.x * quaternion.z - quaternion.y * quaternion.w);
            mat[3] = 0;
            mat[4] = 2 * (quaternion.x * quaternion.y - quaternion.z * quaternion.w);
            mat[5] = 1 - 2 * (quaternion.x * quaternion.x + quaternion.z * quaternion.z);
            mat[6] = 2 * (quaternion.z * quaternion.y + quaternion.x * quaternion.w);
            mat[7] = 0;
            mat[8] = 2 * (quaternion.x * quaternion.z + quaternion.y * quaternion.w);
            mat[9] = 2 * (quaternion.y * quaternion.z - quaternion.x * quaternion.w);
            mat[10] = 1 - 2 * (quaternion.x * quaternion.x + quaternion.y * quaternion.y);
            mat[11] = 0;
            mat[14] = mat[13] = mat[12] = 0;
            mat[15] = 1;
            return matrix;
        };
        cc.math.Matrix4.createByRotationTranslation = function(rotation, translation, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var mat = matrix.mat, rMat = rotation.mat;
            mat[0] = rMat[0];
            mat[1] = rMat[1];
            mat[2] = rMat[2];
            mat[3] = 0;
            mat[4] = rMat[3];
            mat[5] = rMat[4];
            mat[6] = rMat[5];
            mat[7] = 0;
            mat[8] = rMat[6];
            mat[9] = rMat[7];
            mat[10] = rMat[8];
            mat[11] = 0;
            mat[12] = translation.x;
            mat[13] = translation.y;
            mat[14] = translation.z;
            mat[15] = 1;
            return matrix;
        };
        cc.math.Matrix4.createByScale = function(x, y, z, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var mat = matrix.mat;
            mat[0] = x;
            mat[5] = y;
            mat[10] = z;
            mat[15] = 1;
            mat[1] = mat[2] = mat[3] = mat[4] = mat[6] = mat[7] = mat[8] = mat[9] = mat[11] = mat[12] = mat[13] = mat[14] = 0;
            return matrix;
        };
        cc.math.mat4Translation = function(pOut, x, y, z) {
            pOut.mat[0] = pOut.mat[5] = pOut.mat[10] = pOut.mat[15] = 1;
            pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[4] = pOut.mat[6] = pOut.mat[7] = pOut.mat[8] = pOut.mat[9] = pOut.mat[11] = 0;
            pOut.mat[12] = x;
            pOut.mat[13] = y;
            pOut.mat[14] = z;
            return pOut;
        };
        cc.math.Matrix4.createByTranslation = function(x, y, z, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            matrix.identity();
            matrix.mat[12] = x;
            matrix.mat[13] = y;
            matrix.mat[14] = z;
            return matrix;
        };
        proto.getUpVec3 = function() {
            var mat = this.mat;
            var ret = new cc.math.Vec3(mat[4], mat[5], mat[6]);
            return ret.normalize();
        };
        proto.getRightVec3 = function() {
            var mat = this.mat;
            var ret = new cc.math.Vec3(mat[0], mat[1], mat[2]);
            return ret.normalize();
        };
        proto.getForwardVec3 = function() {
            var mat = this.mat;
            var ret = new cc.math.Vec3(mat[8], mat[9], mat[10]);
            return ret.normalize();
        };
        cc.math.mat4PerspectiveProjection = function(pOut, fovY, aspect, zNear, zFar) {
            var r = cc.degreesToRadians(fovY / 2);
            var deltaZ = zFar - zNear;
            var s = Math.sin(r);
            if (0 === deltaZ || 0 === s || 0 === aspect) {
                return null;
            }
            var cotangent = Math.cos(r) / s;
            pOut.identity();
            pOut.mat[0] = cotangent / aspect;
            pOut.mat[5] = cotangent;
            pOut.mat[10] = -(zFar + zNear) / deltaZ;
            pOut.mat[11] = -1;
            pOut.mat[14] = -2 * zNear * zFar / deltaZ;
            pOut.mat[15] = 0;
            return pOut;
        };
        cc.math.Matrix4.createPerspectiveProjection = function(fovY, aspect, zNear, zFar) {
            var r = cc.degreesToRadians(fovY / 2), deltaZ = zFar - zNear;
            var s = Math.sin(r);
            if (0 === deltaZ || 0 === s || 0 === aspect) {
                return null;
            }
            var cotangent = Math.cos(r) / s;
            var matrix = new cc.math.Matrix4(), mat = matrix.mat;
            matrix.identity();
            mat[0] = cotangent / aspect;
            mat[5] = cotangent;
            mat[10] = -(zFar + zNear) / deltaZ;
            mat[11] = -1;
            mat[14] = -2 * zNear * zFar / deltaZ;
            mat[15] = 0;
            return matrix;
        };
        cc.math.mat4OrthographicProjection = function(pOut, left, right, bottom, top, nearVal, farVal) {
            pOut.identity();
            pOut.mat[0] = 2 / (right - left);
            pOut.mat[5] = 2 / (top - bottom);
            pOut.mat[10] = -2 / (farVal - nearVal);
            pOut.mat[12] = -((right + left) / (right - left));
            pOut.mat[13] = -((top + bottom) / (top - bottom));
            pOut.mat[14] = -((farVal + nearVal) / (farVal - nearVal));
            return pOut;
        };
        cc.math.Matrix4.createOrthographicProjection = function(left, right, bottom, top, nearVal, farVal) {
            var matrix = new cc.math.Matrix4(), mat = matrix.mat;
            matrix.identity();
            mat[0] = 2 / (right - left);
            mat[5] = 2 / (top - bottom);
            mat[10] = -2 / (farVal - nearVal);
            mat[12] = -((right + left) / (right - left));
            mat[13] = -((top + bottom) / (top - bottom));
            mat[14] = -((farVal + nearVal) / (farVal - nearVal));
            return matrix;
        };
        cc.math.mat4LookAt = function(pOut, pEye, pCenter, pUp) {
            var f = new cc.math.Vec3(pCenter), up = new cc.math.Vec3(pUp);
            f.subtract(pEye);
            f.normalize();
            up.normalize();
            var s = new cc.math.Vec3(f);
            s.cross(up);
            s.normalize();
            var u = new cc.math.Vec3(s);
            u.cross(f);
            s.normalize();
            pOut.identity();
            pOut.mat[0] = s.x;
            pOut.mat[4] = s.y;
            pOut.mat[8] = s.z;
            pOut.mat[1] = u.x;
            pOut.mat[5] = u.y;
            pOut.mat[9] = u.z;
            pOut.mat[2] = -f.x;
            pOut.mat[6] = -f.y;
            pOut.mat[10] = -f.z;
            var translate = cc.math.Matrix4.createByTranslation(-pEye.x, -pEye.y, -pEye.z);
            pOut.multiply(translate);
            return pOut;
        };
        var tempMatrix = new cc.math.Matrix4();
        proto.lookAt = function(eyeVec, centerVec, upVec) {
            var f = new cc.math.Vec3(centerVec), up = new cc.math.Vec3(upVec), mat = this.mat;
            f.subtract(eyeVec);
            f.normalize();
            up.normalize();
            var s = new cc.math.Vec3(f);
            s.cross(up);
            s.normalize();
            var u = new cc.math.Vec3(s);
            u.cross(f);
            s.normalize();
            this.identity();
            mat[0] = s.x;
            mat[4] = s.y;
            mat[8] = s.z;
            mat[1] = u.x;
            mat[5] = u.y;
            mat[9] = u.z;
            mat[2] = -f.x;
            mat[6] = -f.y;
            mat[10] = -f.z;
            tempMatrix = cc.math.Matrix4.createByTranslation(-eyeVec.x, -eyeVec.y, -eyeVec.z, tempMatrix);
            this.multiply(tempMatrix);
            return this;
        };
        cc.math.mat4RotationAxisAngle = function(pOut, axis, radians) {
            var rcos = Math.cos(radians), rsin = Math.sin(radians);
            var normalizedAxis = new cc.math.Vec3(axis);
            normalizedAxis.normalize();
            pOut.mat[0] = rcos + normalizedAxis.x * normalizedAxis.x * (1 - rcos);
            pOut.mat[1] = normalizedAxis.z * rsin + normalizedAxis.y * normalizedAxis.x * (1 - rcos);
            pOut.mat[2] = -normalizedAxis.y * rsin + normalizedAxis.z * normalizedAxis.x * (1 - rcos);
            pOut.mat[3] = 0;
            pOut.mat[4] = -normalizedAxis.z * rsin + normalizedAxis.x * normalizedAxis.y * (1 - rcos);
            pOut.mat[5] = rcos + normalizedAxis.y * normalizedAxis.y * (1 - rcos);
            pOut.mat[6] = normalizedAxis.x * rsin + normalizedAxis.z * normalizedAxis.y * (1 - rcos);
            pOut.mat[7] = 0;
            pOut.mat[8] = normalizedAxis.y * rsin + normalizedAxis.x * normalizedAxis.z * (1 - rcos);
            pOut.mat[9] = -normalizedAxis.x * rsin + normalizedAxis.y * normalizedAxis.z * (1 - rcos);
            pOut.mat[10] = rcos + normalizedAxis.z * normalizedAxis.z * (1 - rcos);
            pOut.mat[11] = 0;
            pOut.mat[12] = 0;
            pOut.mat[13] = 0;
            pOut.mat[14] = 0;
            pOut.mat[15] = 1;
            return pOut;
        };
        cc.math.Matrix4.createByAxisAndAngle = function(axis, radians, matrix) {
            matrix = matrix || new cc.math.Matrix4();
            var mat = this.mat, rcos = Math.cos(radians), rsin = Math.sin(radians);
            var normalizedAxis = new cc.math.Vec3(axis);
            normalizedAxis.normalize();
            mat[0] = rcos + normalizedAxis.x * normalizedAxis.x * (1 - rcos);
            mat[1] = normalizedAxis.z * rsin + normalizedAxis.y * normalizedAxis.x * (1 - rcos);
            mat[2] = -normalizedAxis.y * rsin + normalizedAxis.z * normalizedAxis.x * (1 - rcos);
            mat[3] = 0;
            mat[4] = -normalizedAxis.z * rsin + normalizedAxis.x * normalizedAxis.y * (1 - rcos);
            mat[5] = rcos + normalizedAxis.y * normalizedAxis.y * (1 - rcos);
            mat[6] = normalizedAxis.x * rsin + normalizedAxis.z * normalizedAxis.y * (1 - rcos);
            mat[7] = 0;
            mat[8] = normalizedAxis.y * rsin + normalizedAxis.x * normalizedAxis.z * (1 - rcos);
            mat[9] = -normalizedAxis.x * rsin + normalizedAxis.y * normalizedAxis.z * (1 - rcos);
            mat[10] = rcos + normalizedAxis.z * normalizedAxis.z * (1 - rcos);
            mat[11] = 0;
            mat[12] = mat[13] = mat[14] = 0;
            mat[15] = 1;
            return matrix;
        };
        proto.extractRotation = function() {
            var matrix = new cc.math.Matrix3(), mat4 = this.mat, mat3 = matrix.mat;
            mat3[0] = mat4[0];
            mat3[1] = mat4[1];
            mat3[2] = mat4[2];
            mat3[3] = mat4[4];
            mat3[4] = mat4[5];
            mat3[5] = mat4[6];
            mat3[6] = mat4[8];
            mat3[7] = mat4[9];
            mat3[8] = mat4[10];
            return matrix;
        };
        proto.extractPlane = function(planeType) {
            var plane = new cc.math.Plane(), mat = this.mat;
            switch (planeType) {
              case cc.math.Plane.RIGHT:
                plane.a = mat[3] - mat[0];
                plane.b = mat[7] - mat[4];
                plane.c = mat[11] - mat[8];
                plane.d = mat[15] - mat[12];
                break;

              case cc.math.Plane.LEFT:
                plane.a = mat[3] + mat[0];
                plane.b = mat[7] + mat[4];
                plane.c = mat[11] + mat[8];
                plane.d = mat[15] + mat[12];
                break;

              case cc.math.Plane.BOTTOM:
                plane.a = mat[3] + mat[1];
                plane.b = mat[7] + mat[5];
                plane.c = mat[11] + mat[9];
                plane.d = mat[15] + mat[13];
                break;

              case cc.math.Plane.TOP:
                plane.a = mat[3] - mat[1];
                plane.b = mat[7] - mat[5];
                plane.c = mat[11] - mat[9];
                plane.d = mat[15] - mat[13];
                break;

              case cc.math.Plane.FAR:
                plane.a = mat[3] - mat[2];
                plane.b = mat[7] - mat[6];
                plane.c = mat[11] - mat[10];
                plane.d = mat[15] - mat[14];
                break;

              case cc.math.Plane.NEAR:
                plane.a = mat[3] + mat[2];
                plane.b = mat[7] + mat[6];
                plane.c = mat[11] + mat[10];
                plane.d = mat[15] + mat[14];
                break;

              default:
                cc.log("cc.math.Matrix4.extractPlane: Invalid plane index");
            }
            var t = Math.sqrt(plane.a * plane.a + plane.b * plane.b + plane.c * plane.c);
            plane.a /= t;
            plane.b /= t;
            plane.c /= t;
            plane.d /= t;
            return plane;
        };
        proto.toAxisAndAngle = function() {
            var rotation = this.extractRotation();
            var temp = cc.math.Quaternion.rotationMatrix(rotation);
            return temp.toAxisAndAngle();
        };
    }, {} ],
    117: [ function(require, module, exports) {
        cc.math.Plane = function(a, b, c, d) {
            if (a && void 0 === b) {
                this.a = a.a;
                this.b = a.b;
                this.c = a.c;
                this.d = a.d;
            } else {
                this.a = a || 0;
                this.b = b || 0;
                this.c = c || 0;
                this.d = d || 0;
            }
        };
        var proto = cc.math.Plane.prototype;
        cc.math.Plane.LEFT = 0;
        cc.math.Plane.RIGHT = 1;
        cc.math.Plane.BOTTOM = 2;
        cc.math.Plane.TOP = 3;
        cc.math.Plane.NEAR = 4;
        cc.math.Plane.FAR = 5;
        cc.math.Plane.POINT_INFRONT_OF_PLANE = 0;
        cc.math.Plane.POINT_BEHIND_PLANE = 1;
        cc.math.Plane.POINT_ON_PLANE = 2;
        proto.dot = function(vec4) {
            return this.a * vec4.x + this.b * vec4.y + this.c * vec4.z + this.d * vec4.w;
        };
        proto.dotCoord = function(vec3) {
            return this.a * vec3.x + this.b * vec3.y + this.c * vec3.z + this.d;
        };
        proto.dotNormal = function(vec3) {
            return this.a * vec3.x + this.b * vec3.y + this.c * vec3.z;
        };
        cc.math.Plane.fromPointNormal = function(vec3, normal) {
            return new cc.math.Plane(normal.x, normal.y, normal.z, (-normal.dot(vec3)));
        };
        cc.math.Plane.fromPoints = function(vec1, vec2, vec3) {
            var v1 = new cc.math.Vec3(vec2), v2 = new cc.math.Vec3(vec3), plane = new cc.math.Plane();
            v1.subtract(vec1);
            v2.subtract(vec1);
            v1.cross(v2);
            v1.normalize();
            plane.a = v1.x;
            plane.b = v1.y;
            plane.c = v1.z;
            plane.d = v1.scale(-1).dot(vec1);
            return plane;
        };
        proto.normalize = function() {
            var n = new cc.math.Vec3(this.a, this.b, this.c), l = 1 / n.length();
            n.normalize();
            this.a = n.x;
            this.b = n.y;
            this.c = n.z;
            this.d = this.d * l;
            return this;
        };
        proto.classifyPoint = function(vec3) {
            var distance = this.a * vec3.x + this.b * vec3.y + this.c * vec3.z + this.d;
            if (distance > .001) {
                return cc.math.Plane.POINT_INFRONT_OF_PLANE;
            }
            if (distance < -.001) {
                return cc.math.Plane.POINT_BEHIND_PLANE;
            }
            return cc.math.Plane.POINT_ON_PLANE;
        };
    }, {} ],
    118: [ function(require, module, exports) {
        cc.math.Quaternion = function(x, y, z, w) {
            if (x && void 0 === y) {
                this.x = x.x;
                this.y = x.y;
                this.z = x.z;
                this.w = x.w;
            } else {
                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
                this.w = w || 0;
            }
        };
        var proto = cc.math.Quaternion.prototype;
        proto.conjugate = function(quaternion) {
            this.x = -quaternion.x;
            this.y = -quaternion.y;
            this.z = -quaternion.z;
            this.w = quaternion.w;
            return this;
        };
        proto.dot = function(quaternion) {
            return this.w * quaternion.w + this.x * quaternion.x + this.y * quaternion.y + this.z * quaternion.z;
        };
        proto.exponential = function() {
            return this;
        };
        proto.identity = function() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
            return this;
        };
        proto.inverse = function() {
            var len = this.length();
            if (Math.abs(len) > cc.math.EPSILON) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.w = 0;
                return this;
            }
            this.conjugate(this).scale(1 / len);
            return this;
        };
        proto.isIdentity = function() {
            return 0 === this.x && 0 === this.y && 0 === this.z && 1 === this.w;
        };
        proto.length = function() {
            return Math.sqrt(this.lengthSq());
        };
        proto.lengthSq = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        };
        proto.multiply = function(quaternion) {
            var x = this.x, y = this.y, z = this.z, w = this.w;
            this.w = w * quaternion.w - x * quaternion.x - y * quaternion.y - z * quaternion.z;
            this.x = w * quaternion.x + x * quaternion.w + y * quaternion.z - z * quaternion.y;
            this.y = w * quaternion.y + y * quaternion.w + z * quaternion.x - x * quaternion.z;
            this.z = w * quaternion.z + z * quaternion.w + x * quaternion.y - y * quaternion.x;
            return this;
        };
        proto.normalize = function() {
            var length = this.length();
            if (Math.abs(length) <= cc.math.EPSILON) {
                throw new Error("current quaternion is an invalid value");
            }
            this.scale(1 / length);
            return this;
        };
        proto.rotationAxis = function(axis, angle) {
            var rad = .5 * angle, scale = Math.sin(rad);
            this.w = Math.cos(rad);
            this.x = axis.x * scale;
            this.y = axis.y * scale;
            this.z = axis.z * scale;
            return this;
        };
        cc.math.Quaternion.rotationMatrix = function(mat3) {
            if (!mat3) {
                return null;
            }
            var x, y, z, w;
            var m4x4 = [], mat = mat3.mat, scale = 0;
            m4x4[0] = mat[0];
            m4x4[1] = mat[3];
            m4x4[2] = mat[6];
            m4x4[4] = mat[1];
            m4x4[5] = mat[4];
            m4x4[6] = mat[7];
            m4x4[8] = mat[2];
            m4x4[9] = mat[5];
            m4x4[10] = mat[8];
            m4x4[15] = 1;
            var pMatrix = m4x4[0];
            var diagonal = pMatrix[0] + pMatrix[5] + pMatrix[10] + 1;
            if (diagonal > cc.math.EPSILON) {
                scale = 2 * Math.sqrt(diagonal);
                x = (pMatrix[9] - pMatrix[6]) / scale;
                y = (pMatrix[2] - pMatrix[8]) / scale;
                z = (pMatrix[4] - pMatrix[1]) / scale;
                w = .25 * scale;
            } else {
                if (pMatrix[0] > pMatrix[5] && pMatrix[0] > pMatrix[10]) {
                    scale = 2 * Math.sqrt(1 + pMatrix[0] - pMatrix[5] - pMatrix[10]);
                    x = .25 * scale;
                    y = (pMatrix[4] + pMatrix[1]) / scale;
                    z = (pMatrix[2] + pMatrix[8]) / scale;
                    w = (pMatrix[9] - pMatrix[6]) / scale;
                } else {
                    if (pMatrix[5] > pMatrix[10]) {
                        scale = 2 * Math.sqrt(1 + pMatrix[5] - pMatrix[0] - pMatrix[10]);
                        x = (pMatrix[4] + pMatrix[1]) / scale;
                        y = .25 * scale;
                        z = (pMatrix[9] + pMatrix[6]) / scale;
                        w = (pMatrix[2] - pMatrix[8]) / scale;
                    } else {
                        scale = 2 * Math.sqrt(1 + pMatrix[10] - pMatrix[0] - pMatrix[5]);
                        x = (pMatrix[2] + pMatrix[8]) / scale;
                        y = (pMatrix[9] + pMatrix[6]) / scale;
                        z = .25 * scale;
                        w = (pMatrix[4] - pMatrix[1]) / scale;
                    }
                }
            }
            return new cc.math.Quaternion(x, y, z, w);
        };
        cc.math.Quaternion.rotationYawPitchRoll = function(yaw, pitch, roll) {
            var ex, ey, ez;
            var cr, cp, cy, sr, sp, sy, cpcy, spsy;
            ex = cc.degreesToRadians(pitch) / 2;
            ey = cc.degreesToRadians(yaw) / 2;
            ez = cc.degreesToRadians(roll) / 2;
            cr = Math.cos(ex);
            cp = Math.cos(ey);
            cy = Math.cos(ez);
            sr = Math.sin(ex);
            sp = Math.sin(ey);
            sy = Math.sin(ez);
            cpcy = cp * cy;
            spsy = sp * sy;
            var ret = new cc.math.Quaternion();
            ret.w = cr * cpcy + sr * spsy;
            ret.x = sr * cpcy - cr * spsy;
            ret.y = cr * sp * cy + sr * cp * sy;
            ret.z = cr * cp * sy - sr * sp * cy;
            ret.normalize();
            return ret;
        };
        proto.slerp = function(quaternion, t) {
            if (this.x === quaternion.x && this.y === quaternion.y && this.z === quaternion.z && this.w === quaternion.w) {
                return this;
            }
            var ct = this.dot(quaternion), theta = Math.acos(ct), st = Math.sqrt(1 - cc.math.square(ct));
            var stt = Math.sin(t * theta) / st, somt = Math.sin((1 - t) * theta) / st;
            var temp2 = new cc.math.Quaternion(quaternion);
            this.scale(somt);
            temp2.scale(stt);
            this.add(temp2);
            return this;
        };
        proto.toAxisAndAngle = function() {
            var tempAngle;
            var scale;
            var retAngle, retAxis = new cc.math.Vec3();
            tempAngle = Math.acos(this.w);
            scale = Math.sqrt(cc.math.square(this.x) + cc.math.square(this.y) + cc.math.square(this.z));
            if (scale > -cc.math.EPSILON && scale < cc.math.EPSILON || scale < 2 * Math.PI + cc.math.EPSILON && scale > 2 * Math.PI - cc.math.EPSILON) {
                retAngle = 0;
                retAxis.x = 0;
                retAxis.y = 0;
                retAxis.z = 1;
            } else {
                retAngle = 2 * tempAngle;
                retAxis.x = this.x / scale;
                retAxis.y = this.y / scale;
                retAxis.z = this.z / scale;
                retAxis.normalize();
            }
            return {
                axis: retAxis,
                angle: retAngle
            };
        };
        proto.scale = function(scale) {
            this.x *= scale;
            this.y *= scale;
            this.z *= scale;
            this.w *= scale;
            return this;
        };
        proto.assignFrom = function(quaternion) {
            this.x = quaternion.x;
            this.y = quaternion.y;
            this.z = quaternion.z;
            this.w = quaternion.w;
            return this;
        };
        proto.add = function(quaternion) {
            this.x += quaternion.x;
            this.y += quaternion.y;
            this.z += quaternion.z;
            this.w += quaternion.w;
            return this;
        };
        cc.math.Quaternion.rotationBetweenVec3 = function(vec1, vec2, fallback) {
            var v1 = new cc.math.Vec3(vec1), v2 = new cc.math.Vec3(vec2);
            v1.normalize();
            v2.normalize();
            var a = v1.dot(v2), quaternion = new cc.math.Quaternion();
            if (a >= 1) {
                quaternion.identity();
                return quaternion;
            }
            if (a < 1e-6 - 1) {
                if (Math.abs(fallback.lengthSq()) < cc.math.EPSILON) {
                    quaternion.rotationAxis(fallback, Math.PI);
                } else {
                    var axis = new cc.math.Vec3(1, 0, 0);
                    axis.cross(vec1);
                    if (Math.abs(axis.lengthSq()) < cc.math.EPSILON) {
                        axis.fill(0, 1, 0);
                        axis.cross(vec1);
                    }
                    axis.normalize();
                    quaternion.rotationAxis(axis, Math.PI);
                }
            } else {
                var s = Math.sqrt(2 * (1 + a)), invs = 1 / s;
                v1.cross(v2);
                quaternion.x = v1.x * invs;
                quaternion.y = v1.y * invs;
                quaternion.z = v1.z * invs;
                quaternion.w = .5 * s;
                quaternion.normalize();
            }
            return quaternion;
        };
        proto.multiplyVec3 = function(vec) {
            var x = this.x, y = this.y, z = this.z, retVec = new cc.math.Vec3(vec);
            var uv = new cc.math.Vec3(x, y, z), uuv = new cc.math.Vec3(x, y, z);
            uv.cross(vec);
            uuv.cross(uv);
            uv.scale(2 * q.w);
            uuv.scale(2);
            retVec.add(uv);
            retVec.add(uuv);
            return retVec;
        };
    }, {} ],
    119: [ function(require, module, exports) {
        cc.math.Ray2 = function(start, dir) {
            this.start = start || new cc.math.Vec2();
            this.dir = dir || new cc.math.Vec2();
        };
        cc.math.Ray2.prototype.fill = function(px, py, vx, vy) {
            this.start.x = px;
            this.start.y = py;
            this.dir.x = vx;
            this.dir.y = vy;
        };
        cc.math.Ray2.prototype.intersectLineSegment = function(p1, p2, intersection) {
            var x1 = this.start.x, y1 = this.start.y;
            var x2 = this.start.x + this.dir.x, y2 = this.start.y + this.dir.y;
            var x3 = p1.x, y3 = p1.y;
            var x4 = p2.x, y4 = p2.y;
            var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
            var ua, x, y;
            if (denom > -cc.math.EPSILON && denom < cc.math.EPSILON) {
                return false;
            }
            ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
            x = x1 + ua * (x2 - x1);
            y = y1 + ua * (y2 - y1);
            if (x < Math.min(p1.x, p2.x) - cc.math.EPSILON || x > Math.max(p1.x, p2.x) + cc.math.EPSILON || y < Math.min(p1.y, p2.y) - cc.math.EPSILON || y > Math.max(p1.y, p2.y) + cc.math.EPSILON) {
                return false;
            }
            if (x < Math.min(x1, x2) - cc.math.EPSILON || x > Math.max(x1, x2) + cc.math.EPSILON || y < Math.min(y1, y2) - cc.math.EPSILON || y > Math.max(y1, y2) + cc.math.EPSILON) {
                return false;
            }
            intersection.x = x;
            intersection.y = y;
            return true;
        };
        function calculate_line_normal(p1, p2, normalOut) {
            var tmp = new cc.math.Vec2(p2);
            tmp.subtract(p1);
            normalOut.x = -tmp.y;
            normalOut.y = tmp.x;
            normalOut.normalize();
        }
        cc.math.Ray2.prototype.intersectTriangle = function(p1, p2, p3, intersection, normal_out) {
            var intersect = new cc.math.Vec2(), final_intersect = new cc.math.Vec2();
            var normal = new cc.math.Vec2(), distance = 1e4, intersected = false;
            var this_distance;
            if (this.intersectLineSegment(p1, p2, intersect)) {
                intersected = true;
                this_distance = intersect.subtract(this.start).length();
                if (this_distance < distance) {
                    final_intersect.x = intersect.x;
                    final_intersect.y = intersect.y;
                    distance = this_distance;
                    calculate_line_normal(p1, p2, normal);
                }
            }
            if (this.intersectLineSegment(p2, p3, intersect)) {
                intersected = true;
                this_distance = intersect.subtract(this.start).length();
                if (this_distance < distance) {
                    final_intersect.x = intersect.x;
                    final_intersect.y = intersect.y;
                    distance = this_distance;
                    calculate_line_normal(p2, p3, normal);
                }
            }
            if (this.intersectLineSegment(p3, p1, intersect)) {
                intersected = true;
                this_distance = intersect.subtract(this.start).length();
                if (this_distance < distance) {
                    final_intersect.x = intersect.x;
                    final_intersect.y = intersect.y;
                    distance = this_distance;
                    calculate_line_normal(p3, p1, normal);
                }
            }
            if (intersected) {
                intersection.x = final_intersect.x;
                intersection.y = final_intersect.y;
                if (normal_out) {
                    normal_out.x = normal.x;
                    normal_out.y = normal.y;
                }
            }
            return intersected;
        };
    }, {} ],
    120: [ function(require, module, exports) {
        cc.math = cc.math || {};
        cc.math.EPSILON = 1 / 64;
        cc.math.square = function(s) {
            return s * s;
        };
        cc.math.almostEqual = function(lhs, rhs) {
            return lhs + cc.math.EPSILON > rhs && lhs - cc.math.EPSILON < rhs;
        };
    }, {} ],
    121: [ function(require, module, exports) {
        cc.math.Vec2 = function(x, y) {
            if (void 0 === y) {
                this.x = x.x;
                this.y = x.y;
            } else {
                this.x = x || 0;
                this.y = y || 0;
            }
        };
        var proto = cc.math.Vec2.prototype;
        proto.fill = function(x, y) {
            this.x = x;
            this.y = y;
        };
        proto.length = function() {
            return Math.sqrt(cc.math.square(this.x) + cc.math.square(this.y));
        };
        proto.lengthSq = function() {
            return cc.math.square(this.x) + cc.math.square(this.y);
        };
        proto.normalize = function() {
            var l = 1 / this.length();
            this.x *= l;
            this.y *= l;
            return this;
        };
        cc.math.Vec2.add = function(pOut, pV1, pV2) {
            pOut.x = pV1.x + pV2.x;
            pOut.y = pV1.y + pV2.y;
            return pOut;
        };
        proto.add = function(vec) {
            this.x += vec.x;
            this.y += vec.y;
            return this;
        };
        proto.dot = function(vec) {
            return this.x * vec.x + this.y * vec.y;
        };
        cc.math.Vec2.subtract = function(pOut, pV1, pV2) {
            pOut.x = pV1.x - pV2.x;
            pOut.y = pV1.y - pV2.y;
            return pOut;
        };
        proto.subtract = function(vec) {
            this.x -= vec.x;
            this.y -= vec.y;
            return this;
        };
        proto.transform = function(mat3) {
            var x = this.x, y = this.y;
            this.x = x * mat3.mat[0] + y * mat3.mat[3] + mat3.mat[6];
            this.y = x * mat3.mat[1] + y * mat3.mat[4] + mat3.mat[7];
            return this;
        };
        cc.math.Vec2.scale = function(pOut, pIn, s) {
            pOut.x = pIn.x * s;
            pOut.y = pIn.y * s;
            return pOut;
        };
        proto.scale = function(s) {
            this.x *= s;
            this.y *= s;
            return this;
        };
        proto.equals = function(vec) {
            return this.x < vec.x + cc.math.EPSILON && this.x > vec.x - cc.math.EPSILON && this.y < vec.y + cc.math.EPSILON && this.y > vec.y - cc.math.EPSILON;
        };
    }, {} ],
    122: [ function(require, module, exports) {
        cc.math.Vec3 = cc.math.Vec3 = function(x, y, z) {
            if (x && void 0 === y) {
                this.x = x.x;
                this.y = x.y;
                this.z = x.z;
            } else {
                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
            }
        };
        cc.math.vec3 = function(x, y, z) {
            return new cc.math.Vec3(x, y, z);
        };
        var proto = cc.math.Vec3.prototype;
        proto.fill = function(x, y, z) {
            if (x && void 0 === y) {
                this.x = x.x;
                this.y = x.y;
                this.z = x.z;
            } else {
                this.x = x;
                this.y = y;
                this.z = z;
            }
            return this;
        };
        proto.length = function() {
            return Math.sqrt(cc.math.square(this.x) + cc.math.square(this.y) + cc.math.square(this.z));
        };
        proto.lengthSq = function() {
            return cc.math.square(this.x) + cc.math.square(this.y) + cc.math.square(this.z);
        };
        proto.normalize = function() {
            var l = 1 / this.length();
            this.x *= l;
            this.y *= l;
            this.z *= l;
            return this;
        };
        proto.cross = function(vec3) {
            var x = this.x, y = this.y, z = this.z;
            this.x = y * vec3.z - z * vec3.y;
            this.y = z * vec3.x - x * vec3.z;
            this.z = x * vec3.y - y * vec3.x;
            return this;
        };
        proto.dot = function(vec) {
            return this.x * vec.x + this.y * vec.y + this.z * vec.z;
        };
        proto.add = function(vec) {
            this.x += vec.x;
            this.y += vec.y;
            this.z += vec.z;
            return this;
        };
        proto.subtract = function(vec) {
            this.x -= vec.x;
            this.y -= vec.y;
            this.z -= vec.z;
            return this;
        };
        proto.transform = function(mat4) {
            var x = this.x, y = this.y, z = this.z, mat = mat4.mat;
            this.x = x * mat[0] + y * mat[4] + z * mat[8] + mat[12];
            this.y = x * mat[1] + y * mat[5] + z * mat[9] + mat[13];
            this.z = x * mat[2] + y * mat[6] + z * mat[10] + mat[14];
            return this;
        };
        proto.transformNormal = function(mat4) {
            var x = this.x, y = this.y, z = this.z, mat = mat4.mat;
            this.x = x * mat[0] + y * mat[4] + z * mat[8];
            this.y = x * mat[1] + y * mat[5] + z * mat[9];
            this.z = x * mat[2] + y * mat[6] + z * mat[10];
            return this;
        };
        proto.transformCoord = function(mat4) {
            var v = new cc.math.Vec4(this.x, this.y, this.z, 1);
            v.transform(mat4);
            this.x = v.x / v.w;
            this.y = v.y / v.w;
            this.z = v.z / v.w;
            return this;
        };
        proto.scale = function(scale) {
            this.x *= scale;
            this.y *= scale;
            this.z *= scale;
            return this;
        };
        proto.equals = function(vec) {
            var EPSILON = cc.math.EPSILON;
            return this.x < vec.x + EPSILON && this.x > vec.x - EPSILON && this.y < vec.y + EPSILON && this.y > vec.y - EPSILON && this.z < vec.z + EPSILON && this.z > vec.z - EPSILON;
        };
        proto.inverseTransform = function(mat4) {
            var mat = mat4.mat;
            var v1 = new cc.math.Vec3(this.x - mat[12], this.y - mat[13], this.z - mat[14]);
            this.x = v1.x * mat[0] + v1.y * mat[1] + v1.z * mat[2];
            this.y = v1.x * mat[4] + v1.y * mat[5] + v1.z * mat[6];
            this.z = v1.x * mat[8] + v1.y * mat[9] + v1.z * mat[10];
            return this;
        };
        proto.inverseTransformNormal = function(mat4) {
            var x = this.x, y = this.y, z = this.z, mat = mat4.mat;
            this.x = x * mat[0] + y * mat[1] + z * mat[2];
            this.y = x * mat[4] + y * mat[5] + z * mat[6];
            this.z = x * mat[8] + y * mat[9] + z * mat[10];
            return this;
        };
        proto.assignFrom = function(vec) {
            if (!vec) {
                return this;
            }
            this.x = vec.x;
            this.y = vec.y;
            this.z = vec.z;
            return this;
        };
        cc.math.Vec3.zero = function(vec) {
            vec.x = vec.y = vec.z = 0;
            return vec;
        };
        proto.toTypeArray = function() {
            var tyArr = new Float32Array(3);
            tyArr[0] = this.x;
            tyArr[1] = this.y;
            tyArr[2] = this.z;
            return tyArr;
        };
    }, {} ],
    123: [ function(require, module, exports) {
        cc.math.Vec4 = function(x, y, z, w) {
            if (x && void 0 === y) {
                this.x = x.x;
                this.y = x.y;
                this.z = x.z;
                this.w = x.w;
            } else {
                this.x = x || 0;
                this.y = y || 0;
                this.z = z || 0;
                this.w = w || 0;
            }
        };
        var proto = cc.math.Vec4.prototype;
        proto.fill = function(x, y, z, w) {
            if (x && void 0 === y) {
                this.x = x.x;
                this.y = x.y;
                this.z = x.z;
                this.w = x.w;
            } else {
                this.x = x;
                this.y = y;
                this.z = z;
                this.w = w;
            }
        };
        proto.add = function(vec) {
            if (!vec) {
                return this;
            }
            this.x += vec.x;
            this.y += vec.y;
            this.z += vec.z;
            this.w += vec.w;
            return this;
        };
        proto.dot = function(vec) {
            return this.x * vec.x + this.y * vec.y + this.z * vec.z + this.w * vec.w;
        };
        proto.length = function() {
            return Math.sqrt(cc.math.square(this.x) + cc.math.square(this.y) + cc.math.square(this.z) + cc.math.square(this.w));
        };
        proto.lengthSq = function() {
            return cc.math.square(this.x) + cc.math.square(this.y) + cc.math.square(this.z) + cc.math.square(this.w);
        };
        proto.lerp = function(vec, t) {
            return this;
        };
        proto.normalize = function() {
            var l = 1 / this.length();
            this.x *= l;
            this.y *= l;
            this.z *= l;
            this.w *= l;
            return this;
        };
        proto.scale = function(scale) {
            this.normalize();
            this.x *= scale;
            this.y *= scale;
            this.z *= scale;
            this.w *= scale;
            return this;
        };
        proto.subtract = function(vec) {
            this.x -= vec.x;
            this.y -= vec.y;
            this.z -= vec.z;
            this.w -= vec.w;
        };
        proto.transform = function(mat4) {
            var x = this.x, y = this.y, z = this.z, w = this.w, mat = mat4.mat;
            this.x = x * mat[0] + y * mat[4] + z * mat[8] + w * mat[12];
            this.y = x * mat[1] + y * mat[5] + z * mat[9] + w * mat[13];
            this.z = x * mat[2] + y * mat[6] + z * mat[10] + w * mat[14];
            this.w = x * mat[3] + y * mat[7] + z * mat[11] + w * mat[15];
            return this;
        };
        cc.math.Vec4.transformArray = function(vecArray, mat4) {
            var retArray = [];
            for (var i = 0; i < vecArray.length; i++) {
                var selVec = new cc.math.Vec4(vecArray[i]);
                selVec.transform(mat4);
                retArray.push(selVec);
            }
            return retArray;
        };
        proto.equals = function(vec) {
            var EPSILON = cc.math.EPSILON;
            return this.x < vec.x + EPSILON && this.x > vec.x - EPSILON && this.y < vec.y + EPSILON && this.y > vec.y - EPSILON && this.z < vec.z + EPSILON && this.z > vec.z - EPSILON && this.w < vec.w + EPSILON && this.w > vec.w - EPSILON;
        };
        proto.assignFrom = function(vec) {
            this.x = vec.x;
            this.y = vec.y;
            this.z = vec.z;
            this.w = vec.w;
            return this;
        };
        proto.toTypeArray = function() {
            var tyArr = new Float32Array(4);
            tyArr[0] = this.x;
            tyArr[1] = this.y;
            tyArr[2] = this.z;
            tyArr[3] = this.w;
            return tyArr;
        };
    }, {} ],
    124: [ function(require, module, exports) {
        require("./cocos2d/core");
        require("./cocos2d/animation");
        require("./extensions/ccpool/CCNodePool.js");
    }, {
        "./cocos2d/animation": 13,
        "./cocos2d/core": 52,
        "./extensions/ccpool/CCNodePool.js": 125
    } ],
    125: [ function(require, module, exports) {
        cc.NodePool = function(poolHandlerComp) {
            this.poolHandlerComp = poolHandlerComp;
            this._pool = [];
        };
        cc.NodePool.prototype = {
            constructor: cc.NodePool,
            size: function() {
                return this._pool.length;
            },
            clear: function() {
                var count = this._pool.length;
                for (var i = 0; i < count; ++i) {
                    this._pool[i].destroy();
                }
                this._pool.length = 0;
            },
            put: function(obj) {
                if (obj && this._pool.indexOf(obj) === -1) {
                    obj.removeFromParent(false);
                    var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
                    handler && handler.unuse && handler.unuse();
                    this._pool.push(obj);
                }
            },
            get: function() {
                var last = this._pool.length - 1;
                if (last < 0) {
                    return null;
                }
                var obj = this._pool[last];
                this._pool.length = last;
                var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;
                handler && handler.reuse && handler.reuse.apply(handler, arguments);
                return obj;
            }
        };
        module.exports = cc.NodePool;
    }, {} ],
    126: [ function(require, module, exports) {
        require("./predefine");
        var isMainProcess = false;
        if (isMainProcess) {
            cc._initDebugSetting(1);
        } else {
            require("./bin/modular-cocos2d");
            require("./bin/modular-cocos2d-cut");
        }
        require("./extends");
        isMainProcess && (Editor.versions["cocos2d"] = require("./package.json").version);
        module.exports = cc;
    }, {
        "./bin/modular-cocos2d": 3,
        "./bin/modular-cocos2d-cut": 127,
        "./extends": 124,
        "./package.json": void 0,
        "./predefine": 130
    } ],
    127: [ function(require, module, exports) {}, {} ],
    128: [ function(require, module, exports) {
        Math.sign = Math.sign || function(x) {
            x = +x;
            if (0 === x || isNaN(x)) {
                return x;
            }
            return x > 0 ? 1 : -1;
        };
    }, {} ],
    129: [ function(require, module, exports) {
        String.prototype.startsWith || (String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.lastIndexOf(searchString, position) === position;
        });
        String.prototype.endsWith || (String.prototype.endsWith = function(searchString, position) {
            ("undefined" == typeof position || position > this.length) && (position = this.length);
            position -= searchString.length;
            var lastIndex = this.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        });
    }, {} ],
    130: [ function(require, module, exports) {
        var cc = global.cc || {};
        var _ccsg = global._ccsg || {};
        cc._Test = {};
        require("./CCDebugger");
        cc._initDebugSetting(cc.DebugMode.INFO);
        require("./polyfill/string");
        require("./polyfill/math");
        require("./cocos2d/core/platform/js");
        require("./cocos2d/core/value-types");
        require("./cocos2d/core/utils");
        require("./cocos2d/core/event");
        require("./cocos2d/core/platform/CCSys");
        require("./cocos2d/core/platform/CCMacro");
        require("./cocos2d/core/load-pipeline");
        require("./cocos2d/core/textures");
        require("./cocos2d/kazmath");
        require("./cocos2d/core/CCDirector");
        require("./cocos2d/core/CCDirectorCanvas");
        require("./cocos2d/core/platform/CCView");
        require("./cocos2d/core/CCActionManager");
        require("./cocos2d/core/CCScheduler");
        require("./cocos2d/core/renderer");
        require("./CCBoot.js");
        require("./cocos2d/core/CCGame");
    }, {
        "./CCBoot.js": 1,
        "./CCDebugger": 2,
        "./cocos2d/core/CCActionManager": 17,
        "./cocos2d/core/CCDirector": 18,
        "./cocos2d/core/CCDirectorCanvas": 19,
        "./cocos2d/core/CCGame": 20,
        "./cocos2d/core/CCScheduler": 23,
        "./cocos2d/core/event": 51,
        "./cocos2d/core/load-pipeline": 58,
        "./cocos2d/core/platform/CCMacro": 69,
        "./cocos2d/core/platform/CCSys": 71,
        "./cocos2d/core/platform/CCView": 72,
        "./cocos2d/core/platform/js": 81,
        "./cocos2d/core/renderer": 88,
        "./cocos2d/core/textures": 92,
        "./cocos2d/core/utils": 96,
        "./cocos2d/core/value-types": 110,
        "./cocos2d/kazmath": 114,
        "./polyfill/math": 128,
        "./polyfill/string": 129
    } ]
}, {}, [ 126 ]);
//# sourceMappingURL=cocos2d-js.js.map