export interface XSuit {
  name: string;
  level: string;
  genderType: "Male" | "Female" | "Unisex";
  tags?: string;
}

export interface GunLab {
  name: string;
  level: string;
  effectType: string; // e.g. "On Hit", "Kill Msg", "Loot Crate", "Maxed"
  notes?: string;
}

export interface Outfit {
  name: string;
  isUltimate: boolean;
}

export interface Vehicle {
  name: string;
  type: string; // Coupe, Buggy, Dacia, Mirado, Motorcycle, UAZ, etc.
  upgradeLevel: string;
}

export interface ParsedDescription {
  stockTag: string;
  postTag: string;
  dealTitle: string;
  highlight: string;
  price: string;
  whatsappPhone: string;
  loginDetails: string;
  level: string;
  proCollector: string;
  mythicFashion: string;
  ultimateFashion: string;
  titles: string;
  xsuits: XSuit[];
  gunLabs: GunLab[];
  outfits: Outfit[];
  vehicles: Vehicle[];
  killFeeds: string;
  pets: string;
  characters: string;
}

export const BLANK_DESC_FORM: ParsedDescription = {
  stockTag: "#NEWSTOCK",
  postTag: "#NEWPOST",
  dealTitle: "‼️🔻Premium Deal Of The Day 🔻‼️",
  highlight: "",
  price: "",
  whatsappPhone: "",
  loginDetails: "",
  level: "",
  proCollector: "",
  mythicFashion: "",
  ultimateFashion: "",
  titles: "",
  xsuits: [],
  gunLabs: [],
  outfits: [],
  vehicles: [],
  killFeeds: "0",
  pets: "None",
  characters: ""
};

const capitalizeWords = (str: string): string => {
  if (!str) return "";
  return str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};

export const getWhatsappLink = (phone: string): string => {
  if (!phone) return "";
  let clean = phone.replace(/[^0-9+]/g, "");
  if (clean.length === 10 && !clean.startsWith("+")) {
    clean = "+91" + clean;
  } else if (clean.startsWith("91") && clean.length === 12 && !clean.startsWith("+")) {
    clean = "+" + clean;
  } else if (!clean.startsWith("+")) {
    clean = "+" + clean;
  }
  return `https://wa.me/${clean}`;
};

/**
 * Intelligent parser that converts raw description copy into structured BGMI asset profiles.
 */
