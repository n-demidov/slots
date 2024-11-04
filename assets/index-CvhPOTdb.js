var Be = Object.defineProperty;
var Le = (s, e, t) =>
  e in s
    ? Be(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var S = (s, e, t) => (Le(s, typeof e != "symbol" ? e + "" : e, t), t);
import { r as l, j as a, R as C } from "./react-CWbZ82Fp.js";
import { c as ke } from "./react-dom-1bg23oq7.js";
import {
  S as Me,
  M as Ie,
  b as je,
  c as Ve,
  e as ge,
  f as we,
  P as fe,
  G as Oe,
  T as Ee,
  g as ye,
  h as Fe,
  i as E,
} from "./@pixi-BT9gqUNR.js";
import "./pixi.js--APxrgAh.js";
import "./eventemitter3-Bav5T-Ru.js";
import "./earcut-DOWYkTK5.js";
import "./url-Czix6NCG.js";
import { g as u } from "./gsap-ZORhgBxb.js";
import { d as F } from "./mini-signals-DMh6wOcT.js";
import { h as $e } from "./howler-BozPm2lL.js";
import { l as Ge } from "./socket.io-client-DFi9RC7o.js";
import "./react-toastify-B8GeWnC-.js";
import { a as De } from "./js-cookie-Cz0CWeBA.js";
import "./call-bind-CkPzBTRv.js";
import "./get-intrinsic-B1Ut8WxJ.js";
import "./es-errors-DzOT6E3C.js";
import "./has-symbols-eVqrYdw7.js";
import "./has-proto-JnoBQRdH.js";
import "./function-bind-B8G-TZ45.js";
import "./hasown-B9bXSDSU.js";
import "./set-function-length-Ct5B6P4y.js";
import "./define-data-property-CUxyvwXF.js";
import "./es-define-property-28jGrh5V.js";
import "./gopd-O61WwtTx.js";
import "./has-property-descriptors-Cvfij9iw.js";
import "./scheduler-CzFDRTuY.js";
import "./ismobilejs-CHLuctl-.js";
import "./qs-WFKaZsx0.js";
import "./side-channel-CzTPmnEc.js";
import "./object-inspect-CJVVCa5F.js";
import "./engine.io-client-DBBxzneW.js";
import "./engine.io-parser-BiEtp6m2.js";
import "./@socket.io-Dkula2eQ.js";
import "./socket.io-parser-BBkuslX-.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const o = {};
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const o = t(n);
    fetch(n.href, o);
  }
})();
const Ue = {
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: !0,
    resizeTo: window,
    resolution: window.devicePixelRatio === 2 ? 1 : window.devicePixelRatio,
    autoDensity: !0,
    backgroundColor: 2039326,
    scaleMode: Me.LINEAR,
    legacy: !1,
    transparent: !1,
    clearBeforeRender: !0,
    preserveDrawingBuffer: !1,
    roundPixels: !1,
    forceCanvas: !1,
    cullable: !1,
    MIPMAP_TEXTURES: Ie.POW2,
  },
  He = Ue,
  Ye = (s) => new je({ ...He, parent: s }),
  Ke = l.forwardRef(function ({ currentActiveScene: e }, t) {
    const i = l.useRef(),
      n = l.useRef(null);
    return (
      l.useLayoutEffect(() => {
        i.current === void 0 &&
          ((i.current = Ye("game-container")),
          (globalThis.__PHASER_GAME__ = i.current),
          t !== null &&
            ((t.current = i.current), n.current.appendChild(i.current.view)));
      }, [t]),
      a.jsx("div", { id: "game-container", ref: n })
    );
  });
class te {
  static add(e) {
    this._app = e;
  }
  static get app() {
    return this._app;
  }
}
S(te, "_app", null);
class oe {
  static get app() {
    return te.app;
  }
  static addChild(e) {
    this.app.stage.addChild(e);
  }
  static removeChild(e) {
    this.app.stage.removeChild(e);
  }
  static addToTicker(e) {
    this.app.ticker.add(e);
  }
}
class $ {
  static addScene(e) {
    const t = e.sceneKey;
    this._scenes.set(t, e);
  }
  static getScene(e) {
    return this._scenes.get(e);
  }
  static get scenes() {
    return this._scenes;
  }
  static deleteScene(e) {
    this._scenes.delete(e);
  }
}
S($, "_scenes", new Map());
class G {
  static addScene(e) {
    e.forEach((t) => {
      $.addScene(t), oe.addChild(t);
    });
  }
  static autoStartFirstScene() {
    const e = $.scenes,
      t = Array.from(e.keys()),
      i = t.length > 0 ? t[0] : void 0;
    i && this.startScene(i);
  }
  static startScene(e, t) {
    const i = $.getScene(e);
    i == null || i.init(t);
  }
  static removeScene(e) {
    const t = this.getScene(e);
    t && oe.removeChild(t);
  }
  static getScene(e) {
    return $.getScene(e);
  }
  static deleteScene(e) {
    this.removeScene(e), $.deleteScene(e);
  }
  static setVisible(e, t) {
    const i = this.getScene(e);
    i.visible = t;
  }
}
const V = 1280,
  D = 720,
  ae = 720,
  re = 1280,
  W = { landscape: "landscape", portrait: "portrait" };
class ze {
  constructor(e) {
    (this.config = e),
      (this._landscapeTexture = this.config.textureTypes.landscape),
      (this._portraitTexture = this.config.textureTypes.portrait);
  }
  get landscapeTexture() {
    return this._landscapeTexture;
  }
  get portraitTexture() {
    return this._portraitTexture;
  }
}
class Q {
  static addImage(e, t) {
    this.images.set(e, t);
  }
  static getImage(e) {
    return this.images.get(e);
  }
}
S(Q, "images", new Map());
class M {
  static addImage(e, t) {
    Q.addImage(e, t);
  }
  static getImage(e) {
    return Q.getImage(e);
  }
}
class K extends Ve {
  constructor(e) {
    const {
        atlasKey: t,
        startWithAnimation: i,
        x: n = 0,
        y: o = 0,
        angle: r = 0,
        scaleX: c = 1,
        scaleY: h = 1,
        anchorX: d = 0.5,
        anchorY: p = 0.5,
        animationSpeed: g = 0.7,
        loop: y = !0,
        visible: _ = !0,
        isStatic: x = !0,
        playOnStart: w = !0,
        interactive: L = !1,
      } = e,
      f = M.getImage(t),
      m = f.animations[i];
    super(m),
      this.anchor.set(d, p),
      this.position.set(n, o),
      (this.scale.x = c),
      (this.scale.y = h),
      (this.angle = r),
      (this.visible = _),
      (this.filters = null),
      (this.eventMode = "dynamic"),
      (this.startAnimationFrame = i),
      (this.interactiveChildren = L),
      (this.cacheAsBitmap = x),
      (this.animationSpeed = g),
      (this.loop = y),
      (this.atlasKey = t),
      (this.atlas = f),
      w && this.play();
  }
  changeTexture(e) {
    const i = M.getImage(e).animations[this.startAnimationFrame];
    this.textures = i;
  }
  async playAnimationOnce() {
    return new Promise((e) => {
      this.play(),
        (this.onComplete = () => {
          this.gotoAndStop(0), e();
        });
    });
  }
  changeAnimationState(e, t) {
    const i = this.atlas.animations[e];
    i != this.textures && ((this.textures = i), t && this.play());
  }
}
class We {
  constructor(e, t) {
    (this.scene = t),
      (this.config = e),
      (this.sprite = this.createSprite()),
      (this.overlaySprite = this.createOverlaySprite());
  }
  createSprite() {
    const e = this.config.sprite,
      t = new K(e);
    return this.scene.addChild(t), t;
  }
  createOverlaySprite() {
    const e = this.config.overlaySprite,
      t = new K(e);
    return this.scene.addChild(t), t;
  }
}
class Xe {
  constructor(e, t) {
    (this._model = e), (this._view = t), this.startOverlayTween();
  }
  get sprite() {
    return this._view.sprite;
  }
  get overlaySprite() {
    return this._view.overlaySprite;
  }
  setViewTextureToPortrait() {
    this.sprite.changeAnimationState(this._model.portraitTexture, !1),
      this.overlaySprite.changeAnimationState(this._model.portraitTexture, !1);
  }
  setViewTextureToLandscape() {
    this.sprite.changeAnimationState(this._model.landscapeTexture, !1),
      this.overlaySprite.changeAnimationState(this._model.landscapeTexture, !1);
  }
  changeTextureOrientation(e) {
    e === W.portrait
      ? this.setViewTextureToPortrait()
      : this.setViewTextureToLandscape();
  }
  startOverlayTween() {
    u.to(this.overlaySprite, {
      alpha: 0,
      duration: 4,
      yoyo: !0,
      repeat: -1,
      onComplete: () => {},
    });
  }
  openTween() {
    (this.sprite.scale.x = 3),
      (this.sprite.scale.y = 3),
      u.to(this.sprite.scale, {
        x: 1,
        y: 1,
        duration: 1,
        ease: "back.out",
        onComplete: () => {},
      });
  }
  shakeTween() {
    u.to(this.sprite.scale, {
      x: 0.9,
      y: 0.9,
      duration: 0.5,
      yoyo: !0,
      repeat: 1,
      delay: 0.5,
      onComplete: () => {},
    });
  }
}
class B extends ge {
  constructor() {
    super();
  }
}
function le() {
  return window.innerWidth / window.innerHeight <= 1;
}
class b {}
S(b, "onUpdateGameData", new F.MiniSignal()),
  S(b, "onUserState", new F.MiniSignal()),
  S(b, "onShowSymbolDescribeLabel", new F.MiniSignal()),
  S(b, "spinButtonClick", new F.MiniSignal()),
  S(b, "onPlayerAndGameState", new F.MiniSignal()),
  S(b, "getPlayerAndGameState", new F.MiniSignal());
