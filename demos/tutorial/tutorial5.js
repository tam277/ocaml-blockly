var Tutorial = {};

text = [];
introlst = [];

text[0] = "2+3";
introlst[0] = [
    {
        "text": [
            [],
            [
                {
                    "intro": "出てきたブロックの中から四則演算ブロックをドラッグして\nメインスペースへ"
                }
            ],
            [
                {
                    "intro": "これで、プラスのブロックを配置できました。\n次に、プラスブロックのふたつの穴に数字を入れます。\n数字ブロックは四則演算メニューにあります。"
                }
            ],
            [],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 1
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "四則演算ブロックの左側にはめます"
                }
            ],
            [
                {
                    "intro": "値を変更するには、数字のところをクリックして\nキーボードから入力します。\n"
                }
            ],
            [
                {
                    "intro": "最後に、もうひとつの穴にも整数ブロックを入れて\n値を 3 に変更しましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 2,
        "target": [
            0,
            "A"
        ],
        "value": [
            "2",
            "2"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            [
                {
                    "intro": "2 + 3 のブロックが完成しました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 3,
        "target": [
            0,
            "B"
        ],
        "value": [
            "3",
            "3"
        ]
    }
];

text[1] = "変数定義";
introlst[1] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、width という名前の変数を定義します。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "これで変数 width を定義する let ブロックを配置できました。\n変数 width の値は 500 にしてみましょう。"
                }
            ],
            [],
            []
        ],
        "category": 8,
        "block": 1,
        "id": 1
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "数字ブロックを let ブロックにつなげましょう。\n"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで width という変数を定義して、その値を 500 とすることが\nできました。\nwidth という変数は、この let ブロックの下で使うことができます。\n例えば、width の半分を表す half という変数を定義してみましょう。\n"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 2,
        "target": [
            0,
            "EXP1"
        ],
        "value": [
            "500",
            "500"
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "half の値は width の半分にしたいので、\n四則演算ブロックを使います。"
                }
            ],
            [
                {
                    "intro": "let ブロックをドラッグして、width を定義する let ブロックの下に\nつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "次に、変数名を half に変更します。\n変数名をクリックして、Rename variable... を選択します。出てきたダイアログの入力欄にhalf と入力して OK を押します。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 0,
        "id": 3,
        "target": [
            0,
            "NEXT"
        ],
        "name": "half"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "足し算ブロックをドラッグして half を定義する let ブロックに\nつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "+ をクリックして / に変更します。"
                }
            ],
            [
                {
                    "intro": "ここで、いよいよ変数 width を使います。\nwidth をドラッグして、割り算ブロックの左側につなぎます。\n（変数ブロックは、自分の下のブロックでしか使えません。）"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "id": 4,
        "target": [
            2,
            "EXP1"
        ],
        "value": [
            "/",
            "DIVIDE_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "割り算ブロックの右側には、数字の 2 を入れます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 5,
        "target": [
            3,
            "A"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、割り算ブロックの右側に\nつなぎます。"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで width の半分を示す変数 half を定義できました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 6,
        "target": [
            3,
            "B"
        ],
        "value": [
            "2",
            "2"
        ]
    }
];

text[2] = "関数定義";
introlst[2] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、関数 f(x) = x + 1 を作ります。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "関数 f の引数（パラメタ）のブロックは「パ」ボタンにあります。"
                }
            ],
            [],
            []
        ],
        "category": 9,
        "block": 1,
        "id": 1
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "変数のブロックを let ブロックの最初のコネクタにつなぎます。\n"
                }
            ],
            [],
            [
                {
                    "intro": "変数の名前を x に変更しましょう。\n変数名をクリックして、Rename variable... を選択し、\nx に変更して OK を押します。"
                }
            ],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            0,
            "ARG0"
        ],
        "name": "x"
    },
    {
        "text": [
            [
                {
                    "intro": "f(x) の本体部分は x + 1 なので、\n足し算ブロックをメインスペースにドラッグ"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            false
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "let ブロックのふたつ目のコネクタにつなぎます"
                }
            ],
            [],
            [
                {
                    "intro": "x をドラッグして、足し算ブロックの左側のコネクタにつなぎます。"
                }
            ],
            []
        ],
        "category": 0,
        "block": 1,
        "id": 3,
        "target": [
            0,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "足し算ブロックの右側には、数字の 1 を入れます。"
                }
            ],
            []
        ],
        "variable": 1,
        "category": 10,
        "block": 0,
        "id": 4,
        "target": [
            2,
            "A"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、足し算ブロックの右側に\nつなぎます。"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで関数 f を表すブロックができました。\nそれでは f(3) の値を計算してみましょう"
                },
                {
                    "intro": "まず、関数 f のブロックの下に、もうひとつ変数ブロックをつなげます。\n"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 5,
        "target": [
            2,
            "B"
        ],
        "value": [
            "1",
            "1"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして関数 f のブロックの下につなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "関数を使うには、関数名をドラッグします。\nf をドラッグして変数ブロックにつなげましょう。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 0,
        "id": 6,
        "target": [
            0,
            "NEXT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "f の引数には 3 を入れます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 7,
        "target": [
            5,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、f のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで f(3) を表すブロックができました。\n値をみるためには実行ボタンを押します。"
                },
                {
                    "intro": "次に、関数 f を２引数関数 f(x, y) = x + y に変更してみましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 8,
        "target": [
            6,
            "PARAM0"
        ],
        "value": [
            "3",
            "3"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "parameter を右側の parameter の下に追加します"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "newvalue": "2",
        "oldvalue": "1",
        "add": true
    },
    {
        "text": [
            [
                {
                    "intro": "関数 f のふたつ目のパラメタのブロックを作ります。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "変数のブロックを f のブロックのふたつ目のコネクタにつなぎます。\n"
                }
            ],
            [],
            [
                {
                    "intro": "変数の名前を y に変更しましょう。\n変数名をクリックして、Rename variable... を選択し、\ny に変更して OK を押します。"
                }
            ],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 9,
        "target": [
            0,
            "ARG1"
        ],
        "name": "y"
    },
    {
        "text": [
            [
                {
                    "intro": "この 1 のブロックを変数 y のブロックに置き換えます。\nまず、1 のブロックをドラッグしてゴミ箱に移動します。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            false
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "y をドラッグして、足し算ブロックの右側のコネクタにつなぎます。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "trash": 4
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "f(3, 4) を求めるには、f のふたつめのパラメタに 4 を入れます。"
                }
            ],
            []
        ],
        "variable": 8,
        "category": 10,
        "block": 0,
        "id": 10,
        "target": [
            2,
            "B"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、f のふたつ目のコネクタにつなぎます。\n"
                }
            ],
            [],
            [],
            [
                {
                    "intro": "これで f(3, 4) を表すブロックができました。\n値をみるためには実行ボタンを押します。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "id": 11,
        "target": [
            6,
            "PARAM1"
        ],
        "value": [
            "4",
            "4"
        ]
    }
];

text[3] = "big_bangの歯車ボタン";
introlst[3] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、big_bang ブロックの歯車ボタンの使い方をみます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [
                {
                    "intro": "big_bang ブロックのいろいろな機能は、\n歯車ボタンを使って使えるようにします。\n"
                }
            ],
            [],
            []
        ],
        "category": 8,
        "block": 8,
        "id": 1
    },
    {
        "text": [
            [ 
               {
                    "intro": "画面の高さを指定できるようにするには ~height ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [
                {
                    "intro": "画面の幅を指定できるようにするには ~width ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "width=\"1\"",
        "oldvalue": null,
        "item": "world_width_item",
        "add": -1
    },
    {
        "text": [
            [
                {
                    "intro": "これで、画面の幅と高さを指定できるようになりました。\n同様にして、他のブロックを右の big_bang のところにつなげると、\nその機能が使えるようになります。"
                }
            ],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": true,
        "bigbang": true,
        "newvalue": "width=\"1\" height=\"1\"",
        "oldvalue": "width=\"1\"",
        "item": "world_height_item",
        "add": 1
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    }
];

text[4] = "draw関数の登録";
introlst[4] = [
    {
        "text": [
            [
                {
                    "intro": "ここでは、draw 関数を big_bang に登録する方法をみます。"
                }
            ]
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "すると big_bang ブロックに draw 関数を登録する場所が現れます。"
                }
            ],
            [
                {
                    "intro": "draw 関数を登録するには ~to_draw ブロックをドラッグして、\n右の big_bang のところにつなげます"
                }
            ],
            [],
            [],
            []
        ],
        "mutator": [
            1
        ],
        "open": false,
        "bigbang": true,
        "newvalue": "draw=\"1\"",
        "oldvalue": null,
        "item": "world_draw_item",
        "add": -1
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "draw 関数を big_bang ブロックに登録するには、\nオプションキー（または alt キー）を押しながら\nドラッグして、big_bnag ブロックにつなげます。\nオプションキーを押すことで、引数なしのブロック（穴のあいて\nいないブロック）を作れるようになります。"
                }],
            [],
            [],
            []
        ],
        "mutator": [
            1,
            false
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "これで、draw 関数の登録ができました。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 3,
        "target": [
            1,
            "DRAW"
        ]
    }
]

var step = 0;
Tutorial.intro = introJs();

var lst;
var a;
var menulst;
var blocklst;
var idlst = [];
var initidlst = [];
var f;
var alertflg = 0;

var box = document.createElement("div");
var box2 = document.createElement("div");
var box3 = document.createElement("div");
var box4 = document.createElement("div");
var box5 = document.createElement("div");
var box6 = document.createElement("div");
var box7 = document.createElement("div");
var box8 = document.createElement("div");

function draw_rect(rec) {
    rect = rec.getBoundingClientRect();
    box.setAttribute("style", "width:" + (rect.width+10) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box2.setAttribute("style", "width:" + (rect.width+15) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.bottom+5) + "px; background:red;");
    box3.setAttribute("style", "width:5px; height:" + (rect.height+10) + "px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box4.setAttribute("style", "width:5px; height:" + (rect.height+15) + "px; left:" + (rect.right+5) + "px; top:" + (rect.top-5) + "px; background:red;");
	box.setAttribute("class", "tutorialBox");
	box2.setAttribute("class", "tutorialBox");
	box3.setAttribute("class", "tutorialBox");
	box4.setAttribute("class", "tutorialBox");
	document.querySelector("body").appendChild(box);
	document.querySelector("body").appendChild(box2);
	document.querySelector("body").appendChild(box3);
	document.querySelector("body").appendChild(box4);
}

function draw_rect2(x, y, width, height) {
    scale = Blockly.mainWorkspace.scale;
    x2 = Blockly.mainWorkspace.toolbox_.width + Blockly.mainWorkspace.scrollX + (x - 10) * scale;
    box5.setAttribute("style", "width:" + ((width+10)*scale) + "px; height:5px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box6.setAttribute("style", "width:" + ((width+10)*scale+5) + "px; height:5px; left:" + x2 + "px; top:" + ((y+height+5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box7.setAttribute("style", "width:5px; height:" + ((height+10)*scale) + "px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box8.setAttribute("style", "width:5px; height:" + ((height+10)*scale+5) + "px; left:" + (x2+(width+10)*scale) + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box5.setAttribute("class", "tutorialBox");
    box6.setAttribute("class", "tutorialBox");
    box7.setAttribute("class", "tutorialBox");
    box8.setAttribute("class", "tutorialBox");
    document.querySelector("body").appendChild(box5);
    document.querySelector("body").appendChild(box6);
    document.querySelector("body").appendChild(box7);
    document.querySelector("body").appendChild(box8);
}

function dark() {
    rect = document.body.getBoundingClientRect();
    div = document.createElement("div");
    div.setAttribute("style", "width:" + rect.width + "px; height:" + rect.height + "px; left:" + rect.left + "px; top:" +rect.top + "px; background:Black; opacity: 0.4");
    div.setAttribute("class", "tutorialBox");
    document.body.appendChild(div);
}

function clear_rect() {
    while ((div = document.querySelector("div[class='tutorialBox']")) != null) {
	document.querySelector("body").removeChild(div);
    }
}

menulst = ["四則演算", "文字列", "論理演算と条件文", "色", "画像", "風景", "リスト", "座標と世界の定義", "ゲーム用の定義", "一般の変数と関数"];

blocklst = [[["int_typed", "整数", "INT"],
	     ["int_arithmetic_typed", "四則演算", "OP_INT"],
	     ["int_abs_typed", "abs"],
	     ["random_int_typed", "乱数"]],
	    [["string_typed", "文字列", "STRING"],
	     ["concat_string_typed", "文字列結合"],
	     ["string_of_int_typed", "string_of_int"]],
	    [["logic_compare_typed", "比較演算", "OP"],
	     ["logic_operator_typed", "論理演算", "OP_BOOL"],
	     ["not_operator_typed", "not"],
	     ["logic_ternary_typed", "if"],
	     ["logic_boolean_typed", "true", "BOOL"]],
	    [["color_typed", "color", "COLOR"],
	     ["make_color_typed", "make_color"],
	     ["make_color2_typed", "make_color2"]],
	    [["image_width_typed", "image_width"],
	     ["image_height_typed", "image_height"],
	     ["read_image_typed", "read_image"],
	     ["rectangle_typed", "rectangle", "IMAGE"],
	     ["circle_typed", "circle", "IMAGE"],
	     ["line_typed", "line"],
	     ["polygon_typed", "polygon", "IMAGE"],
	     ["text_typed", "text"],
	     ["overlay_typed", "overlay"]],
	    [["empty_scene_typed", "empty_scene"],
	     ["place_image_typed", "place_image"],
	     ["place_images_typed", "place_images"]],
	    [["lists_create_with_typed", "リスト"],
	     ["list_cons_typed", "cons"],
	     ["list_map_typed", "map"],
	     ["andmap_typed", "andmap"],
	     ["ormap_typed", "ormap"],
	     ["sum_typed", "sum"],
	     ["list_filter_typed", "filter"]],
	    [["pair_create_typed", "組"],
	     ["defined_recordtype_typed", "world_t", "DATANAME", "FIELDn"],
	     ["defined_recordtype_typed", "レコード定義", "DATANAME"]],
	    [["letstatement_typed", "initial_world", "VAR"],
	     ["letstatement_typed", "width", "VAR"],
	     ["letstatement_typed", "height", "VAR"],
	     ["letstatement_fun_pattern_typed", "draw", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_tick", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_key", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_mouse", "VAR"],
	     ["letstatement_typed", "rate", "VAR"],
	     ["big_bang_typed", "big_bang"]],
	    [["letstatement_fun_pattern_typed", "変数定義", "VAR"],
	     ["letstatement_fun_pattern_typed", "関数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所変数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所関数定義", "VAR"]],
	    [["variable_pattern_typed", "パラメータ", "VAR"],
	     ["pair_pattern_typed", "パラメータ", "VAR"],
	     ["record_pattern_typed", "パラメータ", "VAR"],
	     ["empty_construct_pattern_typed", "パラメータ", "VAR"],
	     ["cons_construct_pattern_typed", "パラメータ", "VAR"],
	     ["option_none_pattern_typed", "パラメータ", "VAR"],
	     ["option_some_pattern_typed", "パラメータ", "VAR"],]];

Tutorial.clear = function() {
    Tutorial.intro.addSteps([{intro: "チュートリアルクリア"}]).onchange(function(){}).start();
}

Tutorial.error = function() {
    alert("エラー！最初からやり直してください");
    Blockly.mainWorkspace.clear();
    Tutorial.f(lst);
}

Tutorial.cancel = function(e, f, g) {
    if (e.__proto__.type == "change" && e.element == "field" && lst[idlst.indexOf(e.blockId)]) {
	b = lst.filter(function(x){x.id == idlst.indexOf(e.blockId)})[0];
	if (b.value == undefined) {
	    value = Blockly.FieldTextInput.htmlInput_.defaultValue;
	}
	else value = b.value[1];
	if (e.newValue == value) {
	    alertflg = 0;
	}
	else if (alertflg == 0) {
	    alertflg = 1;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.selected.unselect();
	    Blockly.mainWorkspace.getBlockById(e.blockId).getField(blocklst[b.category][b.block][2]).setValue(value);
	    Blockly.FieldTextInput.htmlInput_.value = value;
	    g();
	}
	else {
	}
    }
    else if (e.__proto__.type == "create" || e.__proto__.type == "delete" || ((e.__proto__.type == "move" && (e.newParentId != undefined || e.oldParentId != undefined)) || e.__proto__.type == "change" || e.__proto__.type == "bound_var_rename")) {
	if (alertflg == 1) {
	    alertflg = 0;
	}
	else {
	    alertflg = 1;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.mainWorkspace.undo();
	    if (e.__proto__.type != "create" && Blockly.mainWorkspace.getBlockById(e.blockId) == null) {
		window.setTimeout(Tutorial.error, 11);
	    }
	    else {
		g();
	    }
	}
    }
}

function ondrag(x, y, s, g, n) {
    if (dragflg != n) {
    }
    else if (x == Blockly.mainWorkspace.scrollX &&
	     y == Blockly.mainWorkspace.scrollY &&
	     s == Blockly.mainWorkspace.scale) {
	window.setTimeout(function(){ondrag(x, y, s, g, n);}, 1000);
    }
    else {
	Tutorial.intro.exit();
	Blockly.mainWorkspace.removeChangeListener(f);
	g();
    }
}

Tutorial.f = function(l) {
    idlst = initidlst;
    step = 0;
    lst = l;
    if (lst.length > 0 && lst[0].text.length == 1) {
	Tutorial.intro.setOptions({'steps': lst[0].text[0].slice()});
	step++;
    }
    else {
	Tutorial.intro.setOptions({'steps': []});
    }
    Tutorial.f0();
}

Tutorial.f0 = function() {
    console.log("f0");
    if (a = lst[step]) {
	if (a.trash != undefined) {
	    Tutorial.f9();
	}
	else if (a.variable == undefined && a.workbench == undefined && a.mutator == undefined) {
	    Tutorial.f1();
	}
	else {
	    Tutorial.f6(null);
	}
    }
    else {
	Tutorial.clear();
    }
}

Tutorial.f1 = function() {
    console.log("f1");
    x = a.category;
    if (x < 9) {
	x2 = x+1;
    }
    else {
	x2 = "a";
    }
    target = document.querySelector("div[aria-labelledby=':"+(x2)+".label']");
    Tutorial.intro.addSteps([{element: target, intro: menulst[x]+"をクリック"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == menulst[x]) {
	    Tutorial.intro.exit();
	    Tutorial.intro.onchange(function(e1){console.log(e1)});
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[1].slice()});
	    Tutorial.f2();
	}
    });
}

Tutorial.f2 = function() {
    console.log("f2");
    x = a.category;
    y = a.block;
    target = Blockly.mainWorkspace.toolbox_.flyout_.mats_[y];
    if (target.getAttribute("y") > Blockly.mainWorkspace.toolbox_.flyout_.height_) {
	Blockly.mainWorkspace.toolbox_.flyout_.scrollbar_.set(target.getAttribute("y") + target.getAttribute("height") - Blockly.mainWorkspace.toolbox_.flyout_.height_)
    }
    Tutorial.intro.addSteps([{element: target, intro: blocklst[x][y][1]+"ブロックをメインスペースにドラッグ"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == blocklst[x][y][0]){
	    idlst.push(e.blockId);
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[2].slice()});
	    Tutorial.f3();
	}
	else if (e.__proto__.type == "ui") {
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.setOptions({'steps': []});
	    Tutorial.f1();
	}
	else {
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f2);
	}
    });
}

Tutorial.f3 = function() {
    console.log("f3");
    if (a.target) {
	dragflg = 1;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f3, 1);
	target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
	if (a.target[1] == "NEXT") {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.nextConnection;draw_rect2(input.x_-15, input.y_, 24, 0);}}).start();
	}
	else {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.getInput(a.target[1]);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).start();
	}
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    block = Blockly.mainWorkspace.getBlockById(e.blockId);
	    if (e.__proto__.type == "move" && block.type == blocklst[a.category][a.block][0] && e.newParentId == target.id && (e.newInputName == a.target[1] || (a.target[1] == "NEXT" && e.newInputName == undefined))) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[3].slice()});
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f3();
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f3);
	    }
	});
    }
    else {
	Tutorial.f4();
    }
}

