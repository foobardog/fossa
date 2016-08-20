// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.party_member');
goog.require('cljs.core');
goog.require('fossa.group');
goog.require('phzr.math');
goog.require('phzr.core');
goog.require('phzr.sprite');
goog.require('phzr.game_object_factory');
goog.require('phzr.pointer');
goog.require('brute.entity');
goog.require('fossa.input');
goog.require('fossa.exploration_path');
goog.require('fossa.component');
goog.require('phzr.point');
goog.require('fossa.rendering');
goog.require('phzr.loader');
fossa.party_member.preload_assets = (function fossa$party_member$preload_assets(loader){
var G__28265 = loader;
phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__28265,"mouse","assets/images/mouse.png",(64),(64),(2));

return G__28265;
});
fossa.party_member.party_member_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ann","Brenda","Charles","Deborah","Edward","Frank","Gary","Harold","Irene","James","Karen","Linda"], null);
fossa.party_member.party_member_tints = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10931939),(2062516),(11722634),(3383340),(16489113),(14883356),(15314270),(16744192),(13284054),(6962586),(13882481),(11622696)], null);
fossa.party_member.create_party_member_label = (function fossa$party_member$create_party_member_label(system,entity,label_text){
var factory_28268 = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system));
var sprite_28269 = fossa.component.get_phzr_sprite_from_entity(system,entity);
var phzr_text_28270 = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory_28268,(0),(0),label_text);
phzr.sprite.add_child(sprite_28269,phzr_text_28270);

var G__28267_28271 = phzr_text_28270;
phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$fill,"#ffffff");

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$word_DASH_wrap,true);

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$word_DASH_wrap_DASH_width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sprite_28269));

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$x,(5));

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$y,(5));

phzr.core.pset_BANG_(G__28267_28271,cljs.core.cst$kw$z,(48));


return system;
});
fossa.party_member.initialize_party_member_sprite = (function fossa$party_member$initialize_party_member_sprite(system,entity,i){
var G__28273_28274 = fossa.component.get_phzr_sprite_from_entity(system,entity);
phzr.core.pset_BANG_(G__28273_28274,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__28273_28274,cljs.core.cst$kw$tint,(fossa.party_member.party_member_tints.cljs$core$IFn$_invoke$arity$1 ? fossa.party_member.party_member_tints.cljs$core$IFn$_invoke$arity$1(i) : fossa.party_member.party_member_tints.call(null,i)));

fossa.input.initialize_draggable(G__28273_28274);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__28273_28274),cljs.core.cst$kw$priority_DASH_id,(1));