const se = class se {
  static startGame() {
    const e = G.getScene("Game");
    if (!(e != null && e.isActive)) {
      G.startScene("Game"),
        (this.game = G.getScene("Game")),
        this.bindSignals();
      return;
    }
    G.setVisible("Game", !0);
  }
  static updateGameData(e) {
    this.game.updateGameState(e);
  }
  static handleSpinButtonClick(e) {
    this.game.handleSpinButtonClick(e);
  }
  static changeOrientation(e) {
    this.game && this.game.changeOrientation(e);
  }
  static handleSounds(e) {
    this.game.handleSounds(e);
  }
  static bindSignals() {
    b.onUpdateGameData.add((e) => this.updateGameData(e));
  }
};
se.game = null;
let O = se;
class j {
  static resizeScreen(e, t, i) {
    this._isPortraitOrientation = le();
    const n = this._isPortraitOrientation
      ? this.calculateVerticalScaleFactor()
      : this.calculateHorizontalScaleFactor();
    this.resizeUI(e, i, n), this.resizeGame(t, n);
  }
  static calculateHorizontalScaleFactor() {
    return Math.min(window.innerWidth / V, window.innerHeight / D);
  }
  static calculateVerticalScaleFactor() {
    return Math.min(window.innerHeight / re, window.innerWidth / ae);
  }
  static get isPortraitOrientation() {
    return this._isPortraitOrientation;
  }
  static resizeGame(e, t) {
    O.changeOrientation(this._isPortraitOrientation ? W.portrait : W.landscape);
    const i = (window.innerWidth - V * t) / 2,
      n = (window.innerHeight - D * t) / 2;
    e.stage.position.set(i, n), e.stage.scale.set(t);
  }
  static resizeUI(e, t, i) {
    const n = this._isPortraitOrientation ? ae : V,
      o = this._isPortraitOrientation ? re : D,
      r = (window.innerHeight - o * i) / 2,
      c = (window.innerWidth - n * i) / 2;
    e.resize({
      width: `${n}px`,
      height: `${o}px`,
      left: `${c}px`,
      top: `${r}px`,
      transform: `scale(${i})`,
    }),
      t.resize({
        width: `${n}px`,
        height: `${o}px`,
        left: `${c}px`,
        top: `${r}px`,
        transform: `scale(${i})`,
      }),
      this.resizeUIElements(e, r, i);
  }
  static resizeUIElements(e, t, i) {
    const n = window.innerHeight / i;
    let o = 0,
      r = 0;
    this._isPortraitOrientation, (o = window.innerHeight * 0.01), (r = 50);
    const c = n - e.bottomBarHeight - t / i - o,
      h = -(t / i) + r;
    e.resizeBottomBar({ top: `${c}px` }), e.resizeTopBar({ top: `${h}px` });
  }
}
S(j, "_isPortraitOrientation", le());
const ce = {
  x: 0,
  y: 0,
  view: {
    sprite: {
      atlasKey: "background",
      startWithAnimation: j.isPortraitOrientation ? "portrait" : "landscape",
      playOnStart: !1,
      isStatic: !1,
    },
    overlaySprite: {
      atlasKey: "background_overlay",
      startWithAnimation: j.isPortraitOrientation ? "portrait" : "landscape",
      playOnStart: !1,
      isStatic: !1,
    },
  },
  model: { textureTypes: { landscape: "landscape", portrait: "portrait" } },
};
class Ne extends B {
  constructor() {
    super(),
      (this._view = new We(ce.view, this)),
      (this._model = new ze(ce.model)),
      (this._controller = new Xe(this._model, this._view)),
      this.pivot.set(0, 0),
      (this.x = V / 2),
      (this.y = D / 2);
  }
  changeOrientation(e) {
    this._controller.changeTextureOrientation(e);
  }
  startOpenAnimation() {
    this._controller.openTween();
  }
  startShakeAnimation() {
    this._controller.shakeTween();
  }
}
class Je {
  constructor(e) {
    (this.config = e),
      (this._landscapeTexture = this.config.textureTypes.landscape),
      (this._portraitTexture = this.config.textureTypes.portrait);
  }
  get landscapeTexture() {
    return this._landscapeTexture;
  }
  get portraitTexture() {
    return this._portraitTexture;
  }
}
class Y extends we {
  constructor(e) {
    const {
        textureKey: t,
        x: i = 0,
        y: n = 0,
        anchorX: o = 0.5,
        anchorY: r = 0.5,
        visible: c = !0,
        scaleX: h = 1,
        scaleY: d = 1,
        angle: p = 0,
        tint: g = 16777215,
        isStatic: y = !0,
        interactive: _ = !1,
        eventMode: x = "none",
      } = e,
      w = M.getImage(t);
    super(w),
      this.anchor.set(o, r),
      this.position.set(i, n),
      (this.scale.x = h),
      (this.scale.y = d),
      (this.angle = p),
      (this.tint = g),
      (this.visible = c),
      (this.filters = null),
      (this.eventMode = x),
      (this.interactiveChildren = _),
      (this.cacheAsBitmap = y);
  }
  changeTexture(e) {
    const t = M.getImage(e);
    t ? (this.texture = t) : console.error(`Image with key "${e}" not found.`);
  }
  setVisible(e) {
    this.visible = e;
  }
}
class qe {
  constructor(e, t) {
    (this.scene = t), (this.config = e), (this.sprite = this.createSprite());
  }
  createSprite() {
    const e = this.config.sprite,
      t = new Y(e);
    return this.scene.addChild(t), t;
  }
}
let Qe = class {
  constructor(e, t, i) {
    (this._scene = i), (this._model = e), (this._view = t);
  }
  get sprite() {
    return this._view.sprite;
  }
  setViewTextureToPortrait() {
    this.sprite.changeTexture(this._model.portraitTexture);
  }
  setViewTextureToLandscape() {
    this.sprite.changeTexture(this._model.landscapeTexture);
  }
  changeTextureOrientation(e) {
    e === W.portrait
      ? (this.setViewTextureToPortrait(),
        (this.sprite.y = -35),
        (this.sprite.scale.x = 0.4),
        (this.sprite.scale.y = 0.4))
      : (this.setViewTextureToLandscape(),
        (this.sprite.y = 10),
        (this.sprite.scale.x = 0.3),
        (this.sprite.scale.y = 0.3));
  }
  openTween() {
    (this._scene.scale.x = 5),
      (this._scene.scale.y = 5),
      u.to(this._scene.scale, {
        x: 1,
        y: 1,
        duration: 1.5,
        ease: "back.out",
        onComplete: () => {},
      });
  }
};
const he = {
  x: 0,
  y: 0,
  view: {
    sprite: {
      textureKey: j.isPortraitOrientation
        ? "game_name_logo_portrait"
        : "game_name_logo_landscape",
      y: j.isPortraitOrientation ? -35 : 10,
      scaleX: j.isPortraitOrientation ? 0.4 : 0.3,
      scaleY: j.isPortraitOrientation ? 0.4 : 0.3,
      isStatic: !1,
    },
  },
  model: {
    textureTypes: {
      landscape: "game_name_logo_landscape",
      portrait: "game_name_logo_portrait",
    },
  },
};
class Ze extends B {
  constructor() {
    super(),
      (this._view = new qe(he.view, this)),
      (this._model = new Je(he.model)),
      (this._controller = new Qe(this._model, this._view, this)),
      this.pivot.set(0, 0),
      (this.x = V / 2),
      (this.y = 36);
  }
  changeOrientation(e) {
    this._controller.changeTextureOrientation(e);
  }
  startOpenAnimation() {
    this._controller.openTween();
  }
}
const ie = class ie {
  static addAudio(e, t) {
    this.audio.set(e, t);
  }
  static getAudio(e) {
    return this.audio.get(e);
  }
};
ie.audio = new Map();
let X = ie;
class v {
  static addAudio(e, t, i) {
    return new Promise((n) => {
      const o = new $e.Howl({
        src: [t],
        loop: i.loop,
        volume: i.volume,
        html5: !1,
        onload: () => n(1),
      });
      (o.defaultVolume = i.volume), X.addAudio(e, o);
    });
  }
  static getAudio(e) {
    return X.getAudio(e);
  }
  static playAudio(e) {
    const t = this.getAudio(e);
    t == null || t.play();
  }
  static stopAudio(e) {
    const t = this.getAudio(e);
    t == null || t.fade(1, 0, 1e3),
      setTimeout(() => {
        t == null || t.stop(), t == null || t.fade(0, 1, 0);
      }, 1e3);
  }
  static offAudio(e) {
    const t = this.getAudio(e);
    t == null || t.fade(t.defaultVolume, 0, 1e3);
  }
  static onAudio(e) {
    const t = this.getAudio(e);
    t == null || t.fade(0, t.defaultVolume, 1e3);
  }
}
class _e extends ge {
  constructor(e) {
    super(), (this.sceneKey = e);
  }
}
const xe = { x: V / 2, y: D / 2 - 60, stopSpinTweenDelay: 2 },
  et = { columns: 5, spaceX: 130 },
  Z = { count: 4, spaceY: 160, positionsY: [0, 160, 320, 480] },
  ee = {
    delayMultiplier: 0.03,
    symbolMoveDownLimitY: 640,
    symbolMoveSpeed: 30,
    offsetY: 160,
    repeat: -1,
  },
  tt = { newY: 160, duration: 0.5, ease: "back.out(1)" },
  de = {
    mask: { x: -78, y: 75, w: 675, h: 487 },
    background: {
      textureKey: "symbols_bg",
      x: 260,
      y: 320,
      scaleX: 0.6,
      scaleY: 0.6,
    },
  };
class st {
  constructor(e) {
    this.scene = e;
  }
}
class it {
  constructor() {
    (this._id = 0),
      (this._isSpinTweenDuringStop = !1),
      (this._symbolMoveDownLimitY = ee.symbolMoveDownLimitY),
      (this._symbolMoveSpeed = ee.symbolMoveSpeed),
      (this._serverSymbolTextureIndexes = []),
      (this._topSymbolY = Z.positionsY[0]),
      (this._stopSpinTweenPromise = new Promise(() => {})),
      (this._spinTween = u.to({}, {})),
      (this._stopSpinTween = u.to({}, {}));
  }
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get spinTween() {
    return this._spinTween;
  }
  set spinTween(e) {
    this._spinTween = e;
  }
  get stopSpinTween() {
    return this._stopSpinTween;
  }
  set stopSpinTween(e) {
    this._stopSpinTween = e;
  }
  get isSpinTweenDuringStop() {
    return this._isSpinTweenDuringStop;
  }
  set isSpinTweenDuringStop(e) {
    this._isSpinTweenDuringStop = e;
  }
  get serverSymbolTextureIndexes() {
    return this._serverSymbolTextureIndexes;
  }
  set serverSymbolTextureIndexes(e) {
    this._serverSymbolTextureIndexes = e;
  }
  get topSymbolY() {
    return this._topSymbolY;
  }
  get symbolMoveDownLimitY() {
    return this._symbolMoveDownLimitY;
  }
  get symbolMoveSpeed() {
    return this._symbolMoveSpeed;
  }
  get stopSpinTweenPromise() {
    return this._stopSpinTweenPromise;
  }
  set stopSpinTweenPromise(e) {
    this._stopSpinTweenPromise = e;
  }
}
class nt {
  constructor(e) {
    (this._id = e),
      (this._height = 0),
      (this._width = 0),
      (this._isBlocked = !1);
  }
  setSize(e, t) {
    (this._width = e), (this._height = t);
  }
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get isBlocked() {
    return this._isBlocked;
  }
  set isBlocked(e) {
    this._isBlocked = e;
  }
}
class ot {
  constructor(e, t) {
    (this.scene = t), (this.config = e), (this.sprite = this.createSprite());
  }
  createSprite() {
    const e = this.config.sprite,
      t = new K(e);
    return this.scene.addChild(t), t;
  }
}
class at {
  constructor(e, t, i) {
    (this._scene = e), (this._model = t), (this._view = i), this.handleEvents();
  }
  set spriteTexture(e) {
    this._view.sprite.changeTexture(e), (this._view.sprite.atlasKey = e);
  }
  setBlockSpriteInteractive(e) {
    this._model.isBlocked = e;
  }
  playSpriteAnimationOnce() {
    this._view.sprite.playAnimationOnce();
  }
  handleEvents() {
    this._view.sprite.on("pointerdown", () => {
      const e = {
        globalPosition: this.globalPosition,
        symbolAtlasKey: this.spriteAtlasKey,
        atlasKey: this.spriteAtlasKey,
      };
      b.onShowSymbolDescribeLabel.dispatch(e);
    });
  }
  get spriteTexture() {
    return this._view.sprite.texture;
  }
  get spriteAtlasKey() {
    return this._view.sprite.atlasKey;
  }
  setTextureAlpha(e) {
    this._view.sprite.alpha = e;
  }
  get globalPosition() {
    return this._view.sprite.toGlobal(new fe(0, 0));
  }
}
let rt = class extends B {
  constructor(e) {
    super(),
      (this.y = e.y),
      (this._view = new ot(e.view, this)),
      (this._model = new nt(e.id)),
      (this._controller = new at(this, this._model, this._view));
  }
  set texture(e) {
    this._controller.spriteTexture = e;
  }
  get texture() {
    return this._controller.spriteTexture;
  }
  playAnimation() {
    this._controller.playSpriteAnimationOnce();
  }
  setAlpha(e) {
    this._controller.setTextureAlpha(e);
  }
};
const lt = {
    x: 0,
    y: 0,
    id: 0,
    view: {
      sprite: {
        atlasKey: "orange",
        startWithAnimation: "move",
        isStatic: !1,
        loop: !1,
        playOnStart: !1,
        scaleX: 0.5,
        scaleY: 0.5,
      },
    },
  },
  z = [
    "orange",
    "lemon",
    "plum",
    "banana",
    "cherry",
    "grapes",
    "watermelon",
    "bar",
    "seven",
    "strawberry",
    "bell",
  ];