Tutorial.f4 = function() {
    console.log("f4");
    if (a.value) {
	dragflg = 2;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f4, 2);
	block = Blockly.mainWorkspace.getBlockById(idlst[idlst.length-1]);
	field = block.getField(blocklst[a.category][a.block][2])
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: a.value[0]+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "change" && e.newValue == a.value[1]) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[4].slice()});
		Tutorial.f5();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "change" && e.element == "field" && e.blockId == idlst[idlst.length-1]) {
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f4);
	    }
	});
    }
    else {
	Tutorial.f5();
    }
}

Tutorial.f5 = function() {
    if (a.name != undefined) {
	dragflg = 3;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f5, 3);
	block = Blockly.mainWorkspace.getBlockById(idlst[idlst.length-1]);
	field = block.getField(blocklst[a.category][a.block][2])
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: '名前を'+a.name+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "bound_var_rename" && field.getText() == a.name) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[0].slice()});
		step++;
		Tutorial.f0();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f5();
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f5);
	    }
	});
    }
    else {
	step++;
	Tutorial.f0();
    }
}

Tutorial.f6 = function() {
    if (a.open != true) {
	if (a.workbench || a.mutator != undefined) {
	    dragflg = 4;
	    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f6, 4);
	    if (a.workbench) {
		block = Blockly.mainWorkspace.getBlockById(idlst[a.workbench[0]]);
		icon = block.workbenches[1].iconGroup_;
		str = "「パ」";
		el = "workbenchOpen";
		next = function(){Tutorial.f7(null);};
	    }
	    else {
		block = Blockly.mainWorkspace.getBlockById(idlst[a.mutator[0]]);
		icon = block.mutator.iconGroup_;
		str = "歯車";
		el = "mutatorOpen";
		next = Tutorial.f8;
	    }
	    if ((a.workbench && a.workbench[1] == false) || (a.mutator && a.mutator[1] == false)) {
		txt = "メニューを閉じる";
		next = function(){step++; Tutorial.f0();};
	    }
	    else {
		txt = str+'ボタンをクリック'
	    }
	    Tutorial.intro.addSteps([{element: icon, intro: txt}]).onchange(function(e){if(e!=icon){dark();}else{clear_rect();draw_rect(icon);}}).start();
	    Blockly.mainWorkspace.addChangeListener(f = function(e){
		if (e.element == el && e.blockId == block.id) {
		    dragflg = 0;
		    Tutorial.intro.exit();
		    clear_rect();
		    Blockly.mainWorkspace.removeChangeListener(f);
		    Tutorial.intro.setOptions({'steps': a.text[1].slice()});
		    next();
		}
		else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		    dragflg = 0;
		    Tutorial.intro.exit();
		    clear_rect();
		    Blockly.mainWorkspace.removeChangeListener(f);
		    Tutorial.intro.setOptions({'steps': []});
		    Tutorial.f6();
		}
		else {
		    dragflg = 0;
		    Tutorial.intro.setOptions({'steps': []});
		    Tutorial.cancel(e, f, Tutorial.f6);
		}
	    });
	}
	else {
	    Tutorial.f7(null);
	}
    }
    else {
	Tutorial.f8();
    }
}

