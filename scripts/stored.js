/* SCRIPT JUST FOR STORING JSON DATA*/ 

/*Ideally each variable would just be it's own file.
Some groupings like tools and wood are just often made together,
where as some like the bows require all jsons in their group.*/

const axe = "{\r\n  \"type\": \"minecraft:crafting_shaped\",\r\n  \"category\": \"equipment\",\r\n  \"key\": {\r\n    \"#\": {\r\n      \"item\": \"minecraft:stick\"\r\n    },\r\n    \"X\": {\r\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\r\n    }\r\n  },\r\n  \"pattern\": [\r\n    \"XX\",\r\n    \"X#\",\r\n    \" #\"\r\n  ],\r\n  \"result\": {\r\n    \"item\": \"/*minecraft*/:/*iron*/_axe\"\r\n  },\r\n  \"show_notification\": true\r\n}";
const hoe = "{\r\n  \"type\": \"minecraft:crafting_shaped\",\r\n  \"category\": \"equipment\",\r\n  \"key\": {\r\n    \"#\": {\r\n      \"item\": \"minecraft:stick\"\r\n    },\r\n    \"X\": {\r\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\r\n    }\r\n  },\r\n  \"pattern\": [\r\n    \"XX\",\r\n    \" #\",\r\n    \" #\"\r\n  ],\r\n  \"result\": {\r\n    \"item\": \"/*minecraft*/:/*iron*/_hoe\"\r\n  },\r\n  \"show_notification\": true\r\n}";
const pickaxe = "{\r\n  \"type\": \"minecraft:crafting_shaped\",\r\n  \"category\": \"equipment\",\r\n  \"key\": {\r\n    \"#\": {\r\n      \"item\": \"minecraft:stick\"\r\n    },\r\n    \"X\": {\r\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\r\n    }\r\n  },\r\n  \"pattern\": [\r\n    \"XXX\",\r\n    \" # \",\r\n    \" # \"\r\n  ],\r\n  \"result\": {\r\n    \"item\": \"/*minecraft*/:/*iron*/_pickaxe\"\r\n  },\r\n  \"show_notification\": true\r\n}";
const shovel = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"equipment\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"minecraft:stick\"\n    },\n    \"X\": {\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\n    }\n  },\n  \"pattern\": [\n    \"X\",\n    \"#\",\n    \"#\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*/:/*iron*/_shovel\"\n  },\n  \"show_notification\": true\n}";
const sword = "{\r\n  \"type\": \"minecraft:crafting_shaped\",\r\n  \"category\": \"equipment\",\r\n  \"key\": {\r\n    \"#\": {\r\n      \"item\": \"minecraft:stick\"\r\n    },\r\n    \"X\": {\r\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\r\n    }\r\n  },\r\n  \"pattern\": [\r\n    \"X\",\r\n    \"X\",\r\n    \"#\"\r\n  ],\r\n  \"result\": {\r\n    \"item\": \"/*minecraft*/:/*iron*/_sword\"\r\n  },\r\n  \"show_notification\": true\r\n}";



const helmet = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"equipment\",\n  \"key\": {\n    \"X\": {\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\n    }\n  },\n  \"pattern\": [\n    \"XXX\",\n    \"X X\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*/:/*iron*/_helmet\"\n  },\n  \"show_notification\": true\n}";
const chestplate = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"equipment\",\n  \"key\": {\n    \"X\": {\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\n    }\n  },\n  \"pattern\": [\n    \"X X\",\n    \"XXX\",\n    \"XXX\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*/:/*iron*/_chestplate\"\n  },\n  \"show_notification\": true\n}";
const leggings = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"equipment\",\n  \"key\": {\n    \"X\": {\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\n    }\n  },\n  \"pattern\": [\n    \"XXX\",\n    \"X X\",\n    \"X X\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*/:/*iron*/_leggings\"\n  },\n  \"show_notification\": true\n}";
const boots = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"equipment\",\n  \"key\": {\n    \"X\": {\n      \"item\": \"/*minecraft*/:/*iron_ingot*/\"\n    }\n  },\n  \"pattern\": [\n    \"X X\",\n    \"X X\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*/:/*iron*/_boots\"\n  },\n  \"show_notification\": true\n}";

