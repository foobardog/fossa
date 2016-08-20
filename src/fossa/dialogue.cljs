(ns fossa.dialogue
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [phzr.pointer :as p.pointer]
            [phzr.sprite :as p.sprite]
            [fossa.component :as f.component]
            [fossa.group :as f.group]
            [fossa.input :as f.input]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/image "panel" "assets/images/panel.png")
    (p.loader/image "dialogue-background" "assets/images/dialogue_background.png")
    (p.loader/spritesheet "main-character" "assets/images/main_character.png" 384 384 3)))

(def textbox-test-text "Jim quickly realized that the beautiful gowns are expensive. Jim quickly realized that the beautiful gowns are expensive.")

(def dialogues
  {:introduction
   '({:frame 0 :text "Hello, The scientists refer to me as Subject #2..."}
     {:frame 2 :text "But I prefer to be called Mary-Ann!"}
     {:frame 1 :text "My fellow subjects and I have been put in an odd maze of the scientists’ design..."}
     {:frame 0 :text "...And it’s up to me to lead them all out!"})})

(defn create-entities [system]
  (let [phzr-game (:phzr-game system)
        factory (:add phzr-game)
        dialogue-box-entity (b.entity/create-entity)
        group (f.group/create-phzr-group phzr-game "dialogue box" 0 0)
        background-sprite (p.factory/sprite factory 0 0 "dialogue-background" 0 group)
        character-sprite (p.factory/sprite factory 384 192 "main-character" 0 group)
        textbox-sprite (p.factory/sprite factory 9 400 "panel" 0 group)
        textbox-text (p.factory/text factory 0 0 textbox-test-text)]
    (doto background-sprite
      (p.core/pset! :input-enabled true) ; So it blocks other input
      (-> :input (p.core/pset! :priority-id 2))
      (p.core/pset! :tint 16rffffff)
      (p.core/pset! :alpha 0.95))
    (p.sprite/add-child textbox-sprite textbox-text)
    (doto textbox-text
      (p.core/pset! :font "Cutive, Courier, MS Courier New, monospace")
      (p.core/pset! :fill "#000000")
      (p.core/pset! :align "left")
      (p.core/pset! :word-wrap true)
      (p.core/pset! :word-wrap-width (- (:width textbox-sprite) 100))
      (p.core/pset! :x 40)
      (p.core/pset! :y 15))
    (p.core/pset! group :visible false)
    (-> system
        (assoc :active-dialogue (:introduction dialogues))
        (b.entity/add-entity dialogue-box-entity)
        (b.entity/add-component dialogue-box-entity (f.component/->DialogueBox group background-sprite textbox-sprite textbox-text character-sprite)))))

(defn advance-dialogue [system]
  (let [{:keys [active-dialogue] :as sys} system
        {:keys [group textbox-text character-sprite]} (f.component/get-singleton-component sys f.component/DialogueBox)
        {:keys [frame text] :as dialogue} (peek active-dialogue)
        next-dialogues (if (nil? dialogue) nil (pop active-dialogue))]
    (if (nil? dialogue)
      (do
        (p.core/pset! group :visible false)
        (dissoc sys :active-dialogue))
      (do
        (p.core/pset! character-sprite :frame frame)
        (p.core/pset! textbox-text :text text)
        (p.core/pset! group :visible true)
        (assoc sys :active-dialogue next-dialogues)))))

(defn process-one-game-tick [system]
  (let [input-handler (-> system :phzr-game :input)
        active-pointer (:active-pointer input-handler)]
    (if (and (:active-dialogue system)
             (f.input/blackout-expired? system :clicked-dialogue)
             active-pointer
             (p.pointer/just-released active-pointer f.input/default-input-threshold))
      (-> system (f.input/update-blackout-property :clicked-dialogue) (advance-dialogue))
      system)))

