// 1) БАЗА ПРОФИЛЕЙ (имена должны совпадать с тем, что вводят)
const profiles = {
    "Темирбек Уалихан": {
        photo: "hunters.jpg",

    },

    "Турарбек Бекасыл": {
        photo: " hunters.png",

    },


    "Балтабай Абзал": {
        photo: "hunters.jpg",

    },

    "Сакенов Еркебулан": {
        photo: "hunters.jpg",

    },


    "Акжолтай Торехан": {
        photo: "hunters.jpg",


    },

    "Сайдилов Дамир ": {
        photo: "hunters.jpg",

    },

    "Арманов Ади": {
        photo: "hunters.jpg",

    },
    "Нурәбил Азамат ": {
        photo: "hunters.jpg",

    },


    "Куликов Искандер": {
        photo: "hunters.jpg",

    },


    "Кудабаев Нурасыл": {
        photo: "hunters.jpg",

    },



    "Марлен Бактияр": {
        photo: "hunters.jpg",

    },

    "Жунис Елдос ": {
        photo: "hunters.jpg",

    },
    "Альжанов Дулат": {
        photo: "hunters.jpg",

    },

    "Исокжан Мансур": {
        photo: "hunters.jpg",

    },
    "Абзал": {
        photo: "hunters.jpg",

    },
    "Темирбек Жандос": {
        photo: "hunters.jpg",

    },
    "Рысбек Нурасыл": {
        photo: "hunters.jpg",

    },

    "Батырбек Адиль": {
        photo: "hunters.jpg",

    },

    "Ислам Давид": {
        photo: "hunters.jpg",

    },

    "Жумабай Нұрдаулет": {
        photo: "hunters.jpg",

    },
    "Тургунбаев Серик": {
        photo: "hunters.jpg",

    },

    "Сарсенбаев Алдияр ": {
        photo: "hunters.jpg",

    },

    "Куандык Нуржигит": {
        photo: "hunters.jpg",

    },

    "Джумагалиев Амир": {
        photo: "hunters.jpg",

    },
    "Абдукиымов Асым": {
        photo: "hunters.jpg",

    },
    "Масимов Мансур": {
        photo: "hunters.jpg",

    },

    "Какен Ерсултан": {
        photo: "hunters.jpg",

    },

    "Кудайберген Бакыт": {
        photo: "hunters.jpg",

    },
    "Тян Денис": {
        photo: "hunters.jpg",

    },
    "Есенхан Максат": {
        photo: "hunters.jpg",

    },


    "Айтказы Алихан": {
        photo: "hunters.jpg",

    },
    "Ернатулы Улар": {
        photo: "hunters.jpg",

    },

    "Ертай Ергали": {
        photo: "hunters.jpg",

    },

    "Рауан": {
        photo: "hunters.jpg",

    },


    "Рахимжанов Алишер": {
        photo: "hunters.jpg",

    },





};

function checkUser() {
    const input = document.getElementById("nameInput");
    if (!input) return;

    const inputName = input.value.trim();

    if (!inputName) {
        alert("Введите имя");
        return;
    }

    const formattedName = inputName
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    if (profiles[formattedName]) {
        localStorage.setItem("soldierName", formattedName);
        window.location.href = "reveal.html";
    } else {
        alert("Профиль не найден");
    }
}


// кнопка reveal → profile
function goProfile() {
    window.location.href = "profile.html";
}


// автозаполнение profile.html
if (document.getElementById("profilePhoto")) {

    let name = localStorage.getItem("soldierName") || "";

    name = name
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const data = profiles[name];

    if (data) {
        document.getElementById("profilePhoto").src = data.photo;
        document.getElementById("profileName").innerText = name;
    }

    const wishElement = document.getElementById("profileWish");
    if (wishElement) {
        wishElement.innerText =
            "Желаем тебе уверенности, сил и больших успехов! С любовью, Hunters ❤️";
    }
} 
