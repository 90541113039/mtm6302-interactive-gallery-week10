document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'images/1.jpg', hd: 'images/hd/1.jpg', caption: 'Puppy 1' },
        { src: 'images/2.jpeg', hd: 'images/hd/2.jpeg', caption: 'Puppy 2' },
        { src: 'images/3.jpg', hd: 'images/hd/3.jpg', caption: 'Puppy 3' },
        { src: 'images/4.jpg', hd: 'images/hd/4.jpg', caption: 'Puppy 4' },
        { src: 'images/5.jpg', hd: 'images/hd/5.jpg', caption: 'Puppy 5' },
        { src: 'images/6.jpg', hd: 'images/hd/6.jpg', caption: 'Puppy 6' },
        { src: 'images/7.jpg', hd: 'images/hd/7.jpg', caption: 'Puppy 7' },
        { src: 'images/8.jpg', hd: 'images/hd/8.jpg', caption: 'Puppy 8' },
        { src: 'images/9.jpg', hd: 'images/hd/9.jpg', caption: 'Puppy 9' },
        { src: 'images/10.jpg', hd: 'images/hd/10.jpg', caption: 'Puppy 10' },
        { src: 'images/11.jpg', hd: 'images/hd/11.jpg', caption: 'Puppy 11' },
        { src: 'images/12.jpg', hd: 'images/hd/12.jpg', caption: 'Puppy 12' },
        { src: 'images/13.jpg', hd: 'images/hd/13.jpg', caption: 'Puppy 13' },
        { src: 'images/14.jpg', hd: 'images/hd/14.jpg', caption: 'Puppy 14' },
        { src: 'images/15.jpg', hd: 'images/hd/15.jpg', caption: 'Puppy 15' },
        { src: 'images/16.jpg', hd: 'images/hd/16.jpg', caption: 'Puppy 16' },
        { src: 'images/17.jpg', hd: 'images/hd/17.jpg', caption: 'Puppy 17' },
        { src: 'images/18.jpg', hd: 'images/hd/18.jpg', caption: 'Puppy 18' },
        { src: 'images/19.jpg', hd: 'images/hd/19.jpg', caption: 'Puppy 19' },
        { src: 'images/20.jpg', hd: 'images/hd/20.jpg', caption: 'Puppy 20' }
    ];

    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        img.dataset.hd = image.hd;
        img.dataset.caption = image.caption;
        gallery.appendChild(img);
    });

    gallery.addEventListener('click', event => {
        const target = event.target;
        if (target.tagName === 'IMG' && !target.classList.contains('hd')) {
            const hdImage = document.createElement('img');
            hdImage.src = target.dataset.hd;
            hdImage.classList.add('hd');
            document.body.appendChild(hdImage);

            const caption = document.createElement('div');
            caption.textContent = target.dataset.caption;
            caption.classList.add('caption');
            document.body.appendChild(caption);

            hdImage.addEventListener('click', () => {
                hdImage.remove();
                caption.remove();
            });

            hdImage.style.display = 'block';
            caption.style.display = 'block';
        }
    });
});
