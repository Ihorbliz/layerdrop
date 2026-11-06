// The roadmap lives here, for both languages. Edit this list and nothing else.
// To add a point, copy a block in { } and change the text. A group with no items stays hidden.
// No dates or version numbers: only what we plan to do. Write plans, not finished features.
var ROADMAP = [
  {
    uk: "Зараз",
    en: "Now",
    items: [
      {
        uk: ["Публікація у Figma Community", "Готуємо плагін до рецензування, щоб його можна було встановити."],
        en: ["Publishing on Figma Community", "We're preparing the plugin for review so that it can be installed."]
      }
    ]
  },
  {
    uk: "Далі",
    en: "Next",
    items: [
      {
        uk: ["Власне розширення Chrome", "Перша версія зніматиме всю сторінку, зокрема за логіном і на JavaScript, разом із вмістом, що з'являється не одразу, і hover. Результат передаватиме файлом у плагін, а дані на сервер не надсилатиме. Банери, спливаючі вікна й темну тему можна буде за вибором отримати окремими фреймами. Картинки, які неможливо прочитати зі сторінки, братимуться зі знімка екрана."],
        en: ["Our own Chrome extension", "The first version will capture the whole page, including pages behind a login and pages built with JavaScript, along with content that appears late and hover states. It will pass the result to the plugin as a file and won't send data to a server. You'll be able to get banners, pop-ups and dark mode as separate frames if you choose. Images that can't be read from the page will come from a screenshot."]
      },
      {
        uk: ["Посилання прототипу", "Посилання між імпортованими сторінками, якорі й зовнішні адреси."],
        en: ["Prototype links", "Links between imported pages, anchors and outside addresses."]
      },
      {
        uk: ["Темна тема", "Другий набір фреймів для сайтів, що підтримують темну тему."],
        en: ["Dark mode", "A second set of frames for sites that support dark mode."]
      },
      {
        uk: ["Повторювані блоки як компоненти", "Однакові картки й кнопки стануть компонентом і його копіями."],
        en: ["Repeated blocks as components", "Identical cards and buttons will become a component and its instances."]
      },
      {
        uk: ["Hover-стани", "Кнопки й посилання стануть компонентами з варіантами."],
        en: ["Hover states", "Buttons and links will become components with variants."]
      }
    ]
  },
  {
    uk: "Далі в розширенні",
    en: "Later in the extension",
    items: [
      {
        uk: ["Шлях сайтом", "Запис шляху сайтом із клікабельним прототипом."],
        en: ["Paths through a site", "Recording a path through a site, with a clickable prototype."]
      },
      {
        uk: ["Вибраний блок", "Знімання лише вибраного блока сторінки."],
        en: ["A chosen block", "Capturing only the block you choose on a page."]
      },
      {
        uk: ["Токени сайту", "Перенесення токенів сайту у змінні Figma."],
        en: ["Site tokens", "Turning a site's tokens into Figma variables."]
      },
      {
        uk: ["Точніші компоненти", "Точніше розпізнавання компонентів на сторінці."],
        en: ["More accurate components", "More accurate recognition of components on a page."]
      },
      {
        uk: ["Додаткові стани", "Стани focus, active, disabled і закріплена шапка окремими фреймами з вибором у плагіні."],
        en: ["More states", "Focus, active and disabled states and a sticky header as separate frames, chosen in the plugin."]
      }
    ]
  },
  {
    uk: "Ідеї",
    en: "Ideas",
    items: []
  }
];

// Draws the list on the page. No need to change anything below.
(function () {
  var root = document.getElementById("roadmap");
  if (!root) return;
  var lang = document.documentElement.lang === "uk" ? "uk" : "en";
  ROADMAP.forEach(function (group) {
    if (!group.items.length) return;
    var title = document.createElement("h2");
    title.textContent = group[lang];
    root.appendChild(title);
    var list = document.createElement("ul");
    list.className = "rows";
    group.items.forEach(function (item) {
      var row = document.createElement("li");
      var label = document.createElement("span");
      label.className = "label";
      label.textContent = item[lang][0];
      var text = document.createElement("div");
      text.className = "text";
      text.textContent = item[lang][1];
      row.appendChild(label);
      row.appendChild(text);
      list.appendChild(row);
    });
    root.appendChild(list);
  });
})();