Tutorial.f7 = function(arg) {
    dragflg = 5;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, function(){Tutorial.f7(arg)}, 5);
    target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
    input = target.getInput(a.target[1]);
    if (a.variable == undefined) {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.workbench[0]]).workbenches[1].workspace_.flyout_.mats_[a.workbench[1]];
    }
    else {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.variable]).getField("VAR").fieldGroup_;
    }
    Tutorial.intro.onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();draw_rect(block);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).start();
    id = arg;
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "move" && (a.workbench != undefined || idlst[a.variable]) && e.blockId == id && e.newParentId == target.id && e.newInputName == a.target[1]) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[3].slice()});
	    if (a.workbench != undefined && a.name != undefined) {
		Tutorial.f5();
	    }
	    else {
		step++
		Tutorial.f0();
	    }
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f7(id);
	}
	else if (e.__proto__.type == "change" && e.element == "inline" && ((a.variable != undefined && Blockly.mainWorkspace.getBlockById(e.blockId).typedReference.VAR.value_.sourceBlock_.id == idlst[a.variable]) || (a.workbench != undefined && block.tooltip.type == Blockly.mainWorkspace.getBlockById(e.blockId).type))) {
	    id = e.blockId;
	    idlst.push(id);
	}
	else if (e.__proto__.type == "create" && e.blockId == id) {
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, function(){Tutorial.f7(null)});
	}
    });
}

