const menu = [{
        id: 1,
        title: "eggless pineapple cake",
        category: "classic cake",
        price: 280,
        img: "image/1-eggless-pineapple-cake.jpg",
        desc: `Moist vanilla sponge layered with pineapple cream. Topped with fresh pineapple and cherries.`,
    },
    {
        id: 2,
        title: "swiss chocolate cake",
        category: "classic cake",
        price: 320,
        img: "image/2-swiss-chocolate-cake.jpg",
        desc: `Rich chocolate layers with silky chocolate ganache.`,
    },
    {
        id: 3,
        title: "orange cake",
        category: "classic cake",
        price: 300,
        img: "image/3-orange-cake.jpg",
        desc: `Zesty orange sponge with a citrus glaze.`,
    },
    {
        id: 4,
        title: "lemon custard cake",
        category: "classic cake",
        price: 310,
        img: "image/4-lemon-custard-cake.jpg",
        desc: `Soft cake layered with tangy lemon custard.`,
    },
    {
        id: 5,
        title: "butterscotch cake",
        category: "classic cake",
        price: 330,
        img: "image/5-butterscotch-cake.jpg",
        desc: `Caramel sponge with crunchy butterscotch praline.`,
    },
    {
        id: 6,
        title: "rose milk cake",
        category: "floral & fruity special",
        price: 290,
        img: "image/6-rose-milk cake.jpg",
        desc: `Fluffy sponge infused with rose milk syrup.`,
    },
    {
        id: 7,
        title: "white chocolate raspberry cake",
        category: "floral & fruity special",
        price: 340,
        img: "image/7-white-chocolate-raspberrry-cake.jpg",
        desc: `White chocolate layers with raspberry filling.`,
    },
    {
        id: 8,
        title: "vanilla honey lemon cake",
        category: "floral & fruity special",
        price: 300,
        img: "image/8-vanilla-honey lemon cake.jpg",
        desc: `Light vanilla sponge with honey and lemon glaze.`,
    },
    {
        id: 9,
        title: "strawberry cheesecake",
        category: "cheesecakes collection",
        price: 350,
        img: "image/9-strawberry-chesscake.jpg",
        desc: `Creamy cheesecake with fresh strawberries.`,
    },
    {
        id: 10,
        title: "ferrero rocher cheesecake",
        category: "cheesecakes collection",
        price: 370,
        img: "image/10-ferrero-rocher-nutella-cheesecake.jpg",
        desc: `Chocolate cheesecake with Ferrero Rocher pieces.`,
    },
    {
        id: 11,
        title: "passionfruit cheesecake",
        category: "cheesecakes collection",
        price: 360,
        img: "image/11-passionfruit-cheesecake.jpg",
        desc: `Creamy cheesecake topped with a tangy passionfruit glaze — sweet, tart, and tropical.`,
    },
    {
        id: 12,
        title: "lotus biscoff cheesecake",
        category: "cheesecakes collection",
        price: 380,
        img: "image/12-lotus-biscoff-cheesecake.jpg",
        desc: `Cheesecake with Lotus Biscoff crust and topping.`,
    },
    {
        id: 13,
        title: "white chocolate raspberry cheesecake",
        category: "cheesecakes collection",
        price: 360,
        img: "image/13-white-chocolate-raspberrry-cheesecake.jpg",
        desc: `Cheesecake with white chocolate and raspberry swirl.`,
    },
    {
        id: 14,
        title: "rasmalai tres leches cake",
        category: "classic cake",
        price: 350,
        img: "image/14-rasmalai-tres-leches.jpg",
        desc: `Tres leches cake soaked in rasmalai milk, topped with rasmalai.`,
    }
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo"   onerror="this.src='placeholder.jpg'" '"  /> 
            <div class="item-name">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">₹${item.price}</h4>
                </header>
                <p class="item-desc">${item.desc}</p>
            </div>
        </article>`;
    });
    sectionCenter.innerHTML = displayMenu.join("");
}

function displayMenuButtons() {
    const categories = menu.reduce(
        (values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );

    const categoryBtns = categories.map((category) => {
        return `<button class="filter-btn" type="button" data-id="${category}">
            ${category}
        </button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => menuItem.category === category);

            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}