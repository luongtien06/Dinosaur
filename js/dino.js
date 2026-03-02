// 1. Danh sách dữ liệu
const dinos = [
    // Carnivores
    {
        name: "Indoraptor",
        category: "carnivores",
        img: "img/indoraptor.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Legendary •  Evol 4",
        hp: "10181",
        atk: "5302"
    },
    {
        name: "Indoraptor Gen 2",
        category: "carnivores",
        img: "img/indoraptor gen 2.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 3",
        hp: "14045",
        atk: "4389"
    },
    {
        name: "Chromaspinus",
        category: "carnivores",
        img: "img/chromaspinus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "11161",
        atk: "3488"
    },
    {
        name: "Scorpios Rex",
        category: "carnivores",
        img: "img/scorpios.png",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "9359",
        atk: "3957"
    },
    {
        name: "Acrocanthosaurus",
        category: "carnivores",
        img: "img/acrocanthosaurus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "4309",
        atk: "1646"
    },
    {
        name: "Concavenator",
        category: "carnivores",
        img: "img/concavenator.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "3352",
        atk: "1945"
    },
    {
        name: "Rajastega",
        category: "carnivores",
        img: "img/rajastega.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "5044",
        atk: "1742"
    },
    {
        name: "Alangasaurus",
        category: "carnivores",
        img: "img/alangasaurus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Common • Evol 4",
        hp: "804",
        atk: "377"
    },
    {
        name: "Indominus Rex",
        category: "carnivores",
        img: "img/indominus.png",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "5034",
        atk: "2074"
    },
    {
        name: "Indominus Rex Gen 2",
        category: "carnivores",
        img: "img/indominus 2.png",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "6536",
        atk: "2042"
    },
    {
        name: "Proceratosaurus",
        category: "carnivores",
        img: "img/proceratosaurus.png",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "2681",
        atk: "2155"
    },
    {
        name: "Pachygalosaurus",
        category: "carnivores",
        img: "img/pachygalosaurus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "18006",
        atk: "2134"
    },
    {
        name: "Spinotasuchus",
        category: "carnivores",
        img: "img/spinotasuchus.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Super Rare • Evol 4",
        hp: "4469",
        atk: "2394"
    },
    {
        name: "Dimetrocarnus",
        category: "carnivores",
        img: "img/dimetrocarnus.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "5075",
        atk: "1995"
    },
    {
        name: "Spinoraptor",
        category: "carnivores",
        img: "img/spinoraptor.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Super Rare • Evol 4",
        hp: "2715",
        atk: "1037"
    },
    {
        name: "Tanycolagreus",
        category: "carnivores",
        img: "img/tanycolagreus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "5506",
        atk: "1272"
    },
    {
        name: "Tyranosaurus Rex",
        category: "carnivores",
        img: "img/tyranosaurus rex 1.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "1603",
        atk: "612"
    },
    {
        name: "Tyranosaurus Rex Gen 2",
        category: "carnivores",
        img: "img/tyranosaurus rex 2.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "1915",
        atk: "599"
    },
    {
        name: "Velociraptor",
        category: "carnivores",
        img: "img/velociraptor 1.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Super Rare • Evol 4",
        hp: "800",
        atk: "306"
    },
    {
        name: "Velociraptor Gen 2",
        category: "carnivores",
        img: "img/velociraptor 2.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Super Rare • Evol 4",
        hp: "1023",
        atk: "320"
    },
    {
        name: "Spinosaurus Rebirth",
        category: "carnivores",
        img: "img/spinosaurus rebirth.png",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "3486",
        atk: "2262"
    },
    {
        name: "Blue",
        category: "carnivores",
        img: "img/blue.png",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "1701",
        atk: "1240"
    },

    // Herbivores
    {
        name: "Armormata",
        category: "herbivores",
        img: "img/armormata.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "11664",
        atk: "3645"
    },
      {
        name: "Gigakylocephalus",
        category: "herbivores",
        img: "img/gigakylocephalus.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Super Rare • Evol 4",
        hp: "6546",
        atk: "1851"
    },
    {
        name: "Monostegotops",
        category: "herbivores",
        img: "img/monostegotops.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Super Rare • Evol 4",
        hp: "6033",
        atk: "1885"
    },
    {
        name: "Eolambia",
        category: "herbivores",
        img: "img/eolambia.png",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "3830",
        atk: "1796"
    },
    {
        name: "Stegosaurus",
        category: "herbivores",
        img: "img/stegosaurus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Super Rare • Evol 4",
        hp: "982",
        atk: "251"
    },
    {
        name: "Apatosaurus",
        category: "herbivores",
        img: "img/apatosaurus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "7182",
        atk: "748"
    },
    {
        name: "Brachiosaurus",
        category: "herbivores",
        img: "img/brachiosaurus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "2959",
        atk: "925"
    },
    {
        name: "Deinocheirus",
        category: "herbivores",
        img: "img/deinocheirus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "1264",
        atk: "922"
    },
    {
        name: "Pachyceratops",
        category: "herbivores",
        img: "img/pachyceratops.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Rare • Evol 4",
        hp: "2511",
        atk: "642"
    },
    {
        name: "Unaysaurus",
        category: "herbivores",
        img: "img/unaysaurus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "1759",
        atk: "449"
    },
    {
        name: "Unayrhynchus",
        category: "herbivores",
        img: "img/unayrhynchus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "4723",
        atk: "1208"
    },

    // Pterosaurs
    {
        name: "Tapejalocephalus",
        category: "pterosaurs",
        img: "img/tapejalocephalus.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Rare • Evol 4",
        hp: "6017",
        atk: "1905"
    },
    {
        name: "Suchoripterus",
        category: "pterosaurs",
        img: "img/sucho.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "3771",
        atk: "1178"
    },
    {
        name: "Aerotitan",
        category: "pterosaurs",
        img: "img/aerotitan.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Super Rare • Evol 4",
        hp: "689",
        atk: "359"
    },
    {
        name: "Pterodactylus",
        category: "pterosaurs",
        img: "img/pterodactylus.png",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "3352",
        atk: "1945"
    },
    {
        name: "Pelecachtylus",
        category: "pterosaurs",
        img: "img/pelecachtylus.jpg",
        tag: "Super Hybrid",
        tagClass: "hybrid",
        meta: "Common • Evol 4",
        hp: "2765",
        atk: "864"
    },
    {
        name: "Tapejalosaurus",
        category: "pterosaurs",
        img: "img/tapejalosaurus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Rare • Evol 4",
        hp: "3007",
        atk: "940"
    },
    {
        name: "Tropeogopterus",
        category: "pterosaurs",
        img: "img/tropeogopterus.png",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "2109",
        atk: "805"
    },
    {
        name: "Eudimorphodon",
        category: "pterosaurs",
        img: "img/eudimorphodon.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "4788",
        atk: "1496"
    },
    {
        name: "Limnorhynchus",
        category: "pterosaurs",
        img: "img/limnorhynchus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Common • Evol 4",
        hp: "1096",
        atk: "343"
    },

    // Amphibians
   {
        name: "Gorgosuchus",
        category: "amphibians",
        img: "img/Gorgosuchus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "9235",
        atk: "2361"
   },
   {
        name: "Ichthyostega",
        category: "amphibians",
        img: "img/ichthyostega.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "1943",
        atk: "570"
   },
   {
        name: "Koolasaurus",
        category: "amphibians",
        img: "img/koolasaurus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "3864",
        atk: "1476"  
   },
   {
        name: "Mastodonsaurus",
        category: "amphibians",
        img: "img/mastodonsaurus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "4788",
        atk: "1496"
   },
   {
        name: "Microposaurus",
        category: "amphibians",
        img: "img/microposaurus.jpg",
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "1570",
        atk: "491"
   },
   {
        name: "Nundagosaurus",
        category: "amphibians",
        img: "img/nundagosaurus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Rare • Evol 4",
        hp: "2328",
        atk: "595"
   },
   {
        name: "Ostaposaurus",
        category: "amphibians",
        img: "img/ostaposaurus.jpg",
        tag: "Hybrid",
        tagClass: "hybrid",
        meta: "Legendary • Evol 4",
        hp: "5149",
        atk: "1967"
   },
   {
        name: "Prestosuchus",
        category: "amphibians",
        img: "img/prestosuchus.jpg",    
        tag: "Default",
        tagClass: "Default",
        meta: "Legendary • Evol 4",
        hp: "3591",
        atk: "1870"
   }
];

