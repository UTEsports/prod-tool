// Sample data for options
const lolchamps = [
  { name: "+", value: "blank" },
  { name: "AATROX", value: "champ_01" },
  { name: "AHRI", value: "champ_02" },
  { name: "AKALI", value: "champ_03" },
  { name: "AKSHAN", value: "champ_04" },
  { name: "ALISTAR", value: "champ_05" },
  { name: "AMBESSA", value: "champ_169" },
  { name: "AMUMU", value: "champ_06" },
  { name: "ANIVIA", value: "champ_07" },
  { name: "ANNIE", value: "champ_08" },
  { name: "APHELIOS", value: "champ_09" },
  { name: "ASHE", value: "champ_10" },
  { name: "AURELION SOL", value: "champ_11" },
  { name: "AURORA", value: "champ_168" },
  { name: "AZIR", value: "champ_12" },
  { name: "BARD", value: "champ_13" },
  { name: "BEL'VETH", value: "champ_14" },
  { name: "BLITZCRANK", value: "champ_15" },
  { name: "BRAND", value: "champ_16" },
  { name: "BRAUM", value: "champ_17" },
  { name: "BRIAR", value: "champ_166" },
  { name: "CAITLYN", value: "champ_18" },
  { name: "CAMILLE", value: "champ_19" },
  { name: "CASSIOPEIA", value: "champ_20" },
  { name: "CHO'GATH", value: "champ_21" },
  { name: "CORKI", value: "champ_22" },
  { name: "DARIUS", value: "champ_23" },
  { name: "DIANA", value: "champ_24" },
  { name: "DR. MUNDO", value: "champ_25" },
  { name: "DRAVEN", value: "champ_26" },
  { name: "EKKO", value: "champ_27" },
  { name: "ELISE", value: "champ_30" },
  { name: "EVELYNN", value: "champ_29" },
  { name: "EZREAL", value: "champ_28" },
  { name: "FIDDLESTICKS", value: "champ_31" },
  { name: "FIORA", value: "champ_32" },
  { name: "FIZZ", value: "champ_33" },
  { name: "GALIO", value: "champ_34" },
  { name: "GANGPLANK", value: "champ_35" },
  { name: "GAREN", value: "champ_36" },
  { name: "GNAR", value: "champ_37" },
  { name: "GRAGAS", value: "champ_38" },
  { name: "GRAVES", value: "champ_39" },
  { name: "GWEN", value: "champ_40" },
  { name: "HECARIM", value: "champ_41" },
  { name: "HEIMERDINGER", value: "champ_42" },
  { name: "HWEI", value: "champ_164" },
  { name: "ILLAOI", value: "champ_43" },
  { name: "IRELIA", value: "champ_44" },
  { name: "IVERN", value: "champ_45" },
  { name: "JANNA", value: "champ_46" },
  { name: "JARVAN IV", value: "champ_47" },
  { name: "JAX", value: "champ_48" },
  { name: "JAYCE", value: "champ_49" },
  { name: "JHIN", value: "champ_50" },
  { name: "JINX", value: "champ_51" },
  { name: "K'SANTE", value: "champ_52" },
  { name: "KAI'SA", value: "champ_53" },
  { name: "KALISTA", value: "champ_54" },
  { name: "KARMA", value: "champ_55" },
  { name: "KARTHUS", value: "champ_56" },
  { name: "KASSADIN", value: "champ_57" },
  { name: "KATARINA", value: "champ_58" },
  { name: "KAYLE", value: "champ_59" },
  { name: "KAYN", value: "champ_60" },
  { name: "KENNEN", value: "champ_61" },
  { name: "KHA'ZIX", value: "champ_62" },
  { name: "KINDRED", value: "champ_63" },
  { name: "KLED", value: "champ_64" },
  { name: "KOG'MAW", value: "champ_65" },
  { name: "LEBLANC", value: "champ_66" },
  { name: "LEE SIN", value: "champ_67" },
  { name: "LEONA", value: "champ_68" },
  { name: "LILLIA", value: "champ_69" },
  { name: "LISSANDRA", value: "champ_70" },
  { name: "LUCIAN", value: "champ_71" },
  { name: "LULU", value: "champ_72" },
  { name: "LUX", value: "champ_73" },
  { name: "MALPHITE", value: "champ_74" },
  { name: "MALZAHAR", value: "champ_75" },
  { name: "MAOKAI", value: "champ_76" },
  { name: "MASTER YI", value: "champ_77" },
  { name: "MEL", value: "champ_170" },
  { name: "MILIO", value: "champ_78" },
  { name: "MISS FORTUNE", value: "champ_79" },
  { name: "MORDEKAISER", value: "champ_80" },
  { name: "MORGANA", value: "champ_81" },
  { name: "NAAFIRI", value: "champ_167" },
  { name: "NAMI", value: "champ_82" },
  { name: "NASUS", value: "champ_83" },
  { name: "NAUTILUS", value: "champ_84" },
  { name: "NEEKO", value: "champ_85" },
  { name: "NIDALEE", value: "champ_86" },
  { name: "NILAH", value: "champ_87" },
  { name: "NOCTURNE", value: "champ_88" },
  { name: "NUNU & WILLUMP", value: "champ_89" },
  { name: "OLAF", value: "champ_90" },
  { name: "ORIANNA", value: "champ_91" },
  { name: "ORNN", value: "champ_92" },
  { name: "PANTHEON", value: "champ_93" },
  { name: "POPPY", value: "champ_94" },
  { name: "PYKE", value: "champ_95" },
  { name: "QIYANA", value: "champ_96" },
  { name: "QUINN", value: "champ_97" },
  { name: "RAKAN", value: "champ_98" },
  { name: "RAMMUS", value: "champ_99" },
  { name: "REK'SAI", value: "champ_100" },
  { name: "RELL", value: "champ_101" },
  { name: "RENATA GLASC", value: "champ_102" },
  { name: "RENEKTON", value: "champ_103" },
  { name: "RENGAR", value: "champ_104" },
  { name: "RIVEN", value: "champ_105" },
  { name: "RUMBLE", value: "champ_106" },
  { name: "RYZE", value: "champ_107" },
  { name: "SAMIRA", value: "champ_108" },
  { name: "SEJUANI", value: "champ_109" },
  { name: "SENNA", value: "champ_110" },
  { name: "SERAPHINE", value: "champ_111" },
  { name: "SETT", value: "champ_112" },
  { name: "SHACO", value: "champ_113" },
  { name: "SHEN", value: "champ_114" },
  { name: "SHYVANA", value: "champ_115" },
  { name: "SINGED", value: "champ_116" },
  { name: "SION", value: "champ_117" },
  { name: "SIVIR", value: "champ_118" },
  { name: "SKARNER", value: "champ_119" },
  { name: "SMOLDER", value: "champ_165" },
  { name: "SONA", value: "champ_120" },
  { name: "SORAKA", value: "champ_121" },
  { name: "SWAIN", value: "champ_122" },
  { name: "SYLAS", value: "champ_123" },
  { name: "SYNDRA", value: "champ_124" },
  { name: "TAHM KENCH", value: "champ_125" },
  { name: "TALIYAH", value: "champ_126" },
  { name: "TALON", value: "champ_127" },
  { name: "TARIC", value: "champ_128" },
  { name: "TEEMO", value: "champ_129" },
  { name: "THRESH", value: "champ_130" },
  { name: "TRISTANA", value: "champ_131" },
  { name: "TRUNDLE", value: "champ_132" },
  { name: "TRYNDAMERE", value: "champ_133" },
  { name: "TWISTED FATE", value: "champ_134" },
  { name: "TWITCH", value: "champ_135" },
  { name: "UDYR", value: "champ_136" },
  { name: "URGOT", value: "champ_137" },
  { name: "VARUS", value: "champ_138" },
  { name: "VAYNE", value: "champ_139" },
  { name: "VEIGAR", value: "champ_140" },
  { name: "VEL'KOZ", value: "champ_141" },
  { name: "VEX", value: "champ_142" },
  { name: "VI", value: "champ_143" },
  { name: "VIEGO", value: "champ_144" },
  { name: "VIKTOR", value: "champ_145" },
  { name: "VLADIMIR", value: "champ_146" },
  { name: "VOLIBEAR", value: "champ_147" },
  { name: "WARWICK", value: "champ_148" },
  { name: "WUKONG", value: "champ_149" },
  { name: "XAYAH", value: "champ_150" },
  { name: "XERATH", value: "champ_151" },
  { name: "XIN ZHAO", value: "champ_152" },
  { name: "YASUO", value: "champ_153" },
  { name: "YONE", value: "champ_154" },
  { name: "YORICK", value: "champ_155" },
  { name: "ZAC", value: "champ_156" },
  { name: "ZED", value: "champ_157" },
  { name: "ZERI", value: "champ_158" },
  { name: "ZIGGS", value: "champ_159" },
  { name: "ZILEAN", value: "champ_160" },
  { name: "ZOE", value: "champ_161" },
  { name: "ZYRA", value: "champ_162" },
  { name: "YUUMI", value: "champ_163" },
];

