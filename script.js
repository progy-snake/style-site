// Знаходимо елементи форми
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

// Додаємо подію на відправлення форми
commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  // Отримуємо значення з форми
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  // Створюємо новий елемент для коментаря
  const commentItem = document.createElement('div');
  commentItem.innerHTML = `<strong>${name}:</strong> ${comment}`;

  // Додаємо новий коментар до списку
  commentList.appendChild(commentItem);

  // Очищаємо форму
  commentForm.reset();
});
