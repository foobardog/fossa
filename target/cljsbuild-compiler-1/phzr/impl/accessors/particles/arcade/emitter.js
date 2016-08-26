// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.impl.accessors.particles.arcade.emitter');
goog.require('cljs.core');
phzr.impl.accessors.particles.arcade.emitter.emitter_get_properties = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$exists,cljs.core.cst$kw$mask,cljs.core.cst$kw$physics_DASH_body_DASH_type,cljs.core.cst$kw$emit_DASH_y,cljs.core.cst$kw$children,cljs.core.cst$kw$cache_DASH_as_DASH_bitmap,cljs.core.cst$kw$fixed_DASH_to_DASH_camera,cljs.core.cst$kw$hash,cljs.core.cst$kw$rotation,cljs.core.cst$kw$stage,cljs.core.cst$kw$max_DASH_particles,cljs.core.cst$kw$parent,cljs.core.cst$kw$max_DASH_rotation,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transform_DASH_callback,cljs.core.cst$kw$max_DASH_particle_DASH_alpha,cljs.core.cst$kw$enable_DASH_body_DASH_debug,cljs.core.cst$kw$world_DASH_visible,cljs.core.cst$kw$scale,cljs.core.cst$kw$camera_DASH_offset,cljs.core.cst$kw$top,cljs.core.cst$kw$filters,cljs.core.cst$kw$blend_DASH_mode,cljs.core.cst$kw$ignore_DASH_destroy,cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_area,cljs.core.cst$kw$max_DASH_particle_DASH_speed,cljs.core.cst$kw$alive,cljs.core.cst$kw$renderable,cljs.core.cst$kw$frequency,cljs.core.cst$kw$scale_DASH_data,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$on_DASH_destroy,cljs.core.cst$kw$class_DASH_type,cljs.core.cst$kw$emit_DASH_x,cljs.core.cst$kw$angle,cljs.core.cst$kw$auto_DASH_scale,cljs.core.cst$kw$world_DASH_rotation,cljs.core.cst$kw$gravity,cljs.core.cst$kw$particle_DASH_class,cljs.core.cst$kw$physics_DASH_type,cljs.core.cst$kw$hit_DASH_area,cljs.core.cst$kw$min_DASH_particle_DASH_alpha,cljs.core.cst$kw$bounce,cljs.core.cst$kw$transform_DASH_callback_DASH_context,cljs.core.cst$kw$physics_DASH_sort_DASH_direction,cljs.core.cst$kw$z,cljs.core.cst$kw$total,cljs.core.cst$kw$particle_DASH_send_DASH_to_DASH_back,cljs.core.cst$kw$world_DASH_scale,cljs.core.cst$kw$world_DASH_position,cljs.core.cst$kw$max_DASH_particle_DASH_scale,cljs.core.cst$kw$pending_DASH_destroy,cljs.core.cst$kw$world_DASH_alpha,cljs.core.cst$kw$particle_DASH_bring_DASH_to_DASH_top,cljs.core.cst$kw$length,cljs.core.cst$kw$alpha,cljs.core.cst$kw$right,cljs.core.cst$kw$particle_DASH_anchor,cljs.core.cst$kw$position,cljs.core.cst$kw$area,cljs.core.cst$kw$on,cljs.core.cst$kw$pivot,cljs.core.cst$kw$angular_DASH_drag,cljs.core.cst$kw$x,cljs.core.cst$kw$lifespan,cljs.core.cst$kw$min_DASH_rotation,cljs.core.cst$kw$alpha_DASH_data,cljs.core.cst$kw$auto_DASH_alpha,cljs.core.cst$kw$visible,cljs.core.cst$kw$min_DASH_particle_DASH_speed,cljs.core.cst$kw$min_DASH_particle_DASH_scale,cljs.core.cst$kw$height,cljs.core.cst$kw$cursor_DASH_index,cljs.core.cst$kw$left,cljs.core.cst$kw$particle_DASH_drag,cljs.core.cst$kw$enable_DASH_body],["y","exists","mask","physicsBodyType","emitY","children","cacheAsBitmap","fixedToCamera","hash","rotation","stage","maxParticles","parent","maxRotation","bottom","transformCallback","maxParticleAlpha","enableBodyDebug","worldVisible","scale","cameraOffset","top","filters","blendMode","ignoreDestroy","name","filterArea","maxParticleSpeed","alive","renderable","frequency","scaleData","width","cursor","onDestroy","classType","emitX","angle","autoScale","worldRotation","gravity","particleClass","physicsType","hitArea","minParticleAlpha","bounce","transformCallbackContext","physicsSortDirection","z","total","particleSendToBack","worldScale","worldPosition","maxParticleScale","pendingDestroy","worldAlpha","particleBringToTop","length","alpha","right","particleAnchor","position","area","on","pivot","angularDrag","x","lifespan","minRotation","alphaData","autoAlpha","visible","minParticleSpeed","minParticleScale","height","cursorIndex","left","particleDrag","enableBody"]);
phzr.impl.accessors.particles.arcade.emitter.emitter_set_properties = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$exists,cljs.core.cst$kw$mask,cljs.core.cst$kw$physics_DASH_body_DASH_type,cljs.core.cst$kw$emit_DASH_y,cljs.core.cst$kw$cache_DASH_as_DASH_bitmap,cljs.core.cst$kw$fixed_DASH_to_DASH_camera,cljs.core.cst$kw$hash,cljs.core.cst$kw$rotation,cljs.core.cst$kw$max_DASH_particles,cljs.core.cst$kw$max_DASH_rotation,cljs.core.cst$kw$transform_DASH_callback,cljs.core.cst$kw$max_DASH_particle_DASH_alpha,cljs.core.cst$kw$enable_DASH_body_DASH_debug,cljs.core.cst$kw$world_DASH_visible,cljs.core.cst$kw$scale,cljs.core.cst$kw$camera_DASH_offset,cljs.core.cst$kw$filters,cljs.core.cst$kw$blend_DASH_mode,cljs.core.cst$kw$ignore_DASH_destroy,cljs.core.cst$kw$name,cljs.core.cst$kw$filter_DASH_area,cljs.core.cst$kw$max_DASH_particle_DASH_speed,cljs.core.cst$kw$alive,cljs.core.cst$kw$renderable,cljs.core.cst$kw$frequency,cljs.core.cst$kw$scale_DASH_data,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$on_DASH_destroy,cljs.core.cst$kw$class_DASH_type,cljs.core.cst$kw$emit_DASH_x,cljs.core.cst$kw$angle,cljs.core.cst$kw$auto_DASH_scale,cljs.core.cst$kw$gravity,cljs.core.cst$kw$particle_DASH_class,cljs.core.cst$kw$hit_DASH_area,cljs.core.cst$kw$min_DASH_particle_DASH_alpha,cljs.core.cst$kw$bounce,cljs.core.cst$kw$transform_DASH_callback_DASH_context,cljs.core.cst$kw$physics_DASH_sort_DASH_direction,cljs.core.cst$kw$z,cljs.core.cst$kw$particle_DASH_send_DASH_to_DASH_back,cljs.core.cst$kw$max_DASH_particle_DASH_scale,cljs.core.cst$kw$pending_DASH_destroy,cljs.core.cst$kw$particle_DASH_bring_DASH_to_DASH_top,cljs.core.cst$kw$alpha,cljs.core.cst$kw$particle_DASH_anchor,cljs.core.cst$kw$position,cljs.core.cst$kw$area,cljs.core.cst$kw$on,cljs.core.cst$kw$pivot,cljs.core.cst$kw$angular_DASH_drag,cljs.core.cst$kw$x,cljs.core.cst$kw$lifespan,cljs.core.cst$kw$min_DASH_rotation,cljs.core.cst$kw$alpha_DASH_data,cljs.core.cst$kw$auto_DASH_alpha,cljs.core.cst$kw$visible,cljs.core.cst$kw$min_DASH_particle_DASH_speed,cljs.core.cst$kw$min_DASH_particle_DASH_scale,cljs.core.cst$kw$height,cljs.core.cst$kw$particle_DASH_drag,cljs.core.cst$kw$enable_DASH_body],["y","exists","mask","physicsBodyType","emitY","cacheAsBitmap","fixedToCamera","hash","rotation","maxParticles","maxRotation","transformCallback","maxParticleAlpha","enableBodyDebug","worldVisible","scale","cameraOffset","filters","blendMode","ignoreDestroy","name","filterArea","maxParticleSpeed","alive","renderable","frequency","scaleData","width","cursor","onDestroy","classType","emitX","angle","autoScale","gravity","particleClass","hitArea","minParticleAlpha","bounce","transformCallbackContext","physicsSortDirection","z","particleSendToBack","maxParticleScale","pendingDestroy","particleBringToTop","alpha","particleAnchor","position","area","on","pivot","angularDrag","x","lifespan","minRotation","alphaData","autoAlpha","visible","minParticleSpeed","minParticleScale","height","particleDrag","enableBody"]);
