console.log("script.js is connected!");

// --- CONTENT TEAM DATA ---

const ahnikItems = [
    {
        id: 'puja',
        name: 'Puja',
        lyrics: `Daily Nitya Puja Sequence:

1. Dhyan & Mansi Puja
2. Tilak-Chandlo
3. Ahwan Mantra:
4. Swaminarayan Mantra Jap
5. Tapni Mala & Pradakshina
6. Dandvat Pranam
7. Reading Vachanamrut / Swamini Vato
8. Punah Agaman Mantra`
    },
    {
        id: 'aarti',
        name: 'Aarti',
        lyrics: `Jay Swāminārāyaṇ, jay Akṣharpuruṣhottam,

Akṣharpuruṣhottam jay, darshan sarvottam... Jay Swāminārāyaṇ... ṭek

Mukta anant supūjit, sundar sākāram,

Sarvoparī karuṇākar, mānav tanudhāram... Jay Swāminārāyaṇ... 1.

Puruṣhottam Parabrahma, Shrīhari Sahajānand,

Akṣharbrahma anādi, Guṇātītānand... Jay Swāminārāyaṇ...2.

Prakaṭ sadā sarvakartā, param muktidātā,

Dharma ekāntik sthāpak, bhakti paritrātā..... Jay Swāminārāyaṇ... 3.

Dāsbhāv divyatā sah, brahmarūpe prīti,

Suhṛudbhāv alaukik, sthāpit shubh rīti... Jay Swāminārāyaṇ... 4.

Dhanya dhanya mam jīvan, tav sharaṇe sufalam,

Yagnapuruṣh pravartit siddhāntam sukhadam... Jay Swāminārāyaṇ,

Jay Akṣharpuruṣhottam,

Jay Swāminārāyaṇ....5.`
    },
    {
        id: 'thaal',
        name: 'Thaal',
        lyrics: `Jamo thāḷ Jīvan jāu vārī, dhovu kar charaṇ karo tyārī...

Beso melyā bājoṭhiyā ḍhāḷī,

Kaṭorā kanchannī thāḷī;

Jaḷe bharyā chambu chokhāḷi... jamo thāḷ 1

Karī kāṭhā ghaunī poḷī,

Melī ghrut sākarmā boḷī;

Kāḍhyo ras kerīno ghoḷī... jamo thāḷ 2

Gaḷyā sātā ghebar fūlvaḍī,

Dūdhpāk mālpūā kaḍhī;

Pūrī pochī thaī chhe ghīmā chaḍhī... jamo thāḷ 3

Athāṇā shāk sundar bhājī,

Lāvī chhu tarat karī tāji;

Dahī bhāt sākar chhe jhājhi... jamo thāḷ 4

(Meditate for 5 minutes)

Chaḷu karo lāvu jaḷjhārī,

Elāychī laving sopārī,

Pānbīḍī banāvī sārī... jamo thāḷ 5

Mukhvās mangamtā laīne,

Prasādīno thāḷ mune daine,

Bhumānand kahe rājī thaīne... jamo thāḷ 6`
    },
    {
        id: 'cheshta',
        name: 'Cheshta',
        lyrics: `Pratham Shrī Harine re, charaṇe shīsh namāvu;

Nautam līlā re, Nārāyaṇnī gāvu. 1

Moṭā munivar re, ekāgra karī manne;

Jene kāje re, seve jāī vanne. 2

Āsan sādhī re, dhyān dharīne dhāre;

Jenī cheshṭā re, sneh karī sambhāre. 3

Sahaj swābhāvik re, prakruti Puruṣhottamnī;

Suṇtā sajnī re, bīk maṭāḍe jamnī. 4

Gāvu hete re, Harinā charitra sambhārī;

Pāvan karjyo re, Prabhujī buddhi mārī. 5

Sahaj swabhāve re, beṭhā hoy Hari jyāre;

Tulsīnī māḷā re, kar laī ferve tyāre. 6

Ramūj kartā re, rājīvneṇ rūpāḷā;

Koī harijannī re, māgī laīne māḷā. 7

Bevḍī rākhī re, babbe maṇkā joḍe;

Ferve tāṇī re, kaik māḷā toḍe. 8

Vātu kare re, ramūj karīne hastā;

Bheḷī karī re, māḷā karmā ghastā. 9

Kyārek mīnchī re, netrakamaḷne Swāmī;

Premānand kahe re, dhyān dhare bahunāmī. 10

Pad - 2 (1-171)

Sāmbhaḷ saiyar re, līlā Naṭnāgarnī;

Suṇtā sukhḍu re, āpe sukhsāgarnī. 1

Netrakamaḷne re, rākhī ughāḍā kyāre;

Dhyān dharīne re, bese jīvan bā’re. 2

Kyārek chamkī re, dhyān karantā jāge;

Jotā jīvan re, janmamaraṇ dukh bhāge. 3

Potā āgaḷ re, sabhā bharāī bese;

Sant harijan re, sāmu joī rahe chhe. 4

Dhyān dharīne re, beṭhā hoy Hari pote;

Sant harijan re, trupta na thāye jote. 5

Sādhu (k)īrtan re, gāye vajāḍī vājā;

Temne joī re, magan thāye Mahārājā. 6

Temnī bheḷā re, chapṭī vajāḍī gāye;

Sant harijan re, nīrakhī rājī thāye. 7

Kyārek sādhu re, gāy vajāḍī tāḷī;

Bheḷā gāye re, tāḷī de Vanmāḷī. 8

Āgaḷ sādhu re, kīrtan gāy jyāre;

Potā āgaḷ re, kathā vanchāy tyāre. 9

Pote vārtā re, kartā hoy bahunāmī;

Khastā āve re, Premānandnā Swāmī. 10

Pad - 3 (1-172)

Manushyalīlā re, kartā mangaḷkārī;

Bhaktasabhāmā re, beṭhā bhavbhayhārī. 1

Jene jotā re, jāye jag āsakti;

Gnān vairāgya re, dharma sahit je bhakti. 2

Te sambandhī re, vārtā kartā bhārī;

Hari samjāve re, nij janne sukhkārī. 3

Yoga ne Sānkhya re, Pancharātra Vedānt;

E shāstrano re, rahasya kahe karī khānt. 4

Jyāre harijan re, desh deshnā āve;

Utsav upar re, pūjā bahuvidh lāve. 5

Jāṇī potānā re, sevakjan Avināshī;

Temnī pūjā re, grahaṇ kare sukhrāshī. 6

Bhakta potānā re, tene Shyām sujāṇ;

Dhyān karāvī re, kheche nāḍī prāṇ. 7

Dhyānmāthī re, uṭhāḍe nij janne;

Dehmā lāve re, prāṇ indriya manne. 8

Sant sabhāmā re, beṭhā hoy avināsh;

Koī harijanne re, teḍvo hoy pās. 9

Pahelī āngḷī re, netrataṇī karī sān;

Premānand kahe re, sād kare Bhagwān. 10

Pad - 4 (1-173)

Mohanjīnī re, līlā ati sukhkārī;

Ānand āpe re, suṇtā nyārī nyārī. 1

Kyārek vāto re, kare munivar sāthe;

Guchchh gulābnā re, choḷe chhe be hāthe. 2

Shitaḷ jāṇī re, limbu hār gulābī;

Tene rākhe re, ānkhyo upar dābī. 3

Kyārek pote re, rājīpāmā hoye;

Vāto kare re, kathā vanchāve toye. 4

Sāmbhaḷe kīrtan re, pote kāīk vichāre;

Pūchhvā āve re, jamvānu koī tyāre. 5

Hār chaḍhāve re, pūjā karvā āve;

Tenā upar re, bahu khījī rīsāve. 6

Kathā sāmbhaḷtā re, hare hare kahī bole;

Marma kathāno re, suṇī magan thaī ḍole. 7

Bhān kathāmā re, bījī kriyā māye;

Kyārek achānak re, jamtā hare bolāye. 8

Thāye smruti re, potāne jyāre tenī;

Thoḍuk hase re, bhakta sāmu joī benī. 9

Em Hari nit nit re, ānand ras varsāve;

E līlā ras re, joī Premānand gāve. 10

Pad - 5 (1-174)

Sāmbhaḷ sajnī re, divya swarūp Murārī;

Kare charitra re, manushya vigrah dhārī. 1

Thayā manohar re, Mohan manushya jevā;

Rūp anupam re, nij janne sukh devā. 2

Kyārek ḍholiye re, bese Shrī Ghanshyām;

Kyārek bese re, chākḷe pūraṇkām. 3

Kyārek godaḍu re, ochhāḍe sahit;

Pātharyu hoye re, te par bese prīte. 4

Kyārek ḍholiyā re, upar takiyo bhāḷī;

Te par bese re, Shyām palāṭhī vāḷī. 5

Ghaṇuk bese re, takiye oṭhīngaṇ daīne;

Kyārek goṭhaṇ re, bāndhe khes laīne. 6

Kyārek rājī re, thāy atishe ālī;

Sant harijanne re, bheṭe bāthmā ghālī. 7

Kyārek māthe re, laī mele be hāth;

Chhātī māhe re, charaṇkamaḷ de Nāth. 8

Kyārek āpe re, hār torā Girdhārī;

Kyārek āpe re, angnā vastra utārī. 9

Kyārek āpe re, prasādīnā thāḷ;

Premānand kahe re, bhaktataṇā pratipāḷ. 10

Pad - 6 (1-175)

Evā kare re, charitra pāvankārī;

Shukjī sarkhā re, gāve nit sambhārī. 1

Kyārek jībhne re, dānt taḷe dabāve;

Ḍābe jamṇe re, paḍkhe sahaj swabhāve. 2

Chhīnk jyāre āve re, tyāre rumāl laīne;

Chhīnk khāye re, mukh par āḍo daīne. 3

Ramūj āṇī re, hase ati Ghanshyām;

Mukh par āḍo re, rumāl daī sukhdhām. 4

Kyārek vātu re, kartā thakā Dev;

Chheḍe rumālne re, vaḷ dīdhānī ṭev. 5

Ati dayāḷu re, swabhāv chhe Swāmīno;

Pardukhhārī re, vārī bahunāmīno. 6

Koīne dukhiyo re, dekhī na khamāye;

Dayā āṇī re, ati ākḷā thāye. 7

Anna dhan vastra re, āpīne dukh ṭāḷe;

Karuṇā draṣhṭi re, dekhī vān ja vāḷe. 8

Ḍābe khabhe re, khes āḍsoḍe nākhī;

Chāle jamṇā re, karmā rumāl rākhī. 9

Kyārek ḍābo re, kar keḍ upar melī;

Chāle vahālo re, Premānandno helī. 10

Pad - 7 (1-176)

Nit nit nautam re, līlā kare Harirāy;

Gātā suṇtā re, harijan rājī thāy. 1

Sahaj swabhāve re, utāvḷā bahu chāle;

Het karīne re, bolāve bahu vahāle. 2

Kyārek ghoḍle re, chaḍvu hoy tyāre;

Kyārek santne re, pīrasvā padhāre. 3

Tyāre ḍābe re, khabhe khesne āṇī;

Khesne bāndhe re, keḍ sangāthe tāṇī. 4

Pīrase lāḍu re, jalebī Ghanshyām;

Jaṇas jamyānī re, laī laī tenā nām. 5

Fare pangatmā re, vāramvār Mahārāj;

Sant harijanne re, pīrasvāne kāj. 6

Shraddhā bhakti re, ati ghaṇī pīrastā;

Koīnā mukhmā re, āpe lāḍu hastā. 7

Pāchhalī rātrī re, chār ghaḍī rahe tyāre;

Dātaṇ karvā re, ūṭhe Hari te vāre. 8

Nhāvā bese re, Nāth palāṭhī vāḷī;

Kar laī kaḷashyo re, jaḷ ḍhoḷe Vanmāḷī. 9

Kore vastre re, karī sharīrne luve;

Premānand kahe re, harijan sarve juve. 10

Pad - 8 (1-177)

Rūḍā shobhe re, nāhīne ūbhā hoye;

Vastra paherelu re, sāthaḷ vachche nīchove. 1

Pag sāthaḷne re, luhīne sārangpāṇī;

Korā khesne re, pahere sārī peṭhe tāṇī. 2

Oḍhī uparṇī re, reshmī kornī vahāle;

Āve jamvā re, chākhaḍiye chaḍhī chāle. 3

Māthe uparṇī re, oḍhī bese jamvā;

Kān ughāḍā re, rākhe mujne gamvā. 4

Jamtā ḍābā re, pagnī palāṭhī vāḷī;

Te par ḍābo re, kar mele Vanmāḷī. 5

Jamṇā pagne re, rākhī ūbho Shyām;

Te par jamṇo re, kar mele Sukhdhām. 6

Rūḍī rīte re, jame devnā Dev;

Vāre vāre re, pāṇī pīdhānī ṭev. 7

Jaṇas swādu re, jaṇāye jamtā jamtā;

Pāse harijan re, beṭhā hoy mangamtā. 8

Temne āpī re, pachhī pote jame;

Jamtā Jīvan re, harijanne man game. 9

Ferve jamtā re, peṭ upar Hari hāth;

Oḍkār khāye re, Premānandnā Nāth. 10

Pad - 9 (1-178)

Chaḷu kare re, Mohan trupt thaīne;

Dāntne khotre re, saḷī rūpānī laīne. 1

Mukhvās laīne re, ḍhoḷiye birāje;

Pūjā kare re, harijan hete jhājhe. 2

Pāpaṇ upar re, ānṭo laī Albelo;

Fenṭo bāndhe re, chhogu melī Chhelo. 3

Varṣhā ṛutune re, Sharad ṛutune jāṇī;

Ghelā nadinā re, nīrmaḷ nīr vakhāṇī. 4

Sant harijanne re, sāthe laī Ghanshyām;

Nhāvā padhāre re, Ghele Pūraṇkām. 5

Bahu jaḷkrīḍā re, kartā jaḷmā nhāy;

Jaḷmā tāḷī re, daīne kīrtan gāy. 6

Nhāīne bā’re re, nīsrī vastra paherī;

Ghoḍe besī re, gher āve Ranglaherī. 7

Pāvan jashne re, harijan gātā āve;

Jīvan joīne re, ānand ur na samāve. 8

Gaḍhpūrvāsī re, joīne jag ādhār;

Sufaḷ kare chhe re, neṇā vāramvār. 9

Āvī birāje re, osarie bahunāmī;

Ḍholiyā upar re, Premānandnā Swāmī. 10

Pad - 10 (1-179)

Nij sevakne re, sukh devāne kāj;

Pote pragaṭyā re, Puruṣhottam Mahārāj. 1

Faḷiyāmāhī re, sabhā karī virāje;

Pūraṇ shashī re, uḍugaṇmā jem chhāje. 2

Brahmras varsī re, trupt kare harijanne;

Poḍhe rātre re, jamī Shyām shuddh annane. 3

Be āngaḷiyu re, tilak karyānī pere;

Bhāl vachche re, ūbhī rākhī fere. 4

Sūtā sūtā re, māḷā māgī laīne;

Jamṇe hāthe re, nit ferve chitt daīne. 5

Bhul na paḍe re, kedī evu nem;

Dharmakuvarnī re, sahaj prakruti em. 6

Bhar nidrāmā re, poḍhyā hoye Munirāye;

Koī ajāṇe re, lagār aḍī jāye. 7

Tyāre faḍkī re, jāge sundar Shyām;

‘Koṇ chhe?’ pūchhe re, sevakne Sukhdhām. 8

Evī līlā re, Harinī anant apār;

Me to gāī re, kaik mati anusār. 9

Je koī prīte re, shikhshe suṇshe gāshe;

Premānandno re, Swāmī rājī thāshe. 10

(1-180)

Orā āvo Shyām sanehī, sundar var jou vhālā;

Jatan karīne jīvan mārā, jīvamāhī prou vhālā. 1

Chihna anupam ango-angnā, sūrate sambhāru vhālā;

Nakhshikh nīrkhī nautam mārā, urmā utāru vhālā. 2

Aruṇ kamaḷsam jugal charaṇnī, shobhā ati sārī vhālā;

Chintvan karvā ātur ati, man vrutti mārī vhālā. 3

Pratham te chintvan karu, sundar soḷe chihna vhālā;

Ūrdhvarekhā opī rahī, atishe navīn vhālā. 4

Angūṭhā āngaḷī vachchethī, nīsarīne āvī vhālā;

Pānīnī be kore jotā, bhaktane man bhāvī vhālā. 5

Jugal charaṇmā kahu manohar, chihna tenā nām vhālā;

Shuddh mane karī sambhārtā, nāsh pāme kām vhālā. 6

Aṣhtakoṇ ne ūrdhvarekhā, swastik jambu jav vhālā;

Vajra, ankush, ketu ne padma, jamṇe page nav vhālā. 7

Trikoṇ, kaḷash ne gopad sundar, dhanush ne mīn vhālā;

Ardhachandra ne vyom sāt chhe, ḍābe page chihna vhālā. 8

Jamṇā pagnā angūṭhānā nakhmāhī chihna vhālā;

Te to nīrkhe je koī bhakta, prītie pravīṇ vhālā. 9

E ja angūṭhāne bā’re til ek nautam dhāru vhālā;

Premānand kahe nīrkhu prīte, prāṇ laī vāru vhālā. 10

Pad - 1 (1-181)

Have mārā vahālāne nahi re visāru re,

Shvās uchhvāse te nitya sambhāru re. 1

Paḍyu māre Sahajānandjī shu pānu re,

Have hu to kem karī rākhīsh chhānu re. 2

Āvyu māre Harivar varvānu ṭāṇu re,

E var na maḷe kharche nāṇu re. 3

E var bhāgya vinā nav bhāve re,

E sneh lagna vinā nav āve re. 4

Durijan man re māne tem kahejyo re,

Swāmī mārā hradayānī bhītar rahejyo re. 5

Have hu to pūraṇ padvīne pāmī re,

Maḷyā mune Niṣhkuḷānandnā Swāmī re. 6

Pad - 2 (1-182)

Have mārā vahālānā darshan sāru,

Harijan āve hajāre hajāru. 1

Ḍholiye birāje Sahajānand Swāmī,

Pūraṇ Puruṣhottam antarjāmī. 2

Sabhāmadhye beṭhā muninā vrund,

Temā shobhe tāre vīntyo jem chandra. 3

Durgapur khel rachyo ati bhārī,

Bheḷā rame sādhu ane brahmachārī. 4

Tāḷī paḍe ūpaḍatī ati sārī,

Dhūnya thāy chaud lok thakī nyārī. 5

Pāghalaḍīmā chhogalīyu ati shobhe,

Joī joī harijannā man lobhe. 6

Padhāryā vahālo sarve te sukhnā rāshī,

Sahajānand Akṣhardhāmnā vāsī. 7

Bhāngī mārī janmojanamnī khāmī,

Maḷyā mune Niṣhkuḷānandnā Swāmī. 8

(Meditate)

(1-183)

Poḍhe Prabhu sakal munike Shyām;

 Swāminārāyaṇ divya mūrti, santanke vishrām...

Akshar par ānandghan Prabhu, kiyo hai bhūpar ṭhām;

 Jehī milat jan tarat māyā, lahat Akṣhardhām... poḍhe 1

Shārad shesh mahesh mahāmuni, japat jehī guṇnām;

 Jās padraj shīsh dharī dharī, hot jan niṣhkām... poḍhe 2

Premke paryank par Prabhu karat sukh arām;

 Muktānand nij charaṇ ḍhig guṇ, gāvat āṭhu jām... poḍhe 3

(1-184)

Re Shyām tame sāchu nāṇu, bīju sarve dukhḍāyak jāṇu...

Re tam vinā sukh sampat kahāve,

Te to sarve mahādukh upjāve;

 Ante emā kām koī nāve... re Shyā 1

Re mūrakh lok mare bhaṭkī,

Jūṭhā sange hāre shir paṭkī;

 Tethī mārī manvrutti aṭkī... re Shyā 2

Re akhanḍ alaukik sukh sāru,

Re joī joī man mohyu māru;

 Dharā dhan tam upar vāru... re Shyā 3

Re Brahmāthī kīṭ lagī joyu,

Jūṭhu sukh jāṇīne vagovyu;

 Muktānand man tam sang mohyu... re Shyā 4

Dhyān Chintāmaṇi

(Vachanāmṛut Gaḍhaḍā Madhya 48)

Pad - 1 (1-185)

Vandu Sahajānand rasrūp, anupam sārne re lol;

Jene bhajtā chhuṭe fand, kare bhav pārne re lol... 1

Samaru pragaṭ rūp Sukhdhām, anupam nāmne re lol;

Jene bhav Brahmādik dev, bhaje tajī kāmne re lol... 2

Je Hari Aksharbrahma ādhār, pār koī nav lahe re lol;

Jene shesh sahasramukh gāy, nigam neti kahe re lol... 3

Varṇavu sundar rūp anup, jugal charaṇe namī re lol;

Nakhshikh Premsakhīnā Nāth, raho urmā ramī re lol... 4

Pad - 2 (1-186)

Āvo mārā Mohan mīṭhḍā lāl, ke jou tārī mūrti re lol;

Jatan karī rākhu rasiyā rāj, visāru nahi urthī re lol... 1

Man māru mohyu Mohanlāl, pāghalḍīnī bhātmā re lol;

Āvo orā chhogalā khosu chhel, khāntilā jou khāntmā re lol... 2

Vahālā tāru jhaḷke sundar bhāl, tilak rūḍā karyā re lol;

Vahālā tārā vām karaṇmā til, tene manḍā haryā re lol... 3

Vahālā tārī bhrakuṭine bāṇe Shyām, kāḷaj mārā koriyā re lol;

Neṇe tāre Premsakhīnā Nāth, ke chitt mārā choriyā re lol... 4

Pad - 3 (1-187)

Vahālā mune vash kīdhī Ghanshyām, vā’lap tārā vā’lmā re lol;

Man māru talkhe jovā kāj, ṭībakḍī chhe gālmā re lol... 1

Vahālā tārī nāsikā namaṇī Nāth, adharbimb lāl chhe re lol;

Chhelā mārā prāṇ karu kurbān, joyā jevī chāl chhe re lol... 2

Vahālā tārā dant dāḍamnā bīj, chaturāī chāvtā re lol;

Vahālā mārā prāṇ haro chho Nāth, mīṭhu mīṭhu gāvtā re lol... 3

Vahālā tāre hasve harāṇu chitt, bīju have nav game re lol;

Man māru Premsakhīnā Nāth, ke tam keḍe bhame re lol... 4

Pad - 4 (1-188)

Rasiyā joī rūpāḷī koṭ, rūḍī rekhāvaḷī re lol;

Vahālā māru manḍu maḷvā chahāy ke jāy chittaḍu chaḷī re lol... 1

Vahālā tārī jamṇī bhujāne pās, rūḍā til chār chhe re lol;

Vahālā tārā kanṭh vachche til ek, anupam sār chhe re lol... 2

Vahālā tārā urmā viṇguṇ hār, joī neṇā ṭhare re lol;

Vahālā te to jāṇe premī jan, joī nitya dhyān dhare re lol... 3

Rasiyā joī tamāru rūp, rasik jan ghelḍā re lol;

Āvo vahālā Premsakhīnā Nāth, Sundarvar Chhelḍā re lol... 4

Pad - 5 (1-189)

Vahālā tārī bhujā jugal Jagdīsh, joīne jāu vārṇe re lol;

Karnā laṭkā kartā lāl, āvone māre bārṇe re lol... 1

Vahālā tārī āngaḷiyunī rekhā, nakhmaṇi joīne re lol;

Vahālā mārā chittmā rākhu chorī, kahu nahi koīne re lol... 2

Vahālā tārā urmā anupam chhāp, jovāne jīva ākḷo re lol;

Vahālā mārā haiḍe harakh na māy, jāṇu je hamṇā maḷo re lol... 3

Vahālā tāru udar ati rasrūp, shītaḷ sadā Nāthjī re lol;

Āvo orā Premsakhīnā prāṇ, maḷu bharī bāthjī re lol... 4

Pad - 6 (1-190)

Vahālā tārī mūrti ati rasrūp, rasik joīne jīve re lol;

Vahālā e rasnā chākhaṇhār, chhāsh te nav pīve re lol... 1

Vahālā māre sukh sampat tame Shyām, Mohan man bhāvtā re lol;

Āvo māre mandir Jīvanprāṇ, hasīne bolāvtā re lol... 2

Vahālā tāru rūp anupam gaur, mūrti manmā game re lol;

Vahālā tāru joban jovā kāj, ke chitt charaṇe name re lol... 3

Āvo mārā rasiyā rājīvneṇ, maram karī boltā re lol;

Āvo vahālā Premsakhīnā seṇ, mandir māre doltā re lol... 4

Pad - 7 (1-191)

Vahālā tāru rūp anupam Nāth, udar shobhā ghaṇī re lol;

Trivaḷī jou sundar chhel, āvone orā am bhaṇī re lol... 1

Vahālā tārī nābhī nautam rūp, ūnḍī ati goḷ chhe re lol;

Kaṭilank joīne Sahajānand, ke man rangchoḷ chhe re lol... 2

Vahālā tārī jangha jugalnī shobhā, manmā joī rahu re lol;

Vahālā nit nīrkhu pinḍī ne pānī, koīne nav kahu re lol... 3

Vahālā tārā charaṇkamaḷnu dhyān, dharū ati hetmā re lol;

Āvo vahālā Premsakhīnā Nāth, rākhu mārā chittmā re lol... 4

Pad - 8 (1-192)

Vahālā tārā jugal charaṇ rasrūp, vakhāṇu vahālmā re lol;

Vahālā ati komaḷ arūṇ rasāḷ, chore chitt chālmā re lol... 1

Vahālā tāre jamṇe angūṭhe til, ke nakhmā chihna chhe re lol;

Vahālā chhelī āngaḷīe til ek, jovāne man dīn chhe re lol... 2

Vahālā tārā nakhnī aruṇtā joīne, shashīkaḷā kshīṇ chhe re lol;

Vahālā raschor chakor je bhakta, jovāne praviṇ chhe re lol... 3

Vahālā tārī ūrdhvarekhāmā chitt, raho karī vāsne re lol;

Māge Premsakhī kar joḍī, dejo dān dāsne re lol... 4`
    }
];

