//Data available through this http get request --> https://inshorts.deta.dev/news?category=all
const HomeData = [
    {
        "author": "Apaar Sharma",
        "content": "India's first-ever private train service under Bharat Gaurav scheme flagged off on Tuesday from Coimbatore to Shirdi. \"Railways has leased this train to a service provider for a period of two years. It has a total of 20 coaches including first, second and third class AC coaches and sleeper coaches,\" said B Guganesan, CPRO, Southern Railway.",
        "date": "15 Jun 2022,Wednesday",
        "id": "f847abf654b84ed7a990cd945c0a72c4",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655277059540_704.jpg?",
        "readMoreUrl": "https://twitter.com/RailMinIndia/status/1536723851341484037?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:53 pm",
        "title": "India's first private train service under Bharat Gaurav scheme flagged off",
        "url": "https://www.inshorts.com/en/news/indias-first-private-train-service-under-bharat-gaurav-scheme-flagged-off-1655277836573"
      },
      {
        "author": "Apaar Sharma",
        "content": "The UAE has imposed a moratorium on the export and re-export of wheat and wheat flour from India for four months starting from May 13. The UAE said this decision comes in view of international developments that have affected trade flows and in appreciation of the strategic relations after India's approval to export wheat to the UAE for domestic consumption.",
        "date": "15 Jun 2022,Wednesday",
        "id": "a8f9c81b5a15426095b4d2b55c3ea7f7",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655280832200_903.jpg?",
        "readMoreUrl": "https://www.moneycontrol.com/news/world/uae-to-suspend-exports-of-indian-wheat-for-four-months-8689221.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:53 pm",
        "title": "UAE bans export of Indian wheat till September",
        "url": "https://www.inshorts.com/en/news/uae-bans-export-of-indian-wheat-till-september-1655281416824"
      },
      {
        "author": "Anmol Sharma",
        "content": "Actress Shraddha Kapoor's brother Siddhanth Kapoor took to Instagram to share his first photo after getting bail in drugs case. In the photo, he can be seen sitting on a flight. He also gave his official statement regarding the case. \"I was at the hotel and there was an investigation going on. I have been cooperating,\" he said.",
        "date": "15 Jun 2022,Wednesday",
        "id": "368a58bb247d4edf85dfa4a73b5b554a",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655276617280_187.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/entertainment/bollywood/siddhanth-kapoor-poses-for-selfie-in-flight-after-getting-bail-in-drugs-case-see-pic-101655264927907-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:53 pm",
        "title": "Shraddha Kapoor's brother Siddhanth shares first pic after getting bail in drugs case",
        "url": "https://www.inshorts.com/en/news/shraddha-kapoors-brother-siddhanth-shares-first-pic-after-getting-bail-in-drugs-case-1655277804643"
      },
      {
        "author": "Ankush Verma",
        "content": "Swiss airspace was closed for security reasons on Wednesday after a computer glitch with the air traffic control system grounded flights at the country's main airports, officials said. The air traffic control system Skyguide said it \"regrets the incident and its consequences for the clients, partners and passengers, and is working flat out to find a solution\".",
        "date": "15 Jun 2022,Wednesday",
        "id": "662266f0affa49baad5dd0661bb8d104",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655277060995_175.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/world-news/all-flights-at-switzerland-s-zurich-geneva-grounded-report-101655272520162-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:49 pm",
        "title": "Switzerland closes airspace for security reasons after computer glitch",
        "url": "https://www.inshorts.com/en/news/switzerland-closes-airspace-for-security-reasons-after-computer-glitch-1655277545014"
      },
      {
        "author": "Aishwarya Awasthi",
        "content": "Zomato-backed logistics aggregator Shiprocket has agreed to acquire a majority stake in Pickrr in an estimated $200 million deal comprising cash, stock and earn-out. Pickrr Founders Gaurav Mangla, Ankit Kaushik and Rhitiman Majumder are getting shares in Shiprocket as part of the deal. Shiprocket is also reportedly in the final stages of closing acquisition of the India business of Shyplite.",
        "date": "15 Jun 2022,Wednesday",
        "id": "535dd6e8a56e4dc2829c505746f378d0",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655278915289_832.jpg?",
        "readMoreUrl": "https://www.moneycontrol.com/news/business/zomato-backed-shiprocket-to-acquire-pickrr-in-a-200-million-deal-8688221.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:36 pm",
        "title": "Zomato-backed Shiprocket to acquire Pickrr for $200 million",
        "url": "https://www.inshorts.com/en/news/zomatobacked-shiprocket-to-acquire-pickrr-for-$200-million-1655280379292"
      },
      {
        "author": "Ankush Verma",
        "content": "US has announced a new group named I2U2, which comprises India, Israel, US and UAE. \"India is a massive consumer market. It is a massive producer of high-tech and highly sought-after goods as well. So, there are a number of areas where these countries can work together, whether its technology, trade, climate...and potentially even security as well,\" US said.",
        "date": "15 Jun 2022,Wednesday",
        "id": "d4737310e5504889892ab410a7b750c6",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655278907825_514.jpg?",
        "readMoreUrl": "https://theprint.in/world/i2u2-grouping-of-india-israel-uae-and-us-to-re-energise-american-alliances-globally-white-house/997069/?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:47 pm",
        "title": "What is the I2U2 group that comprises India, US?",
        "url": "https://www.inshorts.com/en/news/what-is-the-i2u2-group-that-comprises-india-us-1655281021313"
      },
      {
        "author": "Amartya Sharma",
        "content": "Singer-actress Selena Gomez opened up about her break-up with singer Justin Bieber. \"It allowed me to develop a character where I don't tolerate any sort of nonsense or disrespect,\" she stated. Selena and Justin broke up in 2018. A few months later after his break-up, Justin tied the knot with model Hailey Bieber.",
        "date": "15 Jun 2022,Wednesday",
        "id": "6079628e1bff44a38f6f4ce8ca351ca9",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655279649876_650.jpg?",
        "readMoreUrl": "https://www.pinkvilla.com/entertainment/hollywood/selena-gomez-admits-gaining-confidence-herself-after-justin-bieber-breakup-i-am-really-proud-1143522?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "02:02 pm",
        "title": "Don't tolerate any disrespect after breakup with Bieber: Selena Gomez",
        "url": "https://www.inshorts.com/en/news/dont-tolerate-any-disrespect-after-breakup-with-bieber-selena-gomez-1655281952862"
      },
      {
        "author": "Amartya Sharma",
        "content": "Trade expert Komal Nahta, speaking about the box office failure of 'Samrat Prithviraj', said that it was a dangerous project as historical films are always tricky. \"Akshay Kumar seems to be totally disinterested. He looked like Akshay Kumar rather than Prithviraj,\" he added. \"Film had bad music...lastly, it didn't invoke any feeling of patriotism,\" he added.",
        "date": "15 Jun 2022,Wednesday",
        "id": "6b9d855a5cfe4fc4b04e075b2012c001",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655280378635_13.jpg?",
        "readMoreUrl": "https://www.bollywoodhungama.com/amp/news/features/went-wrong-samrat-prithviraj-trade-experts-share-views-whether-incorrect-marketing-use-religious-undertones-went-film/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:59 pm",
        "title": "Akshay seems to be disinterested in 'Samrat Prithviraj': Komal Nahta",
        "url": "https://www.inshorts.com/en/news/akshay-seems-to-be-disinterested-in-samrat-prithviraj-komal-nahta-1655281778314"
      },
      {
        "author": "Amartya Sharma",
        "content": "Hollywood actor Bradley Cooper opened up about the drug and alcohol addiction he developed after being relegated to a guest star in the third season of his show 'Alias'. \"I was so lost...addicted to cocaine...I severed my Achilles tendon right after I got fired-slash-quit 'Alias',\" Bradley stated. Bradley added a \"hard conversation\" with his friend Will Arnett changed his life. ",
        "date": "15 Jun 2022,Wednesday",
        "id": "b9e3d48ada0b4bf8ae1cedf73061f51c",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655273008855_918.jpg?",
        "readMoreUrl": "https://www.pinkvilla.com/entertainment/hollywood/bradley-cooper-opens-about-his-past-struggles-cocaine-addiction-i-was-so-lost-1143546?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:53 pm",
        "title": "I was so lost: Actor Bradley Cooper on his cocaine addiction",
        "url": "https://www.inshorts.com/en/news/i-was-so-lost-actor-bradley-cooper-on-his-cocaine-addiction-1655277835967"
      },
      {
        "author": "Amartya Sharma",
        "content": "Saiyami Kher shared a picture with Abhishek Bachchan on Twitter revealing the first look from R Balki's 'Ghoomer'. \"A project with some of the nicest people I've met. That let me play a sport that I love. That let me play one of the most challenging roles I've played thus far,\" Saiyami tweeted. Shabana Azmi also features in the film.",
        "date": "15 Jun 2022,Wednesday",
        "id": "83836d17ac224398a10c2f729f2adca1",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655276096348_608.jpg?",
        "readMoreUrl": "https://www.pinkvilla.com/entertainment/news/ghoomer-first-look-abhishek-bachchan-and-saiyami-kher-seen-intense-moment-r-balkis-next-1143760?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:50 pm",
        "title": "Abhishek Bachchan, Saiyami Kher's 1st look from R Balki's Ghoomer out",
        "url": "https://www.inshorts.com/en/news/abhishek-bachchan-saiyami-khers-1st-look-from-r-balkis-ghoomer-out-1655277648442"
      },
      {
        "author": "Arnab Mukherji ",
        "content": "Discussing Yuzvendra Chahal's spell in the third T20I against South Africa where he picked three wickets while conceding 20 runs, Ashish Nehra said South Africa were completely out of the match by the time Chahal bowled three overs. \"We...[saw] the Chahal...we know, the aggressive Chahal. He varied his pace and length the way he...does when...at his best,\" added Nehra.",
        "date": "15 Jun 2022,Wednesday",
        "id": "87a2b5a1b2614bf490efbe69381930f1",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655280442996_951.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/cricket/yuzvendra-chahal-india-vs-south-africa-3rd-t20i-out-of-the-game-by-the-time-his-spell-was-done-101655274590727-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "02:00 pm",
        "title": "SA were completely out of 3rd T20I by the time Chahal bowled 3 overs: Nehra",
        "url": "https://www.inshorts.com/en/news/sa-were-completely-out-of-3rd-t20i-by-the-time-chahal-bowled-3-overs-nehra-1655281800853"
      },
      {
        "author": "Arnab Mukherji ",
        "content": "England batter Jonny Bairstow said Ben Stokes asked him \"not\" to \"even think\" about hitting the ball on the ground during his 136 off 92, in England's second innings of the second Test against New Zealand. Bairstow smashed the second-fastest century in Tests by an English cricketer during his innings. He reached the three-figure mark in 77 balls.",
        "date": "15 Jun 2022,Wednesday",
        "id": "935a841cded340e7985aecc89a9e9f0f",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655276865837_996.jpg?",
        "readMoreUrl": "https://www.timesnownews.com/sports/cricket/dont-even-think-about-hitting-on-ground-bairstow-reveals-skipper-stokes-advice-before-carnage-at-trent-bridge-article-92215951/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:14 pm",
        "title": "Stokes said 'Don't even think of hitting on ground': Bairstow on 136 (92)",
        "url": "https://www.inshorts.com/en/news/stokes-said-dont-even-think-of-hitting-on-ground-bairstow-on-136-92-1655279049909"
      },
      {
        "author": "Ankur Taliyan",
        "content": "Ex-Pakistan captain Inzamam-ul-Haq has said India should be \"appreciated\" for keeping the five-match T20I series alive against South Africa after their win on Tuesday. \"This shows India's depth. The second-string team is putting up a fight and it's great to see that,\" he stated. India won the third T20I by 48 runs with Ruturaj Gaikwad and Ishan Kishan scoring half-centuries. ",
        "date": "15 Jun 2022,Wednesday",
        "id": "ce8a8ba507474103b37f70703e2bb536",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655274170363_793.jpg?",
        "readMoreUrl": "https://www.sportskeeda.com/amp/cricket/news-ind-vs-sa-2022-the-second-string-squad-appreciated-inzamam-ul-haq-lauds-team-india-s-depth?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:09 pm",
        "title": "India's 2nd-string squad should be appreciated: Inzamam-ul-Haq",
        "url": "https://www.inshorts.com/en/news/indias-2ndstring-squad-should-be-appreciated-inzamamulhaq-1655278762447"
      },
      {
        "author": "Saurabh Sinha",
        "content": "Congress leader Rahul Gandhi on Wednesday arrived at the Enforcement Directorate (ED) office in Delhi for the third consecutive day of questioning in connection with the National Herald case. Meanwhile, women leaders and workers of Congress protested against the ED's action outside the party office in heavy police presence. Gandhi was questioned for several hours on Tuesday.",
        "date": "15 Jun 2022,Wednesday",
        "id": "038fce01a18e4eba92319dfa95240e9b",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655275201810_576.jpg?",
        "readMoreUrl": "https://twitter.com/ANI/status/1536955765889843200?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:46 pm",
        "title": "Rahul Gandhi arrives at ED office for third day of questioning",
        "url": "https://www.inshorts.com/en/news/rahul-gandhi-arrives-at-ed-office-for-third-day-of-questioning-1655277394803"
      },
      {
        "author": "Sakshi Sharma",
        "content": "UP CM Yogi Adityanath on Tuesday asked his ministers to refrain from making provocative statements on any issue that may vitiate the social atmosphere. \"Those in government offices should uphold dignity and decorum of their offices,\" CM Yogi added. He was addressing a meeting of his council of ministers ahead of the bypoll to the two Lok Sabha seats.",
        "date": "15 Jun 2022,Wednesday",
        "id": "b60f29382dab4c84b044f5ff20dd933f",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655271289344_770.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/cities/lucknow-news/yogi-to-ministers-refrain-from-provocative-comments-101655232189641-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:22 pm",
        "title": "UP CM asks ministers to refrain from making provocative statements",
        "url": "https://www.inshorts.com/en/news/up-cm-asks-ministers-to-refrain-from-making-provocative-statements-1655279546338"
      },
      {
        "author": "Sakshi Sharma",
        "content": "Tamil Nadu CM MK Stalin, Telangana CM K Chandrashekar Rao, Maharashtra CM Uddhav Thackeray and many big leaders won’t be participating in the Opposition’s meeting, Congress leader Mallikarjun Kharge said on Wednesday. West Bengal CM Mamata Banerjee last week wrote to leaders of 22 parties for the meeting to discuss the Presidential election.",
        "date": "15 Jun 2022,Wednesday",
        "id": "a80dd0302e53480e8dc68a0c4f620d61",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655273881250_139.jpg?",
        "readMoreUrl": "https://twitter.com/ANI/status/1536945681063374848?s=20&t=svQ2Sk2IZCZYE2bz_oVlbg&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:33 pm",
        "title": "Stalin, Thackeray, KCR among leaders to skip Oppn’s meet: Kharge",
        "url": "https://www.inshorts.com/en/news/stalin-thackeray-kcr-among-leaders-to-skip-oppns-meet-kharge-1655280181732"
      },
      {
        "author": "Shiwangi",
        "content": "Congress leader TS Singh Deo on Tuesday questioned the central government's Agnipath recruitment scheme for youth to serve in the Army. \"Defence services and national security are being toyed with,\" Deo said. \"What kind of job is this where you'll keep them for four years and then only 25% of them would be allowed to go ahead?\" he added. ",
        "date": "15 Jun 2022,Wednesday",
        "id": "9e379e3c012f4076b76f6ac20b8fbd1a",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655278679772_950.jpg?",
        "readMoreUrl": "https://www.timesnownews.com/india/defence-services-and-national-security-being-toyed-with-congress-questions-agnipath-recruitment-scheme-article-92208949/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:42 pm",
        "title": "National security being toyed with: Cong over Agnipath recruitment scheme",
        "url": "https://www.inshorts.com/en/news/national-security-being-toyed-with-cong-over-agnipath-recruitment-scheme-1655280735115"
      },
      {
        "author": "Swati Dubey",
        "content": "A booster dose of COVID-19 vaccine Covaxin enhances its efficacy against Delta variant and Omicron variants namely, BA.1.1 and BA.2, a study stated. \"In vaccine efficacy study against the Omicron variants...lesser virus shedding, lung viral load and lung disease severity were observed,\" the paper stated. Reduction in lung viral load and lung lesions were observed in Delta variant, it added.",
        "date": "15 Jun 2022,Wednesday",
        "id": "8c0ad11f36e84c4eaf094f9d23e0f38a",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655278088803_601.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/india-news/covaxin-booster-shot-enhances-efficacy-against-delta-omicron-variants-study-101655274555052-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:55 pm",
        "title": "Covaxin booster dose enhances efficacy against Delta, Omicron variants: Study",
        "url": "https://www.inshorts.com/en/news/covaxin-booster-dose-enhances-efficacy-against-delta-omicron-variants-study-1655281532848"
      },
      {
        "author": "Swati Dubey",
        "content": "At least six people were injured after a speeding water tanker hit them in Delhi's Badarpur market on Tuesday. According to the police, the tanker driver lost control of the vehicle and hit the crowd. Vegetable carts and vehicles were also damaged in the incident. A case of rash driving and negligence has been registered against the driver, police said.",
        "date": "15 Jun 2022,Wednesday",
        "id": "3ac8ca51a0e043218f7a4bf8891e14a6",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655273574957_582.jpg?",
        "readMoreUrl": null,
        "time": "12:50 pm",
        "title": "6 injured after speeding water tanker hits them in Delhi's Badarpur",
        "url": "https://www.inshorts.com/en/news/6-injured-after-speeding-water-tanker-hits-them-in-delhis-badarpur-1655277653313"
      },
      {
        "author": "Swati Dubey",
        "content": "A 30-year-old man reportedly died after a sliding boat hit him on the head at a water amusement park in Jharkhand's East Singhbhum district on Tuesday. He was declared dead at the hospital. According to police, the park was overcrowded with no arrangements to tackle the crowd. The park has been sealed and police have taken its manager into custody.\n",
        "date": "15 Jun 2022,Wednesday",
        "id": "c9a4445c57e948b0abd12cd1af7a0d23",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655276448997_374.jpg?",
        "readMoreUrl": "https://theprint.in/india/man-dies-after-sliding-boat-hit-him-in-water-amusement-park/997138/?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:56 pm",
        "title": "Man dies after sliding boat hits him at water park in Jharkhand",
        "url": "https://www.inshorts.com/en/news/man-dies-after-sliding-boat-hits-him-at-water-park-in-jharkhand-1655277962618"
      },
      {
        "author": "Shiwangi",
        "content": "Mumbai's Chhatrapati Shivaji Maharaj International Airport has become the first in India to explore utilisation of wind energy for consumption purposes. Under the pilot project, a vertical axis wind turbine (VAWT) unit and solar hybrid (solar mill) have been installed at the airport. According to an official, the technology is expected to generate minimum energy of 36 kWh per day. ",
        "date": "15 Jun 2022,Wednesday",
        "id": "8eb329190ac74987b8d05fad12bc9db9",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655276045048_457.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/cities/mumbai-news/mumbai-airport-turns-to-wind-energy-for-consumption-needs-1st-in-india-to-do-so-101655271071440-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "01:22 pm",
        "title": "Mumbai airport becomes 1st in India to use wind energy for consumption needs",
        "url": "https://www.inshorts.com/en/news/mumbai-airport-becomes-1st-in-india-to-use-wind-energy-for-consumption-needs-1655279545503"
      },
      {
        "author": "Saurabh Sinha",
        "content": "The Jammu and Kashmir administration has ordered a ban on schools run by Falah-e-Aam Trust (FAT), an affiliate of proscribed organisation Jamaat-e-Islami. It has asked the district authorities to seal all such schools within 15 days. The students studying in these institutions have been asked to get admissions in nearby government schools.",
        "date": "15 Jun 2022,Wednesday",
        "id": "594a5913d49f49adaeb084c84442352f",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655270772202_566.jpg?",
        "readMoreUrl": null,
        "time": "01:21 pm",
        "title": "J&K bans schools run by Trust affiliated to Jamaat-e-Islami",
        "url": "https://www.inshorts.com/en/news/jk-bans-schools-run-by-trust-affiliated-to-jamaateislami-1655279519455"
      },
      {
        "author": "Athira Sasidharan",
        "content": "A 42-year-old man died of serious head injuries after his motorbike collided head-on with a Pune Mahanagar Parivahan Mahamandal Limited (PMPML) bus at Padmavati chowk on the Pune-Satara road on Tuesday afternoon. The victim's body has been sent for postmortem. \"The PMPML bus has been seized and is at Sahakar Nagar Police Station,\" police sub-inspector Mahesh Nalavade said. ",
        "date": "15 Jun 2022,Wednesday",
        "id": "8e0a88e31882401683fa11ee20669e28",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655273550996_322.jpg?",
        "readMoreUrl": "https://www.hindustantimes.com/cities/pune-news/one-dead-in-motorcycle-pmpml-bus-collision-in-pune-101655231408060-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
        "time": "12:50 pm",
        "title": "42-year-old man dies after his bike collides with PMPML bus in Pune",
        "url": "https://www.inshorts.com/en/news/42yearold-man-dies-after-his-bike-collides-with-pmpml-bus-in-pune-1655277611151"
      },
      {
        "author": "Swati Dubey",
        "content": "Tihar authorities in Delhi are planning to deploy a four-member dog squad to curb smuggling of banned items inside the prison. Accordingly, the dogs will be trained to detect mobile phones, weapons, SIM cards, drugs and tobacco which prisoners carry in their stomach and vomit out on reaching inside. It will be later expanded to Rohini and Mandoli jails.",
        "date": "15 Jun 2022,Wednesday",
        "id": "93e5a886f02e4577951a5ecec60e81a0",
        "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/06_jun/15_wed/img_1655279926798_231.jpg?",
        "readMoreUrl": null,
        "time": "02:08 pm",
        "title": "Tihar authorities to induct dog squad to curb drug, SIM smuggling",
        "url": "https://www.inshorts.com/en/news/tihar-authorities-to-induct-dog-squad-to-curb-drug-sim-smuggling-1655282313513"
      }
]

export default HomeData;