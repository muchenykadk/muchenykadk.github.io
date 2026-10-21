/* ---------------------------------------------------------------
   All CV content lives here. Edit this file to update the site.
   - link: optional URL; leave "" (or omit) to show no link
   - images: optional list of { src, pos } in assets/img/web/; the first is the cover,
     the rest fade in on hover. pos = CSS object-position for the crop (e.g. "50% 70%").
     Once any project has images, projects show as image cards.
   - Order within each list = order on the page (newest first)
---------------------------------------------------------------- */
window.CV = {
  name: "Muchen Yan",
  role: "Architect · PhD Candidate · University of Innsbruck",
  statement: "Digital design and fabrication for circular construction.",
  profile:
    "My research combines computational design, robotic fabrication and AI-assisted workflows to turn reclaimed materials such as demolition concrete and timber into new architectural components, tested through research-practice projects in Innsbruck. Earlier research covered human-robot collaborative prototyping, augmented reality and bio-based materials.",
  focus: ["Circular construction", "Robotic fabrication", "Computational design", "AI for circularity"],
  contact: [
    { label: "Email", value: "Muchen.Yan@uibk.ac.at", link: "mailto:Muchen.Yan@uibk.ac.at" },
    { label: "ORCID", value: "0009-0000-8858-9435", link: "https://orcid.org/0009-0000-8858-9435" }
  ],
  cvPdf: "assets/CV_MuchenYan.pdf",

  /* Current research projects (shown side by side) */
  projects: [
    {
      year: "2026",
      title: "Waste Quarrying",
      subtitle: "An action-oriented framework for cascading reuse of demolition concrete",
      where: "University of Innsbruck · Early Stage Funding",
      role: "Project leader and applicant",
      images: [
        { src: "assets/img/web/features-design-data.jpg", pos: "50% 50%" }
      ],
      link: "https://www.uibk.ac.at/en/research/research-funding/postdoc/esf/"
    },
    {
      year: "2026",
      title: "Arbor+",
      subtitle: "Robotic fabricated reciprocal structure",
      where: "i.sd Structure and Design, University of Innsbruck",
      role: "Project lead",
      images: [
        { src: "assets/img/web/arbor-1.jpg", pos: "50% 55%" },
        { src: "assets/img/web/arbor-2.jpg", pos: "50% 50%" },
        { src: "assets/img/web/arbor-3.jpg", pos: "45% 50%" }
      ],
      link: ""
    },
    {
      year: "2024-2025",
      title: "Reuse Garden",
      subtitle: "Upcycling concrete-timber waste to urban furniture",
      where: "i.sd Structure and Design, Innsbruck",
      role: "Project lead",
      images: [
        { src: "assets/img/web/reuse-garden-3.jpg", pos: "50% 62%" },
        { src: "assets/img/web/reuse-garden-2.jpg", pos: "50% 60%" },
        { src: "assets/img/web/reuse-garden-1.jpg", pos: "50% 45%" }
      ],
      link: "https://www.structureanddesign.at/reuse-garden/"
    }
  ],

  /* Earlier projects (compact rows) */
  earlierProjects: [
    {
      year: "2022",
      title: "Reviving Crafting in Digital Design with Human-Robotic Collaborative Prototyping",
      where: "CITA, Royal Danish Academy, Copenhagen",
      link: "https://kglakademi.dk/da/project/reviving-crafting-digital-design"
    },
    {
      year: "2021",
      title: "Augmented Reality for Experience-centered Spatial Design",
      where: "CITA, Royal Danish Academy, Copenhagen",
      link: "https://adk.elsevierpure.com/en/publications/augmented-reality-for-experience-centered-spatial-design-a-quanti"
    }
  ],

  publications: [
    {
      year: "2026",
      authors: "Yan, M., Schinegger, K., & Rutzinger, S.",
      title: "Hybrid Reclaimed Systems: Upcycling Concrete-timber Structures for Multidimensional Design Challenges",
      venue: "Proceedings of the IASS-IWSS Conference 2026",
      status: "In press",
      links: []
    },
    {
      year: "2026",
      authors: "Yan, M., Schinegger, K., & Rutzinger, S.",
      title: "Rubbles: Material Features as Design Data",
      venue: "Proceedings of the EKA Arh Symposium 2026",
      status: "In press",
      links: []
    },
    {
      year: "2026",
      authors: "Yan, M., Schinegger, K., & Rutzinger, S.",
      title: "Construction Waste Rubble Reimagined to Urban Furniture – Design-to-fabrication",
      venue: "Poster, Future of Construction 2026",
      status: "",
      links: [] /* add { label: "DOI", url: "https://doi.org/..." } */
    },
    {
      year: "2021",
      authors: "Yan, M., & Tamke, M.",
      title: "Augmented Reality for Experience-centered Spatial Design: A Quantitative Assessment Method for Architectural Space",
      venue: "Towards a New, Configurable Architecture – Proceedings of the 39th eCAADe Conference, Vol. 1, Novi Sad, pp. 173-180",
      status: "",
      links: [
        { label: "PDF", url: "http://papers.cumincad.org/data/works/att/ecaade2021_069.pdf" },
        { label: "Record", url: "https://adk.elsevierpure.com/en/publications/augmented-reality-for-experience-centered-spatial-design-a-quanti" }
      ]
    }
  ],

  teaching: {
    note: "Seminars and workshops, University of Innsbruck",
    items: [
      { term: "WS 2026/27", course: "Specialization Structure and Design: Prototyping", level: "Master", topic: "Reuse Intelligence: AI for circularity", link: "https://www.structureanddesign.at/prototyping-seminar-5/" },
      { term: "SS 2026", course: "Structure and Ecology", level: "Master", topic: "Robotic fabrication for reciprocal structures", link: "https://www.structureanddesign.at/structure-geometry-2/" },
      { term: "SS 2024-2026", course: "Methods of Materialization", level: "Bachelor", topic: "Computational design methods with reused materials" },
      { term: "WS 2025/26", course: "Methods in Construction and Design", level: "Bachelor", topic: "Digital design for bio-integrative structures and robotic prototyping", link: "https://www.linkedin.com/feed/update/urn:li:activity:7445407281376059393/" },
      { term: "SS 2025", course: "Specialization Structure and Design: Prototyping", level: "Master", topic: "Digital fabrication and construction" },
      { term: "WS 2024/25", course: "Structure and Ecology", level: "Bachelor", topic: "Computational design, robotic prototyping and bio-integration" }
    ]
  },

  grants: [
    { year: "2026", title: "Early Stage Funding (ESF), University of Innsbruck", detail: "Project leader and applicant — Waste Quarrying: Developing an Action-Oriented Framework for Cascading Reuse of Demolition Concrete. Competitive grant from the Vice-Rectorate for Research for an independent 12-month research project by early-career researchers.", link: "https://www.uibk.ac.at/en/research/research-funding/postdoc/esf/" },
    { year: "2015-2018", title: "Melbourne Global Scholarship", detail: "University of Melbourne", link: "" }
  ],

  exhibitions: [
    { year: "2022", title: "ADFÆRD / VELFÆRD", subtitle: "Brain Scans in VR and Reality", where: "Royal Danish Academy, Copenhagen", role: "3D scanning, student specialist", link: "https://royaldanishacademy.com/en/adfaerd-og-velfaerd" },
    { year: "2021", title: "70% Less CO₂", subtitle: "Predictive Response", where: "Royal Danish Academy, Copenhagen", role: "Robotic 3D printing of a hybrid bio-based material, student researcher", link: "https://kglakademi.dk/da/kalender/70-less-co2" },
    { year: "2021", title: "BioMedia", subtitle: "The Age of Media with Life-like Behavior", where: "ZKM | Center for Art and Media Karlsruhe", role: "Robotic 3D printing of a hybrid bio-based material, student researcher", link: "https://zkm.de/en/exhibition/2021/12/biomedia" },
    { year: "2017", title: "Intelligent Ornamentation", subtitle: "AA Visiting School Shanghai", where: "China 3D Printing Culture Museum, Shanghai", role: "Student participant", link: "" },
    { year: "2016", title: "Bodega, Ecological Metabolism", subtitle: "AA Visiting School at IAAC", where: "IAAC, Barcelona", role: "Student participant", link: "" }
  ],

  experience: [
    {
      year: "2024-present",
      org: "University of Innsbruck",
      position: "PhD Candidate Dissertation Position",
      place: "Innsbruck",
      points: [
        "Research on digital design and fabrication for circular construction, with a focus on concrete upcycling strategies and design methods",
        "Teaching seminars and workshops on computational design and materialisation",
        "Leading the research projects Waste Quarrying (2026) and Reuse Garden (2024-2025)"
      ],
      link: ""
    },
    {
      year: "2023",
      org: "CITA / Politecnico di Milano",
      position: "Course Assistant / Tutor",
      place: "Part-time, Copenhagen / Milan",
      points: ["Preparing and teaching Experimental Design of Hybrid Textile Bending Active Systems, part of the Integrated Course of Advanced Design Studio"],
      link: ""
    },
    {
      year: "2021-2022",
      org: "CITA — Centre for Information Technology and Architecture",
      position: "Research Assistant",
      place: "Part-time, Copenhagen",
      points: [
        "Co-developed and built ZOIROTIA, a 15 × 20 m knitted textile installation at ZKM Karlsruhe, from design development and model building to digital fabrication and on-site construction",
        "Operated and maintained workshop machinery (3D printers, laser cutter, CNC machine, wood and metal workshop)"
      ],
      link: "https://www.uni-kassel.de/fb06/en/institutes/architecture/departments/structural-design/research/zoirotia.html",
      linkLabel: "ZOIROTIA"
    }
  ],

  education: [
    { year: "2024-present", org: "University of Innsbruck", degree: "PhD-Doctoral programme Architecture", note: "" },
    { year: "2020-2022", org: "Royal Danish Academy (KADK)", degree: "Master of Computation in Architecture", note: "Human-robot collaboration, augmented reality, digital fabrication" },
    { year: "2015-2018", org: "University of Melbourne", degree: "Bachelor of Environments, Major in Architecture", note: "" }
  ],

  updated: "October 2026"
};
