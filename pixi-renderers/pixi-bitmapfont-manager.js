var gdjs;(function(a){const n=new a.Logger("Bitmap text"),l="GDJS-DEFAULT-BITMAP-FONT",d=5,p=(o,t)=>{const e=o.font;return o.font=t,PIXI.BitmapFont.available[t]=o,delete PIXI.BitmapFont.available[e],PIXI.BitmapFont.available[t]},m=["bitmapFont"];class c{constructor(t,e){this._pixiBitmapFontsInUse={};this._pixiBitmapFontsToUninstall=[];this._loadedFontsData=new a.ResourceCache;this._defaultSlugFontName=null;this._imageManager=e,this._resourceLoader=t}getResourceKinds(){return m}getDefaultBitmapFont(){if(this._defaultSlugFontName!==null)return PIXI.BitmapFont.available[this._defaultSlugFontName];const t="Arial",e=new PIXI.TextStyle({fontFamily:t,fontSize:20,padding:5,align:"left",fill:"#ffffff",wordWrap:!0,lineHeight:20}),i=p(PIXI.BitmapFont.from(t,e,{chars:[[" ","~"]]}),l);return this._defaultSlugFontName=i.font,i}_markBitmapFontAsUsed(t){this._pixiBitmapFontsInUse[t]=this._pixiBitmapFontsInUse[t]||{objectsUsingTheFont:0},this._pixiBitmapFontsInUse[t].objectsUsingTheFont++;for(let e=0;e<this._pixiBitmapFontsToUninstall.length;)this._pixiBitmapFontsToUninstall[e]===t?this._pixiBitmapFontsToUninstall.splice(e,1):e++}releaseBitmapFont(t){if(t!==l){if(!this._pixiBitmapFontsInUse[t]){n.warn("BitmapFont with name "+t+" was tried to be released but was never marked as used.");return}if(this._pixiBitmapFontsInUse[t].objectsUsingTheFont--,this._pixiBitmapFontsInUse[t].objectsUsingTheFont===0&&(delete this._pixiBitmapFontsInUse[t],this._pixiBitmapFontsToUninstall.includes(t)||this._pixiBitmapFontsToUninstall.push(t),this._pixiBitmapFontsToUninstall.length>d)){const e=this._pixiBitmapFontsToUninstall.shift();PIXI.BitmapFont.uninstall(e),n.log("Bitmap Text",'Uninstalled BitmapFont "'+e+'" from memory.')}}}obtainBitmapFont(t,e){const i=t+"@"+e;if(PIXI.BitmapFont.available[i])return this._markBitmapFontAsUsed(i),PIXI.BitmapFont.available[i];const s=this._loadedFontsData.getFromName(t);if(!s)return n.warn('Could not find Bitmap Font for resource named "'+t+'". The default font will be used.'),this.getDefaultBitmapFont();const u=this._imageManager.getPIXITexture(e);try{const r=p(PIXI.BitmapFont.install(s,u),i);return this._markBitmapFontAsUsed(i),r}catch(r){return n.error('Could not load the Bitmap Font for resource named "'+t+'". The default font will be used. Error is: '+r),this.getDefaultBitmapFont()}}async processResource(t){}async loadResource(t){const e=this._resourceLoader.getResource(t);if(!e){n.warn('Unable to find bitmap font for resource "'+t+'".');return}if(!this._loadedFontsData.get(e))try{const s=await(await fetch(this._resourceLoader.getFullUrl(e.file),{credentials:this._resourceLoader.checkIfCredentialsRequired(e.file)?"include":"same-origin"})).text();this._loadedFontsData.set(e,s)}catch(i){n.error("Can't fetch the bitmap font file "+e.file+", error: "+i)}}}a.PixiBitmapFontManager=c,a.BitmapFontManager=a.PixiBitmapFontManager})(gdjs||(gdjs={}));
//# sourceMappingURL=pixi-bitmapfont-manager.js.map
