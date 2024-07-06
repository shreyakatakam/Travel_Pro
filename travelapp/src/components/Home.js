import React, { useState } from 'react';
import './Home.css'; 

import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = {
    Andaman: ["Cellular Jail", "Elephant Beach", "Radhanagar Beach", "Limestone Cave", "Port Blair"],
    AndhraPradesh: ["Tirupati Balaji Temple", "Amaravati", "Suryalanka Beach", "Yaganti Temple", "Kurnool"],
    ArunachalPradesh: ["Tawang Monastery", "Golden Pagoda", "Namdapha National Park", "Sela Pass", "Parshuram Kund"],
    Assam: ["Kamakhya Temple", "Sualkuchi", "Umananda Island", "Kakochang Waterfall", "Guwahati"],
    Bihar: ["Mahabodhi Temple", "Bodhi Tree", "Nalanda University", "Patna Sahib", "Bodh Gaya"],
    Chandigarh: ["Rock Garden", "Rose Garden", "Sukhna Lake", "Elante Mall", "Open Hand Monument"],
    Chhattisgarh: ["Chitrakote Waterfalls", "Tirathgarh Waterfalls", "Bhoramdeo Temple", "Kanger Valley National Park", "Sirpur"],
    DadraNagarHaveli: ["Silvassa", "Vanganga Lake Garden", "Hirwa Van Garden", "Island Garden Dadra Park", "Butterfly Park"],
    Delhi: ["Red Fort", "Jama Masjid", "Swaminarayan Akshardham", "Humayun's Tomb", "India Gate", "Lotus Temple"],
    Goa: ["Baga Beach", "Basilica of Bom Jesus", "Dudhsagar Falls", "Fort Aguada", "Betalbatim Beach"],
    Gujarat: ["Sabarmati Ashram", "Statue of Unity", "Ahmedabad", "Rann of Kutch", "Saputara"],
    Haryana: ["Sultanpur National Park", "Kurukshetra", "Surajkund", "Yadavindra Gardens", "Brahma Sarovar"],
    HimachalPradesh: ["Shimla", "Manali", "Dharamshala", "Kullu", "Chail", "Hadimba Devi Temple"],
    JammuKashmir: ["Srinagar", "Gulmarg", "Pahalgam", "Leh-Ladakh", "Vaishno Devi Temple"],
    Jharkhand: ["Betla National Park", "Jubilee Park", "Baidyanath Dham", "Hundru Falls", "Deoghar"],
    Karnataka: ["Bangalore", "Mysore", "Coorg", "Hampi", "Gokarna"],
    Kerala: ["Munnar", "Alleppey", "Kochi", "Thekkady", "Sree Padmanabhaswamy Temple"],
    Ladhak: ["Pangong Lake", "Lamayuru", "Zanskar Valley", "Kargil", "Khardung La"],
    Lakshadweep: ["Agatti Island", "Bangaram Island", "Kavaratti Island", "Minicoy Island", "Kadmat Island"],
    MadhyaPradesh: ["Khajuraho Temples", "Gwalior Fort", "Jabalpur", "Omkareshwar Jyotirlinga", "Ujjain"],
    Maharashtra: ["Mumbai", "Pune", "Aurangabad", "Nashik", "Mahabaleshwar"],
    Manipur: ["Loktak Lake", "Kangla Fort", "Imphal", "Khongjom War Memorial", "Thalon Cave"],
    Meghalaya: ["Shillong", "Cherrapunji", "Mawlynnong", "Dawki", "Umiam Lake", "Kynrem Falls"],
    Mizoram: ["Champhai", "Reiek", "Lunglei", "Vantawng Falls", "Tam Dil"],
    Nagaland: ["Kohima", "Dimapur", "Dzukou Valley", "Touphema Village", "Kohima War Cemetery"],
    Odisha: ["Puri", "Konark Sun Temple", "Bhubaneswar", "Chilika Lake", "Raghurajpur Artist Village"],
    Puducherry: ["Auroville", "Paradise Beach", "Arikamedu", "Promenade Beach", "Basilica of the Sacred Heart of Jesus"],
    Punjab: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Anandpur Sahib", "Mohali"],
    Rajasthan: ["Jaipur", "Udaipur", "Jaisalmer Fort", "Ajmer", "Kumbhalgarh Fort"],
    Sikkim: ["Gangtok", "Tsomgo Lake", "Nathu La Pass", "Rumtek Monastery", "Pelling"],
    TamilNadu: ["Chennai", "Madurai", "Coimbatore", "Ooty", "Kanyakumari"],
    Telangana: ["Charminar", "Birla Mandir", "Sri Chilkur Balaji Temple", "Salar Jang Museum", "Golconda"],
    Tripura: ["Unakoti", "Neer Mahal Palace", "Ujjayanta Palace", "Tripura Sundari Temple", "Jampui Hills"],
    Uttarkhand: ["Dehradun", "Nainital", "Rishikesh", "Haridwar", "Kedarnath"],
    Uttarpradesh: ["Agra", "Fatehpur Sikri", "Varanasi", "Mathura", "Vrindavan"],
    WestBengal: ["Kolkata", "Darjeeling", "Shantiniketan", "Kalimpong", "Sunderbans"]
  };
  const links = {
    "Cellular Jail": "https://en.wikipedia.org/wiki/Cellular_Jail",
    "Elephant Beach": "https://www.eternalandamans.com/havelock-island/elephant-beach",
    "Radhanagar Beach": "https://www.eternalandamans.com/havelock-island/radhanagar-beach",
    "Limestone Cave": "https://www.go2andaman.com/visit/limestone-caves-baratang/",
    "Port Blair": "https://en.wikipedia.org/wiki/Port_Blair",
    "Tirupati Balaji Temple": "https://en.wikipedia.org/wiki/Tirupati",
    "Amaravati": "https://en.wikipedia.org/wiki/Amaravati",
    "Suryalanka Beach": "https://www.makemytrip.com/tripideas/attractions/suryalanka-beach",
    "Yaganti Temple": "https://en.wikipedia.org/wiki/Yaganti_temple",
    "Kurnool":"https://kurnool.ap.gov.in/",
    "Tawang Monastery":"https://en.wikipedia.org/wiki/Tawang_Monastery",
    "Golden Pagoda":"https://en.wikipedia.org/wiki/Golden_Pagoda,_Namsai",
    "Namdapha National Park":"https://en.wikipedia.org/wiki/Namdapha_National_Park",
    "Sela Pass":"https://en.wikipedia.org/wiki/Sela_Pass",
    "Parshuram Kund":"https://en.wikipedia.org/wiki/Parshuram_Kund",
    "Kamakhya Temple":"https://en.wikipedia.org/wiki/Kamakhya_Temple",
    "Sualkuchi":"https://en.wikipedia.org/wiki/Sualkuchi",
    "Umananda Island":"https://en.wikipedia.org/wiki/Umananda_Island",
    "Kakochang Waterfall":"https://www.kaziranganationalpark-india.com/kakochang-waterfall.html",
    "Guwahati":"https://en.wikipedia.org/wiki/Guwahati",
    "Mahabodhi Temple":"https://whc.unesco.org/en/list/1056/",
    "Bodhi Tree":"https://en.wikipedia.org/wiki/Bodhi_Tree#:~:text=The%20Bodhi%20Tree%20(%22tree%20of,500%20BCE%20under%20this%20tree.",
    "Nalanda University":"https://en.wikipedia.org/wiki/Nalanda_University",
    "Patna Sahib":"https://en.wikipedia.org/wiki/Takht_Sri_Patna_Sahib",
    "Bodh Gaya":"https://en.wikipedia.org/wiki/Bodh_Gaya",
    "Rock Garden":"https://en.wikipedia.org/wiki/Rock_Garden_of_Chandigarh",
    "Rose Garden":"https://en.wikipedia.org/wiki/Zakir_Hussain_Rose_Garden",
    "Sukhna Lake": "https://en.wikipedia.org/wiki/Sukhna_Lake",
    "Elante Mall":"https://en.wikipedia.org/wiki/Elante_Mall",
    "Open Hand Monument":"https://en.wikipedia.org/wiki/Open_Hand_Monument",
    "Chitrakote Waterfalls":"https://en.wikipedia.org/wiki/Chitrakote_Falls",
    "Tirathgarh Waterfalls":"https://www.chhattisgarhtourism.in/tirathgarh_waterfall/",
    "Bhoramdeo Temple":"https://en.wikipedia.org/wiki/Bhoramdeo_Temple",
    "Kanger Valley National Park":"https://kangervalley.cg.nic.in/",
    "Sirpur":"https://www.chhattisgarhtourism.in/sirpur/#:~:text=About%20Sirpur&text=The%20town%20of%20sirpur%20has,kms%20from%20the%20capital%2C%20Raipur.",
    "Silvassa":"https://en.wikipedia.org/wiki/Silvassa",
    "Vanganga Lake Garden":"https://dnh.gov.in/tourist-place/vanganga-lake-garden/",
    "Hirwa Van Garden":"https://ddd.gov.in/centers/hirwa-van-garden/",
    "Island Garden Dadra Park":"https://www.trip.com/travel-guide/attraction/silvassa/island-garden-dadra-park-58286336/",
    "Butterfly Park":"https://www.newsbharati.com/Encyc/2018/1/23/Enthral-and-depart-yourself-into-this-mesmerising-Butterfly-Park-in-Silvassa.html",
    "Red Fort":"https://en.wikipedia.org/wiki/Red_Fort",
    "Jama Masjid":"https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi",
    "Swaminarayan Akshardham":"https://akshardham.com/",
    "Humayun's Tomb":"https://whc.unesco.org/en/list/232/",
    "India Gate":"https://en.wikipedia.org/wiki/India_Gate",
    "Lotus temple":"https://en.wikipedia.org/wiki/Lotus_Temple",
    "Baga Beach":"https://en.wikipedia.org/wiki/Baga,_Goa",
    "Basilica of Bom Jesus":"https://en.wikipedia.org/wiki/Basilica_of_Bom_Jesus",
    "Dudhsagar Falls":"https://en.wikipedia.org/wiki/Dudhsagar_Falls",
    "Fort Aguada":"https://en.wikipedia.org/wiki/Fort_Aguada",
    "Betalbatim beach":"https://goa.app/blog/bioluminescent-beach-goa",
    "Sabarmati Ashram":"https://en.wikipedia.org/wiki/Sabarmati_Ashram",
    "Statue of Unity":"https://en.wikipedia.org/wiki/Statue_of_Unity",
    "Ahmedabad":"https://en.wikipedia.org/wiki/Ahmedabad",
    "Rann of Kutch":"https://www.gujarattourism.com/kutch-zone/kutch/great-rann-of-kutch.html",
    "Saputara":"https://en.wikipedia.org/wiki/Saputara",
    "Sultanpur National Park":"https://en.wikipedia.org/wiki/Sultanpur_National_Park",
    "Kurukshetra": "https://en.wikipedia.org/wiki/Kurukshetra",
    "Surajkund": "https://en.wikipedia.org/wiki/Surajkund",
    "Yadavindra Gardens":"https://en.wikipedia.org/wiki/Yadavindra_Gardens",
    "Brahma Sarovar":"https://en.wikipedia.org/wiki/Brahma_Sarovar",
    "Shimla": "https://en.wikipedia.org/wiki/Shimla",
    "Manali": "https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh",
    "Dharamshala":"https://en.wikipedia.org/wiki/Dharamshala",
    "Kullu": "https://en.wikipedia.org/wiki/Kullu",
    "Chail":"https://en.wikipedia.org/wiki/Chail,_Himachal_Pradesh",
    "Hadimba Devi Temple":"https://en.wikipedia.org/wiki/Hidimba_Devi_Temple",
    "Srinagar": "https://en.wikipedia.org/wiki/Srinagar",
    "Gulmarg":"https://en.wikipedia.org/wiki/Gulmarg",
    "Pahalgam":"https://en.wikipedia.org/wiki/Pahalgam",
    "Leh-Ladakh":"https://en.wikipedia.org/wiki/Leh",
    "Vaishno Devi Temple":"https://en.wikipedia.org/wiki/Vaishno_Devi_Temple#:~:text=Vaishno%20Devi%20Temple%2C%20also%20known,mountain%20at%205%2C000%20feet%20elevation.",
    "Betla National Park":"https://forest.jharkhand.gov.in/en/betla-national-park",
    "Jubilee Park":"https://en.wikipedia.org/wiki/Jubilee_Park,_Jamshedpur",
    "Baidyanath Dham": "https://en.wikipedia.org/wiki/Baidyanath_Temple",
    "Hundru Falls": "https://ranchi.nic.in/tourist-place/hundru-waterfall/",
    "Deoghar":"https://en.wikipedia.org/wiki/Deoghar",
    "Bangalore":"https://en.wikipedia.org/wiki/Bangalore",
    "Mysore": "https://en.wikipedia.org/wiki/Mysore",
    "Coorg":"https://www.holidify.com/places/coorg/",
    "Hampi": "https://en.wikipedia.org/wiki/Hampi",
    "Gokarna": "https://en.wikipedia.org/wiki/Gokarna,_Karnataka",
    "Munnar":"https://en.wikipedia.org/wiki/Munnar",
    "Alleppey": "https://www.makemytrip.com/tripideas/places/alleppey",
    "Kochi":"https://en.wikipedia.org/wiki/Kochi",
    "Thekkady": "https://en.wikipedia.org/wiki/Thekkady",
    "Sree Padmanabhaswamy Temple":"https://en.wikipedia.org/wiki/Padmanabhaswamy_Temple",
    "Pangong Lake":"https://leh.nic.in/tourist-place/pangong/",
    "Lamayuru":"https://leh.nic.in/tourist-place/lamayuru/",
    "Zanskar Valley":"https://en.wikipedia.org/wiki/Zanskar",
    "Kargil": "https://en.wikipedia.org/wiki/Kargil",
    "Khardung La":"https://en.wikipedia.org/wiki/Khardung_La",
    "Agatti Island":"https://en.wikipedia.org/wiki/Agatti_Island",
    "Bangaram Island":"https://bangaramislandresort.in/",
    "Kavaratti Island":"https://en.wikipedia.org/wiki/Kavaratti",
    "Minicoy Island":"https://en.wikipedia.org/wiki/Minicoy",
    "Kadmat Island":"https://en.wikipedia.org/wiki/Kadmat_Island",
    "Khajuraho Temples":"https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments",
    "Gwalior Fort": "https://en.wikipedia.org/wiki/Gwalior_Fort",
    "Jabalpur": "https://en.wikipedia.org/wiki/Jabalpur",
    "Omkareshwar Jyotirlinga":"https://en.wikipedia.org/wiki/Omkareshwar_Temple",
    "Ujjain": "https://en.wikipedia.org/wiki/Ujjain",
    "Mumbai": "https://en.wikipedia.org/wiki/Mumbai",
    "Pune":"https://en.wikipedia.org/wiki/Pune",
    "Aurangabad":"https://en.wikipedia.org/wiki/Aurangabad",
    "Nashik":"https://en.wikipedia.org/wiki/Nashik",
    "Mahabaleshwar":"https://en.wikipedia.org/wiki/Mahabaleshwar",
    "Loktak Lake":"https://en.wikipedia.org/wiki/Loktak_Lake",
    "Kangla Fort":"https://en.wikipedia.org/wiki/Kangla_fort",
    "Imphal": "https://en.wikipedia.org/wiki/Imphal",
    "Khongjom War Memorial":"https://en.wikipedia.org/wiki/Khongjom_War_Memorial_Complex",
    "Thalon Cave": "https://chaloghumane.com/manipur/thalon-cave-in-manipur/",
    "Shillong":"https://en.wikipedia.org/wiki/Shillong",
    "Cherrapunji":"https://en.wikipedia.org/wiki/Cherrapunji",
    "Mawlynnong":"https://en.wikipedia.org/wiki/Mawlynnong",
    "Dawki":"https://en.wikipedia.org/wiki/Dawki",
    "Umiam Lake": "https://en.wikipedia.org/wiki/Umiam_Lake",
    "Kynrem falls":"https://en.wikipedia.org/wiki/Kynrem_Falls",
    "Champhai": "https://en.wikipedia.org/wiki/Champhai",
    "Reiek":"https://en.wikipedia.org/wiki/Reiek",
    "Lunglei": "https://en.wikipedia.org/wiki/Lunglei",
    "Vantawng Falls":"https://en.wikipedia.org/wiki/Vantawng_Falls",
    "Tam Dil":"https://en.wikipedia.org/wiki/Tam_Dil",
    "Kohima":"https://en.wikipedia.org/wiki/Kohima",
    "Dimapur":"https://en.wikipedia.org/wiki/Dimapur",
    "Dzukou Valley":"https://en.wikipedia.org/wiki/Dz%C3%BCko_Valley",
    "Touphema Village":"https://www.tourmyindia.com/states/nagaland/touphema-village.html",
    "Kohima War Cemetery": "https://en.wikipedia.org/wiki/Kohima_War_Cemetery",
    "Puri": "https://en.wikipedia.org/wiki/Puri",
    "Konark Sun Temple":"https://en.wikipedia.org/wiki/Konark_Sun_Temple",
    "Bhubaneswar":"https://en.wikipedia.org/wiki/Bhubaneswar",
    "Chilika Lake":"https://en.wikipedia.org/wiki/Chilika_Lake",
    "Raghurajpur Artist Village":"https://en.wikipedia.org/wiki/Raghurajpur",
    "Auroville":"https://en.wikipedia.org/wiki/Auroville",
    "Paradise Beach": "https://www.thrillophilia.com/attractions/paradise-beach",
    "Arikamedu": "https://en.wikipedia.org/wiki/Arikamedu",
    "Promenade Beach":"https://en.wikipedia.org/wiki/Promenade_Beach",
    "Basilica of the Sacred Heart of Jesus":"https://en.wikipedia.org/wiki/Basilica_of_the_Sacred_Heart_of_Jesus,_Pondicherry",
    "Golden Temple":"https://en.wikipedia.org/wiki/Golden_Temple",
    "Jallianwala Bagh":"https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre",
    "Wagah Border":"https://en.wikipedia.org/wiki/Wagah",
    "Anandpur Sahib":  "https://en.wikipedia.org/wiki/Anandpur_Sahib",
    "Mohali":"https://en.wikipedia.org/wiki/Mohali",
    "Jaipur": "https://en.wikipedia.org/wiki/Jaipur",
    "Udaipur": "https://en.wikipedia.org/wiki/Udaipur",
    "Jaisalmer Fort": "https://en.wikipedia.org/wiki/Jaisalmer_Fort",
    "Ajmer":"https://en.wikipedia.org/wiki/Ajmer",
    "Kumbhalgarh Fort": "https://en.wikipedia.org/wiki/Kumbhalgarh",
    "Gangtok": "https://en.wikipedia.org/wiki/Gangtok",
    "Tsomgo Lake":"https://en.wikipedia.org/wiki/Lake_Tsomgo",
    "Nathu La Pass": "https://en.wikipedia.org/wiki/Nathu_La",
    "Rumtek Monastery":"https://en.wikipedia.org/wiki/Rumtek_Monastery",
    "Pelling": "https://en.wikipedia.org/wiki/Pelling",
    "Chennai":"https://en.wikipedia.org/wiki/Chennai",
    "Madurai": "https://en.wikipedia.org/wiki/Madurai",
    "Coimbatore": "https://en.wikipedia.org/wiki/Coimbatore",
    "Ooty": "https://en.wikipedia.org/wiki/Ooty",
    "Kanyakumari": "https://en.wikipedia.org/wiki/Kanyakumari",
    "Charminar":"https://en.wikipedia.org/wiki/Charminar",
    "Birla Mandir":"https://en.wikipedia.org/wiki/Birla_Mandir,_Hyderabad",
    "Sri Chilkur Balaji Temple": "https://en.wikipedia.org/wiki/Chilkoor_Balaji_Temple",
    "Salar Jang Museum":"https://www.salarjungmuseum.in/",
    "Golconda":"https://en.wikipedia.org/wiki/Golconda",
    "Unakoti":"https://en.wikipedia.org/wiki/Unakoti",
    "Neer Mahal Palace": "https://en.wikipedia.org/wiki/Neermahal",
    "Ujjayanta Palace":"https://en.wikipedia.org/wiki/Ujjayanta_Palace",
    "Tripura Sundari Temple": "https://en.wikipedia.org/wiki/Tripura_Sundari_Temple",
    "Jampui Hills":"https://en.wikipedia.org/wiki/Jampui_Hills",
    "Dehradun": "https://en.wikipedia.org/wiki/Dehradun",
    "Nainital":"https://en.wikipedia.org/wiki/Nainital",
    "Rishikesh": "https://en.wikipedia.org/wiki/Rishikesh",
    "Haridwar": "https://en.wikipedia.org/wiki/Haridwar",
    "Kedarath": "https://badrinath-kedarnath.gov.in/AboutUs/shri-kedarnath.aspx",
    "Agra":"https://en.wikipedia.org/wiki/Agra",
    "Fatehpur Sikri": "https://en.wikipedia.org/wiki/Fatehpur_Sikri",
    "Varanasi": "https://en.wikipedia.org/wiki/Varanasi",
    "Mathura":"https://en.wikipedia.org/wiki/Mathura",
    "Vrindavan":"https://en.wikipedia.org/wiki/Vrindavan",
    "Kolkata":"https://en.wikipedia.org/wiki/Kolkata",
    "Darjeeling": "https://en.wikipedia.org/wiki/Darjeeling",
    "Shantiniketan": "https://en.wikipedia.org/wiki/Shantiniketan",
    "Kalimpong": "https://en.wikipedia.org/wiki/Kalimpong",
    "Sunderbans": "https://en.wikipedia.org/wiki/Sundarbans"

    };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  const getImageSrc = (place) => {
    try {
      return require(`../../public/images/${place.toLowerCase()}.webp`);
    } catch (err) {
      try {
        return require(`../../public/images/${place.toLowerCase()}.jpg`);
      } catch (err) {
        return 'images/placeholder.jpg';
      }
    }
  };

  return (
    <div>
      <header>
        <h1>Places in India</h1>
        <nav>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/add-place">Add Place</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        {Object.keys(places).map((place) => (
          <div key={place} className="imageContainer" onClick={() => handlePlaceClick(place)}>
            <img src={getImageSrc(place)} alt={place} />
            <p>{place.split(/(?=[A-Z])/).join(' ')}</p>
            {selectedPlace === place && (
              <div className="detailsContainer">
                <h2>Visiting Places in {selectedPlace.split(/(?=[A-Z])/).join(' ')}</h2>
                <ul>
                  {places[selectedPlace].map((detail) => (
                    <li key={detail}>
                      <a href={links[detail] || `https://www.google.com/search?q=${detail}`} target="_blank" rel="noopener noreferrer">
                        {detail}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
