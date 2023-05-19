open UniverseJs
open Color
open Image
open World
open Utility

type world_t = {
  cat : int * int;
  y : int;
  down : bool;
}

let f x =
  2 * x + 0
let a = 2
let b = 5
  
let catx = 0
let caty = 100
let input = f 0
let width = 600
let height = 600
let rec make_lines v3 v2 =
  if v2 = 0 then v3
  else make_lines (line [(width, 0)] (make_color 0 0 0 ~alpha:30) :: (line [(0, height)] (make_color 0 0 0 ~alpha:30) :: v3)) (v2 - 1)
let rec make_positions v5 v7 =
  if v7 = 0 then v5
  else make_positions ((300, v7 * 20) :: ((v7 * 20, 300) :: v5)) (v7 - 1)
let rec make_ladder v8 v10 =
  if v10 = 0 then v8
  else make_ladder (line [(30, 20)] Color.black :: v8) (v10 - 1)
let rec make_ladder_positions v v12 v13 =
  if v12 = 0 then v
  else (let x = v13 - (v12 * (35 / a) - 3)
  in make_ladder_positions ((x, a * x) :: v) (v12 - 1) v13)
let draw_cat {cat = (x4, y5); y = y2_v; down = down2_v} v4 =
  let d v6 =
  List.map (let f (x3, y3) =
  (x3 + 300, (300 - y3) - v6 * 20)
  in f) (make_ladder_positions [((catx - 15) - (200 / a) / 2, a * catx - ((200 / a) * a) / 2); ((catx + 15) - (200 / a) / 2, a * catx - ((200 / a) * a) / 2); (0, 0)] 5 catx)
  in (let e = make_ladder [line [(200 / a, 0 - (200 / a) * a)] Color.black; line [(200 / a, 0 - (200 / a) * a)] Color.black; line [(width, 0 - a * width)] (make_color 0 0 0 ~alpha:90)] 5
  in (if down2_v then place_images e (d input) (place_image (read_image "https://4.bp.blogspot.com/-BpE6K5Fxoz8/XAY5oynltOI/AAAAAAABQdM/GBzM-1Fa2LwlTF3N0WXbOWYqibxCPnfPwCLcBGAs/s800/cat06_moyou_chatora.png" 120 120) (x4 + 280, 250 - y5) (place_image (polygon [(130, -5); (0, 20); (-130, -5)] (make_color 128 92 52)) (catx + 300, 300 - caty) (place_image (polygon [(130, 0); (-8, 100); (-120, 0)] Color.white) (catx + 300, 280 - caty) v4)))
  else place_images e (d y2_v) v4))
let draw {cat = (x5, y4); y = y_v; down = down_v} =
  place_images (make_lines [] 30) (make_positions [] 30) (place_image (line [(0, height)] Color.black) (width / 2, height / 2) (place_image (line [(width, 0)] Color.black) (width / 2, height / 2) (place_image (circle 3 (if down_v then make_color 255 0 120 ~alpha:0
  else Color.cyan)) (x5 + 300, 300 - y4) (draw_cat {cat = (x5, y4); y = y_v; down = down_v} (place_image (read_image "https://3.bp.blogspot.com/-2VlXgRbFJzU/WzC9bcsGpjI/AAAAAAABM4k/NrTCHmilioMi2WvVfeb_iZusOzmUqw-qgCLcBGAs/s800/cat_tree_orirarenai.png" 200 200) (catx + 300, 320 - caty) (place_image (rectangle 42 100 (make_color 128 92 52)) (catx + 368, 450 - caty) (empty_scene width height)))))))
let on_tick {cat = (x2, y2); y = y; down = down} =
  if down then {cat = (x2 - 20, y2 - a * 20); y = y - 1; down = down}
  else if y = input then {cat = (x2, y2); y = 10 / a; down = true}
  else {cat = (x2, y2); y = y + 1; down = down}
let stop {cat = cat_v; y = y3_v; down = down3_v} =
  y3_v = input && input <> b || down3_v && y3_v = 0
let draw_last {cat = cat4_v; y = y6_v; down = down6_v} =
  if down6_v then place_image (text "CLEAR" 30 Color.red) (300, 250) (draw {cat = cat4_v; y = y6_v; down = down6_v})
  else place_image (text "GAME OVER" 30 Color.red) (300, 250) (draw {cat = cat4_v; y = y6_v; down = down6_v})
;; big_bang {cat = (catx, caty); y = 0; down = false}
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~stop_when:stop
  ~to_draw_last:draw_last