const prasangs = [
    {
        title: 'Selfless Service: Reading Letters',
        text: 'Once, during a demanding vicharan (spiritual tour), Pramukh Swami Maharaj had a severe fever. Despite the late hour and his physical exhaustion, attendants found him sitting up reading letters from devotees. When asked to rest, Swamishri simply replied, "The devotees write to me with their pains and problems. If I do not read them and pray for them, who will?"'
    },
    {
        title: 'Divine Vision in Every Situation',
        text: 'During a grand festival, a young boy accidentally spilled water near Swamishri. Volunteers nearby immediately stepped forward to scold the child. Swamishri gently intervened and smiled at the boy, telling the volunteers not to scold him because it was a simple accident. His absolute lack of ego and divine vision always shone through.'
    },
    {
        title: 'Humility in Action',
        text: 'While visiting a center in London, a youth volunteer was sweeping the floor late at night after a massive event. Unnoticed by most, Swamishri quietly walked over, asked for a broom, and began sweeping alongside the youth. He taught by action that no seva (service) is too small and everyone is a servant of God.'
    },
    {
        title: 'Devotion Above Comfort',
        text: 'In 1980, Pramukh Swami Maharaj suffered a mild heart attack and doctors advised complete bed rest. However, when it was time for Thakorji\'s daily darshan, Swamishri insisted on having the portable shrine brought to his bedside so he could fold his hands in prayer. His devotion to God always superseded his physical comfort.'
    },
    {
        title: 'The Value of a Single Soul',
        text: 'During a busy village tour, Swamishri\'s car was scheduled to leave for the next town. Suddenly, he noticed an elderly tribal devotee standing far away, hesitating to approach. Swamishri stopped the convoy, called the man over, and spent ten minutes listening to him and blessing him. To Swamishri, every individual\'s spiritual joy was worth pausing the schedule for.'
    },
    {
        title: 'Seeing God in All',
        text: 'Once, an angry man came to a satsang assembly and began insulting Swamishri and the sanstha with harsh words. The volunteers were ready to remove him, but Swamishri signaled them to stay calm. He listened patiently, offered the man some prasad, and spoke to him with such profound love and peace that the man broke down in tears and apologized.'
    },
    {
        title: 'The Power of Genuine Prayer',
        text: 'During a severe drought in Gujarat, local farmers approached Swamishri in despair. Instead of just offering verbal consolation, Swamishri immediately sat down, took a rosary, and prayed earnestly to Bhagwan Swaminarayan for rain. Within days, unexpected rainfall saved the crops. When praised by the locals, Swamishri simply pointed upwards, giving all credit to God.'
    }
];

