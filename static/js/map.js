$(document).ready(function () {
  const nodes = {
    x0y0z0: "MRX",
    x0y0z1: "BAG",
    x0y0z2: "BAF",
    x0y0z3: "BAE",
    x0y0z4: "BAD",
    x0y0z5: "BAC",
    x0y0z6: "BAB",
    x0y0z7: "BAA",
    x0y1z0: "DAG",
    x0y1z1: "CAG",
    x0y1z2: "BBF",
    x0y1z3: "BBE",
    x0y1z4: "BBD",
    x0y1z5: "BBC",
    x0y1z6: "BBB",
    x0y1z7: "BBA",
    x0y2z0: "DAF",
    x0y2z1: "CBF",
    x0y2z2: "CAF",
    x0y2z3: "CCE",
    x0y2z4: "BDD",
    x0y2z5: "BDC",
    x0y2z6: "BDB",
    x0y2z7: "BDA",
    x0y3z0: "DAE",
    x0y3z1: "DCE",
    x0y3z2: "CBE",
    x0y3z3: "CAE",
    x0y3z4: "CCD",
    x0y3z5: "CEC",
    x0y3z6: "BFB",
    x0y3z7: "BFA",
    x0y4z0: "DAD",
    x0y4z1: "DCD",
    x0y4z2: "CDD",
    x0y4z3: "CBD",
    x0y4z4: "CAD",
    x0y4z5: "CCC",
    x0y4z6: "CEB",
    x0y4z7: "CGA",
    x0y5z0: "DAC",
    x0y5z1: "DCC",
    x0y5z2: "DEC",
    x0y5z3: "CDC",
    x0y5z4: "CBC",
    x0y5z5: "CAC",
    x0y5z6: "CCB",
    x0y5z7: "CEA",
    x0y6z0: "DAB",
    x0y6z1: "DCB",
    x0y6z2: "DEB",
    x0y6z3: "CFB",
    x0y6z4: "CDB",
    x0y6z5: "CBB",
    x0y6z6: "CAB",
    x0y6z7: "CCA",
    x0y7z0: "DAA",
    x0y7z1: "DCA",
    x0y7z2: "DEA",
    x0y7z3: "DGA",
    x0y7z4: "CFA",
    x0y7z5: "CDA",
    x0y7z6: "CBA",
    x0y7z7: "CAA",
    x1y0z0: "FAH",
    x1y0z1: "AAG",
    x1y0z2: "ABF",
    x1y0z3: "BCE",
    x1y0z4: "BCD",
    x1y0z5: "BCC",
    x1y0z6: "BCB",
    x1y0z7: "BCA",
    x1y1z0: "EAG",
    x1y2z0: "DBF",
    x1y3z0: "DBE",
    x1y4z0: "DBD",
    x1y5z0: "DBC",
    x1y6z0: "DBB",
    x1y7z0: "DBA",
    x2y0z0: "FAF",
    x2y0z1: "FBF",
    x2y0z2: "AAF",
    x2y0z3: "ABE",
    x2y0z4: "ADD",
    x2y0z5: "BEC",
    x2y0z6: "BEB",
    x2y0z7: "BEA",
    x2y1z0: "EBF",
    x2y2z0: "EAF",
    x2y3z0: "ECE",
    x2y4z0: "DDD",
    x2y5z0: "DDC",
    x2y6z0: "DDB",
    x2y7z0: "DDA",
    x3y0z0: "FAE",
    x3y0z1: "FBE",
    x3y0z2: "ACE",
    x3y0z3: "AAE",
    x3y0z4: "ABD",
    x3y0z5: "ADC",
    x3y0z6: "AFB",
    x3y0z7: "BGA",
    x3y1z0: "FCE",
    x3y2z0: "EBE",
    x3y3z0: "EAE",
    x3y4z0: "ECD",
    x3y5z0: "EEC",
    x3y6z0: "DFB",
    x3y7z0: "DFA",
    x4y0z0: "FAD",
    x4y0z1: "FBD",
    x4y0z2: "FDD",
    x4y0z3: "ACD",
    x4y0z4: "AAD",
    x4y0z5: "ABC",
    x4y0z6: "ADB",
    x4y0z7: "AFA",
    x4y1z0: "FCD",
    x4y2z0: "EDD",
    x4y3z0: "EBD",
    x4y4z0: "EAD",
    x4y5z0: "ECC",
    x4y6z0: "EEB",
    x4y7z0: "EGA",
    x5y0z0: "FAC",
    x5y0z1: "FBC",
    x5y0z2: "FDC",
    x5y0z3: "AEC",
    x5y0z4: "ACC",
    x5y0z5: "AAC",
    x5y0z6: "ABB",
    x5y0z7: "ADA",
    x5y1z0: "FCC",
    x5y2z0: "FEC",
    x5y3z0: "EDC",
    x5y4z0: "EBC",
    x5y5z0: "EAC",
    x5y6z0: "ECB",
    x5y7z0: "EEA",
    x6y0z0: "FAB",
    x6y0z1: "FBB",
    x6y0z2: "FDB",
    x6y0z3: "FFB",
    x6y0z4: "AEB",
    x6y0z5: "ACB",
    x6y0z6: "AAB",
    x6y0z7: "ABA",
    x6y1z0: "FCB",
    x6y2z0: "FEB",
    x6y3z0: "EFB",
    x6y4z0: "EDB",
    x6y5z0: "EBB",
    x6y6z0: "EAB",
    x6y7z0: "ECA",
    x7y0z0: "FAA",
    x7y0z1: "FBA",
    x7y0z2: "FDA",
    x7y0z3: "FFA",
    x7y0z4: "AGA",
    x7y0z5: "AEA",
    x7y0z6: "ACA",
    x7y0z7: "AAA",
    x7y1z0: "FCA",
    x7y2z0: "FEA",
    x7y3z0: "FGA",
    x7y4z0: "EFA",
    x7y5z0: "EDA",
    x7y6z0: "EBA",
    x7y7z0: "EAA",
  };
  const init_nodes = {
    AAA: {colour: "purple"},
    BAA: {colour: "pink"},
    CAA: {colour: "green"},
    DAA: {colour: "blue"},
    EAA: {colour: "yellow"},
    FAA: {colour: "red"}
  };
  const immutable_nodes = [
    "AAA",
    "BAA",
    "CAA",
    "DAA",
    "EAA",
    "FAA"
  ];
  const config_attributes = [
    "colour",
    "tile_type",
    "relic",
    "game_type",
    "boss",
    "tiers",
    "game_mode",
    "map",
    "difficulty",
    "cash",
    "start_round",
    "end_round",
    "max_towers",
    "heroes",
    "towers"
  ]
  const colours = [
    "purple",
    "pink",
    "green",
    "blue",
    "yellow",
    "red"
  ];
  const images = [
    "abilitized",
    "air_and_sea",
    "alchemist_touch",
    "banner",
    "bigger_bloon_sabotage",
    "box_of_chocolates",
    "box_of_monkey",
    "broken_heart",
    "camo_flogged",
    "camo_trap",
    "deep_heat",
    "durable_shots",
    "el_dorado",
    "empty",
    "extra_empowered",
    "flint_tips",
    "fortifried",
    "glue_trap",
    "going_the_distance",
    "hard_baked",
    "heartless",
    "hero_boost",
    "magic_monkeys",
    "mana_bulwark",
    "marching_boots",
    "military_monkeys",
    "moab_clash",
    "moab_mine",
    "monkey_boost",
    "regeneration",
    "relic",
    "restoration",
    "road_spikes",
    "rounding_up",
    "royal_treatment",
    "sharpsplosion",
    "starting_stash",
    "super_monkey_storm",
    "support_simians",
    "techbot",
    "thrive"
  ];
  const game_types = [
    "",
    "",
    "Race",
    "",
    "Boss",
    "",
    "",
    "",
    "Least Cash",
    "Least Tiers"
  ];
  const bosses = [
    "Bloonarius",
    "Lych",
    "Vortex"
  ];
  const abbreviations = {
    DartMonkey: "Dart",
    BoomerangMonkey: "Boomer",
    BombShooter: "Bomb",
    TackShooter: "Tack",
    IceMonkey: "Ice",
    GlueGunner: "Glue",
    SniperMonkey: "Sniper",
    MonkeySub: "Sub",
    MonkeyBuccaneer: "Bucc",
    MonkeyAce: "Ace",
    HeliPilot: "Heli",
    MortarMonkey: "Mortar",
    DartlingGunner: "Dartling",
    WizardMonkey: "Wiz",
    SuperMonkey: "Super",
    NinjaMonkey: "Ninja",
    Alchemist: "Alch",
    Druid: "Druid",
    BananaFarm: "Farm",
    SpikeFactory: "Spac",
    MonkeyVillage: "Village",
    EngineerMonkey: "Engi",
    BeastHandler: "Handler",
    Quincy: "Quincy",
    Gwendolin: "Gwen",
    StrikerJones: "Jones",
    ObynGreenfoot: "Obyn",
    Geraldo: "Geraldo",
    CaptainChurchill: "Churchill",
    Benjamin: "Ben",
    Ezili: "Ezili",
    PatFusty: "Pat",
    Adora: "Adora",
    AdmiralBrickell: "Brickell",
    Etienne: "Eti",
    Sauda: "Sauda",
    Psi: "Psi",
  };
  const ct_start_season = 26;
  const ct_26_start_date_milli = 1690927200000;
  const one_day_milli = 86400000;
  let config = localStorage["map"] ? JSON.parse(localStorage["map"]) : null;
  let rots = 0;
  

  function pascal_to_snake_case (text) {
    const new_text = text.replace(
      /(?<upperchar>[A-Z])/gm,
      (match, upperchar) => "_" + upperchar.toLowerCase()
    );
    return new_text.substr(1);
  }

  function get_rotated_node (node, rots=1) {
    let x = parseInt(node[1]);
    let y = parseInt(node[3]);
    let z = parseInt(node[5]);
    let m = Math.max(x, y, z);
    for (let i = 0; i < rots; i++) {
      [x, y, z] = [m - y, m - z, m - x];
      m = Math.max(x, y, z);
    }
    return `x${x}y${y}z${z}`;
  }

  function get_node_id (node_name) {
    return get_rotated_node(Object.keys(nodes).find(key => nodes[key] === node_name), rots);
  }

  function get_node_name (node_id) {
    return nodes[get_rotated_node(node_id, 6 - rots)];
  }

  function get_node_neighbours (node) {
    let coords = [parseInt(node[1]), parseInt(node[3]), parseInt(node[5])];
    let res = [];
    
    for (let vec of [[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0], [1, 0, 1], [0, 1, 1]]) {
      let tmp = coords.map((val, ind) => val + vec[ind]);
      tmp = tmp.map((val) => val - Math.min(...tmp));
      tmp = `x${tmp[0]}y${tmp[1]}z${tmp[2]}`;
      if (tmp in nodes) {
        res.push(tmp);
      }
    }
    return res;
  }

  function get_weight (node, gen_weights=false) {
    if (gen_weights) {
      return 0;
    } else {
      if ($(`.${node}`).hasClass("immutable")) {
        return Infinity;
      }
      if ($(`.${node} img`).attr("class") && $(`.${node} img`).attr("class") !== "banner") {
        return 1e9;
      }
      return 1;
    }
  }

  function update_colour (node, colour=null) {
    let node_name = get_node_name(node);
    console.log(node_name);
    let ticket_count = $(".x7y0z7 .ticket-count");
    config[node_name]["colour"] = colour;
    localStorage["map"] = JSON.stringify(config);

    if (colour) {
      $(`.${node} .hexagon-inner`).attr("class", `hexagon-inner ${colour}`);
    } else {
      $(`.${node} .hexagon-inner`).attr("class", "hexagon-inner");
    }
    
    ticket_count.text($(`.${colours[rots]}`).length - 1);
    if (ticket_count.text() === "0") {
      ticket_count.attr("class", "ticket-count hidden");
    } else {
      ticket_count.attr("class", "ticket-count");
    }
  }

  function update_image (node, image=null) {
    let node_name = get_node_name(node);
    console.log(node_name);
    if (image === null) {
      config[node_name]["tile_type"] = "regular";
    } else if (image === "banner") {
      config[node_name]["tile_type"] = "banner";
    } else {
      config[node_name]["tile_type"] = "relic";
      config[node_name]["relic"] = image;
    }
    localStorage["map"] = JSON.stringify(config);

    if (image) {
      $(`.${node} img`).attr("src", `/static/images/tiles/${image}.webp`).addClass(image);
    } else {
      $(`.${node} img`).attr("src", "/static/images/tiles/empty.png").removeAttr("class");
    }
  }
  
  function rotate_grid (rotations=1) {
    rots = (rots + rotations) % 6;
    let ticket_count = $(".x7y0z7 .ticket-count");
    ticket_count.attr("class", "ticket-count hidden");

    $(".tile").attr("class", function (ind, val) {
      let split_arr = val.split(" ");
      split_arr[2] = get_rotated_node(split_arr[2], rotations);
      return split_arr.join(" ");
    });

    ticket_count = $(".x7y0z7 .ticket-count");
    ticket_count.text($(`.${colours[rots]}`).length - 1);
    if (ticket_count.text() === "0") {
      ticket_count.attr("class", "ticket-count hidden");
    } else {
      ticket_count.attr("class", "ticket-count");
    }
  }

  function create_modal (node, title) {
    $("#colour-modal").after(`<div id="${node}-modal" class="modal" tabindex="-1" role="dialog"></div>`);
    $(`#${node}-modal`).append(`<div class="modal-dialog" role="document"><div class="modal-content"></div></div></div>`);
    let header = $(`<div class="modal-header"><h5 class="modal-title">${title}</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`);
    let body = $(`<div class="modal-body"></div>`);
    $(`#${node}-modal .modal-content`).append(header).append(body);
  }

  function init_grid () {
    for (let node in nodes) {
      let node_name = get_node_name(node);
      let colour = node_name in init_nodes ? init_nodes[node_name]["colour"] : null;
      $(".col-right").after(`<div class="hexagon-border tile ${node}"></div>`);
      $(`.${node}`).append(`<div class="hexagon-inner"></div>`);
      let inner = $(`.${node} div`);
      
      if (immutable_nodes.includes(node_name)) {
        $(`.${node}`).addClass("immutable");
      }
      if (colour) {
        inner.addClass(colour);
      }
      inner.append(`<img src="/static/images/tiles/empty.png">`);
      if (immutable_nodes.includes(node_name)) {
        inner.append(`<div class="ticket-count hidden">0</div>`);
      } else {
        inner.append(`<div class="tile-code hidden">${node_name}</div>`);
      }

      create_modal(node, node_name);
    }
  }

  function check_config (config_obj) {
    for (let node of Object.values(nodes)) {
      if (!(node in config_obj)) {
        return false;
      }
    }
    for (let node in init_nodes) {
      if (config_obj[node]["colour"] !== init_nodes[node]["colour"]) {
        return false;
      }
    }
    return true;
  }

  function init_config () {
    config = {};
    for (let node of Object.values(nodes)) {
      config[node] = {};
      for (let attribute of config_attributes) {
        config[node][attribute] = null;
      }
      config[node]["tile_type"] = "regular";

      if (node in init_nodes) {
        for (let attribute in init_nodes[node]) {
          config[node][attribute] = init_nodes[node][attribute];
        }
      }
    }
    localStorage["map"] = JSON.stringify(config);
  }

  function load_config_json (config_obj) {
    let tiles = $(".tile").not(".immutable").children();
    tiles.attr("class", "hexagon-inner");
    tiles.children("img").removeAttr("class").attr("src", "/static/images/tiles/empty.png");

    if (!(check_config(config_obj))) {
      init_config();
    }

    for (let node of Object.values(nodes)) {
      let colour = config_obj[node]["colour"];
      let tile_type = config_obj[node]["tile_type"];
      let relic = config_obj[node]["relic"];
      if (colour) {
        $(`.${get_node_id(node)} .hexagon-inner`).attr("class", `hexagon-inner ${colour}`);
      }
      if (tile_type !== "regular") {
        if (tile_type === "banner") {
          $(`.${get_node_id(node)} img`).attr("src", "/static/images/tiles/banner.webp").addClass("banner");
        } else {
          $(`.${get_node_id(node)} img`).attr("src", `/static/images/tiles/${relic}.webp`).addClass(relic);
        }
      }
    }

    let ticket_count = $(".x7y0z7 .ticket-count");
    ticket_count.text($(`.${colours[rots]}`).length - 1);
    if (ticket_count.text() === "0") {
      ticket_count.attr("class", "ticket-count hidden");
    } else {
      ticket_count.attr("class", "ticket-count");
    }
  }
  

  init_grid();
  if (config) {
    load_config_json(config);
  } else {
    init_config();
  }


  $("#toggle-names").click(function () {
    if ($("#toggle-names").text() === "Show Tile Names") {
      $("#toggle-names").text("Hide Tile Names");
      $(".tile-code").removeClass("hidden");
    } else {
      $("#toggle-names").text("Show Tile Names");
      $(".tile-code").addClass("hidden");
    }
  });

  $("#rotate").click(() => rotate_grid());

  $("#toggle-markers").click(function () {
    if ($("#toggle-markers").text() === "Banners")
      $("#toggle-markers").text("Relics");
    else if ($("#toggle-markers").text() === "Relics")
      $("#toggle-markers").text("Colours");
    else $("#toggle-markers").text("Banners");
  });

  $("#clear-banners").click(function () {
    $(".banner").each(function () {
      let node = $(this).parent().parent().attr("class").split(" ")[2];
      update_image(node);
    });
    $("#banner-modal").modal("hide");
  });

  $("#clear-relics").click(function () {
    $("img[class]").not(".banner").each(function () {
      let node = $(this).parent().parent().attr("class").split(" ")[2];
      update_image(node);
    });
    $("#relic-modal").modal("hide");
  });

  $("#clear-colours").click(function () {
    $(".tile").not(".immutable").children().each(function () {
      let node = $(this).parent().attr("class").split(" ")[2];
      update_colour(node);
    });
    $("#colour-modal").modal("hide");
  });

  $("#import").click(function () {
    $("#upload").trigger("click");
  });

  $("#upload").change(function (e) {
    let file = e.target.files[0];
    $(this).val("");
    rotate_grid(6 - rots);
    if (file.type == "application/zip") {
      JSZip.loadAsync(file).then(async (content) => {
        let tile_promises = [];
        for (let tile_path in content.files) {
          if (!content.files[tile_path].dir) {
            tile_promises.push(content.files[tile_path].async("text"));
          }
        }
        let tile_data = await Promise.all(tile_promises);

        init_config();

        for (let tile_raw of tile_data) {
          if (tile_raw === null) continue;
          let data = JSON.parse(tile_raw);
          let inner = "";
          let class_name = get_node_id(data["Code"]);
          let game_data = data["GameData"];
          let tile_type = data["TileType"] === "TeamFirstCapture" ? "Regular" : data["TileType"];
          let relic = data["RelicType"];
          let dc_model = game_data["dcModel"];
          let start_rules = dc_model["startRules"];
          let game_type = game_types[game_data["subGameType"]];
          let game_mode = dc_model["mode"];
          let map = dc_model["map"];
          let difficulty = dc_model["difficulty"];
          let cash = start_rules["cash"];
          let start_round = start_rules["round"];
          let end_round = start_rules["endRound"];
          let max_towers = dc_model["maxTowers"];
          let heroes = [];
          let excluded_heroes = ["Quincy", "Gwen", "Jones", "Obyn", "Geraldo", "Churchill", "Ben", "Ezili", "Pat", "Adora", "Brickell", "Eti", "Sauda", "Psi"];
          let towers = [];

          if (game_type === "Boss") {
            let boss = bosses[game_data["bossData"]["bossBloon"]];
            let tiers = game_data["bossData"]["TierCount"];
            inner += `${tiers} Tier ${boss}<br>`;
          } else {
            inner += `${game_type}<br>`;
          }
          inner += `${map} - ${difficulty} ${game_mode}<br>`;
          inner += `$${cash} - ${start_round}/${end_round !== -1 ? end_round : `${tiers * 20 + 20}+`}<br>`;
          if (max_towers !== -1) inner += `Max Towers: ${max_towers}<br>`;

          for (let item of dc_model["towers"]["_items"]) {
            let tower = item["tower"];
            let max = item["max"];
            if (item && max) {
              if (item["isHero"]) {
                heroes.push(abbreviations[tower]);
              } else {
                if (max === -1) {
                  towers.push(abbreviations[tower]);
                } else {
                  towers.push(`${max}x ${abbreviations[tower]}`);
                }
              }
            }
          }

          inner += "<br>";

          if (heroes.length) {
            inner += "Heroes:<br>";
            for (let i = 0; i < heroes.length; i++) {
              inner += heroes[i];
              if (i < heroes.length - 1) inner += " - ";
            }
            inner += "<br><br>";
          }
          if (towers.length) {
            inner += "Towers:<br>";
            for (let i = 0; i < towers.length; i++) {
              inner += towers[i];
              if (i < towers.length - 1) inner += " - ";
            }
          }

          $(`#${class_name}-modal .modal-body`).html(inner);

          switch (tile_type) {
            case "Banner":
              config[class_name]["image"] = "banner";
              break;
            case "Relic":
              config[class_name]["image"] = pascal_to_snake_case(relic);
              break;
          }
        }

        load_config_zip(config);
      });
    } else {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        try {
          config = JSON.parse(reader.result);
          load_config_json(config);
        } catch {}
      };
    }
  });

  $("#export").click(function () {
    let date = new Date();
    let week = Math.floor((date.getTime() - ct_26_start_date_milli) / one_day_milli / 7);
    let ct_season = ct_start_season + Math.ceil(week / 2);
    let ct_day = week % 2 ? 0 : Math.floor(
      ((date.getTime() - ct_24_start_date_milli) % (one_day_milli * 7)) / one_day_milli + 1
    );
    let download = $("<a></a>");

    download.attr(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(config))
    );
    download.attr("download", `CT${ct_season}-${ct_day}.json`);
    download.css("display", "none");
    $("body").append(download);
    $("a")[0].click();
    $("a").remove();
  });

  $(".tile").not(".immutable").click(function (e) {
    let node = $(this).attr("class").split(" ")[2];
    let inner = $(this).children().first();
    let home_colour = colours[rots];
    let colour = inner.attr("class").split(" ")[1]
      ? inner.attr("class").split(" ")[1]
      : null;
    let image = inner.children("img").attr("class");
    let relic = $("#select :selected").text();
    if (e.shiftKey && $(`#${node}-modal .modal-body`).html()) {
      $(`#${node}-modal`).modal();
    } else {
      if ($("#toggle-markers").text() === "Banners") {
        if (image === "banner") {
          update_image(node);
        } else if (image === undefined) {
          update_image(node, "banner");
        }
      } else if ($("#toggle-markers").text() === "Relics") {
        if (image === undefined) {
          update_image(node, relic);
        } else if (image !== "banner") {
          update_image(node);
        }
      } else {
        if (colour === home_colour) {
          update_colour(node);
        } else {
          update_colour(node, home_colour);
        }
      }
    }
  });

  $(document).keypress(function (e) {
    switch (e.key) {
      case "e":
        $("#toggle-names").trigger("click");
        break;
      case "r":
        rotate_grid();
        break;
      case "R":
        rotate_grid(5);
        break;
      case "t":
        $("#toggle-markers").trigger("click");
        break;
    }
  })
});