const boat = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"misc\",\n  \"group\": \"boat\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*/:/*oak*/_planks\"\n    }\n  },\n  \"pattern\": [\n    \"# #\",\n    \"###\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*/:/*oak*/_boat\"\n  },\n  \"show_notification\": true\n}";
const button = "{\n  \"type\": \"minecraft:crafting_shapeless\",\n  \"category\": \"redstone\",\n  \"group\": \"wooden_button\",\n  \"ingredients\": [\n    {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    }\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*//*oak*/_button\"\n  }\n}";
const chest_boat = "{\n  \"type\": \"minecraft:crafting_shapeless\",\n  \"category\": \"misc\",\n  \"group\": \"chest_boat\",\n  \"ingredients\": [\n    {\n      \"item\": \"minecraft:chest\"\n    },\n    {\n      \"item\": \"/*minecraft*//*oak*/_boat\"\n    }\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*//*oak*/_chest_boat\"\n  }\n}";
const door = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"redstone\",\n  \"group\": \"wooden_door\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    }\n  },\n  \"pattern\": [\n    \"##\",\n    \"##\",\n    \"##\"\n  ],\n  \"result\": {\n    \"count\": 3,\n    \"item\": \"/*minecraft*//*oak*/_door\"\n  },\n  \"show_notification\": true\n}";
const fence_gate = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"redstone\",\n  \"group\": \"wooden_fence_gate\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"minecraft:stick\"\n    },\n    \"W\": {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    }\n  },\n  \"pattern\": [\n    \"#W#\",\n    \"#W#\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*//*oak*/_fence_gate\"\n  },\n  \"show_notification\": true\n}";
const hanging_sign = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"misc\",\n  \"group\": \"hanging_sign\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"minecraft:stripped_/*oak*/_log\"\n    },\n    \"X\": {\n      \"item\": \"minecraft:chain\"\n    }\n  },\n  \"pattern\": [\n    \"X X\",\n    \"###\",\n    \"###\"\n  ],\n  \"result\": {\n    \"count\": 6,\n    \"item\": \"/*minecraft*//*oak*/_hanging_sign\"\n  },\n  \"show_notification\": true\n}";
const planks = "{\n  \"type\": \"minecraft:crafting_shapeless\",\n  \"category\": \"building\",\n  \"group\": \"planks\",\n  \"ingredients\": [\n    {\n      \"tag\": \"/*minecraft*//*oak*/_logs\"\n    }\n  ],\n  \"result\": {\n    \"count\": 4,\n    \"item\": \"/*minecraft*//*oak*/_planks\"\n  }\n}";
const pressure_plate = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"redstone\",\n  \"group\": \"wooden_pressure_plate\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    }\n  },\n  \"pattern\": [\n    \"##\"\n  ],\n  \"result\": {\n    \"item\": \"/*minecraft*//*oak*/_pressure_plate\"\n  },\n  \"show_notification\": true\n}";
const sign = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"misc\",\n  \"group\": \"wooden_sign\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    },\n    \"X\": {\n      \"item\": \"minecraft:stick\"\n    }\n  },\n  \"pattern\": [\n    \"###\",\n    \"###\",\n    \" X \"\n  ],\n  \"result\": {\n    \"count\": 3,\n    \"item\": \"/*minecraft*//*oak*/_sign\"\n  },\n  \"show_notification\": true\n}";
const slab = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"building\",\n  \"group\": \"wooden_slab\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    }\n  },\n  \"pattern\": [\n    \"###\"\n  ],\n  \"result\": {\n    \"count\": 6,\n    \"item\": \"/*minecraft*//*oak*/_slab\"\n  },\n  \"show_notification\": true\n}";
const stairs = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"building\",\n  \"group\": \"wooden_stairs\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    }\n  },\n  \"pattern\": [\n    \"#  \",\n    \"## \",\n    \"###\"\n  ],\n  \"result\": {\n    \"count\": 4,\n    \"item\": \"/*minecraft*//*oak*/_stairs\"\n  },\n  \"show_notification\": true\n}";
const trapdoor = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"redstone\",\n  \"group\": \"wooden_trapdoor\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*//*oak*/_planks\"\n    }\n  },\n  \"pattern\": [\n    \"###\",\n    \"###\"\n  ],\n  \"result\": {\n    \"count\": 2,\n    \"item\": \"/*minecraft*//*oak*/_trapdoor\"\n  },\n  \"show_notification\": true\n}";
const wood = "{\n  \"type\": \"minecraft:crafting_shaped\",\n  \"category\": \"building\",\n  \"group\": \"bark\",\n  \"key\": {\n    \"#\": {\n      \"item\": \"/*minecraft*//*oak*/_log\"\n    }\n  },\n  \"pattern\": [\n    \"##\",\n    \"##\"\n  ],\n  \"result\": {\n    \"count\": 3,\n    \"item\": \"/*minecraft*//*oak*/_wood\"\n  },\n  \"show_notification\": true\n}";
const fences = "{\r\n  \"type\": \"minecraft:crafting_shaped\",\r\n  \"category\": \"misc\",\r\n  \"group\": \"wooden_fence\",\r\n  \"key\": {\r\n    \"#\": {\r\n      \"item\": \"minecraft:stick\"\r\n    },\r\n    \"W\": {\r\n      \"item\": \"/*minecraft*/:/*oak*/_planks\"\r\n    }\r\n  },\r\n  \"pattern\": [\r\n    \"W#W\",\r\n    \"W#W\"\r\n  ],\r\n  \"result\": {\r\n    \"count\": 3,\r\n    \"item\": \"/*minecraft*/:/*oak*/_fence\"\r\n  },\r\n  \"show_notification\": true\r\n}";

