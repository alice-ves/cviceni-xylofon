const kameny = document.querySelectorAll('.kamen');

/*
kameny.forEach((kamen) => {
  kamen.addEventListener('click', (event) => {
    document.querySelector('h1').innerHTML = event.target.textContent;
  });
});
*/

kameny.forEach((kamen) =>
  kamen.addEventListener('click', (event) => {
    const SelectedKamen = event.target.textContent;

    const Heading = document.querySelector('h1');
    Heading.innerHTML = SelectedKamen;

    const zvuk = new Audio(`tony/${SelectedKamen}.mp3`);
    zvuk.play();
  }),
);