const lolroles = ["+", "Top", "Jungle", "Mid", "ADC", "Support"];

const owheroes = [
  "+",
  "Ana",
  "Ashe",
  "Baptiste",
  "Bastion",
  "Brigitte",
  "Cassidy",
  "D.Va",
  "Doomfist",
  "Echo",
  "Genji",
  "Hanzo",
  "Illari",
  "Junker Queen",
  "Junkrat",
  "Juno",
  "Kiriko",
  "Lifeweaver",
  "Lucio",
  "Mauga",
  "Mei",
  "Mercy",
  "Moira",
  "Orisa",
  "Pharah",
  "Ramattra",
  "Reaper",
  "Reinhardt",
  "Roadhog",
  "Sigma",
  "Sojourn",
  "Soldier: 76",
  "Sombra",
  "Symmetra",
  "Torbjorn",
  "Tracer",
  "Venture",
  "Widowmaker",
  "Winston",
  "Wrecking Ball",
  "Zarya",
  "Zenyatta",
];

const owroles = ["+", "Tank", "DPS", "Support", "Flex"];

const control = [
  "Antarctic Peninsula",
  "Busan",
  "Ilios",
  "Lijiang Tower",
  "Nepal",
  "Oasis",
  "Samoa",
];

const escort = [
  "Circuit Royal",
  "Dorado",
  "Havana",
  "Junkertown",
  "Rialto",
  "Route 66",
  "Shambali Monastery",
  "Watchpoint: Gibraltar",
];