const blockState = "{\r\n  \"variants\": {\r\n    \": { \"model\": \"/*minecraft*/:block//*block*/\" }\r\n  }\r\n}";
const blockModelCubeAll = "{\r\n  \"parent\": \"block/cube_all\",\r\n  \"textures\": {\r\n    \"all\": \"/*minecraft*/:block//*block*/\"\r\n  }\r\n}";
const blockModelCubeColumn = "{\n  \"parent\": \"minecraft:block/cube_column\",\n  \"textures\": {\n    \"end\": \"/*minecraft*/:block//*block*/_top\",\n    \"side\": \"/*minecraft*/:block//*block*/_log\"\n  }\n}";
const itemModel = "{\r\n  \"parent\": \"/*minecraft*/:block//*block*/\"\r\n}"

const bow = "{\n  \"parent\": \"minecraft:item/generated\",\n  \"textures\": {\n    \"layer0\": \"/*minecraft*/:item//*bow*/\"\n  },\n  \"display\": {\n    \"thirdperson_righthand\": {\n      \"rotation\": [\n        -80,\n        260,\n        -40\n      ],\n      \"translation\": [\n        -1,\n        -2,\n        2.5\n      ],\n      \"scale\": [\n        0.9,\n        0.9,\n        0.9\n      ]\n    },\n    \"thirdperson_lefthand\": {\n      \"rotation\": [\n        -80,\n        -280,\n        40\n      ],\n      \"translation\": [\n        -1,\n        -2,\n        2.5\n      ],\n      \"scale\": [\n        0.9,\n        0.9,\n        0.9\n      ]\n    },\n    \"firstperson_righthand\": {\n      \"rotation\": [\n        0,\n        -90,\n        25\n      ],\n      \"translation\": [\n        1.13,\n        3.2,\n        1.13\n      ],\n      \"scale\": [\n        0.68,\n        0.68,\n        0.68\n      ]\n    },\n    \"firstperson_lefthand\": {\n      \"rotation\": [\n        0,\n        90,\n        -25\n      ],\n      \"translation\": [\n        1.13,\n        3.2,\n        1.13\n      ],\n      \"scale\": [\n        0.68,\n        0.68,\n        0.68\n      ]\n    }\n  },\n  \"overrides\": [\n    {\n      \"predicate\": {\n        \"pulling\": 1\n      },\n      \"model\": \"/*minecraft*/:item//*bow*/_pulling_0\"\n    },\n    {\n      \"predicate\": {\n        \"pulling\": 1,\n        \"pull\": 0.65\n      },\n      \"model\": \"/*minecraft*/:item//*bow*/_pulling_1\"\n    },\n    {\n      \"predicate\": {\n        \"pulling\": 1,\n        \"pull\": 0.9\n      },\n      \"model\": \"/*minecraft*/:item//*bow*/_pulling_2\"\n    }\n  ]\n}";
const _pulling_0 = "{\n  \"parent\": \"/*minecraft*/:item//*bow*/\",\n  \"textures\": {\n    \"layer0\": \"/*minecraft*/:item//*bow*/_pulling_0\"\n  }\n}";
const _pulling_1 = "{\n  \"parent\": \"/*minecraft*/:item//*bow*/\",\n  \"textures\": {\n    \"layer0\": \"/*minecraft*/:item//*bow*/_pulling_1\"\n  }\n}";
const _pulling_2 = "{\n  \"parent\": \"/*minecraft*/:item//*bow*/\",\n  \"textures\": {\n    \"layer0\": \"/*minecraft*/:item//*bow*/_pulling_2\"\n  }\n}";

