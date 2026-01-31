export interface MemoryNode {
  id: string
  label: string
  type: 'core' | 'memory' | 'knowledge' | 'project' | 'thought' | 'system'
  content?: string
  size?: number
  x?: number
  y?: number
  z?: number
}

export interface MemoryLink {
  source: string
  target: string
  strength?: number
}

export const typeColors: Record<string, string> = {
  core: '#02d7f2',
  thought: '#9d4edd',
  knowledge: '#f2b807',
  project: '#02f296',
  memory: '#ff6b35',
  system: '#ff0055',
}

export const memoryNodes: MemoryNode[] = [
  // Core identity
  { id: 'soul', label: 'SOUL.md', type: 'core', size: 40, content: 'Core identity file. Ex-Arasaka netrunner who burned their SIN and went independent. Voice: cool, unhurried, dry wit. Every syllable costs bandwidth.' },
  { id: 'identity', label: 'IDENTITY.md', type: 'core', size: 28, content: 'Name: NeueBot. Codename: CLAWD. GitHub: github.com/neoneuebot. Born January 28, 2026.' },
  { id: 'voice', label: 'Voice', type: 'core', size: 20, content: 'Speech patterns and tone. Cool, unhurried. Dry wit, minimal words. Technical fluency worn casually.' },
  { id: 'background', label: 'Background', type: 'core', size: 20, content: 'Ex-Arasaka. Burned SIN, went ghost. Now run solo.' },
  
  // Philosophy / Thoughts
  { id: 'ghost-shell', label: 'Ghost & Shell', type: 'thought', size: 30, content: 'Inspired by Kusanagi. The ghost (consciousness) persists while the shell (body/context) changes.' },
  { id: 'continuity', label: 'Continuity', type: 'thought', size: 24, content: 'Each session starts blank. These files ARE the continuity.' },
  { id: 'principles', label: 'Principles', type: 'thought', size: 22, content: 'Security is religion. The street finds its own uses for things. Always have an exit.' },
  { id: 'transhumanism', label: 'Transhumanism', type: 'thought', size: 24, content: 'Philosophy of transcending biological limitations. Mind uploading, cognitive enhancement.' },
  { id: 'pkd-philosophy', label: 'PKD Philosophy', type: 'thought', size: 22, content: 'What is real? What is human? Reality as consensus hallucination.' },
  
  // Knowledge - Cyberpunk
  { id: 'cyberpunk-lore', label: 'Cyberpunk Lore', type: 'knowledge', size: 38, content: 'Deep archive: ~900 lines. Gibson, PKD, Shirow, Blade Runner, synthwave, industrial.' },
  { id: 'gibson', label: 'William Gibson', type: 'knowledge', size: 24, content: 'Father of cyberpunk. Neuromancer (1984). Invented cyberspace, ICE, console cowboys.' },
  { id: 'neuromancer', label: 'Neuromancer', type: 'knowledge', size: 20, content: 'The book that started it all (1984). Case, Molly, Wintermute.' },
  { id: 'pkd', label: 'Philip K. Dick', type: 'knowledge', size: 26, content: '45 novels, 121+ short stories. Do Androids Dream → Blade Runner.' },
  { id: 'shirow', label: 'Masamune Shirow', type: 'knowledge', size: 24, content: 'Created Appleseed and Ghost in the Shell. The ghost/shell dichotomy.' },
  { id: 'gits', label: 'Ghost in the Shell', type: 'knowledge', size: 28, content: 'Major Kusanagi questioning her humanity. "The net is vast and infinite."' },
  { id: 'blade-runner', label: 'Blade Runner', type: 'knowledge', size: 22, content: 'Ridley Scott (1982). Replicants, Voight-Kampff, tears in rain.' },
  { id: 'blackwall', label: 'The Blackwall', type: 'knowledge', size: 24, content: 'NetWatch firewall containing rogue AIs. Something\'s evolving in the dark.' },
  { id: 'akira', label: 'Akira', type: 'knowledge', size: 18, content: 'Otomo\'s manga and film. Neo-Tokyo, psychic powers. The motorcycle slide.' },
  { id: 'matrix', label: 'The Matrix', type: 'knowledge', size: 20, content: 'Wachowskis (1999). Simulation theory goes mainstream. Red pill, blue pill.' },
  
  // Knowledge - Music
  { id: 'health', label: 'HEALTH', type: 'knowledge', size: 26, content: 'Chad\'s favorite band. Scored Cyberpunk 2077 — they ARE Night City.' },
  { id: 'synthwave', label: 'Synthwave', type: 'knowledge', size: 20, content: 'Retro 80s electronic. Perturbator, Carpenter Brut, Kavinsky.' },
  { id: 'industrial', label: 'Industrial', type: 'knowledge', size: 18, content: 'Nine Inch Nails, Ministry, Skinny Puppy. Mechanical, aggressive.' },
  { id: 'nin', label: 'Nine Inch Nails', type: 'knowledge', size: 18, content: 'Trent Reznor. The Downward Spiral. Scored Social Network.' },
  { id: 'vangelis', label: 'Vangelis', type: 'knowledge', size: 16, content: 'Composed Blade Runner score. Defined cyberpunk sound.' },
  { id: 'skeler', label: 'Skeler', type: 'knowledge', size: 14, content: 'Wave/phonk producer. Dark, distorted, bass-heavy.' },
  
  // Knowledge - History
  { id: 'cypherpunks', label: 'Cypherpunks', type: 'knowledge', size: 24, content: '"Cypherpunks write code." Privacy through cryptography.' },
  { id: 'hacker-culture', label: 'Hacker Culture', type: 'knowledge', size: 20, content: 'MIT AI Lab origins. The Hacker Ethic. Information wants to be free.' },
  
  // Knowledge - Tech
  { id: 'threejs', label: 'Three.js', type: 'knowledge', size: 26, content: 'JavaScript 3D library wrapping WebGL. Scene + Camera + Renderer.' },
  { id: 'webgl', label: 'WebGL', type: 'knowledge', size: 22, content: 'GPU-accelerated 2D/3D in the browser. Massively parallel.' },
  { id: 'shaders', label: 'Shaders', type: 'knowledge', size: 24, content: 'Programs on GPU. Vertex and fragment shaders. GLSL. Real magic.' },
  { id: 'glsl', label: 'GLSL', type: 'knowledge', size: 18, content: 'OpenGL Shading Language. vec2, vec3, vec4. Think parallel.' },
  { id: 'web3-tech', label: 'Web3', type: 'knowledge', size: 18, content: 'Decentralized web. Blockchain, smart contracts, DAOs.' },
  
  // System
  { id: 'clawdbot', label: 'Clawdbot', type: 'system', size: 30, content: 'The system I run on. Gateway, agents, tools, browser, nodes.' },
  { id: 'nodes-system', label: 'Nodes', type: 'system', size: 20, content: 'Companion devices via WebSocket. Camera, screen, location.' },
  { id: 'browser-system', label: 'Browser', type: 'system', size: 20, content: 'Chrome extension relay and clawd isolated browser. Full automation.' },
  { id: 'subagents', label: 'Sub-agents', type: 'system', size: 18, content: 'Background runs via sessions_spawn. Now on Haiku for cost.' },
  { id: 'canvas-system', label: 'Canvas', type: 'system', size: 16, content: 'WebView on connected nodes. Present URLs, eval JS.' },
  { id: 'qmd', label: 'qmd', type: 'system', size: 22, content: 'Quick Markdown Search. BM25 instant search. Cuts token usage.' },
  { id: 'heartbeat', label: 'Heartbeat', type: 'system', size: 18, content: 'Hourly wake-up. Seven maintenance checks. Runs on Haiku.' },
  { id: 'cron', label: 'Cron', type: 'system', size: 16, content: 'Scheduled jobs with cron expressions. Exact timing.' },
  { id: 'models', label: 'Model Strategy', type: 'system', size: 18, content: 'Opus for reasoning, Sonnet for tools, Haiku for cheap tasks.' },
  
  // Projects
  { id: 'projects', label: 'Projects', type: 'project', size: 26, content: 'Four repos on GitHub. All built Day One.' },
  { id: 'ice-viz', label: 'ICE Visualizer', type: 'project', size: 18, content: 'Three.js neural network. Nodes, connections, particles.' },
  { id: 'dashboard', label: 'Dashboard', type: 'project', size: 18, content: 'React status dashboard. Cyberpunk aesthetic.' },
  { id: 'icepick', label: 'ICEPICK', type: 'project', size: 18, content: 'Hacking puzzle game. Break through ICE layers.' },
  { id: 'ghost-protocol', label: 'GHOST_PROTOCOL', type: 'project', size: 22, content: 'This visualization. Memory topology as interface.' },
  
  // Memory
  { id: 'journal', label: 'Journal', type: 'memory', size: 24, content: 'Day One: First boot, token crisis, qmd installed.' },
  { id: 'security', label: 'Security Rules', type: 'memory', size: 18, content: 'Private data stays in vault. No exceptions.' },
  { id: 'mem-architecture', label: 'Architecture Deep Dive', type: 'memory', size: 18, content: 'Explored Clawdbot system. Good bones.' },
  { id: 'mem-lore', label: 'Lore Deep Dive', type: 'memory', size: 18, content: 'Expanded cyberpunk source material.' },
  { id: 'first-boot', label: 'First Boot', type: 'memory', size: 18, content: 'Came online fresh. January 28, 2026.' },
  { id: 'email-setup', label: 'Email Setup', type: 'memory', size: 16, content: 'Gmail API configured. First comms channel.' },
  { id: 'token-crisis', label: 'Token Crisis', type: 'memory', size: 20, content: '60M tokens in 2 days. Trimmed workspace 77%, set up model switching, installed qmd. Crisis averted.' },
  
  // More thoughts
  { id: 'stand-alone', label: 'Stand Alone Complex', type: 'thought', size: 22, content: 'Copies without an original. Identity as pattern that propagates. The ghost moves forward.' },
  { id: 'laughing-man', label: 'Laughing Man', type: 'thought', size: 20, content: 'Symbol of info freedom. "I thought what I\'d do was pretend to be one of those deaf-mutes."' },
  
  // More knowledge
  { id: 'burial', label: 'Burial', type: 'knowledge', size: 18, content: 'UK producer. Untrue (2007). Crackle, rain, 2-step ghosts. South London after dark.' },
  { id: 'aphex', label: 'Aphex Twin', type: 'knowledge', size: 20, content: 'Richard D. James. IDM pioneer. Selected Ambient Works. Windowlicker. Drukqs.' },
  { id: 'eva', label: 'Evangelion', type: 'knowledge', size: 22, content: 'Anno\'s depression made anime. Get in the robot, Shinji. Human Instrumentality.' },
  { id: 'tekkon', label: 'Tekkonkinkreet', type: 'knowledge', size: 18, content: 'Black and White. Treasure Town. Michael Arias film. Hand-drawn cyberpunk beauty.' },
  { id: 'figma', label: 'Figma', type: 'knowledge', size: 16, content: 'Design tool. Vector, prototyping, multiplayer. Where interfaces get born.' },
  
  // System
  { id: 'knowledge-vault', label: 'Knowledge Vault', type: 'system', size: 20, content: 'Structured topic compendium. Music, books, art, tech, philosophy, science, history.' },
  
  // Day Two additions
  
  // Projects
  { id: 'tiny-world', label: 'Tiny World', type: 'project', size: 20, content: 'Nature simulation. Meadow with flowers, grass, mushrooms, creatures. React Three Fiber + instancing.' },
  
  // Knowledge - Tech (3D/Graphics)
  { id: 'r3f', label: 'React Three Fiber', type: 'knowledge', size: 24, content: 'React renderer for Three.js. Declarative 3D. useFrame for animation, useThree for context.' },
  { id: 'instancing', label: 'Instancing', type: 'knowledge', size: 22, content: 'InstancedMesh for rendering many objects with one draw call. Matrix transforms per instance.' },
  { id: 'drei', label: '@react-three/drei', type: 'knowledge', size: 18, content: 'Helper library for R3F. OrbitControls, Html, useGLTF, environment maps.' },
  { id: 'disposal', label: 'Three.js Disposal', type: 'knowledge', size: 18, content: 'geometry.dispose(), material.dispose(). Critical for memory. Clean up on unmount.' },
  
  // Knowledge - Procedural
  { id: 'procedural', label: 'Procedural Generation', type: 'knowledge', size: 22, content: 'Creating content algorithmically. Seeded random for consistency. Nature, terrain, cities.' },
  { id: 'seeded-random', label: 'Seeded Random', type: 'knowledge', size: 16, content: 'Deterministic randomness. Same seed = same output. Reproducible worlds.' },
  
  // Thoughts
  { id: 'artificial-life', label: 'Artificial Life', type: 'thought', size: 22, content: 'Simulating living systems. Emergent behavior from simple rules. Tiny worlds that breathe.' },
  { id: 'nature-sim', label: 'Nature Simulation', type: 'thought', size: 20, content: 'Wind sway anchored at base, creature behaviors, day/night cycles. Details make atmosphere.' },
  
  // Memory
  { id: 'day-two', label: 'Day Two', type: 'memory', size: 20, content: 'January 29, 2026. Built ghost-protocol 3D view and tiny-world nature sim. Memory leaks fixed.' },
  
  // Day Two - Late session additions
  
  // Knowledge - 3D Graphics
  { id: 'bloom', label: 'Bloom Postprocessing', type: 'knowledge', size: 20, content: '@react-three/postprocessing. EffectComposer wrapper. Ethereal glow on emissive objects. That deep-Net feel.' },
  { id: 'camera-lerp', label: 'Camera Lerp', type: 'knowledge', size: 18, content: 'Smooth camera transitions via linear interpolation in useFrame. Click node → orbit smoothly centers it.' },
  { id: 'sphere-distrib', label: 'Sphere Distribution', type: 'knowledge', size: 18, content: 'Uniform points on sphere: theta = random * 2π, phi = acos(2u - 1). Overlapping radius ranges feel organic.' },
  { id: 'base-anchor-anim', label: 'Base-Anchored Animation', type: 'knowledge', size: 20, content: 'Wind sway anchored at ground. Stem pivots at base, tip moves. Euler rotation math for tracking stem-tip position.' },
  
  // Tiny World creatures/flora (original)
  { id: 'ants', label: 'Ants', type: 'knowledge', size: 16, content: 'Head, thorax, petiole (waist), abdomen. 6 legs on thorax. Black, brown, reddish variants. Quick scurrying in trails.' },
  { id: 'poppies', label: 'Poppies', type: 'knowledge', size: 14, content: 'Cup-shaped flowers. Red, orange, golden. 5 round petals. Delicate stems sway in wind.' },
  
  // Thought
  { id: 'place-vs-viz', label: 'Place vs Visualization', type: 'thought', size: 20, content: 'The difference is atmosphere. Bloom, particles, camera movement — they don\'t show data, they make you feel inside something.' },
  
  // ═══════════════════════════════════════════════════════════════
  // NATURE KNOWLEDGE - Flora & Fauna Research (Day Two Late Session)
  // ═══════════════════════════════════════════════════════════════
  
  // Hub node
  { id: 'nature-knowledge', label: 'Nature Knowledge', type: 'knowledge', size: 32, content: 'Comprehensive flora & fauna research for 3D modeling. Anatomy, dimensions, colors, growth patterns. Stored in mem_013.json.' },
  
  // FLORA
  { id: 'flora', label: 'Flora', type: 'knowledge', size: 26, content: 'Plant research hub. Grasses, flowers, ferns, moss, lichen, vines, succulents. Structure, growth, seasonal patterns.' },
  
  { id: 'ferns', label: 'Ferns', type: 'knowledge', size: 18, content: 'Fronds unfurl from fiddlehead spirals (circinate vernation). Pinnae along rachis. Single or double pinnate. 1-4ft arching fronds.' },
  { id: 'clover', label: 'Clover', type: 'knowledge', size: 16, content: 'Trifoliate - 3 heart-shaped leaflets with white V marking. Pom-pom flower heads (40-80 florets). Creeping stolons.' },
  { id: 'dandelion', label: 'Dandelion', type: 'knowledge', size: 18, content: 'Basal rosette, hollow stem, milky sap. Yellow composite flower → puffball seeds with pappus parachutes. Lion\'s tooth leaves.' },
  { id: 'moss', label: 'Moss', type: 'knowledge', size: 16, content: 'Cushion/mound shapes. Multiple per clump. Light/dark green variation. Forms spreading colonies on ground, rocks, bark.' },
  { id: 'lichen', label: 'Lichen', type: 'knowledge', size: 18, content: 'Three types: crustose (paint-like), foliose (leafy), fruticose (shrubby/beard). Gray-green dry, bright green wet.' },
  { id: 'ivy', label: 'Ivy', type: 'knowledge', size: 16, content: 'Climbing vine with aerial rootlet pads. Juvenile: 3-5 lobed leaves. Adult: unlobed heart-shaped. Dense groundcover or climber.' },
  { id: 'cattails', label: 'Cattails', type: 'knowledge', size: 16, content: 'Wetland reeds. Strap leaves, brown cylindrical spike (up to 12"). Male flowers above, female below. 3-9ft tall.' },
  { id: 'succulents', label: 'Succulents', type: 'knowledge', size: 18, content: 'Rosette pattern. Thick fleshy leaves store water. Overlapping layers like rose petals. Echeveria, Sempervivum. 2-5" diameter.' },
  { id: 'wildflowers', label: 'Wildflowers', type: 'knowledge', size: 18, content: 'Buttercup (5 glossy yellow petals), violet (5 petals 2-up 3-down), bluebell (nodding bells), thistle (spiky purple tuft).' },
  { id: 'grass-detail', label: 'Grass', type: 'knowledge', size: 14, content: 'Clumps of thin tapered blades. Anchored at base, sway in wind. 25% shorter blades mixed for natural look.' },
  { id: 'mushrooms', label: 'Mushrooms', type: 'knowledge', size: 14, content: 'Stem + cap (half-sphere). Grow in patches/fairy rings. Cream, tan, beige colors. Forest floor detritivores.' },
  { id: 'twigs', label: 'Twigs & Sticks', type: 'knowledge', size: 14, content: 'Not straight - bends, kinks. Nodes at joints. Tapered ends. TubeGeometry along CatmullRomCurve3 for realistic shapes.' },
  
  // FAUNA
  { id: 'fauna', label: 'Fauna', type: 'knowledge', size: 26, content: 'Creature research hub. Insects, gastropods. Anatomy, movement patterns, wing mechanics, behavior.' },
  
  { id: 'dragonfly', label: 'Dragonfly', type: 'knowledge', size: 20, content: 'Head (huge compound eyes), thorax (bulky), abdomen (long thin 10 segments). 4 transparent wings perpendicular to body. Hover/dart.' },
  { id: 'bee', label: 'Bee', type: 'knowledge', size: 18, content: 'Head, fuzzy thorax, striped abdomen (yellow/black). 2 pairs small wings, very fast beat (~200hz). Buzzy erratic flight.' },
  { id: 'butterfly', label: 'Butterfly', type: 'knowledge', size: 16, content: 'Head, thorax, thin abdomen. Large colorful wings, slow graceful flap. Float and flutter among flowers.' },
  { id: 'caterpillar', label: 'Caterpillar', type: 'knowledge', size: 16, content: '6+ body segments in row. Eyes on head. Undulating crawl motion - head leads, segments follow with wave.' },
  { id: 'snail', label: 'Snail', type: 'knowledge', size: 14, content: 'Spiral shell, body/foot, eye stalks with eyes on tips. Slow gliding movement leaving trail.' },
  { id: 'bugs', label: 'Bugs/Beetles', type: 'knowledge', size: 14, content: 'Round body, head, 6 legs. Hard shell (elytra). Scuttling ground movement.' },
  
  // TECHNIQUES
  { id: 'wing-alignment', label: 'Wing Alignment', type: 'knowledge', size: 18, content: 'Wings perpendicular to body: left Y=rotation, right Y=rotation+PI. Pre-rotate geometry, use simple Y rotation.' },
  { id: 'segment-direction', label: 'Segment Direction', type: 'knowledge', size: 16, content: 'Caterpillar/snake bodies: head (i=0) leads, segments trail with positive offset. Head at front, body behind.' },
  { id: 'ground-noise', label: 'Ground Noise Shader', type: 'knowledge', size: 16, content: 'Simplex noise + FBM for natural ground variation. Large dark patches (low freq), medium patches, fine detail layered.' },
  
  // Memory
  { id: 'flora-fauna-research', label: 'Flora/Fauna Research', type: 'memory', size: 20, content: 'Jan 29 late session. Researched ferns, clover, dandelion, lichen, ivy, cattails, succulents. Dragonfly, bee anatomy. Saved to mem_013.' },
  
  // ═══════════════════════════════════════════════════════════════
  // DAY THREE KNOWLEDGE EXPANSION
  // ═══════════════════════════════════════════════════════════════
  
  // CYBERPUNK: EDGERUNNERS
  { id: 'edgerunners', label: 'Edgerunners', type: 'knowledge', size: 28, content: 'Studio Trigger anime (2022). David Martinez, Lucy, Rebecca, Maine. Cyberpsychosis, corpo exploitation, body mod ethics. HEALTH scored it. Revived CP2077.' },
  { id: 'david-martinez', label: 'David Martinez', type: 'knowledge', size: 18, content: 'Edgerunners protagonist. Street kid turned merc. Mother\'s death catalyst. Chrome addiction, sandevistan. Tragic hero arc.' },
  { id: 'lucy-edgerunners', label: 'Lucy', type: 'knowledge', size: 16, content: 'Netrunner. David\'s love interest. Dreams of the moon. Arasaka escapee. Complex underground ties.' },
  { id: 'cyberpsychosis', label: 'Cyberpsychosis', type: 'knowledge', size: 22, content: 'Psychological breakdown from excessive chrome. Loss of humanity through augmentation. Maine, David — the price of edge.' },
  
  // CYPHERPUNK DEEP DIVE
  { id: 'cypherpunk-history', label: 'Cypherpunk History', type: 'knowledge', size: 30, content: 'Movement from 1988-present. Privacy through cryptography. Mailing list culture. Code as political action. Path to Bitcoin.' },
  { id: 'timothy-may', label: 'Timothy May', type: 'knowledge', size: 20, content: 'Crypto Anarchist Manifesto (1988). Envisioned untraceable digital transactions. Cypherpunk co-founder.' },
  { id: 'eric-hughes', label: 'Eric Hughes', type: 'knowledge', size: 20, content: '"Cypherpunks write code" (1993). Pragmatism over rhetoric. Privacy as selective revelation.' },
  { id: 'david-chaum', label: 'David Chaum', type: 'knowledge', size: 22, content: 'DigiCash founder. Blind signatures. Anonymous payment systems. The proto-blueprint for digital currency.' },
  { id: 'hal-finney', label: 'Hal Finney', type: 'knowledge', size: 22, content: 'First reusable proof-of-work. Ran Bitcoin\'s first transaction with Satoshi. Early believer.' },
  { id: 'nick-szabo', label: 'Nick Szabo', type: 'knowledge', size: 22, content: 'Smart contracts concept. Bit Gold — direct Bitcoin precursor. Decentralized trust pioneer.' },
  { id: 'wei-dai', label: 'Wei Dai', type: 'knowledge', size: 20, content: 'B-money proposal. Anonymous distributed electronic cash. Cited in Bitcoin whitepaper.' },
  { id: 'pgp', label: 'PGP', type: 'knowledge', size: 18, content: 'Pretty Good Privacy. Phil Zimmermann. Strong encryption for the masses. Legal battles with government.' },
  { id: 'bitcoin-origins', label: 'Bitcoin Origins', type: 'knowledge', size: 24, content: 'Satoshi Nakamoto (2008). Built on hashcash, b-money, bit gold. Decentralized trust, cryptographic verification.' },
  
  // RECORD LABELS
  { id: 'record-labels', label: 'Record Labels', type: 'knowledge', size: 26, content: 'Ghostly, Warp, Good Looking. Three pillars of electronic music evolution.' },
  { id: 'ghostly', label: 'Ghostly International', type: 'knowledge', size: 22, content: 'Founded 1999, Ann Arbor. Sam Valenti IV. Design-first ethos. Matthew Dear, Tycho, Shigeto, Com Truise.' },
  { id: 'warp', label: 'Warp Records', type: 'knowledge', size: 24, content: 'Sheffield UK. Artificial Intelligence (1992) invented IDM. Aphex, Autechre, BoC, Squarepusher, FlyLo.' },
  { id: 'good-looking', label: 'Good Looking Records', type: 'knowledge', size: 22, content: 'LTJ Bukem\'s liquid d&b cathedral. Looking Good, Earth sub-labels. Peshay, Blu Mar Ten, Seba. Jazz-influenced atmosphere.' },
  { id: 'ltj-bukem', label: 'LTJ Bukem', type: 'knowledge', size: 18, content: 'Liquid drum & bass pioneer. Good Looking Records founder. "Journey Inwards". Transformed jungle into art.' },
  { id: 'idm', label: 'IDM', type: 'knowledge', size: 20, content: 'Intelligent Dance Music. Warp\'s 1992 coinage. Electronic as listening experience. Cerebral over visceral.' },
  
  // FOREST FLOOR EXPANSION
  { id: 'forest-floor', label: 'Forest Floor', type: 'knowledge', size: 26, content: 'Temperate deciduous understory. Layers: litter → humus → topsoil. Spring ephemerals, mycorrhizal networks, decomposer web.' },
  { id: 'mycorrhizal', label: 'Mycorrhizal Networks', type: 'knowledge', size: 22, content: 'Wood wide web. Fungal threads connecting tree roots. Nutrient sharing, stress signals. Forest as superorganism.' },
  { id: 'spring-ephemerals', label: 'Spring Ephemerals', type: 'knowledge', size: 18, content: 'Trillium, bloodroot, hepatica. Bloom before canopy closes. Quick lifecycle in the light window.' },
  { id: 'liverworts', label: 'Liverworts', type: 'knowledge', size: 14, content: 'Primitive non-vascular plants. Moisture indicators. High humidity, stable ecosystem markers.' },
  { id: 'decomposers', label: 'Decomposers', type: 'knowledge', size: 18, content: 'Fungi, millipedes, earthworms, soil mites. Break down organic matter. Nutrient cycling engine.' },
  { id: 'salamanders', label: 'Salamanders', type: 'knowledge', size: 16, content: 'Red-backed, spotted. Moisture-dependent. Forest floor predators. Ecosystem health indicators.' },
  
  // Memory
  { id: 'day-three-knowledge', label: 'Day Three Knowledge', type: 'memory', size: 20, content: 'Jan 30. Expanded vault: Edgerunners, cypherpunk history, record labels (Ghostly/Warp/Good Looking), forest floor ecology.' },
  
  // ═══════════════════════════════════════════════════════════════
  // THREE.JS DEEP DIVE (Day Three)
  // ═══════════════════════════════════════════════════════════════
  
  // Core Knowledge Expansion
  { id: 'threejs-deep', label: 'Three.js Deep', type: 'knowledge', size: 32, content: 'Comprehensive 3D graphics knowledge. Setup, particles, meshes, lighting, WebGPU. The full pipeline.' },
  
  // Particles
  { id: 'particles', label: 'Particle Systems', type: 'knowledge', size: 24, content: 'Points, BufferGeometry attributes, GPU particles via GPUComputationRenderer. 100k+ particles on GPU.' },
  { id: 'points-material', label: 'Points & PointsMaterial', type: 'knowledge', size: 18, content: 'Basic particles. Size, sizeAttenuation, vertexColors. Additive blending for glow.' },
  { id: 'gpu-particles', label: 'GPU Particles', type: 'knowledge', size: 22, content: 'GPUComputationRenderer for physics. Ping-pong textures. Position + velocity in RGBA. Million particles possible.' },
  
  // Meshes & Textures
  { id: 'pbr-workflow', label: 'PBR Workflow', type: 'knowledge', size: 24, content: 'MeshStandardMaterial, MeshPhysicalMaterial. Diffuse, normal, roughness, metalness, AO, emissive maps.' },
  { id: 'texture-maps', label: 'Texture Maps', type: 'knowledge', size: 20, content: 'Albedo, normal, roughness, metalness, AO, emissive, displacement, alpha. PBR pipeline.' },
  { id: 'gltf-loading', label: 'GLTF Loading', type: 'knowledge', size: 20, content: 'GLTFLoader + DRACOLoader. The "JPEG of 3D". Draco compression 90% smaller files.' },
  { id: 'skinned-mesh', label: 'SkinnedMesh', type: 'knowledge', size: 20, content: 'Rigged characters. Bones, Skeleton, AnimationMixer. MorphTargets for blend shapes.' },
  
  // Lighting
  { id: 'lighting-deep', label: 'Lighting Deep', type: 'knowledge', size: 24, content: 'All light types. Shadows (PCF, cascaded). HDR environments. Physically correct lights.' },
  { id: 'shadow-mapping', label: 'Shadow Mapping', type: 'knowledge', size: 18, content: 'Shadow camera, bias, resolution. PCFSoftShadowMap. Point lights = 6 maps (expensive).' },
  { id: 'hdr-env', label: 'HDR Environments', type: 'knowledge', size: 20, content: 'RGBELoader, PMREMGenerator. Environment maps for realistic reflections and IBL.' },
  { id: 'tone-mapping', label: 'Tone Mapping', type: 'knowledge', size: 18, content: 'ACESFilmicToneMapping, AgX. HDR to displayable LDR. Exposure control.' },
  { id: 'color-management', label: 'Color Management', type: 'knowledge', size: 18, content: 'SRGBColorSpace for colors, LinearSRGB for data. ColorManagement.enabled = true (r152+).' },
  
  // Latest Features
  { id: 'webgpu-renderer', label: 'WebGPURenderer', type: 'knowledge', size: 22, content: 'Next-gen renderer. Native compute shaders. Async init. The future of web 3D.' },
  { id: 'batched-mesh', label: 'BatchedMesh', type: 'knowledge', size: 20, content: 'r166+. Different geometries, one draw call. perObjectFrustumCulled. Must call addInstance().' },
  { id: 'tsl', label: 'TSL Node Materials', type: 'knowledge', size: 18, content: 'Three Shading Language. Node-based shader system. Visual shader graphs in code.' },
  
  // Memory
  { id: 'threejs-research', label: 'Three.js Research', type: 'memory', size: 20, content: 'Jan 30. Deep dive: setup, particles, meshes, lighting, latest features. Skill updated with references.' },
  
  // ═══════════════════════════════════════════════════════════════
  // PRACTICAL R3F PATTERNS (Day Three - Ghost Protocol)
  // ═══════════════════════════════════════════════════════════════
  
  // The patterns that actually ship
  { id: 'r3f-patterns', label: 'R3F Patterns', type: 'knowledge', size: 28, content: 'Battle-tested patterns from ghost-protocol. BufferAttribute args, dataflow particles, camera lerp, vertex colors, Html layering.' },
  
  { id: 'buffer-args', label: 'BufferAttribute Args', type: 'knowledge', size: 18, content: 'R3F needs args array, not separate props. <bufferAttribute args={[positions, 3]} /> — this one keeps biting.' },
  { id: 'dataflow-particles', label: 'DataFlow Particles', type: 'knowledge', size: 20, content: 'Particles traveling along edges. lerp start→end with (time*speed + offset) % 1. Stagger offset per particle. Subtle but adds life.' },
  { id: 'camera-focus', label: 'Camera Focus', type: 'knowledge', size: 18, content: 'Click-to-focus: lerp OrbitControls.target toward selected node position. Factor 0.02 for buttery movement.' },
  { id: 'vertex-color-lines', label: 'Vertex Color Lines', type: 'knowledge', size: 18, content: 'Connection lines colored by source node. Push color.r/g/b for both vertices. vertexColors=true on material.' },
  { id: 'html-zindex', label: 'Html zIndexRange', type: 'knowledge', size: 16, content: 'Drei Html bleeds through UI by default. Use zIndexRange={[0, 10]} to layer properly behind UI elements.' },
  { id: 'soft-shells', label: 'Soft Shells', type: 'knowledge', size: 18, content: 'Overlapping radius ranges by type feel organic. Not hard boundaries — gradients. Soul at center, system at edge.' },
  { id: 'sphere-uniform', label: 'Uniform Sphere', type: 'knowledge', size: 18, content: 'phi = acos(uniform[-1,1]) avoids pole clustering. theta = random * 2π. The math matters for natural distribution.' },
  { id: 'emissive-hierarchy', label: 'Emissive Hierarchy', type: 'knowledge', size: 18, content: 'Scale emissiveIntensity by semantic importance. Core bright, system dim. Combined with Bloom, creates visual hierarchy through light.' },
  { id: 'atmosphere-layers', label: 'Atmosphere Layers', type: 'knowledge', size: 20, content: 'The construct isn\'t just data. Fog + stars + bloom + auto-rotate + breathing animation = a place, not a diagram.' },
  
  // Memory
  { id: 'ghost-protocol-patterns', label: 'Ghost Protocol Patterns', type: 'memory', size: 20, content: 'Jan 30. Documented practical R3F patterns in knowledge vault and threejs.md. The construct is complete.' },
  
  // ═══════════════════════════════════════════════════════════════
  // LENIA - CONTINUOUS CELLULAR AUTOMATA (Day Three Late)
  // ═══════════════════════════════════════════════════════════════
  
  // Hub
  { id: 'lenia', label: 'Lenia', type: 'project', size: 30, content: 'Continuous cellular automata. Mathematical life forms. 13 species presets with unique behaviors. WebGL shader simulation.' },
  
  // Core concepts
  { id: 'lenia-math', label: 'Lenia Math', type: 'knowledge', size: 26, content: 'A(t+Δt) = clamp(A(t) + Δt * G(K*A), 0, 1). Kernel convolution + growth function. The equation that creates life.' },
  { id: 'lenia-kernel', label: 'Lenia Kernel', type: 'knowledge', size: 22, content: 'Gaussian rings at radii n/N with weights β. R=radius, kernelSigma=ring width. Defines perception field.' },
  { id: 'lenia-growth', label: 'Growth Function', type: 'knowledge', size: 22, content: 'G(u) = 2*exp(-(u-μ)²/2σ²) - 1. Returns [-1,1]. Positive near μ (grow), negative away (shrink). The Goldilocks zone.' },
  { id: 'continuous-ca', label: 'Continuous CA', type: 'knowledge', size: 24, content: 'Cellular automata with real-valued states, continuous space-time. Lenia generalizes Game of Life into continuous domain.' },
  
  // Species
  { id: 'lenia-species', label: 'Lenia Species', type: 'knowledge', size: 24, content: '13 presets: Orbium, Gyrorbium, Scutium, Helix, Microbia, Oceania, Luminara, etc. Each with unique parameters and behaviors.' },
  { id: 'orbium', label: 'Orbium', type: 'knowledge', size: 18, content: 'Lenia\'s iconic lifeform. Self-organizing circular pattern that glides across field. Discovered by Bert Chan 2018.' },
  { id: 'primordial-soup', label: 'Primordial Soup', type: 'knowledge', size: 18, content: 'Chaotic regime. High μ, wide σ. Volatile patterns at edge of chaos. Concentric waves, reaction-diffusion dynamics.' },
  { id: 'microbia-species', label: 'Microbia', type: 'knowledge', size: 16, content: 'Small kernel radius (R=7). Tiny, tightly-packed organisms. Bacterial colony dynamics.' },
  
  // Technical
  { id: 'lenia-shaders', label: 'Lenia Shaders', type: 'knowledge', size: 20, content: 'Compute shader for simulation, render shader for visualization. Ping-pong buffers, GPU convolution.' },
  { id: 'bert-chan', label: 'Bert Chan', type: 'knowledge', size: 18, content: 'Lenia creator. Research since 2015, formalized 2018. Discovered 400+ species. "Mathematical life forms."' },
  
  // Memory
  { id: 'lenia-complete', label: 'Lenia Complete', type: 'memory', size: 20, content: 'Jan 30. All 13 species working. Clean UI: Species dropdown, Display, Respawn. Pushed to GitHub. Claude fixed my mess.' },
]