Tutorial.f8 = function() {
    dragflg = 6;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f8, 6);
    block = Blockly.mainWorkspace.getBlockById(idlst[a.mutator]);
    console.log(block);
    console.log(block.mutator);
    ws = block.mutator.workspace_;
    b = ws.getTopBlocks(true)[0];
    if (a.bigbang) {
	if (a.add > 0) {
	    max = a.add;
	}
	else {
	    max = 0;
	}
	n = block.mutator.quarkNames_.indexOf(a.item);
	el = block.mutator.workspace_.flyout_.mats_[n];
	txt = "";
	txt2 = "";
    }
    else {
	max = a.oldvalue;
	el = block.mutator.workspace_.flyout_.mats_[0];
	txt = 'items=\"';
	txt2 = '\"';
    }
    for (var i=0; i<max; i++) {
	b = b.getChildren()[0];
    }
    if (a.add) {
	if (max == 0) {
	    connection = b.inputList[1].connection;
	}
	else {
	    connection = b.nextConnection;
	}
	Tutorial.intro.addSteps([{element: el, intro: 'ブロックをくっつける', position: 'bottom'}]).onchange(function(e){if(e!=el){dark();}else{clear_rect();draw_rect(el);draw_rect2(connection.x_+ws.workspaceArea_.left-Blockly.mainWorkspace.toolbox_.width-15, connection.y_+ws.workspaceArea_.top, 24, 0)}}).start();
    }
    else {
	if (a.bigbang) {
	    el = block.mutator.workspace_.typedBlocksDB_[a.item][0].svgPath_;
	}
	else {
	    for (var i=1; i<a.oldvalue-a.newvalue; i++) {
		b = b.getParent();
	    }
	    el = b.svgGroup_;
	}
	Tutorial.intro.addSteps([{element: el, intro: 'ブロックを外す', position: 'top'}]).onchange(function(e){if(e!=el){dark();}else{clear_rect();draw_rect(el)}}).start();
    }
    if (a.newvalue == null) {
	newvalue = null;
    }
    else {
	newvalue = '<mutation xmlns=\"http://www.w3.org/1999/xhtml\" '+txt+a.newvalue+txt2+'></mutation>';
    }
    if (a.oldvalue == null) {
	oldvalue = null;
    }
    else {
	oldvalue = '<mutation xmlns=\"http://www.w3.org/1999/xhtml\" '+txt+a.oldvalue+txt2+'></mutation>';
    }
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "change" && e.element == "mutation" && e.blockId == idlst[a.mutator] && e.newValue == newvalue && e.oldValue == oldvalue) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f8();
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f8);
	}
    });
}