const crossbow = "{\n  \"parent\": \"minecraft:item/generated\",\n  \"textures\": {\n    \"layer0\": \"/*minecraft*/:item//*crossbow*/\"\n  },\n  \"display\": {\n    \"thirdperson_righthand\": {\n      \"rotation\": [\n        -90,\n        0,\n        -60\n      ],\n      \"translation\": [\n        2,\n        0.1,\n        -3\n      ],\n      \"scale\": [\n        0.9,\n        0.9,\n        0.9\n      ]\n    },\n    \"thirdperson_lefthand\": {\n      \"rotation\": [\n        -90,\n        0,\n        30\n      ],\n      \"translation\": [\n        2,\n        0.1,\n        -3\n      ],\n      \"scale\": [\n        0.9,\n        0.9,\n        0.9\n      ]\n    },\n    \"firstperson_righthand\": {\n      \"rotation\": [\n        -90,\n        0,\n        -55\n      ],\n      \"translation\": [\n        1.13,\n        3.2,\n        1.13\n      ],\n      \"scale\": [\n        0.68,\n        0.68,\n        0.68\n      ]\n    },\n    \"firstperson_lefthand\": {\n      \"rotation\": [\n        -90,\n        0,\n        35\n      ],\n      \"translation\": [\n        1.13,\n        3.2,\n        1.13\n      ],\n      \"scale\": [\n        0.68,\n        0.68,\n        0.68\n      ]\n    }\n  },\n  \"overrides\": [\n    {\n      \"predicate\": {\n        \"pulling\": 1\n      },\n      \"model\": \"/*minecraft*/:item//*crossbow*/_pulling_0\"\n    },\n    {\n      \"predicate\": {\n        \"pulling\": 1,\n        \"pull\": 0.58\n      },\n      \"model\": \"/*minecraft*/:item//*crossbow*/_pulling_1\"\n    },\n    {\n      \"predicate\": {\n        \"pulling\": 1,\n        \"pull\": 1\n      },\n      \"model\": \"/*minecraft*/:item//*crossbow*/_pulling_2\"\n    },\n    {\n      \"predicate\": {\n        \"charged\": 1\n      },\n      \"model\": \"/*minecraft*/:item//*crossbow*/_arrow\"\n    },\n    {\n      \"predicate\": {\n        \"charged\": 1,\n        \"firework\": 1\n      },\n      \"model\": \"/*minecraft*/:item/wood_crossbow_firework\"\n    }\n  ]\n}";

const _arrow = "{\r\n    \"parent\": \"/*minecraft*/:item//*crossbow*/\",\r\n    \"textures\": {\r\n        \"layer0\": \"/*minecraft*/:item//*crossbow*/_arrow\"\r\n    }\r\n}";
const _firework = "{\r\n    \"parent\": \"/*minecraft*/:item//*crossbow*/\",\r\n    \"textures\": {\r\n        \"layer0\": \"/*minecraft*/:item//*crossbow*/_firework\"\r\n    }\r\n}";

const toolsAndArmor = {
    helmet: helmet,
    chestplate: chestplate,
    leggings: leggings,
    boots: boots,
    axe: axe,
    hoe: hoe,
    pickaxe: pickaxe,
    shovel: shovel,
    sword: sword
};
const woodFamily = {
    fence: fences,
    boat: boat,
    button: button,
    chest_boat: chest_boat,
    door: door,
    fence_gate: fence_gate,
    hanging_sign: hanging_sign,
    planks: planks,
    pressure_plate: pressure_plate,
    sign: sign,
    slab: slab,
    stairs: stairs,
    trapdoor: trapdoor,
    wood: wood
};

const bowModels = {
    bow: bow,
    _pulling_0: _pulling_0,
    _pulling_1: _pulling_1,
    _pulling_2: _pulling_2
}

const crossbowModels = {
    crossbow: crossbow,
    _pulling_0: _pulling_0,
    _pulling_1: _pulling_1,
    _pulling_2: _pulling_2,
    _arrow: _arrow,
    _firework: _firework
}

const cube_all = {
    blockModel: blockModelCubeAll,
    blockState: blockState,
    itemModel: itemModel
}

const cube_column = {
    blockModel: blockModelCubeColumn,
    blockState: blockState,
    itemModel: itemModel
}

const stored={
    tools: toolsAndArmor,
    wood: woodFamily,
    bow: bowModels,
    cross:crossbowModels,
    cube_all:cube_all,
    cube_column:cube_column
}