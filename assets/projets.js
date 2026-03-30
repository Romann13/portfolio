window.PROJETS = [
  {
    "titre": "Système de Monitoring Industriel",
    "sousTitre": "Partenariat Thales Alenia Space",
    "description": "CONTEXTE & OBJECTIF : Automatiser la documentation visuelle d'un banc d'essai spatial pour garantir l'intégrité des tests.\n\nACTIONS : Conception d'une architecture hybride Raspberry Pi / Pico, développement d'un serveur web (PHP/JS) avec base de données SQL, et intégration d'un système d'éclairage LED piloté par code.\n\nRÉSULTATS : Solution fonctionnelle permettant une capture instantanée, un archivage sécurisé par rôles et une consultation fluide de l'historique.\n\nPREUVES : Rapport technique et support de présentation.",
    "technos": ["IoT", "Raspberry Pi", "PHP", "SQL", "Python", "Gestion de Projet"],
    "liens": [
      { "label": "Rapport Technique", "url": "./projets/rapport_thales.pdf" },
      { "label": "Présentation", "url": "./projets/diapo_thales.pdf" }
    ]
  },
  {
    "titre": "Ingénierie Réseau d'Entreprise",
    "sousTitre": "Architecture et Segmentation Sécurisée",
    "description": "CONTEXTE & OBJECTIF : Concevoir l'infrastructure réseau complète d'une PME pour isoler les flux et sécuriser les données.\n\nACTIONS : Simulation sur Cisco Packet Tracer, segmentation par VLANs, configuration du routage inter-VLAN, mise en place des services DHCP/DNS et sécurisation via NAT statique/dynamique.\n\nRÉSULTATS : Un réseau performant avec une séparation nette des services (DMZ, Admin, Employés) et une connectivité internet optimisée.\n\nPREUVES : Schéma d'architecture et rapport de configuration.",
    "technos": ["Cisco Packet Tracer", "VLANs", "Routage", "NAT/PAT", "Services IP"],
    "liens": [
      { "label": "Rapport de Configuration", "url": "./projets/rapport_SAE21.pdf" },
      { "label": "Schéma Architecture", "url": "./projets/shema_sae21.png" }
    ]
  },
  {
    "titre": "Audit Technique et Test d'Intrusion",
    "sousTitre": "Pentest d'Infrastructure Critique",
    "description": "CONTEXTE & OBJECTIF : Identifier et exploiter les vulnérabilités d'une infrastructure pour en évaluer la résilience.\n\nACTIONS : Reconnaissance réseau, scans de vulnérabilités, exploitation de failles Samba, élévation de privilèges via Sudo et pivotement entre réseaux internes via Docker.\n\nRÉSULTATS : Identification de vecteurs d'attaque majeurs et rédaction d'un rapport technique détaillant les méthodes de remédiation.\n\nPREUVES : Rapport d'audit offensif détaillé.",
    "technos": ["Kali Linux", "Metasploit", "Docker", "Samba", "Audit Offensif"],
    "liens": [
      { "label": "Rapport de Pentest", "url": "./projets/Rapport_Pentest_CASANOVA.pdf" }
    ]
  },
  {
    "titre": "Pilotage et Management de Projet IT",
    "sousTitre": "Méthodologie et Gouvernance de Projet",
    "description": "CONTEXTE & OBJECTIF : Structurer et encadrer un projet de cybersécurité complexe selon les standards professionnels.\n\nACTIONS : Rédaction du Plan de Management de Projet (PMP), analyse des risques (SWOT), planification des ressources, contrôle qualité et stratégie de communication.\n\nRÉSULTATS : Garantie de la traçabilité des actions, respect des contraintes de temps et livraison de documents conformes aux attentes clients.\n\nPREUVES : Plan de Management de Projet complet.",
    "technos": ["PMP", "Gestion des risques", "Planification", "Qualité & Audit"],
    "liens": [
      { "label": "Plan de Management", "url": "./projets/Plan de Management de Projet.pdf" }
    ]
  },
  {
    "titre": "Administration & Automatisation Windows Server",
    "sousTitre": "Gestion de Parc via Scripts PowerShell",
    "description": "CONTEXTE & OBJECTIF : Optimiser la gestion des comptes Active Directory au sein d'un environnement Windows Server 2025.\n\nACTIONS : Développement de scripts PowerShell pour l'automatisation (création/suppression/archivage), configuration des droits NTFS et mise en place de logging horodaté.\n\nRÉSULTATS : Automatisation complète du cycle de vie des utilisateurs, élimination des erreurs de saisie et sécurisation accrue des dossiers personnels.\n\nPREUVES : Rapport technique et scripts sources (ZIP).",
    "technos": ["PowerShell", "Active Directory", "Windows Server 2025", "Sécurité NTFS"],
    "liens": [
      { "label": "Rapport Technique", "url": "./projets/CASANOVA_Romann_TP-R405.pdf" },
      { "label": "Scripts & Sources (ZIP)", "url": "./projets/CASANOVA_TP-R405.zip" }
    ]
  },
  {
    "titre": "Déploiement Réseau Interplanétaire",
    "sousTitre": "Architecture Complexe Ares-Net",
    "description": "CONTEXTE & OBJECTIF : Concevoir une infrastructure multisite sécurisée (Terre/Mars) résistante aux interceptions.\n\nACTIONS : Simulation sur GNS3, configuration de Trunks 802.1Q, routage Router-on-a-stick et mise en place de services DHCP centralisés.\n\nRÉSULTATS : Architecture isolée par VLANs empêchant les interceptions pirates et assurant une connectivité robuste entre les bases.\n\nPREUVES : Compte-rendu technique de déploiement.",
    "technos": ["GNS3", "VMware", "VLAN", "Routage", "Analyse Wireshark"],
    "liens": [
      { "label": "Compte-rendu Réseau", "url": "./projets/TP_KATO_CASANOVA-Romann__JUILLET-Etienne.docx.pdf" }
    ]
  },
  {
    "titre": "Expertise Cyberattaque Banque de France",
    "sousTitre": "Analyse Post-Incident et Remédiation",
    "description": "CONTEXTE & OBJECTIF : Analyser le mode opératoire d'une intrusion réelle pour définir des stratégies de défense.\n\nACTIONS : Étude du vecteur d'attaque (Phishing Near2tlg), analyse des impacts sur les données sensibles et évaluation des mesures de réponse.\n\nRÉSULTATS : Rédaction de préconisations stratégiques sur le renforcement des infrastructures et la sensibilisation des utilisateurs.\n\nPREUVES : Dossier d'analyse post-incident.",
    "technos": ["Analyse de Risques", "Cybersécurité", "Social Engineering"],
    "liens": [
      { "label": "Dossier d'Analyse", "url": "./projets/presentation_cyber_attaque.pdf" }
    ]
  },
  {
    "titre": "Caractérisation de Supports de Transmission",
    "sousTitre": "Étude Fréquentielle du Câble Coaxial",
    "description": "CONTEXTE & OBJECTIF : Déterminer les performances physiques d'un support de transmission haute fréquence.\n\nACTIONS : Mesures expérimentales d'atténuation, modélisation mathématique de la propagation et analyse de l'historique technologique.\n\nRÉSULTATS : Établissement de la loi d'atténuation précise et validation des limites d'utilisation du support.\n\nPREUVES : Rapport d'expertise scientifique.",
    "technos": ["Électronique HF", "Mesures Physiques", "Analyse de Données"],
    "liens": [
      { "label": "Rapport d'Étude", "url": "./projets/CASANOVA_initiales romann-SAE13-Rapport.pdf" }
    ]
  },
  {
    "titre": "Stratégie de Carrière & Veille Métier",
    "sousTitre": "Roadmap vers l'Expertise Réseau & Cyber",
    "description": "CONTEXTE & OBJECTIF : Aligner mon parcours académique avec les réalités du marché de l'emploi IT.\n\nACTIONS : Étude des métiers (Architecte, Chef de projet), identification des certifications cibles et bilan de compétences personnelles.\n\nRÉSULTATS : Planification structurée de mon parcours professionnel et identification des leviers de croissance en BUT2/3.\n\nPREUVES : Dossier de projet professionnel.",
    "technos": ["Gestion de Projet", "Soft Skills", "Veille Technologique"],
    "liens": [
      { "label": "Dossier PPP", "url": "./projets/Projet Personnel.pdf" }
    ]
  }
];