const thoughtOfTheDay = [
    `"A person who has firm conviction in the manifest form of God and his holy Sadhu... has nothing more left to achieve." - Vachanamrut Gadhada I-16`,
    `"In the joy of others lies our own." - Pramukh Swami Maharaj`,
    `"Satpurush is the gateway to liberation." - Vachanamrut Gadhada I-54`,
    `"Whatever happens, happens for the best. God is the all-doer." - Mahant Swami Maharaj`,
    `"A true devotee remains unfazed by both praise and insult." - Vachanamrut Gadhada II-62`
];const suggestedKirtan = `Tari Murti Re Che...`;

// --- DOM ELEMENTS ---
const checklistContainer = document.getElementById('checklist');
const prasangBtn = document.getElementById('prasang-btn');
const prasangDisplay = document.getElementById('prasang-display');
const prasangTitle = document.getElementById('prasang-title');
const prasangText = document.getElementById('prasang-text');
const streakCountEl = document.getElementById('streak-count');
const thoughtTextEl = document.getElementById('thought-text');
const kirtanTextEl = document.getElementById('kirtan-text');

// --- CHECKLIST & LYRICS LOGIC ---
function renderChecklist() {
    ahnikItems.forEach(item => {
        const li = document.createElement('li');

        // 1. Create Checkbox and Label
        const label = document.createElement('label');
        label.className = 'checkbox-container';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item.id;

        const today = new Date().toDateString();
        const savedState = localStorage.getItem(`ahnik_${item.id}_date`);
        if (savedState === today) {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                localStorage.setItem(`ahnik_${item.id}_date`, today);
            } else {
                localStorage.removeItem(`ahnik_${item.id}_date`);
            }
        });

        const span = document.createElement('span');
        span.textContent = item.name;

        label.appendChild(checkbox);
        label.appendChild(span);
        li.appendChild(label);

        // 2. Create Lyrics Toggle Button
        const lyricsBtn = document.createElement('button');
        lyricsBtn.className = 'lyrics-btn';
        lyricsBtn.textContent = 'Show Lyrics';

        // 3. Create Lyrics Text Container
        const lyricsDiv = document.createElement('div');
        lyricsDiv.className = 'lyrics hidden';
        lyricsDiv.innerText = item.lyrics;

        lyricsBtn.addEventListener('click', () => {
            lyricsDiv.classList.toggle('hidden');
            lyricsBtn.textContent = lyricsDiv.classList.contains('hidden') ? 'Hide Lyrics' : 'Show Lyrics';
        });

        li.appendChild(lyricsBtn);
        li.appendChild(lyricsDiv);
        checklistContainer.appendChild(li);
    });
}

