(function () {
  // 1) Данные: массив services
  const services = [
    { id: 1, category: "Уголовные", name: "Защита по уголовному делу", price: 1000, description: "Полный анализ дела, консультации, участие в следственных действиях и защита ваших интересов." },
    { id: 2, category: "Административные", name: "Выезд через госорган", price: 800, description: "Консультации по административным нарушениям, помощь в составлении жалоб и апелляций." },
    { id: 3, category: "Кредитные", name: "Консультация по кредитам", price: 1200, description: "Помощь в переговорах с банками, проверка документов, условия кредитного договора." },
    { id: 4, category: "Имущесвенные", name: "Раздел имущества", price: 1500, description: "Юридическое сопровождение при разделе имущества, споры между супругами." },
    { id: 5, category: "Семейные", name: "Опека и попечительство", price: 900, description: "Юридическая помощь в вопросах опеки, уход за детьми и договорённости с органами опеки." },
    { id: 6, category: "Другое", name: "Общие юридические консультации", price: 600, description: "Широкий спектр базовых юридических консультаций по различным вопросам." }
  ];

  // 2) DOM-элементы
  const listContainer = document.querySelector('.uslugy-list');
  const leftElements = Array.from(document.querySelectorAll('.uslugy-list__element'));
  const cardName = document.querySelector('.uslugy-card__name');
  const cardPrice = document.querySelector('.uslugy-card__money-precent');
  const cardDescription = document.querySelector('.uslugy-card__description');
  const cardImage = document.querySelector('.uslugy-card__image');
  const cardBar = document.querySelector('.uslugy-card__money-bar');

  // 3) Инициализация показа первого элемента при загрузке
  function showSvc(svc) {
    if (!svc) return;
    cardName && (cardName.textContent = svc.name);
    cardPrice && (cardPrice.textContent = Number(svc.price).toLocaleString('ru-RU'));
    cardDescription && (cardDescription.textContent = svc.description);
  }

  function init() {
    if (leftElements.length > 0) {
      const firstEl = leftElements[0];
      firstEl.classList.add('active');
      const firstId = Number(firstEl.getAttribute('id'));
      const firstSvc = services.find(s => s.id === firstId);
      if (firstSvc) {
        showSvc(firstSvc);
      }
    }
  }

  // запуск после загрузки
  document.addEventListener('DOMContentLoaded', init);

  // Остальная часть вашего кода (клики по элементам слева, сортировки и т.д.)
  // Пример: привязка кликов по элементам слева
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

})();