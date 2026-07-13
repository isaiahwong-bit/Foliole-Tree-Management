export interface TreeImageCredit {
  artist: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

export interface TreeGuide {
  slug: string;
  name: string;
  botanicalName: string;
  group:
    | "Garden & avenue classics"
    | "Backyard & hedge favourites"
    | "Natives & coastal icons";
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  imageCredit?: TreeImageCredit;
  /** Short hook shown on hub cards. */
  cardLine: string;
  intro: string;
  howToSpot: { label: string; detail: string }[];
  whereYouSeeIt: string;
  worthKnowing: string;
  lookalikes: string;
  relatedSuburbs: string[];
}

export const treeGuides: TreeGuide[] = [
  {
    slug: "london-plane",
    name: "London Plane",
    botanicalName: "Platanus × acerifolia",
    group: "Garden & avenue classics",
    metaTitle: "How to Identify a London Plane Tree in Melbourne",
    metaDescription:
      "Identify the London plane, Melbourne's most planted street tree: mottled flaking bark, maple-like leaves and spiky seed balls. A LumberJord tree guide.",
    image: "/trees/london-plane.jpg",
    imageAlt: "Avenue of London Plane trees arching over an urban street",
    cardLine:
      "Melbourne's most planted street tree, with camouflage bark and winter seed balls.",
    intro:
      "If you live on a leafy street in Melbourne's inner east, odds are you're looking at London planes. They line more Melbourne streets than any other tree, chosen a century ago for their tolerance of smoke, drought and hard pruning, and they've grown into the arching green tunnels that define suburbs like Malvern and Camberwell.",
    howToSpot: [
      {
        label: "Bark",
        detail:
          "The giveaway. Mottled patches of cream, olive and grey that flake away like camouflage, brightest on the upper trunk and limbs.",
      },
      {
        label: "Leaves",
        detail:
          "Broad and maple-like with three to five pointed lobes, arranged alternately along the twig. Fresh green in spring, leathery by summer.",
      },
      {
        label: "Fruit",
        detail:
          "Spiky round seed balls about the size of a golf ball, hanging in ones and twos on long stalks and staying on the bare tree through winter.",
      },
      {
        label: "Form",
        detail:
          "Tall and arching, commonly 20 to 30 metres in avenues, often with a clean straight trunk from decades of street-tree pruning.",
      },
      {
        label: "Season",
        detail:
          "Fine hairs shed from new spring leaves are a known hay fever trigger. Autumn colour is a quiet golden brown rather than a fireworks show.",
      },
    ],
    whereYouSeeIt:
      "Almost every avenue in the inner east has them: the shopping strips of Glenferrie Road and High Street, the residential streets of Malvern, Armadale and Camberwell, and formal plantings across the CBD and St Kilda Road. Gardens inherit them too, where street plantings have seeded or where a previous owner wanted instant shade.",
    worthKnowing:
      "The London plane is a hybrid of the American sycamore and the oriental plane, made famous by industrial-era London because it shrugged off coal soot when little else survived. That same toughness is why Melbourne councils planted it by the tens of thousands.",
    lookalikes:
      "Maples have similar leaves but arrange them in opposite pairs, where plane leaves alternate. Liquidambars have star-shaped leaves with a corky-ridged branch and carry their spiky seed balls singly. Nothing else in Melbourne has the plane's flaking camouflage bark.",
    relatedSuburbs: ["malvern", "camberwell", "armadale"],
  },
  {
    slug: "elm",
    name: "Elm",
    botanicalName: "Ulmus procera & cultivars",
    group: "Garden & avenue classics",
    metaTitle: "How to Identify an Elm Tree in Melbourne",
    metaDescription:
      "Identify English and golden elms in Melbourne: lopsided saw-edged leaves, furrowed bark and grand arching crowns. Why Melbourne's elms matter, by LumberJord.",
    image: "/trees/elm.jpg",
    imageAlt: "Broad elm canopy arching over a Melbourne avenue",
    imageCredit: {
      artist: "Rexness",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Avenue_of_Elms,_Fitzroy_Gardens,_Melbourne_Australia_(4523703561).jpg",
    },
    cardLine:
      "One of the world's last great elm populations, and Melbourne has it.",
    intro:
      "Melbourne holds something most of the world lost: mature elms. Dutch elm disease killed tens of millions of them across Europe and North America last century, but it never reached Australia, which makes the elms of Royal Parade, Fitzroy Gardens and the inner east's private gardens globally significant survivors.",
    howToSpot: [
      {
        label: "Leaves",
        detail:
          "Small, oval and saw-edged, with a distinctly lopsided base where one side of the leaf starts lower than the other. Rough like fine sandpaper on top.",
      },
      {
        label: "Bark",
        detail:
          "Dark grey-brown and deeply furrowed into a rough network of ridges, even on relatively young trees.",
      },
      {
        label: "Form",
        detail:
          "A tall, broad, arching crown, often wider than the tree is high in open gardens. Avenue elms form dense green cathedrals overhead.",
      },
      {
        label: "Golden elm",
        detail:
          "The weeping, dome-shaped cultivar with lime-gold foliage you can spot from a block away. A Canterbury and Kew signature tree.",
      },
      {
        label: "Suckers",
        detail:
          "Elms send up shoots from their roots, so a line of small elms along a fence often traces the roots of one big parent tree.",
      },
    ],
    whereYouSeeIt:
      "The famous avenues are Royal Parade and the Fitzroy Gardens, but the inner east has its own collection: golden elms glowing on Canterbury and Kew corners, English elms over Toorak and Malvern gardens, and remnant street plantings across Boroondara and Stonnington. Many are listed on significant tree registers.",
    worthKnowing:
      "Because the disease that destroyed elms overseas has never established here, Melbourne's population is studied and visited by researchers worldwide. Owning a mature elm in Melbourne means holding a piece of world horticultural heritage in your backyard.",
    lookalikes:
      "The lopsided leaf base separates elms from almost everything else. Hackberries and hornbeams have more symmetrical leaves; planes and oaks are easy to rule out by leaf shape alone. Among elms themselves, the golden cultivar is unmistakable for its colour.",
    relatedSuburbs: ["canterbury", "kew", "toorak"],
  },
  {
    slug: "english-oak",
    name: "English Oak",
    botanicalName: "Quercus robur",
    group: "Garden & avenue classics",
    metaTitle: "How to Identify an English Oak in Melbourne",
    metaDescription:
      "Identify the English oak: rounded lobed leaves, long-stalked acorns and massive spreading crowns. The estate tree of Toorak and Kew, by LumberJord.",
    image: "/trees/english-oak.jpg",
    imageAlt:
      "English oak with a full spreading crown standing on a village green",
    imageCredit: {
      artist: "Acabashi",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=44813377",
    },
    cardLine:
      "The estate tree: massive, spreading, and often older than the house beside it.",
    intro:
      "The grand oaks of Toorak, Kew and Canterbury were planted when the estates were, many in the mid-1800s, and they've been quietly outgrowing everything around them since. An established English oak is usually the largest living thing on its block, and one of the most valuable trees a Melbourne garden can hold.",
    howToSpot: [
      {
        label: "Leaves",
        detail:
          "The classic oak leaf: deep rounded lobes on an almost stalkless leaf, with two small ear-like lobes right at the base.",
      },
      {
        label: "Acorns",
        detail:
          "Carried on long stalks in ones and twos, green ripening to brown in autumn. The lawn beneath a mature oak tells you what it is every March.",
      },
      {
        label: "Bark",
        detail:
          "Grey-brown with deep, regular vertical furrows that get more rugged with age.",
      },
      {
        label: "Form",
        detail:
          "A vast rounded dome on a short, immensely thick trunk, with heavy horizontal limbs reaching wider than the tree is tall.",
      },
      {
        label: "Season",
        detail:
          "Late to leaf out in spring, russet-brown in autumn, and bare through winter, when the muscular branch structure is on full display.",
      },
    ],
    whereYouSeeIt:
      "Estate-sized blocks in Toorak and Kew hold the biggest private specimens, and the old gardens of Canterbury, Camberwell and Malvern have their share. Public parks across the inner east feature oaks planted by 19th-century councils that are now among Melbourne's largest trees.",
    worthKnowing:
      "English oaks can live for many centuries, and Melbourne's are barely middle-aged by the species' standards. Their size and age mean many are protected on council significant tree registers, and their acorn drops feed everything from cockatoos to possums through autumn.",
    lookalikes:
      "Pin oaks have sharply pointed lobes and vivid red autumn colour. Algerian oaks hold most of their leaves through winter. The rounded lobes, long-stalked acorns and short leaf stalk mark out the English oak.",
    relatedSuburbs: ["toorak", "kew", "canterbury"],
  },
  {
    slug: "claret-ash",
    name: "Claret Ash",
    botanicalName: "Fraxinus angustifolia 'Raywood'",
    group: "Garden & avenue classics",
    metaTitle: "How to Identify a Claret Ash in Melbourne",
    metaDescription:
      "Identify the claret ash: feathery leaflets that turn deep claret every autumn. An Australian-raised cultivar that went global, by LumberJord.",
    image: "/trees/claret-ash.jpg",
    imageAlt: "Claret ash in deep-red autumn colour on a suburban street",
    imageCredit: {
      artist: "David Hawgood",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Gunnersbury_Park,_autumn_leaves,_claret_ash_tree_-_geograph.org.uk_-_6640116.jpg",
    },
    cardLine:
      "The tree behind Melbourne's deep-red autumns, raised in Australia before it went global.",
    intro:
      "When a whole street in Camberwell or Malvern turns wine-red in April, you're looking at claret ash. It's an Australian story: the cultivar was discovered near Adelaide around 1910 at a property called Raywood, and from there it spread to streets and gardens around the world.",
    howToSpot: [
      {
        label: "Leaves",
        detail:
          "Fine, narrow leaflets arranged in feathery sets along a central stalk, giving the whole crown a soft, ferny texture.",
      },
      {
        label: "Autumn colour",
        detail:
          "The signature. Deep claret to burgundy, reliably every year, often holding a week or two before dropping all at once.",
      },
      {
        label: "Bark",
        detail: "Pale grey and smooth when young, developing shallow furrows with age.",
      },
      {
        label: "Form",
        detail:
          "A rounded, upright crown to 15 or 20 metres, reached quickly. Claret ash is one of the faster growers on Melbourne streets.",
      },
      {
        label: "Winter",
        detail:
          "Bare and fine-twigged, with dark buds. The fast growth shows in long, straight annual shoots.",
      },
    ],
    whereYouSeeIt:
      "Post-war streets and gardens across Camberwell, Canterbury, Malvern and the wider east, where it was planted in numbers for its speed and colour. Often the tallest thing in a 1950s or 60s garden.",
    worthKnowing:
      "Like many fast-growing trees, claret ash can form tight, narrow branch unions with bark trapped inside the fork, which is one reason formative pruning while a tree is young is time well spent. It's also a factual point of identification: mature claret ashes often show several near-vertical stems rising from one point.",
    lookalikes:
      "Desert ash has similar foliage but turns yellow, not red, and golden ash has yellow twigs and butter-coloured autumn leaves. Nothing else on a Melbourne street does true claret.",
    relatedSuburbs: ["camberwell", "malvern", "canterbury"],
  },
  {
    slug: "liquidambar",
    name: "Liquidambar",
    botanicalName: "Liquidambar styraciflua",
    group: "Garden & avenue classics",
    metaTitle: "How to Identify a Liquidambar (Sweetgum) in Melbourne",
    metaDescription:
      "Identify the liquidambar: star-shaped leaves, corky bark ridges and every autumn colour on one tree. Camberwell's calling card, by LumberJord.",
    image: "/trees/liquidambar.jpg",
    imageAlt:
      "Liquidambar crown in autumn showing red, purple, orange and gold leaves at once",
    imageCredit: {
      artist: "gailhampshire",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=49979633",
    },
    cardLine:
      "Star-shaped leaves and every autumn colour at once, on the same tree.",
    intro:
      "The liquidambar is the east's great autumn showoff. Where a claret ash commits to one colour, a single liquidambar runs purple, red, orange, gold and green all at the same time, often on the same branch. Camberwell and Canterbury gardens are full of them, planted for exactly that show.",
    howToSpot: [
      {
        label: "Leaves",
        detail:
          "A five to seven pointed star, glossy green through summer, arranged alternately along the twig. Crushed leaves have a sweet, resinous smell.",
      },
      {
        label: "Bark & twigs",
        detail:
          "Grey and furrowed on the trunk, with distinctive corky ridges or wings along younger branches. Run a thumb along a twig and you'll feel them.",
      },
      {
        label: "Fruit",
        detail:
          "Spiky round seed balls carried singly on stalks, dropping through autumn and winter. Barefoot lawn owners know them well.",
      },
      {
        label: "Form",
        detail:
          "Neatly pyramidal when young, broadening to a tall oval crown of 20 metres or more in old gardens.",
      },
      {
        label: "Autumn",
        detail:
          "The multi-colour crown is the fastest way to name one from a distance, and colour often holds into early winter.",
      },
    ],
    whereYouSeeIt:
      "Everywhere in the older gardens of Camberwell, Canterbury, Glen Iris and Kew, and on nature strips across Boroondara. They were a default garden tree for decades, so many now stand close to houses, sheds and pools built long after they were planted.",
    worthKnowing:
      "Liquidambar means 'liquid amber', named for the fragrant gum the American species yields when cut. The autumn display is genetic roulette: seed-grown trees each settle on their own mix of colours, which is why neighbouring liquidambars rarely match.",
    lookalikes:
      "Maples carry their similar leaves in opposite pairs and lack the corky twig ridges. London planes have flaking camouflage bark and chained seed balls. Japanese maples are far smaller with more deeply cut leaves.",
    relatedSuburbs: ["camberwell", "canterbury", "hawthorn"],
  },
  {
    slug: "river-red-gum",
    name: "River Red Gum",
    botanicalName: "Eucalyptus camaldulensis",
    group: "Natives & coastal icons",
    metaTitle: "How to Identify a River Red Gum in Melbourne",
    metaDescription:
      "Identify the river red gum: smooth mottled bark, sickle leaves and massive spreading crowns along the Yarra. Some predate the suburbs, by LumberJord.",
    image: "/trees/gum-canopy.jpg",
    imageAlt: "Looking up the pale trunks of tall gum trees into the canopy",
    cardLine:
      "The Yarra's giants: some were old trees before the suburbs existed.",
    intro:
      "The biggest natives in Melbourne's east were never planted. River red gums along the Yarra corridor through Kew and Hawthorn, and dotted through reserves toward the bay, are remnants of the woodland that covered this country before the suburbs, and some have been standing for several centuries.",
    howToSpot: [
      {
        label: "Bark",
        detail:
          "Smooth and mottled in patches of cream, grey and dusty pink, shedding in irregular plates. Old trunks develop rough, dark collars near the base.",
      },
      {
        label: "Leaves",
        detail:
          "Long, narrow and gently curved like a sickle, dull grey-green and hanging vertically so the crown casts a light, dappled shade.",
      },
      {
        label: "Form",
        detail:
          "Massive and spreading with a short, huge trunk and heavy, twisting limbs. Old paddock and river trees are often wider than tall.",
      },
      {
        label: "Flowers & gumnuts",
        detail:
          "Clusters of small white blossom in summer, followed by little hemispherical gumnuts. Listen for the bees working a flowering crown.",
      },
      {
        label: "Hollows",
        detail:
          "Old red gums are full of hollows that house possums, parrots, kookaburras and owls. A crown full of traffic at dusk is part of the identification.",
      },
    ],
    whereYouSeeIt:
      "The Yarra corridor is the stronghold: Yarra Bend, Studley Park and the river-edge blocks of Kew and Hawthorn. Remnant individuals stand in reserves and golf courses across the south east, including pockets toward Sandringham and Hampton, often the oldest living things in their suburb.",
    worthKnowing:
      "River red gums are among the most widespread eucalypts in Australia and among the longest-lived trees in Melbourne, with significant specimens registered and protected by councils. A remnant red gum on private land is a direct link to the pre-settlement landscape.",
    lookalikes:
      "Manna gums shed bark in long hanging ribbons rather than plates. Yellow box keeps rough bark on the trunk with smooth upper limbs. Spotted gums have a more uniform, dimpled trunk. The mottled plates, sickle leaves and sheer bulk mark out the red gum.",
    relatedSuburbs: ["kew", "hawthorn", "sandringham"],
  },
  {
    slug: "norfolk-island-pine",
    name: "Norfolk Island Pine",
    botanicalName: "Araucaria heterophylla",
    group: "Natives & coastal icons",
    metaTitle: "How to Identify a Norfolk Island Pine in Melbourne",
    metaDescription:
      "Identify the Norfolk Island pine: perfectly tiered, arrow-straight and towering over the bayside foreshore from Brighton to Sandringham. By LumberJord.",
    image: "/trees/norfolk-island-pine.jpg",
    imageAlt:
      "Norfolk Island pine showing its perfectly symmetrical tiered branches",
    imageCredit: {
      artist: "Dlanglois",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=470707",
    },
    cardLine:
      "The bayside's living lighthouses: perfectly tiered and visible from the water.",
    intro:
      "Stand on any bayside beach from Brighton to Sandringham and look inland: the tall, dark, perfectly symmetrical trees on the foreshore are Norfolk Island pines. They were planted along Victorian seaside promenades in the 19th century and have defined the look of the coast ever since.",
    howToSpot: [
      {
        label: "Form",
        detail:
          "Unmistakable. A dead-straight central trunk with branches in evenly spaced horizontal tiers, like a formal drawing of a tree, to 30 metres or more.",
      },
      {
        label: "Foliage",
        detail:
          "Young branches carry soft, curved, awl-shaped needles; older branches carry denser, scale-like leaves. Deep green year round.",
      },
      {
        label: "Bark",
        detail: "Grey-brown and slightly rough, banded with horizontal ridges.",
      },
      {
        label: "Cones",
        detail:
          "Mature trees carry rounded, spiky cones high in the crown that break apart on the tree rather than falling whole.",
      },
      {
        label: "Location",
        detail:
          "Salt wind that shears other species barely marks them, which is why the biggest ones stand right on the foreshore.",
      },
    ],
    whereYouSeeIt:
      "The Brighton, Hampton and Sandringham foreshores, esplanade reserves, and the front gardens of older bayside homes. Inland examples exist, but the sea front is their home ground, where their silhouettes act as landmarks visible far out on the bay.",
    worthKnowing:
      "Despite the name, it isn't a true pine. It belongs to the Araucaria family, an ancient conifer lineage from the age of the dinosaurs, and comes from Norfolk Island, where Captain Cook noted the towering straight trunks in 1774. Bayside councils treat their foreshore rows as heritage plantings.",
    lookalikes:
      "The hoop pine has a bushier, less tiered crown. The Cook pine leans and carries tighter, rope-like branchlets. The bunya has a dome-shaped crown and huge cones. If the tree looks like a perfect green pagoda, it's a Norfolk Island pine.",
    relatedSuburbs: ["brighton", "hampton", "sandringham"],
  },
  {
    slug: "coastal-banksia",
    name: "Coastal Banksia",
    botanicalName: "Banksia integrifolia",
    group: "Natives & coastal icons",
    metaTitle: "How to Identify a Coastal Banksia in Melbourne",
    metaDescription:
      "Identify the coastal banksia: pale yellow flower spikes, silver-backed leaves and gnarled clifftop form along Melbourne's bayside. By LumberJord.",
    image: "/trees/coastal-banksia.jpg",
    imageAlt:
      "Coastal banksia branch with pale yellow flower spikes and silver-backed leaves",
    imageCredit: {
      artist: "Rexness",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=40889162",
    },
    cardLine:
      "Silver-backed leaves and honey-scented flower spikes on the clifftops.",
    intro:
      "The coastal banksia is the toughest tree on the bayside: it grows in pure sand, drinks salt wind and still flowers through the coldest months of the year. The gnarled, wind-sculpted specimens along the Sandringham and Beaumaris clifftops are some of the most characterful trees in the south east.",
    howToSpot: [
      {
        label: "Leaves",
        detail:
          "Dark green on top with a pale silver-white underside, so the whole tree flashes silver when the sea breeze turns the foliage over.",
      },
      {
        label: "Flowers",
        detail:
          "Pale lemon-yellow cylindrical spikes, roughly the size of a soft drink can, mostly autumn through winter when little else is flowering.",
      },
      {
        label: "Seed cones",
        detail:
          "Spent spikes harden into knobbly grey cones that hang on the branches for years.",
      },
      {
        label: "Bark",
        detail: "Rough, knobbly and tan-grey, often on twisting, leaning trunks.",
      },
      {
        label: "Form",
        detail:
          "Wind-pruned and sculptural on the exposed coast, but a surprisingly tall, straight tree of 15 metres or more in sheltered gardens.",
      },
    ],
    whereYouSeeIt:
      "Foreshore reserves and clifftops from Brighton through Hampton to Sandringham, remnant heathland pockets along Beach Road, and increasingly in gardens as bayside owners replant coastal natives. Older beachside streets often have one leaning over a fence line.",
    worthKnowing:
      "This was one of the first Australian plants collected by Joseph Banks at Botany Bay in 1770, and the whole banksia genus is named for him. Its winter flowers are a critical nectar source for honeyeaters, lorikeets and possums when almost nothing else on the coast is in bloom.",
    lookalikes:
      "The saw banksia has hard, saw-toothed leaves and a stouter trunk. Coast tea-tree is smaller with tiny leaves and papery white flowers. The silver leaf-back plus lemon flower spikes make the coastal banksia easy to confirm.",
    relatedSuburbs: ["sandringham", "hampton", "brighton"],
  },
  {
    slug: "crepe-myrtle",
    name: "Crepe Myrtle",
    botanicalName: "Lagerstroemia indica",
    group: "Backyard & hedge favourites",
    metaTitle: "How to Identify a Crepe Myrtle in Melbourne",
    metaDescription:
      "Identify the crepe myrtle: crinkled summer flowers, smooth sculptural bark and elegant small form. One of Melbourne's favourite garden trees, by LumberJord.",
    image: "/trees/crepe-myrtle.jpg",
    imageAlt:
      "Crepe myrtle branch with crinkled pink flower clusters and seed capsules",
    imageCredit: {
      artist: "Сарапулов",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=141495841",
    },
    cardLine:
      "Crinkled summer flowers and smooth, sculptural trunks in front gardens everywhere.",
    intro:
      "The crepe myrtle earns its place twice a year: showers of crinkled summer flowers when most trees have finished, then bare winter branches so smooth and sculptural they look polished. It's one of the most planted small trees in Melbourne's front gardens, and one Jordan works on constantly.",
    howToSpot: [
      {
        label: "Flowers",
        detail:
          "Frilly clusters at the branch tips through summer, in pinks, purples, reds or white. Each petal is crinkled like crepe paper, which is where the name comes from.",
      },
      {
        label: "Bark",
        detail:
          "The winter giveaway. Smooth and cool to the touch, shedding in patches to a mottle of cinnamon, pink and grey on gently fluted trunks.",
      },
      {
        label: "Form",
        detail:
          "A small tree, usually 3 to 8 metres, often multi-stemmed with a vase shape. Frequently planted in pairs or rows along driveways and fences.",
      },
      {
        label: "Seed capsules",
        detail:
          "Small round capsules follow the flowers and hang on into winter, splitting into star shapes when ripe.",
      },
      {
        label: "Autumn",
        detail: "Leaves turn orange to red before dropping, a bonus show from a summer-flowering tree.",
      },
    ],
    whereYouSeeIt:
      "Front gardens and driveways across Armadale, Malvern and the wider inner east, plus newer landscaping everywhere from Hawthorn townhouses to bayside renovations. The Indian Summer cultivar series has made them a default choice for compact gardens.",
    worthKnowing:
      "Crepe myrtles flower on the current season's growth, at the very tips of new branches, which is a handy identification cue in summer: the colour always sits on the outside of the crown. The species has been cultivated in China for over a thousand years.",
    lookalikes:
      "In flower, nothing else in a Melbourne garden looks like it. In winter, the smooth mottled trunk can be mistaken for a small gum at a glance, but crepe myrtle bark is finer-grained, and the seed capsules at the tips settle it.",
    relatedSuburbs: ["armadale", "malvern", "hawthorn"],
  },
  {
    slug: "ornamental-pear",
    name: "Ornamental Pear",
    botanicalName: "Pyrus calleryana",
    group: "Backyard & hedge favourites",
    metaTitle: "How to Identify an Ornamental Pear in Melbourne",
    metaDescription:
      "Identify the ornamental (callery) pear: clouds of white spring blossom, glossy fluttering leaves and late burgundy autumn colour. By LumberJord.",
    image: "/trees/ornamental-pear.jpg",
    imageAlt:
      "Ornamental pear branch covered in white spring blossom with glossy green leaves",
    imageCredit: {
      artist: "Matthew Field",
      license: "CC BY 2.5",
      licenseUrl: "https://creativecommons.org/licenses/by/2.5/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1646082",
    },
    cardLine:
      "White spring blossom and tidy teardrop crowns on half of Melbourne's new driveways.",
    intro:
      "If a Melbourne garden was landscaped in the last twenty years, there's a fair chance it has ornamental pears in it. Developers, landscapers and councils plant them by the thousands for their neat shape, white spring blossom and toughness, which makes them one of the trees Jordan is asked about most.",
    howToSpot: [
      {
        label: "Blossom",
        detail:
          "Clouds of five-petalled white flowers in late winter and early spring, usually before or with the first leaves. Up close, each flower has dark maroon anthers at its centre.",
      },
      {
        label: "Leaves",
        detail:
          "Glossy, rounded to heart-shaped with finely scalloped edges, on long stalks that let them flutter in any breeze.",
      },
      {
        label: "Autumn",
        detail:
          "One of the last trees to colour: rich burgundy, red and orange, often holding leaves into early winter while everything else is bare.",
      },
      {
        label: "Form",
        detail:
          "Neat and upright, from narrow columns to teardrop shapes depending on the cultivar (Capital, Chanticleer and Cleveland Select are common here).",
      },
      {
        label: "Fruit",
        detail:
          "Tiny, hard, brown pears the size of a marble. Easy to miss, and nothing like an eating pear.",
      },
    ],
    whereYouSeeIt:
      "New estates, townhouse driveways, shopping strip plantings and refreshed gardens across the whole south east, from Armadale to Hampton. Councils use them heavily as street trees because they cope with compacted soil and drought.",
    worthKnowing:
      "The species comes from China and was originally imported to the US as rootstock for orchard pears before its ornamental cultivars took over the nursery trade. Some cultivars are known for forming tight, narrow branch unions as they mature, one reason formative pruning while a tree is young is time well spent.",
    lookalikes:
      "Crabapples and ornamental plums blossom in the same season, but plums flower earlier with pinkish tones and purple leaves, and crabapples show pink-tinged buds. The pear's glossy fluttering leaf and maroon-centred white flower are the tells.",
    relatedSuburbs: ["armadale", "hampton", "camberwell"],
  },
  {
    slug: "tulip-tree",
    name: "Tulip Tree",
    botanicalName: "Liriodendron tulipifera",
    group: "Backyard & hedge favourites",
    metaTitle: "How to Identify a Tulip Tree in Melbourne",
    metaDescription:
      "Identify the tulip tree: squared-off leaves like no other tree, tulip-shaped flowers and butter-yellow autumn colour. A guide by LumberJord.",
    image: "/trees/tulip-tree.jpg",
    imageAlt: "Tall tulip tree in golden autumn colour standing in a park",
    imageCredit: {
      artist: "Jean-Pol GRANDMONT",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=3198824",
    },
    cardLine:
      "The squared-off leaf no other tree has, and tulip flowers hiding in the crown.",
    intro:
      "The tulip tree carries the easiest leaf in this whole guide: once you've seen its squared-off shape, like a maple leaf with the tip cut flat, you'll never mistake it again. Larger gardens in Hawthorn, Kew and Camberwell grew them as feature trees, and they get big: this is a tree that outgrows small blocks.",
    howToSpot: [
      {
        label: "Leaves",
        detail:
          "Four broad lobes with a flat, notched top edge, as if the leaf tip was cut off with scissors. Bright green, turning butter yellow in autumn. Unique among Melbourne's trees.",
      },
      {
        label: "Flowers",
        detail:
          "Tulip-shaped cups of pale green petals with an orange band at the base, in late spring. They sit high in the crown facing upward, so most people only notice them once they drop.",
      },
      {
        label: "Form",
        detail:
          "Tall, straight-trunked and fast growing, comfortably passing 20 metres in a garden. Young trees are neatly conical; old trees develop long clear trunks.",
      },
      {
        label: "Bark",
        detail:
          "Grey with shallow, regular interlacing furrows, a bit like an ash but on a much straighter stem.",
      },
      {
        label: "Season",
        detail:
          "One of the cleanest golden-yellow autumn displays in the east, dropping over a short window.",
      },
    ],
    whereYouSeeIt:
      "Established gardens and parks in Hawthorn, Kew, Camberwell and Canterbury, usually as a single feature tree planted decades ago that now towers over the house. Occasionally seen as a street tree on wider nature strips.",
    worthKnowing:
      "It's not related to tulips: the tulip tree is a member of the magnolia family from eastern North America, where it grows into one of the tallest hardwoods on the continent. The flowers are rich in nectar, and bees work a flowering crown hard through late spring.",
    lookalikes:
      "Maples and planes have pointed-lobed leaves; the tulip tree's flat-topped leaf rules them out instantly. In winter, the straight trunk and neat furrowed bark can suggest an ash, but the buds are flattened like a duck's bill, another tell unique to this tree.",
    relatedSuburbs: ["hawthorn", "kew", "camberwell"],
  },
  {
    slug: "blueberry-ash",
    name: "Blueberry Ash",
    botanicalName: "Elaeocarpus reticulatus",
    group: "Backyard & hedge favourites",
    metaTitle: "How to Identify a Blueberry Ash in Melbourne",
    metaDescription:
      "Identify the blueberry ash: fringed fairy-floss flowers, bright blue berries and glossy leaves. A native screening favourite, by LumberJord.",
    image: "/trees/blueberry-ash.jpg",
    imageAlt:
      "Blueberry ash foliage with bright blue berries and a single red older leaf",
    imageCredit: {
      artist: "John Tann",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=15512538",
    },
    cardLine:
      "Fringed bell flowers, bright blue berries and the native answer to a boundary screen.",
    intro:
      "The blueberry ash is the native tree Melbourne gardens reach for when they want a tall, slim screen along a boundary without a hulking hedge. Left alone it makes an elegant small tree; planted in a row it forms the leafy green walls between neighbours that Jordan is regularly asked to shape and maintain.",
    howToSpot: [
      {
        label: "Flowers",
        detail:
          "Small bell-shaped flowers with delicately fringed edges, like scraps of fairy floss, in white or pink through spring and early summer. Some trees carry a faint aniseed scent.",
      },
      {
        label: "Berries",
        detail:
          "Bright blue, marble-sized fruit that follow the flowers and hang on for months, often on the tree alongside the next season's blooms.",
      },
      {
        label: "Leaves",
        detail:
          "Narrow, glossy and finely toothed. Look for the odd single leaf turned brilliant red among the green at any time of year; it's one of this tree's most reliable tells.",
      },
      {
        label: "Form",
        detail:
          "Slender and upright, typically 5 to 10 metres in gardens, naturally denser when grown as a screen or hedge line.",
      },
      {
        label: "Bark",
        detail: "Smooth to finely rough, grey-brown, on often multi-stemmed trunks.",
      },
    ],
    whereYouSeeIt:
      "Boundary screens and native gardens across the bayside and inner east, often planted in rows along side fences. It turns up in council reserve plantings too, and older single specimens stand in established native gardens from Sandringham to Kew.",
    worthKnowing:
      "Despite the name it isn't an ash at all: it belongs to an ancient rainforest lineage that reaches up Australia's east coast. The blue berries are eaten by native birds, and a screening row doubles as a feeding corridor for honeyeaters and silvereyes.",
    lookalikes:
      "Lilly pillies are the other default native screen, but they have smooth-edged leaves, fluffy white flowers and pink to magenta berries. The blueberry ash's fringed bells, blue fruit and scattered red leaves separate it at a glance.",
    relatedSuburbs: ["brighton", "hampton", "sandringham"],
  },
];

export function getTreeGuide(slug: string): TreeGuide | undefined {
  return treeGuides.find((t) => t.slug === slug);
}
