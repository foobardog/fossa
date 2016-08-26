// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.impl.accessors.scale_manager');
goog.require('cljs.core');
phzr.impl.accessors.scale_manager.scale_manager_constants = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$exact_DASH_fit,"EXACT_FIT",cljs.core.cst$kw$no_DASH_scale,"NO_SCALE",cljs.core.cst$kw$resize,"RESIZE",cljs.core.cst$kw$show_DASH_all,"SHOW_ALL",cljs.core.cst$kw$user_DASH_scale,"USER_SCALE"], null);
phzr.impl.accessors.scale_manager.scale_manager_get_properties = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$is_DASH_game_DASH_portrait,cljs.core.cst$kw$is_DASH_full_DASH_screen,cljs.core.cst$kw$aspect_DASH_ratio,cljs.core.cst$kw$full_DASH_screen_DASH_scale_DASH_mode,cljs.core.cst$kw$bounding_DASH_parent,cljs.core.cst$kw$is_DASH_portrait,cljs.core.cst$kw$is_DASH_game_DASH_landscape,cljs.core.cst$kw$screen_DASH_orientation,cljs.core.cst$kw$scale_DASH_mode,cljs.core.cst$kw$grid,cljs.core.cst$kw$width,cljs.core.cst$kw$parent_DASH_node,cljs.core.cst$kw$full_DASH_screen_DASH_target,cljs.core.cst$kw$on_DASH_orientation_DASH_change,cljs.core.cst$kw$bounds,cljs.core.cst$kw$parent_DASH_is_DASH_window,cljs.core.cst$kw$on_DASH_full_DASH_screen_DASH_change,cljs.core.cst$kw$page_DASH_align_DASH_horizontally,cljs.core.cst$kw$is_DASH_landscape,cljs.core.cst$kw$parent_DASH_scale_DASH_factor,cljs.core.cst$kw$leave_DASH_incorrect_DASH_orientation,cljs.core.cst$kw$window_DASH_constraints,cljs.core.cst$kw$source_DASH_aspect_DASH_ratio,cljs.core.cst$kw$on_DASH_full_DASH_screen_DASH_init,cljs.core.cst$kw$scale_DASH_factor,cljs.core.cst$kw$on_DASH_size_DASH_change,cljs.core.cst$kw$page_DASH_align_DASH_vertically,cljs.core.cst$kw$enter_DASH_incorrect_DASH_orientation,cljs.core.cst$kw$on_DASH_full_DASH_screen_DASH_error,cljs.core.cst$kw$height],["isGamePortrait","isFullScreen","aspectRatio","fullScreenScaleMode","boundingParent","isPortrait","isGameLandscape","screenOrientation","scaleMode","grid","width","parentNode","fullScreenTarget","onOrientationChange","bounds","parentIsWindow","onFullScreenChange","pageAlignHorizontally","isLandscape","parentScaleFactor","leaveIncorrectOrientation","windowConstraints","sourceAspectRatio","onFullScreenInit","scaleFactor","onSizeChange","pageAlignVertically","enterIncorrectOrientation","onFullScreenError","height"]);
phzr.impl.accessors.scale_manager.scale_manager_set_properties = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$full_DASH_screen_DASH_scale_DASH_mode,cljs.core.cst$kw$scale_DASH_mode,cljs.core.cst$kw$grid,cljs.core.cst$kw$parent_DASH_node,cljs.core.cst$kw$full_DASH_screen_DASH_target,cljs.core.cst$kw$on_DASH_orientation_DASH_change,cljs.core.cst$kw$parent_DASH_is_DASH_window,cljs.core.cst$kw$on_DASH_full_DASH_screen_DASH_change,cljs.core.cst$kw$page_DASH_align_DASH_horizontally,cljs.core.cst$kw$leave_DASH_incorrect_DASH_orientation,cljs.core.cst$kw$window_DASH_constraints,cljs.core.cst$kw$on_DASH_full_DASH_screen_DASH_init,cljs.core.cst$kw$on_DASH_size_DASH_change,cljs.core.cst$kw$page_DASH_align_DASH_vertically,cljs.core.cst$kw$enter_DASH_incorrect_DASH_orientation,cljs.core.cst$kw$on_DASH_full_DASH_screen_DASH_error],["fullScreenScaleMode","scaleMode","grid","parentNode","fullScreenTarget","onOrientationChange","parentIsWindow","onFullScreenChange","pageAlignHorizontally","leaveIncorrectOrientation","windowConstraints","onFullScreenInit","onSizeChange","pageAlignVertically","enterIncorrectOrientation","onFullScreenError"]);