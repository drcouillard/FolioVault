import fs from "fs";
import path from "path";
import https from "https";

// ── Config ────────────────────────────────────────────────────────────────────

const OUTPUT_DIR =
  "C:\\Users\\amazi\\OneDrive\\FolioVault\\02 - Brand\\assets\\flags";

const DELAY_MS = 1000; // between downloads — avoids HTTP 429

// ── Country → Wikimedia flag filename map ─────────────────────────────────────
// Format: "output_slug": "Flag_of_X.svg" (exact Wikimedia Commons filename)
// URL resolved via: ?action=query&titles=File:Flag_of_X.svg&prop=imageinfo

const FLAG_MAP = {
  afghanistan:                      "Flag_of_Afghanistan.svg",
  albania:                          "Flag_of_Albania.svg",
  algeria:                          "Flag_of_Algeria.svg",
  andorra:                          "Flag_of_Andorra.svg",
  angola:                           "Flag_of_Angola.svg",
  antigua_and_barbuda:              "Flag_of_Antigua_and_Barbuda.svg",
  argentina:                        "Flag_of_Argentina.svg",
  armenia:                          "Flag_of_Armenia.svg",
  australia:                        "Flag_of_Australia.svg",
  austria:                          "Flag_of_Austria.svg",
  azerbaijan:                       "Flag_of_Azerbaijan.svg",
  bahamas:                          "Flag_of_the_Bahamas.svg",
  bahrain:                          "Flag_of_Bahrain.svg",
  bangladesh:                       "Flag_of_Bangladesh.svg",
  barbados:                         "Flag_of_Barbados.svg",
  belarus:                          "Flag_of_Belarus.svg",
  belgium:                          "Flag_of_Belgium_(civil).svg",
  belize:                           "Flag_of_Belize.svg",
  benin:                            "Flag_of_Benin.svg",
  bhutan:                           "Flag_of_Bhutan.svg",
  bolivia:                          "Flag_of_Bolivia.svg",
  bosnia_and_herzegovina:           "Flag_of_Bosnia_and_Herzegovina.svg",
  botswana:                         "Flag_of_Botswana.svg",
  brazil:                           "Flag_of_Brazil.svg",
  brunei:                           "Flag_of_Brunei.svg",
  bulgaria:                         "Flag_of_Bulgaria.svg",
  burkina_faso:                     "Flag_of_Burkina_Faso.svg",
  burundi:                          "Flag_of_Burundi.svg",
  cabo_verde:                       "Flag_of_Cape_Verde.svg",
  cambodia:                         "Flag_of_Cambodia.svg",
  cameroon:                         "Flag_of_Cameroon.svg",
  canada:                           "Flag_of_Canada_(Pantone).svg",
  central_african_republic:         "Flag_of_the_Central_African_Republic.svg",
  chad:                             "Flag_of_Chad.svg",
  chile:                            "Flag_of_Chile.svg",
  china:                            "Flag_of_the_People%27s_Republic_of_China.svg",
  colombia:                         "Flag_of_Colombia.svg",
  comoros:                          "Flag_of_the_Comoros.svg",
  democratic_republic_of_the_congo: "Flag_of_the_Democratic_Republic_of_the_Congo.svg",
  republic_of_the_congo:            "Flag_of_the_Republic_of_the_Congo.svg",
  costa_rica:                       "Flag_of_Costa_Rica.svg",
  croatia:                          "Flag_of_Croatia.svg",
  cuba:                             "Flag_of_Cuba.svg",
  cyprus:                           "Flag_of_Cyprus.svg",
  czech_republic:                   "Flag_of_the_Czech_Republic.svg",
  denmark:                          "Flag_of_Denmark.svg",
  djibouti:                         "Flag_of_Djibouti.svg",
  dominica:                         "Flag_of_Dominica.svg",
  dominican_republic:               "Flag_of_the_Dominican_Republic.svg",
  ecuador:                          "Flag_of_Ecuador.svg",
  egypt:                            "Flag_of_Egypt.svg",
  el_salvador:                      "Flag_of_El_Salvador.svg",
  equatorial_guinea:                "Flag_of_Equatorial_Guinea.svg",
  eritrea:                          "Flag_of_Eritrea.svg",
  estonia:                          "Flag_of_Estonia.svg",
  eswatini:                         "Flag_of_Eswatini.svg",
  ethiopia:                         "Flag_of_Ethiopia.svg",
  fiji:                             "Flag_of_Fiji.svg",
  finland:                          "Flag_of_Finland.svg",
  france:                           "Flag_of_France.svg",
  gabon:                            "Flag_of_Gabon.svg",
  gambia:                           "Flag_of_the_Gambia.svg",
  georgia:                          "Flag_of_Georgia.svg",
  germany:                          "Flag_of_Germany.svg",
  ghana:                            "Flag_of_Ghana.svg",
  greece:                           "Flag_of_Greece.svg",
  grenada:                          "Flag_of_Grenada.svg",
  guatemala:                        "Flag_of_Guatemala.svg",
  guinea:                           "Flag_of_Guinea.svg",
  guinea_bissau:                    "Flag_of_Guinea-Bissau.svg",
  guyana:                           "Flag_of_Guyana.svg",
  haiti:                            "Flag_of_Haiti.svg",
  honduras:                         "Flag_of_Honduras.svg",
  hungary:                          "Flag_of_Hungary.svg",
  iceland:                          "Flag_of_Iceland.svg",
  india:                            "Flag_of_India.svg",
  indonesia:                        "Flag_of_Indonesia.svg",
  iran:                             "Flag_of_Iran.svg",
  iraq:                             "Flag_of_Iraq.svg",
  ireland:                          "Flag_of_Ireland.svg",
  israel:                           "Flag_of_Israel.svg",
  italy:                            "Flag_of_Italy.svg",
  jamaica:                          "Flag_of_Jamaica.svg",
  japan:                            "Flag_of_Japan.svg",
  jordan:                           "Flag_of_Jordan.svg",
  kazakhstan:                       "Flag_of_Kazakhstan.svg",
  kenya:                            "Flag_of_Kenya.svg",
  kiribati:                         "Flag_of_Kiribati.svg",
  kuwait:                           "Flag_of_Kuwait.svg",
  kyrgyzstan:                       "Flag_of_Kyrgyzstan.svg",
  laos:                             "Flag_of_Laos.svg",
  latvia:                           "Flag_of_Latvia.svg",
  lebanon:                          "Flag_of_Lebanon.svg",
  lesotho:                          "Flag_of_Lesotho.svg",
  liberia:                          "Flag_of_Liberia.svg",
  libya:                            "Flag_of_Libya.svg",
  liechtenstein:                    "Flag_of_Liechtenstein.svg",
  lithuania:                        "Flag_of_Lithuania.svg",
  luxembourg:                       "Flag_of_Luxembourg.svg",
  madagascar:                       "Flag_of_Madagascar.svg",
  malawi:                           "Flag_of_Malawi.svg",
  malaysia:                         "Flag_of_Malaysia.svg",
  maldives:                         "Flag_of_the_Maldives.svg",
  mali:                             "Flag_of_Mali.svg",
  malta:                            "Flag_of_Malta.svg",
  marshall_islands:                 "Flag_of_the_Marshall_Islands.svg",
  mauritania:                       "Flag_of_Mauritania.svg",
  mauritius:                        "Flag_of_Mauritius.svg",
  mexico:                           "Flag_of_Mexico.svg",
  federated_states_of_micronesia:   "Flag_of_the_Federated_States_of_Micronesia.svg",
  moldova:                          "Flag_of_Moldova.svg",
  monaco:                           "Flag_of_Monaco.svg",
  mongolia:                         "Flag_of_Mongolia.svg",
  montenegro:                       "Flag_of_Montenegro.svg",
  morocco:                          "Flag_of_Morocco.svg",
  mozambique:                       "Flag_of_Mozambique.svg",
  myanmar:                          "Flag_of_Myanmar.svg",
  namibia:                          "Flag_of_Namibia.svg",
  nauru:                            "Flag_of_Nauru.svg",
  nepal:                            "Flag_of_Nepal.svg",
  netherlands:                      "Flag_of_the_Netherlands.svg",
  new_zealand:                      "Flag_of_New_Zealand.svg",
  nicaragua:                        "Flag_of_Nicaragua.svg",
  niger:                            "Flag_of_Niger.svg",
  nigeria:                          "Flag_of_Nigeria.svg",
  north_korea:                      "Flag_of_North_Korea.svg",
  north_macedonia:                  "Flag_of_North_Macedonia.svg",
  norway:                           "Flag_of_Norway.svg",
  oman:                             "Flag_of_Oman.svg",
  pakistan:                         "Flag_of_Pakistan.svg",
  palau:                            "Flag_of_Palau.svg",
  panama:                           "Flag_of_Panama.svg",
  papua_new_guinea:                 "Flag_of_Papua_New_Guinea.svg",
  paraguay:                         "Flag_of_Paraguay.svg",
  peru:                             "Flag_of_Peru.svg",
  philippines:                      "Flag_of_the_Philippines.svg",
  poland:                           "Flag_of_Poland.svg",
  portugal:                         "Flag_of_Portugal.svg",
  qatar:                            "Flag_of_Qatar.svg",
  romania:                          "Flag_of_Romania.svg",
  russia:                           "Flag_of_Russia.svg",
  rwanda:                           "Flag_of_Rwanda.svg",
  saint_kitts_and_nevis:            "Flag_of_Saint_Kitts_and_Nevis.svg",
  saint_lucia:                      "Flag_of_Saint_Lucia.svg",
  saint_vincent_and_the_grenadines: "Flag_of_Saint_Vincent_and_the_Grenadines.svg",
  samoa:                            "Flag_of_Samoa.svg",
  san_marino:                       "Flag_of_San_Marino.svg",
  sao_tome_and_principe:            "Flag_of_Sao_Tome_and_Principe.svg",
  saudi_arabia:                     "Flag_of_Saudi_Arabia.svg",
  senegal:                          "Flag_of_Senegal.svg",
  serbia:                           "Flag_of_Serbia.svg",
  seychelles:                       "Flag_of_Seychelles.svg",
  sierra_leone:                     "Flag_of_Sierra_Leone.svg",
  singapore:                        "Flag_of_Singapore.svg",
  slovakia:                         "Flag_of_Slovakia.svg",
  slovenia:                         "Flag_of_Slovenia.svg",
  solomon_islands:                  "Flag_of_the_Solomon_Islands.svg",
  somalia:                          "Flag_of_Somalia.svg",
  south_africa:                     "Flag_of_South_Africa.svg",
  south_korea:                      "Flag_of_South_Korea.svg",
  south_sudan:                      "Flag_of_South_Sudan.svg",
  spain:                            "Flag_of_Spain.svg",
  sri_lanka:                        "Flag_of_Sri_Lanka.svg",
  sudan:                            "Flag_of_Sudan.svg",
  suriname:                         "Flag_of_Suriname.svg",
  sweden:                           "Flag_of_Sweden.svg",
  switzerland:                      "Flag_of_Switzerland_(Pantone).svg",
  syria:                            "Flag_of_Syria.svg",
  tajikistan:                       "Flag_of_Tajikistan.svg",
  tanzania:                         "Flag_of_Tanzania.svg",
  thailand:                         "Flag_of_Thailand.svg",
  timor_leste:                      "Flag_of_East_Timor.svg",
  togo:                             "Flag_of_Togo.svg",
  tonga:                            "Flag_of_Tonga.svg",
  trinidad_and_tobago:              "Flag_of_Trinidad_and_Tobago.svg",
  tunisia:                          "Flag_of_Tunisia.svg",
  turkey:                           "Flag_of_Turkey.svg",
  turkmenistan:                     "Flag_of_Turkmenistan.svg",
  tuvalu:                           "Flag_of_Tuvalu.svg",
  uganda:                           "Flag_of_Uganda.svg",
  ukraine:                          "Flag_of_Ukraine.svg",
  united_arab_emirates:             "Flag_of_the_United_Arab_Emirates.svg",
  united_kingdom:                   "Flag_of_the_United_Kingdom.svg",
  united_states:                    "Flag_of_the_United_States.svg",
  uruguay:                          "Flag_of_Uruguay.svg",
  uzbekistan:                       "Flag_of_Uzbekistan.svg",
  vanuatu:                          "Flag_of_Vanuatu.svg",
  venezuela:                        "Flag_of_Venezuela.svg",
  vietnam:                          "Flag_of_Vietnam.svg",
  yemen:                            "Flag_of_Yemen.svg",
  zambia:                           "Flag_of_Zambia.svg",
  zimbabwe:                         "Flag_of_Zimbabwe.svg",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "FolioFlagBot/1.0" } }, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, body: data }));
      })
      .on("error", reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "FolioFlagBot/1.0" } }, (res) => {
        // Follow one redirect (Wikimedia uses these)
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlink(dest, () => {});
          return downloadFile(res.headers.location, dest)
            .then(resolve)
            .catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", (err) => {
        file.close();
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

// ── Resolve Wikimedia SVG filename → 320px PNG thumbnail URL ─────────────────

async function resolveWikimediaUrl(svgFilename) {
  const encoded = encodeURIComponent(`File:${svgFilename}`);
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url&format=json`;

  const { status, body } = await fetchText(apiUrl);
  if (status !== 200) return null;

  let json;
  try { json = JSON.parse(body); } catch { return null; }

  const pages = json?.query?.pages ?? {};
  const page = Object.values(pages)[0];
  const svgUrl = page?.imageinfo?.[0]?.url ?? null;
  if (!svgUrl) return null;

  // Build the PNG thumbnail URL from the SVG URL
  // Wikimedia thumb pattern: /commons/thumb/[hash]/[hash]/File.svg/320px-File.svg.png
  const decodedFilename = decodeURIComponent(svgFilename);
  const thumbUrl =
    svgUrl.replace("/wikipedia/commons/", "/wikipedia/commons/thumb/") +
    `/320px-${decodedFilename}.png`;

  return thumbUrl;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const entries = Object.entries(FLAG_MAP);
  const total = entries.length;
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`Flag map loaded: ${total} countries.\n`);

  for (let i = 0; i < total; i++) {
    const [slug, svgFilename] = entries[i];
    const index = `[${i + 1}/${total}]`;
    const dest = path.join(OUTPUT_DIR, `${slug}.png`);

    // Skip already downloaded
    if (fs.existsSync(dest)) {
      console.log(`${index} Skipped (exists): ${slug}.png`);
      skipped++;
      continue;
    }

    // Resolve the thumbnail URL
    let thumbUrl;
    try {
      thumbUrl = await resolveWikimediaUrl(svgFilename);
    } catch (err) {
      console.log(`${index} Resolve error (${slug}): ${err.message}`);
      failed++;
      await sleep(DELAY_MS);
      continue;
    }

    if (!thumbUrl) {
      console.log(`${index} No URL resolved for: ${slug} (${svgFilename})`);
      failed++;
      await sleep(DELAY_MS);
      continue;
    }

    // Download
    try {
      await downloadFile(thumbUrl, dest);
      console.log(`${index} Downloaded: ${slug}.png`);
      downloaded++;
    } catch (err) {
      console.log(`${index} Download error (${slug}): ${err.message}`);
      failed++;
    }

    await sleep(DELAY_MS);
  }

  console.log("\n" + "─".repeat(50));
  console.log(`Downloaded : ${downloaded}`);
  console.log(`Skipped    : ${skipped}`);
  console.log(`Failed     : ${failed}`);
  console.log(`Saved to   : ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