return system;
});
fossa.party_member.create_party_member = (function fossa$party_member$create_party_member(system,group,i){
var party_member = brute.entity.create_entity();
var party_member_name = (fossa.party_member.party_member_names.cljs$core$IFn$_invoke$arity$1 ? fossa.party_member.party_member_names.cljs$core$IFn$_invoke$arity$1(i) : fossa.party_member.party_member_names.call(null,i));
return brute.entity.add_component(fossa.party_member.create_party_member_label(fossa.party_member.initialize_party_member_sprite(fossa.group.create_sprite_in_group(brute.entity.add_entity(system,party_member),group,party_member,party_member_name,"mouse"),party_member,i),party_member,cljs.core.first(party_member_name)),party_member,fossa.component.__GT_PartyMember(party_member_name,false));
});
fossa.party_member.create_party_members = (function fossa$party_member$create_party_members(system,group){
var i = (0);
var sys = system;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(12))){
return sys;
} else {
var G__28275 = (i + (1));
var G__28276 = fossa.party_member.create_party_member(sys,group,i);
i = G__28275;
sys = G__28276;
continue;
}
break;
}
});
fossa.party_member.create_entities = (function fossa$party_member$create_entities(system){
return fossa.party_member.create_party_members(system,fossa.group.get_unassigned_members_entity(system));
});
fossa.party_member.get_dragged_party_member = (function fossa$party_member$get_dragged_party_member(system){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28277_SHARP_){
return cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(fossa.component.get_phzr_sprite_from_entity(system,p1__28277_SHARP_)));
}),brute.entity.get_all_entities_with_component(system,fossa.component.PartyMember)));
});
fossa.party_member.get_released_party_member = (function fossa$party_member$get_released_party_member(system){
if(cljs.core.truth_(fossa.input.blackout_expired_QMARK_(system,cljs.core.cst$kw$just_DASH_released_DASH_blackout))){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28278_SHARP_){
return fossa.input.just_released(fossa.component.get_phzr_sprite_from_entity(system,p1__28278_SHARP_));
}),brute.entity.get_all_entities_with_component(system,fossa.component.PartyMember)));
} else {
return null;
}
});
fossa.party_member.rotate_point = phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((360),(275));
fossa.party_member.rotate_adjustment = 2.748893571891069;
fossa.party_member.rotate_sprite_towards_drag = (function fossa$party_member$rotate_sprite_towards_drag(sprite){
var rotation = (fossa.party_member.rotate_adjustment + phzr.math.angle_between_points_(cljs.core.cst$kw$world_DASH_position.cljs$core$IFn$_invoke$arity$1(sprite),fossa.party_member.rotate_point));
return phzr.core.pset_BANG_(sprite,cljs.core.cst$kw$rotation,rotation);
});
fossa.party_member.handle_dragged_party_member = (function fossa$party_member$handle_dragged_party_member(system){
var temp__4655__auto__ = fossa.party_member.get_dragged_party_member(system);
if(cljs.core.truth_(temp__4655__auto__)){
var dragged_party_member = temp__4655__auto__;
var sprite = fossa.component.get_phzr_sprite_from_entity(system,dragged_party_member);
var target_exploration_path = fossa.exploration_path.get_exploration_path_under_sprite(system,sprite);
phzr.core.pset_BANG_(sprite,cljs.core.cst$kw$frame,(1));

fossa.party_member.rotate_sprite_towards_drag(sprite);

if(cljs.core.truth_(target_exploration_path)){
return fossa.exploration_path.highlight_exploration_path(system,target_exploration_path);
} else {
return fossa.exploration_path.dehighlight_all_exploration_paths(system);
}
} else {
return system;
}
});
fossa.party_member.handle_released_party_member = (function fossa$party_member$handle_released_party_member(system){
var temp__4655__auto__ = fossa.party_member.get_released_party_member(system);
if(cljs.core.truth_(temp__4655__auto__)){
var released_party_member = temp__4655__auto__;
var released_sprite = fossa.component.get_phzr_sprite_from_entity(system,released_party_member);
var original_sprite_position = cljs.core.cst$kw$drag_DASH_start_DASH_point.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(released_sprite));
var original_group = fossa.group.get_group_containing_member(system,released_party_member);
var unassigned_group = fossa.group.get_unassigned_members_entity(system);
var was_assigned = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_group,unassigned_group);
var target_path = fossa.exploration_path.get_exploration_path_under_sprite(system,released_sprite);
fossa.exploration_path.dehighlight_all_exploration_paths(system);

phzr.core.pset_BANG_(released_sprite,cljs.core.cst$kw$rotation,(0));

return fossa.input.update_blackout_property((cljs.core.truth_((function (){var and__20236__auto__ = target_path;
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target_path,original_group);
} else {
return and__20236__auto__;
}
})())?fossa.group.move_member_to_group(system,released_party_member,target_path):((((target_path == null)) && (was_assigned))?fossa.group.move_member_to_group(system,released_party_member,unassigned_group):system
)),cljs.core.cst$kw$just_DASH_released_DASH_blackout);
} else {
return system;
}
});
fossa.party_member.redraw_unassigned_party_members = (function fossa$party_member$redraw_unassigned_party_members(system){
var party_members = brute.entity.get_all_entities_with_component(system,fossa.component.PartyMember);
var seq__28283_28287 = cljs.core.seq(party_members);
var chunk__28284_28288 = null;
var count__28285_28289 = (0);
var i__28286_28290 = (0);
while(true){
if((i__28286_28290 < count__28285_28289)){
var party_member_28291 = chunk__28284_28288.cljs$core$IIndexed$_nth$arity$2(null,i__28286_28290);
var sprite_28292 = fossa.component.get_phzr_sprite_from_entity(system,party_member_28291);
var group_28293 = fossa.group.get_group_containing_member(system,party_member_28291);
var unassigned_group_28294 = fossa.group.get_unassigned_members_entity(system);
if((cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(sprite_28292)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_28293,unassigned_group_28294))){
phzr.core.pset_BANG_(sprite_28292,cljs.core.cst$kw$rotation,(0));

phzr.core.pset_BANG_(sprite_28292,cljs.core.cst$kw$frame,(0));
} else {
}

var G__28295 = seq__28283_28287;
var G__28296 = chunk__28284_28288;
var G__28297 = count__28285_28289;
var G__28298 = (i__28286_28290 + (1));
seq__28283_28287 = G__28295;
chunk__28284_28288 = G__28296;
count__28285_28289 = G__28297;
i__28286_28290 = G__28298;
continue;
} else {
var temp__4657__auto___28299 = cljs.core.seq(seq__28283_28287);
if(temp__4657__auto___28299){
var seq__28283_28300__$1 = temp__4657__auto___28299;
if(cljs.core.chunked_seq_QMARK_(seq__28283_28300__$1)){
var c__21059__auto___28301 = cljs.core.chunk_first(seq__28283_28300__$1);
var G__28302 = cljs.core.chunk_rest(seq__28283_28300__$1);
var G__28303 = c__21059__auto___28301;
var G__28304 = cljs.core.count(c__21059__auto___28301);
var G__28305 = (0);
seq__28283_28287 = G__28302;
chunk__28284_28288 = G__28303;
count__28285_28289 = G__28304;
i__28286_28290 = G__28305;
continue;
} else {
var party_member_28306 = cljs.core.first(seq__28283_28300__$1);
var sprite_28307 = fossa.component.get_phzr_sprite_from_entity(system,party_member_28306);
var group_28308 = fossa.group.get_group_containing_member(system,party_member_28306);
var unassigned_group_28309 = fossa.group.get_unassigned_members_entity(system);
if((cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(sprite_28307)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_28308,unassigned_group_28309))){
phzr.core.pset_BANG_(sprite_28307,cljs.core.cst$kw$rotation,(0));

phzr.core.pset_BANG_(sprite_28307,cljs.core.cst$kw$frame,(0));
} else {
}

var G__28310 = cljs.core.next(seq__28283_28300__$1);
var G__28311 = null;
var G__28312 = (0);
var G__28313 = (0);
seq__28283_28287 = G__28310;
chunk__28284_28288 = G__28311;
count__28285_28289 = G__28312;
i__28286_28290 = G__28313;
continue;
}
} else {
}
}
break;
}

