
function scrollToPlans() {
  document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
}

const observers = document.querySelectorAll('.fade-in');
const options = {
  threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, options);

observers.forEach(el => observer.observe(el));