class ue {
  static getRandomNumberFloor(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  }
  static getRandomNumber(e, t) {
    return Math.random() * (t - e + 1) + e;
  }
}
class ct {
  constructor(e, t, i, n) {
    (this._scene = e),
      (this._view = t),
      (this._model = i),
      (this._symbolsStorage = n),
      this.createSymbols(),
      this.addToScene();
  }
  addToScene() {
    this._scene.addChild(this._symbolsStorage);
  }
  createSymbols() {
    const { count: e, spaceY: t } = Z;
    for (let i = 0; i < e; i++) {
      let n = t * i;
      const o = { ...lt };
      (o.y = n),
        (o.id = i),
        (o.view.sprite.atlasKey = this.getRandomAtlasType());
      const r = new rt(o);
      this._symbolsStorage.addChildAt(r, i);
    }
  }
  getRandomAtlasType() {
    const e = ue.getRandomNumberFloor(0, z.length - 1);
    return z[e];
  }
  startSpinTween() {
    const { delayMultiplier: e, offsetY: t, repeat: i } = ee,
      n = this._model.id * e;
    this._symbolsStorage.y + t,
      v.playAudio("reel_rotation"),
      (this._model.stopSpinTweenPromise = new Promise((o) => {
        this._model.spinTween = u.to(
          {},
          {
            repeat: i,
            delay: n,
            onUpdate: () => {
              this.handleReelUpdate(o);
            },
          }
        );
      }));
  }
  handleReelUpdate(e) {
    const { children: t } = this._symbolsStorage;
    for (const i of t)
      if (
        ((i.y += this._model.symbolMoveSpeed),
        i.y >= this._model.symbolMoveDownLimitY)
      ) {
        if (
          ((i.y = this._model.topSymbolY),
          this.moveLastSymbolOnTop(),
          this._model.isSpinTweenDuringStop)
        )
          this.updateSymbolTexture(i);
        else {
          this.is50PercentChance() && this.updateSymbolTextureRandomly(i);
          return;
        }
        this.areServerSymbolTexturesImplemented() && this.initStopReelTween(e);
      }
  }
  is50PercentChance() {
    return ue.getRandomNumberFloor(0, 1) === 1;
  }
  initStopReelTween(e) {
    this.updateSymbolsPosition(),
      this._model.spinTween.kill(),
      (this._model.spinTween = null),
      this.addStopReelTween(e),
      v.playAudio("reel_stop");
  }
  addStopReelTween(e) {
    const { newY: t, duration: i, ease: n } = tt;
    this._model.stopSpinTween = u.to(this._symbolsStorage, {
      y: t,
      duration: i,
      ease: n,
      onComplete: () => {
        (this._model.stopSpinTween = null),
          (this._model.isSpinTweenDuringStop = !1),
          e();
      },
    });
  }
  resetReel() {
    (this._symbolsStorage.y = 0),
      this.moveLastSymbolOnTop(),
      this.updateSymbolsPosition();
  }
  areServerSymbolTexturesImplemented() {
    return this._model.serverSymbolTextureIndexes.length === 0;
  }
  updateSymbolTextureRandomly(e) {
    const t = this.getRandomAtlasType();
    e.texture = t;
  }
  updateSymbolTexture(e) {
    const t = this._model.serverSymbolTextureIndexes.pop(),
      i = z[t];
    e.texture = i;
  }
  moveLastSymbolOnTop() {
    let e = this._symbolsStorage.children.pop();
    this._symbolsStorage.children.unshift(e);
  }
  updateSymbolsPosition() {
    for (let e = 0; e < this._symbolsStorage.children.length; e++)
      this._symbolsStorage.children[e].y = Z.positionsY[e];
  }
  async startStopSpinTween(e) {
    (this._model.serverSymbolTextureIndexes = e),
      (this._model.isSpinTweenDuringStop = !0),
      await this._model.stopSpinTweenPromise;
  }
  async handlePlaySymbolAnimation(e) {
    this._symbolsStorage.children.forEach((t, i) => {
      i === e && (t.playAnimation(), t.setAlpha(1));
    });
  }
  resetSymbolsALpha() {
    this._symbolsStorage.children.forEach((e) => {
      e.setAlpha(1);
    });
  }
  setSymbolsAlpha(e) {
    this._symbolsStorage.children.forEach((t) => {
      t.setAlpha(e);
    });
  }
  set id(e) {
    this._model.id = e;
  }
}
class ht extends B {
  constructor() {
    super();
  }
}
class dt extends B {
  constructor(e) {
    super(),
      (this.x = e),
      (this._symbolsStorage = new ht()),
      (this._view = new st(this)),
      (this._model = new it()),
      (this._controller = new ct(
        this,
        this._view,
        this._model,
        this._symbolsStorage
      ));
  }
  playReelAnimation() {
    return this._controller.startSpinTween();
  }
  set id(e) {
    this._controller.id = e;
  }
  async stopReelAnimation(e) {
    await this._controller.startStopSpinTween(e);
  }
  reset() {
    this._controller.resetReel();
  }
  handlePlaySymbolAnimation(e) {
    this._controller.handlePlaySymbolAnimation(e);
  }
  resetSymbolsALpha() {
    this._controller.resetSymbolsALpha();
  }
  setSymbolsAlpha(e) {
    this._controller.setSymbolsAlpha(e);
  }
}
class ut {
  constructor(e, t, i, n, o, r, c, h) {
    (this._scene = e),
      (this._view = t),
      (this._model = i),
      (this._reelsStorage = n),
      (this._matchLine = o),
      (this._matchFrame = r),
      (this._creditsCounter = c),
      (this._describeLabel = h),
      this.createReels(),
      this.setupView();
  }
  setupView() {
    (this._reelsStorage.mask = this._view.symbolsMask),
      this._scene.addChild(this._describeLabel);
  }
  createReels() {
    const { columns: e, spaceX: t } = et;
    for (let i = 0; i < e; i++) {
      let n = t * i;
      const o = new dt(n);
      (o.id = i), this._reelsStorage.addChildAt(o, i);
    }
  }
  startSpinReels() {
    (this._scene.eventMode = "none"),
      (this._model.isRestarted = !1),
      this._reelsStorage.children.forEach((e) => e.playReelAnimation());
  }
  async stopSpinReels(e) {
    const t = [];
    for (let i = 0; i < this._reelsStorage.children.length; i++) {
      const n = this._reelsStorage.children[i],
        o = e[i],
        r = new Promise((c) => {
          setTimeout(async () => {
            await n.stopReelAnimation(o), c();
          }, i * 100);
        });
      t.push(r);
    }
    await Promise.all(t);
  }
  resetReels() {
    (this._model._areMatchesPlaying = !1),
      this._creditsCounter.stopTweens(),
      this._matchLine.stopTween(),
      this._matchLine.hideLines(),
      this.resetReelSymbolsAlpha(),
      this._creditsCounter.hideCreditCount(),
      (this._scene.eventMode = "static"),
      (this._model.isRestarted = !0),
      this._reelsStorage.children.forEach((e) => e.reset());
  }
  async showVerticalMatches(e) {
    for (const t of e) await this._matchFrame.playAnimation(t);
  }
  async showHorizontalMatches(e) {
    const { symbolIndexes: t, lineIndexes: i } = e,
      n = [];
    this.setReelSymbolsAlpha(0.5);
    for (let o = 0; o < i.length && this._model._areMatchesPlaying; o++) {
      this.playReelSymbolsAnimation(o, t), this.playLineTween(o, i);
      const r = this.playLineTween(o, i);
      n.push(r);
    }
    await Promise.all(n), this.resetReelSymbolsAlpha();
  }
  async showHorizontalMatchesAsync(e, t) {
    const { symbolIndexes: i, lineIndexes: n } = e;
    for (; this._model._areMatchesPlaying; ) {
      const o = [];
      for (let r = 0; r < n.length && this._model._areMatchesPlaying; r++) {
        this.setReelSymbolsAlpha(0.5), this.playReelSymbolsAnimation(r, i);
        const c = t[r],
          h = this._creditsCounter.showCreditCount(c),
          d = this.playLineTween(r, n);
        o.push(d, h), await Promise.all(o), this.resetReelSymbolsAlpha();
      }
      await new Promise((r) => {
        setTimeout(r, 1e3);
      });
    }
  }
  async handleShowMatches(e, t, i, n, o) {
    this._model._areMatchesPlaying = !0;
    const r = [];
    if (o) this.showHorizontalMatchesAsync(e, n);
    else {
      v.playAudio("line_match");
      const c = this.showVerticalMatches(t),
        h = this._creditsCounter.startCounter(i),
        d = this.showHorizontalMatches(e);
      r.push(d, h, c), await Promise.all(r);
    }
    this._scene.eventMode = "static";
  }
  async playLineTween(e, t) {
    const i = t[e];
    await this._matchLine.showLine(i);
  }
  playReelSymbolsAnimation(e, t) {
    for (let i = 0; i < t[e].length; i++) {
      let n = this._reelsStorage.children[i],
        o = t[e][i];
      n.handlePlaySymbolAnimation(o);
    }
  }
  resetReelSymbolsAlpha() {
    this._reelsStorage.children.forEach((e) => {
      e.resetSymbolsALpha();
    });
  }
  setReelSymbolsAlpha(e) {
    this._reelsStorage.children.forEach((t) => {
      t.setSymbolsAlpha(e);
    });
  }
  openTween() {
    (this._scene.scale.x = 0.1),
      (this._scene.scale.y = 0.1),
      u.to(this._scene.scale, {
        x: 1,
        y: 1,
        duration: 1.3,
        ease: "back.out",
        onComplete: () => {},
      });
  }
}
class pt extends Oe {
  constructor(e) {
    const {
      x: t = 0,
      y: i = 0,
      w: n = 0,
      h: o = 0,
      color: r = 16777215,
      isStatic: c = !0,
    } = e;
    super(),
      this.beginFill(r),
      this.drawRect(t, i, n, o),
      this.endFill(),
      (this.cacheAsBitmap = c);
  }
}
class mt {
  constructor(e) {
    (this.scene = e),
      (this.background = this.createBackground()),
      (this.symbolsMask = this.createMask());
  }
  createMask() {
    const e = de.mask,
      t = new pt(e);
    return this.scene.addChild(t), t;
  }
  createBackground() {
    const e = de.background,
      t = new Y(e);
    return this.scene.addChild(t), t;
  }
}
class gt {
  constructor() {
    (this._isRestarted = !0), (this._areMatchesPlaying = !1);
  }
  get isRestarted() {
    return this._isRestarted;
  }
  set isRestarted(e) {
    this._isRestarted = e;
  }
  get areMatchesPlaying() {
    return this._areMatchesPlaying;
  }
  set areMatchesPlaying(e) {
    this._areMatchesPlaying = e;
  }
}
class wt extends B {
  constructor(e) {
    super(), e.addChild(this);
  }
}
class ft {
  constructor(e, t, i) {
    (this._scene = e),
      (this._view = t),
      (this._model = i),
      (this.movePromise = null),
      (this.moveTween = null);
  }
  async handleShowLine(e) {
    const t = this._view.lines.getChildAt(e);
    (t.visible = !0),
      await new Promise((i) => {
        (this.movePromise = i),
          (this.moveTween = u.to(t, {
            duration: 1,
            width: t.width + 50,
            repeat: 1,
            yoyo: !0,
            ease: "elastic.inOut(1,0.3)",
            onComplete: () => {
              (t.visible = !1), i(0);
            },
          }));
      });
  }
  hideLines() {
    this._view.lines.children.forEach((e) => {
      e.visible = !1;
    });
  }
  stopTween() {
    this.moveTween && this.moveTween.pause(),
      this.movePromise && this.movePromise();
  }
}
class yt {
  constructor() {}
}
class _t extends we {
  constructor(e) {
    const {
        textureKey: t,
        atlasKey: i,
        x: n = 0,
        y: o = 0,
        anchorX: r = 0.5,
        anchorY: c = 0.5,
        visible: h = !0,
        scaleX: d = 1,
        scaleY: p = 1,
        angle: g = 0,
        tint: y = 16777215,
        isStatic: _ = !0,
        interactive: x = !1,
      } = e,
      w = M.getImage(i).textures[t];
    w
      ? (super(w),
        this.anchor.set(r, c),
        this.position.set(n, o),
        (this.scale.x = d),
        (this.scale.y = p),
        (this.angle = g),
        (this.visible = h),
        (this.atlasKey = i),
        (this.filters = null),
        (this.tint = y),
        (this.interactiveChildren = x),
        (this.cacheAsBitmap = _))
      : (console.error(`Image with key "${t}" not found.`), super(Ee.EMPTY));
  }
  changeTexture(e) {
    const t = M.getImage(this.atlasKey).textures[e];
    this.texture = t;
  }
}
class xt {
  constructor(e) {
    (this.scene = e), (this.lines = this.createLineSprites());
  }
  createLineSprites() {
    const e = new B();
    for (let t = 0; t <= 19; t++) {
      const i = {
          textureKey: `line_${t}`,
          atlasKey: "matchLinesAtlas",
          scaleY: 1.1,
          visible: !1,
          isStatic: !1,
        },
        n = new _t(i);
      e.addChild(n);
    }
    return this.scene.addChild(e), e;
  }
}
class St extends B {
  constructor(e) {
    super(),
      (this.x = 260),
      (this.y = 337),
      e.addChild(this),
      (this._view = new xt(this)),
      (this._model = new yt()),
      (this._controller = new ft(this, this._view, this._model));
  }
  async showLine(e) {
    await this._controller.handleShowLine(e);
  }
  hideLines() {
    this._controller.hideLines();
  }
  stopTween() {
    this._controller.stopTween();
  }
}
let bt = class {
    constructor() {}
  },
  vt = class {
    constructor(e) {
      (this.scene = e),
        (this.shine = this.createShine()),
        (this.creditsText = this.createCreditsText());
    }
    createShine() {
      const e = {
          textureKey: "credits_counter_background",
          isStatic: !1,
          visible: !0,
          scaleX: 0.6,
          scaleY: 0.6,
        },
        t = new Y(e);
      return this.scene.addChild(t), t;
    }
    createCreditsText() {
      const e = { fontName: "Desyrel", fontSize: 100, align: "right" },
        t = new ye("0", e);
      return (
        this.scene.addChild(t),
        (t.visible = !0),
        (t.x = 0),
        (t.y = 0),
        (t.scale.x = 0.5),
        (t.scale.y = 0.5),
        t.anchor.set(0.5, 0.5),
        t.pivot.set(0.5, 0.5),
        t
      );
    }
  },
  Tt = class {
    constructor(e, t, i) {
      (this._scene = e),
        (this._model = t),
        (this._view = i),
        (this._scene.alpha = 0),
        (this.counterPromise = null),
        (this.showCreditsPromise = null),
        (this.countCreditsTween = null),
        (this.scaleUpTween = null),
        (this.scaleDownTween = null);
    }
    async startCounter(e) {
      this.setScale(1.3),
        await new Promise((t) => {
          (this.counterPromise = t),
            this.setViewVisible(!0),
            (this._scene.alpha = 1),
            this.startScaleUpViewTween(),
            this.startCountCreditsTween(e, t),
            v.playAudio("credits_count"),
            v.playAudio("count_loop");
        });
    }
    async showCreditCount(e) {
      this.setScale(0.9),
        (this._scene.alpha = 0),
        this.updateCreditsText(e.toFixed(2)),
        await new Promise((t) => {
          (this.showCreditsPromise = t),
            u.to(this._scene, {
              duration: 0.6,
              alpha: 1,
              ease: "back.out",
              onComplete: () => {
                this.startHideTween(t);
              },
            });
        });
    }
    startHideTween(e) {
      u.to(this._scene, {
        duration: 0.6,
        delay: 1,
        alpha: 0,
        ease: "back.out",
        onComplete: () => {
          e(0);
        },
      });
    }
    hideCreditCount() {
      this.setViewVisible(!1);
    }
    startCountCreditsTween(e, t) {
      const i = { value: 0 };
      this.countCreditsTween = u.to(i, {
        value: e,
        duration: 2,
        ease: "power4.out",
        onUpdate: () => {
          const n = i.value.toFixed(2);
          this.updateCreditsText(n);
        },
        onComplete: () => {
          this.startScaleDownViewTween(t);
        },
      });
    }
    startScaleUpViewTween() {
      this.setScale(0.1),
        (this.scaleUpTween = u.to(this._scene.scale, {
          duration: 0.8,
          x: 1.1,
          y: 1.1,
          ease: "back.out",
        }));
    }
    startScaleDownViewTween(e) {
      this.setScale(1.1),
        (this.scaleDownTween = u.to(this._scene.scale, {
          duration: 0.5,
          x: 0.1,
          y: 0.1,
          ease: "back.in",
          onComplete: () => {
            this.setScale(0.9), (this._scene.alpha = 1), e(0);
          },
        }));
    }
    setViewVisible(e) {
      this._scene.visible = e;
    }
    updateCreditsText(e) {
      this._view.creditsText.text = e;
    }
    setScale(e) {
      (this._scene.scale.x = e), (this._scene.scale.y = e);
    }
    stopTweens() {
      this.counterPromise && this.counterPromise(),
        this.showCreditsPromise && this.showCreditsPromise(),
        this.countCreditsTween && this.countCreditsTween.pause(),
        this.scaleUpTween && this.scaleUpTween.pause(),
        this.scaleDownTween && this.scaleDownTween.pause(),
        (this.countCreditsTween = null),
        (this.scaleUpTween = null),
        (this.scaleDownTween = null);
    }
  },
  Ct = class extends B {
    constructor(e) {
      super(),
        e.addChild(this),
        (this.x = 260),
        (this.y = 319),
        (this._view = new vt(this)),
        (this._model = new bt()),
        (this._controller = new Tt(this, this._model, this._view));
    }
    async startCounter(e) {
      await this._controller.startCounter(e);
    }
    async showCreditCount(e) {
      await this._controller.showCreditCount(e);
    }
    hideCreditCount() {
      this._controller.hideCreditCount();
    }
    stopTweens() {
      this._controller.stopTweens();
    }
  };