const flashpoint = ["New Junk City", "Suravasa", "Atlis"];
const owmaptypes = [
  "+",
  "Control",
  "Hybrid",
  "Push",
  "Flashpoint",
  "Escort",
  "Clash",
];
const hybrid = [
  "Blizzard World",
  "Eichenwalde",
  "Hollywood",
  "King's Row",
  "Midtown",
  "Numbani",
  "Paraíso",
];
const push = ["Colosseo", "Esperanca", "New Queen Street", "Runasapi"];
const clash = ["Hanaoka", "Throne of Anubis"];

const owmaps = ["+"].concat(control, hybrid, escort, push, flashpoint, clash);
const valmaps = [
  "+",
  "Abyss",
  "Lotus",
  "Pearl",
  "Fracture",
  "Breeze",
  "Icebox",
  "Bind",
  "Haven",
  "Split",
  "Ascent",
  "Sunset",
  "Corrode",
];

const mrmaps = [
  "+",
  "Central Park",
  "Hall of Djalia",
  "Symbiotic Surface",
  "Shin-Shibuya",
  "Arakko",
  "Midtown",
  "Spider-Islands",
  "Yggdrasill Path",
  "Krakoa",
  "Hell's Heaven",
  "Birnin T'Challa",
  "Celestial Husk",
  "Royal Palace",
];

const valagents = [
  "+",
  "Brimstone",
  "Phoenix",
  "Sage",
  "Sova",
  "Viper",
  "Cypher",
  "Reyna",
  "Killjoy",
  "Breach",
  "Omen",
  "Jett",
  "Raze",
  "Skye",
  "Yoru",
  "Astra",
  "Kayo",
  "Chamber",
  "Neon",
  "Fade",
  "Harbor",
  "Gekko",
  "Deadlock",
  "Iso",
  "Clove",
  "Vyse",
  "Veto",
];

