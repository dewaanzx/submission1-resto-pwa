class FooterRestaurant extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
  <!-- On Footer -->
  <section class="ft-social-media">
    <ul class="ft-social-media-list">
      <li><a href="mailto:dewabandis11@student.uns.ac.id"><i class="fa fa-envelope"></i></li>
      <li><a href="https://www.instagram.com/dewahm/?hl=id"><i class="fa fa-instagram"></i></a></li>
      <li><a href="https://twitter.com/dewaanzx"><i class="fa fa-twitter"></i></a></li>
    </ul>
    <ul>
      <li class="copyright">Copyright © 2023 - Svarga Restaurant by Dewa Ahmad Nur Saputra</li>
    </ul>
  </section>
      `;
    }
  }
  
  customElements.define("restaurant-footer", FooterRestaurant);
  