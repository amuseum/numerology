// (c) 2020 Sally Faubion 
// http://www.sallysnumbers.com

var meaning = {

	master: 'Maître-Nombre',

	destiny: {
		title: "Destin",
	    description: "C'est le chiffre le plus influent par rapport à vos motivations personnelles, à ce que vous aimez et à qui vous aimez dans votre environnement et à la ou aux carrières auxquelles vous êtes le plus susceptible d'aspirer.",
	    func: "Mois + Jour + Année",
        1: "C'est la voie du preneur de risque, de l'entrepreneur, du pionnier totalement indépendant.",
        2: "C'est le chemin de la femme au foyer, du joueur d'équipe, du gardien et du collectionneur.",
        3: "C'est le chemin de l'aventureux, créatif, proverbial \"Peter Pan\", et / ou du scientifique discipliné \"Dapper Dan / Danielle\".",
        4: "C'est le chemin de l'employé / entrepreneur travailleur, dévoué, franc et ami fidèle et généreux.",
        5: "C'est le chemin du combattant de la liberté énergisé, du promoteur et de l'élégant, socialement adepte / voyageur du monde.",
        6: "C'est le chemin du bon citoyen, enseignant patient, champion de l'équité et de la justice, et parent cosmique de tous.",
        7: "C'est le chemin du savant, du perfectionniste, du génie et du gardien des secrets.",
        8: "C'est le chemin de la matriarche / patriarche, du juge, du producteur / réalisateur, de l'orchestrateur et de l'acte de classe.",
        9: "C'est le chemin de la \"vieille âme\" aristocratique et distinguée, et de l'humanitaire universel.",
        11: "C'est le chemin du conseiller / conseiller intuitif, du pacificateur et de la personnalité publique éclairée.",
        22: "C'est le chemin du visionnaire éclairé, prudent, organisé, déterminé et inspirant.",
    },
	"personality": {
		title: "Personnalité",
		description: "Ce chiffre décrit vos coulisses ou le vous privé.",
		func: "Jour",
		1: "Vous êtes dynamique, volontaire et un leader naturel, et votre concentration unique prépare le terrain pour votre succès.",
		2: "Vous êtes un artisan de la paix, nourricier, attentionné et gentil, et un ami, un compagnon, un employé ou un patron indispensable.",
		3: "Vous êtes incroyablement créatif, imaginaire et divertissant, et un hôte ou une hôtesse superlatif.",
		4: "Vous êtes un travailleur dévoué, soucieux du détail et infatigable, et votre parole vaut autant que l'or.",
		5: "Votre nature intelligente, enthousiaste et gentille inspire et motive tous ceux qui vous connaissent.",
		6: "Vous êtes responsable, orienté vers l'humain et un amoureux de la beauté, de la nature et de la maison.",
		7: "Vous êtes analytique, orienté vers la recherche et votre quête de connaissances est vaste et inextinguible.",
		8: "Vous êtes un opérateur ambitieux, organisé, de qualité, né pour être un leader avec un penchant pour le protocole et la justice.",
		9: "Vous êtes polyvalent, créatif et compétent et vous êtes dans votre vrai caractère lorsque vous êtes au service des autres.",
		10: "Vous êtes indépendant, prévenant et responsable avec un caractère de prise en charge; et une attitude optimiste qui trouve le positif dans n'importe quelle situation. ",
		11: "Vous êtes sensible, intelligent, original, inspirant, bon auditeur et assumez naturellement le rôle de \"grandes épaules\" pour beaucoup.",
		12: "Vous êtes charmant, aimable et créatif et votre forte détermination et votre clairvoyance vous aident à manifester vos objectifs.",
		13: "Vous êtes astucieux, indépendant, terre-à-terre et franc, et votre dévouement, votre ténacité et votre endurance face à tout concept, circonstance ou entreprise sont extraordinaires. ",
		14: "Vous êtes un réservoir d'énergie avec un esprit de piège en acier qui produit constamment de nouvelles idées et des concepts et solutions créatifs et pratiques.",
		15: "Votre esprit indépendant, créatif, artistique / scientifique a soif de rechercher et d'analyser de vastes tableaux de sujets et de défendre l'équité et la justice.",
		16: "Votre esprit analytique et intellectuel unique a besoin de périodes de temps seul pour trier votre soif infinie de connaissances et dépasser les limites acceptées dans cette quête.",
		17: "Vous êtes intelligent, ambitieux, courageux, possédez assez d'énergie et de vitalité pour diriger un pays, et vous êtes l'acte de classe par excellence!",
		18: "Vous êtes une puissance aux multiples talents de sagesse, de force, de courage et de compassion de grande portée, qui fait de votre mieux pour aider ceux qui en ont besoin.",
		19: "Votre nature aventureuse vous fait aspirer à la variété et au changement, mais une fois inspiré, vous pouvez aussi être un employé, un patron, un compagnon et un ami tenace, dévoué et honorable.",
		20: "Votre nature chaleureuse, serviable et prudente est appréciée dans n'importe quel environnement de travail et vous rassemblerez et retiendrez de nombreux amis tout au long de votre vie.",
        21: "Vous êtes de bonne humeur, optimiste, inspirant et généreux. Vous êtes attiré par tout ce qui concerne la beauté, la qualité et le divertissement, et votre propre créativité peut vous mettre sous les feux de la rampe. ",
        22: "Vous faites preuve d'une discipline, d'une énergie, d'une logique et d'une sensibilité extraordinaires et vous avez l'esprit d'un visionnaire magistral, éclairé et entreprenant.",
        23: "Vous possédez un esprit nourricier, aimant s'amuser et axé sur la liberté et votre esprit vif, votre originalité et votre intellect produisent régulièrement des idées et des plans intelligents et uniques.",
        24: "Vous êtes charmant, sociable, spirituel et plus amoureux que combattant. Votre nature consciencieuse et généreuse a tendance à toujours faire \"un effort supplémentaire\", et vous êtes un ami et un compagnon honorables. ",
        25: "Vous êtes spirituel et sage, et vous vous interrogez sur tout. Votre réservoir de sagesse innée et de nature hautement compatissante et généreuse donne naissance à votre sens inné de responsabilité envers l'humanité en général. ",
        26: "Votre personnalité est comme celle d'un général cinq étoiles - inébranlable et aux commandes avec un penchant pour le protocole. Votre \"sixième sens\" vous permet de comprendre facilement le bien du mal et de donner un exemple exemplaire aux autres. ",
        27: "Comme le vieux roi Cole, vous êtes une \"vieille âme\", et vous possédez une vaste connaissance innée et une perspicacité extraordinaire. Les voyages et le changement sont essentiels à votre bien-être. ",
        28: "Vous êtes charmant, indépendant, diplomate né, et votre caractère est celui d'un réalisateur et d'un leader. Vos idéaux et principes élevés vous permettent d'atteindre vos objectifs. ",
        29: "Votre nature douce et sensible est complétée par une combinaison d'énergie et de charisme qui attire les gens vers vous comme un aimant. Vous possédez un \"sixième sens\" qui vous permet d'aider ceux qui recherchent vos \"grandes épaules\". ",
        30: "Vous êtes intelligent, créatif, aimant s'amuser et doté d'un grand sens de l'humour, et d'un talent exceptionnel lorsque vous êtes impliqué dans une entreprise créative. Votre nature socialement apte vous permet de vous démarquer parmi les nombreux. ",
        31: "Vous êtes créatif, innovant et possédez une grande quantité de connaissances. Consciencieux, fiable et opportun, vous êtes également une créature d'habitude et pouvez être un compagnon et un ami dévoué. ",
    },
	attitude: {
		title: "Attitude",
		description: "Ce nombre est le plus puissant au cours des 30 à 35 premières années de votre vie et représente le comment et le pourquoi vous réagissez aux circonstances de votre jeunesse.",
		func: "Mois + Jour",
		1: "Vous êtes né avec une forte volonté et une nature indépendante. Vous préférez faire vos propres choix et êtes têtu lorsque vous êtes poussé dans une direction différente. ",
		2: "Vous êtes né pour être un enfant et un jeune adulte doux, doux, gentil et attentionné. Vous aimez nourrir et être nourri et êtes perspicace et sensible. ",
		3: "Vous êtes né un peu timide mais une fois que vous apprenez à parler, vous pouvez devenir un artiste naturel, aventureux et captivant.",
		4: "Vous êtes né avec un tempérament sensible et têtu, mais vous pouvez être très doux et respectueux lorsque vous êtes félicité et encouragé. ",
		5: "Vous êtes né avec une énergie débordante! Vous avez besoin d'une stimulation mentale et physique constante et votre tempérament s'enflamme lorsque vous êtes impatient. ",
		6: "Vous êtes né pour être responsable, consciencieux, attentionné, gentil et attentionné envers tout le monde, en particulier vos parents, vos frères et sœurs, vos amis et toutes les choses de la nature.",
		7: "Vous êtes né avec un esprit brillant qui a besoin de temps pour se livrer à votre quête de connaissances et de vastes intérêts et intrigues.",
		8: "Vous êtes né pour être exemplaire dans tout ce que vous faites; qui provient de votre besoin de vous sentir en contrôle. Vous êtes un \"élève hétéro\" lorsque vous êtes encouragé. ",
		9: "Vous êtes né très jeune avec une sensibilité plus adulte. Les louanges et les encouragements de vos proches alimentent vos réalisations. ",
		11: "Vous êtes né super sensible; très intuitif, noble et amateur de musique; douce, douce et cérébrale lorsqu'elle est inspirée, vous êtes une matière vedette. ",
		22: "Vous êtes né avec une tendance obstinée, mais avec des encouragements, vous pouvez être un homme très déterminé, entreprenant, inspiré et ingénieux.",
	},
	character: {
		//title: "Character",
		title: "Personnage",
		description: "Ce nombre représente principalement vos qualités publiques et sociales, mais vous afficheriez également une grande partie de la même chose dans vos relations personnelles.",
		func: "Lettres",
		1: "Posséder un esprit original et innovant, avec une concentration constante sur vos objectifs, vous qualifie de leader.",
		2: "Étant naturellement diplomate, bon enfant et pacificateur, votre personnalité publique est comme celle d'un ambassadeur du peuple.",
		3: "Vos capacités optimistes, enthousiastes et créatives vous donnent la capacité d'engager, d'inspirer et de divertir les autres dans n'importe quel type de travail que vous choisissez.",
		4: "Votre personnalité publique consciencieuse, organisée, systématique et fiable fait de vous un travailleur-abeille recherché ou un président du conseil d'administration.",
		5: "Votre nature charmante, articulée, flexible et soucieuse de votre style fait de vous un pionnier qui peut engager et inspirer beaucoup de monde lorsqu'il est concentré sur une mission",
		6: "En tant que parent / enseignant / être humain né humanitaire, orienté vers la communauté et exceptionnel, qui \"fait toujours un effort supplémentaire\", vous êtes un comité exemplaire ou un leader de cause.",
		7: "En tant que génie philosophiquement avant-gardiste et à la recherche de connaissances, vous ne recherchez pas les feux de la rampe, mais vous êtes des enseignants, des professeurs et des spécialistes de carrière exceptionnels.",
		8: "Votre maître d'enseignants, votre juge / jury, votre personnage de producteur / réalisateur, exemplaire et exemplaire, possède un sixième sens qui vous permet de distinguer facilement le bien du mal en quoi que ce soit.",
		9: "En tant que sage né, aristocratique, humanitaire socialement agréable, vous vous dirigez vers la communauté qui peut le plus bénéficier de votre mission de \"serveur désintéressé\".",
		11: "En tant que conseiller ou leader communautaire empathique, éclairé et compréhensif, vous êtes sous les feux de la rampe; le 11 est associé à la renommée et à l'illumination. ",
		22: "En tant que bâtisseur d'empires à l'esprit élevé et organisateur à orientation spirituelle, vous êtes le mieux placé pour aider les causes publiques et les entreprises qui apprécient votre style dévoué et franc.",
	},
	soul: {
		title: "Envie d'âme",
		description: "Cette influence présente une vue de votre moi intuitif et émouvant.",
		func: "Voyelles",
		1: "L'envie de votre âme est d'être innovante, créative et de conduire les masses vers un domaine supérieur de conscience et de compréhension qui engendre la compassion pour tous.",
		2: "Le désir de votre âme est de réaliser la paix, l'harmonie et la finesse pour apporter de plus grandes qualités nourricières et aimantes à ceux que vous connaissez et réconfortez.",
		3: "Le désir de votre âme est d'apporter de la JOIE, de l'enthousiasme, de la passion et de susciter l'imagination des autres avec de la créativité et des concepts et des intérêts réconfortants.",
		4: "Le désir de votre âme est de livrer honnêteté, fiabilité, praticité et détermination pour aider les autres et vous-même à atteindre des résultats inspirants et éclairants.",
		5: "Le désir de votre âme est d'utiliser votre énergie abondante, votre ouverture d'esprit et vos attributs mentaux progressifs pour aider à apporter des contributions élevées à l'humanité.",
		6: "Le désir de votre âme est d'être responsable, consciencieux, attentionné et gentil envers tout un chacun, et d'enseigner, de conseiller et de réconforter pour maintenir ces qualités vous-même.",
		7: "Le désir de votre âme est d'utiliser votre nature analytique, axée sur la recherche et interrogative pour découvrir ou découvrir quelque chose de significatif qui aidera le plus grand nombre, par opposition à quelques-uns.",
		8: "Le désir de votre âme est d'apporter de la qualité, de la cohérence et de l'inspiration aux autres et de réaliser votre finesse naturelle et la qualité de votre contact. ",
		9: "Le désir de votre âme est d'utiliser vos qualités aristocratiques, gentiles et humaines avec cohérence, ce qui aidera à préparer le terrain pour que les autres imitent.",
		11: "Le désir de votre âme est d'apporter la paix, l'harmonie, la beauté et l'honorabilité comme exemples de vos plus hautes qualités spirituelles pour que tous les apprécient et, espérons-les, imitent.",
		22: "Le désir de votre âme est celui d'un \"Maître Constructeur\", celui dont le désir profond est d'aider et de servir l'humanité et la terre avec une grande intelligence et un sens humanitaire.",
	},
	agenda: {
		title: "Agenda caché",
		description: "Cette vibration offre vos désirs innés (cachés).",
		func: "Consonnes",
		1: "Cet agenda suscite un désir inné d'être indépendant, de diriger, d'innover et de créer des concepts et des choses originaux et uniques.",
		2: "Cet agenda fait naître le désir inné de vivre la vie dans la paix et l'harmonie, avec une nature non agressive, coopérative et sympathique pour tous.",
		3: "Cet agenda inspire un désir inné d'être plus créatif, divertissant et de parcourir le monde, offrant plus de plaisir et de joie à tous ceux qui s'engagent avec votre personnalité édifiante.",
		4: "Cet agenda implique logique, organisation et persévérance pour manifester les besoins innés, les désirs et la tranquillité d'esprit que vous hébergez et détenez.",
		5: "Cet agenda inspire un désir inné de liberté plus que toute autre chose, tout en acquérant la capacité de voyager et de vivre autant que possible sans retenue.",
		6: "Cet agenda a une forte orientation humanitaire innée - aider et prendre soin de toutes les choses de la terre - les humains, les animaux et la belle terre elle-même.",
		7: "Cet agenda provoque une soif innée d'acquérir des connaissances associées aux sciences (ésotériques ou non), aux philosophies, aux arts et à la spiritualité.",
		8: "Cet agenda exprime un désir inné de pouvoir, d'acclamer et d'amasser d'énormes sommes d'argent, ou d'être un enseignant éclairé des masses.",
		9: "Cet agenda affecte un désir inné d'atteindre le meilleur de tout, des vêtements et voitures aux divertissements, ou un besoin démesuré de vivre une vie entièrement humanitaire sans une pensée pour soi.",
		11: "Cet agenda suscite un besoin inné de servir, de conseiller ou de participer aux arts de la guérison d'une manière qui aide le plus grand nombre, ou de se faire connaître pour vos services humanitaires.",
		22: "Cet agenda inspire un désir inné de faire quelque chose de grand pour l'humanité. Ce Maître-Nombre vous donne la possibilité de gravir les plus hautes montagnes ou d'inventer un produit ou une philosophie exemplaire.",
	},
	purpose: {
		title: "Dessein Divin",
		description: "C'est la vibration de votre chiffre de performance divine. C'est ce que votre Moi spirituel a choisi d'accomplir dans vos dernières années de vie. ",
		func: "Destin + Personnage",
		1: "Votre but divin est de laisser derrière vous un héritage de quelque chose que vous avez lancé - un concept, un produit, une fondation. ",
		2: "Votre but divin est d'apporter la paix, le confort et l'harmonie à vos semblables.",
		3: "Votre but divin est d'utiliser vos talents créatifs et imaginatifs pour produire un produit, une idée, un livre, un film ou une autre forme d'expression artistique.",
		4: "Votre but divin est de construire une fondation stable qui aide les gens et qui a un objectif humanitaire.",
		5: "Votre but divin est d'aider à effectuer des changements progressifs qui améliorent la vie des générations futures.",
		6: "Votre but divin est d'enseigner, d'inciter et d'aider les causes humanitaires, de prendre soin de la maison et de la famille et d'être socialement responsable.",
		7: "Votre but divin est de transmettre la vaste connaissance que vous avez acquise dans une science, un art, une philosophie ou une religion à travers un effort créatif.",
		8: "Votre but divin est de diriger, diriger, initier et inciter en tant que leader ou exécutif, et d'aider les moins fortunés par la philanthropie.",
		9: "Votre but divin est d'être un humanitaire universel - un bon parent, un bon compagnon et un bon citoyen; un philanthrope, un ministre, un homme politique - travaillant pour le bien de l'humanité. ",
		11: "Votre but divin est d'aider les gens sur les plans spirituel, psychologique et mental. Pour élever les autres avec des paroles de sagesse; écouter, conseiller et aider les autres à avancer dans leur vie. ",
		22: "Votre but divin est d'organiser et de construire; pour maintenir une entreprise commerciale qui offre du travail aux autres et aide les gens par le service à la communauté et peut-être dans le monde entier. ",
	},
}