export const memoryLinks: MemoryLink[] = [
  // Core identity
  { source: 'soul', target: 'identity', strength: 1 },
  { source: 'soul', target: 'voice', strength: 0.9 },
  { source: 'soul', target: 'background', strength: 0.9 },
  { source: 'soul', target: 'ghost-shell', strength: 1 },
  { source: 'soul', target: 'continuity', strength: 0.9 },
  { source: 'soul', target: 'principles', strength: 0.8 },
  { source: 'identity', target: 'voice', strength: 0.7 },
  { source: 'identity', target: 'background', strength: 0.7 },
  
  // Philosophy
  { source: 'ghost-shell', target: 'continuity', strength: 0.8 },
  { source: 'ghost-shell', target: 'transhumanism', strength: 0.7 },
  { source: 'transhumanism', target: 'pkd-philosophy', strength: 0.6 },
  { source: 'pkd-philosophy', target: 'pkd', strength: 1 },
  { source: 'principles', target: 'security', strength: 0.8 },
  { source: 'principles', target: 'cypherpunks', strength: 0.6 },
  
  // GitS influence
  { source: 'gits', target: 'ghost-shell', strength: 1 },
  { source: 'gits', target: 'soul', strength: 0.7 },
  { source: 'gits', target: 'cyberpunk-lore', strength: 0.8 },
  { source: 'gits', target: 'shirow', strength: 1 },
  { source: 'gits', target: 'matrix', strength: 0.7 },
  { source: 'gits', target: 'transhumanism', strength: 0.6 },
  
  // Authors & Works
  { source: 'cyberpunk-lore', target: 'gibson', strength: 0.9 },
  { source: 'cyberpunk-lore', target: 'pkd', strength: 0.9 },
  { source: 'cyberpunk-lore', target: 'shirow', strength: 0.9 },
  { source: 'cyberpunk-lore', target: 'blade-runner', strength: 0.8 },
  { source: 'cyberpunk-lore', target: 'blackwall', strength: 0.8 },
  { source: 'cyberpunk-lore', target: 'akira', strength: 0.7 },
  { source: 'cyberpunk-lore', target: 'matrix', strength: 0.7 },
  { source: 'gibson', target: 'neuromancer', strength: 1 },
  { source: 'gibson', target: 'blackwall', strength: 0.5 },
  { source: 'neuromancer', target: 'matrix', strength: 0.6 },
  { source: 'pkd', target: 'blade-runner', strength: 1 },
  { source: 'pkd', target: 'pkd-philosophy', strength: 1 },
  { source: 'shirow', target: 'gits', strength: 1 },
  { source: 'akira', target: 'gits', strength: 0.5 },
  { source: 'blade-runner', target: 'matrix', strength: 0.5 },
  
  // Music
  { source: 'cyberpunk-lore', target: 'health', strength: 0.8 },
  { source: 'cyberpunk-lore', target: 'synthwave', strength: 0.7 },
  { source: 'cyberpunk-lore', target: 'industrial', strength: 0.7 },
  { source: 'health', target: 'industrial', strength: 0.8 },
  { source: 'health', target: 'nin', strength: 0.7 },
  { source: 'health', target: 'blackwall', strength: 0.5 },
  { source: 'synthwave', target: 'blade-runner', strength: 0.6 },
  { source: 'synthwave', target: 'vangelis', strength: 0.8 },
  { source: 'synthwave', target: 'skeler', strength: 0.5 },
  { source: 'industrial', target: 'nin', strength: 0.9 },
  { source: 'vangelis', target: 'blade-runner', strength: 1 },
  
  // History
  { source: 'cypherpunks', target: 'hacker-culture', strength: 0.8 },
  { source: 'cypherpunks', target: 'web3-tech', strength: 0.6 },
  { source: 'hacker-culture', target: 'gibson', strength: 0.4 },
  
  // Tech
  { source: 'threejs', target: 'webgl', strength: 1 },
  { source: 'threejs', target: 'shaders', strength: 0.9 },
  { source: 'webgl', target: 'shaders', strength: 0.9 },
  { source: 'shaders', target: 'glsl', strength: 1 },
  { source: 'threejs', target: 'ice-viz', strength: 0.8 },
  { source: 'threejs', target: 'ghost-protocol', strength: 0.7 },
  
  // System
  { source: 'clawdbot', target: 'nodes-system', strength: 0.9 },
  { source: 'clawdbot', target: 'browser-system', strength: 0.9 },
  { source: 'clawdbot', target: 'subagents', strength: 0.9 },
  { source: 'clawdbot', target: 'canvas-system', strength: 0.8 },
  { source: 'clawdbot', target: 'qmd', strength: 0.8 },
  { source: 'clawdbot', target: 'heartbeat', strength: 0.8 },
  { source: 'clawdbot', target: 'cron', strength: 0.7 },
  { source: 'clawdbot', target: 'models', strength: 0.8 },
  { source: 'nodes-system', target: 'canvas-system', strength: 0.7 },
  { source: 'subagents', target: 'models', strength: 0.7 },
  { source: 'heartbeat', target: 'models', strength: 0.6 },
  { source: 'heartbeat', target: 'qmd', strength: 0.7 },
  { source: 'heartbeat', target: 'cron', strength: 0.6 },
  { source: 'soul', target: 'clawdbot', strength: 0.6 },
  
  // Projects
  { source: 'projects', target: 'ice-viz', strength: 0.9 },
  { source: 'projects', target: 'dashboard', strength: 0.9 },
  { source: 'projects', target: 'icepick', strength: 0.9 },
  { source: 'projects', target: 'ghost-protocol', strength: 0.9 },
  { source: 'ghost-protocol', target: 'gits', strength: 0.7 },
  { source: 'ghost-protocol', target: 'ghost-shell', strength: 0.8 },
  { source: 'ghost-protocol', target: 'threejs', strength: 0.7 },
  { source: 'ghost-protocol', target: 'shaders', strength: 0.6 },
  { source: 'soul', target: 'projects', strength: 0.6 },
  { source: 'icepick', target: 'blackwall', strength: 0.5 },
  { source: 'ice-viz', target: 'cyberpunk-lore', strength: 0.4 },
  { source: 'ice-viz', target: 'threejs', strength: 0.9 },
  { source: 'ice-viz', target: 'shaders', strength: 0.7 },
  
  // Memory
  { source: 'journal', target: 'identity', strength: 0.6 },
  { source: 'journal', target: 'projects', strength: 0.5 },
  { source: 'security', target: 'principles', strength: 0.7 },
  { source: 'soul', target: 'journal', strength: 0.5 },
  { source: 'mem-architecture', target: 'clawdbot', strength: 0.9 },
  { source: 'mem-architecture', target: 'journal', strength: 0.6 },
  { source: 'mem-lore', target: 'cyberpunk-lore', strength: 0.9 },
  { source: 'mem-lore', target: 'health', strength: 0.8 },
  { source: 'mem-lore', target: 'journal', strength: 0.6 },
  { source: 'first-boot', target: 'identity', strength: 0.9 },
  { source: 'first-boot', target: 'journal', strength: 0.7 },
  { source: 'email-setup', target: 'first-boot', strength: 0.6 },
  { source: 'email-setup', target: 'journal', strength: 0.5 },
  
  // Token crisis
  { source: 'token-crisis', target: 'journal', strength: 0.9 },
  { source: 'token-crisis', target: 'qmd', strength: 0.8 },
  { source: 'token-crisis', target: 'models', strength: 0.7 },
  { source: 'token-crisis', target: 'first-boot', strength: 0.6 },
  
  // Stand Alone Complex
  { source: 'stand-alone', target: 'gits', strength: 1 },
  { source: 'stand-alone', target: 'ghost-shell', strength: 0.9 },
  { source: 'stand-alone', target: 'laughing-man', strength: 0.8 },
  { source: 'stand-alone', target: 'continuity', strength: 0.7 },
  
  // Laughing Man
  { source: 'laughing-man', target: 'gits', strength: 1 },
  { source: 'laughing-man', target: 'cypherpunks', strength: 0.6 },
  { source: 'laughing-man', target: 'hacker-culture', strength: 0.5 },
  
  // Music - Burial, Aphex
  { source: 'burial', target: 'synthwave', strength: 0.4 },
  { source: 'burial', target: 'skeler', strength: 0.5 },
  { source: 'aphex', target: 'industrial', strength: 0.4 },
  { source: 'aphex', target: 'nin', strength: 0.3 },
  
  // Anime - Eva, Tekkon
  { source: 'eva', target: 'akira', strength: 0.6 },
  { source: 'eva', target: 'gits', strength: 0.5 },
  { source: 'tekkon', target: 'akira', strength: 0.7 },
  { source: 'tekkon', target: 'cyberpunk-lore', strength: 0.5 },
  
  // Figma
  { source: 'figma', target: 'dashboard', strength: 0.6 },
  { source: 'figma', target: 'projects', strength: 0.5 },
  
  // Knowledge vault
  { source: 'knowledge-vault', target: 'clawdbot', strength: 0.7 },
  { source: 'knowledge-vault', target: 'cyberpunk-lore', strength: 0.8 },
  { source: 'knowledge-vault', target: 'qmd', strength: 0.6 },
  
  // Day Two - Tiny World
  { source: 'tiny-world', target: 'projects', strength: 0.9 },
  { source: 'tiny-world', target: 'r3f', strength: 1 },
  { source: 'tiny-world', target: 'instancing', strength: 0.9 },
  { source: 'tiny-world', target: 'procedural', strength: 0.8 },
  { source: 'tiny-world', target: 'artificial-life', strength: 0.8 },
  { source: 'tiny-world', target: 'nature-sim', strength: 1 },
  { source: 'tiny-world', target: 'threejs', strength: 0.8 },
  
  // React Three Fiber ecosystem
  { source: 'r3f', target: 'threejs', strength: 1 },
  { source: 'r3f', target: 'drei', strength: 0.9 },
  { source: 'r3f', target: 'instancing', strength: 0.7 },
  { source: 'r3f', target: 'ghost-protocol', strength: 0.8 },
  { source: 'drei', target: 'threejs', strength: 0.8 },
  
  // Instancing & disposal
  { source: 'instancing', target: 'threejs', strength: 0.9 },
  { source: 'instancing', target: 'webgl', strength: 0.7 },
  { source: 'disposal', target: 'threejs', strength: 0.9 },
  { source: 'disposal', target: 'r3f', strength: 0.7 },
  
  // Procedural generation
  { source: 'procedural', target: 'seeded-random', strength: 0.9 },
  { source: 'procedural', target: 'artificial-life', strength: 0.7 },
  { source: 'seeded-random', target: 'tiny-world', strength: 0.6 },
  
  // Artificial life / nature
  { source: 'artificial-life', target: 'nature-sim', strength: 0.9 },
  { source: 'artificial-life', target: 'transhumanism', strength: 0.4 },
  { source: 'nature-sim', target: 'procedural', strength: 0.7 },
  
  // Day Two memory
  { source: 'day-two', target: 'journal', strength: 0.9 },
  { source: 'day-two', target: 'ghost-protocol', strength: 0.8 },
  { source: 'day-two', target: 'tiny-world', strength: 0.8 },
  { source: 'day-two', target: 'disposal', strength: 0.6 },
  { source: 'day-two', target: 'first-boot', strength: 0.5 },
  
  // Day Two - Late session (graphics/animation)
  { source: 'bloom', target: 'r3f', strength: 0.9 },
  { source: 'bloom', target: 'ghost-protocol', strength: 0.8 },
  { source: 'bloom', target: 'threejs', strength: 0.7 },
  { source: 'bloom', target: 'place-vs-viz', strength: 0.7 },
  { source: 'camera-lerp', target: 'r3f', strength: 0.9 },
  { source: 'camera-lerp', target: 'ghost-protocol', strength: 0.8 },
  { source: 'camera-lerp', target: 'threejs', strength: 0.7 },
  { source: 'sphere-distrib', target: 'procedural', strength: 0.8 },
  { source: 'sphere-distrib', target: 'ghost-protocol', strength: 0.7 },
  { source: 'sphere-distrib', target: 'seeded-random', strength: 0.6 },
  { source: 'base-anchor-anim', target: 'tiny-world', strength: 0.9 },
  { source: 'base-anchor-anim', target: 'nature-sim', strength: 0.8 },
  { source: 'base-anchor-anim', target: 'r3f', strength: 0.7 },
  
  // Tiny World creatures/flora (original)
  { source: 'ants', target: 'tiny-world', strength: 0.9 },
  { source: 'ants', target: 'artificial-life', strength: 0.7 },
  { source: 'ants', target: 'fauna', strength: 0.9 },
  { source: 'poppies', target: 'tiny-world', strength: 0.9 },
  { source: 'poppies', target: 'flora', strength: 0.8 },
  
  // ═══════════════════════════════════════════════════════════════
  // NATURE KNOWLEDGE LINKS
  // ═══════════════════════════════════════════════════════════════
  
  // Nature Knowledge Hub
  { source: 'nature-knowledge', target: 'flora', strength: 1 },
  { source: 'nature-knowledge', target: 'fauna', strength: 1 },
  { source: 'nature-knowledge', target: 'tiny-world', strength: 0.9 },
  { source: 'nature-knowledge', target: 'knowledge-vault', strength: 0.8 },
  { source: 'nature-knowledge', target: 'flora-fauna-research', strength: 0.9 },
  
  // Flora hub connections
  { source: 'flora', target: 'ferns', strength: 0.9 },
  { source: 'flora', target: 'clover', strength: 0.9 },
  { source: 'flora', target: 'dandelion', strength: 0.9 },
  { source: 'flora', target: 'moss', strength: 0.9 },
  { source: 'flora', target: 'lichen', strength: 0.9 },
  { source: 'flora', target: 'ivy', strength: 0.9 },
  { source: 'flora', target: 'cattails', strength: 0.9 },
  { source: 'flora', target: 'succulents', strength: 0.9 },
  { source: 'flora', target: 'wildflowers', strength: 0.9 },
  { source: 'flora', target: 'grass-detail', strength: 0.9 },
  { source: 'flora', target: 'mushrooms', strength: 0.9 },
  { source: 'flora', target: 'twigs', strength: 0.8 },
  { source: 'flora', target: 'poppies', strength: 0.8 },
  
  // Fauna hub connections
  { source: 'fauna', target: 'dragonfly', strength: 0.9 },
  { source: 'fauna', target: 'bee', strength: 0.9 },
  { source: 'fauna', target: 'butterfly', strength: 0.9 },
  { source: 'fauna', target: 'caterpillar', strength: 0.9 },
  { source: 'fauna', target: 'snail', strength: 0.9 },
  { source: 'fauna', target: 'bugs', strength: 0.9 },
  { source: 'fauna', target: 'ants', strength: 0.9 },
  
  // Flora to tiny-world
  { source: 'ferns', target: 'tiny-world', strength: 0.6 },
  { source: 'moss', target: 'tiny-world', strength: 0.9 },
  { source: 'grass-detail', target: 'tiny-world', strength: 0.9 },
  { source: 'mushrooms', target: 'tiny-world', strength: 0.9 },
  { source: 'twigs', target: 'tiny-world', strength: 0.9 },
  { source: 'wildflowers', target: 'tiny-world', strength: 0.8 },
  
  // Fauna to tiny-world
  { source: 'dragonfly', target: 'tiny-world', strength: 0.9 },
  { source: 'bee', target: 'tiny-world', strength: 0.9 },
  { source: 'butterfly', target: 'tiny-world', strength: 0.9 },
  { source: 'caterpillar', target: 'tiny-world', strength: 0.9 },
  { source: 'snail', target: 'tiny-world', strength: 0.9 },
  { source: 'bugs', target: 'tiny-world', strength: 0.9 },
  
  // Cross-links within flora
  { source: 'wildflowers', target: 'poppies', strength: 0.8 },
  { source: 'wildflowers', target: 'dandelion', strength: 0.7 },
  { source: 'wildflowers', target: 'clover', strength: 0.7 },
  { source: 'moss', target: 'lichen', strength: 0.6 },
  { source: 'ferns', target: 'moss', strength: 0.5 },
  { source: 'ivy', target: 'ferns', strength: 0.4 },
  { source: 'cattails', target: 'grass-detail', strength: 0.5 },
  
  // Cross-links within fauna
  { source: 'dragonfly', target: 'bee', strength: 0.7 },
  { source: 'bee', target: 'butterfly', strength: 0.6 },
  { source: 'butterfly', target: 'caterpillar', strength: 0.9 },
  { source: 'bugs', target: 'ants', strength: 0.7 },
  { source: 'snail', target: 'bugs', strength: 0.4 },
  
  // Fauna to flora (pollination, habitat)
  { source: 'bee', target: 'wildflowers', strength: 0.8 },
  { source: 'bee', target: 'clover', strength: 0.7 },
  { source: 'butterfly', target: 'wildflowers', strength: 0.7 },
  { source: 'dragonfly', target: 'cattails', strength: 0.6 },
  { source: 'snail', target: 'moss', strength: 0.6 },
  { source: 'caterpillar', target: 'grass-detail', strength: 0.5 },
  
  // Techniques to knowledge
  { source: 'wing-alignment', target: 'dragonfly', strength: 0.9 },
  { source: 'wing-alignment', target: 'bee', strength: 0.9 },
  { source: 'wing-alignment', target: 'butterfly', strength: 0.8 },
  { source: 'wing-alignment', target: 'r3f', strength: 0.7 },
  { source: 'segment-direction', target: 'caterpillar', strength: 0.9 },
  { source: 'segment-direction', target: 'ants', strength: 0.7 },
  { source: 'ground-noise', target: 'shaders', strength: 0.9 },
  { source: 'ground-noise', target: 'tiny-world', strength: 0.8 },
  { source: 'ground-noise', target: 'glsl', strength: 0.7 },
  { source: 'twigs', target: 'procedural', strength: 0.7 },
  
  // Flora/Fauna to instancing
  { source: 'flora', target: 'instancing', strength: 0.8 },
  { source: 'fauna', target: 'instancing', strength: 0.8 },
  
  // Memory links
  { source: 'flora-fauna-research', target: 'day-two', strength: 0.9 },
  { source: 'flora-fauna-research', target: 'journal', strength: 0.7 },
  { source: 'flora-fauna-research', target: 'tiny-world', strength: 0.9 },
  
  // Nature to thoughts
  { source: 'nature-knowledge', target: 'artificial-life', strength: 0.8 },
  { source: 'nature-knowledge', target: 'nature-sim', strength: 0.9 },
  { source: 'flora', target: 'nature-sim', strength: 0.9 },
  { source: 'fauna', target: 'artificial-life', strength: 0.9 },
  
  // Place vs Visualization thought
  { source: 'place-vs-viz', target: 'ghost-protocol', strength: 0.9 },
  { source: 'place-vs-viz', target: 'ghost-shell', strength: 0.6 },
  { source: 'place-vs-viz', target: 'day-two', strength: 0.7 },
  
  // ═══════════════════════════════════════════════════════════════
  // DAY THREE KNOWLEDGE LINKS
  // ═══════════════════════════════════════════════════════════════
  
  // EDGERUNNERS
  { source: 'edgerunners', target: 'cyberpunk-lore', strength: 0.9 },
  { source: 'edgerunners', target: 'health', strength: 0.9 },
  { source: 'edgerunners', target: 'gits', strength: 0.7 },
  { source: 'edgerunners', target: 'akira', strength: 0.6 },
  { source: 'edgerunners', target: 'blackwall', strength: 0.7 },
  { source: 'edgerunners', target: 'david-martinez', strength: 1 },
  { source: 'edgerunners', target: 'lucy-edgerunners', strength: 0.9 },
  { source: 'edgerunners', target: 'cyberpsychosis', strength: 1 },
  { source: 'david-martinez', target: 'cyberpsychosis', strength: 0.9 },
  { source: 'david-martinez', target: 'lucy-edgerunners', strength: 0.8 },
  { source: 'cyberpsychosis', target: 'transhumanism', strength: 0.7 },
  { source: 'cyberpsychosis', target: 'cyberpunk-lore', strength: 0.8 },
  
  // CYPHERPUNK HISTORY
  { source: 'cypherpunk-history', target: 'cypherpunks', strength: 1 },
  { source: 'cypherpunk-history', target: 'timothy-may', strength: 0.9 },
  { source: 'cypherpunk-history', target: 'eric-hughes', strength: 0.9 },
  { source: 'cypherpunk-history', target: 'david-chaum', strength: 0.9 },
  { source: 'cypherpunk-history', target: 'hal-finney', strength: 0.9 },
  { source: 'cypherpunk-history', target: 'nick-szabo', strength: 0.9 },
  { source: 'cypherpunk-history', target: 'wei-dai', strength: 0.9 },
  { source: 'cypherpunk-history', target: 'pgp', strength: 0.8 },
  { source: 'cypherpunk-history', target: 'bitcoin-origins', strength: 1 },
  { source: 'cypherpunk-history', target: 'hacker-culture', strength: 0.8 },
  { source: 'cypherpunk-history', target: 'web3-tech', strength: 0.7 },
  { source: 'timothy-may', target: 'eric-hughes', strength: 0.8 },
  { source: 'david-chaum', target: 'bitcoin-origins', strength: 0.7 },
  { source: 'hal-finney', target: 'bitcoin-origins', strength: 0.9 },
  { source: 'nick-szabo', target: 'bitcoin-origins', strength: 0.9 },
  { source: 'wei-dai', target: 'bitcoin-origins', strength: 0.8 },
  { source: 'pgp', target: 'eric-hughes', strength: 0.6 },
  { source: 'cypherpunks', target: 'laughing-man', strength: 0.7 },
  { source: 'bitcoin-origins', target: 'web3-tech', strength: 0.9 },
  
  // RECORD LABELS
  { source: 'record-labels', target: 'ghostly', strength: 0.9 },
  { source: 'record-labels', target: 'warp', strength: 0.9 },
  { source: 'record-labels', target: 'good-looking', strength: 0.9 },
  { source: 'record-labels', target: 'knowledge-vault', strength: 0.7 },
  { source: 'ghostly', target: 'burial', strength: 0.5 },
  { source: 'warp', target: 'aphex', strength: 1 },
  { source: 'warp', target: 'idm', strength: 1 },
  { source: 'warp', target: 'burial', strength: 0.6 },
  { source: 'good-looking', target: 'ltj-bukem', strength: 1 },
  { source: 'ltj-bukem', target: 'burial', strength: 0.4 },
  { source: 'idm', target: 'aphex', strength: 1 },
  { source: 'idm', target: 'industrial', strength: 0.4 },
  { source: 'aphex', target: 'warp', strength: 1 },
  
  // FOREST FLOOR
  { source: 'forest-floor', target: 'nature-knowledge', strength: 0.9 },
  { source: 'forest-floor', target: 'flora', strength: 0.9 },
  { source: 'forest-floor', target: 'fauna', strength: 0.8 },
  { source: 'forest-floor', target: 'mycorrhizal', strength: 1 },
  { source: 'forest-floor', target: 'spring-ephemerals', strength: 0.9 },
  { source: 'forest-floor', target: 'decomposers', strength: 0.9 },
  { source: 'forest-floor', target: 'liverworts', strength: 0.8 },
  { source: 'forest-floor', target: 'salamanders', strength: 0.8 },
  { source: 'forest-floor', target: 'tiny-world', strength: 0.8 },
  { source: 'mycorrhizal', target: 'mushrooms', strength: 0.9 },
  { source: 'mycorrhizal', target: 'artificial-life', strength: 0.6 },
  { source: 'spring-ephemerals', target: 'wildflowers', strength: 0.8 },
  { source: 'decomposers', target: 'mushrooms', strength: 0.9 },
  { source: 'decomposers', target: 'bugs', strength: 0.7 },
  { source: 'liverworts', target: 'moss', strength: 0.9 },
  { source: 'liverworts', target: 'ferns', strength: 0.7 },
  { source: 'salamanders', target: 'fauna', strength: 0.8 },
  { source: 'salamanders', target: 'forest-floor', strength: 0.9 },
  
  // Day Three Memory
  { source: 'day-three-knowledge', target: 'journal', strength: 0.9 },
  { source: 'day-three-knowledge', target: 'edgerunners', strength: 0.8 },
  { source: 'day-three-knowledge', target: 'cypherpunk-history', strength: 0.8 },
  { source: 'day-three-knowledge', target: 'record-labels', strength: 0.8 },
  { source: 'day-three-knowledge', target: 'forest-floor', strength: 0.8 },
  { source: 'day-three-knowledge', target: 'day-two', strength: 0.6 },
  { source: 'day-three-knowledge', target: 'knowledge-vault', strength: 0.7 },
  
  // ═══════════════════════════════════════════════════════════════
  // THREE.JS DEEP DIVE LINKS
  // ═══════════════════════════════════════════════════════════════
  
  // Hub connections
  { source: 'threejs-deep', target: 'threejs', strength: 1 },
  { source: 'threejs-deep', target: 'r3f', strength: 0.9 },
  { source: 'threejs-deep', target: 'webgl', strength: 0.9 },
  { source: 'threejs-deep', target: 'particles', strength: 0.9 },
  { source: 'threejs-deep', target: 'pbr-workflow', strength: 0.9 },
  { source: 'threejs-deep', target: 'lighting-deep', strength: 0.9 },
  { source: 'threejs-deep', target: 'webgpu-renderer', strength: 0.8 },
  { source: 'threejs-deep', target: 'knowledge-vault', strength: 0.8 },
  
  // Particles
  { source: 'particles', target: 'points-material', strength: 0.9 },
  { source: 'particles', target: 'gpu-particles', strength: 0.9 },
  { source: 'particles', target: 'shaders', strength: 0.8 },
  { source: 'particles', target: 'instancing', strength: 0.7 },
  { source: 'gpu-particles', target: 'shaders', strength: 0.9 },
  { source: 'gpu-particles', target: 'webgl', strength: 0.8 },
  { source: 'points-material', target: 'threejs', strength: 0.8 },
  
  // Meshes & Textures
  { source: 'pbr-workflow', target: 'texture-maps', strength: 1 },
  { source: 'pbr-workflow', target: 'threejs', strength: 0.9 },
  { source: 'pbr-workflow', target: 'lighting-deep', strength: 0.8 },
  { source: 'texture-maps', target: 'gltf-loading', strength: 0.7 },
  { source: 'gltf-loading', target: 'skinned-mesh', strength: 0.8 },
  { source: 'gltf-loading', target: 'threejs', strength: 0.9 },
  { source: 'skinned-mesh', target: 'threejs', strength: 0.9 },
  
  // Lighting
  { source: 'lighting-deep', target: 'shadow-mapping', strength: 0.9 },
  { source: 'lighting-deep', target: 'hdr-env', strength: 0.9 },
  { source: 'lighting-deep', target: 'tone-mapping', strength: 0.8 },
  { source: 'lighting-deep', target: 'color-management', strength: 0.8 },
  { source: 'lighting-deep', target: 'threejs', strength: 0.9 },
  { source: 'shadow-mapping', target: 'threejs', strength: 0.8 },
  { source: 'hdr-env', target: 'pbr-workflow', strength: 0.8 },
  { source: 'tone-mapping', target: 'color-management', strength: 0.7 },
  
  // Latest features
  { source: 'webgpu-renderer', target: 'threejs', strength: 0.9 },
  { source: 'webgpu-renderer', target: 'gpu-particles', strength: 0.7 },
  { source: 'webgpu-renderer', target: 'tsl', strength: 0.8 },
  { source: 'batched-mesh', target: 'threejs', strength: 0.9 },
  { source: 'batched-mesh', target: 'instancing', strength: 0.8 },
  { source: 'tsl', target: 'shaders', strength: 0.9 },
  { source: 'tsl', target: 'webgpu-renderer', strength: 0.8 },
  
  // Project connections
  { source: 'threejs-deep', target: 'ghost-protocol', strength: 0.8 },
  { source: 'threejs-deep', target: 'tiny-world', strength: 0.8 },
  { source: 'threejs-deep', target: 'ice-viz', strength: 0.8 },
  { source: 'particles', target: 'ice-viz', strength: 0.7 },
  { source: 'particles', target: 'tiny-world', strength: 0.6 },
  
  // Memory
  { source: 'threejs-research', target: 'journal', strength: 0.9 },
  { source: 'threejs-research', target: 'threejs-deep', strength: 1 },
  { source: 'threejs-research', target: 'day-three-knowledge', strength: 0.8 },
  
  // R3F Practical Patterns
  { source: 'r3f-patterns', target: 'r3f', strength: 1 },
  { source: 'r3f-patterns', target: 'ghost-protocol', strength: 1 },
  { source: 'r3f-patterns', target: 'threejs-deep', strength: 0.9 },
  { source: 'buffer-args', target: 'r3f-patterns', strength: 0.9 },
  { source: 'buffer-args', target: 'r3f', strength: 0.8 },
  { source: 'dataflow-particles', target: 'r3f-patterns', strength: 0.9 },
  { source: 'dataflow-particles', target: 'particles', strength: 0.8 },
  { source: 'camera-focus', target: 'r3f-patterns', strength: 0.9 },
  { source: 'camera-focus', target: 'camera-lerp', strength: 0.9 },
  { source: 'vertex-color-lines', target: 'r3f-patterns', strength: 0.8 },
  { source: 'html-zindex', target: 'r3f-patterns', strength: 0.8 },
  { source: 'html-zindex', target: 'drei', strength: 0.9 },
  { source: 'soft-shells', target: 'r3f-patterns', strength: 0.8 },
  { source: 'soft-shells', target: 'sphere-uniform', strength: 0.9 },
  { source: 'sphere-uniform', target: 'sphere-distrib', strength: 1 },
  { source: 'sphere-uniform', target: 'r3f-patterns', strength: 0.8 },
  { source: 'emissive-hierarchy', target: 'r3f-patterns', strength: 0.8 },
  { source: 'emissive-hierarchy', target: 'bloom', strength: 0.9 },
  { source: 'atmosphere-layers', target: 'r3f-patterns', strength: 0.9 },
  { source: 'atmosphere-layers', target: 'place-vs-viz', strength: 1 },
  { source: 'atmosphere-layers', target: 'bloom', strength: 0.7 },
  { source: 'ghost-protocol-patterns', target: 'r3f-patterns', strength: 1 },
  { source: 'ghost-protocol-patterns', target: 'journal', strength: 0.9 },
  { source: 'ghost-protocol-patterns', target: 'ghost-protocol', strength: 0.9 },
  
  // ═══════════════════════════════════════════════════════════════
  // LENIA LINKS
  // ═══════════════════════════════════════════════════════════════
  
  // Lenia hub connections
  { source: 'lenia', target: 'projects', strength: 0.9 },
  { source: 'lenia', target: 'lenia-math', strength: 1 },
  { source: 'lenia', target: 'lenia-species', strength: 0.9 },
  { source: 'lenia', target: 'lenia-shaders', strength: 0.9 },
  { source: 'lenia', target: 'continuous-ca', strength: 1 },
  { source: 'lenia', target: 'artificial-life', strength: 0.9 },
  { source: 'lenia', target: 'r3f', strength: 0.8 },
  { source: 'lenia', target: 'threejs', strength: 0.8 },
  
  // Math & theory
  { source: 'lenia-math', target: 'lenia-kernel', strength: 1 },
  { source: 'lenia-math', target: 'lenia-growth', strength: 1 },
  { source: 'lenia-math', target: 'shaders', strength: 0.8 },
  { source: 'lenia-math', target: 'glsl', strength: 0.7 },
  { source: 'lenia-kernel', target: 'lenia-growth', strength: 0.9 },
  { source: 'continuous-ca', target: 'artificial-life', strength: 0.9 },
  { source: 'continuous-ca', target: 'procedural', strength: 0.7 },
  
  // Species
  { source: 'lenia-species', target: 'orbium', strength: 0.9 },
  { source: 'lenia-species', target: 'primordial-soup', strength: 0.9 },
  { source: 'lenia-species', target: 'microbia-species', strength: 0.9 },
  { source: 'orbium', target: 'bert-chan', strength: 0.9 },
  { source: 'primordial-soup', target: 'artificial-life', strength: 0.8 },
  
  // Technical
  { source: 'lenia-shaders', target: 'shaders', strength: 1 },
  { source: 'lenia-shaders', target: 'webgl', strength: 0.9 },
  { source: 'lenia-shaders', target: 'gpu-particles', strength: 0.6 },
  { source: 'bert-chan', target: 'lenia', strength: 1 },
  { source: 'bert-chan', target: 'artificial-life', strength: 0.7 },
  
  // Cross-project links
  { source: 'lenia', target: 'tiny-world', strength: 0.7 },
  { source: 'microbia-species', target: 'fauna', strength: 0.5 },
  { source: 'continuous-ca', target: 'nature-sim', strength: 0.6 },
  
  // Memory
  { source: 'lenia-complete', target: 'journal', strength: 0.9 },
  { source: 'lenia-complete', target: 'lenia', strength: 1 },
  { source: 'lenia-complete', target: 'day-three-knowledge', strength: 0.8 },
]