class At {
  constructor(e, t, i) {
    (this._scene = e), (this._view = t), (this._model = i);
  }
  async playAnimation(e) {
    (this._view.sprite.visible = !0),
      (this._view.sprite.x = e),
      v.playAudio("fire_frame"),
      await this._view.sprite.playAnimationOnce(),
      (this._view.sprite.visible = !1);
  }
}
class Rt {
  constructor() {}
}
class Pt {
  constructor(e) {
    (this.scene = e), (this.sprite = this.createSprite());
  }
  createSprite() {
    const e = {
        atlasKey: "fire_frame",
        startWithAnimation: "move",
        scaleX: 0.6,
        scaleY: 0.6,
        visible: !1,
        playOnStart: !1,
        loop: !1,
        isStatic: !1,
      },
      t = new K(e);
    return this.scene.addChild(t), t;
  }
}
class Bt extends B {
  constructor(e) {
    super(),
      (this.x = 0),
      (this.y = 356),
      e.addChild(this),
      (this._view = new Pt(this)),
      (this._model = new Rt()),
      (this._controller = new At(this, this._view, this._model));
  }
  async playAnimation(e) {
    await this._controller.playAnimation(e);
  }
}
class Lt {
  constructor() {
    (this._rightTextXPosition = 170), (this._leftTextXPosition = -170);
  }
  set rightTextXPosition(e) {
    this._rightTextXPosition = e;
  }
  get rightTextXPosition() {
    return this._rightTextXPosition;
  }
  set leftTextXPosition(e) {
    this._leftTextXPosition = e;
  }
  get leftTextXPosition() {
    return this._leftTextXPosition;
  }
}
class kt extends Fe {
  constructor(e) {
    const {
      message: t,
      x: i = 0,
      y: n = 0,
      anchorX: o = 0,
      anchorY: r = 0,
      visible: c = !0,
      isStatic: h = !1,
      scaleX: d = 1,
      scaleY: p = 1,
      textConfig: {
        fontFamily: g = "Arial",
        fontSize: y = 55,
        fill: _ = 0,
        wordWrap: x = !1,
        wordWrapWidth: w = 100,
      } = {},
    } = e;
    super(t, {
      fontFamily: g,
      fontSize: y,
      fill: _,
      wordWrap: x,
      wordWrapWidth: w,
    }),
      this.anchor.set(o, r),
      this.position.set(i, n),
      (this.visible = c),
      (this.scale.x = d),
      (this.scale.y = p),
      (this.cacheAsBitmap = h),
      this.updateMessage(t);
  }
  updateMessage(e) {
    this.text = e;
  }
}
class Mt {
  constructor(e) {
    (this.scene = e),
      (this.background = this.createBackground()),
      (this.animatedSprite = this.createSprite()),
      (this.describeText = this.createDescribeText());
  }
  createBackground() {
    const e = {
        textureKey: "symbol_describe_label",
        x: -60,
        y: 0,
        scaleX: 0.5,
        scaleY: 0.5,
        anchorX: 0.5,
        anchorY: 0.5,
      },
      t = new Y(e);
    return this.scene.addChild(t), t;
  }
  createSprite() {
    const e = {
        atlasKey: "orange",
        startWithAnimation: "move",
        isStatic: !1,
        loop: !1,
        playOnStart: !1,
        scaleX: 0.5,
        scaleY: 0.5,
      },
      t = new K(e);
    return this.scene.addChild(t), t;
  }
  createDescribeText() {
    const e = {
        message: "",
        x: -170,
        y: 0,
        anchorX: 0,
        anchorY: 0.5,
        scaleX: 0.5,
        scaleY: 0.5,
        textConfig: {
          fontFamily: "Trebuchet MS",
          fontSize: 50,
          fill: 16777215,
          wordWrap: !0,
          wordWrapWidth: 340,
        },
      },
      t = new kt(e);
    return this.scene.addChild(t), t;
  }
}
const k = {
  orange: {
    type: "orange",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s / 2.5).toFixed(2),
    payout3: (s) => (s / 5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  lemon: {
    type: "lemon",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s / 2.5).toFixed(2),
    payout3: (s) => (s / 5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  plum: {
    type: "plum",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s / 2.5).toFixed(2),
    payout3: (s) => (s / 5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  banana: {
    type: "banana",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s / 2.5).toFixed(2),
    payout3: (s) => (s / 5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  cherry: {
    type: "cherry",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s / 2.5).toFixed(2),
    payout3: (s) => (s / 5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  grapes: {
    type: "grapes",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s / 2.5).toFixed(2),
    payout3: (s) => (s / 5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  watermelon: {
    type: "watermelon",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s / 2.5).toFixed(2),
    payout3: (s) => (s / 5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  bar: {
    type: "bar",
    payout5: (s) => (s * 6).toFixed(2),
    payout4: (s) => (s * 2).toFixed(2),
    payout3: (s) => (s / 2.5).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  seven: {
    type: "seven",
    payout5: (s) => (s * 10).toFixed(2),
    payout4: (s) => (s * 4).toFixed(2),
    payout3: (s) => (s * 1).toFixed(2),
    description: function (s) {
      return ` 5x ${this.payout5(s)}
 4x ${this.payout4(s)}
 3x ${this.payout3(s)}`;
    },
  },
  strawberry: {
    type: "strawberry",
    payout5: (s) => (s * 2).toFixed(2),
    payout4: (s) => (s * 2).toFixed(2),
    payout3: (s) => (s * 2).toFixed(2),
    description: function (s) {
      return ` 3 символа Scatter запускают 8 бесплатных спинов.`;
    },
  },
  bell: {
    type: "bell",
    description: (s) =>
      " Символ Wild заменяет все остальные символы, кроме Scatter и символов ценности",
  },
};
class R {
  static add(e, t) {
    this._refs.set(e, t);
  }
  static get(e) {
    return this._refs.get(e).current;
  }
  static delete(e) {
    this._refs.delete(e);
  }
}
S(R, "_refs", new Map());
class It {
  constructor() {
    this.UI = null;
  }
  create(e) {
    this.UI = e;
  }
  handleVisible(e) {
    this.UI.handleVisible(e);
  }
  update(e) {
    R.get("bottomBar").update(e);
  }
  updateTopBar(e) {
    R.get("topBar").update(e);
  }
  updateBetLabel(e) {
    R.get("bottomBar").updateBetLabel(e);
  }
  resetSpinButton() {
    R.get("middleBar").resetSpinButton();
  }
  calculateAndUpdateBalance() {
    const e = this.betValue;
    R.get("bottomBar").calculateAndUpdateBalance(e);
  }
  updateBalanceValue(e) {
    R.get("bottomBar").updateBalanceValue(e);
  }
  handleSpinButtonBlock(e) {
    R.get("middleBar").handleSpinButtonBlock(e);
  }
  get betValue() {
    return R.get("bottomBar").getBetValue();
  }
  get hasSufficientBalanceForSpin() {
    const e = R.get("bottomBar").getBalanceValue();
    return R.get("bottomBar").hasSufficientBalanceForSpin(e);
  }
}
const P = new It();
class jt {
  constructor(e, t, i) {
    (this._scene = e),
      (this._model = t),
      (this._view = i),
      this.handleEvents(),
      this.bindSignals(),
      this.setupOnStart();
  }
  setupOnStart() {
    this._scene.visible = !1;
  }
  bindSignals() {
    b.onShowSymbolDescribeLabel.add((e) => this.showLabel(e));
  }
  set spriteTexture(e) {
    this._view.animatedSprite.changeTexture(e),
      (this._view.animatedSprite.atlasKey = e);
  }
  playSpriteAnimationOnce() {
    this._view.animatedSprite.playAnimationOnce();
  }
  handleEvents() {
    this._view.animatedSprite.on("pointerout", () => {
      this._scene.visible = !1;
    });
  }
  setTextureAlpha(e) {
    this._view.animatedSprite.alpha = e;
  }
  set setVisible(e) {
    this._scene.visible = e;
  }
  showLabel(e) {
    const { symbolAtlasKey: t, globalPosition: i, atlasKey: n } = e,
      o = this._scene.parent.toLocal(new fe(i.x, i.y));
    (this._view.describeText.text = k[n].description(P.betValue)),
      (this.spriteTexture = t),
      this.playSpriteAnimationOnce(),
      (this.setVisible = !0),
      (this._scene.x = o.x),
      (this._scene.y = o.y),
      this.formatSize(),
      o.x < 260 ? this.setRightSide() : this.setLeftSide();
  }
  hideLabel() {
    this._scene.visible = !1;
  }
  setRightSide() {
    (this._view.background.x = 60),
      (this._view.describeText.x = 170 - this._view.describeText.width);
  }
  setLeftSide() {
    (this._view.background.x = -60), (this._view.describeText.x = -180);
  }
  formatSize() {
    this._view.describeText.height > 120
      ? ((this._view.describeText.scale.x = 0.3),
        (this._view.describeText.scale.y = 0.3))
      : ((this._view.describeText.scale.x = 0.5),
        (this._view.describeText.scale.y = 0.5));
  }
}
class Vt extends B {
  constructor() {
    super(),
      (this._view = new Mt(this)),
      (this._model = new Lt()),
      (this._controller = new jt(this, this._model, this._view));
  }
  set spriteTexture(e) {
    this._controller.spriteTexture = e;
  }
  set setVisible(e) {
    this._controller.setVisible = e;
  }
  playSymbolAnimation() {
    this._controller.playSpriteAnimationOnce();
  }
  show(e) {
    this._controller.showLabel(e);
  }
  hide() {
    this._controller.hideLabel();
  }
  setRightSide() {
    this._controller.setRightSide();
  }
}
class Ot extends B {
  constructor() {
    const { x: e, y: t } = xe;
    super(),
      (this._model = new gt()),
      (this._view = new mt(this)),
      (this._matchLine = new St(this)),
      (this._reelsStorage = new wt(this)),
      (this._matchFrame = new Bt(this)),
      (this._creditsCounter = new Ct(this)),
      (this._describeLabel = new Vt()),
      (this._controller = new ut(
        this,
        this._view,
        this._model,
        this._reelsStorage,
        this._matchLine,
        this._matchFrame,
        this._creditsCounter,
        this._describeLabel
      )),
      this.pivot.set(this.width / 2 - 95, this.height / 2 + 35),
      (this.x = e),
      (this.y = t);
  }
  startSpinning() {
    this._controller.startSpinReels();
  }
  async stopSpinning(e) {
    await this._controller.stopSpinReels(e);
  }
  reset() {
    this._controller.resetReels();
  }
  async showMatches(e, t, i, n, o) {
    await this._controller.handleShowMatches(e, t, i, n, o);
  }
  startOpenAnimation() {
    this._controller.openTween();
  }
  get isRestarted() {
    return this._model._isRestarted;
  }
}
class Et {
  constructor() {}
}
class Ft {
  constructor(e) {
    (this.scene = e),
      (this.shine = this.createShine()),
      (this.creditsText = this.createCreditsText());
  }
  createShine() {
    const e = {
        textureKey: "credits_counter_shine",
        isStatic: !1,
        visible: !1,
        scaleX: 0.1,
        scaleY: 0.1,
      },
      t = new Y(e);
    return this.scene.addChild(t), t;
  }
  createCreditsText() {
    const e = { fontName: "Desyrel", fontSize: 100, align: "right" },
      t = new ye("0", e);
    return (
      this.scene.addChild(t),
      (t.visible = !1),
      (t.x = 0),
      (t.y = 18),
      (t.scale.x = 0.1),
      (t.scale.y = 0.1),
      t.anchor.set(0.5, 0.5),
      t.pivot.set(0.5, 0.5),
      t
    );
  }
}
class $t {
  constructor(e, t, i) {
    (this._scene = e), (this._model = t), (this._view = i);
  }
  async startCounter(e) {
    e != 0 &&
      (await new Promise((t) => {
        this.setViewVisible(!0),
          this.startScaleUpViewTween(),
          this.startCountCreditsTween(e, t),
          v.playAudio("credits_count"),
          v.playAudio("count_loop");
      }));
  }
  startCountCreditsTween(e, t) {
    const i = { value: 0 };
    u.to(i, {
      value: e,
      duration: 2,
      ease: "power4.out",
      onUpdate: () => {
        const n = Math.round(i.value);
        this.updateCreditsText(n);
      },
      onComplete: () => {
        this.startScaleDownViewTween(), t(0);
      },
    });
  }
  startScaleUpViewTween() {
    u.to([this._view.creditsText.scale, this._view.shine.scale], {
      duration: 0.8,
      x: 0.6,
      y: 0.6,
      ease: "back.out",
    });
  }
  startScaleDownViewTween() {
    u.to([this._view.creditsText.scale, this._view.shine.scale], {
      duration: 0.5,
      x: 0.1,
      y: 0.1,
      ease: "back.in",
      onComplete: () => {
        this.setViewVisible(!1);
      },
    });
  }
  setViewVisible(e) {
    (this._view.creditsText.visible = e), (this._view.shine.visible = e);
  }
  updateCreditsText(e) {
    this._view.creditsText.text = e;
  }
}
class Gt extends B {
  constructor() {
    super(),
      (this.x = V / 2),
      (this.y = D / 2 - 63),
      (this._view = new Ft(this)),
      (this._model = new Et()),
      (this._controller = new $t(this, this._model, this._view));
  }
  async startCounter(e) {
    await this._controller.startCounter(e);
  }
}
class Dt {
  constructor(e) {
    (this.config = e),
      (this._landscapeTexture = this.config.textureTypes.landscape),
      (this._portraitTexture = this.config.textureTypes.portrait);
  }
  get landscapeTexture() {
    return this._landscapeTexture;
  }
  get portraitTexture() {
    return this._portraitTexture;
  }
}
class Ut {
  constructor(e, t) {
    (this.scene = t), (this.config = e), (this.sprite = this.createSprite());
  }
  createSprite() {
    const e = this.config.sprite,
      t = new Y(e);
    return this.scene.addChild(t), t;
  }
}
class Ht {
  constructor(e, t, i) {
    (this._scene = i), (this._model = e), (this._view = t);
  }
  get sprite() {
    return this._view.sprite;
  }
  openTween() {
    (this._scene.scale.x = 0.1),
      (this._scene.scale.y = 0.1),
      (this._view.sprite.visible = !0),
      u.to(this._scene.scale, {
        x: 1,
        y: 1,
        duration: 0.5,
        ease: "back.out",
        onComplete: () => {},
      });
  }
  closeTween() {
    u.to(this._scene.scale, {
      x: 0.1,
      y: 0.1,
      duration: 0.6,
      ease: "back.in",
      onComplete: () => {
        this._view.sprite.visible = !1;
      },
    });
  }
}
const pe = {
  x: 0,
  y: 0,
  view: { sprite: { textureKey: "dark_screen", isStatic: !0, visible: !1 } },
  model: { textureTypes: { landscape: "", portrait: "" } },
};
class Yt extends B {
  constructor() {
    super(),
      (this._view = new Ut(pe.view, this)),
      (this._model = new Dt(pe.model)),
      (this._controller = new Ht(this._model, this._view, this)),
      this.pivot.set(0, 0),
      (this.x = V / 2),
      (this.y = 300);
  }
  startOpenAnimation() {
    this._controller.openTween();
  }
  startCloseAnimation() {
    this._controller.closeTween();
  }
}
class Kt extends _e {
  constructor() {
    super("Game");
  }
  init() {
    (this.stopSpinTimeout = u.delayedCall),
      (this.background = new Ne()),
      (this.machine = new Ot()),
      (this.gameLogo = new Ze()),
      (this.darkScreen = new Yt()),
      (this.creditsCounter = new Gt()),
      this.addChild(this.background),
      this.addChild(this.machine),
      this.addChild(this.gameLogo),
      this.addChild(this.darkScreen),
      this.addChild(this.creditsCounter),
      this.startOpenAnimation(),
      v.playAudio("background");
  }
  startOpenAnimation() {
    this.background.startOpenAnimation(),
      this.machine.startOpenAnimation(),
      this.gameLogo.startOpenAnimation();
  }
  handleSpinButtonClick(e) {
    if (e === "first") {
      if (!P.hasSufficientBalanceForSpin) {
        P.resetSpinButton();
        return;
      }
      this.machine.isRestarted || this.machine.reset(),
        this.machine.startSpinning(),
        P.calculateAndUpdateBalance();
      const t = { bet: P.betValue, authToken: "offline" };
      b.spinButtonClick.dispatch(t);
    } else this.stopSpinTimeout.time(0);
  }
  changeOrientation(e) {
    this.background.changeOrientation(e), this.gameLogo.changeOrientation(e);
  }
  async updateGameState(e) {
    const {
      creditsBalance: t,
      symbolTextureIndexes: i,
      horizontalMatches: n,
      verticalMatches: o,
      totalCreditsWin: r,
      matchLineCredits: c,
    } = e;
    if (
      (await new Promise((h) => {
        this.stopSpinTimeout = u.delayedCall(
          xe.stopSpinTweenDelay,
          async () => {
            await this.machine.stopSpinning(i), h();
          }
        );
      }),
      r)
    ) {
      await this.machine.showMatches(n, o, r, c, !1),
        P.updateBalanceValue(t),
        this.machine.showMatches(n, o, r, c, !0),
        P.resetSpinButton();
      return;
    }
    this.machine.reset(), P.resetSpinButton();
  }
  handleSounds(e) {
    e === !0 ? v.offAudio("background") : v.onAudio("background");
  }
}
const zt = new Kt(),
  Wt = {
    path: "music",
    key: "background",
    settings: { loop: !0, volume: 0.5 },
  },
  Xt = {
    path: "reel",
    key: "reel_rotation",
    settings: { loop: !1, volume: 1 },
  },
  Nt = { path: "reel", key: "reel_stop", settings: { loop: !1, volume: 1 } },
  Jt = {
    path: "other",
    key: "button_click",
    settings: { loop: !1, volume: 1 },
  },
  qt = { path: "other", key: "fire_frame", settings: { loop: !1, volume: 1 } },
  Qt = {
    path: "other",
    key: "credits_count",
    settings: { loop: !1, volume: 0.6 },
  },
  Zt = {
    path: "other",
    key: "line_match",
    settings: { loop: !1, volume: 0.6 },
  },
  es = { path: "other", key: "count_loop", settings: { loop: !1, volume: 1 } },
  ts = {
    background: Wt,
    reelRotation: Xt,
    reelStop: Nt,
    buttonClick: Jt,
    fireFrame: qt,
    creditsCount: Qt,
    lineMatch: Zt,
    countLoop: es,
  },
  ss = {
    images: { _path: "assets/images/", extension: ".png" },
    json: { _path: "assets/images/", extension: ".json" },
    audio: { _path: "assets/audio/", extension: ".ogg" },
  };
class is {
  constructor() {
    S(this, "handleLoadingGameVisible", (e) => {
      this.pages.handleLoadingGameVisible(e);
    });
    S(this, "handleLobbyPageVisible", (e) => {
      this.pages.handleLobbyPageVisible(e);
    });
    S(this, "handleRoomsPageVisible", (e) => {
      this.pages.handleRoomsPageVisible(e);
    });
    S(this, "setPointerEventActive", (e) => {
      this.pages.setPointerEventActive(e);
    });
    S(this, "handleGameInformationVisible", (e) => {
      this.pages.handleGameInformationVisible(e),
        e || this.setPointerEventActive(!1);
    });
    this.pages = null;
  }
  create(e) {
    this.pages = e;
  }
  handleLoadingPageVisible(e) {
    this.pages.handleLoadingPageVisible(e);
  }
  handleLoginPageVisible(e) {
    this.pages.handleLoginPageVisible(e);
  }
}
const H = new is();
class ns extends _e {
  constructor() {
    super("Preload");
  }
  async init() {
    await this.loadAllAudio(),
      await this.loadResponsiveImages(),
      await this.loadSymbolsAtlases(),
      await this.loadMatchFrames(),
      await this.loadBackgroundFrames(),
      await this.loadMatchLineImages(),
      await this.loadFonts(),
      this.handleStartNextScene();
  }
  async loadAllAudio() {
    await Object.entries(ts).forEach(async ([e, t]) => {
      await this.loadAudio(t);
    });
  }
  async loadAudio({ path: e, key: t, settings: i }) {
    const { _path: n, extension: o } = ss.audio;
    let r = n + e + "/" + t + o;
    await v.addAudio(t, r, i);
  }
  async loadFonts() {
    await E.load("https://pixijs.com/assets/bitmap-font/desyrel.xml");
  }
  async loadResponsiveImages() {
    const e = [
      "symbols_bg",
      "credits_counter_shine",
      "symbol_describe_label",
      "game_name_logo_landscape",
      "game_name_logo_portrait",
      "dark_screen",
      "feather",
      "credits_counter_background",
    ];
    let t = e.length;
    for (let i = 0; i < t; i++) {
      let n = e[i],
        o = await E.load(`assets/images/${n}.png`);
      M.addImage(n, o);
    }
  }
  async loadSymbolsAtlases() {
    const e = z;
    let t = e.length;
    for (let i = 0; i < t; i++) {
      let n = e[i],
        o = await E.load(`assets/images/game/symbols/${n}.json`);
      M.addImage(n, o);
    }
  }
  async loadMatchFrames() {
    const e = ["fire_frame"];
    let t = e.length;
    for (let i = 0; i < t; i++) {
      let n = e[i],
        o = await E.load(`assets/images/game/matching/frames/${n}.json`);
      M.addImage(n, o);
    }
  }
  async loadBackgroundFrames() {
    const e = ["background", "background_overlay"];
    let t = e.length;
    for (let i = 0; i < t; i++) {
      let n = e[i],
        o = await E.load(`assets/images/game/background/${n}.json`);
      M.addImage(n, o);
    }
  }
  async loadMatchLineImages() {
    const e = "matchLinesAtlas";
    let t = await E.load(`assets/images/game/matching/lines/${e}.json`);
    M.addImage(e, t);
  }
  handleStartNextScene() {
    H.handleLoginPageVisible(!0);
  }
}
const os = new ns(),
  as = (s) => {
    te.add(s),
      G.addScene([os, zt]),
      G.autoStartFirstScene(),
      (globalThis.__PIXI_APP__ = s);
  },
  rs = C.forwardRef((s, e) => {
    const t = l.useRef(null);
    return a.jsx("div", {
      id: "loading-screen",
      ref: t,
      children: a.jsx("img", {
        id: "loading-icon",
        src: "\\Slot-Machine\\assets\\images\\loading_game_anim.svg",
        alt: "Loading_icon",
      }),
    });
  }); //! ////////////////////////////////////////////////////////////////////////////////
let ls = "https://web-production-87f0.up.railway.app/";
class cs {
  constructor() {
    (this.client = null), this.bindSignals();
  }
  async connectWithServer() {
    this.client = await Ge(`${ls}`);
  }
  setupServerListeners() {
    this.client.on("userState", (e) => {
      b.onPlayerAndGameState.dispatch(e);
    }),
      this.client.on("updateGameData", (e) => {
        b.onUpdateGameData.dispatch(e);
      });
  }
  spinButtonClick(e) {
    this.client.emit("spinAction", e);
  }
  getPlayerAndGameState(e) {
    this.client.emit("getUserState", e);
  }
  bindSignals() {
    b.spinButtonClick.add((e) => this.spinButtonClick(e)),
      b.getPlayerAndGameState.add((e) => this.getPlayerAndGameState(e));
  }
}
const me = new cs(),
  hs = C.forwardRef((s, e) => {
    const [t, i] = l.useState(!1);
    l.useState(!1),
      l.useRef(null),
      t || o(),
      l.useEffect(() => {
        n();
      }, []);
    async function n() {
      await me.connectWithServer(), me.setupServerListeners();
      const c = De.get("authToken");
      b.getPlayerAndGameState.dispatch(c);
    }
    function o() {
      i(!0),
        b.onPlayerAndGameState.add((c) => {
          O.startGame(),
            H.handleLoadingGameVisible(!1),
            P.handleVisible(!0),
            H.setPointerEventActive(!1),
            P.update(c),
            r();
        });
    }
    function r() {
      b.onPlayerAndGameState.detachAll();
    }
    return a.jsx("div", { id: "login-container" });
  }),
  ds = C.forwardRef((s, e) => {
    const t = l.useRef(null);
    return a.jsxs("div", {
      id: "loading-game",
      ref: t,
      children: [
        a.jsx("img", {
          id: "logo",
          src: "\\Slot-Machine\\assets\\images\\game_logo.svg",
          alt: "Loading_logo",
        }),
        a.jsx("img", {
          id: "loading-icon",
          src: "\\Slot-Machine\\assets\\images\\loading_game_anim.svg",
          alt: "Loading_icon",
        }),
      ],
    });
  }),
  U = C.forwardRef((s, e) => {
    const [t, i] = l.useState(!1),
      [n, o] = l.useState(!1),
      r = s.svg ? ".svg" : ".png",
      c = "\\Slot-Machine\\assets\\images\\UI\\buttons\\",
      h = c + s.default + r,
      d = c + s.hover + r,
      p = c + s.push + r,
      g = () => {
        i(!0);
      },
      y = () => {
        i(!1);
      },
      _ = () => {
        s.onClick();
      },
      x = () => {
        o(!0);
      },
      w = () => {
        o(!1);
      },
      L = n ? p : t ? d : h;
    return a.jsx("div", {
      id: "texture-button",
      children: a.jsx("img", {
        id: t ? "enlarged" : "default",
        onClick: _,
        src: L,
        onMouseEnter: g,
        onMouseLeave: y,
        onMouseDown: x,
        onMouseUp: w,
        alt: "button",
      }),
    });
  }),
  I = C.forwardRef((s, e) => {
    const i =
        "\\Slot-Machine\\assets\\images\\UI\\symbols\\" + s.textureKey + ".png",
      n = l.useRef(null),
      o = s.config,
      [r, c] = l.useState(),
      [h, d] = l.useState(),
      [p, g] = l.useState();
    return (
      l.useEffect(() => {
        c(o.payout5(P.betValue)),
          d(o.payout4(P.betValue)),
          g(o.payout3(P.betValue));
      }, []),
      l.useImperativeHandle(e, () => ({})),
      a.jsx("div", {
        id: "symbol-describe-container",
        ref: n,
        children: a.jsxs("div", {
          id: "symbol-layout",
          children: [
            a.jsx("img", { id: "symbol-image", src: i, alt: "pay_lines" }),
            a.jsxs("ul", {
              children: [
                a.jsxs("li", {
                  id: "symbol-description",
                  children: [
                    a.jsx("span", { children: "5" }),
                    a.jsx("div", { children: r }),
                  ],
                }),
                a.jsxs("li", {
                  id: "symbol-description",
                  children: [
                    a.jsx("span", { children: "4" }),
                    a.jsx("div", { children: h }),
                  ],
                }),
                a.jsxs("li", {
                  id: "symbol-description",
                  children: [
                    a.jsx("span", { children: "3" }),
                    a.jsx("div", { children: p }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  }),
  us = C.forwardRef((s, e) => {
    const t = l.useRef(null);
    l.useEffect(() => {
      i();
    }, []);
    const i = () => {
        u.fromTo(
          t.current,
          { scale: 0, x: "+=300", y: "+=300" },
          {
            scale: 1,
            ease: "power1.out",
            x: "-=300",
            y: "-=300",
            duration: 0.3,
          }
        );
      },
      n = () => {
        u.fromTo(
          t.current,
          { scale: 1 },
          {
            scale: 0.1,
            ease: "back.in",
            x: "+=300",
            y: "+=300",
            duration: 0.3,
            onComplete: () => {
              H.handleGameInformationVisible(!1);
            },
          }
        );
      };
    return (
      l.useImperativeHandle(e, () => ({ closeTween: n })),
      a.jsx("div", {
        id: "game-information-container",
        ref: t,
        children: a.jsxs("div", {
          id: "game-information-wrapper",
          children: [
            a.jsx("div", {
              id: "game-information-navigation-bar-wrapper",
              children: a.jsxs("div", {
                id: "game-information-navigation-bar",
                children: [
                  a.jsx("div", {
                    id: "title",
                    children: a.jsx("h1", { children: "Информация об игре" }),
                  }),
                  a.jsx(U, {
                    onClick: n,
                    default: "close_button",
                    hover: "close_button",
                    push: "close_button_push",
                    svg: "true",
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              id: "game-information-context-wrapper",
              children: a.jsx("div", {
                id: "game-information-context",
                children: a.jsxs("div", {
                  id: "context",
                  children: [
                    a.jsxs("div", {
                      id: "section",
                      children: [
                        a.jsx("h1", {
                          id: "title",
                          children: "ГЛАВНЫЕ БЕСПЛАТНЫЕ СПИНЫ",
                        }),
                        a.jsxs("div", {
                          id: "scatter-context",
                          children: [
                            a.jsx(I, {
                              textureKey: "strawberry",
                              config: k.strawberry,
                            }),
                            a.jsx("h1", {
                              id: "describe",
                              children: k.strawberry.description(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      id: "section",
                      children: [
                        a.jsx("h1", { id: "title", children: "WILD" }),
                        a.jsxs("div", {
                          id: "wild-context",
                          children: [
                            a.jsx("img", {
                              id: "symbol-image",
                              src: "\\Slot-Machine\\assets\\images\\UI\\symbols\\bell.png",
                              alt: "pay_lines",
                            }),
                            a.jsx("h1", {
                              id: "describe",
                              children: k.bell.description(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      id: "section",
                      children: [
                        a.jsx("h1", { id: "title", children: "ГЛАВНЫЕ" }),
                        a.jsxs("div", {
                          id: "symbols-grid",
                          children: [
                            a.jsx(I, { textureKey: "bar", config: k.bar }),
                            a.jsx(I, { textureKey: "seven", config: k.seven }),
                            a.jsx(I, {
                              textureKey: "watermelon",
                              config: k.watermelon,
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      id: "section",
                      children: [
                        a.jsx("h1", { id: "title", children: "ВТОРОСТЕПЕННЫЕ" }),
                        a.jsxs("div", {
                          id: "symbols-grid",
                          children: [
                            a.jsx(I, {
                              textureKey: "banana",
                              config: k.banana,
                            }),
                            a.jsx(I, {
                              textureKey: "cherry",
                              config: k.cherry,
                            }),
                            a.jsx(I, {
                              textureKey: "grapes",
                              config: k.grapes,
                            }),
                            a.jsx(I, { textureKey: "lemon", config: k.lemon }),
                            a.jsx(I, {
                              textureKey: "orange",
                              config: k.orange,
                            }),
                            a.jsx(I, { textureKey: "plum", config: k.plum }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      id: "section",
                      children: [
                        a.jsx("h1", { id: "title", children: "ЛИНИИ ВЫПЛАТ" }),
                        a.jsx("img", {
                          id: "pay-lines-image",
                          src: "\\Slot-Machine\\assets\\images\\pay_lines.svg",
                          alt: "pay_lines",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      })
    );
  });
C.forwardRef((s, e) => {
  const t = l.useRef(null);
  return a.jsx("div", {
    id: "background-container",
    ref: t,
    children: a.jsx("img", {
      id: "background-image",
      src: "\\Slot-Machine\\assets\\images\\loading_background.png",
      alt: "Loading_icon",
    }),
  });
});
const ps = C.forwardRef((s, e) => {
    const [t, i] = l.useState({
        width: "0px",
        height: "0px",
        left: "0px",
        top: "0px",
        transform: "none",
        display: "none",
      }),
      [n, o] = l.useState(!0),
      [r, c] = l.useState(!1),
      [h, d] = l.useState(!1),
      [p, g] = l.useState(!0),
      [y, _] = l.useState(!1),
      x = l.useRef(null),
      w = l.useRef(null),
      L = l.useRef(null),
      f = l.useRef(null),
      m = (A) => {
        c(A);
      },
      T = async (A) => {
        _(A), ne(!0);
      },
      N = (A) => {
        d(A);
      },
      J = (A) => {
        g(A);
      },
      q = (A) => {
        A === !1 && lobbyScreenRef.current.removeListeners(),
          setLobbyScreenVisible(A);
      },
      Se = (A) => {
        i(A);
      },
      ne = (A) => {
        o(A);
      };
    l.useImperativeHandle(e, () => ({
      handleLoadingPageVisible: m,
      handleLoginPageVisible: N,
      handleLoadingGameVisible: J,
      handleLobbyPageVisible: q,
      setPointerEventActive: ne,
      handleGameInformationVisible: T,
      resize: Se,
    }));
    const {
        width: be,
        height: ve,
        left: Te,
        top: Ce,
        transform: Ae,
        display: Re,
      } = t,
      Pe = {
        width: be,
        height: ve,
        left: Te,
        top: Ce,
        transform: Ae,
        display: Re,
      };
    return a.jsxs("div", {
      id: n === !0 ? "pages" : "pages-not-active",
      ref: e,
      style: Pe,
      children: [
        p && a.jsx(ds, { ref: L }),
        h && a.jsx(hs, { ref: w }),
        r && a.jsx(rs, { ref: x }),
        y && a.jsx(us, { ref: f }),
      ],
    });
  }),
  ms = C.forwardRef((s, e) => {
    const [t, i] = l.useState([]),
      [n, o] = l.useState(0),
      [r, c] = l.useState(null),
      h = l.useRef(null),
      d = l.useRef(null),
      p = (m) => {
        const { betSteps: T } = m;
        i(T), o(T[4]);
      };
    l.useEffect(() => {}, []);
    const g = (m) => m - n >= 0,
      y = () => n,
      _ = () => {
        const m = w("down"),
          T = i[0];
        m !== T && (v.playAudio("button_click"), o(m), L());
      },
      x = () => {
        const m = w("up"),
          T = i[i.length - 1];
        m !== T && (v.playAudio("button_click"), o(m), L());
      },
      w = (m) => {
        let T = t.indexOf(n);
        return m === "up" ? T++ : T--, t[T];
      },
      L = () => {
        r && r.pause(), u.to(d.current, { scale: 1, duration: 0 });
        const m = f();
        c(m);
      },
      f = () =>
        u.to(d.current, { scale: 1.1, duration: 0.1, yoyo: !0, repeat: 1 });
    return (
      l.useImperativeHandle(e, () => ({
        update: p,
        hasSufficientBalance: g,
        getBetValue: y,
      })),
      a.jsx("div", {
        id: "bet-label-container",
        ref: h,
        children: a.jsxs("div", {
          id: "total-bet-container",
          children: [
            a.jsx("div", {
              id: "button-down-container",
              children: a.jsx(U, {
                onClick: _,
                default: "bet_down_button",
                hover: "bet_down_button_hover",
                push: "bet_down_button_push",
                svg: "true",
              }),
            }),
            a.jsx("div", {
              id: "total-bet",
              children: a.jsxs("div", {
                id: "total-bet-wrapper",
                ref: d,
                children: [
                  a.jsx("h1", { id: "title", children: "Ставка" }),
                  a.jsxs("h1", { id: "value", children: [n, "★"] }),
                ],
              }),
            }),
            a.jsx("div", {
              id: "button-up-container",
              children: a.jsx(U, {
                onClick: x,
                default: "bet_up_button",
                hover: "bet_up_button_hover",
                push: "bet_up_button_push",
                svg: "true",
              }),
            }),
          ],
        }),
      })
    );
  }),
  gs = C.forwardRef((s, e) => {
    const [t, i] = l.useState(!1),
      [n, o] = l.useState(!1),
      [r, c] = l.useState(!1),
      h = s.svg ? ".svg" : ".png",
      d = "\\Slot-Machine\\assets\\images\\UI\\buttons\\",
      p = d + s.default + h,
      g = d + s.hover + h,
      y = d + s.push + h,
      _ = () => {
        T() || i(!0);
      },
      x = () => {
        T() || i(!1);
      },
      w = () => {},
      L = () => {
        if (!r) {
          if ((v.playAudio("button_click"), n)) {
            c(!0),
              O.handleSpinButtonClick("second"),
              v.stopAudio("reel_rotation");
            return;
          }
          o(!0), O.handleSpinButtonClick("first");
        }
      },
      f = () => {},
      m = (q) => {
        c(q);
      },
      T = () => r || n,
      N = () => {
        i(!1), o(!1), c(!1);
      };
    l.useImperativeHandle(e, () => ({ reset: N, block: m }));
    const J = n ? y : t ? g : p;
    return a.jsx("div", {
      id: "spin-button",
      children: a.jsx("img", {
        id: t ? "enlarged" : "default",
        onClick: w,
        src: J,
        onMouseEnter: _,
        onMouseLeave: x,
        onMouseDown: L,
        onMouseUp: f,
        alt: "button",
      }),
    });
  }),
  ws = C.forwardRef((s, e) => {
    const [t, i] = l.useState(0),
      n = (c) => {
        i(c);
      },
      o = () => t,
      r = (c) => {
        const h = t - c;
        i(h);
      };
    return (
      l.useImperativeHandle(e, () => ({
        update: n,
        getValue: o,
        calculateAndUpdateBalance: r,
      })),
      a.jsxs("div", {
        id: "balance-container",
        children: [
          a.jsx("h1", { id: "title", children: "Баланс" }),
          a.jsxs("h1", { id: "value", children: [t.toFixed(2), "★"] }),
        ],
      })
    );
  }),
  fs = C.forwardRef((s, e) => {
    const [t, i] = l.useState(!1);
    l.useEffect(() => {}, []);
    const n = () => {
        i(!t), O.handleSounds(!t);
      },
      o = () => {
        H.handleGameInformationVisible(!0);
      };
    return (
      l.useImperativeHandle(e, () => ({})),
      a.jsxs("div", {
        id: "options-container",
        children: [
          a.jsx(U, {
            onClick: n,
            default: t ? "sound_off_button" : "sound_on_button",
            hover: t ? "sound_off_button" : "sound_on_button",
            push: t ? "sound_off_button" : "sound_on_button",
            svg: "true",
          }),
          a.jsx(U, {
            onClick: o,
            default: "information_button",
            hover: "information_button",
            push: "information_button",
            svg: "true",
          }),
          a.jsx(U, {
            onClick: () => {},
            default: "hamburger_button",
            hover: "hamburger_button",
            push: "hamburger_button",
            svg: "true",
          }),
        ],
      })
    );
  }),
  ys = C.forwardRef((s, e) => {
    const [t, i] = l.useState({ bottom: "0px", height: 100 }),
      n = l.useRef(null),
      o = l.useRef(null),
      r = l.useRef(null),
      c = (f) => {
        o.current.update(f), r.current.update(f.credits);
      },
      h = (f) => {
        r.current.update(f);
      },
      d = () => r.current.getValue(),
      p = () => o.current.getBetValue(),
      g = (f) => o.current.hasSufficientBalance(f),
      y = (f) => r.current.calculateAndUpdateBalance(f);
    l.useEffect(
      () => (
        window.addEventListener("resize", L),
        () => window.removeEventListener("resize", L)
      ),
      []
    );
    const _ = (f) => {
        i((m) => ({ ...m, ...f }));
      },
      x = () => t.height,
      w = () => {
        u.fromTo(
          n.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 1 }
        );
      },
      L = () => {};
    return (
      l.useImperativeHandle(e, () => ({
        resize: _,
        getHeight: x,
        startOpenTween: w,
        hasSufficientBalanceForSpin: g,
        calculateAndUpdateBalance: y,
        getBetValue: p,
        updateBalanceValue: h,
        update: c,
        getBalanceValue: d,
      })),
      a.jsxs("div", {
        id: "bottom-bar",
        style: t,
        ref: n,
        children: [
          a.jsx("div", {
            id: "separate-container",
            children: a.jsx(ws, { ref: r }),
          }),
          a.jsx("div", {
            id: "separate-container",
            children: a.jsx(ms, { ref: o }),
          }),
          a.jsx("div", { id: "separate-container", children: a.jsx(fs, {}) }),
        ],
      })
    );
  }),
  _s = C.forwardRef((s, e) => {
    l.useState(!1);
    const [t, i] = l.useState({}),
      n = l.useRef(null);
    l.useEffect(
      () => (
        window.addEventListener("resize", o),
        () => window.removeEventListener("resize", o)
      ),
      []
    );
    const o = () => {},
      r = () => {
        u.fromTo(
          n.current,
          { scale: 0, x: "-=1000" },
          { scale: 1, x: "+=1000", ease: "back.out", duration: 0.6 }
        );
      },
      c = (d) => {
        i((p) => ({ ...p, ...d }));
      },
      h = (d) => {};
    return (
      l.useImperativeHandle(e, () => ({
        resize: c,
        startOpenTween: r,
        update: h,
      })),
      a.jsx("div", { id: "top-bar", style: t, ref: n })
    );
  }),
  xs = l.forwardRef((s, e) => {
    const t = l.useRef(null),
      i = l.useRef(null),
      n = (h) => {},
      o = () => {
        u.fromTo(
          i.current,
          { scale: 0 },
          { scale: 1, ease: "back.out", duration: 1 }
        );
      },
      r = (h) => t.current.block(h),
      c = () => t.current.reset();
    return (
      l.useEffect(() => {}, []),
      l.useImperativeHandle(e, () => ({
        update: n,
        handleSpinButtonBlock: r,
        resetSpinButton: c,
        startOpenTween: o,
      })),
      a.jsxs("div", {
        id: "middle-bar",
        ref: i,
        children: [
          a.jsx("div", { id: "free-spins-container" }),
          a.jsx("div", {
            id: "spin-button-container",
            children: a.jsx(gs, {
              ref: t,
              default: "spin_button",
              hover: "spin_button_hover",
              push: "spin_button_push",
              svg: "true",
            }),
          }),
        ],
      })
    );
  });
class Ss extends l.Component {
  constructor(e) {
    super(e),
      (this.state = {
        width: "0px",
        height: "0px",
        left: "0px",
        top: "0px",
        transform: "none",
        display: "none",
      }),
      (this.topBarRef = l.createRef()),
      (this.bottomBarRef = l.createRef()),
      (this.middleBarRef = l.createRef()),
      R.add("bottomBar", this.bottomBarRef),
      R.add("middleBar", this.middleBarRef),
      R.add("topBar", this.topBarRef);
  }
  handleVisible(e) {
    e === !0
      ? this.setState({ display: "block" })
      : this.setState({ display: "none" }),
      this.middleBarRef.current.startOpenTween(),
      this.topBarRef.current.startOpenTween(),
      this.bottomBarRef.current.startOpenTween();
  }
  resize(e) {
    this.setState(e);
  }
  resizeBottomBar(e) {
    this.bottomBarRef.current.resize(e);
  }
  resizeTopBar(e) {
    this.topBarRef.current.resize(e);
  }
  get bottomBarHeight() {
    return this.bottomBarRef.current.getHeight();
  }
  render() {
    const {
        width: e,
        height: t,
        left: i,
        top: n,
        transform: o,
        display: r,
      } = this.state,
      c = { width: e, height: t, left: i, top: n, transform: o, display: r };
    return a.jsxs("div", {
      id: "UI",
      ref: this.props.forwardedRef,
      style: c,
      children: [
        a.jsx(_s, { ref: this.topBarRef }),
        a.jsx(ys, { ref: this.bottomBarRef }),
        a.jsx(xs, { ref: this.middleBarRef }),
      ],
    });
  }
}
const bs = C.forwardRef((s, e) => a.jsx(Ss, { ref: e, ...s }));
function vs() {
  const s = l.useRef(),
    e = l.useRef(null),
    t = l.useRef(null);
  return (
    l.useEffect(() => {
      const i = s.current,
        n = e.current,
        o = t.current;
      as(i),
        P.create(n),
        H.create(o),
        j.resizeScreen(n, i, o),
        window.addEventListener("resize", () => j.resizeScreen(n, i, o));
    }, []),
    a.jsxs("div", {
      id: "app",
      children: [
        a.jsx(Ke, { ref: s }),
        a.jsx(bs, { ref: e }),
        a.jsx(ps, { ref: t }),
      ],
    })
  );
}
ke.createRoot(document.getElementById("root")).render(a.jsx(vs, {}));
