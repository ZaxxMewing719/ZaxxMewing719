const members = [
  { name: 'ZaxxMewing', image: 'https://via.placeholder.com/80' },
  { name: 'Irsan', image: 'https://via.placeholder.com/80' },
  { name: 'Skay', image: 'https://via.placeholder.com/80' },
  { name: 'Hamz', image: 'https://via.placeholder.com/80' },
  { name: 'Rafa', image: 'https://via.placeholder.com/80' },
  { name: 'SandiAja✅', image: 'https://via.placeholder.com/80' },
  { name: 'Jacquel', image: 'https://via.placeholder.com/80' },
  { name: 'Wilky', image: 'https://via.placeholder.com/80' },
  { name: 'Cecep', image: 'https://via.placeholder.com/80' },
  { name: 'RafaelW', image: 'https://via.placeholder.com/80' }
];

document.addEventListener('DOMContentLoaded', () => {
  const memberList = document.getElementById('memberList');
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');

  function displayMembers(filter = '') {
    memberList.innerHTML = '';
    const filtered = members.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
      noResults.style.display = 'block';
      return;
    } else {
      noResults.style.display = 'none';
    }

    filtered.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');
      memberDiv.style.transition = 'transform 0.3s';
      memberDiv.addEventListener('mouseenter', () => {
        memberDiv.style.transform = 'scale(1.05)';
      });
      memberDiv.addEventListener('mouseleave', () => {
        memberDiv.style.transform = 'scale(1)';
      });

      const img = document.createElement('img');
      img.src = member.image;
      img.alt = member.name;

      const name = document.createElement('div');
      name.classList.add('member-name');
      name.textContent = member.name;

      memberDiv.appendChild(img);
      memberDiv.appendChild(name);
      memberList.appendChild(memberDiv);
    });
  }

  // Tampilkan semua saat awal
  displayMembers();

  // Cari saat mengetik
  searchInput.addEventListener('input', () => {
    displayMembers(searchInput.value);
  });
});