return system;
});
fossa.party_member.set_liars = (function fossa$party_member$set_liars(system,number_of_liars){
var party_members = brute.entity.get_all_entities_with_component(system,fossa.component.PartyMember);
var grouped_members = cljs.core.group_by(((function (party_members){
return (function (p1__28314_SHARP_){
return cljs.core.cst$kw$is_DASH_liar.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,p1__28314_SHARP_,fossa.component.PartyMember));
});})(party_members))
,party_members);
var liars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_members,true);
var number_of_existing_liars = cljs.core.count(liars);
var liars_needed = (number_of_liars - number_of_existing_liars);
if((liars_needed > (0))){
var new_liars = cljs.core.take.cljs$core$IFn$_invoke$arity$2(liars_needed,cljs.core.shuffle(cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_members,false)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_liars,party_members,grouped_members,liars,number_of_existing_liars,liars_needed){
return (function (system__$1,new_liar){
return brute.entity.add_component(system__$1,new_liar,fossa.component.__GT_PartyMember(fossa.component.get_member_name_from_entity(system__$1,new_liar),true));
});})(new_liars,party_members,grouped_members,liars,number_of_existing_liars,liars_needed))
,system,new_liars);
} else {
return system;
}
});
fossa.party_member.TEMP_get_liars = (function fossa$party_member$TEMP_get_liars(system){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28316_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,p1__28316_SHARP_,fossa.component.Sprite)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28315_SHARP_){
return cljs.core.cst$kw$is_DASH_liar.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,p1__28315_SHARP_,fossa.component.PartyMember));
}),brute.entity.get_all_entities_with_component(system,fossa.component.PartyMember)));
});
fossa.party_member.process_one_game_tick = (function fossa$party_member$process_one_game_tick(system,delta){
return fossa.party_member.redraw_unassigned_party_members(fossa.party_member.handle_released_party_member(fossa.party_member.handle_dragged_party_member(system)));
});