export function parseDescRawText(text: string): ParsedDescription {
  if (!text.trim()) return { ...BLANK_DESC_FORM };

  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
  const parsed: ParsedDescription = {
    ...BLANK_DESC_FORM,
    xsuits: [],
    gunLabs: [],
    outfits: [],
    vehicles: []
  };

  let currentSection = "";
  const titlesList: string[] = [];

  for (let line of lines) {
    const lower = line.toLowerCase();

    // Section Header Detections
    if (lower === "xsuits" || lower === "x-suits" || lower === "xsuit" || lower === "x-suit") {
      currentSection = "xsuits";
      continue;
    }
    if (lower === "gun labs" || lower === "gunlabs" || lower === "guns" || lower === "weapons") {
      currentSection = "gun_labs";
      continue;
    }
    if (lower === "outfits" || lower === "sets" || lower === "outfits & sets" || lower === "skins") {
      currentSection = "outfits";
      continue;
    }
    if (lower === "vehicles" || lower === "cars" || lower === "supercars" || lower === "garage") {
      currentSection = "vehicles";
      continue;
    }
    if (lower === "extra details" || lower === "extras" || lower === "extra" || lower === "summary") {
      currentSection = "extras";
      continue;
    }

    // Context-aware Line Parsing
    if (currentSection === "xsuits") {
      const lvlMatch = line.match(/lvl\s*[-]?\s*(\d+|maxed)/i);
      const level = lvlMatch && lvlMatch[1] ? lvlMatch[1] : "1";
      const name = line.replace(/lvl\s*[-]?\s*(\d+|maxed)/i, "").trim();
      parsed.xsuits.push({
        name: capitalizeWords(name),
        level,
        genderType: name.toLowerCase().includes("girl") || name.toLowerCase().includes("galadria") ? "Female" : "Male",
        tags: ""
      });
      continue;
    }

    if (currentSection === "gun_labs") {
      const lvlMatch = line.match(/lvl\s*[-]?\s*(\d+|maxed)/i);
      const level = lvlMatch && lvlMatch[1] ? lvlMatch[1] : "1";

      let effectType = "";
      if (lower.includes("on hit") || lower.includes("onhit")) effectType = "On Hit";
      else if (lower.includes("kill msg") || lower.includes("killmsg") || lower.includes("kill feed") || lower.includes("killfeed")) effectType = "Kill Msg";
      else if (lower.includes("loot crate") || lower.includes("lootcrate")) effectType = "Loot Crate";
      else if (lower.includes("maxed")) effectType = "Maxed";

      const name = line
        .replace(/lvl\s*[-]?\s*(\d+|maxed)/i, "")
        .replace(/on\s*hit/gi, "")
        .replace(/kill\s*msg/gi, "")
        .replace(/loot\s*crate/gi, "")
        .replace(/maxed/gi, "")
        .replace(/\[.*?\]/g, "")
        .trim();

      parsed.gunLabs.push({ name: capitalizeWords(name), level, effectType, notes: "" });
      continue;
    }

    if (currentSection === "outfits") {
      const isUltimate = lower.includes("ultimate") || lower.includes("mummy") || lower.includes("nemesis");
      const name = line.replace(/ultimate/gi, "").trim();
      parsed.outfits.push({ name: capitalizeWords(name), isUltimate });
      continue;
    }

    if (currentSection === "vehicles") {
      const lvlMatch = line.match(/lvl\s*[-]?\s*(\d+|maxed)/i);
      const upgradeLevel = lvlMatch && lvlMatch[1] ? lvlMatch[1] : "1";

      let type = "Coupe";
      if (lower.includes("buggy")) type = "Buggy";
      else if (lower.includes("dacia")) type = "Dacia";
      else if (lower.includes("mirado")) type = "Mirado";
      else if (lower.includes("motorcycle") || lower.includes("bike")) type = "Motorcycle";
      else if (lower.includes("uaz")) type = "UAZ";

      const name = line
        .replace(/lvl\s*[-]?\s*(\d+|maxed)/i, "")
        .replace(/\(.*?\)/g, "")
        .replace(/coupe/gi, "")
        .replace(/buggy/gi, "")
        .replace(/dacia/gi, "")
        .replace(/mirado/gi, "")
        .replace(/motorcycle/gi, "")
        .replace(/uaz/gi, "")
        .trim();

      parsed.vehicles.push({ name: capitalizeWords(name), type, upgradeLevel });
      continue;
    }

    // Price
    if (lower.includes("price") || lower.includes("inr") || lower.includes("cost")) {
      const match = line.match(/\d+[\d,\s]*/);
      if (match) {
        parsed.price = match[0].replace(/\s/g, "").trim();
        continue;
      }
    }

    // WhatsApp Contact
    if (lower.includes("whatsapp") || lower.includes("wa.me") || lower.includes("contact") || lower.includes("phone") || lower.includes("dm")) {
      const match = line.match(/\d{10,12}/);
      if (match) {
        parsed.whatsappPhone = match[0].trim();
        continue;
      }
    }

    // Mythics count
    if (lower.includes("mythic") && !lower.includes("ultimate") && !lower.includes("fashion")) {
      const match = line.match(/\d+/);
      if (match) {
        parsed.mythicFashion = match[0];
        continue;
      }
    }

    // Mythic Fashion title
    if (lower.includes("mythic fashion")) {
      const match = line.match(/\d+/);
      if (match) {
        parsed.mythicFashion = match[0];
        continue;
      }
    }

    // Ultimate count
    if (lower.includes("ultimate mythic") || lower.includes("ultimate fashion") || (lower.includes("ultimate") && !lower.includes("set"))) {
      const match = line.match(/\d+/);
      if (match) {
        parsed.ultimateFashion = match[0];
        continue;
      }
    }

    // Level
    if (lower.includes("level") || lower.includes("lvl")) {
      const match = line.match(/(?:level|lvl)\s*[-]?\s*(\d+)/i);
      if (match) {
        parsed.level = match[1] || "";
        continue;
      }
    }

    // Pro Collector
    if (lower.includes("pro collector") || lower.includes("collector")) {
      const match = line.match(/\d+/);
      if (match) {
        parsed.proCollector = match[0];
        continue;
      }
    }

    // Kill Feeds
    if (lower.includes("kill feed") || lower.includes("killfeed") || lower.includes("kill feeds")) {
      const match = line.match(/\d+/);
      if (match) {
        parsed.killFeeds = match[0];
        continue;
      }
    }

    // Logins
    if (lower.includes("login") || lower.includes("logins") || lower.includes("linked")) {
      parsed.loginDetails = line.replace(/login[s]?\s*[:|-]?/gi, "").trim();
      continue;
    }

    // Pets
    if (lower.includes("pets") || lower.includes("pet")) {
      parsed.pets = line.replace(/pet[s]?\s*[:|-]?/gi, "").trim();
      continue;
    }

    // Characters
    if (lower.includes("characters") || lower.includes("character")) {
      parsed.characters = line.replace(/character[s]?\s*[:|-]?/gi, "").trim();
      continue;
    }

    // Fallbacks
    if (lower.includes("xsuit") || lower.includes("x-suit")) {
      const lvlMatch = line.match(/lvl\s*[-]?\s*(\d+|maxed)/i);
      const level = lvlMatch && lvlMatch[1] ? lvlMatch[1] : "1";
      const name = line.replace(/lvl\s*[-]?\s*(\d+|maxed)/i, "").trim();
      parsed.xsuits.push({ name: capitalizeWords(name), level, genderType: "Unisex", tags: "" });
      continue;
    }

    const gunModels = ["m416", "glacier", "ump", "akm", "scar", "m762", "s12k", "p90", "dbs", "vector", "m24", "slr", "thompson", "uzi", "amr", "m249", "groza", "pp19", "qqb", "dp28", "mg3", "dagger", "sks", "mk47", "honey badger", "vss"];
    if (gunModels.some(kw => lower.includes(kw)) && (lower.includes("lvl") || lower.includes("level") || lower.includes("max"))) {
      const lvlMatch = line.match(/lvl\s*[-]?\s*(\d+|maxed)/i);
      const level = lvlMatch && lvlMatch[1] ? lvlMatch[1] : "1";
      const name = line.replace(/lvl\s*[-]?\s*(\d+|maxed)/i, "").trim();
      parsed.gunLabs.push({ name: capitalizeWords(name), level, effectType: "", notes: "" });
      continue;
    }

    if (lower.includes("conqueror") || lower.includes("veteran") || lower.includes("glorious") || lower.includes("tyrant")) {
      titlesList.push(line);
      continue;
    }

    if (line.length > 5 && !lower.includes("newstock") && !lower.includes("newpost") && !lower.includes("deal of the day")) {
      titlesList.push(line);
    }
  }

  if (titlesList.length > 0) {
    parsed.titles = titlesList.join(", ");
  }

  return parsed;
}

