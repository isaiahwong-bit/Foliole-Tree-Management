export interface Suburb {
  slug: string;
  name: string;
  region: "Bayside" | "Inner East";
  council: string;
  metaDescription: string;
  /** Two unique intro paragraphs about tree work in this suburb. */
  intro: [string, string];
  /** Identification-focused paragraph about the trees Jordan sees locally. */
  localTrees: string;
  /** Factual note about council tree controls: procedural, never prescriptive. */
  councilNote: string;
  nearby: string[];
}

export const suburbs: Suburb[] = [
  {
    slug: "brighton",
    name: "Brighton",
    region: "Bayside",
    council: "Bayside City Council",
    metaDescription:
      "Qualified climbing arborist in Brighton VIC. Tree pruning to AS 4373, removals, tree health diagnostics and structural support for bayside gardens. Free quotes.",
    intro: [
      "Brighton's gardens live with the bay. Salt-laden southerlies shape every canopy between the beach and Nepean Highway, and the suburb's mix of grand old street trees and exposed coastal plantings makes for genuinely varied tree work: one street over from a wind-sheared Norfolk Island pine you'll find a hundred-year-old elm that's never felt a sea breeze.",
      "Jordan works across all of it: pruning established exotics on the golden mile, managing storm-damaged limbs after a southerly blow, and assessing older trees on blocks being renovated or subdivided. Every job starts with an assessment of the tree itself (species, condition, structure) before any gear leaves the truck.",
    ],
    localTrees:
      "Along the foreshore, look for Norfolk Island pines, the tall symmetrical silhouettes that define the Brighton beachfront, alongside coastal banksia with its serrated leathery leaves and gnarled moonah. Inland streets carry mature elms, planes and oaks from the suburb's Victorian-era plantings, while gardens hold everything from lemon-scented gums to old cypress hedges.",
    councilNote:
      "Parts of Brighton carry vegetation protection overlays, and street trees are managed by Bayside City Council. Whether a permit applies depends on the tree and the block. Jordan flags any approvals needed as part of quoting, before work is scheduled.",
    nearby: ["hampton", "sandringham", "toorak"],
  },
  {
    slug: "hampton",
    name: "Hampton",
    region: "Bayside",
    council: "Bayside City Council",
    metaDescription:
      "Qualified climbing arborist in Hampton VIC. Coastal tree care, pruning, removals and tree health assessments for beachside gardens. Free quotes.",
    intro: [
      "Hampton sits right in the salt zone, close enough to the bay that wind and sandy soil decide what thrives. Gardens here tend to mix hardy coastal natives with the planes and gums of the older street plantings, and the compact block sizes mean tree work often happens tight against fences, sheds and neighbouring rooflines.",
      "That's climbing-arborist territory. Jordan does the majority of Hampton jobs from ropes rather than machinery: sectional pruning and dismantling that puts every limb down exactly where it should go, with the garden intact when he leaves.",
    ],
    localTrees:
      "Around Hampton you'll spot coastal banksia, with its stiff serrated leaves and distinctive seed cones, alongside melaleucas with their papery bark, tea tree, and the occasional big river red gum standing over a back garden. Street plantings bring in planes and ornamental pears, so a single block can hold natives and exotics side by side.",
    councilNote:
      "Bayside City Council manages Hampton's street trees, and vegetation protection overlays apply in some precincts. Jordan confirms whether any council approval is needed for your tree while quoting, so there are no surprises mid-job.",
    nearby: ["brighton", "sandringham"],
  },
  {
    slug: "sandringham",
    name: "Sandringham",
    region: "Bayside",
    council: "Bayside City Council",
    metaDescription:
      "Qualified climbing arborist in Sandringham VIC. Tree pruning, removals and health assessments for coastal gardens and heathland-edge blocks. Free quotes.",
    intro: [
      "Sandringham keeps more of its original coastal bushland character than almost anywhere else on the bay: heathland remnants, banksia thickets and clifftop vegetation give way to leafy residential streets where gums and exotics have grown tall over a century of gardens.",
      "Working trees here means respecting both sides of that character: careful pruning that keeps established natives healthy and wind-firm, and honest assessments when an ageing tree near a house needs a closer look. Jordan climbs, inspects and works on the tree's terms. No drive-by quotes from the ute window.",
    ],
    localTrees:
      "The suburb's signature is its coastal heath: banksia, tea tree and paperbarks that hug the clifftops along Beach Road. In the streets behind, look for river red gums with their smooth, mottled trunks, yellow gums, and mature exotics (planes, oaks and jacarandas) planted as the suburb grew. Many back gardens hold gums that predate the houses around them.",
    councilNote:
      "Sandringham falls under Bayside City Council, and several precincts carry vegetation protection overlays that can apply to private trees. Jordan identifies whether your tree is affected as part of the quote, and the paperwork side is factored in before work begins.",
    nearby: ["hampton", "brighton"],
  },
  {
    slug: "toorak",
    name: "Toorak",
    region: "Inner East",
    council: "City of Stonnington",
    metaDescription:
      "Qualified climbing arborist in Toorak VIC. Heritage tree pruning to AS 4373, preservation, structural support and removals for established gardens. Free quotes.",
    intro: [
      "Toorak holds some of the most significant private tree collections in Melbourne. Century-old oaks, elms and cypress on estate-sized blocks: trees that were planted with the houses and have outgrown three generations of owners. Work on trees like these is preservation first. The goal is another fifty years of safe, healthy growth, not a quick tidy-up.",
      "This is exactly the work Jordan built LumberJord around. Structural pruning to Australian Standards, cabling and bracing for valuable trees carrying heavy limbs, and detailed health assessments that catch decay before it becomes an emergency. Careful, documented, and done personally: the same arborist who quotes the job climbs the tree.",
    ],
    localTrees:
      "Toorak's gardens read like a catalogue of classic estate planting: English oaks with their deeply lobed leaves and massive spreading crowns, elms, London planes, Canary Island palms, and dark columns of old cypress. Many are at the age where structure matters. Big limbs, long lever arms, and old pruning wounds are all things Jordan reads from the ground and from the ropes.",
    councilNote:
      "The City of Stonnington protects significant trees on private land under its local law. Larger and older trees frequently require a permit before pruning or removal. Jordan assesses what applies to your tree during quoting and prepares the arborist detail councils ask for.",
    nearby: ["armadale", "malvern", "kew"],
  },
  {
    slug: "malvern",
    name: "Malvern",
    region: "Inner East",
    council: "City of Stonnington",
    metaDescription:
      "Qualified climbing arborist in Malvern VIC. Tree pruning, health diagnostics, removals and structural support for period gardens. Free quotes.",
    intro: [
      "Malvern's Victorian and Edwardian streets were planted to impress, and a century on they've delivered: plane-lined avenues, jacarandas that turn whole corners purple in November, and back gardens anchored by gums that tower over the rooflines. Mature trees are part of what a Malvern property is worth, and they deserve better than a chainsaw crew in a hurry.",
      "Jordan's work in Malvern runs from formative pruning of young street-side plantings to weight reduction on big garden trees leaning over period roofs, slate and iron lacework. Rope access means precise cuts and controlled lowering, with no cranes tearing up the lawn unless the job truly calls for one.",
    ],
    localTrees:
      "Look up along Malvern's avenues and you're mostly under London planes: mottled bark, maple-shaped leaves, spiky seed balls. Gardens add jacarandas (ferny foliage, purple spring flowers), liquidambars with their star-shaped leaves and brilliant autumn colour, and lemon-scented gums whose smooth trunks you can pick from a street away. Central Park's mature canopy shows what the suburb's trees become at full size.",
    councilNote:
      "Malvern falls under the City of Stonnington, whose local law protects significant trees on private property. A permit is often required before major pruning or removal of established trees. Jordan checks this as part of every Malvern quote.",
    nearby: ["armadale", "toorak", "camberwell"],
  },
  {
    slug: "armadale",
    name: "Armadale",
    region: "Inner East",
    council: "City of Stonnington",
    metaDescription:
      "Qualified climbing arborist in Armadale VIC. Precise tree pruning, removals and health assessments on compact period blocks. Free quotes.",
    intro: [
      "Armadale's blocks are tighter than its neighbours': Victorian terraces and Edwardian villas with garden trees growing hard against fences, garages and party walls. Tree work here is a precision exercise. There's rarely room to drop anything, so nearly everything comes down in sections, lowered on ropes into spaces the size of a courtyard.",
      "Confined-space work is Jordan's bread and butter. He climbs, rigs and dismantles with the neighbours' gardens as untouched as yours, and prunes established trees so they keep their shape and health without crowding the house.",
    ],
    localTrees:
      "Armadale streets carry planes and ornamental pears, while its gardens favour trees that suit smaller spaces grown large: magnolias with their thick glossy leaves and goblet flowers, crepe myrtles with smooth sculptural trunks, silver birches, and the occasional out-sized gum or oak that has claimed a whole backyard. High Street's canopy gives the shopping strip its character.",
    councilNote:
      "Armadale sits within the City of Stonnington, where the local law protects significant trees on private land. Approvals can be required even for pruning, depending on the tree's size. Jordan sorts out what applies before work is booked.",
    nearby: ["toorak", "malvern", "hawthorn"],
  },
  {
    slug: "kew",
    name: "Kew",
    region: "Inner East",
    council: "City of Boroondara",
    metaDescription:
      "Qualified climbing arborist in Kew VIC. Tree pruning, removals, health diagnostics and structural support near the Yarra and Studley Park. Free quotes.",
    intro: [
      "Kew is where Melbourne's inner east meets the river. Blocks back onto Yarra Bend and Studley Park bushland, streets climb and fall with the terrain, and the trees are a genuine mix: remnant river red gums alongside the oaks, elms and golden elms of the suburb's grand old gardens.",
      "The terrain is half the job in Kew. Steep sites, limited machinery access and big, old trees mean rope-based climbing work is often the only sensible approach. Jordan assesses each tree on its own merits (health, structure, and how it's coping with its site) and carries out pruning, support systems or dismantling with the same methodical process every time.",
    ],
    localTrees:
      "Near the river, keep an eye out for river red gums, their smooth cream-and-grey mottled trunks often centuries old, and the tall, rough-barked yellow box on the ridgelines. The garden streets are classic Boroondara: English oaks, elms (including golden elms glowing lime-green in summer), planes and pin oaks. Some of Melbourne's most impressive private trees stand in Kew's older gardens.",
    councilNote:
      "The City of Boroondara's tree protection local law covers both canopy trees and listed significant trees on private property. Permits are commonly required before removal or substantial pruning. Jordan advises what your tree needs during the quote and supplies the supporting arborist detail.",
    nearby: ["hawthorn", "canterbury", "camberwell"],
  },
  {
    slug: "canterbury",
    name: "Canterbury",
    region: "Inner East",
    council: "City of Boroondara",
    metaDescription:
      "Qualified climbing arborist in Canterbury VIC. Careful pruning and preservation of established garden trees in Melbourne's most celebrated avenues. Free quotes.",
    intro: [
      "Canterbury's avenues are the reason people use the word 'leafy' about Melbourne's east. Monomeath Avenue and its neighbours are lined with some of the most valuable street and garden trees in the city, and the private gardens behind the hedges hold specimens every bit as significant.",
      "Trees like these reward patience and punish shortcuts. Jordan's Canterbury work leans heavily toward preservation: restorative pruning of over-thinned crowns, deadwood removal that keeps big trees safe without butchering their form, and structural assessments for owners who want a straight answer about an ageing tree before making any decisions.",
    ],
    localTrees:
      "The suburb's signature tree is the golden elm, its broad weeping crown of lime-gold foliage visible from a block away, planted alongside English elms, London planes and pin oaks whose leaves hang on copper-brown through winter. Gardens add copper beech, magnolias and mature conifers. Autumn in Canterbury is a working arborist's favourite time to read a crown: dieback shows plainly against good colour.",
    councilNote:
      "Canterbury falls under the City of Boroondara, whose tree protection local law applies to canopy and significant trees on private land. Most substantial work on established Canterbury trees involves a permit. Jordan identifies the requirements up front as part of quoting.",
    nearby: ["camberwell", "kew", "hawthorn"],
  },
  {
    slug: "camberwell",
    name: "Camberwell",
    region: "Inner East",
    council: "City of Boroondara",
    metaDescription:
      "Qualified climbing arborist in Camberwell VIC. Tree pruning to AS 4373, removals, and health assessments for established deciduous gardens. Free quotes.",
    intro: [
      "Camberwell's gardens were planted for shade and show: liquidambars, oaks and planes that have grown into a near-continuous canopy over the suburb's Edwardian streets. Big deciduous trees close to houses mean recurring, practical work: clearing rooflines and gutters, reducing weight over driveways, and keeping old crowns healthy as they age.",
      "Jordan handles Camberwell jobs end to end: assessment first, a clear written scope, then precise climbing work that respects both the tree's structure and the garden underneath it. For trees that are starting to fail, he'll give you an honest read on what's worth preserving and what isn't, backed by what the tree actually shows, not a sales pitch.",
    ],
    localTrees:
      "Liquidambars, with their star-shaped leaves, corky bark ridges and spectacular red-purple autumn colour, are Camberwell's calling card, growing alongside English oaks, London planes and claret ash. You'll also find big Monterey cypress and pines from earlier planting fashions standing over back fences. If your gutters fill every April, one of these deciduous giants is usually the reason.",
    councilNote:
      "Camberwell is part of the City of Boroondara, where a tree protection local law covers canopy trees and significant trees on private property. Permits are a routine part of tree work here. Jordan confirms what's needed for your tree while quoting.",
    nearby: ["canterbury", "hawthorn", "malvern"],
  },
  {
    slug: "hawthorn",
    name: "Hawthorn",
    region: "Inner East",
    council: "City of Boroondara",
    metaDescription:
      "Qualified climbing arborist in Hawthorn VIC. Tree pruning, removals and tree health diagnostics from Victorian terraces to Yarra riverside gums. Free quotes.",
    intro: [
      "Hawthorn runs from tight Victorian terrace streets near Glenferrie Road down to open riverside blocks along the Yarra, and the tree work changes just as much across that distance. Terrace gardens need surgical, confined-space pruning and dismantling; river-edge properties carry big native gums with the scale and habits that come from good water and a century of growth.",
      "Jordan works both ends comfortably. He's a climbing specialist, so narrow access is a non-issue, and his diagnostic background means big old gums near houses get a proper structural assessment, not a reflexive quote for removal when careful pruning would keep the tree safely standing.",
    ],
    localTrees:
      "Along the Yarra look for river red gums and manna gums (smooth-barked, tall, and prone to shedding ribbons of bark in summer), with St James Park and Central Gardens holding some of the suburb's grandest elms and planes. The terrace streets favour smaller ornamentals, crepe myrtles and pears, punctuated by the occasional towering gum that predates every fence around it.",
    councilNote:
      "Hawthorn falls under the City of Boroondara tree protection local law: canopy trees and listed significant trees on private land generally require permits for removal or major pruning. Jordan handles the assessment side and flags approvals during quoting.",
    nearby: ["kew", "camberwell", "armadale"],
  },
];

export function getSuburb(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}
