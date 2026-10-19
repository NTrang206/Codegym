// ==========================================================================
// KIDCARTON - XỬ LÝ TƯƠNG TÁC XEM PHIM HOẠT HÌNH
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khai báo các phần tử DOM
  const videoItems = document.querySelectorAll('.video-item');
  const mainIframe = document.getElementById('mainIframe');
  const mainVideoTag = document.getElementById('mainVideoTag');
  const videoSource = document.getElementById('videoSource');
  const youtubePlayerBox = document.getElementById('youtubePlayerBox');
  const html5PlayerBox = document.getElementById('html5PlayerBox');
  const btnSourceYouTube = document.getElementById('btnSourceYouTube');
  const btnSourceHtml5 = document.getElementById('btnSourceHtml5');

  const currentVideoTitle = document.getElementById('currentVideoTitle');
  const currentViews = document.getElementById('currentViews');
  const currentTime = document.getElementById('currentTime');
  const currentDesc = document.getElementById('currentDesc');

  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const sortSelect = document.getElementById('sortSelect');
  const videoPlaylist = document.getElementById('videoPlaylist');
  const videoCount = document.getElementById('videoCount');

  const likeBtn = document.getElementById('likeBtn');
  const likeCount = document.getElementById('likeCount');
  let isLiked = false;

  // 2. Chuyển đổi giữa <iframe> YouTube và thẻ <video> HTML5
  btnSourceYouTube.addEventListener('click', () => {
    btnSourceYouTube.classList.add('active');
    btnSourceHtml5.classList.remove('active');
    youtubePlayerBox.style.display = 'block';
    html5PlayerBox.style.display = 'none';
    mainVideoTag.pause();
  });

  btnSourceHtml5.addEventListener('click', () => {
    btnSourceHtml5.classList.add('active');
    btnSourceYouTube.classList.remove('active');
    youtubePlayerBox.style.display = 'none';
    html5PlayerBox.style.display = 'block';
  });

  // 3. Xử lý khi click vào từng video trong danh sách (Left Content)
  videoItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Đổi trạng thái active
      videoItems.forEach((v) => v.classList.remove('active'));
      item.classList.add('active');

      const type = item.getAttribute('data-type');
      const src = item.getAttribute('data-src');
      const title = item.getAttribute('data-title');
      const views = item.getAttribute('data-views');
      const time = item.getAttribute('data-time');
      const desc = item.getAttribute('data-desc');

      // Cập nhật thông tin chi tiết
      currentVideoTitle.textContent = title;
      currentViews.textContent = `👁️ ${views} lượt xem`;
      currentTime.textContent = `Thời lượng: ${time}`;
      currentDesc.textContent = desc;

      // Cập nhật nguồn phát tương ứng
      if (type === 'video') {
        videoSource.src = src;
        mainVideoTag.load();
        // Tự động chuyển sang tab HTML5 video
        btnSourceHtml5.click();
        mainVideoTag.play().catch(() => {});
      } else {
        mainIframe.src = src;
        // Tự động chuyển sang tab YouTube <iframe>
        btnSourceYouTube.click();
      }

      // Cuộn nhẹ lên đầu trang trên thiết bị di động
      if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // 4. Tìm kiếm video theo tên trong danh sách
  function filterVideos() {
    const keyword = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    videoItems.forEach((item) => {
      const title = item.getAttribute('data-title').toLowerCase();
      if (title.includes(keyword)) {
        item.style.display = 'flex';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    videoCount.textContent = `${visibleCount} phim`;
  }

  searchInput.addEventListener('input', filterVideos);
  searchBtn.addEventListener('click', filterVideos);

  // 5. Sắp xếp danh sách video
  sortSelect.addEventListener('change', () => {
    const criteria = sortSelect.value;
    const itemsArray = Array.from(videoItems);

    itemsArray.sort((a, b) => {
      if (criteria === 'views') {
        const viewsA = parseInt(a.getAttribute('data-views').replace(/\D/g, '')) || 0;
        const viewsB = parseInt(b.getAttribute('data-views').replace(/\D/g, '')) || 0;
        return viewsB - viewsA;
      } else {
        return parseInt(a.getAttribute('data-id')) - parseInt(b.getAttribute('data-id'));
      }
    });

    itemsArray.forEach((item) => videoPlaylist.appendChild(item));
  });

  // 6. Nút thích (Like) tương tác
  likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;
    if (isLiked) {
      likeBtn.style.backgroundColor = '#e11d48';
      likeBtn.style.borderColor = '#e11d48';
      likeBtn.style.color = '#ffffff';
      likeCount.textContent = '15.5K';
    } else {
      likeBtn.style.backgroundColor = '#0f172a';
      likeBtn.style.borderColor = '#334155';
      likeBtn.style.color = '#e2e8f0';
      likeCount.textContent = '15.4K';
    }
  });
});
