export interface Service {
  slug: string;
  name: string;
  /** Short label used in nav/footers and cross-links. */
  shortName: string;
  /** One-line summary for cross-link cards. */
  tagline: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  intro: [string, string];
  inclusionsHeading: string;
  inclusions: { title: string; detail: string }[];
  forWho: string;
  related: string[];
}

export const services: Service[] = [
  {
    slug: "tree-pruning",
    name: "Tree Pruning",
    shortName: "Pruning",
    tagline:
      "Deadwood, weight reduction, formative pruning and clearance to AS 4373.",
    metaDescription:
      "Tree pruning to Australian Standard AS 4373 across Melbourne's bayside and inner east. Deadwood removal, weight reduction, formative pruning and canopy restoration by a qualified climbing arborist.",
    image: "/work/roofline-pruning.jpg",
    imageAlt:
      "Jordan pruning branches overhanging a tiled roof, working from ropes",
    intro: [
      "Good pruning is invisible a year later: the tree looks natural, holds its form, and carries less risk. Bad pruning announces itself for decades. LumberJord prunes to Australian Standard AS 4373, which means every cut has a reason, is placed to close over cleanly, and works with the tree's structure rather than against it.",
      "Jordan works from ropes in the canopy, not from the tips of a cherry picker, so cuts are made in the right place even deep inside a crown. That matters most on the established exotics and big natives of Melbourne's bayside and inner-eastern gardens, where a tree's value is measured in decades of growth.",
    ],
    inclusionsHeading: "What pruning covers",
    inclusions: [
      {
        title: "Deadwood removal",
        detail:
          "Clearing dead and dying limbs before they drop. It's the single most common safety issue in established trees.",
      },
      {
        title: "Weight & load reduction",
        detail:
          "Reducing end-weight on over-extended limbs over roofs, driveways and play areas while keeping natural form.",
      },
      {
        title: "Formative pruning",
        detail:
          "Setting up young trees with sound structure early. It's the cheapest tree work you'll ever pay for, and the most valuable.",
      },
      {
        title: "Canopy restoration",
        detail:
          "Staged recovery pruning for trees previously lopped or storm-damaged, rebuilding a safe and natural crown.",
      },
      {
        title: "Clearance pruning",
        detail:
          "Rooflines, gutters, solar panels, powerline drops and driveways: clearance without disfiguring the tree.",
      },
    ],
    forWho:
      "Suits homeowners with established garden trees, property managers keeping sites compliant, and owners of heritage or council-protected trees where pruning must meet standards and permit conditions.",
    related: ["tree-health", "structural-support"],
  },
  {
    slug: "tree-health",
    name: "Tree Health & Diagnostics",
    shortName: "Tree Health",
    tagline:
      "Decay detection, pest and disease identification, and honest written assessments.",
    metaDescription:
      "Tree health assessments and decay detection across Melbourne's bayside and inner east. Visual tree assessment, pest and disease identification, and honest reports from a qualified arborist.",
    image: "/work/tree-assessment.jpg",
    imageAlt: "Mature cypress with sections of canopy dieback under assessment",
    intro: [
      "Most tree failures give warning signs years in advance: thinning crowns, fungal brackets, bark cracks, soil heave. The skill is in reading them early and honestly. LumberJord's diagnostic work identifies decay, disease, root stress and structural defects before they become emergencies, and tells you plainly what the tree shows.",
      "Every assessment is done in person, tree by tree. Jordan combines visual tree assessment (VTA) from the ground with climbing inspections where the crown needs a closer look, because you can't diagnose what you can't see, and half of a tree's story is only visible from inside it.",
    ],
    inclusionsHeading: "What an assessment covers",
    inclusions: [
      {
        title: "Visual tree assessment (VTA)",
        detail:
          "Systematic inspection of roots, trunk, unions and crown for the defects and body-language that signal trouble.",
      },
      {
        title: "Decay detection",
        detail:
          "Locating and mapping decay in trunks and major limbs to understand how much sound wood the tree is really standing on.",
      },
      {
        title: "Pest & disease identification",
        detail:
          "Identifying what's actually affecting the tree: borer, fungal pathogens, possum pressure or simple drought stress.",
      },
      {
        title: "Root zone & soil review",
        detail:
          "Compaction, level changes, trenching damage and root stress: the below-ground causes of above-ground decline.",
      },
      {
        title: "Written findings & care plan",
        detail:
          "Clear documentation of condition and recommendations, useful for your own decisions and for council permit applications.",
      },
    ],
    forWho:
      "Suits owners noticing dieback or fungal growth, buyers wanting a tree checked before settlement, and anyone with a large tree near a house who wants a straight answer about its condition.",
    related: ["tree-pruning", "structural-support"],
  },
  {
    slug: "structural-support",
    name: "Structural Support",
    shortName: "Structural Support",
    tagline: "Cabling and bracing that keeps valuable trees standing safely.",
    metaDescription:
      "Tree cabling and bracing across Melbourne's bayside and inner east. Structural assessment and support systems that preserve valuable established trees safely.",
    image: "/work/limb-rigging-close.jpg",
    imageAlt: "Arborist rigging ropes among the structural limbs of a conifer",
    intro: [
      "Not every structural defect is a removal. A significant tree with a weak union or an over-extended limb can often be retained safely for decades with a properly engineered support system. In the established gardens of Melbourne's inner east and bayside, retaining the tree is usually worth a great deal.",
      "LumberJord installs cabling and bracing systems matched to the tree's structure and load, always paired with an assessment first: support is only recommended where it genuinely reduces risk, never as a way to avoid a hard conversation about a tree that's past helping.",
    ],
    inclusionsHeading: "What structural support covers",
    inclusions: [
      {
        title: "Structural assessment",
        detail:
          "Reading unions, lean, decay and load paths to determine whether support is the right call, and where it should go.",
      },
      {
        title: "Canopy cabling",
        detail:
          "Flexible support between limbs that limits movement in wind while letting the tree develop its own strength.",
      },
      {
        title: "Bracing systems",
        detail:
          "Rigid support for split or weak unions where cabling alone isn't enough.",
      },
      {
        title: "Load reduction pruning",
        detail:
          "Pairing support hardware with careful end-weight reduction so the system works with less strain.",
      },
      {
        title: "Inspection & maintenance",
        detail:
          "Support systems need periodic review as the tree grows. Scheduled re-inspection keeps them effective.",
      },
    ],
    forWho:
      "Suits owners of significant, heritage or sentimental trees with structural concerns, especially where councils protect the tree and preservation is both required and desired.",
    related: ["tree-health", "tree-pruning"],
  },
  {
    slug: "tree-removal",
    name: "Tree Removal",
    shortName: "Tree Removals",
    tagline:
      "Sectional dismantling, confined-space removals and stump grinding.",
    metaDescription:
      "Safe, insured tree removal across Melbourne's bayside and inner east. Confined-space and complex removals, sectional dismantling and stump grinding by a climbing arborist.",
    image: "/work/stem-dismantle.jpg",
    imageAlt: "Climber dismantling the stem of a large tree in sections",
    intro: [
      "Some trees do need to come down: dead, dangerously decayed, failing structurally, or simply in the wrong place for what the property needs. When that's the honest answer, the job deserves to be done methodically: rigged, sectioned and lowered under control, with the garden, fences and neighbouring properties exactly as they were.",
      "Confined-space removal is LumberJord's specialty. The tight blocks of Melbourne's inner east and the established gardens of the bayside rarely allow a tree to be felled whole. Nearly everything is dismantled piece by piece from ropes, with every section's landing planned before the first cut.",
    ],
    inclusionsHeading: "What removal covers",
    inclusions: [
      {
        title: "Sectional dismantling",
        detail:
          "Trees taken down in controlled pieces using rigging: the standard approach on built-up blocks.",
      },
      {
        title: "Confined-space & complex removals",
        detail:
          "Courtyards, narrow side access, trees over structures, pools and glasshouses: precision work at height.",
      },
      {
        title: "Storm-damaged & hazardous trees",
        detail:
          "Careful dismantling of failed or unstable trees where standard climbing isn't safe.",
      },
      {
        title: "Stump grinding",
        detail:
          "Grinding stumps below grade so the space is genuinely usable again.",
      },
      {
        title: "Permits & documentation",
        detail:
          "Assessment reporting to support council permit applications where local tree protection laws apply.",
      },
    ],
    forWho:
      "Suits owners with dead or declining trees, builders and landscapers clearing for works, and anyone told a tree 'has to go' who'd value a second opinion first. Sometimes it doesn't.",
    related: ["tree-health", "subcontracting"],
  },
  {
    slug: "subcontracting",
    name: "Arborist Subcontracting",
    shortName: "Subcontracting",
    tagline: "Specialist climbing support for tree management companies.",
    metaDescription:
      "Climbing arborist subcontracting for tree management companies across Melbourne. Advanced rigging, complex removals, decay assessment and reliable overflow capacity.",
    image: "/work/giant-gum-climb.jpg",
    imageAlt: "Jordan climbing high in the crown of a giant gum tree",
    intro: [
      "Tree management companies use LumberJord for the jobs that need a specialist climber: advanced rigging and dismantling, multi-stem and hazardous removals, high-risk access work, and the technical pruning that protects a firm's reputation on its most visible contracts.",
      "Jordan turns up on time, works to your site rules and documentation standards, and represents your company the way you'd want. Firms across Melbourne use him for surge capacity in storm season, for municipal and council contract work, and on retainer for the complex climbs their own crews don't cover.",
    ],
    inclusionsHeading: "What subcontracting covers",
    inclusions: [
      {
        title: "Complex climb operations",
        detail:
          "Advanced rigging, dismantling, multi-stem and hazardous removals, crane-assisted and high-risk access work.",
      },
      {
        title: "Decay detection & assessment",
        detail:
          "VTA, decay mapping and pre-work evaluations that inform the right course of action before crews commit.",
      },
      {
        title: "Surge & overflow capacity",
        detail:
          "Reliable extra capacity for storm season, contract peaks and schedule crunches.",
      },
      {
        title: "Municipal & council work",
        detail:
          "Experience on council contracts with the compliance documentation they require.",
      },
      {
        title: "Retainer arrangements",
        detail:
          "Ongoing partnership for firms that want a known, trusted climber on call.",
      },
    ],
    forWho:
      "Suits tree management companies, commercial arboriculture firms and landscape contractors across Melbourne who need a qualified, insured climbing specialist they can put in front of their own clients.",
    related: ["tree-removal", "structural-support"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
