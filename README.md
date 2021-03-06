Fossa
=====

Introduction
------------

I've long wanted to make small games on the side, and I really love Clojure, so I tried to make a game I've
codenamed fossa for the [August 2016 Lisp Game Jam on itch.io](https://itch.io/jam/august-2016-lisp-game-jam). The
start date was 2016-08-01, and the due date was 2016-08-11. The title of the final game will be "Terrible Number Two".

I didn't finish in time for the jam, but I am attempting to wrap it up to a playable state. You can check out progress
on [this repo's GitHub Pages site](https://foobardog.github.io/fossa/).

Inspiration
-----------

The basic idea for this game builds off a riddle I saw on TED-Ed they called
[The Temple Riddle](https://www.youtube.com/watch?v=nSbvlktToSY).

You are on an expedition to explore a temple. You've gotten what you came for and are making your way
back when a trap triggers, beginning to fill the temple with poison gas. You'll die in an hour if you
don't get out. There are four different ways to go, but you can't remember which one is the exit. It
takes twenty minutes to explore each way and twenty minutes to make it back. You do have eight more
people in your party, so you could split up, explore, and then reconvene, but there's a problem...

Two of your party members have been possessed by the spirits of the King and Queen entombed in the
temple. They will not harm you or your party members directly, but they have no compunctions against
lying to you about how to get out, and will do so (It's more sadistic that way...). They don't _have_
to lie, they just can, and _will_ if you ask them which path is correct. These facts mean you can't
really quiz your party members right now to find the possessed ones, you'll have to figure it out
through logic. You do know that _you_ are not possessed. Can you find a way to figure out the right way
to go?

The answer is in the video.

My Spin
-------

I've decided to change the flavor and iterate through this riddle a few times to make a longer game of
it. Basically, this will be a type of logic game where you need to determine which members of your
party are liars so you can escape the temple (well, research scientist maze, in my flavor).

I'm writing this in [ClojureScript](https://github.com/clojure/clojurescript) using
[phzr](https://github.com/dparis/phzr), which are ClojureScript bindings for the
[Phaser](http://phaser.io) JavaScript Library. I am using [brute](https://github.com/markmandel/brute),
an entity-component system library for dependency management purposes.

Follow Along!
-------------

Most of my updates were at the
[game jam community page](https://itch.io/jam/august-2016-lisp-game-jam/community) on itch.io.

I'll may probably make a few comments on my twitters
([@foobardog (mundane account)](https://twitter.com/foobardog) and
[@chimerror (furry account, may be NSFW)](https://twitter.com/chimerror)).

I'm keeping track of tasks and things on [this Trello board](https://trello.com/b/vYFW4RqW).

License and Legal Information
-----------------------------

Copyright © 2016 Jason Mitchell.
Distributed under [The MIT License](https://opensource.org/licenses/MIT).

### Libraries

[brute](https://github.com/markmandel/brute) by [Mark Mandel](https://github.com/markmandel) is licensed
under [The Eclipse Public License, version 1.0](https://eclipse.org/org/documents/epl-v10.html).

[phzr](https://github.com/dparis/phzr) by [Dylan Paris](https://github.com/dparis) is licensed under
[The MIT License](https://opensource.org/licenses/MIT).

[Web Font Loader](https://github.com/typekit/webfontloader) by [Google](https://www.google.com) and
[Typekit](https://typekit.com) is licensed under
[The Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0)

### Fonts

[Cutive Roman](https://github.com/vernnobile/CutiveFont) by [Vernon Adams](https://github.com/vernnobile) is licensed
under [SIL Open Font License](http://scripts.sil.org/OFL).

[Just Me Again Down Here](http://www.kimberlygeswein.com/2010/10/11/updated-just-me-again-down-here/) by
[Kimberly Geswein](http://www.kimberlygeswein.com) is licensed under
[SIL Open Font License](http://scripts.sil.org/OFL).

### Graphics

Buttons and Direction Arrows from [Kenney Game Assets](https://kenney.itch.io/kenney-donation) by
[Kenney](http://www.kenney.nl) is licensed under
[CC0 (Public Domain)](http://creativecommons.org/publicdomain/zero/1.0)

["Artificial hive icon"](http://game-icons.net/lorc/originals/artificial-hive.html),
["Seated mouse icon"](http://game-icons.net/lorc/originals/seated-mouse.html),
["Mouse icon"](http://game-icons.net/lorc/originals/mouse.html) by [Lorc](http://lorcblog.blogspot.com)
is licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0).

Some edits made to "Seated mouse icon" by Jason Mitchell.

["'Green Bar' Computer Paper"](https://www.flickr.com/photos/dmswart/6507071701) by
[David Swart](https://www.flickr.com/photos/dmswart) is licensed under
[CC BY 2.0](https://creativecommons.org/licenses/by/2.0).

Some edits made to "'Green Bar' Computer Paper" by Jason Mitchell.