const marvelRivalsHeroes = [
  "+",
  "Doctor Strange",
  "Hulk",
  "Iron Man",
  "Spider-Man",
  "Luna Snow",
  "Namor",
  "Loki",
  "Black Panther",
  "Magik",
  "Rocket Raccoon",
  "Groot",
  "Peni Parker",
  "Storm",
  "Magneto",
  "Star-Lord",
  "Mantis",
  "The Punisher",
  "Scarlet Witch",
  "Hela",
  "Venom",
  "Adam Warlock",
  "Jeff the Land Shark",
  "Thor",
  "Winter Soldier",
  "Captain America",
  "Psylocke",
  "Moon Knight",
  "Hawkeye",
  "Squirrel Girl",
  "Iron Fist",
  "Black Widow",
  "Cloak & Dagger",
  "Wolverine",
  "Mister Fantastic",
  "Invisible Woman",
  "Human Torch",
  "The Thing",
  "Emma Frost",
  "Ultron",
  "Angela",
  "Blade",
  "Daredevil",
];
const marvelRivalsRoles = ["+", "Vanguard", "Duelist", "Strategist", "Flex"];
valroles = ["+", "Sentinel", "Duelist", "Controller", "Initiator", "Flex"];
// Function to generate select options based on values
document.addEventListener("DOMContentLoaded", function () {
  function updateGameSelection() {
    const gameSelect = document.getElementById("game"); // Assuming a dropdown for game selection
    gameSelect.addEventListener("change", (event) => {
      localStorage.setItem("game", event.target.value); // Save the selected game to localStorage
      generateSelectOptions(); // Re-generate select options based on the game
    });
  }

  function generateSelectOptions() {
    const selectElements = document.querySelectorAll(
      ".w-auto.bg-gray-800.h-3.rounded-md"
    );
    const roleElements = document.querySelectorAll(
      ".w-auto.bg-gray-700.h-3.rounded-md"
    );
    const maptypeElements = document.querySelectorAll(
      ".w-13.bg-gray-800.h-6.rounded-md"
    );
    const mapElements = document.querySelectorAll(
      ".w-16.bg-gray-800.h-6.rounded-md"
    );

    selectElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";

      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "lol") {
        lolchamps.forEach((champ) => {
          const option = document.createElement("option");
          option.value = champ["value"];
          option.textContent = champ["name"];
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "ow2") {
        owheroes.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "val") {
        valagents.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "mr") {
        marvelRivalsHeroes.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });

    maptypeElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";
      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "ow2") {
        owmaptypes.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });

    mapElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";

      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "ow2") {
        owmaps.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "val") {
        valmaps.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "mr") {
        mrmaps.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });

    roleElements.forEach((selectElement) => {
      // Clear existing options
      selectElement.innerHTML = "";

      selectElement.classList.add("fixed-width-select");
      if (localStorage.getItem("game") === "lol") {
        lolroles.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "ow2") {
        owroles.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "val") {
        valroles.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      } else if (localStorage.getItem("game") === "mr") {
        marvelRivalsRoles.forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          selectElement.appendChild(option);
        });
      }
    });
  }

  // Call this function once after the DOM is loaded to set the event listener
  updateGameSelection();

  // Also call generateSelectOptions on page load to populate based on the stored game in localStorage
  document.addEventListener("DOMContentLoaded", generateSelectOptions);

  function swapTeams(match) {
    const team1Name = document.getElementById(`${match}-team1-name`);
    const team2Name = document.getElementById(`${match}-team2-name`);
    swapValues(team1Name, team2Name);

    const team1Logo = document.getElementById(`${match}-team1-logo`);
    const team2Logo = document.getElementById(`${match}-team2-logo`);
    swapValues(team1Logo, team2Logo);

    const team1Info = document.getElementById(`${match}-team1-info`);
    const team2Info = document.getElementById(`${match}-team2-info`);
    swapValues(team1Info, team2Info);

    for (let i = 1; i <= 5; i++) {
      const player1Index = i; // Team 1 players: player1 to player5
      const player2Index = i + 5; // Team 2 players: player6 to player10

      // Swap player names
      const player1Name = document.getElementById(
        `${match}-p${player1Index}-name`
      );
      const player2Name = document.getElementById(
        `${match}-p${player2Index}-name`
      );
      swapValues(player1Name, player2Name);

      // Swap player roles
      const player1Role = document.getElementById(
        `${match}-p${player1Index}-role`
      );
      const player2Role = document.getElementById(
        `${match}-p${player2Index}-role`
      );
      swapValues(player1Role, player2Role);

      // Swap player characters
      const player1Character = document.getElementById(
        `${match}-p${player1Index}-character`
      );
      const player2Character = document.getElementById(
        `${match}-p${player2Index}-character`
      );
      swapValues(player1Character, player2Character);

      const team1Input = document.getElementById(`${match}-map${i}-t1`);
      const team2Input = document.getElementById(`${match}-map${i}-t2`);
      swapValues(team1Input, team2Input);
    }
    swapValues(
      document.getElementById("m1-p11-name"),
      document.getElementById("m1-p12-name")
    );
  }

  // Helper function to swap values between two elements
  function swapValues(element1, element2) {
    const temp = element1.value;
    element1.value = element2.value;
    element2.value = temp;
  }

  // Attach swap functionality to the button
  document
    .getElementById("swap-button-m1")
    .addEventListener("click", function () {
      swapTeams("m1");
    });
  document
    .getElementById("swap-button-m2")
    .addEventListener("click", function () {
      swapTeams("m2");
    });

  document
    .getElementById("swap-button-m3")
    .addEventListener("click", function () {
      swapTeams("m3");
    });

  // Call the function to generate options
  generateSelectOptions();
});