/**
 * Calculates metrics and yields custom highlighting rules based on the parsed description.
 */
export function calculateStats(form: ParsedDescription) {
  const mythics = form.mythicFashion || "0";
  const totalWeapons = form.gunLabs.length;
  const killFeeds = form.killFeeds || "0";

  const upgradedVehicles = form.vehicles.filter(v => {
    const lvl = String(v.upgradeLevel).toLowerCase();
    return lvl.includes("max") || lvl.includes("lvl 3") || parseInt(lvl, 10) > 1;
  }).length;

  const supercarsCount = form.vehicles.filter(v => {
    const name = v.name.toLowerCase();
    return name.includes("bugatti") || name.includes("ssc") || name.includes("lamborghini") || name.includes("ferrari") || name.includes("pagani") || name.includes("aston") || name.includes("koenigsegg");
  }).length;

  let weaponHighlight = "";
  const onHitGuns = form.gunLabs.filter(g => g.effectType?.toLowerCase().includes("on hit") || parseInt(g.level, 10) >= 5);
  if (onHitGuns.length >= 2 && onHitGuns[0] && onHitGuns[1]) {
    const w1 = onHitGuns[0].name.replace("M416 ", "").replace("m416 ", "");
    const w2 = onHitGuns[1].name.replace("M416 ", "").replace("m416 ", "");
    weaponHighlight = `+M416 ${w1} + ${w2} (On Hit) Combo`;
  } else if (onHitGuns.length === 1 && onHitGuns[0]) {
    weaponHighlight = `+${onHitGuns[0].name} LvL ${onHitGuns[0].level}`;
  } else if (form.gunLabs.length > 0 && form.gunLabs[0]) {
    weaponHighlight = `+${form.gunLabs[0].name} LvL ${form.gunLabs[0].level}`;
  }

  let xsuitHighlight = "";
  if (form.xsuits.length > 0 && form.xsuits[0]) {
    xsuitHighlight = ` + ${form.xsuits[0].name} LvL ${form.xsuits[0].level}`;
  }

  const highlightSummary = `Bgmi ${mythics} Mythics ${weaponHighlight}${xsuitHighlight} + ${totalWeapons}xTotal Gun Labs[${killFeeds}x Kill Feeds] + ${supercarsCount}xSupercars + ${upgradedVehicles}xUpgraded Vehicles🌟`;

  return {
    xsuitsCount: form.xsuits.length,
    gunLabsCount: totalWeapons,
    supercarsCount,
    upgradedVehicles,
    highlightSummary
  };
}

