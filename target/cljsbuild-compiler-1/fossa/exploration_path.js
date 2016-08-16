// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.exploration_path');
goog.require('cljs.core');
goog.require('fossa.group');
goog.require('phzr.core');
goog.require('phzr.sprite');
goog.require('brute.entity');
goog.require('fossa.input');
goog.require('fossa.component');
goog.require('fossa.rendering');
goog.require('phzr.loader');
goog.require('phzr.tween');
fossa.exploration_path.preload_assets = (function fossa$exploration_path$preload_assets(loader){
var G__28181 = loader;
phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__28181,"hexagon","assets/images/hexagon.png");

return G__28181;
});
fossa.exploration_path.hex_coordinates = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(322),(96)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(441),(164)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(441),(300)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(322),(368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(204),(300)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(204),(164)], null)], null);
fossa.exploration_path.hex_tints = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6569019),(4802851),(2707241),(2509900),(4473452),(6306144)], null);
fossa.exploration_path.hex_names = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["north","northeast","southeast","south","southwest","northwest"], null);
fossa.exploration_path.unhighlighted_alpha = (1);
fossa.exploration_path.highlighted_alpha = (0);
fossa.exploration_path.create_exploration_path_sprite = (function fossa$exploration_path$create_exploration_path_sprite(phzr_game,i){
var sprite_name = [cljs.core.str((fossa.exploration_path.hex_names.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.hex_names.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.hex_names.call(null,i))),cljs.core.str(" sprite")].join('');
var creation_point = (fossa.exploration_path.hex_coordinates.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.hex_coordinates.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.hex_coordinates.call(null,i));
var x = (creation_point.cljs$core$IFn$_invoke$arity$1 ? creation_point.cljs$core$IFn$_invoke$arity$1((0)) : creation_point.call(null,(0)));
var y = (creation_point.cljs$core$IFn$_invoke$arity$1 ? creation_point.cljs$core$IFn$_invoke$arity$1((1)) : creation_point.call(null,(1)));
var sprite_tint = (fossa.exploration_path.hex_tints.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.hex_tints.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.hex_tints.call(null,i));
var G__28183 = fossa.rendering.create_phzr_sprite(phzr_game,sprite_name,"hexagon",x,y);
phzr.core.pset_BANG_(G__28183,cljs.core.cst$kw$tint,sprite_tint);

phzr.core.pset_BANG_(G__28183,cljs.core.cst$kw$alpha,fossa.exploration_path.unhighlighted_alpha);

phzr.core.pset_BANG_(G__28183,cljs.core.cst$kw$z,(16));

return G__28183;
});
fossa.exploration_path.tween_duration = (250);
fossa.exploration_path.create_tween = (function fossa$exploration_path$create_tween(phzr_game,sprite){
return fossa.rendering.create_phzr_tween(phzr_game,sprite,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alpha,fossa.exploration_path.highlighted_alpha], null),fossa.exploration_path.tween_duration,(-1),true);
});
fossa.exploration_path.group_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(30)], null);
fossa.exploration_path.group_coordinates = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28184_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,fossa.exploration_path.group_offset,p1__28184_SHARP_);
}),fossa.exploration_path.hex_coordinates));
fossa.exploration_path.directions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$north,cljs.core.cst$kw$northeast,cljs.core.cst$kw$southeast,cljs.core.cst$kw$south,cljs.core.cst$kw$southwest,cljs.core.cst$kw$northwest], null);
fossa.exploration_path.create_exploration_path = (function fossa$exploration_path$create_exploration_path(system,i){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var exploration_path = brute.entity.create_entity();
var sprite = fossa.exploration_path.create_exploration_path_sprite(phzr_game,i);
var tween = fossa.exploration_path.create_tween(phzr_game,sprite);
var creation_point = (fossa.exploration_path.group_coordinates.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.group_coordinates.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.group_coordinates.call(null,i));
var x = (creation_point.cljs$core$IFn$_invoke$arity$1 ? creation_point.cljs$core$IFn$_invoke$arity$1((0)) : creation_point.call(null,(0)));
var y = (creation_point.cljs$core$IFn$_invoke$arity$1 ? creation_point.cljs$core$IFn$_invoke$arity$1((1)) : creation_point.call(null,(1)));
var group_name = [cljs.core.str((fossa.exploration_path.hex_names.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.hex_names.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.hex_names.call(null,i))),cljs.core.str(" group")].join('');
var direction = (fossa.exploration_path.directions.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.directions.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.directions.call(null,i));
return brute.entity.add_component(brute.entity.add_component(brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(system,exploration_path),exploration_path,fossa.component.__GT_Sprite(sprite)),exploration_path,fossa.component.__GT_Tween(tween)),exploration_path,fossa.group.create_group(phzr_game,group_name,x,y)),exploration_path,fossa.component.__GT_ExplorationPath(direction,true));
});
fossa.exploration_path.create_entities = (function fossa$exploration_path$create_entities(system){
var i = (0);
var sys = system;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(6))){
return sys;
} else {
var G__28185 = (i + (1));
var G__28186 = fossa.exploration_path.create_exploration_path(sys,i);
i = G__28185;
sys = G__28186;
continue;
}
break;
}
});
fossa.exploration_path.get_exploration_path_under_sprite = (function fossa$exploration_path$get_exploration_path_under_sprite(system,sprite){
if(cljs.core.truth_(sprite)){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28188_SHARP_){
return phzr.sprite.overlap(fossa.component.get_phzr_sprite_from_entity(system,p1__28188_SHARP_),sprite);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28187_SHARP_){
return cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,p1__28187_SHARP_,fossa.component.ExplorationPath));
}),brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationPath))));
} else {
return null;
}
});
fossa.exploration_path.dehighlight_exploration_path = (function fossa$exploration_path$dehighlight_exploration_path(system,target_exploration_path){
var exploration_path_sprite_28189 = fossa.component.get_phzr_sprite_from_entity(system,target_exploration_path);
var exploration_path_tween_28190 = fossa.component.get_phzr_tween_from_entity(system,target_exploration_path);
if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.cst$kw$is_DASH_running.cljs$core$IFn$_invoke$arity$1(exploration_path_tween_28190);
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.not(cljs.core.cst$kw$is_DASH_paused.cljs$core$IFn$_invoke$arity$1(exploration_path_tween_28190));
} else {
return and__20236__auto__;
}
})())){
phzr.tween.pause(exploration_path_tween_28190);

phzr.core.pset_BANG_(exploration_path_sprite_28189,cljs.core.cst$kw$alpha,fossa.exploration_path.unhighlighted_alpha);
} else {
}

