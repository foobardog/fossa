// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.impl.accessors.rope');
goog.require('cljs.core');
phzr.impl.accessors.rope.rope_get_properties = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$exists,cljs.core.cst$kw$animations,cljs.core.cst$kw$mask,cljs.core.cst$kw$dirty,cljs.core.cst$kw$render_DASH_order_DASH_id,cljs.core.cst$kw$in_DASH_world,cljs.core.cst$kw$children,cljs.core.cst$kw$check_DASH_world_DASH_bounds,cljs.core.cst$kw$cache_DASH_as_DASH_bitmap,cljs.core.cst$kw$scale_DASH_max,cljs.core.cst$kw$fixed_DASH_to_DASH_camera,cljs.core.cst$kw$rotation,cljs.core.cst$kw$stage,cljs.core.cst$kw$frame,cljs.core.cst$kw$key,cljs.core.cst$kw$parent,cljs.core.cst$kw$previous_DASH_rotation,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transform_DASH_callback,cljs.core.cst$kw$world_DASH_visible,cljs.core.cst$kw$delta_DASH_y,cljs.core.cst$kw$scale,cljs.core.cst$kw$camera_DASH_offset,cljs.core.cst$kw$game,cljs.core.cst$kw$top,cljs.core.cst$kw$filters,cljs.core.cst$kw$blend_DASH_mode,cljs.core.cst$kw$offset_DASH_y,cljs.core.cst$kw$name,cljs.core.cst$kw$frame_DASH_name,cljs.core.cst$kw$filter_DASH_area,cljs.core.cst$kw$events,cljs.core.cst$kw$alive,cljs.core.cst$kw$renderable,cljs.core.cst$kw$width,cljs.core.cst$kw$type,cljs.core.cst$kw$delta_DASH_x,cljs.core.cst$kw$previous_DASH_position,cljs.core.cst$kw$debug,cljs.core.cst$kw$segments,cljs.core.cst$kw$angle,cljs.core.cst$kw$world_DASH_rotation,cljs.core.cst$kw$hit_DASH_area,cljs.core.cst$kw$transform_DASH_callback_DASH_context,cljs.core.cst$kw$world,cljs.core.cst$kw$update_DASH_animation,cljs.core.cst$kw$z,cljs.core.cst$kw$auto_DASH_cull,cljs.core.cst$kw$input_DASH_enabled,cljs.core.cst$kw$delta_DASH_z,cljs.core.cst$kw$world_DASH_scale,cljs.core.cst$kw$world_DASH_position,cljs.core.cst$kw$in_DASH_camera,cljs.core.cst$kw$pending_DASH_destroy,cljs.core.cst$kw$world_DASH_alpha,cljs.core.cst$kw$offset_DASH_x,cljs.core.cst$kw$alpha,cljs.core.cst$kw$right,cljs.core.cst$kw$out_DASH_of_DASH_bounds_DASH_kill,cljs.core.cst$kw$position,cljs.core.cst$kw$pivot,cljs.core.cst$kw$x,cljs.core.cst$kw$lifespan,cljs.core.cst$kw$smoothed,cljs.core.cst$kw$input,cljs.core.cst$kw$destroy_DASH_phase,cljs.core.cst$kw$visible,cljs.core.cst$kw$body,cljs.core.cst$kw$scale_DASH_min,cljs.core.cst$kw$canvas_DASH_padding,cljs.core.cst$kw$texture,cljs.core.cst$kw$crop_DASH_rect,cljs.core.cst$kw$fresh,cljs.core.cst$kw$height,cljs.core.cst$kw$left],["y","exists","animations","mask","dirty","renderOrderID","inWorld","children","checkWorldBounds","cacheAsBitmap","scaleMax","fixedToCamera","rotation","stage","frame","key","parent","previousRotation","bottom","transformCallback","worldVisible","deltaY","scale","cameraOffset","game","top","filters","blendMode","offsetY","name","frameName","filterArea","events","alive","renderable","width","type","deltaX","previousPosition","debug","segments","angle","worldRotation","hitArea","transformCallbackContext","world","updateAnimation","z","autoCull","inputEnabled","deltaZ","worldScale","worldPosition","inCamera","pendingDestroy","worldAlpha","offsetX","alpha","right","outOfBoundsKill","position","pivot","x","lifespan","smoothed","input","destroyPhase","visible","body","scaleMin","canvasPadding","texture","cropRect","fresh","height","left"]);
phzr.impl.accessors.rope.rope_set_properties = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$exists,cljs.core.cst$kw$animations,cljs.core.cst$kw$mask,cljs.core.cst$kw$dirty,cljs.core.cst$kw$check_DASH_world_DASH_bounds,cljs.core.cst$kw$cache_DASH_as_DASH_bitmap,cljs.core.cst$kw$scale_DASH_max,cljs.core.cst$kw$fixed_DASH_to_DASH_camera,cljs.core.cst$kw$rotation,cljs.core.cst$kw$frame,cljs.core.cst$kw$key,cljs.core.cst$kw$transform_DASH_callback,cljs.core.cst$kw$world_DASH_visible,cljs.core.cst$kw$scale,cljs.core.cst$kw$camera_DASH_offset,cljs.core.cst$kw$game,cljs.core.cst$kw$filters,cljs.core.cst$kw$blend_DASH_mode,cljs.core.cst$kw$name,cljs.core.cst$kw$frame_DASH_name,cljs.core.cst$kw$filter_DASH_area,cljs.core.cst$kw$events,cljs.core.cst$kw$alive,cljs.core.cst$kw$renderable,cljs.core.cst$kw$width,cljs.core.cst$kw$debug,cljs.core.cst$kw$segments,cljs.core.cst$kw$angle,cljs.core.cst$kw$hit_DASH_area,cljs.core.cst$kw$transform_DASH_callback_DASH_context,cljs.core.cst$kw$world,cljs.core.cst$kw$update_DASH_animation,cljs.core.cst$kw$z,cljs.core.cst$kw$auto_DASH_cull,cljs.core.cst$kw$input_DASH_enabled,cljs.core.cst$kw$pending_DASH_destroy,cljs.core.cst$kw$alpha,cljs.core.cst$kw$out_DASH_of_DASH_bounds_DASH_kill,cljs.core.cst$kw$position,cljs.core.cst$kw$pivot,cljs.core.cst$kw$x,cljs.core.cst$kw$lifespan,cljs.core.cst$kw$smoothed,cljs.core.cst$kw$input,cljs.core.cst$kw$visible,cljs.core.cst$kw$body,cljs.core.cst$kw$scale_DASH_min,cljs.core.cst$kw$canvas_DASH_padding,cljs.core.cst$kw$texture,cljs.core.cst$kw$crop_DASH_rect,cljs.core.cst$kw$height],["y","exists","animations","mask","dirty","checkWorldBounds","cacheAsBitmap","scaleMax","fixedToCamera","rotation","frame","key","transformCallback","worldVisible","scale","cameraOffset","game","filters","blendMode","name","frameName","filterArea","events","alive","renderable","width","debug","segments","angle","hitArea","transformCallbackContext","world","updateAnimation","z","autoCull","inputEnabled","pendingDestroy","alpha","outOfBoundsKill","position","pivot","x","lifespan","smoothed","input","visible","body","scaleMin","canvasPadding","texture","cropRect","height"]);