/**
 * Builds formatted text payloads for broadcast distribution.
 */
export function buildFormattedOutput(form: ParsedDescription, styleMode: "plain" | "whatsapp" | "telegram" = "plain"): string {
  const stats = calculateStats(form);
  const parts: string[] = [];

  if (form.stockTag) parts.push(form.stockTag);
  if (form.postTag) parts.push(form.postTag);

  parts.push("");

  if (form.dealTitle) {
    parts.push(form.dealTitle);
    parts.push("");
  }

  parts.push(`🇮🇳 ${form.highlight || stats.highlightSummary}`);
  parts.push("");

  parts.push(` 🎖Account Level - ${form.level || "—"}`);
  parts.push(`🎀Pro Collector - (${form.proCollector || "0"})`);
  parts.push(`👑Mythic Fashion - (${form.mythicFashion || "0"}/100)`);
  parts.push(`👑Ultimate Mythic Fashion - (${form.ultimateFashion || "0"})`);

  if (form.titles) {
    const list = form.titles.split(",").map(t => t.trim()).filter(Boolean);
    list.forEach(title => {
      parts.push(`🌟${title}`);
    });
  }

  if (form.xsuits && form.xsuits.length > 0) {
    form.xsuits.forEach((x, idx) => {
      const prefix = idx === 0 ? " 🤴👸" : "👸";
      parts.push(`${prefix}${x.name} LvL ${x.level}`);
    });
  }

  if (form.gunLabs && form.gunLabs.length > 0) {
    parts.push("");
    parts.push(`🔫Gun Labs [${form.gunLabs.length}] `);
    
    const highGuns = form.gunLabs.filter(g => parseInt(g.level, 10) >= 5 || g.level.toLowerCase().includes("maxed"));
    const lvl4Guns = form.gunLabs.filter(g => g.level === "4");
    const lvl3Guns = form.gunLabs.filter(g => g.level === "3");
    const lvl2Guns = form.gunLabs.filter(g => g.level === "2");
    const lvl1Guns = form.gunLabs.filter(g => g.level === "1" || g.level === "");

    highGuns.forEach(g => {
      const eff = g.effectType ? `[${g.effectType}]` : "";
      parts.push(`🎃${g.name} LvL - ${g.level}${eff}`);
    });

    for (let i = 0; i < lvl4Guns.length; i += 2) {
      const chunk = lvl4Guns.slice(i, i + 2);
      const line = chunk.map(g => {
        const eff = g.effectType ? `[${g.effectType}]` : "";
        return `🎃${g.name} LvL - ${g.level}${eff}`;
      }).join(" ");
      parts.push(line);
    }

    for (let i = 0; i < lvl3Guns.length; i += 2) {
      const chunk = lvl3Guns.slice(i, i + 2);
      const line = chunk.map(g => {
        const eff = g.effectType ? `[${g.effectType}]` : "";
        return `🎃${g.name} LvL - ${g.level}${eff}`;
      }).join(" ");
      parts.push(line);
    }

    for (let i = 0; i < lvl2Guns.length; i += 3) {
      const chunk = lvl2Guns.slice(i, i + 3);
      const line = chunk.map(g => {
        return `🎃${g.name} LvL - ${g.level}`;
      }).join(" ");
      parts.push(line);
    }

    for (let i = 0; i < lvl1Guns.length; i += 5) {
      const chunk = lvl1Guns.slice(i, i + 5);
      const line = chunk.map(g => {
        return `🎃${g.name} LvL - ${g.level}`;
      }).join(" ");
      parts.push(line);
    }
  }

  if (form.outfits && form.outfits.length > 0) {
    parts.push("");
    form.outfits.forEach(o => {
      const isUlt = o.isUltimate || o.name.toLowerCase().includes("ultimate") || o.name.toLowerCase().includes("mummy") || o.name.toLowerCase().includes("set ultimate");
      if (isUlt) {
        const cleanName = o.name.replace(/ultimate/gi, "").replace(/\(Ultimate\)/gi, "").replace(/set/gi, "").trim();
        parts.push(`❤️🔥${cleanName} Set (Ultimate)`);
      } else {
        parts.push(`❤️${o.name}`);
      }
    });

    parts.push(`❤️${form.killFeeds || "0"}xTotal KillFeeds`);
    parts.push(`❤️${form.gunLabs.length}xTotal GunLabs`);
    parts.push(`❤️Pets - ${form.pets || "Null"}`);
    parts.push(`❤️Characters - ${form.characters || "None"}`);
  }

  if (form.vehicles && form.vehicles.length > 0) {
    parts.push("");
    parts.push(`🚗Vehicles🏍️`);
    form.vehicles.forEach((v, idx) => {
      const typeStr = v.type ? `(${v.type})` : "";
      const levelStr = v.upgradeLevel && v.upgradeLevel !== "1" ? ` (LvL ${v.upgradeLevel})` : "";
      const prefix = idx === 0 ? " 🏎" : "🏎";
      parts.push(`${prefix}${v.name}${typeStr}${levelStr}`);
    });
  }

  parts.push("");
  parts.push(`🔐Logins : ${form.loginDetails || "—"} ✅`);
  parts.push("");
  if (form.price) {
    parts.push(`🔖Price - ₹${Number(form.price).toLocaleString("en-IN")} INR ✅️`);
  }
  parts.push("");
  const waLink = getWhatsappLink(form.whatsappPhone);
  parts.push(`📥DM WHATSAPP ${waLink}`);

  const rawString = parts.join("\n");

  if (styleMode === "whatsapp" || styleMode === "telegram") {
    // Encapsulate non-empty lines with bold markup * for whatsapp, or custom formatting
    return rawString
      .split("\n")
      .map(line => {
        if (line.trim() === "") return "";
        return `*${line}*`;
      })
      .join("\n");
  }

  return rawString;
}