return system;
});
fossa.exploration_path.dehighlight_all_exploration_paths = (function fossa$exploration_path$dehighlight_all_exploration_paths(system){
var seq__28195_28199 = cljs.core.seq(brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationPath));
var chunk__28196_28200 = null;
var count__28197_28201 = (0);
var i__28198_28202 = (0);
while(true){
if((i__28198_28202 < count__28197_28201)){
var exploration_path_28203 = chunk__28196_28200.cljs$core$IIndexed$_nth$arity$2(null,i__28198_28202);
fossa.exploration_path.dehighlight_exploration_path(system,exploration_path_28203);

var G__28204 = seq__28195_28199;
var G__28205 = chunk__28196_28200;
var G__28206 = count__28197_28201;
var G__28207 = (i__28198_28202 + (1));
seq__28195_28199 = G__28204;
chunk__28196_28200 = G__28205;
count__28197_28201 = G__28206;
i__28198_28202 = G__28207;
continue;
} else {
var temp__4657__auto___28208 = cljs.core.seq(seq__28195_28199);
if(temp__4657__auto___28208){
var seq__28195_28209__$1 = temp__4657__auto___28208;
if(cljs.core.chunked_seq_QMARK_(seq__28195_28209__$1)){
var c__21059__auto___28210 = cljs.core.chunk_first(seq__28195_28209__$1);
var G__28211 = cljs.core.chunk_rest(seq__28195_28209__$1);
var G__28212 = c__21059__auto___28210;
var G__28213 = cljs.core.count(c__21059__auto___28210);
var G__28214 = (0);
seq__28195_28199 = G__28211;
chunk__28196_28200 = G__28212;
count__28197_28201 = G__28213;
i__28198_28202 = G__28214;
continue;
} else {
var exploration_path_28215 = cljs.core.first(seq__28195_28209__$1);
fossa.exploration_path.dehighlight_exploration_path(system,exploration_path_28215);

var G__28216 = cljs.core.next(seq__28195_28209__$1);
var G__28217 = null;
var G__28218 = (0);
var G__28219 = (0);
seq__28195_28199 = G__28216;
chunk__28196_28200 = G__28217;
count__28197_28201 = G__28218;
i__28198_28202 = G__28219;
continue;
}
} else {
}
}
break;
}

return system;
});
fossa.exploration_path.highlight_exploration_path = (function fossa$exploration_path$highlight_exploration_path(system,target_exploration_path){
var exploration_path_sprite_28229 = fossa.component.get_phzr_sprite_from_entity(system,target_exploration_path);
var exploration_path_tween_28230 = fossa.component.get_phzr_tween_from_entity(system,target_exploration_path);
if(cljs.core.not(cljs.core.cst$kw$is_DASH_running.cljs$core$IFn$_invoke$arity$1(exploration_path_tween_28230))){
phzr.tween.start.cljs$core$IFn$_invoke$arity$1(exploration_path_tween_28230);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$is_DASH_paused.cljs$core$IFn$_invoke$arity$1(exploration_path_tween_28230))){
phzr.tween.resume(exploration_path_tween_28230);
} else {
}
}

