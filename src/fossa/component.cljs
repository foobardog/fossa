(ns fossa.component
  (:require [brute.entity :as b.entity]))

(defn get-singleton-component
  ([system component]
   (-> system
       (b.entity/get-all-entities-with-component component)
       (first)
       (as-> entity (b.entity/get-component system entity component))))
  ([system singleton-type component-type]
   (-> system
       (b.entity/get-all-entities-with-component singleton-type)
       (first)
       (as-> entity (b.entity/get-component system entity component-type)))))

; Rendering components
(defrecord Sprite [phzr-sprite])
(defn get-phzr-sprite-from-entity [system entity]
  (-> (b.entity/get-component system entity Sprite)
      :phzr-sprite))

(defrecord Tween [phzr-tween])
(defn get-phzr-tween-from-entity [system entity]
  (-> (b.entity/get-component system entity Tween)
      :phzr-tween))

(defrecord Text [phzr-text])
(defn get-phzr-text-from-entity [system entity]
  (-> (b.entity/get-component system entity Text)
      :phzr-text))

(defrecord ResultsNavigation [current-result previous-text next-text])

; Hybrid components
(defrecord Group [phzr-group members])
(defn get-phzr-group-from-entity [system entity]
  (-> (b.entity/get-component system entity Group)
      :phzr-group))
(defn get-group-members-from-entity [system entity]
  (-> (b.entity/get-component system entity Group)
      :members))

(defrecord MovementButtons [movement-buttons group])

; Game components
(defrecord Background[])
(defrecord ExplorationPath [direction active])

(defrecord PartyMember [member-name is-liar])
(defn get-member-name-from-entity [system entity]
  (-> (b.entity/get-component system entity PartyMember)
      :member-name))

(defrecord UnassignedMembers [])
(defrecord Dungeon [rooms current-room])
(defrecord ExploreButton [phzr-button])
(defrecord ExplorationResults [previous-results])
