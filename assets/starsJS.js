var after, count, create, stars, total;

after = function(ms, cb) {
  return setTimeout(cb, ms);
};

stars = document.querySelector('#stars');

create = function(index, total) {
  var scale, star;
  
  star = document.createElement('div');
  star.className = 'star';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  scale = index / total;
  star.style.Transform = `scale(${scale})`;
  
  after(index * 10, function() {
    return stars.appendChild(star);
  });
  
  return star;
};

count = 0;

total = 100;

while (count++ < total) {
  create(count, total);
}