var exploration_paths_28231 = brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationPath);
var seq__28225_28232 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (exploration_paths_28231){
return (function (p1__28220_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_exploration_path,p1__28220_SHARP_);
});})(exploration_paths_28231))
,exploration_paths_28231));
var chunk__28226_28233 = null;
var count__28227_28234 = (0);
var i__28228_28235 = (0);
while(true){
if((i__28228_28235 < count__28227_28234)){
var non_highlighted_exploration_path_28236 = chunk__28226_28233.cljs$core$IIndexed$_nth$arity$2(null,i__28228_28235);
fossa.exploration_path.dehighlight_exploration_path(system,non_highlighted_exploration_path_28236);

var G__28237 = seq__28225_28232;
var G__28238 = chunk__28226_28233;
var G__28239 = count__28227_28234;
var G__28240 = (i__28228_28235 + (1));
seq__28225_28232 = G__28237;
chunk__28226_28233 = G__28238;
count__28227_28234 = G__28239;
i__28228_28235 = G__28240;
continue;
} else {
var temp__4657__auto___28241 = cljs.core.seq(seq__28225_28232);
if(temp__4657__auto___28241){
var seq__28225_28242__$1 = temp__4657__auto___28241;
if(cljs.core.chunked_seq_QMARK_(seq__28225_28242__$1)){
var c__21059__auto___28243 = cljs.core.chunk_first(seq__28225_28242__$1);
var G__28244 = cljs.core.chunk_rest(seq__28225_28242__$1);
var G__28245 = c__21059__auto___28243;
var G__28246 = cljs.core.count(c__21059__auto___28243);
var G__28247 = (0);
seq__28225_28232 = G__28244;
chunk__28226_28233 = G__28245;
count__28227_28234 = G__28246;
i__28228_28235 = G__28247;
continue;
} else {
var non_highlighted_exploration_path_28248 = cljs.core.first(seq__28225_28242__$1);
fossa.exploration_path.dehighlight_exploration_path(system,non_highlighted_exploration_path_28248);

var G__28249 = cljs.core.next(seq__28225_28242__$1);
var G__28250 = null;
var G__28251 = (0);
var G__28252 = (0);
seq__28225_28232 = G__28249;
chunk__28226_28233 = G__28250;
count__28227_28234 = G__28251;
i__28228_28235 = G__28252;
continue;
}
} else {
}
}
break;
}

return system;
});
fossa.exploration_path.get_exploration_path_by_direction = (function fossa$exploration_path$get_exploration_path_by_direction(system,direction){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28253_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,p1__28253_SHARP_,fossa.component.ExplorationPath)));
}),brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationPath)));
});
fossa.exploration_path.update_exploration_path = (function fossa$exploration_path$update_exploration_path(system,direction,active){
var target_path = fossa.exploration_path.get_exploration_path_by_direction(system,direction);
var target_path_sprite = fossa.component.get_phzr_sprite_from_entity(system,target_path);
phzr.core.pset_BANG_(target_path_sprite,cljs.core.cst$kw$visible,active);

return brute.entity.add_component(system,target_path,fossa.component.__GT_ExplorationPath(direction,active));
});
fossa.exploration_path.update_exploration_paths = (function fossa$exploration_path$update_exploration_paths(system,active_paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sys,direction){
return fossa.exploration_path.update_exploration_path(sys,direction,cljs.core.contains_QMARK_(active_paths,direction));
}),system,fossa.exploration_path.directions);
});
fossa.exploration_path.process_one_game_tick = (function fossa$exploration_path$process_one_game_tick(system,delta){
return system;
});
