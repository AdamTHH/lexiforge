const defaultCombinations: { title: string, combinationOf: string[][] }[] = [
    {
        title: "acid rain",
        combinationOf: [
            [
                "rain",
                "smoke"
            ],
            [
                "rain",
                "smog"
            ]
        ]
    },
    {
        title: "airplane",
        combinationOf: [
            [
                "bird",
                "steel"
            ],
            [
                "bird",
                "metal"
            ]
        ]
    },
    {
        title: "alarm clock",
        combinationOf: [
            [
                "clock",
                "sound"
            ]
        ]
    },
    {
        title: "alcohol",
        combinationOf: [
            [
                "fruit",
                "time"
            ],
            [
                "juice",
                "time"
            ]
        ]
    },
    {
        title: "algae",
        combinationOf: [
            [
                "water",
                "plant"
            ],
            [
                "sea",
                "plant"
            ],
            [
                "ocean",
                "plant"
            ]
        ]
    },
    {
        title: "alien",
        combinationOf: [
            [
                "life",
                "space"
            ]
        ]
    },
    {
        title: "allergy",
        combinationOf: [
            [
                "human",
                "dust"
            ]
        ]
    },
    {
        title: "alligator",
        combinationOf: [
            [
                "lizard",
                "swamp"
            ],
            [
                "lizard",
                "river"
            ]
        ]
    },
    {
        title: "alpaca",
        combinationOf: [
            [
                "mountain",
                "sheep"
            ]
        ]
    },
    {
        title: "ambulance",
        combinationOf: [
            [
                "car",
                "hospital"
            ],
            [
                "car",
                "doctor"
            ]
        ]
    },
    {
        title: "angel",
        combinationOf: [
            [
                "human",
                "bird"
            ]
        ]
    },
    {
        title: "angler",
        combinationOf: [
            [
                "human",
                "fishing rod"
            ]
        ]
    },
    {
        title: "ant",
        combinationOf: [
            [
                "grass",
                "wild animal"
            ],
            [
                "wild animal",
                "sugar"
            ]
        ]
    },
    {
        title: "antarctica",
        combinationOf: [
            [
                "snow",
                "desert"
            ],
            [
                "ice",
                "desert"
            ]
        ]
    },
    {
        title: "aquarium",
        combinationOf: [
            [
                "water",
                "glass"
            ],
            [
                "glass",
                "fish"
            ]
        ]
    },
    {
        title: "archipelago",
        combinationOf: [
            [
                "isle",
                "isle"
            ]
        ]
    },
    {
        title: "armadillo",
        combinationOf: [
            [
                "wild animal",
                "armor"
            ]
        ]
    },
    {
        title: "armor",
        combinationOf: [
            [
                "tool",
                "metal"
            ],
            [
                "tool",
                "steel"
            ]
        ]
    },
    {
        title: "ash",
        combinationOf: [
            [
                "volcano",
                "energy"
            ]
        ]
    },
    {
        title: "astronaut",
        combinationOf: [
            [
                "human",
                "moon"
            ],
            [
                "rocket",
                "human"
            ],
            [
                "human",
                "space station"
            ],
            [
                "human",
                "space"
            ]
        ]
    },
    {
        title: "astronaut ice cream",
        combinationOf: [
            [
                "ice cream",
                "astronaut"
            ]
        ]
    },
    {
        title: "atmosphere",
        combinationOf: [
            [
                "air",
                "pressure"
            ],
            [
                "sky",
                "pressure"
            ]
        ]
    },
    {
        title: "atomic bomb",
        combinationOf: [
            [
                "energy",
                "explosion"
            ]
        ]
    },
    {
        title: "aurora",
        combinationOf: [
            [
                "sun",
                "antarctica"
            ],
            [
                "sky",
                "antarctica"
            ],
            [
                "antarctica",
                "atmosphere"
            ]
        ]
    },
    {
        title: "avalanche",
        combinationOf: [
            [
                "energy",
                "snow"
            ]
        ]
    },
    {
        title: "axe",
        combinationOf: [
            [
                "blade",
                "wood"
            ]
        ]
    },
    {
        title: "bacon",
        combinationOf: [
            [
                "pig",
                "fire"
            ]
        ]
    },
    {
        title: "bacteria",
        combinationOf: [
            [
                "swamp",
                "life"
            ]
        ]
    },
    {
        title: "baker",
        combinationOf: [
            [
                "human",
                "flour"
            ],
            [
                "human",
                "bread"
            ],
            [
                "human",
                "dough"
            ]
        ]
    },
    {
        title: "bakery",
        combinationOf: [
            [
                "house",
                "baker"
            ],
            [
                "house",
                "bread"
            ]
        ]
    },
    {
        title: "banana",
        combinationOf: [
            [
                "fruit",
                "monkey"
            ]
        ]
    },
    {
        title: "banana bread",
        combinationOf: [
            [
                "bread",
                "banana"
            ]
        ]
    },
    {
        title: "bandage",
        combinationOf: [
            [
                "blood",
                "fabric"
            ]
        ]
    },
    {
        title: "bank",
        combinationOf: [
            [
                "house",
                "money"
            ],
            [
                "house",
                "gold"
            ],
            [
                "house",
                "safe"
            ]
        ]
    },
    {
        title: "barn",
        combinationOf: [
            [
                "cow",
                "house"
            ],
            [
                "livestock",
                "house"
            ],
            [
                "house",
                "hay"
            ]
        ]
    },
    {
        title: "bat",
        combinationOf: [
            [
                "mouse",
                "bird"
            ],
            [
                "mouse",
                "sky"
            ]
        ]
    },
    {
        title: "batman",
        combinationOf: [
            [
                "bat",
                "human"
            ]
        ]
    },
    {
        title: "batter",
        combinationOf: [
            [
                "flour",
                "milk"
            ]
        ]
    },
    {
        title: "bayonet",
        combinationOf: [
            [
                "gun",
                "blade"
            ],
            [
                "gun",
                "sword"
            ]
        ]
    },
    {
        title: "bbq",
        combinationOf: [
            [
                "campfire",
                "meat"
            ],
            [
                "campfire",
                "garden"
            ]
        ]
    },
    {
        title: "beach",
        combinationOf: [
            [
                "sea",
                "sand"
            ],
            [
                "ocean",
                "sand"
            ]
        ]
    },
    {
        title: "beaver",
        combinationOf: [
            [
                "wild animal",
                "wood"
            ],
            [
                "wild animal",
                "dam"
            ]
        ]
    },
    {
        title: "bee",
        combinationOf: [
            [
                "flower",
                "wild animal"
            ]
        ]
    },
    {
        title: "beehive",
        combinationOf: [
            [
                "bee",
                "house"
            ],
            [
                "bee",
                "tree"
            ]
        ]
    },
    {
        title: "beer",
        combinationOf: [
            [
                "alcohol",
                "wheat"
            ]
        ]
    },
    {
        title: "bicycle",
        combinationOf: [
            [
                "wheel",
                "wheel"
            ]
        ]
    },
    {
        title: "bird",
        combinationOf: [
            [
                "air",
                "life"
            ],
            [
                "life",
                "sky"
            ],
            [
                "egg",
                "air"
            ],
            [
                "egg",
                "sky"
            ]
        ]
    },
    {
        title: "birdhouse",
        combinationOf: [
            [
                "bird",
                "house"
            ]
        ]
    },
    {
        title: "black hole",
        combinationOf: [
            [
                "star",
                "pressure"
            ]
        ]
    },
    {
        title: "blade",
        combinationOf: [
            [
                "metal",
                "stone"
            ]
        ]
    },
    {
        title: "blender",
        combinationOf: [
            [
                "glass",
                "blade"
            ],
            [
                "blade",
                "electricity"
            ]
        ]
    },
    {
        title: "blizzard",
        combinationOf: [
            [
                "snow",
                "snow"
            ],
            [
                "snow",
                "storm"
            ],
            [
                "snow",
                "wind"
            ]
        ]
    },
    {
        title: "blood",
        combinationOf: [
            [
                "human",
                "blade"
            ]
        ]
    },
    {
        title: "blueprint",
        combinationOf: [
            [
                "engineer",
                "paper"
            ]
        ]
    },
    {
        title: "boat",
        combinationOf: [
            [
                "water",
                "wood"
            ]
        ]
    },
    {
        title: "boiler",
        combinationOf: [
            [
                "steam",
                "metal"
            ]
        ]
    },
    {
        title: "bone",
        combinationOf: [
            [
                "corpse",
                "time"
            ]
        ]
    },
    {
        title: "bonsai tree",
        combinationOf: [
            [
                "tree",
                "pottery"
            ],
            [
                "tree",
                "scissors"
            ]
        ]
    },
    {
        title: "book",
        combinationOf: [
            [
                "paper",
                "wood"
            ],
            [
                "paper",
                "story"
            ]
        ]
    },
    {
        title: "bread",
        combinationOf: [
            [
                "dough",
                "fire"
            ]
        ]
    },
    {
        title: "brick",
        combinationOf: [
            [
                "clay",
                "fire"
            ],
            [
                "mud",
                "fire"
            ],
            [
                "mud",
                "sun"
            ],
            [
                "clay",
                "sun"
            ]
        ]
    },
    {
        title: "bridge",
        combinationOf: [
            [
                "river",
                "wood"
            ],
            [
                "river",
                "metal"
            ],
            [
                "river",
                "steel"
            ]
        ]
    },
    {
        title: "broom",
        combinationOf: [
            [
                "wood",
                "hay"
            ]
        ]
    },
    {
        title: "bullet",
        combinationOf: [
            [
                "gunpowder",
                "metal"
            ]
        ]
    },
    {
        title: "bulletproof vest",
        combinationOf: [
            [
                "bullet",
                "armor"
            ]
        ]
    },
    {
        title: "bus",
        combinationOf: [
            [
                "car",
                "car"
            ]
        ]
    },
    {
        title: "butcher",
        combinationOf: [
            [
                "human",
                "meat"
            ]
        ]
    },
    {
        title: "butter",
        combinationOf: [
            [
                "energy",
                "milk"
            ],
            [
                "milk",
                "pressure"
            ]
        ]
    },
    {
        title: "butterfly",
        combinationOf: [
            [
                "flower",
                "wild animal"
            ]
        ]
    },
    {
        title: "cactus",
        combinationOf: [
            [
                "desert",
                "plant"
            ],
            [
                "sand",
                "plant"
            ]
        ]
    },
    {
        title: "cake",
        combinationOf: [
            [
                "dough",
                "candle"
            ]
        ]
    },
    {
        title: "camel",
        combinationOf: [
            [
                "desert",
                "wild animal"
            ],
            [
                "desert",
                "horse"
            ],
            [
                "livestock",
                "desert"
            ]
        ]
    },
    {
        title: "campfire",
        combinationOf: [
            [
                "fire",
                "wood"
            ]
        ]
    },
    {
        title: "candle",
        combinationOf: [
            [
                "wax",
                "thread"
            ],
            [
                "wax",
                "fire"
            ]
        ]
    },
    {
        title: "candy cane",
        combinationOf: [
            [
                "sugar",
                "christmas tree"
            ]
        ]
    },
    {
        title: "cannon",
        combinationOf: [
            [
                "gunpowder",
                "pirate ship"
            ],
            [
                "gunpowder",
                "castle"
            ]
        ]
    },
    {
        title: "cape",
        combinationOf: [
            [
                "hero",
                "fabric"
            ]
        ]
    },
    {
        title: "car",
        combinationOf: [
            [
                "wheel",
                "metal"
            ]
        ]
    },
    {
        title: "caramel",
        combinationOf: [
            [
                "sugar",
                "fire"
            ]
        ]
    },
    {
        title: "carbon dioxide",
        combinationOf: [
            [
                "human",
                "oxygen"
            ],
            [
                "plant",
                "night"
            ],
            [
                "tree",
                "night"
            ]
        ]
    },
    {
        title: "carrot",
        combinationOf: [
            [
                "snowman",
                "vegetable"
            ],
            [
                "sun",
                "snowman"
            ]
        ]
    },
    {
        title: "cart",
        combinationOf: [
            [
                "wheel",
                "wood"
            ]
        ]
    },
    {
        title: "cashmere",
        combinationOf: [
            [
                "tool",
                "mountain goat"
            ],
            [
                "thread",
                "mountain goat"
            ],
            [
                "fabric",
                "mountain goat"
            ],
            [
                "scissors",
                "mountain goat"
            ],
            [
                "wool",
                "mountain goat"
            ]
        ]
    },
    {
        title: "castle",
        combinationOf: [
            [
                "house",
                "knight"
            ]
        ]
    },
    {
        title: "cat",
        combinationOf: [
            [
                "wild animal",
                "milk"
            ]
        ]
    },
    {
        title: "catnip",
        combinationOf: [
            [
                "cat",
                "plant"
            ]
        ]
    },
    {
        title: "cauldron",
        combinationOf: [
            [
                "metal",
                "witch"
            ],
            [
                "steel",
                "witch"
            ],
            [
                "fireplace",
                "witch"
            ],
            [
                "campfire",
                "witch"
            ]
        ]
    },
    {
        title: "caviar",
        combinationOf: [
            [
                "hard roe",
                "human"
            ]
        ]
    },
    {
        title: "centaur",
        combinationOf: [
            [
                "horse",
                "human"
            ]
        ]
    },
    {
        title: "cereal",
        combinationOf: [
            [
                "wheat",
                "milk"
            ]
        ]
    },
    {
        title: "chain",
        combinationOf: [
            [
                "metal",
                "rope"
            ],
            [
                "steel",
                "rope"
            ]
        ]
    },
    {
        title: "chainsaw",
        combinationOf: [
            [
                "axe",
                "electricity"
            ]
        ]
    },
    {
        title: "chameleon",
        combinationOf: [
            [
                "lizard",
                "rainbow"
            ]
        ]
    },
    {
        title: "charcoal",
        combinationOf: [
            [
                "fire",
                "wood"
            ]
        ]
    },
    {
        title: "cheese",
        combinationOf: [
            [
                "time",
                "milk"
            ]
        ]
    },
    {
        title: "cheeseburger",
        combinationOf: [
            [
                "cheese",
                "hamburger"
            ]
        ]
    },
    {
        title: "chicken",
        combinationOf: [
            [
                "egg",
                "livestock"
            ],
            [
                "livestock",
                "bird"
            ],
            [
                "bird",
                "farmer"
            ]
        ]
    },
    {
        title: "chicken soup",
        combinationOf: [
            [
                "water",
                "chicken"
            ]
        ]
    },
    {
        title: "chicken wing",
        combinationOf: [
            [
                "chicken",
                "bone"
            ]
        ]
    },
    {
        title: "chimney",
        combinationOf: [
            [
                "house",
                "fireplace"
            ],
            [
                "smoke",
                "brick"
            ],
            [
                "fireplace",
                "brick"
            ]
        ]
    },
    {
        title: "christmas stocking",
        combinationOf: [
            [
                "wool",
                "fireplace"
            ]
        ]
    },
    {
        title: "christmas tree",
        combinationOf: [
            [
                "light bulb",
                "tree"
            ],
            [
                "tree",
                "star"
            ]
        ]
    },
    {
        title: "cigarette",
        combinationOf: [
            [
                "tobacco",
                "paper"
            ]
        ]
    },
    {
        title: "city",
        combinationOf: [
            [
                "village",
                "village"
            ],
            [
                "skyscraper",
                "skyscraper"
            ]
        ]
    },
    {
        title: "clay",
        combinationOf: [
            [
                "sand",
                "mud"
            ]
        ]
    },
    {
        title: "clock",
        combinationOf: [
            [
                "time",
                "tool"
            ],
            [
                "time",
                "wheel"
            ],
            [
                "time",
                "electricity"
            ]
        ]
    },
    {
        title: "cloud",
        combinationOf: [
            [
                "air",
                "steam"
            ]
        ]
    },
    {
        title: "coal",
        combinationOf: [
            [
                "pressure",
                "plant"
            ],
            [
                "sun",
                "snowman"
            ]
        ]
    },
    {
        title: "coconut",
        combinationOf: [
            [
                "palm",
                "fruit"
            ]
        ]
    },
    {
        title: "coconut milk",
        combinationOf: [
            [
                "coconut",
                "tool"
            ],
            [
                "milk",
                "coconut"
            ]
        ]
    },
    {
        title: "coffin",
        combinationOf: [
            [
                "wood",
                "corpse"
            ]
        ]
    },
    {
        title: "cold",
        combinationOf: [
            [
                "human",
                "rain"
            ]
        ]
    },
    {
        title: "computer",
        combinationOf: [
            [
                "electricity",
                "nerd"
            ],
            [
                "wire",
                "nerd"
            ],
            [
                "tool",
                "nerd"
            ]
        ]
    },
    {
        title: "computer mouse",
        combinationOf: [
            [
                "mouse",
                "computer"
            ]
        ]
    },
    {
        title: "confetti",
        combinationOf: [
            [
                "paper",
                "blade"
            ],
            [
                "paper",
                "scissors"
            ]
        ]
    },
    {
        title: "cookbook",
        combinationOf: [
            [
                "book",
                "recipe"
            ],
            [
                "recipe",
                "recipe"
            ]
        ]
    },
    {
        title: "constellation",
        combinationOf: [
            [
                "star",
                "star"
            ]
        ]
    },
    {
        title: "cookie",
        combinationOf: [
            [
                "dough",
                "sugar"
            ]
        ]
    },
    {
        title: "corpse",
        combinationOf: [
            [
                "human",
                "gun"
            ],
            [
                "human",
                "grim reaper"
            ]
        ]
    },
    {
        title: "cotton",
        combinationOf: [
            [
                "plant",
                "cloud"
            ]
        ]
    },
    {
        title: "cow",
        combinationOf: [
            [
                "grass",
                "livestock"
            ]
        ]
    },
    {
        title: "crayon",
        combinationOf: [
            [
                "rainbow",
                "pencil"
            ],
            [
                "rainbow",
                "wax"
            ]
        ]
    },
    {
        title: "crow",
        combinationOf: [
            [
                "bird",
                "scarecrow"
            ],
            [
                "bird",
                "field"
            ]
        ]
    },
    {
        title: "crown",
        combinationOf: [
            [
                "gold",
                "monarch"
            ],
            [
                "metal",
                "monarch"
            ]
        ]
    },
    {
        title: "crystal ball",
        combinationOf: [
            [
                "witch",
                "glass"
            ],
            [
                "wizard",
                "glass"
            ]
        ]
    },
    {
        title: "cuckoo",
        combinationOf: [
            [
                "clock",
                "bird"
            ]
        ]
    },
    {
        title: "cyborg",
        combinationOf: [
            [
                "human",
                "robot"
            ]
        ]
    },
    {
        title: "cyclist",
        combinationOf: [
            [
                "bicycle",
                "human"
            ]
        ]
    },
    {
        title: "dam",
        combinationOf: [
            [
                "beaver",
                "river"
            ],
            [
                "beaver",
                "tree"
            ],
            [
                "beaver",
                "wood"
            ],
            [
                "wall",
                "river"
            ]
        ]
    },
    {
        title: "darth vader",
        combinationOf: [
            [
                "jedi",
                "fire"
            ],
            [
                "jedi",
                "lava"
            ]
        ]
    },
    {
        title: "day",
        combinationOf: [
            [
                "sun",
                "time"
            ],
            [
                "night",
                "sun"
            ],
            [
                "time",
                "night"
            ],
            [
                "sky",
                "sun"
            ]
        ]
    },
    {
        title: "desert",
        combinationOf: [
            [
                "sand",
                "sand"
            ],
            [
                "sand",
                "cactus"
            ]
        ]
    },
    {
        title: "dew",
        combinationOf: [
            [
                "water",
                "grass"
            ],
            [
                "fog",
                "grass"
            ]
        ]
    },
    {
        title: "diamond",
        combinationOf: [
            [
                "pressure",
                "coal"
            ]
        ]
    },
    {
        title: "dinosaur",
        combinationOf: [
            [
                "lizard",
                "time"
            ]
        ]
    },
    {
        title: "doctor",
        combinationOf: [
            [
                "human",
                "hospital"
            ]
        ]
    },
    {
        title: "dog",
        combinationOf: [
            [
                "wild animal",
                "human"
            ]
        ]
    },
    {
        title: "doge",
        combinationOf: [
            [
                "dog",
                "computer"
            ]
        ]
    },
    {
        title: "doghouse",
        combinationOf: [
            [
                "dog",
                "house"
            ]
        ]
    },
    {
        title: "don quixote",
        combinationOf: [
            [
                "windmill",
                "knight"
            ]
        ]
    },
    {
        title: "donut",
        combinationOf: [
            [
                "dough",
                "oil"
            ]
        ]
    },
    {
        title: "double rainbow!",
        combinationOf: [
            [
                "rainbow",
                "rainbow"
            ]
        ]
    },
    {
        title: "dough",
        combinationOf: [
            [
                "flour",
                "water"
            ]
        ]
    },
    {
        title: "dragon",
        combinationOf: [
            [
                "lizard",
                "fire"
            ]
        ]
    },
    {
        title: "drone",
        combinationOf: [
            [
                "airplane",
                "robot"
            ]
        ]
    },
    {
        title: "drum",
        combinationOf: [
            [
                "wood",
                "leather"
            ]
        ]
    },
    {
        title: "drunk",
        combinationOf: [
            [
                "human",
                "alcohol"
            ],
            [
                "beer",
                "human"
            ],
            [
                "human",
                "wine"
            ]
        ]
    },
    {
        title: "dry ice",
        combinationOf: [
            [
                "carbon dioxide",
                "cold"
            ],
            [
                "ice",
                "carbon dioxide"
            ]
        ]
    },
    {
        title: "duck",
        combinationOf: [
            [
                "bird",
                "lake"
            ],
            [
                "water",
                "bird"
            ],
            [
                "bird",
                "pond"
            ],
            [
                "time",
                "duckling"
            ]
        ]
    },
    {
        title: "duckling",
        combinationOf: [
            [
                "egg",
                "duck"
            ]
        ]
    },
    {
        title: "dune",
        combinationOf: [
            [
                "sand",
                "wind"
            ],
            [
                "desert",
                "wind"
            ],
            [
                "beach",
                "wind"
            ]
        ]
    },
    {
        title: "dust",
        combinationOf: [
            [
                "earth",
                "air"
            ],
            [
                "sun",
                "vampire"
            ],
            [
                "day",
                "vampire"
            ]
        ]
    },
    {
        title: "dynamite",
        combinationOf: [
            [
                "gunpowder",
                "wire"
            ]
        ]
    },
    {
        title: "eagle",
        combinationOf: [
            [
                "mountain",
                "bird"
            ]
        ]
    },
    {
        title: "earthquake",
        combinationOf: [
            [
                "earth",
                "energy"
            ],
            [
                "earth",
                "wave"
            ]
        ]
    },
    {
        title: "eclipse",
        combinationOf: [
            [
                "sun",
                "moon"
            ]
        ]
    },
    {
        title: "egg",
        combinationOf: [
            [
                "life",
                "stone"
            ],
            [
                "bird",
                "bird"
            ],
            [
                "turtle",
                "turtle"
            ],
            [
                "lizard",
                "lizard"
            ]
        ]
    },
    {
        title: "egg timer",
        combinationOf: [
            [
                "egg",
                "clock"
            ],
            [
                "egg",
                "watch"
            ]
        ]
    },
    {
        title: "electric car",
        combinationOf: [
            [
                "car",
                "electricity"
            ]
        ]
    },
    {
        title: "electric eel",
        combinationOf: [
            [
                "fish",
                "electricity"
            ]
        ]
    },
    {
        title: "electrician",
        combinationOf: [
            [
                "human",
                "electricity"
            ],
            [
                "human",
                "wire"
            ]
        ]
    },
    {
        title: "electricity",
        combinationOf: [
            [
                "metal",
                "energy"
            ],
            [
                "solar cell",
                "sun"
            ],
            [
                "wind turbine",
                "wind"
            ],
            [
                "light",
                "solar cell"
            ]
        ]
    },
    {
        title: "email",
        combinationOf: [
            [
                "letter",
                "computer"
            ],
            [
                "letter",
                "internet"
            ]
        ]
    },
    {
        title: "energy",
        combinationOf: [
            [
                "air",
                "fire"
            ],
            [
                "plant",
                "sun"
            ]
        ]
    },
    {
        title: "engineer",
        combinationOf: [
            [
                "human",
                "tool"
            ]
        ]
    },
    {
        title: "eruption",
        combinationOf: [
            [
                "volcano",
                "energy"
            ]
        ]
    },
    {
        title: "excalibur",
        combinationOf: [
            [
                "sword",
                "stone"
            ]
        ]
    },
    {
        title: "explosion",
        combinationOf: [
            [
                "gunpowder",
                "fire"
            ]
        ]
    },
    {
        title: "fabric",
        combinationOf: [
            [
                "thread",
                "tool"
            ]
        ]
    },
    {
        title: "fairy tale",
        combinationOf: [
            [
                "story",
                "monarch"
            ],
            [
                "story",
                "castle"
            ],
            [
                "knight",
                "story"
            ],
            [
                "dragon",
                "story"
            ]
        ]
    },
    {
        title: "family",
        combinationOf: [
            [
                "human",
                "house"
            ]
        ]
    },
    {
        title: "family tree",
        combinationOf: [
            [
                "tree",
                "family"
            ]
        ]
    },
    {
        title: "farm",
        combinationOf: [
            [
                "farmer",
                "house"
            ],
            [
                "farmer",
                "barn"
            ]
        ]
    },
    {
        title: "farmer",
        combinationOf: [
            [
                "human",
                "plant"
            ],
            [
                "field",
                "human"
            ],
            [
                "human",
                "pitchfork"
            ]
        ]
    },
    {
        title: "faun",
        combinationOf: [
            [
                "goat",
                "human"
            ]
        ]
    },
    {
        title: "fence",
        combinationOf: [
            [
                "wall",
                "wood"
            ]
        ]
    },
    {
        title: "field",
        combinationOf: [
            [
                "earth",
                "farmer"
            ],
            [
                "earth",
                "tool"
            ]
        ]
    },
    {
        title: "fire extinguisher",
        combinationOf: [
            [
                "fire",
                "carbon dioxide"
            ],
            [
                "pressure",
                "carbon dioxide"
            ],
            [
                "metal",
                "carbon dioxide"
            ]
        ]
    },
    {
        title: "fireman",
        combinationOf: [
            [
                "human",
                "fire"
            ],
            [
                "human",
                "firetruck"
            ]
        ]
    },
    {
        title: "fireplace",
        combinationOf: [
            [
                "house",
                "campfire"
            ],
            [
                "campfire",
                "brick"
            ],
            [
                "campfire",
                "wall"
            ]
        ]
    },
    {
        title: "firetruck",
        combinationOf: [
            [
                "fireman",
                "car"
            ]
        ]
    },
    {
        title: "fireworks",
        combinationOf: [
            [
                "explosion",
                "sky"
            ]
        ]
    },
    {
        title: "fish",
        combinationOf: [
            [
                "hard roe",
                "time"
            ]
        ]
    },
    {
        title: "fish and chips",
        combinationOf: [
            [
                "fish",
                "french fries"
            ]
        ]
    },
    {
        title: "fishing rod",
        combinationOf: [
            [
                "tool",
                "fish"
            ],
            [
                "wood",
                "fish"
            ]
        ]
    },
    {
        title: "flamethrower",
        combinationOf: [
            [
                "fire",
                "gun"
            ]
        ]
    },
    {
        title: "flashlight",
        combinationOf: [
            [
                "tool",
                "light"
            ]
        ]
    },
    {
        title: "flood",
        combinationOf: [
            [
                "rain",
                "rain"
            ],
            [
                "rain",
                "time"
            ]
        ]
    },
    {
        title: "flour",
        combinationOf: [
            [
                "wheat",
                "stone"
            ],
            [
                "windmill",
                "wheat"
            ]
        ]
    },
    {
        title: "flower",
        combinationOf: [
            [
                "plant",
                "garden"
            ]
        ]
    },
    {
        title: "flute",
        combinationOf: [
            [
                "wood",
                "wind"
            ]
        ]
    },
    {
        title: "flying fish",
        combinationOf: [
            [
                "fish",
                "bird"
            ],
            [
                "sky",
                "fish"
            ]
        ]
    },
    {
        title: "flying squirrel",
        combinationOf: [
            [
                "squirrel",
                "bird"
            ],
            [
                "squirrel",
                "wind"
            ],
            [
                "squirrel",
                "airplane"
            ],
            [
                "sky",
                "squirrel"
            ]
        ]
    },
    {
        title: "fog",
        combinationOf: [
            [
                "earth",
                "cloud"
            ]
        ]
    },
    {
        title: "forest",
        combinationOf: [
            [
                "tree",
                "tree"
            ]
        ]
    },
    {
        title: "fortune cookie",
        combinationOf: [
            [
                "paper",
                "cookie"
            ]
        ]
    },
    {
        title: "fossil",
        combinationOf: [
            [
                "dinosaur",
                "time"
            ],
            [
                "dinosaur",
                "earth"
            ],
            [
                "stone",
                "dinosaur"
            ]
        ]
    },
    {
        title: "fountain",
        combinationOf: [
            [
                "statue",
                "water"
            ]
        ]
    },
    {
        title: "fox",
        combinationOf: [
            [
                "chicken",
                "wild animal"
            ]
        ]
    },
    {
        title: "frankenstein",
        combinationOf: [
            [
                "zombie",
                "electricity"
            ],
            [
                "electricity",
                "corpse"
            ]
        ]
    },
    {
        title: "french fries",
        combinationOf: [
            [
                "oil",
                "vegetable"
            ]
        ]
    },
    {
        title: "fridge",
        combinationOf: [
            [
                "metal",
                "cold"
            ],
            [
                "electricity",
                "cold"
            ],
            [
                "metal",
                "ice"
            ]
        ]
    },
    {
        title: "frog",
        combinationOf: [
            [
                "wild animal",
                "pond"
            ]
        ]
    },
    {
        title: "fruit",
        combinationOf: [
            [
                "tree",
                "farmer"
            ],
            [
                "sun",
                "tree"
            ]
        ]
    },
    {
        title: "fruit tree",
        combinationOf: [
            [
                "fruit",
                "tree"
            ]
        ]
    },
    {
        title: "galaxy",
        combinationOf: [
            [
                "star",
                "star"
            ]
        ]
    },
    {
        title: "garden",
        combinationOf: [
            [
                "plant",
                "plant"
            ],
            [
                "flower",
                "flower"
            ],
            [
                "plant",
                "grass"
            ],
            [
                "house",
                "grass"
            ]
        ]
    },
    {
        title: "gardener",
        combinationOf: [
            [
                "human",
                "garden"
            ]
        ]
    },
    {
        title: "geyser",
        combinationOf: [
            [
                "steam",
                "earth"
            ]
        ]
    },
    {
        title: "ghost",
        combinationOf: [
            [
                "graveyard",
                "night"
            ],
            [
                "castle",
                "night"
            ]
        ]
    },
    {
        title: "gift",
        combinationOf: [
            [
                "santa",
                "christmas tree"
            ],
            [
                "santa",
                "christmas stocking"
            ],
            [
                "santa",
                "cookie"
            ],
            [
                "santa",
                "chimney"
            ],
            [
                "santa",
                "fireplace"
            ]
        ]
    },
    {
        title: "gingerbread house",
        combinationOf: [
            [
                "house",
                "dough"
            ],
            [
                "house",
                "gingerbread man"
            ]
        ]
    },
    {
        title: "gingerbread man",
        combinationOf: [
            [
                "life",
                "dough"
            ]
        ]
    },
    {
        title: "glacier",
        combinationOf: [
            [
                "ice",
                "mountain"
            ]
        ]
    },
    {
        title: "glass",
        combinationOf: [
            [
                "fire",
                "sand"
            ],
            [
                "sand",
                "electricity"
            ]
        ]
    },
    {
        title: "glasses",
        combinationOf: [
            [
                "glass",
                "metal"
            ],
            [
                "glass",
                "glass"
            ]
        ]
    },
    {
        title: "gnome",
        combinationOf: [
            [
                "garden",
                "statue"
            ]
        ]
    },
    {
        title: "goat",
        combinationOf: [
            [
                "livestock",
                "mountain"
            ]
        ]
    },
    {
        title: "godzilla",
        combinationOf: [
            [
                "dinosaur",
                "city"
            ]
        ]
    },
    {
        title: "gold",
        combinationOf: [
            [
                "metal",
                "sun"
            ],
            [
                "metal",
                "rainbow"
            ]
        ]
    },
    {
        title: "golem",
        combinationOf: [
            [
                "clay",
                "life"
            ]
        ]
    },
    {
        title: "granite",
        combinationOf: [
            [
                "lava",
                "pressure"
            ]
        ]
    },
    {
        title: "grass",
        combinationOf: [
            [
                "plant",
                "earth"
            ]
        ]
    },
    {
        title: "grave",
        combinationOf: [
            [
                "coffin",
                "earth"
            ],
            [
                "corpse",
                "earth"
            ]
        ]
    },
    {
        title: "gravestone",
        combinationOf: [
            [
                "grave",
                "stone"
            ]
        ]
    },
    {
        title: "graveyard",
        combinationOf: [
            [
                "grave",
                "grave"
            ],
            [
                "gravestone",
                "gravestone"
            ]
        ]
    },
    {
        title: "greenhouse",
        combinationOf: [
            [
                "plant",
                "glass"
            ],
            [
                "window",
                "window"
            ]
        ]
    },
    {
        title: "grenade",
        combinationOf: [
            [
                "explosion",
                "metal"
            ]
        ]
    },
    {
        title: "grilled cheese",
        combinationOf: [
            [
                "cheese",
                "toast"
            ]
        ]
    },
    {
        title: "grim reaper",
        combinationOf: [
            [
                "human",
                "scythe"
            ],
            [
                "corpse",
                "scythe"
            ]
        ]
    },
    {
        title: "gun",
        combinationOf: [
            [
                "metal",
                "bullet"
            ]
        ]
    },
    {
        title: "gunpowder",
        combinationOf: [
            [
                "fire",
                "dust"
            ]
        ]
    },
    {
        title: "hail",
        combinationOf: [
            [
                "rain",
                "ice"
            ],
            [
                "ice",
                "storm"
            ],
            [
                "ice",
                "cloud"
            ]
        ]
    },
    {
        title: "ham",
        combinationOf: [
            [
                "meat",
                "smoke"
            ]
        ]
    },
    {
        title: "hamburger",
        combinationOf: [
            [
                "meat",
                "bread"
            ]
        ]
    },
    {
        title: "hammer",
        combinationOf: [
            [
                "metal",
                "wood"
            ]
        ]
    },
    {
        title: "hamster",
        combinationOf: [
            [
                "wheel",
                "mouse"
            ]
        ]
    },
    {
        title: "hard roe",
        combinationOf: [
            [
                "egg",
                "water"
            ],
            [
                "egg",
                "sea"
            ],
            [
                "egg",
                "ocean"
            ],
            [
                "egg",
                "pond"
            ],
            [
                "fish",
                "fish"
            ]
        ]
    },
    {
        title: "harp",
        combinationOf: [
            [
                "angel",
                "music"
            ]
        ]
    },
    {
        title: "hay",
        combinationOf: [
            [
                "farmer",
                "grass"
            ],
            [
                "grass",
                "scythe"
            ],
            [
                "grass",
                "sun"
            ]
        ]
    },
    {
        title: "hay bale",
        combinationOf: [
            [
                "hay",
                "hay"
            ]
        ]
    },
    {
        title: "hedge",
        combinationOf: [
            [
                "plant",
                "fence"
            ],
            [
                "leaf",
                "fence"
            ]
        ]
    },
    {
        title: "helicopter",
        combinationOf: [
            [
                "blade",
                "airplane"
            ],
            [
                "windmill",
                "airplane"
            ]
        ]
    },
    {
        title: "herb",
        combinationOf: [
            [
                "plant",
                "sickness"
            ],
            [
                "sickness",
                "leaf"
            ]
        ]
    },
    {
        title: "hero",
        combinationOf: [
            [
                "knight",
                "dragon"
            ]
        ]
    },
    {
        title: "hippo",
        combinationOf: [
            [
                "horse",
                "river"
            ],
            [
                "horse",
                "water"
            ]
        ]
    },
    {
        title: "honey",
        combinationOf: [
            [
                "bee",
                "flower"
            ],
            [
                "bee",
                "beehive"
            ]
        ]
    },
    {
        title: "horizon",
        combinationOf: [
            [
                "sky",
                "earth"
            ],
            [
                "sea",
                "sky"
            ],
            [
                "ocean",
                "sky"
            ]
        ]
    },
    {
        title: "horse",
        combinationOf: [
            [
                "hay",
                "livestock"
            ]
        ]
    },
    {
        title: "horseshoe",
        combinationOf: [
            [
                "metal",
                "horse"
            ]
        ]
    },
    {
        title: "hospital",
        combinationOf: [
            [
                "house",
                "sickness"
            ],
            [
                "house",
                "ambulance"
            ],
            [
                "house",
                "doctor"
            ]
        ]
    },
    {
        title: "hourglass",
        combinationOf: [
            [
                "sand",
                "glass"
            ]
        ]
    },
    {
        title: "house",
        combinationOf: [
            [
                "wall",
                "wall"
            ]
        ]
    },
    {
        title: "hummingbird",
        combinationOf: [
            [
                "bird",
                "flower"
            ]
        ]
    },
    {
        title: "hurricane",
        combinationOf: [
            [
                "wind",
                "energy"
            ]
        ]
    },
    {
        title: "husky",
        combinationOf: [
            [
                "snow",
                "dog"
            ],
            [
                "ice",
                "dog"
            ]
        ]
    },
    {
        title: "ice",
        combinationOf: [
            [
                "water",
                "cold"
            ]
        ]
    },
    {
        title: "iceberg",
        combinationOf: [
            [
                "sea",
                "ice"
            ],
            [
                "ocean",
                "ice"
            ],
            [
                "sea",
                "antarctica"
            ],
            [
                "ocean",
                "antarctica"
            ]
        ]
    },
    {
        title: "ice cream",
        combinationOf: [
            [
                "milk",
                "ice"
            ]
        ]
    },
    {
        title: "ice cream truck",
        combinationOf: [
            [
                "car",
                "ice cream"
            ]
        ]
    },
    {
        title: "iced tea",
        combinationOf: [
            [
                "ice",
                "tea"
            ],
            [
                "cold",
                "tea"
            ]
        ]
    },
    {
        title: "idea",
        combinationOf: [
            [
                "human",
                "light bulb"
            ],
            [
                "light bulb",
                "nerd"
            ]
        ]
    },
    {
        title: "igloo",
        combinationOf: [
            [
                "house",
                "ice"
            ],
            [
                "house",
                "snow"
            ]
        ]
    },
    {
        title: "internet",
        combinationOf: [
            [
                "computer",
                "computer"
            ],
            [
                "computer",
                "wire"
            ],
            [
                "computer",
                "web"
            ]
        ]
    },
    {
        title: "isle",
        combinationOf: [
            [
                "ocean",
                "volcano"
            ],
            [
                "volcano",
                "sea"
            ]
        ]
    },
    {
        title: "ivy",
        combinationOf: [
            [
                "plant",
                "wall"
            ]
        ]
    },
    {
        title: "jack-o'-lantern",
        combinationOf: [
            [
                "pumpkin",
                "fire"
            ],
            [
                "blade",
                "pumpkin"
            ],
            [
                "pumpkin",
                "candle"
            ]
        ]
    },
    {
        title: "jam",
        combinationOf: [
            [
                "juice",
                "sugar"
            ]
        ]
    },
    {
        title: "jedi",
        combinationOf: [
            [
                "lightsaber",
                "human"
            ],
            [
                "knight",
                "lightsaber"
            ]
        ]
    },
    {
        title: "jerky",
        combinationOf: [
            [
                "meat",
                "sun"
            ],
            [
                "meat",
                "salt"
            ]
        ]
    },
    {
        title: "juice",
        combinationOf: [
            [
                "water",
                "fruit"
            ],
            [
                "pressure",
                "fruit"
            ]
        ]
    },
    {
        title: "keyboard cat",
        combinationOf: [
            [
                "cat",
                "music"
            ]
        ]
    },
    {
        title: "kite",
        combinationOf: [
            [
                "wind",
                "paper"
            ],
            [
                "sky",
                "paper"
            ]
        ]
    },
    {
        title: "knight",
        combinationOf: [
            [
                "human",
                "armor"
            ]
        ]
    },
    {
        title: "lake",
        combinationOf: [
            [
                "water",
                "pond"
            ],
            [
                "river",
                "dam"
            ]
        ]
    },
    {
        title: "lamp",
        combinationOf: [
            [
                "metal",
                "light bulb"
            ]
        ]
    },
    {
        title: "lasso",
        combinationOf: [
            [
                "cow",
                "rope"
            ],
            [
                "horse",
                "rope"
            ]
        ]
    },
    {
        title: "lava",
        combinationOf: [
            [
                "earth",
                "fire"
            ]
        ]
    },
    {
        title: "lava lamp",
        combinationOf: [
            [
                "lava",
                "lamp"
            ]
        ]
    },
    {
        title: "lawn mower",
        combinationOf: [
            [
                "grass",
                "tool"
            ],
            [
                "electricity",
                "scythe"
            ]
        ]
    },
    {
        title: "leaf",
        combinationOf: [
            [
                "tree",
                "wind"
            ]
        ]
    },
    {
        title: "leather",
        combinationOf: [
            [
                "cow",
                "blade"
            ],
            [
                "pig",
                "blade"
            ]
        ]
    },
    {
        title: "lemonade",
        combinationOf: [
            [
                "fruit",
                "water"
            ]
        ]
    },
    {
        title: "letter",
        combinationOf: [
            [
                "paper",
                "pencil"
            ]
        ]
    },
    {
        title: "library",
        combinationOf: [
            [
                "house",
                "book"
            ]
        ]
    },
    {
        title: "life",
        combinationOf: [
            [
                "swamp",
                "energy"
            ],
            [
                "love",
                "time"
            ]
        ]
    },
    {
        title: "light",
        combinationOf: [
            [
                "light bulb",
                "electricity"
            ],
            [
                "electricity",
                "flashlight"
            ]
        ]
    },
    {
        title: "light bulb",
        combinationOf: [
            [
                "electricity",
                "glass"
            ]
        ]
    },
    {
        title: "lighthouse",
        combinationOf: [
            [
                "light",
                "house"
            ],
            [
                "light",
                "beach"
            ],
            [
                "light",
                "ocean"
            ],
            [
                "light",
                "sea"
            ]
        ]
    },
    {
        title: "lightsaber",
        combinationOf: [
            [
                "light",
                "sword"
            ],
            [
                "energy",
                "sword"
            ],
            [
                "electricity",
                "sword"
            ]
        ]
    },
    {
        title: "lion",
        combinationOf: [
            [
                "wild animal",
                "cat"
            ]
        ]
    },
    {
        title: "livestock",
        combinationOf: [
            [
                "farmer",
                "life"
            ],
            [
                "wild animal",
                "human"
            ],
            [
                "farmer",
                "wild animal"
            ]
        ]
    },
    {
        title: "lizard",
        combinationOf: [
            [
                "egg",
                "swamp"
            ]
        ]
    },
    {
        title: "log cabin",
        combinationOf: [
            [
                "wood",
                "house"
            ]
        ]
    },
    {
        title: "love",
        combinationOf: [
            [
                "human",
                "human"
            ]
        ]
    },
    {
        title: "lumberjack",
        combinationOf: [
            [
                "axe",
                "human"
            ],
            [
                "human",
                "chainsaw"
            ]
        ]
    },
    {
        title: "mac and cheese",
        combinationOf: [
            [
                "cheese",
                "pasta"
            ]
        ]
    },
    {
        title: "mailman",
        combinationOf: [
            [
                "human",
                "letter"
            ]
        ]
    },
    {
        title: "manatee",
        combinationOf: [
            [
                "cow",
                "sea"
            ]
        ]
    },
    {
        title: "map",
        combinationOf: [
            [
                "paper",
                "earth"
            ]
        ]
    },
    {
        title: "mars",
        combinationOf: [
            [
                "rust",
                "planet"
            ]
        ]
    },
    {
        title: "marshmallows",
        combinationOf: [
            [
                "sugar",
                "campfire"
            ]
        ]
    },
    {
        title: "mayonnaise",
        combinationOf: [
            [
                "egg",
                "oil"
            ]
        ]
    },
    {
        title: "meat",
        combinationOf: [
            [
                "cow",
                "tool"
            ],
            [
                "livestock",
                "butcher"
            ],
            [
                "cow",
                "butcher"
            ],
            [
                "pig",
                "butcher"
            ],
            [
                "pig",
                "tool"
            ],
            [
                "blade",
                "livestock"
            ]
        ]
    },
    {
        title: "medusa",
        combinationOf: [
            [
                "human",
                "snake"
            ]
        ]
    },
    {
        title: "mermaid",
        combinationOf: [
            [
                "human",
                "fish"
            ]
        ]
    },
    {
        title: "metal",
        combinationOf: [
            [
                "fire",
                "stone"
            ]
        ]
    },
    {
        title: "meteor",
        combinationOf: [
            [
                "meteoroid",
                "atmosphere"
            ],
            [
                "sky",
                "meteoroid"
            ]
        ]
    },
    {
        title: "meteoroid",
        combinationOf: [
            [
                "stone",
                "space"
            ]
        ]
    },
    {
        title: "microscope",
        combinationOf: [
            [
                "glass",
                "bacteria"
            ],
            [
                "bacteria",
                "glasses"
            ]
        ]
    },
    {
        title: "milk",
        combinationOf: [
            [
                "farmer",
                "cow"
            ],
            [
                "cow",
                "human"
            ]
        ]
    },
    {
        title: "milk shake",
        combinationOf: [
            [
                "milk",
                "ice cream"
            ]
        ]
    },
    {
        title: "minotaur",
        combinationOf: [
            [
                "human",
                "cow"
            ]
        ]
    },
    {
        title: "mirror",
        combinationOf: [
            [
                "glass",
                "metal"
            ]
        ]
    },
    {
        title: "mold",
        combinationOf: [
            [
                "time",
                "bread"
            ]
        ]
    },
    {
        title: "monarch",
        combinationOf: [
            [
                "human",
                "castle"
            ],
            [
                "excalibur",
                "human"
            ],
            [
                "crown",
                "human"
            ]
        ]
    },
    {
        title: "money",
        combinationOf: [
            [
                "paper",
                "gold"
            ]
        ]
    },
    {
        title: "monkey",
        combinationOf: [
            [
                "tree",
                "wild animal"
            ]
        ]
    },
    {
        title: "moon",
        combinationOf: [
            [
                "sky",
                "cheese"
            ],
            [
                "sky",
                "stone"
            ]
        ]
    },
    {
        title: "moss",
        combinationOf: [
            [
                "plant",
                "stone"
            ],
            [
                "algae",
                "stone"
            ]
        ]
    },
    {
        title: "moth",
        combinationOf: [
            [
                "moon",
                "butterfly"
            ],
            [
                "night",
                "butterfly"
            ]
        ]
    },
    {
        title: "motorcycle",
        combinationOf: [
            [
                "bicycle",
                "energy"
            ],
            [
                "bicycle",
                "steel"
            ]
        ]
    },
    {
        title: "mountain",
        combinationOf: [
            [
                "earthquake",
                "earth"
            ]
        ]
    },
    {
        title: "mountain goat",
        combinationOf: [
            [
                "mountain",
                "goat"
            ],
            [
                "goat",
                "mountain range"
            ]
        ]
    },
    {
        title: "mountain range",
        combinationOf: [
            [
                "mountain",
                "mountain"
            ]
        ]
    },
    {
        title: "mouse",
        combinationOf: [
            [
                "cheese",
                "wild animal"
            ]
        ]
    },
    {
        title: "mousetrap",
        combinationOf: [
            [
                "wood",
                "cheese"
            ],
            [
                "metal",
                "cheese"
            ]
        ]
    },
    {
        title: "mud",
        combinationOf: [
            [
                "water",
                "earth"
            ]
        ]
    },
    {
        title: "mummy",
        combinationOf: [
            [
                "corpse",
                "pyramid"
            ]
        ]
    },
    {
        title: "music",
        combinationOf: [
            [
                "human",
                "flute"
            ],
            [
                "human",
                "sound"
            ]
        ]
    },
    {
        title: "narwhal",
        combinationOf: [
            [
                "unicorn",
                "ocean"
            ],
            [
                "unicorn",
                "water"
            ],
            [
                "sea",
                "unicorn"
            ]
        ]
    },
    {
        title: "needle",
        combinationOf: [
            [
                "metal",
                "thread"
            ],
            [
                "metal",
                "hay"
            ]
        ]
    },
    {
        title: "nerd",
        combinationOf: [
            [
                "human",
                "glasses"
            ]
        ]
    },
    {
        title: "nessie",
        combinationOf: [
            [
                "story",
                "lake"
            ]
        ]
    },
    {
        title: "nest",
        combinationOf: [
            [
                "bird",
                "tree"
            ],
            [
                "bird",
                "hay"
            ],
            [
                "egg",
                "hay"
            ]
        ]
    },
    {
        title: "newspaper",
        combinationOf: [
            [
                "paper",
                "paper"
            ]
        ]
    },
    {
        title: "night",
        combinationOf: [
            [
                "moon",
                "time"
            ],
            [
                "time",
                "day"
            ],
            [
                "sky",
                "moon"
            ]
        ]
    },
    {
        title: "ninja",
        combinationOf: [
            [
                "shuriken",
                "human"
            ]
        ]
    },
    {
        title: "ninja turtle",
        combinationOf: [
            [
                "turtle",
                "ninja"
            ]
        ]
    },
    {
        title: "nut",
        combinationOf: [
            [
                "tree",
                "squirrel"
            ],
            [
                "fruit",
                "squirrel"
            ]
        ]
    },
    {
        title: "oasis",
        combinationOf: [
            [
                "desert",
                "water"
            ]
        ]
    },
    {
        title: "obsidian",
        combinationOf: [
            [
                "lava",
                "water"
            ]
        ]
    },
    {
        title: "ocean",
        combinationOf: [
            [
                "sea",
                "sea"
            ],
            [
                "water",
                "sea"
            ]
        ]
    },
    {
        title: "oil",
        combinationOf: [
            [
                "sunflower",
                "pressure"
            ]
        ]
    },
    {
        title: "oil lamp",
        combinationOf: [
            [
                "clay",
                "oil"
            ],
            [
                "potter",
                "oil"
            ],
            [
                "oil",
                "rope"
            ],
            [
                "glass",
                "oil"
            ],
            [
                "fire",
                "oil"
            ]
        ]
    },
    {
        title: "omelette",
        combinationOf: [
            [
                "egg",
                "fire"
            ]
        ]
    },
    {
        title: "optical fiber",
        combinationOf: [
            [
                "wire",
                "light"
            ]
        ]
    },
    {
        title: "orchard",
        combinationOf: [
            [
                "fruit tree",
                "fruit tree"
            ],
            [
                "field",
                "fruit tree"
            ]
        ]
    },
    {
        title: "origami",
        combinationOf: [
            [
                "bird",
                "paper"
            ]
        ]
    },
    {
        title: "ostrich",
        combinationOf: [
            [
                "bird",
                "earth"
            ],
            [
                "bird",
                "sand"
            ]
        ]
    },
    {
        title: "owl",
        combinationOf: [
            [
                "night",
                "bird"
            ],
            [
                "bird",
                "wizard"
            ]
        ]
    },
    {
        title: "oxygen",
        combinationOf: [
            [
                "plant",
                "sun"
            ],
            [
                "plant",
                "carbon dioxide"
            ]
        ]
    },
    {
        title: "ozone",
        combinationOf: [
            [
                "oxygen",
                "oxygen"
            ],
            [
                "oxygen",
                "electricity"
            ]
        ]
    },
    {
        title: "paint",
        combinationOf: [
            [
                "water",
                "rainbow"
            ],
            [
                "water",
                "pencil"
            ]
        ]
    },
    {
        title: "palm",
        combinationOf: [
            [
                "isle",
                "tree"
            ],
            [
                "tree",
                "beach"
            ]
        ]
    },
    {
        title: "paper",
        combinationOf: [
            [
                "wood",
                "pressure"
            ]
        ]
    },
    {
        title: "paper airplane",
        combinationOf: [
            [
                "airplane",
                "paper"
            ]
        ]
    },
    {
        title: "parachute",
        combinationOf: [
            [
                "pilot",
                "fabric"
            ],
            [
                "pilot",
                "umbrella"
            ]
        ]
    },
    {
        title: "parrot",
        combinationOf: [
            [
                "bird",
                "pirate"
            ]
        ]
    },
    {
        title: "pasta",
        combinationOf: [
            [
                "flour",
                "egg"
            ]
        ]
    },
    {
        title: "peacock",
        combinationOf: [
            [
                "bird",
                "rainbow"
            ]
        ]
    },
    {
        title: "pegasus",
        combinationOf: [
            [
                "bird",
                "horse"
            ],
            [
                "sky",
                "horse"
            ],
            [
                "bird",
                "unicorn"
            ]
        ]
    },
    {
        title: "pencil",
        combinationOf: [
            [
                "wood",
                "coal"
            ],
            [
                "wood",
                "charcoal"
            ]
        ]
    },
    {
        title: "pencil sharpener",
        combinationOf: [
            [
                "blade",
                "pencil"
            ]
        ]
    },
    {
        title: "penguin",
        combinationOf: [
            [
                "ice",
                "wild animal"
            ],
            [
                "ice",
                "bird"
            ],
            [
                "bird",
                "snow"
            ]
        ]
    },
    {
        title: "penicillin",
        combinationOf: [
            [
                "doctor",
                "mold"
            ]
        ]
    },
    {
        title: "perfume",
        combinationOf: [
            [
                "water",
                "rose"
            ],
            [
                "water",
                "flower"
            ],
            [
                "steam",
                "rose"
            ],
            [
                "steam",
                "flower"
            ],
            [
                "alcohol",
                "rose"
            ],
            [
                "alcohol",
                "flower"
            ]
        ]
    },
    {
        title: "petroleum",
        combinationOf: [
            [
                "fossil",
                "time"
            ],
            [
                "fossil",
                "pressure"
            ]
        ]
    },
    {
        title: "phoenix",
        combinationOf: [
            [
                "fire",
                "bird"
            ]
        ]
    },
    {
        title: "picnic",
        combinationOf: [
            [
                "grass",
                "sandwich"
            ],
            [
                "beach",
                "sandwich"
            ]
        ]
    },
    {
        title: "pie",
        combinationOf: [
            [
                "dough",
                "fruit"
            ]
        ]
    },
    {
        title: "pig",
        combinationOf: [
            [
                "livestock",
                "mud"
            ]
        ]
    },
    {
        title: "pigeon",
        combinationOf: [
            [
                "bird",
                "city"
            ],
            [
                "bird",
                "letter"
            ],
            [
                "bird",
                "statue"
            ]
        ]
    },
    {
        title: "piggy bank",
        combinationOf: [
            [
                "pig",
                "money"
            ],
            [
                "pottery",
                "pig"
            ]
        ]
    },
    {
        title: "pillow",
        combinationOf: [
            [
                "cotton",
                "fabric"
            ]
        ]
    },
    {
        title: "pilot",
        combinationOf: [
            [
                "airplane",
                "human"
            ],
            [
                "seaplane",
                "human"
            ]
        ]
    },
    {
        title: "pinocchio",
        combinationOf: [
            [
                "wood",
                "life"
            ]
        ]
    },
    {
        title: "pipe",
        combinationOf: [
            [
                "tobacco",
                "wood"
            ]
        ]
    },
    {
        title: "piranha",
        combinationOf: [
            [
                "fish",
                "blood"
            ]
        ]
    },
    {
        title: "pirate",
        combinationOf: [
            [
                "sword",
                "sailor"
            ],
            [
                "sailor",
                "pirate ship"
            ]
        ]
    },
    {
        title: "pirate ship",
        combinationOf: [
            [
                "sailboat",
                "pirate"
            ],
            [
                "boat",
                "pirate"
            ]
        ]
    },
    {
        title: "pitchfork",
        combinationOf: [
            [
                "tool",
                "hay"
            ]
        ]
    },
    {
        title: "pizza",
        combinationOf: [
            [
                "cheese",
                "dough"
            ]
        ]
    },
    {
        title: "planet",
        combinationOf: [
            [
                "earth",
                "space"
            ]
        ]
    },
    {
        title: "plankton",
        combinationOf: [
            [
                "water",
                "life"
            ],
            [
                "sea",
                "life"
            ]
        ]
    },
    {
        title: "plant",
        combinationOf: [
            [
                "rain",
                "earth"
            ]
        ]
    },
    {
        title: "platypus",
        combinationOf: [
            [
                "beaver",
                "duck"
            ]
        ]
    },
    {
        title: "pond",
        combinationOf: [
            [
                "water",
                "garden"
            ]
        ]
    },
    {
        title: "popsicle",
        combinationOf: [
            [
                "juice",
                "ice"
            ]
        ]
    },
    {
        title: "pottery",
        combinationOf: [
            [
                "fire",
                "clay"
            ],
            [
                "clay",
                "wheel"
            ],
            [
                "clay",
                "tool"
            ]
        ]
    },
    {
        title: "pressure",
        combinationOf: [
            [
                "earth",
                "earth"
            ],
            [
                "air",
                "air"
            ]
        ]
    },
    {
        title: "printer",
        combinationOf: [
            [
                "paper",
                "computer"
            ]
        ]
    },
    {
        title: "prism",
        combinationOf: [
            [
                "glass",
                "rainbow"
            ]
        ]
    },
    {
        title: "pterodactyl",
        combinationOf: [
            [
                "air",
                "dinosaur"
            ],
            [
                "bird",
                "dinosaur"
            ]
        ]
    },
    {
        title: "puddle",
        combinationOf: [
            [
                "snowman",
                "flamethrower"
            ],
            [
                "sun",
                "ice"
            ],
            [
                "sun",
                "snowman"
            ]
        ]
    },
    {
        title: "pumpkin",
        combinationOf: [
            [
                "vegetable",
                "fire"
            ],
            [
                "vegetable",
                "light"
            ]
        ]
    },
    {
        title: "pyramid",
        combinationOf: [
            [
                "desert",
                "stone"
            ],
            [
                "desert",
                "grave"
            ]
        ]
    },
    {
        title: "quicksand",
        combinationOf: [
            [
                "sand",
                "swamp"
            ]
        ]
    },
    {
        title: "rabbit",
        combinationOf: [
            [
                "wild animal",
                "carrot"
            ]
        ]
    },
    {
        title: "rain",
        combinationOf: [
            [
                "water",
                "air"
            ]
        ]
    },
    {
        title: "rainbow",
        combinationOf: [
            [
                "rain",
                "sun"
            ],
            [
                "rain",
                "light"
            ]
        ]
    },
    {
        title: "rat",
        combinationOf: [
            [
                "wild animal",
                "pirate ship"
            ],
            [
                "sailboat",
                "wild animal"
            ]
        ]
    },
    {
        title: "recipe",
        combinationOf: [
            [
                "flour",
                "paper"
            ],
            [
                "paper",
                "baker"
            ]
        ]
    },
    {
        title: "reindeer",
        combinationOf: [
            [
                "santa",
                "wild animal"
            ],
            [
                "livestock",
                "santa"
            ]
        ]
    },
    {
        title: "ring",
        combinationOf: [
            [
                "diamond",
                "metal"
            ],
            [
                "diamond",
                "gold"
            ]
        ]
    },
    {
        title: "river",
        combinationOf: [
            [
                "mountain",
                "water"
            ],
            [
                "rain",
                "mountain"
            ]
        ]
    },
    {
        title: "robot",
        combinationOf: [
            [
                "metal",
                "life"
            ],
            [
                "steel",
                "life"
            ],
            [
                "life",
                "armor"
            ]
        ]
    },
    {
        title: "rocket",
        combinationOf: [
            [
                "airplane",
                "space"
            ]
        ]
    },
    {
        title: "roller coaster",
        combinationOf: [
            [
                "train",
                "mountain"
            ],
            [
                "mountain",
                "cart"
            ]
        ]
    },
    {
        title: "roomba",
        combinationOf: [
            [
                "robot",
                "vacuum cleaner"
            ]
        ]
    },
    {
        title: "rope",
        combinationOf: [
            [
                "thread",
                "thread"
            ]
        ]
    },
    {
        title: "rose",
        combinationOf: [
            [
                "plant",
                "love"
            ],
            [
                "flower",
                "love"
            ]
        ]
    },
    {
        title: "ruins",
        combinationOf: [
            [
                "time",
                "castle"
            ],
            [
                "time",
                "house"
            ]
        ]
    },
    {
        title: "ruler",
        combinationOf: [
            [
                "wood",
                "pencil"
            ]
        ]
    },
    {
        title: "rust",
        combinationOf: [
            [
                "air",
                "metal"
            ],
            [
                "metal",
                "oxygen"
            ],
            [
                "steel",
                "oxygen"
            ],
            [
                "air",
                "steel"
            ]
        ]
    },
    {
        title: "rv",
        combinationOf: [
            [
                "car",
                "house"
            ]
        ]
    },
    {
        title: "saddle",
        combinationOf: [
            [
                "horse",
                "leather"
            ]
        ]
    },
    {
        title: "safe",
        combinationOf: [
            [
                "metal",
                "money"
            ],
            [
                "metal",
                "gold"
            ],
            [
                "steel",
                "money"
            ],
            [
                "steel",
                "gold"
            ]
        ]
    },
    {
        title: "safety glasses",
        combinationOf: [
            [
                "explosion",
                "glasses"
            ],
            [
                "tool",
                "glasses"
            ],
            [
                "engineer",
                "glasses"
            ]
        ]
    },
    {
        title: "sailboat",
        combinationOf: [
            [
                "boat",
                "wind"
            ],
            [
                "boat",
                "fabric"
            ]
        ]
    },
    {
        title: "sailor",
        combinationOf: [
            [
                "human",
                "boat"
            ],
            [
                "human",
                "sailboat"
            ]
        ]
    },
    {
        title: "salt",
        combinationOf: [
            [
                "sea",
                "sun"
            ],
            [
                "ocean",
                "sun"
            ],
            [
                "fire",
                "sea"
            ],
            [
                "fire",
                "ocean"
            ]
        ]
    },
    {
        title: "sand",
        combinationOf: [
            [
                "air",
                "stone"
            ]
        ]
    },
    {
        title: "sand castle",
        combinationOf: [
            [
                "sand",
                "castle"
            ]
        ]
    },
    {
        title: "sandpaper",
        combinationOf: [
            [
                "sand",
                "paper"
            ]
        ]
    },
    {
        title: "sandstone",
        combinationOf: [
            [
                "stone",
                "sand"
            ]
        ]
    },
    {
        title: "sandstorm",
        combinationOf: [
            [
                "sand",
                "energy"
            ],
            [
                "sand",
                "storm"
            ],
            [
                "sand",
                "hurricane"
            ]
        ]
    },
    {
        title: "sandwich",
        combinationOf: [
            [
                "bread",
                "ham"
            ],
            [
                "cheese",
                "bread"
            ],
            [
                "bread",
                "bacon"
            ]
        ]
    },
    {
        title: "santa",
        combinationOf: [
            [
                "human",
                "christmas tree"
            ]
        ]
    },
    {
        title: "saturn",
        combinationOf: [
            [
                "ring",
                "planet"
            ]
        ]
    },
    {
        title: "scalpel",
        combinationOf: [
            [
                "blade",
                "doctor"
            ],
            [
                "blade",
                "hospital"
            ]
        ]
    },
    {
        title: "scarecrow",
        combinationOf: [
            [
                "human",
                "hay"
            ]
        ]
    },
    {
        title: "scissors",
        combinationOf: [
            [
                "blade",
                "blade"
            ]
        ]
    },
    {
        title: "scorpion",
        combinationOf: [
            [
                "wild animal",
                "sand"
            ],
            [
                "wild animal",
                "dune"
            ]
        ]
    },
    {
        title: "scythe",
        combinationOf: [
            [
                "blade",
                "grass"
            ],
            [
                "blade",
                "wheat"
            ]
        ]
    },
    {
        title: "sea",
        combinationOf: [
            [
                "water",
                "water"
            ]
        ]
    },
    {
        title: "seagull",
        combinationOf: [
            [
                "bird",
                "sea"
            ],
            [
                "bird",
                "ocean"
            ],
            [
                "bird",
                "beach"
            ]
        ]
    },
    {
        title: "seahorse",
        combinationOf: [
            [
                "horse",
                "sea"
            ],
            [
                "ocean",
                "horse"
            ],
            [
                "fish",
                "horse"
            ]
        ]
    },
    {
        title: "seal",
        combinationOf: [
            [
                "dog",
                "sea"
            ]
        ]
    },
    {
        title: "seaplane",
        combinationOf: [
            [
                "airplane",
                "water"
            ],
            [
                "airplane",
                "ocean"
            ],
            [
                "airplane",
                "sea"
            ]
        ]
    },
    {
        title: "seasickness",
        combinationOf: [
            [
                "sickness",
                "sea"
            ],
            [
                "sickness",
                "ocean"
            ],
            [
                "boat",
                "sickness"
            ],
            [
                "steamboat",
                "sickness"
            ],
            [
                "sailboat",
                "sickness"
            ]
        ]
    },
    {
        title: "seaweed",
        combinationOf: [
            [
                "plant",
                "sea"
            ],
            [
                "plant",
                "ocean"
            ]
        ]
    },
    {
        title: "sewing machine",
        combinationOf: [
            [
                "electricity",
                "needle"
            ],
            [
                "robot",
                "needle"
            ]
        ]
    },
    {
        title: "shark",
        combinationOf: [
            [
                "ocean",
                "wild animal"
            ],
            [
                "sea",
                "wild animal"
            ],
            [
                "sea",
                "blood"
            ],
            [
                "blood",
                "ocean"
            ]
        ]
    },
    {
        title: "sheep",
        combinationOf: [
            [
                "cloud",
                "livestock"
            ]
        ]
    },
    {
        title: "sheet music",
        combinationOf: [
            [
                "paper",
                "music"
            ]
        ]
    },
    {
        title: "shuriken",
        combinationOf: [
            [
                "star",
                "blade"
            ]
        ]
    },
    {
        title: "sickness",
        combinationOf: [
            [
                "human",
                "bacteria"
            ],
            [
                "human",
                "sickness"
            ],
            [
                "human",
                "rain"
            ]
        ]
    },
    {
        title: "skateboard",
        combinationOf: [
            [
                "snowboard",
                "wheel"
            ]
        ]
    },
    {
        title: "skeleton",
        combinationOf: [
            [
                "corpse",
                "time"
            ],
            [
                "bone",
                "bone"
            ]
        ]
    },
    {
        title: "ski goggles",
        combinationOf: [
            [
                "glasses",
                "snow"
            ]
        ]
    },
    {
        title: "sky",
        combinationOf: [
            [
                "air",
                "cloud"
            ]
        ]
    },
    {
        title: "skyscraper",
        combinationOf: [
            [
                "house",
                "sky"
            ]
        ]
    },
    {
        title: "sledge",
        combinationOf: [
            [
                "snow",
                "cart"
            ],
            [
                "snow",
                "wagon"
            ]
        ]
    },
    {
        title: "sloth",
        combinationOf: [
            [
                "wild animal"
            ],
            [
                "time"
            ]
        ]
    },
    {
        title: "smog",
        combinationOf: [
            [
                "smoke",
                "fog"
            ],
            [
                "fog",
                "city"
            ]
        ]
    },
    {
        title: "smoke",
        combinationOf: [
            [
                "fire",
                "wood"
            ]
        ]
    },
    {
        title: "smoke signal",
        combinationOf: [
            [
                "campfire",
                "fabric"
            ],
            [
                "smoke",
                "fabric"
            ]
        ]
    },
    {
        title: "smoothie",
        combinationOf: [
            [
                "fruit",
                "blender"
            ]
        ]
    },
    {
        title: "snake",
        combinationOf: [
            [
                "wild animal",
                "wire"
            ]
        ]
    },
    {
        title: "snow",
        combinationOf: [
            [
                "steam",
                "cold"
            ]
        ]
    },
    {
        title: "snowball",
        combinationOf: [
            [
                "snow",
                "human"
            ]
        ]
    },
    {
        title: "snowboard",
        combinationOf: [
            [
                "wood",
                "snow"
            ],
            [
                "snow",
                "surfer"
            ]
        ]
    },
    {
        title: "snow globe",
        combinationOf: [
            [
                "glass",
                "snow"
            ],
            [
                "snow",
                "crystal ball"
            ]
        ]
    },
    {
        title: "snowman",
        combinationOf: [
            [
                "snow",
                "human"
            ],
            [
                "snowball",
                "snowball"
            ],
            [
                "snow",
                "carrot"
            ],
            [
                "snowball",
                "carrot"
            ]
        ]
    },
    {
        title: "snowmobile",
        combinationOf: [
            [
                "snow",
                "motorcycle"
            ],
            [
                "snow",
                "car"
            ]
        ]
    },
    {
        title: "soap",
        combinationOf: [
            [
                "oil",
                "ash"
            ]
        ]
    },
    {
        title: "soap bubble",
        combinationOf: [
            [
                "air",
                "soap"
            ],
            [
                "water",
                "soap"
            ]
        ]
    },
    {
        title: "soda",
        combinationOf: [
            [
                "water",
                "carbon dioxide"
            ],
            [
                "juice",
                "carbon dioxide"
            ]
        ]
    },
    {
        title: "solar cell",
        combinationOf: [
            [
                "sun",
                "tool"
            ]
        ]
    },
    {
        title: "solar system",
        combinationOf: [
            [
                "sun",
                "planet"
            ]
        ]
    },
    {
        title: "sound",
        combinationOf: [
            [
                "air",
                "wave"
            ]
        ]
    },
    {
        title: "space",
        combinationOf: [
            [
                "sky",
                "star"
            ],
            [
                "sun",
                "star"
            ],
            [
                "moon",
                "star"
            ]
        ]
    },
    {
        title: "spaceship",
        combinationOf: [
            [
                "airplane",
                "astronaut"
            ]
        ]
    },
    {
        title: "space station",
        combinationOf: [
            [
                "space",
                "house"
            ]
        ]
    },
    {
        title: "spaghetti",
        combinationOf: [
            [
                "thread",
                "pasta"
            ]
        ]
    },
    {
        title: "sphinx",
        combinationOf: [
            [
                "human",
                "lion"
            ]
        ]
    },
    {
        title: "spider",
        combinationOf: [
            [
                "wild animal",
                "thread"
            ]
        ]
    },
    {
        title: "sprinkles",
        combinationOf: [
            [
                "sugar",
                "confetti"
            ]
        ]
    },
    {
        title: "squirrel",
        combinationOf: [
            [
                "mouse",
                "tree"
            ]
        ]
    },
    {
        title: "star",
        combinationOf: [
            [
                "sky",
                "night"
            ],
            [
                "night",
                "telescope"
            ]
        ]
    },
    {
        title: "starfish",
        combinationOf: [
            [
                "fish",
                "star"
            ],
            [
                "sea",
                "star"
            ],
            [
                "ocean",
                "star"
            ]
        ]
    },
    {
        title: "statue",
        combinationOf: [
            [
                "stone",
                "tool"
            ],
            [
                "human",
                "medusa"
            ]
        ]
    },
    {
        title: "steak",
        combinationOf: [
            [
                "fire",
                "cow"
            ],
            [
                "meat",
                "bbq"
            ]
        ]
    },
    {
        title: "steam",
        combinationOf: [
            [
                "water",
                "fire"
            ],
            [
                "water",
                "energy"
            ]
        ]
    },
    {
        title: "steamboat",
        combinationOf: [
            [
                "steam engine",
                "water"
            ],
            [
                "steam engine",
                "boat"
            ]
        ]
    },
    {
        title: "steam engine",
        combinationOf: [
            [
                "boiler",
                "tool"
            ],
            [
                "boiler",
                "wheel"
            ]
        ]
    },
    {
        title: "steel",
        combinationOf: [
            [
                "metal",
                "coal"
            ]
        ]
    },
    {
        title: "steel wool",
        combinationOf: [
            [
                "steel",
                "wool"
            ],
            [
                "wire",
                "wool"
            ]
        ]
    },
    {
        title: "stethoscope",
        combinationOf: [
            [
                "tool",
                "doctor"
            ]
        ]
    },
    {
        title: "stone",
        combinationOf: [
            [
                "air",
                "lava"
            ]
        ]
    },
    {
        title: "storm",
        combinationOf: [
            [
                "energy",
                "cloud"
            ],
            [
                "cloud",
                "electricity"
            ]
        ]
    },
    {
        title: "story",
        combinationOf: [
            [
                "human",
                "campfire"
            ]
        ]
    },
    {
        title: "sugar",
        combinationOf: [
            [
                "fruit",
                "energy"
            ],
            [
                "juice",
                "fire"
            ],
            [
                "juice",
                "energy"
            ]
        ]
    },
    {
        title: "sun",
        combinationOf: [
            [
                "fire",
                "sky"
            ]
        ]
    },
    {
        title: "sundial",
        combinationOf: [
            [
                "clock",
                "sun"
            ]
        ]
    },
    {
        title: "sunflower",
        combinationOf: [
            [
                "plant",
                "sun"
            ],
            [
                "flower",
                "sun"
            ]
        ]
    },
    {
        title: "sunglasses",
        combinationOf: [
            [
                "sun",
                "glasses"
            ],
            [
                "beach",
                "glasses"
            ]
        ]
    },
    {
        title: "super nova",
        combinationOf: [
            [
                "explosion",
                "star"
            ]
        ]
    },
    {
        title: "surfer",
        combinationOf: [
            [
                "human",
                "wave"
            ]
        ]
    },
    {
        title: "sushi",
        combinationOf: [
            [
                "fish",
                "seaweed"
            ],
            [
                "caviar",
                "seaweed"
            ]
        ]
    },
    {
        title: "swamp",
        combinationOf: [
            [
                "mud",
                "plant"
            ],
            [
                "mud",
                "grass"
            ]
        ]
    },
    {
        title: "sweater",
        combinationOf: [
            [
                "wool",
                "tool"
            ],
            [
                "human",
                "wool"
            ]
        ]
    },
    {
        title: "swim goggles",
        combinationOf: [
            [
                "glasses",
                "water"
            ]
        ]
    },
    {
        title: "swimmer",
        combinationOf: [
            [
                "human",
                "swim goggles"
            ]
        ]
    },
    {
        title: "sword",
        combinationOf: [
            [
                "blade",
                "metal"
            ],
            [
                "blade",
                "steel"
            ]
        ]
    },
    {
        title: "swordfish",
        combinationOf: [
            [
                "fish",
                "sword"
            ]
        ]
    },
    {
        title: "tank",
        combinationOf: [
            [
                "car",
                "armor"
            ],
            [
                "car",
                "gun"
            ]
        ]
    },
    {
        title: "taser",
        combinationOf: [
            [
                "gun",
                "electricity"
            ]
        ]
    },
    {
        title: "tea",
        combinationOf: [
            [
                "water",
                "leaf"
            ]
        ]
    },
    {
        title: "telescope",
        combinationOf: [
            [
                "glass",
                "sky"
            ],
            [
                "glass",
                "star"
            ],
            [
                "glass",
                "space"
            ]
        ]
    },
    {
        title: "tent",
        combinationOf: [
            [
                "wood",
                "fabric"
            ],
            [
                "house",
                "fabric"
            ]
        ]
    },
    {
        title: "the one ring",
        combinationOf: [
            [
                "volcano",
                "ring"
            ]
        ]
    },
    {
        title: "thread",
        combinationOf: [
            [
                "cotton",
                "tool"
            ],
            [
                "wheel",
                "wool"
            ]
        ]
    },
    {
        title: "tide",
        combinationOf: [
            [
                "sea",
                "moon"
            ],
            [
                "ocean",
                "moon"
            ]
        ]
    },
    {
        title: "time",
        combinationOf: [
            [
                "sand",
                "glass"
            ]
        ]
    },
    {
        title: "titanic",
        combinationOf: [
            [
                "steamboat",
                "iceberg"
            ]
        ]
    },
    {
        title: "toast",
        combinationOf: [
            [
                "sandwich",
                "fire"
            ],
            [
                "bread",
                "fire"
            ]
        ]
    },
    {
        title: "tobacco",
        combinationOf: [
            [
                "plant",
                "fire"
            ]
        ]
    },
    {
        title: "tool",
        combinationOf: [
            [
                "metal",
                "human"
            ]
        ]
    },
    {
        title: "toucan",
        combinationOf: [
            [
                "bird",
                "rainbow"
            ]
        ]
    },
    {
        title: "tractor",
        combinationOf: [
            [
                "farmer",
                "car"
            ],
            [
                "field",
                "car"
            ]
        ]
    },
    {
        title: "train",
        combinationOf: [
            [
                "steam engine",
                "steel"
            ],
            [
                "steam engine",
                "metal"
            ],
            [
                "steam engine",
                "wheel"
            ],
            [
                "steam engine",
                "wagon"
            ]
        ]
    },
    {
        title: "treasure",
        combinationOf: [
            [
                "pirate",
                "treasure map"
            ]
        ]
    },
    {
        title: "treasure map",
        combinationOf: [
            [
                "pirate",
                "map"
            ]
        ]
    },
    {
        title: "tree",
        combinationOf: [
            [
                "plant",
                "time"
            ]
        ]
    },
    {
        title: "treehouse",
        combinationOf: [
            [
                "tree",
                "house"
            ]
        ]
    },
    {
        title: "trojan horse",
        combinationOf: [
            [
                "horse",
                "wood"
            ]
        ]
    },
    {
        title: "tsunami",
        combinationOf: [
            [
                "ocean",
                "earthquake"
            ],
            [
                "sea",
                "earthquake"
            ]
        ]
    },
    {
        title: "tunnel",
        combinationOf: [
            [
                "engineer",
                "mountain"
            ]
        ]
    },
    {
        title: "turtle",
        combinationOf: [
            [
                "egg",
                "sand"
            ]
        ]
    },
    {
        title: "twilight",
        combinationOf: [
            [
                "day",
                "night"
            ]
        ]
    },
    {
        title: "tyrannosaurus rex",
        combinationOf: [
            [
                "meat",
                "dinosaur"
            ]
        ]
    },
    {
        title: "ufo",
        combinationOf: [
            [
                "rocket",
                "alien"
            ],
            [
                "airplane",
                "alien"
            ]
        ]
    },
    {
        title: "umbrella",
        combinationOf: [
            [
                "tool",
                "rain"
            ],
            [
                "rain",
                "fabric"
            ]
        ]
    },
    {
        title: "unicorn",
        combinationOf: [
            [
                "rainbow",
                "horse"
            ],
            [
                "rainbow",
                "life"
            ],
            [
                "double rainbow!",
                "horse"
            ],
            [
                "double rainbow!",
                "life"
            ]
        ]
    },
    {
        title: "vacuum cleaner",
        combinationOf: [
            [
                "electricity",
                "broom"
            ]
        ]
    },
    {
        title: "vampire",
        combinationOf: [
            [
                "human",
                "blood"
            ],
            [
                "human",
                "vampire"
            ]
        ]
    },
    {
        title: "vase",
        combinationOf: [
            [
                "plant",
                "pottery"
            ],
            [
                "pottery",
                "flower"
            ]
        ]
    },
    {
        title: "vegetable",
        combinationOf: [
            [
                "field",
                "fruit"
            ]
        ]
    },
    {
        title: "village",
        combinationOf: [
            [
                "house",
                "house"
            ]
        ]
    },
    {
        title: "vinegar",
        combinationOf: [
            [
                "time",
                "wine"
            ],
            [
                "air",
                "wine"
            ],
            [
                "wine",
                "oxygen"
            ]
        ]
    },
    {
        title: "volcano",
        combinationOf: [
            [
                "lava",
                "earth"
            ],
            [
                "lava",
                "mountain"
            ],
            [
                "fire",
                "mountain"
            ]
        ]
    },
    {
        title: "vulture",
        combinationOf: [
            [
                "bird",
                "corpse"
            ]
        ]
    },
    {
        title: "wagon",
        combinationOf: [
            [
                "cart",
                "horse"
            ]
        ]
    },
    {
        title: "wall",
        combinationOf: [
            [
                "brick",
                "brick"
            ]
        ]
    },
    {
        title: "wallet",
        combinationOf: [
            [
                "leather",
                "money"
            ]
        ]
    },
    {
        title: "wand",
        combinationOf: [
            [
                "wizard",
                "wood"
            ]
        ]
    },
    {
        title: "warrior",
        combinationOf: [
            [
                "sword",
                "human"
            ]
        ]
    },
    {
        title: "watch",
        combinationOf: [
            [
                "human",
                "clock"
            ]
        ]
    },
    {
        title: "water gun",
        combinationOf: [
            [
                "water",
                "gun"
            ]
        ]
    },
    {
        title: "water lilly",
        combinationOf: [
            [
                "flower",
                "pond"
            ]
        ]
    },
    {
        title: "water pipe",
        combinationOf: [
            [
                "water",
                "pipe"
            ]
        ]
    },
    {
        title: "waterfall",
        combinationOf: [
            [
                "mountain",
                "river"
            ]
        ]
    },
    {
        title: "waterwheel",
        combinationOf: [
            [
                "water",
                "wheel"
            ],
            [
                "wheel",
                "river"
            ]
        ]
    },
    {
        title: "wave",
        combinationOf: [
            [
                "ocean",
                "wind"
            ],
            [
                "sea",
                "wind"
            ]
        ]
    },
    {
        title: "wax",
        combinationOf: [
            [
                "bee",
                "beehive"
            ]
        ]
    },
    {
        title: "web",
        combinationOf: [
            [
                "spider",
                "thread"
            ]
        ]
    },
    {
        title: "werewolf",
        combinationOf: [
            [
                "wolf",
                "human"
            ],
            [
                "werewolf",
                "human"
            ]
        ]
    },
    {
        title: "wheat",
        combinationOf: [
            [
                "field",
                "farmer"
            ],
            [
                "plant",
                "farmer"
            ]
        ]
    },
    {
        title: "wheel",
        combinationOf: [
            [
                "tool",
                "wood"
            ]
        ]
    },
    {
        title: "wild animal",
        combinationOf: [
            [
                "forest",
                "life"
            ]
        ]
    },
    {
        title: "wild boar",
        combinationOf: [
            [
                "pig",
                "wild animal"
            ],
            [
                "pig",
                "forest"
            ]
        ]
    },
    {
        title: "wind",
        combinationOf: [
            [
                "pressure",
                "air"
            ],
            [
                "air",
                "energy"
            ]
        ]
    },
    {
        title: "windmill",
        combinationOf: [
            [
                "house",
                "wind"
            ],
            [
                "wheel",
                "wind"
            ]
        ]
    },
    {
        title: "wind turbine",
        combinationOf: [
            [
                "windmill",
                "electricity"
            ]
        ]
    },
    {
        title: "window",
        combinationOf: [
            [
                "glass",
                "house"
            ]
        ]
    },
    {
        title: "wine",
        combinationOf: [
            [
                "fruit",
                "alcohol"
            ]
        ]
    },
    {
        title: "wire",
        combinationOf: [
            [
                "electricity",
                "metal"
            ]
        ]
    },
    {
        title: "witch",
        combinationOf: [
            [
                "human",
                "broom"
            ],
            [
                "wizard",
                "broom"
            ]
        ]
    },
    {
        title: "wizard",
        combinationOf: [
            [
                "human",
                "energy"
            ]
        ]
    },
    {
        title: "wolf",
        combinationOf: [
            [
                "dog",
                "forest"
            ],
            [
                "wild animal",
                "moon"
            ],
            [
                "wild animal",
                "dog"
            ]
        ]
    },
    {
        title: "wood",
        combinationOf: [
            [
                "tool",
                "tree"
            ]
        ]
    },
    {
        title: "woodpecker",
        combinationOf: [
            [
                "bird",
                "wood"
            ]
        ]
    },
    {
        title: "wool",
        combinationOf: [
            [
                "sheep",
                "tool"
            ],
            [
                "scissors",
                "sheep"
            ]
        ]
    },
    {
        title: "wrapping paper",
        combinationOf: [
            [
                "gift",
                "paper"
            ]
        ]
    },
    {
        title: "x-ray",
        combinationOf: [
            [
                "light",
                "bone"
            ],
            [
                "light",
                "skeleton"
            ]
        ]
    },
    {
        title: "yak",
        combinationOf: [
            [
                "cow",
                "mountain"
            ]
        ]
    },
    {
        title: "yoda",
        combinationOf: [
            [
                "jedi",
                "swamp"
            ]
        ]
    },
    {
        title: "yogurt",
        combinationOf: [
            [
                "milk",
                "bacteria"
            ]
        ]
    },
    {
        title: "zombie",
        combinationOf: [
            [
                "corpse",
                "life"
            ]
        ]
    }
];

const defaultCombinationsAsList = () => {
    return defaultCombinations.map((original) => {
        return {
            combinationOf: original.combinationOf,
            wordData: {
                title: original.title,
                img:"",
                description: "",
                isARealWord: true
            }
        }
    })
}

export {defaultCombinations, defaultCombinationsAsList};