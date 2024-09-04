(() => {
  if (!window.Reveal) {
    // Flatten sections. Otherwise ScrollSpy gets super confused.
    // const contentDiv = document.querySelector('.specs-content');
    // const sections = document.querySelectorAll('.specs-content > section section');
    // sections.forEach((section) => {
    //   contentDiv.insertAdjacentElement('beforeend', section);
    // });

    new bootstrap.ScrollSpy(document.body, {
      target: '#localtoc',
      offset: -20,
      method: 'position',
    });
  }
})();