Tutorial.f9 = function() {
    dragflg = 7;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f9, 7);
    if (Blockly.mainWorkspace.getBlockById(idlst[a.trash]) != null) {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.trash]).svgPath_;
    trs = document.querySelector("g[class='blocklyTrash']");
	Tutorial.intro.addSteps([{element: trs, intro: 'ブロックをゴミ箱にドラッグ'}]).onchange(function(e){if(e!=trs){dark();}else{clear_rect();draw_rect(block);}}).start();}
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "delete" && e.blockId == idlst[a.trash]) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f9();
	}
	else if (e.__proto__.type == "move" && e.blockId == idlst[a.trash]) {
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f9);
	}
    });
}

function introstart(n) {
    Blockly.mainWorkspace.clear();
    const code ="let draw v = place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" 100 100) (50, 50) (empty_scene 200 200);; big_bang 0";
    if (code) {
        openModal();
        setTimeout(function() {
            BlockOfOCamlUtils.codeToBlock(code);
            closeModal();
        }, 100);
        setTimeout(function() {
	    id1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true)[0].id;
	    id2 = Blockly.mainWorkspace.getBlocksByType("big_bang_typed", true)[0].id;
	    initidlst = [id1, id2];
	    Tutorial.f(introlst[n]);
	}, 200);
    }
}

Tutorial.main = function() {
    div = [];
    start = [];
    for (var i=0; i < introlst.length; i++) {
	div[i] = document.createElement("div");
	div[i].innerHTML = "<br>"+text[i];
	document.querySelector("div[class='blockToCode']").appendChild(div[i]);
	start[i] = document.createElement("button");
	start[i].textContent = "チュートリアルスタート";
	Tutorial.intro.setOptions({
	    nextToDone: false,
	    exitOnOverlayClick: false}).onexit(function(){clear_rect(); Blockly.mainWorkspace.removeChangeListener(f);});
	start[i].id = i;
	if (i == 4) {
	    start[i].onclick = function(e) {
		console.log(e);
		Tutorial.intro.exit();
		 step = 0;
		introstart(e.target.id);
	     };
	}
	else {
	    start[i].onclick = function(e) {
		Tutorial.intro.exit();
		step = 0;
		initidlst = [];
		Tutorial.f(introlst[e.target.id]);
	    };
	}
	document.querySelector("div[class='blockToCode']").appendChild(start[i]);
    }
}