// 2. Hàm hiển thị 
function renderDinos(data) {
    const container = document.getElementById('dino-list');
    if (!container) return;

    // Nếu không tìm thấy kết quả khi search
    if (data.length === 0) {
        container.innerHTML = `<h2 style="grid-column: 1/-1; text-align: center; opacity: 0.5;">No dinosaurs found... 🦖</h2>`;
        return;
    }

    const html = data.map(dino => `
        <div class="dino-card" data-name="${dino.name}">
            <div class="dino-img">
                <img src="${dino.img}" alt="${dino.name}">
                <span class="tag ${dino.tagClass.toLowerCase()}">🧬 ${dino.tag}</span>
            </div>
            <div class="dino-body">
                <h3 class="dino-name">${dino.name}</h3>
                <p class="dino-meta">${dino.meta}</p>
                <div class="dino-stats">
                    <span class="stat h">🩸 ${dino.hp}</span>
                    <span class="stat a">⚔️ ${dino.atk}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

function init() {
    // Lấy tên file
    const path = window.location.pathname;
    const currentPage = path.split("/").pop().toLowerCase();

    let categoryToFilter = "";

    // Phân loại
    switch (currentPage) {
        case "carni.html":
            categoryToFilter = "carnivores";
            break;
        case "herbi.html":
            categoryToFilter = "herbivores";
            break;
        case "pter.html":
            categoryToFilter = "pterosaurs";
            break;
        case "amphi.html":
            categoryToFilter = "amphibians";
            break;
    }
    const pageDinos = categoryToFilter ? 
        dinos.filter(d => d.category === categoryToFilter) : 
        dinos;

    renderDinos(pageDinos);

    // Xử lý tìm kiếm
    const searchInput = document.querySelector(".search-box input");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const keyword = searchInput.value.toLowerCase().trim();
            const searchResult = pageDinos.filter(d => 
                d.name.toLowerCase().includes(keyword)
            );
            renderDinos(searchResult);
        });
    }
}

// Chạy khởi tạo
document.addEventListener("DOMContentLoaded", init);

