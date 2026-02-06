(function () {
  // 1) Данные: массив services
  const services = [
    { id: 1, category: "Уголовные", name: "Ведение судебных процессов по уголовным делам", price: 1000, description: "Участие по уголовным делам в качестве представителя потерпевшего, а также защитника подсудимого в порядке статьи 49 УПК РФ (цена договорная)" },
    { id: 2, category: "Другое", name: "Ведение судебных процессов по гражданским делам", price: 5000, description: "Споры вытекающие из семейных отношений (раздел имущества, алименты, установление порядка общения с детьми, определение места жительства детей и прочее); Споры по жилищным делам; Возмещение ущерба от ДТП; Возмещение морального вреда; Взыскание долга." },
    { id: 3, category: "Кредитные", name: "Консультация по кредитам", price: 1000, description: "Помощь в переговорах с банками, проверка документов, условия кредитного договора." },
    { id: 4, category: "Имущественные", name: "Ведение судебных процессов по делам о недвижимости", price: 1000, description: "Цена договорная." },
    { id: 5, category: "Другое", name: "Опека и попечительство", price: 1000, description: "Цена договорная" },
    { id: 6, category: "Другое", name: "Юридические консультации", price: 1000, description: "Широкий спектр базовых юридических консультаций по различным вопросам." },
    { id: 7, category: "Другое", name: "Консультации участников СВО и членов их семьи", price: 1000, description: "Льготы, установление фактов, вопросы прохождения службы, споры по выплатам родственникам погибших военнослужащих и приравненных к ним лиц, признание недостойным наследником, признание фактическим воспитателем погибшего военнослужащего." },
    { id: 8, category: "Другое", name: "Ведение судебных процессов", price: 1000, description: "Ведение судебных процессов" },
    { id: 9, category: "Другое", name: "Ведение судебных процессов с участием юридических лиц", price: 1000, description: "Цена договорная." },
    { id: 10, category: "Другое", name: "Представительство по мелким искам", price: 1000, description: "Цена договорная." },
    { id: 11, category: "Другое", name: "Участие в судебных процессах по делам военнослужащих и участников СВО", price: 1000, description: "Цена договорная." },
    { id: 12, category: "Административные", name: "Административные судопроизводства", price: 1000, description: "Цена договорная." },
    { id: 13, category: "Другое", name: "Представительство в делах о банкротстве", price: 1000, description: "Цена договорная." },
    { id: 14, category: "Административные", name: "Дела об административных правонарушениях", price: 1000, description: "Цена договорная." },
    { id: 15, category: "Имущественные", name: "Возмещение ущерба от ДТП", price: 2000, description: "Представительства интересов Истца (Ответчика) по делам о возмещении вреда здоровью, морального вреда, имущественного вреда, причиненного в результате ДТП." },
    { id: 16, category: "Другое", name: "Возмещение морального вреда", price: 2000, description: "Возмещение вреда от преступления или административного правонарушения, незаконного уголовного или административного преследования." },
    { id: 17, category: "Кредитные", name: "Долговые обязательства", price: 2000, description: "Представительство Истца (Ответчика) по делам о взыскании долга, в том числе спорам с кредитными организациями (банками)." },
    { id: 18, category: "Имущественные", name: "Споры по делам о наследстве", price: 5000, description: "Оспаривание завещания, признание недостойным наследником, споры по долговым обязательствам наследодателя, споры по выплатам родственникам погибших военнослужащих и приравненных к ним лиц." },
     { id: 19, category: "Семейные", name: "Семейные споры", price: 2000, description: "Раздел имущества, алименты, установление порядка общения с детьми, определение места жительства детей и прочее." },
    { id: 20, category: "Другое", name: "Споры по трудовым отношениям", price: 1000, description: "Цена договорная." },
    { id: 21, category: "Имущественные", name: "Споры по жилищным делам", price: 1000, description: "Вселение, выселение, установление порядка пользования жилым помещением, возмещение ущерба от повреждений имущества (залив, пожар и пр.)" },
    { id: 22, category: "Кредитные", name: "Споры с кредитными организациями (банками)", price: 5000, description: "Представительство Истца (Ответчика) по делам о взыскании долга, в том числе по кредитам оформленными (телефонными мошенниками)." },
    { id: 23, category: "Другое", name: "Составление жалоб, заявлений, ходатайств", price: 1000, description: "Цена договорная." },
    
    
  ];

  // 2) DOM-элементы
  const listContainer = document.querySelector('.uslugy-list');
  const leftElements = Array.from(document.querySelectorAll('.uslugy-list__element'));
  const cardName = document.querySelector('.uslugy-card__name');
  const cardPrice = document.querySelector('.uslugy-card__money-precent');
  const cardDescription = document.querySelector('.uslugy-card__description');
  const cardImage = document.querySelector('.uslugy-card__image');
  const cardBar = document.querySelector('.uslugy-card__money-bar');
  
  // 3) Элементы фильтров
  const filterElements = document.querySelectorAll('.uslugy-filter');

  // 4) Функция отображения услуги в карточке
  function showSvc(svc) {
    if (!svc) return;
    cardName && (cardName.textContent = svc.name);
    cardPrice && (cardPrice.textContent = Number(svc.price).toLocaleString('ru-RU'));
    cardDescription && (cardDescription.textContent = svc.description);
  }

  // 5) Функция фильтрации услуг по категории
  function filterServices(category) {
    // Убираем активный класс у всех фильтров
    filterElements.forEach(filter => filter.classList.remove('active'));
    
    // Добавляем активный класс выбранному фильтру
    const activeFilter = Array.from(filterElements).find(filter => {
      if (category === "Все") return filter.textContent === "Все";
      return filter.textContent === category;
    });
    if (activeFilter) {
      activeFilter.classList.add('active');
    }
    
    // Фильтруем услуги
    let filteredServices;
    if (category === "Все") {
      filteredServices = services;
    } else {
      filteredServices = services.filter(service => service.category === category);
    }
    
    // Обновляем отображение услуг
    updateServicesDisplay(filteredServices);
    
    // Показываем первую услугу из отфильтрованного списка
    if (filteredServices.length > 0) {
      const firstSvc = filteredServices[0];
      showSvc(firstSvc);
      
      // Обновляем активный элемент в списке
      leftElements.forEach(el => {
        const idAttr = el.getAttribute('id');
        if (idAttr && Number(idAttr) === firstSvc.id) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }
  }

  // 6) Функция обновления отображения услуг
  function updateServicesDisplay(servicesToShow) {
    // Скрываем все элементы
    leftElements.forEach(el => {
      el.style.display = 'none';
    });
    
    // Показываем только те элементы, которые соответствуют фильтру
    servicesToShow.forEach(service => {
      const element = leftElements.find(el => {
        const idAttr = el.getAttribute('id');
        return idAttr && Number(idAttr) === service.id;
      });
      if (element) {
        element.style.display = 'flex';
      }
    });
  }

  // 7) Инициализация при загрузке
  function init() {
    // Показываем все услуги по умолчанию
    filterServices("Все");
    
    // Добавляем обработчики кликов на фильтры
    filterElements.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.textContent;
        filterServices(category);
      });
    });
    
    // Добавляем обработчики кликов на элементы услуг
    leftElements.forEach(el => {
      const idAttr = el.getAttribute('id');
      const svcId = idAttr ? Number(idAttr) : null;
      el.addEventListener('click', () => {
        if (svcId != null) {
          const svc = services.find(s => s.id === svcId);
          if (svc) {
            showSvc(svc);
            leftElements.forEach(x => x.classList.remove('active'));
            el.classList.add('active');
          }
        }
      });
    });
  }

  // Запуск после загрузки DOM
  document.addEventListener('DOMContentLoaded', init);

})();