// --- RANDOM PRASANG LOGIC ---
prasangBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * prasangs.length);
    const selected = prasangs[randomIndex];

    prasangTitle.textContent = selected.title;
    prasangText.textContent = selected.text;
    prasangDisplay.classList.remove('hidden');
});

// --- CHALLENGE GOAL: STREAK COUNTER ---
function updateStreak() {
    const today = new Date().toDateString();
    let lastVisit = localStorage.getItem('lastVisit');
    let streak = parseInt(localStorage.getItem('ahnikStreak')) || 0;

    if (lastVisit === today) {
        // Already opened today
    } else if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastVisitDate.toDateString() === yesterday.toDateString()) {
            streak++;
        } else {
            streak = 1;
        }
    } else {
        streak = 1;
    }

    localStorage.setItem('lastVisit', today);
    localStorage.setItem('ahnikStreak', streak);
    streakCountEl.textContent = streak;
}

// --- APP INITIALIZATION ---
function init() {
    renderChecklist();
    updateStreak();

    // Inject the static content
    if(thoughtTextEl) thoughtTextEl.textContent = thoughtOfTheDay;
    if(kirtanTextEl) kirtanTextEl.textContent = suggestedKirtan;
}

// Add this array right below your prasangs array
const kirtans = [
    {
        title: "Tari Murti Re Che...",
        url: "https://www.anirdesh.com/kirtan/index.php?part=1&no=262"
    },
    {
        title: "Anubhavī ānandmā Brahmarasnā bhogī re",
        url: "https://www.anirdesh.com/kirtan/study.php?by=type&type=Translation&part=1&no=428"
    },
    {
        title: "Swāmī Bāpā amārī tame rakshā karo",
        url: "https://www.anirdesh.com/kirtan/index.php?part=1&no=974"
    },
    {
        title: "Saunā re prāṇ Pramukh Swāmī Mahārāj",
        url: "https://www.anirdesh.com/kirtan/index.php?part=1&no=1027"
    },
    {
        title: "Akṣhar Puruṣhottam dayāḷu Prabhu",
        url: "https://www.anirdesh.com/kirtan/study.php?by=type&type=Translation&part=1&no=51"
    }
];

// ... (keep the rest of your DOM elements and functions the same) ...

// --- APP INITIALIZATION ---
function init() {
    renderChecklist();
    updateStreak();

    // Inject the Thought of the Day
// Inject a Random Thought of the Day
    if(thoughtTextEl) {
        const randomThoughtIndex = Math.floor(Math.random() * thoughtOfTheDay.length);
        thoughtTextEl.textContent = thoughtOfTheDay[randomThoughtIndex];
    }
    // Inject a Random Kirtan for Ghar Sabha
    // Inject a Random Kirtan for Ghar Sabha as a Clickable Link
    if(kirtanTextEl) {
        const randomKirtanIndex = Math.floor(Math.random() * kirtans.length);
        const selectedKirtan = kirtans[randomKirtanIndex];

        // Use innerHTML to create an anchor tag (<a>)
        // target="_blank" opens the link in a new tab
        kirtanTextEl.innerHTML = `<a href="${selectedKirtan.url}" target="_blank" style="color: #3498db; text-decoration: none; font-weight: bold;">${selectedKirtan.title}</a>`;
    }
}

// Run the app!
init();