class NavbarRestaurant extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <nav>
          <div class="container-flex">
            <div class="brand">
            <img class="logo" src="images/svarga.png">
            </div>
            <div class="dropdown">
              <div class="icon1"></div>
              <div class="icon2"></div>
              <div class="icon3"></div>
            </div>
            <div class="on-right"></div>
            <ul class="right">
              <li><a href="index.html">Home <span class="material-icons-outlined"> home </span></a></li>
              <li><a href="#home">Favorite <span class="material-icons-outlined"> grade </span></a></li>
              <li><a href="https://twitter.com/dewaanzx">About Us <span class="material-icons-outlined"> contacts </span></a></li>
            </ul>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define("restaurant-navbar", NavbarRestaurant);
  