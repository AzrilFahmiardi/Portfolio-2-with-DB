window.addEventListener("load", function () {
  const CPlusLogo = document.getElementById("lan1");
  const jsLogo = document.getElementById("lan2");
  const pythonLogo = document.getElementById("lan3");
  const nodeLogo = document.getElementById("lan4");

  nodeLogo.addEventListener("mouseover", function () {
    this.setAttribute("src", "assets/nodejs.png");
  });
  nodeLogo.addEventListener("mouseout", function () {
    this.setAttribute("src", "assets/nodejs_BW.png");
  });
  jsLogo.addEventListener("mouseout", function () {
    this.setAttribute("src", "assets/js_BW.png");
  });
  jsLogo.addEventListener("mouseover", function () {
    this.setAttribute("src", "assets/js.png");
  });

  pythonLogo.addEventListener("mouseout", function () {
    this.setAttribute("src", "assets/python_BW.png");
  });
  pythonLogo.addEventListener("mouseover", function () {
    this.setAttribute("src", "assets/python.png");
  });
  CPlusLogo.addEventListener("mouseover", function () {
    this.setAttribute("src", "assets/c++.png");
  });

  CPlusLogo.addEventListener("mouseout", function () {
    this.setAttribute("src", "assets/c++_BW.png");
  });

  const slides = document.querySelectorAll(".slide");
  const btns = document.querySelectorAll(".btn");

  let currentSlide = 1;

  let addActive = function (index) {
    slides.forEach(function (slide) {
      slide.classList.remove("active");

      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
    });

    slides[index].classList.add("active");
    btns[index].classList.add("active");
  };

  btns.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      addActive(i);
      currentSlide = i;
    });
  });

  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }

      repeater();
    }, 3700);
  };
  repeater();

  popNavIcon = document.querySelectorAll(".icon-nav");
  let iconIndex = 1;
  navLink = document.querySelector(".nav-list");
  linkButton = document.querySelectorAll(".nav-list li");
  profileSection = document.getElementById("profile");
  logo = document.querySelector(".logo");
  header = document.querySelector("header");

  popNavIcon.forEach(function (icon) {
    icon.addEventListener("click", function () {
      navLink.style.display = "block";
      logo.style.display = "block";

      [...popNavIcon].forEach(function (activepop) {
        activepop.classList.remove("active-pop");
      });
      console.log(iconIndex);
      popNavIcon[iconIndex].classList.add("active-pop");
      iconIndex++;
      if (iconIndex > 1) {
        iconIndex = 0;
      }
      if (iconIndex == 1) {
        navLink.style.display = "none";
        logo.style.display = "none";
      }
      linkButton.forEach(function (button) {
        button.addEventListener("click", function () {
          header.style.background = "none";
          navLink.style.display = "none";
          logo.style.display = "none";
          iconIndex = 0;
          [...popNavIcon].forEach(function (activepop) {
            activepop.classList.remove("active-pop");
          });
          console.log(iconIndex);
          popNavIcon[iconIndex].classList.add("active-pop");
          iconIndex++;
        });
        if (iconIndex == 0) {
          header.style.background = "#1e4b4d";
        } else {
          header.style.background = "none";
        }
      });
    });
  });

  submitButton = document.getElementById("message-form");
  submitButton.addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log("tes");
    const respon = makeRespons();
    document.body.append(respon);

    close = document.querySelector(".close-respon");
    close.addEventListener("click", function () {
      document.body.removeChild(respon);
    });

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      let url = "/submit";
      let method = "post";

      console.log(`Submitting data: ${JSON.stringify({ name, email, message })}`);

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      console.log(`Response: ${response.status}`); // Debug
      this.document.getElementById("message-form").reset();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  });

  function makeRespons() {
    const img = document.createElement("img");
    img.src = "assets/hutao.png";

    const p = document.createElement("p");
    p.innerHTML = "Pesan anda terkirim !";

    const responButton = document.createElement("button");
    responButton.textContent = "OKE";
    responButton.classList.add("close-respon");

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");
    textWrapper.append(img, p, responButton);

    const responWrapper = document.createElement("div");
    responWrapper.classList.add("respon-wrapper");
    responWrapper.append(textWrapper);

    return responWrapper;
  }
});
